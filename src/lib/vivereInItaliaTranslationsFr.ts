/**
 * French for the Vivere in Italia course cards, headings and questions.
 *
 * Keyed on the ITALIAN source text exactly as it appears in
 * vivereInItaliaCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but a key that matches nothing
 * in the course is one nobody can ever see, and nothing reports it at
 * runtime: the card renders, the tap works, and the reader is told there is
 * no translation for a card that was in fact translated. So every key here
 * was extracted from the built module and paired back, never retyped.
 *
 * Like the German table and unlike the older ones, this covers the QUIZZES as
 * well. A lesson that ends in three untranslated questions is not a lesson
 * somebody can finish.
 *
 * WHAT STAYS ITALIAN, and it follows VIVERE_IN_ITALIA_DE so that a reader who
 * switches between the two tables does not meet one word glossed two ways.
 * Institutions take their French form where one is established — the Camera
 * dei deputati is the Chambre des députés, the Corte costituzionale the Cour
 * constitutionnelle, the Consiglio dei ministri the Conseil des ministres.
 * Where a word is the answer itself and has no French equivalent — codice
 * fiscale, permesso di soggiorno, questura, partita IVA, IRPEF, INPS, INAIL,
 * CCNL, TFR, SPID, Ferragosto — the French gives the meaning and keeps the
 * Italian word beside it, so the reader learns the term they will actually
 * meet at the counter.
 *
 * Latin that the course quotes as Latin stays Latin: feriae Augusti, simul
 * stabunt simul cadent, passata in giudicato. Translating those would remove
 * the very thing the sentence is teaching.
 */
