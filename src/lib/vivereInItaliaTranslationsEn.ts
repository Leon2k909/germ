/**
 * English for the Vivere in Italia course cards and headings.
 *
 * Keyed on the ITALIAN source text exactly as it appears in
 * vivereInItaliaCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but this table arrives
 * complete: every string the reader can tap is here, quizzes included.
 *
 * THIRD OF THE FOUR country courses English could not read, after Russian
 * and Polish. The order was by how much the missing table actually cost a
 * reader: Cyrillic leaves nothing to work with, Polish vocabulary leaves
 * little, and Italian at least offers a Latinate guess. A guess is not
 * reading, which is why it is here too.
 *
 * WHAT STAYS ITALIAN. The institutions and documents a learner meets on a
 * form or a sign keep their own names, with the sense beside them where it
 * is not obvious: Sejm has no equivalent here, but codice fiscale, questura,
 * prefettura, INPS, INAIL, IRPEF, CCNL, TFR, SPID, maturità, liceo and
 * partita IVA all do the same work. So do the words for things with no
 * English name — Ferragosto, aperitivo, passeggiata, piazza, primo and
 * secondo, campanilismo — explained where they first appear.
 *
 * TWO MNEMONICS ONLY WORK IN ITALIAN and are kept in it. The four A's of
 * Italian export are abbigliamento, arredamento, automazione and alimentare:
 * translated, they stop being four A's. The card gives the English in
 * brackets and leaves the Italian standing.
 *
 * The course NAME is not here: it is an interface string that already goes
 * through the i18n tables, and a second translation of it would fight the
 * first. The tagline underneath it is course text, so it belongs here.
 */
