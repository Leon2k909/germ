/**
 * French for the German country-studies course cards and headings.
 *
 * Keyed on the GERMAN source text exactly as it appears in
 * lebenInDeutschlandCourse.ts. A missing key is not an error — the card simply
 * shows no translation and says so, which is why this can be filled in over
 * time rather than all at once. check-de-translations fails on a key that
 * matches nothing in the course, because a typo there is silent otherwise.
 *
 * Names of institutions, laws and offices stay in German on purpose:
 * "Grundgesetz", "Bundestag", "Bundesrat", "Bundeskanzler", "Ewigkeitsklausel".
 * The test is sat in German and asks for those exact words — translating them
 * would teach the wrong answer. What gets translated is the explanation around
 * them, and a German term carries a short gloss the first time it matters.
 */
export const LEBEN_IN_DEUTSCHLAND_FR: Record<string, string> = {
  "Politik, Geschichte und Gesellschaft — wie das Land funktioniert.":
    "Politique, histoire et société — comment fonctionne le pays.",

  // ── Grundgesetz and basic rights ────────────────────────────────────────
  "Grundgesetz und Grundrechte": "Grundgesetz et droits fondamentaux",
  "Warum diese Lektion zuerst: Ein großer Teil der Fragen prüft nicht Wissen über Deutschland, sondern über die Werte, auf denen es aufgebaut ist. Die stehen alle im Grundgesetz — und zwar gleich am Anfang.":
    "Pourquoi cette leçon en premier : une grande partie des questions ne porte pas sur des connaissances sur l'Allemagne, mais sur les valeurs qui la fondent. Elles figurent toutes dans le Grundgesetz — et dès les premiers articles.",
  "Das Grundgesetz": "Le Grundgesetz",
  "Die Verfassung der Bundesrepublik heißt **Grundgesetz**. Sie trat am **23. Mai 1949** in Kraft. Der Name war als Provisorium gedacht: Solange Deutschland geteilt war, wollte man sich das Wort „Verfassung“ für die Wiedervereinigung aufheben. Seit 1990 gilt das Grundgesetz für ganz Deutschland und ist die Verfassung geblieben.":
    "La constitution de la République fédérale s'appelle **Grundgesetz** (loi fondamentale). Elle est entrée en vigueur le **23 mai 1949**. Le nom se voulait provisoire : tant que l'Allemagne était divisée, on réservait le mot « constitution » à la réunification. Depuis 1990, le Grundgesetz vaut pour toute l'Allemagne et en est resté la constitution.",
  "Artikel 1: die Menschenwürde": "Article 1 : la dignité humaine",
  "Der erste Satz des Grundgesetzes lautet: **„Die Würde des Menschen ist unantastbar.“** Er steht bewusst an erster Stelle — als Antwort auf den Nationalsozialismus, der genau das bestritten hatte.":
    "La première phrase du Grundgesetz dit : **« Die Würde des Menschen ist unantastbar » — la dignité de l'être humain est intangible.** Elle vient en tête délibérément — en réponse au national-socialisme, qui l'avait précisément niée.",
  "Artikel 1 und der Kern der Grundrechte können nicht abgeschafft werden, auch nicht durch eine Mehrheit im Parlament. Das nennt man die **Ewigkeitsklausel** (Artikel 79 Absatz 3). Genau danach wird gefragt.":
    "L'article 1 et le noyau des droits fondamentaux ne peuvent pas être abolis, pas même par une majorité parlementaire. C'est ce qu'on appelle la **Ewigkeitsklausel**, la clause d'éternité (article 79, alinéa 3). C'est exactement ce que le test demande.",
  "Die wichtigsten Grundrechte": "Les droits fondamentaux essentiels",
  "Menschenwürde (Art. 1)": "Dignité humaine (art. 1)",
  "Unantastbar. Grundlage für alles Weitere.": "Intangible. Fondement de tout le reste.",
  "Freie Entfaltung (Art. 2)": "Libre épanouissement (art. 2)",
  "Jeder darf leben, wie er möchte, solange er nicht die Rechte anderer verletzt.":
    "Chacun peut vivre comme il l'entend, tant qu'il ne porte pas atteinte aux droits d'autrui.",
  "Gleichheit (Art. 3)": "Égalité (art. 3)",
  "Alle Menschen sind vor dem Gesetz gleich. Niemand darf wegen Geschlecht, Herkunft, Sprache, Glauben oder Behinderung benachteiligt werden.":
    "Tous sont égaux devant la loi. Nul ne peut être désavantagé en raison de son sexe, de son origine, de sa langue, de sa croyance ou d'un handicap.",
  "Glaubensfreiheit (Art. 4)": "Liberté de croyance (art. 4)",
  "Jeder darf glauben, was er will — oder nichts glauben.":
    "Chacun peut croire ce qu'il veut — ou ne rien croire.",
  "Meinungsfreiheit (Art. 5)": "Liberté d'expression (art. 5)",
  "Meinung äußern, Presse, Rundfunk, Kunst und Wissenschaft sind frei. Eine Zensur findet nicht statt.":
    "L'expression des opinions, la presse, l'audiovisuel, l'art et la science sont libres. Il n'y a pas de censure.",
  "Versammlungsfreiheit (Art. 8)": "Liberté de réunion (art. 8)",
  "Sich friedlich und ohne Waffen versammeln — auch zu Demonstrationen.":
    "Se réunir pacifiquement et sans armes — y compris pour manifester.",
  "Wo Freiheit endet": "Où s'arrête la liberté",
  "Meinungsfreiheit ist nicht grenzenlos. **Volksverhetzung**, **Beleidigung** und das **Leugnen des Holocaust** sind Straftaten. Auch die Kunstfreiheit hebt Strafgesetze nicht auf.":
    "La liberté d'expression n'est pas sans limites. La **Volksverhetzung** (incitation à la haine), l'**injure** et la **négation de la Shoah** sont des délits. La liberté de l'art ne suspend pas non plus le droit pénal.",
  "Das musst du wissen": "Ce qu'il faut savoir",
  "Wichtige Namen": "Noms importants",
  "In dieser Lektion geht es um Prinzipien, nicht um Personen — die kommen ab Kapitel 2.":
    "Cette leçon porte sur des principes, non sur des personnes — celles-ci viennent à partir du chapitre 2.",
  "Wichtige Zahlen": "Chiffres importants",
  "33 Fragen · 60 Minuten · 17 zum Bestehen · 30 bundesweit + 3 zum Bundesland. Grundgesetz seit 23. Mai 1949. Artikel 1 Menschenwürde, Artikel 3 Gleichheit, Artikel 5 Meinungsfreiheit.":
    "33 questions · 60 minutes · 17 pour réussir · 30 nationales + 3 sur le Land. Grundgesetz depuis le 23 mai 1949. Article 1 dignité humaine, article 3 égalité, article 5 liberté d'expression.",
  "Wichtige Begriffe": "Termes importants",
  "Grundgesetz · Grundrechte · Menschenwürde · Ewigkeitsklausel · Zensurverbot · Volksverhetzung.":
    "Grundgesetz · droits fondamentaux · dignité humaine · Ewigkeitsklausel · interdiction de la censure · Volksverhetzung.",
  "In einem Satz: Das Grundgesetz beginnt mit der Menschenwürde, und dieser Anfang lässt sich nicht wegstimmen — das ist die Lehre aus 1933 bis 1945, in Verfassungsform.":
    "En une phrase : le Grundgesetz commence par la dignité humaine, et ce commencement ne peut être supprimé par un vote — c'est la leçon de 1933-1945, mise en forme constitutionnelle.",
  "Jetzt beantworte diese Fragen": "À vous de répondre",

  // ── Democracy and the rule of law ───────────────────────────────────────
  "Demokratie und Rechtsstaat": "Démocratie et État de droit",
  "Artikel 20 des Grundgesetzes fasst in einem Satz zusammen, was für ein Staat Deutschland ist: **„Die Bundesrepublik Deutschland ist ein demokratischer und sozialer Bundesstaat.“** Dazu kommt der Rechtsstaat. Diese vier Begriffe werden immer wieder abgefragt.":
    "L'article 20 du Grundgesetz résume en une phrase quel État est l'Allemagne : **« Die Bundesrepublik Deutschland ist ein demokratischer und sozialer Bundesstaat » — un État fédéral démocratique et social.** S'y ajoute l'État de droit. Ces quatre notions reviennent sans cesse dans le test.",
  "Die fünf Staatsprinzipien": "Les cinq principes de l'État",
  "Demokratie": "Démocratie",
  "Alle Staatsgewalt geht vom Volke aus. Gewählt wird in freien, gleichen und geheimen Wahlen.":
    "Tout pouvoir d'État émane du peuple. On élit lors d'élections libres, égales et secrètes.",
  "Rechtsstaat": "État de droit",
  "Auch der Staat ist an Recht und Gesetz gebunden. Gegen jede Entscheidung des Staates kann man vor Gericht ziehen.":
    "L'État lui aussi est lié par le droit et la loi. Toute décision de l'État peut être contestée en justice.",
  "Sozialstaat": "État social",
  "Wer in Not gerät, wird aufgefangen — durch Sozialversicherungen und staatliche Leistungen.":
    "Celui qui tombe dans le besoin est soutenu — par les assurances sociales et les prestations publiques.",
  "Bundesstaat": "État fédéral",
  "Deutschland besteht aus 16 Bundesländern, die eigene Aufgaben und eigene Parlamente haben.":
    "L'Allemagne se compose de 16 Länder, dotés de compétences et de parlements propres.",
  "Republik": "République",
  "Das Staatsoberhaupt wird gewählt, es gibt keinen König und keinen Kaiser.":
    "Le chef de l'État est élu ; il n'y a ni roi ni empereur.",
  "Gewaltenteilung": "Séparation des pouvoirs",
  "Die Staatsgewalt ist auf drei Bereiche verteilt, damit niemand allein bestimmen kann. Das ist die Antwort auf die Diktatur, in der alle Gewalt in einer Hand lag.":
    "Le pouvoir d'État est réparti en trois domaines, pour que personne ne décide seul. C'est la réponse à la dictature, où tout le pouvoir était réuni dans une seule main.",
  "Legislative": "Le législatif",
  "Die gesetzgebende Gewalt: Bundestag und Bundesrat beschließen die Gesetze.":
    "Le pouvoir législatif : le Bundestag et le Bundesrat votent les lois.",
  "Exekutive": "L'exécutif",
  "Die vollziehende Gewalt: Regierung, Ministerien, Behörden und Polizei führen die Gesetze aus.":
    "Le pouvoir exécutif : le gouvernement, les ministères, les administrations et la police appliquent les lois.",
  "Judikative": "Le judiciaire",
  "Die rechtsprechende Gewalt: unabhängige Gerichte entscheiden, was im Einzelfall gilt.":
    "Le pouvoir judiciaire : des tribunaux indépendants disent le droit dans chaque cas.",
  "Beliebte Verwechslung: Der Bundestag gehört zur Legislative, die Bundesregierung zur Exekutive. Der Bundeskanzler sitzt zwar im Bundestag, leitet aber die Regierung — also die Exekutive.":
    "Confusion fréquente : le Bundestag relève du législatif, la Bundesregierung de l'exécutif. Le Bundeskanzler siège certes au Bundestag, mais dirige le gouvernement — donc l'exécutif.",
  "Wehrhafte Demokratie": "Une démocratie capable de se défendre",
  "Deutschland lässt es nicht zu, dass die Demokratie mit demokratischen Mitteln abgeschafft wird. Parteien, die die freiheitliche demokratische Grundordnung beseitigen wollen, können vom **Bundesverfassungsgericht** verboten werden. Nur dieses Gericht darf das — keine Regierung, kein Ministerium.":
    "L'Allemagne n'admet pas que la démocratie soit abolie par des moyens démocratiques. Les partis qui veulent supprimer l'ordre constitutionnel libéral et démocratique peuvent être interdits par le **Bundesverfassungsgericht**. Seule cette cour le peut — aucun gouvernement, aucun ministère.",
  "Bundesverfassungsgericht in Karlsruhe — das einzige Gericht, das Parteien verbieten und Gesetze für verfassungswidrig erklären kann.":
    "Bundesverfassungsgericht à Karlsruhe — la seule juridiction qui puisse interdire des partis et déclarer des lois inconstitutionnelles.",
  "Artikel 20 Grundgesetz · 3 Gewalten · 16 Bundesländer · 5 Staatsprinzipien.":
    "Article 20 du Grundgesetz · 3 pouvoirs · 16 Länder · 5 principes de l'État.",
  "Volkssouveränität · Gewaltenteilung · Legislative · Exekutive · Judikative · wehrhafte Demokratie · freiheitliche demokratische Grundordnung.":
    "Souveraineté du peuple · séparation des pouvoirs · législatif · exécutif · judiciaire · démocratie capable de se défendre · ordre constitutionnel libéral et démocratique.",
  "In einem Satz: Drei getrennte Gewalten, und ein Gericht, das notfalls auch die Politik stoppt — die Demokratie schützt sich vor sich selbst.":
    "En une phrase : trois pouvoirs séparés, et une cour capable au besoin d'arrêter le politique — la démocratie se protège d'elle-même.",

  // ── Bundestag and how a law is made ─────────────────────────────────────
  "Bundestag und Gesetzgebung": "Le Bundestag et la loi",
  "Der **Bundestag** ist das Parlament des Bundes und das einzige Verfassungsorgan, das direkt vom Volk gewählt wird. Er beschließt Gesetze, wählt den Bundeskanzler, beschließt den Haushalt und kontrolliert die Regierung.":
    "Le **Bundestag** est le parlement fédéral et le seul organe constitutionnel élu directement par le peuple. Il vote les lois, élit le Bundeskanzler, adopte le budget et contrôle le gouvernement.",
  "Die vier Aufgaben": "Les quatre missions",
  "Gesetze": "Les lois",
  "Der Bundestag berät und beschließt die Bundesgesetze.":
    "Le Bundestag débat des lois fédérales et les vote.",
  "Kanzlerwahl": "L'élection du chancelier",
  "Er wählt den Bundeskanzler oder die Bundeskanzlerin — auf Vorschlag des Bundespräsidenten.":
    "Il élit le Bundeskanzler ou la Bundeskanzlerin — sur proposition du Bundespräsident.",
  "Haushalt": "Le budget",
  "Er entscheidet, wofür der Bund Geld ausgibt. Das nennt man das Budgetrecht.":
    "Il décide à quoi la Fédération consacre son argent. C'est le droit budgétaire.",
  "Kontrolle": "Le contrôle",
  "Er kontrolliert Regierung und Verwaltung, etwa durch Anfragen und Untersuchungsausschüsse.":
    "Il contrôle le gouvernement et l'administration, par des questions et des commissions d'enquête.",
  "Der Bundestag wird **auf vier Jahre** gewählt. Diese Zahl wird gern mit der Amtszeit des Bundespräsidenten (fünf Jahre) verwechselt.":
    "Le Bundestag est élu **pour quatre ans**. On confond volontiers ce chiffre avec le mandat du Bundespräsident (cinq ans).",
  "Wie ein Gesetz entsteht": "Comment naît une loi",
  "Ein Gesetzentwurf kommt aus der **Bundesregierung**, aus dem **Bundestag** selbst oder aus dem **Bundesrat**. Danach läuft er einen festen Weg:":
    "Un projet de loi vient de la **Bundesregierung**, du **Bundestag** lui-même ou du **Bundesrat**. Il suit ensuite un parcours fixe :",
  "1. Drei Lesungen": "1. Trois lectures",
  "Der Bundestag berät den Entwurf dreimal; dazwischen arbeiten die Fachausschüsse daran.":
    "Le Bundestag examine le texte trois fois ; entre les lectures, les commissions spécialisées y travaillent.",
  "2. Bundesrat": "2. Le Bundesrat",
  "Bei Zustimmungsgesetzen muss der Bundesrat zustimmen, bei Einspruchsgesetzen kann er widersprechen.":
    "Pour les lois soumises à approbation, le Bundesrat doit consentir ; pour les lois à opposition, il peut s'y opposer.",
  "3. Unterschrift": "3. La signature",
  "Der Bundespräsident fertigt das Gesetz aus. Er prüft dabei, ob es verfassungsgemäß zustande gekommen ist.":
    "Le Bundespräsident promulgue la loi. Il vérifie à cette occasion qu'elle a été adoptée conformément à la constitution.",
  "4. Verkündung": "4. La publication",
  "Erst mit der Veröffentlichung im Bundesgesetzblatt gilt das Gesetz.":
    "La loi n'entre en vigueur qu'avec sa publication au Bundesgesetzblatt.",
  "Der Bundesrat": "Le Bundesrat",
  "Im **Bundesrat** sitzen Vertreter der **16 Landesregierungen** — nicht gewählte Abgeordnete, sondern Ministerpräsidenten und Landesminister. Jedes Land hat je nach Einwohnerzahl **drei bis sechs Stimmen**, und ein Land muss seine Stimmen einheitlich abgeben. So reden die Länder bei der Bundesgesetzgebung mit.":
    "Au **Bundesrat** siègent des représentants des **16 gouvernements de Länder** — non des députés élus, mais des ministres-présidents et des ministres régionaux. Chaque Land dispose, selon sa population, de **trois à six voix**, et doit les exprimer d'un seul bloc. C'est ainsi que les Länder participent à la législation fédérale.",
  "Bundestag (Reichstagsgebäude, Berlin) · Bundesrat · Bundesgesetzblatt · Bundestagspräsident.":
    "Bundestag (Reichstagsgebäude, Berlin) · Bundesrat · Bundesgesetzblatt · président du Bundestag.",
  "4 Jahre Wahlperiode · 3 Lesungen · 16 Länder im Bundesrat · 3 bis 6 Stimmen je Land.":
    "4 ans de législature · 3 lectures · 16 Länder au Bundesrat · de 3 à 6 voix par Land.",
  "Budgetrecht · Zustimmungsgesetz · Einspruchsgesetz · Ausfertigung · Untersuchungsausschuss · Fraktion.":
    "Droit budgétaire · Zustimmungsgesetz · Einspruchsgesetz · promulgation · commission d'enquête · groupe parlementaire.",
  "In einem Satz: Der Bundestag beschließt, der Bundesrat lässt die Länder mitreden, der Bundespräsident unterschreibt — erst dann steht ein Gesetz.":
    "En une phrase : le Bundestag vote, le Bundesrat donne voix aux Länder, le Bundespräsident signe — la loi n'existe qu'après cela.",

  // ── Government and president ────────────────────────────────────────────
  "Bundesregierung und Bundespräsident": "Bundesregierung et Bundespräsident",
  "Die Regierungsgeschäfte führt der **Bundeskanzler**, das Land nach außen vertritt der **Bundespräsident**. Wer welche Aufgabe hat, ist eine der häufigsten Prüfungsfragen.":
    "Les affaires du gouvernement sont conduites par le **Bundeskanzler**, la représentation du pays à l'extérieur revient au **Bundespräsident**. Qui fait quoi est l'une des questions d'examen les plus fréquentes.",
  "Der Bundeskanzler": "Le Bundeskanzler",
  "Gewählt vom Bundestag": "Élu par le Bundestag",
  "Auf Vorschlag des Bundespräsidenten, ohne Aussprache. Das Volk wählt den Kanzler nicht direkt.":
    "Sur proposition du Bundespräsident, sans débat. Le peuple n'élit pas le chancelier directement.",
  "Richtlinienkompetenz": "Richtlinienkompetenz",
  "Der Kanzler bestimmt die Grundlinien der Politik. Innerhalb dieser Linien führt jeder Minister sein Ressort eigenständig.":
    "Le chancelier fixe les grandes orientations de la politique. Dans ce cadre, chaque ministre dirige son département de façon autonome.",
  "Wählt die Minister": "Il choisit les ministres",
  "Der Kanzler schlägt die Bundesminister vor; der Bundespräsident ernennt sie.":
    "Le chancelier propose les ministres fédéraux ; le Bundespräsident les nomme.",
  "Regierungschef": "Chef du gouvernement",
  "Kanzler und Minister zusammen bilden die Bundesregierung, auch Kabinett genannt.":
    "Le chancelier et les ministres forment ensemble la Bundesregierung, appelée aussi cabinet.",
  "Das konstruktive Misstrauensvotum": "La motion de censure constructive",
  "Der Bundestag kann den Kanzler nur abwählen, indem er **gleichzeitig einen Nachfolger wählt**. Ohne Mehrheit für einen Nachfolger bleibt der Kanzler im Amt.":
    "Le Bundestag ne peut renverser le chancelier qu'en **élisant simultanément un successeur**. Sans majorité pour un successeur, le chancelier reste en fonction.",
  "Warum so kompliziert: In der Weimarer Republik konnten sich Gegner von links und rechts zusammentun, um jede Regierung zu stürzen, ohne sich auf eine neue einigen zu müssen. Das Grundgesetz macht Stürzen ohne Alternative unmöglich.":
    "Pourquoi cette complication : sous la République de Weimar, les opposants de gauche et de droite pouvaient s'allier pour renverser n'importe quel gouvernement sans avoir à s'entendre sur un autre. Le Grundgesetz rend impossible de renverser sans alternative.",
  "Der Bundespräsident": "Le Bundespräsident",
  "Staatsoberhaupt": "Chef de l'État",
  "Er vertritt Deutschland nach außen und ist überparteilich.":
    "Il représente l'Allemagne à l'extérieur et se tient au-dessus des partis.",
  "Gewählt von der Bundesversammlung": "Élu par la Bundesversammlung",
  "Nicht vom Volk. Die Bundesversammlung besteht zur Hälfte aus Bundestagsabgeordneten und zur Hälfte aus Vertretern der Länder.":
    "Pas par le peuple. La Bundesversammlung est composée pour moitié de députés du Bundestag et pour moitié de représentants des Länder.",
  "Fünf Jahre": "Cinq ans",
  "Eine einmalige Wiederwahl ist möglich, also höchstens zehn Jahre.":
    "Un seul renouvellement est possible, soit dix ans au maximum.",
  "Unterschreibt Gesetze": "Il signe les lois",
  "Er fertigt Gesetze aus, ernennt Minister und Richter und schlägt den Kanzler zur Wahl vor.":
    "Il promulgue les lois, nomme ministres et juges, et propose le chancelier à l'élection.",
  "Der Bundespräsident **regiert nicht**. Er hat keine Richtlinienkompetenz und führt keine Ministerien. Wer sich merkt „Kanzler regiert, Präsident repräsentiert“, beantwortet die meisten dieser Fragen richtig.":
    "Le Bundespräsident **ne gouverne pas**. Il n'a pas de Richtlinienkompetenz et ne dirige aucun ministère. Qui retient que le chancelier gouverne et le président représente répond correctement à la plupart de ces questions.",
  "Bundeskanzler · Bundespräsident · Bundesversammlung · Kabinett · Bundeskanzleramt · Schloss Bellevue.":
    "Bundeskanzler · Bundespräsident · Bundesversammlung · cabinet · Bundeskanzleramt · Schloss Bellevue.",
  "Bundespräsident: 5 Jahre, einmal wiederwählbar, also maximal 10. Kanzler: keine Amtszeitbegrenzung.":
    "Bundespräsident : 5 ans, un seul renouvellement, donc 10 au maximum. Chancelier : aucune limite de mandats.",
  "Richtlinienkompetenz · konstruktives Misstrauensvotum · Ressortprinzip · Ausfertigung · überparteilich.":
    "Richtlinienkompetenz · motion de censure constructive · principe de l'autonomie ministérielle · promulgation · au-dessus des partis.",
  "In einem Satz: Der Kanzler bestimmt die Politik und ist nur mit einem Nachfolger abwählbar; der Präsident steht über den Parteien und unterschreibt.":
    "En une phrase : le chancelier fixe la politique et ne peut être renversé qu'avec un successeur ; le président se tient au-dessus des partis et signe.",

  // ── Elections and parties ───────────────────────────────────────────────
  "Wahlen und Parteien": "Élections et partis",
  "„Alle Staatsgewalt geht vom Volke aus“ — praktisch heißt das: durch Wahlen. Wie in Deutschland gewählt wird, ist ein Prüfungsthema mit festen Vokabeln.":
    "« Alle Staatsgewalt geht vom Volke aus » — tout pouvoir émane du peuple, ce qui veut dire concrètement : par les élections. La manière dont on vote en Allemagne est un sujet d'examen au vocabulaire fixe.",
  "Die fünf Wahlgrundsätze": "Les cinq principes électoraux",
  "Allgemein": "Universel",
  "Alle Staatsbürger ab 18 dürfen wählen, unabhängig von Einkommen, Geschlecht oder Bildung.":
    "Tous les citoyens de 18 ans et plus peuvent voter, quels que soient leur revenu, leur sexe ou leur instruction.",
  "Unmittelbar": "Direct",
  "Die Stimmen gehen direkt an die Kandidaten, nicht über Wahlmänner.":
    "Les voix vont directement aux candidats, sans passer par des grands électeurs.",
  "Frei": "Libre",
  "Niemand darf zur Wahl oder zu einer bestimmten Stimme gezwungen werden.":
    "Nul ne peut être contraint de voter ni de voter d'une certaine façon.",
  "Gleich": "Égal",
  "Jede Stimme zählt gleich viel.": "Chaque voix compte autant.",
  "Geheim": "Secret",
  "Niemand darf sehen, was du wählst. Deshalb die Wahlkabine.":
    "Personne ne doit voir pour qui vous votez. D'où l'isoloir.",
  "Merke die Reihenfolge **allgemein, unmittelbar, frei, gleich, geheim** — sie steht so in Artikel 38 des Grundgesetzes und wird oft im Wortlaut abgefragt.":
    "Retenez l'ordre **allgemein, unmittelbar, frei, gleich, geheim** — c'est ainsi qu'il figure à l'article 38 du Grundgesetz, et on l'interroge souvent mot pour mot.",
  "Erststimme und Zweitstimme": "Erststimme et Zweitstimme",
  "Bei der Bundestagswahl hat man **zwei Stimmen**. Die **Erststimme** wählt eine Person aus dem eigenen Wahlkreis. Die **Zweitstimme** wählt eine Partei — und sie entscheidet darüber, wie stark eine Partei im Bundestag wird. Deshalb ist die Zweitstimme die wichtigere.":
    "Aux élections du Bundestag, on dispose de **deux voix**. La **Erststimme** élit une personne de sa circonscription. La **Zweitstimme** choisit un parti — et c'est elle qui décide du poids de ce parti au Bundestag. La Zweitstimme est donc la plus importante.",
  "Die Fünf-Prozent-Hürde": "Le seuil des cinq pour cent",
  "In den Bundestag zieht nur ein, wer mindestens **fünf Prozent** der Zweitstimmen erreicht (oder mehrere Wahlkreise direkt gewinnt). Das soll verhindern, dass sehr viele Kleinstparteien das Parlament unregierbar machen — auch das eine Lehre aus der Weimarer Republik.":
    "N'entre au Bundestag que celui qui obtient au moins **cinq pour cent** des Zweitstimmen (ou remporte directement plusieurs circonscriptions). Il s'agit d'éviter qu'une multitude de petits partis rende le parlement ingouvernable — là encore une leçon de la République de Weimar.",
  "Wer darf wählen?": "Qui peut voter ?",
  "Bundestagswahl": "Élections au Bundestag",
  "Deutsche Staatsangehörige ab 18 Jahren.": "Les ressortissants allemands de 18 ans et plus.",
  "Kommunalwahl": "Élections locales",
  "In vielen Ländern dürfen auch EU-Bürger mitwählen, die dort wohnen.":
    "Dans de nombreux Länder, les citoyens de l'UE qui y résident peuvent aussi voter.",
  "Europawahl": "Élections européennes",
  "EU-Bürger wählen dort, wo sie leben — auch ohne deutschen Pass.":
    "Les citoyens de l'UE votent là où ils vivent — même sans passeport allemand.",
  "Nach der Einbürgerung": "Après la naturalisation",
  "Mit der deutschen Staatsangehörigkeit kommt das volle Wahlrecht bei allen Wahlen.":
    "La nationalité allemande donne le droit de vote plein et entier à toutes les élections.",
  "Bundeswahlleiter · Wahlkreis · Wahlkabine · Wahlbenachrichtigung.":
    "Bundeswahlleiter · circonscription · isoloir · convocation électorale.",
  "Wahlrecht ab 18 · 2 Stimmen · 5-Prozent-Hürde · alle 4 Jahre.":
    "Droit de vote à 18 ans · 2 voix · seuil de 5 pour cent · tous les 4 ans.",
  "allgemein, unmittelbar, frei, gleich, geheim · Erststimme · Zweitstimme · Koalition · Opposition · Fraktion.":
    "allgemein, unmittelbar, frei, gleich, geheim · Erststimme · Zweitstimme · coalition · opposition · groupe parlementaire.",
  "In einem Satz: Zwei Stimmen, fünf Grundsätze, fünf Prozent — und die Zweitstimme entscheidet über die Machtverhältnisse.":
    "En une phrase : deux voix, cinq principes, cinq pour cent — et c'est la Zweitstimme qui décide du rapport de forces.",

  // ── Federalism ──────────────────────────────────────────────────────────
  "Föderalismus und Bundesländer": "Fédéralisme et Länder",
  "Deutschland ist ein **Bundesstaat**: Es gibt eine Ebene für das ganze Land — den Bund — und **16 Bundesländer**, die eigene Regierungen, eigene Parlamente und eigene Zuständigkeiten haben. Wer wofür zuständig ist, wird regelmäßig gefragt.":
    "L'Allemagne est un **État fédéral** : il existe un échelon pour tout le pays — la Fédération — et **16 Länder**, dotés de gouvernements, de parlements et de compétences propres. Qui est compétent pour quoi revient régulièrement dans le test.",
  "Wer macht was?": "Qui fait quoi ?",
  "Aufgaben des Bundes": "Compétences de la Fédération",
  "Außenpolitik · Verteidigung und Bundeswehr · Staatsangehörigkeit · Währung · Bundesautobahnen · Luftverkehr · Post und Telekommunikation.":
    "Politique étrangère · défense et Bundeswehr · nationalité · monnaie · autoroutes fédérales · transport aérien · poste et télécommunications.",
  "Aufgaben der Länder": "Compétences des Länder",
  "Schulen und Hochschulen · Polizei · Kultur · Rundfunk · Kommunalrecht · Bauordnung. Deshalb sieht Schule in Bayern anders aus als in Hamburg.":
    "Écoles et universités · police · culture · audiovisuel · droit communal · droit de la construction. C'est pourquoi l'école bavaroise ne ressemble pas à celle de Hambourg.",
  "**Bildung ist Ländersache** — das ist eine der meistgestellten Fragen überhaupt. Auch die **Polizei** ist grundsätzlich Ländersache; nur die Bundespolizei ist Sache des Bundes.":
    "**L'éducation relève des Länder** — c'est l'une des questions les plus posées. La **police** relève elle aussi par principe des Länder ; seule la Bundespolizei dépend de la Fédération.",
  "Die 16 Bundesländer": "Les seize Länder",
  "Dreizehn Flächenländer und drei **Stadtstaaten**: Berlin, Hamburg und Bremen. Jedes Land hat eine Landesregierung mit einem **Ministerpräsidenten** an der Spitze — in den Stadtstaaten heißt er **Regierender Bürgermeister** (Berlin), **Erster Bürgermeister** (Hamburg) oder **Bürgermeister und Präsident des Senats** (Bremen).":
    "Treize Länder territoriaux et trois **villes-États** : Berlin, Hambourg et Brême. Chaque Land a un gouvernement dirigé par un **Ministerpräsident** — dans les villes-États, il porte le titre de **Regierender Bürgermeister** (Berlin), **Erster Bürgermeister** (Hambourg) ou **Bürgermeister und Präsident des Senats** (Brême).",
  "Landtag": "Landtag",
  "Das Parlament eines Bundeslandes. In Bayern heißt es Landtag, in Bremen und Hamburg Bürgerschaft, in Berlin Abgeordnetenhaus.":
    "Le parlement d'un Land. En Bavière il s'appelle Landtag, à Brême et Hambourg Bürgerschaft, à Berlin Abgeordnetenhaus.",
  "Landesverfassung": "Constitution du Land",
  "Jedes Land hat eine eigene Verfassung. Sie darf dem Grundgesetz nicht widersprechen.":
    "Chaque Land a sa propre constitution. Elle ne peut pas contredire le Grundgesetz.",
  "Gemeinden": "Communes",
  "Unterhalb der Länder gibt es Städte, Gemeinden und Landkreise mit eigener Selbstverwaltung — Kita, Müll, Bebauungspläne, Bürgerbüro.":
    "Sous les Länder, il y a des villes, des communes et des arrondissements dotés de leur propre administration — crèches, déchets, plans d'urbanisme, guichet citoyen.",
  "Warum überhaupt Föderalismus?": "Pourquoi le fédéralisme ?",
  "Macht wird nicht nur auf drei Gewalten verteilt, sondern zusätzlich auf zwei Ebenen. Das erschwert es, den Staat von einer Stelle aus zu übernehmen — und regionale Unterschiede bleiben erhalten. Historisch knüpft es an die vielen deutschen Einzelstaaten vor 1871 an.":
    "Le pouvoir n'est pas seulement réparti entre trois pouvoirs, mais aussi entre deux échelons. Il devient plus difficile de s'emparer de l'État depuis un seul endroit — et les différences régionales subsistent. Historiquement, cela prolonge les nombreux États allemands d'avant 1871.",
  "Ministerpräsident · Landtag · Bürgerschaft (Hamburg, Bremen) · Abgeordnetenhaus (Berlin) · Landkreis · Gemeinderat.":
    "Ministerpräsident · Landtag · Bürgerschaft (Hambourg, Brême) · Abgeordnetenhaus (Berlin) · arrondissement · conseil municipal.",
  "16 Bundesländer · 13 Flächenländer · 3 Stadtstaaten · 3 Fragen zum eigenen Bundesland im Test.":
    "16 Länder · 13 Länder territoriaux · 3 villes-États · 3 questions sur son propre Land dans le test.",
  "Föderalismus · Bundesstaat · Ländersache · kommunale Selbstverwaltung · Landesverfassung.":
    "Fédéralisme · État fédéral · compétence des Länder · autonomie communale · constitution du Land.",
  "In einem Satz: Der Bund macht Außenpolitik und Geld, die Länder machen Schule und Polizei, die Gemeinden machen den Alltag vor der Haustür.":
    "En une phrase : la Fédération s'occupe de la politique étrangère et de la monnaie, les Länder de l'école et de la police, les communes du quotidien devant la porte.",

  // ── Courts ──────────────────────────────────────────────────────────────
  "Rechtssystem und Gerichte": "Système judiciaire et tribunaux",
  "Im Rechtsstaat ist auch der Staat an das Gesetz gebunden, und **jeder** kann gegen staatliche Entscheidungen klagen. Die Gerichte sind unabhängig: Richter sind nur dem Gesetz unterworfen, niemand darf ihnen sagen, wie sie zu entscheiden haben.":
    "Dans l'État de droit, l'État lui-même est lié par la loi, et **chacun** peut attaquer une décision publique en justice. Les tribunaux sont indépendants : les juges ne sont soumis qu'à la loi, et nul ne peut leur dicter leur décision.",
  "Die fünf Gerichtszweige": "Les cinq ordres de juridiction",
  "Ordentliche Gerichte": "Juridictions ordinaires",
  "Strafsachen und Streit zwischen Privatpersonen: Amtsgericht, Landgericht, Oberlandesgericht, Bundesgerichtshof.":
    "Affaires pénales et litiges entre particuliers : Amtsgericht, Landgericht, Oberlandesgericht, Bundesgerichtshof.",
  "Arbeitsgerichte": "Juridictions du travail",
  "Streit zwischen Arbeitgeber und Arbeitnehmer, etwa bei Kündigungen.":
    "Litiges entre employeur et salarié, par exemple en cas de licenciement.",
  "Verwaltungsgerichte": "Juridictions administratives",
  "Bürger gegen Behörde — Aufenthaltstitel, Baugenehmigung, Bescheide.":
    "Le citoyen contre l'administration — titre de séjour, permis de construire, décisions.",
  "Sozialgerichte": "Juridictions sociales",
  "Rente, Krankenversicherung, Bürgergeld.":
    "Retraite, assurance maladie, Bürgergeld.",
  "Finanzgerichte": "Juridictions fiscales",
  "Streit mit dem Finanzamt über Steuern.": "Litiges fiscaux avec le Finanzamt.",
  "Das Bundesverfassungsgericht": "Le Bundesverfassungsgericht",
  "In **Karlsruhe** sitzt das höchste Gericht für Verfassungsfragen. Es kann Gesetze für **verfassungswidrig** erklären, auch wenn Bundestag und Bundesrat sie beschlossen haben. Jede Person kann **Verfassungsbeschwerde** erheben, wenn sie sich in ihren Grundrechten verletzt sieht — nachdem sie den normalen Rechtsweg ausgeschöpft hat.":
    "La plus haute juridiction constitutionnelle siège à **Karlsruhe**. Elle peut déclarer des lois **contraires à la constitution**, même votées par le Bundestag et le Bundesrat. Toute personne peut former un **Verfassungsbeschwerde**, un recours constitutionnel, si elle s'estime lésée dans ses droits fondamentaux — après avoir épuisé les voies de recours ordinaires.",
  "Grundsätze im Strafverfahren": "Principes de la procédure pénale",
  "Unschuldsvermutung": "Présomption d'innocence",
  "Bis zur rechtskräftigen Verurteilung gilt jeder als unschuldig.":
    "Jusqu'à condamnation définitive, chacun est réputé innocent.",
  "Recht auf Verteidigung": "Droit à la défense",
  "Jeder Angeklagte darf einen Anwalt haben; wer ihn nicht bezahlen kann, bekommt Hilfe.":
    "Tout accusé a droit à un avocat ; qui ne peut le payer reçoit une aide.",
  "Keine Strafe ohne Gesetz": "Pas de peine sans loi",
  "Bestraft werden kann nur, was zur Tatzeit bereits strafbar war.":
    "On ne peut punir que ce qui était déjà punissable au moment des faits.",
  "Nicht zweimal": "Pas deux fois",
  "Für dieselbe Tat wird niemand zweimal bestraft.":
    "Nul n'est puni deux fois pour le même acte.",
  "Häufige Falle: **Niemand darf sich selbst Recht verschaffen.** Auch wer sicher im Recht ist, holt sich sein Geld nicht selbst zurück, sondern geht zum Gericht. Selbstjustiz ist strafbar.":
    "Piège fréquent : **nul ne peut se faire justice à soi-même.** Même celui qui a certainement raison ne récupère pas son argent lui-même : il va devant le tribunal. Se faire justice soi-même est punissable.",
  "Bundesverfassungsgericht (Karlsruhe) · Bundesgerichtshof · Amtsgericht · Staatsanwaltschaft · Schöffen.":
    "Bundesverfassungsgericht (Karlsruhe) · Bundesgerichtshof · Amtsgericht · parquet · juges non professionnels.",
  "5 Gerichtszweige · Karlsruhe als Sitz des Verfassungsgerichts.":
    "5 ordres de juridiction · Karlsruhe, siège de la cour constitutionnelle.",
  "Unabhängigkeit der Richter · Unschuldsvermutung · Verfassungsbeschwerde · Rechtsweg · Selbstjustiz · rechtskräftig.":
    "Indépendance des juges · présomption d'innocence · Verfassungsbeschwerde · voies de recours · justice privée · définitif.",
  "In einem Satz: Fünf Gerichtszweige für fünf Arten von Streit, ein Verfassungsgericht über allen — und niemand nimmt das Recht in die eigene Hand.":
    "En une phrase : cinq ordres de juridiction pour cinq sortes de litiges, une cour constitutionnelle au-dessus de tous — et nul ne se fait justice à soi-même.",

  // ── The welfare state ───────────────────────────────────────────────────
  "Sozialstaat und Sozialversicherung": "État social et assurances sociales",
  "Deutschland ist ein **Sozialstaat**: Krankheit, Alter, Arbeitslosigkeit oder Pflegebedürftigkeit sollen niemanden ins Bodenlose fallen lassen. Getragen wird das vor allem von den **fünf Sozialversicherungen**.":
    "L'Allemagne est un **État social** : maladie, vieillesse, chômage ou dépendance ne doivent laisser personne tomber dans le vide. Cela repose avant tout sur les **cinq assurances sociales**.",
  "Die fünf Säulen": "Les cinq piliers",
  "Krankenversicherung": "Assurance maladie",
  "Zahlt Arzt, Krankenhaus und Medikamente. Für alle Pflicht — gesetzlich oder privat.":
    "Elle prend en charge le médecin, l'hôpital et les médicaments. Obligatoire pour tous — publique ou privée.",
  "Rentenversicherung": "Assurance vieillesse",
  "Zahlt die Rente im Alter sowie Renten bei Erwerbsminderung und für Hinterbliebene.":
    "Elle verse la retraite ainsi que les pensions d'invalidité et de réversion.",
  "Arbeitslosenversicherung": "Assurance chômage",
  "Zahlt Arbeitslosengeld und finanziert Weiterbildung und Vermittlung.":
    "Elle verse l'allocation chômage et finance la formation et le placement.",
  "Pflegeversicherung": "Assurance dépendance",
  "Hilft, wenn jemand dauerhaft auf Pflege angewiesen ist. Seit 1995 die jüngste Säule.":
    "Elle intervient quand une personne a durablement besoin d'aide. Le plus jeune pilier, depuis 1995.",
  "Unfallversicherung": "Assurance accidents du travail",
  "Bei Arbeitsunfällen und Berufskrankheiten. Sie zahlt allein der Arbeitgeber.":
    "Pour les accidents du travail et les maladies professionnelles. L'employeur en paie seul les cotisations.",
  "Vier der fünf Versicherungen zahlen Arbeitgeber und Arbeitnehmer **je zur Hälfte**. Die Ausnahme ist die **Unfallversicherung**: Sie trägt der Arbeitgeber allein. Danach wird gern gefragt.":
    "Quatre des cinq assurances sont financées **à parts égales** par l'employeur et le salarié. L'exception est l'**assurance accidents du travail** : l'employeur la supporte seul. On aime interroger là-dessus.",
  "Das Solidarprinzip": "Le principe de solidarité",
  "Die Beiträge richten sich nach dem **Einkommen**, die Leistungen nach dem **Bedarf**. Wer viel verdient, zahlt mehr ein, bekommt bei Krankheit aber nicht mehr Behandlung. Gesunde tragen Kranke, Junge tragen Alte — und umgekehrt, wenn sich das Leben dreht.":
    "Les cotisations dépendent du **revenu**, les prestations du **besoin**. Qui gagne beaucoup cotise davantage, mais ne reçoit pas plus de soins en cas de maladie. Les bien portants portent les malades, les jeunes les vieux — et inversement quand la vie tourne.",
  "Weitere Hilfen": "Autres aides",
  "Bürgergeld": "Bürgergeld",
  "Grundsicherung für Erwerbsfähige ohne ausreichendes Einkommen.":
    "Revenu minimum pour les personnes aptes au travail sans ressources suffisantes.",
  "Kindergeld": "Kindergeld",
  "Monatlich für jedes Kind, unabhängig vom Einkommen der Eltern.":
    "Versé chaque mois pour chaque enfant, quel que soit le revenu des parents.",
  "Elterngeld": "Elterngeld",
  "Ersetzt einen Teil des Einkommens, wenn Eltern nach der Geburt zu Hause bleiben.":
    "Il compense une partie du revenu quand les parents restent à la maison après la naissance.",
  "Wohngeld": "Wohngeld",
  "Zuschuss zur Miete für Haushalte mit geringem Einkommen.":
    "Aide au loyer pour les ménages à faibles revenus.",
  "Krankenkasse · Deutsche Rentenversicherung · Bundesagentur für Arbeit · Jobcenter · Berufsgenossenschaft.":
    "Krankenkasse · Deutsche Rentenversicherung · Bundesagentur für Arbeit · Jobcenter · Berufsgenossenschaft.",
  "5 Sozialversicherungen · Pflegeversicherung seit 1995 · Beiträge je zur Hälfte, außer bei der Unfallversicherung.":
    "5 assurances sociales · assurance dépendance depuis 1995 · cotisations à parts égales, sauf pour l'assurance accidents.",
  "Solidarprinzip · Sozialversicherung · Bürgergeld · Kindergeld · Elterngeld · Sozialabgaben · Bruttolohn und Nettolohn.":
    "Principe de solidarité · assurance sociale · Bürgergeld · Kindergeld · Elterngeld · cotisations sociales · salaire brut et net.",
  "In einem Satz: Fünf Versicherungen, nach Einkommen bezahlt und nach Bedarf ausgezahlt — das ist der Sozialstaat im Alltag.":
    "En une phrase : cinq assurances, payées selon le revenu et versées selon le besoin — voilà l'État social au quotidien.",

  // ── Empire and Weimar ───────────────────────────────────────────────────
  "Kaiserreich und Weimarer Republik": "Empire et République de Weimar",
  "Deutschland als Nationalstaat ist jünger als Frankreich oder England. Bis **1871** bestand es aus vielen Einzelstaaten. Was danach kam — Kaiserreich, erste Demokratie, deren Scheitern — erklärt, warum das Grundgesetz so gebaut ist, wie es gebaut ist.":
    "L'Allemagne comme État-nation est plus jeune que la France ou l'Angleterre. Jusqu'en **1871**, elle se composait de nombreux États séparés. Ce qui suivit — l'Empire, la première démocratie, son échec — explique pourquoi le Grundgesetz est bâti comme il l'est.",
  "1871: die Reichsgründung": "1871 : la fondation de l'Empire",
  "Nach dem Krieg gegen Frankreich schlossen sich die deutschen Staaten zum **Deutschen Kaiserreich** zusammen. Der preußische König wurde deutscher Kaiser, **Otto von Bismarck** der erste Reichskanzler. Es gab ein gewähltes Parlament, den Reichstag, aber die Regierung war ihm nicht verantwortlich — der Kanzler diente dem Kaiser.":
    "Après la guerre contre la France, les États allemands s'unirent dans l'**Empire allemand**. Le roi de Prusse devint empereur, **Otto von Bismarck** le premier chancelier. Il existait un parlement élu, le Reichstag, mais le gouvernement n'était pas responsable devant lui — le chancelier servait l'empereur.",
  "Bismarck führte in den 1880er Jahren die ersten Sozialversicherungen der Welt ein — Kranken-, Unfall- und Rentenversicherung. Der deutsche Sozialstaat ist damit älter als die deutsche Demokratie.":
    "Dans les années 1880, Bismarck créa les premières assurances sociales du monde — maladie, accidents et vieillesse. L'État social allemand est donc plus ancien que la démocratie allemande.",
  "1914–1918: der Erste Weltkrieg": "1914-1918 : la Première Guerre mondiale",
  "Der Krieg endete mit der Niederlage Deutschlands. Am **9. November 1918** dankte der Kaiser ab, die Republik wurde ausgerufen. Der **Versailler Vertrag** von 1919 verpflichtete Deutschland zu hohen Reparationen und Gebietsabtretungen — und belastete die junge Demokratie von Anfang an.":
    "La guerre s'acheva par la défaite de l'Allemagne. Le **9 novembre 1918**, l'empereur abdiqua et la république fut proclamée. Le **traité de Versailles** de 1919 imposa à l'Allemagne de lourdes réparations et des cessions de territoires — et pesa sur la jeune démocratie dès le premier jour.",
  "Die Weimarer Republik 1919–1933": "La République de Weimar 1919-1933",
  "Die erste Demokratie": "La première démocratie",
  "Die Verfassung wurde 1919 in Weimar beschlossen — daher der Name. Zum ersten Mal durften auch **Frauen wählen**.":
    "La constitution fut adoptée à Weimar en 1919 — d'où le nom. Pour la première fois, les **femmes** purent voter.",
  "Krisen ohne Pause": "Des crises sans répit",
  "Hyperinflation 1923, dann die Weltwirtschaftskrise ab 1929 mit Millionen Arbeitslosen.":
    "L'hyperinflation de 1923, puis la crise mondiale à partir de 1929 avec des millions de chômeurs.",
  "Zersplittertes Parlament": "Un parlement éclaté",
  "Viele kleine Parteien, ständig wechselnde Regierungen, keine stabilen Mehrheiten.":
    "Beaucoup de petits partis, des gouvernements sans cesse renversés, aucune majorité stable.",
  "Feinde in der Mitte": "Des ennemis à l'intérieur",
  "Extreme von links und rechts lehnten die Demokratie offen ab und stürzten Regierungen, ohne eine neue zu bilden.":
    "Les extrêmes de gauche et de droite rejetaient ouvertement la démocratie et renversaient les gouvernements sans en former de nouveaux.",
  "Aus genau diesen Schwächen zog das Grundgesetz seine Konsequenzen: **Fünf-Prozent-Hürde** gegen die Zersplitterung, **konstruktives Misstrauensvotum** gegen das Stürzen ohne Alternative, **Ewigkeitsklausel** und **Parteiverbot** gegen die Feinde der Demokratie.":
    "C'est de ces faiblesses précises que le Grundgesetz a tiré ses conséquences : le **seuil des cinq pour cent** contre l'éclatement, la **motion de censure constructive** contre le renversement sans alternative, la **Ewigkeitsklausel** et l'**interdiction des partis** contre les ennemis de la démocratie.",
  "Otto von Bismarck · Kaiser Wilhelm II. · Friedrich Ebert (erster Reichspräsident) · Weimarer Verfassung · Versailler Vertrag.":
    "Otto von Bismarck · l'empereur Guillaume II · Friedrich Ebert (premier président du Reich) · constitution de Weimar · traité de Versailles.",
  "1871 Reichsgründung · 1914–1918 Erster Weltkrieg · 9. November 1918 Ausrufung der Republik · 1919 Weimarer Verfassung und Frauenwahlrecht · 1923 Hyperinflation · 1929 Weltwirtschaftskrise.":
    "1871 fondation de l'Empire · 1914-1918 Première Guerre mondiale · 9 novembre 1918 proclamation de la république · 1919 constitution de Weimar et droit de vote des femmes · 1923 hyperinflation · 1929 crise mondiale.",
  "Kaiserreich · Reichstag · Republik · Reparationen · Hyperinflation · Präsidialkabinett.":
    "Empire · Reichstag · république · réparations · hyperinflation · cabinet présidentiel.",
  "In einem Satz: Die erste deutsche Demokratie hatte keine Mehrheit hinter sich, die sie verteidigt hätte — und das Grundgesetz ist die Antwort auf jede einzelne dieser Schwachstellen.":
    "En une phrase : la première démocratie allemande n'avait derrière elle aucune majorité prête à la défendre — et le Grundgesetz répond à chacune de ces faiblesses.",

  // ── National Socialism ──────────────────────────────────────────────────
  "Nationalsozialismus 1933–1945": "Le national-socialisme 1933-1945",
  "Am **30. Januar 1933** wurde Adolf Hitler zum Reichskanzler ernannt. Innerhalb weniger Monate war aus der Demokratie eine Diktatur geworden. Wie schnell das ging, gehört zum Pflichtwissen.":
    "Le **30 janvier 1933**, Adolf Hitler fut nommé chancelier du Reich. En quelques mois, la démocratie était devenue une dictature. La rapidité de ce basculement fait partie des connaissances obligatoires.",
  "Die Machtübernahme Schritt für Schritt": "La prise du pouvoir, étape par étape",
  "30. Januar 1933": "30 janvier 1933",
  "Hitler wird Reichskanzler — ernannt, nicht durch eine absolute Mehrheit ins Amt gewählt.":
    "Hitler devient chancelier — nommé, et non porté au pouvoir par une majorité absolue.",
  "Februar 1933": "Février 1933",
  "Nach dem Reichstagsbrand werden Grundrechte per Notverordnung außer Kraft gesetzt.":
    "Après l'incendie du Reichstag, les droits fondamentaux sont suspendus par décret d'urgence.",
  "März 1933": "Mars 1933",
  "Das **Ermächtigungsgesetz** erlaubt der Regierung, Gesetze ohne das Parlament zu erlassen. Die Gewaltenteilung ist damit beseitigt.":
    "L'**Ermächtigungsgesetz** autorise le gouvernement à légiférer sans le parlement. La séparation des pouvoirs est ainsi supprimée.",
  "Sommer 1933": "Été 1933",
  "Alle Parteien außer der NSDAP werden verboten oder lösen sich auf. Gewerkschaften werden zerschlagen.":
    "Tous les partis sauf le NSDAP sont interdits ou se dissolvent. Les syndicats sont démantelés.",
  "Der Unterschied zur Demokratie in einem Punkt: **eine Partei, keine freien Wahlen, keine unabhängigen Gerichte, keine Meinungsfreiheit.** Wer diese vier Merkmale kennt, erkennt jede Diktaturfrage im Test.":
    "La différence avec la démocratie tient en un point : **un seul parti, pas d'élections libres, pas de tribunaux indépendants, pas de liberté d'expression.** Qui connaît ces quatre traits reconnaît toute question du test sur la dictature.",
  "Verfolgung von Anfang an": "La persécution dès le début",
  "Politische Gegner kamen in **Konzentrationslager**, die schon 1933 eingerichtet wurden. Die **Nürnberger Gesetze** von 1935 nahmen jüdischen Deutschen die Bürgerrechte. In der **Pogromnacht vom 9. November 1938** wurden Synagogen angezündet, Geschäfte zerstört und Menschen ermordet.":
    "Les opposants politiques furent envoyés dans des **camps de concentration**, ouverts dès 1933. Les **lois de Nuremberg** de 1935 retirèrent aux Allemands juifs leurs droits civiques. Lors de la **nuit de pogrom du 9 novembre 1938**, des synagogues furent incendiées, des commerces détruits et des personnes assassinées.",
  "Der Zweite Weltkrieg": "La Seconde Guerre mondiale",
  "Am **1. September 1939** überfiel Deutschland Polen; damit begann der Zweite Weltkrieg. Er endete in Europa mit der bedingungslosen Kapitulation am **8. Mai 1945**. Der Krieg kostete weltweit über 50 Millionen Menschen das Leben und ging von Deutschland aus.":
    "Le **1er septembre 1939**, l'Allemagne envahit la Pologne ; ainsi commença la Seconde Guerre mondiale. Elle s'acheva en Europe par la capitulation sans condition du **8 mai 1945**. La guerre coûta la vie à plus de 50 millions de personnes dans le monde, et elle est partie d'Allemagne.",
  "Widerstand": "La résistance",
  "Es gab Menschen, die sich wehrten: die Geschwister **Sophie und Hans Scholl** von der Weißen Rose, verhaftet und hingerichtet 1943; **Claus Schenk Graf von Stauffenberg**, dessen Attentat am **20. Juli 1944** scheiterte; Menschen, die Verfolgte versteckten. Sie waren eine Minderheit — aber sie werden geehrt.":
    "Certains résistèrent : le frère et la sœur **Sophie et Hans Scholl**, de la Rose blanche, arrêtés et exécutés en 1943 ; **Claus Schenk Graf von Stauffenberg**, dont l'attentat du **20 juillet 1944** échoua ; ceux qui cachèrent des persécutés. Ils furent une minorité — mais on les honore.",
  "Adolf Hitler · NSDAP · Sophie und Hans Scholl (Weiße Rose) · Claus Schenk Graf von Stauffenberg.":
    "Adolf Hitler · NSDAP · Sophie et Hans Scholl (la Rose blanche) · Claus Schenk Graf von Stauffenberg.",
  "30. Januar 1933 Machtübernahme · März 1933 Ermächtigungsgesetz · 1935 Nürnberger Gesetze · 9. November 1938 Pogromnacht · 1. September 1939 Kriegsbeginn · 20. Juli 1944 Attentat · 8. Mai 1945 Kapitulation.":
    "30 janvier 1933 prise du pouvoir · mars 1933 Ermächtigungsgesetz · 1935 lois de Nuremberg · 9 novembre 1938 nuit de pogrom · 1er septembre 1939 début de la guerre · 20 juillet 1944 attentat · 8 mai 1945 capitulation.",
  "Diktatur · Ermächtigungsgesetz · Einparteienstaat · Konzentrationslager · Gleichschaltung · Widerstand.":
    "Dictature · Ermächtigungsgesetz · État à parti unique · camp de concentration · Gleichschaltung · résistance.",
  "In einem Satz: In weniger als einem halben Jahr wurde eine Demokratie mit ihren eigenen Mitteln abgeschafft — deshalb ist die heutige Demokratie wehrhaft.":
    "En une phrase : en moins de six mois, une démocratie fut abolie par ses propres moyens — c'est pourquoi la démocratie d'aujourd'hui sait se défendre.",

  // ── The Holocaust and responsibility ────────────────────────────────────
  "Holocaust und Verantwortung": "Shoah et responsabilité",
  "Der **Holocaust** — der Massenmord an den europäischen Juden — ist der Kern dessen, was der Test unter „Verantwortung“ prüft. Nicht als Detailwissen, sondern als Verständnis dafür, warum Deutschland heute so handelt, wie es handelt.":
    "La **Shoah** — l'assassinat de masse des Juifs d'Europe — est au cœur de ce que le test évalue sous le mot « responsabilité ». Non comme un savoir de détail, mais comme la compréhension de ce qui fonde la conduite actuelle de l'Allemagne.",
  "Was geschah": "Ce qui s'est passé",
  "Der Nationalsozialismus ermordete etwa **sechs Millionen Juden**. Ermordet wurden außerdem Sinti und Roma, Menschen mit Behinderung, politische Gegner, Homosexuelle, Kriegsgefangene und Zwangsarbeiter. Der Mord war staatlich organisiert und industriell betrieben — in Vernichtungslagern wie **Auschwitz**.":
    "Le national-socialisme assassina environ **six millions de Juifs**. Furent également assassinés des Sintis et Roms, des personnes handicapées, des opposants politiques, des homosexuels, des prisonniers de guerre et des travailleurs forcés. Le meurtre fut organisé par l'État et mené à l'échelle industrielle — dans des camps d'extermination comme **Auschwitz**.",
  "Das **Leugnen des Holocaust** ist in Deutschland eine **Straftat**. Es fällt nicht unter die Meinungsfreiheit. Diese Frage kommt im Test regelmäßig vor.":
    "La **négation de la Shoah** est en Allemagne un **délit**. Elle ne relève pas de la liberté d'expression. Cette question revient régulièrement dans le test.",
  "Wie Deutschland damit umgeht": "Comment l'Allemagne s'y confronte",
  "Erinnern": "La mémoire",
  "Der **27. Januar** — der Tag der Befreiung von Auschwitz 1945 — ist Gedenktag für die Opfer des Nationalsozialismus.":
    "Le **27 janvier** — jour de la libération d'Auschwitz en 1945 — est la journée du souvenir des victimes du national-socialisme.",
  "Gedenkstätten": "Lieux de mémoire",
  "Ehemalige Lager wie Dachau, Buchenwald und Bergen-Belsen sind Gedenkstätten. In Berlin steht das Denkmal für die ermordeten Juden Europas.":
    "D'anciens camps comme Dachau, Buchenwald et Bergen-Belsen sont des lieux de mémoire. À Berlin se dresse le Mémorial aux Juifs assassinés d'Europe.",
  "Entschädigung": "Réparations",
  "Deutschland zahlt seit Jahrzehnten Entschädigungen an Überlebende und deren Nachkommen.":
    "L'Allemagne verse depuis des décennies des indemnisations aux survivants et à leurs descendants.",
  "Israel": "Israël",
  "Aus dieser Geschichte folgt eine besondere Verantwortung Deutschlands gegenüber Israel und gegenüber jüdischem Leben in Deutschland.":
    "De cette histoire découle une responsabilité particulière de l'Allemagne envers Israël et envers la vie juive en Allemagne.",
  "Die Nürnberger Prozesse": "Les procès de Nuremberg",
  "1945 und 1946 stellten die Alliierten führende Nationalsozialisten in **Nürnberg** vor Gericht. Zum ersten Mal wurden Staatsführer persönlich für Kriegsverbrechen und Verbrechen gegen die Menschlichkeit zur Verantwortung gezogen — die Grundlage des heutigen Völkerstrafrechts.":
    "En 1945 et 1946, les Alliés jugèrent à **Nuremberg** les principaux dirigeants nationaux-socialistes. Pour la première fois, des chefs d'État furent tenus personnellement responsables de crimes de guerre et de crimes contre l'humanité — le fondement du droit pénal international d'aujourd'hui.",
  "Was daraus für heute folgt": "Ce qui en découle aujourd'hui",
  "Antisemitismus, Rassismus und die Verharmlosung des Nationalsozialismus haben in Deutschland keinen Platz — rechtlich nicht und gesellschaftlich nicht. Das Zeigen von NS-Symbolen ist verboten, ebenso die Volksverhetzung.":
    "L'antisémitisme, le racisme et la banalisation du national-socialisme n'ont pas leur place en Allemagne — ni juridiquement ni socialement. L'exhibition de symboles nazis est interdite, tout comme la Volksverhetzung.",
  "Auschwitz · Nürnberger Prozesse · Anne Frank · Denkmal für die ermordeten Juden Europas · Yad Vashem.":
    "Auschwitz · procès de Nuremberg · Anne Frank · Mémorial aux Juifs assassinés d'Europe · Yad Vashem.",
  "Etwa 6 Millionen ermordete Juden · 27. Januar Gedenktag · 1945/46 Nürnberger Prozesse.":
    "Environ 6 millions de Juifs assassinés · 27 janvier journée du souvenir · 1945-1946 procès de Nuremberg.",
  "Holocaust · Schoah · Antisemitismus · Volksverhetzung · Verbrechen gegen die Menschlichkeit · Erinnerungskultur.":
    "Holocauste · Shoah · antisémitisme · Volksverhetzung · crimes contre l'humanité · culture de la mémoire.",
  "In einem Satz: Deutschland leugnet diesen Teil seiner Geschichte nicht, sondern hat ihn zur Grundlage seiner Gegenwart gemacht — im Recht, im Gedenken und in der Außenpolitik.":
    "En une phrase : l'Allemagne ne nie pas cette part de son histoire, elle en a fait le fondement de son présent — dans le droit, dans la mémoire et dans sa politique étrangère.",

  // ── Post-war and division ───────────────────────────────────────────────
  "Nachkriegszeit und Teilung": "L'après-guerre et la division",
  "1945 war Deutschland zerstört, besetzt und ohne eigene Regierung. Vier Jahre später standen zwei deutsche Staaten — und die Teilung hielt vierzig Jahre.":
    "En 1945, l'Allemagne était détruite, occupée et sans gouvernement propre. Quatre ans plus tard, deux États allemands existaient — et la division dura quarante ans.",
  "Die vier Besatzungszonen": "Les quatre zones d'occupation",
  "Die Siegermächte teilten Deutschland unter sich auf: **USA**, **Großbritannien**, **Frankreich** und die **Sowjetunion**. Berlin wurde ebenfalls in vier Sektoren geteilt, obwohl die Stadt mitten in der sowjetischen Zone lag.":
    "Les vainqueurs se partagèrent l'Allemagne : les **États-Unis**, la **Grande-Bretagne**, la **France** et l'**Union soviétique**. Berlin fut aussi divisée en quatre secteurs, bien que la ville se trouvât au milieu de la zone soviétique.",
  "Entnazifizierung": "Dénazification",
  "Nationalsozialisten wurden aus Ämtern entfernt, NS-Organisationen verboten.":
    "Les nationaux-socialistes furent écartés des fonctions publiques, leurs organisations interdites.",
  "Flucht und Vertreibung": "Fuite et expulsions",
  "Millionen Deutsche kamen aus den ehemaligen Ostgebieten in den Westen und Osten.":
    "Des millions d'Allemands vinrent des anciens territoires de l'Est vers l'ouest et l'est du pays.",
  "Trümmerfrauen": "Trümmerfrauen",
  "Frauen räumten die zerstörten Städte auf — ein Bild, das für den Neuanfang steht.":
    "Des femmes déblayèrent les villes détruites — une image devenue celle du recommencement.",
  "Marshallplan": "Plan Marshall",
  "Ab 1948 halfen die USA dem Westen mit Krediten und Waren beim Wiederaufbau.":
    "À partir de 1948, les États-Unis aidèrent l'Ouest à se reconstruire par des crédits et des marchandises.",
  "Die Berliner Blockade": "Le blocus de Berlin",
  "1948 sperrte die Sowjetunion alle Land- und Wasserwege nach West-Berlin. Fast ein Jahr lang versorgten die Westalliierten die Stadt aus der Luft — die **Luftbrücke**. Die Flugzeuge, die im Minutentakt landeten, nannten die Berliner **Rosinenbomber**.":
    "En 1948, l'Union soviétique ferma toutes les voies terrestres et fluviales vers Berlin-Ouest. Pendant près d'un an, les Alliés occidentaux ravitaillèrent la ville par les airs — le **pont aérien**. Les avions qui se posaient à la minute, les Berlinois les appelaient **Rosinenbomber**.",
  "1949: zwei Staaten": "1949 : deux États",
  "Bundesrepublik Deutschland": "République fédérale d'Allemagne",
  "Aus den drei Westzonen. Grundgesetz am **23. Mai 1949**. Hauptstadt Bonn. Erster Bundeskanzler: **Konrad Adenauer**. Marktwirtschaft, Westbindung, freie Wahlen.":
    "Issue des trois zones occidentales. Grundgesetz le **23 mai 1949**. Capitale Bonn. Premier chancelier : **Konrad Adenauer**. Économie de marché, ancrage à l'Ouest, élections libres.",
  "Deutsche Demokratische Republik": "République démocratique allemande",
  "Aus der sowjetischen Zone, gegründet am **7. Oktober 1949**. Hauptstadt Ost-Berlin. Einparteienherrschaft der SED, Planwirtschaft, Bindung an die Sowjetunion.":
    "Issue de la zone soviétique, fondée le **7 octobre 1949**. Capitale Berlin-Est. Régime à parti unique du SED, économie planifiée, alignement sur l'Union soviétique.",
  "Zwei Daten aus demselben Jahr, die gern vertauscht werden: **23. Mai 1949** Grundgesetz und Bundesrepublik, **7. Oktober 1949** Gründung der DDR.":
    "Deux dates de la même année, volontiers interverties : **23 mai 1949** Grundgesetz et République fédérale, **7 octobre 1949** fondation de la RDA.",
  "Wirtschaftswunder und Gastarbeiter": "Miracle économique et Gastarbeiter",
  "Der Westen erlebte in den 1950er Jahren einen raschen Aufschwung, das **Wirtschaftswunder**. Weil Arbeitskräfte fehlten, wurden ab 1955 Menschen aus Italien, Spanien, Griechenland, der Türkei und weiteren Ländern angeworben — die **Gastarbeiter**. Viele blieben; ihre Familien gehören seit Generationen zu Deutschland.":
    "L'Ouest connut dans les années 1950 un essor rapide, le **miracle économique**. Faute de main-d'œuvre, on recruta à partir de 1955 des travailleurs d'Italie, d'Espagne, de Grèce, de Turquie et d'autres pays — les **Gastarbeiter**. Beaucoup restèrent ; leurs familles font partie de l'Allemagne depuis des générations.",
  "Konrad Adenauer · Ludwig Erhard · SED · Luftbrücke · Rosinenbomber · Marshallplan.":
    "Konrad Adenauer · Ludwig Erhard · SED · pont aérien · Rosinenbomber · plan Marshall.",
  "1945 Kriegsende und vier Zonen · 1948/49 Berliner Blockade · 23. Mai 1949 Bundesrepublik · 7. Oktober 1949 DDR · ab 1955 Anwerbung von Gastarbeitern.":
    "1945 fin de la guerre et quatre zones · 1948-1949 blocus de Berlin · 23 mai 1949 République fédérale · 7 octobre 1949 RDA · à partir de 1955 recrutement des Gastarbeiter.",
  "Besatzungszone · Entnazifizierung · Luftbrücke · Wirtschaftswunder · Soziale Marktwirtschaft · Planwirtschaft · Kalter Krieg.":
    "Zone d'occupation · dénazification · pont aérien · miracle économique · économie sociale de marché · économie planifiée · guerre froide.",
  "In einem Satz: Aus vier Besatzungszonen wurden zwei Staaten mit entgegengesetzten Systemen — und Berlin lag als geteilte Stadt mitten im Osten.":
    "En une phrase : de quatre zones d'occupation naquirent deux États aux systèmes opposés — et Berlin, ville divisée, se trouvait au milieu de l'Est.",

  // ── Life in the GDR ─────────────────────────────────────────────────────
  "Leben in der DDR": "La vie en RDA",
  "Die DDR nannte sich demokratisch, war es aber nicht. Woran man das erkennt, ist eine typische Testfrage — und zugleich eine gute Wiederholung dessen, was Demokratie ausmacht.":
    "La RDA se disait démocratique, sans l'être. À quoi on le reconnaît est une question de test typique — et en même temps une bonne révision de ce qui fait une démocratie.",
  "Warum die DDR keine Demokratie war": "Pourquoi la RDA n'était pas une démocratie",
  "Eine Partei bestimmte": "Un seul parti décidait",
  "Die **SED** hatte den Führungsanspruch. Andere Parteien existierten nur als Beiwerk ohne echte Macht.":
    "Le **SED** revendiquait la direction de l'État. Les autres partis n'existaient qu'en accompagnement, sans pouvoir réel.",
  "Keine freien Wahlen": "Pas d'élections libres",
  "Es gab eine Einheitsliste. Man konnte zustimmen, aber nicht zwischen Alternativen wählen.":
    "Il n'y avait qu'une liste unique. On pouvait l'approuver, mais non choisir entre des options.",
  "Keine Meinungsfreiheit": "Pas de liberté d'expression",
  "Presse und Rundfunk waren staatlich gelenkt. Kritik konnte Beruf, Studienplatz oder Freiheit kosten.":
    "La presse et l'audiovisuel étaient dirigés par l'État. Une critique pouvait coûter son emploi, sa place à l'université ou sa liberté.",
  "Keine Reisefreiheit": "Pas de liberté de circulation",
  "In den Westen zu reisen war für die meisten Bürger nicht möglich.":
    "Voyager à l'Ouest était impossible pour la plupart des citoyens.",
  "Die Staatssicherheit": "La Sûreté de l'État",
  "Das Ministerium für Staatssicherheit — die **Stasi** — überwachte die eigene Bevölkerung mit Hunderttausenden hauptamtlichen und inoffiziellen Mitarbeitern. Sie las Post, hörte Telefone ab und führte Akten über Millionen Menschen. Diese Akten sind heute einsehbar: Wer will, kann beantragen, die eigene Akte zu lesen.":
    "Le ministère de la Sûreté de l'État — la **Stasi** — surveillait sa propre population avec des centaines de milliers d'agents officiels et officieux. Elle lisait le courrier, écoutait les téléphones et tenait des dossiers sur des millions de personnes. Ces dossiers sont aujourd'hui consultables : qui le souhaite peut demander à lire le sien.",
  "Die Mauer": "Le Mur",
  "Weil immer mehr Menschen die DDR verließen, wurde am **13. August 1961** die **Berliner Mauer** gebaut und die innerdeutsche Grenze abgeriegelt. An der Grenze galt der Schießbefehl; bei Fluchtversuchen starben Hunderte Menschen.":
    "Comme de plus en plus de gens quittaient la RDA, le **mur de Berlin** fut construit le **13 août 1961** et la frontière interallemande fermée. L'ordre de tirer y était en vigueur ; des centaines de personnes moururent en tentant de fuir.",
  "Die Mauer sollte nicht Feinde draußen halten, sondern die eigene Bevölkerung drinnen. Genau das unterscheidet sie von einer normalen Staatsgrenze.":
    "Le Mur n'était pas fait pour tenir des ennemis dehors, mais sa propre population dedans. C'est précisément ce qui le distingue d'une frontière ordinaire.",
  "Der Aufstand vom 17. Juni 1953": "Le soulèvement du 17 juin 1953",
  "Arbeiter in Ost-Berlin und vielen anderen Städten streikten gegen höhere Arbeitsnormen; daraus wurde ein Aufstand gegen die Regierung. Sowjetische Panzer schlugen ihn nieder. In der Bundesrepublik war der 17. Juni bis 1990 der Nationalfeiertag.":
    "Des ouvriers de Berlin-Est et de nombreuses autres villes firent grève contre le relèvement des normes de travail ; il en sortit un soulèvement contre le gouvernement. Les chars soviétiques l'écrasèrent. En République fédérale, le 17 juin fut jusqu'en 1990 la fête nationale.",
  "SED · Stasi (Ministerium für Staatssicherheit) · Walter Ulbricht · Erich Honecker · Volkskammer.":
    "SED · Stasi (ministère de la Sûreté de l'État) · Walter Ulbricht · Erich Honecker · Volkskammer.",
  "7. Oktober 1949 Gründung · 17. Juni 1953 Aufstand · 13. August 1961 Mauerbau · 9. November 1989 Mauerfall.":
    "7 octobre 1949 fondation · 17 juin 1953 soulèvement · 13 août 1961 construction du Mur · 9 novembre 1989 chute du Mur.",
  "Einparteienstaat · Planwirtschaft · Einheitsliste · Stasi-Akte · Republikflucht · Schießbefehl.":
    "État à parti unique · économie planifiée · liste unique · dossier de la Stasi · Republikflucht · ordre de tirer.",
  "In einem Satz: Eine Partei, gelenkte Wahlen, überwachte Bürger und eine Mauer, die niemanden hinausließ — das ist das Gegenbild zu allem, was in Kapitel 1 steht.":
    "En une phrase : un parti unique, des élections dirigées, des citoyens surveillés et un mur qui ne laissait sortir personne — l'exact contraire de tout ce que dit le chapitre 1.",

  // ── The fall of the Wall and reunification ──────────────────────────────
  "Mauerfall und Wiedervereinigung": "Chute du Mur et réunification",
  "1989 endete die Teilung — nicht durch Krieg, sondern weil Menschen auf die Straße gingen. Diese Ereignisse und ihre Daten gehören zum sichersten Prüfungswissen überhaupt.":
    "En 1989, la division prit fin — non par la guerre, mais parce que des gens descendirent dans la rue. Ces événements et leurs dates comptent parmi les connaissances d'examen les plus sûres.",
  "Die Friedliche Revolution": "La révolution pacifique",
  "Montagsdemonstrationen": "Les manifestations du lundi",
  "In **Leipzig** und anderen Städten demonstrierten immer mehr Menschen — friedlich, mit dem Ruf **„Wir sind das Volk“**.":
    "À **Leipzig** et dans d'autres villes, des foules de plus en plus nombreuses manifestaient — pacifiquement, au cri de **« Wir sind das Volk » — nous sommes le peuple**.",
  "Ausreisewelle": "La vague de départs",
  "Über Ungarn und die Prager Botschaft verließen Tausende die DDR, als die Nachbarländer ihre Grenzen öffneten.":
    "Par la Hongrie et l'ambassade de Prague, des milliers de personnes quittèrent la RDA quand les pays voisins ouvrirent leurs frontières.",
  "9. November 1989": "9 novembre 1989",
  "Nach einer verwirrenden Pressekonferenz strömten Menschen an die Grenzübergänge. Die **Mauer wurde geöffnet** — ohne einen einzigen Schuss.":
    "Après une conférence de presse confuse, les gens affluèrent aux postes-frontières. Le **Mur fut ouvert** — sans un seul coup de feu.",
  "März 1990": "Mars 1990",
  "Die ersten **freien Wahlen** in der Geschichte der DDR.":
    "Les premières **élections libres** de l'histoire de la RDA.",
  "„Wir sind das Volk“ ist wörtlich Artikel 20 des Grundgesetzes: Alle Staatsgewalt geht vom Volke aus. Die Demonstranten beriefen sich auf ein Prinzip, das ihr Staat nur behauptete.":
    "« Wir sind das Volk » reprend littéralement l'article 20 du Grundgesetz : tout pouvoir d'État émane du peuple. Les manifestants invoquaient un principe que leur État se contentait de proclamer.",
  "3. Oktober 1990: die Einheit": "3 octobre 1990 : l'unité",
  "Die DDR trat der Bundesrepublik bei. Aus zwei Staaten wurde einer, aus den **fünf neuen Ländern** — Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt und Thüringen — plus dem wiedervereinigten Berlin wurden die heutigen 16 Bundesländer. Der **3. Oktober** ist seitdem der **Tag der Deutschen Einheit**, der Nationalfeiertag.":
    "La RDA adhéra à la République fédérale. De deux États il n'en resta qu'un ; les **cinq nouveaux Länder** — Brandebourg, Mecklembourg-Poméranie-Occidentale, Saxe, Saxe-Anhalt et Thuringe — plus Berlin réunifié portèrent le total aux 16 Länder actuels. Le **3 octobre** est depuis le **Tag der Deutschen Einheit**, la fête nationale.",
  "Nicht verwechseln: Die **Mauer fiel am 9. November 1989**, die **Wiedervereinigung war am 3. Oktober 1990**. Gefeiert wird der 3. Oktober — der 9. November ist auch das Datum der Pogromnacht 1938 und taugt deshalb nicht als Freudentag.":
    "Ne pas confondre : le **Mur est tombé le 9 novembre 1989**, la **réunification a eu lieu le 3 octobre 1990**. On célèbre le 3 octobre — le 9 novembre est aussi la date de la nuit de pogrom de 1938 et ne saurait donc être un jour de liesse.",
  "Der Zwei-plus-Vier-Vertrag": "Le traité deux plus quatre",
  "Die beiden deutschen Staaten und die vier Siegermächte einigten sich 1990 darauf, dass Deutschland die volle Souveränität erhält. Die heutigen Grenzen wurden völkerrechtlich bestätigt. Berlin wurde wieder Hauptstadt; Regierung und Parlament zogen 1999 dorthin.":
    "Les deux États allemands et les quatre puissances victorieuses convinrent en 1990 que l'Allemagne recouvrerait sa pleine souveraineté. Les frontières actuelles furent confirmées en droit international. Berlin redevint la capitale ; le gouvernement et le parlement s'y installèrent en 1999.",
  "Helmut Kohl · Michail Gorbatschow · Leipziger Montagsdemonstrationen · Nikolaikirche · Zwei-plus-Vier-Vertrag.":
    "Helmut Kohl · Mikhaïl Gorbatchev · les manifestations du lundi à Leipzig · Nikolaikirche · traité deux plus quatre.",
  "9. November 1989 Mauerfall · März 1990 freie Volkskammerwahl · 3. Oktober 1990 Einheit · 5 neue Bundesländer · 1999 Umzug nach Berlin.":
    "9 novembre 1989 chute du Mur · mars 1990 élections libres à la Volkskammer · 3 octobre 1990 unité · 5 nouveaux Länder · 1999 transfert à Berlin.",
  "Friedliche Revolution · „Wir sind das Volk“ · Tag der Deutschen Einheit · neue Bundesländer · Souveränität.":
    "Révolution pacifique · « Wir sind das Volk » · Tag der Deutschen Einheit · nouveaux Länder · souveraineté.",
  "In einem Satz: Eine Diktatur endete durch friedliche Demonstrationen — und der Nationalfeiertag erinnert nicht an einen Sieg, sondern an eine Vereinigung.":
    "En une phrase : une dictature a pris fin par des manifestations pacifiques — et la fête nationale ne commémore pas une victoire, mais une réunion.",

  // ── Germany in Europe and the world ─────────────────────────────────────
  "Deutschland in Europa und der Welt": "L'Allemagne en Europe et dans le monde",
  "Deutschland ist Teil der **Europäischen Union** — und das ist keine Nebensache, sondern eine direkte Folge der eigenen Geschichte: Wer wirtschaftlich verflochten ist, führt keine Kriege mehr gegeneinander.":
    "L'Allemagne fait partie de l'**Union européenne** — et ce n'est pas un détail, mais une conséquence directe de sa propre histoire : des économies imbriquées ne se font plus la guerre.",
  "Die Europäische Union": "L'Union européenne",
  "Gründungsidee": "L'idée fondatrice",
  "Nach dem Zweiten Weltkrieg schlossen sich europäische Staaten zusammen, um Frieden durch Zusammenarbeit zu sichern. Deutschland war von Anfang an dabei.":
    "Après la Seconde Guerre mondiale, des États européens s'unirent pour assurer la paix par la coopération. L'Allemagne en fut dès le début.",
  "27 Mitgliedstaaten": "27 États membres",
  "So viele sind es seit dem Austritt des Vereinigten Königreichs 2020.":
    "C'est leur nombre depuis la sortie du Royaume-Uni en 2020.",
  "Der Euro": "L'euro",
  "Seit **2002** ist der Euro das Bargeld in Deutschland; er löste die D-Mark ab. Nicht alle EU-Staaten haben den Euro.":
    "Depuis **2002**, l'euro est la monnaie en circulation en Allemagne ; il a remplacé le mark. Tous les États de l'UE n'ont pas l'euro.",
  "Alle fünf Jahre wählen die Bürger das **Europäische Parlament** direkt.":
    "Tous les cinq ans, les citoyens élisent directement le **Parlement européen**.",
  "Was die EU im Alltag bedeutet": "Ce que l'UE change au quotidien",
  "**Freizügigkeit**: EU-Bürger dürfen in jedem Mitgliedstaat leben und arbeiten. **Offene Grenzen** im Schengen-Raum: Reisen ohne Passkontrolle. **Eine Währung** in weiten Teilen. **Gemeinsame Regeln** für Verbraucherschutz, Produktsicherheit und Datenschutz.":
    "**Libre circulation** : les citoyens de l'UE peuvent vivre et travailler dans tout État membre. **Frontières ouvertes** dans l'espace Schengen : voyager sans contrôle des passeports. **Une monnaie** sur une large part du territoire. **Des règles communes** pour la protection des consommateurs, la sécurité des produits et les données personnelles.",
  "Nicht verwechseln: **Europäische Union** (politischer und wirtschaftlicher Zusammenschluss), **Europarat** (Menschenrechte, viel größer) und **NATO** (Verteidigungsbündnis). Deutschland ist in allen dreien, sie sind aber verschiedene Dinge.":
    "Ne pas confondre : l'**Union européenne** (union politique et économique), le **Conseil de l'Europe** (droits de l'homme, bien plus vaste) et l'**OTAN** (alliance de défense). L'Allemagne appartient aux trois, mais ce sont des choses différentes.",
  "Deutschland international": "L'Allemagne sur la scène internationale",
  "Vereinte Nationen": "Nations unies",
  "Deutschland ist seit 1973 Mitglied und einer der größten Beitragszahler.":
    "L'Allemagne en est membre depuis 1973 et l'un des plus gros contributeurs.",
  "NATO": "OTAN",
  "Die Bundesrepublik trat 1955 bei. Die Bundeswehr ist eine Parlamentsarmee: Über Auslandseinsätze entscheidet der Bundestag.":
    "La République fédérale y adhéra en 1955. La Bundeswehr est une armée parlementaire : c'est le Bundestag qui décide des missions à l'étranger.",
  "Entwicklungszusammenarbeit": "Coopération au développement",
  "Deutschland unterstützt ärmere Länder finanziell und mit Projekten.":
    "L'Allemagne soutient les pays plus pauvres financièrement et par des projets.",
  "Nachbarn": "Voisins",
  "Deutschland grenzt an **neun** Staaten — mehr als jedes andere EU-Land.":
    "L'Allemagne a **neuf** pays voisins — plus que tout autre État de l'UE.",
  "Europäische Union · Europäisches Parlament · Europarat · NATO · Vereinte Nationen · Schengen-Raum.":
    "Union européenne · Parlement européen · Conseil de l'Europe · OTAN · Nations unies · espace Schengen.",
  "27 EU-Mitgliedstaaten · Euro-Bargeld seit 2002 · Europawahl alle 5 Jahre · 9 Nachbarländer · NATO-Beitritt 1955 · UN-Mitglied seit 1973.":
    "27 États membres de l'UE · euro en circulation depuis 2002 · élections européennes tous les 5 ans · 9 pays voisins · adhésion à l'OTAN en 1955 · membre de l'ONU depuis 1973.",
  "Freizügigkeit · Binnenmarkt · Schengen · Parlamentsarmee · Europäische Integration.":
    "Libre circulation · marché intérieur · Schengen · armée parlementaire · intégration européenne.",
  "In einem Satz: Deutschland hat sich nach 1945 bewusst eingebunden statt abgegrenzt — die EU ist Friedenspolitik mit wirtschaftlichen Mitteln.":
    "En une phrase : après 1945, l'Allemagne a délibérément choisi de s'arrimer plutôt que de se replier — l'UE est une politique de paix menée par des moyens économiques.",

  // ── Geography, cities and symbols ───────────────────────────────────────
  "Geografie, Städte und Symbole": "Géographie, villes et symboles",
  "Wo Deutschland liegt, wie groß es ist und woran man es erkennt — Landkarte und Staatssymbole liefern eine Reihe sicherer Punkte im Test.":
    "Où se situe l'Allemagne, quelle est sa taille et à quoi on la reconnaît — la carte et les symboles de l'État offrent une série de points sûrs au test.",
  "Die Eckdaten": "Les données de base",
  "Lage": "Situation",
  "In der Mitte Europas, mit **neun Nachbarländern**. Im Norden grenzt es an Nord- und Ostsee.":
    "Au centre de l'Europe, avec **neuf pays voisins**. Au nord, elle borde la mer du Nord et la Baltique.",
  "Einwohner": "Population",
  "Rund **84 Millionen** — der bevölkerungsreichste Staat der EU.":
    "Environ **84 millions** — l'État le plus peuplé de l'UE.",
  "Hauptstadt": "Capitale",
  "**Berlin**, zugleich die größte Stadt mit etwa 3,8 Millionen Einwohnern.":
    "**Berlin**, également la plus grande ville avec environ 3,8 millions d'habitants.",
  "Größte Städte": "Les plus grandes villes",
  "Nach Berlin folgen **Hamburg**, **München**, **Köln** und **Frankfurt am Main**.":
    "Après Berlin viennent **Hambourg**, **Munich**, **Cologne** et **Francfort-sur-le-Main**.",
  "Landschaft von Nord nach Süd": "Le relief du nord au sud",
  "Im Norden das flache **Norddeutsche Tiefland**, in der Mitte die **Mittelgebirge** wie Harz, Schwarzwald und Erzgebirge, im Süden das Alpenvorland und die **Alpen**. Der höchste Berg ist die **Zugspitze** mit 2.962 Metern in Bayern.":
    "Au nord, la **plaine d'Allemagne du Nord**, plate ; au centre, les **moyennes montagnes** comme le Harz, la Forêt-Noire et les monts Métallifères ; au sud, l'avant-pays alpin et les **Alpes**. Le point culminant est la **Zugspitze**, 2 962 mètres, en Bavière.",
  "Der Rhein": "Le Rhin",
  "Der bekannteste Fluss, wichtige Wasserstraße von der Schweiz bis in die Niederlande.":
    "Le fleuve le plus connu, voie navigable majeure de la Suisse aux Pays-Bas.",
  "Die Elbe": "L'Elbe",
  "Fließt von Tschechien über Dresden und Hamburg in die Nordsee.":
    "Elle coule de Tchéquie vers la mer du Nord, en passant par Dresde et Hambourg.",
  "Die Donau": "Le Danube",
  "Der einzige große Fluss, der nach Osten fließt — bis ins Schwarze Meer.":
    "Le seul grand fleuve à couler vers l'est — jusqu'à la mer Noire.",
  "Bodensee": "Le lac de Constance",
  "Der größte See, im Dreiländereck mit Österreich und der Schweiz.":
    "Le plus grand lac, au point de rencontre des frontières avec l'Autriche et la Suisse.",
  "Die Staatssymbole": "Les symboles de l'État",
  "Die **Flagge** ist **schwarz-rot-gold**, in dieser Reihenfolge von oben nach unten. Die Farben stehen seit dem 19. Jahrhundert für Einheit und Freiheit. Das Wappentier ist der **Bundesadler**.":
    "Le **drapeau** est **noir-rouge-or**, dans cet ordre de haut en bas. Depuis le XIXe siècle, ces couleurs symbolisent l'unité et la liberté. L'emblème animal est le **Bundesadler**, l'aigle fédéral.",
  "Die Farbe heißt **Gold**, nicht Gelb — und die Reihenfolge ist von oben nach unten schwarz, rot, gold. Beide Details werden abgefragt.":
    "La couleur s'appelle **or**, non jaune — et l'ordre, de haut en bas, est noir, rouge, or. Les deux détails sont demandés.",
  "Die Nationalhymne": "L'hymne national",
  "Gesungen wird die **dritte Strophe** des Liedes der Deutschen von Hoffmann von Fallersleben, die mit **„Einigkeit und Recht und Freiheit“** beginnt. Nur diese Strophe ist Nationalhymne; die erste wird nicht gesungen.":
    "On chante la **troisième strophe** du Lied der Deutschen de Hoffmann von Fallersleben, qui commence par **« Einigkeit und Recht und Freiheit »** — unité, droit et liberté. Seule cette strophe est l'hymne ; la première ne se chante pas.",
  "Berlin · Hamburg · München · Köln · Zugspitze · Rhein · Elbe · Donau · Bodensee · Bundesadler.":
    "Berlin · Hambourg · Munich · Cologne · Zugspitze · Rhin · Elbe · Danube · lac de Constance · Bundesadler.",
  "Rund 84 Millionen Einwohner · 16 Bundesländer · 9 Nachbarländer · Zugspitze 2.962 m · 3. Strophe als Hymne.":
    "Environ 84 millions d'habitants · 16 Länder · 9 pays voisins · Zugspitze 2 962 m · troisième strophe comme hymne.",
  "schwarz-rot-gold · Bundesadler · Norddeutsches Tiefland · Mittelgebirge · Alpenvorland.":
    "Noir-rouge-or · Bundesadler · plaine d'Allemagne du Nord · moyennes montagnes · avant-pays alpin.",
  "In einem Satz: Flach im Norden, hoch im Süden, schwarz-rot-gold auf der Flagge und die dritte Strophe in der Hymne.":
    "En une phrase : plat au nord, haut au sud, noir-rouge-or sur le drapeau et la troisième strophe dans l'hymne.",

  // ── Religion ────────────────────────────────────────────────────────────
  "Religion und Weltanschauung": "Religion et convictions",
  "In Deutschland herrscht **Religionsfreiheit**: Jeder darf glauben, was er möchte, die Religion wechseln oder gar keiner Gemeinschaft angehören. Das steht in Artikel 4 des Grundgesetzes.":
    "En Allemagne règne la **liberté de religion** : chacun peut croire ce qu'il veut, changer de religion ou n'appartenir à aucune communauté. C'est l'article 4 du Grundgesetz.",
  "Was Religionsfreiheit bedeutet": "Ce que signifie la liberté de religion",
  "Frei glauben": "Croire librement",
  "Jede Religion darf ausgeübt werden, solange dabei keine Gesetze gebrochen werden.":
    "Toute religion peut être pratiquée, tant qu'aucune loi n'est enfreinte.",
  "Frei nicht glauben": "Ne pas croire, librement",
  "Niemand muss einer Religion angehören. Auch der Austritt ist jederzeit möglich.":
    "Nul n'est tenu d'appartenir à une religion. On peut aussi la quitter à tout moment.",
  "Kein Zwang": "Aucune contrainte",
  "Niemand darf zu einem Glauben gedrängt werden — auch nicht in der eigenen Familie.":
    "Nul ne peut être poussé vers une croyance — pas même au sein de sa propre famille.",
  "Keine Staatsreligion": "Pas de religion d'État",
  "Der Staat ist weltanschaulich neutral und bevorzugt keine Gemeinschaft.":
    "L'État est neutre en matière de convictions et ne favorise aucune communauté.",
  "Religionsfreiheit hebt keine Gesetze auf. Wenn religiöse Vorstellungen und staatliches Recht in Konflikt geraten — etwa bei Zwangsheirat, Gewalt in der Familie oder der Schulpflicht — gilt das **staatliche Recht**. Danach wird im Test gezielt gefragt.":
    "La liberté de religion n'abroge aucune loi. Quand des convictions religieuses entrent en conflit avec le droit de l'État — mariage forcé, violences familiales ou obligation scolaire — c'est le **droit de l'État** qui prime. Le test interroge délibérément là-dessus.",
  "Religionen in Deutschland": "Les religions en Allemagne",
  "Die größten Gruppen sind die **katholische** und die **evangelische** Kirche. Etwa die Hälfte der Bevölkerung gehört heute keiner Religionsgemeinschaft an. Der **Islam** ist die größte nichtchristliche Religion; daneben gibt es jüdische Gemeinden, Buddhisten, Hindus und viele weitere.":
    "Les groupes les plus importants sont l'Église **catholique** et l'Église **protestante**. Environ la moitié de la population n'appartient aujourd'hui à aucune communauté religieuse. L'**islam** est la première religion non chrétienne ; il existe aussi des communautés juives, des bouddhistes, des hindous et bien d'autres.",
  "Religion im Alltag": "La religion au quotidien",
  "Kirchensteuer": "Impôt d'Église",
  "Mitglieder der Kirchen zahlen sie über das Finanzamt. Wer austritt, zahlt sie nicht mehr.":
    "Les membres des Églises l'acquittent par le fisc. Qui quitte l'Église cesse de le payer.",
  "Religionsunterricht": "Cours de religion",
  "An staatlichen Schulen ein reguläres Fach. Man kann sich abmelden und stattdessen Ethik belegen.":
    "Une matière ordinaire dans les écoles publiques. On peut s'en dispenser et suivre l'éthique à la place.",
  "Feiertage": "Jours fériés",
  "Viele gesetzliche Feiertage sind christlichen Ursprungs — sie gelten für alle, unabhängig vom Glauben.":
    "Beaucoup de jours fériés légaux sont d'origine chrétienne — ils valent pour tous, quelle que soit la croyance.",
  "Kopftuch und Symbole": "Foulard et symboles",
  "Religiöse Kleidung ist im Alltag grundsätzlich erlaubt. Für bestimmte Staatsämter gibt es Sonderregeln.":
    "Le vêtement religieux est en principe autorisé au quotidien. Des règles particulières s'appliquent à certaines fonctions publiques.",
  "Artikel 4 Grundgesetz · katholische und evangelische Kirche · Zentralrat der Juden · Ethikunterricht.":
    "Article 4 du Grundgesetz · Églises catholique et protestante · Zentralrat der Juden · cours d'éthique.",
  "Rund die Hälfte ohne Religionszugehörigkeit · zwei große christliche Kirchen · Islam als größte nichtchristliche Religion.":
    "Environ la moitié sans appartenance religieuse · deux grandes Églises chrétiennes · l'islam comme première religion non chrétienne.",
  "Religionsfreiheit · weltanschauliche Neutralität · Kirchensteuer · Kirchenaustritt · Toleranz.":
    "Liberté de religion · neutralité en matière de convictions · impôt d'Église · sortie de l'Église · tolérance.",
  "In einem Satz: Glauben ist frei, Nichtglauben auch — aber kein Glaube steht über dem Gesetz.":
    "En une phrase : croire est libre, ne pas croire aussi — mais aucune croyance ne prime sur la loi.",

  // ── Family and living together ──────────────────────────────────────────
  "Familie und Zusammenleben": "Famille et vie commune",
  "Wie Menschen in Deutschland zusammenleben, ist rechtlich klar geregelt — und diese Regeln gehören zu den wichtigsten Testinhalten überhaupt, weil sie den Alltag jedes Einzelnen berühren.":
    "La manière dont on vit ensemble en Allemagne est clairement encadrée par le droit — et ces règles comptent parmi les contenus les plus importants du test, parce qu'elles touchent au quotidien de chacun.",
  "Gleichberechtigung": "Égalité des droits",
  "**Männer und Frauen sind gleichberechtigt** (Artikel 3 Grundgesetz). Das gilt im Beruf, im Recht und in der Familie. Eine Frau entscheidet selbst über ihre Arbeit, ihr Geld, ihre Kleidung und ihre Beziehungen — dafür braucht sie niemandes Erlaubnis.":
    "**Les hommes et les femmes ont les mêmes droits** (article 3 du Grundgesetz). Cela vaut au travail, en droit et dans la famille. Une femme décide seule de son travail, de son argent, de ses vêtements et de ses relations — elle n'a besoin de la permission de personne.",
  "**Gewalt in der Familie ist eine Straftat** — auch zwischen Eheleuten, auch gegenüber Kindern. Die Polizei kann den Gewalttätigen aus der Wohnung weisen. Die Frauenhäuser und das Hilfetelefon helfen rund um die Uhr und vertraulich.":
    "**La violence dans la famille est un délit** — y compris entre époux, y compris envers les enfants. La police peut expulser l'auteur du logement. Les foyers pour femmes et la ligne d'écoute aident jour et nuit, en toute confidentialité.",
  "Ehe und Partnerschaft": "Mariage et vie de couple",
  "Freiwillig": "Librement consenti",
  "Niemand darf zur Ehe gezwungen werden. **Zwangsheirat ist strafbar.**":
    "Nul ne peut être contraint au mariage. **Le mariage forcé est punissable.**",
  "Ab 18": "À partir de 18 ans",
  "Heiraten darf man mit der Volljährigkeit. Kinderehen werden in Deutschland nicht anerkannt.":
    "On peut se marier à la majorité. Les mariages d'enfants ne sont pas reconnus en Allemagne.",
  "Nur eine Ehe": "Un seul mariage",
  "Mehrehe ist verboten. Wer verheiratet ist, kann nicht zusätzlich heiraten.":
    "La polygamie est interdite. Qui est marié ne peut pas se marier en plus.",
  "Gleichgeschlechtlich": "Couples de même sexe",
  "Seit **2017** dürfen auch gleichgeschlechtliche Paare heiraten.":
    "Depuis **2017**, les couples de même sexe peuvent aussi se marier.",
  "Scheidung": "Divorce",
  "Eine Ehe kann geschieden werden; in der Regel nach einem **Trennungsjahr**. Über die Scheidung entscheidet ein **Familiengericht**. Geregelt werden dabei auch Unterhalt und das Sorgerecht für gemeinsame Kinder.":
    "Un mariage peut être dissous ; en règle générale après une **année de séparation**. Le divorce est prononcé par un **Familiengericht**, le tribunal des affaires familiales. Y sont également réglées la pension alimentaire et l'autorité parentale sur les enfants communs.",
  "Kinder und Eltern": "Enfants et parents",
  "Elternrecht und -pflicht": "Droit et devoir des parents",
  "Eltern erziehen ihre Kinder — der Staat greift nur ein, wenn das Kindeswohl gefährdet ist.":
    "Les parents élèvent leurs enfants — l'État n'intervient que si le bien de l'enfant est menacé.",
  "Gewaltfreie Erziehung": "Une éducation sans violence",
  "Kinder haben ein **Recht auf gewaltfreie Erziehung**. Körperliche Strafen sind verboten.":
    "Les enfants ont **droit à une éducation sans violence**. Les châtiments corporels sont interdits.",
  "Schulpflicht": "Obligation scolaire",
  "Kinder müssen zur Schule gehen. Das gilt für Mädchen genauso wie für Jungen.":
    "Les enfants doivent aller à l'école. Cela vaut pour les filles comme pour les garçons.",
  "Jugendamt": "Jugendamt",
  "Es hilft Familien in schwierigen Lagen und schützt Kinder vor Vernachlässigung und Gewalt.":
    "Il aide les familles en difficulté et protège les enfants de la négligence et de la violence.",
  "Vielfalt der Lebensformen": "La diversité des formes de vie",
  "Familie ist heute vielfältig: Ehepaare mit Kindern, Alleinerziehende, unverheiratete Paare, Patchwork-Familien, gleichgeschlechtliche Paare. Alle diese Formen sind gesellschaftlich anerkannt.":
    "La famille est aujourd'hui plurielle : couples mariés avec enfants, parents seuls, couples non mariés, familles recomposées, couples de même sexe. Toutes ces formes sont socialement reconnues.",
  "Standesamt · Familiengericht · Jugendamt · Frauenhaus · Hilfetelefon Gewalt gegen Frauen.":
    "Standesamt · Familiengericht · Jugendamt · foyer pour femmes · ligne d'écoute violences faites aux femmes.",
  "Heiraten ab 18 · Trennungsjahr vor der Scheidung · gleichgeschlechtliche Ehe seit 2017 · Artikel 3 Gleichberechtigung.":
    "Mariage à partir de 18 ans · année de séparation avant le divorce · mariage entre personnes de même sexe depuis 2017 · article 3 égalité des droits.",
  "Gleichberechtigung · Zwangsheirat · gewaltfreie Erziehung · Sorgerecht · Unterhalt · Kindeswohl.":
    "Égalité des droits · mariage forcé · éducation sans violence · autorité parentale · pension alimentaire · bien de l'enfant.",
  "In einem Satz: Zusammenleben ist frei gestaltbar, aber Zwang und Gewalt sind es nie — und das gilt innerhalb der Familie genau wie außerhalb.":
    "En une phrase : la vie commune se construit librement, mais jamais par la contrainte ni la violence — et cela vaut dans la famille comme au-dehors.",

  // ── Education and training ──────────────────────────────────────────────
  "Bildung und Ausbildung": "Éducation et formation",
  "Bildung ist **Ländersache** — deshalb unterscheiden sich Schulformen, Lehrpläne und Ferien von Bundesland zu Bundesland. Gemeinsam ist allen die **Schulpflicht**.":
    "L'éducation **relève des Länder** — d'où des types d'écoles, des programmes et des vacances qui diffèrent d'un Land à l'autre. Ce que tous partagent, c'est l'**obligation scolaire**.",
  "Die Schulpflicht": "L'obligation scolaire",
  "Alle Kinder müssen zur Schule gehen, in der Regel ab dem sechsten Lebensjahr und für mindestens neun Jahre. Sie gilt für **Mädchen und Jungen gleichermaßen** — auch für den Sport- und Schwimmunterricht. Eltern können sie nicht durch Unterricht zu Hause ersetzen.":
    "Tous les enfants doivent aller à l'école, en règle générale à partir de six ans et pour neuf ans au moins. Elle vaut **pour les filles comme pour les garçons** — y compris pour le sport et la natation. Les parents ne peuvent pas la remplacer par un enseignement à domicile.",
  "Häufige Testfrage: Ein Vater will seine Tochter nicht am Schwimmunterricht teilnehmen lassen. Die Schulpflicht gilt trotzdem — die Schule sucht nach praktischen Lösungen, aber das Kind bleibt nicht einfach weg.":
    "Question fréquente au test : un père ne veut pas que sa fille aille à la natation. L'obligation scolaire s'applique quand même — l'école cherche des solutions pratiques, mais l'enfant ne reste pas simplement à la maison.",
  "Der Weg durch das Schulsystem": "Le parcours dans le système scolaire",
  "Kita": "Kita",
  "Kein Zwang, aber ein Rechtsanspruch ab dem ersten Geburtstag. Gut für die Sprache.":
    "Pas d'obligation, mais un droit garanti dès le premier anniversaire. Excellent pour la langue.",
  "Grundschule": "École primaire",
  "Meist vier Jahre, in einigen Ländern sechs.":
    "Quatre ans le plus souvent, six dans certains Länder.",
  "Weiterführende Schule": "Établissement du secondaire",
  "Hauptschule, Realschule, Gymnasium oder Gesamtschule — je nach Land unterschiedlich benannt.":
    "Hauptschule, Realschule, Gymnasium ou Gesamtschule — les noms varient selon le Land.",
  "Abschlüsse": "Diplômes",
  "Hauptschulabschluss, Mittlere Reife oder **Abitur**. Das Abitur berechtigt zum Studium.":
    "Hauptschulabschluss, Mittlere Reife ou **Abitur**. L'Abitur ouvre l'accès aux études supérieures.",
  "Die duale Ausbildung": "La formation en alternance",
  "Eine deutsche Besonderheit: Die Berufsausbildung findet an **zwei Orten gleichzeitig** statt — im **Betrieb** und in der **Berufsschule**. Sie dauert meist zwei bis dreieinhalb Jahre, und die Auszubildenden bekommen von Anfang an eine Vergütung. Am Ende steht eine Prüfung vor der Industrie- und Handelskammer oder der Handwerkskammer.":
    "Une particularité allemande : l'apprentissage se fait **en deux lieux à la fois** — dans l'**entreprise** et à la **Berufsschule**. Il dure le plus souvent de deux à trois ans et demi, et les apprentis sont rémunérés dès le début. Il s'achève par un examen devant la chambre de commerce et d'industrie ou la chambre des métiers.",
  "Studium und Weiterbildung": "Études et formation continue",
  "Universität": "Université",
  "Wissenschaftlich ausgerichtet, mit Promotionsrecht.":
    "À vocation scientifique, habilitée à délivrer le doctorat.",
  "Fachhochschule": "Fachhochschule",
  "Praxisnäher, oft mit Pflichtpraktika in Unternehmen.":
    "Plus proche de la pratique, souvent avec des stages obligatoires en entreprise.",
  "BAföG": "BAföG",
  "Staatliche Unterstützung für Studierende und Schüler, deren Eltern das Studium nicht finanzieren können.":
    "Aide de l'État aux étudiants et élèves dont les parents ne peuvent financer les études.",
  "Volkshochschule": "Volkshochschule",
  "Günstige Kurse für alle — Sprachen, Computer, Integrationskurse, auch der Test „Leben in Deutschland“.":
    "Des cours peu coûteux pour tous — langues, informatique, cours d'intégration, et aussi le test « Leben in Deutschland ».",
  "Abschlüsse aus dem Ausland": "Diplômes obtenus à l'étranger",
  "Wer im Ausland einen Beruf gelernt hat, kann seinen Abschluss **anerkennen** lassen. Für viele Berufe — etwa in der Pflege oder im Handwerk — ist das der Schlüssel zum Arbeitsmarkt. Beratungsstellen helfen beim Verfahren.":
    "Qui a appris un métier à l'étranger peut faire **reconnaître** son diplôme. Pour beaucoup de professions — dans le soin ou l'artisanat par exemple — c'est la clé du marché du travail. Des services de conseil accompagnent la démarche.",
  "Grundschule · Gymnasium · Berufsschule · Industrie- und Handelskammer · Handwerkskammer · Volkshochschule · BAföG.":
    "Grundschule · Gymnasium · Berufsschule · chambre de commerce et d'industrie · chambre des métiers · Volkshochschule · BAföG.",
  "Schulpflicht ab 6 Jahren, mindestens 9 Jahre · duale Ausbildung 2 bis 3,5 Jahre · Kita-Anspruch ab 1 Jahr.":
    "Obligation scolaire à partir de 6 ans, 9 ans au moins · formation en alternance de 2 à 3,5 ans · droit à une place en Kita dès 1 an.",
  "Ländersache · Schulpflicht · duale Ausbildung · Abitur · Mittlere Reife · Anerkennung ausländischer Abschlüsse.":
    "Compétence des Länder · obligation scolaire · formation en alternance · Abitur · Mittlere Reife · reconnaissance des diplômes étrangers.",
  "In einem Satz: Schule ist Pflicht und Ländersache, und die duale Ausbildung verbindet Betrieb und Berufsschule — ein Modell, um das Deutschland beneidet wird.":
    "En une phrase : l'école est obligatoire et relève des Länder, et la formation en alternance associe l'entreprise et l'école professionnelle — un modèle qu'on envie à l'Allemagne.",

  // ── Work ────────────────────────────────────────────────────────────────
  "Arbeit und Beruf": "Travail et métier",
  "Das deutsche Arbeitsrecht schützt Beschäftigte — und wer seine Rechte kennt, gerät seltener in Schwierigkeiten. Im Test geht es um die Grundzüge: Vertrag, Kündigung, Mitbestimmung, Lohn.":
    "Le droit du travail allemand protège les salariés — et qui connaît ses droits s'expose moins aux ennuis. Le test en aborde les grandes lignes : contrat, licenciement, cogestion, salaire.",
  "Der Arbeitsvertrag": "Le contrat de travail",
  "Er regelt Aufgaben, Arbeitszeit, Lohn und Urlaub. **Lass dir den Vertrag immer schriftlich geben** und unterschreibe nichts, was du nicht verstanden hast. Schwarzarbeit — Arbeit ohne Anmeldung und ohne Sozialabgaben — ist strafbar und lässt dich ohne jeden Schutz zurück.":
    "Il fixe les tâches, le temps de travail, le salaire et les congés. **Exigez toujours un contrat écrit** et ne signez rien que vous n'ayez compris. Le travail au noir — sans déclaration ni cotisations — est punissable et vous laisse sans la moindre protection.",
  "Deine wichtigsten Rechte": "Vos droits essentiels",
  "Mindestlohn": "Salaire minimum",
  "Es gibt einen gesetzlichen Mindestlohn pro Stunde, der regelmäßig angepasst wird. Weniger darf niemand zahlen.":
    "Il existe un salaire minimum horaire légal, revalorisé régulièrement. Nul ne peut payer moins.",
  "Urlaub": "Congés",
  "Mindestens **20 Tage** im Jahr bei einer Fünf-Tage-Woche. Viele Verträge geben mehr.":
    "Au moins **20 jours** par an pour une semaine de cinq jours. Beaucoup de contrats en accordent davantage.",
  "Lohnfortzahlung": "Maintien du salaire",
  "Bei Krankheit zahlt der Arbeitgeber bis zu **sechs Wochen** weiter. Danach übernimmt die Krankenkasse.":
    "En cas de maladie, l'employeur continue de payer jusqu'à **six semaines**. Ensuite, la caisse d'assurance maladie prend le relais.",
  "Kündigungsschutz": "Protection contre le licenciement",
  "Kündigungen brauchen einen Grund und müssen **schriftlich** erfolgen. Fristen sind einzuhalten.":
    "Un licenciement doit être motivé et notifié **par écrit**. Les délais doivent être respectés.",
  "Wer sich gegen eine Kündigung wehren will, hat nur **drei Wochen** Zeit, um beim Arbeitsgericht Klage zu erheben. Diese Frist ist kurz und wird oft verpasst.":
    "Qui veut contester un licenciement n'a que **trois semaines** pour saisir le tribunal du travail. Ce délai est court et souvent manqué.",
  "Mitbestimmung": "La cogestion",
  "Betriebsrat": "Comité d'entreprise",
  "Von der Belegschaft gewählt. Er redet bei Arbeitszeiten, Einstellungen und Kündigungen mit.":
    "Élu par le personnel. Il a voix au chapitre sur les horaires, les embauches et les licenciements.",
  "Gewerkschaften": "Syndicats",
  "Sie vertreten Arbeitnehmer und handeln **Tarifverträge** über Löhne und Arbeitszeiten aus.":
    "Ils représentent les salariés et négocient les **conventions collectives** sur les salaires et le temps de travail.",
  "Streikrecht": "Droit de grève",
  "Streiks sind erlaubt, wenn eine Gewerkschaft dazu aufruft. Niemand darf deswegen gekündigt werden.":
    "La grève est licite lorsqu'un syndicat y appelle. Nul ne peut être licencié pour cela.",
  "Arbeitgeberverbände": "Organisations patronales",
  "Sie sind die Gegenseite in den Tarifverhandlungen.":
    "Elles sont l'autre partie dans les négociations collectives.",
  "Vom Brutto zum Netto": "Du brut au net",
  "Vom **Bruttolohn** gehen **Lohnsteuer** und **Sozialabgaben** ab; was übrig bleibt, ist das **Netto** auf dem Konto. Die Steuerklasse hängt von der Lebenssituation ab. Einmal im Jahr kann man eine **Steuererklärung** abgeben — häufig gibt es Geld zurück.":
    "Du **salaire brut** sont retranchés l'**impôt sur le salaire** et les **cotisations sociales** ; ce qui reste est le **net** sur le compte. La classe d'imposition dépend de la situation familiale. Une fois par an, on peut faire une **déclaration de revenus** — souvent avec un remboursement à la clé.",
  "Betriebsrat · Gewerkschaft · Arbeitsgericht · Agentur für Arbeit · Finanzamt · Tarifvertrag.":
    "Comité d'entreprise · syndicat · tribunal du travail · Agentur für Arbeit · Finanzamt · convention collective.",
  "Mindestens 20 Urlaubstage · 6 Wochen Lohnfortzahlung · 3 Wochen Frist für die Kündigungsschutzklage.":
    "Au moins 20 jours de congés · 6 semaines de maintien du salaire · 3 semaines pour contester un licenciement.",
  "Arbeitsvertrag · Mindestlohn · Kündigungsschutz · Schwarzarbeit · brutto und netto · Steuerklasse · Streikrecht.":
    "Contrat de travail · salaire minimum · protection contre le licenciement · travail au noir · brut et net · classe d'imposition · droit de grève.",
  "In einem Satz: Vertrag schriftlich, Kündigung schriftlich, drei Wochen zum Klagen — und ohne Anmeldung gibt es keinen Schutz.":
    "En une phrase : contrat par écrit, licenciement par écrit, trois semaines pour agir — et sans déclaration, aucune protection.",

  // ── Housing and everyday life ───────────────────────────────────────────
  "Wohnen und Alltag": "Logement et vie quotidienne",
  "Der deutsche Alltag hat geschriebene und ungeschriebene Regeln. Die geschriebenen kommen im Test vor; die ungeschriebenen ersparen Ärger mit den Nachbarn.":
    "Le quotidien allemand a des règles écrites et d'autres non écrites. Les premières figurent au test ; les secondes évitent les ennuis avec les voisins.",
  "Die Wohnung": "Le logement",
  "Mietvertrag": "Bail",
  "Schriftlich. Er regelt Miete, Nebenkosten, Kündigungsfristen und was in der Wohnung erlaubt ist.":
    "Par écrit. Il fixe le loyer, les charges, les délais de préavis et ce qui est permis dans le logement.",
  "Kaution": "Dépôt de garantie",
  "Höchstens **drei Monatsmieten**. Du bekommst sie zurück, wenn die Wohnung ordentlich übergeben wird.":
    "Au maximum **trois mois de loyer**. Il vous est restitué si le logement est rendu en bon état.",
  "Nebenkosten": "Charges",
  "Heizung, Wasser, Müll. Einmal im Jahr wird abgerechnet — mit Nachzahlung oder Guthaben.":
    "Chauffage, eau, ordures. Le décompte se fait une fois par an — avec un complément à payer ou un avoir.",
  "Mieterschutz": "Protection du locataire",
  "Der Vermieter darf nicht einfach kündigen und nicht ohne Ankündigung die Wohnung betreten.":
    "Le bailleur ne peut pas résilier sans motif ni entrer dans le logement sans prévenir.",
  "Innerhalb von zwei Wochen nach dem Umzug musst du dich beim **Einwohnermeldeamt anmelden**. Diese **Meldepflicht** ist eine typische Testfrage — und wer sie versäumt, riskiert ein Bußgeld.":
    "Dans les deux semaines suivant l'emménagement, vous devez vous **déclarer à l'Einwohnermeldeamt**. Cette **obligation de déclaration** est une question de test typique — et l'oublier expose à une amende.",
  "Ruhe und Rücksicht": "Calme et égards",
  "Zwischen **22 und 6 Uhr** gilt **Nachtruhe**, ebenso meist mittags und den ganzen **Sonntag**. Laute Musik, Bohren oder Waschmaschinen sind dann tabu. **Mülltrennung** ist Pflicht: Papier, Verpackungen, Bioabfall, Restmüll und Glas nach Farben. Auf Flaschen liegt oft **Pfand**, das man im Laden zurückbekommt.":
    "Entre **22 h et 6 h** s'applique le **repos nocturne**, de même en général à la mi-journée et tout le **dimanche**. Musique forte, perceuse ou machine à laver sont alors exclues. Le **tri des déchets** est obligatoire : papier, emballages, biodéchets, ordures résiduelles et verre par couleur. Les bouteilles portent souvent une **consigne**, récupérée en magasin.",
  "Behörden und Papiere": "Administrations et papiers",
  "Bürgeramt": "Bürgeramt",
  "An- und Ummeldung, Ausweis, Führungszeugnis.":
    "Déclaration de domicile et changement d'adresse, carte d'identité, extrait de casier judiciaire.",
  "Ausländerbehörde": "Ausländerbehörde",
  "Aufenthaltstitel, Verlängerungen, Einbürgerung.":
    "Titre de séjour, renouvellements, naturalisation.",
  "Finanzamt": "Finanzamt",
  "Steuer-Identifikationsnummer und Steuererklärung.":
    "Numéro d'identification fiscale et déclaration de revenus.",
  "Termine": "Rendez-vous",
  "Fast überall nötig und oft Wochen im Voraus zu buchen. Pünktlichkeit wird erwartet.":
    "Nécessaires presque partout et à réserver souvent des semaines à l'avance. La ponctualité est attendue.",
  "Unterwegs": "Se déplacer",
  "Im Nahverkehr braucht man **vor dem Einsteigen** ein gültiges Ticket; Kontrollen sind unangekündigt und Schwarzfahren kostet. Fahrräder gehören auf den Radweg, nicht auf den Gehweg. Wer Auto fährt, braucht einen in Deutschland gültigen **Führerschein** — ausländische Führerscheine müssen je nach Herkunftsland nach einer Frist umgeschrieben werden.":
    "Dans les transports en commun, il faut un titre valable **avant de monter** ; les contrôles sont inopinés et la fraude coûte cher. Les vélos roulent sur la piste cyclable, pas sur le trottoir. Pour conduire, il faut un **permis** valable en Allemagne — selon le pays d'origine, les permis étrangers doivent être échangés au bout d'un certain délai.",
  "Einwohnermeldeamt · Bürgeramt · Ausländerbehörde · Mieterverein · Verbraucherzentrale.":
    "Einwohnermeldeamt · Bürgeramt · Ausländerbehörde · association de locataires · centre de défense des consommateurs.",
  "Anmeldung innerhalb von 2 Wochen · Kaution höchstens 3 Monatsmieten · Nachtruhe 22 bis 6 Uhr.":
    "Déclaration sous 2 semaines · dépôt de garantie de 3 mois de loyer au maximum · repos nocturne de 22 h à 6 h.",
  "Meldepflicht · Kaution · Nebenkosten · Nachtruhe · Mülltrennung · Pfand · Kündigungsfrist.":
    "Obligation de déclaration · dépôt de garantie · charges · repos nocturne · tri des déchets · consigne · délai de préavis.",
  "In einem Satz: Anmelden, Müll trennen, nach 22 Uhr leise sein und Termine einhalten — damit ist der deutsche Alltag zur Hälfte gelernt.":
    "En une phrase : se déclarer, trier ses déchets, être silencieux après 22 h et tenir ses rendez-vous — le quotidien allemand est ainsi à moitié appris.",

  // ── Health and insurance ────────────────────────────────────────────────
  "Gesundheit und Versicherungen": "Santé et assurances",
  "In Deutschland ist die **Krankenversicherung Pflicht** — für alle. Wie das System funktioniert und wohin man im Notfall geht, gehört zum Alltagswissen, das der Test abfragt.":
    "En Allemagne, l'**assurance maladie est obligatoire** — pour tous. Le fonctionnement du système et la conduite à tenir en urgence font partie des savoirs quotidiens que le test évalue.",
  "Gesetzlich oder privat": "Publique ou privée",
  "Gesetzliche Krankenversicherung": "Assurance maladie publique",
  "Für die meisten Beschäftigten Pflicht. Der Beitrag richtet sich nach dem Einkommen. **Kinder und Ehepartner ohne eigenes Einkommen sind kostenlos mitversichert** — die Familienversicherung.":
    "Obligatoire pour la plupart des salariés. La cotisation dépend du revenu. **Les enfants et le conjoint sans revenu propre sont assurés gratuitement** — c'est la Familienversicherung.",
  "Private Krankenversicherung": "Assurance maladie privée",
  "Möglich für Selbstständige, Beamte und Gutverdiener. Der Beitrag richtet sich nach Alter und Gesundheitszustand, nicht nach dem Einkommen. Jede Person zahlt einzeln.":
    "Possible pour les indépendants, les fonctionnaires et les hauts revenus. La cotisation dépend de l'âge et de l'état de santé, non du revenu. Chacun paie pour soi.",
  "Die **Familienversicherung** ist eine beliebte Prüfungsfrage: In der gesetzlichen Kasse sind Kinder und nicht erwerbstätige Ehepartner beitragsfrei mitversichert. In der privaten gilt das nicht.":
    "La **Familienversicherung** est une question d'examen appréciée : dans la caisse publique, les enfants et le conjoint sans activité sont couverts sans cotisation. Dans le privé, ce n'est pas le cas.",
  "Zum Arzt gehen": "Aller chez le médecin",
  "Hausarzt": "Médecin traitant",
  "Die erste Anlaufstelle bei Beschwerden. Er überweist bei Bedarf zum Facharzt.":
    "Le premier interlocuteur en cas de troubles. Il oriente au besoin vers un spécialiste.",
  "Gesundheitskarte": "Carte d'assurance maladie",
  "Bei jedem Besuch vorzeigen. Ohne sie musst du unter Umständen selbst zahlen.":
    "À présenter à chaque visite. Sans elle, vous pourriez devoir payer vous-même.",
  "Krankschreibung": "Arrêt de travail",
  "Wer krank ist, meldet sich sofort beim Arbeitgeber. Ab wann ein Attest nötig ist, steht im Arbeitsvertrag.":
    "Qui est malade prévient immédiatement son employeur. À partir de quand un certificat est exigé figure dans le contrat de travail.",
  "Schweigepflicht": "Secret médical",
  "Ärzte dürfen nichts weitergeben — auch nicht an den Arbeitgeber. Der erfährt nur, dass du krank bist, nicht warum.":
    "Les médecins ne peuvent rien divulguer — pas même à l'employeur. Celui-ci apprend seulement que vous êtes malade, pas pourquoi.",
  "Notfälle": "Urgences",
  "Die **112** ist die Nummer für Notarzt und Feuerwehr, die **110** für die Polizei. Beide sind kostenlos und funktionieren von jedem Telefon. Außerhalb der Sprechzeiten hilft der **ärztliche Bereitschaftsdienst unter 116117**; in die Notaufnahme gehört man bei echten Notfällen.":
    "Le **112** est le numéro du SAMU et des pompiers, le **110** celui de la police. Les deux sont gratuits et fonctionnent depuis n'importe quel téléphone. En dehors des heures de consultation, le **service de garde médicale au 116117** prend le relais ; les urgences hospitalières sont réservées aux vraies urgences.",
  "**112 Feuerwehr und Notarzt, 110 Polizei.** Diese beiden Nummern gehören zum Pflichtwissen — und wer sie ohne Not wählt, macht sich strafbar.":
    "**112 pompiers et SAMU, 110 police.** Ces deux numéros font partie des connaissances obligatoires — et les composer sans nécessité est punissable.",
  "Weitere wichtige Versicherungen": "Autres assurances importantes",
  "Haftpflicht": "Responsabilité civile",
  "Zahlt Schäden, die du anderen zufügst. Freiwillig, aber dringend zu empfehlen.":
    "Elle couvre les dommages que vous causez à autrui. Facultative, mais vivement conseillée.",
  "Hausrat": "Assurance habitation",
  "Für Schäden am eigenen Besitz durch Feuer, Wasser oder Einbruch.":
    "Pour les dommages à vos biens causés par le feu, l'eau ou un cambriolage.",
  "Kfz-Haftpflicht": "Assurance auto au tiers",
  "Für jedes Auto **gesetzlich vorgeschrieben**. Ohne sie darf kein Fahrzeug fahren.":
    "**Obligatoire par la loi** pour toute voiture. Sans elle, aucun véhicule ne peut circuler.",
  "Berufsunfähigkeit": "Assurance invalidité professionnelle",
  "Sichert das Einkommen, wenn man den Beruf aus gesundheitlichen Gründen nicht mehr ausüben kann.":
    "Elle garantit le revenu si l'on ne peut plus exercer son métier pour raisons de santé.",
  "Krankenkasse · Gesundheitskarte · Hausarzt · Notaufnahme · ärztlicher Bereitschaftsdienst.":
    "Caisse d'assurance maladie · carte d'assuré · médecin traitant · urgences · service de garde médicale.",
  "**112** Notarzt und Feuerwehr · **110** Polizei · **116117** Bereitschaftsdienst · 6 Wochen Lohnfortzahlung.":
    "**112** SAMU et pompiers · **110** police · **116117** garde médicale · 6 semaines de maintien du salaire.",
  "Versicherungspflicht · Familienversicherung · Überweisung · Schweigepflicht · Haftpflicht · Kfz-Haftpflicht.":
    "Obligation d'assurance · Familienversicherung · lettre d'orientation · secret médical · responsabilité civile · assurance auto au tiers.",
  "In einem Satz: Versichert ist jeder, der Hausarzt ist die erste Tür, und 112 ist die Nummer, die man nie vergessen darf.":
    "En une phrase : tout le monde est assuré, le médecin traitant est la première porte, et le 112 est le numéro qu'on n'oublie jamais.",

  // ── Culture, festivals and media ────────────────────────────────────────
  "Kultur, Feste und Medien": "Culture, fêtes et médias",
  "Zum Schluss das, was Deutschland im Alltag ausmacht: die Feste im Jahreslauf, die Namen, die jeder kennt, und die Rolle der freien Presse.":
    "Pour finir, ce qui fait l'Allemagne au quotidien : les fêtes au fil de l'année, les noms que tout le monde connaît, et le rôle de la presse libre.",
  "Feiertage im Jahreslauf": "Les fêtes au fil de l'année",
  "Ostern": "Pâques",
  "Christliches Fest im Frühjahr. Karfreitag und Ostermontag sind bundesweit frei.":
    "Fête chrétienne du printemps. Le Vendredi saint et le lundi de Pâques sont fériés dans tout le pays.",
  "1. Mai": "1er mai",
  "**Tag der Arbeit** — Feiertag mit Gewerkschaftskundgebungen.":
    "**Fête du Travail** — jour férié avec rassemblements syndicaux.",
  "3. Oktober": "3 octobre",
  "**Tag der Deutschen Einheit**, der Nationalfeiertag.":
    "**Tag der Deutschen Einheit**, la fête nationale.",
  "Weihnachten": "Noël",
  "24. Dezember Heiligabend, 25. und 26. Dezember gesetzliche Feiertage. Davor die Adventszeit mit Weihnachtsmärkten.":
    "Le 24 décembre au soir, puis les 25 et 26 décembre fériés. Avant cela, l'Avent et ses marchés de Noël.",
  "Regional kommen weitere hinzu: **Karneval oder Fasching** vor allem im Rheinland und in Bayern, das **Oktoberfest** in München, **Schützenfeste** im Norden, das **Erntedankfest** im Herbst. Welche Feiertage gelten, entscheidet auch hier das Bundesland.":
    "S'y ajoutent des fêtes régionales : le **carnaval, dit Karneval ou Fasching**, surtout en Rhénanie et en Bavière, l'**Oktoberfest** à Munich, les **Schützenfeste** au nord, la **fête des moissons** en automne. Là encore, c'est le Land qui décide des jours fériés.",
  "Namen, die man kennt": "Des noms que l'on connaît",
  "Musik und Literatur": "Musique et littérature",
  "**Johann Sebastian Bach** und **Ludwig van Beethoven** in der Musik. **Johann Wolfgang von Goethe** und **Friedrich Schiller** in der Literatur; die **Brüder Grimm** sammelten die Märchen.":
    "**Johann Sebastian Bach** et **Ludwig van Beethoven** en musique. **Johann Wolfgang von Goethe** et **Friedrich Schiller** en littérature ; les **frères Grimm** ont recueilli les contes.",
  "Wissenschaft und Technik": "Sciences et techniques",
  "**Albert Einstein** in der Physik, **Johannes Gutenberg** mit dem Buchdruck, **Konrad Zuse** mit dem ersten Computer, **Carl Benz** mit dem Automobil.":
    "**Albert Einstein** en physique, **Johannes Gutenberg** pour l'imprimerie, **Konrad Zuse** pour le premier ordinateur, **Carl Benz** pour l'automobile.",
  "Freie Medien": "Des médias libres",
  "**Pressefreiheit** steht in Artikel 5 des Grundgesetzes: Medien dürfen die Regierung kritisieren, und **eine Zensur findet nicht statt**. Der **öffentlich-rechtliche Rundfunk** — ARD, ZDF und die Landesrundfunkanstalten — wird über den **Rundfunkbeitrag** jedes Haushalts finanziert, damit er von Staat und Werbekunden unabhängig bleibt.":
    "La **liberté de la presse** figure à l'article 5 du Grundgesetz : les médias peuvent critiquer le gouvernement, et **il n'y a pas de censure**. L'**audiovisuel public** — ARD, ZDF et les radiodiffuseurs régionaux — est financé par la **redevance** de chaque foyer, afin de rester indépendant de l'État et des annonceurs.",
  "Die Frage kommt in vielen Varianten: Darf eine Zeitung die Regierung kritisieren? **Ja.** In der Demokratie ist das ihre Aufgabe — genau darin unterscheidet sie sich von der DDR-Presse und der Gleichschaltung ab 1933.":
    "La question revient sous bien des formes : un journal peut-il critiquer le gouvernement ? **Oui.** En démocratie, c'est sa mission — et c'est précisément ce qui le distingue de la presse de RDA et de la Gleichschaltung à partir de 1933.",
  "Vereine und Ehrenamt": "Associations et bénévolat",
  "Deutschland ist ein Land der **Vereine**: Sport, Musik, Feuerwehr, Naturschutz, Nachbarschaftshilfe. Millionen Menschen engagieren sich **ehrenamtlich**, also unbezahlt. Für Zugezogene ist der Verein oft der einfachste Weg, Menschen kennenzulernen — und Deutsch zu üben.":
    "L'Allemagne est un pays d'**associations** : sport, musique, pompiers volontaires, protection de la nature, entraide de quartier. Des millions de personnes s'y engagent **bénévolement**, sans rémunération. Pour les nouveaux arrivants, l'association est souvent le moyen le plus simple de rencontrer des gens — et de pratiquer l'allemand.",
  "Sport": "Le sport",
  "**Fußball** ist die beliebteste Sportart; die Bundesliga spielt von August bis Mai, und die Nationalmannschaft wurde viermal Weltmeister — zuletzt **2014**. Populär sind außerdem Handball, Wintersport und Motorsport.":
    "Le **football** est le sport le plus populaire ; la Bundesliga se joue d'août à mai, et la sélection nationale a été quatre fois championne du monde — la dernière en **2014**. Sont également prisés le handball, les sports d'hiver et le sport automobile.",
  "Goethe · Schiller · Brüder Grimm · Bach · Beethoven · Einstein · Gutenberg · ARD und ZDF.":
    "Goethe · Schiller · les frères Grimm · Bach · Beethoven · Einstein · Gutenberg · ARD et ZDF.",
  "1. Mai Tag der Arbeit · 3. Oktober Nationalfeiertag · 25. und 26. Dezember Weihnachten · Fußball-Weltmeister zuletzt 2014.":
    "1er mai fête du Travail · 3 octobre fête nationale · 25 et 26 décembre Noël · dernier titre de champion du monde de football en 2014.",
  "Pressefreiheit · Zensurverbot · öffentlich-rechtlicher Rundfunk · Rundfunkbeitrag · Ehrenamt · Verein · Karneval.":
    "Liberté de la presse · interdiction de la censure · audiovisuel public · redevance · bénévolat · association · carnaval.",
  "In einem Satz: Feste sind regional, Medien sind frei, und wer Anschluss sucht, findet ihn im Verein.":
    "En une phrase : les fêtes sont régionales, les médias sont libres, et qui cherche à s'intégrer le fait dans une association.",

  // ── Chapter headings ────────────────────────────────────────────────────
  "Politik in der Demokratie": "La politique en démocratie",
  "Geschichte und Verantwortung": "Histoire et responsabilité",
  "Mensch und Gesellschaft": "L'individu et la société",

  // ── Les questions des leçons ──
  // Le texte des leçons se lisait en français depuis longtemps, mais le quiz
  // qui les ferme restait en allemand : la leçon changeait de langue à la
  // dernière carte. Ces 397 chaînes-là — la question, ses options et
  // l'explication — sont ce qui manquait.
  "Wie viele Fragen musst du im Einbürgerungstest richtig beantworten, um zu bestehen?":
    "Combien de questions faut-il réussir à l'Einbürgerungstest pour être reçu ?",
  "15 von 33": "15 sur 33",
  "17 von 33": "17 sur 33",
  "20 von 33": "20 sur 33",
  "25 von 33": "25 sur 33",
  "17 von 33 Fragen genügen. Du hast 60 Minuten Zeit, und wer nicht besteht, darf beliebig oft wiederholen.":
    "17 questions sur 33 suffisent. On dispose de 60 minutes, et qui échoue peut repasser autant de fois qu'il le veut.",
  "Wie lautet der erste Artikel des Grundgesetzes?":
    "Que dit le premier article du Grundgesetz ?",
  "Alle Menschen sind vor dem Gesetz gleich.": "Tous les hommes sont égaux devant la loi.",
  "Die Würde des Menschen ist unantastbar.": "La dignité de l'être humain est intangible.",
  "Deutschland ist ein demokratischer und sozialer Bundesstaat.":
    "L'Allemagne est un État fédéral démocratique et social.",
  "Jeder hat das Recht auf freie Meinungsäußerung.":
    "Chacun a le droit d'exprimer librement son opinion.",
  "Artikel 1 stellt die Menschenwürde an den Anfang. Die Gleichheit steht in Artikel 3, der Bundesstaat in Artikel 20, die Meinungsfreiheit in Artikel 5.":
    "L'article 1 place la dignité humaine en tête. L'égalité est à l'article 3, l'État fédéral à l'article 20, la liberté d'opinion à l'article 5.",
  "Was bedeutet die Ewigkeitsklausel im Grundgesetz?":
    "Que signifie la Ewigkeitsklausel du Grundgesetz ?",
  "Das Grundgesetz kann nie geändert werden": "Le Grundgesetz ne peut jamais être modifié",
  "Die Menschenwürde und der Kern der Grundrechte können nicht abgeschafft werden":
    "La dignité humaine et le noyau des droits fondamentaux ne peuvent pas être abolis",
  "Gesetze gelten unbefristet": "Les lois valent sans limite de durée",
  "Der Bundespräsident wird auf Lebenszeit gewählt": "Le Bundespräsident est élu à vie",
  "Das Grundgesetz ist änderbar — aber Artikel 1 und der Kern der Grundrechte sind es nicht, auch nicht mit einer Mehrheit im Parlament.":
    "Le Grundgesetz est modifiable — mais l'article 1 et le noyau des droits fondamentaux ne le sont pas, pas même avec une majorité au parlement.",
  "Welche drei Gewalten teilen sich in Deutschland die Staatsgewalt?":
    "Quels trois pouvoirs se partagent la puissance publique en Allemagne ?",
  "Bundestag, Bundesrat und Bundesregierung": "Bundestag, Bundesrat et Bundesregierung",
  "Legislative, Exekutive und Judikative": "Le législatif, l'exécutif et le judiciaire",
  "Bund, Länder und Gemeinden": "Le Bund, les Länder et les communes",
  "Regierung, Opposition und Presse": "Le gouvernement, l'opposition et la presse",
  "Gesetzgebung, Vollzug und Rechtsprechung. Bundestag und Bundesrat sind Teil der Legislative, die Regierung Teil der Exekutive.":
    "Faire la loi, l'exécuter, la dire. Le Bundestag et le Bundesrat font partie du législatif, le gouvernement de l'exécutif.",
  "Wer darf in Deutschland eine Partei verbieten?": "Qui peut interdire un parti en Allemagne ?",
  "Der Bundestag mit Zweidrittelmehrheit": "Le Bundestag à la majorité des deux tiers",
  "Das Bundesinnenministerium": "Le ministère fédéral de l'Intérieur",
  "Nur das Bundesverfassungsgericht in Karlsruhe. Dass keine Regierung ihre Gegner verbieten kann, ist genau der Punkt.":
    "Seul le Bundesverfassungsgericht, à Karlsruhe. Qu'aucun gouvernement ne puisse interdire ses adversaires, c'est précisément le point.",
  "Was bedeutet „Sozialstaat“?": "Que signifie « Sozialstaat » ?",
  "Der Staat sichert Menschen in Notlagen ab":
    "L'État protège ceux qui se trouvent en difficulté",
  "Alle verdienen gleich viel": "Tout le monde gagne la même chose",
  "Der Staat besitzt alle Betriebe": "L'État possède toutes les entreprises",
  "Soziale Netzwerke werden staatlich geprüft": "Les réseaux sociaux sont contrôlés par l'État",
  "Der Sozialstaat fängt auf, wer krank, arbeitslos, alt oder in Not ist — über Sozialversicherungen und staatliche Leistungen.":
    "L'État social rattrape celui qui est malade, au chômage, âgé ou dans le besoin — par les assurances sociales et les prestations publiques.",
  "Für wie viele Jahre wird der Bundestag gewählt?":
    "Pour combien d'années le Bundestag est-il élu ?",
  "Drei Jahre": "Trois ans",
  "Vier Jahre": "Quatre ans",
  "Sechs Jahre": "Six ans",
  "Vier Jahre. Fünf Jahre ist die Amtszeit des Bundespräsidenten — genau diese Verwechslung wird gern geprüft.":
    "Quatre ans. Cinq ans, c'est la durée du mandat du Bundespräsident — et c'est justement cette confusion que le test aime vérifier.",
  "Wer sitzt im Bundesrat?": "Qui siège au Bundesrat ?",
  "Direkt gewählte Abgeordnete": "Des députés élus directement",
  "Vertreter der 16 Landesregierungen": "Des représentants des 16 gouvernements de Land",
  "Die Bundesminister": "Les ministres fédéraux",
  "Vertreter der Städte und Gemeinden": "Des représentants des villes et des communes",
  "Der Bundesrat besteht aus Mitgliedern der Landesregierungen. Dadurch wirken die Länder an der Gesetzgebung des Bundes mit.":
    "Le Bundesrat est composé de membres des gouvernements des Länder. Les Länder participent ainsi à la législation fédérale.",
  "Ab wann gilt ein beschlossenes Gesetz?":
    "À partir de quand une loi votée s'applique-t-elle ?",
  "Sofort nach der Abstimmung im Bundestag": "Aussitôt après le vote au Bundestag",
  "Nach der Verkündung im Bundesgesetzblatt": "Après sa publication au Bundesgesetzblatt",
  "Nach der Zustimmung des Bundesverfassungsgerichts":
    "Après l'accord du Bundesverfassungsgericht",
  "Nach einer Volksabstimmung": "Après un référendum",
  "Erst die Veröffentlichung im Bundesgesetzblatt setzt ein Gesetz in Kraft — nach Abstimmung, gegebenenfalls Bundesrat und Ausfertigung durch den Bundespräsidenten.":
    "Seule la publication au Bundesgesetzblatt met une loi en vigueur — après le vote, le cas échéant le Bundesrat, et la signature du Bundespräsident.",
  "Wer wählt den Bundeskanzler?": "Qui élit le Bundeskanzler ?",
  "Das Volk direkt": "Le peuple, directement",
  "Der Bundestag": "Le Bundestag",
  "Die Bundesversammlung": "La Bundesversammlung",
  "Der Bundestag wählt den Kanzler auf Vorschlag des Bundespräsidenten. Die Bundesversammlung wählt den Bundespräsidenten — nicht den Kanzler.":
    "Le Bundestag élit le chancelier sur proposition du Bundespräsident. La Bundesversammlung élit le Bundespräsident — pas le chancelier.",
  "Wie lange dauert die Amtszeit des Bundespräsidenten?":
    "Combien de temps dure le mandat du Bundespräsident ?",
  "Acht Jahre": "Huit ans",
  "Fünf Jahre, einmal wiederwählbar. Der Bundestag dagegen wird für vier Jahre gewählt.":
    "Cinq ans, renouvelables une fois. Le Bundestag, lui, est élu pour quatre ans.",
  "Was ist ein konstruktives Misstrauensvotum?":
    "Qu'est-ce qu'une motion de censure constructive ?",
  "Der Bundestag stürzt den Kanzler und wählt zugleich einen Nachfolger":
    "Le Bundestag renverse le chancelier et élit en même temps un successeur",
  "Das Volk stimmt über den Kanzler ab": "Le peuple se prononce sur le chancelier",
  "Der Bundespräsident entlässt den Kanzler": "Le Bundespräsident révoque le chancelier",
  "Die Minister treten geschlossen zurück": "Les ministres démissionnent tous ensemble",
  "Abwahl nur mit gleichzeitiger Wahl eines Nachfolgers. Aus Weimar gelernt: Stürzen ohne Alternative soll nicht möglich sein.":
    "On ne destitue qu'en élisant en même temps un successeur. Leçon de Weimar : renverser sans solution de rechange ne doit pas être possible.",
  "Welche Stimme entscheidet bei der Bundestagswahl über die Stärke einer Partei?":
    "Quelle voix décide du poids d'un parti aux élections du Bundestag ?",
  "Die Erststimme": "La Erststimme",
  "Die Zweitstimme": "La Zweitstimme",
  "Beide zu gleichen Teilen": "Les deux à parts égales",
  "Es gibt nur eine Stimme": "Il n'y a qu'une seule voix",
  "Die Zweitstimme bestimmt, wie viele Sitze eine Partei bekommt. Die Erststimme wählt eine Person im Wahlkreis.":
    "La Zweitstimme détermine le nombre de sièges d'un parti. La Erststimme élit une personne dans la circonscription.",
  "Was bedeutet „geheime Wahl“?": "Que veut dire « scrutin secret » ?",
  "Der Wahltermin wird nicht bekannt gegeben": "La date du scrutin n'est pas annoncée",
  "Niemand darf erfahren, wie du gewählt hast": "Personne ne doit savoir comment vous avez voté",
  "Die Kandidaten sind unbekannt": "Les candidats sont inconnus",
  "Das Ergebnis bleibt geheim": "Le résultat reste secret",
  "Deine Wahlentscheidung ist deine Sache. Deshalb gibt es die Wahlkabine — niemand darf dir hineinschauen.":
    "Votre vote ne regarde que vous. C'est à cela que sert l'isoloir — personne n'a le droit d'y regarder.",
  "Ab welchem Alter darf man in Deutschland den Bundestag wählen?":
    "À partir de quel âge peut-on élire le Bundestag en Allemagne ?",
  "Ab 16 Jahren": "À partir de 16 ans",
  "Ab 18 Jahren": "À partir de 18 ans",
  "Ab 21 Jahren": "À partir de 21 ans",
  "Ab 25 Jahren": "À partir de 25 ans",
  "Ab 18. Bei manchen Kommunal- und Landtagswahlen liegt das Alter niedriger, bei der Bundestagswahl bleibt es bei 18.":
    "À partir de 18 ans. Pour certaines élections communales et régionales l'âge est plus bas ; pour le Bundestag il reste à 18 ans.",
  "Wie viele Bundesländer hat Deutschland?":
    "Combien l'Allemagne compte-t-elle de Bundesländer ?",
  // 12, 16 and 18 are answered by LIFE_IN_THE_UK_FR. Both tables are spread
  // into one object, so a second entry for the same key would lose one of
  // the two with no error anywhere — and the number reads the same either
  // way. Only 14, which that table does not have, belongs here.
  "14": "14",
  "16 seit der Wiedervereinigung 1990: die alten elf plus die fünf neuen Länder und das wiedervereinigte Berlin.":
    "16 depuis la réunification de 1990 : les onze anciens, les cinq nouveaux Länder et Berlin réunifié.",
  "Wer ist in Deutschland für die Schulen zuständig?":
    "Qui est compétent pour les écoles en Allemagne ?",
  "Der Bund": "Le Bund",
  "Die Bundesländer": "Les Bundesländer",
  "Die Gemeinden allein": "Les communes seules",
  "Bildung ist Ländersache. Deshalb unterscheiden sich Lehrpläne, Schulformen und Ferien von Land zu Land.":
    "L'éducation est l'affaire des Länder. C'est pourquoi les programmes, les types d'école et les vacances diffèrent d'un Land à l'autre.",
  "Welche drei Bundesländer sind Stadtstaaten?":
    "Quels trois Bundesländer sont des villes-États ?",
  "Berlin, Hamburg, Bremen": "Berlin, Hambourg, Brême",
  "Berlin, München, Köln": "Berlin, Munich, Cologne",
  "Hamburg, Frankfurt, Stuttgart": "Hambourg, Francfort, Stuttgart",
  "Bremen, Hannover, Leipzig": "Brême, Hanovre, Leipzig",
  "Berlin, Hamburg und Bremen sind zugleich Stadt und Bundesland. München, Köln und Frankfurt sind nur Städte.":
    "Berlin, Hambourg et Brême sont à la fois ville et Bundesland. Munich, Cologne et Francfort ne sont que des villes.",
  "Wo hat das Bundesverfassungsgericht seinen Sitz?": "Où siège le Bundesverfassungsgericht ?",
  "Berlin": "Berlin",
  "Karlsruhe": "Karlsruhe",
  "München": "Munich",
  "Leipzig": "Leipzig",
  "Karlsruhe. Bewusst nicht in der Hauptstadt — räumliche Distanz zur Politik gehört zur Unabhängigkeit.":
    "À Karlsruhe. Volontairement pas dans la capitale — la distance physique avec la politique fait partie de l'indépendance.",
  "Was bedeutet die Unschuldsvermutung?": "Que signifie la présomption d'innocence ?",
  "Wer sich nicht äußert, ist unschuldig": "Celui qui garde le silence est innocent",
  "Jeder gilt als unschuldig, bis ein Gericht ihn rechtskräftig verurteilt":
    "Chacun est présumé innocent jusqu'à ce qu'un tribunal le condamne définitivement",
  "Der Angeklagte muss seine Unschuld beweisen": "L'accusé doit prouver son innocence",
  "Bei Zweifeln entscheidet die Polizei": "En cas de doute, c'est la police qui tranche",
  "Beweisen muss die Anklage, nicht der Angeklagte. Bis zum rechtskräftigen Urteil gilt die Unschuldsvermutung.":
    "C'est à l'accusation de prouver, pas à l'accusé. Jusqu'au jugement définitif, la présomption d'innocence s'applique.",
  "Ein Nachbar schuldet dir Geld und zahlt nicht. Was ist richtig?":
    "Un voisin vous doit de l'argent et ne paie pas. Quelle est la bonne réponse ?",
  "Du darfst dir etwas aus seiner Wohnung nehmen": "Vous pouvez prendre quelque chose chez lui",
  "Du kannst vor Gericht klagen": "Vous pouvez saisir la justice",
  "Du darfst ihn festhalten, bis er zahlt": "Vous pouvez le retenir jusqu'à ce qu'il paie",
  "Du darfst sein Auto beschädigen": "Vous pouvez abîmer sa voiture",
  "Selbstjustiz ist strafbar, auch wenn die Forderung berechtigt ist. Der Weg führt über das Gericht.":
    "Se faire justice soi-même est punissable, même quand la créance est fondée. Le chemin passe par le tribunal.",
  "Welche gehört NICHT zu den fünf Sozialversicherungen?":
    "Laquelle ne fait PAS partie des cinq assurances sociales ?",
  "Hausratversicherung": "L'assurance habitation",
  "Die Hausratversicherung ist eine private Sache. Die fünf gesetzlichen sind Kranken-, Renten-, Arbeitslosen-, Pflege- und Unfallversicherung.":
    "L'assurance habitation est une affaire privée. Les cinq assurances légales sont l'assurance maladie, l'assurance vieillesse, l'assurance chômage, l'assurance dépendance et l'assurance accidents.",
  "Wer bezahlt die gesetzliche Unfallversicherung?": "Qui paie l'assurance accidents légale ?",
  "Arbeitgeber und Arbeitnehmer je zur Hälfte": "L'employeur et le salarié, à parts égales",
  "Der Arbeitgeber allein": "L'employeur seul",
  "Der Arbeitnehmer allein": "Le salarié seul",
  "Der Staat aus Steuermitteln": "L'État, sur les impôts",
  "Die Unfallversicherung ist die Ausnahme: Sie zahlt der Arbeitgeber allein. Bei den anderen vier teilen sich beide Seiten den Beitrag.":
    "L'assurance accidents est l'exception : elle est payée par le seul employeur. Pour les quatre autres, les deux parties se partagent la cotisation.",
  "Was besagt das Solidarprinzip?": "Que dit le principe de solidarité ?",
  "Alle zahlen den gleichen Betrag": "Tout le monde verse le même montant",
  "Beiträge richten sich nach dem Einkommen, Leistungen nach dem Bedarf":
    "Les cotisations suivent le revenu, les prestations le besoin",
  "Nur wer einzahlt, bekommt Hilfe": "Seul celui qui cotise reçoit de l'aide",
  "Der Staat zahlt alles aus Steuern": "L'État paie tout sur les impôts",
  "Wer mehr verdient, zahlt mehr — behandelt wird aber nach Bedarf, nicht nach Beitragshöhe.":
    "Qui gagne plus paie plus — mais on est soigné selon le besoin, pas selon le montant de la cotisation.",
  "In welchem Jahr wurde das Deutsche Kaiserreich gegründet?":
    "En quelle année l'Empire allemand a-t-il été fondé ?",
  "1848": "1848",
  "1871": "1871",
  "1888": "1888",
  "1871, nach dem Krieg gegen Frankreich. Bis dahin bestand Deutschland aus vielen Einzelstaaten.":
    "En 1871, après la guerre contre la France. Jusque-là, l'Allemagne était faite de nombreux États séparés.",
  "Ab wann durften Frauen in Deutschland wählen?":
    "À partir de quand les femmes ont-elles eu le droit de vote en Allemagne ?",
  "Seit 1871": "Depuis 1871",
  "Seit 1919": "Depuis 1919",
  "Seit 1949": "Depuis 1949",
  "Seit 1969": "Depuis 1969",
  "Das Frauenwahlrecht kam mit der Weimarer Republik 1919 — eine der wichtigsten Neuerungen der ersten deutschen Demokratie.":
    "Le droit de vote des femmes est venu avec la République de Weimar, en 1919 — l'une des nouveautés les plus importantes de la première démocratie allemande.",
  "Warum heißt die Weimarer Republik so?":
    "Pourquoi la République de Weimar porte-t-elle ce nom ?",
  "Weimar war die Hauptstadt": "Weimar était la capitale",
  "Die Verfassung wurde in Weimar beschlossen": "La constitution y a été adoptée",
  "Der erste Präsident stammte aus Weimar": "Le premier président venait de Weimar",
  "Das Parlament tagte dauerhaft in Weimar": "Le parlement y siégeait à demeure",
  "Die Nationalversammlung tagte 1919 in Weimar und beschloss dort die Verfassung. Hauptstadt blieb Berlin.":
    "L'Assemblée nationale a siégé à Weimar en 1919 et y a adopté la constitution. La capitale est restée Berlin.",
  "Wann begann der Zweite Weltkrieg?": "Quand la Seconde Guerre mondiale a-t-elle commencé ?",
  "Am 30. Januar 1933": "Le 30 janvier 1933",
  "Am 9. November 1938": "Le 9 novembre 1938",
  "Am 1. September 1939": "Le 1er septembre 1939",
  "Am 8. Mai 1945": "Le 8 mai 1945",
  "Mit dem deutschen Überfall auf Polen am 1. September 1939. Der 8. Mai 1945 ist das Kriegsende in Europa.":
    "Avec l'attaque allemande contre la Pologne, le 1er septembre 1939. Le 8 mai 1945 est la fin de la guerre en Europe.",
  "Was geschah in der Nacht vom 9. auf den 10. November 1938?":
    "Que s'est-il passé dans la nuit du 9 au 10 novembre 1938 ?",
  "Die Berliner Mauer fiel": "Le mur de Berlin est tombé",
  "Synagogen wurden angezündet und jüdische Geschäfte zerstört":
    "Des synagogues ont été incendiées et des commerces juifs détruits",
  "Der Zweite Weltkrieg begann": "La Seconde Guerre mondiale a commencé",
  "Das Grundgesetz trat in Kraft": "Le Grundgesetz est entré en vigueur",
  "Die Pogromnacht. Der Mauerfall fällt auf denselben Kalendertag — den 9. November 1989 — und wird deshalb gern verwechselt.":
    "La nuit de pogrom. La chute du Mur tombe le même jour du calendrier — le 9 novembre 1989 — d'où la confusion fréquente.",
  "Wer gehörte zur Widerstandsgruppe „Weiße Rose“?":
    "Qui faisait partie du groupe de résistance « la Rose blanche » ?",
  "Sophie und Hans Scholl": "Sophie et Hans Scholl",
  "Konrad Adenauer": "Konrad Adenauer",
  "Claus Schenk Graf von Stauffenberg": "Claus Schenk Graf von Stauffenberg",
  "Willy Brandt": "Willy Brandt",
  "Die Geschwister Scholl verteilten in München Flugblätter gegen das Regime und wurden 1943 hingerichtet. Stauffenberg gehörte zum militärischen Widerstand des 20. Juli 1944.":
    "Le frère et la sœur Scholl distribuaient à Munich des tracts contre le régime et furent exécutés en 1943. Stauffenberg appartenait à la résistance militaire du 20 juillet 1944.",
  "Ist es in Deutschland erlaubt, öffentlich zu behaupten, der Holocaust habe nie stattgefunden?":
    "Est-il permis en Allemagne d'affirmer publiquement que l'Holocauste n'a jamais eu lieu ?",
  "Ja, das ist Meinungsfreiheit": "Oui, c'est la liberté d'opinion",
  "Nein, das ist eine Straftat": "Non, c'est une infraction pénale",
  "Nur in wissenschaftlichen Texten": "Seulement dans des textes scientifiques",
  "Nur mit Genehmigung": "Seulement avec une autorisation",
  "Die Leugnung des Holocaust ist strafbar. Die Meinungsfreiheit endet dort, wo Volksverhetzung beginnt.":
    "La négation de l'Holocauste est punissable. La liberté d'opinion s'arrête là où commence la Volksverhetzung, l'incitation à la haine.",
  "Woran erinnert der 27. Januar in Deutschland?": "Que commémore le 27 janvier en Allemagne ?",
  "An die Gründung der Bundesrepublik": "La fondation de la République fédérale",
  "An die Opfer des Nationalsozialismus": "Les victimes du national-socialisme",
  "An den Mauerfall": "La chute du Mur",
  "An das Ende des Ersten Weltkriegs": "La fin de la Première Guerre mondiale",
  "Am 27. Januar 1945 wurde Auschwitz befreit. Der Tag ist deutschlandweiter Gedenktag für die Opfer des Nationalsozialismus.":
    "Le 27 janvier 1945, Auschwitz a été libéré. Ce jour est, dans toute l'Allemagne, la journée du souvenir des victimes du national-socialisme.",
  "Was waren die Nürnberger Prozesse?": "Qu'étaient les procès de Nuremberg ?",
  "Verfahren gegen führende Nationalsozialisten nach dem Krieg":
    "Des procès contre les dirigeants nationaux-socialistes après la guerre",
  "Die Verhandlungen zur Wiedervereinigung": "Les négociations de la réunification",
  "Die Gesetze gegen jüdische Deutsche von 1935": "Les lois de 1935 contre les Allemands juifs",
  "Die Verhandlungen über den Versailler Vertrag":
    "Les négociations sur le traité de Versailles",
  "1945/46 klagten die Alliierten die Hauptverantwortlichen an. Die Nürnberger *Gesetze* von 1935 sind etwas anderes — hier lohnt genaues Lesen.":
    "En 1945-1946, les Alliés ont mis en accusation les principaux responsables. Les *lois* de Nuremberg de 1935 sont autre chose — ici, il vaut la peine de lire de près.",
  "Welche vier Mächte besetzten Deutschland nach 1945?":
    "Quelles quatre puissances ont occupé l'Allemagne après 1945 ?",
  "USA, Großbritannien, Frankreich, Sowjetunion":
    "Les États-Unis, la Grande-Bretagne, la France, l'Union soviétique",
  "USA, Großbritannien, Italien, Sowjetunion":
    "Les États-Unis, la Grande-Bretagne, l'Italie, l'Union soviétique",
  "USA, Frankreich, Polen, Sowjetunion":
    "Les États-Unis, la France, la Pologne, l'Union soviétique",
  "Großbritannien, Frankreich, Österreich, Sowjetunion":
    "La Grande-Bretagne, la France, l'Autriche, l'Union soviétique",
  "Die vier Siegermächte. Aus den drei westlichen Zonen entstand 1949 die Bundesrepublik, aus der sowjetischen die DDR.":
    "Les quatre puissances victorieuses. Des trois zones occidentales est née en 1949 la République fédérale, de la zone soviétique la RDA.",
  "Wer war der erste Bundeskanzler der Bundesrepublik Deutschland?":
    "Qui a été le premier Bundeskanzler de la République fédérale d'Allemagne ?",
  "Ludwig Erhard": "Ludwig Erhard",
  "Helmut Kohl": "Helmut Kohl",
  "Konrad Adenauer, ab 1949. Erhard folgte ihm 1963, Brandt kam 1969, Kohl 1982.":
    "Konrad Adenauer, à partir de 1949. Erhard lui a succédé en 1963, Brandt est venu en 1969, Kohl en 1982.",
  "Was war die Berliner Luftbrücke?": "Qu'était le pont aérien de Berlin ?",
  "Eine Brücke über die Spree": "Un pont sur la Spree",
  "Die Versorgung West-Berlins aus der Luft während der Blockade":
    "Le ravitaillement de Berlin-Ouest par les airs pendant le blocus",
  "Der Bau des Flughafens Tegel": "La construction de l'aéroport de Tegel",
  "Eine Fluchtroute über die Mauer": "Une voie d'évasion par-dessus le Mur",
  "1948/49 blockierte die Sowjetunion die Zufahrtswege. Die Westalliierten versorgten die Stadt fast ein Jahr lang per Flugzeug.":
    "En 1948-1949, l'Union soviétique a bloqué les voies d'accès. Les Alliés occidentaux ont ravitaillé la ville par avion pendant près d'un an.",
  "Wann wurde die Berliner Mauer gebaut?": "Quand le mur de Berlin a-t-il été construit ?",
  "1949": "1949",
  "1953": "1953",
  "1961": "1961",
  "1968": "1968",
  "Am 13. August 1961, um die Fluchtbewegung zu stoppen. 1953 war der Aufstand, 1949 die Staatsgründung.":
    "Le 13 août 1961, pour arrêter les départs. 1953, c'est le soulèvement ; 1949, la fondation des deux États.",
  "Was war die Stasi?": "Qu'était la Stasi ?",
  "Die Armee der DDR": "L'armée de la RDA",
  "Der Geheimdienst, der die eigene Bevölkerung überwachte":
    "Le service secret qui surveillait sa propre population",
  "Die Jugendorganisation der SED": "L'organisation de jeunesse du SED",
  "Die Wirtschaftsbehörde der DDR": "L'administration économique de la RDA",
  "Das Ministerium für Staatssicherheit überwachte die eigenen Bürger. Die Armee hieß Nationale Volksarmee, die Jugendorganisation FDJ.":
    "Le ministère de la Sûreté de l'État surveillait ses propres citoyens. L'armée s'appelait Nationale Volksarmee, l'organisation de jeunesse FDJ.",
  "Warum war die DDR keine Demokratie?": "Pourquoi la RDA n'était-elle pas une démocratie ?",
  "Weil es keine Verfassung gab": "Parce qu'il n'y avait pas de constitution",
  "Weil eine Partei herrschte und es keine freien Wahlen gab":
    "Parce qu'un seul parti gouvernait et qu'il n'y avait pas d'élections libres",
  "Weil es kein Parlament gab": "Parce qu'il n'y avait pas de parlement",
  "Weil sie zu klein war": "Parce qu'elle était trop petite",
  "Eine Verfassung und ein Parlament gab es durchaus. Entscheidend ist: Die SED bestimmte, echte Wahlmöglichkeiten und Meinungsfreiheit fehlten.":
    "Une constitution et un parlement, il y en avait bel et bien. Ce qui compte, c'est que le SED décidait : ni vrai choix électoral, ni liberté d'opinion.",
  "Welcher Tag ist der deutsche Nationalfeiertag?":
    "Quel jour est la fête nationale allemande ?",
  "Der 9. November": "Le 9 novembre",
  "Der 3. Oktober": "Le 3 octobre",
  "Der 23. Mai": "Le 23 mai",
  "Der 1. Mai": "Le 1er mai",
  "Der 3. Oktober, Tag der Deutschen Einheit. Der 9. November ist der Tag des Mauerfalls — aber auch der Pogromnacht 1938.":
    "Le 3 octobre, jour de l'Unité allemande. Le 9 novembre est celui de la chute du Mur — mais aussi de la nuit de pogrom de 1938.",
  "Wann fiel die Berliner Mauer?": "Quand le mur de Berlin est-il tombé ?",
  "Am 13. August 1961": "Le 13 août 1961",
  "Am 9. November 1989": "Le 9 novembre 1989",
  "Am 3. Oktober 1990": "Le 3 octobre 1990",
  "Am 23. Mai 1949": "Le 23 mai 1949",
  "Am 9. November 1989 wurden die Grenzübergänge geöffnet. Die staatliche Einheit folgte knapp elf Monate später.":
    "Le 9 novembre 1989, les postes-frontières ont été ouverts. L'unité étatique a suivi près de onze mois plus tard.",
  "Welche Länder kamen 1990 als „neue Bundesländer“ dazu?":
    "Quels Länder se sont ajoutés en 1990 comme « nouveaux Bundesländer » ?",
  "Bayern, Hessen, Saarland, Bremen, Hamburg": "La Bavière, la Hesse, la Sarre, Brême, Hambourg",
  "Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt, Thüringen":
    "Le Brandebourg, le Mecklembourg-Poméranie-Occidentale, la Saxe, la Saxe-Anhalt, la Thuringe",
  "Nur Sachsen und Thüringen": "La Saxe et la Thuringe seulement",
  "Berlin, Brandenburg, Sachsen, Bayern, Hessen":
    "Berlin, le Brandebourg, la Saxe, la Bavière, la Hesse",
  "Diese fünf Länder wurden auf dem Gebiet der DDR wiedergegründet. Zusammen mit dem vereinigten Berlin ergeben sich die heutigen 16 Länder.":
    "Ces cinq Länder ont été refondés sur le territoire de la RDA. Avec Berlin réunifié, on arrive aux 16 Länder d'aujourd'hui.",
  "Seit wann gibt es in Deutschland Euro-Bargeld?":
    "Depuis quand y a-t-il des espèces en euros en Allemagne ?",
  "Seit 1990": "Depuis 1990",
  "Seit 1999": "Depuis 1999",
  "Seit 2002": "Depuis 2002",
  "Seit 2010": "Depuis 2010",
  "Die Scheine und Münzen kamen 2002. Als Buchgeld existierte der Euro schon seit 1999 — im Portemonnaie aber erst 2002.":
    "Les billets et les pièces sont arrivés en 2002. Comme monnaie scripturale, l'euro existait depuis 1999 — mais dans le porte-monnaie, seulement à partir de 2002.",
  "An wie viele Nachbarländer grenzt Deutschland?":
    "Avec combien de pays voisins l'Allemagne a-t-elle une frontière ?",
  "Sechs": "Six",
  "Sieben": "Sept",
  "Neun": "Neuf",
  "Elf": "Onze",
  "Neun: Dänemark, Polen, Tschechien, Österreich, Schweiz, Frankreich, Luxemburg, Belgien und die Niederlande.":
    "Neuf : le Danemark, la Pologne, la Tchéquie, l'Autriche, la Suisse, la France, le Luxembourg, la Belgique et les Pays-Bas.",
  "Wer entscheidet über Auslandseinsätze der Bundeswehr?":
    "Qui décide des missions de la Bundeswehr à l'étranger ?",
  "Der Bundeskanzler allein": "Le Bundeskanzler seul",
  "Die NATO": "L'OTAN",
  "Die Bundeswehr ist eine Parlamentsarmee: Ohne Zustimmung des Bundestages gibt es keinen Auslandseinsatz.":
    "La Bundeswehr est une armée parlementaire : sans l'accord du Bundestag, pas de mission à l'étranger.",
  "Welche Farben hat die deutsche Flagge von oben nach unten?":
    "Quelles sont les couleurs du drapeau allemand, de haut en bas ?",
  "Schwarz, Rot, Gold": "Noir, rouge, or",
  "Gold, Rot, Schwarz": "Or, rouge, noir",
  "Schwarz, Gold, Rot": "Noir, or, rouge",
  "Rot, Schwarz, Gold": "Rouge, noir, or",
  "Schwarz oben, Rot in der Mitte, Gold unten. Die unterste Farbe heißt Gold, nicht Gelb.":
    "Noir en haut, rouge au milieu, or en bas. La couleur du bas s'appelle or, pas jaune.",
  "Welche Strophe des Deutschlandlieds ist die Nationalhymne?":
    "Quelle strophe du Deutschlandlied est l'hymne national ?",
  "Die erste": "La première",
  "Die zweite": "La deuxième",
  "Die dritte": "La troisième",
  "Alle drei": "Les trois",
  "Die dritte Strophe: „Einigkeit und Recht und Freiheit“. Nur sie wird bei offiziellen Anlässen gesungen.":
    "La troisième strophe : « Einigkeit und Recht und Freiheit ». C'est la seule que l'on chante aux occasions officielles.",
  "Wie heißt der höchste Berg Deutschlands?":
    "Comment s'appelle le plus haut sommet d'Allemagne ?",
  "Der Brocken": "Le Brocken",
  "Die Zugspitze": "La Zugspitze",
  "Der Feldberg": "Le Feldberg",
  "Der Watzmann": "Le Watzmann",
  "Die Zugspitze in Bayern, 2.962 Meter. Der Brocken im Harz ist der höchste Berg Norddeutschlands.":
    "La Zugspitze, en Bavière, 2 962 mètres. Le Brocken, dans le Harz, est le plus haut sommet de l'Allemagne du Nord.",
  "Was bedeutet Religionsfreiheit in Deutschland?":
    "Que signifie la liberté de religion en Allemagne ?",
  "Jeder muss einer Religion angehören": "Chacun doit appartenir à une religion",
  "Jeder darf glauben, was er möchte, oder gar nichts glauben":
    "Chacun peut croire ce qu'il veut, ou ne rien croire du tout",
  "Nur christliche Religionen sind erlaubt": "Seules les religions chrétiennes sont autorisées",
  "Religion ist Privatsache und in der Öffentlichkeit verboten":
    "La religion est une affaire privée et interdite en public",
  "Artikel 4 schützt beides: den Glauben und die Freiheit, keiner Religion anzugehören.":
    "L'article 4 protège les deux : la foi et la liberté de n'appartenir à aucune religion.",
  "Eine religiöse Vorschrift widerspricht einem deutschen Gesetz. Was gilt?":
    "Une prescription religieuse contredit une loi allemande. Laquelle l'emporte ?",
  "Die religiöse Vorschrift": "La prescription religieuse",
  "Das deutsche Gesetz": "La loi allemande",
  "Die Entscheidung der Familie": "La décision de la famille",
  "Das kommt auf die Religion an": "Cela dépend de la religion",
  "Das staatliche Recht gilt für alle gleichermaßen. Religionsfreiheit erlaubt den Glauben, nicht den Rechtsbruch.":
    "Le droit de l'État vaut pour tous de la même façon. La liberté de religion permet de croire, pas d'enfreindre la loi.",
  "Muss ein Kind an staatlichen Schulen am Religionsunterricht teilnehmen?":
    "Un enfant doit-il suivre le cours de religion dans les écoles publiques ?",
  "Ja, das ist Pflicht": "Oui, c'est obligatoire",
  "Nein, man kann sich abmelden und meist Ethik belegen":
    "Non, on peut s'en dispenser et suivre le plus souvent un cours d'éthique",
  "Nur bei christlichen Familien": "Seulement dans les familles chrétiennes",
  "Nur in der Grundschule": "Seulement à l'école primaire",
  "Religionsunterricht ist ein reguläres Fach, aber niemand ist dazu verpflichtet. Als Alternative gibt es meist Ethik oder Philosophie.":
    "Le cours de religion est une matière ordinaire, mais personne n'y est tenu. Il existe en général un cours d'éthique ou de philosophie à la place.",
  "Ein Mann verbietet seiner Frau, arbeiten zu gehen. Was gilt in Deutschland?":
    "Un homme interdit à sa femme de travailler. Qu'en est-il en Allemagne ?",
  "Er darf das als Familienoberhaupt": "Il en a le droit comme chef de famille",
  "Sie entscheidet selbst, denn Männer und Frauen sind gleichberechtigt":
    "C'est elle qui décide, car les hommes et les femmes sont égaux en droits",
  "Nur mit Zustimmung der Familie": "Seulement avec l'accord de la famille",
  "Das Standesamt entscheidet": "C'est le Standesamt qui tranche",
  "Artikel 3 des Grundgesetzes: gleichberechtigt. Über Arbeit, Geld und Lebensweg entscheidet jede Person selbst.":
    "Article 3 du Grundgesetz : égalité en droits. Chacun décide seul de son travail, de son argent et de sa vie.",
  "Wie ist körperliche Bestrafung von Kindern in Deutschland geregelt?":
    "Comment le châtiment corporel des enfants est-il réglé en Allemagne ?",
  "Erlaubt, wenn es die Eltern für nötig halten": "Autorisé si les parents le jugent nécessaire",
  "Verboten — Kinder haben ein Recht auf gewaltfreie Erziehung":
    "Interdit — les enfants ont droit à une éducation sans violence",
  "Erlaubt bis zum 10. Lebensjahr": "Autorisé jusqu'à dix ans",
  "Nur Lehrern verboten": "Interdit aux seuls enseignants",
  "Seit 2000 steht das Recht auf gewaltfreie Erziehung im Gesetz. Schläge sind keine Erziehungsmethode, sondern strafbar.":
    "Depuis 2000, le droit à une éducation sans violence figure dans la loi. Les coups ne sont pas une méthode d'éducation : ils sont punissables.",
  "Was gilt für die Ehe in Deutschland?": "Qu'en est-il du mariage en Allemagne ?",
  "Man kann mit mehreren Personen gleichzeitig verheiratet sein":
    "On peut être marié à plusieurs personnes à la fois",
  "Die Ehe muss freiwillig geschlossen werden; Zwangsheirat ist strafbar":
    "Le mariage doit être conclu librement ; le mariage forcé est punissable",
  "Die Eltern wählen den Ehepartner aus": "Ce sont les parents qui choisissent le conjoint",
  "Eine Scheidung ist nicht möglich": "Le divorce est impossible",
  "Freiwilligkeit ist Voraussetzung. Zwangsheirat ist eine Straftat, Mehrehe verboten, und geschieden werden kann jede Ehe.":
    "Le libre consentement est la condition. Le mariage forcé est un délit, la polygamie est interdite, et tout mariage peut être dissous.",
  "Was bedeutet „duale Ausbildung“?": "Que veut dire « duale Ausbildung » ?",
  "Zwei Berufe gleichzeitig lernen": "Apprendre deux métiers en même temps",
  "Ausbildung im Betrieb und in der Berufsschule zugleich":
    "Une formation en entreprise et à l'école professionnelle à la fois",
  "Eine Ausbildung mit doppelter Dauer": "Une formation de durée double",
  "Ausbildung in zwei Bundesländern": "Une formation dans deux Bundesländer",
  "Zwei Lernorte: der Betrieb für die Praxis, die Berufsschule für die Theorie. Bezahlt wird von Anfang an.":
    "Deux lieux d'apprentissage : l'entreprise pour la pratique, l'école professionnelle pour la théorie. Et l'on est payé dès le début.",
  "Gilt die Schulpflicht in Deutschland auch für Mädchen?":
    "L'obligation scolaire vaut-elle aussi pour les filles en Allemagne ?",
  "Ja, für alle Kinder gleichermaßen": "Oui, pour tous les enfants de la même façon",
  "Nein, Eltern entscheiden das": "Non, ce sont les parents qui décident",
  "Nur bis zur vierten Klasse": "Seulement jusqu'à la quatrième classe",
  "Nur für deutsche Staatsangehörige": "Seulement pour les ressortissants allemands",
  "Die Schulpflicht gilt für alle Kinder, unabhängig von Geschlecht, Herkunft oder Religion — einschließlich Sport- und Schwimmunterricht.":
    "L'obligation scolaire vaut pour tous les enfants, quels que soient le sexe, l'origine ou la religion — cours de sport et de natation compris.",
  "Welcher Abschluss berechtigt in der Regel zum Studium an einer Universität?":
    "Quel diplôme ouvre en règle générale l'accès à l'université ?",
  "Der Hauptschulabschluss": "Le Hauptschulabschluss",
  "Die Mittlere Reife": "La Mittlere Reife",
  "Das Abitur": "L'Abitur",
  "Der Gesellenbrief": "Le Gesellenbrief",
  "Das Abitur ist die allgemeine Hochschulreife. Über Fachhochschulreife und berufliche Qualifikationen gibt es weitere Wege.":
    "L'Abitur est la maturité générale. La Fachhochschulreife et les qualifications professionnelles ouvrent d'autres voies.",
  "Wie lange zahlt der Arbeitgeber bei Krankheit den Lohn weiter?":
    "Combien de temps l'employeur continue-t-il de verser le salaire en cas de maladie ?",
  "Zwei Wochen": "Deux semaines",
  "Sechs Wochen": "Six semaines",
  "Drei Monate": "Trois mois",
  "Gar nicht": "Pas du tout",
  "Sechs Wochen Lohnfortzahlung. Danach zahlt die Krankenkasse Krankengeld.":
    "Six semaines de maintien du salaire. Ensuite, la caisse maladie verse une indemnité journalière.",
  "Was ist ein Betriebsrat?": "Qu'est-ce qu'un Betriebsrat ?",
  "Die Geschäftsführung eines Betriebs": "La direction d'une entreprise",
  "Eine von den Beschäftigten gewählte Vertretung": "Une représentation élue par les salariés",
  "Eine Behörde für Betriebsprüfungen": "Une administration chargée des contrôles d'entreprise",
  "Der Zusammenschluss mehrerer Firmen": "Le regroupement de plusieurs sociétés",
  "Die Belegschaft wählt ihn. Er vertritt ihre Interessen gegenüber dem Arbeitgeber und hat bei vielen Entscheidungen ein Mitspracherecht.":
    "Le personnel l'élit. Il défend ses intérêts face à l'employeur et a voix au chapitre dans beaucoup de décisions.",
  "Du wurdest gekündigt und hältst das für unrechtmäßig. Wie lange hast du Zeit für eine Klage?":
    "Vous avez été licencié et jugez cela illégal. De combien de temps disposez-vous pour saisir la justice ?",
  "Drei Wochen": "Trois semaines",
  "Ein Jahr": "Un an",
  "Unbegrenzt": "Sans limite",
  "Drei Wochen ab Zugang der Kündigung. Danach gilt die Kündigung in aller Regel als wirksam.":
    "Trois semaines à compter de la réception de la lettre. Passé ce délai, le licenciement est en règle générale réputé valable.",
  "Du ziehst in eine neue Wohnung. Was musst du tun?":
    "Vous emménagez dans un nouveau logement. Que devez-vous faire ?",
  "Nichts, das macht der Vermieter": "Rien, le bailleur s'en charge",
  "Dich innerhalb von zwei Wochen beim Einwohnermeldeamt anmelden":
    "Vous inscrire dans les deux semaines à l'Einwohnermeldeamt",
  "Dich beim Finanzamt anmelden": "Vous inscrire au Finanzamt",
  "Die Nachbarn informieren": "Informer les voisins",
  "Es gilt die Meldepflicht: Anmeldung beim Einwohnermeldeamt oder Bürgeramt innerhalb von zwei Wochen.":
    "L'inscription est obligatoire : à l'Einwohnermeldeamt ou au Bürgeramt, le bureau des habitants, dans les deux semaines.",
  "Wie hoch darf die Mietkaution höchstens sein?":
    "À combien peut s'élever au maximum le dépôt de garantie ?",
  "Eine Monatsmiete": "Un mois de loyer",
  "Drei Monatsmieten": "Trois mois de loyer",
  "Sechs Monatsmieten": "Six mois de loyer",
  "Das ist frei verhandelbar": "Cela se négocie librement",
  "Höchstens drei Monatskaltmieten. Mehr darf der Vermieter nicht verlangen.":
    "Trois mois de loyer hors charges au maximum. Le bailleur ne peut pas exiger davantage.",
  "Ab wann gilt in Deutschland üblicherweise die Nachtruhe?":
    "À partir de quelle heure le repos nocturne s'applique-t-il d'ordinaire en Allemagne ?",
  "Ab 20 Uhr": "À partir de 20 heures",
  "Ab 22 Uhr": "À partir de 22 heures",
  "Ab 24 Uhr": "À partir de minuit",
  "Es gibt keine Nachtruhe": "Il n'y a pas de repos nocturne",
  "In der Regel von 22 bis 6 Uhr. Sonn- und Feiertage sind meist ganztägig Ruhetage.":
    "En règle générale de 22 heures à 6 heures. Les dimanches et jours fériés sont le plus souvent chômés toute la journée.",
  "Welche Nummer wählst du in Deutschland bei einem medizinischen Notfall?":
    "Quel numéro appelle-t-on en Allemagne en cas d'urgence médicale ?",
  "110": "110",
  // 112 is answered by LIFE_IN_THE_UK_FR, for the same reason as above.
  "116117": "116117",
  "115": "115",
  "112 für Notarzt und Feuerwehr, 110 für die Polizei. 116117 ist der ärztliche Bereitschaftsdienst außerhalb der Sprechzeiten.":
    "Le 112 pour le SAMU et les pompiers, le 110 pour la police. Le 116117 est le service de garde médicale en dehors des heures de consultation.",
  "Wer ist in der gesetzlichen Krankenversicherung beitragsfrei mitversichert?":
    "Qui est assuré gratuitement dans l'assurance maladie légale ?",
  "Niemand, jeder zahlt selbst": "Personne, chacun paie pour soi",
  "Kinder und Ehepartner ohne eigenes Einkommen":
    "Les enfants et le conjoint sans revenu propre",
  "Nur Kinder bis 6 Jahre": "Seulement les enfants jusqu'à 6 ans",
  "Alle Verwandten im selben Haushalt": "Tous les parents vivant sous le même toit",
  "Die Familienversicherung deckt Kinder und nicht erwerbstätige Ehepartner ohne zusätzlichen Beitrag ab.":
    "L'assurance familiale couvre les enfants et le conjoint sans activité, sans cotisation supplémentaire.",
  "Darf dein Arzt dem Arbeitgeber sagen, welche Krankheit du hast?":
    "Votre médecin peut-il dire à votre employeur de quelle maladie vous souffrez ?",
  "Ja, das ist üblich": "Oui, c'est l'usage",
  "Nein, es gilt die ärztliche Schweigepflicht": "Non, le secret médical s'applique",
  "Nur bei längerer Krankheit": "Seulement en cas de maladie longue",
  "Nur wenn der Arbeitgeber fragt": "Seulement si l'employeur le demande",
  "Die Diagnose bleibt zwischen dir und dem Arzt. Der Arbeitgeber erfährt nur, dass und wie lange du arbeitsunfähig bist.":
    "Le diagnostic reste entre vous et le médecin. L'employeur apprend seulement que vous êtes en arrêt, et pour combien de temps.",
  "Darf eine deutsche Zeitung die Bundesregierung öffentlich kritisieren?":
    "Un journal allemand peut-il critiquer publiquement le gouvernement fédéral ?",
  "Nein, das ist verboten": "Non, c'est interdit",
  "Ja, denn es gilt die Pressefreiheit": "Oui, car la liberté de la presse s'applique",
  "Nur mit Genehmigung des Ministeriums": "Seulement avec l'autorisation du ministère",
  "Nur vor Wahlen": "Seulement avant les élections",
  "Artikel 5 des Grundgesetzes garantiert Presse- und Meinungsfreiheit. Eine Zensur findet nicht statt.":
    "L'article 5 du Grundgesetz garantit la liberté de la presse et d'opinion. Il n'y a pas de censure.",
  "Was wird am 1. Mai in Deutschland gefeiert?": "Que célèbre-t-on le 1er mai en Allemagne ?",
  "Der Tag der Deutschen Einheit": "Le jour de l'Unité allemande",
  "Der Tag der Arbeit": "La fête du Travail",
  "Das Ende des Zweiten Weltkriegs": "La fin de la Seconde Guerre mondiale",
  "Der Geburtstag des Grundgesetzes": "L'anniversaire du Grundgesetz",
  "Der 1. Mai ist der Tag der Arbeit. Der 3. Oktober ist der Tag der Deutschen Einheit, der 23. Mai der Tag des Grundgesetzes.":
    "Le 1er mai est la fête du Travail. Le 3 octobre est le jour de l'Unité allemande, le 23 mai celui du Grundgesetz.",
  "Wer sammelte die bekannten deutschen Märchen?":
    "Qui a recueilli les contes allemands les plus connus ?",
  "Johann Wolfgang von Goethe": "Johann Wolfgang von Goethe",
  "Die Brüder Grimm": "Les frères Grimm",
  "Friedrich Schiller": "Friedrich Schiller",
  "Thomas Mann": "Thomas Mann",
  "Jacob und Wilhelm Grimm sammelten im 19. Jahrhundert Märchen wie Hänsel und Gretel und Rotkäppchen.":
    "Jacob et Wilhelm Grimm ont recueilli au XIXe siècle des contes comme Hansel et Gretel ou le Petit Chaperon rouge.",
};