export const VIVERE_IN_ITALIA_FR: Record<string, string> = {
  "Storia, ordinamento e vita quotidiana — come funziona il paese.":
    "Histoire, institutions et vie quotidienne — comment fonctionne le pays.",
  "Simboli nazionali": "Les symboles nationaux",
  "Simboli e principi fondamentali": "Symboles et principes fondamentaux",
  "Perché si comincia da qui: i simboli si incontrano tutti i giorni — sul municipio, sul passaporto, sulla maglia della nazionale — e sono quindi la porta più facile per entrare in tutto il resto.":
    "Pourquoi commencer par là : on rencontre les symboles tous les jours — sur la mairie, sur le passeport, sur le maillot de l'équipe nationale — et c'est donc la porte la plus facile pour entrer dans tout le reste.",
  "La bandiera": "Le drapeau",
  "Il **tricolore** ha tre bande verticali di uguali dimensioni: **verde** dalla parte dell'asta, **bianco** al centro, **rosso** al battente. Lo descrive l'**articolo 12** della Costituzione, l'ultimo dei principi fondamentali — il che dice già qualcosa: la bandiera non è un dettaglio decorativo, sta fra le cose che fondano la Repubblica.":
    "Le **tricolore** a trois bandes verticales de dimensions égales : **vert** du côté de la hampe, **blanc** au centre, **rouge** du côté flottant. L'**article 12** de la Constitution le décrit, le dernier des principes fondamentaux — ce qui dit déjà quelque chose : le drapeau n'est pas un détail décoratif, il est parmi les choses qui fondent la République.",
  "Nacque a **Reggio Emilia il 7 gennaio 1797**, quando la Repubblica Cispadana lo adottò come proprio vessillo. È la bandiera nazionale più antica d'Europa dopo quelle di Danimarca e Paesi Bassi, e il 7 gennaio si celebra la **Festa del Tricolore**.":
    "Il est né à **Reggio d'Émilie le 7 janvier 1797**, quand la République cispadane l'adopta comme sa bannière. C'est le plus ancien drapeau national d'Europe après ceux du Danemark et des Pays-Bas, et le 7 janvier on célèbre la **Festa del Tricolore**.",
  "Ai colori non è assegnato per legge alcun significato. Le spiegazioni che si sentono — il verde delle pianure, il bianco delle nevi alpine, il rosso del sangue versato — sono letture affettive nate dopo, non una regola scritta da qualche parte.":
    "Aucun sens n'est attribué aux couleurs par la loi. Les explications qu'on entend — le vert des plaines, le blanc des neiges alpines, le rouge du sang versé — sont des lectures affectives nées après coup, pas une règle écrite quelque part.",
  "L'emblema": "L'emblème",
  "L'Italia non ha uno stemma di famiglia regnante: ha un **emblema**, scelto per concorso pubblico e in vigore dal **5 maggio 1948**. Lo disegnò Paolo Paschetto. Non è uno scudo, ed è la differenza che conta: non discende da una dinastia, è stato inventato da una repubblica appena nata per rappresentarsi.":
    "L'Italie n'a pas d'armoiries de famille régnante : elle a un **emblème**, choisi par concours public et en vigueur depuis le **5 mai 1948**. Paolo Paschetto l'a dessiné. Ce n'est pas un écu, et c'est la différence qui compte : il ne descend d'aucune dynastie, il a été inventé par une république à peine née pour se représenter.",
  "La stella": "L'étoile",
  "La stella d'Italia, il simbolo più antico del paese: accompagna l'immagine dell'Italia da prima dell'Unità.":
    "L'étoile d'Italie, le plus ancien symbole du pays : elle accompagne l'image de l'Italie bien avant l'Unité.",
  "La ruota dentata": "La roue dentée",
  "L'ingranaggio richiama il lavoro, su cui l'articolo 1 fonda la Repubblica.":
    "L'engrenage rappelle le travail, sur lequel l'article 1 fonde la République.",
  "L'olivo e la quercia": "L'olivier et le chêne",
  "L'olivo per la pace, la quercia per la forza e la dignità. Sono due alberi che crescono in tutta la penisola.":
    "L'olivier pour la paix, le chêne pour la force et la dignité. Deux arbres qui poussent dans toute la péninsule.",
  "Da quale parte della bandiera si trova il verde?":
    "De quel côté du drapeau se trouve le vert ?",
  "Al centro": "Au centre",
  "Dalla parte dell'asta": "Du côté de la hampe",
  "Dalla parte del battente": "Du côté flottant",
  "Cambia a seconda della regione": "Cela change selon la région",
  "Verde all'asta, bianco al centro, rosso al battente. L'ordine non è libero: è fissato dall'articolo 12 della Costituzione, e una bandiera con i colori invertiti è semplicemente sbagliata.":
    "Vert à la hampe, blanc au centre, rouge du côté flottant. L'ordre n'est pas libre : il est fixé par l'article 12 de la Constitution, et un drapeau aux couleurs inversées est simplement faux.",
  "L'inno": "L'hymne",
  "L'inno nazionale si chiama ufficialmente **Il Canto degli Italiani**, ma tutti lo conoscono come **Inno di Mameli** oppure dal suo primo verso, **Fratelli d'Italia**. Il testo è di **Goffredo Mameli**, che lo scrisse nel **1847** a vent'anni; la musica è di **Michele Novaro**. Mameli morì due anni dopo, a ventun anni, difendendo la Repubblica Romana.":
    "L'hymne national s'appelle officiellement **Il Canto degli Italiani**, mais tout le monde le connaît comme l'**hymne de Mameli** ou par son premier vers, **Fratelli d'Italia**. Le texte est de **Goffredo Mameli**, qui l'écrivit en **1847** à vingt ans ; la musique est de **Michele Novaro**. Mameli mourut deux ans plus tard, à vingt et un ans, en défendant la République romaine.",
  "Curiosamente l'inno è stato per settant'anni un inno di fatto: adottato in via provvisoria nel **1946**, è diventato inno ufficiale per legge soltanto il **4 dicembre 2017**. In Italia le cose provvisorie durano.":
    "Curieusement, l'hymne a été pendant soixante-dix ans un hymne de fait : adopté à titre provisoire en **1946**, il n'est devenu hymne officiel par la loi que le **4 décembre 2017**. En Italie, le provisoire dure.",
  "Chi scrisse il testo dell'inno nazionale?": "Qui a écrit le texte de l'hymne national ?",
  "Michele Novaro": "Michele Novaro",
  "Giuseppe Verdi": "Giuseppe Verdi",
  "Goffredo Mameli": "Goffredo Mameli",
  "Giuseppe Mazzini": "Giuseppe Mazzini",
  "Il testo è di Goffredo Mameli, la musica di Michele Novaro: per questo si dice Inno di Mameli e non Inno di Novaro. Verdi non c'entra, anche se il coro del Nabucco viene spesso proposto come alternativa.":
    "Le texte est de Goffredo Mameli, la musique de Michele Novaro : c'est pourquoi on dit l'hymne de Mameli et non l'hymne de Novaro. Verdi n'y est pour rien, même si le chœur de Nabucco est souvent proposé comme solution de rechange.",
  "Le date della Repubblica": "Les dates de la République",
  "2 giugno": "Le 2 juin",
  "Festa della Repubblica. Ricorda il referendum del 2 e 3 giugno 1946, con cui gli italiani scelsero la repubblica al posto della monarchia.":
    "La Fête de la République. Elle rappelle le référendum des 2 et 3 juin 1946, par lequel les Italiens choisirent la république à la place de la monarchie.",
  "25 aprile": "Le 25 avril",
  "Anniversario della Liberazione, la fine dell'occupazione nazifascista nel 1945.":
    "L'anniversaire de la Libération, la fin de l'occupation nazie et fasciste en 1945.",
  "4 novembre": "Le 4 novembre",
  "Giorno dell'Unità nazionale e Festa delle Forze armate: l'armistizio del 1918. Non è più giorno festivo dal 1977 e si celebra la prima domenica di novembre.":
    "Le Jour de l'unité nationale et la fête des forces armées : l'armistice de 1918. Ce n'est plus un jour férié depuis 1977 et il se célèbre le premier dimanche de novembre.",
  "Il **2 giugno** è la festa nazionale vera e propria. A Roma si svolgono la deposizione della corona all'Altare della Patria e la parata lungo via dei Fori Imperiali, con il sorvolo delle Frecce Tricolori che lasciano nel cielo le tre bande.":
    "Le **2 juin** est la véritable fête nationale. À Rome ont lieu le dépôt de la couronne à l'Autel de la Patrie et le défilé le long de la via dei Fori Imperiali, avec le passage des Frecce Tricolori qui laissent les trois bandes dans le ciel.",
  "Che cosa si ricorda il 2 giugno?": "Que commémore-t-on le 2 juin ?",
  "La proclamazione del Regno d'Italia nel 1861": "La proclamation du Royaume d'Italie en 1861",
  "Il referendum del 1946 e la nascita della Repubblica":
    "Le référendum de 1946 et la naissance de la République",
  "L'entrata in vigore della Costituzione": "L'entrée en vigueur de la Constitution",
  "La fine della Seconda guerra mondiale": "La fin de la Seconde Guerre mondiale",
  "Il 2 giugno 1946 gli italiani votarono per la repubblica contro la monarchia, e nello stesso giorno elessero l'Assemblea costituente. Il Regno era stato proclamato l'11 marzo 1861, la Costituzione entrò in vigore il 1º gennaio 1948: tre date diverse che è facile confondere.":
    "Le 2 juin 1946, les Italiens votèrent pour la république contre la monarchie et élurent le même jour l'Assemblée constituante. Le Royaume avait été proclamé le 11 mars 1861, la Constitution entra en vigueur le 1er janvier 1948 : trois dates différentes qu'il est facile de confondre.",
  "Da non confondere: il **7 gennaio** è la Festa del Tricolore, cioè della bandiera; il **2 giugno** è la Festa della Repubblica. Solo la seconda è giorno festivo.":
    "À ne pas confondre : le **7 janvier** est la fête du drapeau ; le **2 juin** est la Fête de la République. Seule la seconde est un jour férié.",
  "La Costituzione e i principi fondamentali": "La Constitution et les principes fondamentaux",
  "Perché conta: quasi tutto quello che verrà dopo — il Parlamento, le regioni, i diritti, perfino la bandiera — è scritto in un unico testo del 1947. Chi lo conosce a grandi linee ha già la mappa del resto del corso.":
    "Pourquoi cela compte : presque tout ce qui viendra ensuite — le Parlement, les régions, les droits, jusqu'au drapeau — est écrit dans un seul texte de 1947. Qui le connaît dans ses grandes lignes a déjà la carte du reste du cours.",
  "Come è nata": "Comment elle est née",
  "Il **2 giugno 1946**, nello stesso giorno del referendum, gli italiani elessero l'**Assemblea costituente**. Fu la prima consultazione a suffragio davvero universale della storia italiana: **votarono per la prima volta le donne**. L'Assemblea lavorò un anno e mezzo e approvò il testo il **22 dicembre 1947**.":
    "Le **2 juin 1946**, le même jour que le référendum, les Italiens élurent l'**Assemblée constituante**. Ce fut la première consultation vraiment au suffrage universel de l'histoire italienne : **les femmes votèrent pour la première fois**. L'Assemblée travailla un an et demi et approuva le texte le **22 décembre 1947**.",
  "La Costituzione fu promulgata il **27 dicembre 1947** dal capo provvisorio dello Stato **Enrico De Nicola** ed entrò in vigore il **1º gennaio 1948**. Fu scritta da un'assemblea in cui sedevano insieme democratici cristiani, comunisti, socialisti, liberali e azionisti: è un testo di compromesso, e si vede.":
    "La Constitution fut promulguée le **27 décembre 1947** par le chef provisoire de l'État **Enrico De Nicola** et entra en vigueur le **1er janvier 1948**. Elle fut écrite par une assemblée où siégeaient ensemble démocrates-chrétiens, communistes, socialistes, libéraux et membres du Parti d'action : c'est un texte de compromis, et cela se voit.",
  "Quando è entrata in vigore la Costituzione?":
    "Quand la Constitution est-elle entrée en vigueur ?",
  "Il 2 giugno 1946": "Le 2 juin 1946",
  "Il 22 dicembre 1947": "Le 22 décembre 1947",
  "Il 1º gennaio 1948": "Le 1er janvier 1948",
  "Il 25 aprile 1945": "Le 25 avril 1945",
  "Approvata il 22 dicembre 1947, promulgata il 27 dicembre, entrata in vigore il 1º gennaio 1948. Le tre date sono vicine ma distinte: approvazione, firma, efficacia.":
    "Approuvée le 22 décembre 1947, promulguée le 27 décembre, entrée en vigueur le 1er janvier 1948. Les trois dates sont proches mais distinctes : approbation, signature, effet.",
  "Come è fatta": "Comment elle est faite",
  "Il testo ha **139 articoli** più diciotto disposizioni transitorie e finali, ed è diviso in tre parti disuguali.":
    "Le texte compte **139 articles** plus dix-huit dispositions transitoires et finales, et se divise en trois parties inégales.",
  "Principi fondamentali": "Principes fondamentaux",
  "Articoli 1–12. Dodici articoli che dicono che cosa è la Repubblica prima di dire come funziona.":
    "Articles 1 à 12. Douze articles qui disent ce qu'est la République avant de dire comment elle fonctionne.",
  "Parte I · Diritti e doveri dei cittadini": "Partie I · Droits et devoirs des citoyens",
  "Articoli 13–54. Le libertà, la famiglia, la salute, la scuola, il lavoro, il voto, le tasse.":
    "Articles 13 à 54. Les libertés, la famille, la santé, l'école, le travail, le vote, les impôts.",
  "Parte II · Ordinamento della Repubblica": "Partie II · Organisation de la République",
  "Articoli 55–139. Parlamento, Governo, Presidente, magistratura, regioni. È il capitolo 2 di questo corso.":
    "Articles 55 à 139. Parlement, gouvernement, président, magistrature, régions. C'est le chapitre 2 de ce cours.",
  "I primi articoli": "Les premiers articles",
  "L'**articolo 1** stabilisce che l'Italia è una Repubblica democratica **fondata sul lavoro** e che la sovranità appartiene al popolo, che la esercita nelle forme e nei limiti della Costituzione. Quella formula sul lavoro fu il compromesso trovato fra chi voleva una repubblica dei lavoratori e chi voleva una formula più generale.":
    "L'**article 1** établit que l'Italie est une République démocratique **fondée sur le travail** et que la souveraineté appartient au peuple, qui l'exerce dans les formes et les limites de la Constitution. Cette formule sur le travail fut le compromis trouvé entre ceux qui voulaient une république des travailleurs et ceux qui voulaient une formule plus générale.",
  "L'**articolo 3** enuncia due uguaglianze, non una. La prima è **formale**: tutti sono uguali davanti alla legge senza distinzione di sesso, razza, lingua, religione, opinioni politiche, condizioni personali e sociali. La seconda è **sostanziale**: è compito della Repubblica rimuovere gli ostacoli che di fatto impediscono quell'uguaglianza. Il secondo comma è quello che giustifica le politiche sociali.":
    "L'**article 3** énonce deux égalités, non une. La première est **formelle** : tous sont égaux devant la loi sans distinction de sexe, de race, de langue, de religion, d'opinions politiques, de conditions personnelles et sociales. La seconde est **substantielle** : il revient à la République de lever les obstacles qui empêchent en fait cette égalité. C'est le second alinéa qui justifie les politiques sociales.",
  "L'**articolo 11** contiene il verbo più discusso del testo: l'Italia **ripudia** la guerra come strumento di offesa alla libertà degli altri popoli e come mezzo di risoluzione delle controversie internazionali. Lo stesso articolo consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace: su questa frase poggia l'adesione italiana all'Unione europea.":
    "L'**article 11** contient le verbe le plus discuté du texte : l'Italie **répudie** la guerre comme instrument d'atteinte à la liberté des autres peuples et comme moyen de règlement des différends internationaux. Le même article admet les limitations de souveraineté nécessaires à un ordre qui assure la paix : c'est sur cette phrase que repose l'adhésion italienne à l'Union européenne.",
  "Quanti sono gli articoli dei principi fondamentali?":
    "Combien y a-t-il d'articles dans les principes fondamentaux ?",
  "Sette": "Sept",
  "Dodici": "Douze",
  "Ventuno": "Vingt et un",
  "Centotrentanove": "Cent trente-neuf",
  "I principi fondamentali sono gli articoli da 1 a 12, prima ancora della Parte I. Centotrentanove è il totale degli articoli della Costituzione.":
    "Les principes fondamentaux sont les articles 1 à 12, avant même la Partie I. Cent trente-neuf est le total des articles de la Constitution.",
  "Una costituzione rigida": "Une constitution rigide",
  "La Costituzione non si cambia con una legge ordinaria. L'**articolo 138** impone una procedura aggravata: ciascuna Camera deve approvare due volte, a distanza di almeno tre mesi, e nella seconda votazione serve la maggioranza assoluta. Se non si raggiungono i due terzi, cinquecentomila elettori, cinque consigli regionali o un quinto dei parlamentari possono chiedere un **referendum confermativo**.":
    "La Constitution ne se modifie pas par une loi ordinaire. L'**article 138** impose une procédure aggravée : chaque chambre doit approuver deux fois, à au moins trois mois d'intervalle, et le second vote exige la majorité absolue. Si les deux tiers ne sont pas atteints, cinq cent mille électeurs, cinq conseils régionaux ou un cinquième des parlementaires peuvent demander un **référendum confirmatif**.",
  "L'**articolo 139** mette un limite ancora più netto: la **forma repubblicana non può essere oggetto di revisione costituzionale**. Non esiste procedura, per quanto aggravata, che possa riportare la monarchia.":
    "L'**article 139** pose une limite plus nette encore : la **forme républicaine ne peut faire l'objet d'aucune révision constitutionnelle**. Aucune procédure, si aggravée soit-elle, ne peut ramener la monarchie.",
  "Che cosa non può essere modificato in nessun modo?":
    "Que ne peut-on modifier d'aucune manière ?",
  "Il numero dei parlamentari": "Le nombre de parlementaires",
  "La forma repubblicana": "La forme républicaine",
  "La durata del mandato presidenziale": "La durée du mandat présidentiel",
  "L'articolo 139 sottrae la forma repubblicana a qualsiasi revisione. Tutto il resto — parlamentari, mandato, perfino l'articolo 12 sulla bandiera — è modificabile con la procedura dell'articolo 138.":
    "L'article 139 soustrait la forme républicaine à toute révision. Tout le reste — les parlementaires, le mandat, jusqu'à l'article 12 sur le drapeau — est modifiable par la procédure de l'article 138.",
  "Il referendum dell'articolo 138 è **confermativo** e non ha quorum: vale qualunque sia l'affluenza. È cosa diversa dal referendum **abrogativo** dell'articolo 75, che invece è valido solo se vota la maggioranza degli aventi diritto.":
    "Le référendum de l'article 138 est **confirmatif** et n'a pas de quorum : il vaut quelle que soit la participation. C'est autre chose que le référendum **abrogatif** de l'article 75, qui n'est valable que si la majorité des inscrits vote.",
  "Diritti e doveri dei cittadini": "Droits et devoirs des citoyens",
  "Perché conta: la Parte I non elenca soltanto quello che si può fare. Elenca anche quattro doveri, e sono quelli che trasformano un abitante in un cittadino.":
    "Pourquoi cela compte : la Partie I n'énumère pas seulement ce qu'on peut faire. Elle énumère aussi quatre devoirs, et ce sont eux qui font d'un habitant un citoyen.",
  "Quattro gruppi di rapporti": "Quatre groupes de rapports",
  "La Parte I va dall'articolo 13 al 54 ed è divisa in quattro titoli, ognuno dei quali guarda la persona da un lato diverso: **rapporti civili**, **etico-sociali**, **economici** e **politici**.":
    "La Partie I va de l'article 13 à l'article 54 et se divise en quatre titres, chacun regardant la personne d'un côté différent : rapports **civils**, **éthico-sociaux**, **économiques** et **politiques**.",
  "Civili · 13–28": "Civils · 13 à 28",
  "Libertà personale, domicilio, corrispondenza, circolazione, riunione, associazione, religione, pensiero, difesa in giudizio.":
    "Liberté personnelle, domicile, correspondance, circulation, réunion, association, religion, pensée, défense en justice.",
  "Etico-sociali · 29–34": "Éthico-sociaux · 29 à 34",
  "Famiglia, salute, scuola. Qui stanno il diritto alle cure e l'istruzione obbligatoria.":
    "Famille, santé, école. C'est là que se trouvent le droit aux soins et l'instruction obligatoire.",
  "Economici · 35–47": "Économiques · 35 à 47",
  "Lavoro, retribuzione, sindacati, sciopero, impresa, proprietà, risparmio.":
    "Travail, rémunération, syndicats, grève, entreprise, propriété, épargne.",
  "Politici · 48–54": "Politiques · 48 à 54",
  "Voto, partiti, petizioni, accesso agli uffici pubblici, difesa della patria, tributi, fedeltà alla Repubblica.":
    "Vote, partis, pétitions, accès aux emplois publics, défense de la patrie, impôts, fidélité à la République.",
  "Le libertà": "Les libertés",
  "L'**articolo 13** dichiara inviolabile la libertà personale: nessuna detenzione o perquisizione se non per atto motivato dell'autorità giudiziaria. Se in casi eccezionali interviene la polizia, deve avvisare il giudice entro quarantotto ore, e il giudice ha altre quarantotto ore per convalidare. Passate le novantasei ore senza convalida, il provvedimento perde ogni effetto.":
    "L'**article 13** déclare la liberté personnelle inviolable : aucune détention ni perquisition sinon par acte motivé de l'autorité judiciaire. Si, dans des cas exceptionnels, la police intervient, elle doit avertir le juge dans les quarante-huit heures, et le juge dispose de quarante-huit heures encore pour valider. Passées les quatre-vingt-seize heures sans validation, la mesure perd tout effet.",
  "L'**articolo 21** garantisce a tutti il diritto di manifestare liberamente il proprio pensiero con la parola, lo scritto e ogni altro mezzo di diffusione. La stampa non può essere soggetta ad autorizzazioni o censure: è una frase scritta da chi aveva appena vissuto vent'anni di giornali autorizzati.":
    "L'**article 21** garantit à tous le droit de manifester librement sa pensée par la parole, l'écrit et tout autre moyen de diffusion. La presse ne peut être soumise à autorisation ni à censure : c'est une phrase écrite par des gens qui venaient de vivre vingt ans de journaux autorisés.",
  "Entro quanto tempo l'autorità giudiziaria deve essere avvisata di un fermo di polizia?":
    "Dans quel délai l'autorité judiciaire doit-elle être avertie d'une garde à vue ?",
  "Entro ventiquattro ore": "Dans les vingt-quatre heures",
  "Entro quarantotto ore": "Dans les quarante-huit heures",
  "Entro una settimana": "Dans la semaine",
  "Non è previsto alcun termine": "Aucun délai n'est prévu",
  "Quarantotto ore per l'avviso al giudice e altre quarantotto per la convalida. Se il termine passa senza convalida, il provvedimento è revocato e resta privo di effetto: il tempo qui non è una formalità, è la garanzia.":
    "Quarante-huit heures pour avertir le juge et quarante-huit autres pour la validation. Si le délai passe sans validation, la mesure est révoquée et reste sans effet : ici le temps n'est pas une formalité, c'est la garantie.",
  "La pena e il processo": "La peine et le procès",
  "L'**articolo 27** contiene tre regole che stanno insieme: la responsabilità penale è **personale**, l'imputato **non è considerato colpevole** fino alla condanna definitiva, e le pene devono tendere alla **rieducazione** del condannato. Lo stesso articolo chiude con quattro parole: non è ammessa la pena di morte.":
    "L'**article 27** contient trois règles qui vont ensemble : la responsabilité pénale est **personnelle**, l'accusé **n'est pas considéré comme coupable** jusqu'à la condamnation définitive, et les peines doivent tendre à la **rééducation** du condamné. Le même article se termine par quelques mots : la peine de mort n'est pas admise.",
  "L'**articolo 24** garantisce a tutti il diritto di agire in giudizio e la difesa in ogni stato del procedimento; ai non abbienti lo Stato assicura i mezzi per agire e difendersi, ed è da qui che nasce il **patrocinio a spese dello Stato**.":
    "L'**article 24** garantit à tous le droit d'agir en justice et la défense à tout stade de la procédure ; aux plus démunis l'État assure les moyens d'agir et de se défendre, et c'est de là que naît l'**aide juridictionnelle**.",
  "I doveri": "Les devoirs",
  "Il **voto** (articolo 48) è definito insieme diritto e **dovere civico**: non è sanzionato, ma la Costituzione lo chiama con quel nome di proposito. L'**articolo 52** definisce la difesa della patria un sacro dovere. L'**articolo 54** chiede a tutti fedeltà alla Repubblica e, a chi ricopre funzioni pubbliche, di adempierle con disciplina e onore.":
    "Le **vote** (article 48) est défini à la fois comme un droit et comme un **devoir civique** : il n'est pas sanctionné, mais la Constitution l'appelle ainsi à dessein. L'**article 52** fait de la défense de la patrie un devoir sacré. L'**article 54** demande à tous fidélité à la République et, à ceux qui exercent des fonctions publiques, de les remplir avec discipline et honneur.",
  "L'**articolo 53** è il dovere che si incontra ogni anno: tutti concorrono alle spese pubbliche **in ragione della propria capacità contributiva**, e il sistema tributario è informato a criteri di **progressività**. Chi guadagna di più non paga solo di più: paga una quota maggiore. È il principio su cui poggiano gli scaglioni dell'IRPEF.":
    "L'**article 53** est le devoir que l'on rencontre chaque année : tous contribuent aux dépenses publiques **à raison de leur capacité contributive**, et le système fiscal est fondé sur des critères de **progressivité**. Qui gagne plus ne paie pas seulement davantage : il paie une part plus grande. C'est le principe sur lequel reposent les tranches de l'IRPEF.",
  "Che cosa significa che il sistema tributario è progressivo?":
    "Que signifie que le système fiscal est progressif ?",
  "Che le tasse aumentano ogni anno": "Que les impôts augmentent chaque année",
  "Che chi ha un reddito più alto paga una quota proporzionalmente maggiore":
    "Que celui qui a un revenu plus élevé paie une part proportionnellement plus grande",
  "Che tutti pagano la stessa percentuale": "Que tout le monde paie le même pourcentage",
  "Che si paga a rate": "Qu'on paie par échéances",
  "Progressività significa che l'aliquota cresce con il reddito, non solo l'importo. Una tassa uguale in percentuale per tutti sarebbe proporzionale, non progressiva: l'articolo 53 chiede espressamente la seconda.":
    "La progressivité signifie que le taux croît avec le revenu, et pas seulement le montant. Un impôt au même pourcentage pour tous serait proportionnel, non progressif : l'article 53 demande expressément le second.",
  "Come definisce il voto la Costituzione?": "Comment la Constitution définit-elle le vote ?",
  "Solo un diritto": "Seulement un droit",
  "Un diritto e un dovere civico": "Un droit et un devoir civique",
  "Un obbligo sanzionabile con una multa": "Une obligation punie d'une amende",
  "Una facoltà riservata a chi paga le tasse":
    "Une faculté réservée à ceux qui paient des impôts",
  "L'articolo 48 usa entrambe le parole: il voto è un diritto e il suo esercizio è un dovere civico. Dovere civico però non vuol dire obbligo sanzionato — chi non vota non paga nulla.":
    "L'article 48 emploie les deux mots : le vote est un droit et son exercice un devoir civique. Devoir civique ne veut pourtant pas dire obligation sanctionnée — celui qui ne vote pas ne paie rien.",
  "Molte di queste garanzie valgono per **tutti**, non solo per i cittadini: l'articolo 13 dice nessuno, l'articolo 21 dice tutti. I diritti riservati ai cittadini sono soprattutto quelli politici — il voto, l'accesso ai pubblici uffici.":
    "Beaucoup de ces garanties valent pour **tous**, pas seulement pour les citoyens : l'article 13 dit nul, l'article 21 dit tous. Les droits réservés aux citoyens sont surtout les droits politiques — le vote, l'accès aux emplois publics.",
  "La lingua italiana e le minoranze linguistiche":
    "La langue italienne et les minorités linguistiques",
  "Perché conta: l'Italia è unita da centosessant'anni, ma la sua unità linguistica è molto più recente — ed è ancora incompleta, per legge e di proposito.":
    "Pourquoi cela compte : l'Italie est unie depuis cent soixante ans, mais son unité linguistique est bien plus récente — et elle est encore incomplète, par la loi et à dessein.",
  "Una lingua giovane": "Une langue jeune",
  "L'italiano standard non nasce da un parlato ma da una **lingua scritta**: il fiorentino letterario del Trecento di **Dante, Petrarca e Boccaccio**, scelto nel Cinquecento come modello per tutta la penisola. Per secoli è stata la lingua della scrittura mentre si parlava altro.":
    "L'italien standard ne naît pas d'un parler mais d'une **langue écrite** : le florentin littéraire du XIVe siècle de **Dante, Pétrarque et Boccace**, choisi au XVIe comme modèle pour toute la péninsule. Pendant des siècles, il a été la langue de l'écrit tandis qu'on parlait autre chose.",
  "Alla proclamazione del Regno, nel 1861, chi sapeva usare l'italiano era una piccola minoranza: la stima più citata, quella del linguista **Tullio De Mauro**, parla di poco più del due per cento della popolazione, e altri studiosi arrivano a percentuali più alte, comunque lontane dalla maggioranza. A unificare la lingua sono stati la scuola dell'obbligo, la leva militare, l'emigrazione interna e — negli anni Cinquanta e Sessanta — la televisione.":
    "À la proclamation du Royaume, en 1861, ceux qui savaient se servir de l'italien étaient une petite minorité : l'estimation la plus citée, celle du linguiste **Tullio De Mauro**, parle d'un peu plus de deux pour cent de la population, et d'autres chercheurs arrivent à des pourcentages plus élevés, en tout cas loin de la majorité. Ce sont l'école obligatoire, le service militaire, l'émigration intérieure et — dans les années cinquante et soixante — la télévision qui ont unifié la langue.",
  "L'**Accademia della Crusca**, fondata a Firenze nel **1583**, è la più antica accademia linguistica del mondo ancora attiva. Il suo nome viene dall'immagine della farina separata dalla crusca: separare le parole buone dalle altre.":
    "L'**Accademia della Crusca**, fondée à Florence en **1583**, est la plus ancienne académie linguistique du monde encore en activité. Son nom vient de l'image de la farine séparée du son : séparer les bons mots des autres.",
  "Da quale parlata deriva l'italiano standard?": "De quel parler l'italien standard vient-il ?",
  "Dal romano dell'epoca imperiale": "Du romain de l'époque impériale",
  "Dal fiorentino letterario del Trecento": "Du florentin littéraire du XIVe siècle",
  "Dal milanese dell'Ottocento": "Du milanais du XIXe siècle",
  "Dal napoletano del Seicento": "Du napolitain du XVIIe siècle",
  "Il modello è il fiorentino di Dante, Petrarca e Boccaccio, adottato come lingua scritta comune nel Cinquecento. Il latino è l'antenato di tutte le parlate italiane, non il modello dell'italiano moderno.":
    "Le modèle est le florentin de Dante, Pétrarque et Boccace, adopté comme langue écrite commune au XVIe siècle. Le latin est l'ancêtre de tous les parlers d'Italie, non le modèle de l'italien moderne.",
  "Dialetti o lingue?": "Dialectes ou langues ?",
  "Quelli che in Italia si chiamano **dialetti** in genere non sono varianti dell'italiano: sono lingue romanze sorelle, discese dal latino per conto proprio. Il napoletano, il siciliano, il veneto o il piemontese non derivano dall'italiano più di quanto lo spagnolo derivi dal francese.":
    "Ce qu'on appelle en Italie des **dialectes** n'est en général pas une variante de l'italien : ce sont des langues romanes sœurs, descendues du latin pour leur propre compte. Le napolitain, le sicilien, le vénitien ou le piémontais ne dérivent pas plus de l'italien que l'espagnol ne dérive du français.",
  "Il dialetto non è scomparso. Secondo le rilevazioni ISTAT una quota consistente della popolazione lo usa ancora, soprattutto in famiglia e fra amici, spesso alternandolo all'italiano nella stessa conversazione.":
    "Le dialecte n'a pas disparu. Selon les relevés de l'ISTAT, une part importante de la population l'emploie encore, surtout en famille et entre amis, souvent en alternance avec l'italien dans la même conversation.",
  "Le minoranze riconosciute": "Les minorités reconnues",
  "L'**articolo 6** della Costituzione impegna la Repubblica a tutelare con apposite norme le minoranze linguistiche. La **legge 482 del 1999** ha dato attuazione a quell'articolo dopo cinquant'anni, riconoscendo **dodici** minoranze storiche.":
    "L'**article 6** de la Constitution engage la République à protéger par des normes particulières les minorités linguistiques. La **loi 482 de 1999** a donné effet à cet article après cinquante ans, en reconnaissant **douze** minorités historiques.",
  "Le dodici": "Les douze",
  "Albanesi, catalane, germaniche, greche, slovene, croate, e le popolazioni parlanti francese, franco-provenzale, friulano, ladino, occitano e sardo.":
    "Albanaise, catalane, germanique, grecque, slovène, croate, et les populations parlant le français, le franco-provençal, le frioulan, le ladin, l'occitan et le sarde.",
  "Alto Adige · Südtirol": "Haut-Adige · Südtirol",
  "Il tedesco è equiparato all'italiano: atti bilingui, scuole separate per gruppo linguistico, e la proporzionale etnica per i posti pubblici.":
    "L'allemand est mis sur le même plan que l'italien : actes bilingues, écoles séparées par groupe linguistique, et proportionnelle ethnique pour les emplois publics.",
  "Valle d'Aosta": "Val d'Aoste",
  "Il francese è equiparato all'italiano fin dallo statuto speciale del 1948; nelle valli walser si parlano anche varietà germaniche.":
    "Le français est mis sur le même plan que l'italien depuis le statut spécial de 1948 ; dans les vallées walser on parle aussi des variétés germaniques.",
  "Friuli Venezia Giulia": "Frioul-Vénétie Julienne",
  "Tutela dello sloveno nelle province di Trieste, Gorizia e Udine, e del friulano, parlato da alcune centinaia di migliaia di persone.":
    "Protection du slovène dans les provinces de Trieste, Gorizia et Udine, et du frioulan, parlé par quelques centaines de milliers de personnes.",
  "Quale legge dà attuazione all'articolo 6 sulle minoranze linguistiche?":
    "Quelle loi donne effet à l'article 6 sur les minorités linguistiques ?",
  "La legge 482 del 1999": "La loi 482 de 1999",
  "La legge 194 del 1978": "La loi 194 de 1978",
  "La legge 300 del 1970": "La loi 300 de 1970",
  "La legge 91 del 1992": "La loi 91 de 1992",
  "La legge 15 dicembre 1999, n. 482, riconosce dodici minoranze linguistiche storiche. La 300 del 1970 è lo Statuto dei lavoratori e la 91 del 1992 riguarda la cittadinanza: numeri facili da scambiare.":
    "La loi du 15 décembre 1999, n° 482, reconnaît douze minorités linguistiques historiques. La 300 de 1970 est le Statut des travailleurs et la 91 de 1992 concerne la nationalité : des numéros faciles à confondre.",
  "In quale regione il francese è equiparato all'italiano?":
    "Dans quelle région le français est-il mis sur le même plan que l'italien ?",
  "In Piemonte": "En Piémont",
  "In Liguria": "En Ligurie",
  "In Valle d'Aosta": "En Val d'Aoste",
  "In Trentino-Alto Adige": "Au Trentin-Haut-Adige",
  "La Valle d'Aosta è bilingue italiano-francese per statuto speciale. In Trentino-Alto Adige la seconda lingua è il tedesco, e in Piemonte si parlano occitano e franco-provenzale, tutelati ma non equiparati.":
    "Le Val d'Aoste est bilingue italien-français par statut spécial. Au Trentin-Haut-Adige, la seconde langue est l'allemand, et en Piémont on parle l'occitan et le franco-provençal, protégés mais non mis sur le même plan.",
  "L'italiano non è dichiarato lingua ufficiale nei principi fondamentali della Costituzione. Lo si ricava dallo statuto del Trentino-Alto Adige e dalla legge 482, che lo chiama lingua ufficiale della Repubblica: una di quelle cose che sembrano ovvie e non sono scritte dove ci si aspetta.":
    "L'italien n'est pas déclaré langue officielle dans les principes fondamentaux de la Constitution. On le déduit du statut du Trentin-Haut-Adige et de la loi 482, qui l'appelle langue officielle de la République : une de ces choses qui semblent évidentes et ne sont pas écrites là où on les attend.",
  "Feste civili e religiose": "Fêtes civiles et religieuses",
  "Perché conta: il calendario racconta un paese meglio di molti manuali. In Italia le feste nazionali sono dodici, e una tredicesima cambia da città a città.":
    "Pourquoi cela compte : le calendrier raconte un pays mieux que bien des manuels. En Italie, les fêtes nationales sont douze, et une treizième change d'une ville à l'autre.",
  "I giorni festivi": "Les jours fériés",
  "Sono festivi per legge dodici giorni all'anno, più il patrono locale. Quattro sono civili, gli altri religiosi — l'equilibrio di un paese che è stato a lungo cattolico e ha scritto una costituzione laica.":
    "Douze jours par an sont fériés par la loi, plus le saint patron du lieu. Quatre sont civils, les autres religieux — l'équilibre d'un pays longtemps catholique qui a écrit une constitution laïque.",
  "Feste civili": "Fêtes civiles",
  "25 aprile, Liberazione · 1º maggio, festa dei lavoratori · 2 giugno, Repubblica. La quarta è il 1º gennaio, che è civile ma senza contenuto politico.":
    "25 avril, la Libération · 1er mai, la fête des travailleurs · 2 juin, la République. La quatrième est le 1er janvier, civil mais sans contenu politique.",
  "Feste religiose fisse": "Fêtes religieuses fixes",
  "6 gennaio Epifania · 15 agosto Assunzione · 1º novembre Ognissanti · 8 dicembre Immacolata · 25 dicembre Natale · 26 dicembre Santo Stefano.":
    "6 janvier l'Épiphanie · 15 août l'Assomption · 1er novembre la Toussaint · 8 décembre l'Immaculée Conception · 25 décembre Noël · 26 décembre la Saint-Étienne.",
  "Feste mobili": "Fêtes mobiles",
  "La Pasqua e il Lunedì dell'Angelo, che tutti chiamano Pasquetta. La data dipende dal primo plenilunio di primavera.":
    "Pâques et le lundi de l'Ange, que tout le monde appelle Pasquetta. La date dépend de la première pleine lune du printemps.",
  "Il patrono": "Le saint patron",
  "Ogni comune ha il suo giorno festivo: sant'Ambrogio a Milano il 7 dicembre, san Gennaro a Napoli il 19 settembre, santi Pietro e Paolo a Roma il 29 giugno.":
    "Chaque commune a son jour férié : saint Ambroise à Milan le 7 décembre, saint Janvier à Naples le 19 septembre, saint Pierre et saint Paul à Rome le 29 juin.",
  "Quale di queste è una festa civile e non religiosa?":
    "Laquelle de ces fêtes est civile et non religieuse ?",
  "L'Epifania": "L'Épiphanie",
  "Il 25 aprile": "Le 25 avril",
  "Il 15 agosto": "Le 15 août",
  "L'8 dicembre": "Le 8 décembre",
  "Il 25 aprile è l'anniversario della Liberazione, una data storica. Epifania, Assunzione e Immacolata sono ricorrenze religiose entrate nel calendario civile.":
    "Le 25 avril est l'anniversaire de la Libération, une date historique. Épiphanie, Assomption et Immaculée Conception sont des fêtes religieuses entrées dans le calendrier civil.",
  "Ferragosto": "Ferragosto",
  "Il **15 agosto** la Chiesa celebra l'Assunzione, ma il nome della festa è più antico: **Ferragosto** viene dalle *feriae Augusti*, il riposo istituito dall'imperatore **Augusto nel 18 avanti Cristo** alla fine dei lavori agricoli. È la festa in cui l'Italia si ferma davvero: nelle settimane intorno chiudono uffici, negozi e interi quartieri delle città.":
    "Le **15 août**, l'Église célèbre l'Assomption, mais le nom de la fête est plus ancien : **Ferragosto** vient des *feriae Augusti*, le repos institué par l'empereur **Auguste en 18 avant Jésus-Christ** à la fin des travaux agricoles. C'est la fête où l'Italie s'arrête vraiment : dans les semaines qui l'entourent, bureaux, magasins et quartiers entiers ferment.",
  "I giorni della memoria": "Les jours de mémoire",
  "Alcune ricorrenze non sono festive ma sono istituite per legge, e nelle scuole si osservano.":
    "Certaines dates ne sont pas fériées mais sont instituées par la loi, et les écoles les observent.",
  "27 gennaio": "27 janvier",
  "Giorno della Memoria, per le vittime della Shoah, delle leggi razziali e della deportazione. È la data della liberazione di Auschwitz.":
    "Le Jour de la Mémoire, pour les victimes de la Shoah, des lois raciales et de la déportation. C'est la date de la libération d'Auschwitz.",
  "10 febbraio": "10 février",
  "Giorno del Ricordo, per le vittime delle foibe e per l'esodo giuliano-dalmata.":
    "Le Jour du Souvenir, pour les victimes des foibe et pour l'exode julien-dalmate.",
  "9 maggio": "9 mai",
  "Giorno della memoria delle vittime del terrorismo, nell'anniversario del ritrovamento del corpo di Aldo Moro nel 1978.":
    "Le jour de mémoire des victimes du terrorisme, à l'anniversaire de la découverte du corps d'Aldo Moro en 1978.",
  "Da dove viene il nome Ferragosto?": "D'où vient le nom Ferragosto ?",
  "Dal ferro battuto nelle fiere estive": "Du fer battu dans les foires d'été",
  "Dalle feriae Augusti, il riposo istituito dall'imperatore Augusto":
    "Des feriae Augusti, le repos institué par l'empereur Auguste",
  "Dall'Assunzione di Maria": "De l'Assomption de Marie",
  "Dalla fiera del bestiame di agosto": "De la foire aux bestiaux d'août",
  "Il nome viene dalle feriae Augusti del 18 avanti Cristo, quindi da una festa romana precedente di secoli alla ricorrenza cristiana che poi si è sovrapposta alla stessa data.":
    "Le nom vient des feriae Augusti de 18 avant Jésus-Christ, donc d'une fête romaine antérieure de plusieurs siècles à la fête chrétienne qui s'est ensuite superposée à la même date.",
  "Le feste che non sono nel calendario": "Les fêtes qui ne sont pas au calendrier",
  "Accanto alle date ufficiali ci sono ricorrenze che scandiscono l'anno senza essere festive: il **Carnevale**, che a Venezia e a Viareggio dura settimane; la **Befana** del 6 gennaio, che porta i doni ai bambini e riempie le calze di carbone di zucchero; il **palio** o la **sagra** di paese, che in molti comuni è l'evento più partecipato dell'anno.":
    "À côté des dates officielles, des rendez-vous rythment l'année sans être fériés : le **Carnaval**, qui dure des semaines à Venise et à Viareggio ; la **Befana** du 6 janvier, qui apporte les cadeaux aux enfants et remplit les chaussettes de charbon en sucre ; le **palio** ou la **sagra** du village, qui dans bien des communes est l'événement le plus suivi de l'année.",
  "Che cosa si ricorda il 27 gennaio?": "Que commémore-t-on le 27 janvier ?",
  "L'esodo giuliano-dalmata": "L'exode julien-dalmate",
  "Le vittime della Shoah": "Les victimes de la Shoah",
  "Le vittime del terrorismo": "Les victimes du terrorisme",
  "La fine della Prima guerra mondiale": "La fin de la Première Guerre mondiale",
  "Il Giorno della Memoria cade il 27 gennaio, anniversario della liberazione di Auschwitz. Il Giorno del Ricordo, dedicato alle foibe e all'esodo, è il 10 febbraio: due date vicine e distinte.":
    "Le Jour de la Mémoire tombe le 27 janvier, anniversaire de la libération d'Auschwitz. Le Jour du Souvenir, consacré aux foibe et à l'exode, est le 10 février : deux dates proches et distinctes.",
  "Il patrono è giorno festivo **solo nel proprio comune**. Un ufficio milanese chiude il 7 dicembre; lo stesso giorno a Roma si lavora normalmente.":
    "Le saint patron n'est férié **que dans sa propre commune**. Un bureau milanais ferme le 7 décembre ; le même jour, à Rome, on travaille normalement.",
  "Il Parlamento": "Le Parlement",
  "L'ordinamento della Repubblica": "L'organisation de la République",
  "Perché conta: in Italia le due camere hanno gli stessi identici poteri. È una scelta rara in Europa, e spiega da sola perché qui fare una legge richieda più tempo che altrove.":
    "Pourquoi cela compte : en Italie, les deux chambres ont exactement les mêmes pouvoirs. C'est un choix rare en Europe, et il explique à lui seul pourquoi faire une loi y prend plus de temps qu'ailleurs.",
  "Due camere, gli stessi poteri": "Deux chambres, les mêmes pouvoirs",
  "Il Parlamento è formato dalla **Camera dei deputati** e dal **Senato della Repubblica**. Il sistema si chiama **bicameralismo paritario** — spesso detto perfetto: le due camere fanno esattamente le stesse cose. Entrambe votano la fiducia al governo, entrambe devono approvare ogni legge, e nel medesimo testo.":
    "Le Parlement se compose de la **Chambre des députés** et du **Sénat de la République**. Le système s'appelle **bicaméralisme paritaire** — souvent dit parfait : les deux chambres font exactement les mêmes choses. Toutes deux votent la confiance au gouvernement, toutes deux doivent adopter chaque loi, et dans le même texte.",
  "Se una camera modifica anche una virgola, il testo torna all'altra. L'andirivieni si chiama **navetta** e può durare a lungo. Nessun altro grande paese europeo funziona così: in Germania il Bundesrat interviene solo su certe materie, in Francia l'ultima parola spetta all'Assemblea nazionale.":
    "Si une chambre modifie ne serait-ce qu'une virgule, le texte retourne à l'autre. Ce va-et-vient s'appelle la **navette** et peut durer longtemps. Aucun autre grand pays d'Europe ne fonctionne ainsi : en Allemagne, le Bundesrat n'intervient que sur certaines matières ; en France, le dernier mot revient à l'Assemblée nationale.",
  "Camera dei deputati": "La Chambre des députés",
  "400 deputati, a Palazzo Montecitorio. Si può essere eletti a partire da 25 anni.":
    "400 députés, au palais Montecitorio. On peut être élu à partir de 25 ans.",
  "Senato della Repubblica": "Le Sénat de la République",
  "200 senatori elettivi, a Palazzo Madama. Per essere eletti servono 40 anni.":
    "200 sénateurs élus, au palais Madama. Pour être élu, il faut 40 ans.",
  "Senatori a vita": "Les sénateurs à vie",
  "Gli ex Presidenti della Repubblica lo sono di diritto. Il Presidente in carica può nominarne fino a cinque per altissimi meriti.":
    "Les anciens présidents de la République le sont de droit. Le président en exercice peut en nommer jusqu'à cinq pour très hauts mérites.",
  "Cinque anni": "Cinq ans",
  "Tanto dura la legislatura, salvo scioglimento anticipato — che in Italia è tutt'altro che raro.":
    "C'est la durée de la législature, sauf dissolution anticipée — qui, en Italie, est tout sauf rare.",
  "I numeri sono cambiati di recente: fino al 2022 i deputati erano **630** e i senatori elettivi **315**. Il taglio a 400 e 200 è stato deciso da una legge costituzionale confermata dal **referendum del 2020** e si è applicato dalle elezioni successive.":
    "Les nombres ont changé récemment : jusqu'en 2022, les députés étaient **630** et les sénateurs élus **315**. La réduction à 400 et 200 a été décidée par une loi constitutionnelle confirmée par le **référendum de 2020** et s'est appliquée aux élections suivantes.",
  "Quanti deputati siedono oggi alla Camera?":
    "Combien de députés siègent aujourd'hui à la Chambre ?",
  "200": "200",
  "315": "315",
  "400": "400",
  "630": "630",
  "Quattrocento dal 2022, dopo il referendum del 2020. Seicentotrenta era il numero precedente, e duecento è quello dei senatori elettivi.":
    "Quatre cents depuis 2022, après le référendum de 2020. Six cent trente était le nombre précédent, et deux cents celui des sénateurs élus.",
  "Chi vota e chi può essere eletto": "Qui vote et qui peut être élu",
  "Per entrambe le camere si vota a **diciotto anni**. Non è sempre stato così: fino alla legge costituzionale del **2021** il Senato si eleggeva solo dai venticinque anni in su, e per quasi settant'anni i giovani hanno avuto in mano una scheda sola su due.":
    "Pour les deux chambres, on vote à **dix-huit ans**. Il n'en a pas toujours été ainsi : jusqu'à la loi constitutionnelle de **2021**, le Sénat n'était élu qu'à partir de vingt-cinq ans, et pendant près de soixante-dix ans les jeunes n'ont eu en main qu'un bulletin sur deux.",
  "Che cosa significa bicameralismo paritario?": "Que signifie bicaméralisme paritaire ?",
  "Che le due camere hanno gli stessi poteri": "Que les deux chambres ont les mêmes pouvoirs",
  "Che le due camere hanno lo stesso numero di membri":
    "Que les deux chambres ont le même nombre de membres",
  "Che le due camere si riuniscono sempre insieme":
    "Que les deux chambres se réunissent toujours ensemble",
  "Che ogni regione elegge lo stesso numero di parlamentari":
    "Que chaque région élit le même nombre de parlementaires",
  "Paritario si riferisce ai poteri, non ai numeri: Camera e Senato hanno funzioni identiche pur avendo quattrocento membri l'una e duecento l'altro.":
    "Paritaire se rapporte aux pouvoirs, non aux nombres : la Chambre et le Sénat ont des fonctions identiques tout en comptant quatre cents membres pour l'une et deux cents pour l'autre.",
  "Il referendum abrogativo": "Le référendum abrogatif",
  "L'**articolo 75** consente a **cinquecentomila elettori** o a **cinque consigli regionali** di chiedere l'abrogazione di una legge. Il voto è valido solo se partecipa la **maggioranza degli aventi diritto**: sotto quella soglia il risultato non conta, quale che sia. Restano fuori le leggi tributarie e di bilancio, l'amnistia e l'indulto, e la ratifica dei trattati internazionali.":
    "L'**article 75** permet à **cinq cent mille électeurs** ou à **cinq conseils régionaux** de demander l'abrogation d'une loi. Le vote n'est valable que si la **majorité des inscrits** y participe : sous ce seuil, le résultat ne compte pas, quel qu'il soit. Restent hors de son champ les lois fiscales et budgétaires, l'amnistie et la remise de peine, et la ratification des traités internationaux.",
  "Alcuni referendum hanno cambiato il paese più di molte legislature: il **divorzio** nel 1974 e l'**aborto** nel 1981, in entrambi i casi con la conferma delle leggi che si voleva cancellare, e il **nucleare** nel 1987 e di nuovo nel 2011.":
    "Certains référendums ont changé le pays plus que bien des législatures : le **divorce** en 1974 et l'**avortement** en 1981, dans les deux cas en confirmant les lois qu'on voulait effacer, et le **nucléaire** en 1987 puis de nouveau en 2011.",
  "Chi è senatore a vita di diritto, senza bisogno di nomina?":
    "Qui est sénateur à vie de droit, sans avoir besoin d'être nommé ?",
  "Gli ex Presidenti del Consiglio": "Les anciens présidents du Conseil",
  "Gli ex Presidenti della Repubblica": "Les anciens présidents de la République",
  "I presidenti delle regioni a statuto speciale": "Les présidents des régions à statut spécial",
  "I giudici della Corte costituzionale a fine mandato":
    "Les juges de la Cour constitutionnelle en fin de mandat",
  "Gli ex capi dello Stato lo diventano automaticamente. Gli altri senatori a vita sono nominati dal Presidente in carica, non più di cinque, per meriti nel campo sociale, scientifico, artistico o letterario.":
    "Les anciens chefs de l'État le deviennent automatiquement. Les autres sénateurs à vie sont nommés par le président en exercice, cinq au plus, pour leurs mérites dans le domaine social, scientifique, artistique ou littéraire.",
  "Il quorum del cinquanta per cento riguarda il referendum **abrogativo**. Quello **confermativo** su una legge costituzionale non ne ha: due strumenti che portano lo stesso nome e funzionano in modo opposto.":
    "Le quorum de cinquante pour cent concerne le référendum **abrogatif**. Le référendum **confirmatif** sur une loi constitutionnelle n'en a pas : deux instruments qui portent le même nom et fonctionnent à l'inverse l'un de l'autre.",
  "Il Governo": "Le gouvernement",
  "Perché conta: chi guida il governo in Italia non è eletto da nessuno con quel nome sulla scheda, e non può licenziare i propri ministri. Due fatti che spiegano molta della politica italiana.":
    "Pourquoi cela compte : celui qui dirige le gouvernement en Italie n'est élu par personne sous ce nom-là sur le bulletin, et il ne peut pas renvoyer ses propres ministres. Deux faits qui expliquent une bonne part de la politique italienne.",
  "Come nasce un governo": "Comment naît un gouvernement",
  "Il Governo è formato dal **Presidente del Consiglio dei ministri** e dai **ministri**, che insieme compongono il **Consiglio dei ministri**. La sede è **Palazzo Chigi**.":
    "Le gouvernement est formé du **président du Conseil des ministres** et des **ministres**, qui composent ensemble le **Conseil des ministres**. Le siège est le **palais Chigi**.",
  "L'**articolo 92** stabilisce il percorso: il Presidente della Repubblica nomina il Presidente del Consiglio e, **su proposta di quest'ultimo**, i ministri. Prima di nominare, il capo dello Stato svolge le **consultazioni**: riceve i gruppi parlamentari per capire chi possa avere una maggioranza.":
    "L'**article 92** fixe le parcours : le président de la République nomme le président du Conseil et, **sur proposition de celui-ci**, les ministres. Avant de nommer, le chef de l'État mène les **consultations** : il reçoit les groupes parlementaires pour comprendre qui peut réunir une majorité.",
  "Entro **dieci giorni** dalla formazione il governo si presenta alle camere per la **fiducia** (articolo 94). Serve quella di entrambe: un governo che l'ottiene alla Camera e la perde al Senato non esiste.":
    "Dans les **dix jours** de sa formation, le gouvernement se présente devant les chambres pour la **confiance** (article 94). Il faut celle des deux : un gouvernement qui l'obtient à la Chambre et la perd au Sénat n'existe pas.",
  "Chi nomina il Presidente del Consiglio?": "Qui nomme le président du Conseil ?",
  "Gli elettori, con il voto alle politiche": "Les électeurs, par le vote aux législatives",
  "Il Presidente della Repubblica": "Le président de la République",
  "La Camera dei deputati": "La Chambre des députés",
  "Il partito che ha preso più voti": "Le parti qui a obtenu le plus de voix",
  "Lo nomina il capo dello Stato, dopo le consultazioni. Il nome del candidato può comparire sui manifesti elettorali, ma sulla scheda si votano i partiti e i loro candidati, non il capo del governo.":
    "C'est le chef de l'État qui le nomme, après les consultations. Le nom du candidat peut figurer sur les affiches électorales, mais sur le bulletin on vote pour des partis et leurs candidats, pas pour le chef du gouvernement.",
  "Un primo fra pari": "Un premier parmi ses pairs",
  "Il Presidente del Consiglio **dirige la politica generale del governo** e ne è responsabile, ma **non può revocare un ministro**. È una differenza netta rispetto al cancelliere tedesco o al primo ministro britannico: un ministro che non si dimette resta al suo posto, e l'unica via è la crisi dell'intero governo.":
    "Le président du Conseil **dirige la politique générale du gouvernement** et en répond, mais il **ne peut pas révoquer un ministre**. C'est une différence nette avec le chancelier allemand ou le premier ministre britannique : un ministre qui ne démissionne pas reste en place, et la seule issue est la crise du gouvernement tout entier.",
  "Da qui la brevità dei governi italiani: dal 1946 se ne sono succeduti a un ritmo che dà una durata media di poco più di un anno. La continuità l'hanno garantita l'amministrazione e — spesso — gli stessi ministri, che cambiavano governo senza cambiare scrivania.":
    "De là la brièveté des gouvernements italiens : depuis 1946 ils se sont succédé à un rythme qui donne une durée moyenne d'un peu plus d'un an. La continuité a été assurée par l'administration et — souvent — par les mêmes ministres, qui changeaient de gouvernement sans changer de bureau.",
  "Quando il governo fa le leggi": "Quand le gouvernement fait les lois",
  "Decreto legge · art. 77": "Le décret-loi · art. 77",
  "In casi straordinari di necessità e urgenza. Entra in vigore subito, ma decade dall'inizio se il Parlamento non lo converte in legge entro sessanta giorni.":
    "Dans des cas extraordinaires de nécessité et d'urgence. Il entre en vigueur aussitôt, mais tombe depuis l'origine si le Parlement ne le convertit pas en loi dans les soixante jours.",
  "Decreto legislativo · art. 76": "Le décret législatif · art. 76",
  "Il Parlamento delega il governo a scrivere una normativa, fissando principi, criteri e un termine. Serve per i testi lunghi e tecnici, come i codici.":
    "Le Parlement délègue au gouvernement le soin d'écrire un texte, en fixant des principes, des critères et un délai. Cela sert aux textes longs et techniques, comme les codes.",
  "Regolamento": "Le règlement",
  "Norme di dettaglio che attuano una legge. Non hanno forza di legge e non possono contraddirla.":
    "Des normes de détail qui appliquent une loi. Elles n'ont pas force de loi et ne peuvent pas la contredire.",
  "Che cosa succede a un decreto legge non convertito entro sessanta giorni?":
    "Qu'arrive-t-il à un décret-loi non converti dans les soixante jours ?",
  "Diventa definitivo automaticamente": "Il devient définitif automatiquement",
  "Decade, e perde effetto fin dall'inizio": "Il tombe, et perd effet depuis l'origine",
  "Resta in vigore altri sessanta giorni": "Il reste en vigueur soixante jours de plus",
  "Passa alla Corte costituzionale": "Il passe à la Cour constitutionnelle",
  "Decade retroattivamente: è come se non fosse mai esistito, e il Parlamento deve semmai regolare i rapporti sorti nel frattempo. Sessanta giorni è un termine severo, ed è per questo che i decreti si accumulano a fine scadenza.":
    "Il tombe rétroactivement : c'est comme s'il n'avait jamais existé, et le Parlement doit le cas échéant régler les situations nées entre-temps. Soixante jours est un délai sévère, et c'est pourquoi les décrets s'accumulent à l'approche de l'échéance.",
  "Come cade": "Comment il tombe",
  "La **mozione di sfiducia** deve essere firmata da almeno un decimo dei componenti della camera e non può essere discussa prima di **tre giorni** dalla presentazione: il tempo serve a raffreddare gli animi. Nella pratica, però, i governi italiani cadono quasi sempre per **dimissioni**, non per un voto: un partito esce dalla maggioranza e il Presidente del Consiglio sale al Quirinale.":
    "La **motion de censure** doit être signée par au moins un dixième des membres de la chambre et ne peut être discutée avant **trois jours** après son dépôt : le délai sert à calmer les esprits. Dans la pratique, pourtant, les gouvernements italiens tombent presque toujours par **démission**, non par un vote : un parti quitte la majorité et le président du Conseil monte au Quirinal.",
  "Il Presidente del Consiglio può revocare un ministro?":
    "Le président du Conseil peut-il révoquer un ministre ?",
  "Sì, in qualsiasi momento": "Oui, à tout moment",
  "Sì, con l'accordo del Consiglio dei ministri": "Oui, avec l'accord du Conseil des ministres",
  "No: può proporne la nomina, non la revoca":
    "Non : il peut proposer sa nomination, pas sa révocation",
  "Solo con l'autorizzazione del Parlamento": "Seulement avec l'autorisation du Parlement",
  "L'articolo 92 gli dà il potere di proporre i ministri al Presidente della Repubblica, non quello di rimuoverli. Un ministro che rifiuta di dimettersi si toglie solo aprendo una crisi di governo.":
    "L'article 92 lui donne le pouvoir de proposer les ministres au président de la République, non celui de les écarter. Un ministre qui refuse de démissionner ne s'en va qu'au prix d'une crise gouvernementale.",
  "Presidente della Repubblica e Presidente del Consiglio sono due cariche diverse e si confondono di continuo. Il primo sta al **Quirinale** e dura sette anni; il secondo sta a **Palazzo Chigi** e dura quanto la sua maggioranza.":
    "Président de la République et président du Conseil sont deux charges différentes et on les confond sans cesse. Le premier siège au **Quirinal** et dure sept ans ; le second est au **palais Chigi** et dure autant que sa majorité.",
  "Perché conta: sulla carta il capo dello Stato è una figura di garanzia che firma. Nei momenti di crisi è la persona che decide chi prova a governare — e in Italia le crisi non sono rare.":
    "Pourquoi cela compte : sur le papier, le chef de l'État est une figure de garantie qui signe. Dans les moments de crise, c'est la personne qui décide qui essaie de gouverner — et en Italie les crises ne sont pas rares.",
  "Come si elegge": "Comment on l'élit",
  "Il Presidente è eletto dal **Parlamento in seduta comune**, cioè deputati e senatori insieme, con l'aggiunta di **cinquantotto delegati regionali**: tre per ogni regione, uno solo per la Valle d'Aosta, che è troppo piccola per tre.":
    "Le président est élu par le **Parlement en séance commune**, c'est-à-dire les députés et les sénateurs ensemble, avec en plus **cinquante-huit délégués régionaux** : trois par région, un seul pour le Val d'Aoste, trop petit pour trois.",
  "Nei primi tre scrutini serve la maggioranza dei **due terzi**; dal quarto basta la **maggioranza assoluta**. Il voto è segreto, e la segretezza produce i **franchi tiratori**: parlamentari che votano contro le indicazioni del proprio gruppo senza che nessuno sappia chi siano. Alcune elezioni hanno richiesto oltre venti scrutini.":
    "Aux trois premiers tours, il faut la majorité des **deux tiers** ; à partir du quatrième, la **majorité absolue** suffit. Le vote est secret, et le secret produit les **franchi tiratori** : des parlementaires qui votent contre la consigne de leur groupe sans que personne sache lesquels. Certaines élections ont demandé plus de vingt tours.",
  "Sette anni": "Sept ans",
  "Il mandato è più lungo della legislatura di proposito: il Presidente non deve dipendere dal Parlamento che lo ha eletto.":
    "Le mandat est plus long que la législature à dessein : le président ne doit pas dépendre du Parlement qui l'a élu.",
  "Cinquant'anni": "Cinquante ans",
  "L'età minima. Servono anche la cittadinanza italiana e il godimento dei diritti civili e politici.":
    "L'âge minimal. Il faut aussi la nationalité italienne et la jouissance des droits civils et politiques.",
  "Il Quirinale": "Le Quirinal",
  "La residenza ufficiale, un palazzo che è stato dei papi e poi dei re prima di essere della Repubblica.":
    "La résidence officielle, un palais qui fut celui des papes puis des rois avant d'être celui de la République.",
  "Quanto dura il mandato del Presidente della Repubblica?":
    "Combien de temps dure le mandat du président de la République ?",
  "Quattro anni": "Quatre ans",
  "Nove anni": "Neuf ans",
  "Sette anni, due più della legislatura. Cinque è la durata delle camere e nove quella dei giudici costituzionali.":
    "Sept ans, deux de plus que la législature. Cinq est la durée des chambres et neuf celle des juges constitutionnels.",
  "Che cosa può fare": "Ce qu'il peut faire",
  "**Promulga le leggi**, e prima di firmarle può **rinviarle una volta** alle camere con un messaggio motivato. Se il Parlamento riapprova lo stesso testo, deve promulgarlo: il rinvio è un freno, non un veto.":
    "Il **promulgue les lois** et, avant de les signer, il peut les **renvoyer une fois** aux chambres par un message motivé. Si le Parlement réadopte le même texte, il doit le promulguer : le renvoi est un frein, pas un veto.",
  "**Scioglie le camere**, sentiti i loro presidenti, e non può farlo negli ultimi sei mesi del proprio mandato — il cosiddetto **semestre bianco**, pensato perché non usi lo scioglimento per farsi rieleggere. **Nomina** il Presidente del Consiglio e cinque giudici costituzionali, **presiede** il Consiglio superiore della magistratura e il Consiglio supremo di difesa, **comanda** le forze armate, **concede la grazia** e **ratifica** i trattati.":
    "Il **dissout les chambres**, leurs présidents entendus, et il ne peut le faire dans les six derniers mois de son mandat — le **semestre blanc**, pensé pour qu'il n'use pas de la dissolution afin de se faire réélire. Il **nomme** le président du Conseil et cinq juges constitutionnels, **préside** le Conseil supérieur de la magistrature et le Conseil suprême de défense, **commande** les forces armées, **accorde la grâce** et **ratifie** les traités.",
  "Quante volte il Presidente può rinviare una legge alle camere?":
    "Combien de fois le président peut-il renvoyer une loi aux chambres ?",
  "Nessuna: deve promulgare quello che riceve": "Aucune : il doit promulguer ce qu'il reçoit",
  "Una sola volta": "Une seule fois",
  "Due volte": "Deux fois",
  "Tutte le volte che ritiene necessario": "Autant de fois qu'il le juge nécessaire",
  "Un solo rinvio, con messaggio motivato. Se le camere riapprovano il medesimo testo, la promulgazione diventa un atto dovuto: il Presidente frena, non blocca.":
    "Un seul renvoi, par message motivé. Si les chambres réadoptent le même texte, la promulgation devient un acte dû : le président freine, il ne bloque pas.",
  "Di che cosa risponde": "Ce dont il répond",
  "Il Presidente **non è responsabile** degli atti compiuti nell'esercizio delle sue funzioni, con due eccezioni: **alto tradimento** e **attentato alla Costituzione**, per i quali lo mette in stato d'accusa il Parlamento in seduta comune e lo giudica la Corte costituzionale integrata da sedici membri esterni.":
    "Le président **n'est pas responsable** des actes accomplis dans l'exercice de ses fonctions, à deux exceptions près : la **haute trahison** et l'**attentat à la Constitution**, pour lesquels le Parlement en séance commune le met en accusation et la Cour constitutionnelle le juge, complétée par seize membres extérieurs.",
  "Ogni suo atto richiede la **controfirma** del ministro proponente, che se ne assume la responsabilità (articolo 89). È il meccanismo che tiene insieme un capo dello Stato irresponsabile e un sistema in cui qualcuno deve pur rispondere.":
    "Chacun de ses actes exige le **contreseing** du ministre qui l'a proposé et qui en assume la responsabilité (article 89). C'est le mécanisme qui tient ensemble un chef de l'État irresponsable et un système où quelqu'un doit bien répondre.",
  "Il mandato non prevede limiti di rielezione, ma per sessantasette anni nessuno è stato rieletto. È successo due volte in tempi recenti, entrambe in una crisi in cui il Parlamento non trovava un altro nome.":
    "Le mandat ne prévoit pas de limite de réélection, mais pendant soixante-sept ans personne n'a été réélu. Cela s'est produit deux fois récemment, chaque fois dans une crise où le Parlement ne trouvait pas d'autre nom.",
  "Che cos'è il semestre bianco?": "Qu'est-ce que le semestre blanc ?",
  "I primi sei mesi di mandato, in cui il Presidente non firma leggi":
    "Les six premiers mois du mandat, où le président ne signe pas de lois",
  "Gli ultimi sei mesi di mandato, in cui non può sciogliere le camere":
    "Les six derniers mois du mandat, où il ne peut pas dissoudre les chambres",
  "Il periodo fra lo scioglimento e le elezioni":
    "La période entre la dissolution et les élections",
  "La pausa estiva dei lavori parlamentari": "La pause estivale des travaux parlementaires",
  "Gli ultimi sei mesi. La regola esiste perché un Presidente in scadenza non possa sciogliere il Parlamento e farsene eleggere uno più favorevole alla propria rielezione.":
    "Les six derniers mois. La règle existe pour qu'un président en fin de mandat ne puisse pas dissoudre le Parlement et s'en faire élire un plus favorable à sa réélection.",
  "Il Presidente non governa. Non decide le tasse, non presenta il bilancio, non guida la politica estera: sceglie chi ci prova, e controlla che si resti dentro la Costituzione.":
    "Le président ne gouverne pas. Il ne décide pas des impôts, ne présente pas le budget, ne conduit pas la politique étrangère : il choisit qui essaie, et veille à ce qu'on reste dans la Constitution.",
  "La giustizia e la Corte costituzionale": "La justice et la Cour constitutionnelle",
  "Perché conta: in Italia i giudici non sono nominati dal potere politico e i pubblici ministeri non scelgono quali reati perseguire. Sono due scelte precise, e sono anche due dei temi più discussi del paese.":
    "Pourquoi cela compte : en Italie, les juges ne sont pas nommés par le pouvoir politique et les procureurs ne choisissent pas quels délits poursuivre. Ce sont deux choix précis, et aussi deux des sujets les plus discutés du pays.",
  "Un ordine autonomo": "Un ordre autonome",
  "L'**articolo 104** definisce la magistratura un **ordine autonomo e indipendente da ogni altro potere**. Non si dice potere ma ordine, e la differenza è voluta: i giudici non rappresentano nessuno e non rispondono a un elettorato.":
    "L'**article 104** définit la magistrature comme un **ordre autonome et indépendant de tout autre pouvoir**. On ne dit pas pouvoir mais ordre, et la différence est voulue : les juges ne représentent personne et ne répondent devant aucun électorat.",
  "L'**articolo 101** completa il quadro: i giudici sono **soggetti soltanto alla legge**. Si entra in magistratura per **concorso**, non per nomina, e la carriera è gestita dal **Consiglio superiore della magistratura**, presieduto dal Presidente della Repubblica.":
    "L'**article 101** complète le tableau : les juges sont **soumis à la seule loi**. On entre dans la magistrature par **concours**, non par nomination, et la carrière est gérée par le **Conseil supérieur de la magistrature**, présidé par le président de la République.",
  "L'**articolo 112** impone al pubblico ministero l'**obbligatorietà dell'azione penale**: ricevuta una notizia di reato deve procedere. In teoria toglie ogni discrezionalità politica; in pratica, con più fascicoli che magistrati, la scelta si sposta sulle priorità.":
    "L'**article 112** impose au ministère public l'**obligation d'exercer l'action pénale** : une fois informé d'une infraction, il doit poursuivre. En théorie, cela lui retire toute latitude politique ; en pratique, avec plus de dossiers que de magistrats, le choix se déplace sur les priorités.",
  "Come si diventa magistrato in Italia?": "Comment devient-on magistrat en Italie ?",
  "Per nomina del ministro della Giustizia": "Par nomination du ministre de la Justice",
  "Per elezione popolare": "Par élection populaire",
  "Per concorso pubblico": "Par concours public",
  "Per designazione del Parlamento": "Par désignation du Parlement",
  "Per concorso. È la scelta che tiene la carriera fuori dalle mani della politica, e la ragione per cui il CSM, non il ministro, decide trasferimenti e promozioni.":
    "Par concours. C'est le choix qui tient la carrière hors des mains du politique, et la raison pour laquelle c'est le CSM, et non le ministre, qui décide des mutations et des promotions.",
  "Tre gradi di giudizio": "Trois degrés de jugement",
  "Primo grado": "Premier degré",
  "Giudice di pace, tribunale o corte d'assise secondo la materia e la gravità. Qui si accertano i fatti.":
    "Juge de paix, tribunal ou cour d'assises selon la matière et la gravité. C'est là qu'on établit les faits.",
  "Appello": "Appel",
  "La corte d'appello riesamina il caso, fatti compresi. Può ribaltare la decisione.":
    "La cour d'appel réexamine l'affaire, les faits compris. Elle peut renverser la décision.",
  "Cassazione": "Cassation",
  "La Corte suprema non rivede i fatti: controlla che la legge sia stata applicata correttamente. È il giudizio di legittimità.":
    "La Cour suprême ne revoit pas les faits : elle contrôle que la loi a été correctement appliquée. C'est le jugement de légalité.",
  "Finché la Cassazione non ha deciso, la sentenza non è **definitiva** — in italiano si dice passata in giudicato — e l'imputato resta non colpevole a norma dell'articolo 27. La lunghezza dei processi civili e penali è da decenni il problema più segnalato all'Italia dalle istituzioni europee.":
    "Tant que la Cassation n'a pas statué, la décision n'est pas **définitive** — en italien on dit passata in giudicato — et l'accusé reste non coupable au sens de l'article 27. La longueur des procès civils et pénaux est depuis des décennies le reproche le plus souvent adressé à l'Italie par les institutions européennes.",
  "Che cosa esamina la Corte di cassazione?": "Qu'examine la Cour de cassation ?",
  "I fatti, una terza volta": "Les faits, une troisième fois",
  "La corretta applicazione della legge": "La correcte application de la loi",
  "Solo le sentenze di condanna": "Seulement les condamnations",
  "La legittimità costituzionale delle leggi": "La constitutionnalité des lois",
  "La Cassazione giudica la legittimità, non il merito: non stabilisce se il fatto sia avvenuto, ma se il diritto sia stato applicato bene. La legittimità costituzionale delle leggi spetta invece alla Corte costituzionale.":
    "La Cassation juge la légalité, non le fond : elle n'établit pas si le fait a eu lieu, mais si le droit a été bien appliqué. La constitutionnalité des lois revient en revanche à la Cour constitutionnelle.",
  "La Corte costituzionale": "La Cour constitutionnelle",
  "È un organo a sé, che non fa parte della magistratura ordinaria. Ha **quindici giudici**, nominati in tre modi diversi perché nessun potere possa comporla da solo: **cinque** dal Presidente della Repubblica, **cinque** dal Parlamento in seduta comune, **cinque** dalle supreme magistrature.":
    "C'est un organe à part, qui ne fait pas partie de la magistrature ordinaire. Elle compte **quinze juges**, nommés de trois manières différentes pour qu'aucun pouvoir ne puisse la composer seul : **cinq** par le président de la République, **cinq** par le Parlement en séance commune, **cinq** par les magistratures suprêmes.",
  "Durano **nove anni** e **non sono rieleggibili**: un mandato lungo e senza rinnovo mette il giudice al riparo da chi lo ha nominato. La sede è **Palazzo della Consulta**, e per questo la Corte si chiama spesso semplicemente la Consulta.":
    "Ils siègent **neuf ans** et **ne sont pas rééligibles** : un mandat long et sans renouvellement met le juge à l'abri de qui l'a nommé. Le siège est le **palais de la Consulta**, et c'est pourquoi on appelle souvent la Cour simplement la Consulta.",
  "Giudica sulla **legittimità costituzionale** delle leggi, sui **conflitti di attribuzione** fra poteri dello Stato e fra Stato e regioni, sulle **accuse** contro il Presidente della Repubblica, e sull'**ammissibilità dei referendum** abrogativi. Una legge dichiarata incostituzionale cessa di avere efficacia dal giorno dopo la pubblicazione della sentenza.":
    "Elle juge de la **constitutionnalité** des lois, des **conflits d'attribution** entre pouvoirs de l'État et entre l'État et les régions, des **accusations** contre le président de la République, et de la **recevabilité des référendums** abrogatifs. Une loi déclarée inconstitutionnelle cesse d'avoir effet le lendemain de la publication de l'arrêt.",
  "Come sono scelti i quindici giudici della Corte costituzionale?":
    "Comment les quinze juges de la Cour constitutionnelle sont-ils choisis ?",
  "Tutti dal Parlamento in seduta comune": "Tous par le Parlement en séance commune",
  "Cinque dal Presidente, cinque dal Parlamento, cinque dalle supreme magistrature":
    "Cinq par le président, cinq par le Parlement, cinq par les magistratures suprêmes",
  "Tutti dal Presidente della Repubblica": "Tous par le président de la République",
  "Per concorso, come i magistrati ordinari": "Par concours, comme les magistrats ordinaires",
  "Tre origini diverse, cinque ciascuna, perché nessun potere possa formare la Corte da solo. Il mandato di nove anni non rinnovabile completa la garanzia.":
    "Trois origines différentes, cinq de chacune, pour qu'aucun pouvoir ne puisse former la Cour à lui seul. Le mandat de neuf ans non renouvelable achève la garantie.",
  "Corte costituzionale e Corte di cassazione sono due organi distinti. La prima giudica le **leggi**, la seconda le **sentenze**. Che stiano entrambe a Roma e comincino con la stessa parola non aiuta.":
    "Cour constitutionnelle et Cour de cassation sont deux organes distincts. La première juge les **lois**, la seconde les **arrêts**. Qu'elles soient toutes deux à Rome et commencent par le même mot n'aide pas.",
  "Regioni, province e comuni": "Régions, provinces et communes",
  "Perché conta: l'articolo che elenca gli enti della Repubblica comincia dal comune e finisce con lo Stato. L'ordine non è casuale, ed è la chiave per capire il rapporto fra centro e territorio.":
    "Pourquoi cela compte : l'article qui énumère les collectivités de la République commence par la commune et finit par l'État. L'ordre n'est pas fortuit, et c'est la clé pour comprendre le rapport entre le centre et le territoire.",
  "Dal basso verso l'alto": "Du bas vers le haut",
  "L'**articolo 114** dice che la Repubblica è costituita dai **comuni**, dalle **province**, dalle **città metropolitane**, dalle **regioni** e dallo **Stato**. Elencare lo Stato per ultimo, dopo il comune, fu una scelta della riforma del **Titolo V** nel **2001**: i territori non sono articolazioni dello Stato, sono elementi della Repubblica al pari suo.":
    "L'**article 114** dit que la République est constituée des **communes**, des **provinces**, des **villes métropolitaines**, des **régions** et de l'**État**. Citer l'État en dernier, après la commune, fut un choix de la réforme du **Titre V** en **2001** : les territoires ne sont pas des articulations de l'État, ce sont des éléments de la République au même titre que lui.",
  "La riforma ha anche ribaltato il criterio delle competenze. Prima le regioni potevano legiferare solo nelle materie elencate; oggi l'elenco è quello delle materie **esclusive dello Stato** — difesa, moneta, giustizia, immigrazione — e delle materie **concorrenti**, mentre tutto ciò che non è elencato spetta alle **regioni**.":
    "La réforme a aussi renversé le critère des compétences. Avant, les régions ne pouvaient légiférer que dans les matières énumérées ; aujourd'hui, la liste est celle des matières **exclusives de l'État** — défense, monnaie, justice, immigration — et des matières **concurrentes**, tandis que tout ce qui n'est pas énuméré revient aux **régions**.",
  "Venti regioni, cinque diverse dalle altre": "Vingt régions, cinq différentes des autres",
  "Le regioni sono **venti**, e **cinque** hanno uno **statuto speciale** approvato con legge costituzionale. Non è un privilegio arbitrario: ciascuna ha una ragione storica precisa.":
    "Les régions sont **vingt**, et **cinq** ont un **statut spécial** approuvé par loi constitutionnelle. Ce n'est pas un privilège arbitraire : chacune a une raison historique précise.",
  "Sicilia e Sardegna": "La Sicile et la Sardaigne",
  "Isole, con un movimento autonomista forte nell'immediato dopoguerra. La Sicilia ottenne lo statuto nel 1946, prima ancora della Costituzione.":
    "Des îles, avec un fort mouvement autonomiste au lendemain de la guerre. La Sicile obtint son statut en 1946, avant même la Constitution.",
  "Trentino-Alto Adige": "Trentin-Haut-Adige",
  "La minoranza di lingua tedesca. Le competenze vere stanno nelle due province autonome di Trento e Bolzano più che nella regione.":
    "La minorité de langue allemande. Les compétences réelles sont dans les deux provinces autonomes de Trente et de Bolzano plus que dans la région.",
  "Il confine orientale, conteso fino agli anni Cinquanta, e le minoranze slovena e friulana.":
    "La frontière orientale, disputée jusqu'aux années cinquante, et les minorités slovène et frioulane.",
  "La minoranza francofona, in una regione così piccola da avere un solo consiglio che fa anche da provincia.":
    "La minorité francophone, dans une région si petite qu'elle n'a qu'un seul conseil, qui fait aussi office de province.",
  "Quante regioni italiane hanno uno statuto speciale?":
    "Combien de régions italiennes ont un statut spécial ?",
  "Tre": "Trois",
  "Cinque": "Cinq",
  "Otto": "Huit",
  "Venti: ogni regione ha il proprio statuto": "Vingt : chaque région a son propre statut",
  "Cinque: Sicilia, Sardegna, Trentino-Alto Adige, Friuli Venezia Giulia e Valle d'Aosta. Le altre quindici hanno statuti ordinari, che non sono leggi costituzionali.":
    "Cinq : la Sicile, la Sardaigne, le Trentin-Haut-Adige, le Frioul-Vénétie Julienne et le Val d'Aoste. Les quinze autres ont des statuts ordinaires, qui ne sont pas des lois constitutionnelles.",
  "Chi governa una regione": "Qui gouverne une région",
  "Ogni regione ha un **Consiglio regionale**, che fa le leggi, una **Giunta**, che governa, e un **Presidente della Regione**, eletto direttamente dai cittadini nella quasi totalità dei casi. Lo si sente chiamare **governatore**: è un uso giornalistico, non un titolo che esista nella Costituzione.":
    "Chaque région a un **Conseil régional**, qui fait les lois, une **Giunta**, qui gouverne, et un **président de la Région**, élu directement par les citoyens dans la quasi-totalité des cas. On l'entend appeler **gouverneur** : c'est un usage de journalistes, pas un titre qui existe dans la Constitution.",
  "La regola che tiene insieme il sistema è chiamata dagli addetti ai lavori *simul stabunt, simul cadent*: se il Presidente cade, cade con lui l'intero consiglio e si torna al voto. Serve a evitare che una regione resti senza guida per anni.":
    "La règle qui tient le système s'appelle chez les spécialistes *simul stabunt, simul cadent* : si le président tombe, tout le conseil tombe avec lui et l'on retourne aux urnes. Cela évite qu'une région reste des années sans direction.",
  "Comuni e città metropolitane": "Communes et villes métropolitaines",
  "I comuni sono circa **ottomila**, dalle metropoli ai paesi di poche decine di abitanti. Il **sindaco** è eletto **direttamente** dai cittadini insieme al consiglio comunale, e nei comuni sopra i quindicimila abitanti si vota su due turni con ballottaggio. Il municipio è dove si fa quasi tutto ciò che riguarda la vita quotidiana: residenza, carta d'identità, stato civile, scuole dell'infanzia, rifiuti, urbanistica.":
    "Les communes sont environ **huit mille**, des métropoles aux villages de quelques dizaines d'habitants. Le **maire** est élu **directement** par les citoyens en même temps que le conseil municipal, et dans les communes de plus de quinze mille habitants on vote en deux tours avec ballottage. La mairie est l'endroit où se fait presque tout ce qui touche à la vie quotidienne : domicile, carte d'identité, état civil, écoles maternelles, déchets, urbanisme.",
  "Le **città metropolitane** sono **quattordici** e dal 2015 hanno sostituito le province nei territori dei grandi capoluoghi. Il sindaco del comune capoluogo ne è anche sindaco metropolitano.":
    "Les **villes métropolitaines** sont **quatorze** et ont remplacé les provinces depuis 2015 sur le territoire des grands chefs-lieux. Le maire de la commune chef-lieu en est aussi le maire métropolitain.",
  "Chi elegge il sindaco di un comune italiano?": "Qui élit le maire d'une commune italienne ?",
  "Il consiglio comunale, fra i propri membri": "Le conseil municipal, parmi ses membres",
  "I cittadini, con voto diretto": "Les citoyens, au suffrage direct",
  "Il prefetto, che rappresenta il governo": "Le préfet, qui représente le gouvernement",
  "Il presidente della regione": "Le président de la région",
  "Direttamente i cittadini, dal 1993. Prima lo eleggeva il consiglio comunale, e i sindaci cambiavano ogni volta che cambiavano gli equilibri fra i partiti in aula.":
    "Directement les citoyens, depuis 1993. Avant, c'était le conseil municipal qui l'élisait, et les maires changeaient chaque fois que changeaient les équilibres entre partis dans la salle.",
  "In quale ordine l'articolo 114 elenca gli enti della Repubblica?":
    "Dans quel ordre l'article 114 énumère-t-il les collectivités de la République ?",
  "Dallo Stato al comune": "De l'État à la commune",
  "Dal comune allo Stato": "De la commune à l'État",
  "In ordine alfabetico": "Par ordre alphabétique",
  "Per numero di abitanti": "Par nombre d'habitants",
  "Comuni, province, città metropolitane, regioni, Stato. L'ordine fu invertito dalla riforma del 2001 per dire che i territori non discendono dallo Stato ma stanno accanto ad esso.":
    "Communes, provinces, villes métropolitaines, régions, État. L'ordre fut inversé par la réforme de 2001 pour dire que les territoires ne descendent pas de l'État mais se tiennent à côté de lui.",
  "Il **prefetto** non è un organo della regione né del comune: rappresenta il **governo** in ogni provincia e dipende dal Ministero dell'interno. È lui che riceve le domande di cittadinanza e firma gli accordi di integrazione.":
    "Le **préfet** n'est un organe ni de la région ni de la commune : il représente le **gouvernement** dans chaque province et dépend du ministère de l'Intérieur. C'est lui qui reçoit les demandes de nationalité et signe les accords d'intégration.",
  "Da Roma ai Comuni": "De Rome aux Communes",
  "Storia d'Italia": "L'histoire de l'Italie",
  "Perché si comincia da qui: fra la caduta dell'impero e l'Unità passano quasi quattordici secoli in cui l'Italia non è uno Stato. Chi non tiene presente quel vuoto non capisce né i campanili né le cento cucine.":
    "Pourquoi commencer par là : entre la chute de l'Empire et l'Unité s'écoulent près de quatorze siècles pendant lesquels l'Italie n'est pas un État. Qui perd de vue ce vide ne comprend ni les clochers ni les cent cuisines.",
  "Che cosa lascia Roma": "Ce que laisse Rome",
  "La tradizione data la fondazione di Roma al **753 avanti Cristo**, la repubblica al **509** e l'impero al **27 avanti Cristo**, quando Ottaviano riceve il titolo di Augusto. L'impero d'Occidente finisce nel **476**, con la deposizione di Romolo Augustolo.":
    "La tradition date la fondation de Rome de **753 avant Jésus-Christ**, la république de **509** et l'empire de **27 avant Jésus-Christ**, quand Octave reçoit le titre d'Auguste. L'Empire d'Occident finit en **476**, avec la déposition de Romulus Augustule.",
  "Ciò che resta non è un territorio ma un'eredità: la **lingua latina**, da cui discendono l'italiano e le altre lingue romanze; il **diritto romano**, che è ancora l'ossatura del codice civile; le **strade**, molte delle quali ricalcate dalle statali di oggi; e l'idea stessa di città come luogo di cittadinanza.":
    "Ce qui reste n'est pas un territoire mais un héritage : la **langue latine**, dont descendent l'italien et les autres langues romanes ; le **droit romain**, qui est encore l'ossature du code civil ; les **routes**, dont beaucoup sont reprises par les nationales d'aujourd'hui ; et l'idée même de la ville comme lieu de citoyenneté.",
  "In quale anno finisce l'Impero romano d'Occidente?":
    "En quelle année finit l'Empire romain d'Occident ?",
  "Nel 27 avanti Cristo": "En 27 avant Jésus-Christ",
  "Nel 313": "En 313",
  "Nel 476": "En 476",
  "Nel 1453": "En 1453",
  "Il 476 è la deposizione di Romolo Augustolo. Il 1453 è la caduta di Costantinopoli, cioè la fine dell'impero d'Oriente, quasi mille anni più tardi.":
    "476 est la déposition de Romulus Augustule. 1453 est la chute de Constantinople, c'est-à-dire la fin de l'Empire d'Orient, presque mille ans plus tard.",
  "Un mosaico di poteri": "Une mosaïque de pouvoirs",
  "Dopo il 476 la penisola non torna unita per quasi quattordici secoli. Arrivano i **Longobardi** nel **568**, che si insediano al centro e al nord; i **Franchi** di Carlo Magno li sconfiggono nel **774**; nel frattempo nasce lo **Stato della Chiesa**, che taglia l'Italia a metà e resterà lì fino al 1870.":
    "Après 476, la péninsule ne redevient pas unie pendant près de quatorze siècles. Arrivent les **Lombards** en **568**, qui s'installent au centre et au nord ; les **Francs** de Charlemagne les défont en **774** ; entre-temps naissent les **États de l'Église**, qui coupent l'Italie en deux et resteront là jusqu'en 1870.",
  "Il Sud normanno": "Le Sud normand",
  "Nel 1130 i Normanni fondano il Regno di Sicilia, il primo Stato accentrato d'Europa, con Palermo capitale multilingue di arabi, greci, latini ed ebrei.":
    "En 1130, les Normands fondent le royaume de Sicile, le premier État centralisé d'Europe, avec Palerme pour capitale multilingue d'Arabes, de Grecs, de Latins et de Juifs.",
  "I Comuni del Nord": "Les Communes du Nord",
  "Le città padane si governano da sé attraverso consoli e assemblee, e comprano o strappano l'autonomia all'imperatore.":
    "Les villes de la plaine du Pô se gouvernent elles-mêmes par des consuls et des assemblées, et achètent ou arrachent leur autonomie à l'empereur.",
  "Lo Stato della Chiesa": "Les États de l'Église",
  "Il papa è anche sovrano temporale su una fascia che va dal Lazio alla Romagna. La divisione fra Nord e Sud passa di lì.":
    "Le pape est aussi souverain temporel sur une bande qui va du Latium à la Romagne. La division entre le Nord et le Sud passe par là.",
  "Le Repubbliche marinare": "Les républiques maritimes",
  "Amalfi, Pisa, Genova e Venezia costruiscono flotte, colonie e banche, e portano in Italia la contabilità e la lettera di cambio.":
    "Amalfi, Pise, Gênes et Venise bâtissent des flottes, des comptoirs et des banques, et apportent en Italie la comptabilité et la lettre de change.",
  "Legnano e la pace di Costanza": "Legnano et la paix de Constance",
  "Nel **1176** i Comuni riuniti nella **Lega Lombarda** sconfiggono a **Legnano** l'imperatore Federico Barbarossa. La **pace di Costanza** del **1183** riconosce alle città il diritto di eleggere i propri magistrati e di amministrarsi.":
    "En **1176**, les Communes réunies dans la **Ligue lombarde** battent à **Legnano** l'empereur Frédéric Barberousse. La **paix de Constance** de **1183** reconnaît aux villes le droit d'élire leurs magistrats et de s'administrer.",
  "È un fatto senza paragoni nell'Europa del tempo: decine di città indipendenti, ciascuna con leggi, monete e milizie proprie, nel raggio di poche decine di chilometri. Da lì viene il **campanilismo**, che non è un difetto caratteriale ma il residuo di secoli in cui il campanile accanto era davvero un altro Stato.":
    "C'est un fait sans équivalent dans l'Europe du temps : des dizaines de villes indépendantes, chacune avec ses lois, sa monnaie et ses milices, à quelques dizaines de kilomètres les unes des autres. De là vient le **campanilisme**, qui n'est pas un défaut de caractère mais le reste de siècles où le clocher voisin était vraiment un autre État.",
  "Che cosa riconosce ai Comuni la pace di Costanza del 1183?":
    "Que reconnaît aux Communes la paix de Constance de 1183 ?",
  "Il diritto di governarsi da sé, eleggendo i propri magistrati":
    "Le droit de se gouverner elles-mêmes, en élisant leurs magistrats",
  "L'esenzione da ogni tassa imperiale per sempre":
    "L'exemption de tout impôt impérial pour toujours",
  "Il diritto di battere moneta d'oro": "Le droit de frapper monnaie d'or",
  "L'unione in un solo regno del Nord": "L'union en un seul royaume du Nord",
  "Dopo Legnano l'imperatore riconosce l'autogoverno cittadino. Le città restano formalmente dentro l'impero, ma amministrano sé stesse: è il compromesso che rende possibile l'età dei Comuni.":
    "Après Legnano, l'empereur reconnaît l'autonomie des villes. Elles restent formellement dans l'Empire, mais s'administrent elles-mêmes : c'est le compromis qui rend possible l'âge des Communes.",
  "Dai Comuni alle Signorie": "Des Communes aux Seigneuries",
  "Nel Trecento le lotte fra fazioni logorano le istituzioni comunali, e in una città dopo l'altra un uomo o una famiglia prende il potere in modo stabile: nascono le **Signorie**, che nel secolo successivo diventano **Principati** riconosciuti. I Visconti e poi gli Sforza a Milano, i Medici a Firenze, gli Este a Ferrara, i Gonzaga a Mantova.":
    "Au XIVe siècle, les luttes de factions usent les institutions communales, et dans une ville après l'autre un homme ou une famille prend le pouvoir durablement : naissent les **Seigneuries**, qui deviennent au siècle suivant des **Principautés** reconnues. Les Visconti puis les Sforza à Milan, les Médicis à Florence, les Este à Ferrare, les Gonzague à Mantoue.",
  "Venezia fa eccezione e resta una repubblica per oltre mille anni, fino al 1797: la **Serenissima**, governata da un doge eletto e da un consiglio di patrizi.":
    "Venise fait exception et reste une république pendant plus de mille ans, jusqu'en 1797 : la **Sérénissime**, gouvernée par un doge élu et par un conseil de patriciens.",
  "Quale città mantiene un ordinamento repubblicano fino al 1797?":
    "Quelle ville conserve un régime républicain jusqu'en 1797 ?",
  "Milano": "Milan",
  "Firenze": "Florence",
  "Venezia": "Venise",
  "Napoli": "Naples",
  "La Repubblica di Venezia dura oltre mille anni e finisce solo con l'arrivo di Napoleone. Milano e Firenze passano invece a signorie ereditarie, e Napoli è un regno fin dal Medioevo.":
    "La République de Venise dure plus de mille ans et ne finit qu'avec l'arrivée de Napoléon. Milan et Florence passent en revanche à des seigneuries héréditaires, et Naples est un royaume depuis le Moyen Âge.",
  "Medioevo non significa immobilità. Fra il 1100 e il 1300 l'Italia inventa la banca moderna, la partita doppia, l'università come corporazione — Bologna, 1088 — e la lettera di cambio: strumenti che l'Europa userà per secoli.":
    "Moyen Âge ne veut pas dire immobilité. Entre 1100 et 1300, l'Italie invente la banque moderne, la comptabilité en partie double, l'université comme corporation — Bologne, 1088 — et la lettre de change : des instruments dont l'Europe se servira pendant des siècles.",
  "Il Rinascimento e gli Stati italiani": "La Renaissance et les États italiens",
  "Perché conta: nello stesso mezzo secolo l'Italia raggiunge il vertice della propria influenza culturale e perde ogni indipendenza politica. Le due cose accadono insieme, e non per caso.":
    "Pourquoi cela compte : dans le même demi-siècle, l'Italie atteint le sommet de son influence culturelle et perd toute indépendance politique. Les deux choses arrivent ensemble, et ce n'est pas un hasard.",
  "Cinque Stati in equilibrio": "Cinq États en équilibre",
  "La **pace di Lodi**, nel **1454**, chiude decenni di guerre fra le potenze della penisola e fissa un equilibrio fra cinque Stati: il **Ducato di Milano**, la **Repubblica di Venezia**, la **Repubblica di Firenze**, lo **Stato della Chiesa** e il **Regno di Napoli**.":
    "La **paix de Lodi**, en **1454**, clôt des décennies de guerres entre les puissances de la péninsule et fixe un équilibre entre cinq États : le **duché de Milan**, la **République de Venise**, la **République de Florence**, les **États de l'Église** et le **royaume de Naples**.",
  "Nessuno è abbastanza forte da prevalere, e per quarant'anni la diplomazia sostituisce la guerra. È in questo intervallo che nascono le **ambasciate permanenti**, un'invenzione italiana che l'Europa adotterà per intero.":
    "Aucun n'est assez fort pour l'emporter, et pendant quarante ans la diplomatie remplace la guerre. C'est dans cet intervalle que naissent les **ambassades permanentes**, une invention italienne que l'Europe adoptera tout entière.",
  "Firenze e i Medici": "Florence et les Médicis",
  "I **Medici** sono banchieri prima che signori, e governano Firenze senza cariche formali: comprano consenso, sposano alleanze e finanziano artisti. **Lorenzo il Magnifico** tiene in piedi l'equilibrio di Lodi con la sola abilità politica, e muore nel **1492**.":
    "Les **Médicis** sont banquiers avant d'être seigneurs, et gouvernent Florence sans charge officielle : ils achètent des soutiens, marient des alliances et financent des artistes. **Laurent le Magnifique** tient debout l'équilibre de Lodi par sa seule habileté politique, et meurt en **1492**.",
  "Le arti": "Les arts",
  "Leonardo, Michelangelo, Raffaello, Brunelleschi, Botticelli: in tre generazioni una penisola di pochi milioni di abitanti produce una parte enorme dell'arte europea.":
    "Léonard, Michel-Ange, Raphaël, Brunelleschi, Botticelli : en trois générations, une péninsule de quelques millions d'habitants produit une part énorme de l'art européen.",
  "Il pensiero politico": "La pensée politique",
  "Machiavelli scrive Il Principe nel 1513, osservando il potere per come funziona invece che per come dovrebbe essere.":
    "Machiavel écrit Le Prince en 1513, en observant le pouvoir tel qu'il fonctionne au lieu de tel qu'il devrait être.",
  "La scienza": "La science",
  "Galileo fonda il metodo sperimentale, e nel 1633 è processato per aver sostenuto che la Terra gira intorno al Sole.":
    "Galilée fonde la méthode expérimentale, et il est jugé en 1633 pour avoir soutenu que la Terre tourne autour du Soleil.",
  "Quali sono i cinque Stati dell'equilibrio fissato dalla pace di Lodi?":
    "Quels sont les cinq États de l'équilibre fixé par la paix de Lodi ?",
  "Milano, Venezia, Firenze, Stato della Chiesa e Regno di Napoli":
    "Milan, Venise, Florence, les États de l'Église et le royaume de Naples",
  "Milano, Torino, Genova, Firenze e Roma": "Milan, Turin, Gênes, Florence et Rome",
  "Venezia, Genova, Pisa, Amalfi e Napoli": "Venise, Gênes, Pise, Amalfi et Naples",
  "Piemonte, Lombardia, Toscana, Lazio e Sicilia":
    "Le Piémont, la Lombardie, la Toscane, le Latium et la Sicile",
  "Sono i cinque grandi del Quattrocento italiano. Genova, Pisa e Amalfi erano repubbliche marinare di due secoli prima, e le regioni moderne non esistevano ancora.":
    "Ce sont les cinq grands du XVe siècle italien. Gênes, Pise et Amalfi étaient des républiques maritimes de deux siècles plus tôt, et les régions modernes n'existaient pas encore.",
  "Il crollo": "L'effondrement",
  "Nel **1494** **Carlo VIII** di Francia scende in Italia con un esercito che nessuno Stato italiano può fermare da solo. Comincia il ciclo delle **guerre d'Italia**, che dura fino alla pace di **Cateau-Cambrésis** nel **1559** e si combatte quasi interamente sul suolo italiano fra eserciti stranieri.":
    "En **1494**, **Charles VIII** de France descend en Italie avec une armée qu'aucun État italien ne peut arrêter seul. Commence le cycle des **guerres d'Italie**, qui dure jusqu'à la paix du **Cateau-Cambrésis** en **1559** et se livre presque entièrement sur le sol italien entre armées étrangères.",
  "Nel **1527** i lanzichenecchi imperiali saccheggiano Roma: il **sacco di Roma** è la data che gli storici prendono per la fine del Rinascimento come stagione fiduciosa. Alla fine delle guerre la penisola è in mano alla **Spagna**, che vi resterà per un secolo e mezzo, e dopo di essa all'**Austria**.":
    "En **1527**, les lansquenets impériaux pillent Rome : le **sac de Rome** est la date que les historiens retiennent pour la fin de la Renaissance comme saison confiante. À la fin des guerres, la péninsule est aux mains de l'**Espagne**, qui y restera un siècle et demi, et après elle de l'**Autriche**.",
  "Che cosa comincia con la discesa di Carlo VIII nel 1494?":
    "Qu'est-ce qui commence avec la descente de Charles VIII en 1494 ?",
  "L'unificazione della penisola": "L'unification de la péninsule",
  "Le guerre d'Italia, combattute in casa da eserciti stranieri":
    "Les guerres d'Italie, livrées chez elle par des armées étrangères",
  "La costruzione dello Stato della Chiesa": "La construction des États de l'Église",
  "La nascita delle repubbliche marinare": "La naissance des républiques maritimes",
  "L'equilibrio di Lodi si rivela fragile davanti a uno Stato nazionale che può schierare un esercito grande. Da lì al 1559 l'Italia è il campo su cui Francia e Spagna decidono chi comanda in Europa.":
    "L'équilibre de Lodi se révèle fragile devant un État national capable d'aligner une grande armée. De là à 1559, l'Italie est le champ où la France et l'Espagne décident qui commande en Europe.",
  "Due secoli in ombra": "Deux siècles dans l'ombre",
  "Il Sei e il Settecento sono i secoli in cui il baricentro europeo si sposta sull'Atlantico e le città italiane, vissute di commercio mediterraneo, perdono peso. Restano però primati culturali che si esportano: il **melodramma**, nato a Firenze intorno al 1600 e diventato la forma teatrale d'Europa; e la **musica strumentale** di Vivaldi, Corelli e Scarlatti.":
    "Les XVIIe et XVIIIe siècles sont ceux où le centre de gravité européen se déplace vers l'Atlantique et où les villes italiennes, qui vivaient du commerce méditerranéen, perdent du poids. Restent pourtant des primautés culturelles qui s'exportent : le **mélodrame**, né à Florence vers 1600 et devenu la forme théâtrale de l'Europe ; et la **musique instrumentale** de Vivaldi, Corelli et Scarlatti.",
  "Nel Settecento l'Italia diventa la meta obbligata del **Grand Tour**: i giovani aristocratici europei vengono a vedere le rovine e le collezioni. È il momento in cui si costruisce l'immagine dell'Italia come paese dell'arte — un'immagine che vale ancora, e che il turismo di oggi eredita direttamente.":
    "Au XVIIIe siècle, l'Italie devient l'étape obligée du **Grand Tour** : les jeunes aristocrates européens viennent voir les ruines et les collections. C'est le moment où se construit l'image de l'Italie comme pays de l'art — une image qui vaut encore, et dont le tourisme d'aujourd'hui hérite directement.",
  "Che cos'era il Grand Tour?": "Qu'était le Grand Tour ?",
  "Un giro in carrozza fra le corti italiane per motivi diplomatici":
    "Un tour en carrosse entre les cours italiennes pour des raisons diplomatiques",
  "Il viaggio di formazione che portava i giovani europei a vedere l'arte italiana":
    "Le voyage de formation qui menait les jeunes Européens voir l'art italien",
  "Una gara ciclistica dell'Ottocento": "Une course cycliste du XIXe siècle",
  "Il percorso delle Repubbliche marinare verso l'Oriente":
    "La route des républiques maritimes vers l'Orient",
  "Fra Sei e Ottocento il viaggio in Italia era considerato parte dell'educazione di un giovane colto europeo. Da quella pratica nasce buona parte dell'immagine internazionale del paese.":
    "Entre le XVIIe et le XIXe siècle, le voyage en Italie était tenu pour une part de l'éducation d'un jeune Européen cultivé. C'est de cette pratique que vient une bonne part de l'image internationale du pays.",
  "Rinascimento non è un periodo politico ma culturale, e i due calendari non coincidono: quando l'arte italiana è al suo apice, l'indipendenza politica è già finita.":
    "Renaissance n'est pas une période politique mais culturelle, et les deux calendriers ne coïncident pas : quand l'art italien est à son sommet, l'indépendance politique est déjà finie.",
  "Il Risorgimento e l'Unità": "Le Risorgimento et l'Unité",
  "Perché conta: l'Italia unita ha poco più di centosessant'anni, meno della Germania di poco e molto meno di Francia o Spagna. È un paese antico e uno Stato giovane, e quasi tutte le sue tensioni nascono da questa differenza.":
    "Pourquoi cela compte : l'Italie unie a un peu plus de cent soixante ans, un peu moins que l'Allemagne et bien moins que la France ou l'Espagne. C'est un pays ancien et un État jeune, et presque toutes ses tensions naissent de cette différence.",
  "Napoleone e la Restaurazione": "Napoléon et la Restauration",
  "Nel **1796** Napoleone entra in Italia e riorganizza la penisola in repubbliche satelliti. È allora che nasce il **tricolore**, ed è allora che per la prima volta da secoli si parla di un'Italia come entità politica possibile.":
    "En **1796**, Napoléon entre en Italie et réorganise la péninsule en républiques satellites. C'est alors que naît le **tricolore**, et c'est alors que, pour la première fois depuis des siècles, on parle d'une Italie comme d'une entité politique possible.",
  "Il **congresso di Vienna**, nel **1815**, rimette ogni cosa al suo posto: l'Austria in Lombardia e Veneto, i Borbone a Napoli, il papa a Roma, i Savoia in Piemonte. Ma l'idea è ormai in circolazione, e le società segrete come la **Carboneria** la fanno viaggiare.":
    "Le **congrès de Vienne**, en **1815**, remet chaque chose à sa place : l'Autriche en Lombardie et en Vénétie, les Bourbons à Naples, le pape à Rome, les Savoie en Piémont. Mais l'idée circule désormais, et les sociétés secrètes comme la **Charbonnerie** la font voyager.",
  "Mazzini": "Mazzini",
  "Fonda la Giovine Italia nel 1831. Vuole una repubblica unitaria fatta dal popolo, e passa la vita in esilio.":
    "Il fonde la Jeune Italie en 1831. Il veut une république unitaire faite par le peuple, et passe sa vie en exil.",
  "Cavour": "Cavour",
  "Primo ministro del Piemonte. Punta su diplomazia, ferrovie e alleanze internazionali più che sulle insurrezioni.":
    "Premier ministre du Piémont. Il mise sur la diplomatie, les chemins de fer et les alliances internationales plus que sur les insurrections.",
  "Garibaldi": "Garibaldi",
  "Il combattente. Nel 1860 conquista il Regno delle Due Sicilie con mille volontari e lo consegna al re.":
    "Le combattant. En 1860, il conquiert le royaume des Deux-Siciles avec mille volontaires et le remet au roi.",
  "Vittorio Emanuele II": "Victor-Emmanuel II",
  "Re di Sardegna e poi primo re d'Italia. Mantiene il numero dinastico piemontese, il che dice molto su come nacque il nuovo Stato.":
    "Roi de Sardaigne puis premier roi d'Italie. Il garde le numéro dynastique piémontais, ce qui en dit long sur la façon dont le nouvel État est né.",
  "Il 1848 e lo Statuto": "1848 et le Statut",
  "Il **1848** è l'anno delle rivoluzioni in tutta Europa. A Milano ci sono le **cinque giornate**, a Venezia si proclama una repubblica, a Roma un'altra. Quasi tutto viene represso, ma resta una cosa: il **4 marzo 1848** Carlo Alberto concede lo **Statuto albertino**, la costituzione del Regno di Sardegna.":
    "**1848** est l'année des révolutions dans toute l'Europe. À Milan, il y a les **cinq journées** ; à Venise on proclame une république, à Rome une autre. Presque tout est réprimé, mais une chose demeure : le **4 mars 1848**, Charles-Albert octroie le **Statut albertin**, la constitution du royaume de Sardaigne.",
  "Lo Statuto sarà la costituzione dell'Italia unita fino al 1948. Era **flessibile**, cioè modificabile con legge ordinaria: è la ragione per cui il fascismo poté svuotarlo senza mai violarlo formalmente, e la ragione per cui i costituenti del 1947 vollero una costituzione **rigida**.":
    "Le Statut sera la constitution de l'Italie unie jusqu'en 1948. Il était **souple**, c'est-à-dire modifiable par une loi ordinaire : c'est la raison pour laquelle le fascisme put le vider sans jamais le violer formellement, et la raison pour laquelle les constituants de 1947 voulurent une constitution **rigide**.",
  "Perché lo Statuto albertino non impedì l'ascesa del fascismo?":
    "Pourquoi le Statut albertin n'a-t-il pas empêché la montée du fascisme ?",
  "Perché non prevedeva un parlamento": "Parce qu'il ne prévoyait pas de parlement",
  "Perché era flessibile e modificabile con legge ordinaria":
    "Parce qu'il était souple et modifiable par une loi ordinaire",
  "Perché era stato sospeso nel 1915": "Parce qu'il avait été suspendu en 1915",
  "Perché non valeva nel Sud": "Parce qu'il ne valait pas dans le Sud",
  "Bastavano leggi ordinarie per cambiarne l'impianto, e il regime procedette così, senza mai abrogarlo. Da qui la scelta del 1947: una costituzione rigida, con procedura aggravata e un nucleo immodificabile.":
    "Des lois ordinaires suffisaient à en changer l'architecture, et le régime procéda ainsi, sans jamais l'abroger. De là le choix de 1947 : une constitution rigide, à procédure aggravée et à noyau immodifiable.",
  "Dieci anni decisivi": "Dix années décisives",
  "Nel **1859** la seconda guerra d'indipendenza, combattuta con la Francia, porta al Piemonte la Lombardia. Nel **1860** i plebisciti annettono Emilia e Toscana, mentre **Garibaldi** sbarca a Marsala con i **Mille** e in pochi mesi conquista il Sud, che consegna al re a Teano.":
    "En **1859**, la deuxième guerre d'indépendance, menée avec la France, apporte la Lombardie au Piémont. En **1860**, les plébiscites annexent l'Émilie et la Toscane, tandis que **Garibaldi** débarque à Marsala avec les **Mille** et conquiert en quelques mois le Sud, qu'il remet au roi à Teano.",
  "Il **17 marzo 1861** il primo Parlamento italiano proclama il **Regno d'Italia**. Mancano ancora il **Veneto**, che arriva nel **1866**, e **Roma**, presa il **20 settembre 1870** attraverso la breccia di Porta Pia. La capitale si sposta tre volte: Torino, Firenze, Roma.":
    "Le **17 mars 1861**, le premier Parlement italien proclame le **royaume d'Italie**. Manquent encore la **Vénétie**, qui arrive en **1866**, et **Rome**, prise le **20 septembre 1870** par la brèche de la Porta Pia. La capitale se déplace trois fois : Turin, Florence, Rome.",
  "Quale territorio entra nel Regno d'Italia per ultimo fra questi?":
    "Lequel de ces territoires entre le dernier dans le royaume d'Italie ?",
  "La Lombardia": "La Lombardie",
  "La Toscana": "La Toscane",
  "Il Veneto": "La Vénétie",
  "Roma": "Rome",
  "Lombardia nel 1859, Toscana nel 1860, Veneto nel 1866, Roma nel 1870. Trento e Trieste arriveranno solo dopo la Prima guerra mondiale.":
    "La Lombardie en 1859, la Toscane en 1860, la Vénétie en 1866, Rome en 1870. Trente et Trieste n'arriveront qu'après la Première Guerre mondiale.",
  "Uno Stato senza cittadini": "Un État sans citoyens",
  "Al momento dell'Unità votava una piccolissima parte della popolazione, l'analfabetismo superava il settanta per cento e l'italiano era parlato da una minoranza. La frase più citata sul periodo — fatta l'Italia, restano da fare gli italiani — è attribuita a Massimo d'Azeglio, e la paternità è discussa; ma coglie il problema.":
    "Au moment de l'Unité, une toute petite partie de la population votait, l'analphabétisme dépassait les soixante-dix pour cent et l'italien était parlé par une minorité. La phrase la plus citée sur cette période — l'Italie est faite, restent à faire les Italiens — est attribuée à Massimo d'Azeglio, et sa paternité est discutée ; mais elle saisit le problème.",
  "Nel Sud l'annessione porta tasse nuove, leva obbligatoria e una repressione durissima del **brigantaggio**, un fenomeno insieme criminale e di rivolta sociale. Da lì nasce la **questione meridionale**, e da lì comincia l'**emigrazione**: fra il 1861 e il 1970 lasciano il paese circa **ventisei milioni** di persone.":
    "Dans le Sud, l'annexion apporte de nouveaux impôts, la conscription et une répression très dure du **brigandage**, phénomène à la fois criminel et de révolte sociale. De là naît la **question méridionale**, et de là commence l'**émigration** : entre 1861 et 1970, quelque **vingt-six millions** de personnes quittent le pays.",
  "Che cos'è la questione meridionale?": "Qu'est-ce que la question méridionale ?",
  "La disputa sui confini fra Regno d'Italia e Regno delle Due Sicilie":
    "Le différend sur les frontières entre le royaume d'Italie et le royaume des Deux-Siciles",
  "Il divario economico e sociale fra Sud e Nord aperto dopo l'Unità":
    "L'écart économique et social entre le Sud et le Nord ouvert après l'Unité",
  "Il dibattito sulla capitale da assegnare al nuovo Stato":
    "Le débat sur la capitale à donner au nouvel État",
  "La controversia sulla lingua da adottare nelle scuole del Sud":
    "La controverse sur la langue à adopter dans les écoles du Sud",
  "L'unificazione applicò al Mezzogiorno leggi, tasse e tariffe pensate per il Nord, e il divario che ne seguì non si è mai chiuso. È il tema su cui l'Italia discute ininterrottamente da centosessant'anni.":
    "L'unification appliqua au Midi des lois, des impôts et des tarifs pensés pour le Nord, et l'écart qui s'ensuivit ne s'est jamais refermé. C'est le sujet dont l'Italie débat sans interruption depuis cent soixante ans.",
  "Il Regno d'Italia comincia con **Vittorio Emanuele II**, non primo: il re conservò il numero che aveva come sovrano di Sardegna. Un dettaglio che dice come l'Unità fu vissuta al Sud — un'annessione al Piemonte più che una fondazione comune.":
    "Le royaume d'Italie commence avec **Victor-Emmanuel II**, et non premier : le roi garda le numéro qu'il avait comme souverain de Sardaigne. Un détail qui dit comment l'Unité fut vécue dans le Sud — une annexion au Piémont plus qu'une fondation commune.",
  "Le guerre mondiali e il fascismo": "Les guerres mondiales et le fascisme",
  "Perché conta: fra il 1915 e il 1945 l'Italia entra in due guerre mondiali, perde una monarchia, sperimenta una dittatura e si ritrova occupata e divisa in due. Tutto ciò che viene dopo è una risposta a questo trentennio.":
    "Pourquoi cela compte : entre 1915 et 1945, l'Italie entre dans deux guerres mondiales, perd une monarchie, éprouve une dictature et se retrouve occupée et coupée en deux. Tout ce qui vient après est une réponse à ces trente ans.",
  "La Grande guerra": "La Grande Guerre",
  "L'Italia entra in guerra nel **1915**, dopo aver firmato in segreto il **patto di Londra** con Francia, Gran Bretagna e Russia, e nonostante fosse alleata degli imperi centrali. Il paese si spacca fra interventisti e neutralisti, e la decisione viene presa dal governo e dal re più che dal Parlamento.":
    "L'Italie entre en guerre en **1915**, après avoir signé en secret le **pacte de Londres** avec la France, la Grande-Bretagne et la Russie, et bien qu'elle fût alliée des empires centraux. Le pays se déchire entre interventionnistes et neutralistes, et la décision est prise par le gouvernement et par le roi plus que par le Parlement.",
  "Seguono tre anni e mezzo di guerra di trincea sull'Isonzo e sul Carso, la rotta di **Caporetto** nel **1917**, e la vittoria di **Vittorio Veneto** nel **1918**. I morti italiani sono circa **seicentomila**.":
    "Suivent trois ans et demi de guerre de tranchées sur l'Isonzo et le Carso, la déroute de **Caporetto** en **1917**, et la victoire de **Vittorio Veneto** en **1918**. Les morts italiens sont environ **six cent mille**.",
  "Alla conferenza di pace l'Italia ottiene Trento, Trieste, l'Alto Adige e l'Istria, ma non tutto ciò che il patto di Londra prometteva. Nasce la formula della **vittoria mutilata**, che alimenta il risentimento su cui il fascismo costruirà il proprio consenso.":
    "À la conférence de la paix, l'Italie obtient Trente, Trieste, le Haut-Adige et l'Istrie, mais pas tout ce que le pacte de Londres promettait. Naît la formule de la **victoire mutilée**, qui nourrit le ressentiment sur lequel le fascisme bâtira son assentiment.",
  "Che cosa indica l'espressione vittoria mutilata?":
    "Que désigne l'expression victoire mutilée ?",
  "La sconfitta di Caporetto": "La défaite de Caporetto",
  "Il senso che l'Italia avesse vinto ottenendo meno del promesso":
    "Le sentiment que l'Italie avait vaincu en obtenant moins que promis",
  "Le perdite militari della Grande guerra": "Les pertes militaires de la Grande Guerre",
  "La divisione del paese nel 1943": "La division du pays en 1943",
  "L'Italia ottenne meno di quanto il patto di Londra le avesse riconosciuto, e su questo scarto si costruì un risentimento che i movimenti nazionalisti usarono a piene mani.":
    "L'Italie obtint moins que ce que le pacte de Londres lui avait reconnu, et sur cet écart se bâtit un ressentiment dont les mouvements nationalistes usèrent largement.",
  "La presa del potere": "La prise du pouvoir",
  "Nel **1919** nascono i **Fasci italiani di combattimento**. In un paese scosso da scioperi, occupazioni di fabbriche e violenza politica, le squadre fasciste si presentano come forza d'ordine e vengono tollerate da industriali, proprietari terrieri e apparati dello Stato.":
    "En **1919** naissent les **Faisceaux italiens de combat**. Dans un pays secoué par les grèves, les occupations d'usines et la violence politique, les escouades fascistes se présentent comme une force d'ordre et sont tolérées par les industriels, les propriétaires terriens et les appareils de l'État.",
  "Il **28 ottobre 1922** le squadre convergono su Roma. **Vittorio Emanuele III** rifiuta di firmare lo stato d'assedio che l'esercito avrebbe eseguito senza difficoltà, e il 30 ottobre incarica **Mussolini** di formare il governo. Il passaggio avviene formalmente dentro le regole dello Statuto: è così che finisce l'Italia liberale.":
    "Le **28 octobre 1922**, les escouades convergent sur Rome. **Victor-Emmanuel III** refuse de signer l'état de siège que l'armée aurait exécuté sans difficulté, et le 30 octobre il charge **Mussolini** de former le gouvernement. Le passage se fait formellement à l'intérieur des règles du Statut : c'est ainsi que finit l'Italie libérale.",
  "Che cosa fece Vittorio Emanuele III il 28 ottobre 1922?":
    "Que fit Victor-Emmanuel III le 28 octobre 1922 ?",
  "Firmò lo stato d'assedio e fece fermare le squadre":
    "Il signa l'état de siège et fit arrêter les escouades",
  "Rifiutò lo stato d'assedio e incaricò Mussolini di formare il governo":
    "Il refusa l'état de siège et chargea Mussolini de former le gouvernement",
  "Abdicò a favore del figlio": "Il abdiqua en faveur de son fils",
  "Sciolse il Parlamento e indisse elezioni":
    "Il dissolut le Parlement et convoqua des élections",
  "L'esercito avrebbe potuto fermare la marcia senza difficoltà. La firma non arrivò, e due giorni dopo Mussolini ricevette l'incarico: una scelta del re, non un colpo di Stato riuscito con la forza.":
    "L'armée aurait pu arrêter la marche sans difficulté. La signature ne vint pas, et deux jours plus tard Mussolini reçut la charge : un choix du roi, non un coup d'État réussi par la force.",
  "Il regime": "Le régime",
  "1924 · Matteotti": "1924 · Matteotti",
  "Il deputato socialista Giacomo Matteotti denuncia i brogli elettorali e viene rapito e ucciso. È la crisi che il regime supera assumendosi ogni responsabilità.":
    "Le député socialiste Giacomo Matteotti dénonce les fraudes électorales ; il est enlevé et tué. C'est la crise que le régime surmonte en en assumant toute la responsabilité.",
  "1925–26 · Le leggi fascistissime": "1925-26 · Les lois très fascistes",
  "Sciolti i partiti, soppressa la stampa libera, istituito il Tribunale speciale. Lo Stato liberale finisce senza che lo Statuto sia mai abrogato.":
    "Partis dissous, presse libre supprimée, Tribunal spécial institué. L'État libéral finit sans que le Statut soit jamais abrogé.",
  "1929 · I Patti Lateranensi": "1929 · Les accords du Latran",
  "Con la Santa Sede si chiude la questione romana aperta nel 1870. Nasce lo Stato della Città del Vaticano.":
    "Avec le Saint-Siège se referme la question romaine ouverte en 1870. Naît l'État de la Cité du Vatican.",
  "1938 · Le leggi razziali": "1938 · Les lois raciales",
  "Gli ebrei italiani sono esclusi da scuole, professioni e vita pubblica. È il preludio alle deportazioni che seguiranno dal 1943.":
    "Les Juifs italiens sont exclus des écoles, des professions et de la vie publique. C'est le prélude aux déportations qui suivront à partir de 1943.",
  "Nel **1935** l'invasione dell'**Etiopia** porta le sanzioni della Società delle Nazioni e spinge l'Italia verso la Germania. L'**asse Roma-Berlino** è del 1936, il **patto d'acciaio** del 1939.":
    "En **1935**, l'invasion de l'**Éthiopie** vaut à l'Italie les sanctions de la Société des Nations et la pousse vers l'Allemagne. L'**axe Rome-Berlin** date de 1936, le **pacte d'Acier** de 1939.",
  "La seconda guerra e la rottura": "La seconde guerre et la rupture",
  "L'Italia entra in guerra il **10 giugno 1940**, impreparata. Dopo tre anni di sconfitte, il **25 luglio 1943** il Gran consiglio del fascismo mette Mussolini in minoranza e il re lo fa arrestare. L'**8 settembre 1943** viene annunciato l'**armistizio** con gli Alleati.":
    "L'Italie entre en guerre le **10 juin 1940**, sans y être prête. Après trois ans de défaites, le **25 juillet 1943**, le Grand Conseil du fascisme met Mussolini en minorité et le roi le fait arrêter. Le **8 septembre 1943** est annoncé l'**armistice** avec les Alliés.",
  "Il re e il governo lasciano Roma senza dare ordini chiari all'esercito, che si dissolve. I tedeschi occupano il centro-nord e vi installano la **Repubblica sociale italiana**. Il paese è tagliato in due, con un fronte che risale lentamente la penisola per venti mesi: è **guerra civile** oltre che guerra di liberazione.":
    "Le roi et le gouvernement quittent Rome sans donner d'ordres clairs à l'armée, qui se dissout. Les Allemands occupent le centre et le nord et y installent la **République sociale italienne**. Le pays est coupé en deux, avec un front qui remonte lentement la péninsule pendant vingt mois : c'est une **guerre civile** autant qu'une guerre de libération.",
  "Che cosa accade l'8 settembre 1943?": "Que se passe-t-il le 8 septembre 1943 ?",
  "Mussolini viene arrestato": "Mussolini est arrêté",
  "Viene annunciato l'armistizio con gli Alleati": "L'armistice avec les Alliés est annoncé",
  "L'Italia entra in guerra": "L'Italie entre en guerre",
  "Le città del Nord insorgono": "Les villes du Nord se soulèvent",
  "L'arresto di Mussolini è del 25 luglio, l'entrata in guerra del 10 giugno 1940 e l'insurrezione del 25 aprile 1945. L'8 settembre è l'annuncio dell'armistizio, seguito dal collasso dell'esercito e dall'occupazione tedesca.":
    "L'arrestation de Mussolini est du 25 juillet, l'entrée en guerre du 10 juin 1940 et l'insurrection du 25 avril 1945. Le 8 septembre est l'annonce de l'armistice, suivie de l'effondrement de l'armée et de l'occupation allemande.",
  "Fra il settembre 1943 e l'aprile 1945 esistono due Italie: il Regno del Sud, cobelligerante degli Alleati, e la Repubblica sociale al Nord, sotto controllo tedesco. Molte date di questo periodo valgono per una sola metà del paese.":
    "Entre septembre 1943 et avril 1945, il existe deux Italies : le royaume du Sud, cobelligérant des Alliés, et la République sociale au Nord, sous contrôle allemand. Bien des dates de cette période ne valent que pour une moitié du pays.",
  "Resistenza, Repubblica e dopoguerra": "Résistance, République et après-guerre",
  "Perché conta: la Costituzione non nasce a tavolino. Nasce da chi ha combattuto una guerra civile e ha poi dovuto scrivere insieme le regole di un paese in macerie. Quasi ogni articolo porta il segno di quell'esperienza.":
    "Pourquoi cela compte : la Constitution ne naît pas sur une table. Elle naît de gens qui ont fait une guerre civile et qui ont dû ensuite écrire ensemble les règles d'un pays en ruines. Presque chaque article porte la marque de cette expérience.",
  "La Resistenza": "La Résistance",
  "Dopo l'8 settembre 1943 si organizzano le formazioni partigiane, coordinate dal **Comitato di liberazione nazionale**, in cui siedono insieme comunisti, socialisti, democratici cristiani, liberali e azionisti: forze che si combatteranno per i decenni successivi ma che in quel momento scrivono insieme.":
    "Après le 8 septembre 1943 s'organisent les formations partisanes, coordonnées par le **Comité de libération nationale**, où siègent ensemble communistes, socialistes, démocrates-chrétiens, libéraux et membres du Parti d'action : des forces qui s'affronteront pendant les décennies suivantes mais qui, à ce moment-là, écrivent ensemble.",
  "Il **25 aprile 1945** il Comitato per l'alta Italia proclama l'insurrezione generale, e Milano e Torino sono liberate prima dell'arrivo degli Alleati. La data è oggi festa nazionale: ricorda la Resistenza, non la firma della resa.":
    "Le **25 avril 1945**, le Comité pour la Haute-Italie proclame l'insurrection générale, et Milan et Turin sont libérées avant l'arrivée des Alliés. Cette date est aujourd'hui fête nationale : elle rappelle la Résistance, non la signature de la reddition.",
  "Che cosa proclama il Comitato di liberazione nazionale il 25 aprile 1945?":
    "Que proclame le Comité de libération nationale le 25 avril 1945 ?",
  "La nascita della Repubblica": "La naissance de la République",
  "L'insurrezione generale nelle città del Nord":
    "L'insurrection générale dans les villes du Nord",
  "L'armistizio con gli Alleati": "L'armistice avec les Alliés",
  "L'insurrezione. La Repubblica nasce dal referendum del 2 giugno 1946 e la Costituzione entra in vigore il 1º gennaio 1948: tre date diverse, spesso confuse fra loro.":
    "L'insurrection. La République naît du référendum du 2 juin 1946 et la Constitution entre en vigueur le 1er janvier 1948 : trois dates différentes, souvent confondues.",
  "Dalla monarchia alla Repubblica": "De la monarchie à la République",
  "Il **2 giugno 1946** gli italiani votano su due schede: la forma dello Stato e l'Assemblea costituente. La **repubblica** prevale con circa il cinquantaquattro per cento, con un Nord largamente repubblicano e un Sud in maggioranza monarchico. **Umberto II** lascia il paese, e la monarchia sabauda finisce dopo ottantacinque anni.":
    "Le **2 juin 1946**, les Italiens votent sur deux bulletins : la forme de l'État et l'Assemblée constituante. La **république** l'emporte avec environ cinquante-quatre pour cent, un Nord largement républicain et un Sud majoritairement monarchiste. **Humbert II** quitte le pays, et la monarchie de Savoie s'achève après quatre-vingt-cinq ans.",
  "L'Assemblea lavora un anno e mezzo e il **1º gennaio 1948** la Costituzione entra in vigore. Il **18 aprile 1948** si tengono le prime elezioni politiche repubblicane, in un clima segnato dall'inizio della guerra fredda.":
    "L'Assemblée travaille un an et demi et, le **1er janvier 1948**, la Constitution entre en vigueur. Le **18 avril 1948** ont lieu les premières élections législatives républicaines, dans un climat marqué par le début de la guerre froide.",
  "Il miracolo economico": "Le miracle économique",
  "Con il **piano Marshall** e la ricostruzione, fra il **1958 e il 1963** l'Italia cresce a ritmi che nessun altro paese europeo tocca nello stesso periodo, a parte la Germania. È il **boom economico**: da paese prevalentemente agricolo a potenza industriale in una generazione.":
    "Avec le **plan Marshall** et la reconstruction, entre **1958 et 1963** l'Italie croît à un rythme qu'aucun autre pays d'Europe n'atteint dans la même période, l'Allemagne exceptée. C'est le **boom économique** : d'un pays surtout agricole à une puissance industrielle en une génération.",
  "La migrazione interna": "La migration intérieure",
  "Milioni di persone lasciano il Sud e il Nordest per le fabbriche del triangolo industriale fra Torino, Milano e Genova.":
    "Des millions de personnes quittent le Sud et le Nord-Est pour les usines du triangle industriel entre Turin, Milan et Gênes.",
  "Gli oggetti": "Les objets",
  "La Fiat 500, la Vespa, il frigorifero, il televisore. Il consumo di massa arriva insieme all'unificazione linguistica.":
    "La Fiat 500, la Vespa, le réfrigérateur, le téléviseur. La consommation de masse arrive en même temps que l'unification linguistique.",
  "L'Europa": "L'Europe",
  "Nel 1957 l'Italia firma a Roma i trattati che istituiscono la Comunità economica europea: non vi aderisce, la fonda.":
    "En 1957, l'Italie signe à Rome les traités qui instituent la Communauté économique européenne : elle n'y adhère pas, elle la fonde.",
  "Che cosa fu il boom economico italiano?": "Qu'a été le boom économique italien ?",
  "La ripresa dopo la crisi petrolifera del 1973": "La reprise après le choc pétrolier de 1973",
  "La crescita fra il 1958 e il 1963 che rese l'Italia un paese industriale":
    "La croissance entre 1958 et 1963 qui fit de l'Italie un pays industriel",
  "L'espansione coloniale degli anni Trenta": "L'expansion coloniale des années trente",
  "L'aumento delle esportazioni dopo l'ingresso nell'euro":
    "La hausse des exportations après l'entrée dans l'euro",
  "In pochi anni l'Italia passò da economia in larga parte agricola a potenza industriale, con una migrazione interna di milioni di persone. La crisi petrolifera del 1973 chiude piuttosto quella stagione.":
    "En peu d'années, l'Italie passa d'une économie en grande partie agricole à une puissance industrielle, avec une migration intérieure de millions de personnes. Le choc pétrolier de 1973 clôt plutôt cette saison.",
  "Gli anni difficili": "Les années difficiles",
  "Dalla fine degli anni Sessanta il paese attraversa una lunga stagione di violenza politica, chiamata **anni di piombo**: stragi con matrice neofascista, terrorismo di sinistra, apparati dello Stato deviati. Nel **1978** le **Brigate rosse** rapiscono **Aldo Moro**, uccidendo i cinque uomini della scorta, e lo assassinano dopo cinquantacinque giorni. Nel **1980** una bomba alla stazione di **Bologna** uccide ottantacinque persone.":
    "À partir de la fin des années soixante, le pays traverse une longue saison de violence politique, appelée les **années de plomb** : attentats de matrice néofasciste, terrorisme de gauche, appareils d'État dévoyés. En **1978**, les **Brigades rouges** enlèvent **Aldo Moro**, tuant les cinq hommes de son escorte, et l'assassinent après cinquante-cinq jours. En **1980**, une bombe à la gare de **Bologne** tue quatre-vingt-cinq personnes.",
  "All'inizio degli anni Novanta l'inchiesta **Mani pulite** porta alla luce un sistema diffuso di finanziamento illecito dei partiti. Fra il **1992** e il **1994** i partiti che avevano governato dal dopoguerra si dissolvono quasi tutti: è la fine di quella che si chiama **Prima Repubblica**. Nello stesso 1992 le stragi di Capaci e via d'Amelio uccidono i giudici **Falcone** e **Borsellino**.":
    "Au début des années quatre-vingt-dix, l'enquête **Mani pulite** met au jour un système répandu de financement illicite des partis. Entre **1992** et **1994**, les partis qui avaient gouverné depuis l'après-guerre se dissolvent presque tous : c'est la fin de ce qu'on appelle la **Première République**. Cette même année 1992, les attentats de Capaci et de la via d'Amelio tuent les juges **Falcone** et **Borsellino**.",
  "Che cosa fu Mani pulite?": "Qu'a été Mani pulite ?",
  "Una riforma della pubblica amministrazione": "Une réforme de l'administration publique",
  "L'inchiesta sul finanziamento illecito dei partiti che portò alla fine della Prima Repubblica":
    "L'enquête sur le financement illicite des partis qui mena à la fin de la Première République",
  "Un movimento studentesco degli anni Settanta":
    "Un mouvement étudiant des années soixante-dix",
  "Il piano di risanamento dei conti per entrare nell'euro":
    "Le plan d'assainissement des comptes pour entrer dans l'euro",
  "L'inchiesta milanese aperta nel 1992 rivelò un sistema di tangenti che coinvolgeva quasi tutti i partiti di governo. In due anni il quadro politico nato nel dopoguerra si dissolse.":
    "L'enquête milanaise ouverte en 1992 révéla un système de pots-de-vin qui touchait presque tous les partis de gouvernement. En deux ans, le paysage politique né de l'après-guerre se dissolvait.",
  "Prima e Seconda Repubblica non sono categorie giuridiche: la Costituzione è sempre la stessa dal 1948. Indicano due stagioni del sistema dei partiti, separate dal biennio 1992-94.":
    "Première et Seconde République ne sont pas des catégories juridiques : la Constitution est la même depuis 1948. Elles désignent deux saisons du système des partis, séparées par les deux années 1992-94.",
  "Il territorio": "Le territoire",
  "Territorio, economia e l'Italia nel mondo": "Territoire, économie et l'Italie dans le monde",
  "Perché conta: l'Italia è lunga milleduecento chilometri e larga in certi punti meno di cinquanta. Quasi tutto ciò che la riguarda — il clima, le cucine, i dialetti, perfino la politica — comincia da questa forma.":
    "Pourquoi cela compte : l'Italie est longue de mille deux cents kilomètres et large, par endroits, de moins de cinquante. Presque tout ce qui la concerne — le climat, les cuisines, les dialectes, jusqu'à la politique — part de cette forme.",
  "Una penisola e due catene": "Une péninsule et deux chaînes",
  "Il paese misura circa **trecentomila chilometri quadrati** e conta poco meno di **sessanta milioni** di abitanti. Le **Alpi** ne chiudono il lato settentrionale e segnano il confine con Francia, Svizzera, Austria e Slovenia; gli **Appennini** lo percorrono per intero dal Nord alla Calabria, e proseguono in Sicilia.":
    "Le pays mesure environ **trois cent mille kilomètres carrés** et compte un peu moins de **soixante millions** d'habitants. Les **Alpes** en ferment le côté septentrional et marquent la frontière avec la France, la Suisse, l'Autriche et la Slovénie ; les **Apennins** le parcourent tout entier du Nord à la Calabre, et se prolongent en Sicile.",
  "Fra le due catene sta la **pianura padana**, l'unica grande pianura del paese e il suo motore agricolo e industriale. Il resto è in gran parte collina: la pianura copre poco più di un quinto del territorio, e questa scarsità spiega perché in Italia si costruisca in verticale sulle colline e si coltivi a terrazze.":
    "Entre les deux chaînes s'étend la **plaine du Pô**, la seule grande plaine du pays et son moteur agricole et industriel. Le reste est en grande partie collinaire : la plaine couvre un peu plus d'un cinquième du territoire, et cette rareté explique pourquoi on bâtit en hauteur sur les collines et pourquoi on cultive en terrasses.",
  "Il Po": "Le Pô",
  "Il fiume più lungo, circa 650 chilometri dal Monviso all'Adriatico. Attraversa la pianura che porta il suo nome.":
    "Le plus long fleuve, environ 650 kilomètres du Mont Viso à l'Adriatique. Il traverse la plaine qui porte son nom.",
  "Il lago di Garda": "Le lac de Garde",
  "Il più grande dei laghi italiani, diviso fra tre regioni: Lombardia, Veneto e Trentino.":
    "Le plus grand des lacs italiens, partagé entre trois régions : la Lombardie, la Vénétie et le Trentin.",
  "La Sicilia": "La Sicile",
  "La più grande isola del Mediterraneo. La Sardegna è la seconda.":
    "La plus grande île de la Méditerranée. La Sardaigne est la deuxième.",
  "Le coste": "Les côtes",
  "Circa settemilacinquecento chilometri: nessun punto della penisola è lontanissimo dal mare.":
    "Environ sept mille cinq cents kilomètres : aucun point de la péninsule n'est très loin de la mer.",
  "Qual è il fiume più lungo d'Italia?": "Quel est le plus long fleuve d'Italie ?",
  "Il Tevere": "Le Tibre",
  "L'Adige": "L'Adige",
  "L'Arno": "L'Arno",
  "Il Po, circa seicentocinquanta chilometri. L'Adige è il secondo, il Tevere il terzo: entrambi sono più corti di metà.":
    "Le Pô, environ six cent cinquante kilomètres. L'Adige est le deuxième, le Tibre le troisième : tous deux font moins de la moitié.",
  "Una terra che si muove": "Une terre qui bouge",
  "L'Italia si trova sulla linea di contatto fra la placca africana e quella euroasiatica, e questo la rende **sismica** quasi ovunque tranne che in Sardegna. I terremoti distruttivi ricorrono: il Belice, il Friuli, l'Irpinia, l'Umbria, L'Aquila, il Centro Italia. Ogni volta si riapre la stessa discussione sull'edilizia antisismica.":
    "L'Italie se trouve sur la ligne de contact entre la plaque africaine et la plaque eurasienne, ce qui la rend **sismique** presque partout, sauf en Sardaigne. Les tremblements de terre destructeurs reviennent : le Belice, le Frioul, l'Irpinia, l'Ombrie, L'Aquila, l'Italie centrale. Chaque fois se rouvre la même discussion sur la construction parasismique.",
  "Gli stessi movimenti danno all'Italia i suoi **vulcani attivi**: l'**Etna**, il maggiore d'Europa, che erutta più volte l'anno; il **Vesuvio**, che nel **79 dopo Cristo** seppellì Pompei ed Ercolano e che sovrasta un'area densamente abitata; lo **Stromboli**, in attività quasi continua; e i **Campi Flegrei**, una vasta caldera a ovest di Napoli.":
    "Les mêmes mouvements donnent à l'Italie ses **volcans actifs** : l'**Etna**, le plus grand d'Europe, qui entre en éruption plusieurs fois par an ; le **Vésuve**, qui en **79 après Jésus-Christ** ensevelit Pompéi et Herculanum et qui domine une zone très peuplée ; le **Stromboli**, en activité presque continue ; et les **Champs Phlégréens**, une vaste caldeira à l'ouest de Naples.",
  "Qual è il lago più grande d'Italia?": "Quel est le plus grand lac d'Italie ?",
  "Il lago di Como": "Le lac de Côme",
  "Il lago Maggiore": "Le lac Majeur",
  "Il lago Trasimeno": "Le lac Trasimène",
  "Il Garda, diviso fra Lombardia, Veneto e Trentino. Maggiore e Como sono più piccoli, e il Trasimeno, il maggiore dell'Italia centrale, è molto più piccolo di tutti e tre.":
    "Le lac de Garde, partagé entre la Lombardie, la Vénétie et le Trentin. Le lac Majeur et celui de Côme sont plus petits, et le Trasimène, le plus grand de l'Italie centrale, est bien plus petit que les trois.",
  "Il clima, al plurale": "Le climat, au pluriel",
  "Con questa lunghezza il clima non può essere uno solo. Le Alpi hanno inverni alpini e nevi permanenti; la pianura padana ha estati afose e nebbie invernali; le coste e le isole hanno il clima mediterraneo, con estati secche e inverni miti. Fra Bolzano e Lampedusa corrono più di dieci gradi di temperatura media annua.":
    "Avec une telle longueur, le climat ne peut pas être unique. Les Alpes ont des hivers alpins et des neiges permanentes ; la plaine du Pô a des étés lourds et des brouillards d'hiver ; les côtes et les îles ont le climat méditerranéen, aux étés secs et aux hivers doux. Entre Bolzano et Lampedusa, il y a plus de dix degrés de température moyenne annuelle d'écart.",
  "Due Stati dentro": "Deux États à l'intérieur",
  "Nel territorio italiano si trovano due Stati indipendenti, entrambi **enclave**, cioè completamente circondati: la **Repubblica di San Marino**, sull'Appennino romagnolo, che si dice la più antica repubblica ancora esistente; e lo **Stato della Città del Vaticano**, nato con i Patti Lateranensi del 1929, il più piccolo Stato del mondo.":
    "Sur le territoire italien se trouvent deux États indépendants, tous deux **enclavés**, c'est-à-dire entièrement entourés : la **République de Saint-Marin**, dans l'Apennin romagnol, que l'on dit la plus ancienne république encore existante ; et l'**État de la Cité du Vatican**, né des accords du Latran de 1929, le plus petit État du monde.",
  "Quali due Stati indipendenti si trovano dentro il territorio italiano?":
    "Quels deux États indépendants se trouvent à l'intérieur du territoire italien ?",
  "Monaco e Andorra": "Monaco et l'Andorre",
  "San Marino e la Città del Vaticano": "Saint-Marin et la Cité du Vatican",
  "Malta e San Marino": "Malte et Saint-Marin",
  "Il Liechtenstein e la Città del Vaticano": "Le Liechtenstein et la Cité du Vatican",
  "San Marino e il Vaticano sono enclave, cioè circondati per intero dall'Italia. Monaco confina con la Francia, Andorra sta fra Francia e Spagna, e Malta e il Liechtenstein non confinano affatto con l'Italia.":
    "Saint-Marin et le Vatican sont des enclaves, entièrement entourées par l'Italie. Monaco a une frontière avec la France, l'Andorre est entre la France et l'Espagne, et Malte comme le Liechtenstein n'ont aucune frontière avec l'Italie.",
  "Il **Monte Bianco**, 4.808 metri, è la vetta più alta della catena alpina; la sovranità della cima è oggetto di una controversia mai risolta con la Francia. Le carte dei due paesi non coincidono.":
    "Le **mont Blanc**, 4 808 mètres, est le sommet le plus élevé de la chaîne alpine ; la souveraineté sur la cime fait l'objet d'un différend jamais réglé avec la France. Les cartes des deux pays ne coïncident pas.",
  "Le città e il patrimonio": "Les villes et le patrimoine",
  "Perché conta: l'Italia non ha una sola grande città che concentri tutto, come Parigi o Londra. Ne ha molte, ciascuna con una storia da capitale, e questo cambia il modo in cui il paese funziona.":
    "Pourquoi cela compte : l'Italie n'a pas une seule grande ville qui concentre tout, comme Paris ou Londres. Elle en a beaucoup, chacune avec une histoire de capitale, et cela change la façon dont le pays fonctionne.",
  "Molte capitali mancate": "Beaucoup de capitales manquées",
  "**Roma** è la più popolosa, con circa due milioni e mezzo di abitanti nel comune. Seguono **Milano**, **Napoli**, **Torino** e **Palermo**. Nessuna però assorbe il paese: Milano è il centro economico e finanziario, Torino quello industriale storico, Napoli la capitale del Mezzogiorno, Firenze e Venezia due città d'arte con un peso mondiale sproporzionato alla loro dimensione.":
    "**Rome** est la plus peuplée, avec environ deux millions et demi d'habitants dans la commune. Suivent **Milan**, **Naples**, **Turin** et **Palerme**. Aucune pourtant n'absorbe le pays : Milan est le centre économique et financier, Turin le centre industriel historique, Naples la capitale du Midi, Florence et Venise deux villes d'art d'un poids mondial sans rapport avec leur taille.",
  "La ragione è nei quattordici secoli senza uno Stato unico: ogni città è stata capitale di qualcosa, e ne ha conservato il palazzo, il teatro, l'università e l'orgoglio.":
    "La raison tient aux quatorze siècles sans État unique : chaque ville a été la capitale de quelque chose, et en a gardé le palais, le théâtre, l'université et la fierté.",
  "Qual è la città italiana più popolosa?": "Quelle est la ville italienne la plus peuplée ?",
  "Torino": "Turin",
  "Roma, con circa due milioni e mezzo di abitanti nel comune. Milano è la seconda per popolazione comunale, pur avendo un'area metropolitana che per alcuni conteggi la avvicina.":
    "Rome, avec environ deux millions et demi d'habitants dans la commune. Milan est la deuxième par la population communale, même si son aire métropolitaine l'en rapproche selon certains comptages.",
  "Il primato del patrimonio": "Le record du patrimoine",
  "L'Italia è il **primo paese al mondo per numero di siti iscritti nella lista del patrimonio mondiale dell'UNESCO**, davanti alla Cina. Non si tratta soltanto di monumenti isolati: interi **centri storici** sono iscritti come un unico sito — Roma, Firenze, Venezia con la sua laguna, Napoli, Siena, Urbino, Ferrara.":
    "L'Italie est le **premier pays du monde par le nombre de sites inscrits sur la liste du patrimoine mondial de l'UNESCO**, devant la Chine. Il ne s'agit pas seulement de monuments isolés : des **centres historiques** entiers sont inscrits comme un seul site — Rome, Florence, Venise avec sa lagune, Naples, Sienne, Urbino, Ferrare.",
  "Pompei ed Ercolano": "Pompéi et Herculanum",
  "Sepolte dall'eruzione del Vesuvio nel 79 dopo Cristo e riscoperte nel Settecento: due città romane conservate come nessun'altra al mondo.":
    "Ensevelies par l'éruption du Vésuve en 79 après Jésus-Christ et redécouvertes au XVIIIe siècle : deux villes romaines conservées comme aucune autre au monde.",
  "La Valle dei Templi": "La Vallée des Temples",
  "Ad Agrigento, in Sicilia: templi greci del quinto secolo avanti Cristo, in un'isola che fu Magna Grecia prima che Roma.":
    "À Agrigente, en Sicile : des temples grecs du Ve siècle avant Jésus-Christ, dans une île qui fut la Grande-Grèce avant d'être romaine.",
  "Le Dolomiti": "Les Dolomites",
  "Iscritte come patrimonio naturale, non culturale: la lista comprende anche paesaggi.":
    "Inscrites comme patrimoine naturel et non culturel : la liste comprend aussi des paysages.",
  "I borghi": "Les bourgs",
  "Migliaia di piccoli centri storici non iscritti in nessuna lista compongono un patrimonio diffuso che nessun catalogo riesce a contenere.":
    "Des milliers de petits centres historiques inscrits sur aucune liste composent un patrimoine diffus qu'aucun catalogue ne parvient à contenir.",
  "Quale sito archeologico fu sepolto dall'eruzione del 79 dopo Cristo?":
    "Quel site archéologique fut enseveli par l'éruption de 79 après Jésus-Christ ?",
  "Pompei": "Pompéi",
  "Ostia antica": "Ostie antique",
  "Paestum": "Paestum",
  "Pompei, insieme a Ercolano e Stabia. La Valle dei Templi è greca e in Sicilia, Paestum è greca in Campania e Ostia era il porto di Roma, abbandonato lentamente e non sepolto.":
    "Pompéi, avec Herculanum et Stabies. La Vallée des Temples est grecque et sicilienne, Paestum est grecque en Campanie, et Ostie était le port de Rome, abandonné lentement et non enseveli.",
  "Il turismo e i suoi problemi": "Le tourisme et ses problèmes",
  "Il turismo è una delle principali voci dell'economia italiana e uno dei motivi per cui il paese è fra le prime destinazioni al mondo. Ma la concentrazione crea difficoltà proprie: **Venezia** e **Firenze** vedono i residenti diminuire mentre gli affitti brevi crescono, e in alcune giornate i visitatori superano gli abitanti.":
    "Le tourisme est l'un des principaux postes de l'économie italienne et l'une des raisons pour lesquelles le pays est parmi les premières destinations au monde. Mais la concentration crée ses propres difficultés : **Venise** et **Florence** voient leurs habitants diminuer tandis que les locations de courte durée augmentent, et certains jours les visiteurs y sont plus nombreux que les résidents.",
  "All'estremo opposto ci sono le **aree interne**: paesi appenninici che si spopolano, dove restano case vuote e servizi in chiusura. È il rovescio esatto della stessa medaglia, e le due cose sono spesso a poche decine di chilometri l'una dall'altra.":
    "À l'autre extrémité, il y a les **zones intérieures** : des villages de l'Apennin qui se vident, où restent des maisons vides et des services qui ferment. C'est l'exact revers de la même médaille, et les deux choses sont souvent à quelques dizaines de kilomètres l'une de l'autre.",
  "Quale paese ha il maggior numero di siti nella lista del patrimonio mondiale UNESCO?":
    "Quel pays compte le plus grand nombre de sites sur la liste du patrimoine mondial de l'UNESCO ?",
  "La Francia": "La France",
  "La Spagna": "L'Espagne",
  "L'Italia": "L'Italie",
  "La Grecia": "La Grèce",
  "L'Italia, davanti alla Cina. Il primato si spiega anche con la struttura del paese: molte città sono state capitali, e ciascuna ha conservato un centro storico intero.":
    "L'Italie, devant la Chine. Le record s'explique aussi par la structure du pays : beaucoup de villes ont été des capitales, et chacune a conservé un centre historique entier.",
  "Un sito UNESCO non è sempre un edificio. Possono esserlo un intero centro storico, un paesaggio agricolo, una catena montuosa — e anche pratiche immateriali, come l'arte del pizzaiuolo napoletano.":
    "Un site de l'UNESCO n'est pas toujours un édifice. Ce peut être un centre historique entier, un paysage agricole, une chaîne de montagnes — et aussi des pratiques immatérielles, comme l'art du pizzaiolo napolitain.",
  "L'economia": "L'économie",
  "Perché conta: l'economia italiana non si capisce guardando le grandi aziende, perché non è fatta di quelle. È fatta di migliaia di imprese piccole che, messe insieme per territorio, funzionano come una grande.":
    "Pourquoi cela compte : on ne comprend pas l'économie italienne en regardant les grandes entreprises, parce qu'elle n'en est pas faite. Elle est faite de milliers de petites entreprises qui, mises ensemble par territoire, fonctionnent comme une grande.",
  "I distretti industriali": "Les districts industriels",
  "Un **distretto industriale** è un territorio in cui molte piccole e medie imprese fanno tutte la stessa cosa, o parti diverse della stessa cosa, e si passano il lavoro. Non è un'invenzione a tavolino: è cresciuto dove c'era già un mestiere, spesso da botteghe artigiane.":
    "Un **district industriel** est un territoire où beaucoup de petites et moyennes entreprises font toutes la même chose, ou des parties différentes de la même chose, et se passent le travail. Ce n'est pas une invention de bureau : il a poussé là où un métier existait déjà, souvent à partir d'ateliers d'artisans.",
  "Occhiali": "Les lunettes",
  "Nel Bellunese, in Veneto: una valle alpina che produce una quota rilevante degli occhiali del mondo.":
    "Dans la région de Belluno, en Vénétie : une vallée alpine qui produit une part notable des lunettes du monde.",
  "Ceramica": "La céramique",
  "A Sassuolo, in Emilia: piastrelle esportate ovunque, da un distretto nato attorno all'argilla locale.":
    "À Sassuolo, en Émilie : des carrelages exportés partout, depuis un district né autour de l'argile locale.",
  "Calzature": "La chaussure",
  "Nelle Marche e in Veneto, dove la scarpa si fa in filiera fra decine di piccole imprese vicine.":
    "Dans les Marches et en Vénétie, où la chaussure se fait en filière entre des dizaines de petites entreprises voisines.",
  "Meccanica": "La mécanique",
  "Lungo la via Emilia: macchine per il packaging, motori, automazione. È il settore che esporta di più.":
    "Le long de la via Emilia : machines d'emballage, moteurs, automatisation. C'est le secteur qui exporte le plus.",
  "Le esportazioni si riassumono spesso nelle **quattro A**: **abbigliamento**, **arredamento**, **automazione** e **alimentare**. Insieme al turismo, sono ciò per cui il paese è conosciuto sui mercati.":
    "Les exportations se résument souvent aux **quatre A** : **habillement**, **ameublement**, **automatisation** et **alimentaire**. Avec le tourisme, c'est ce pour quoi le pays est connu sur les marchés.",
  "Che cos'è un distretto industriale?": "Qu'est-ce qu'un district industriel ?",
  "Una zona franca esente da imposte": "Une zone franche exonérée d'impôts",
  "Un territorio in cui molte piccole e medie imprese lavorano nello stesso settore e si passano il lavoro":
    "Un territoire où beaucoup de petites et moyennes entreprises travaillent dans le même secteur et se passent le travail",
  "Un quartiere riservato agli stabilimenti in una grande città":
    "Un quartier réservé aux usines dans une grande ville",
  "Un consorzio pubblico che finanzia le imprese":
    "Un consortium public qui finance les entreprises",
  "È una concentrazione territoriale di imprese specializzate, cresciuta di solito da un mestiere già presente. Sostituisce con la vicinanza ciò che altrove fa la dimensione aziendale.":
    "C'est une concentration territoriale d'entreprises spécialisées, née d'ordinaire d'un métier déjà présent. Elle remplace par la proximité ce qu'ailleurs fait la taille de l'entreprise.",
  "Due velocità": "Deux vitesses",
  "Il **divario fra Nord e Sud** è la questione economica più antica del paese e non si è mai chiusa. Il reddito per abitante nel Mezzogiorno è nettamente inferiore a quello del Centro-Nord, la disoccupazione è più alta e l'occupazione femminile molto più bassa.":
    "L'**écart entre le Nord et le Sud** est la question économique la plus ancienne du pays et elle ne s'est jamais refermée. Le revenu par habitant dans le Midi est nettement inférieur à celui du Centre-Nord, le chômage y est plus élevé et l'emploi des femmes beaucoup plus bas.",
  "Su tutto pesa poi l'**economia sommersa**, cioè il lavoro e il fatturato che non risultano da nessuna parte: una quota stimata in più di un decimo del prodotto interno lordo, con punte assai maggiori in alcuni settori e in alcune aree.":
    "Sur tout cela pèse encore l'**économie souterraine**, c'est-à-dire le travail et le chiffre d'affaires qui n'apparaissent nulle part : une part estimée à plus d'un dixième du produit intérieur brut, avec des pointes bien plus fortes dans certains secteurs et certaines zones.",
  "Quali sono le quattro A dell'export italiano?":
    "Quelles sont les quatre A de l'export italien ?",
  "Agricoltura, artigianato, acciaio e auto": "Agriculture, artisanat, acier et automobile",
  "Abbigliamento, arredamento, automazione e alimentare":
    "Habillement, ameublement, automatisation et alimentaire",
  "Arte, artigianato, agricoltura e automobili": "Art, artisanat, agriculture et automobiles",
  "Alimentare, acciaio, aeronautica e arredamento":
    "Alimentaire, acier, aéronautique et ameublement",
  "Abbigliamento, arredamento, automazione e alimentare: la formula riassume ciò per cui l'Italia è conosciuta sui mercati esteri, insieme al turismo.":
    "Habillement, ameublement, automatisation et alimentaire : la formule résume ce pour quoi l'Italie est connue sur les marchés étrangers, avec le tourisme.",
  "I nodi aperti": "Les questions ouvertes",
  "L'Italia ha un **debito pubblico** fra i più alti d'Europa in rapporto al prodotto, eredità di decenni di spesa a deficit soprattutto negli anni Ottanta. Serve un avanzo primario costante solo per non farlo crescere, il che riduce lo spazio per investire.":
    "L'Italie a une **dette publique** parmi les plus élevées d'Europe rapportée au produit, héritage de décennies de dépense à découvert, surtout dans les années quatre-vingt. Un excédent primaire constant est nécessaire rien que pour l'empêcher de croître, ce qui réduit la place laissée à l'investissement.",
  "Il secondo nodo è **demografico**: la natalità è fra le più basse del mondo e la popolazione invecchia. Il terzo è la partenza dei giovani: molti laureati lasciano il paese, e l'Italia forma persone che poi lavorano altrove.":
    "Le deuxième nœud est **démographique** : la natalité est parmi les plus basses du monde et la population vieillit. Le troisième est le départ des jeunes : beaucoup de diplômés quittent le pays, et l'Italie forme des gens qui travaillent ensuite ailleurs.",
  "Che cosa indica l'espressione economia sommersa?":
    "Que désigne l'expression économie souterraine ?",
  "L'economia delle regioni costiere": "L'économie des régions côtières",
  "Il lavoro e il fatturato che non risultano ufficialmente":
    "Le travail et le chiffre d'affaires qui n'apparaissent pas officiellement",
  "Il settore delle imprese pubbliche": "Le secteur des entreprises publiques",
  "Il commercio con i paesi extraeuropei": "Le commerce avec les pays hors d'Europe",
  "È la parte di attività economica non dichiarata: lavoro senza contratto, ricavi non fatturati. In Italia è stimata sopra un decimo del prodotto interno lordo, con punte molto più alte in alcuni settori.":
    "C'est la part de l'activité économique non déclarée : travail sans contrat, recettes non facturées. En Italie, elle est estimée à plus d'un dixième du produit intérieur brut, avec des pointes bien plus hautes dans certains secteurs.",
  "Piccola impresa non significa impresa arretrata. Molte aziende italiane con poche decine di dipendenti sono leader mondiali nella loro nicchia: fanno una cosa sola, e la fanno meglio di chiunque altro.":
    "Petite entreprise ne veut pas dire entreprise arriérée. Beaucoup d'entreprises italiennes de quelques dizaines de salariés sont championnes du monde dans leur créneau : elles font une seule chose, et la font mieux que quiconque.",
  "L'Italia in Europa e nel mondo": "L'Italie en Europe et dans le monde",
  "Perché conta: l'Italia non ha aderito all'Europa comunitaria, l'ha fondata. E il paese che oggi riceve chi arriva dal mare è lo stesso da cui, per un secolo, sono partiti in ventisei milioni.":
    "Pourquoi cela compte : l'Italie n'a pas adhéré à l'Europe communautaire, elle l'a fondée. Et le pays qui reçoit aujourd'hui ceux qui arrivent par la mer est celui-là même dont, pendant un siècle, vingt-six millions de personnes sont parties.",
  "Fra i fondatori": "Parmi les fondateurs",
  "L'**articolo 11** della Costituzione consente le limitazioni di sovranità necessarie a un ordinamento che assicuri la pace: è la base giuridica di tutto ciò che segue.":
    "L'**article 11** de la Constitution admet les limitations de souveraineté nécessaires à un ordre qui assure la paix : c'est la base juridique de tout ce qui suit.",
  "1949 · NATO": "1949 · l'OTAN",
  "L'Italia è fra i dodici paesi che firmano il trattato dell'Atlantico del Nord.":
    "L'Italie est parmi les douze pays qui signent le traité de l'Atlantique Nord.",
  "1951 · CECA": "1951 · la CECA",
  "Con la Comunità europea del carbone e dell'acciaio comincia l'integrazione. L'Italia è fra i sei fondatori.":
    "Avec la Communauté européenne du charbon et de l'acier commence l'intégration. L'Italie est parmi les six fondateurs.",
  "1957 · Trattati di Roma": "1957 · les traités de Rome",
  "Nascono la CEE e l'Euratom, firmate in Campidoglio. La sede della firma non è un dettaglio.":
    "Naissent la CEE et l'Euratom, signées au Capitole. Le lieu de la signature n'est pas un détail.",
  "1955 · ONU": "1955 · l'ONU",
  "L'ammissione arriva dieci anni dopo la fondazione, sbloccata insieme a quella di altri paesi rimasti fuori per la guerra fredda.":
    "L'admission arrive dix ans après la fondation, débloquée en même temps que celle d'autres pays restés dehors à cause de la guerre froide.",
  "L'**euro** sostituisce la lira come moneta di conto nel **1999** e come contante il **1º gennaio 2002**. L'Italia fa parte dello **spazio Schengen**, del **G7** e del **G20**, e l'**italiano** è una delle lingue ufficiali dell'Unione europea.":
    "L'**euro** remplace la lire comme monnaie de compte en **1999** et comme espèces le **1er janvier 2002**. L'Italie fait partie de l'**espace Schengen**, du **G7** et du **G20**, et l'**italien** est l'une des langues officielles de l'Union européenne.",
  "In quale anno l'Italia entra nella NATO?":
    "En quelle année l'Italie entre-t-elle dans l'OTAN ?",
  "Nel 1946": "En 1946",
  "Nel 1949": "En 1949",
  "Nel 1955": "En 1955",
  "Nel 1957": "En 1957",
  "Nel 1949, fra i dodici firmatari originari. Il 1955 è l'ammissione all'ONU e il 1957 la firma dei Trattati di Roma: tre date vicine e distinte.":
    "En 1949, parmi les douze signataires d'origine. 1955 est l'admission à l'ONU et 1957 la signature des traités de Rome : trois dates proches et distinctes.",
  "Roma capitale dell'alimentazione mondiale": "Rome, capitale mondiale de l'alimentation",
  "Tre agenzie delle Nazioni Unite che si occupano di cibo e agricoltura hanno sede a Roma: la **FAO**, l'**IFAD** e il **Programma alimentare mondiale**. È una concentrazione che nessun'altra città al mondo ha, e fa di Roma la capitale internazionale di quel tema.":
    "Trois agences des Nations unies qui s'occupent d'alimentation et d'agriculture ont leur siège à Rome : la **FAO**, le **FIDA** et le **Programme alimentaire mondial**. C'est une concentration qu'aucune autre ville au monde n'a, et elle fait de Rome la capitale internationale de ce sujet.",
  "Quali agenzie delle Nazioni Unite hanno sede a Roma?":
    "Quelles agences des Nations unies ont leur siège à Rome ?",
  "Quelle che si occupano di alimentazione e agricoltura":
    "Celles qui s'occupent d'alimentation et d'agriculture",
  "Quelle che si occupano di salute": "Celles qui s'occupent de santé",
  "Quelle che si occupano di istruzione e cultura":
    "Celles qui s'occupent d'éducation et de culture",
  "Quelle che si occupano di lavoro": "Celles qui s'occupent de travail",
  "FAO, IFAD e Programma alimentare mondiale. La salute sta a Ginevra con l'OMS, la cultura a Parigi con l'UNESCO e il lavoro a Ginevra con l'OIL.":
    "La FAO, le FIDA et le Programme alimentaire mondial. La santé est à Genève avec l'OMS, la culture à Paris avec l'UNESCO et le travail à Genève avec l'OIT.",
  "Un paese che è partito e che riceve": "Un pays qui est parti et qui reçoit",
  "Fra il 1861 e il 1970 lasciarono l'Italia circa **ventisei milioni** di persone, verso le Americhe prima e verso l'Europa del Nord poi. In molti paesi esistono comunità di origine italiana grandi quanto una regione, e la lingua italiana è parlata fuori dai confini più che dentro certi confini storici.":
    "Entre 1861 et 1970, quelque **vingt-six millions** de personnes ont quitté l'Italie, vers les Amériques d'abord, vers l'Europe du Nord ensuite. Dans bien des pays existent des communautés d'origine italienne grandes comme une région, et l'italien est parlé hors des frontières plus que dans certaines frontières historiques.",
  "Dagli anni Ottanta il movimento si è invertito: oggi risiedono in Italia circa **cinque milioni** di cittadini stranieri, la comunità più numerosa delle quali è quella romena. La posizione al centro del Mediterraneo fa dell'Italia una delle frontiere esterne dell'Unione, con tutto ciò che ne consegue nel dibattito pubblico.":
    "Depuis les années quatre-vingt, le mouvement s'est inversé : environ **cinq millions** de citoyens étrangers résident aujourd'hui en Italie, la communauté la plus nombreuse étant la roumaine. Sa position au centre de la Méditerranée fait de l'Italie l'une des frontières extérieures de l'Union, avec tout ce qui s'ensuit dans le débat public.",
  "Quanti cittadini stranieri risiedono oggi in Italia, all'incirca?":
    "Combien de citoyens étrangers résident aujourd'hui en Italie, à peu près ?",
  "Circa mezzo milione": "Environ un demi-million",
  "Circa due milioni": "Environ deux millions",
  "Circa cinque milioni": "Environ cinq millions",
  "Circa dieci milioni": "Environ dix millions",
  "Circa cinque milioni, poco meno di un decimo della popolazione. La comunità più numerosa è quella romena. Il movimento si è invertito negli anni Ottanta: fino ad allora l'Italia era un paese da cui si partiva.":
    "Environ cinq millions, un peu moins d'un dixième de la population. La communauté la plus nombreuse est la roumaine. Le mouvement s'est inversé dans les années quatre-vingt : jusque-là, l'Italie était un pays d'où l'on partait.",
  "Aderire e fondare non sono la stessa cosa. L'Italia è fra i sei paesi che hanno creato la CECA nel 1951 e la CEE nel 1957: non è entrata in un'Europa già esistente, l'ha costruita.":
    "Adhérer et fonder ne sont pas la même chose. L'Italie est parmi les six pays qui ont créé la CECA en 1951 et la CEE en 1957 : elle n'est pas entrée dans une Europe déjà existante, elle l'a construite.",
  "Lavoro, contratti e sindacati": "Travail, contrats et syndicats",
  "Società e vita quotidiana": "Société et vie quotidienne",
  "Perché conta: la Costituzione mette il lavoro nel primo articolo, e il diritto del lavoro italiano ha alcune particolarità che sorprendono chi arriva da altri paesi — a cominciare dal fatto che il salario minimo non lo fissa la legge.":
    "Pourquoi cela compte : la Constitution met le travail dans son premier article, et le droit du travail italien a quelques particularités qui surprennent qui vient d'ailleurs — à commencer par le fait que le salaire minimum n'est pas fixé par la loi.",
  "Che cosa dice la Costituzione": "Ce que dit la Constitution",
  "L'**articolo 1** fonda la Repubblica sul lavoro; l'**articolo 4** riconosce a tutti il diritto al lavoro e impegna la Repubblica a renderlo effettivo. L'**articolo 36** stabilisce che la retribuzione deve essere **proporzionata** alla quantità e qualità del lavoro e comunque **sufficiente** ad assicurare un'esistenza libera e dignitosa.":
    "L'**article 1** fonde la République sur le travail ; l'**article 4** reconnaît à tous le droit au travail et engage la République à le rendre effectif. L'**article 36** établit que la rémunération doit être **proportionnée** à la quantité et à la qualité du travail et en tout cas **suffisante** pour assurer une existence libre et digne.",
  "L'**articolo 37** garantisce alla donna lavoratrice gli stessi diritti e la stessa retribuzione dell'uomo. L'**articolo 39** riconosce la libertà sindacale e l'**articolo 40** il diritto di sciopero.":
    "L'**article 37** garantit à la femme qui travaille les mêmes droits et la même rémunération qu'à l'homme. L'**article 39** reconnaît la liberté syndicale et l'**article 40** le droit de grève.",
  "Il contratto collettivo": "La convention collective",
  "In Italia le condizioni minime non sono fissate azienda per azienda ma **settore per settore**, attraverso il **contratto collettivo nazionale di lavoro**, il CCNL, firmato dalle organizzazioni dei datori e dai sindacati. Esistono centinaia di CCNL: metalmeccanici, commercio, edilizia, scuola, sanità privata.":
    "En Italie, les conditions minimales ne sont pas fixées entreprise par entreprise mais **secteur par secteur**, par la **convention collective nationale de travail**, le CCNL, signée par les organisations patronales et par les syndicats. Il existe des centaines de CCNL : métallurgie, commerce, bâtiment, école, santé privée.",
  "Da qui una conseguenza che spesso sorprende: **l'Italia non ha un salario minimo fissato per legge**. I minimi stanno nei contratti collettivi, e chi lavora in un settore senza contratto applicato può trovarsi senza quella protezione. Il tema è oggetto di discussione da anni.":
    "D'où une conséquence qui surprend souvent : **l'Italie n'a pas de salaire minimum fixé par la loi**. Les minima sont dans les conventions collectives, et qui travaille dans un secteur sans convention appliquée peut se retrouver sans cette protection. Le sujet est en débat depuis des années.",
  "Chi fissa in Italia le retribuzioni minime?":
    "Qui fixe en Italie les rémunérations minimales ?",
  "Una legge nazionale sul salario minimo": "Une loi nationale sur le salaire minimum",
  "I contratti collettivi nazionali, settore per settore":
    "Les conventions collectives nationales, secteur par secteur",
  "Ogni singola azienda": "Chaque entreprise pour elle-même",
  "Le regioni, con proprie leggi": "Les régions, par leurs propres lois",
  "Non esiste un salario minimo di legge: i minimi stanno nei CCNL firmati per ciascun settore. È una delle particolarità del sistema italiano rispetto a gran parte d'Europa.":
    "Il n'existe pas de salaire minimum légal : les minima sont dans les CCNL signés pour chaque secteur. C'est l'une des particularités du système italien par rapport à une grande partie de l'Europe.",
  "Le forme del contratto": "Les formes du contrat",
  "Tempo indeterminato": "À durée indéterminée",
  "Senza scadenza. Resta la forma di riferimento, e il licenziamento richiede una giusta causa o un giustificato motivo.":
    "Sans échéance. Cela reste la forme de référence, et le licenciement exige une juste cause ou un motif justifié.",
  "Tempo determinato": "À durée déterminée",
  "Con una scadenza e limiti di durata e di rinnovo, per evitare che diventi permanente sotto altro nome.":
    "Avec une échéance et des limites de durée et de renouvellement, pour éviter qu'il ne devienne permanent sous un autre nom.",
  "Apprendistato": "L'apprentissage",
  "Unisce lavoro e formazione, per i giovani. Prevede contributi ridotti per il datore.":
    "Il joint le travail et la formation, pour les jeunes. Il prévoit des cotisations réduites pour l'employeur.",
  "Partita IVA": "La partita IVA",
  "Lavoro autonomo: si fattura invece di ricevere una busta paga, e si versano da soli imposte e contributi.":
    "Le travail indépendant : on facture au lieu de recevoir une fiche de paie, et l'on verse soi-même impôts et cotisations.",
  "La busta paga": "La fiche de paie",
  "Fra **lordo** e **netto** corre una differenza notevole: dallo stipendio lordo si sottraggono i contributi previdenziali versati all'**INPS** e l'imposta sul reddito, l'**IRPEF**, che è progressiva a scaglioni come vuole l'articolo 53.":
    "Entre le **brut** et le **net**, la différence est notable : du salaire brut on retranche les cotisations sociales versées à l'**INPS** et l'impôt sur le revenu, l'**IRPEF**, qui est progressif par tranches comme le veut l'article 53.",
  "Due voci sono tipicamente italiane. La **tredicesima** è una mensilità aggiuntiva pagata a dicembre, e in alcuni settori esiste anche una **quattordicesima** a giugno. Il **TFR**, trattamento di fine rapporto, è una somma accantonata ogni mese e liquidata quando il rapporto finisce, per qualunque motivo finisca.":
    "Deux postes sont typiquement italiens. La **treizième** est un mois de salaire supplémentaire payé en décembre, et dans certains secteurs il existe aussi une **quatorzième** en juin. Le **TFR**, l'indemnité de fin de rapport, est une somme mise de côté chaque mois et versée quand le contrat se termine, quelle qu'en soit la raison.",
  "Che cos'è la tredicesima?": "Qu'est-ce que la treizième ?",
  "Un'imposta aggiuntiva di fine anno": "Un impôt supplémentaire de fin d'année",
  "Una mensilità in più, corrisposta a dicembre":
    "Un mois de salaire en plus, versé en décembre",
  "Il contributo versato all'INPS": "La cotisation versée à l'INPS",
  "Il numero massimo di ore settimanali di straordinario":
    "Le nombre maximal d'heures supplémentaires par semaine",
  "Una mensilità aggiuntiva pagata a dicembre. In alcuni settori esiste anche una quattordicesima, di solito a giugno: entrambe sono previste dai contratti collettivi.":
    "Un mois de salaire supplémentaire payé en décembre. Dans certains secteurs il existe aussi une quatorzième, en général en juin : toutes deux sont prévues par les conventions collectives.",
  "I sindacati e le tutele": "Les syndicats et les protections",
  "Le tre confederazioni storiche sono **CGIL**, **CISL** e **UIL**, nate dalla scissione del sindacato unitario del dopoguerra lungo linee politiche. Lo **Statuto dei lavoratori** del **1970** ha portato le libertà costituzionali dentro i luoghi di lavoro e vietato il licenziamento senza giusta causa nelle imprese maggiori.":
    "Les trois confédérations historiques sont la **CGIL**, la **CISL** et l'**UIL**, nées de la scission du syndicat unitaire de l'après-guerre le long de lignes politiques. Le **Statut des travailleurs** de **1970** a porté les libertés constitutionnelles à l'intérieur des lieux de travail et interdit le licenciement sans juste cause dans les grandes entreprises.",
  "Due enti pubblici accompagnano ogni rapporto di lavoro: l'**INPS**, che incassa i contributi e paga pensioni e indennità, e l'**INAIL**, che assicura contro gli infortuni e le malattie professionali. Le **ferie** minime sono quattro settimane l'anno, e almeno due vanno godute nell'anno di maturazione.":
    "Deux organismes publics accompagnent chaque relation de travail : l'**INPS**, qui encaisse les cotisations et paie les retraites et les indemnités, et l'**INAIL**, qui assure contre les accidents et les maladies professionnelles. Les **congés** minimaux sont de quatre semaines par an, et au moins deux doivent être prises dans l'année où elles sont acquises.",
  "Che cos'è il TFR?": "Qu'est-ce que le TFR ?",
  "Un fondo pensione obbligatorio gestito dai sindacati":
    "Un fonds de retraite obligatoire géré par les syndicats",
  "Una somma accantonata ogni mese e liquidata alla fine del rapporto di lavoro":
    "Une somme mise de côté chaque mois et versée à la fin du contrat de travail",
  "Il contributo per la formazione professionale":
    "La cotisation pour la formation professionnelle",
  "Un premio legato ai risultati aziendali": "Une prime liée aux résultats de l'entreprise",
  "Il trattamento di fine rapporto matura ogni mese e viene pagato alla cessazione, qualunque ne sia il motivo: dimissioni, licenziamento o pensione. È una particolarità italiana.":
    "L'indemnité de fin de rapport s'accumule chaque mois et est versée à la cessation, quelle qu'en soit la raison : démission, licenciement ou retraite. C'est une particularité italienne.",
  "Assunzione a tempo indeterminato non significa impossibilità di licenziare. Significa che serve una **giusta causa** o un **giustificato motivo**, e che senza di essi il licenziamento è impugnabile.":
    "Une embauche à durée indéterminée ne veut pas dire qu'on ne peut pas licencier. Elle veut dire qu'il faut une **juste cause** ou un **motif justifié**, et que sans eux le licenciement est attaquable.",
  "Sanità e scuola": "Santé et école",
  "Perché conta: sono i due servizi che si incontrano per primi vivendo in un paese. In Italia entrambi sono pubblici e universali sulla carta, e in entrambi le regioni contano moltissimo.":
    "Pourquoi cela compte : ce sont les deux services que l'on rencontre en premier quand on vit dans un pays. En Italie, tous deux sont publics et universels sur le papier, et dans les deux les régions comptent énormément.",
  "Il Servizio sanitario nazionale": "Le Service sanitaire national",
  "Il **Servizio sanitario nazionale** nasce nel **1978** e sostituisce il vecchio sistema delle casse mutue legate alla categoria professionale. Poggia su tre principi: **universalità** — vale per tutti i residenti — **uguaglianza** e **globalità** della copertura. È finanziato dalla **fiscalità generale**, cioè dalle tasse, non da un premio assicurativo.":
    "Le **Service sanitaire national** naît en **1978** et remplace l'ancien système des caisses mutuelles liées à la catégorie professionnelle. Il repose sur trois principes : l'**universalité** — il vaut pour tous les résidents —, l'**égalité** et la **globalité** de la couverture. Il est financé par la **fiscalité générale**, c'est-à-dire par les impôts, non par une prime d'assurance.",
  "La gestione però è **regionale**. Ogni regione organizza le proprie aziende sanitarie e i propri ospedali, e da qui nascono differenze reali di attesa, qualità e organizzazione, con una **mobilità sanitaria** che porta molti pazienti del Sud a curarsi al Nord.":
    "La gestion, elle, est **régionale**. Chaque région organise ses agences de santé et ses hôpitaux, et de là naissent des différences réelles d'attente, de qualité et d'organisation, avec une **mobilité sanitaire** qui conduit beaucoup de patients du Sud à se faire soigner au Nord.",
  "Il medico di base": "Le médecin traitant",
  "Si sceglie fra quelli disponibili nella propria zona ed è il primo riferimento: visita, prescrive e indirizza allo specialista.":
    "On le choisit parmi ceux qui sont disponibles dans sa zone et il est le premier interlocuteur : il examine, prescrit et oriente vers le spécialiste.",
  "La tessera sanitaria": "La carte sanitaire",
  "Dà accesso alle prestazioni e riporta il codice fiscale. Sul retro è anche tessera europea di assicurazione malattia.":
    "Elle donne accès aux prestations et porte le codice fiscale. Au dos, elle est aussi carte européenne d'assurance maladie.",
  "Il ticket": "Le ticket",
  "Una quota a carico del paziente per visite ed esami, con esenzioni per reddito, età e patologia. Il pronto soccorso urgente non si paga.":
    "Une part à la charge du patient pour les consultations et les examens, avec des exemptions selon le revenu, l'âge et la pathologie. Les urgences véritables ne se paient pas.",
  "I codici di priorità": "Les codes de priorité",
  "Al pronto soccorso non si è ricevuti in ordine di arrivo ma di gravità: chi arriva dopo può passare prima.":
    "Aux urgences, on n'est pas reçu dans l'ordre d'arrivée mais dans celui de la gravité : qui arrive après peut passer avant.",
  "In quale anno nasce il Servizio sanitario nazionale?":
    "En quelle année naît le Service sanitaire national ?",
  "Nel 1948": "En 1948",
  "Nel 1970": "En 1970",
  "Nel 1978": "En 1978",
  "Nel 2001": "En 2001",
  "Nel 1978, sostituendo le casse mutue legate alla categoria professionale. Prima di allora la copertura dipendeva dal mestiere che si faceva.":
    "En 1978, en remplaçant les caisses mutuelles liées à la catégorie professionnelle. Avant cela, la couverture dépendait du métier que l'on exerçait.",
  "La scuola": "L'école",
  "L'istruzione è **obbligatoria dai sei ai sedici anni** e l'articolo 34 la dichiara gratuita per almeno otto anni. Il percorso comincia prima, con la scuola dell'infanzia dai tre anni, che non è obbligatoria ma è frequentata dalla grande maggioranza dei bambini.":
    "L'instruction est **obligatoire de six à seize ans** et l'article 34 la déclare gratuite pendant au moins huit ans. Le parcours commence plus tôt, avec l'école maternelle dès trois ans, qui n'est pas obligatoire mais que fréquente la grande majorité des enfants.",
  "Primaria": "Le primaire",
  "Cinque anni, dai sei agli undici. È quella che tutti chiamano ancora scuola elementare.":
    "Cinq ans, de six à onze. C'est celle que tout le monde appelle encore l'école élémentaire.",
  "Secondaria di primo grado": "Le secondaire de premier degré",
  "Tre anni, dagli undici ai quattordici: le medie. Si chiude con un esame.":
    "Trois ans, de onze à quatorze : le collège. Il se termine par un examen.",
  "Secondaria di secondo grado": "Le secondaire de second degré",
  "Cinque anni. Si sceglie fra liceo, istituto tecnico e istituto professionale, e la scelta si fa a tredici anni.":
    "Cinq ans. On choisit entre le lycée général, l'institut technique et l'institut professionnel, et le choix se fait à treize ans.",
  "Università": "L'université",
  "Laurea triennale e poi magistrale biennale, oppure corsi a ciclo unico per medicina, giurisprudenza e architettura.":
    "Une licence de trois ans puis un master de deux, ou des cursus à cycle unique pour la médecine, le droit et l'architecture.",
  "L'esame che chiude la secondaria superiore si chiama ufficialmente **esame di Stato** e tutti lo chiamano **maturità**. Dà accesso all'università e si valuta in **centesimi**, con il sessanta come minimo per la promozione.":
    "L'examen qui clôt le secondaire supérieur s'appelle officiellement **examen d'État** et tout le monde l'appelle la **maturité**. Il ouvre l'université et se note sur **cent**, avec soixante comme minimum pour être reçu.",
  "Fino a quale età l'istruzione è obbligatoria in Italia?":
    "Jusqu'à quel âge l'instruction est-elle obligatoire en Italie ?",
  "Fino ai quattordici anni": "Jusqu'à quatorze ans",
  "Fino ai sedici anni": "Jusqu'à seize ans",
  "Fino ai diciotto anni": "Jusqu'à dix-huit ans",
  "Fino al conseguimento del diploma": "Jusqu'à l'obtention du diplôme",
  "Dai sei ai sedici anni. Il diploma della secondaria superiore si ottiene a diciannove, ma l'obbligo finisce prima: si può assolvere l'ultimo tratto anche in un percorso di formazione professionale.":
    "De six à seize ans. Le diplôme du secondaire supérieur s'obtient à dix-neuf, mais l'obligation finit avant : on peut accomplir la dernière partie dans un parcours de formation professionnelle.",
  "I voti": "Les notes",
  "Le scale cambiano a ogni livello, e questo confonde chi arriva da fuori. Alla primaria e alle medie si usano i **decimi**, con il sei come sufficienza. Alla maturità si usano i **centesimi**, con il sessanta. All'università si usano i **trentesimi**, con il diciotto come minimo e la possibilità della **lode**. La laurea si valuta in **centodecimi**, e il massimo è centodieci e lode.":
    "Les échelles changent à chaque niveau, et cela déroute qui vient d'ailleurs. Au primaire et au collège, on note sur **dix**, avec six pour la moyenne. À la maturité, on note sur **cent**, avec soixante. À l'université, on note sur **trente**, avec dix-huit comme minimum et la possibilité de la **mention**. La licence se note sur **cent dix**, et le maximum est cent dix avec les félicitations.",
  "Su quale scala si valutano gli esami universitari in Italia?":
    "Sur quelle échelle les examens universitaires sont-ils notés en Italie ?",
  "In decimi": "Sur dix",
  "In trentesimi": "Sur trente",
  "In centesimi": "Sur cent",
  "In centodecimi": "Sur cent dix",
  "In trentesimi, con diciotto come voto minimo e la lode oltre il trenta. I centodecimi si usano per il voto finale di laurea e i centesimi per la maturità.":
    "Sur trente, avec dix-huit comme note minimale et la mention au-delà de trente. Le cent dix sert à la note finale de licence et le cent à la maturité.",
  "Il **liceo** non è la scuola superiore in generale: è uno dei tre indirizzi, accanto all'istituto tecnico e a quello professionale. Tutti e tre danno un diploma che apre all'università.":
    "Le **liceo** n'est pas le secondaire supérieur en général : c'est l'une des trois filières, à côté de l'institut technique et de l'institut professionnel. Toutes trois donnent un diplôme qui ouvre l'université.",
  "Vivere in Italia": "Vivre en Italie",
  "Perché conta: questa è la lezione pratica. Nessuna delle prove qui descritte riguarda la storia o le istituzioni — e questo corso non prepara a nessuna di esse. Servono a sapere che cosa lo Stato chiede, e a chi.":
    "Pourquoi cela compte : c'est la leçon pratique. Aucune des épreuves décrites ici ne porte sur l'histoire ni sur les institutions — et ce cours ne prépare à aucune d'elles. Elles servent à savoir ce que l'État demande, et à qui.",
  "Il codice fiscale, prima di tutto": "Le codice fiscale, avant tout",
  "Il **codice fiscale** è una sigla di sedici caratteri ricavata da nome, cognome, data e luogo di nascita. Non è una tessera: è un identificativo, e serve praticamente per ogni cosa — aprire un conto, firmare un contratto d'affitto, iscriversi al servizio sanitario, comprare una scheda telefonica.":
    "Le **codice fiscale** est un code de seize caractères tiré du nom, du prénom, de la date et du lieu de naissance. Ce n'est pas une carte : c'est un identifiant, et il sert pratiquement à tout — ouvrir un compte, signer un bail, s'inscrire au service de santé, acheter une carte téléphonique.",
  "Segue la **residenza**, cioè l'iscrizione all'anagrafe del comune in cui si abita davvero. Dalla residenza dipendono la carta d'identità, il medico di base, l'iscrizione a scuola e il diritto di voto alle comunali per i cittadini dell'Unione.":
    "Vient ensuite la **résidence**, c'est-à-dire l'inscription à l'état civil de la commune où l'on habite vraiment. De la résidence dépendent la carte d'identité, le médecin traitant, l'inscription à l'école et le droit de vote aux municipales pour les citoyens de l'Union.",
  "Il permesso di soggiorno": "Le titre de séjour",
  "Chi non è cittadino dell'Unione europea ha bisogno di un **permesso di soggiorno**, che si chiede alla **questura** presentando la domanda tramite gli uffici postali abilitati. La durata e le condizioni dipendono dal motivo: lavoro, studio, famiglia, protezione.":
    "Qui n'est pas citoyen de l'Union européenne a besoin d'un **permesso di soggiorno**, qui se demande à la **questura** en déposant le dossier par les bureaux de poste habilités. La durée et les conditions dépendent du motif : travail, études, famille, protection.",
  "Per il **permesso di soggiorno UE per soggiornanti di lungo periodo**, che non ha scadenza, si richiedono almeno cinque anni di soggiorno regolare, un reddito e la dimostrazione di conoscere l'italiano al livello **A2** attraverso un test.":
    "Pour le **titre de séjour UE de résident de longue durée**, qui n'a pas d'échéance, il faut au moins cinq ans de séjour régulier, un revenu et la preuve d'une connaissance de l'italien au niveau **A2** par un test.",
  "A che cosa serve il codice fiscale?": "À quoi sert le codice fiscale ?",
  "Solo a pagare le imposte": "Uniquement à payer les impôts",
  "A identificare la persona in quasi ogni rapporto con enti e privati":
    "À identifier la personne dans presque tout rapport avec les administrations et les particuliers",
  "Ad accedere al pronto soccorso": "À accéder aux urgences",
  "A votare alle elezioni comunali": "À voter aux élections municipales",
  "È l'identificativo di base: serve per il conto in banca, il contratto d'affitto, l'iscrizione al servizio sanitario, il contratto di lavoro. Il nome inganna, perché il suo uso va molto oltre il fisco.":
    "C'est l'identifiant de base : il sert pour le compte en banque, le bail, l'inscription au service de santé, le contrat de travail. Le nom trompe, car son usage va bien au-delà du fisc.",
  "L'accordo di integrazione": "L'accord d'intégration",
  "Chi entra per la prima volta e chiede un permesso di almeno un anno firma con lo Stato un **accordo di integrazione**, in vigore dal 2012. Funziona a **crediti**: se ne ricevono sedici all'inizio, e vanno mantenuti o accresciuti nell'arco di **due anni**, prorogabili di uno.":
    "Qui entre pour la première fois et demande un titre d'au moins un an signe avec l'État un **accord d'intégration**, en vigueur depuis 2012. Il fonctionne par **crédits** : on en reçoit seize au départ, et il faut les garder ou les augmenter en **deux ans**, prorogeables d'un an.",
  "La formazione civica": "La formation civique",
  "Entro tre mesi dalla firma si partecipa a una sessione sull'ordinamento, sui diritti e doveri e sui servizi. Non è un esame: la partecipazione dà crediti.":
    "Dans les trois mois qui suivent la signature, on participe à une séance sur les institutions, sur les droits et devoirs et sur les services. Ce n'est pas un examen : la participation donne des crédits.",
  "Che cosa si verifica alla fine": "Ce que l'on vérifie à la fin",
  "Conoscenza dell'italiano parlato almeno al livello A2, conoscenza sufficiente della cultura civica e della vita civile in Italia.":
    "La connaissance de l'italien parlé au moins au niveau A2, et une connaissance suffisante de la culture civique et de la vie civile en Italie.",
  "I crediti si perdono": "Les crédits se perdent",
  "Condanne penali definitive e sanzioni gravi li riducono. Azzerarli comporta la revoca del permesso di soggiorno.":
    "Des condamnations pénales définitives et des sanctions graves les réduisent. Les ramener à zéro entraîne le retrait du titre de séjour.",
  "Chi lo firma alla prefettura": "Où on le signe, à la préfecture",
  "L'accordo si sottoscrive davanti allo sportello unico presso la prefettura, che rappresenta il governo in ogni provincia.":
    "L'accord se signe devant le guichet unique de la préfecture, qui représente le gouvernement dans chaque province.",
  "È l'unica prova italiana che tocca la conoscenza del paese, e resta molto lontana da un esame di educazione civica: si verifica una conoscenza sufficiente della vita civile, non un programma di storia e istituzioni.":
    "C'est la seule épreuve italienne qui touche à la connaissance du pays, et elle reste très loin d'un examen d'éducation civique : on vérifie une connaissance suffisante de la vie civile, pas un programme d'histoire et d'institutions.",
  "Come funziona l'accordo di integrazione?": "Comment fonctionne l'accord d'intégration ?",
  "Con un esame scritto di storia e istituzioni":
    "Par un examen écrit d'histoire et d'institutions",
  "Con un sistema a crediti da mantenere in due anni":
    "Par un système de crédits à conserver en deux ans",
  "Con un colloquio annuale in questura": "Par un entretien annuel à la questura",
  "Con il versamento di una cauzione": "Par le versement d'une caution",
  "Si ricevono sedici crediti alla firma e si verificano dopo due anni, insieme alla conoscenza dell'italiano a livello A2 e a una conoscenza sufficiente della vita civile. Non c'è un esame di educazione civica.":
    "On reçoit seize crédits à la signature et on les vérifie après deux ans, avec la connaissance de l'italien au niveau A2 et une connaissance suffisante de la vie civile. Il n'y a pas d'examen d'éducation civique.",
  "La cittadinanza": "La nationalité",
  "Si può diventare cittadini italiani per **discendenza**, per **matrimonio** o per **residenza**. Per residenza il termine ordinario per chi non è cittadino dell'Unione è di **dieci anni**; è più breve per i cittadini dell'Unione, per i rifugiati e per chi è nato in Italia.":
    "On peut devenir citoyen italien par **filiation**, par **mariage** ou par **résidence**. Par résidence, le délai ordinaire pour qui n'est pas citoyen de l'Union est de **dix ans** ; il est plus court pour les citoyens de l'Union, pour les réfugiés et pour qui est né en Italie.",
  "Dal **2018** la domanda per matrimonio e per residenza richiede un certificato di conoscenza dell'italiano non inferiore al livello **B1** del quadro europeo. È una prova **linguistica**: non verte sulla storia, sulla Costituzione o sulle istituzioni.":
    "Depuis **2018**, la demande par mariage et par résidence exige un certificat de connaissance de l'italien au moins au niveau **B1** du cadre européen. C'est une épreuve **linguistique** : elle ne porte ni sur l'histoire, ni sur la Constitution, ni sur les institutions.",
  "Quale livello di italiano è richiesto per la domanda di cittadinanza?":
    "Quel niveau d'italien est exigé pour la demande de nationalité ?",
  "A1": "A1",
  "A2": "A2",
  "B1": "B1",
  "C1": "C1",
  "B1 per la cittadinanza, dal 2018. Il livello A2 serve invece per il permesso di soggiorno di lungo periodo: due prove diverse, con due soglie diverse, entrambe soltanto linguistiche.":
    "B1 pour la nationalité, depuis 2018. Le niveau A2 sert en revanche au titre de séjour de longue durée : deux épreuves différentes, deux seuils différents, toutes deux seulement linguistiques.",
  "Per i servizi online serve un'identità digitale: **SPID** o la **carta d'identità elettronica**. Senza una delle due non si prenota una visita, non si scarica un certificato e non si consulta il proprio fascicolo previdenziale.":
    "Pour les services en ligne, il faut une identité numérique : **SPID** ou la **carte d'identité électronique**. Sans l'une des deux, on ne prend pas rendez-vous chez le médecin, on ne télécharge pas un certificat et on ne consulte pas son dossier de retraite.",
  "La vita di tutti i giorni": "La vie de tous les jours",
  "Perché si chiude qui: le regole non scritte si imparano più lentamente di quelle scritte, e sono quelle che fanno sentire a proprio agio o fuori posto. Nessuna di esse è obbligatoria; tutte sono reali.":
    "Pourquoi on finit là-dessus : les règles non écrites s'apprennent plus lentement que les écrites, et ce sont elles qui font qu'on se sent à sa place ou de trop. Aucune n'est obligatoire ; toutes sont réelles.",
  "Il caffè e la tavola": "Le café et la table",
  "Il **caffè** in Italia è l'espresso, e si beve **al banco** in un minuto. Il **cappuccino** è una bevanda della **mattina**: ordinarlo dopo pranzo non è vietato da nessuna legge, ma segnala immediatamente che si viene da fuori. Dopo il pasto si prende il caffè, eventualmente **corretto** con un liquore.":
    "Le **café** en Italie, c'est l'espresso, et il se boit **au comptoir** en une minute. Le **cappuccino** est une boisson du **matin** : le commander après le déjeuner n'est interdit par aucune loi, mais signale aussitôt qu'on vient d'ailleurs. Après le repas, on prend un café, éventuellement **corretto**, avec une goutte d'alcool.",
  "I pasti hanno orari precisi: colazione leggera e dolce, pranzo fra le tredici e le quattordici, cena dalle venti in poi, più tardi man mano che si scende verso sud. Prima di cena c'è l'**aperitivo**, che a Milano è diventato quasi un pasto.":
    "Les repas ont des horaires précis : petit-déjeuner léger et sucré, déjeuner entre treize et quatorze heures, dîner à partir de vingt heures, plus tard à mesure qu'on descend vers le sud. Avant le dîner vient l'**aperitivo**, qui à Milan est devenu presque un repas.",
  "In quale momento della giornata si beve tradizionalmente il cappuccino?":
    "À quel moment de la journée boit-on traditionnellement le cappuccino ?",
  "Al mattino": "Le matin",
  "Dopo pranzo": "Après le déjeuner",
  "Dopo cena": "Après le dîner",
  "In qualunque momento, indifferentemente": "À n'importe quel moment, indifféremment",
  "Il cappuccino appartiene alla colazione. Dopo il pasto si prende l'espresso: non è una regola scritta, ma è seguita così largamente da funzionare come tale.":
    "Le cappuccino appartient au petit-déjeuner. Après le repas, on prend un espresso : ce n'est pas une règle écrite, mais elle est suivie assez largement pour en tenir lieu.",
  "Una cucina che non esiste": "Une cuisine qui n'existe pas",
  "La **cucina italiana** al singolare è in buona parte un'invenzione dell'estero e dell'emigrazione. In Italia la cucina è **regionale**, spesso cittadina: il ragù non è lo stesso a Bologna e a Napoli, la pizza di Napoli e quella romana sono due prodotti diversi, e ogni valle ha il proprio formaggio.":
    "La **cuisine italienne** au singulier est en bonne part une invention de l'étranger et de l'émigration. En Italie, la cuisine est **régionale**, souvent citadine : le ragù n'est pas le même à Bologne et à Naples, la pizza de Naples et la romaine sont deux produits différents, et chaque vallée a son fromage.",
  "Vale anche per l'ordine del pasto: antipasto, **primo** — pasta, riso o zuppa — **secondo** con contorno, poi frutta o dolce. Il primo non è un antipasto e il secondo non si accompagna alla pasta: sono due portate distinte, servite una dopo l'altra.":
    "Cela vaut aussi pour l'ordre du repas : antipasto, **primo** — pâtes, riz ou soupe —, **secondo** avec sa garniture, puis fruits ou dessert. Le primo n'est pas une entrée et le secondo ne s'accompagne pas de pâtes : ce sont deux plats distincts, servis l'un après l'autre.",
  "Casa, famiglia, piazza": "Maison, famille, place du village",
  "I giovani italiani lasciano la casa dei genitori più tardi che in quasi tutta Europa, per ragioni che sono soprattutto economiche: affitti, salari d'ingresso, lavoro instabile. I **nonni** hanno spesso un ruolo quotidiano nella cura dei nipoti, e questo tiene insieme molti bilanci familiari.":
    "Les jeunes Italiens quittent la maison de leurs parents plus tard que presque partout en Europe, pour des raisons surtout économiques : loyers, salaires d'entrée, travail instable. Les **grands-parents** ont souvent un rôle quotidien dans la garde des petits-enfants, et cela tient debout bien des budgets familiaux.",
  "La **piazza** resta il luogo dello stare insieme, e la **passeggiata** serale è ancora una pratica diffusa nei centri piccoli e medi. Nel rivolgersi a qualcuno si distingue fra **tu** e **lei**: il lei con gli sconosciuti, con chi è più anziano e in ogni contesto formale, finché non è l'altro a proporre il passaggio al tu.":
    "La **piazza** reste le lieu où l'on est ensemble, et la **passeggiata** du soir est encore une pratique répandue dans les petites et moyennes villes. En s'adressant à quelqu'un, on distingue le **tu** et le **lei** : le lei avec les inconnus, avec les plus âgés et dans tout cadre formel, tant que l'autre n'a pas proposé de passer au tu.",
  "Quando si usa il lei rivolgendosi a qualcuno?":
    "Quand emploie-t-on le lei en s'adressant à quelqu'un ?",
  "Solo negli atti scritti": "Seulement dans les écrits officiels",
  "Con gli sconosciuti, con chi è più anziano e nei contesti formali":
    "Avec les inconnus, avec les plus âgés et dans les cadres formels",
  "Sempre, anche in famiglia": "Toujours, même en famille",
  "Soltanto nel Sud del paese": "Seulement dans le Sud du pays",
  "Il passaggio al tu di solito lo propone la persona più anziana o di posizione superiore. Dare del tu troppo presto a uno sconosciuto è la scortesia più facile da commettere.":
    "Le passage au tu est d'ordinaire proposé par la personne la plus âgée ou la plus haut placée. Tutoyer trop tôt un inconnu est l'impolitesse la plus facile à commettre.",
  "Lo sport": "Le sport",
  "Il **calcio** è lo sport nazionale: la **Serie A** riempie le conversazioni da agosto a maggio, e la nazionale, gli **azzurri**, ha vinto quattro campionati del mondo. Il colore azzurro delle maglie non viene dalla bandiera ma dal blu Savoia, e la Repubblica ha scelto di conservarlo.":
    "Le **football** est le sport national : la **Serie A** remplit les conversations d'août à mai, et l'équipe nationale, les **azzurri**, a gagné quatre coupes du monde. Le bleu azur des maillots ne vient pas du drapeau mais du bleu de Savoie, et la République a choisi de le garder.",
  "Il secondo sport per radicamento è il **ciclismo**, con il **Giro d'Italia** che ogni maggio attraversa il paese. Chi è in testa alla classifica indossa la **maglia rosa**, del colore della carta del giornale che lo organizzò.":
    "Le deuxième sport par l'enracinement est le **cyclisme**, avec le **Giro d'Italia** qui traverse le pays chaque mois de mai. Qui mène le classement porte le **maillot rose**, de la couleur du papier du journal qui l'organisa.",
  "Di che colore è la maglia di chi guida la classifica del Giro d'Italia?":
    "De quelle couleur est le maillot de celui qui mène le classement du Giro d'Italia ?",
  "Gialla": "Jaune",
  "Rosa": "Rose",
  "Verde": "Vert",
  "Azzurra": "Azur",
  "Rosa, come la carta del quotidiano sportivo che organizzò la corsa. La maglia gialla appartiene invece al Tour de France, per la stessa ragione: il colore della carta del suo giornale.":
    "Rose, comme le papier du quotidien sportif qui organisa la course. Le maillot jaune appartient en revanche au Tour de France, pour la même raison : la couleur du papier de son journal.",
  "Gli orari": "Les horaires",
  "Molti negozi e uffici chiudono per la **pausa pranzo**, soprattutto nei centri piccoli e al Sud, e riaprono nel pomeriggio fino a sera. Ad **agosto**, e in particolare intorno a **Ferragosto**, chiudono per ferie negozi, studi professionali e interi quartieri delle grandi città.":
    "Beaucoup de commerces et de bureaux ferment pour la **pause de midi**, surtout dans les petites villes et dans le Sud, et rouvrent l'après-midi jusqu'au soir. En **août**, et particulièrement autour de **Ferragosto**, commerces, cabinets et quartiers entiers des grandes villes ferment pour les congés.",
  "Nessuna di queste consuetudini è una regola, e in una città grande molte non valgono più. Ma conoscerle spiega perché una porta è chiusa alle quattordici e trenta, e perché il barista alza un sopracciglio davanti a un cappuccino ordinato alle nove di sera.":
    "Aucune de ces habitudes n'est une règle, et dans une grande ville beaucoup ne valent plus. Mais les connaître explique pourquoi une porte est fermée à quatorze heures trente, et pourquoi le barman lève un sourcil devant un cappuccino commandé à neuf heures du soir.",
};