export const VIVERE_IN_ITALIA_EN: Record<string, string> = {
  // course
  "Storia, ordinamento e vita quotidiana — come funziona il paese.":
    "History, institutions and everyday life — how the country works.",
  // chapter
  "Simboli e principi fondamentali": "Symbols and founding principles",
  // it-simboli
  "Simboli nazionali": "National symbols",
  "Perché si comincia da qui: i simboli si incontrano tutti i giorni — sul municipio, sul passaporto, sulla maglia della nazionale — e sono quindi la porta più facile per entrare in tutto il resto.":
    "Why we start here: the symbols turn up every day — on the town hall, in a passport, on the national team's shirt — and so they are the easiest door into everything else.",
  "La bandiera": "The flag",
  "Il **tricolore** ha tre bande verticali di uguali dimensioni: **verde** dalla parte dell'asta, **bianco** al centro, **rosso** al battente. Lo descrive l'**articolo 12** della Costituzione, l'ultimo dei principi fondamentali — il che dice già qualcosa: la bandiera non è un dettaglio decorativo, sta fra le cose che fondano la Repubblica.":
    "The **tricolore** has three vertical bands of equal size: **green** at the hoist, **white** in the middle, **red** at the fly. It is described in **article 12** of the Constitution, the last of the founding principles — which already says something: the flag is not a decorative detail, it sits among the things that found the Republic.",
  "Nacque a **Reggio Emilia il 7 gennaio 1797**, quando la Repubblica Cispadana lo adottò come proprio vessillo. È la bandiera nazionale più antica d'Europa dopo quelle di Danimarca e Paesi Bassi, e il 7 gennaio si celebra la **Festa del Tricolore**.":
    "It was born in **Reggio Emilia on 7 January 1797**, when the Cispadane Republic adopted it as its own banner. It is the oldest national flag in Europe after those of Denmark and the Netherlands, and 7 January is **Tricolour Day**.",
  "Ai colori non è assegnato per legge alcun significato. Le spiegazioni che si sentono — il verde delle pianure, il bianco delle nevi alpine, il rosso del sangue versato — sono letture affettive nate dopo, non una regola scritta da qualche parte.":
    "No meaning is assigned to the colours by law. The explanations you hear — green for the plains, white for the Alpine snows, red for the blood shed — are affectionate readings that came later, not a rule written down anywhere.",
  "L'emblema": "The emblem",
  "L'Italia non ha uno stemma di famiglia regnante: ha un **emblema**, scelto per concorso pubblico e in vigore dal **5 maggio 1948**. Lo disegnò Paolo Paschetto. Non è uno scudo, ed è la differenza che conta: non discende da una dinastia, è stato inventato da una repubblica appena nata per rappresentarsi.":
    "Italy has no coat of arms of a ruling family: it has an **emblem**, chosen by public competition and in force since **5 May 1948**. Paolo Paschetto designed it. It is not a shield, and that is the difference that counts: it does not descend from a dynasty, it was invented by a newly born republic to represent itself.",
  "La stella": "The star",
  "La stella d'Italia, il simbolo più antico del paese: accompagna l'immagine dell'Italia da prima dell'Unità.":
    "The star of Italy, the country's oldest symbol: it has accompanied the image of Italy since before unification.",
  "La ruota dentata": "The cogwheel",
  "L'ingranaggio richiama il lavoro, su cui l'articolo 1 fonda la Repubblica.":
    "The gear stands for labour, on which article 1 founds the Republic.",
  "L'olivo e la quercia": "The olive and the oak",
  "L'olivo per la pace, la quercia per la forza e la dignità. Sono due alberi che crescono in tutta la penisola.":
    "The olive for peace, the oak for strength and dignity. Two trees that grow the length of the peninsula.",
  "Da quale parte della bandiera si trova il verde?": "On which side of the flag is the green?",
  "Al centro": "In the middle",
  "Dalla parte dell'asta": "At the hoist",
  "Dalla parte del battente": "At the fly",
  "Cambia a seconda della regione": "It changes from region to region",
  "Verde all'asta, bianco al centro, rosso al battente. L'ordine non è libero: è fissato dall'articolo 12 della Costituzione, e una bandiera con i colori invertiti è semplicemente sbagliata.":
    "Green at the hoist, white in the middle, red at the fly. The order is not free: it is fixed by article 12 of the Constitution, and a flag with the colours reversed is simply wrong.",
  "L'inno": "The anthem",
  "L'inno nazionale si chiama ufficialmente **Il Canto degli Italiani**, ma tutti lo conoscono come **Inno di Mameli** oppure dal suo primo verso, **Fratelli d'Italia**. Il testo è di **Goffredo Mameli**, che lo scrisse nel **1847** a vent'anni; la musica è di **Michele Novaro**. Mameli morì due anni dopo, a ventun anni, difendendo la Repubblica Romana.":
    "The national anthem is officially called **Il Canto degli Italiani**, but everyone knows it as the **Inno di Mameli** or by its opening line, **Fratelli d'Italia**. The words are by **Goffredo Mameli**, who wrote them in **1847** at the age of twenty; the music is by **Michele Novaro**. Mameli died two years later, at twenty-one, defending the Roman Republic.",
  "Curiosamente l'inno è stato per settant'anni un inno di fatto: adottato in via provvisoria nel **1946**, è diventato inno ufficiale per legge soltanto il **4 dicembre 2017**. In Italia le cose provvisorie durano.":
    "Oddly, for seventy years the anthem was one in fact only: adopted provisionally in **1946**, it became the official anthem by law only on **4 December 2017**. In Italy, provisional things last.",
  "Chi scrisse il testo dell'inno nazionale?": "Who wrote the words of the national anthem?",
  "Michele Novaro": "Michele Novaro",
  "Giuseppe Verdi": "Giuseppe Verdi",
  "Goffredo Mameli": "Goffredo Mameli",
  "Giuseppe Mazzini": "Giuseppe Mazzini",
  "Il testo è di Goffredo Mameli, la musica di Michele Novaro: per questo si dice Inno di Mameli e non Inno di Novaro. Verdi non c'entra, anche se il coro del Nabucco viene spesso proposto come alternativa.":
    "The words are Goffredo Mameli's, the music Michele Novaro's: hence the Inno di Mameli and not the Inno di Novaro. Verdi has nothing to do with it, even if the chorus from Nabucco is often put forward as an alternative.",
  "Le date della Repubblica": "The dates of the Republic",
  "2 giugno": "2 June",
  "Festa della Repubblica. Ricorda il referendum del 2 e 3 giugno 1946, con cui gli italiani scelsero la repubblica al posto della monarchia.":
    "Republic Day. It marks the referendum of 2 and 3 June 1946, in which Italians chose a republic over the monarchy.",
  "25 aprile": "25 April",
  "Anniversario della Liberazione, la fine dell'occupazione nazifascista nel 1945.":
    "The anniversary of the Liberation, the end of the Nazi-Fascist occupation in 1945.",
  "4 novembre": "4 November",
  "Giorno dell'Unità nazionale e Festa delle Forze armate: l'armistizio del 1918. Non è più giorno festivo dal 1977 e si celebra la prima domenica di novembre.":
    "National Unity and Armed Forces Day: the armistice of 1918. It has not been a public holiday since 1977 and is marked on the first Sunday in November.",
  "Il **2 giugno** è la festa nazionale vera e propria. A Roma si svolgono la deposizione della corona all'Altare della Patria e la parata lungo via dei Fori Imperiali, con il sorvolo delle Frecce Tricolori che lasciano nel cielo le tre bande.":
    "**2 June** is the national day proper. In Rome a wreath is laid at the Altare della Patria and a parade goes down via dei Fori Imperiali, with a flypast by the Frecce Tricolori leaving the three bands in the sky.",
  "Che cosa si ricorda il 2 giugno?": "What is remembered on 2 June?",
  "La proclamazione del Regno d'Italia nel 1861": "The proclamation of the Kingdom of Italy in 1861",
  "Il referendum del 1946 e la nascita della Repubblica":
    "The referendum of 1946 and the birth of the Republic",
  "L'entrata in vigore della Costituzione": "The Constitution coming into force",
  "La fine della Seconda guerra mondiale": "The end of the Second World War",
  "Il 2 giugno 1946 gli italiani votarono per la repubblica contro la monarchia, e nello stesso giorno elessero l'Assemblea costituente. Il Regno era stato proclamato l'11 marzo 1861, la Costituzione entrò in vigore il 1º gennaio 1948: tre date diverse che è facile confondere.":
    "On 2 June 1946 Italians voted for a republic against the monarchy, and on the same day elected the Constituent Assembly. The Kingdom had been proclaimed on 11 March 1861 and the Constitution came into force on 1 January 1948: three different dates that are easy to confuse.",
  "Da non confondere: il **7 gennaio** è la Festa del Tricolore, cioè della bandiera; il **2 giugno** è la Festa della Repubblica. Solo la seconda è giorno festivo.":
    "Not to be confused: **7 January** is Tricolour Day, the flag's day; **2 June** is Republic Day. Only the second is a public holiday.",
  // it-costituzione
  "La Costituzione e i principi fondamentali": "The Constitution and the founding principles",
  "Perché conta: quasi tutto quello che verrà dopo — il Parlamento, le regioni, i diritti, perfino la bandiera — è scritto in un unico testo del 1947. Chi lo conosce a grandi linee ha già la mappa del resto del corso.":
    "Why this matters: almost everything that follows — Parliament, the regions, rights, even the flag — is written in one text from 1947. Anyone who knows it in outline already has the map of the rest of the course.",
  "Come è nata": "How it came about",
  "Il **2 giugno 1946**, nello stesso giorno del referendum, gli italiani elessero l'**Assemblea costituente**. Fu la prima consultazione a suffragio davvero universale della storia italiana: **votarono per la prima volta le donne**. L'Assemblea lavorò un anno e mezzo e approvò il testo il **22 dicembre 1947**.":
    "On **2 June 1946**, the same day as the referendum, Italians elected the **Constituent Assembly**. It was the first vote in Italian history on a truly universal franchise: **women voted for the first time**. The Assembly worked for a year and a half and approved the text on **22 December 1947**.",
  "La Costituzione fu promulgata il **27 dicembre 1947** dal capo provvisorio dello Stato **Enrico De Nicola** ed entrò in vigore il **1º gennaio 1948**. Fu scritta da un'assemblea in cui sedevano insieme democratici cristiani, comunisti, socialisti, liberali e azionisti: è un testo di compromesso, e si vede.":
    "The Constitution was promulgated on **27 December 1947** by the provisional head of state **Enrico De Nicola** and came into force on **1 January 1948**. It was written by an assembly in which Christian Democrats, Communists, Socialists, Liberals and Actionists sat together: it is a text of compromise, and it shows.",
  "Quando è entrata in vigore la Costituzione?": "When did the Constitution come into force?",
  "Il 2 giugno 1946": "On 2 June 1946",
  "Il 22 dicembre 1947": "On 22 December 1947",
  "Il 1º gennaio 1948": "On 1 January 1948",
  "Il 25 aprile 1945": "On 25 April 1945",
  "Approvata il 22 dicembre 1947, promulgata il 27 dicembre, entrata in vigore il 1º gennaio 1948. Le tre date sono vicine ma distinte: approvazione, firma, efficacia.":
    "Approved on 22 December 1947, promulgated on 27 December, in force from 1 January 1948. The three dates are close but distinct: approval, signature, effect.",
  "Come è fatta": "How it is built",
  "Il testo ha **139 articoli** più diciotto disposizioni transitorie e finali, ed è diviso in tre parti disuguali.":
    "The text has **139 articles** plus eighteen transitional and final provisions, and it is divided into three unequal parts.",
  "Principi fondamentali": "Founding principles",
  "Articoli 1–12. Dodici articoli che dicono che cosa è la Repubblica prima di dire come funziona.":
    "Articles 1–12. Twelve articles that say what the Republic is before saying how it works.",
  "Parte I · Diritti e doveri dei cittadini": "Part I · Rights and duties of citizens",
  "Articoli 13–54. Le libertà, la famiglia, la salute, la scuola, il lavoro, il voto, le tasse.":
    "Articles 13–54. Liberties, the family, health, school, work, the vote, taxes.",
  "Parte II · Ordinamento della Repubblica": "Part II · The organisation of the Republic",
  "Articoli 55–139. Parlamento, Governo, Presidente, magistratura, regioni. È il capitolo 2 di questo corso.":
    "Articles 55–139. Parliament, government, the President, the judiciary, the regions. That is chapter 2 of this course.",
  "I primi articoli": "The opening articles",
  "L'**articolo 1** stabilisce che l'Italia è una Repubblica democratica **fondata sul lavoro** e che la sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione. Quella formula sul lavoro fu il compromesso trovato fra chi voleva una repubblica dei lavoratori e chi voleva una formula più generale.":
    "**Article 1** lays down that Italy is a democratic Republic **founded on labour** and that sovereignty belongs to the people, who exercise it in the forms and within the limits of the Constitution. That formula about labour was the compromise found between those who wanted a republic of workers and those who wanted something more general.",
  "L'**articolo 3** enuncia due uguaglianze, non una. La prima è **formale**: tutti sono uguali davanti alla legge senza distinzione di sesso, razza, lingua, religione, opinioni politiche, condizioni personali e sociali. La seconda è **sostanziale**: è compito della Repubblica rimuovere gli ostacoli che di fatto impediscono quell'uguaglianza. Il secondo comma è quello che giustifica le politiche sociali.":
    "**Article 3** sets out two equalities, not one. The first is **formal**: all are equal before the law without distinction of sex, race, language, religion, political opinion or personal and social conditions. The second is **substantive**: it is the Republic's task to remove the obstacles that in fact prevent that equality. The second paragraph is the one that justifies social policy.",
  "L'**articolo 11** contiene il verbo più discusso del testo: l'Italia **ripudia** la guerra come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali. Lo stesso articolo consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace: su questa frase poggia l'adesione italiana all'Unione europea.":
    "**Article 11** contains the most discussed verb in the text: Italy **repudiates** war as an instrument of offence against the freedom of other peoples and as a means of settling international disputes. The same article allows the limitations of sovereignty needed for an order that secures peace: Italy's membership of the European Union rests on that sentence.",
  "Quanti sono gli articoli dei principi fondamentali?":
    "How many articles make up the founding principles?",
  "Sette": "Seven",
  "Dodici": "Twelve",
  "Ventuno": "Twenty-one",
  "Centotrentanove": "One hundred and thirty-nine",
  "I principi fondamentali sono gli articoli da 1 a 12, prima ancora della Parte I. Centotrentanove è il totale degli articoli della Costituzione.":
    "The founding principles are articles 1 to 12, before Part I even begins. One hundred and thirty-nine is the total number of articles in the Constitution.",
  "Una costituzione rigida": "A rigid constitution",
  "La Costituzione non si cambia con una legge ordinaria. L'**articolo 138** impone una procedura aggravata: ciascuna Camera deve approvare due volte, a distanza di almeno tre mesi, e nella seconda votazione serve la maggioranza assoluta. Se non si raggiungono i due terzi, cinquecentomila elettori, cinque consigli regionali o un quinto dei parlamentari possono chiedere un **referendum confermativo**.":
    "The Constitution cannot be changed by an ordinary law. **Article 138** imposes a heavier procedure: each chamber must approve twice, at least three months apart, and the second vote needs an absolute majority. If two thirds are not reached, five hundred thousand voters, five regional councils or a fifth of the members of parliament can call a **confirmatory referendum**.",
  "L'**articolo 139** mette un limite ancora più netto: la **forma repubblicana non può essere oggetto di revisione costituzionale**. Non esiste procedura, per quanto aggravata, che possa riportare la monarchia.":
    "**Article 139** sets an even sharper limit: the **republican form cannot be the subject of constitutional revision**. There is no procedure, however heavy, that could bring back the monarchy.",
  "Che cosa non può essere modificato in nessun modo?": "What cannot be changed in any way?",
  "Il numero dei parlamentari": "The number of members of parliament",
  "La forma repubblicana": "The republican form",
  "La durata del mandato presidenziale": "The length of the presidential term",
  "L'articolo 139 sottrae la forma repubblicana a qualsiasi revisione. Tutto il resto — parlamentari, mandato, perfino l'articolo 12 sulla bandiera — è modificabile con la procedura dell'articolo 138.":
    "Article 139 puts the republican form beyond any revision. Everything else — members of parliament, the term of office, even article 12 on the flag — can be changed by the procedure of article 138.",
  "Il referendum dell'articolo 138 è **confermativo** e non ha quorum: vale qualunque sia l'affluenza. È cosa diversa dal referendum **abrogativo** dell'articolo 75, che invece è valido solo se vota la maggioranza degli aventi diritto.":
    "The referendum of article 138 is **confirmatory** and has no quorum: it counts whatever the turnout. It is a different thing from the **abrogative** referendum of article 75, which is valid only if a majority of those entitled vote.",
  // it-diritti-doveri
  "Diritti e doveri dei cittadini": "Rights and duties of citizens",
  "Perché conta: la Parte I non elenca soltanto quello che si può fare. Elenca anche quattro doveri, e sono quelli che trasformano un abitante in un cittadino.":
    "Why this matters: Part I does not only list what you may do. It also lists four duties, and those are what turn an inhabitant into a citizen.",
  "Quattro gruppi di rapporti": "Four groups of relations",
  "La Parte I va dall'articolo 13 al 54 ed è divisa in quattro titoli, ognuno dei quali guarda la persona da un lato diverso: **rapporti civili**, **etico-sociali**, **economici** e **politici**.":
    "Part I runs from article 13 to article 54 and is divided into four titles, each looking at the person from a different side: **civil**, **ethical and social**, **economic** and **political** relations.",
  "Civili · 13–28": "Civil · 13–28",
  "Libertà personale, domicilio, corrispondenza, circolazione, riunione, associazione, religione, pensiero, difesa in giudizio.":
    "Personal liberty, the home, correspondence, movement, assembly, association, religion, thought, defence in court.",
  "Etico-sociali · 29–34": "Ethical and social · 29–34",
  "Famiglia, salute, scuola. Qui stanno il diritto alle cure e l'istruzione obbligatoria.":
    "Family, health, school. The right to care and compulsory education sit here.",
  "Economici · 35–47": "Economic · 35–47",
  "Lavoro, retribuzione, sindacati, sciopero, impresa, proprietà, risparmio.":
    "Work, pay, trade unions, strikes, enterprise, property, savings.",
  "Politici · 48–54": "Political · 48–54",
  "Voto, partiti, petizioni, accesso agli uffici pubblici, difesa della patria, tributi, fedeltà alla Repubblica.":
    "The vote, parties, petitions, access to public office, the defence of the country, taxes, loyalty to the Republic.",
  "Le libertà": "The liberties",
  "L'**articolo 13** dichiara inviolabile la libertà personale: nessuna detenzione o perquisizione se non per atto motivato dell'autorità giudiziaria. Se in casi eccezionali interviene la polizia, deve avvisare il giudice entro quarantotto ore, e il giudice ha altre quarantotto ore per convalidare. Passate le novantasei ore senza convalida, il provvedimento perde ogni effetto.":
    "**Article 13** declares personal liberty inviolable: no detention or search except by a reasoned act of the judicial authority. If in exceptional cases the police step in, they must inform the judge within forty-eight hours, and the judge has another forty-eight to confirm. Once ninety-six hours pass without confirmation, the measure loses all effect.",
  "L'**articolo 21** garantisce a tutti il diritto di manifestare liberamente il proprio pensiero con la parola, lo scritto e ogni altro mezzo di diffusione. La stampa non può essere soggetta ad autorizzazioni o censure: è una frase scritta da chi aveva appena vissuto vent'anni di giornali autorizzati.":
    "**Article 21** guarantees everyone the right to express their thought freely by speech, in writing and by any other means of communication. The press may not be subject to authorisation or censorship: a sentence written by people who had just lived through twenty years of authorised newspapers.",
  "Entro quanto tempo l'autorità giudiziaria deve essere avvisata di un fermo di polizia?":
    "Within what time must the judicial authority be informed of a police detention?",
  "Entro ventiquattro ore": "Within twenty-four hours",
  "Entro quarantotto ore": "Within forty-eight hours",
  "Entro una settimana": "Within a week",
  "Non è previsto alcun termine": "No time limit is set",
  "Quarantotto ore per l'avviso al giudice e altre quarantotto per la convalida. Se il termine passa senza convalida, il provvedimento è revocato e resta privo di effetto: il tempo qui non è una formalità, è la garanzia.":
    "Forty-eight hours to inform the judge and another forty-eight for confirmation. If the deadline passes without confirmation, the measure is revoked and has no effect: time here is not a formality, it is the guarantee.",
  "La pena e il processo": "Punishment and trial",
  "L'**articolo 27** contiene tre regole che stanno insieme: la responsabilità penale è **personale**, l'imputato **non è considerato colpevole** fino alla condanna definitiva, e le pene devono tendere alla **rieducazione** del condannato. Lo stesso articolo chiude con quattro parole: non è ammessa la pena di morte.":
    "**Article 27** holds three rules that belong together: criminal responsibility is **personal**, the accused is **not considered guilty** until final conviction, and punishment must aim at the **rehabilitation** of the convicted person. The same article closes with four words: the death penalty is not admitted.",
  "L'**articolo 24** garantisce a tutti il diritto di agire in giudizio e la difesa in ogni stato del procedimento; ai non abbienti lo Stato assicura i mezzi per agire e difendersi, ed è da qui che nasce il **patrocinio a spese dello Stato**.":
    "**Article 24** guarantees everyone the right to go to court and to a defence at every stage of proceedings; for those without means the State provides what they need to act and to defend themselves, and from this comes **legal aid at the State's expense**.",
  "I doveri": "The duties",
  // it-diritti-doveri
  "Il **voto** (articolo 48) è definito insieme diritto e **dovere civico**: non è sanzionato, ma la Costituzione lo chiama con quel nome di proposito. L'**articolo 52** definisce la difesa della patria un sacro dovere. L'**articolo 54** chiede a tutti fedeltà alla Repubblica e, a chi ricopre funzioni pubbliche, di adempierle con disciplina e onore.":
    "The **vote** (article 48) is defined both as a right and as a **civic duty**: it carries no penalty, but the Constitution calls it that on purpose. **Article 52** calls the defence of the country a sacred duty. **Article 54** asks everyone for loyalty to the Republic and asks those holding public office to carry it out with discipline and honour.",
  "L'**articolo 53** è il dovere che si incontra ogni anno: tutti concorrono alle spese pubbliche **in ragione della propria capacità contributiva**, e il sistema tributario è informato a criteri di **progressività**. Chi guadagna di più non paga solo di più: paga una quota maggiore. È il principio su cui poggiano gli scaglioni dell'IRPEF.":
    "**Article 53** is the duty you meet every year: everyone contributes to public spending **according to their ability to pay**, and the tax system follows criteria of **progressivity**. Someone who earns more does not merely pay more: they pay a larger share. It is the principle the income tax bands rest on.",
  "Che cosa significa che il sistema tributario è progressivo?":
    "What does it mean that the tax system is progressive?",
  "Che le tasse aumentano ogni anno": "That taxes go up every year",
  "Che chi ha un reddito più alto paga una quota proporzionalmente maggiore":
    "That someone with a higher income pays a proportionally larger share",
  "Che tutti pagano la stessa percentuale": "That everyone pays the same percentage",
  "Che si paga a rate": "That you pay in instalments",
  "Progressività significa che l'aliquota cresce con il reddito, non solo l'importo. Una tassa uguale in percentuale per tutti sarebbe proporzionale, non progressiva: l'articolo 53 chiede espressamente la seconda.":
    "Progressivity means the rate rises with income, not just the amount. A tax that was the same percentage for everyone would be proportional, not progressive: article 53 expressly asks for the second.",
  "Come definisce il voto la Costituzione?": "How does the Constitution define voting?",
  "Solo un diritto": "Only a right",
  "Un diritto e un dovere civico": "A right and a civic duty",
  "Un obbligo sanzionabile con una multa": "An obligation punishable by a fine",
  "Una facoltà riservata a chi paga le tasse": "A privilege reserved for taxpayers",
  "L'articolo 48 usa entrambe le parole: il voto è un diritto e il suo esercizio è un dovere civico. Dovere civico però non vuol dire obbligo sanzionato — chi non vota non paga nulla.":
    "Article 48 uses both words: the vote is a right and its exercise is a civic duty. Civic duty does not mean a penalised obligation, though — nobody who fails to vote pays anything.",
  "Molte di queste garanzie valgono per **tutti**, non solo per i cittadini: l'articolo 13 dice nessuno, l'articolo 21 dice tutti. I diritti riservati ai cittadini sono soprattutto quelli politici — il voto, l'accesso ai pubblici uffici.":
    "Many of these guarantees hold for **everyone**, not only for citizens: article 13 says nobody, article 21 says everyone. The rights reserved to citizens are mainly the political ones — the vote, access to public office.",
  // it-lingue
  "La lingua italiana e le minoranze linguistiche": "The Italian language and the linguistic minorities",
  "Perché conta: l'Italia è unita da centosessant'anni, ma la sua unità linguistica è molto più recente — ed è ancora incompleta, per legge e di proposito.":
    "Why this matters: Italy has been united for a hundred and sixty years, but its linguistic unity is far more recent — and it is still incomplete, by law and on purpose.",
  "Una lingua giovane": "A young language",
  "L'italiano standard non nasce da un parlato ma da una **lingua scritta**: il fiorentino letterario del Trecento di **Dante, Petrarca e Boccaccio**, scelto nel Cinquecento come modello per tutta la penisola. Per secoli è stata la lingua della scrittura mentre si parlava altro.":
    "Standard Italian does not come from a spoken language but from a **written** one: the literary Florentine of the fourteenth century, of **Dante, Petrarch and Boccaccio**, chosen in the sixteenth as the model for the whole peninsula. For centuries it was the language of writing while people spoke something else.",
  "Alla proclamazione del Regno, nel 1861, chi sapeva usare l'italiano era una piccola minoranza: la stima più citata, quella del linguista **Tullio De Mauro**, parla di poco più del due per cento della popolazione, e altri studiosi arrivano a percentuali più alte, comunque lontane dalla maggioranza. A unificare la lingua sono stati la scuola dell'obbligo, la leva militare, l'emigrazione interna e — negli anni Cinquanta e Sessanta — la televisione.":
    "When the Kingdom was proclaimed in 1861, those able to use Italian were a small minority: the most quoted estimate, by the linguist **Tullio De Mauro**, gives a little over two per cent of the population, and other scholars reach higher figures, all of them far from a majority. What unified the language was compulsory schooling, military service, internal migration and — in the fifties and sixties — television.",
  "L'**Accademia della Crusca**, fondata a Firenze nel **1583**, è la più antica accademia linguistica del mondo ancora attiva. Il suo nome viene dall'immagine della farina separata dalla crusca: separare le parole buone dalle altre.":
    "The **Accademia della Crusca**, founded in Florence in **1583**, is the oldest linguistic academy in the world still at work. Its name comes from the image of flour separated from the bran: separating the good words from the rest.",
  "Da quale parlata deriva l'italiano standard?": "Which spoken form is standard Italian descended from?",
  "Dal romano dell'epoca imperiale": "From the Roman of the imperial age",
  "Dal fiorentino letterario del Trecento": "From the literary Florentine of the fourteenth century",
  "Dal milanese dell'Ottocento": "From the Milanese of the nineteenth century",
  "Dal napoletano del Seicento": "From the Neapolitan of the seventeenth century",
  "Il modello è il fiorentino di Dante, Petrarca e Boccaccio, adottato come lingua scritta comune nel Cinquecento. Il latino è l'antenato di tutte le parlate italiane, non il modello dell'italiano moderno.":
    "The model is the Florentine of Dante, Petrarch and Boccaccio, adopted as a common written language in the sixteenth century. Latin is the ancestor of every Italian speech form, not the model of modern Italian.",
  "Dialetti o lingue?": "Dialects or languages?",
  "Quelli che in Italia si chiamano **dialetti** in genere non sono varianti dell'italiano: sono lingue romanze sorelle, discese dal latino per conto proprio. Il napoletano, il siciliano, il veneto o il piemontese non derivano dall'italiano più di quanto lo spagnolo derivi dal francese.":
    "What are called **dialects** in Italy are generally not variants of Italian: they are sister Romance languages, descended from Latin on their own account. Neapolitan, Sicilian, Venetian and Piedmontese come from Italian no more than Spanish comes from French.",
  "Il dialetto non è scomparso. Secondo le rilevazioni ISTAT una quota consistente della popolazione lo usa ancora, soprattutto in famiglia e fra amici, spesso alternandolo all'italiano nella stessa conversazione.":
    "The dialect has not disappeared. According to ISTAT surveys a substantial share of the population still uses one, above all with family and friends, often switching between it and Italian within the same conversation.",
  "Le minoranze riconosciute": "The recognised minorities",
  "L'**articolo 6** della Costituzione impegna la Repubblica a tutelare con apposite norme le minoranze linguistiche. La **legge 482 del 1999** ha dato attuazione a quell'articolo dopo cinquant'anni, riconoscendo **dodici** minoranze storiche.":
    "**Article 6** of the Constitution commits the Republic to protecting linguistic minorities by specific rules. **Law 482 of 1999** gave effect to that article after fifty years, recognising **twelve** historic minorities.",
  "Le dodici": "The twelve",
  "Albanesi, catalane, germaniche, greche, slovene, croate, e le popolazioni parlanti francese, franco-provenzale, friulano, ladino, occitano e sardo.":
    "Albanian, Catalan, Germanic, Greek, Slovene and Croatian communities, and the people who speak French, Franco-Provençal, Friulian, Ladin, Occitan and Sardinian.",
  "Alto Adige · Südtirol": "Alto Adige · South Tyrol",
  "Il tedesco è equiparato all'italiano: atti bilingui, scuole separate per gruppo linguistico, e la proporzionale etnica per i posti pubblici.":
    "German is on an equal footing with Italian: bilingual documents, separate schools for each language group, and ethnic proportionality for public posts.",
  "Valle d'Aosta": "Aosta Valley",
  "Il francese è equiparato all'italiano fin dallo statuto speciale del 1948; nelle valli walser si parlano anche varietà germaniche.":
    "French has been on an equal footing with Italian since the special statute of 1948; in the Walser valleys Germanic varieties are spoken as well.",
  "Friuli Venezia Giulia": "Friuli Venezia Giulia",
  "Tutela dello sloveno nelle province di Trieste, Gorizia e Udine, e del friulano, parlato da alcune centinaia di migliaia di persone.":
    "Protection for Slovene in the provinces of Trieste, Gorizia and Udine, and for Friulian, spoken by a few hundred thousand people.",
  "Quale legge dà attuazione all'articolo 6 sulle minoranze linguistiche?":
    "Which law gives effect to article 6 on linguistic minorities?",
  "La legge 482 del 1999": "Law 482 of 1999",
  "La legge 194 del 1978": "Law 194 of 1978",
  "La legge 300 del 1970": "Law 300 of 1970",
  "La legge 91 del 1992": "Law 91 of 1992",
  "La legge 15 dicembre 1999, n. 482, riconosce dodici minoranze linguistiche storiche. La 300 del 1970 è lo Statuto dei lavoratori e la 91 del 1992 riguarda la cittadinanza: numeri facili da scambiare.":
    "Law no. 482 of 15 December 1999 recognises twelve historic linguistic minorities. Law 300 of 1970 is the Workers' Statute and law 91 of 1992 concerns citizenship: numbers easy to mix up.",
  "In quale regione il francese è equiparato all'italiano?":
    "In which region is French on an equal footing with Italian?",
  "In Piemonte": "In Piedmont",
  "In Liguria": "In Liguria",
  "In Valle d'Aosta": "In the Aosta Valley",
  "In Trentino-Alto Adige": "In Trentino-Alto Adige",
  "La Valle d'Aosta è bilingue italiano-francese per statuto speciale. In Trentino-Alto Adige la seconda lingua è il tedesco, e in Piemonte si parlano occitano e franco-provenzale, tutelati ma non equiparati.":
    "The Aosta Valley is Italian-French bilingual by special statute. In Trentino-Alto Adige the second language is German, and in Piedmont people speak Occitan and Franco-Provençal, which are protected but not on an equal footing.",
  "L'italiano non è dichiarato lingua ufficiale nei principi fondamentali della Costituzione. Lo si ricava dallo statuto del Trentino-Alto Adige e dalla legge 482, che lo chiama lingua ufficiale della Repubblica: una di quelle cose che sembrano ovvie e non sono scritte dove ci si aspetta.":
    "Italian is not declared the official language in the founding principles of the Constitution. It follows from the statute of Trentino-Alto Adige and from law 482, which calls it the official language of the Republic: one of those things that seem obvious and are not written where you would expect.",
  // it-feste
  "Feste civili e religiose": "Civil and religious holidays",
  "Perché conta: il calendario racconta un paese meglio di molti manuali. In Italia le feste nazionali sono dodici, e una tredicesima cambia da città a città.":
    "Why this matters: a calendar tells you about a country better than many textbooks. In Italy there are twelve national holidays, and a thirteenth that changes from city to city.",
  "I giorni festivi": "The public holidays",
  "Sono festivi per legge dodici giorni all'anno, più il patrono locale. Quattro sono civili, gli altri religiosi — l'equilibrio di un paese che è stato a lungo cattolico e ha scritto una costituzione laica.":
    "Twelve days a year are holidays by law, plus the local patron saint. Four are civil, the rest religious — the balance of a country that was long Catholic and wrote a secular constitution.",
  "Feste civili": "Civil holidays",
  "25 aprile, Liberazione · 1º maggio, festa dei lavoratori · 2 giugno, Repubblica. La quarta è il 1º gennaio, che è civile ma senza contenuto politico.":
    "25 April, Liberation · 1 May, workers' day · 2 June, the Republic. The fourth is 1 January, which is civil but with no political content.",
  "Feste religiose fisse": "Fixed religious holidays",
  "6 gennaio Epifania · 15 agosto Assunzione · 1º novembre Ognissanti · 8 dicembre Immacolata · 25 dicembre Natale · 26 dicembre Santo Stefano.":
    "6 January Epiphany · 15 August the Assumption · 1 November All Saints' · 8 December the Immaculate Conception · 25 December Christmas · 26 December St Stephen's.",
  "Feste mobili": "Moveable holidays",
  "La Pasqua e il Lunedì dell'Angelo, che tutti chiamano Pasquetta. La data dipende dal primo plenilunio di primavera.":
    "Easter and Easter Monday, which everyone calls Pasquetta. The date depends on the first full moon of spring.",
  "Il patrono": "The patron saint",
  "Ogni comune ha il suo giorno festivo: sant'Ambrogio a Milano il 7 dicembre, san Gennaro a Napoli il 19 settembre, santi Pietro e Paolo a Roma il 29 giugno.":
    "Every municipality has its own holiday: Saint Ambrose in Milan on 7 December, Saint Januarius in Naples on 19 September, Saints Peter and Paul in Rome on 29 June.",
  "Quale di queste è una festa civile e non religiosa?":
    "Which of these is a civil and not a religious holiday?",
  "L'Epifania": "Epiphany",
  "Il 25 aprile": "25 April",
  "Il 15 agosto": "15 August",
  "L'8 dicembre": "8 December",
  "Il 25 aprile è l'anniversario della Liberazione, una data storica. Epifania, Assunzione e Immacolata sono ricorrenze religiose entrate nel calendario civile.":
    "25 April is the anniversary of the Liberation, a historical date. Epiphany, the Assumption and the Immaculate Conception are religious feasts that entered the civil calendar.",
  "Ferragosto": "Ferragosto",
  "Il **15 agosto** la Chiesa celebra l'Assunzione, ma il nome della festa è più antico: **Ferragosto** viene dalle *feriae Augusti*, il riposo istituito dall'imperatore **Augusto nel 18 avanti Cristo** alla fine dei lavori agricoli. È la festa in cui l'Italia si ferma davvero: nelle settimane intorno chiudono uffici, negozi e interi quartieri delle città.":
    "On **15 August** the Church celebrates the Assumption, but the name of the holiday is older: **Ferragosto** comes from the *feriae Augusti*, the rest instituted by the emperor **Augustus in 18 BC** at the end of the farming work. It is the holiday when Italy really does stop: in the weeks around it offices, shops and whole city districts close.",
  "I giorni della memoria": "The days of remembrance",
  "Alcune ricorrenze non sono festive ma sono istituite per legge, e nelle scuole si osservano.":
    "Some anniversaries are not public holidays but are established by law, and schools observe them.",
  "27 gennaio": "27 January",
  "Giorno della Memoria, per le vittime della Shoah, delle leggi razziali e della deportazione. È la data della liberazione di Auschwitz.":
    "Remembrance Day, for the victims of the Shoah, of the racial laws and of the deportations. It is the date Auschwitz was liberated.",
  "10 febbraio": "10 February",
  "Giorno del Ricordo, per le vittime delle foibe e per l'esodo giuliano-dalmata.":
    "Day of Remembrance for the victims of the foibe and for the Istrian-Dalmatian exodus.",
  "9 maggio": "9 May",
  "Giorno della memoria delle vittime del terrorismo, nell'anniversario del ritrovamento del corpo di Aldo Moro nel 1978.":
    "Day of remembrance for the victims of terrorism, on the anniversary of the finding of Aldo Moro's body in 1978.",
  "Da dove viene il nome Ferragosto?": "Where does the name Ferragosto come from?",
  "Dal ferro battuto nelle fiere estive": "From the wrought iron at the summer fairs",
  "Dalle feriae Augusti, il riposo istituito dall'imperatore Augusto":
    "From the feriae Augusti, the rest instituted by the emperor Augustus",
  "Dall'Assunzione di Maria": "From the Assumption of Mary",
  "Dalla fiera del bestiame di agosto": "From the August cattle fair",
  "Il nome viene dalle feriae Augusti del 18 avanti Cristo, quindi da una festa romana precedente di secoli alla ricorrenza cristiana che poi si è sovrapposta alla stessa data.":
    "The name comes from the feriae Augusti of 18 BC, so from a Roman festival centuries older than the Christian feast that later settled on the same date.",
  "Le feste che non sono nel calendario": "The festivals that are not in the calendar",
  "Accanto alle date ufficiali ci sono ricorrenze che scandiscono l'anno senza essere festive: il **Carnevale**, che a Venezia e a Viareggio dura settimane; la **Befana** del 6 gennaio, che porta i doni ai bambini e riempie le calze di carbone di zucchero; il **palio** o la **sagra** di paese, che in molti comuni è l'evento più partecipato dell'anno.":
    "Alongside the official dates there are occasions that mark the year without being holidays: **Carnival**, which in Venice and Viareggio lasts for weeks; the **Befana** on 6 January, who brings children presents and fills stockings with sugar coal; the village **palio** or **sagra**, which in many towns is the best-attended event of the year.",
  "Che cosa si ricorda il 27 gennaio?": "What is remembered on 27 January?",
  "L'esodo giuliano-dalmata": "The Istrian-Dalmatian exodus",
  "Le vittime della Shoah": "The victims of the Shoah",
  "Le vittime del terrorismo": "The victims of terrorism",
  "La fine della Prima guerra mondiale": "The end of the First World War",
  "Il Giorno della Memoria cade il 27 gennaio, anniversario della liberazione di Auschwitz. Il Giorno del Ricordo, dedicato alle foibe e all'esodo, è il 10 febbraio: due date vicine e distinte.":
    "Remembrance Day falls on 27 January, the anniversary of the liberation of Auschwitz. The Day of Remembrance for the foibe and the exodus is 10 February: two dates close together and distinct.",
  "Il patrono è giorno festivo **solo nel proprio comune**. Un ufficio milanese chiude il 7 dicembre; lo stesso giorno a Roma si lavora normalmente.":
    "The patron saint is a public holiday **only in its own municipality**. A Milan office closes on 7 December; the same day in Rome is an ordinary working day.",
  // chapter
  "L'ordinamento della Repubblica": "The organisation of the Republic",
  // it-parlamento
  "Il Parlamento": "Parliament",
  "Perché conta: in Italia le due camere hanno gli stessi identici poteri. È una scelta rara in Europa, e spiega da sola perché qui fare una legge richieda più tempo che altrove.":
    "Why this matters: in Italy the two chambers have exactly the same powers. That is a rare choice in Europe, and on its own it explains why making a law takes longer here than elsewhere.",
  "Due camere, gli stessi poteri": "Two chambers, the same powers",
  "Il Parlamento è formato dalla **Camera dei deputati** e dal **Senato della Repubblica**. Il sistema si chiama **bicameralismo paritario** — spesso detto perfetto: le due camere fanno esattamente le stesse cose. Entrambe votano la fiducia al governo, entrambe devono approvare ogni legge, e nel medesimo testo.":
    "Parliament is made up of the **Chamber of Deputies** and the **Senate of the Republic**. The system is called **equal bicameralism** — often described as perfect: the two chambers do exactly the same things. Both vote confidence in the government, both must approve every law, and in the same text.",
  "Se una camera modifica anche una virgola, il testo torna all'altra. L'andirivieni si chiama **navetta** e può durare a lungo. Nessun altro grande paese europeo funziona così: in Germania il Bundesrat interviene solo su certe materie, in Francia l'ultima parola spetta all'Assemblea nazionale.":
    "If one chamber changes so much as a comma, the text goes back to the other. The going to and fro is called the **navetta** and it can last a long time. No other large European country works this way: in Germany the Bundesrat steps in only on certain matters, and in France the National Assembly has the last word.",
  "Camera dei deputati": "The Chamber of Deputies",
  "400 deputati, a Palazzo Montecitorio. Si può essere eletti a partire da 25 anni.":
    "400 deputies, in Palazzo Montecitorio. You can be elected from the age of 25.",
  "Senato della Repubblica": "The Senate of the Republic",
  "200 senatori elettivi, a Palazzo Madama. Per essere eletti servono 40 anni.":
    "200 elected senators, in Palazzo Madama. To be elected you must be 40.",
  "Senatori a vita": "Senators for life",
  "Gli ex Presidenti della Repubblica lo sono di diritto. Il Presidente in carica può nominarne fino a cinque per altissimi meriti.":
    "Former Presidents of the Republic are so by right. The sitting President may appoint up to five for outstanding merit.",
  "Cinque anni": "Five years",
  "Tanto dura la legislatura, salvo scioglimento anticipato — che in Italia è tutt'altro che raro.":
    "That is how long a legislature lasts, unless it is dissolved early — which in Italy is anything but rare.",
  // it-parlamento
  "I numeri sono cambiati di recente: fino al 2022 i deputati erano **630** e i senatori elettivi **315**. Il taglio a 400 e 200 è stato deciso da una legge costituzionale confermata dal **referendum del 2020** e si è applicato dalle elezioni successive.":
    "The numbers changed recently: until 2022 there were **630** deputies and **315** elected senators. The cut to 400 and 200 was decided by a constitutional law confirmed by the **referendum of 2020** and applied from the following election.",
  "Quanti deputati siedono oggi alla Camera?": "How many deputies sit in the Chamber today?",
  "200": "200",
  "315": "315",
  "400": "400",
  "630": "630",
  "Quattrocento dal 2022, dopo il referendum del 2020. Seicentotrenta era il numero precedente, e duecento è quello dei senatori elettivi.":
    "Four hundred since 2022, after the 2020 referendum. Six hundred and thirty was the earlier number, and two hundred is the number of elected senators.",
  "Chi vota e chi può essere eletto": "Who votes and who can be elected",
  "Per entrambe le camere si vota a **diciotto anni**. Non è sempre stato così: fino alla legge costituzionale del **2021** il Senato si eleggeva solo dai venticinque anni in su, e per quasi settant'anni i giovani hanno avuto in mano una scheda sola su due.":
    "For both chambers you vote at **eighteen**. It has not always been so: until the constitutional law of **2021** the Senate was elected only by those aged twenty-five and over, and for almost seventy years young people held one ballot paper out of two.",
  "Che cosa significa bicameralismo paritario?": "What does equal bicameralism mean?",
  "Che le due camere hanno gli stessi poteri": "That the two chambers have the same powers",
  "Che le due camere hanno lo stesso numero di membri":
    "That the two chambers have the same number of members",
  "Che le due camere si riuniscono sempre insieme": "That the two chambers always sit together",
  "Che ogni regione elegge lo stesso numero di parlamentari":
    "That every region elects the same number of members of parliament",
  "Paritario si riferisce ai poteri, non ai numeri: Camera e Senato hanno funzioni identiche pur avendo quattrocento membri l'una e duecento l'altro.":
    "Equal refers to the powers, not the numbers: the Chamber and the Senate have identical functions even though one has four hundred members and the other two hundred.",
  "Il referendum abrogativo": "The abrogative referendum",
  "L'**articolo 75** consente a **cinquecentomila elettori** o a **cinque consigli regionali** di chiedere l'abrogazione di una legge. Il voto è valido solo se partecipa la **maggioranza degli aventi diritto**: sotto quella soglia il risultato non conta, quale che sia. Restano fuori le leggi tributarie e di bilancio, l'amnistia e l'indulto, e la ratifica dei trattati internazionali.":
    "**Article 75** allows **five hundred thousand voters** or **five regional councils** to ask for a law to be repealed. The vote is valid only if a **majority of those entitled** takes part: below that threshold the result does not count, whatever it is. Tax and budget laws, amnesty and pardon, and the ratification of international treaties are excluded.",
  "Alcuni referendum hanno cambiato il paese più di molte legislature: il **divorzio** nel 1974 e l'**aborto** nel 1981, in entrambi i casi con la conferma delle leggi che si voleva cancellare, e il **nucleare** nel 1987 e di nuovo nel 2011.":
    "Some referendums changed the country more than many legislatures: **divorce** in 1974 and **abortion** in 1981, in both cases confirming the laws that were meant to be struck down, and **nuclear power** in 1987 and again in 2011.",
  "Chi è senatore a vita di diritto, senza bisogno di nomina?":
    "Who is a senator for life by right, with no need of appointment?",
  "Gli ex Presidenti del Consiglio": "Former Presidents of the Council",
  "Gli ex Presidenti della Repubblica": "Former Presidents of the Republic",
  "I presidenti delle regioni a statuto speciale": "The presidents of the regions with a special statute",
  "I giudici della Corte costituzionale a fine mandato":
    "Constitutional Court judges at the end of their term",
  "Gli ex capi dello Stato lo diventano automaticamente. Gli altri senatori a vita sono nominati dal Presidente in carica, non più di cinque, per meriti nel campo sociale, scientifico, artistico o letterario.":
    "Former heads of state become so automatically. The other senators for life are appointed by the sitting President, no more than five, for merit in the social, scientific, artistic or literary field.",
  "Il quorum del cinquanta per cento riguarda il referendum **abrogativo**. Quello **confermativo** su una legge costituzionale non ne ha: due strumenti che portano lo stesso nome e funzionano in modo opposto.":
    "The fifty per cent quorum applies to the **abrogative** referendum. The **confirmatory** one on a constitutional law has none: two instruments with the same name that work in opposite ways.",
  // it-governo
  "Il Governo": "The government",
  "Perché conta: chi guida il governo in Italia non è eletto da nessuno con quel nome sulla scheda, e non può licenziare i propri ministri. Due fatti che spiegano molta della politica italiana.":
    "Why this matters: the person who leads the government in Italy is not elected by anybody with that name on the ballot paper, and cannot dismiss their own ministers. Two facts that explain a great deal of Italian politics.",
  "Come nasce un governo": "How a government is formed",
  "Il Governo è formato dal **Presidente del Consiglio dei ministri** e dai **ministri**, che insieme compongono il **Consiglio dei ministri**. La sede è **Palazzo Chigi**.":
    "The Government is made up of the **President of the Council of Ministers** and the **ministers**, who together form the **Council of Ministers**. Its seat is **Palazzo Chigi**.",
  "L'**articolo 92** stabilisce il percorso: il Presidente della Repubblica nomina il Presidente del Consiglio e, **su proposta di quest'ultimo**, i ministri. Prima di nominare, il capo dello Stato svolge le **consultazioni**: riceve i gruppi parlamentari per capire chi possa avere una maggioranza.":
    "**Article 92** sets out the path: the President of the Republic appoints the President of the Council and, **on the latter's proposal**, the ministers. Before appointing, the head of state holds **consultations**: receiving the parliamentary groups to work out who might have a majority.",
  "Entro **dieci giorni** dalla formazione il governo si presenta alle camere per la **fiducia** (articolo 94). Serve quella di entrambe: un governo che l'ottiene alla Camera e la perde al Senato non esiste.":
    "Within **ten days** of being formed the government presents itself to the chambers for a vote of **confidence** (article 94). It needs the confidence of both: a government that wins it in the Chamber and loses it in the Senate does not exist.",
  "Chi nomina il Presidente del Consiglio?": "Who appoints the President of the Council?",
  "Gli elettori, con il voto alle politiche": "The voters, at a general election",
  "Il Presidente della Repubblica": "The President of the Republic",
  "La Camera dei deputati": "The Chamber of Deputies",
  "Il partito che ha preso più voti": "The party with the most votes",
  "Lo nomina il capo dello Stato, dopo le consultazioni. Il nome del candidato può comparire sui manifesti elettorali, ma sulla scheda si votano i partiti e i loro candidati, non il capo del governo.":
    "The head of state appoints them, after the consultations. The candidate's name can appear on election posters, but on the ballot paper you vote for parties and their candidates, not for the head of government.",
  "Un primo fra pari": "A first among equals",
  "Il Presidente del Consiglio **dirige la politica generale del governo** e ne è responsabile, ma **non può revocare un ministro**. È una differenza netta rispetto al cancelliere tedesco o al primo ministro britannico: un ministro che non si dimette resta al suo posto, e l'unica via è la crisi dell'intero governo.":
    "The President of the Council **directs the general policy of the government** and answers for it, but **cannot dismiss a minister**. That is a sharp difference from the German chancellor or the British prime minister: a minister who does not resign stays in place, and the only way out is a crisis of the whole government.",
  "Da qui la brevità dei governi italiani: dal 1946 se ne sono succeduti a un ritmo che dà una durata media di poco più di un anno. La continuità l'hanno garantita l'amministrazione e — spesso — gli stessi ministri, che cambiavano governo senza cambiare scrivania.":
    "Hence the short life of Italian governments: since 1946 they have followed one another at a rate that gives an average of a little over a year. Continuity has been provided by the administration and — often — by the same ministers, who changed government without changing desk.",
  "Quando il governo fa le leggi": "When the government makes law",
  "Decreto legge · art. 77": "Decree-law · art. 77",
  "In casi straordinari di necessità e urgenza. Entra in vigore subito, ma decade dall'inizio se il Parlamento non lo converte in legge entro sessanta giorni.":
    "In extraordinary cases of necessity and urgency. It takes effect at once, but lapses from the outset if Parliament does not convert it into law within sixty days.",
  "Decreto legislativo · art. 76": "Legislative decree · art. 76",
  "Il Parlamento delega il governo a scrivere una normativa, fissando principi, criteri e un termine. Serve per i testi lunghi e tecnici, come i codici.":
    "Parliament delegates to the government the writing of a body of rules, setting the principles, the criteria and a deadline. It is used for long technical texts, such as the codes.",
  "Regolamento": "Regulation",
  "Norme di dettaglio che attuano una legge. Non hanno forza di legge e non possono contraddirla.":
    "Detailed rules that give effect to a law. They do not have the force of law and cannot contradict it.",
  "Che cosa succede a un decreto legge non convertito entro sessanta giorni?":
    "What happens to a decree-law that is not converted within sixty days?",
  "Diventa definitivo automaticamente": "It becomes permanent automatically",
  "Decade, e perde effetto fin dall'inizio": "It lapses, and loses effect from the outset",
  "Resta in vigore altri sessanta giorni": "It stays in force for another sixty days",
  "Passa alla Corte costituzionale": "It goes to the Constitutional Court",
  "Decade retroattivamente: è come se non fosse mai esistito, e il Parlamento deve semmai regolare i rapporti sorti nel frattempo. Sessanta giorni è un termine severo, ed è per questo che i decreti si accumulano a fine scadenza.":
    "It lapses retroactively: it is as though it had never existed, and Parliament must then settle whatever arose in the meantime. Sixty days is a hard deadline, which is why decrees pile up as it approaches.",
  "Come cade": "How it falls",
  "La **mozione di sfiducia** deve essere firmata da almeno un decimo dei componenti della camera e non può essere discussa prima di **tre giorni** dalla presentazione: il tempo serve a raffreddare gli animi. Nella pratica, però, i governi italiani cadono quasi sempre per **dimissioni**, non per un voto: un partito esce dalla maggioranza e il Presidente del Consiglio sale al Quirinale.":
    "A **motion of no confidence** must be signed by at least a tenth of the members of a chamber and cannot be debated until **three days** after it is tabled: the time is there to cool tempers. In practice, though, Italian governments almost always fall by **resignation** rather than by a vote: a party leaves the majority and the President of the Council goes up to the Quirinale.",
  "Il Presidente del Consiglio può revocare un ministro?":
    "Can the President of the Council dismiss a minister?",
  "Sì, in qualsiasi momento": "Yes, at any time",
  "Sì, con l'accordo del Consiglio dei ministri": "Yes, with the agreement of the Council of Ministers",
  "No: può proporne la nomina, non la revoca": "No: they can propose an appointment, not a dismissal",
  "Solo con l'autorizzazione del Parlamento": "Only with Parliament's authorisation",
  "L'articolo 92 gli dà il potere di proporre i ministri al Presidente della Repubblica, non quello di rimuoverli. Un ministro che rifiuta di dimettersi si toglie solo aprendo una crisi di governo.":
    "Article 92 gives them the power to propose ministers to the President of the Republic, not to remove them. A minister who refuses to resign can only be removed by opening a government crisis.",
  "Presidente della Repubblica e Presidente del Consiglio sono due cariche diverse e si confondono di continuo. Il primo sta al **Quirinale** e dura sette anni; il secondo sta a **Palazzo Chigi** e dura quanto la sua maggioranza.":
    "The President of the Republic and the President of the Council are two different offices and are constantly confused. The first sits at the **Quirinale** and serves seven years; the second sits at **Palazzo Chigi** and lasts as long as their majority.",
  // it-presidente
  "Perché conta: sulla carta il capo dello Stato è una figura di garanzia che firma. Nei momenti di crisi è la persona che decide chi prova a governare — e in Italia le crisi non sono rare.":
    "Why this matters: on paper the head of state is a figure of guarantee who signs. In moments of crisis they are the person who decides who gets to try to govern — and in Italy crises are not rare.",
  "Come si elegge": "How the President is elected",
  "Il Presidente è eletto dal **Parlamento in seduta comune**, cioè deputati e senatori insieme, con l'aggiunta di **cinquantotto delegati regionali**: tre per ogni regione, uno solo per la Valle d'Aosta, che è troppo piccola per tre.":
    "The President is elected by **Parliament in joint session**, that is deputies and senators together, with the addition of **fifty-eight regional delegates**: three for each region, only one for the Aosta Valley, which is too small for three.",
  "Nei primi tre scrutini serve la maggioranza dei **due terzi**; dal quarto basta la **maggioranza assoluta**. Il voto è segreto, e la segretezza produce i **franchi tiratori**: parlamentari che votano contro le indicazioni del proprio gruppo senza che nessuno sappia chi siano. Alcune elezioni hanno richiesto oltre venti scrutini.":
    "The first three ballots need a **two-thirds** majority; from the fourth an **absolute majority** is enough. The vote is secret, and secrecy produces the **franchi tiratori**, the snipers: members who vote against their own group's instructions without anyone knowing who they are. Some elections have taken more than twenty ballots.",
  "Sette anni": "Seven years",
  "Il mandato è più lungo della legislatura di proposito: il Presidente non deve dipendere dal Parlamento che lo ha eletto.":
    "The term is deliberately longer than a legislature: the President must not depend on the Parliament that elected them.",
  "Cinquant'anni": "Fifty years",
  "L'età minima. Servono anche la cittadinanza italiana e il godimento dei diritti civili e politici.":
    "The minimum age. Italian citizenship and the enjoyment of civil and political rights are needed too.",
  "Il Quirinale": "The Quirinale",
  "La residenza ufficiale, un palazzo che è stato dei papi e poi dei re prima di essere della Repubblica.":
    "The official residence, a palace that belonged to the popes and then to the kings before it belonged to the Republic.",
  "Quanto dura il mandato del Presidente della Repubblica?":
    "How long is the President of the Republic's term?",
  "Quattro anni": "Four years",
  "Nove anni": "Nine years",
  "Sette anni, due più della legislatura. Cinque è la durata delle camere e nove quella dei giudici costituzionali.":
    "Seven years, two more than a legislature. Five is the length of the chambers' term and nine that of the constitutional judges.",
  "Che cosa può fare": "What the President can do",
  "**Promulga le leggi**, e prima di firmarle può **rinviarle una volta** alle camere con un messaggio motivato. Se il Parlamento riapprova lo stesso testo, deve promulgarlo: il rinvio è un freno, non un veto.":
    "The President **promulgates laws**, and before signing may **send one back once** to the chambers with a reasoned message. If Parliament passes the same text again, it must be promulgated: the referral is a brake, not a veto.",
  "**Scioglie le camere**, sentiti i loro presidenti, e non può farlo negli ultimi sei mesi del proprio mandato — il cosiddetto **semestre bianco**, pensato perché non usi lo scioglimento per farsi rieleggere. **Nomina** il Presidente del Consiglio e cinque giudici costituzionali, **presiede** il Consiglio superiore della magistratura e il Consiglio supremo di difesa, **comanda** le forze armate, **concede la grazia** e **ratifica** i trattati.":
    "The President **dissolves the chambers**, having heard their presidents, and may not do so in the last six months of their own term — the so-called **semestre bianco**, designed so that dissolution is not used to win re-election. The President **appoints** the President of the Council and five constitutional judges, **chairs** the Superior Council of the Judiciary and the Supreme Council of Defence, **commands** the armed forces, **grants pardons** and **ratifies** treaties.",
  "Quante volte il Presidente può rinviare una legge alle camere?":
    "How many times may the President send a law back to the chambers?",
  "Nessuna: deve promulgare quello che riceve": "None: they must promulgate what they receive",
  "Una sola volta": "Once only",
  "Due volte": "Twice",
  "Tutte le volte che ritiene necessario": "As many times as they think necessary",
  "Un solo rinvio, con messaggio motivato. Se le camere riapprovano il medesimo testo, la promulgazione diventa un atto dovuto: il Presidente frena, non blocca.":
    "One referral, with a reasoned message. If the chambers pass the same text again, promulgation becomes an act they are bound to perform: the President brakes, but does not block.",
  "Di che cosa risponde": "What the President answers for",
  "Il Presidente **non è responsabile** degli atti compiuti nell'esercizio delle sue funzioni, con due eccezioni: **alto tradimento** e **attentato alla Costituzione**, per i quali lo mette in stato d'accusa il Parlamento in seduta comune e lo giudica la Corte costituzionale integrata da sedici membri esterni.":
    "The President is **not responsible** for acts carried out in the exercise of the office, with two exceptions: **high treason** and **attack on the Constitution**, for which Parliament in joint session brings the impeachment and the Constitutional Court, joined by sixteen outside members, gives judgment.",
  "Ogni suo atto richiede la **controfirma** del ministro proponente, che se ne assume la responsabilità (articolo 89). È il meccanismo che tiene insieme un capo dello Stato irresponsabile e un sistema in cui qualcuno deve pur rispondere.":
    "Every act requires the **countersignature** of the proposing minister, who takes responsibility for it (article 89). It is the mechanism that holds together a head of state who is not answerable and a system in which somebody has to answer.",
  "Il mandato non prevede limiti di rielezione, ma per sessantasette anni nessuno è stato rieletto. È successo due volte in tempi recenti, entrambe in una crisi in cui il Parlamento non trovava un altro nome.":
    "The term has no limit on re-election, but for sixty-seven years nobody was re-elected. It has happened twice in recent times, both in a crisis where Parliament could not find another name.",
  "Che cos'è il semestre bianco?": "What is the semestre bianco?",
  "I primi sei mesi di mandato, in cui il Presidente non firma leggi":
    "The first six months of a term, in which the President signs no laws",
  "Gli ultimi sei mesi di mandato, in cui non può sciogliere le camere":
    "The last six months of a term, in which the chambers cannot be dissolved",
  "Il periodo fra lo scioglimento e le elezioni": "The period between dissolution and the election",
  "La pausa estiva dei lavori parlamentari": "The summer break in parliamentary business",
  "Gli ultimi sei mesi. La regola esiste perché un Presidente in scadenza non possa sciogliere il Parlamento e farsene eleggere uno più favorevole alla propria rielezione.":
    "The last six months. The rule exists so that a President nearing the end cannot dissolve Parliament and have one elected that is friendlier to their own re-election.",
  "Il Presidente non governa. Non decide le tasse, non presenta il bilancio, non guida la politica estera: sceglie chi ci prova, e controlla che si resti dentro la Costituzione.":
    "The President does not govern. The President does not decide taxes, does not present the budget, does not lead foreign policy: they choose who tries, and check that everyone stays inside the Constitution.",
  // it-giustizia
  "La giustizia e la Corte costituzionale": "Justice and the Constitutional Court",
  "Perché conta: in Italia i giudici non sono nominati dal potere politico e i pubblici ministeri non scelgono quali reati perseguire. Sono due scelte precise, e sono anche due dei temi più discussi del paese.":
    "Why this matters: in Italy judges are not appointed by political power and prosecutors do not choose which crimes to pursue. Those are two deliberate choices, and also two of the most argued-over subjects in the country.",
  "Un ordine autonomo": "An autonomous order",
  "L'**articolo 104** definisce la magistratura un **ordine autonomo e indipendente da ogni altro potere**. Non si dice potere ma ordine, e la differenza è voluta: i giudici non rappresentano nessuno e non rispondono a un elettorato.":
    "**Article 104** defines the judiciary as an **order autonomous and independent of every other power**. It says order, not power, and the difference is deliberate: judges represent nobody and answer to no electorate.",
  "L'**articolo 101** completa il quadro: i giudici sono **soggetti soltanto alla legge**. Si entra in magistratura per **concorso**, non per nomina, e la carriera è gestita dal **Consiglio superiore della magistratura**, presieduto dal Presidente della Repubblica.":
    "**Article 101** completes the picture: judges are **subject only to the law**. You enter the judiciary by **competitive examination**, not by appointment, and careers are managed by the **Superior Council of the Judiciary**, chaired by the President of the Republic.",
  "L'**articolo 112** impone al pubblico ministero l'**obbligatorietà dell'azione penale**: ricevuta una notizia di reato deve procedere. In teoria toglie ogni discrezionalità politica; in pratica, con più fascicoli che magistrati, la scelta si sposta sulle priorità.":
    "**Article 112** imposes on the prosecutor the **duty to prosecute**: once a report of a crime is received, they must proceed. In theory that removes all political discretion; in practice, with more files than magistrates, the choice moves to setting priorities.",
  "Come si diventa magistrato in Italia?": "How does someone become a magistrate in Italy?",
  "Per nomina del ministro della Giustizia": "By appointment by the minister of justice",
  "Per elezione popolare": "By popular election",
  "Per concorso pubblico": "By public competitive examination",
  "Per designazione del Parlamento": "By designation by Parliament",
  "Per concorso. È la scelta che tiene la carriera fuori dalle mani della politica, e la ragione per cui il CSM, non il ministro, decide trasferimenti e promozioni.":
    "By competitive examination. It is the choice that keeps careers out of the hands of politics, and the reason the CSM, not the minister, decides transfers and promotions.",
  "Tre gradi di giudizio": "Three levels of judgment",
  "Primo grado": "First instance",
  // it-giustizia
  "Giudice di pace, tribunale o corte d'assise secondo la materia e la gravità. Qui si accertano i fatti.":
    "A justice of the peace, a tribunal or an assize court, according to the subject and the seriousness. This is where the facts are established.",
  "Appello": "Appeal",
  "La corte d'appello riesamina il caso, fatti compresi. Può ribaltare la decisione.":
    "The court of appeal re-examines the case, facts included. It can overturn the decision.",
  "Cassazione": "Cassation",
  "La Corte suprema non rivede i fatti: controlla che la legge sia stata applicata correttamente. È il giudizio di legittimità.":
    "The Supreme Court does not review the facts: it checks that the law was applied correctly. That is judgment on legitimacy.",
  "Finché la Cassazione non ha deciso, la sentenza non è **definitiva** — in italiano si dice passata in giudicato — e l'imputato resta non colpevole a norma dell'articolo 27. La lunghezza dei processi civili e penali è da decenni il problema più segnalato all'Italia dalle istituzioni europee.":
    "Until the Court of Cassation has decided, a judgment is not **final** — in Italian one says it has passed into res judicata — and the accused remains not guilty under article 27. The length of civil and criminal proceedings has for decades been the failing European institutions raise with Italy most often.",
  "Che cosa esamina la Corte di cassazione?": "What does the Court of Cassation examine?",
  "I fatti, una terza volta": "The facts, for a third time",
  "La corretta applicazione della legge": "Whether the law was applied correctly",
  "Solo le sentenze di condanna": "Only convictions",
  "La legittimità costituzionale delle leggi": "The constitutional legitimacy of laws",
  "La Cassazione giudica la legittimità, non il merito: non stabilisce se il fatto sia avvenuto, ma se il diritto sia stato applicato bene. La legittimità costituzionale delle leggi spetta invece alla Corte costituzionale.":
    "The Cassation judges legitimacy, not the merits: it does not establish whether the act happened, but whether the law was applied properly. The constitutional legitimacy of laws belongs to the Constitutional Court instead.",
  "La Corte costituzionale": "The Constitutional Court",
  "È un organo a sé, che non fa parte della magistratura ordinaria. Ha **quindici giudici**, nominati in tre modi diversi perché nessun potere possa comporla da solo: **cinque** dal Presidente della Repubblica, **cinque** dal Parlamento in seduta comune, **cinque** dalle supreme magistrature.":
    "It is a body of its own and is not part of the ordinary judiciary. It has **fifteen judges**, appointed in three different ways so that no single power can make it up alone: **five** by the President of the Republic, **five** by Parliament in joint session, **five** by the supreme courts.",
  "Durano **nove anni** e **non sono rieleggibili**: un mandato lungo e senza rinnovo mette il giudice al riparo da chi lo ha nominato. La sede è **Palazzo della Consulta**, e per questo la Corte si chiama spesso semplicemente la Consulta.":
    "They serve **nine years** and **cannot be reappointed**: a long term with no renewal shields a judge from whoever appointed them. Its seat is **Palazzo della Consulta**, which is why the Court is often called simply the Consulta.",
  "Giudica sulla **legittimità costituzionale** delle leggi, sui **conflitti di attribuzione** fra poteri dello Stato e fra Stato e regioni, sulle **accuse** contro il Presidente della Repubblica, e sull'**ammissibilità dei referendum** abrogativi. Una legge dichiarata incostituzionale cessa di avere efficacia dal giorno dopo la pubblicazione della sentenza.":
    "It rules on the **constitutional legitimacy** of laws, on **conflicts of competence** between the powers of the State and between State and regions, on **charges** against the President of the Republic, and on the **admissibility of abrogative referendums**. A law declared unconstitutional ceases to have effect from the day after the judgment is published.",
  "Come sono scelti i quindici giudici della Corte costituzionale?":
    "How are the fifteen judges of the Constitutional Court chosen?",
  "Tutti dal Parlamento in seduta comune": "All by Parliament in joint session",
  "Cinque dal Presidente, cinque dal Parlamento, cinque dalle supreme magistrature":
    "Five by the President, five by Parliament, five by the supreme courts",
  "Tutti dal Presidente della Repubblica": "All by the President of the Republic",
  "Per concorso, come i magistrati ordinari": "By competitive examination, like ordinary magistrates",
  "Tre origini diverse, cinque ciascuna, perché nessun potere possa formare la Corte da solo. Il mandato di nove anni non rinnovabile completa la garanzia.":
    "Three different origins, five each, so that no single power can form the Court alone. The nine-year non-renewable term completes the guarantee.",
  "Corte costituzionale e Corte di cassazione sono due organi distinti. La prima giudica le **leggi**, la seconda le **sentenze**. Che stiano entrambe a Roma e comincino con la stessa parola non aiuta.":
    "The Constitutional Court and the Court of Cassation are two distinct bodies. The first judges **laws**, the second **judgments**. That both sit in Rome and begin with the same word does not help.",
  // it-regioni
  "Regioni, province e comuni": "Regions, provinces and municipalities",
  "Perché conta: l'articolo che elenca gli enti della Repubblica comincia dal comune e finisce con lo Stato. L'ordine non è casuale, ed è la chiave per capire il rapporto fra centro e territorio.":
    "Why this matters: the article that lists the bodies of the Republic begins with the municipality and ends with the State. The order is not accidental, and it is the key to the relationship between the centre and the territory.",
  "Dal basso verso l'alto": "From the bottom upwards",
  "L'**articolo 114** dice che la Repubblica è costituita dai **comuni**, dalle **province**, dalle **città metropolitane**, dalle **regioni** e dallo **Stato**. Elencare lo Stato per ultimo, dopo il comune, fu una scelta della riforma del **Titolo V** nel **2001**: i territori non sono articolazioni dello Stato, sono elementi della Repubblica al pari suo.":
    "**Article 114** says the Republic is made up of the **municipalities**, the **provinces**, the **metropolitan cities**, the **regions** and the **State**. Listing the State last, after the municipality, was a choice of the **Title V** reform of **2001**: the territories are not branches of the State, they are elements of the Republic on the same footing as it.",
  "La riforma ha anche ribaltato il criterio delle competenze. Prima le regioni potevano legiferare solo nelle materie elencate; oggi l'elenco è quello delle materie **esclusive dello Stato** — difesa, moneta, giustizia, immigrazione — e delle materie **concorrenti**, mentre tutto ciò che non è elencato spetta alle **regioni**.":
    "The reform also reversed the test for competences. Before, the regions could legislate only in the listed subjects; today the list is of the matters **exclusive to the State** — defence, currency, justice, immigration — and of **concurrent** matters, while everything not listed belongs to the **regions**.",
  "Venti regioni, cinque diverse dalle altre": "Twenty regions, five unlike the rest",
  "Le regioni sono **venti**, e **cinque** hanno uno **statuto speciale** approvato con legge costituzionale. Non è un privilegio arbitrario: ciascuna ha una ragione storica precisa.":
    "There are **twenty** regions, and **five** have a **special statute** approved by constitutional law. It is not an arbitrary privilege: each has a precise historical reason.",
  "Sicilia e Sardegna": "Sicily and Sardinia",
  "Isole, con un movimento autonomista forte nell'immediato dopoguerra. La Sicilia ottenne lo statuto nel 1946, prima ancora della Costituzione.":
    "Islands, with a strong autonomist movement in the years right after the war. Sicily obtained its statute in 1946, before the Constitution itself.",
  "Trentino-Alto Adige": "Trentino-Alto Adige",
  "La minoranza di lingua tedesca. Le competenze vere stanno nelle due province autonome di Trento e Bolzano più che nella regione.":
    "The German-speaking minority. The real competences lie with the two autonomous provinces of Trento and Bolzano rather than with the region.",
  "Il confine orientale, conteso fino agli anni Cinquanta, e le minoranze slovena e friulana.":
    "The eastern border, disputed until the fifties, and the Slovene and Friulian minorities.",
  "La minoranza francofona, in una regione così piccola da avere un solo consiglio che fa anche da provincia.":
    "The French-speaking minority, in a region so small that a single council also serves as the province.",
  "Quante regioni italiane hanno uno statuto speciale?": "How many Italian regions have a special statute?",
  "Tre": "Three",
  "Cinque": "Five",
  "Otto": "Eight",
  "Venti: ogni regione ha il proprio statuto": "Twenty: every region has its own statute",
  "Cinque: Sicilia, Sardegna, Trentino-Alto Adige, Friuli Venezia Giulia e Valle d'Aosta. Le altre quindici hanno statuti ordinari, che non sono leggi costituzionali.":
    "Five: Sicily, Sardinia, Trentino-Alto Adige, Friuli Venezia Giulia and the Aosta Valley. The other fifteen have ordinary statutes, which are not constitutional laws.",
  "Chi governa una regione": "Who governs a region",
  "Ogni regione ha un **Consiglio regionale**, che fa le leggi, una **Giunta**, che governa, e un **Presidente della Regione**, eletto direttamente dai cittadini nella quasi totalità dei casi. Lo si sente chiamare **governatore**: è un uso giornalistico, non un titolo che esista nella Costituzione.":
    "Every region has a **Regional Council**, which makes the laws, a **Giunta**, which governs, and a **President of the Region**, elected directly by the citizens in almost every case. You will hear the President called **governatore**: that is journalists' usage, not a title that exists in the Constitution.",
  "La regola che tiene insieme il sistema è chiamata dagli addetti ai lavori *simul stabunt, simul cadent*: se il Presidente cade, cade con lui l'intero consiglio e si torna al voto. Serve a evitare che una regione resti senza guida per anni.":
    "The rule that holds the system together is known to insiders as *simul stabunt, simul cadent*: if the President falls, the whole council falls with them and there is a fresh election. It is there to stop a region being left without leadership for years.",
  "Comuni e città metropolitane": "Municipalities and metropolitan cities",
  "I comuni sono circa **ottomila**, dalle metropoli ai paesi di poche decine di abitanti. Il **sindaco** è eletto **direttamente** dai cittadini insieme al consiglio comunale, e nei comuni sopra i quindicimila abitanti si vota su due turni con ballottaggio. Il municipio è dove si fa quasi tutto ciò che riguarda la vita quotidiana: residenza, carta d'identità, stato civile, scuole dell'infanzia, rifiuti, urbanistica.":
    "There are about **eight thousand** municipalities, from the big cities to villages of a few dozen people. The **mayor** is elected **directly** by the citizens along with the municipal council, and in municipalities above fifteen thousand inhabitants there are two rounds with a run-off. The town hall is where almost everything to do with daily life is done: residence, identity card, civil status, nursery schools, refuse, planning.",
  "Le **città metropolitane** sono **quattordici** e dal 2015 hanno sostituito le province nei territori dei grandi capoluoghi. Il sindaco del comune capoluogo ne è anche sindaco metropolitano.":
    "There are **fourteen metropolitan cities**, and since 2015 they have replaced the provinces in the territories of the large capitals. The mayor of the capital municipality is also the metropolitan mayor.",
  "Chi elegge il sindaco di un comune italiano?": "Who elects the mayor of an Italian municipality?",
  "Il consiglio comunale, fra i propri membri": "The municipal council, from among its own members",
  "I cittadini, con voto diretto": "The citizens, by direct vote",
  "Il prefetto, che rappresenta il governo": "The prefect, who represents the government",
  "Il presidente della regione": "The president of the region",
  "Direttamente i cittadini, dal 1993. Prima lo eleggeva il consiglio comunale, e i sindaci cambiavano ogni volta che cambiavano gli equilibri fra i partiti in aula.":
    "The citizens directly, since 1993. Before that the municipal council elected them, and mayors changed every time the balance between the parties in the chamber changed.",
  "In quale ordine l'articolo 114 elenca gli enti della Repubblica?":
    "In what order does article 114 list the bodies of the Republic?",
  "Dallo Stato al comune": "From the State down to the municipality",
  "Dal comune allo Stato": "From the municipality up to the State",
  "In ordine alfabetico": "In alphabetical order",
  "Per numero di abitanti": "By number of inhabitants",
  "Comuni, province, città metropolitane, regioni, Stato. L'ordine fu invertito dalla riforma del 2001 per dire che i territori non discendono dallo Stato ma stanno accanto ad esso.":
    "Municipalities, provinces, metropolitan cities, regions, State. The order was reversed by the 2001 reform to say that the territories do not descend from the State but stand beside it.",
  "Il **prefetto** non è un organo della regione né del comune: rappresenta il **governo** in ogni provincia e dipende dal Ministero dell'interno. È lui che riceve le domande di cittadinanza e firma gli accordi di integrazione.":
    "The **prefect** is a body neither of the region nor of the municipality: the prefect represents the **government** in every province and answers to the Ministry of the Interior. It is the prefect who receives citizenship applications and signs the integration agreements.",
  // chapter
  "Storia d'Italia": "The history of Italy",
  // it-roma-medioevo
  "Da Roma ai Comuni": "From Rome to the communes",
  "Perché si comincia da qui: fra la caduta dell'impero e l'Unità passano quasi quattordici secoli in cui l'Italia non è uno Stato. Chi non tiene presente quel vuoto non capisce né i campanili né le cento cucine.":
    "Why we start here: between the fall of the empire and unification lie almost fourteen centuries in which Italy is not a state. Without that gap in mind, neither the bell towers nor the hundred cuisines make sense.",
  "Che cosa lascia Roma": "What Rome leaves behind",
  "La tradizione data la fondazione di Roma al **753 avanti Cristo**, la repubblica al **509** e l'impero al **27 avanti Cristo**, quando Ottaviano riceve il titolo di Augusto. L'impero d'Occidente finisce nel **476**, con la deposizione di Romolo Augustolo.":
    "Tradition dates the founding of Rome to **753 BC**, the republic to **509** and the empire to **27 BC**, when Octavian received the title of Augustus. The Western empire ends in **476**, with the deposition of Romulus Augustulus.",
  "Ciò che resta non è un territorio ma un'eredità: la **lingua latina**, da cui discendono l'italiano e le altre lingue romanze; il **diritto romano**, che è ancora l'ossatura del codice civile; le **strade**, molte delle quali ricalcate dalle statali di oggi; e l'idea stessa di città come luogo di cittadinanza.":
    "What is left is not a territory but an inheritance: the **Latin language**, from which Italian and the other Romance languages descend; **Roman law**, still the skeleton of the civil code; the **roads**, many of them traced by today's trunk routes; and the very idea of the city as a place of citizenship.",
  "In quale anno finisce l'Impero romano d'Occidente?": "In what year does the Western Roman Empire end?",
  "Nel 27 avanti Cristo": "In 27 BC",
  "Nel 313": "In 313",
  "Nel 476": "In 476",
  "Nel 1453": "In 1453",
  "Il 476 è la deposizione di Romolo Augustolo. Il 1453 è la caduta di Costantinopoli, cioè la fine dell'impero d'Oriente, quasi mille anni più tardi.":
    "476 is the deposition of Romulus Augustulus. 1453 is the fall of Constantinople, that is, the end of the Eastern empire, almost a thousand years later.",
  "Un mosaico di poteri": "A mosaic of powers",
  "Dopo il 476 la penisola non torna unita per quasi quattordici secoli. Arrivano i **Longobardi** nel **568**, che si insediano al centro e al nord; i **Franchi** di Carlo Magno li sconfiggono nel **774**; nel frattempo nasce lo **Stato della Chiesa**, che taglia l'Italia a metà e resterà lì fino al 1870.":
    "After 476 the peninsula is not united again for almost fourteen centuries. The **Lombards** arrive in **568** and settle in the centre and the north; Charlemagne's **Franks** defeat them in **774**; meanwhile the **Papal States** come into being, cutting Italy in half and staying there until 1870.",
  "Il Sud normanno": "The Norman South",
  "Nel 1130 i Normanni fondano il Regno di Sicilia, il primo Stato accentrato d'Europa, con Palermo capitale multilingue di arabi, greci, latini ed ebrei.":
    "In 1130 the Normans found the Kingdom of Sicily, the first centralised state in Europe, with Palermo as a multilingual capital of Arabs, Greeks, Latins and Jews.",
  "I Comuni del Nord": "The communes of the North",
  "Le città padane si governano da sé attraverso consoli e assemblee, e comprano o strappano l'autonomia all'imperatore.":
    "The cities of the Po valley govern themselves through consuls and assemblies, and buy or wrest their autonomy from the emperor.",
  "Lo Stato della Chiesa": "The Papal States",
  "Il papa è anche sovrano temporale su una fascia che va dal Lazio alla Romagna. La divisione fra Nord e Sud passa di lì.":
    "The pope is also a temporal sovereign over a belt running from Lazio to Romagna. The division between North and South runs through it.",
  "Le Repubbliche marinare": "The maritime republics",
  "Amalfi, Pisa, Genova e Venezia costruiscono flotte, colonie e banche, e portano in Italia la contabilità e la lettera di cambio.":
    "Amalfi, Pisa, Genoa and Venice build fleets, colonies and banks, and bring accounting and the bill of exchange to Italy.",
  "Legnano e la pace di Costanza": "Legnano and the Peace of Constance",
  "Nel **1176** i Comuni riuniti nella **Lega Lombarda** sconfiggono a **Legnano** l'imperatore Federico Barbarossa. La **pace di Costanza** del **1183** riconosce alle città il diritto di eleggere i propri magistrati e di amministrarsi.":
    "In **1176** the communes united in the **Lombard League** defeat the emperor Frederick Barbarossa at **Legnano**. The **Peace of Constance** of **1183** recognises the cities' right to elect their own magistrates and to govern themselves.",
  "È un fatto senza paragoni nell'Europa del tempo: decine di città indipendenti, ciascuna con leggi, monete e milizie proprie, nel raggio di poche decine di chilometri. Da lì viene il **campanilismo**, che non è un difetto caratteriale ma il residuo di secoli in cui il campanile accanto era davvero un altro Stato.":
    "It is a fact without parallel in the Europe of the time: dozens of independent cities, each with its own laws, coinage and militia, within a few dozen kilometres of one another. From there comes **campanilismo**, parish-pump loyalty, which is not a defect of character but the residue of centuries in which the bell tower next door really was another state.",
  "Che cosa riconosce ai Comuni la pace di Costanza del 1183?":
    "What does the Peace of Constance of 1183 grant the communes?",
  "Il diritto di governarsi da sé, eleggendo i propri magistrati":
    "The right to govern themselves, electing their own magistrates",
  "L'esenzione da ogni tassa imperiale per sempre": "Exemption from every imperial tax for ever",
  "Il diritto di battere moneta d'oro": "The right to strike gold coin",
  "L'unione in un solo regno del Nord": "Union in a single northern kingdom",
  "Dopo Legnano l'imperatore riconosce l'autogoverno cittadino. Le città restano formalmente dentro l'impero, ma amministrano sé stesse: è il compromesso che rende possibile l'età dei Comuni.":
    "After Legnano the emperor recognises self-government by the cities. They stay formally inside the empire but administer themselves: the compromise that makes the age of the communes possible.",
  "Dai Comuni alle Signorie": "From communes to signorie",
  "Nel Trecento le lotte fra fazioni logorano le istituzioni comunali, e in una città dopo l'altra un uomo o una famiglia prende il potere in modo stabile: nascono le **Signorie**, che nel secolo successivo diventano **Principati** riconosciuti. I Visconti e poi gli Sforza a Milano, i Medici a Firenze, gli Este a Ferrara, i Gonzaga a Mantova.":
    "In the fourteenth century faction fighting wears out the communal institutions, and in one city after another a man or a family takes power for good: the **signorie** are born, and in the following century become recognised **principalities**. The Visconti and then the Sforza in Milan, the Medici in Florence, the Este in Ferrara, the Gonzaga in Mantua.",
  "Venezia fa eccezione e resta una repubblica per oltre mille anni, fino al 1797: la **Serenissima**, governata da un doge eletto e da un consiglio di patrizi.":
    "Venice is the exception and stays a republic for over a thousand years, until 1797: the **Serenissima**, governed by an elected doge and a council of patricians.",
  "Quale città mantiene un ordinamento repubblicano fino al 1797?":
    "Which city keeps a republican constitution until 1797?",
  "Milano": "Milan",
  "Firenze": "Florence",
  "Venezia": "Venice",
  "Napoli": "Naples",
  "La Repubblica di Venezia dura oltre mille anni e finisce solo con l'arrivo di Napoleone. Milano e Firenze passano invece a signorie ereditarie, e Napoli è un regno fin dal Medioevo.":
    "The Republic of Venice lasts over a thousand years and ends only with Napoleon's arrival. Milan and Florence pass instead to hereditary signorie, and Naples has been a kingdom since the Middle Ages.",
  "Medioevo non significa immobilità. Fra il 1100 e il 1300 l'Italia inventa la banca moderna, la partita doppia, l'università come corporazione — Bologna, 1088 — e la lettera di cambio: strumenti che l'Europa userà per secoli.":
    "The Middle Ages do not mean standing still. Between 1100 and 1300 Italy invents the modern bank, double-entry bookkeeping, the university as a guild — Bologna, 1088 — and the bill of exchange: instruments Europe would use for centuries.",
  // it-rinascimento
  "Il Rinascimento e gli Stati italiani": "The Renaissance and the Italian states",
  "Perché conta: nello stesso mezzo secolo l'Italia raggiunge il vertice della propria influenza culturale e perde ogni indipendenza politica. Le due cose accadono insieme, e non per caso.":
    "Why this matters: in the same half-century Italy reaches the peak of its cultural influence and loses every scrap of political independence. The two things happen together, and not by chance.",
  "Cinque Stati in equilibrio": "Five states in balance",
  "La **pace di Lodi**, nel **1454**, chiude decenni di guerre fra le potenze della penisola e fissa un equilibrio fra cinque Stati: il **Ducato di Milano**, la **Repubblica di Venezia**, la **Repubblica di Firenze**, lo **Stato della Chiesa** e il **Regno di Napoli**.":
    "The **Peace of Lodi**, in **1454**, ends decades of war between the powers of the peninsula and fixes a balance between five states: the **Duchy of Milan**, the **Republic of Venice**, the **Republic of Florence**, the **Papal States** and the **Kingdom of Naples**.",
  "Nessuno è abbastanza forte da prevalere, e per quarant'anni la diplomazia sostituisce la guerra. È in questo intervallo che nascono le **ambasciate permanenti**, un'invenzione italiana che l'Europa adotterà per intero.":
    "None is strong enough to prevail, and for forty years diplomacy takes the place of war. It is in this interval that **permanent embassies** are born, an Italian invention Europe would adopt entirely.",
  "Firenze e i Medici": "Florence and the Medici",
  "I **Medici** sono banchieri prima che signori, e governano Firenze senza cariche formali: comprano consenso, sposano alleanze e finanziano artisti. **Lorenzo il Magnifico** tiene in piedi l'equilibrio di Lodi con la sola abilità politica, e muore nel **1492**.":
    "The **Medici** are bankers before they are lords, and they govern Florence without formal office: they buy consent, marry alliances and finance artists. **Lorenzo the Magnificent** keeps the balance of Lodi standing by political skill alone, and dies in **1492**.",
  "Le arti": "The arts",
  // it-rinascimento
  "Leonardo, Michelangelo, Raffaello, Brunelleschi, Botticelli: in tre generazioni una penisola di pochi milioni di abitanti produce una parte enorme dell'arte europea.":
    "Leonardo, Michelangelo, Raphael, Brunelleschi, Botticelli: in three generations a peninsula of a few million people produces an enormous share of European art.",
  "Il pensiero politico": "Political thought",
  "Machiavelli scrive Il Principe nel 1513, osservando il potere per come funziona invece che per come dovrebbe essere.":
    "Machiavelli writes The Prince in 1513, watching power as it works rather than as it ought to be.",
  "La scienza": "Science",
  "Galileo fonda il metodo sperimentale, e nel 1633 è processato per aver sostenuto che la Terra gira intorno al Sole.":
    "Galileo founds the experimental method, and in 1633 is tried for holding that the Earth goes round the Sun.",
  "Quali sono i cinque Stati dell'equilibrio fissato dalla pace di Lodi?":
    "Which are the five states of the balance fixed by the Peace of Lodi?",
  "Milano, Venezia, Firenze, Stato della Chiesa e Regno di Napoli":
    "Milan, Venice, Florence, the Papal States and the Kingdom of Naples",
  "Milano, Torino, Genova, Firenze e Roma": "Milan, Turin, Genoa, Florence and Rome",
  "Venezia, Genova, Pisa, Amalfi e Napoli": "Venice, Genoa, Pisa, Amalfi and Naples",
  "Piemonte, Lombardia, Toscana, Lazio e Sicilia": "Piedmont, Lombardy, Tuscany, Lazio and Sicily",
  "Sono i cinque grandi del Quattrocento italiano. Genova, Pisa e Amalfi erano repubbliche marinare di due secoli prima, e le regioni moderne non esistevano ancora.":
    "These are the five great powers of fifteenth-century Italy. Genoa, Pisa and Amalfi were maritime republics of two centuries earlier, and the modern regions did not yet exist.",
  "Il crollo": "The collapse",
  "Nel **1494** **Carlo VIII** di Francia scende in Italia con un esercito che nessuno Stato italiano può fermare da solo. Comincia il ciclo delle **guerre d'Italia**, che dura fino alla pace di **Cateau-Cambrésis** nel **1559** e si combatte quasi interamente sul suolo italiano fra eserciti stranieri.":
    "In **1494** **Charles VIII** of France comes down into Italy with an army no Italian state can stop on its own. The cycle of the **Italian Wars** begins; it lasts until the Peace of **Cateau-Cambrésis** in **1559** and is fought almost entirely on Italian soil between foreign armies.",
  "Nel **1527** i lanzichenecchi imperiali saccheggiano Roma: il **sacco di Roma** è la data che gli storici prendono per la fine del Rinascimento come stagione fiduciosa. Alla fine delle guerre la penisola è in mano alla **Spagna**, che vi resterà per un secolo e mezzo, e dopo di essa all'**Austria**.":
    "In **1527** the imperial landsknechts sack Rome: the **Sack of Rome** is the date historians take for the end of the Renaissance as a confident age. When the wars end the peninsula is in the hands of **Spain**, which will stay for a century and a half, and after it of **Austria**.",
  "Che cosa comincia con la discesa di Carlo VIII nel 1494?":
    "What begins with Charles VIII's descent in 1494?",
  "L'unificazione della penisola": "The unification of the peninsula",
  "Le guerre d'Italia, combattute in casa da eserciti stranieri":
    "The Italian Wars, fought at home by foreign armies",
  "La costruzione dello Stato della Chiesa": "The building of the Papal States",
  "La nascita delle repubbliche marinare": "The birth of the maritime republics",
  "L'equilibrio di Lodi si rivela fragile davanti a uno Stato nazionale che può schierare un esercito grande. Da lì al 1559 l'Italia è il campo su cui Francia e Spagna decidono chi comanda in Europa.":
    "The balance of Lodi turns out to be fragile against a national state able to field a large army. From then until 1559 Italy is the field on which France and Spain decide who commands in Europe.",
  "Due secoli in ombra": "Two centuries in the shade",
  "Il Sei e il Settecento sono i secoli in cui il baricentro europeo si sposta sull'Atlantico e le città italiane, vissute di commercio mediterraneo, perdono peso. Restano però primati culturali che si esportano: il **melodramma**, nato a Firenze intorno al 1600 e diventato la forma teatrale d'Europa; e la **musica strumentale** di Vivaldi, Corelli e Scarlatti.":
    "The seventeenth and eighteenth centuries are the ones in which Europe's centre of gravity moves to the Atlantic and the Italian cities, which lived on Mediterranean trade, lose weight. What remains are cultural firsts that travel: **opera**, born in Florence around 1600 and become the theatrical form of Europe; and the **instrumental music** of Vivaldi, Corelli and Scarlatti.",
  "Nel Settecento l'Italia diventa la meta obbligata del **Grand Tour**: i giovani aristocratici europei vengono a vedere le rovine e le collezioni. È il momento in cui si costruisce l'immagine dell'Italia come paese dell'arte — un'immagine che vale ancora, e che il turismo di oggi eredita direttamente.":
    "In the eighteenth century Italy becomes the obligatory destination of the **Grand Tour**: young European aristocrats come to see the ruins and the collections. It is the moment when the image of Italy as the country of art is built — an image that still holds, and that today's tourism inherits directly.",
  "Che cos'era il Grand Tour?": "What was the Grand Tour?",
  "Un giro in carrozza fra le corti italiane per motivi diplomatici":
    "A carriage tour of the Italian courts on diplomatic business",
  "Il viaggio di formazione che portava i giovani europei a vedere l'arte italiana":
    "The formative journey that brought young Europeans to see Italian art",
  "Una gara ciclistica dell'Ottocento": "A nineteenth-century cycling race",
  "Il percorso delle Repubbliche marinare verso l'Oriente":
    "The route of the maritime republics towards the East",
  "Fra Sei e Ottocento il viaggio in Italia era considerato parte dell'educazione di un giovane colto europeo. Da quella pratica nasce buona parte dell'immagine internazionale del paese.":
    "Between the seventeenth and the nineteenth centuries a journey to Italy was considered part of an educated young European's upbringing. Much of the country's international image comes from that practice.",
  "Rinascimento non è un periodo politico ma culturale, e i due calendari non coincidono: quando l'arte italiana è al suo apice, l'indipendenza politica è già finita.":
    "The Renaissance is a cultural period, not a political one, and the two calendars do not match: when Italian art is at its height, political independence is already gone.",
  // it-risorgimento
  "Il Risorgimento e l'Unità": "The Risorgimento and unification",
  "Perché conta: l'Italia unita ha poco più di centosessant'anni, meno della Germania di poco e molto meno di Francia o Spagna. È un paese antico e uno Stato giovane, e quasi tutte le sue tensioni nascono da questa differenza.":
    "Why this matters: united Italy is a little over a hundred and sixty years old, slightly younger than Germany and far younger than France or Spain. It is an ancient country and a young state, and almost all its tensions come from that difference.",
  "Napoleone e la Restaurazione": "Napoleon and the Restoration",
  "Nel **1796** Napoleone entra in Italia e riorganizza la penisola in repubbliche satelliti. È allora che nasce il **tricolore**, ed è allora che per la prima volta da secoli si parla di un'Italia come entità politica possibile.":
    "In **1796** Napoleon enters Italy and reorganises the peninsula into satellite republics. That is when the **tricolore** is born, and when for the first time in centuries people speak of an Italy as a possible political entity.",
  "Il **congresso di Vienna**, nel **1815**, rimette ogni cosa al suo posto: l'Austria in Lombardia e Veneto, i Borbone a Napoli, il papa a Roma, i Savoia in Piemonte. Ma l'idea è ormai in circolazione, e le società segrete come la **Carboneria** la fanno viaggiare.":
    "The **Congress of Vienna**, in **1815**, puts everything back in its place: Austria in Lombardy and Veneto, the Bourbons in Naples, the pope in Rome, the Savoys in Piedmont. But the idea is now in circulation, and secret societies like the **Carbonari** carry it about.",
  "Mazzini": "Mazzini",
  "Fonda la Giovine Italia nel 1831. Vuole una repubblica unitaria fatta dal popolo, e passa la vita in esilio.":
    "Founds Young Italy in 1831. He wants a unitary republic made by the people, and spends his life in exile.",
  "Cavour": "Cavour",
  "Primo ministro del Piemonte. Punta su diplomazia, ferrovie e alleanze internazionali più che sulle insurrezioni.":
    "Prime minister of Piedmont. He counts on diplomacy, railways and international alliances rather than on insurrections.",
  "Garibaldi": "Garibaldi",
  "Il combattente. Nel 1860 conquista il Regno delle Due Sicilie con mille volontari e lo consegna al re.":
    "The fighter. In 1860 he conquers the Kingdom of the Two Sicilies with a thousand volunteers and hands it to the king.",
  "Vittorio Emanuele II": "Victor Emmanuel II",
  "Re di Sardegna e poi primo re d'Italia. Mantiene il numero dinastico piemontese, il che dice molto su come nacque il nuovo Stato.":
    "King of Sardinia and then the first king of Italy. He kept the Piedmontese dynastic number, which says a great deal about how the new state came about.",
  "Il 1848 e lo Statuto": "1848 and the Statuto",
  "Il **1848** è l'anno delle rivoluzioni in tutta Europa. A Milano ci sono le **cinque giornate**, a Venezia si proclama una repubblica, a Roma un'altra. Quasi tutto viene represso, ma resta una cosa: il **4 marzo 1848** Carlo Alberto concede lo **Statuto albertino**, la costituzione del Regno di Sardegna.":
    "**1848** is the year of revolutions across Europe. In Milan there are the **five days**, in Venice a republic is proclaimed, in Rome another. Almost all of it is put down, but one thing remains: on **4 March 1848** Charles Albert grants the **Statuto albertino**, the constitution of the Kingdom of Sardinia.",
  "Lo Statuto sarà la costituzione dell'Italia unita fino al 1948. Era **flessibile**, cioè modificabile con legge ordinaria: è la ragione per cui il fascismo poté svuotarlo senza mai violarlo formalmente, e la ragione per cui i costituenti del 1947 vollero una costituzione **rigida**.":
    "The Statuto would be the constitution of united Italy until 1948. It was **flexible**, that is, alterable by ordinary law: that is why fascism could hollow it out without ever formally breaking it, and why the framers of 1947 wanted a **rigid** constitution.",
  "Perché lo Statuto albertino non impedì l'ascesa del fascismo?":
    "Why did the Statuto albertino not prevent the rise of fascism?",
  "Perché non prevedeva un parlamento": "Because it provided for no parliament",
  "Perché era flessibile e modificabile con legge ordinaria":
    "Because it was flexible and could be changed by ordinary law",
  "Perché era stato sospeso nel 1915": "Because it had been suspended in 1915",
  "Perché non valeva nel Sud": "Because it did not apply in the South",
  "Bastavano leggi ordinarie per cambiarne l'impianto, e il regime procedette così, senza mai abrogarlo. Da qui la scelta del 1947: una costituzione rigida, con procedura aggravata e un nucleo immodificabile.":
    "Ordinary laws were enough to change its structure, and the regime proceeded that way, without ever repealing it. Hence the choice of 1947: a rigid constitution, with a heavier procedure and a core that cannot be altered.",
  "Dieci anni decisivi": "Ten decisive years",
  "Nel **1859** la seconda guerra d'indipendenza, combattuta con la Francia, porta al Piemonte la Lombardia. Nel **1860** i plebisciti annettono Emilia e Toscana, mentre **Garibaldi** sbarca a Marsala con i **Mille** e in pochi mesi conquista il Sud, che consegna al re a Teano.":
    "In **1859** the second war of independence, fought alongside France, brings Lombardy to Piedmont. In **1860** plebiscites annex Emilia and Tuscany, while **Garibaldi** lands at Marsala with the **Thousand** and in a few months conquers the South, which he hands to the king at Teano.",
  "Il **17 marzo 1861** il primo Parlamento italiano proclama il **Regno d'Italia**. Mancano ancora il **Veneto**, che arriva nel **1866**, e **Roma**, presa il **20 settembre 1870** attraverso la breccia di Porta Pia. La capitale si sposta tre volte: Torino, Firenze, Roma.":
    "On **17 March 1861** the first Italian Parliament proclaims the **Kingdom of Italy**. **Veneto** is still missing, arriving in **1866**, and so is **Rome**, taken on **20 September 1870** through the breach at Porta Pia. The capital moves three times: Turin, Florence, Rome.",
  "Quale territorio entra nel Regno d'Italia per ultimo fra questi?":
    "Which of these territories entered the Kingdom of Italy last?",
  "La Lombardia": "Lombardy",
  "La Toscana": "Tuscany",
  "Il Veneto": "Veneto",
  "Roma": "Rome",
  "Lombardia nel 1859, Toscana nel 1860, Veneto nel 1866, Roma nel 1870. Trento e Trieste arriveranno solo dopo la Prima guerra mondiale.":
    "Lombardy in 1859, Tuscany in 1860, Veneto in 1866, Rome in 1870. Trento and Trieste would arrive only after the First World War.",
  "Uno Stato senza cittadini": "A state without citizens",
  "Al momento dell'Unità votava una piccolissima parte della popolazione, l'analfabetismo superava il settanta per cento e l'italiano era parlato da una minoranza. La frase più citata sul periodo — fatta l'Italia, restano da fare gli italiani — è attribuita a Massimo d'Azeglio, e la paternità è discussa; ma coglie il problema.":
    "At unification a very small part of the population had the vote, illiteracy was above seventy per cent and Italian was spoken by a minority. The most quoted sentence about the period — Italy has been made, now we must make the Italians — is attributed to Massimo d'Azeglio, and the attribution is disputed; but it catches the problem.",
  "Nel Sud l'annessione porta tasse nuove, leva obbligatoria e una repressione durissima del **brigantaggio**, un fenomeno insieme criminale e di rivolta sociale. Da lì nasce la **questione meridionale**, e da lì comincia l'**emigrazione**: fra il 1861 e il 1970 lasciano il paese circa **ventisei milioni** di persone.":
    "In the South, annexation brought new taxes, compulsory conscription and a very harsh repression of **brigandage**, a phenomenon at once criminal and a social revolt. From there comes the **southern question**, and from there begins the **emigration**: between 1861 and 1970 about **twenty-six million** people leave the country.",
  "Che cos'è la questione meridionale?": "What is the southern question?",
  "La disputa sui confini fra Regno d'Italia e Regno delle Due Sicilie":
    "The border dispute between the Kingdom of Italy and the Kingdom of the Two Sicilies",
  "Il divario economico e sociale fra Sud e Nord aperto dopo l'Unità":
    "The economic and social gap between South and North that opened after unification",
  "Il dibattito sulla capitale da assegnare al nuovo Stato":
    "The debate over which capital to give the new state",
  "La controversia sulla lingua da adottare nelle scuole del Sud":
    "The controversy over which language to use in southern schools",
  "L'unificazione applicò al Mezzogiorno leggi, tasse e tariffe pensate per il Nord, e il divario che ne seguì non si è mai chiuso. È il tema su cui l'Italia discute ininterrottamente da centosessant'anni.":
    "Unification applied to the South laws, taxes and tariffs designed for the North, and the gap that followed has never closed. It is the subject Italy has been arguing about without a break for a hundred and sixty years.",
  "Il Regno d'Italia comincia con **Vittorio Emanuele II**, non primo: il re conservò il numero che aveva come sovrano di Sardegna. Un dettaglio che dice come l'Unità fu vissuta al Sud — un'annessione al Piemonte più che una fondazione comune.":
    "The Kingdom of Italy begins with **Victor Emmanuel II**, not the first: the king kept the number he had as sovereign of Sardinia. A detail that says how unification was experienced in the South — an annexation to Piedmont rather than a common founding.",
  // it-guerre-fascismo
  "Le guerre mondiali e il fascismo": "The world wars and fascism",
  "Perché conta: fra il 1915 e il 1945 l'Italia entra in due guerre mondiali, perde una monarchia, sperimenta una dittatura e si ritrova occupata e divisa in due. Tutto ciò che viene dopo è una risposta a questo trentennio.":
    "Why this matters: between 1915 and 1945 Italy enters two world wars, loses a monarchy, lives through a dictatorship and finds itself occupied and cut in two. Everything that comes afterwards is an answer to those thirty years.",
  "La Grande guerra": "The Great War",
  "L'Italia entra in guerra nel **1915**, dopo aver firmato in segreto il **patto di Londra** con Francia, Gran Bretagna e Russia, e nonostante fosse alleata degli imperi centrali. Il paese si spacca fra interventisti e neutralisti, e la decisione viene presa dal governo e dal re più che dal Parlamento.":
    "Italy enters the war in **1915**, after signing the **Treaty of London** in secret with France, Britain and Russia, and despite being allied to the central empires. The country splits between interventionists and neutralists, and the decision is taken by the government and the king rather than by Parliament.",
  "Seguono tre anni e mezzo di guerra di trincea sull'Isonzo e sul Carso, la rotta di **Caporetto** nel **1917**, e la vittoria di **Vittorio Veneto** nel **1918**. I morti italiani sono circa **seicentomila**.":
    "There follow three and a half years of trench warfare on the Isonzo and the Carso, the rout of **Caporetto** in **1917**, and the victory of **Vittorio Veneto** in **1918**. The Italian dead number about **six hundred thousand**.",
  "Alla conferenza di pace l'Italia ottiene Trento, Trieste, l'Alto Adige e l'Istria, ma non tutto ciò che il patto di Londra prometteva. Nasce la formula della **vittoria mutilata**, che alimenta il risentimento su cui il fascismo costruirà il proprio consenso.":
    "At the peace conference Italy obtains Trento, Trieste, Alto Adige and Istria, but not everything the Treaty of London promised. The phrase **mutilated victory** is born, feeding the resentment on which fascism would build its support.",
  "Che cosa indica l'espressione vittoria mutilata?": "What does the expression mutilated victory refer to?",
  "La sconfitta di Caporetto": "The defeat at Caporetto",
  "Il senso che l'Italia avesse vinto ottenendo meno del promesso":
    "The sense that Italy had won while getting less than it was promised",
  "Le perdite militari della Grande guerra": "The military losses of the Great War",
  "La divisione del paese nel 1943": "The division of the country in 1943",
  "L'Italia ottenne meno di quanto il patto di Londra le avesse riconosciuto, e su questo scarto si costruì un risentimento che i movimenti nazionalisti usarono a piene mani.":
    "Italy obtained less than the Treaty of London had granted it, and on that gap a resentment was built which the nationalist movements used to the full.",
  "La presa del potere": "The seizure of power",
  "Nel **1919** nascono i **Fasci italiani di combattimento**. In un paese scosso da scioperi, occupazioni di fabbriche e violenza politica, le squadre fasciste si presentano come forza d'ordine e vengono tollerate da industriali, proprietari terrieri e apparati dello Stato.":
    "In **1919** the **Fasci italiani di combattimento** are founded. In a country shaken by strikes, factory occupations and political violence, the fascist squads present themselves as a force of order and are tolerated by industrialists, landowners and the machinery of the state.",
  "Il **28 ottobre 1922** le squadre convergono su Roma. **Vittorio Emanuele III** rifiuta di firmare lo stato d'assedio che l'esercito avrebbe eseguito senza difficoltà, e il 30 ottobre incarica **Mussolini** di formare il governo. Il passaggio avviene formalmente dentro le regole dello Statuto: è così che finisce l'Italia liberale.":
    "On **28 October 1922** the squads converge on Rome. **Victor Emmanuel III** refuses to sign the state of siege the army would have carried out without difficulty, and on 30 October asks **Mussolini** to form a government. The transfer takes place formally within the rules of the Statuto: that is how liberal Italy ends.",
  "Che cosa fece Vittorio Emanuele III il 28 ottobre 1922?":
    "What did Victor Emmanuel III do on 28 October 1922?",
  "Firmò lo stato d'assedio e fece fermare le squadre":
    "He signed the state of siege and had the squads stopped",
  "Rifiutò lo stato d'assedio e incaricò Mussolini di formare il governo":
    "He refused the state of siege and asked Mussolini to form a government",
  "Abdicò a favore del figlio": "He abdicated in favour of his son",
  "Sciolse il Parlamento e indisse elezioni": "He dissolved Parliament and called an election",
  "L'esercito avrebbe potuto fermare la marcia senza difficoltà. La firma non arrivò, e due giorni dopo Mussolini ricevette l'incarico: una scelta del re, non un colpo di Stato riuscito con la forza.":
    "The army could have stopped the march without difficulty. The signature never came, and two days later Mussolini was asked to govern: a choice by the king, not a coup that succeeded by force.",
  "Il regime": "The regime",
  "1924 · Matteotti": "1924 · Matteotti",
  "Il deputato socialista Giacomo Matteotti denuncia i brogli elettorali e viene rapito e ucciso. È la crisi che il regime supera assumendosi ogni responsabilità.":
    "The socialist deputy Giacomo Matteotti denounces electoral fraud and is abducted and killed. It is the crisis the regime survives by taking full responsibility for it.",
  "1925–26 · Le leggi fascistissime": "1925–26 · The ultra-fascist laws",
  "Sciolti i partiti, soppressa la stampa libera, istituito il Tribunale speciale. Lo Stato liberale finisce senza che lo Statuto sia mai abrogato.":
    "Parties dissolved, the free press suppressed, a Special Tribunal set up. The liberal state ends without the Statuto ever being repealed.",
  "1929 · I Patti Lateranensi": "1929 · The Lateran Pacts",
  "Con la Santa Sede si chiude la questione romana aperta nel 1870. Nasce lo Stato della Città del Vaticano.":
    "With the Holy See the Roman question opened in 1870 is closed. The Vatican City State comes into being.",
  "1938 · Le leggi razziali": "1938 · The racial laws",
  "Gli ebrei italiani sono esclusi da scuole, professioni e vita pubblica. È il preludio alle deportazioni che seguiranno dal 1943.":
    "Italian Jews are excluded from schools, professions and public life. It is the prelude to the deportations that follow from 1943.",
  "Nel **1935** l'invasione dell'**Etiopia** porta le sanzioni della Società delle Nazioni e spinge l'Italia verso la Germania. L'**asse Roma-Berlino** è del 1936, il **patto d'acciaio** del 1939.":
    "In **1935** the invasion of **Ethiopia** brings sanctions from the League of Nations and pushes Italy towards Germany. The **Rome-Berlin Axis** dates from 1936, the **Pact of Steel** from 1939.",
  "La seconda guerra e la rottura": "The second war and the break",
  "L'Italia entra in guerra il **10 giugno 1940**, impreparata. Dopo tre anni di sconfitte, il **25 luglio 1943** il Gran consiglio del fascismo mette Mussolini in minoranza e il re lo fa arrestare. L'**8 settembre 1943** viene annunciato l'**armistizio** con gli Alleati.":
    "Italy enters the war on **10 June 1940**, unprepared. After three years of defeats, on **25 July 1943** the Fascist Grand Council leaves Mussolini in a minority and the king has him arrested. On **8 September 1943** the **armistice** with the Allies is announced.",
  "Il re e il governo lasciano Roma senza dare ordini chiari all'esercito, che si dissolve. I tedeschi occupano il centro-nord e vi installano la **Repubblica sociale italiana**. Il paese è tagliato in due, con un fronte che risale lentamente la penisola per venti mesi: è **guerra civile** oltre che guerra di liberazione.":
    "The king and the government leave Rome without giving the army clear orders, and it dissolves. The Germans occupy the centre and north and install the **Italian Social Republic** there. The country is cut in two, with a front moving slowly up the peninsula for twenty months: it is a **civil war** as well as a war of liberation.",
  "Che cosa accade l'8 settembre 1943?": "What happens on 8 September 1943?",
  "Mussolini viene arrestato": "Mussolini is arrested",
  "Viene annunciato l'armistizio con gli Alleati": "The armistice with the Allies is announced",
  "L'Italia entra in guerra": "Italy enters the war",
  "Le città del Nord insorgono": "The cities of the North rise up",
  // it-guerre-fascismo
  "L'arresto di Mussolini è del 25 luglio, l'entrata in guerra del 10 giugno 1940 e l'insurrezione del 25 aprile 1945. L'8 settembre è l'annuncio dell'armistizio, seguito dal collasso dell'esercito e dall'occupazione tedesca.":
    "Mussolini's arrest is 25 July, the entry into the war 10 June 1940 and the insurrection 25 April 1945. 8 September is the announcement of the armistice, followed by the collapse of the army and the German occupation.",
  "Fra il settembre 1943 e l'aprile 1945 esistono due Italie: il Regno del Sud, cobelligerante degli Alleati, e la Repubblica sociale al Nord, sotto controllo tedesco. Molte date di questo periodo valgono per una sola metà del paese.":
    "Between September 1943 and April 1945 there are two Italies: the Kingdom of the South, co-belligerent with the Allies, and the Social Republic in the North, under German control. Many dates from this period hold for only one half of the country.",
  // it-resistenza-repubblica
  "Resistenza, Repubblica e dopoguerra": "Resistance, Republic and the post-war years",
  "Perché conta: la Costituzione non nasce a tavolino. Nasce da chi ha combattuto una guerra civile e ha poi dovuto scrivere insieme le regole di un paese in macerie. Quasi ogni articolo porta il segno di quell'esperienza.":
    "Why this matters: the Constitution was not drawn up at a desk. It came from people who had fought a civil war and then had to write the rules of a country in ruins together. Almost every article bears the mark of that experience.",
  "La Resistenza": "The Resistance",
  "Dopo l'8 settembre 1943 si organizzano le formazioni partigiane, coordinate dal **Comitato di liberazione nazionale**, in cui siedono insieme comunisti, socialisti, democratici cristiani, liberali e azionisti: forze che si combatteranno per i decenni successivi ma che in quel momento scrivono insieme.":
    "After 8 September 1943 the partisan formations organise, coordinated by the **National Liberation Committee**, in which Communists, Socialists, Christian Democrats, Liberals and Actionists sit together: forces that would fight each other for decades afterwards but that at that moment write together.",
  "Il **25 aprile 1945** il Comitato per l'alta Italia proclama l'insurrezione generale, e Milano e Torino sono liberate prima dell'arrivo degli Alleati. La data è oggi festa nazionale: ricorda la Resistenza, non la firma della resa.":
    "On **25 April 1945** the Committee for Upper Italy proclaims a general insurrection, and Milan and Turin are freed before the Allies arrive. The date is now a national holiday: it marks the Resistance, not the signing of a surrender.",
  "Che cosa proclama il Comitato di liberazione nazionale il 25 aprile 1945?":
    "What does the National Liberation Committee proclaim on 25 April 1945?",
  "La nascita della Repubblica": "The birth of the Republic",
  "L'insurrezione generale nelle città del Nord": "A general insurrection in the cities of the North",
  "L'armistizio con gli Alleati": "The armistice with the Allies",
  "L'insurrezione. La Repubblica nasce dal referendum del 2 giugno 1946 e la Costituzione entra in vigore il 1º gennaio 1948: tre date diverse, spesso confuse fra loro.":
    "The insurrection. The Republic is born from the referendum of 2 June 1946 and the Constitution comes into force on 1 January 1948: three different dates, often confused with one another.",
  "Dalla monarchia alla Repubblica": "From monarchy to Republic",
  "Il **2 giugno 1946** gli italiani votano su due schede: la forma dello Stato e l'Assemblea costituente. La **repubblica** prevale con circa il cinquantaquattro per cento, con un Nord largamente repubblicano e un Sud in maggioranza monarchico. **Umberto II** lascia il paese, e la monarchia sabauda finisce dopo ottantacinque anni.":
    "On **2 June 1946** Italians vote on two ballot papers: the form of the state and the Constituent Assembly. The **republic** wins with about fifty-four per cent, with a largely republican North and a mostly monarchist South. **Umberto II** leaves the country, and the House of Savoy's monarchy ends after eighty-five years.",
  "L'Assemblea lavora un anno e mezzo e il **1º gennaio 1948** la Costituzione entra in vigore. Il **18 aprile 1948** si tengono le prime elezioni politiche repubblicane, in un clima segnato dall'inizio della guerra fredda.":
    "The Assembly works for a year and a half and on **1 January 1948** the Constitution comes into force. On **18 April 1948** the first republican general election is held, in an atmosphere marked by the beginning of the Cold War.",
  "Il miracolo economico": "The economic miracle",
  "Con il **piano Marshall** e la ricostruzione, fra il **1958 e il 1963** l'Italia cresce a ritmi che nessun altro paese europeo tocca nello stesso periodo, a parte la Germania. È il **boom economico**: da paese prevalentemente agricolo a potenza industriale in una generazione.":
    "With the **Marshall Plan** and reconstruction, between **1958 and 1963** Italy grows at rates no other European country matches in the same period apart from Germany. This is the **economic boom**: from a largely agricultural country to an industrial power in one generation.",
  "La migrazione interna": "Internal migration",
  "Milioni di persone lasciano il Sud e il Nordest per le fabbriche del triangolo industriale fra Torino, Milano e Genova.":
    "Millions of people leave the South and the North-East for the factories of the industrial triangle between Turin, Milan and Genoa.",
  "Gli oggetti": "The objects",
  "La Fiat 500, la Vespa, il frigorifero, il televisore. Il consumo di massa arriva insieme all'unificazione linguistica.":
    "The Fiat 500, the Vespa, the fridge, the television set. Mass consumption arrives together with the unification of the language.",
  "L'Europa": "Europe",
  "Nel 1957 l'Italia firma a Roma i trattati che istituiscono la Comunità economica europea: non vi aderisce, la fonda.":
    "In 1957 Italy signs in Rome the treaties establishing the European Economic Community: it does not join it, it founds it.",
  "Che cosa fu il boom economico italiano?": "What was the Italian economic boom?",
  "La ripresa dopo la crisi petrolifera del 1973": "The recovery after the oil crisis of 1973",
  "La crescita fra il 1958 e il 1963 che rese l'Italia un paese industriale":
    "The growth between 1958 and 1963 that made Italy an industrial country",
  "L'espansione coloniale degli anni Trenta": "The colonial expansion of the thirties",
  "L'aumento delle esportazioni dopo l'ingresso nell'euro": "The rise in exports after joining the euro",
  "In pochi anni l'Italia passò da economia in larga parte agricola a potenza industriale, con una migrazione interna di milioni di persone. La crisi petrolifera del 1973 chiude piuttosto quella stagione.":
    "In a few years Italy went from a largely agricultural economy to an industrial power, with an internal migration of millions of people. The oil crisis of 1973 rather closes that season.",
  "Gli anni difficili": "The difficult years",
  "Dalla fine degli anni Sessanta il paese attraversa una lunga stagione di violenza politica, chiamata **anni di piombo**: stragi con matrice neofascista, terrorismo di sinistra, apparati dello Stato deviati. Nel **1978** le **Brigate rosse** rapiscono **Aldo Moro**, uccidendo i cinque uomini della scorta, e lo assassinano dopo cinquantacinque giorni. Nel **1980** una bomba alla stazione di **Bologna** uccide ottantacinque persone.":
    "From the end of the sixties the country goes through a long season of political violence, called the **years of lead**: massacres with neo-fascist roots, left-wing terrorism, rogue elements in the machinery of the state. In **1978** the **Red Brigades** kidnap **Aldo Moro**, killing the five men of his escort, and murder him after fifty-five days. In **1980** a bomb at **Bologna** station kills eighty-five people.",
  "All'inizio degli anni Novanta l'inchiesta **Mani pulite** porta alla luce un sistema diffuso di finanziamento illecito dei partiti. Fra il **1992** e il **1994** i partiti che avevano governato dal dopoguerra si dissolvono quasi tutti: è la fine di quella che si chiama **Prima Repubblica**. Nello stesso 1992 le stragi di Capaci e via d'Amelio uccidono i giudici **Falcone** e **Borsellino**.":
    "At the start of the nineties the **Mani pulite** investigation brings to light a widespread system of illegal party funding. Between **1992** and **1994** almost all the parties that had governed since the war dissolve: it is the end of what is called the **First Republic**. In that same 1992 the Capaci and via d'Amelio bombings kill the judges **Falcone** and **Borsellino**.",
  "Che cosa fu Mani pulite?": "What was Mani pulite?",
  "Una riforma della pubblica amministrazione": "A reform of the public administration",
  "L'inchiesta sul finanziamento illecito dei partiti che portò alla fine della Prima Repubblica":
    "The investigation into illegal party funding that brought the First Republic to an end",
  "Un movimento studentesco degli anni Settanta": "A student movement of the seventies",
  "Il piano di risanamento dei conti per entrare nell'euro":
    "The plan to repair the public finances in order to join the euro",
  "L'inchiesta milanese aperta nel 1992 rivelò un sistema di tangenti che coinvolgeva quasi tutti i partiti di governo. In due anni il quadro politico nato nel dopoguerra si dissolse.":
    "The Milan investigation opened in 1992 revealed a system of bribes involving almost every governing party. In two years the political landscape born after the war dissolved.",
  "Prima e Seconda Repubblica non sono categorie giuridiche: la Costituzione è sempre la stessa dal 1948. Indicano due stagioni del sistema dei partiti, separate dal biennio 1992-94.":
    "First and Second Republic are not legal categories: the Constitution has been the same since 1948. They mark two seasons of the party system, separated by the two years 1992–94.",
  // chapter
  "Territorio, economia e l'Italia nel mondo": "Territory, the economy and Italy in the world",
  // it-territorio
  "Il territorio": "The territory",
  "Perché conta: l'Italia è lunga milleduecento chilometri e larga in certi punti meno di cinquanta. Quasi tutto ciò che la riguarda — il clima, le cucine, i dialetti, perfino la politica — comincia da questa forma.":
    "Why this matters: Italy is twelve hundred kilometres long and in places less than fifty wide. Almost everything about it — the climate, the cuisines, the dialects, even the politics — starts from that shape.",
  "Una penisola e due catene": "A peninsula and two ranges",
  "Il paese misura circa **trecentomila chilometri quadrati** e conta poco meno di **sessanta milioni** di abitanti. Le **Alpi** ne chiudono il lato settentrionale e segnano il confine con Francia, Svizzera, Austria e Slovenia; gli **Appennini** lo percorrono per intero dal Nord alla Calabria, e proseguono in Sicilia.":
    "The country measures about **three hundred thousand square kilometres** and has a little under **sixty million** inhabitants. The **Alps** close its northern side and mark the border with France, Switzerland, Austria and Slovenia; the **Apennines** run its whole length from the north to Calabria, and continue into Sicily.",
  "Fra le due catene sta la **pianura padana**, l'unica grande pianura del paese e il suo motore agricolo e industriale. Il resto è in gran parte collina: la pianura copre poco più di un quinto del territorio, e questa scarsità spiega perché in Italia si costruisca in verticale sulle colline e si coltivi a terrazze.":
    "Between the two ranges lies the **Po plain**, the country's only large plain and its agricultural and industrial engine. The rest is largely hill country: the plain covers a little over a fifth of the territory, and that scarcity explains why in Italy people build upwards on hills and farm in terraces.",
  "Il Po": "The Po",
  "Il fiume più lungo, circa 650 chilometri dal Monviso all'Adriatico. Attraversa la pianura che porta il suo nome.":
    "The longest river, about 650 kilometres from Monviso to the Adriatic. It crosses the plain that bears its name.",
  "Il lago di Garda": "Lake Garda",
  "Il più grande dei laghi italiani, diviso fra tre regioni: Lombardia, Veneto e Trentino.":
    "The largest of the Italian lakes, divided between three regions: Lombardy, Veneto and Trentino.",
  "La Sicilia": "Sicily",
  "La più grande isola del Mediterraneo. La Sardegna è la seconda.":
    "The largest island in the Mediterranean. Sardinia is the second.",
  "Le coste": "The coasts",
  "Circa settemilacinquecento chilometri: nessun punto della penisola è lontanissimo dal mare.":
    "About seven and a half thousand kilometres: no point in the peninsula is very far from the sea.",
  "Qual è il fiume più lungo d'Italia?": "Which is the longest river in Italy?",
  "Il Tevere": "The Tiber",
  "L'Adige": "The Adige",
  "L'Arno": "The Arno",
  "Il Po, circa seicentocinquanta chilometri. L'Adige è il secondo, il Tevere il terzo: entrambi sono più corti di metà.":
    "The Po, about six hundred and fifty kilometres. The Adige is second and the Tiber third: both are less than half as long.",
  "Una terra che si muove": "A land that moves",
  "L'Italia si trova sulla linea di contatto fra la placca africana e quella euroasiatica, e questo la rende **sismica** quasi ovunque tranne che in Sardegna. I terremoti distruttivi ricorrono: il Belice, il Friuli, l'Irpinia, l'Umbria, L'Aquila, il Centro Italia. Ogni volta si riapre la stessa discussione sull'edilizia antisismica.":
    "Italy sits on the contact line between the African and the Eurasian plates, and that makes it **seismic** almost everywhere except Sardinia. Destructive earthquakes recur: the Belice, Friuli, Irpinia, Umbria, L'Aquila, central Italy. Each time the same argument about earthquake-proof building opens again.",
  "Gli stessi movimenti danno all'Italia i suoi **vulcani attivi**: l'**Etna**, il maggiore d'Europa, che erutta più volte l'anno; il **Vesuvio**, che nel **79 dopo Cristo** seppellì Pompei ed Ercolano e che sovrasta un'area densamente abitata; lo **Stromboli**, in attività quasi continua; e i **Campi Flegrei**, una vasta caldera a ovest di Napoli.":
    "The same movements give Italy its **active volcanoes**: **Etna**, the largest in Europe, which erupts several times a year; **Vesuvius**, which in **AD 79** buried Pompeii and Herculaneum and which looms over a densely populated area; **Stromboli**, active almost without a break; and the **Campi Flegrei**, a vast caldera west of Naples.",
  "Qual è il lago più grande d'Italia?": "Which is the largest lake in Italy?",
  "Il lago di Como": "Lake Como",
  "Il lago Maggiore": "Lake Maggiore",
  "Il lago Trasimeno": "Lake Trasimeno",
  "Il Garda, diviso fra Lombardia, Veneto e Trentino. Maggiore e Como sono più piccoli, e il Trasimeno, il maggiore dell'Italia centrale, è molto più piccolo di tutti e tre.":
    "Garda, divided between Lombardy, Veneto and Trentino. Maggiore and Como are smaller, and Trasimeno, the largest in central Italy, is much smaller than all three.",
  "Il clima, al plurale": "The climate, in the plural",
  "Con questa lunghezza il clima non può essere uno solo. Le Alpi hanno inverni alpini e nevi permanenti; la pianura padana ha estati afose e nebbie invernali; le coste e le isole hanno il clima mediterraneo, con estati secche e inverni miti. Fra Bolzano e Lampedusa corrono più di dieci gradi di temperatura media annua.":
    "At this length the climate cannot be a single one. The Alps have alpine winters and permanent snow; the Po plain has muggy summers and winter fog; the coasts and the islands have a Mediterranean climate, with dry summers and mild winters. Between Bolzano and Lampedusa there are more than ten degrees of difference in mean annual temperature.",
  "Due Stati dentro": "Two states inside",
  "Nel territorio italiano si trovano due Stati indipendenti, entrambi **enclave**, cioè completamente circondati: la **Repubblica di San Marino**, sull'Appennino romagnolo, che si dice la più antica repubblica ancora esistente; e lo **Stato della Città del Vaticano**, nato con i Patti Lateranensi del 1929, il più piccolo Stato del mondo.":
    "Two independent states lie inside Italian territory, both **enclaves**, that is completely surrounded: the **Republic of San Marino**, in the Romagna Apennines, said to be the oldest republic still in existence; and the **Vatican City State**, born with the Lateran Pacts of 1929, the smallest state in the world.",
  "Quali due Stati indipendenti si trovano dentro il territorio italiano?":
    "Which two independent states lie inside Italian territory?",
  "Monaco e Andorra": "Monaco and Andorra",
  "San Marino e la Città del Vaticano": "San Marino and the Vatican City",
  "Malta e San Marino": "Malta and San Marino",
  "Il Liechtenstein e la Città del Vaticano": "Liechtenstein and the Vatican City",
  "San Marino e il Vaticano sono enclave, cioè circondati per intero dall'Italia. Monaco confina con la Francia, Andorra sta fra Francia e Spagna, e Malta e il Liechtenstein non confinano affatto con l'Italia.":
    "San Marino and the Vatican are enclaves, that is, entirely surrounded by Italy. Monaco borders France, Andorra lies between France and Spain, and Malta and Liechtenstein do not border Italy at all.",
  "Il **Monte Bianco**, 4.808 metri, è la vetta più alta della catena alpina; la sovranità della cima è oggetto di una controversia mai risolta con la Francia. Le carte dei due paesi non coincidono.":
    "**Mont Blanc**, 4,808 metres, is the highest peak of the Alpine chain; sovereignty over the summit is the subject of a dispute with France that has never been settled. The two countries' maps do not agree.",
  // it-citta-patrimonio
  "Le città e il patrimonio": "The cities and the heritage",
  "Perché conta: l'Italia non ha una sola grande città che concentri tutto, come Parigi o Londra. Ne ha molte, ciascuna con una storia da capitale, e questo cambia il modo in cui il paese funziona.":
    "Why this matters: Italy has no single great city that concentrates everything, as Paris or London do. It has many, each with a capital's history, and that changes the way the country works.",
  "Molte capitali mancate": "Many capitals that never were",
  "**Roma** è la più popolosa, con circa due milioni e mezzo di abitanti nel comune. Seguono **Milano**, **Napoli**, **Torino** e **Palermo**. Nessuna però assorbe il paese: Milano è il centro economico e finanziario, Torino quello industriale storico, Napoli la capitale del Mezzogiorno, Firenze e Venezia due città d'arte con un peso mondiale sproporzionato alla loro dimensione.":
    "**Rome** is the most populous, with about two and a half million people in the municipality. Then come **Milan**, **Naples**, **Turin** and **Palermo**. None of them absorbs the country, though: Milan is the economic and financial centre, Turin the historic industrial one, Naples the capital of the South, and Florence and Venice two cities of art with a world weight out of all proportion to their size.",
  "La ragione è nei quattordici secoli senza uno Stato unico: ogni città è stata capitale di qualcosa, e ne ha conservato il palazzo, il teatro, l'università e l'orgoglio.":
    "The reason lies in the fourteen centuries without a single state: every city was the capital of something, and kept the palace, the theatre, the university and the pride.",
  "Qual è la città italiana più popolosa?": "Which is the most populous Italian city?",
  "Torino": "Turin",
  "Roma, con circa due milioni e mezzo di abitanti nel comune. Milano è la seconda per popolazione comunale, pur avendo un'area metropolitana che per alcuni conteggi la avvicina.":
    "Rome, with about two and a half million people in the municipality. Milan is second by municipal population, though its metropolitan area brings it close on some counts.",
  "Il primato del patrimonio": "First in the world for heritage",
  "L'Italia è il **primo paese al mondo per numero di siti iscritti nella lista del patrimonio mondiale dell'UNESCO**, davanti alla Cina. Non si tratta soltanto di monumenti isolati: interi **centri storici** sono iscritti come un unico sito — Roma, Firenze, Venezia con la sua laguna, Napoli, Siena, Urbino, Ferrara.":
    "Italy is the **first country in the world for the number of sites on the UNESCO world heritage list**, ahead of China. These are not only isolated monuments: whole **historic centres** are listed as a single site — Rome, Florence, Venice with its lagoon, Naples, Siena, Urbino, Ferrara.",
  "Pompei ed Ercolano": "Pompeii and Herculaneum",
  "Sepolte dall'eruzione del Vesuvio nel 79 dopo Cristo e riscoperte nel Settecento: due città romane conservate come nessun'altra al mondo.":
    "Buried by the eruption of Vesuvius in AD 79 and rediscovered in the eighteenth century: two Roman towns preserved as nowhere else in the world.",
  "La Valle dei Templi": "The Valley of the Temples",
  "Ad Agrigento, in Sicilia: templi greci del quinto secolo avanti Cristo, in un'isola che fu Magna Grecia prima che Roma.":
    "At Agrigento in Sicily: Greek temples of the fifth century BC, on an island that was Magna Graecia before it was Rome.",
  "Le Dolomiti": "The Dolomites",
  "Iscritte come patrimonio naturale, non culturale: la lista comprende anche paesaggi.":
    "Listed as natural, not cultural, heritage: the list takes in landscapes too.",
  "I borghi": "The small towns",
  "Migliaia di piccoli centri storici non iscritti in nessuna lista compongono un patrimonio diffuso che nessun catalogo riesce a contenere.":
    "Thousands of small historic centres on no list at all make up a heritage spread so widely that no catalogue can hold it.",
  "Quale sito archeologico fu sepolto dall'eruzione del 79 dopo Cristo?":
    "Which archaeological site was buried by the eruption of AD 79?",
  "Pompei": "Pompeii",
  "Ostia antica": "Ostia Antica",
  "Paestum": "Paestum",
  "Pompei, insieme a Ercolano e Stabia. La Valle dei Templi è greca e in Sicilia, Paestum è greca in Campania e Ostia era il porto di Roma, abbandonato lentamente e non sepolto.":
    "Pompeii, along with Herculaneum and Stabiae. The Valley of the Temples is Greek and in Sicily, Paestum is Greek and in Campania, and Ostia was Rome's port, abandoned slowly rather than buried.",
  "Il turismo e i suoi problemi": "Tourism and its problems",
  "Il turismo è una delle principali voci dell'economia italiana e uno dei motivi per cui il paese è fra le prime destinazioni al mondo. Ma la concentrazione crea difficoltà proprie: **Venezia** e **Firenze** vedono i residenti diminuire mentre gli affitti brevi crescono, e in alcune giornate i visitatori superano gli abitanti.":
    "Tourism is one of the main items of the Italian economy and one of the reasons the country is among the world's leading destinations. But the concentration creates difficulties of its own: **Venice** and **Florence** see residents fall while short lets grow, and on some days the visitors outnumber the inhabitants.",
  "All'estremo opposto ci sono le **aree interne**: paesi appenninici che si spopolano, dove restano case vuote e servizi in chiusura. È il rovescio esatto della stessa medaglia, e le due cose sono spesso a poche decine di chilometri l'una dall'altra.":
    "At the opposite extreme are the **inner areas**: Apennine villages emptying out, where empty houses remain and services close. It is the exact reverse of the same coin, and the two are often a few dozen kilometres apart.",
  "Quale paese ha il maggior numero di siti nella lista del patrimonio mondiale UNESCO?":
    "Which country has the most sites on the UNESCO world heritage list?",
  "La Francia": "France",
  "La Spagna": "Spain",
  "L'Italia": "Italy",
  "La Grecia": "Greece",
  "L'Italia, davanti alla Cina. Il primato si spiega anche con la struttura del paese: molte città sono state capitali, e ciascuna ha conservato un centro storico intero.":
    "Italy, ahead of China. The record is also explained by the structure of the country: many cities have been capitals, and each has kept a whole historic centre.",
  "Un sito UNESCO non è sempre un edificio. Possono esserlo un intero centro storico, un paesaggio agricolo, una catena montuosa — e anche pratiche immateriali, come l'arte del pizzaiuolo napoletano.":
    "A UNESCO site is not always a building. It can be an entire historic centre, an agricultural landscape, a mountain range — and also intangible practices, such as the art of the Neapolitan pizzaiuolo.",
  // it-economia
  "L'economia": "The economy",
  "Perché conta: l'economia italiana non si capisce guardando le grandi aziende, perché non è fatta di quelle. È fatta di migliaia di imprese piccole che, messe insieme per territorio, funzionano come una grande.":
    "Why this matters: the Italian economy is not understood by looking at the large firms, because it is not made of them. It is made of thousands of small companies which, put together by territory, work like a large one.",
  "I distretti industriali": "The industrial districts",
  "Un **distretto industriale** è un territorio in cui molte piccole e medie imprese fanno tutte la stessa cosa, o parti diverse della stessa cosa, e si passano il lavoro. Non è un'invenzione a tavolino: è cresciuto dove c'era già un mestiere, spesso da botteghe artigiane.":
    "An **industrial district** is a territory in which many small and medium firms all do the same thing, or different parts of the same thing, and pass the work between them. It was not invented at a desk: it grew where a trade already existed, often out of craft workshops.",
  "Occhiali": "Eyewear",
  "Nel Bellunese, in Veneto: una valle alpina che produce una quota rilevante degli occhiali del mondo.":
    "In the Belluno area of Veneto: an Alpine valley that produces a sizeable share of the world's spectacles.",
  "Ceramica": "Ceramics",
  "A Sassuolo, in Emilia: piastrelle esportate ovunque, da un distretto nato attorno all'argilla locale.":
    "At Sassuolo in Emilia: tiles exported everywhere, from a district that grew up around the local clay.",
  "Calzature": "Footwear",
  "Nelle Marche e in Veneto, dove la scarpa si fa in filiera fra decine di piccole imprese vicine.":
    "In the Marche and Veneto, where a shoe is made along a chain of dozens of small firms close together.",
  "Meccanica": "Engineering",
  "Lungo la via Emilia: macchine per il packaging, motori, automazione. È il settore che esporta di più.":
    "Along the via Emilia: packaging machinery, engines, automation. It is the sector that exports most.",
  "Le esportazioni si riassumono spesso nelle **quattro A**: **abbigliamento**, **arredamento**, **automazione** e **alimentare**. Insieme al turismo, sono ciò per cui il paese è conosciuto sui mercati.":
    "Exports are often summed up in the **four A's**: **abbigliamento** (clothing), **arredamento** (furniture), **automazione** (automation) and **alimentare** (food). Together with tourism, they are what the country is known for on the markets.",
  "Che cos'è un distretto industriale?": "What is an industrial district?",
  "Una zona franca esente da imposte": "A free zone exempt from taxes",
  "Un territorio in cui molte piccole e medie imprese lavorano nello stesso settore e si passano il lavoro":
    "A territory where many small and medium firms work in the same sector and pass the work between them",
  "Un quartiere riservato agli stabilimenti in una grande città":
    "A district set aside for factories in a large city",
  "Un consorzio pubblico che finanzia le imprese": "A public consortium that finances companies",
  "È una concentrazione territoriale di imprese specializzate, cresciuta di solito da un mestiere già presente. Sostituisce con la vicinanza ciò che altrove fa la dimensione aziendale.":
    "It is a territorial concentration of specialised firms, usually grown out of a trade already there. Closeness does what company size does elsewhere.",
  "Due velocità": "Two speeds",
  "Il **divario fra Nord e Sud** è la questione economica più antica del paese e non si è mai chiusa. Il reddito per abitante nel Mezzogiorno è nettamente inferiore a quello del Centro-Nord, la disoccupazione è più alta e l'occupazione femminile molto più bassa.":
    "The **gap between North and South** is the country's oldest economic question and it has never closed. Income per head in the South is markedly lower than in the Centre-North, unemployment is higher and female employment much lower.",
  "Su tutto pesa poi l'**economia sommersa**, cioè il lavoro e il fatturato che non risultano da nessuna parte: una quota stimata in più di un decimo del prodotto interno lordo, con punte assai maggiori in alcuni settori e in alcune aree.":
    "On top of everything weighs the **shadow economy**, that is, work and turnover that appear nowhere: a share estimated at more than a tenth of gross domestic product, with much higher peaks in some sectors and some areas.",
  "Quali sono le quattro A dell'export italiano?": "What are the four A's of Italian exports?",
  "Agricoltura, artigianato, acciaio e auto": "Agriculture, crafts, steel and cars",
  "Abbigliamento, arredamento, automazione e alimentare": "Clothing, furniture, automation and food",
  "Arte, artigianato, agricoltura e automobili": "Art, crafts, agriculture and cars",
  "Alimentare, acciaio, aeronautica e arredamento": "Food, steel, aeronautics and furniture",
  "Abbigliamento, arredamento, automazione e alimentare: la formula riassume ciò per cui l'Italia è conosciuta sui mercati esteri, insieme al turismo.":
    "Abbigliamento, arredamento, automazione and alimentare: the formula sums up what Italy is known for on foreign markets, along with tourism.",
  "I nodi aperti": "The knots still to untie",
  "L'Italia ha un **debito pubblico** fra i più alti d'Europa in rapporto al prodotto, eredità di decenni di spesa a deficit soprattutto negli anni Ottanta. Serve un avanzo primario costante solo per non farlo crescere, il che riduce lo spazio per investire.":
    "Italy has one of the highest **public debts** in Europe in relation to output, the legacy of decades of deficit spending above all in the eighties. A constant primary surplus is needed just to stop it growing, which leaves less room to invest.",
  "Il secondo nodo è **demografico**: la natalità è fra le più basse del mondo e la popolazione invecchia. Il terzo è la partenza dei giovani: molti laureati lasciano il paese, e l'Italia forma persone che poi lavorano altrove.":
    "The second knot is **demographic**: the birth rate is among the lowest in the world and the population is ageing. The third is the departure of the young: many graduates leave the country, and Italy trains people who then work elsewhere.",
  "Che cosa indica l'espressione economia sommersa?": "What does the expression shadow economy refer to?",
  "L'economia delle regioni costiere": "The economy of the coastal regions",
  "Il lavoro e il fatturato che non risultano ufficialmente":
    "Work and turnover that do not appear officially",
  "Il settore delle imprese pubbliche": "The sector of public enterprises",
  "Il commercio con i paesi extraeuropei": "Trade with non-European countries",
  "È la parte di attività economica non dichiarata: lavoro senza contratto, ricavi non fatturati. In Italia è stimata sopra un decimo del prodotto interno lordo, con punte molto più alte in alcuni settori.":
    "It is the part of economic activity that is not declared: work without a contract, revenue not invoiced. In Italy it is estimated at over a tenth of gross domestic product, with much higher peaks in some sectors.",
  "Piccola impresa non significa impresa arretrata. Molte aziende italiane con poche decine di dipendenti sono leader mondiali nella loro nicchia: fanno una cosa sola, e la fanno meglio di chiunque altro.":
    "A small firm does not mean a backward one. Many Italian companies with a few dozen employees are world leaders in their niche: they do one thing, and do it better than anybody else.",
  // it-europa-mondo
  "L'Italia in Europa e nel mondo": "Italy in Europe and in the world",
  "Perché conta: l'Italia non ha aderito all'Europa comunitaria, l'ha fondata. E il paese che oggi riceve chi arriva dal mare è lo stesso da cui, per un secolo, sono partiti in ventisei milioni.":
    "Why this matters: Italy did not join the European community, it founded it. And the country that today receives those arriving by sea is the same one twenty-six million people left over a century.",
  "Fra i fondatori": "Among the founders",
  "L'**articolo 11** della Costituzione consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace: è la base giuridica di tutto ciò che segue.":
    "**Article 11** of the Constitution allows the limitations of sovereignty needed for an order that secures peace: it is the legal basis for everything that follows.",
  "1949 · NATO": "1949 · NATO",
  "L'Italia è fra i dodici paesi che firmano il trattato dell'Atlantico del Nord.":
    "Italy is among the twelve countries that sign the North Atlantic Treaty.",
  "1951 · CECA": "1951 · The ECSC",
  "Con la Comunità europea del carbone e dell'acciaio comincia l'integrazione. L'Italia è fra i sei fondatori.":
    "Integration begins with the European Coal and Steel Community. Italy is one of the six founders.",
  "1957 · Trattati di Roma": "1957 · The Treaties of Rome",
  "Nascono la CEE e l'Euratom, firmate in Campidoglio. La sede della firma non è un dettaglio.":
    "The EEC and Euratom are born, signed on the Capitoline Hill. Where they were signed is not a detail.",
  "1955 · ONU": "1955 · The UN",
  "L'ammissione arriva dieci anni dopo la fondazione, sbloccata insieme a quella di altri paesi rimasti fuori per la guerra fredda.":
    "Admission comes ten years after the founding, unblocked together with that of other countries left outside by the Cold War.",
  "L'**euro** sostituisce la lira come moneta di conto nel **1999** e come contante il **1º gennaio 2002**. L'Italia fa parte dello **spazio Schengen**, del **G7** e del **G20**, e l'**italiano** è una delle lingue ufficiali dell'Unione europea.":
    "The **euro** replaces the lira as a unit of account in **1999** and as cash on **1 January 2002**. Italy is part of the **Schengen area**, of the **G7** and of the **G20**, and **Italian** is one of the official languages of the European Union.",
  "In quale anno l'Italia entra nella NATO?": "In what year does Italy join NATO?",
  "Nel 1946": "In 1946",
  "Nel 1949": "In 1949",
  "Nel 1955": "In 1955",
  "Nel 1957": "In 1957",
  "Nel 1949, fra i dodici firmatari originari. Il 1955 è l'ammissione all'ONU e il 1957 la firma dei Trattati di Roma: tre date vicine e distinte.":
    "In 1949, among the twelve original signatories. 1955 is admission to the UN and 1957 the signing of the Treaties of Rome: three dates close together and distinct.",
  "Roma capitale dell'alimentazione mondiale": "Rome, world capital of food",
  "Tre agenzie delle Nazioni Unite che si occupano di cibo e agricoltura hanno sede a Roma: la **FAO**, l'**IFAD** e il **Programma alimentare mondiale**. È una concentrazione che nessun'altra città al mondo ha, e fa di Roma la capitale internazionale di quel tema.":
    "Three United Nations agencies dealing with food and agriculture have their seat in Rome: the **FAO**, **IFAD** and the **World Food Programme**. It is a concentration no other city in the world has, and it makes Rome the international capital of that subject.",
  "Quali agenzie delle Nazioni Unite hanno sede a Roma?":
    "Which United Nations agencies have their seat in Rome?",
  "Quelle che si occupano di alimentazione e agricoltura": "Those dealing with food and agriculture",
  "Quelle che si occupano di salute": "Those dealing with health",
  "Quelle che si occupano di istruzione e cultura": "Those dealing with education and culture",
  "Quelle che si occupano di lavoro": "Those dealing with labour",
  "FAO, IFAD e Programma alimentare mondiale. La salute sta a Ginevra con l'OMS, la cultura a Parigi con l'UNESCO e il lavoro a Ginevra con l'OIL.":
    "The FAO, IFAD and the World Food Programme. Health is in Geneva with the WHO, culture in Paris with UNESCO and labour in Geneva with the ILO.",
  "Un paese che è partito e che riceve": "A country that left and that receives",
  "Fra il 1861 e il 1970 lasciarono l'Italia circa **ventisei milioni** di persone, verso le Americhe prima e verso l'Europa del Nord poi. In molti paesi esistono comunità di origine italiana grandi quanto una regione, e la lingua italiana è parlata fuori dai confini più che dentro certi confini storici.":
    "Between 1861 and 1970 about **twenty-six million** people left Italy, first for the Americas and then for northern Europe. In many countries there are communities of Italian origin the size of a region, and Italian is spoken outside the borders more than it is inside certain historic ones.",
  "Dagli anni Ottanta il movimento si è invertito: oggi risiedono in Italia circa **cinque milioni** di cittadini stranieri, la comunità più numerosa delle quali è quella romena. La posizione al centro del Mediterraneo fa dell'Italia una delle frontiere esterne dell'Unione, con tutto ciò che ne consegue nel dibattito pubblico.":
    "Since the eighties the movement has reversed: about **five million** foreign citizens now live in Italy, the largest community of them Romanian. Its position at the centre of the Mediterranean makes Italy one of the Union's external frontiers, with everything that follows from that in public debate.",
  "Quanti cittadini stranieri risiedono oggi in Italia, all'incirca?":
    "Roughly how many foreign citizens live in Italy today?",
  "Circa mezzo milione": "About half a million",
  "Circa due milioni": "About two million",
  "Circa cinque milioni": "About five million",
  "Circa dieci milioni": "About ten million",
  "Circa cinque milioni, poco meno di un decimo della popolazione. La comunità più numerosa è quella romena. Il movimento si è invertito negli anni Ottanta: fino ad allora l'Italia era un paese da cui si partiva.":
    "About five million, a little under a tenth of the population. The largest community is the Romanian one. The movement reversed in the eighties: until then Italy was a country people left.",
  "Aderire e fondare non sono la stessa cosa. L'Italia è fra i sei paesi che hanno creato la CECA nel 1951 e la CEE nel 1957: non è entrata in un'Europa già esistente, l'ha costruita.":
    "Joining and founding are not the same thing. Italy is one of the six countries that created the ECSC in 1951 and the EEC in 1957: it did not enter an existing Europe, it built it.",
  // chapter
  "Società e vita quotidiana": "Society and everyday life",
  // it-lavoro
  "Lavoro, contratti e sindacati": "Work, contracts and trade unions",
  "Perché conta: la Costituzione mette il lavoro nel primo articolo, e il diritto del lavoro italiano ha alcune particolarità che sorprendono chi arriva da altri paesi — a cominciare dal fatto che il salario minimo non lo fissa la legge.":
    "Why this matters: the Constitution puts work in its first article, and Italian labour law has some peculiarities that surprise people arriving from other countries — starting with the fact that the minimum wage is not set by law.",
  "Che cosa dice la Costituzione": "What the Constitution says",
  "L'**articolo 1** fonda la Repubblica sul lavoro; l'**articolo 4** riconosce a tutti il diritto al lavoro e impegna la Repubblica a renderlo effettivo. L'**articolo 36** stabilisce che la retribuzione deve essere **proporzionata** alla quantità e qualità del lavoro e comunque **sufficiente** ad assicurare un'esistenza libera e dignitosa.":
    "**Article 1** founds the Republic on labour; **article 4** recognises everyone's right to work and commits the Republic to making it real. **Article 36** lays down that pay must be **proportionate** to the quantity and quality of the work and in any case **sufficient** to secure a free and dignified existence.",
  "L'**articolo 37** garantisce alla donna lavoratrice gli stessi diritti e la stessa retribuzione dell'uomo. L'**articolo 39** riconosce la libertà sindacale e l'**articolo 40** il diritto di sciopero.":
    "**Article 37** guarantees a woman worker the same rights and the same pay as a man. **Article 39** recognises the freedom of trade unions and **article 40** the right to strike.",
  "Il contratto collettivo": "The collective agreement",
  "In Italia le condizioni minime non sono fissate azienda per azienda ma **settore per settore**, attraverso il **contratto collettivo nazionale di lavoro**, il CCNL, firmato dalle organizzazioni dei datori e dai sindacati. Esistono centinaia di CCNL: metalmeccanici, commercio, edilizia, scuola, sanità privata.":
    "In Italy minimum conditions are not fixed company by company but **sector by sector**, through the **national collective labour agreement**, the CCNL, signed by the employers' organisations and the unions. There are hundreds of CCNLs: metalworkers, retail, construction, schools, private health care.",
  "Da qui una conseguenza che spesso sorprende: **l'Italia non ha un salario minimo fissato per legge**. I minimi stanno nei contratti collettivi, e chi lavora in un settore senza contratto applicato può trovarsi senza quella protezione. Il tema è oggetto di discussione da anni.":
    "From this comes a consequence that often surprises: **Italy has no minimum wage set by law**. The minimums sit in the collective agreements, and someone working in a sector with no agreement applied can find themselves without that protection. The subject has been under discussion for years.",
  "Chi fissa in Italia le retribuzioni minime?": "Who sets minimum pay in Italy?",
  "Una legge nazionale sul salario minimo": "A national law on the minimum wage",
  "I contratti collettivi nazionali, settore per settore":
    "The national collective agreements, sector by sector",
  "Ogni singola azienda": "Each individual company",
  "Le regioni, con proprie leggi": "The regions, by their own laws",
  "Non esiste un salario minimo di legge: i minimi stanno nei CCNL firmati per ciascun settore. È una delle particolarità del sistema italiano rispetto a gran parte d'Europa.":
    "There is no statutory minimum wage: the minimums sit in the CCNLs signed for each sector. It is one of the peculiarities of the Italian system compared with most of Europe.",
  "Le forme del contratto": "The forms of contract",
  "Tempo indeterminato": "Permanent",
  "Senza scadenza. Resta la forma di riferimento, e il licenziamento richiede una giusta causa o un giustificato motivo.":
    "With no end date. It remains the reference form, and dismissal requires just cause or a justified reason.",
  "Tempo determinato": "Fixed-term",
  "Con una scadenza e limiti di durata e di rinnovo, per evitare che diventi permanente sotto altro nome.":
    "With an end date and limits on duration and renewal, so that it does not become permanent under another name.",
  "Apprendistato": "Apprenticeship",
  "Unisce lavoro e formazione, per i giovani. Prevede contributi ridotti per il datore.":
    "Combines work and training, for young people. It carries reduced contributions for the employer.",
  "Partita IVA": "Partita IVA",
  "Lavoro autonomo: si fattura invece di ricevere una busta paga, e si versano da soli imposte e contributi.":
    "Self-employment: you invoice instead of receiving a payslip, and pay your own taxes and contributions.",
  "La busta paga": "The payslip",
  "Fra **lordo** e **netto** corre una differenza notevole: dallo stipendio lordo si sottraggono i contributi previdenziali versati all'**INPS** e l'imposta sul reddito, l'**IRPEF**, che è progressiva a scaglioni come vuole l'articolo 53.":
    "Between **gross** and **net** there is a considerable difference: social security contributions paid to **INPS** and income tax, **IRPEF**, which is progressive in bands as article 53 requires, are subtracted from the gross salary.",
  "Due voci sono tipicamente italiane. La **tredicesima** è una mensilità aggiuntiva pagata a dicembre, e in alcuni settori esiste anche una **quattordicesima** a giugno. Il **TFR**, trattamento di fine rapporto, è una somma accantonata ogni mese e liquidata quando il rapporto finisce, per qualunque motivo finisca.":
    "Two items are typically Italian. The **thirteenth** is an extra month's pay handed over in December, and in some sectors there is also a **fourteenth** in June. The **TFR**, the end-of-service allowance, is a sum set aside every month and paid out when the employment ends, whatever the reason.",
  "Che cos'è la tredicesima?": "What is the thirteenth?",
  "Un'imposta aggiuntiva di fine anno": "An extra end-of-year tax",
  "Una mensilità in più, corrisposta a dicembre": "One extra month's pay, given in December",
  "Il contributo versato all'INPS": "The contribution paid to INPS",
  "Il numero massimo di ore settimanali di straordinario": "The maximum number of overtime hours a week",
  "Una mensilità aggiuntiva pagata a dicembre. In alcuni settori esiste anche una quattordicesima, di solito a giugno: entrambe sono previste dai contratti collettivi.":
    "An extra month's pay in December. In some sectors there is also a fourteenth, usually in June: both are provided for by the collective agreements.",
  "I sindacati e le tutele": "The unions and the protections",
  "Le tre confederazioni storiche sono **CGIL**, **CISL** e **UIL**, nate dalla scissione del sindacato unitario del dopoguerra lungo linee politiche. Lo **Statuto dei lavoratori** del **1970** ha portato le libertà costituzionali dentro i luoghi di lavoro e vietato il licenziamento senza giusta causa nelle imprese maggiori.":
    "The three historic confederations are **CGIL**, **CISL** and **UIL**, born from the split of the post-war united union along political lines. The **Workers' Statute** of **1970** brought constitutional freedoms inside the workplace and forbade dismissal without just cause in larger firms.",
  "Due enti pubblici accompagnano ogni rapporto di lavoro: l'**INPS**, che incassa i contributi e paga pensioni e indennità, e l'**INAIL**, che assicura contro gli infortuni e le malattie professionali. Le **ferie** minime sono quattro settimane l'anno, e almeno due vanno godute nell'anno di maturazione.":
    "Two public bodies accompany every employment relationship: **INPS**, which collects contributions and pays pensions and benefits, and **INAIL**, which insures against accidents and occupational disease. Minimum **holiday** is four weeks a year, and at least two must be taken in the year they are earned.",
  "Che cos'è il TFR?": "What is the TFR?",
  "Un fondo pensione obbligatorio gestito dai sindacati": "A compulsory pension fund run by the unions",
  "Una somma accantonata ogni mese e liquidata alla fine del rapporto di lavoro":
    "A sum set aside every month and paid out at the end of the employment",
  "Il contributo per la formazione professionale": "The contribution for vocational training",
  "Un premio legato ai risultati aziendali": "A bonus linked to company results",
  "Il trattamento di fine rapporto matura ogni mese e viene pagato alla cessazione, qualunque ne sia il motivo: dimissioni, licenziamento o pensione. È una particolarità italiana.":
    "The end-of-service allowance builds up every month and is paid when the employment ends, whatever the reason: resignation, dismissal or retirement. It is an Italian peculiarity.",
  "Assunzione a tempo indeterminato non significa impossibilità di licenziare. Significa che serve una **giusta causa** o un **giustificato motivo**, e che senza di essi il licenziamento è impugnabile.":
    "A permanent contract does not mean dismissal is impossible. It means a **just cause** or a **justified reason** is needed, and that without one a dismissal can be challenged.",
  // it-sanita-scuola
  "Sanità e scuola": "Health and school",
  "Perché conta: sono i due servizi che si incontrano per primi vivendo in un paese. In Italia entrambi sono pubblici e universali sulla carta, e in entrambi le regioni contano moltissimo.":
    "Why this matters: these are the two services you meet first when living in a country. In Italy both are public and universal on paper, and in both the regions matter enormously.",
  // it-sanita-scuola
  "Il Servizio sanitario nazionale": "The National Health Service",
  "Il **Servizio sanitario nazionale** nasce nel **1978** e sostituisce il vecchio sistema delle casse mutue legate alla categoria professionale. Poggia su tre principi: **universalità** — vale per tutti i residenti — **uguaglianza** e **globalità** della copertura. È finanziato dalla **fiscalità generale**, cioè dalle tasse, non da un premio assicurativo.":
    "The **National Health Service** was born in **1978** and replaced the old system of sickness funds tied to one's occupation. It rests on three principles: **universality** — it covers every resident — **equality** and **comprehensiveness** of cover. It is funded from **general taxation**, not from an insurance premium.",
  "La gestione però è **regionale**. Ogni regione organizza le proprie aziende sanitarie e i propri ospedali, e da qui nascono differenze reali di attesa, qualità e organizzazione, con una **mobilità sanitaria** che porta molti pazienti del Sud a curarsi al Nord.":
    "Management, though, is **regional**. Each region organises its own health authorities and hospitals, and from this come real differences in waiting times, quality and organisation, with a **health migration** that takes many patients from the South to be treated in the North.",
  "Il medico di base": "The family doctor",
  "Si sceglie fra quelli disponibili nella propria zona ed è il primo riferimento: visita, prescrive e indirizza allo specialista.":
    "You choose one from those available in your area, and they are the first point of reference: they examine, prescribe and refer you to a specialist.",
  "La tessera sanitaria": "The health card",
  "Dà accesso alle prestazioni e riporta il codice fiscale. Sul retro è anche tessera europea di assicurazione malattia.":
    "It gives access to treatment and carries the codice fiscale. On the back it is also the European health insurance card.",
  "Il ticket": "The ticket",
  "Una quota a carico del paziente per visite ed esami, con esenzioni per reddito, età e patologia. Il pronto soccorso urgente non si paga.":
    "A share paid by the patient for appointments and tests, with exemptions by income, age and condition. Urgent emergency care is not charged for.",
  "I codici di priorità": "The priority codes",
  "Al pronto soccorso non si è ricevuti in ordine di arrivo ma di gravità: chi arriva dopo può passare prima.":
    "In accident and emergency you are not seen in order of arrival but of seriousness: someone who comes later may go in first.",
  "In quale anno nasce il Servizio sanitario nazionale?":
    "In what year was the National Health Service founded?",
  "Nel 1948": "In 1948",
  "Nel 1970": "In 1970",
  "Nel 1978": "In 1978",
  "Nel 2001": "In 2001",
  "Nel 1978, sostituendo le casse mutue legate alla categoria professionale. Prima di allora la copertura dipendeva dal mestiere che si faceva.":
    "In 1978, replacing the sickness funds tied to one's occupation. Before that, cover depended on the job you did.",
  "La scuola": "School",
  "L'istruzione è **obbligatoria dai sei ai sedici anni** e l'articolo 34 la dichiara gratuita per almeno otto anni. Il percorso comincia prima, con la scuola dell'infanzia dai tre anni, che non è obbligatoria ma è frequentata dalla grande maggioranza dei bambini.":
    "Education is **compulsory from six to sixteen** and article 34 declares it free for at least eight years. The path begins earlier, with nursery school from the age of three, which is not compulsory but is attended by the great majority of children.",
  "Primaria": "Primary",
  "Cinque anni, dai sei agli undici. È quella che tutti chiamano ancora scuola elementare.":
    "Five years, from six to eleven. It is the one everybody still calls elementary school.",
  "Secondaria di primo grado": "Lower secondary",
  "Tre anni, dagli undici ai quattordici: le medie. Si chiude con un esame.":
    "Three years, from eleven to fourteen: the middle school. It ends with an examination.",
  "Secondaria di secondo grado": "Upper secondary",
  "Cinque anni. Si sceglie fra liceo, istituto tecnico e istituto professionale, e la scelta si fa a tredici anni.":
    "Five years. You choose between a liceo, a technical institute and a vocational institute, and the choice is made at thirteen.",
  "Università": "University",
  "Laurea triennale e poi magistrale biennale, oppure corsi a ciclo unico per medicina, giurisprudenza e architettura.":
    "A three-year bachelor's degree and then a two-year master's, or single-cycle courses for medicine, law and architecture.",
  "L'esame che chiude la secondaria superiore si chiama ufficialmente **esame di Stato** e tutti lo chiamano **maturità**. Dà accesso all'università e si valuta in **centesimi**, con il sessanta come minimo per la promozione.":
    "The examination that closes upper secondary school is officially called the **State examination** and everybody calls it the **maturità**. It gives access to university and is marked out of **a hundred**, with sixty as the pass mark.",
  "Fino a quale età l'istruzione è obbligatoria in Italia?":
    "Up to what age is education compulsory in Italy?",
  "Fino ai quattordici anni": "Up to fourteen",
  "Fino ai sedici anni": "Up to sixteen",
  "Fino ai diciotto anni": "Up to eighteen",
  "Fino al conseguimento del diploma": "Until the diploma is obtained",
  "Dai sei ai sedici anni. Il diploma della secondaria superiore si ottiene a diciannove, ma l'obbligo finisce prima: si può assolvere l'ultimo tratto anche in un percorso di formazione professionale.":
    "From six to sixteen. The upper secondary diploma is obtained at nineteen, but the obligation ends earlier: the last stretch can also be served in a vocational training course.",
  "I voti": "The marks",
  "Le scale cambiano a ogni livello, e questo confonde chi arriva da fuori. Alla primaria e alle medie si usano i **decimi**, con il sei come sufficienza. Alla maturità si usano i **centesimi**, con il sessanta. All'università si usano i **trentesimi**, con il diciotto come minimo e la possibilità della **lode**. La laurea si valuta in **centodecimi**, e il massimo è centodieci e lode.":
    "The scales change at every level, and that confuses people arriving from outside. In primary and middle school marks are out of **ten**, with six as a pass. At the maturità they are out of **a hundred**, with sixty. At university they are out of **thirty**, with eighteen as the minimum and the possibility of **lode**, distinction. A degree is marked out of **a hundred and ten**, and the maximum is a hundred and ten with distinction.",
  "Su quale scala si valutano gli esami universitari in Italia?":
    "On what scale are university examinations marked in Italy?",
  "In decimi": "Out of ten",
  "In trentesimi": "Out of thirty",
  "In centesimi": "Out of a hundred",
  "In centodecimi": "Out of a hundred and ten",
  "In trentesimi, con diciotto come voto minimo e la lode oltre il trenta. I centodecimi si usano per il voto finale di laurea e i centesimi per la maturità.":
    "Out of thirty, with eighteen as the minimum mark and distinction beyond thirty. A hundred and ten is used for the final degree mark and a hundred for the maturità.",
  "Il **liceo** non è la scuola superiore in generale: è uno dei tre indirizzi, accanto all'istituto tecnico e a quello professionale. Tutti e tre danno un diploma che apre all'università.":
    "The **liceo** is not upper secondary school in general: it is one of the three tracks, alongside the technical and the vocational institute. All three give a diploma that opens the way to university.",
  // it-vivere-in-italia
  "Vivere in Italia": "Living in Italy",
  "Perché conta: questa è la lezione pratica. Nessuna delle prove qui descritte riguarda la storia o le istituzioni — e questo corso non prepara a nessuna di esse. Servono a sapere che cosa lo Stato chiede, e a chi.":
    "Why this matters: this is the practical lesson. None of the tests described here is about history or institutions — and this course does not prepare you for any of them. They are here so you know what the State asks, and of whom.",
  "Il codice fiscale, prima di tutto": "The codice fiscale, before anything else",
  "Il **codice fiscale** è una sigla di sedici caratteri ricavata da nome, cognome, data e luogo di nascita. Non è una tessera: è un identificativo, e serve praticamente per ogni cosa — aprire un conto, firmare un contratto d'affitto, iscriversi al servizio sanitario, comprare una scheda telefonica.":
    "The **codice fiscale** is a sixteen-character string built from your name, surname, date and place of birth. It is not a card: it is an identifier, and it is needed for practically everything — opening an account, signing a rental contract, registering with the health service, buying a SIM card.",
  "Segue la **residenza**, cioè l'iscrizione all'anagrafe del comune in cui si abita davvero. Dalla residenza dipendono la carta d'identità, il medico di base, l'iscrizione a scuola e il diritto di voto alle comunali per i cittadini dell'Unione.":
    "Next comes **residence**, that is, registration with the registry of the municipality you actually live in. Residence governs the identity card, the family doctor, school enrolment and the right to vote in local elections for citizens of the Union.",
  "Il permesso di soggiorno": "The residence permit",
  "Chi non è cittadino dell'Unione europea ha bisogno di un **permesso di soggiorno**, che si chiede alla **questura** presentando la domanda tramite gli uffici postali abilitati. La durata e le condizioni dipendono dal motivo: lavoro, studio, famiglia, protezione.":
    "Anyone who is not a citizen of the European Union needs a **residence permit**, applied for at the **questura**, the police headquarters, by submitting the application through designated post offices. Its length and conditions depend on the reason: work, study, family, protection.",
  "Per il **permesso di soggiorno UE per soggiornanti di lungo periodo**, che non ha scadenza, si richiedono almeno cinque anni di soggiorno regolare, un reddito e la dimostrazione di conoscere l'italiano al livello **A2** attraverso un test.":
    "For the **EU long-term residence permit**, which has no expiry, at least five years of lawful residence, an income and proof of Italian at level **A2** through a test are required.",
  "A che cosa serve il codice fiscale?": "What is the codice fiscale for?",
  "Solo a pagare le imposte": "Only for paying taxes",
  "A identificare la persona in quasi ogni rapporto con enti e privati":
    "To identify a person in almost every dealing with public bodies and private parties",
  "Ad accedere al pronto soccorso": "For access to accident and emergency",
  "A votare alle elezioni comunali": "For voting in local elections",
  "È l'identificativo di base: serve per il conto in banca, il contratto d'affitto, l'iscrizione al servizio sanitario, il contratto di lavoro. Il nome inganna, perché il suo uso va molto oltre il fisco.":
    "It is the basic identifier: it is needed for a bank account, a rental contract, registering with the health service, an employment contract. The name misleads, because its use goes far beyond tax.",
  "L'accordo di integrazione": "The integration agreement",
  "Chi entra per la prima volta e chiede un permesso di almeno un anno firma con lo Stato un **accordo di integrazione**, in vigore dal 2012. Funziona a **crediti**: se ne ricevono sedici all'inizio, e vanno mantenuti o accresciuti nell'arco di **due anni**, prorogabili di uno.":
    "Anyone entering for the first time and asking for a permit of at least a year signs an **integration agreement** with the State, in force since 2012. It works on **credits**: you receive sixteen at the start, and they must be kept or increased over **two years**, extendable by one.",
  "La formazione civica": "The civic training",
  "Entro tre mesi dalla firma si partecipa a una sessione sull'ordinamento, sui diritti e doveri e sui servizi. Non è un esame: la partecipazione dà crediti.":
    "Within three months of signing you attend a session on the system of government, on rights and duties and on services. It is not an examination: attendance earns credits.",
  "Che cosa si verifica alla fine": "What is checked at the end",
  "Conoscenza dell'italiano parlato almeno al livello A2, conoscenza sufficiente della cultura civica e della vita civile in Italia.":
    "Knowledge of spoken Italian at level A2 at least, and sufficient knowledge of civic culture and civil life in Italy.",
  "I crediti si perdono": "Credits can be lost",
  "Condanne penali definitive e sanzioni gravi li riducono. Azzerarli comporta la revoca del permesso di soggiorno.":
    "Final criminal convictions and serious penalties reduce them. Losing them all means the residence permit is revoked.",
  "Chi lo firma alla prefettura": "Signing it at the prefecture",
  "L'accordo si sottoscrive davanti allo sportello unico presso la prefettura, che rappresenta il governo in ogni provincia.":
    "The agreement is signed before the one-stop desk at the prefecture, which represents the government in every province.",
  "È l'unica prova italiana che tocca la conoscenza del paese, e resta molto lontana da un esame di educazione civica: si verifica una conoscenza sufficiente della vita civile, non un programma di storia e istituzioni.":
    "It is the only Italian test that touches on knowledge of the country, and it is a long way from a civics examination: what is checked is a sufficient knowledge of civil life, not a syllabus of history and institutions.",
  "Come funziona l'accordo di integrazione?": "How does the integration agreement work?",
  "Con un esame scritto di storia e istituzioni": "With a written examination on history and institutions",
  "Con un sistema a crediti da mantenere in due anni":
    "With a credit system to be maintained over two years",
  "Con un colloquio annuale in questura": "With an annual interview at the police headquarters",
  "Con il versamento di una cauzione": "By paying a deposit",
  "Si ricevono sedici crediti alla firma e si verificano dopo due anni, insieme alla conoscenza dell'italiano a livello A2 e a una conoscenza sufficiente della vita civile. Non c'è un esame di educazione civica.":
    "You receive sixteen credits on signing and they are checked after two years, along with Italian at level A2 and a sufficient knowledge of civil life. There is no civics examination.",
  "La cittadinanza": "Citizenship",
  "Si può diventare cittadini italiani per **discendenza**, per **matrimonio** o per **residenza**. Per residenza il termine ordinario per chi non è cittadino dell'Unione è di **dieci anni**; è più breve per i cittadini dell'Unione, per i rifugiati e per chi è nato in Italia.":
    "You can become an Italian citizen by **descent**, by **marriage** or by **residence**. For residence the ordinary period for someone who is not a citizen of the Union is **ten years**; it is shorter for citizens of the Union, for refugees and for those born in Italy.",
  "Dal **2018** la domanda per matrimonio e per residenza richiede un certificato di conoscenza dell'italiano non inferiore al livello **B1** del quadro europeo. È una prova **linguistica**: non verte sulla storia, sulla Costituzione o sulle istituzioni.":
    "Since **2018** an application by marriage or by residence requires a certificate of Italian at not less than level **B1** of the European framework. It is a **language** test: it does not cover history, the Constitution or the institutions.",
  "Quale livello di italiano è richiesto per la domanda di cittadinanza?":
    "What level of Italian is required for a citizenship application?",
  "A1": "A1",
  "A2": "A2",
  "B1": "B1",
  "C1": "C1",
  "B1 per la cittadinanza, dal 2018. Il livello A2 serve invece per il permesso di soggiorno di lungo periodo: due prove diverse, con due soglie diverse, entrambe soltanto linguistiche.":
    "B1 for citizenship, since 2018. Level A2 is required instead for the long-term residence permit: two different tests, with two different thresholds, both of them purely linguistic.",
  "Per i servizi online serve un'identità digitale: **SPID** o la **carta d'identità elettronica**. Senza una delle due non si prenota una visita, non si scarica un certificato e non si consulta il proprio fascicolo previdenziale.":
    "For online services you need a digital identity: **SPID** or the **electronic identity card**. Without one of the two you cannot book an appointment, download a certificate or look at your own social security record.",
  // it-vita-quotidiana
  "La vita di tutti i giorni": "Everyday life",
  "Perché si chiude qui: le regole non scritte si imparano più lentamente di quelle scritte, e sono quelle che fanno sentire a proprio agio o fuori posto. Nessuna di esse è obbligatoria; tutte sono reali.":
    "Why we close here: unwritten rules are learned more slowly than written ones, and they are the ones that make a person feel at ease or out of place. None of them is compulsory; all of them are real.",
  "Il caffè e la tavola": "Coffee and the table",
  "Il **caffè** in Italia è l'espresso, e si beve **al banco** in un minuto. Il **cappuccino** è una bevanda della **mattina**: ordinarlo dopo pranzo non è vietato da nessuna legge, ma segnala immediatamente che si viene da fuori. Dopo il pasto si prende il caffè, eventualmente **corretto** con un liquore.":
    "**Coffee** in Italy is espresso, and it is drunk **standing at the bar** in a minute. The **cappuccino** is a **morning** drink: ordering one after lunch is forbidden by no law, but it signals at once that you come from elsewhere. After a meal you have a coffee, possibly **corretto**, corrected with a shot of liqueur.",
  "I pasti hanno orari precisi: colazione leggera e dolce, pranzo fra le tredici e le quattordici, cena dalle venti in poi, più tardi man mano che si scende verso sud. Prima di cena c'è l'**aperitivo**, che a Milano è diventato quasi un pasto.":
    "Meals have set times: a light, sweet breakfast, lunch between one and two, dinner from eight onwards, later the further south you go. Before dinner comes the **aperitivo**, which in Milan has become almost a meal.",
  "In quale momento della giornata si beve tradizionalmente il cappuccino?":
    "At what time of day is a cappuccino traditionally drunk?",
  "Al mattino": "In the morning",
  "Dopo pranzo": "After lunch",
  "Dopo cena": "After dinner",
  "In qualunque momento, indifferentemente": "At any time, it makes no difference",
  "Il cappuccino appartiene alla colazione. Dopo il pasto si prende l'espresso: non è una regola scritta, ma è seguita così largamente da funzionare come tale.":
    "The cappuccino belongs to breakfast. After a meal you have an espresso: it is not a written rule, but it is followed so widely that it works like one.",
  "Una cucina che non esiste": "A cuisine that does not exist",
  "La **cucina italiana** al singolare è in buona parte un'invenzione dell'estero e dell'emigrazione. In Italia la cucina è **regionale**, spesso cittadina: il ragù non è lo stesso a Bologna e a Napoli, la pizza di Napoli e quella romana sono due prodotti diversi, e ogni valle ha il proprio formaggio.":
    "**Italian cuisine** in the singular is largely an invention of abroad and of emigration. In Italy cooking is **regional**, often of a single city: ragù is not the same in Bologna and in Naples, Neapolitan and Roman pizza are two different products, and every valley has its own cheese.",
  "Vale anche per l'ordine del pasto: antipasto, **primo** — pasta, riso o zuppa — **secondo** con contorno, poi frutta o dolce. Il primo non è un antipasto e il secondo non si accompagna alla pasta: sono due portate distinte, servite una dopo l'altra.":
    "The same holds for the order of a meal: antipasto, **primo** — pasta, rice or soup — **secondo** with a side dish, then fruit or a sweet. The primo is not a starter and the secondo does not come alongside the pasta: they are two distinct courses, served one after the other.",
  "Casa, famiglia, piazza": "Home, family, piazza",
  "I giovani italiani lasciano la casa dei genitori più tardi che in quasi tutta Europa, per ragioni che sono soprattutto economiche: affitti, salari d'ingresso, lavoro instabile. I **nonni** hanno spesso un ruolo quotidiano nella cura dei nipoti, e questo tiene insieme molti bilanci familiari.":
    "Young Italians leave their parents' home later than in almost all of Europe, for reasons that are above all economic: rents, entry-level pay, unstable work. **Grandparents** often have a daily part in looking after grandchildren, and that holds many family budgets together.",
  "La **piazza** resta il luogo dello stare insieme, e la **passeggiata** serale è ancora una pratica diffusa nei centri piccoli e medi. Nel rivolgersi a qualcuno si distingue fra **tu** e **lei**: il lei con gli sconosciuti, con chi è più anziano e in ogni contesto formale, finché non è l'altro a proporre il passaggio al tu.":
    "The **piazza** remains the place for being together, and the evening **passeggiata** is still widespread in small and medium towns. In addressing someone a distinction is made between **tu** and **lei**: lei with strangers, with anyone older and in every formal setting, until the other person suggests moving to tu.",
  "Quando si usa il lei rivolgendosi a qualcuno?": "When is lei used in addressing someone?",
  "Solo negli atti scritti": "Only in written documents",
  "Con gli sconosciuti, con chi è più anziano e nei contesti formali":
    "With strangers, with anyone older and in formal settings",
  "Sempre, anche in famiglia": "Always, even within the family",
  "Soltanto nel Sud del paese": "Only in the south of the country",
  "Il passaggio al tu di solito lo propone la persona più anziana o di posizione superiore. Dare del tu troppo presto a uno sconosciuto è la scortesia più facile da commettere.":
    "The move to tu is usually suggested by the older person or the one in the senior position. Using tu too soon with a stranger is the easiest discourtesy to commit.",
  "Lo sport": "Sport",
  "Il **calcio** è lo sport nazionale: la **Serie A** riempie le conversazioni da agosto a maggio, e la nazionale, gli **azzurri**, ha vinto quattro campionati del mondo. Il colore azzurro delle maglie non viene dalla bandiera ma dal blu Savoia, e la Repubblica ha scelto di conservarlo.":
    "**Football** is the national sport: **Serie A** fills conversations from August to May, and the national team, the **azzurri**, has won four world championships. The blue of the shirts does not come from the flag but from Savoy blue, and the Republic chose to keep it.",
  "Il secondo sport per radicamento è il **ciclismo**, con il **Giro d'Italia** che ogni maggio attraversa il paese. Chi è in testa alla classifica indossa la **maglia rosa**, del colore della carta del giornale che lo organizzò.":
    "The second most deeply rooted sport is **cycling**, with the **Giro d'Italia** crossing the country every May. Whoever leads the classification wears the **pink jersey**, the colour of the paper of the newspaper that organised it.",
  "Di che colore è la maglia di chi guida la classifica del Giro d'Italia?":
    "What colour is the jersey of the leader of the Giro d'Italia?",
  "Gialla": "Yellow",
  "Rosa": "Pink",
  "Verde": "Green",
  "Azzurra": "Blue",
  "Rosa, come la carta del quotidiano sportivo che organizzò la corsa. La maglia gialla appartiene invece al Tour de France, per la stessa ragione: il colore della carta del suo giornale.":
    "Pink, like the paper of the sports daily that organised the race. The yellow jersey belongs to the Tour de France instead, for the same reason: the colour of its newspaper's paper.",
  "Gli orari": "Opening hours",
  "Molti negozi e uffici chiudono per la **pausa pranzo**, soprattutto nei centri piccoli e al Sud, e riaprono nel pomeriggio fino a sera. Ad **agosto**, e in particolare intorno a **Ferragosto**, chiudono per ferie negozi, studi professionali e interi quartieri delle grandi città.":
    "Many shops and offices close for the **lunch break**, especially in small towns and in the South, and reopen in the afternoon until the evening. In **August**, and particularly around **Ferragosto**, shops, professional practices and whole districts of the big cities close for the holidays.",
  "Nessuna di queste consuetudini è una regola, e in una città grande molte non valgono più. Ma conoscerle spiega perché una porta è chiusa alle quattordici e trenta, e perché il barista alza un sopracciglio davanti a un cappuccino ordinato alle nove di sera.":
    "None of these customs is a rule, and in a big city many no longer hold. But knowing them explains why a door is shut at half past two, and why the barman raises an eyebrow at a cappuccino ordered at nine in the evening.",
};
