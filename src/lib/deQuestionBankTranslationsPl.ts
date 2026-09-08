/**
 * Polish for the Leben in Deutschland practice questions.
 *
 * The lesson text of this course has had a Polish table for a while, and the
 * questions of the practice bank had none — so a lesson read in Polish and
 * then asked its questions in German. They arrive in the same stepped session
 * as the course's own quiz blocks, through the same component, so the marker
 * was already there and only the words were missing.
 *
 * Keyed on the GERMAN of deQuestionBank.ts, exactly as it stands there. Every
 * key was extracted from the built module and paired back by position, never
 * retyped: one wrong character and the lookup misses in silence — the marker
 * disappears and the reader is told there is nothing, for a question that was
 * in fact translated.
 *
 * Names of institutions, laws and offices stay in German on purpose, the way
 * they do in LEBEN_IN_DEUTSCHLAND_PL: Grundgesetz, Bundestag, Bundesrat,
 * Bundeskanzler, Bundespräsident, Einbürgerungstest, Standesamt. The test is
 * sat in German and asks for those exact words — translating them would teach
 * the wrong answer. What is translated is everything around them, and a
 * German term is glossed the first time it carries weight.
 *
 * Strings another Polish table already answers are deliberately absent. Every
 * table for one target is spread into a single object, so a second entry for
 * the same key would be a silent collision, and the older table would decide
 * the wording for both. check-pl-bank-translation counts what a reader
 * reaches rather than what this file holds.
 */
export const DE_QUESTION_BANK_PL: Record<string, string> = {
  "Wie heißt die Verfassung der Bundesrepublik Deutschland?":
    "Jak nazywa się konstytucja Republiki Federalnej Niemiec?",
  "Bundesverfassung": "Bundesverfassung",
  "Grundgesetz": "Grundgesetz",
  "Reichsverfassung": "Reichsverfassung",
  "Staatsvertrag": "Staatsvertrag",
  "Sie heißt Grundgesetz. Der Name war 1949 als Provisorium gedacht — bis zur Wiedervereinigung wollte man sich das Wort „Verfassung“ aufheben.":
    "Nazywa się Grundgesetz. Nazwa miała być w 1949 roku tymczasowa — słowo „Verfassung”, czyli konstytucja, chciano zachować do czasu zjednoczenia.",
  "Seit wann gilt das Grundgesetz?": "Od kiedy obowiązuje Grundgesetz?",
  "Seit dem 8. Mai 1945": "Od 8 maja 1945",
  "Seit dem 23. Mai 1949": "Od 23 maja 1949",
  "Seit dem 7. Oktober 1949": "Od 7 października 1949",
  "Seit dem 3. Oktober 1990": "Od 3 października 1990",
  "23. Mai 1949. Der 7. Oktober 1949 ist die Gründung der DDR, der 3. Oktober 1990 die Wiedervereinigung.":
    "23 maja 1949. 7 października 1949 to powstanie NRD, 3 października 1990 zjednoczenie.",
  "Welches Recht gehört zu den Grundrechten im Grundgesetz?":
    "Które prawo należy do praw podstawowych w Grundgesetz?",
  "Das Recht auf ein eigenes Auto": "Prawo do własnego samochodu",
  "Die Meinungsfreiheit": "Wolność słowa",
  "Das Recht auf einen Arbeitsplatz beim Staat": "Prawo do pracy u państwa",
  "Das Recht auf ein Studium ohne Abschluss": "Prawo do studiowania bez dyplomu",
  "Die Meinungsfreiheit steht in Artikel 5. Die anderen drei sind keine Grundrechte.":
    "Wolność słowa stoi w artykule 5. Pozostałe trzy nie są prawami podstawowymi.",
  "Was sagt Artikel 3 des Grundgesetzes?": "Co mówi artykuł 3 Grundgesetz?",
  "Die Würde des Menschen ist unantastbar": "Godność człowieka jest nienaruszalna",
  "Alle Menschen sind vor dem Gesetz gleich": "Wszyscy ludzie są równi wobec prawa",
  "Jeder hat das Recht auf Leben": "Każdy ma prawo do życia",
  "Die Kunst ist frei": "Sztuka jest wolna",
  "Artikel 3 ist der Gleichheitssatz. Die Menschenwürde steht in Artikel 1, die Kunstfreiheit in Artikel 5.":
    "Artykuł 3 to zasada równości. Godność człowieka stoi w artykule 1, wolność sztuki w artykule 5.",
  "Welche Aussage über die Meinungsfreiheit in Deutschland ist richtig?":
    "Które stwierdzenie o wolności słowa w Niemczech jest prawdziwe?",
  "Man darf alles sagen, ohne jede Grenze": "Można mówić wszystko, bez żadnych granic",
  "Sie endet dort, wo Volksverhetzung oder Beleidigung beginnt":
    "Kończy się tam, gdzie zaczyna się podżeganie do nienawiści albo zniewaga",
  "Sie gilt nur für deutsche Staatsangehörige": "Obowiązuje tylko wobec obywateli niemieckich",
  "Sie gilt nur in privaten Gesprächen": "Obowiązuje tylko w prywatnych rozmowach",
  "Meinungsfreiheit ist weit, aber nicht grenzenlos: Volksverhetzung, Beleidigung und Holocaustleugnung sind Straftaten.":
    "Wolność słowa jest szeroka, ale nie bezgraniczna: Volksverhetzung, czyli podżeganie do nienawiści, zniewaga i negowanie Holokaustu są przestępstwami.",
  "Wie viele Fragen umfasst der Einbürgerungstest, und wie viele davon betreffen das Bundesland?":
    "Ile pytań obejmuje Einbürgerungstest i ile z nich dotyczy kraju związkowego?",
  "30 Fragen, davon 3 zum Bundesland": "30 pytań, w tym 3 o kraj związkowy",
  "33 Fragen, davon 3 zum Bundesland": "33 pytania, w tym 3 o kraj związkowy",
  "33 Fragen, davon 10 zum Bundesland": "33 pytania, w tym 10 o kraj związkowy",
  "25 Fragen, davon 5 zum Bundesland": "25 pytań, w tym 5 o kraj związkowy",
  "33 Fragen insgesamt: 30 aus dem bundesweiten Katalog und 3 zum Bundesland, in dem der Test geschrieben wird.":
    "Łącznie 33 pytania: 30 z ogólnokrajowego katalogu i 3 o kraj związkowy, w którym test się pisze.",
  "Von wem geht in Deutschland alle Staatsgewalt aus?":
    "Od kogo pochodzi w Niemczech cała władza państwowa?",
  "Vom Bundespräsidenten": "Od Bundespräsident",
  "Vom Volk": "Od narodu",
  "Von den Parteien": "Od partii",
  "Von den Bundesländern": "Od krajów związkowych",
  "Artikel 20: „Alle Staatsgewalt geht vom Volke aus.“ Ausgeübt wird sie durch Wahlen und durch die drei Gewalten.":
    "Artykuł 20: „Alle Staatsgewalt geht vom Volke aus” — cała władza państwowa pochodzi od narodu. Wykonuje się ją przez wybory i przez trzy władze.",
  "Welche Staatsform hat Deutschland?": "Jaki ustrój mają Niemcy?",
  "Monarchie": "Monarchię",
  "Diktatur": "Dyktaturę",
  "Kaiserreich": "Cesarstwo",
  "Eine Republik: Das Staatsoberhaupt wird gewählt, es gibt keinen König und keinen Kaiser.":
    "Republikę: głowa państwa jest wybierana, nie ma króla ani cesarza.",
  "Was gehört zur Exekutive?": "Co należy do władzy wykonawczej?",
  "Die Polizei": "Policja",
  "Die Polizei führt Gesetze aus und gehört damit zur Exekutive. Bundestag und Bundesrat sind Legislative, die Gerichte Judikative.":
    "Policja wykonuje prawo i należy przez to do władzy wykonawczej. Bundestag i Bundesrat to władza ustawodawcza, sądy — sądownicza.",
  "Was bedeutet „Rechtsstaat“?": "Co znaczy „Rechtsstaat”?",
  "Der Staat kann tun, was er für richtig hält": "Państwo może robić to, co uzna za słuszne",
  "Auch der Staat ist an Gesetze gebunden": "Także państwo jest związane prawem",
  "Nur Juristen dürfen Politik machen": "Politykę mogą uprawiać tylko prawnicy",
  "Es gibt besonders viele Gesetze": "Jest szczególnie dużo ustaw",
  "Im Rechtsstaat gilt das Gesetz auch für den Staat selbst — und gegen jede staatliche Entscheidung kann man klagen.":
    "W państwie prawa ustawa obowiązuje również samo państwo — a każdą decyzję władzy można zaskarżyć do sądu.",
  "Was bedeutet „wehrhafte Demokratie“?": "Co znaczy „wehrhafte Demokratie”?",
  "Deutschland hat eine starke Armee": "Niemcy mają silną armię",
  "Die Demokratie schützt sich vor denen, die sie abschaffen wollen":
    "Demokracja broni się przed tymi, którzy chcą ją znieść",
  "Bürger dürfen sich mit Waffen verteidigen": "Obywatele mogą bronić się bronią",
  "Der Staat wehrt sich gegen Kritik": "Państwo broni się przed krytyką",
  "Verfassungsfeindliche Parteien können verboten werden, und der Kern der Verfassung ist unabänderlich. Mit der Armee hat der Begriff nichts zu tun.":
    "Partie wrogie konstytucji można zdelegalizować, a rdzeń konstytucji jest niezmienialny. Z armią to pojęcie nie ma nic wspólnego.",
  "Warum sind die Gewalten in Deutschland getrennt?":
    "Dlaczego władze w Niemczech są rozdzielone?",
  "Damit die Arbeit schneller geht": "Żeby praca szła szybciej",
  "Damit keine Stelle allein über alles bestimmen kann":
    "Żeby żaden organ nie mógł sam decydować o wszystkim",
  "Weil es die EU vorschreibt": "Bo tak nakazuje UE",
  "Weil es in der Weimarer Verfassung so stand": "Bo tak stało w konstytucji weimarskiej",
  "Machtkontrolle ist der Zweck: Was die eine Gewalt beschließt, führt die zweite aus und überprüft die dritte.":
    "Celem jest kontrola władzy: co uchwala jedna władza, wykonuje druga, a bada trzecia.",
  "Welches Verfassungsorgan wird in Deutschland direkt vom Volk gewählt?":
    "Który organ konstytucyjny w Niemczech jest wybierany bezpośrednio przez naród?",
  "Die Bundesregierung": "Bundesregierung",
  "Nur der Bundestag wird direkt gewählt. Alle anderen Organe gehen mittelbar aus Wahlen hervor.":
    "Bezpośrednio wybierany jest tylko Bundestag. Wszystkie inne organy wyłaniają się z wyborów pośrednio.",
  "Was ist eine Fraktion im Bundestag?": "Czym jest Fraktion w Bundestagu?",
  "Ein Ausschuss für Finanzfragen": "Komisją do spraw finansów",
  "Der Zusammenschluss der Abgeordneten einer Partei": "Zrzeszeniem posłów jednej partii",
  "Die Regierungsmannschaft des Kanzlers": "Ekipą rządową kanclerza",
  "Eine Gruppe von Ministerien": "Grupą ministerstw",
  "Abgeordnete derselben Partei schließen sich zur Fraktion zusammen. Fraktionen bestimmen den Arbeitsalltag des Parlaments.":
    "Posłowie tej samej partii łączą się we Fraktion. Frakcje wyznaczają codzienną pracę parlamentu.",
  "Wer darf einen Gesetzentwurf in den Bundestag einbringen?":
    "Kto może wnieść projekt ustawy do Bundestagu?",
  "Nur die Bundesregierung": "Tylko Bundesregierung",
  "Bundesregierung, Bundestag oder Bundesrat": "Bundesregierung, Bundestag albo Bundesrat",
  "Nur der Bundespräsident": "Tylko Bundespräsident",
  "Jeder Bürger direkt": "Każdy obywatel bezpośrednio",
  "Drei Wege führen zu einem Gesetzentwurf: aus der Regierung, aus der Mitte des Bundestages oder aus dem Bundesrat.":
    "Do projektu ustawy prowadzą trzy drogi: z rządu, ze środka Bundestagu albo z Bundesratu.",
  "Was versteht man unter dem Budgetrecht des Bundestages?":
    "Co rozumie się przez prawo budżetowe Bundestagu?",
  "Das Recht, die Steuern selbst einzuziehen": "Prawo do samodzielnego pobierania podatków",
  "Das Recht, über den Haushalt des Bundes zu entscheiden":
    "Prawo do decydowania o budżecie federacji",
  "Das Recht der Abgeordneten auf ein Gehalt": "Prawo posłów do wynagrodzenia",
  "Das Recht, Kredite privat aufzunehmen": "Prawo do prywatnego zaciągania kredytów",
  "Das Parlament entscheidet, wofür der Staat Geld ausgibt. Deshalb gilt das Budgetrecht als Königsrecht des Bundestages.":
    "Parlament decyduje, na co państwo wydaje pieniądze. Dlatego prawo budżetowe uchodzi za królewskie prawo Bundestagu.",
  "Wie viele Stimmen hat ein Bundesland im Bundesrat?":
    "Ile głosów ma kraj związkowy w Bundesracie?",
  "Jedes Land hat genau eine Stimme": "Każdy kraj ma dokładnie jeden głos",
  "Je nach Einwohnerzahl drei bis sechs Stimmen":
    "Zależnie od liczby mieszkańców od trzech do sześciu głosów",
  "Jedes Land hat zehn Stimmen": "Każdy kraj ma dziesięć głosów",
  "Die Zahl wechselt jedes Jahr": "Liczba zmienia się co roku",
  "Drei bis sechs Stimmen, gestaffelt nach Einwohnerzahl — und ein Land muss seine Stimmen einheitlich abgeben.":
    "Od trzech do sześciu głosów, stopniowanych według liczby mieszkańców — a kraj musi oddać swoje głosy jednolicie.",
  "Was ist ein Untersuchungsausschuss?": "Czym jest Untersuchungsausschuss?",
  "Ein Gericht für Abgeordnete": "Sądem dla posłów",
  "Ein Gremium des Bundestages, das Vorgänge aufklärt und die Regierung kontrolliert":
    "Gremium Bundestagu, które wyjaśnia zdarzenia i kontroluje rząd",
  "Eine Behörde zur Prüfung von Gesetzen": "Urzędem badającym ustawy",
  "Der Ausschuss, der den Haushalt aufstellt": "Komisją, która układa budżet",
  "Er gehört zur Kontrollfunktion des Parlaments: Der Bundestag klärt damit auf, was die Regierung lieber unerwähnt ließe.":
    "Należy do funkcji kontrolnej parlamentu: Bundestag wyjaśnia nim to, o czym rząd wolałby nie wspominać.",
  "Wer leitet die Bundesregierung?": "Kto kieruje Bundesregierung?",
  "Der Bundestagspräsident": "Bundestagspräsident",
  "Der Präsident des Bundesrates": "Przewodniczący Bundesratu",
  "Der Bundeskanzler führt die Regierung und bestimmt die Richtlinien der Politik. Der Bundespräsident regiert nicht.":
    "Bundeskanzler kieruje rządem i wyznacza wytyczne polityki. Bundespräsident nie rządzi.",
  "Wer wählt den Bundespräsidenten?": "Kto wybiera Bundespräsident?",
  "Der Bundestag allein": "Sam Bundestag",
  "Die Bundesversammlung — zur Hälfte Bundestagsabgeordnete, zur Hälfte Vertreter der Länder. Sie tritt nur zu diesem Zweck zusammen.":
    "Bundesversammlung — w połowie posłowie Bundestagu, w połowie przedstawiciele krajów. Zbiera się wyłącznie w tym celu.",
  "Was bedeutet Richtlinienkompetenz?": "Co oznacza Richtlinienkompetenz?",
  "Der Kanzler bestimmt die Grundlinien der Politik": "Kanclerz wyznacza główne linie polityki",
  "Der Bundespräsident gibt die Gesetze vor": "Bundespräsident narzuca ustawy",
  "Die Ministerien schreiben eigene Richtlinien": "Ministerstwa piszą własne wytyczne",
  "Der Bundesrat gibt den Ländern Richtlinien": "Bundesrat daje wytyczne krajom",
  "Der Kanzler setzt die Leitlinien; innerhalb dieser Linien führt jeder Minister sein Haus eigenständig.":
    "Kanclerz wyznacza wytyczne; w ich obrębie każdy minister prowadzi swój resort samodzielnie.",
  "Wer ernennt die Bundesminister?": "Kto mianuje ministrów federalnych?",
  "Der Bundestag durch Wahl": "Bundestag w drodze wyboru",
  "Der Bundespräsident auf Vorschlag des Kanzlers": "Bundespräsident na wniosek kanclerza",
  "Der Kanzler allein, ohne weitere Beteiligung": "Sam kanclerz, bez niczyjego udziału",
  "Vorschlagen darf der Kanzler, ernennen muss der Bundespräsident. Zwei Schritte, die gern zu einem verkürzt werden.":
    "Wnioskować może kanclerz, mianować musi Bundespräsident. Dwa kroki, które chętnie skraca się do jednego.",
  "Wie oft darf eine Person das Amt des Bundespräsidenten ausüben?":
    "Ile razy jedna osoba może sprawować urząd Bundespräsident?",
  "Nur einmal": "Tylko raz",
  "Höchstens zweimal": "Najwyżej dwa razy",
  "Beliebig oft": "Dowolnie wiele razy",
  "Bis zum 70. Lebensjahr": "Do 70 roku życia",
  "Zwei Amtszeiten zu je fünf Jahren, also höchstens zehn Jahre. Für den Kanzler gibt es keine solche Grenze.":
    "Dwie kadencje po pięć lat, czyli najwyżej dziesięć lat. Dla kanclerza takiej granicy nie ma.",
  "Wie nennt man Kanzler und Minister zusammen?": "Jak nazywa się kanclerza i ministrów razem?",
  "Bundesversammlung": "Bundesversammlung",
  "Bundesregierung oder Kabinett": "Bundesregierung albo Kabinett",
  "Bundesrat": "Bundesrat",
  "Bundestag": "Bundestag",
  "Bundeskanzler und Bundesminister bilden gemeinsam die Bundesregierung, umgangssprachlich das Kabinett.":
    "Bundeskanzler i Bundesminister tworzą razem Bundesregierung, potocznie Kabinett.",
  "Wie oft findet in Deutschland regulär eine Bundestagswahl statt?":
    "Jak często odbywają się w Niemczech zwyczajne wybory do Bundestagu?",
  "Alle zwei Jahre": "Co dwa lata",
  "Alle vier Jahre": "Co cztery lata",
  "Alle fünf Jahre": "Co pięć lat",
  "Alle sechs Jahre": "Co sześć lat",
  "Alle vier Jahre. Das Europäische Parlament wird alle fünf Jahre gewählt — daher die häufige Verwechslung.":
    "Co cztery lata. Parlament Europejski wybiera się co pięć lat — stąd częste pomyłki.",
  "Was bedeutet „freie Wahl“?": "Co znaczy „wolne wybory”?",
  "Die Wahl kostet nichts": "Wybory nic nie kosztują",
  "Niemand darf zu einer bestimmten Entscheidung gezwungen werden":
    "Nikogo nie wolno zmuszać do określonej decyzji",
  "Jeder kann sich aussuchen, wann er wählt": "Każdy może wybrać, kiedy głosuje",
  "Man kann mehrere Stimmen abgeben": "Można oddać kilka głosów",
  "Frei heißt: ohne Druck und ohne Zwang. Weder Staat noch Arbeitgeber noch Familie dürfen eine Stimme vorschreiben.":
    "Wolne znaczy: bez nacisku i bez przymusu. Ani państwo, ani pracodawca, ani rodzina nie mogą narzucić głosu.",
  "Was ist die Fünf-Prozent-Hürde?": "Czym jest próg pięciu procent?",
  "Eine Partei braucht mindestens fünf Prozent der Zweitstimmen, um in den Bundestag zu kommen":
    "Partia potrzebuje co najmniej pięciu procent drugich głosów, żeby wejść do Bundestagu",
  "Fünf Prozent der Wähler müssen zur Wahl gehen": "Pięć procent wyborców musi pójść do urn",
  "Ein Kandidat braucht fünf Prozent im Wahlkreis":
    "Kandydat potrzebuje pięciu procent w okręgu",
  "Fünf Prozent der Sitze bleiben immer frei": "Pięć procent mandatów zawsze zostaje wolnych",
  "Sie hält Kleinstparteien draußen und soll das Parlament arbeitsfähig halten — eine Lehre aus der zersplitterten Weimarer Republik.":
    "Trzyma najmniejsze partie na zewnątrz i ma utrzymać parlament w stanie zdolnym do pracy — nauka z rozdrobnionej Republiki Weimarskiej.",
  "Wofür wird die Erststimme bei der Bundestagswahl verwendet?":
    "Do czego służy pierwszy głos w wyborach do Bundestagu?",
  "Für die Wahl einer Partei": "Do wyboru partii",
  "Für die Wahl eines Kandidaten im eigenen Wahlkreis": "Do wyboru kandydata we własnym okręgu",
  "Für die Wahl des Bundeskanzlers": "Do wyboru Bundeskanzler",
  "Für die Wahl des Bundespräsidenten": "Do wyboru Bundespräsident",
  "Die Erststimme gilt einer Person im Wahlkreis, die Zweitstimme einer Partei. Kanzler und Präsident wählt das Volk gar nicht.":
    "Pierwszy głos przypada osobie w okręgu, drugi partii. Kanclerza i prezydenta naród nie wybiera wcale.",
  "Wer darf in Deutschland bei Kommunalwahlen häufig mitwählen, ohne die deutsche Staatsangehörigkeit zu haben?":
    "Kto w Niemczech może często głosować w wyborach komunalnych, nie mając niemieckiego obywatelstwa?",
  "Niemand": "Nikt",
  "Bürger anderer EU-Staaten, die hier wohnen":
    "Obywatele innych państw UE, którzy tu mieszkają",
  "Alle Personen mit Aufenthaltstitel": "Wszystkie osoby z tytułem pobytowym",
  "Nur Personen aus Nachbarländern": "Tylko osoby z krajów sąsiednich",
  "EU-Bürger dürfen dort wählen, wo sie leben — bei Kommunal- und Europawahlen. Für die Bundestagswahl braucht es den deutschen Pass.":
    "Obywatele UE mogą głosować tam, gdzie mieszkają — w wyborach komunalnych i europejskich. Do wyborów do Bundestagu potrzebny jest niemiecki paszport.",
  "Was ist die Opposition im Bundestag?": "Czym jest opozycja w Bundestagu?",
  "Die Parteien, die nicht die Regierung stellen": "Partiami, które nie tworzą rządu",
  "Die Minister ohne eigenes Ministerium": "Ministrami bez własnego ministerstwa",
  "Die Abgeordneten des Bundesrates": "Posłami Bundesratu",
  "Die Verwaltung des Parlaments": "Administracją parlamentu",
  "Sie kontrolliert die Regierung, stellt Alternativen zur Debatte und ist damit ein fester Bestandteil der Demokratie.":
    "Kontroluje rząd, poddaje pod debatę alternatywy i jest przez to trwałą częścią demokracji.",
  "Wie heißt das Parlament eines Bundeslandes in den meisten Ländern?":
    "Jak nazywa się parlament kraju związkowego w większości krajów?",
  "Gemeinderat": "Gemeinderat",
  "Landtag. In Hamburg und Bremen heißt es Bürgerschaft, in Berlin Abgeordnetenhaus.":
    "Landtag. W Hamburgu i Bremie nazywa się Bürgerschaft, w Berlinie Abgeordnetenhaus.",
  "Wie heißt der Regierungschef eines Flächenlandes?":
    "Jak nazywa się szef rządu kraju powierzchniowego?",
  "Bürgermeister": "Bürgermeister",
  "Ministerpräsident": "Ministerpräsident",
  "Landeskanzler": "Landeskanzler",
  "Landrat": "Landrat",
  "Ministerpräsident. In den Stadtstaaten heißt das Amt Regierender Bürgermeister, Erster Bürgermeister oder Präsident des Senats.":
    "Ministerpräsident. W krajach-miastach urząd nazywa się Regierender Bürgermeister, Erster Bürgermeister albo Präsident des Senats.",
  "Wofür ist der Bund und nicht das Bundesland zuständig?":
    "Za co odpowiada federacja, a nie kraj związkowy?",
  "Für die Schulen": "Za szkoły",
  "Für die Außenpolitik": "Za politykę zagraniczną",
  "Für die Landespolizei": "Za policję krajową",
  "Für die Bauordnung": "Za prawo budowlane",
  "Außenpolitik, Verteidigung, Staatsangehörigkeit und Währung sind Bundessache. Schule, Polizei und Bauordnung sind Ländersache.":
    "Polityka zagraniczna, obrona, obywatelstwo i waluta to sprawy federacji. Szkoła, policja i prawo budowlane to sprawy krajów.",
  "Welche Aussage über die Landesverfassungen ist richtig?":
    "Które stwierdzenie o konstytucjach krajowych jest prawdziwe?",
  "Es gibt keine, es gilt nur das Grundgesetz": "Nie ma ich, obowiązuje tylko Grundgesetz",
  "Jedes Land hat eine eigene, die dem Grundgesetz nicht widersprechen darf":
    "Każdy kraj ma własną, która nie może być sprzeczna z Grundgesetz",
  "Sie stehen über dem Grundgesetz": "Stoją ponad Grundgesetz",
  "Nur die alten Bundesländer haben eine": "Mają je tylko stare kraje związkowe",
  "Jedes Land hat eine eigene Verfassung — aber Bundesrecht bricht Landesrecht, und dem Grundgesetz darf keine widersprechen.":
    "Każdy kraj ma własną konstytucję — ale prawo federalne łamie prawo krajowe, a Grundgesetz nie wolno przeczyć żadnej.",
  "Was entscheidet die Gemeinde selbst?": "O czym gmina decyduje sama?",
  "Die Höhe der Einkommensteuer": "O wysokości podatku dochodowego",
  "Bebauungspläne, Kitas und die örtliche Müllabfuhr":
    "O planach zabudowy, żłobkach i miejscowym wywozie śmieci",
  "Die Staatsangehörigkeit": "O obywatelstwie",
  "Die kommunale Selbstverwaltung regelt, was direkt vor Ort anfällt. Steuersätze, Schulpflicht und Staatsangehörigkeit liegen höher.":
    "Samorząd komunalny reguluje to, co powstaje na miejscu. Stawki podatków, obowiązek szkolny i obywatelstwo leżą wyżej.",
  "Wie viele Flächenländer hat Deutschland?": "Ile krajów powierzchniowych mają Niemcy?",
  "11": "11",
  "13": "13",
  "3": "3",
  "13 Flächenländer plus die drei Stadtstaaten Berlin, Hamburg und Bremen ergeben 16 Bundesländer.":
    "13 krajów powierzchniowych plus trzy kraje-miasta Berlin, Hamburg i Brema daje 16 krajów związkowych.",
  "An welches Gericht wendest du dich bei einem Streit über eine Kündigung?":
    "Do którego sądu zwracasz się przy sporze o wypowiedzenie?",
  "An das Verwaltungsgericht": "Do sądu administracyjnego",
  "An das Arbeitsgericht": "Do sądu pracy",
  "An das Finanzgericht": "Do sądu finansowego",
  "An das Sozialgericht": "Do sądu socjalnego",
  "Arbeitsgerichte entscheiden über Streit zwischen Arbeitgeber und Arbeitnehmer, Kündigungen eingeschlossen.":
    "Sądy pracy rozstrzygają spory między pracodawcą a pracownikiem, wypowiedzenia włącznie.",
  "Wer klagt im Strafverfahren gegen einen Angeklagten?":
    "Kto w postępowaniu karnym oskarża podsądnego?",
  "Der Richter": "Sędzia",
  "Die Staatsanwaltschaft": "Prokuratura",
  "Der Verteidiger": "Obrońca",
  "Die Staatsanwaltschaft erhebt Anklage. Der Richter entscheidet, die Polizei ermittelt, der Verteidiger vertritt den Angeklagten.":
    "Oskarżenie wnosi prokuratura. Sędzia rozstrzyga, policja prowadzi śledztwo, obrońca reprezentuje oskarżonego.",
  "Was bedeutet die Unabhängigkeit der Richter?": "Co oznacza niezawisłość sędziów?",
  "Richter dürfen selbst Gesetze machen": "Sędziowie mogą sami stanowić prawo",
  "Richter sind nur an das Gesetz gebunden und erhalten keine Weisungen":
    "Sędziowie są związani tylko ustawą i nie otrzymują poleceń",
  "Richter müssen nicht begründen, wie sie entscheiden":
    "Sędziowie nie muszą uzasadniać swoich rozstrzygnięć",
  "Richter werden vom Volk gewählt": "Sędziów wybiera naród",
  "Kein Minister und kein Vorgesetzter darf einem Richter vorschreiben, wie er zu entscheiden hat. Gebunden ist er allein an das Gesetz.":
    "Żaden minister ani przełożony nie może narzucić sędziemu, jak ma orzec. Związany jest wyłącznie ustawą.",
  "Wann kann eine Person Verfassungsbeschwerde erheben?":
    "Kiedy osoba może wnieść skargę konstytucyjną?",
  "Sofort, bevor sie andere Gerichte anruft": "Natychmiast, zanim zwróci się do innych sądów",
  "Wenn sie sich in Grundrechten verletzt sieht und der übrige Rechtsweg ausgeschöpft ist":
    "Gdy uważa, że naruszono jej prawa podstawowe, a pozostała droga sądowa jest wyczerpana",
  "Nur wenn der Bundestag zustimmt": "Tylko za zgodą Bundestagu",
  "Nur als Gruppe von mindestens 100 Personen": "Tylko jako grupa co najmniej 100 osób",
  "Zuerst der normale Rechtsweg, dann Karlsruhe. Die Verfassungsbeschwerde ist der letzte Schritt, nicht der erste.":
    "Najpierw zwykła droga sądowa, potem Karlsruhe. Skarga konstytucyjna to krok ostatni, nie pierwszy.",
  "Was gilt, wenn jemand in Deutschland eine Straftat begeht, die zur Tatzeit noch nicht strafbar war?":
    "Co obowiązuje, gdy ktoś popełnia w Niemczech czyn, który w chwili czynu nie był jeszcze karalny?",
  "Er wird nachträglich bestraft": "Zostaje ukarany później",
  "Er kann dafür nicht bestraft werden": "Nie może zostać za to ukarany",
  "Das Gericht entscheidet frei": "Sąd rozstrzyga swobodnie",
  "Die Strafe wird halbiert": "Kara zostaje zmniejszona o połowę",
  "Keine Strafe ohne Gesetz: Bestraft werden kann nur, was zum Zeitpunkt der Tat bereits unter Strafe stand.":
    "Nie ma kary bez ustawy: ukarać można tylko to, co w chwili czynu było już zagrożone karą.",
  "Wer bekommt in Deutschland einen Verteidiger, wenn er sich keinen leisten kann?":
    "Kto w Niemczech dostaje obrońcę, jeśli nie stać go na własnego?",
  "Niemand, ein Anwalt muss selbst bezahlt werden": "Nikt, adwokata trzeba opłacić samemu",
  "Jeder Angeklagte — der Staat hilft bei den Kosten":
    "Każdy oskarżony — państwo pomaga w kosztach",
  "Nur deutsche Staatsangehörige": "Tylko obywatele niemieccy",
  "Nur bei schweren Verbrechen und nur auf eigene Kosten":
    "Tylko przy ciężkich zbrodniach i tylko na własny koszt",
  "Das Recht auf Verteidigung darf nicht am Geld scheitern; deshalb gibt es Pflichtverteidigung und Prozesskostenhilfe.":
    "Prawo do obrony nie może rozbić się o pieniądze; dlatego istnieje obrona z urzędu i pomoc w kosztach procesu.",
  "Welche Versicherung zahlt, wenn jemand seine Arbeit verliert?":
    "Które ubezpieczenie płaci, gdy ktoś traci pracę?",
  "Die Rentenversicherung": "Ubezpieczenie emerytalne",
  "Die Arbeitslosenversicherung": "Ubezpieczenie na wypadek bezrobocia",
  "Die Pflegeversicherung": "Ubezpieczenie pielęgnacyjne",
  "Die Unfallversicherung": "Ubezpieczenie wypadkowe",
  "Die Arbeitslosenversicherung zahlt Arbeitslosengeld und finanziert Vermittlung und Weiterbildung.":
    "Ubezpieczenie na wypadek bezrobocia wypłaca zasiłek i finansuje pośrednictwo pracy oraz dokształcanie.",
  "Seit wann gibt es in Deutschland die Pflegeversicherung?":
    "Od kiedy istnieje w Niemczech ubezpieczenie pielęgnacyjne?",
  "Seit 1995": "Od 1995",
  "Seit 2005": "Od 2005",
  "Seit 2015": "Od 2015",
  "1995 kam sie als fünfte und jüngste Säule der Sozialversicherung hinzu.":
    "W 1995 doszło jako piąty i najmłodszy filar ubezpieczenia społecznego.",
  "Wer zahlt Kindergeld, und wovon hängt es ab?": "Kto płaci Kindergeld i od czego ono zależy?",
  "Der Arbeitgeber, abhängig vom Gehalt": "Pracodawca, zależnie od pensji",
  "Der Staat, unabhängig vom Einkommen der Eltern": "Państwo, niezależnie od dochodu rodziców",
  "Die Krankenkasse, abhängig von den Beiträgen": "Kasa chorych, zależnie od składek",
  "Die Gemeinde, abhängig vom Wohnort": "Gmina, zależnie od miejsca zamieszkania",
  "Kindergeld gibt es für jedes Kind, ohne Rücksicht auf das Einkommen der Eltern.":
    "Kindergeld przysługuje na każde dziecko, bez względu na dochód rodziców.",
  "Wie werden die Beiträge zur gesetzlichen Krankenversicherung berechnet?":
    "Jak oblicza się składki na ustawowe ubezpieczenie zdrowotne?",
  "Nach dem Alter der versicherten Person": "Według wieku ubezpieczonego",
  "Nach dem Einkommen": "Według dochodu",
  "Nach der Anzahl der Arztbesuche": "Według liczby wizyt u lekarza",
  "Für alle gleich hoch": "Dla wszystkich tak samo wysokie",
  "Nach dem Einkommen — das ist das Solidarprinzip. In der privaten Versicherung zählen dagegen Alter und Gesundheitszustand.":
    "Według dochodu — to zasada solidarności. W ubezpieczeniu prywatnym liczą się natomiast wiek i stan zdrowia.",
  "Was ist das Elterngeld?": "Czym jest Elterngeld?",
  "Ein Zuschuss zur Miete für Familien": "Dopłatą do czynszu dla rodzin",
  "Ein Ersatz für einen Teil des Einkommens nach der Geburt eines Kindes":
    "Zastąpieniem części dochodu po urodzeniu dziecka",
  "Das monatliche Geld für jedes Kind": "Miesięczną kwotą na każde dziecko",
  "Eine einmalige Zahlung zur Geburt": "Jednorazową wypłatą z okazji porodu",
  "Elterngeld ersetzt Einkommen, wenn Eltern nach der Geburt zu Hause bleiben. Kindergeld dagegen ist die laufende Zahlung pro Kind.":
    "Elterngeld zastępuje dochód, gdy rodzice zostają po porodzie w domu. Kindergeld to natomiast bieżąca wypłata na dziecko.",
  "Welche Behörde ist für Arbeitslosengeld und Arbeitsvermittlung zuständig?":
    "Który urząd odpowiada za zasiłek dla bezrobotnych i pośrednictwo pracy?",
  "Das Finanzamt": "Finanzamt",
  "Die Bundesagentur für Arbeit": "Bundesagentur für Arbeit",
  "Das Bürgeramt": "Bürgeramt",
  "Die Krankenkasse": "Kasa chorych",
  "Die Bundesagentur für Arbeit mit ihren Agenturen und Jobcentern vor Ort.":
    "Bundesagentur für Arbeit ze swoimi agencjami i miejscowymi Jobcenter.",
  "Wer war der erste Reichskanzler des Deutschen Kaiserreichs?":
    "Kto był pierwszym kanclerzem Rzeszy Cesarstwa Niemieckiego?",
  "Wilhelm II.": "Wilhelm II",
  "Otto von Bismarck": "Otto von Bismarck",
  "Friedrich Ebert": "Friedrich Ebert",
  "Bismarck ab 1871. Ebert wurde 1919 erster Reichspräsident, Adenauer 1949 erster Bundeskanzler.":
    "Bismarck od 1871 roku. Ebert został w 1919 pierwszym prezydentem Rzeszy, Adenauer w 1949 pierwszym Bundeskanzler.",
  "Wann endete der Erste Weltkrieg?": "Kiedy skończyła się pierwsza wojna światowa?",
  "1914": "1914",
  "1933": "1933",
  "1918. Im selben Jahr dankte der Kaiser ab und die Republik wurde ausgerufen.":
    "W 1918. W tym samym roku cesarz abdykował, a republikę proklamowano.",
  "Was war der Versailler Vertrag?": "Czym był traktat wersalski?",
  "Der Vertrag zur Gründung des Kaiserreichs": "Traktatem o powstaniu cesarstwa",
  "Der Friedensvertrag nach dem Ersten Weltkrieg":
    "Traktatem pokojowym po pierwszej wojnie światowej",
  "Der Vertrag über die Wiedervereinigung": "Traktatem o zjednoczeniu",
  "Der Gründungsvertrag der EU": "Traktatem założycielskim UE",
  "1919 geschlossen. Er verpflichtete Deutschland zu Reparationen und Gebietsabtretungen und belastete die junge Republik schwer.":
    "Zawarty w 1919 roku. Zobowiązał Niemcy do reparacji i oddania terytoriów, i mocno obciążył młodą republikę.",
  "Welche Neuerung brachte die Weimarer Republik für Frauen?":
    "Jaką nowość przyniosła kobietom Republika Weimarska?",
  "Das Recht auf eigenes Vermögen": "Prawo do własnego majątku",
  "Das Wahlrecht": "Prawo wyborcze",
  "Das Recht zu studieren": "Prawo do studiowania",
  "Den Mutterschutz": "Ochronę macierzyństwa",
  "1919 durften Frauen erstmals wählen und gewählt werden — die wohl wichtigste demokratische Neuerung dieser Jahre.":
    "W 1919 kobiety po raz pierwszy mogły wybierać i być wybierane — bodaj najważniejsza demokratyczna nowość tych lat.",
  "Welche Schwäche der Weimarer Republik beantwortet das Grundgesetz mit der Fünf-Prozent-Hürde?":
    "Na którą słabość Republiki Weimarskiej Grundgesetz odpowiada progiem pięciu procent?",
  "Die hohe Arbeitslosigkeit": "Wysokie bezrobocie",
  "Die Zersplitterung des Parlaments in viele kleine Parteien":
    "Rozdrobnienie parlamentu na wiele małych partii",
  "Die Reparationszahlungen": "Spłaty reparacji",
  "Die Macht des Reichspräsidenten": "Władzę prezydenta Rzeszy",
  "Viele Kleinstparteien machten stabile Mehrheiten unmöglich. Die Hürde soll genau das verhindern.":
    "Wiele najmniejszych partii uniemożliwiało trwałe większości. Próg ma temu właśnie zapobiec.",
  "Wofür ist Bismarck neben der Reichsgründung bekannt?":
    "Z czego oprócz zjednoczenia Rzeszy znany jest Bismarck?",
  "Für die Einführung der ersten Sozialversicherungen":
    "Z wprowadzenia pierwszych ubezpieczeń społecznych",
  "Für die Einführung des Frauenwahlrechts": "Z wprowadzenia praw wyborczych dla kobiet",
  "Für die Gründung der Bundeswehr": "Z założenia Bundeswehry",
  "Für die Einführung des Euro": "Z wprowadzenia euro",
  "Kranken-, Unfall- und Rentenversicherung entstanden in den 1880er Jahren — der deutsche Sozialstaat ist älter als die Demokratie.":
    "Ubezpieczenia zdrowotne, wypadkowe i emerytalne powstały w latach osiemdziesiątych XIX wieku — niemieckie państwo socjalne jest starsze niż demokracja.",
  "Wann kamen die Nationalsozialisten in Deutschland an die Macht?":
    "Kiedy narodowi socjaliści doszli w Niemczech do władzy?",
  "1939": "1939",
  "Am 30. Januar 1933 wurde Hitler Reichskanzler. 1939 begann der Krieg, 1945 endete er.":
    "30 stycznia 1933 Hitler został kanclerzem Rzeszy. W 1939 zaczęła się wojna, w 1945 się skończyła.",
  "Was bewirkte das Ermächtigungsgesetz von 1933?":
    "Co spowodowała ustawa o pełnomocnictwach z 1933 roku?",
  "Es gab dem Parlament mehr Rechte": "Dała parlamentowi więcej praw",
  "Es erlaubte der Regierung, Gesetze ohne das Parlament zu erlassen":
    "Pozwoliła rządowi wydawać ustawy bez parlamentu",
  "Es führte das Frauenwahlrecht ein": "Wprowadziła prawa wyborcze dla kobiet",
  "Es begrenzte die Macht des Reichskanzlers": "Ograniczyła władzę kanclerza Rzeszy",
  "Damit war die Gewaltenteilung beseitigt — der entscheidende Schritt von der Demokratie zur Diktatur.":
    "Podział władz był tym samym zniesiony — krok rozstrzygający, od demokracji do dyktatury.",
  "Welches Merkmal kennzeichnete den NS-Staat?":
    "Która cecha znamionowała państwo nazistowskie?",
  "Mehrere Parteien im Wettbewerb": "Kilka konkurujących partii",
  "Nur eine erlaubte Partei": "Tylko jedna dozwolona partia",
  "Unabhängige Gerichte": "Niezawisłe sądy",
  "Freie Presse": "Wolna prasa",
  "Ab Sommer 1933 war die NSDAP die einzige zugelassene Partei. Freie Presse und unabhängige Gerichte gab es nicht mehr.":
    "Od lata 1933 NSDAP była jedyną dopuszczoną partią. Wolnej prasy i niezawisłych sądów już nie było.",
  "Was geschah am 20. Juli 1944?": "Co wydarzyło się 20 lipca 1944 roku?",
  "Der Krieg endete": "Skończyła się wojna",
  "Ein Attentat auf Hitler scheiterte": "Zamach na Hitlera się nie powiódł",
  "Die Nürnberger Gesetze wurden erlassen": "Wydano ustawy norymberskie",
  "Die Mauer wurde gebaut": "Zbudowano mur",
  "Stauffenbergs Attentat scheiterte; die Beteiligten wurden hingerichtet. Der Tag steht für den militärischen Widerstand.":
    "Zamach Stauffenberga się nie powiódł; uczestników stracono. Ten dzień jest znakiem oporu wojskowego.",
  "Wann endete der Zweite Weltkrieg in Europa?":
    "Kiedy skończyła się druga wojna światowa w Europie?",
  "Am 9. November 1945": "9 listopada 1945",
  "Mit der bedingungslosen Kapitulation am 8. Mai 1945. Der 1. September 1939 war der Kriegsbeginn.":
    "Bezwarunkową kapitulacją 8 maja 1945. 1 września 1939 był początkiem wojny.",
  "Was waren die Nürnberger Gesetze von 1935?": "Czym były ustawy norymberskie z 1935 roku?",
  "Gesetze zum Schutz von Arbeitnehmern": "Ustawami chroniącymi pracowników",
  "Rassistische Gesetze, die jüdischen Deutschen ihre Bürgerrechte nahmen":
    "Rasistowskimi ustawami, które odebrały żydowskim Niemcom prawa obywatelskie",
  "Die Verfassung des NS-Staates": "Konstytucją państwa nazistowskiego",
  "Die Urteile gegen NS-Verbrecher": "Wyrokami przeciw zbrodniarzom nazistowskim",
  "Sie entrechteten jüdische Deutsche systematisch. Die Nürnberger *Prozesse* nach 1945 sind etwas völlig anderes.":
    "Systematycznie pozbawiły praw żydowskich Niemców. Norymberskie *procesy* po 1945 roku to coś zupełnie innego.",
  "Wie viele Juden wurden im Nationalsozialismus ermordet?":
    "Ilu Żydów zamordowano w narodowym socjalizmie?",
  "Etwa 600.000": "Około 600 000",
  "Etwa sechs Millionen": "Około sześciu milionów",
  "Etwa 60.000": "Około 60 000",
  "Etwa 16 Millionen": "Około 16 milionów",
  "Etwa sechs Millionen europäische Juden. Ermordet wurden außerdem Sinti und Roma, Menschen mit Behinderung und viele andere Gruppen.":
    "Około sześciu milionów europejskich Żydów. Zamordowano ponadto Sinti i Romów, osoby z niepełnosprawnością i wiele innych grup.",
  "Welche Gruppen wurden im Nationalsozialismus neben den Juden verfolgt?":
    "Które grupy prześladowano w narodowym socjalizmie obok Żydów?",
  "Nur politische Gegner": "Tylko przeciwników politycznych",
  "Sinti und Roma, Menschen mit Behinderung, politische Gegner und weitere Gruppen":
    "Sinti i Romów, osoby z niepełnosprawnością, przeciwników politycznych i dalsze grupy",
  "Ausschließlich Kriegsgefangene": "Wyłącznie jeńców wojennych",
  "Niemand sonst": "Nikogo innego",
  "Die Verfolgung traf viele Gruppen — nach rassistischen, politischen und weltanschaulichen Kriterien.":
    "Prześladowanie dotknęło wiele grup — według kryteriów rasistowskich, politycznych i światopoglądowych.",
  "Was ist in Deutschland strafbar?": "Co jest w Niemczech karalne?",
  "Die Regierung zu kritisieren": "Krytykowanie rządu",
  "Den Holocaust öffentlich zu leugnen": "Publiczne negowanie Holokaustu",
  "An einer Demonstration teilzunehmen": "Udział w demonstracji",
  "Eine Partei zu gründen": "Założenie partii",
  "Holocaustleugnung ist Volksverhetzung und strafbar. Regierungskritik, Demonstrationen und Parteigründungen sind dagegen Grundrechte.":
    "Negowanie Holokaustu to Volksverhetzung i jest karalne. Krytyka rządu, demonstracje i zakładanie partii to natomiast prawa podstawowe.",
  "Was war das Besondere an den Nürnberger Prozessen?":
    "Co było szczególne w procesach norymberskich?",
  "Sie fanden vor einem deutschen Gericht statt": "Odbyły się przed sądem niemieckim",
  "Erstmals wurden Staatsführer persönlich für Kriegsverbrechen zur Verantwortung gezogen":
    "Po raz pierwszy przywódców państwa pociągnięto osobiście do odpowiedzialności za zbrodnie wojenne",
  "Alle Angeklagten wurden freigesprochen": "Wszystkich oskarżonych uniewinniono",
  "Sie führten zur Gründung der Bundesrepublik":
    "Doprowadziły do powstania Republiki Federalnej",
  "1945/46 klagten die Alliierten führende Nationalsozialisten an — die Geburtsstunde des modernen Völkerstrafrechts.":
    "W latach 1945–46 alianci oskarżyli czołowych narodowych socjalistów — to godzina narodzin nowoczesnego międzynarodowego prawa karnego.",
  "Was ist am 27. Januar in Deutschland?": "Co przypada w Niemczech na 27 stycznia?",
  "Der Gedenktag für die Opfer des Nationalsozialismus":
    "Dzień pamięci o ofiarach narodowego socjalizmu",
  "Der Tag des Grundgesetzes": "Dzień Grundgesetz",
  "Am 27. Januar 1945 wurde Auschwitz befreit. Seitdem ist der Tag deutschlandweiter Gedenktag.":
    "27 stycznia 1945 wyzwolono Auschwitz. Od tego czasu dzień ten jest ogólnoniemieckim dniem pamięci.",
  "Wie verhält sich Deutschland heute zu seiner NS-Vergangenheit?":
    "Jak Niemcy odnoszą się dziś do swojej nazistowskiej przeszłości?",
  "Sie wird nicht mehr thematisiert": "Nie porusza się jej już wcale",
  "Sie wird in Gedenkstätten, Schulen und Gedenktagen bewusst wachgehalten":
    "Utrzymuje się ją świadomie żywą w miejscach pamięci, szkołach i dniach pamięci",
  "Sie ist nur in Fachbüchern nachzulesen": "Można ją przeczytać tylko w książkach fachowych",
  "Sie darf nicht öffentlich besprochen werden": "Nie wolno jej publicznie omawiać",
  "Erinnerungskultur ist Teil des Selbstverständnisses: Gedenkstätten, Unterricht, Gedenktage und eine besondere Verantwortung gegenüber Israel.":
    "Kultura pamięci należy do samorozumienia kraju: miejsca pamięci, lekcje, dni pamięci i szczególna odpowiedzialność wobec Izraela.",
  "Wann wurde die Bundesrepublik Deutschland gegründet?":
    "Kiedy powstała Republika Federalna Niemiec?",
  "1949, mit dem Inkrafttreten des Grundgesetzes am 23. Mai. Im selben Jahr entstand im Osten die DDR.":
    "W 1949, wraz z wejściem w życie Grundgesetz 23 maja. W tym samym roku na wschodzie powstała NRD.",
  "Wann wurde die DDR gegründet?": "Kiedy powstała NRD?",
  "Am 7. Oktober 1949": "7 października 1949",
  "7. Oktober 1949, rund viereinhalb Monate nach der Bundesrepublik.":
    "7 października 1949, jakieś cztery i pół miesiąca po Republice Federalnej.",
  "Was war das „Wirtschaftswunder“?": "Czym był „cud gospodarczy”?",
  "Der schnelle wirtschaftliche Aufschwung der Bundesrepublik in den 1950er Jahren":
    "Szybkim wzrostem gospodarczym Republiki Federalnej w latach pięćdziesiątych",
  "Die Einführung des Euro": "Wprowadzeniem euro",
  "Der Wiederaufbau der DDR": "Odbudową NRD",
  "Die Entdeckung von Rohstoffen": "Odkryciem surowców",
  "Nach der Zerstörung wuchs die westdeutsche Wirtschaft rasant; Vollbeschäftigung und steigender Wohlstand prägten das Jahrzehnt.":
    "Po zniszczeniach gospodarka zachodnioniemiecka rosła w zawrotnym tempie; pełne zatrudnienie i rosnący dobrobyt naznaczyły to dziesięciolecie.",
  "Warum kamen ab 1955 „Gastarbeiter“ nach Westdeutschland?":
    "Dlaczego od 1955 roku do Niemiec Zachodnich przybywali „Gastarbeiter”?",
  "Weil Arbeitskräfte fehlten": "Bo brakowało rąk do pracy",
  "Weil die Bevölkerung zu groß geworden war": "Bo ludność zrobiła się zbyt liczna",
  "Weil die DDR sie schickte": "Bo przysyłała ich NRD",
  "Weil die Alliierten es verlangten": "Bo żądali tego alianci",
  "Die wachsende Wirtschaft brauchte Arbeitskräfte. Angeworben wurde in Italien, Spanien, Griechenland, der Türkei und weiteren Ländern.":
    "Rosnąca gospodarka potrzebowała rąk do pracy. Werbowano we Włoszech, Hiszpanii, Grecji, Turcji i dalszych krajach.",
  "Was war der Marshallplan?": "Czym był plan Marshalla?",
  "Ein Plan zur Teilung Deutschlands": "Planem podziału Niemiec",
  "Ein amerikanisches Hilfsprogramm für den Wiederaufbau":
    "Amerykańskim programem pomocy przy odbudowie",
  "Der Plan für die Berliner Mauer": "Planem muru berlińskiego",
  "Ein Abkommen über Reparationen": "Porozumieniem o reparacjach",
  "Ab 1948 halfen die USA westeuropäischen Staaten mit Krediten und Warenlieferungen beim Wiederaufbau.":
    "Od 1948 roku USA pomagały państwom zachodnioeuropejskim w odbudowie kredytami i dostawami towarów.",
  "Welche Wirtschaftsordnung galt in der Bundesrepublik?":
    "Jaki ustrój gospodarczy obowiązywał w Republice Federalnej?",
  "Die Planwirtschaft": "Gospodarka planowa",
  "Die soziale Marktwirtschaft": "Społeczna gospodarka rynkowa",
  "Die reine freie Marktwirtschaft ohne Regeln": "Czysta wolna gospodarka rynkowa bez reguł",
  "Die Staatswirtschaft": "Gospodarka państwowa",
  "Soziale Marktwirtschaft: freier Wettbewerb, aber mit sozialem Ausgleich. Die DDR hatte dagegen Planwirtschaft.":
    "Społeczna gospodarka rynkowa: wolna konkurencja, ale z wyrównaniem socjalnym. NRD miała natomiast gospodarkę planową.",
  "Welche Partei bestimmte in der DDR die Politik?": "Która partia wyznaczała politykę w NRD?",
  "Die CDU": "CDU",
  "Die SED": "SED",
  "Die SPD": "SPD",
  "Die FDP": "FDP",
  "Die Sozialistische Einheitspartei Deutschlands hatte den Führungsanspruch. Andere Parteien existierten nur ohne echte Macht.":
    "Socjalistyczna Partia Jedności Niemiec miała roszczenie do przywództwa. Inne partie istniały tylko bez rzeczywistej władzy.",
  "Wie hieß das Parlament der DDR?": "Jak nazywał się parlament NRD?",
  "Volkskammer": "Volkskammer",
  "Reichstag": "Reichstag",
  "Die Volkskammer. Frei gewählt wurde sie erst ein einziges Mal, im März 1990.":
    "Volkskammer. Wolne wybory odbyły się do niej tylko raz jeden, w marcu 1990 roku.",
  "Was geschah am 17. Juni 1953 in der DDR?": "Co wydarzyło się 17 czerwca 1953 roku w NRD?",
  "Ein Aufstand wurde mit sowjetischen Panzern niedergeschlagen":
    "Powstanie zdławiono radzieckimi czołgami",
  "Die DDR wurde gegründet": "Powstała NRD",
  "Die ersten freien Wahlen fanden statt": "Odbyły się pierwsze wolne wybory",
  "Aus Streiks gegen höhere Arbeitsnormen wurde ein Aufstand gegen die Regierung. Bis 1990 war der 17. Juni westdeutscher Nationalfeiertag.":
    "Ze strajków przeciw podwyższonym normom pracy wyrosło powstanie przeciw rządowi. Do 1990 roku 17 czerwca był zachodnioniemieckim świętem narodowym.",
  "Warum wurde die Berliner Mauer gebaut?": "Dlaczego zbudowano mur berliński?",
  "Um Angriffe aus dem Westen abzuwehren": "Żeby odeprzeć ataki z zachodu",
  "Um die eigene Bevölkerung an der Flucht zu hindern":
    "Żeby powstrzymać własną ludność przed ucieczką",
  "Um die Stadt vor Hochwasser zu schützen": "Żeby chronić miasto przed powodzią",
  "Immer mehr Menschen verließen die DDR. Die Mauer hielt niemanden draußen, sondern die eigenen Bürger drinnen.":
    "Coraz więcej ludzi opuszczało NRD. Mur nie trzymał nikogo na zewnątrz, lecz własnych obywateli w środku.",
  "Was können Betroffene heute mit ihrer Stasi-Akte tun?":
    "Co osoby zainteresowane mogą dziś zrobić ze swoją teczką Stasi?",
  "Nichts, die Akten sind vernichtet": "Nic, akta zniszczono",
  "Sie können Einsicht beantragen und ihre Akte lesen":
    "Mogą złożyć wniosek o wgląd i przeczytać swoją teczkę",
  "Nur Historiker dürfen sie einsehen": "Wgląd mają tylko historycy",
  "Sie sind bis 2050 gesperrt": "Są zamknięte do 2050 roku",
  "Wer überwacht wurde, darf die eigene Akte lesen. Die Aufarbeitung gehört zum Umgang mit der SED-Diktatur.":
    "Kto był inwigilowany, może przeczytać własną teczkę. Rozliczenie należy do sposobu obchodzenia się z dyktaturą SED.",
  "Wie wurde in der DDR gewählt?": "Jak wybierano w NRD?",
  "Frei zwischen mehreren Parteien": "Swobodnie, spośród kilku partii",
  "Mit einer Einheitsliste, ohne echte Auswahl": "Z listy jednolitej, bez rzeczywistego wyboru",
  "Nur in den Städten": "Tylko w miastach",
  "Es gab Wahlen, aber keine Alternativen: Die Einheitsliste stand fest, echte Auswahl gab es nicht.":
    "Wybory były, ale alternatyw nie: lista jednolita była ustalona, rzeczywistego wyboru nie było.",
  "Welcher Ruf prägte die Montagsdemonstrationen 1989?":
    "Które wołanie naznaczyło demonstracje poniedziałkowe w 1989 roku?",
  "„Freiheit für alle“": "„Wolność dla wszystkich”",
  "„Wir sind das Volk“": "„Wir sind das Volk”",
  "„Nie wieder Krieg“": "„Nigdy więcej wojny”",
  "„Einigkeit und Recht“": "„Jedność i prawo”",
  "„Wir sind das Volk“ — wörtlich der Gedanke aus Artikel 20 des Grundgesetzes, den die DDR nur behauptete.":
    "„Wir sind das Volk” — my jesteśmy narodem, dosłownie myśl z artykułu 20 Grundgesetz, którą NRD tylko głosiła.",
  "In welcher Stadt waren die Montagsdemonstrationen 1989 besonders bedeutsam?":
    "W którym mieście demonstracje poniedziałkowe w 1989 roku miały szczególne znaczenie?",
  "Dresden": "Drezno",
  "Rostock": "Rostock",
  "Erfurt": "Erfurt",
  "In Leipzig, ausgehend von den Friedensgebeten in der Nikolaikirche, wuchsen die Demonstrationen auf Hunderttausende an.":
    "W Lipsku, wyrastając z modlitw o pokój w Nikolaikirche, demonstracje urosły do setek tysięcy.",
  "Wer war zur Zeit der Wiedervereinigung Bundeskanzler?":
    "Kto był kanclerzem w czasie zjednoczenia?",
  "Helmut Schmidt": "Helmut Schmidt",
  "Gerhard Schröder": "Gerhard Schröder",
  "Helmut Kohl, Bundeskanzler von 1982 bis 1998, gilt deshalb als „Kanzler der Einheit“.":
    "Helmut Kohl, Bundeskanzler od 1982 do 1998 roku, uchodzi dlatego za „kanclerza jedności”.",
  "Was regelte der Zwei-plus-Vier-Vertrag?": "Co regulował układ dwa plus cztery?",
  "Die Aufteilung Berlins in vier Sektoren": "Podział Berlina na cztery sektory",
  "Die volle Souveränität des vereinten Deutschlands und die Bestätigung seiner Grenzen":
    "Pełną suwerenność zjednoczonych Niemiec i potwierdzenie ich granic",
  "Den Beitritt zur NATO": "Przystąpienie do NATO",
  "Die beiden deutschen Staaten und die vier Siegermächte einigten sich 1990 darauf — die außenpolitische Voraussetzung der Einheit.":
    "Oba państwa niemieckie i cztery mocarstwa zwycięskie uzgodniły go w 1990 roku — to zewnętrzny warunek jedności.",
  "Wann zogen Bundestag und Bundesregierung nach Berlin um?":
    "Kiedy Bundestag i Bundesregierung przeniosły się do Berlina?",
  "2005": "2005",
  "Sie sind in Bonn geblieben": "Zostały w Bonn",
  "1999. Berlin war schon 1990 wieder Hauptstadt, der Umzug von Parlament und Regierung folgte neun Jahre später.":
    "W 1999. Berlin był stolicą już od 1990 roku, przeprowadzka parlamentu i rządu nastąpiła dziewięć lat później.",
  "Wie kam die staatliche Einheit 1990 zustande?":
    "Jak doszła do skutku jedność państwowa w 1990 roku?",
  "Durch einen Krieg": "Przez wojnę",
  "Durch den Beitritt der DDR zur Bundesrepublik":
    "Przez przystąpienie NRD do Republiki Federalnej",
  "Durch eine Entscheidung der Vereinten Nationen":
    "Przez decyzję Organizacji Narodów Zjednoczonych",
  "Durch eine Volksabstimmung in beiden Staaten": "Przez głosowanie ludowe w obu państwach",
  "Die DDR trat der Bundesrepublik bei; das Grundgesetz galt fortan für ganz Deutschland.":
    "NRD przystąpiła do Republiki Federalnej; Grundgesetz obowiązywał odtąd w całych Niemczech.",
  "Wie viele Mitgliedstaaten hat die Europäische Union heute?":
    "Ile państw członkowskich ma dziś Unia Europejska?",
  "27": "27",
  "31": "31",
  "50": "50",
  "27 — seit dem Austritt des Vereinigten Königreichs im Jahr 2020.":
    "27 — od wyjścia Zjednoczonego Królestwa w 2020 roku.",
  "Welche Währung galt in Deutschland vor dem Euro?":
    "Która waluta obowiązywała w Niemczech przed euro?",
  "Der Schilling": "Szyling",
  "Die D-Mark": "D-Mark",
  "Der Franken": "Frank",
  "Die Reichsmark": "Reichsmark",
  "Die Deutsche Mark, eingeführt 1948 und 2002 vom Euro-Bargeld abgelöst.":
    "Deutsche Mark, wprowadzona w 1948 roku i zastąpiona gotówką euro w 2002.",
  "Was bedeutet Freizügigkeit in der EU?": "Co oznacza swoboda przemieszczania się w UE?",
  "Waren sind zollfrei": "Towary są bezcłowe",
  "EU-Bürger dürfen in jedem Mitgliedstaat leben und arbeiten":
    "Obywatele UE mogą mieszkać i pracować w każdym państwie członkowskim",
  "Man darf überall Auto fahren": "Wszędzie wolno prowadzić samochód",
  "Es gibt keine Steuern zwischen den Ländern": "Między krajami nie ma podatków",
  "Personenfreizügigkeit: leben und arbeiten, wo man möchte — eine der Grundfreiheiten des Binnenmarktes.":
    "Swoboda przepływu osób: mieszkać i pracować tam, gdzie się chce — jedna z podstawowych swobód rynku wewnętrznego.",
  "Wie oft wird das Europäische Parlament gewählt?":
    "Jak często wybiera się Parlament Europejski?",
  "Alle fünf Jahre, direkt von den Bürgerinnen und Bürgern. Der Bundestag wird dagegen alle vier Jahre gewählt.":
    "Co pięć lat, bezpośrednio przez obywatelki i obywateli. Bundestag wybiera się natomiast co cztery lata.",
  "Welche Organisation ist ein Verteidigungsbündnis?":
    "Która organizacja jest sojuszem obronnym?",
  "Der Europarat": "Rada Europy",
  "Die Vereinten Nationen": "Organizacja Narodów Zjednoczonych",
  "Die NATO ist das Verteidigungsbündnis. Die EU ist ein politischer und wirtschaftlicher Zusammenschluss, der Europarat kümmert sich um Menschenrechte.":
    "Sojuszem obronnym jest NATO. UE to zrzeszenie polityczne i gospodarcze, Rada Europy zajmuje się prawami człowieka.",
  "Was bedeutet es, dass die Bundeswehr eine „Parlamentsarmee“ ist?":
    "Co znaczy, że Bundeswehra jest „armią parlamentu”?",
  "Abgeordnete dienen als Soldaten": "Posłowie służą jako żołnierze",
  "Über Auslandseinsätze entscheidet der Bundestag":
    "O misjach zagranicznych decyduje Bundestag",
  "Die Armee untersteht dem Bundespräsidenten": "Armia podlega Bundespräsident",
  "Soldaten dürfen nicht wählen": "Żołnierze nie mogą głosować",
  "Kein Auslandseinsatz ohne Zustimmung des Bundestages — die Kontrolle liegt beim Parlament, nicht allein bei der Regierung.":
    "Żadnej misji zagranicznej bez zgody Bundestagu — kontrola leży w parlamencie, a nie wyłącznie w rządzie.",
  "Wie heißt die Hauptstadt Deutschlands?": "Jak nazywa się stolica Niemiec?",
  "Bonn": "Bonn",
  "Hamburg": "Hamburg",
  "Berlin — seit 1990 wieder Hauptstadt, seit 1999 auch Sitz von Parlament und Regierung. Bonn war es bis dahin.":
    "Berlin — od 1990 roku znów stolica, od 1999 także siedziba parlamentu i rządu. Do tego czasu było nią Bonn.",
  "Welche Stadt ist nach Berlin die zweitgrößte Deutschlands?":
    "Które miasto jest po Berlinie drugim co do wielkości w Niemczech?",
  "Köln": "Kolonia",
  "Frankfurt am Main": "Frankfurt nad Menem",
  "Hamburg, gefolgt von München und Köln.": "Hamburg, a za nim Monachium i Kolonia.",
  "An welche zwei Meere grenzt Deutschland?": "Z którymi dwoma morzami graniczą Niemcy?",
  "Nordsee und Ostsee": "Morze Północne i Bałtyk",
  "Nordsee und Mittelmeer": "Morze Północne i Morze Śródziemne",
  "Ostsee und Schwarzes Meer": "Bałtyk i Morze Czarne",
  "Atlantik und Nordsee": "Atlantyk i Morze Północne",
  "Im Nordwesten die Nordsee, im Nordosten die Ostsee.":
    "Na północnym zachodzie Morze Północne, na północnym wschodzie Bałtyk.",
  "Welcher große deutsche Fluss fließt nach Osten ins Schwarze Meer?":
    "Która wielka niemiecka rzeka płynie na wschód, do Morza Czarnego?",
  "Die Weser": "Wezera",
  "Die Donau ist der einzige große Fluss Deutschlands, der nach Osten fließt. Rhein, Elbe und Weser münden in die Nordsee.":
    "Dunaj jest jedyną wielką rzeką Niemiec, która płynie na wschód. Ren, Łaba i Wezera uchodzą do Morza Północnego.",
  "Wie heißt das Wappentier der Bundesrepublik Deutschland?":
    "Jak nazywa się zwierzę herbowe Republiki Federalnej Niemiec?",
  "Der Löwe": "Lew",
  "Der Bundesadler": "Bundesadler",
  "Der Bär": "Niedźwiedź",
  "Das Pferd": "Koń",
  "Der Bundesadler. Der Bär ist das Wappentier Berlins, nicht des Bundes.":
    "Bundesadler, orzeł federalny. Niedźwiedź jest zwierzęciem herbowym Berlina, a nie federacji.",
  "Wie viele Menschen leben ungefähr in Deutschland?":
    "Ile mniej więcej ludzi mieszka w Niemczech?",
  "Etwa 50 Millionen": "Około 50 milionów",
  "Etwa 84 Millionen": "Około 84 milionów",
  "Etwa 120 Millionen": "Około 120 milionów",
  "Etwa 30 Millionen": "Około 30 milionów",
  "Rund 84 Millionen — damit ist Deutschland der bevölkerungsreichste Staat der Europäischen Union.":
    "Około 84 milionów — Niemcy są przez to najludniejszym państwem Unii Europejskiej.",
  "Welche zwei christlichen Kirchen sind in Deutschland am größten?":
    "Które dwa kościoły chrześcijańskie są w Niemczech największe?",
  "Die orthodoxe und die anglikanische": "Prawosławny i anglikański",
  "Die katholische und die evangelische": "Katolicki i ewangelicki",
  "Die evangelische und die orthodoxe": "Ewangelicki i prawosławny",
  "Die katholische und die anglikanische": "Katolicki i anglikański",
  "Die katholische und die evangelische Kirche. Etwa die Hälfte der Bevölkerung gehört heute gar keiner Religionsgemeinschaft an.":
    "Kościół katolicki i ewangelicki. Około połowa ludności nie należy dziś do żadnej wspólnoty religijnej.",
  "Darf man in Deutschland aus der Kirche austreten?":
    "Czy w Niemczech można wystąpić z kościoła?",
  "Nein, die Mitgliedschaft ist lebenslang": "Nie, członkostwo jest dożywotnie",
  "Ja, jederzeit": "Tak, w każdej chwili",
  "Nur mit Zustimmung der Gemeinde": "Tylko za zgodą parafii",
  "Nur einmal im Leben": "Tylko raz w życiu",
  "Der Austritt ist jederzeit möglich; danach entfällt auch die Kirchensteuer. Religionsfreiheit schließt die Freiheit ein, keiner Religion anzugehören.":
    "Wystąpienie jest możliwe w każdej chwili; potem odpada też podatek kościelny. Wolność religii obejmuje wolność nienależenia do żadnej.",
  "Wie ist der Staat in Deutschland gegenüber Religionen eingestellt?":
    "Jak państwo w Niemczech odnosi się do religii?",
  "Er bevorzugt die christlichen Kirchen": "Faworyzuje kościoły chrześcijańskie",
  "Er ist weltanschaulich neutral": "Jest światopoglądowo neutralne",
  "Er lehnt Religion ab": "Odrzuca religię",
  "Er schreibt eine Staatsreligion vor": "Narzuca religię państwową",
  "Weltanschauliche Neutralität: Der Staat hat keine eigene Religion und bevorzugt keine Gemeinschaft.":
    "Neutralność światopoglądowa: państwo nie ma własnej religii i nie faworyzuje żadnej wspólnoty.",
  "Wer zahlt Kirchensteuer?": "Kto płaci podatek kościelny?",
  "Alle Steuerzahler": "Wszyscy podatnicy",
  "Nur Mitglieder einer steuererhebenden Religionsgemeinschaft":
    "Tylko członkowie wspólnoty religijnej, która go pobiera",
  "Nur Selbstständige": "Tylko osoby samozatrudnione",
  "Niemand, das ist abgeschafft": "Nikt, to zniesiono",
  "Nur Mitglieder. Wer austritt oder keiner Gemeinschaft angehört, zahlt sie nicht.":
    "Tylko członkowie. Kto wystąpi albo do żadnej wspólnoty nie należy, nie płaci go.",
  "Was gilt für religiöse Gemeinschaften in Deutschland?":
    "Co obowiązuje wspólnoty religijne w Niemczech?",
  "Sie dürfen eigene Gerichte mit verbindlichen Urteilen einrichten":
    "Mogą tworzyć własne sądy z wiążącymi wyrokami",
  "Sie müssen sich an die staatlichen Gesetze halten": "Muszą trzymać się ustaw państwowych",
  "Sie stehen über dem staatlichen Recht": "Stoją ponad prawem państwowym",
  "Sie brauchen eine Erlaubnis des Bundespräsidenten": "Potrzebują zezwolenia Bundespräsident",
  "Religionsausübung ist frei, aber das staatliche Recht gilt für alle. Parallele Rechtsprechung mit verbindlicher Wirkung gibt es nicht.":
    "Praktykowanie religii jest wolne, ale prawo państwowe obowiązuje wszystkich. Równoległego sądownictwa o wiążącej mocy nie ma.",
  "Welches Fach können Schüler wählen, die nicht am Religionsunterricht teilnehmen?":
    "Który przedmiot mogą wybrać uczniowie, którzy nie uczestniczą w lekcjach religii?",
  "Ethik oder Philosophie": "Etykę albo filozofię",
  "Eine zweite Fremdsprache": "Drugi język obcy",
  "Gar keins": "Żadnego",
  "Als Alternative wird meist Ethik oder Philosophie angeboten. Die Teilnahme am Religionsunterricht ist freiwillig.":
    "Jako alternatywę oferuje się najczęściej etykę albo filozofię. Udział w lekcjach religii jest dobrowolny.",
  "Ab welchem Alter darf man in Deutschland heiraten?":
    "Od jakiego wieku można w Niemczech zawrzeć małżeństwo?",
  "Es gibt keine Altersgrenze": "Nie ma granicy wieku",
  "Ab der Volljährigkeit mit 18. Ehen mit Minderjährigen werden in Deutschland nicht anerkannt.":
    "Od pełnoletności, czyli od 18 lat. Małżeństw z osobami niepełnoletnimi Niemcy nie uznają.",
  "Wo wird in Deutschland rechtsgültig geheiratet?":
    "Gdzie w Niemczech zawiera się prawnie ważne małżeństwo?",
  "In der Kirche": "W kościele",
  "Beim Standesamt": "W Standesamt",
  "Beim Notar": "U notariusza",
  "Beim Familiengericht": "W sądzie rodzinnym",
  "Nur die standesamtliche Eheschließung ist rechtsgültig. Eine religiöse Zeremonie kann hinzukommen, ersetzt sie aber nicht.":
    "Prawnie ważne jest tylko małżeństwo zawarte w Standesamt. Ceremonia religijna może dojść, ale go nie zastępuje.",
  "Was gilt in Deutschland vor einer Scheidung in der Regel?":
    "Co z reguły obowiązuje w Niemczech przed rozwodem?",
  "Eine Wartezeit von einem Monat": "Miesięczny okres oczekiwania",
  "Ein Trennungsjahr": "Rok separacji",
  "Die Zustimmung beider Familien": "Zgoda obu rodzin",
  "Eine Genehmigung der Kirche": "Zezwolenie kościoła",
  "Meist muss ein Trennungsjahr vergangen sein. Über die Scheidung entscheidet das Familiengericht.":
    "Zwykle musi upłynąć rok separacji. O rozwodzie rozstrzyga sąd rodzinny.",
  "Seit wann dürfen in Deutschland auch gleichgeschlechtliche Paare heiraten?":
    "Od kiedy w Niemczech mogą zawierać małżeństwo także pary jednopłciowe?",
  "Seit 2001": "Od 2001",
  "Seit 2017": "Od 2017",
  "Das ist nicht möglich": "To niemożliwe",
  "Seit 2017 steht die Ehe allen Paaren offen. Zuvor gab es seit 2001 die eingetragene Lebenspartnerschaft.":
    "Od 2017 roku małżeństwo stoi otworem dla wszystkich par. Wcześniej, od 2001, istniał zarejestrowany związek partnerski.",
  "Welche Behörde hilft, wenn das Wohl eines Kindes gefährdet ist?":
    "Który urząd pomaga, gdy dobro dziecka jest zagrożone?",
  "Das Ordnungsamt": "Ordnungsamt",
  "Das Jugendamt": "Jugendamt",
  "Das Standesamt": "Standesamt",
  "Das Einwohnermeldeamt": "Einwohnermeldeamt",
  "Das Jugendamt unterstützt Familien und schützt Kinder vor Gewalt und Vernachlässigung.":
    "Jugendamt wspiera rodziny i chroni dzieci przed przemocą i zaniedbaniem.",
  "Eine Frau wird von ihrem Ehemann geschlagen. Was gilt in Deutschland?":
    "Kobieta jest bita przez swojego męża. Co obowiązuje w Niemczech?",
  "Das ist Privatsache der Familie": "To prywatna sprawa rodziny",
  "Das ist eine Straftat, und sie kann Hilfe und Schutz bekommen":
    "To przestępstwo, a ona może dostać pomoc i ochronę",
  "Nur bei schweren Verletzungen greift der Staat ein":
    "Państwo wkracza dopiero przy ciężkich obrażeniach",
  "Sie muss zuerst die Scheidung einreichen": "Musi najpierw złożyć pozew o rozwód",
  "Gewalt in der Ehe ist eine Straftat. Die Polizei kann den Täter der Wohnung verweisen; Frauenhäuser und das Hilfetelefon helfen sofort.":
    "Przemoc w małżeństwie jest przestępstwem. Policja może usunąć sprawcę z mieszkania; schroniska dla kobiet i telefon pomocowy pomagają natychmiast.",
  "Ab welchem Alter beginnt in Deutschland üblicherweise die Schulpflicht?":
    "Od jakiego wieku zaczyna się w Niemczech zwykle obowiązek szkolny?",
  "Mit vier Jahren": "Od czwartego roku życia",
  "Mit sechs Jahren": "Od szóstego roku życia",
  "Mit acht Jahren": "Od ósmego roku życia",
  "Mit zehn Jahren": "Od dziesiątego roku życia",
  "In der Regel mit sechs Jahren, und sie dauert mindestens neun Schuljahre.":
    "Z reguły od szóstego roku życia, i trwa co najmniej dziewięć lat szkolnych.",
  "Wie lange dauert die Grundschule in den meisten Bundesländern?":
    "Jak długo trwa szkoła podstawowa w większości krajów związkowych?",
  "Zwei Jahre": "Dwa lata",
  "Meist vier Jahre; in Berlin und Brandenburg sind es sechs. Auch das ist Ländersache.":
    "Najczęściej cztery lata; w Berlinie i Brandenburgii sześć. To także sprawa krajów.",
  "Was ist BAföG?": "Czym jest BAföG?",
  "Eine Prüfung am Ende der Schule": "Egzaminem na koniec szkoły",
  "Eine staatliche Unterstützung für Schüler und Studierende":
    "Państwowym wsparciem dla uczniów i studentów",
  "Ein Zuschuss für Auszubildende vom Betrieb": "Dopłatą dla uczniów zawodu od zakładu pracy",
  "Eine Gebühr für das Studium": "Opłatą za studia",
  "Staatliche Ausbildungsförderung für alle, deren Eltern die Ausbildung nicht finanzieren können.":
    "Państwowe wsparcie kształcenia dla wszystkich, których rodzice nie mogą go sfinansować.",
  "Wer nimmt am Ende einer dualen Ausbildung die Abschlussprüfung ab?":
    "Kto przeprowadza egzamin końcowy dualnego kształcenia zawodowego?",
  "Die Berufsschule allein": "Sama szkoła zawodowa",
  "Die Industrie- und Handelskammer oder die Handwerkskammer":
    "Industrie- und Handelskammer albo Handwerkskammer",
  "Das Kultusministerium": "Ministerstwo oświaty",
  "Der Ausbildungsbetrieb selbst": "Sam zakład szkolący",
  "Die Kammern prüfen — deshalb ist der Abschluss bundesweit vergleichbar und nicht vom einzelnen Betrieb abhängig.":
    "Egzamin przeprowadzają izby — dlatego dyplom jest porównywalny w całym kraju i nie zależy od pojedynczego zakładu.",
  "Du hast im Ausland einen Beruf erlernt. Was kannst du in Deutschland tun?":
    "Wyuczyłeś się zawodu za granicą. Co możesz zrobić w Niemczech?",
  "Nichts, der Abschluss gilt hier nicht": "Nic, dyplom tu nie obowiązuje",
  "Du kannst deinen Abschluss anerkennen lassen":
    "Możesz doprowadzić do uznania swojego dyplomu",
  "Du musst die Ausbildung komplett wiederholen": "Musisz całą naukę zawodu powtórzyć",
  "Du darfst nur als Hilfskraft arbeiten": "Możesz pracować tylko jako pomocnik",
  "Es gibt ein Anerkennungsverfahren. Gerade in Pflege, Handwerk und technischen Berufen ist es der Schlüssel zum Arbeitsmarkt.":
    "Istnieje procedura uznawania. Właśnie w opiece, rzemiośle i zawodach technicznych to klucz do rynku pracy.",
  "Ab wann haben Kinder in Deutschland einen Anspruch auf einen Kita-Platz?":
    "Od kiedy dzieci w Niemczech mają prawo do miejsca w żłobku lub przedszkolu?",
  "Ab der Geburt": "Od urodzenia",
  "Ab dem ersten Geburtstag": "Od pierwszych urodzin",
  "Ab drei Jahren": "Od trzech lat",
  "Es gibt keinen Anspruch": "Takiego prawa nie ma",
  "Ab dem vollendeten ersten Lebensjahr besteht ein Rechtsanspruch auf einen Betreuungsplatz.":
    "Od ukończenia pierwszego roku życia przysługuje prawo do miejsca w opiece.",
  "Wie viele Urlaubstage stehen bei einer Fünf-Tage-Woche mindestens zu?":
    "Ile dni urlopu przysługuje co najmniej przy pięciodniowym tygodniu pracy?",
  "10 Tage": "10 dni",
  "20 Tage": "20 dni",
  "30 Tage": "30 dni",
  "Es gibt kein Minimum": "Minimum nie ma",
  "Das gesetzliche Minimum sind 20 Arbeitstage im Jahr. Viele Verträge und Tarifverträge geben mehr.":
    "Ustawowe minimum to 20 dni roboczych w roku. Wiele umów i układów zbiorowych daje więcej.",
  "In welcher Form muss eine Kündigung erfolgen?":
    "W jakiej formie musi nastąpić wypowiedzenie?",
  "Mündlich genügt": "Wystarczy ustnie",
  "Schriftlich": "Pisemnie",
  "Per E-Mail": "Mailem",
  "Per Telefonanruf": "Telefonicznie",
  "Nur schriftlich mit eigenhändiger Unterschrift. Eine mündliche Kündigung oder eine E-Mail ist unwirksam.":
    "Tylko pisemnie, z własnoręcznym podpisem. Wypowiedzenie ustne albo mailem jest nieskuteczne.",
  "Was ist Schwarzarbeit?": "Czym jest Schwarzarbeit?",
  "Arbeit in der Nachtschicht": "Pracą na nocnej zmianie",
  "Arbeit ohne Anmeldung und ohne Sozialabgaben":
    "Pracą bez zgłoszenia i bez składek społecznych",
  "Arbeit im Ausland": "Pracą za granicą",
  "Ehrenamtliche Arbeit": "Pracą społeczną",
  "Sie ist strafbar — und wer so arbeitet, hat weder Kranken- noch Rentenversicherung noch Kündigungsschutz.":
    "Jest karalna — a kto tak pracuje, nie ma ani ubezpieczenia zdrowotnego, ani emerytalnego, ani ochrony przed wypowiedzeniem.",
  "Was ist ein Tarifvertrag?": "Czym jest Tarifvertrag?",
  "Ein Vertrag zwischen Arbeitnehmer und Arbeitgeber": "Umową między pracownikiem a pracodawcą",
  "Eine Vereinbarung zwischen Gewerkschaft und Arbeitgeberseite über Löhne und Arbeitsbedingungen":
    "Porozumieniem między związkiem zawodowym a stroną pracodawców o płacach i warunkach pracy",
  "Der Vertrag über die Sozialversicherung": "Umową o ubezpieczeniu społecznym",
  "Ein Vertrag über Stromtarife": "Umową o taryfy prądu",
  "Gewerkschaften und Arbeitgeberverbände handeln ihn kollektiv aus. Der einzelne Arbeitsvertrag steht davon getrennt.":
    "Związki zawodowe i związki pracodawców negocjują go zbiorowo. Pojedyncza umowa o pracę stoi od tego osobno.",
  "Darf ein Arbeitgeber jemandem kündigen, weil er sich an einem Streik beteiligt hat?":
    "Czy pracodawca może zwolnić kogoś za udział w strajku?",
  "Nein, das Streikrecht ist geschützt": "Nie, prawo do strajku jest chronione",
  "Nur bei längeren Streiks": "Tylko przy dłuższych strajkach",
  "Nur in kleinen Betrieben": "Tylko w małych zakładach",
  "Wer sich an einem gewerkschaftlich getragenen Streik beteiligt, darf dafür nicht gekündigt werden.":
    "Kto bierze udział w strajku prowadzonym przez związek zawodowy, nie może zostać za to zwolniony.",
  "Was bleibt vom Bruttolohn nach Abzug von Steuern und Sozialabgaben?":
    "Co zostaje z płacy brutto po odliczeniu podatków i składek społecznych?",
  "Der Tariflohn": "Płaca układowa",
  "Der Nettolohn": "Płaca netto",
  "Der Mindestlohn": "Płaca minimalna",
  "Der Grundlohn": "Płaca podstawowa",
  "Das Netto ist der Betrag, der auf dem Konto ankommt. Brutto ist der Lohn vor allen Abzügen.":
    "Netto to kwota, która trafia na konto. Brutto to płaca przed wszystkimi potrąceniami.",
  "Was gehört in Deutschland in die Biotonne?":
    "Co w Niemczech wrzuca się do pojemnika na bioodpady?",
  "Verpackungen aus Plastik": "Opakowania z plastiku",
  "Küchen- und Gartenabfälle": "Odpady kuchenne i ogrodowe",
  "Altpapier": "Makulaturę",
  "Glasflaschen": "Butelki szklane",
  "Mülltrennung ist Pflicht: Bioabfall, Papier, Verpackungen, Restmüll und Glas nach Farben getrennt.":
    "Segregacja jest obowiązkiem: bioodpady, papier, opakowania, odpady zmieszane i szkło rozdzielone według koloru.",
  "Was ist Pfand?": "Czym jest Pfand?",
  "Eine Steuer auf Getränke": "Podatkiem od napojów",
  "Ein Betrag, den man beim Kauf zahlt und bei Rückgabe der Flasche zurückbekommt":
    "Kwotą, którą płaci się przy zakupie i odzyskuje przy zwrocie butelki",
  "Die Gebühr für die Mülltonne": "Opłatą za pojemnik na śmieci",
  "Ein Rabatt beim Einkauf": "Rabatem przy zakupach",
  "Auf viele Flaschen und Dosen wird Pfand erhoben. Bei der Rückgabe im Laden bekommt man das Geld zurück.":
    "Na wielu butelkach i puszkach pobiera się kaucję. Przy zwrocie w sklepie pieniądze się odzyskuje.",
  "Darf ein Vermieter die Wohnung betreten, wann er möchte?":
    "Czy wynajmujący może wejść do mieszkania, kiedy zechce?",
  "Ja, ihm gehört die Wohnung": "Tak, mieszkanie należy do niego",
  "Nein, nur nach Ankündigung und mit einem berechtigten Grund":
    "Nie, tylko po zapowiedzi i z uzasadnionego powodu",
  "Ja, wenn er einen Schlüssel hat": "Tak, jeśli ma klucz",
  "Nur zusammen mit der Polizei": "Tylko razem z policją",
  "Die Wohnung ist geschützt. Ohne Ankündigung und triftigen Grund darf auch der Eigentümer nicht hinein.":
    "Mieszkanie jest chronione. Bez zapowiedzi i ważnego powodu także właściciel nie może wejść.",
  "Wann musst du ein Ticket für Bus oder Bahn haben?":
    "Kiedy musisz mieć bilet na autobus albo kolej?",
  "Erst wenn kontrolliert wird": "Dopiero gdy jest kontrola",
  "Vor dem Einsteigen": "Przed wejściem",
  "Am Ende der Fahrt": "Na końcu podróży",
  "Nur zu Stoßzeiten": "Tylko w godzinach szczytu",
  "Das gültige Ticket braucht man vor dem Einsteigen. Fahren ohne Fahrschein kostet ein erhöhtes Beförderungsentgelt.":
    "Ważny bilet trzeba mieć przed wejściem. Jazda bez biletu kosztuje podwyższoną opłatę przewozową.",
  "Welche Behörde ist für Aufenthaltstitel und Einbürgerung zuständig?":
    "Który urząd odpowiada za tytuły pobytowe i nadanie obywatelstwa?",
  "Die Ausländerbehörde": "Ausländerbehörde",
  "Die Agentur für Arbeit": "Agentur für Arbeit",
  "Die Ausländerbehörde. Das Bürgeramt macht die Meldung, das Finanzamt die Steuer, das Standesamt Heirat und Geburt.":
    "Ausländerbehörde. Bürgeramt załatwia meldunek, Finanzamt podatki, Standesamt ślub i urodzenie.",
  "Was solltest du tun, bevor du einen Miet- oder Handyvertrag unterschreibst?":
    "Co powinieneś zrobić, zanim podpiszesz umowę najmu albo umowę na telefon?",
  "Sofort unterschreiben, um das Angebot zu sichern":
    "Podpisać od razu, żeby zapewnić sobie ofertę",
  "Ihn lesen und bei Unklarheiten nachfragen oder dich beraten lassen":
    "Przeczytać ją, a przy niejasnościach dopytać albo poradzić się",
  "Nur den Preis prüfen": "Sprawdzić tylko cenę",
  "Ihn von einem Nachbarn unterschreiben lassen": "Dać ją do podpisu sąsiadowi",
  "Eine Unterschrift bindet. Die Verbraucherzentrale und Mietervereine beraten günstig, wenn etwas unklar ist.":
    "Podpis wiąże. Verbraucherzentrale i stowarzyszenia lokatorów doradzają tanio, gdy coś jest niejasne.",
  "Welche Nummer wählst du in Deutschland, wenn du die Polizei brauchst?":
    "Który numer wybierasz w Niemczech, gdy potrzebujesz policji?",
  "911": "911",
  "110 für die Polizei, 112 für Notarzt und Feuerwehr. Beide sind kostenlos.":
    "110 do policji, 112 do pogotowia i straży pożarnej. Oba są bezpłatne.",
  "Wer ist in Deutschland krankenversichert?": "Kto w Niemczech jest ubezpieczony zdrowotnie?",
  "Nur Berufstätige": "Tylko osoby pracujące",
  "Alle Menschen — die Krankenversicherung ist Pflicht":
    "Wszyscy ludzie — ubezpieczenie zdrowotne jest obowiązkowe",
  "Nur wer sich freiwillig versichert": "Tylko ci, którzy ubezpieczą się dobrowolnie",
  "Versicherungspflicht für alle: gesetzlich oder privat, aber niemand bleibt ohne Versicherung.":
    "Obowiązek ubezpieczenia dla wszystkich: ustawowo albo prywatnie, ale nikt nie zostaje bez ubezpieczenia.",
  "Welche Versicherung zahlt Schäden, die du anderen zufügst?":
    "Które ubezpieczenie płaci za szkody, które wyrządzasz innym?",
  "Die Hausratversicherung": "Ubezpieczenie mienia domowego",
  "Die Haftpflichtversicherung": "Ubezpieczenie od odpowiedzialności cywilnej",
  "Die private Haftpflicht ist freiwillig, aber dringend zu empfehlen — sie deckt Schäden an fremdem Eigentum und an Personen.":
    "Prywatne OC jest dobrowolne, ale bardzo zalecane — pokrywa szkody na cudzym mieniu i na osobach.",
  "Welche Versicherung ist für jedes Auto gesetzlich vorgeschrieben?":
    "Które ubezpieczenie jest ustawowo wymagane dla każdego samochodu?",
  "Die Vollkaskoversicherung": "Ubezpieczenie autocasco pełne",
  "Die Kfz-Haftpflichtversicherung": "Ubezpieczenie OC pojazdu",
  "Die Rechtsschutzversicherung": "Ubezpieczenie ochrony prawnej",
  "Ohne Kfz-Haftpflicht darf kein Fahrzeug bewegt werden. Kasko ist dagegen freiwillig.":
    "Bez OC pojazdu żadnym samochodem nie wolno ruszyć. Kasko jest natomiast dobrowolne.",
  "An wen wendest du dich außerhalb der Sprechzeiten bei einem Problem, das kein Notfall ist?":
    "Do kogo zwracasz się poza godzinami przyjęć przy problemie, który nie jest nagłym wypadkiem?",
  "An die 110": "Do 110",
  "An den ärztlichen Bereitschaftsdienst unter 116117":
    "Do lekarskiego dyżuru pod numerem 116117",
  "An das Gesundheitsamt": "Do Gesundheitsamt",
  "An die Krankenkasse": "Do kasy chorych",
  "116117 ist der ärztliche Bereitschaftsdienst. Die 112 bleibt echten Notfällen vorbehalten.":
    "116117 to lekarski dyżur. 112 zostaje zarezerwowane dla prawdziwych nagłych wypadków.",
  "Was musst du beim Arztbesuch dabeihaben?": "Co musisz mieć przy sobie na wizycie u lekarza?",
  "Den Personalausweis": "Dowód osobisty",
  "Die Gesundheitskarte der Krankenkasse": "Kartę zdrowia kasy chorych",
  "Den Arbeitsvertrag": "Umowę o pracę",
  "Die Steuernummer": "Numer podatkowy",
  "Ohne Gesundheitskarte kann die Praxis die Behandlung nicht abrechnen — dann musst du unter Umständen selbst zahlen.":
    "Bez karty zdrowia praktyka nie może rozliczyć leczenia — wtedy w pewnych okolicznościach trzeba zapłacić samemu.",
  "An welchen Tagen ist in Deutschland Weihnachten gesetzlicher Feiertag?":
    "W które dni Boże Narodzenie jest w Niemczech ustawowym dniem wolnym?",
  "Am 24. und 25. Dezember": "24 i 25 grudnia",
  "Am 25. und 26. Dezember": "25 i 26 grudnia",
  "Nur am 24. Dezember": "Tylko 24 grudnia",
  "Vom 24. bis 31. Dezember": "Od 24 do 31 grudnia",
  "Der 25. und 26. Dezember sind gesetzliche Feiertage. Heiligabend am 24. ist ein normaler Arbeitstag, meist mit verkürzten Zeiten.":
    "Ustawowo wolne są 25 i 26 grudnia. Wigilia 24 grudnia to normalny dzień pracy, najczęściej ze skróconymi godzinami.",
  "Wie finanziert sich der öffentlich-rechtliche Rundfunk in Deutschland?":
    "Jak finansuje się w Niemczech radiofonia i telewizja publiczna?",
  "Aus Steuern": "Z podatków",
  "Über den Rundfunkbeitrag der Haushalte": "Ze składki abonamentowej gospodarstw domowych",
  "Allein durch Werbung": "Wyłącznie z reklam",
  "Durch Spenden": "Z darowizn",
  "Jeder Haushalt zahlt den Rundfunkbeitrag. Diese Finanzierung soll ARD und ZDF unabhängig von Regierung und Werbekunden halten.":
    "Każde gospodarstwo domowe płaci składkę abonamentową. To finansowanie ma trzymać ARD i ZDF niezależnie od rządu i reklamodawców.",
  "Welcher deutsche Dichter schrieb den „Faust“?": "Który niemiecki poeta napisał „Fausta”?",
  "Heinrich Heine": "Heinrich Heine",
  "Goethe. Schiller schrieb unter anderem „Wilhelm Tell“ und „Die Räuber“.":
    "Goethe. Schiller napisał między innymi „Wilhelma Tella” i „Zbójców”.",
  "Wofür ist Johannes Gutenberg bekannt?": "Z czego znany jest Johannes Gutenberg?",
  "Für die Entdeckung der Radioaktivität": "Z odkrycia promieniotwórczości",
  "Für den Buchdruck mit beweglichen Lettern": "Z druku ruchomymi czcionkami",
  "Für den Bau des ersten Automobils": "Z budowy pierwszego automobilu",
  "Für die Relativitätstheorie": "Z teorii względności",
  "Gutenberg druckte im 15. Jahrhundert mit beweglichen Lettern. Carl Benz baute das Auto, Einstein entwickelte die Relativitätstheorie.":
    "Gutenberg drukował w XV wieku ruchomymi czcionkami. Carl Benz zbudował samochód, Einstein rozwinął teorię względności.",
  "Was ist ein Ehrenamt?": "Czym jest Ehrenamt?",
  "Ein besonders gut bezahltes Amt": "Szczególnie dobrze płatnym urzędem",
  "Eine freiwillige, unbezahlte Tätigkeit für die Allgemeinheit":
    "Dobrowolną, nieodpłatną działalnością na rzecz ogółu",
  "Ein politisches Wahlamt": "Politycznym urzędem z wyboru",
  "Ein Ehrentitel für Verdienste": "Tytułem honorowym za zasługi",
  "Millionen Menschen engagieren sich unbezahlt in Vereinen, bei der Feuerwehr oder in der Nachbarschaftshilfe.":
    "Miliony ludzi działają bez zapłaty w stowarzyszeniach, w straży pożarnej albo w pomocy sąsiedzkiej.",
  "In welcher Stadt findet das Oktoberfest statt?": "W którym mieście odbywa się Oktoberfest?",
  "In Köln": "W Kolonii",
  "In München": "W Monachium",
  "In Stuttgart": "W Stuttgarcie",
  "In Berlin": "W Berlinie",
  "In München. Karneval wird dagegen vor allem im Rheinland gefeiert, etwa in Köln und Düsseldorf.":
    "W Monachium. Karnawał świętuje się natomiast przede wszystkim w Nadrenii, na przykład w Kolonii i Düsseldorfie.",
  "Für wen gelten die Grundrechte in Deutschland?": "Kogo dotyczą prawa podstawowe w Niemczech?",
  "Für alle Menschen in Deutschland, einige Rechte allerdings nur für Deutsche":
    "Wszystkich ludzi w Niemczech, choć niektóre prawa tylko Niemców",
  "Nur für Erwachsene": "Tylko dorosłych",
  "Nur für Menschen mit einem Aufenthaltstitel": "Tylko ludzi z tytułem pobytowym",
  "Die Menschenwürde und die meisten Grundrechte gelten für jeden. Einige wenige — etwa das Wahlrecht zum Bundestag — sind an die deutsche Staatsangehörigkeit gebunden.":
    "Godność człowieka i większość praw podstawowych dotyczą każdego. Nieliczne — na przykład prawo wyborcze do Bundestagu — są związane z niemieckim obywatelstwem.",
  "Was bedeutet die Versammlungsfreiheit?": "Co oznacza wolność zgromadzeń?",
  "Man darf sich überall aufhalten": "Wolno przebywać wszędzie",
  "Man darf sich friedlich und ohne Waffen versammeln, auch zu Demonstrationen":
    "Wolno zbierać się pokojowo i bez broni, także na demonstracje",
  "Man darf jederzeit Straßen blockieren": "Wolno w każdej chwili blokować ulice",
  "Man darf nur mit Genehmigung der Polizei demonstrieren":
    "Demonstrować wolno tylko za zezwoleniem policji",
  "Artikel 8 schützt friedliche Versammlungen. Unter freiem Himmel muss eine Demonstration angemeldet, aber nicht genehmigt werden.":
    "Artykuł 8 chroni pokojowe zgromadzenia. Pod gołym niebem demonstrację trzeba zgłosić, ale nie uzyskać na nią zezwolenia.",
  "Was schützt Artikel 13 des Grundgesetzes?": "Co chroni artykuł 13 Grundgesetz?",
  "Das Eigentum": "Własność",
  "Die Unverletzlichkeit der Wohnung": "Nienaruszalność mieszkania",
  "Das Briefgeheimnis": "Tajemnicę korespondencji",
  "Die Berufsfreiheit": "Wolność wyboru zawodu",
  "Die Wohnung ist geschützt: Durchsuchungen brauchen in der Regel eine richterliche Anordnung.":
    "Mieszkanie jest chronione: przeszukania wymagają z reguły postanowienia sędziego.",
  "Darf der Staat in Deutschland eine Zeitung verbieten, weil sie ihn kritisiert?":
    "Czy państwo w Niemczech może zakazać gazety, bo je krytykuje?",
  "Ja, bei scharfer Kritik": "Tak, przy ostrej krytyce",
  "Nein, es gilt die Pressefreiheit und eine Zensur findet nicht statt":
    "Nie, obowiązuje wolność prasy, a cenzury nie ma",
  "Nur mit Zustimmung des Bundeskanzlers": "Tylko za zgodą Bundeskanzler",
  "Artikel 5 verbietet die Zensur ausdrücklich. Kritik an der Regierung ist die Aufgabe freier Presse, nicht ihr Vergehen.":
    "Artykuł 5 zakazuje cenzury wprost. Krytyka rządu jest zadaniem wolnej prasy, a nie jej przewinieniem.",
  "Wer darf in Deutschland ein Gesetz für verfassungswidrig erklären?":
    "Kto w Niemczech może uznać ustawę za niezgodną z konstytucją?",
  "Der Bundestag mit einfacher Mehrheit": "Bundestag zwykłą większością",
  "Nur das Bundesverfassungsgericht. Der Bundespräsident prüft beim Unterschreiben lediglich, ob ein Gesetz ordnungsgemäß zustande gekommen ist.":
    "Tylko Bundesverfassungsgericht. Bundespräsident, podpisując, bada jedynie, czy ustawa doszła do skutku prawidłowo.",
  "Was bedeutet es, dass die Grundrechte den Staat binden?":
    "Co znaczy, że prawa podstawowe wiążą państwo?",
  "Der Staat muss alle Bürger finanziell unterstützen":
    "Państwo musi wspierać finansowo wszystkich obywateli",
  "Gesetzgebung, Verwaltung und Gerichte müssen die Grundrechte beachten":
    "Ustawodawstwo, administracja i sądy muszą przestrzegać praw podstawowych",
  "Nur die Polizei muss sich daran halten": "Trzymać się ich musi tylko policja",
  "Die Grundrechte gelten ausschließlich zwischen Privatpersonen":
    "Prawa podstawowe obowiązują wyłącznie między osobami prywatnymi",
  "Artikel 1 Absatz 3: Die Grundrechte binden alle drei Gewalten unmittelbar. Sie sind kein Programmsatz, sondern geltendes Recht.":
    "Artykuł 1 ustęp 3: prawa podstawowe wiążą bezpośrednio wszystkie trzy władze. Nie są zapowiedzią programową, lecz obowiązującym prawem.",
  "Was gehört NICHT zu den Grundrechten?": "Co NIE należy do praw podstawowych?",
  "Die Glaubensfreiheit": "Wolność wyznania",
  "Das Recht auf einen kostenlosen Führerschein": "Prawo do bezpłatnego prawa jazdy",
  "Die Freiheit der Person": "Wolność osobista",
  "Einen Anspruch auf einen kostenlosen Führerschein gibt es nicht. Glaube, Beruf und persönliche Freiheit sind dagegen Grundrechte.":
    "Roszczenia o bezpłatne prawo jazdy nie ma. Wiara, zawód i wolność osobista są natomiast prawami podstawowymi.",
  "Wie lange hast du Zeit für den Einbürgerungstest?": "Ile masz czasu na Einbürgerungstest?",
  "30 Minuten": "30 minut",
  "60 Minuten": "60 minut",
  "90 Minuten": "90 minut",
  "Es gibt kein Zeitlimit": "Limitu czasu nie ma",
  "60 Minuten für 33 Fragen — knapp zwei Minuten pro Frage, also genug Zeit zum Nachdenken.":
    "60 minut na 33 pytania — niecałe dwie minuty na pytanie, czyli dość czasu do namysłu.",
  "Wer kontrolliert in Deutschland die Regierung?": "Kto w Niemczech kontroluje rząd?",
  "Das Parlament, die Gerichte, die Presse und die Wähler": "Parlament, sądy, prasa i wyborcy",
  "Nur die Polizei": "Tylko policja",
  "Mehrere Instanzen zugleich: der Bundestag durch Anfragen und Ausschüsse, die Gerichte durch Urteile, die Presse durch Öffentlichkeit und die Wähler durch die nächste Wahl.":
    "Kilka instancji naraz: Bundestag przez zapytania i komisje, sądy przez wyroki, prasa przez jawność, a wyborcy przez następne wybory.",
  "Was ist mit „Volkssouveränität“ gemeint?": "Co się rozumie przez „suwerenność ludu”?",
  "Das Volk kann jederzeit Gesetze aufheben": "Naród może w każdej chwili uchylić ustawy",
  "Alle Staatsgewalt geht vom Volk aus": "Cała władza państwowa pochodzi od narodu",
  "Das Volk verwaltet die Steuern selbst": "Naród sam zarządza podatkami",
  "Jeder darf selbst entscheiden, welche Gesetze für ihn gelten":
    "Każdy może sam decydować, które ustawy go dotyczą",
  "Artikel 20: Die Macht kommt vom Volk und wird durch Wahlen und die drei Gewalten ausgeübt — nicht durch Einzelentscheidungen jedes Bürgers.":
    "Artykuł 20: władza pochodzi od narodu i jest wykonywana przez wybory i trzy władze — a nie przez pojedyncze decyzje każdego obywatela.",
  "Was ist eine Diktatur?": "Czym jest dyktatura?",
  "Ein Staat mit vielen Parteien": "Państwem z wieloma partiami",
  "Ein Staat, in dem eine Person oder Gruppe ohne Kontrolle herrscht":
    "Państwem, w którym jedna osoba albo grupa rządzi bez kontroli",
  "Ein Staat mit einem Königshaus": "Państwem z domem królewskim",
  "Ein Staat ohne Steuern": "Państwem bez podatków",
  "Kennzeichen sind fehlende freie Wahlen, keine Gewaltenteilung, keine unabhängigen Gerichte und keine Meinungsfreiheit.":
    "Znakami rozpoznawczymi są brak wolnych wyborów, brak podziału władz, brak niezawisłych sądów i brak wolności słowa.",
  "Welcher Grundsatz macht Deutschland zu einem Rechtsstaat?":
    "Która zasada czyni Niemcy państwem prawa?",
  "Staatliches Handeln ist an Gesetz und Recht gebunden und gerichtlich überprüfbar":
    "Działanie państwa jest związane ustawą i prawem oraz podlega kontroli sądowej",
  "Gerichte entscheiden nach eigenem Ermessen": "Sądy rozstrzygają według własnego uznania",
  "Entscheidend ist die Überprüfbarkeit: Gegen jede staatliche Entscheidung kann man vor Gericht ziehen.":
    "Rozstrzygająca jest zaskarżalność: przeciw każdej decyzji władzy można pójść do sądu.",
  "Was passiert, wenn eine Partei die freiheitliche demokratische Grundordnung beseitigen will?":
    "Co się stanie, jeśli partia chce usunąć wolnościowy demokratyczny porządek ustrojowy?",
  "Nichts, das ist von der Meinungsfreiheit gedeckt": "Nic, kryje to wolność słowa",
  "Das Bundesverfassungsgericht kann sie verbieten": "Bundesverfassungsgericht może jej zakazać",
  "Der Bundeskanzler löst sie auf": "Bundeskanzler ją rozwiązuje",
  "Sie verliert automatisch ihre Zulassung": "Automatycznie traci dopuszczenie",
  "Ein Parteiverbot ist möglich, aber ausschließlich durch das Bundesverfassungsgericht — damit keine Regierung ihre Gegner ausschalten kann.":
    "Delegalizacja partii jest możliwa, ale wyłącznie przez Bundesverfassungsgericht — żeby żaden rząd nie mógł wyłączyć swoich przeciwników.",
  "Wer schreibt in Deutschland die Gesetze?": "Kto w Niemczech pisze ustawy?",
  "Die Gerichte": "Sądy",
  "Bundestag und Bundesrat": "Bundestag i Bundesrat",
  "Die Gesetzgebung liegt bei Bundestag und Bundesrat. Gerichte wenden Gesetze an, sie machen sie nicht.":
    "Stanowienie prawa należy do Bundestagu i Bundesratu. Sądy stosują ustawy, a nie je tworzą.",
  "Was bedeutet „Republik“?": "Co znaczy „republika”?",
  "Das Staatsoberhaupt wird gewählt und regiert nicht auf Lebenszeit":
    "Głowa państwa jest wybierana i nie rządzi dożywotnio",
  "Es gibt mehrere Bundesländer": "Jest kilka krajów związkowych",
  "Der Staat erhebt keine Steuern": "Państwo nie pobiera podatków",
  "Die Kirche ist vom Staat getrennt": "Kościół jest oddzielony od państwa",
  "In einer Republik gibt es keinen Monarchen; das Staatsoberhaupt wird auf Zeit gewählt.":
    "W republice nie ma monarchy; głowa państwa jest wybierana na czas określony.",
  "Warum ist die Unabhängigkeit der Gerichte für die Gewaltenteilung wichtig?":
    "Dlaczego niezawisłość sądów jest ważna dla podziału władz?",
  "Damit Urteile schneller gefällt werden": "Żeby wyroki zapadały szybciej",
  "Damit Gerichte auch gegen die Regierung entscheiden können":
    "Żeby sądy mogły orzekać także przeciw rządowi",
  "Damit Richter mehr verdienen": "Żeby sędziowie więcej zarabiali",
  "Damit weniger Gesetze nötig sind": "Żeby potrzeba było mniej ustaw",
  "Eine Justiz, die von der Regierung abhängt, kann sie nicht kontrollieren. Genau deshalb sind Richter nur dem Gesetz unterworfen.":
    "Wymiar sprawiedliwości zależny od rządu nie może go kontrolować. Właśnie dlatego sędziowie podlegają wyłącznie ustawie.",
  "Wo hat der Deutsche Bundestag seinen Sitz?": "Gdzie ma swoją siedzibę Deutscher Bundestag?",
  "In Bonn": "W Bonn",
  "In Frankfurt am Main": "We Frankfurcie nad Menem",
  "Im Reichstagsgebäude in Berlin. Bonn war bis 1999 Regierungssitz und ist heute Bundesstadt.":
    "W budynku Reichstagu w Berlinie. Bonn było siedzibą rządu do 1999 roku, a dziś jest miastem federalnym.",
  "Was ist die Aufgabe der Opposition im Bundestag?":
    "Jakie jest zadanie opozycji w Bundestagu?",
  "Die Regierung zu unterstützen": "Wspierać rząd",
  "Die Regierung zu kontrollieren und Alternativen vorzuschlagen":
    "Kontrolować rząd i proponować alternatywy",
  "Die Gesetze auszuführen": "Wykonywać ustawy",
  "Die Wahlen zu organisieren": "Organizować wybory",
  "Kontrolle und Alternative — deshalb hat die Opposition eigene Rechte, etwa beim Einsetzen von Untersuchungsausschüssen.":
    "Kontrola i alternatywa — dlatego opozycja ma własne uprawnienia, na przykład przy powoływaniu komisji śledczych.",
  "Wer leitet die Sitzungen des Bundestages?": "Kto prowadzi posiedzenia Bundestagu?",
  "Der älteste Abgeordnete": "Najstarszy poseł",
  "Der Bundestagspräsident führt die Sitzungen und wahrt die Ordnung des Hauses. Protokollarisch steht er an zweiter Stelle im Staat.":
    "Bundestagspräsident prowadzi posiedzenia i strzeże porządku izby. Protokolarnie stoi w państwie na drugim miejscu.",
  "Wann muss der Bundesrat einem Gesetz zwingend zustimmen?":
    "Kiedy Bundesrat musi bezwzględnie wyrazić zgodę na ustawę?",
  "Bei jedem Gesetz": "Przy każdej ustawie",
  "Bei Zustimmungsgesetzen, etwa wenn Interessen der Länder berührt sind":
    "Przy ustawach wymagających zgody, na przykład gdy dotykają interesów krajów",
  "Nur bei Verfassungsänderungen": "Tylko przy zmianach konstytucji",
  "Nie, er kann nur Empfehlungen abgeben": "Nigdy, może tylko wydawać zalecenia",
  "Zustimmungsgesetze brauchen sein Ja. Bei Einspruchsgesetzen kann der Bundestag einen Einspruch überstimmen.":
    "Ustawy wymagające zgody potrzebują jego tak. Przy ustawach sprzeciwu Bundestag może sprzeciw przegłosować.",
  "Was ist der Vermittlungsausschuss?": "Czym jest Vermittlungsausschuss?",
  "Ein Gericht für Streit zwischen Parteien": "Sądem dla sporów między partiami",
  "Ein gemeinsames Gremium von Bundestag und Bundesrat, das bei Uneinigkeit einen Kompromiss sucht":
    "Wspólnym gremium Bundestagu i Bundesratu, które przy braku zgody szuka kompromisu",
  "Ein Ausschuss zur Vermittlung von Arbeitsplätzen": "Komisją do pośrednictwa pracy",
  "Der Ausschuss, der den Kanzler vorschlägt": "Komisją, która wysuwa kandydata na kanclerza",
  "Wenn sich Bundestag und Bundesrat über ein Gesetz nicht einig werden, sucht dieser Ausschuss einen gemeinsamen Vorschlag.":
    "Gdy Bundestag i Bundesrat nie mogą się zgodzić co do ustawy, ta komisja szuka wspólnej propozycji.",
  "Was bedeutet das freie Mandat eines Abgeordneten?": "Co oznacza wolny mandat posła?",
  "Er muss immer so stimmen, wie seine Partei es beschließt":
    "Musi zawsze głosować tak, jak postanowi jego partia",
  "Er ist nur seinem Gewissen verpflichtet und an Weisungen nicht gebunden":
    "Jest zobowiązany tylko wobec swojego sumienia i nie wiążą go polecenia",
  "Er darf beliebig oft fehlen": "Może opuszczać posiedzenia dowolnie często",
  "Er braucht keine Wahl": "Nie potrzebuje wyboru",
  "Artikel 38: Abgeordnete sind Vertreter des ganzen Volkes und an Aufträge nicht gebunden — auch nicht an die der eigenen Fraktion.":
    "Artykuł 38: posłowie są przedstawicielami całego narodu i nie wiążą ich zlecenia — także te własnej frakcji.",
  "Wie oft muss ein Gesetzentwurf im Bundestag beraten werden?":
    "Ile razy projekt ustawy musi być omawiany w Bundestagu?",
  "Einmal": "Raz",
  "In der Regel in drei Lesungen": "Z reguły w trzech czytaniach",
  "Fünfmal": "Pięć razy",
  "So oft die Regierung es wünscht": "Tyle razy, ile życzy sobie rząd",
  "Drei Lesungen, dazwischen die Arbeit in den Fachausschüssen — damit ein Gesetz nicht im Vorbeigehen beschlossen wird.":
    "Trzy czytania, a między nimi praca w komisjach fachowych — żeby ustawy nie uchwalono mimochodem.",
  "Wer beschließt über die Einnahmen und Ausgaben des Bundes?":
    "Kto uchwala dochody i wydatki federacji?",
  "Der Bundesfinanzminister allein": "Sam minister finansów",
  "Der Bundestag mit dem Haushaltsgesetz": "Bundestag ustawą budżetową",
  "Die Bundesbank": "Bundesbank",
  "Das Budgetrecht liegt beim Parlament. Die Regierung schlägt den Haushalt vor, beschließen muss ihn der Bundestag.":
    "Prawo budżetowe leży w parlamencie. Rząd proponuje budżet, uchwalić musi go Bundestag.",
  "Wo hat der Bundespräsident seinen Amtssitz?":
    "Gdzie Bundespräsident ma swoją siedzibę urzędową?",
  "Im Kanzleramt": "W Kanzleramt",
  "Im Schloss Bellevue": "W Schloss Bellevue",
  "Im Reichstagsgebäude": "W budynku Reichstagu",
  "In der Villa Hammerschmidt in Bonn": "W Villa Hammerschmidt w Bonn",
  "Schloss Bellevue in Berlin. Die Villa Hammerschmidt in Bonn ist der zweite Amtssitz.":
    "Schloss Bellevue w Berlinie. Villa Hammerschmidt w Bonn to druga siedziba urzędowa.",
  "Wer ernennt und entlässt die Bundesminister?":
    "Kto mianuje i odwołuje ministrów federalnych?",
  "Der Bundespräsident auf Vorschlag des Bundeskanzlers":
    "Bundespräsident na wniosek Bundeskanzler",
  "Die Partei des Kanzlers": "Partia kanclerza",
  "Der Kanzler schlägt vor, der Bundespräsident vollzieht. Beides gehört zusammen und wird gern zu einem Schritt verkürzt.":
    "Kanclerz wnioskuje, Bundespräsident wykonuje. Jedno należy do drugiego, a chętnie skraca się to do jednego kroku.",
  "Was ist das Ressortprinzip?": "Czym jest zasada resortowa?",
  "Jeder Minister leitet sein Ministerium eigenständig":
    "Każdy minister prowadzi swoje ministerstwo samodzielnie",
  "Der Kanzler entscheidet alles allein": "Kanclerz decyduje o wszystkim sam",
  "Die Ministerien wechseln jedes Jahr": "Ministerstwa zmieniają się co roku",
  "Jedes Bundesland bekommt ein Ministerium": "Każdy kraj związkowy dostaje ministerstwo",
  "Innerhalb der Richtlinien des Kanzlers führt jeder Minister sein Haus selbstständig und in eigener Verantwortung.":
    "W ramach wytycznych kanclerza każdy minister prowadzi swój resort samodzielnie i na własną odpowiedzialność.",
  "Was ist eine Koalition?": "Czym jest koalicja?",
  "Ein Bündnis mehrerer Parteien, die gemeinsam regieren":
    "Sojuszem kilku partii, które rządzą wspólnie",
  "Ein Zusammenschluss von Bundesländern": "Związkiem krajów związkowych",
  "Ein Vertrag mit anderen Staaten": "Umową z innymi państwami",
  "Die Verbindung von Regierung und Gerichten": "Połączeniem rządu i sądów",
  "Weil eine Partei selten allein die Mehrheit hat, schließen sich mehrere zusammen und einigen sich auf einen Koalitionsvertrag.":
    "Ponieważ jedna partia rzadko ma sama większość, kilka łączy się i uzgadnia umowę koalicyjną.",
  "Welche Aufgabe hat der Bundespräsident bei einem neuen Gesetz?":
    "Jakie zadanie ma Bundespräsident przy nowej ustawie?",
  "Er schreibt den Gesetzentwurf": "Pisze projekt ustawy",
  "Er fertigt das Gesetz aus und prüft dabei, ob es verfassungsgemäß zustande gekommen ist":
    "Podpisuje ustawę i bada przy tym, czy doszła do skutku zgodnie z konstytucją",
  "Er stimmt im Bundestag mit ab": "Głosuje razem z Bundestagiem",
  "Er kann jedes Gesetz nach Belieben ablehnen": "Może odrzucić każdą ustawę wedle uznania",
  "Er unterschreibt und prüft dabei das ordnungsgemäße Zustandekommen — eine politische Bewertung steht ihm nicht zu.":
    "Podpisuje i bada przy tym prawidłowość dojścia ustawy do skutku — ocena polityczna mu nie przysługuje.",
  "Wie nennt man die gemeinsame Sitzung von Kanzler und Ministern?":
    "Jak nazywa się wspólne posiedzenie kanclerza i ministrów?",
  "Kabinettssitzung": "Posiedzenie gabinetu",
  "Plenarsitzung": "Posiedzenie plenarne",
  "Bundesratssitzung": "Posiedzenie Bundesratu",
  "Kanzler und Minister bilden das Kabinett; dort werden Gesetzentwürfe und Regierungsvorhaben beschlossen.":
    "Kanclerz i ministrowie tworzą gabinet; tam uchwala się projekty ustaw i zamierzenia rządu.",
  "Wer vertritt Deutschland völkerrechtlich nach außen?":
    "Kto reprezentuje Niemcy na zewnątrz w prawie międzynarodowym?",
  "Der Außenminister allein": "Sam minister spraw zagranicznych",
  "Das Staatsoberhaupt vertritt Deutschland nach außen, etwa beim Empfang von Botschaftern. Die tägliche Außenpolitik macht die Regierung.":
    "Głowa państwa reprezentuje Niemcy na zewnątrz, na przykład przy przyjmowaniu ambasadorów. Codzienną politykę zagraniczną prowadzi rząd.",
  "Was gilt für die Amtszeit des Bundeskanzlers?": "Co obowiązuje co do kadencji Bundeskanzler?",
  "Höchstens zwei Amtszeiten": "Najwyżej dwie kadencje",
  "Es gibt keine Begrenzung der Amtszeiten": "Ograniczenia kadencji nie ma",
  "Höchstens acht Jahre": "Najwyżej osiem lat",
  "Höchstens eine Amtszeit": "Najwyżej jedna kadencja",
  "Anders als beim Bundespräsidenten gibt es keine Obergrenze — Helmut Kohl und Angela Merkel amtierten je sechzehn Jahre.":
    "Inaczej niż u Bundespräsident, górnej granicy nie ma — Helmut Kohl i Angela Merkel urzędowali po szesnaście lat.",
  "Was bekommst du vor einer Wahl per Post zugeschickt?": "Co dostajesz pocztą przed wyborami?",
  "Den Stimmzettel": "Kartę do głosowania",
  "Die Wahlbenachrichtigung": "Zawiadomienie o wyborach",
  "Eine Liste aller Kandidaten mit Adressen": "Listę wszystkich kandydatów z adresami",
  "Nichts": "Nic",
  "Die Wahlbenachrichtigung nennt Wahllokal und Öffnungszeiten. Den Stimmzettel bekommst du erst im Wahllokal.":
    "Zawiadomienie o wyborach podaje lokal wyborczy i godziny otwarcia. Kartę do głosowania dostajesz dopiero w lokalu.",
  "Was ist die Briefwahl?": "Czym jest głosowanie korespondencyjne?",
  "Eine Wahl, bei der man dem Kandidaten schreibt": "Wyborami, w których pisze się do kandydata",
  "Die Möglichkeit, vorab per Post zu wählen statt im Wahllokal":
    "Możliwością zagłosowania wcześniej pocztą zamiast w lokalu wyborczym",
  "Eine Wahl nur für Auslandsdeutsche": "Wyborami tylko dla Niemców za granicą",
  "Eine Wahl per E-Mail": "Wyborami mailem",
  "Wer am Wahltag verhindert ist, kann die Unterlagen vorher anfordern und per Post wählen. Ein Grund muss nicht angegeben werden.":
    "Kto w dniu wyborów nie może przyjść, może wcześniej zamówić dokumenty i zagłosować pocztą. Powodu podawać nie trzeba.",
  "Was ist ein Wahlkreis?": "Czym jest okręg wyborczy?",
  "Ein Bundesland": "Krajem związkowym",
  "Ein regional abgegrenztes Gebiet, in dem ein Kandidat direkt gewählt wird":
    "Wyodrębnionym regionalnie obszarem, w którym kandydata wybiera się bezpośrednio",
  "Der Kreis der Wahlberechtigten einer Partei":
    "Kręgiem uprawnionych do głosowania jednej partii",
  "Ein Raum im Wahllokal": "Pomieszczeniem w lokalu wyborczym",
  "Mit der Erststimme wird in jedem Wahlkreis eine Person direkt gewählt.":
    "Pierwszym głosem wybiera się w każdym okręgu jedną osobę bezpośrednio.",
  "Was passiert mit den Zweitstimmen einer Partei, die unter fünf Prozent bleibt?":
    "Co dzieje się z drugimi głosami partii, która zostaje poniżej pięciu procent?",
  "Sie werden auf die anderen Parteien verteilt und die Partei zieht nicht ein":
    "Rozdziela się je na inne partie, a partia nie wchodzi do parlamentu",
  "Sie werden für die nächste Wahl aufgehoben": "Zachowuje się je na następne wybory",
  "Die Partei bekommt trotzdem Sitze": "Partia i tak dostaje mandaty",
  "Die Wahl wird wiederholt": "Wybory się powtarza",
  "Die Partei bleibt draußen; die Sitze verteilen sich unter denen, die die Hürde geschafft haben. Ausnahme: mehrere direkt gewonnene Wahlkreise.":
    "Partia zostaje na zewnątrz; mandaty rozdzielają się między te, które przekroczyły próg. Wyjątek: kilka bezpośrednio wygranych okręgów.",
  "Wie finanzieren sich Parteien in Deutschland überwiegend?":
    "Z czego partie w Niemczech finansują się w przeważającej mierze?",
  "Ausschließlich durch den Staat": "Wyłącznie z państwa",
  "Durch Mitgliedsbeiträge, Spenden und staatliche Teilfinanzierung":
    "Ze składek członkowskich, darowizn i częściowego finansowania państwowego",
  "Ausschließlich durch Spenden von Unternehmen": "Wyłącznie z darowizn przedsiębiorstw",
  "Durch Eintrittsgelder bei Veranstaltungen": "Z opłat za wstęp na imprezy",
  "Drei Quellen zusammen. Großspenden müssen veröffentlicht werden, damit Einfluss nachvollziehbar bleibt.":
    "Z trzech źródeł razem. Duże darowizny trzeba ujawniać, żeby wpływy pozostawały możliwe do prześledzenia.",
  "Wer darf in Deutschland eine Partei gründen?": "Kto w Niemczech może założyć partię?",
  "Nur der Bundestag": "Tylko Bundestag",
  "Grundsätzlich jeder — die Parteigründung ist frei":
    "Zasadniczo każdy — zakładanie partii jest wolne",
  "Nur wer schon Abgeordneter ist": "Tylko ten, kto jest już posłem",
  "Nur mit Genehmigung des Bundespräsidenten": "Tylko za zezwoleniem Bundespräsident",
  "Artikel 21: Die Gründung von Parteien ist frei. Verboten werden kann eine Partei nur vom Bundesverfassungsgericht.":
    "Artykuł 21: zakładanie partii jest wolne. Zakazać partii może tylko Bundesverfassungsgericht.",
  "Was passiert mit deinem Stimmzettel, wenn du ihn falsch ausfüllst?":
    "Co dzieje się z twoją kartą do głosowania, jeśli wypełnisz ją źle?",
  "Er wird trotzdem gezählt": "Zostanie mimo to policzona",
  "Er ist ungültig und zählt für keine Partei":
    "Jest nieważna i nie liczy się dla żadnej partii",
  "Du darfst noch einmal wählen": "Możesz zagłosować jeszcze raz",
  "Die Wahlhelfer korrigieren ihn": "Członkowie komisji ją poprawią",
  "Ein ungültiger Stimmzettel zählt für niemanden. Wer sich verschreibt, kann im Wahllokal aber einen neuen verlangen.":
    "Nieważna karta nie liczy się dla nikogo. Kto się pomyli, może jednak w lokalu wyborczym poprosić o nową.",
  "Warum gibt es in Deutschland keine Volksabstimmungen auf Bundesebene über einzelne Gesetze?":
    "Dlaczego w Niemczech nie ma na szczeblu federalnym referendów o pojedynczych ustawach?",
  "Weil das Grundgesetz die Entscheidungen dem gewählten Parlament überträgt":
    "Bo Grundgesetz przekazuje decyzje wybranemu parlamentowi",
  "Weil es zu teuer wäre": "Bo byłoby to zbyt drogie",
  "Weil die EU es verbietet": "Bo zakazuje tego UE",
  "Weil es keine Wahllokale gibt": "Bo nie ma lokali wyborczych",
  "Das Grundgesetz sieht auf Bundesebene die repräsentative Demokratie vor. In den Ländern und Gemeinden gibt es dagegen Volks- und Bürgerentscheide.":
    "Grundgesetz przewiduje na szczeblu federalnym demokrację przedstawicielską. W krajach i gminach istnieją natomiast referenda ludowe i obywatelskie.",
  "Wie heißt die Hauptstadt von Bayern?": "Jak nazywa się stolica Bawarii?",
  "Nürnberg": "Norymberga",
  "Augsburg": "Augsburg",
  "Regensburg": "Ratyzbona",
  "München. Nürnberg und Augsburg sind große bayerische Städte, aber nicht die Landeshauptstadt.":
    "Monachium. Norymberga i Augsburg to duże bawarskie miasta, ale nie stolica kraju.",
  "Welches Bundesland ist flächenmäßig das größte?":
    "Który kraj związkowy jest największy powierzchniowo?",
  "Nordrhein-Westfalen": "Nadrenia Północna-Westfalia",
  "Bayern": "Bawaria",
  "Niedersachsen": "Dolna Saksonia",
  "Baden-Württemberg": "Badenia-Wirtembergia",
  "Bayern ist das flächengrößte Land, Nordrhein-Westfalen das bevölkerungsreichste.":
    "Bawaria jest największa powierzchniowo, Nadrenia Północna-Westfalia najludniejsza.",
  "Wer wählt den Ministerpräsidenten eines Bundeslandes?":
    "Kto wybiera Ministerpräsident kraju związkowego?",
  "Die Bürger direkt": "Obywatele bezpośrednio",
  "Der Landtag": "Landtag",
  "Das Landesparlament wählt ihn — wie der Bundestag den Kanzler. Direkt gewählt wird er nirgends.":
    "Wybiera go parlament krajowy — jak Bundestag kanclerza. Nigdzie nie jest wybierany bezpośrednio.",
  "Was gilt, wenn Bundesrecht und Landesrecht sich widersprechen?":
    "Co obowiązuje, gdy prawo federalne i prawo krajowe są sprzeczne?",
  "Das Landesrecht gilt": "Obowiązuje prawo krajowe",
  "Bundesrecht bricht Landesrecht": "Prawo federalne łamie prawo krajowe",
  "Das ältere Gesetz gilt": "Obowiązuje starsza ustawa",
  "Ein Gericht entscheidet jedes Mal neu": "Sąd rozstrzyga za każdym razem na nowo",
  "Artikel 31 des Grundgesetzes: Bundesrecht bricht Landesrecht.":
    "Artykuł 31 Grundgesetz: prawo federalne łamie prawo krajowe.",
  "Welche fünf Länder werden als „neue Bundesländer“ bezeichnet?":
    "Które pięć krajów nazywa się „nowymi krajami związkowymi”?",
  "Die fünf kleinsten Länder": "Pięć najmniejszych krajów",
  "Die Länder, die 1990 auf dem Gebiet der DDR entstanden":
    "Kraje, które powstały w 1990 roku na obszarze NRD",
  "Die Länder mit den jüngsten Landesverfassungen":
    "Kraje z najmłodszymi konstytucjami krajowymi",
  "Die fünf Länder mit Küstenzugang": "Pięć krajów z dostępem do wybrzeża",
  "Brandenburg, Mecklenburg-Vorpommern, Sachsen, Sachsen-Anhalt und Thüringen — 1990 wiedergegründet.":
    "Brandenburgia, Meklemburgia-Pomorze Przednie, Saksonia, Saksonia-Anhalt i Turyngia — odtworzone w 1990 roku.",
  "Wer leitet die Verwaltung einer Stadt oder Gemeinde?":
    "Kto kieruje administracją miasta albo gminy?",
  "Der Ministerpräsident": "Ministerpräsident",
  "Der Bürgermeister": "Bürgermeister",
  "Der Landrat des Kreises": "Landrat powiatu",
  "Der Innenminister": "Minister spraw wewnętrznych",
  "Der Bürgermeister, meist direkt von den Bürgern gewählt. Der Landrat steht dem Landkreis vor.":
    "Bürgermeister, najczęściej wybierany bezpośrednio przez mieszkańców. Landrat stoi na czele powiatu.",
  "In welchem Bundesland liegt die Stadt Dresden?": "W którym kraju związkowym leży Drezno?",
  "Thüringen": "Turyngia",
  "Sachsen": "Saksonia",
  "Brandenburg": "Brandenburgia",
  "Sachsen-Anhalt": "Saksonia-Anhalt",
  "Dresden ist die Landeshauptstadt von Sachsen. Erfurt gehört zu Thüringen, Magdeburg zu Sachsen-Anhalt.":
    "Drezno jest stolicą Saksonii. Erfurt należy do Turyngii, Magdeburg do Saksonii-Anhalt.",
  "Woher bekommen Gemeinden hauptsächlich ihr Geld?":
    "Skąd gminy biorą głównie swoje pieniądze?",
  "Ausschließlich aus Spenden": "Wyłącznie z darowizn",
  "Aus eigenen Steuern, Gebühren und Zuweisungen von Land und Bund":
    "Z własnych podatków, opłat i przekazów od kraju i federacji",
  "Nur aus der Einkommensteuer ihrer Einwohner":
    "Tylko z podatku dochodowego swoich mieszkańców",
  "Sie dürfen kein eigenes Geld einnehmen": "Nie mogą mieć własnych dochodów",
  "Gewerbe- und Grundsteuer, Gebühren für Leistungen und Zuweisungen der höheren Ebenen — ein Mischsystem.":
    "Podatek od działalności i od nieruchomości, opłaty za usługi i przekazy z wyższych szczebli — system mieszany.",
  "Was ist ein Schöffe?": "Czym jest Schöffe?",
  "Ein Anwalt der Staatsanwaltschaft": "Adwokatem prokuratury",
  "Ein ehrenamtlicher Richter ohne juristische Ausbildung":
    "Sędzią społecznym bez wykształcenia prawniczego",
  "Ein Protokollführer bei Gericht": "Protokolantem w sądzie",
  "Ein Gefängnisaufseher": "Strażnikiem więziennym",
  "Bürger wirken als Schöffen an Strafurteilen mit und haben in der Hauptverhandlung dasselbe Stimmrecht wie Berufsrichter.":
    "Obywatele współorzekają jako ławnicy w wyrokach karnych i mają na rozprawie głównej takie samo prawo głosu jak sędziowie zawodowi.",
  "Welches Gericht ist für Streit über eine Rente zuständig?":
    "Który sąd jest właściwy w sporze o emeryturę?",
  "Das Arbeitsgericht": "Sąd pracy",
  "Das Sozialgericht": "Sąd socjalny",
  "Das Finanzgericht": "Sąd finansowy",
  "Das Amtsgericht": "Amtsgericht",
  "Sozialgerichte entscheiden über Rente, Krankenversicherung und Bürgergeld.":
    "Sądy socjalne rozstrzygają o emeryturze, ubezpieczeniu zdrowotnym i Bürgergeld.",
  "Was bedeutet „rechtskräftig“?": "Co znaczy „prawomocny”?",
  "Das Urteil wurde verkündet": "Wyrok został ogłoszony",
  "Das Urteil ist endgültig und kann nicht mehr mit normalen Rechtsmitteln angefochten werden":
    "Wyrok jest ostateczny i nie da się go już zaskarżyć zwykłymi środkami",
  "Der Angeklagte hat gestanden": "Oskarżony się przyznał",
  "Das Urteil wurde von der Regierung bestätigt": "Wyrok potwierdził rząd",
  "Erst mit der Rechtskraft steht ein Urteil endgültig fest — bis dahin gilt die Unschuldsvermutung weiter.":
    "Dopiero z prawomocnością wyrok stoi ostatecznie — do tego czasu obowiązuje domniemanie niewinności.",
  "Ein Vermieter kündigt dir und du hältst das für unrechtmäßig. Was kannst du tun?":
    "Wynajmujący wypowiada ci najem, a ty uważasz to za bezprawne. Co możesz zrobić?",
  "Nichts, der Vermieter entscheidet": "Nic, decyduje wynajmujący",
  "Der Kündigung widersprechen und notfalls vor dem Amtsgericht klagen":
    "Wnieść sprzeciw wobec wypowiedzenia, a w razie potrzeby pozwać przed Amtsgericht",
  "Die Wohnung sofort räumen": "Natychmiast opróżnić mieszkanie",
  "Die Polizei rufen": "Wezwać policję",
  "Mietstreitigkeiten gehören vor die ordentlichen Gerichte, in erster Instanz meist das Amtsgericht. Mietervereine beraten vorab.":
    "Spory o najem należą do sądów powszechnych, w pierwszej instancji najczęściej do Amtsgericht. Stowarzyszenia lokatorów doradzają wcześniej.",
  "Was ist der Unterschied zwischen Zivilrecht und Strafrecht?":
    "Jaka jest różnica między prawem cywilnym a karnym?",
  "Zivilrecht gilt nur für Zivilisten": "Prawo cywilne dotyczy tylko cywilów",
  "Zivilrecht regelt Streit zwischen Privaten, Strafrecht die Verfolgung von Straftaten durch den Staat":
    "Prawo cywilne reguluje spory między osobami prywatnymi, prawo karne ściganie przestępstw przez państwo",
  "Strafrecht gilt nur für Ausländer": "Prawo karne dotyczy tylko cudzoziemców",
  "Es gibt keinen Unterschied": "Różnicy nie ma",
  "Im Zivilprozess streiten zwei Parteien, im Strafverfahren klagt der Staat durch die Staatsanwaltschaft an.":
    "W procesie cywilnym spierają się dwie strony, w postępowaniu karnym oskarża państwo przez prokuraturę.",
  "Wer ermittelt bei einer Straftat?": "Kto prowadzi śledztwo przy przestępstwie?",
  "Das Gericht": "Sąd",
  "Polizei und Staatsanwaltschaft": "Policja i prokuratura",
  "Die Staatsanwaltschaft leitet das Ermittlungsverfahren, die Polizei führt es durch. Das Gericht kommt erst danach.":
    "Prokuratura kieruje postępowaniem przygotowawczym, policja je prowadzi. Sąd wchodzi dopiero potem.",
  "Was ist eine Berufung?": "Czym jest apelacja?",
  "Der Beruf des Angeklagten": "Zawodem oskarżonego",
  "Ein Rechtsmittel, mit dem ein Urteil von einem höheren Gericht überprüft wird":
    "Środkiem odwoławczym, którym wyrok bada sąd wyższej instancji",
  "Die Ernennung eines Richters": "Powołaniem sędziego",
  "Die Vorladung zum Gericht": "Wezwaniem do sądu",
  "Wer mit einem Urteil nicht einverstanden ist, kann es in der nächsten Instanz überprüfen lassen.":
    "Kto nie zgadza się z wyrokiem, może dać go do zbadania w następnej instancji.",
  "Was passiert, wenn jemand kein Geld für einen Anwalt hat?":
    "Co się dzieje, gdy ktoś nie ma pieniędzy na adwokata?",
  "Er muss sich selbst verteidigen": "Musi bronić się sam",
  "Er kann Beratungs- oder Prozesskostenhilfe beantragen":
    "Może wnioskować o pomoc w kosztach porady albo procesu",
  "Das Verfahren wird eingestellt": "Postępowanie zostaje umorzone",
  "Er verliert automatisch": "Automatycznie przegrywa",
  "Der Zugang zum Recht darf nicht am Einkommen scheitern — dafür gibt es Beratungshilfe, Prozesskostenhilfe und Pflichtverteidigung.":
    "Dostęp do prawa nie może rozbić się o dochód — po to jest pomoc w poradzie, pomoc w kosztach procesu i obrona z urzędu.",
  "Wer zahlt die Beiträge zur gesetzlichen Rentenversicherung?":
    "Kto płaci składki na ustawowe ubezpieczenie emerytalne?",
  "Nur der Arbeitnehmer": "Tylko pracownik",
  "Arbeitnehmer und Arbeitgeber je zur Hälfte": "Pracownik i pracodawca po połowie",
  "Nur der Arbeitgeber": "Tylko pracodawca",
  "Der Staat": "Państwo",
  "Wie bei Kranken-, Pflege- und Arbeitslosenversicherung teilen sich beide Seiten den Beitrag.":
    "Tak jak przy ubezpieczeniu zdrowotnym, pielęgnacyjnym i na wypadek bezrobocia, obie strony dzielą się składką.",
  "Was ist das Umlageverfahren in der Rentenversicherung?":
    "Czym jest system repartycyjny w ubezpieczeniu emerytalnym?",
  "Jeder spart sein eigenes Geld an": "Każdy odkłada własne pieniądze",
  "Die heutigen Beitragszahler finanzieren die heutigen Renten":
    "Dzisiejsi płatnicy składek finansują dzisiejsze emerytury",
  "Der Staat legt das Geld an der Börse an": "Państwo lokuje pieniądze na giełdzie",
  "Die Renten kommen aus der Mehrwertsteuer": "Emerytury pochodzą z podatku VAT",
  "Ein Generationenvertrag: Wer heute arbeitet, zahlt die Renten von heute und erwirbt damit einen eigenen Anspruch für später.":
    "Umowa pokoleniowa: kto dziś pracuje, płaci dzisiejsze emerytury i nabywa tym własne uprawnienie na później.",
  "Wer hilft bei der Suche nach Arbeit und zahlt Arbeitslosengeld?":
    "Kto pomaga w szukaniu pracy i wypłaca zasiłek dla bezrobotnych?",
  "Das Jobcenter und die Agentur für Arbeit": "Jobcenter i Agentur für Arbeit",
  "Die Agentur für Arbeit zahlt Arbeitslosengeld, das Jobcenter betreut Bürgergeld-Empfänger.":
    "Agentur für Arbeit wypłaca zasiłek dla bezrobotnych, Jobcenter opiekuje się pobierającymi Bürgergeld.",
  "Wofür ist die Berufsgenossenschaft zuständig?": "Za co odpowiada Berufsgenossenschaft?",
  "Für die Rente": "Za emeryturę",
  "Für die gesetzliche Unfallversicherung bei Arbeitsunfällen und Berufskrankheiten":
    "Za ustawowe ubezpieczenie wypadkowe przy wypadkach przy pracy i chorobach zawodowych",
  "Für die Arbeitsvermittlung": "Za pośrednictwo pracy",
  "Für Tarifverhandlungen": "Za negocjacje układów zbiorowych",
  "Die Berufsgenossenschaften sind die Träger der Unfallversicherung — bezahlt allein vom Arbeitgeber.":
    "Berufsgenossenschaften są instytucjami ubezpieczenia wypadkowego — opłacanego wyłącznie przez pracodawcę.",
  "Was ist das Ziel des Bürgergeldes?": "Jaki jest cel Bürgergeld?",
  "Ein Zuschuss für Besserverdienende": "Dopłata dla lepiej zarabiających",
  "Die Grundsicherung des Lebensunterhalts für Erwerbsfähige ohne ausreichendes Einkommen":
    "Zabezpieczenie podstawowych potrzeb życiowych dla zdolnych do pracy bez wystarczającego dochodu",
  "Eine zusätzliche Rente": "Dodatkowa emerytura",
  "Ein Darlehen für Selbstständige": "Pożyczka dla samozatrudnionych",
  "Es sichert das Existenzminimum und unterstützt zugleich den Weg zurück in Arbeit.":
    "Zabezpiecza minimum egzystencji i jednocześnie wspiera drogę z powrotem do pracy.",
  "Wie lange kann Elterngeld in der Grundvariante höchstens bezogen werden?":
    "Jak długo najdłużej można pobierać Elterngeld w wariancie podstawowym?",
  "3 Monate": "3 miesiące",
  "14 Monate zwischen beiden Elternteilen": "14 miesięcy między obojgiem rodziców",
  "24 Monate": "24 miesiące",
  "36 Monate": "36 miesięcy",
  "Bis zu 14 Monate, wenn sich beide Elternteile die Zeit teilen; ein Elternteil allein kann höchstens 12 Monate beziehen.":
    "Do 14 miesięcy, gdy oboje rodzice dzielą się czasem; jedno z rodziców samo może pobierać najwyżej 12 miesięcy.",
  "Was ist der Unterschied zwischen Brutto und Netto?":
    "Jaka jest różnica między brutto a netto?",
  "Brutto ist der Lohn vor Abzügen, Netto der Betrag nach Steuern und Sozialabgaben":
    "Brutto to płaca przed potrąceniami, netto kwota po podatkach i składkach społecznych",
  "Netto ist der Lohn vor Abzügen": "Netto to płaca przed potrąceniami",
  "Brutto gilt nur für Selbstständige": "Brutto dotyczy tylko samozatrudnionych",
  "Es ist dasselbe": "To to samo",
  "Vom Brutto gehen Lohnsteuer und Sozialabgaben ab; das Netto landet auf dem Konto.":
    "Od brutta odchodzą podatek od wynagrodzeń i składki społeczne; netto ląduje na koncie.",
  "Was bedeutet Versicherungspflicht in der Krankenversicherung?":
    "Co oznacza obowiązek ubezpieczenia w ubezpieczeniu zdrowotnym?",
  "Jeder darf sich freiwillig versichern": "Każdy może ubezpieczyć się dobrowolnie",
  "Jede Person in Deutschland muss krankenversichert sein — gesetzlich oder privat":
    "Każda osoba w Niemczech musi być ubezpieczona zdrowotnie — ustawowo albo prywatnie",
  "Nur Arbeitnehmer müssen versichert sein": "Ubezpieczeni muszą być tylko pracownicy",
  "Nur wer krank ist, muss sich versichern": "Ubezpieczyć się musi tylko ten, kto jest chory",
  "Seit 2009 gilt die allgemeine Versicherungspflicht. Niemand soll ohne Absicherung dastehen.":
    "Od 2009 roku obowiązuje powszechny obowiązek ubezpieczenia. Nikt nie ma zostać bez zabezpieczenia.",
  "Wie hieß das Parlament im Deutschen Kaiserreich?":
    "Jak nazywał się parlament w Cesarstwie Niemieckim?",
  "Der Reichstag wurde gewählt, konnte die Regierung aber nicht stürzen — der Kanzler war dem Kaiser verantwortlich.":
    "Reichstag pochodził z wyboru, ale nie mógł obalić rządu — kanclerz odpowiadał przed cesarzem.",
  "Wann begann der Erste Weltkrieg?": "Kiedy zaczęła się pierwsza wojna światowa?",
  "1919": "1919",
  "1914, und er endete 1918 mit der deutschen Niederlage.":
    "W 1914, a skończyła się w 1918 niemiecką klęską.",
  "Wer war der erste Reichspräsident der Weimarer Republik?":
    "Kto był pierwszym prezydentem Rzeszy Republiki Weimarskiej?",
  "Paul von Hindenburg": "Paul von Hindenburg",
  "Gustav Stresemann": "Gustav Stresemann",
  "Friedrich Ebert ab 1919. Hindenburg folgte 1925 und ernannte 1933 Hitler zum Reichskanzler.":
    "Friedrich Ebert od 1919 roku. Hindenburg nastąpił w 1925 i w 1933 mianował Hitlera kanclerzem Rzeszy.",
  "Welche Farben hatte die Flagge der Weimarer Republik?":
    "Jakie barwy miała flaga Republiki Weimarskiej?",
  "Schwarz-Weiß-Rot": "Czarno-biało-czerwone",
  "Schwarz-Rot-Gold": "Czarno-czerwono-złote",
  "Schwarz-Rot-Weiß": "Czarno-czerwono-białe",
  "Blau-Weiß-Rot": "Niebiesko-biało-czerwone",
  "Schwarz-Rot-Gold, wie heute — im Kaiserreich war es Schwarz-Weiß-Rot. Um die Farben wurde in Weimar erbittert gestritten.":
    "Czarno-czerwono-złote, jak dziś — w cesarstwie były czarno-biało-czerwone. O barwy spierano się w Weimarze zaciekle.",
  "Was war der Reichstagsbrand von 1933 für die Nationalsozialisten?":
    "Czym był dla narodowych socjalistów pożar Reichstagu w 1933 roku?",
  "Ein Grund, Grundrechte per Notverordnung außer Kraft zu setzen":
    "Powodem, żeby rozporządzeniem nadzwyczajnym uchylić prawa podstawowe",
  "Ein Anlass für Neuwahlen zum Kaiser": "Okazją do nowych wyborów cesarza",
  "Der Beginn des Zweiten Weltkriegs": "Początkiem drugiej wojny światowej",
  "Das Ende ihrer Herrschaft": "Końcem ich władzy",
  "Unmittelbar danach wurden zentrale Grundrechte aufgehoben — ein entscheidender Schritt zur Diktatur.":
    "Bezpośrednio potem uchylono kluczowe prawa podstawowe — krok rozstrzygający ku dyktaturze.",
  "Was geschah am 9. November 1918?": "Co wydarzyło się 9 listopada 1918 roku?",
  "Der Kaiser dankte ab und die Republik wurde ausgerufen":
    "Cesarz abdykował, a republikę proklamowano",
  "Der Erste Weltkrieg begann": "Zaczęła się pierwsza wojna światowa",
  "Die Weimarer Verfassung trat in Kraft": "Weszła w życie konstytucja weimarska",
  "Das Ende der Monarchie. Der 9. November trägt in der deutschen Geschichte gleich mehrere schwere Daten.":
    "Koniec monarchii. 9 listopada nosi w niemieckiej historii od razu kilka ciężkich dat.",
  "Wie viele Jahre bestand die Weimarer Republik ungefähr?":
    "Ile mniej więcej lat istniała Republika Weimarska?",
  "Etwa 5 Jahre": "Około 5 lat",
  "Etwa 14 Jahre": "Około 14 lat",
  "Etwa 30 Jahre": "Około 30 lat",
  "Etwa 50 Jahre": "Około 50 lat",
  "Von 1919 bis 1933, also rund vierzehn Jahre — die erste deutsche Demokratie.":
    "Od 1919 do 1933, czyli jakieś czternaście lat — pierwsza niemiecka demokracja.",
  "Welche Rolle spielte Artikel 48 der Weimarer Verfassung?":
    "Jaką rolę odegrał artykuł 48 konstytucji weimarskiej?",
  "Er sicherte das Frauenwahlrecht": "Zapewniał prawa wyborcze kobiet",
  "Er erlaubte dem Reichspräsidenten, mit Notverordnungen am Parlament vorbei zu regieren":
    "Pozwalał prezydentowi Rzeszy rządzić rozporządzeniami nadzwyczajnymi z pominięciem parlamentu",
  "Er regelte die Steuern": "Regulował podatki",
  "Er verbot politische Parteien": "Zakazywał partii politycznych",
  "Das Notverordnungsrecht wurde ab 1930 zur Regel statt zur Ausnahme und höhlte das Parlament aus — deshalb kennt das Grundgesetz nichts Vergleichbares.":
    "Prawo do rozporządzeń nadzwyczajnych stało się od 1930 roku regułą zamiast wyjątkiem i wydrążyło parlament — dlatego Grundgesetz nie zna nic podobnego.",
  "Wie viele Parteien waren im NS-Staat ab Sommer 1933 zugelassen?":
    "Ile partii było dopuszczonych w państwie nazistowskim od lata 1933 roku?",
  "Keine": "Żadna",
  "Nur eine": "Tylko jedna",
  "Zwei": "Dwie",
  "Alle wie vorher": "Wszystkie jak wcześniej",
  "Nur die NSDAP. Alle anderen wurden verboten oder lösten sich auf.":
    "Tylko NSDAP. Wszystkie inne zakazano albo się rozwiązały.",
  "Was bedeutet „Gleichschaltung“?": "Co oznacza „Gleichschaltung”?",
  "Die Angleichung der Löhne": "Wyrównanie płac",
  "Die Unterwerfung von Verwaltung, Verbänden und Medien unter die NSDAP":
    "Podporządkowanie administracji, związków i mediów NSDAP",
  "Die Vereinheitlichung der Stromnetze": "Ujednolicenie sieci energetycznych",
  "Die Gleichstellung von Mann und Frau": "Zrównanie mężczyzny i kobiety",
  "Innerhalb weniger Monate wurde jede eigenständige Organisation entweder verboten oder auf Linie gebracht.":
    "W ciągu kilku miesięcy każdą samodzielną organizację albo zakazano, albo ustawiono w szeregu.",
  "Was waren Konzentrationslager?": "Czym były obozy koncentracyjne?",
  "Schulungszentren der Partei": "Ośrodkami szkoleniowymi partii",
  "Lager, in denen politische Gegner und verfolgte Gruppen eingesperrt, misshandelt und ermordet wurden":
    "Obozami, w których zamykano, maltretowano i mordowano przeciwników politycznych i prześladowane grupy",
  "Ferienlager für Jugendliche": "Obozami wakacyjnymi dla młodzieży",
  "Kasernen der Wehrmacht": "Koszarami Wehrmachtu",
  "Schon 1933 eingerichtet, zunächst für politische Gegner. Später wurden sie Teil des Systems der Massenvernichtung.":
    "Zakładane już w 1933 roku, początkowo dla przeciwników politycznych. Później stały się częścią systemu masowej zagłady.",
  "Wer war Sophie Scholl?": "Kim była Sophie Scholl?",
  "Eine Ministerin der Weimarer Republik": "Ministrą Republiki Weimarskiej",
  "Eine Studentin der Widerstandsgruppe Weiße Rose, 1943 hingerichtet":
    "Studentką z grupy oporu Biała Róża, straconą w 1943 roku",
  "Die erste Bundeskanzlerin": "Pierwszą kanclerką",
  "Eine Widerstandskämpferin des 20. Juli 1944": "Uczestniczką ruchu oporu z 20 lipca 1944 roku",
  "Sie verteilte mit ihrem Bruder Hans in München Flugblätter gegen das Regime. Der 20. Juli war der militärische Widerstand um Stauffenberg.":
    "Rozdawała ze swoim bratem Hansem w Monachium ulotki przeciw reżimowi. 20 lipca to opór wojskowy wokół Stauffenberga.",
  "Welches Land überfiel Deutschland am 1. September 1939?":
    "Na który kraj Niemcy napadły 1 września 1939 roku?",
  "Frankreich": "Francję",
  "Polen": "Polskę",
  "Die Sowjetunion": "Związek Radziecki",
  "Österreich": "Austrię",
  "Der Überfall auf Polen löste den Zweiten Weltkrieg aus. Der Angriff auf die Sowjetunion folgte 1941.":
    "Napaść na Polskę wywołała drugą wojnę światową. Atak na Związek Radziecki nastąpił w 1941 roku.",
  "Was ist am 8. Mai 1945 geschehen?": "Co się stało 8 maja 1945 roku?",
  "Der Krieg in Europa endete mit der bedingungslosen Kapitulation":
    "Wojna w Europie skończyła się bezwarunkową kapitulacją",
  "Die Bundesrepublik wurde gegründet": "Powstała Republika Federalna",
  "Der Krieg begann": "Zaczęła się wojna",
  "Das Kriegsende in Europa. Heute ist der 8. Mai ein Tag des Gedenkens und der Befreiung.":
    "Koniec wojny w Europie. Dziś 8 maja jest dniem pamięci i wyzwolenia.",
  "Durften Menschen im NS-Staat frei ihre Meinung sagen?":
    "Czy w państwie nazistowskim ludzie mogli swobodnie mówić, co myślą?",
  "Ja, uneingeschränkt": "Tak, bez ograniczeń",
  "Nein, Kritik konnte Verfolgung, Haft oder den Tod bedeuten":
    "Nie, krytyka mogła oznaczać prześladowanie, więzienie albo śmierć",
  "Ja, aber nur schriftlich": "Tak, ale tylko pisemnie",
  "Nur Parteimitglieder durften kritisieren": "Krytykować mogli tylko członkowie partii",
  "Presse und Rundfunk waren gleichgeschaltet, abweichende Meinungen wurden verfolgt.":
    "Prasa i radio były ustawione w szeregu, odmienne poglądy prześladowano.",
  "Warum ist das Ermächtigungsgesetz von 1933 so bedeutsam?":
    "Dlaczego ustawa o pełnomocnictwach z 1933 roku jest tak doniosła?",
  "Es führte die Todesstrafe ein": "Wprowadziła karę śmierci",
  "Es übertrug der Regierung die Gesetzgebung und beseitigte damit die Gewaltenteilung":
    "Przekazała rządowi stanowienie prawa i zniosła tym podział władz",
  "Es verbot die Kirchen": "Zakazała kościołów",
  "Es beendete den Ersten Weltkrieg": "Zakończyła pierwszą wojnę światową",
  "Von da an konnte die Regierung Gesetze ohne das Parlament erlassen — die entscheidende Weichenstellung zur Diktatur.":
    "Odtąd rząd mógł wydawać ustawy bez parlamentu — rozstrzygające ustawienie zwrotnicy ku dyktaturze.",
  "Was ist der Holocaust?": "Czym jest Holokaust?",
  "Eine Hungersnot im Ersten Weltkrieg": "Klęską głodu w pierwszej wojnie światowej",
  "Der staatlich organisierte Massenmord an den europäischen Juden":
    "Zorganizowanym przez państwo masowym mordem na europejskich Żydach",
  "Ein Luftangriff auf deutsche Städte": "Nalotem na niemieckie miasta",
  "Die Vertreibung nach 1945": "Wypędzeniem po 1945 roku",
  "Etwa sechs Millionen Juden wurden ermordet. Der hebräische Begriff dafür ist Schoah.":
    "Zamordowano około sześciu milionów Żydów. Hebrajskie określenie tego to Szoa.",
  "Wo befand sich das größte nationalsozialistische Vernichtungslager?":
    "Gdzie znajdował się największy nazistowski obóz zagłady?",
  "Dachau": "Dachau",
  "Auschwitz": "Auschwitz",
  "Bergen-Belsen": "Bergen-Belsen",
  "Buchenwald": "Buchenwald",
  "Auschwitz im besetzten Polen. Dachau, Buchenwald und Bergen-Belsen waren Konzentrationslager auf deutschem Boden.":
    "Auschwitz w okupowanej Polsce. Dachau, Buchenwald i Bergen-Belsen były obozami koncentracyjnymi na ziemi niemieckiej.",
  "Was steht in Berlin als zentrales Mahnmal für die ermordeten Juden Europas?":
    "Co stoi w Berlinie jako centralny pomnik pamięci zamordowanych Żydów Europy?",
  "Das Brandenburger Tor": "Brama Brandenburska",
  "Das Denkmal für die ermordeten Juden Europas mit seinen Stelen":
    "Pomnik Pomordowanych Żydów Europy ze swoimi stelami",
  "Die Siegessäule": "Kolumna Zwycięstwa",
  "Der Reichstag": "Reichstag",
  "Das Stelenfeld nahe dem Brandenburger Tor, eröffnet 2005.":
    "Pole stel niedaleko Bramy Brandenburskiej, otwarte w 2005 roku.",
  "Was sind Stolpersteine?": "Czym są Stolpersteine?",
  "Hindernisse auf Gehwegen": "Przeszkodami na chodnikach",
  "Kleine Gedenktafeln im Boden vor den letzten frei gewählten Wohnorten von NS-Opfern":
    "Małymi tabliczkami pamiątkowymi w bruku przed ostatnimi dobrowolnie wybranymi miejscami zamieszkania ofiar nazizmu",
  "Grenzsteine zwischen Bundesländern": "Kamieniami granicznymi między krajami związkowymi",
  "Steine aus zerstörten Synagogen": "Kamieniami ze zburzonych synagog",
  "Messingtafeln im Pflaster, die Namen und Schicksal einzelner Opfer nennen — inzwischen über 100.000 in ganz Europa.":
    "Mosiężne tabliczki w bruku, które podają imię i los pojedynczej ofiary — dziś ponad 100 000 w całej Europie.",
  "Welche Folge hat die NS-Vergangenheit für die deutsche Außenpolitik?":
    "Jaki skutek ma nazistowska przeszłość dla niemieckiej polityki zagranicznej?",
  "Deutschland hält sich aus allem heraus": "Niemcy trzymają się od wszystkiego z daleka",
  "Eine besondere Verantwortung gegenüber Israel und für den Schutz von Menschenrechten":
    "Szczególną odpowiedzialność wobec Izraela i za ochronę praw człowieka",
  "Deutschland darf keine Verträge schließen": "Niemcy nie mogą zawierać umów",
  "Deutschland ist von der UNO ausgeschlossen": "Niemcy są wykluczone z ONZ",
  "Aus der Geschichte folgt eine dauerhafte Verpflichtung — gegenüber Israel, gegenüber jüdischem Leben in Deutschland und für Menschenrechte allgemein.":
    "Z historii wynika trwałe zobowiązanie — wobec Izraela, wobec żydowskiego życia w Niemczech i za prawa człowieka w ogóle.",
  "Was ist Antisemitismus?": "Czym jest antysemityzm?",
  "Ablehnung aller Religionen": "Odrzuceniem wszystkich religii",
  "Feindschaft und Hass gegen Juden": "Wrogością i nienawiścią wobec Żydów",
  "Kritik an einer Regierung": "Krytyką rządu",
  "Eine politische Partei": "Partią polityczną",
  "Judenfeindschaft in ihren verschiedenen Formen. In Deutschland wird sie strafrechtlich und gesellschaftlich entschieden bekämpft.":
    "Wrogość wobec Żydów w jej różnych postaciach. W Niemczech zwalcza się ją zdecydowanie, prawnie i społecznie.",
  "Ist es in Deutschland erlaubt, Hakenkreuze öffentlich zu zeigen?":
    "Czy w Niemczech wolno publicznie pokazywać swastyki?",
  "Ja, das ist Kunstfreiheit": "Tak, to wolność sztuki",
  "Nein, das Verwenden von Kennzeichen verfassungswidriger Organisationen ist strafbar":
    "Nie, używanie symboli organizacji sprzecznych z konstytucją jest karalne",
  "Ja, auf Kleidung": "Tak, na ubraniach",
  "Nur bei Demonstrationen": "Tylko na demonstracjach",
  "Strafbar nach § 86a StGB. Ausnahmen gelten nur für Bildung, Kunst und Wissenschaft in eindeutig ablehnendem Zusammenhang.":
    "Karalne według § 86a StGB. Wyjątki obowiązują tylko dla edukacji, sztuki i nauki w jednoznacznie odrzucającym kontekście.",
  "Was bedeutet „Erinnerungskultur“?": "Co oznacza „kultura pamięci”?",
  "Das Sammeln alter Gegenstände": "Zbieranie starych przedmiotów",
  "Der bewusste gesellschaftliche Umgang mit der eigenen Geschichte, besonders mit der NS-Zeit":
    "Świadome obchodzenie się społeczeństwa z własną historią, zwłaszcza z czasem nazizmu",
  "Der Geschichtsunterricht an Universitäten": "Lekcje historii na uniwersytetach",
  "Das Feiern von Jahrestagen": "Świętowanie rocznic",
  "Gedenkstätten, Gedenktage, Unterricht und Forschung zusammen — die Vergangenheit wird nicht abgeschlossen, sondern wachgehalten.":
    "Miejsca pamięci, dni pamięci, lekcje i badania razem — przeszłości się nie zamyka, lecz utrzymuje ją żywą.",
  "Welche Stadt war Hauptstadt der Bundesrepublik bis 1990?":
    "Które miasto było stolicą Republiki Federalnej do 1990 roku?",
  "Bonn. Berlin war geteilt und wurde erst 1990 wieder Hauptstadt.":
    "Bonn. Berlin był podzielony i dopiero w 1990 roku znów został stolicą.",
  "Was war die Währungsreform von 1948 in den Westzonen?":
    "Czym była reforma walutowa z 1948 roku w strefach zachodnich?",
  "Die Einführung der D-Mark": "Wprowadzeniem D-Mark",
  "Die Abschaffung des Bargelds": "Zniesieniem gotówki",
  "Die Einführung der Rentenmark": "Wprowadzeniem Rentenmark",
  "Die D-Mark löste die Reichsmark ab. Die sowjetische Antwort darauf war die Berliner Blockade.":
    "D-Mark zastąpiła Reichsmark. Radziecką odpowiedzią na to była blokada Berlina.",
  "Wie heißt das Wirtschaftsmodell der Bundesrepublik?":
    "Jak nazywa się model gospodarczy Republiki Federalnej?",
  "Planwirtschaft": "Gospodarka planowa",
  "Soziale Marktwirtschaft": "Społeczna gospodarka rynkowa",
  "Staatswirtschaft": "Gospodarka państwowa",
  "Tauschwirtschaft": "Gospodarka wymienna",
  "Freier Wettbewerb mit sozialem Ausgleich — verbunden mit dem Namen Ludwig Erhard.":
    "Wolna konkurencja z wyrównaniem socjalnym — związana z nazwiskiem Ludwiga Erharda.",
  "Aus welchen Zonen entstand die Bundesrepublik Deutschland?":
    "Z których stref powstała Republika Federalna Niemiec?",
  "Aus der sowjetischen Zone": "Ze strefy radzieckiej",
  "Aus der amerikanischen, britischen und französischen Zone":
    "Ze strefy amerykańskiej, brytyjskiej i francuskiej",
  "Aus allen vier Zonen": "Ze wszystkich czterech stref",
  "Aus der amerikanischen Zone allein": "Z samej strefy amerykańskiej",
  "Die drei Westzonen wurden 1949 zur Bundesrepublik, die sowjetische Zone zur DDR.":
    "Trzy strefy zachodnie stały się w 1949 roku Republiką Federalną, strefa radziecka NRD.",
  "Welche Bedeutung hatte das Anwerbeabkommen mit der Türkei von 1961?":
    "Jakie znaczenie miała umowa werbunkowa z Turcją z 1961 roku?",
  "Es beendete den Krieg": "Zakończyła wojnę",
  "Es holte Arbeitskräfte nach Westdeutschland, von denen viele blieben":
    "Sprowadziła siłę roboczą do Niemiec Zachodnich, a wielu z tych ludzi zostało",
  "Es regelte den Handel mit Öl": "Regulowała handel ropą",
  "Es öffnete die Grenze zur DDR": "Otworzyła granicę z NRD",
  "Aus angeworbenen Arbeitskräften wurden Nachbarn, Kollegen und Familien — ein prägender Teil der Einwanderungsgeschichte.":
    "Ze zwerbowanych pracowników zrobili się sąsiedzi, koledzy i rodziny — kształtująca część historii imigracji.",
  "Was waren die „Trümmerfrauen“?": "Kim były „Trümmerfrauen”?",
  "Frauen, die nach dem Krieg beim Aufräumen der zerstörten Städte halfen":
    "Kobietami, które po wojnie pomagały uprzątać zniszczone miasta",
  "Eine Gewerkschaft": "Związkiem zawodowym",
  "Frauen, die in die Westzonen flohen": "Kobietami, które uciekły do stref zachodnich",
  "Sie räumten Schutt und retteten Ziegel für den Wiederaufbau — ein Sinnbild für den Neuanfang nach 1945.":
    "Uprzątały gruz i ratowały cegły pod odbudowę — symbol nowego początku po 1945 roku.",
  "Wie viele Besatzungszonen hatte Deutschland nach 1945?":
    "Ile stref okupacyjnych miały Niemcy po 1945 roku?",
  "Drei": "Trzy",
  "Vier": "Cztery",
  "Fünf": "Pięć",
  "Vier — USA, Großbritannien, Frankreich und Sowjetunion. Berlin war zusätzlich in vier Sektoren geteilt.":
    "Cztery — USA, Wielka Brytania, Francja i Związek Radziecki. Berlin był dodatkowo podzielony na cztery sektory.",
  "Was bedeutet „Kalter Krieg“?": "Co oznacza „zimna wojna”?",
  "Ein Krieg im Winter": "Wojnę zimą",
  "Die jahrzehntelange Konfrontation zwischen Ost und West ohne offenen Krieg zwischen den Blöcken":
    "Trwającą dziesięciolecia konfrontację między Wschodem a Zachodem bez otwartej wojny między blokami",
  "Ein Krieg um Rohstoffe": "Wojnę o surowce",
  "Der Krieg um Berlin": "Wojnę o Berlin",
  "Spannungen, Wettrüsten und Stellvertreterkonflikte — Deutschland lag genau an der Grenze zwischen beiden Blöcken.":
    "Napięcia, wyścig zbrojeń i konflikty zastępcze — Niemcy leżały dokładnie na granicy między obydwoma blokami.",
  "Wofür steht die Abkürzung DDR?": "Co oznacza skrót DDR?",
  "Deutsches Demokratisches Reich": "Deutsches Demokratisches Reich",
  "Deutscher Demokratischer Rat": "Deutscher Demokratischer Rat",
  "Deutsche Demokratische Regierung": "Deutsche Demokratische Regierung",
  "Deutsche Demokratische Republik — der Name behauptete eine Demokratie, die es nicht gab.":
    "Deutsche Demokratische Republik — nazwa głosiła demokrację, której nie było.",
  "Wie hieß die Jugendorganisation der DDR?": "Jak nazywała się organizacja młodzieżowa NRD?",
  "Junge Pioniere und FDJ": "Junge Pioniere i FDJ",
  "Bundesjugendring": "Bundesjugendring",
  "Jungdemokraten": "Jungdemokraten",
  "Pfadfinder": "Harcerze",
  "Junge Pioniere für die Jüngeren, die Freie Deutsche Jugend für die Älteren — beide der SED unterstellt.":
    "Junge Pioniere dla młodszych, Freie Deutsche Jugend dla starszych — obie podporządkowane SED.",
  "Was war die Nationale Volksarmee?": "Czym była Nationale Volksarmee?",
  "Die Polizei der DDR": "Policją NRD",
  "Der Geheimdienst": "Służbą wywiadowczą",
  "Eine Jugendorganisation": "Organizacją młodzieżową",
  "Die NVA war die Armee der DDR. Der Geheimdienst hieß Staatssicherheit.":
    "NVA była armią NRD. Służba bezpieczeństwa nazywała się Staatssicherheit.",
  "Was bedeutete „Republikflucht“ in der DDR?": "Co oznaczała „Republikflucht” w NRD?",
  "Ein Urlaub im Ausland": "Urlop za granicą",
  "Das Verlassen der DDR ohne Genehmigung — es war strafbar":
    "Opuszczenie NRD bez zezwolenia — było karalne",
  "Der Umzug in eine andere Stadt": "Przeprowadzkę do innego miasta",
  "Die Ausbürgerung von Künstlern": "Pozbawianie artystów obywatelstwa",
  "Wer ohne Erlaubnis in den Westen ging, machte sich strafbar; an der Grenze wurde geschossen.":
    "Kto bez zezwolenia szedł na Zachód, popełniał przestępstwo; na granicy strzelano.",
  "Was war ein „Inoffizieller Mitarbeiter“ der Stasi?":
    "Kim był „nieoficjalny współpracownik” Stasi?",
  "Ein Angestellter ohne Vertrag": "Pracownikiem bez umowy",
  "Eine Person, die heimlich Informationen über andere weitergab":
    "Osobą, która potajemnie przekazywała informacje o innych",
  "Ein Grenzsoldat": "Żołnierzem granicznym",
  "Ein Mitglied der Volkskammer": "Członkiem Volkskammer",
  "Hunderttausende bespitzelten Nachbarn, Kollegen, Freunde und sogar die eigene Familie.":
    "Setki tysięcy szpiegowały sąsiadów, kolegów, przyjaciół, a nawet własną rodzinę.",
  "Wie war die Wirtschaft der DDR organisiert?": "Jak zorganizowana była gospodarka NRD?",
  "Als freie Marktwirtschaft": "Jako wolna gospodarka rynkowa",
  "Als Planwirtschaft mit staatlichen Betrieben":
    "Jako gospodarka planowa z zakładami państwowymi",
  "Als soziale Marktwirtschaft": "Jako społeczna gospodarka rynkowa",
  "Ohne jede Planung": "Bez żadnego planowania",
  "Der Staat gab Produktionsziele vor und besaß die Betriebe (VEB — Volkseigener Betrieb).":
    "Państwo wyznaczało cele produkcji i posiadało zakłady (VEB — Volkseigener Betrieb).",
  "Konnten DDR-Bürger frei in den Westen reisen?":
    "Czy obywatele NRD mogli swobodnie podróżować na Zachód?",
  "Nein, das war für die meisten nicht möglich": "Nie, dla większości nie było to możliwe",
  "Ja, einmal im Jahr": "Tak, raz w roku",
  "Nur mit einem Reisepass": "Tylko z paszportem",
  "Reisen in den Westen waren streng beschränkt — genau deshalb wurde die Mauer gebaut.":
    "Podróże na Zachód były surowo ograniczone — właśnie dlatego zbudowano mur.",
  "Warum gab es in der DDR trotz Wahlen keine echte Auswahl?":
    "Dlaczego w NRD mimo wyborów nie było rzeczywistego wyboru?",
  "Weil niemand wählen wollte": "Bo nikt nie chciał głosować",
  "Weil nur eine Einheitsliste zur Abstimmung stand":
    "Bo pod głosowanie szła tylko lista jednolita",
  "Weil es keine Wahllokale gab": "Bo nie było lokali wyborczych",
  "Weil nur Parteimitglieder wählen durften": "Bo głosować mogli tylko członkowie partii",
  "Die Sitzverteilung stand vorher fest; man konnte der Liste zustimmen, aber nicht zwischen Alternativen wählen.":
    "Podział mandatów był ustalony wcześniej; liście można było przytaknąć, ale nie wybierać między alternatywami.",
  "In welchem Jahr wurde Deutschland wiedervereinigt?":
    "W którym roku Niemcy zostały zjednoczone?",
  "1989": "1989",
  "1991": "1991",
  "1993": "1993",
  "Am 3. Oktober 1990. Die Mauer fiel schon im November 1989.":
    "3 października 1990. Mur padł już w listopadzie 1989 roku.",
  "Von welcher Kirche gingen die Leipziger Montagsdemonstrationen aus?":
    "Od którego kościoła wyszły lipskie demonstracje poniedziałkowe?",
  "Vom Kölner Dom": "Od katedry w Kolonii",
  "Von der Nikolaikirche": "Od Nikolaikirche",
  "Von der Frauenkirche": "Od Frauenkirche",
  "Von der Marienkirche": "Od Marienkirche",
  "Die Friedensgebete in der Leipziger Nikolaikirche waren der Ausgangspunkt der Montagsdemonstrationen.":
    "Modlitwy o pokój w lipskiej Nikolaikirche były punktem wyjścia demonstracji poniedziałkowych.",
  "Welcher sowjetische Staatschef ermöglichte durch seine Reformpolitik den Wandel im Osten?":
    "Który przywódca radziecki umożliwił swoją polityką reform przemianę na Wschodzie?",
  "Leonid Breschnew": "Leonid Breżniew",
  "Michail Gorbatschow": "Michaił Gorbaczow",
  "Josef Stalin": "Józef Stalin",
  "Boris Jelzin": "Borys Jelcyn",
  "Gorbatschows Glasnost und Perestroika machten den friedlichen Umbruch in Mittel- und Osteuropa möglich.":
    "Głasnost i pieriestrojka Gorbaczowa umożliwiły pokojowy przełom w Europie Środkowej i Wschodniej.",
  "Wie wurde die DDR Teil der Bundesrepublik?":
    "W jaki sposób NRD stała się częścią Republiki Federalnej?",
  "Durch eine neue gemeinsame Verfassung": "Przez nową wspólną konstytucję",
  "Durch Beitritt der DDR zum Geltungsbereich des Grundgesetzes":
    "Przez przystąpienie NRD do obszaru obowiązywania Grundgesetz",
  "Durch einen Beschluss der Vereinten Nationen":
    "Przez uchwałę Organizacji Narodów Zjednoczonych",
  "Durch eine Volksabstimmung im Westen": "Przez referendum na Zachodzie",
  "Der Beitrittsweg nach dem damaligen Artikel 23 — das Grundgesetz galt danach für ganz Deutschland.":
    "Drogą przystąpienia według ówczesnego artykułu 23 — Grundgesetz obowiązywał potem w całych Niemczech.",
  "Welche Rolle spielte die Währungsunion vom 1. Juli 1990?":
    "Jaką rolę odegrała unia walutowa z 1 lipca 1990 roku?",
  "Sie führte den Euro ein": "Wprowadziła euro",
  "Sie brachte die D-Mark in die DDR, noch vor der staatlichen Einheit":
    "Przyniosła D-Mark do NRD, jeszcze przed jednością państwową",
  "Sie schaffte das Bargeld ab": "Zniosła gotówkę",
  "Sie war Teil des Zwei-plus-Vier-Vertrags": "Była częścią układu dwa plus cztery",
  "Drei Monate vor der Vereinigung wurde die D-Mark auch im Osten gesetzliches Zahlungsmittel.":
    "Trzy miesiące przed zjednoczeniem D-Mark stała się prawnym środkiem płatniczym także na Wschodzie.",
  "Welche vier Mächte unterzeichneten mit beiden deutschen Staaten den Zwei-plus-Vier-Vertrag?":
    "Które cztery mocarstwa podpisały z obydwoma państwami niemieckimi układ dwa plus cztery?",
  "USA, Frankreich, Polen, Italien": "USA, Francja, Polska, Włochy",
  "USA, China, Frankreich, Sowjetunion": "USA, Chiny, Francja, Związek Radziecki",
  "Dieselben vier Siegermächte von 1945 — damit war die Nachkriegsordnung förmlich abgeschlossen.":
    "Te same cztery mocarstwa zwycięskie z 1945 roku — tym formalnie zamknięto porządek powojenny.",
  "Wie wird der Umbruch von 1989 in der DDR genannt?":
    "Jak nazywa się przełom z 1989 roku w NRD?",
  "Bürgerkrieg": "Wojną domową",
  "Friedliche Revolution": "Pokojową rewolucją",
  "Putsch": "Puczem",
  "Reformation": "Reformacją",
  "Friedliche Revolution — sie kam ohne Gewalt der Demonstrierenden aus.":
    "Pokojowa rewolucja — obyła się bez przemocy ze strony demonstrujących.",
  "Was ist die Bedeutung des Brandenburger Tors für die deutsche Einheit?":
    "Jakie znaczenie ma Brama Brandenburska dla niemieckiej jedności?",
  "Dort wurde die Verfassung unterschrieben": "Tam podpisano konstytucję",
  "Es stand direkt an der Mauer und wurde zum Symbol der Teilung und dann der Einheit":
    "Stała bezpośrednio przy murze i stała się symbolem podziału, a potem jedności",
  "Dort tagt der Bundestag": "Tam obraduje Bundestag",
  "Es ist das älteste Gebäude Berlins": "To najstarszy budynek Berlina",
  "Jahrzehntelang unzugänglich im Grenzstreifen, heute das Bild schlechthin für das wiedervereinigte Deutschland.":
    "Przez dziesięciolecia niedostępna w pasie granicznym, dziś obraz zjednoczonych Niemiec jak żaden inny.",
  "Welche Farbe hat die Flagge der Europäischen Union?":
    "Jakiego koloru jest flaga Unii Europejskiej?",
  "Blau mit zwölf goldenen Sternen im Kreis": "Niebieska z dwunastoma złotymi gwiazdami w kole",
  "Grün mit weißem Kreuz": "Zielona z białym krzyżem",
  "Gold mit blauem Adler": "Złota z niebieskim orłem",
  "Zwölf Sterne auf blauem Grund — die Zahl steht für Vollständigkeit, nicht für die Mitgliederzahl.":
    "Dwanaście gwiazd na niebieskim tle — liczba oznacza pełnię, a nie liczbę członków.",
  "Wo hat das Europäische Parlament seinen Hauptsitz?":
    "Gdzie Parlament Europejski ma swoją główną siedzibę?",
  "Brüssel": "Bruksela",
  "Straßburg": "Strasburg",
  "Luxemburg": "Luksemburg",
  "Den Haag": "Haga",
  "Straßburg ist der Sitz; viele Ausschüsse tagen in Brüssel, das Generalsekretariat sitzt in Luxemburg.":
    "Siedzibą jest Strasburg; wiele komisji obraduje w Brukseli, sekretariat generalny mieści się w Luksemburgu.",
  "Was ist der Schengen-Raum?": "Czym jest strefa Schengen?",
  "Ein Gebiet ohne Steuern": "Obszarem bez podatków",
  "Ein Gebiet, in dem an den Binnengrenzen normalerweise nicht kontrolliert wird":
    "Obszarem, na którym na granicach wewnętrznych zwykle nie ma kontroli",
  "Der Sitz der EU-Kommission": "Siedzibą Komisji Europejskiej",
  "Die Zone der Euro-Länder": "Strefą krajów euro",
  "Reisen ohne Grenzkontrolle. Nicht dasselbe wie die Eurozone — die Mitgliederkreise überschneiden sich nur.":
    "Podróże bez kontroli granicznej. To nie to samo co strefa euro — kręgi członków tylko się nakładają.",
  "Welches Land verließ die EU im Jahr 2020?": "Który kraj opuścił UE w 2020 roku?",
  "Norwegen": "Norwegia",
  "Das Vereinigte Königreich": "Zjednoczone Królestwo",
  "Die Schweiz": "Szwajcaria",
  "Island": "Islandia",
  "Der Brexit. Norwegen, die Schweiz und Island waren nie Mitglied der EU.":
    "Brexit. Norwegia, Szwajcaria i Islandia nigdy nie były członkami UE.",
  "Wofür ist der Europarat zuständig — im Unterschied zur EU?":
    "Za co odpowiada Rada Europy — w odróżnieniu od UE?",
  "Für den Binnenmarkt": "Za rynek wewnętrzny",
  "Für Menschenrechte, Demokratie und Rechtsstaatlichkeit, mit deutlich mehr Mitgliedstaaten":
    "Za prawa człowieka, demokrację i praworządność, przy znacznie większej liczbie państw członkowskich",
  "Für die gemeinsame Währung": "Za wspólną walutę",
  "Für die Verteidigung": "Za obronę",
  "Zum Europarat gehört auch der Europäische Gerichtshof für Menschenrechte. Er ist älter und größer als die EU.":
    "Do Rady Europy należy też Europejski Trybunał Praw Człowieka. Jest starsza i większa niż UE.",
  "Was bedeutet die Unionsbürgerschaft?": "Co oznacza obywatelstwo Unii?",
  "Sie ersetzt die nationale Staatsangehörigkeit": "Zastępuje obywatelstwo krajowe",
  "Sie kommt zur nationalen Staatsangehörigkeit hinzu und bringt Rechte wie Freizügigkeit und das Kommunalwahlrecht":
    "Dochodzi do obywatelstwa krajowego i daje prawa takie jak swoboda przemieszczania się i prawo wyborcze w wyborach komunalnych",
  "Sie gilt nur für Beamte der EU": "Dotyczy tylko urzędników UE",
  "Sie muss beantragt werden": "Trzeba o nie wnioskować",
  "Jeder Staatsangehörige eines Mitgliedstaates ist automatisch auch Unionsbürger.":
    "Każdy obywatel państwa członkowskiego jest automatycznie także obywatelem Unii.",
  "Seit wann ist die Bundesrepublik Mitglied der NATO?":
    "Od kiedy Republika Federalna jest członkiem NATO?",
  "1955": "1955",
  "1955, im Zuge der Westbindung. 1949 wurde die Bundesrepublik gegründet, 1973 trat sie den UN bei.":
    "Od 1955, w toku wiązania z Zachodem. W 1949 powstała Republika Federalna, w 1973 przystąpiła do ONZ.",
  "Welche deutsche Institution überwacht heute nicht mehr die Geldpolitik des Euro?":
    "Która niemiecka instytucja nie nadzoruje już polityki pieniężnej euro?",
  "Die Deutsche Bundesbank — die Geldpolitik macht die Europäische Zentralbank":
    "Deutsche Bundesbank — politykę pieniężną prowadzi Europejski Bank Centralny",
  "Das Bundesfinanzministerium": "Federalne ministerstwo finansów",
  "Der Bundesrechnungshof": "Bundesrechnungshof",
  "Die Bundesanstalt für Finanzdienstleistungsaufsicht":
    "Bundesanstalt für Finanzdienstleistungsaufsicht",
  "Seit der Währungsunion entscheidet die EZB in Frankfurt über die Geldpolitik; die Bundesbank wirkt dort mit.":
    "Od unii walutowej o polityce pieniężnej decyduje EBC we Frankfurcie; Bundesbank w tym współdziała.",
  "Welches Land grenzt NICHT an Deutschland?": "Który kraj NIE graniczy z Niemcami?",
  "Dänemark": "Dania",
  "Italien": "Włochy",
  "Belgien": "Belgia",
  "Italien hat keine gemeinsame Grenze mit Deutschland — dazwischen liegen Österreich und die Schweiz.":
    "Włochy nie mają wspólnej granicy z Niemcami — między nimi leżą Austria i Szwajcaria.",
  "Welcher Fluss fließt durch Köln?": "Która rzeka płynie przez Kolonię?",
  "Der Rhein. Die Elbe fließt durch Dresden und Hamburg, die Weser durch Bremen.":
    "Ren. Łaba płynie przez Drezno i Hamburg, Wezera przez Bremę.",
  "Wie heißt das höchste Mittelgebirge Norddeutschlands mit dem Brocken?":
    "Jak nazywają się najwyższe góry średnie północnych Niemiec, z Brocken?",
  "Der Schwarzwald": "Schwarzwald",
  "Der Harz": "Harz",
  "Das Erzgebirge": "Rudawy",
  "Der Thüringer Wald": "Las Turyński",
  "Der Harz mit dem Brocken. Schwarzwald und Erzgebirge liegen im Süden beziehungsweise Osten.":
    "Harz z Brocken. Schwarzwald i Rudawy leżą odpowiednio na południu i na wschodzie.",
  "Was bedeuten die Farben Schwarz-Rot-Gold historisch?":
    "Co historycznie oznaczają barwy czarno-czerwono-złote?",
  "Die drei Besatzungsmächte": "Trzy mocarstwa okupacyjne",
  "Sie stehen seit dem 19. Jahrhundert für Einheit und Freiheit":
    "Od XIX wieku oznaczają jedność i wolność",
  "Die drei größten Bundesländer": "Trzy największe kraje związkowe",
  "Die drei Staatsgewalten": "Trzy władze państwowe",
  "Aus der Freiheitsbewegung des 19. Jahrhunderts, übernommen von der Paulskirche 1848 und der Weimarer Republik.":
    "Z ruchu wolnościowego XIX wieku, przejęte przez Paulskirche w 1848 roku i Republikę Weimarską.",
  "Welche deutsche Stadt ist zugleich Bundesland und liegt an der Weser?":
    "Które niemieckie miasto jest zarazem krajem związkowym i leży nad Wezerą?",
  "Bremen": "Brema",
  "Kiel": "Kilonia",
  "Bremen liegt an der Weser, Hamburg an der Elbe — beide sind Stadtstaaten.":
    "Brema leży nad Wezerą, Hamburg nad Łabą — oba są krajami-miastami.",
  "Wer schrieb den Text der deutschen Nationalhymne?":
    "Kto napisał tekst niemieckiego hymnu narodowego?",
  "August Heinrich Hoffmann von Fallersleben": "August Heinrich Hoffmann von Fallersleben",
  "Joseph Haydn": "Joseph Haydn",
  "Hoffmann von Fallersleben schrieb den Text 1841, die Melodie stammt von Joseph Haydn.":
    "Hoffmann von Fallersleben napisał tekst w 1841 roku, melodia pochodzi od Josepha Haydna.",
  "Welche Stadt ist die Hauptstadt von Nordrhein-Westfalen?":
    "Które miasto jest stolicą Nadrenii Północnej-Westfalii?",
  "Düsseldorf": "Düsseldorf",
  "Dortmund": "Dortmund",
  "Essen": "Essen",
  "Düsseldorf. Köln ist zwar größer, aber nicht die Landeshauptstadt.":
    "Düsseldorf. Kolonia jest wprawdzie większa, ale nie jest stolicą kraju.",
  "Welcher See bildet ein Dreiländereck mit Österreich und der Schweiz?":
    "Które jezioro tworzy trójstyk z Austrią i Szwajcarią?",
  "Der Chiemsee": "Chiemsee",
  "Der Bodensee": "Jezioro Bodeńskie",
  "Die Müritz": "Müritz",
  "Der Starnberger See": "Jezioro Starnberskie",
  "Der Bodensee. Die Müritz ist der größte See, der ganz in Deutschland liegt.":
    "Jezioro Bodeńskie. Müritz to największe jezioro leżące w całości w Niemczech.",
  "Muss man in Deutschland einer Religion angehören?":
    "Czy w Niemczech trzeba należeć do jakiejś religii?",
  "Ja, man muss sich entscheiden": "Tak, trzeba się zdecydować",
  "Nein, niemand muss einer Religionsgemeinschaft angehören":
    "Nie, nikt nie musi należeć do wspólnoty religijnej",
  "Ja, ab 18 Jahren": "Tak, od 18 roku życia",
  "Nur für die Eheschließung": "Tylko do zawarcia małżeństwa",
  "Religionsfreiheit schließt die Freiheit ein, keiner Religion anzugehören — etwa die Hälfte der Bevölkerung gehört keiner an.":
    "Wolność religii obejmuje wolność nienależenia do żadnej — do żadnej należy mniej więcej połowa ludności.",
  "Wie viele Menschen muslimischen Glaubens leben ungefähr in Deutschland?":
    "Ile mniej więcej osób wyznania muzułmańskiego mieszka w Niemczech?",
  "Etwa 100.000": "Około 100 000",
  "Etwa 5 Millionen": "Około 5 milionów",
  "Etwa 20 Millionen": "Około 20 milionów",
  "Etwa 500": "Około 500",
  "Rund fünf Millionen — der Islam ist die größte nichtchristliche Religion in Deutschland.":
    "Około pięciu milionów — islam jest największą niechrześcijańską religią w Niemczech.",
  "Was passiert, wenn man aus der Kirche austritt?":
    "Co się dzieje, gdy wystąpi się z kościoła?",
  "Man muss eine Strafe zahlen": "Trzeba zapłacić karę",
  "Man zahlt keine Kirchensteuer mehr und verliert Rechte innerhalb der Kirche":
    "Nie płaci się już podatku kościelnego i traci się prawa wewnątrz kościoła",
  "Man verliert die Staatsangehörigkeit": "Traci się obywatelstwo",
  "Nichts ändert sich": "Nic się nie zmienia",
  "Der Austritt wird beim Standesamt oder Amtsgericht erklärt; danach entfällt die Kirchensteuer.":
    "Wystąpienie zgłasza się w Standesamt albo Amtsgericht; potem odpada podatek kościelny.",
  "Ein Vater will seine Tochter nicht am Schwimmunterricht teilnehmen lassen. Was gilt?":
    "Ojciec nie chce puścić córki na lekcje pływania. Co obowiązuje?",
  "Die Schulpflicht gilt auch für den Sportunterricht; die Schule sucht praktische Lösungen":
    "Obowiązek szkolny dotyczy też lekcji wychowania fizycznego; szkoła szuka praktycznych rozwiązań",
  "Der Vater entscheidet allein": "Decyduje sam ojciec",
  "Das Kind wird vom Unterricht befreit": "Dziecko zostaje zwolnione z lekcji",
  "Die Schule muss den Unterricht abschaffen": "Szkoła musi te lekcje znieść",
  "Die Schulpflicht steht über privaten Vorbehalten. Schulen ermöglichen etwa geeignete Badekleidung, ein Fernbleiben aber nicht.":
    "Obowiązek szkolny stoi ponad prywatnymi zastrzeżeniami. Szkoły umożliwiają na przykład odpowiedni strój kąpielowy, ale nieobecności nie.",
  "Was bedeutet die weltanschauliche Neutralität des Staates?":
    "Co oznacza światopoglądowa neutralność państwa?",
  "Der Staat verbietet Religion": "Państwo zakazuje religii",
  "Der Staat bevorzugt oder benachteiligt keine Religion und hat selbst keine":
    "Państwo nie faworyzuje ani nie krzywdzi żadnej religii i samo żadnej nie ma",
  "Der Staat bestimmt die Religion der Bürger": "Państwo określa religię obywateli",
  "Es gibt keine Staatskirche. Der Staat arbeitet mit Religionsgemeinschaften zusammen, ohne sich mit einer zu identifizieren.":
    "Nie ma kościoła państwowego. Państwo współpracuje ze wspólnotami religijnymi, nie utożsamiając się z żadną.",
  "Welches Fest feiern Christen zu Ostern?": "Jakie święto obchodzą chrześcijanie na Wielkanoc?",
  "Die Geburt Jesu": "Narodziny Jezusa",
  "Die Auferstehung Jesu": "Zmartwychwstanie Jezusa",
  "Die Taufe Jesu": "Chrzest Jezusa",
  "Das Ende des Fastenmonats": "Koniec miesiąca postu",
  "Ostern ist das Fest der Auferstehung. Die Geburt wird zu Weihnachten gefeiert.":
    "Wielkanoc jest świętem zmartwychwstania. Narodziny świętuje się na Boże Narodzenie.",
  "Darf man in Deutschland die Religion wechseln?": "Czy w Niemczech wolno zmienić religię?",
  "Ja, jeder darf frei entscheiden": "Tak, każdy może zdecydować swobodnie",
  "Der Wechsel des Glaubens und der Austritt sind ausdrücklich geschützt — auch gegen den Willen der Familie.":
    "Zmiana wiary i wystąpienie są wyraźnie chronione — także wbrew woli rodziny.",
  "Welche Rolle haben die Kirchen in der sozialen Arbeit in Deutschland?":
    "Jaką rolę mają kościoły w pracy socjalnej w Niemczech?",
  "Sie dürfen keine sozialen Einrichtungen betreiben":
    "Nie wolno im prowadzić placówek socjalnych",
  "Caritas und Diakonie gehören zu den größten Trägern von Kitas, Krankenhäusern und Pflegeheimen":
    "Caritas i Diakonie należą do największych podmiotów prowadzących żłobki, szpitale i domy opieki",
  "Sie betreiben nur Kirchen": "Prowadzą tylko kościoły",
  "Sie sind für die Sozialversicherung zuständig": "Odpowiadają za ubezpieczenie społeczne",
  "Die kirchlichen Wohlfahrtsverbände sind neben AWO, DRK und Paritätischem tragende Säulen der sozialen Infrastruktur.":
    "Kościelne związki dobroczynne są, obok AWO, DRK i Paritätischer, nośnymi filarami infrastruktury socjalnej.",
  "Wer entscheidet in Deutschland, wen eine erwachsene Person heiratet?":
    "Kto w Niemczech decyduje, kogo poślubi osoba dorosła?",
  "Die Eltern": "Rodzice",
  "Die Person selbst": "Ta osoba sama",
  "Die Religionsgemeinschaft": "Wspólnota religijna",
  "Jede volljährige Person entscheidet selbst. Zwangsheirat ist eine Straftat.":
    "Każda pełnoletnia osoba decyduje sama. Małżeństwo przymusowe jest przestępstwem.",
  "Was ist das Sorgerecht?": "Czym jest władza rodzicielska?",
  "Das Recht, für ein Kind zu sorgen und es zu vertreten":
    "Prawem do opieki nad dzieckiem i do jego reprezentowania",
  "Das Recht auf Unterhalt": "Prawem do alimentów",
  "Das Recht, die Wohnung zu behalten": "Prawem do zatrzymania mieszkania",
  "Das Recht auf Elternzeit": "Prawem do urlopu rodzicielskiego",
  "Es umfasst Erziehung, Aufenthaltsbestimmung und die rechtliche Vertretung des Kindes — nach einer Trennung oft gemeinsam.":
    "Obejmuje wychowanie, ustalanie miejsca pobytu i prawną reprezentację dziecka — po rozstaniu często wspólnie.",
  "Wer muss nach einer Scheidung für die gemeinsamen Kinder Unterhalt zahlen?":
    "Kto po rozwodzie musi płacić alimenty na wspólne dzieci?",
  "In der Regel der Elternteil, bei dem die Kinder nicht überwiegend leben":
    "Z reguły ten z rodziców, u którego dzieci przeważnie nie mieszkają",
  "Immer der Vater": "Zawsze ojciec",
  "Beide Eltern bleiben unterhaltspflichtig; wer betreut, leistet seinen Teil durch die Betreuung.":
    "Oboje rodzice pozostają zobowiązani do alimentów; kto sprawuje opiekę, wnosi swoją część opieką.",
  "Was kann die Polizei bei häuslicher Gewalt tun?":
    "Co policja może zrobić przy przemocy domowej?",
  "Nichts, das ist Privatsache": "Nic, to sprawa prywatna",
  "Den Gewalttätigen aus der Wohnung verweisen und ein Kontaktverbot veranlassen":
    "Usunąć sprawcę przemocy z mieszkania i zarządzić zakaz kontaktu",
  "Nur ein Protokoll aufnehmen": "Tylko spisać protokół",
  "Beide Beteiligten mitnehmen": "Zabrać obie strony",
  "Das Gewaltschutzgesetz erlaubt Wohnungsverweisung und Näherungsverbot — der Schutz geht vor dem Wohnrecht des Täters.":
    "Ustawa o ochronie przed przemocą pozwala na usunięcie z mieszkania i zakaz zbliżania się — ochrona idzie przed prawem sprawcy do mieszkania.",
  "Ab welchem Alter gilt ein Mensch in Deutschland als volljährig?":
    "Od jakiego wieku człowiek jest w Niemczech pełnoletni?",
  "Mit 16": "Od 16",
  "Mit 18": "Od 18",
  "Mit 21": "Od 21",
  "Mit der Heirat": "Z chwilą zawarcia małżeństwa",
  "Mit 18 — damit gelten volle Geschäftsfähigkeit, Wahlrecht zum Bundestag und Ehefähigkeit.":
    "Od 18 — obowiązuje wtedy pełna zdolność do czynności prawnych, prawo wyborcze do Bundestagu i zdolność do zawarcia małżeństwa.",
  "Was ist eine Patchwork-Familie?": "Czym jest rodzina patchworkowa?",
  "Eine Familie mit vielen Kindern": "Rodziną z wieloma dziećmi",
  "Eine Familie, in der Partner mit Kindern aus früheren Beziehungen zusammenleben":
    "Rodziną, w której partnerzy z dziećmi z wcześniejszych związków mieszkają razem",
  "Eine Familie ohne Kinder": "Rodziną bez dzieci",
  "Eine Familie, die im Ausland lebt": "Rodziną, która mieszka za granicą",
  "Eine von vielen anerkannten Familienformen neben Ehepaaren, Alleinerziehenden und gleichgeschlechtlichen Paaren.":
    "Jedna z wielu uznanych form rodziny, obok małżeństw, osób samotnie wychowujących i par jednopłciowych.",
  "Dürfen Eltern in Deutschland ihre Kinder schlagen?":
    "Czy rodzice w Niemczech mogą bić swoje dzieci?",
  "Ja, zur Erziehung": "Tak, w celach wychowawczych",
  "Nein, Kinder haben ein Recht auf gewaltfreie Erziehung":
    "Nie, dzieci mają prawo do wychowania bez przemocy",
  "Nur leichte Strafen sind erlaubt": "Dozwolone są tylko lekkie kary",
  "Nur bis zum 6. Lebensjahr": "Tylko do 6 roku życia",
  "Körperliche Bestrafung ist verboten und kann strafbar sein — seit 2000 steht das ausdrücklich im Gesetz.":
    "Kara cielesna jest zakazana i może być karalna — od 2000 roku stoi to wyraźnie w ustawie.",
  "Was gilt für die Gleichberechtigung in der Ehe?":
    "Co obowiązuje w kwestii równouprawnienia w małżeństwie?",
  "Der Mann entscheidet über den Wohnort": "O miejscu zamieszkania decyduje mąż",
  "Beide Partner sind gleichberechtigt und entscheiden gemeinsam":
    "Oboje partnerzy są równouprawnieni i decydują wspólnie",
  "Die Frau muss den Haushalt führen": "Żona musi prowadzić dom",
  "Der Hauptverdiener entscheidet": "Decyduje główny żywiciel",
  "Artikel 3 gilt auch in der Ehe. Aufgabenteilung ist Verhandlungssache, keine Vorschrift.":
    "Artykuł 3 obowiązuje także w małżeństwie. Podział zadań to kwestia uzgodnienia, a nie przepisu.",
  "Kostet der Besuch staatlicher Schulen in Deutschland Schulgeld?":
    "Czy nauka w szkołach państwowych w Niemczech kosztuje czesne?",
  "Ja, monatlich": "Tak, miesięcznie",
  "Nein, staatliche Schulen sind grundsätzlich kostenfrei":
    "Nie, szkoły państwowe są zasadniczo bezpłatne",
  "Nur ab der Oberstufe": "Dopiero od klas licealnych",
  "Nur für Nichtdeutsche": "Tylko dla nie-Niemców",
  "Der Unterricht ist kostenfrei. Für Ausflüge oder Material können kleine Beiträge anfallen.":
    "Nauka jest bezpłatna. Za wycieczki albo materiały mogą dojść drobne opłaty.",
  "Was ist ein Integrationskurs?": "Czym jest Integrationskurs?",
  "Ein Sportkurs": "Kursem sportowym",
  "Ein Sprachkurs mit anschließendem Orientierungskurs zu Recht, Geschichte und Kultur":
    "Kursem językowym z następującym po nim kursem orientacyjnym o prawie, historii i kulturze",
  "Ein Kurs für Lehrer": "Kursem dla nauczycieli",
  "Eine Berufsausbildung": "Kształceniem zawodowym",
  "Er endet mit der Sprachprüfung und dem Test „Leben in Deutschland“ — demselben Katalog wie beim Einbürgerungstest.":
    "Kończy się egzaminem językowym i testem „Leben in Deutschland” — tym samym katalogiem co przy Einbürgerungstest.",
  "Wer entscheidet über die Lehrpläne an Schulen?":
    "Kto decyduje o programach nauczania w szkołach?",
  "Die Schulen allein": "Same szkoły",
  "Die EU": "UE",
  "Bildung ist Ländersache — deshalb unterscheiden sich Lehrpläne, Schulformen und Ferienzeiten.":
    "Edukacja jest sprawą krajów — dlatego programy nauczania, typy szkół i terminy ferii się różnią.",
  "Was ist die Fachhochschulreife?": "Czym jest Fachhochschulreife?",
  "Ein Abschluss, der zum Studium an einer Fachhochschule berechtigt":
    "Świadectwem uprawniającym do studiów w wyższej szkole zawodowej",
  "Ein Abschluss nach der 9. Klasse": "Świadectwem po 9 klasie",
  "Ein Zeugnis über einen Sprachkurs": "Zaświadczeniem o kursie językowym",
  "Sie öffnet den Weg an Fachhochschulen; das Abitur berechtigt zusätzlich zum Universitätsstudium.":
    "Otwiera drogę do wyższych szkół zawodowych; Abitur uprawnia dodatkowo do studiów uniwersyteckich.",
  "Wer trägt bei einer dualen Ausbildung die Kosten der Berufsschule?":
    "Kto przy dualnym kształceniu zawodowym ponosi koszty szkoły zawodowej?",
  "Der Auszubildende": "Uczeń zawodu",
  "Das Bundesland als Schulträger": "Kraj związkowy jako organ prowadzący szkołę",
  "Der Ausbildungsbetrieb allein": "Sam zakład szkolący",
  "Die Berufsschule ist eine staatliche Schule und damit Ländersache. Der Betrieb zahlt die Ausbildungsvergütung.":
    "Szkoła zawodowa jest szkołą państwową, a więc sprawą krajów. Zakład płaci wynagrodzenie za naukę zawodu.",
  "Was bietet eine Volkshochschule an?": "Co oferuje Volkshochschule?",
  "Nur Universitätsstudiengänge": "Tylko kierunki studiów uniwersyteckich",
  "Günstige Kurse für Erwachsene — Sprachen, Computer, Integrations- und Orientierungskurse":
    "Tanie kursy dla dorosłych — języki, komputer, kursy integracyjne i orientacyjne",
  "Nur Sportkurse": "Tylko kursy sportowe",
  "Ausschließlich Kurse für Jugendliche": "Wyłącznie kursy dla młodzieży",
  "Die VHS ist die verbreitetste Einrichtung der Erwachsenenbildung; dort wird auch der Test „Leben in Deutschland“ abgenommen.":
    "VHS jest najbardziej rozpowszechnioną placówką kształcenia dorosłych; tam przeprowadza się też test „Leben in Deutschland”.",
  "Wie lange dauert die Schulpflicht in Deutschland mindestens?":
    "Jak długo trwa w Niemczech obowiązek szkolny co najmniej?",
  "4 Jahre": "4 lata",
  "9 Jahre": "9 lat",
  "12 Jahre": "12 lat",
  "13 Jahre": "13 lat",
  "Mindestens neun Schuljahre, in einigen Ländern zehn — dazu kommt oft die Berufsschulpflicht.":
    "Co najmniej dziewięć lat szkolnych, w niektórych krajach dziesięć — do tego często dochodzi obowiązek szkoły zawodowej.",
  "Wo lässt man einen im Ausland erworbenen Berufsabschluss anerkennen?":
    "Gdzie uznaje się dyplom zawodowy zdobyty za granicą?",
  "Beim Einwohnermeldeamt": "W Einwohnermeldeamt",
  "Bei der zuständigen Stelle wie Kammer oder Landesbehörde, oft mit Beratung durch das IQ-Netzwerk":
    "We właściwym miejscu, jak izba albo urząd krajowy, często z doradztwem sieci IQ",
  "Beim Finanzamt": "W Finanzamt",
  "Bei der Krankenkasse": "W kasie chorych",
  "Welche Stelle zuständig ist, hängt vom Beruf ab — Kammern für Handwerk und Industrie, Landesbehörden für reglementierte Berufe.":
    "To, które miejsce jest właściwe, zależy od zawodu — izby dla rzemiosła i przemysłu, urzędy krajowe dla zawodów regulowanych.",
  "Was ist eine Probezeit?": "Czym jest okres próbny?",
  "Die ersten Wochen ohne Bezahlung": "Pierwszymi tygodniami bez zapłaty",
  "Eine Anfangszeit, in der beide Seiten mit kürzerer Frist kündigen können":
    "Czasem początkowym, w którym obie strony mogą wypowiedzieć umowę z krótszym terminem",
  "Eine unbezahlte Einarbeitung": "Niepłatnym wdrożeniem",
  "Die Zeit bis zur ersten Gehaltserhöhung": "Czasem do pierwszej podwyżki",
  "In der Probezeit — meist bis zu sechs Monate — gilt eine verkürzte Kündigungsfrist. Bezahlt wird ganz normal.":
    "W okresie próbnym — najczęściej do sześciu miesięcy — obowiązuje skrócony termin wypowiedzenia. Płaci się całkiem normalnie.",
  "Was ist eine Lohnsteuerbescheinigung?": "Czym jest Lohnsteuerbescheinigung?",
  "Die Rechnung des Arbeitgebers": "Rachunkiem pracodawcy",
  "Eine jährliche Übersicht über Lohn und abgeführte Steuern, wichtig für die Steuererklärung":
    "Rocznym zestawieniem płacy i odprowadzonych podatków, ważnym przy zeznaniu podatkowym",
  "Ein Antrag auf Arbeitslosengeld": "Wnioskiem o zasiłek dla bezrobotnych",
  "Der Arbeitgeber stellt sie am Jahresende aus; sie ist die Grundlage der Einkommensteuererklärung.":
    "Pracodawca wystawia je na koniec roku; jest podstawą zeznania o podatku dochodowym.",
  "Was regelt das Arbeitszeitgesetz unter anderem?":
    "Co między innymi reguluje ustawa o czasie pracy?",
  "Die Höhe des Lohns": "Wysokość płacy",
  "Höchstarbeitszeiten, Ruhepausen und die Ruhezeit zwischen zwei Arbeitstagen":
    "Maksymalny czas pracy, przerwy i odpoczynek między dwoma dniami pracy",
  "Die Urlaubsziele": "Cele urlopowe",
  "Die Kleidung am Arbeitsplatz": "Ubiór w miejscu pracy",
  "In der Regel höchstens acht Stunden täglich, mit vorgeschriebenen Pausen und mindestens elf Stunden Ruhe bis zum nächsten Tag.":
    "Z reguły najwyżej osiem godzin dziennie, z przepisanymi przerwami i co najmniej jedenastoma godzinami odpoczynku do następnego dnia.",
  "Was gilt für schwangere Arbeitnehmerinnen?": "Co obowiązuje wobec pracownic w ciąży?",
  "Sie können jederzeit gekündigt werden": "Można je zwolnić w każdej chwili",
  "Es gilt ein besonderer Kündigungsschutz und der Mutterschutz":
    "Obowiązuje szczególna ochrona przed wypowiedzeniem i ochrona macierzyństwa",
  "Sie müssen sofort aufhören zu arbeiten": "Muszą natychmiast przestać pracować",
  "Es gibt keine besonderen Regeln": "Szczególnych reguł nie ma",
  "Der Mutterschutz umfasst Kündigungsschutz, Schutzfristen vor und nach der Geburt und Beschäftigungsverbote bei Gefährdung.":
    "Ochrona macierzyństwa obejmuje ochronę przed wypowiedzeniem, okresy ochronne przed porodem i po nim oraz zakazy zatrudnienia przy zagrożeniu.",
  "Was ist Kurzarbeit?": "Czym jest Kurzarbeit?",
  "Eine Teilzeitstelle": "Pracą na część etatu",
  "Vorübergehend verkürzte Arbeitszeit, bei der die Agentur für Arbeit einen Teil des Lohnausfalls ersetzt":
    "Przejściowo skróconym czasem pracy, przy którym Agentur für Arbeit wyrównuje część utraconej płacy",
  "Arbeit auf Abruf": "Pracą na wezwanie",
  "Ein befristeter Vertrag": "Umową na czas określony",
  "Ein Instrument, um in Krisen Entlassungen zu vermeiden — in der Finanzkrise und in der Pandemie im großen Stil eingesetzt.":
    "Narzędzie, żeby w kryzysie uniknąć zwolnień — na wielką skalę użyte w kryzysie finansowym i w pandemii.",
  "Wer vertritt die Interessen der Arbeitnehmer bei Tarifverhandlungen?":
    "Kto reprezentuje interesy pracowników w negocjacjach układów zbiorowych?",
  "Der Betriebsrat": "Rada zakładowa",
  "Die Gewerkschaft": "Związek zawodowy",
  "Tarifverträge handeln Gewerkschaften mit Arbeitgeberverbänden aus. Der Betriebsrat vertritt die Belegschaft im einzelnen Betrieb.":
    "Układy zbiorowe negocjują związki zawodowe ze związkami pracodawców. Rada zakładowa reprezentuje załogę w pojedynczym zakładzie.",
  "Was musst du tun, wenn du krank bist und nicht arbeiten kannst?":
    "Co musisz zrobić, gdy jesteś chory i nie możesz pracować?",
  "Nichts, der Arbeitgeber merkt es": "Nic, pracodawca zauważy",
  "Dich unverzüglich beim Arbeitgeber melden": "Niezwłocznie zgłosić się u pracodawcy",
  "Erst nach drei Tagen Bescheid geben": "Dać znać dopiero po trzech dniach",
  "Nur die Krankenkasse informieren": "Poinformować tylko kasę chorych",
  "Die Krankmeldung erfolgt sofort. Ab wann ein ärztliches Attest nötig ist, steht im Arbeitsvertrag oder Tarifvertrag.":
    "Zgłoszenie choroby następuje natychmiast. To, od kiedy potrzebne jest zaświadczenie lekarskie, stoi w umowie o pracę albo w układzie zbiorowym.",
  "Was ist ein Minijob?": "Czym jest Minijob?",
  "Eine Beschäftigung mit geringem monatlichem Verdienst und besonderen Abgabenregeln":
    "Zatrudnieniem o niskim miesięcznym zarobku i szczególnych zasadach składek",
  "Ein Job für Jugendliche unter 16": "Pracą dla młodzieży poniżej 16 lat",
  "Eine unbezahlte Tätigkeit": "Nieodpłatną działalnością",
  "Ein Praktikum": "Praktyką",
  "Geringfügige Beschäftigung bis zu einer Verdienstgrenze; der Arbeitgeber führt Pauschalabgaben ab, Kündigungsschutz und Urlaub gelten trotzdem.":
    "Zatrudnienie w małym wymiarze do granicy zarobku; pracodawca odprowadza ryczałtowe składki, a ochrona przed wypowiedzeniem i urlop mimo to obowiązują.",
  "Wohin gehören leere Glasflaschen ohne Pfand?":
    "Gdzie należą puste butelki szklane bez kaucji?",
  "In den Restmüll": "Do odpadów zmieszanych",
  "In den Altglascontainer, nach Farben getrennt":
    "Do pojemnika na szkło, rozdzielone według kolorów",
  "In die Biotonne": "Do pojemnika na bioodpady",
  "In den Papiercontainer": "Do pojemnika na papier",
  "Weiß, grün und braun getrennt. Auf Pfandflaschen gibt es das Geld im Laden zurück.":
    "Białe, zielone i brązowe osobno. Za butelki kaucyjne pieniądze oddają w sklepie.",
  "Was sind Nebenkosten bei einer Mietwohnung?":
    "Czym są koszty dodatkowe przy mieszkaniu na wynajem?",
  "Die Miete selbst": "Samym czynszem",
  "Kosten für Heizung, Wasser, Müll und ähnliche Betriebskosten":
    "Kosztami ogrzewania, wody, śmieci i podobnych opłat eksploatacyjnych",
  "Die Kaution": "Kaucją",
  "Die Maklergebühr": "Prowizją pośrednika",
  "Sie werden monatlich vorausgezahlt und einmal jährlich abgerechnet — mit Nachzahlung oder Guthaben.":
    "Płaci się je co miesiąc z góry i rozlicza raz w roku — z dopłatą albo nadpłatą.",
  "Wo meldest du dich an, wenn du nach Deutschland ziehst?":
    "Gdzie się meldujesz, gdy przeprowadzasz się do Niemiec?",
  "Beim Einwohnermeldeamt oder Bürgeramt": "W Einwohnermeldeamt albo Bürgeramt",
  "Bei der Polizei": "Na policji",
  "Beim Arbeitgeber": "U pracodawcy",
  "Die Anmeldung erfolgt innerhalb von zwei Wochen beim Bürgeramt der Gemeinde.":
    "Zameldowanie następuje w ciągu dwóch tygodni w Bürgeramt gminy.",
  "Was ist der Rundfunkbeitrag?": "Czym jest Rundfunkbeitrag?",
  "Eine freiwillige Spende": "Dobrowolną darowizną",
  "Ein Beitrag pro Wohnung zur Finanzierung des öffentlich-rechtlichen Rundfunks":
    "Składką od mieszkania na finansowanie radiofonii i telewizji publicznej",
  "Eine Steuer auf Fernsehgeräte": "Podatkiem od telewizorów",
  "Eine Gebühr für das Internet": "Opłatą za internet",
  "Er wird je Wohnung erhoben, unabhängig davon, wie viele Geräte vorhanden sind. Bei geringem Einkommen ist Befreiung möglich.":
    "Pobiera się ją od mieszkania, niezależnie od tego, ile jest w nim odbiorników. Przy niskim dochodzie możliwe jest zwolnienie.",
  "Was passiert, wenn du beim Fahren ohne gültiges Ticket erwischt wirst?":
    "Co się stanie, gdy złapią cię na jeździe bez ważnego biletu?",
  "Du zahlst ein erhöhtes Beförderungsentgelt; bei Wiederholung droht eine Anzeige":
    "Płacisz podwyższoną opłatę przewozową; przy powtórce grozi doniesienie",
  "Du wirst sofort festgenommen": "Zostajesz natychmiast zatrzymany",
  "Du bekommst eine Verwarnung": "Dostajesz upomnienie",
  "Beim ersten Mal ein Entgelt, bei wiederholtem Schwarzfahren kann es strafrechtlich verfolgt werden.":
    "Za pierwszym razem opłata, przy powtarzanej jeździe na gapę można ścigać to karnie.",
  "Wann ist in Deutschland üblicherweise Mittagsruhe in Wohngebieten?":
    "Kiedy w Niemczech zwykle obowiązuje cisza w porze obiadowej w osiedlach mieszkaniowych?",
  "Es gibt keine": "Nie ma jej",
  "Vielerorts zwischen 13 und 15 Uhr, je nach örtlicher Regelung":
    "W wielu miejscach między 13 a 15, zależnie od miejscowych ustaleń",
  "Zwischen 10 und 12 Uhr": "Między 10 a 12",
  "Den ganzen Nachmittag": "Przez całe popołudnie",
  "Die Zeiten legen Gemeinden und Hausordnungen fest. Sonntags gilt meist ganztägig Ruhe.":
    "Godziny ustalają gminy i regulaminy domowe. W niedziele cisza obowiązuje zwykle przez cały dzień.",
  "Was brauchst du, um in Deutschland ein Bankkonto zu eröffnen?":
    "Czego potrzebujesz, żeby otworzyć w Niemczech konto bankowe?",
  "Nur eine Telefonnummer": "Tylko numeru telefonu",
  "Einen Ausweis und meist eine Meldebescheinigung":
    "Dokumentu tożsamości i najczęściej zaświadczenia o zameldowaniu",
  "Einen Arbeitsvertrag": "Umowy o pracę",
  "Die deutsche Staatsangehörigkeit": "Niemieckiego obywatelstwa",
  "Ein Basiskonto steht jedem zu, auch ohne festes Einkommen. Ausweis und Anschrift werden benötigt.":
    "Konto podstawowe przysługuje każdemu, także bez stałego dochodu. Potrzebne są dokument tożsamości i adres.",
  "Wie lange ist ein ausländischer Führerschein aus einem Nicht-EU-Staat in Deutschland gültig?":
    "Jak długo zagraniczne prawo jazdy z państwa spoza UE jest ważne w Niemczech?",
  "In der Regel sechs Monate nach der Anmeldung, danach ist eine Umschreibung nötig":
    "Z reguły sześć miesięcy po zameldowaniu, potem konieczna jest wymiana",
  "Er gilt gar nicht": "Nie obowiązuje wcale",
  "Nach sechs Monaten muss umgeschrieben werden; je nach Herkunftsland mit oder ohne Prüfung. EU-Führerscheine gelten weiter.":
    "Po sześciu miesiącach trzeba je wymienić; zależnie od kraju pochodzenia z egzaminem albo bez. Prawa jazdy z UE obowiązują dalej.",
  "Was ist eine Überweisung beim Arzt?": "Czym jest skierowanie u lekarza?",
  "Eine Zahlung an die Praxis": "Zapłatą dla praktyki",
  "Ein Schreiben, mit dem der Hausarzt zu einem Facharzt schickt":
    "Pismem, którym lekarz rodzinny wysyła do specjalisty",
  "Ein Rezept": "Receptą",
  "Die Krankmeldung": "Zwolnieniem lekarskim",
  "Nicht zu verwechseln mit der Geldüberweisung — hier geht es um die Weiterleitung zur fachärztlichen Behandlung.":
    "Nie mylić z przelewem bankowym, który po niemiecku nazywa się tak samo — tu chodzi o przekazanie do leczenia specjalistycznego.",
  "Wer zahlt in der Regel Medikamente auf Rezept?": "Kto z reguły płaci za leki na receptę?",
  "Der Patient allein": "Sam pacjent",
  "Die Krankenkasse, meist mit einer Zuzahlung des Patienten":
    "Kasa chorych, najczęściej z dopłatą pacjenta",
  "Der Arbeitgeber": "Pracodawca",
  "Die Kasse übernimmt den Großteil; es bleibt meist eine Zuzahlung, von der man sich bei geringem Einkommen befreien lassen kann.":
    "Kasa pokrywa większość; zostaje najczęściej dopłata, z której przy niskim dochodzie można się zwolnić.",
  "Wozu dient eine Patientenverfügung?": "Czemu służy Patientenverfügung?",
  "Zur Anmeldung im Krankenhaus": "Zgłoszeniu w szpitalu",
  "Um im Voraus festzulegen, welche Behandlungen man möchte, wenn man selbst nicht mehr entscheiden kann":
    "Określeniu z góry, jakich zabiegów się chce, gdy nie da się już samemu decydować",
  "Zur Abrechnung mit der Krankenkasse": "Rozliczeniu z kasą chorych",
  "Um einen Arzt zu wechseln": "Zmianie lekarza",
  "Sie ist verbindlich und sollte schriftlich vorliegen. Ergänzend regelt eine Vorsorgevollmacht, wer für einen sprechen darf.":
    "Jest wiążąca i powinna mieć formę pisemną. Uzupełniająco pełnomocnictwo na wypadek niezdolności reguluje, kto może mówić w czyimś imieniu.",
  "Welche Nummer erreicht den ärztlichen Bereitschaftsdienst außerhalb der Sprechzeiten?":
    "Który numer łączy z lekarskim dyżurem poza godzinami przyjęć?",
  "116117 für dringende, aber nicht lebensbedrohliche Fälle. Die 112 bleibt echten Notfällen vorbehalten, die 115 ist die Behördennummer.":
    "116117 przy sprawach pilnych, ale niezagrażających życiu. 112 zostaje zarezerwowane dla prawdziwych nagłych wypadków, a 115 to numer do urzędów.",
  "Was passiert, wenn du länger als sechs Wochen krank bist?":
    "Co się dzieje, gdy chorujesz dłużej niż sześć tygodni?",
  "Du bekommst kein Geld mehr": "Nie dostajesz już pieniędzy",
  "Die Krankenkasse zahlt Krankengeld": "Kasa chorych wypłaca zasiłek chorobowy",
  "Der Arbeitgeber zahlt unbegrenzt weiter": "Pracodawca płaci dalej bez ograniczeń",
  "Du wirst automatisch gekündigt": "Zostajesz automatycznie zwolniony",
  "Nach sechs Wochen Lohnfortzahlung übernimmt die Krankenkasse mit dem Krankengeld.":
    "Po sześciu tygodniach dalszej wypłaty wynagrodzenia przejmuje kasa chorych z zasiłkiem chorobowym.",
  "Was ist eine Vorsorgeuntersuchung?": "Czym jest badanie profilaktyczne?",
  "Eine Untersuchung nach einem Unfall": "Badaniem po wypadku",
  "Eine Untersuchung zur Früherkennung von Krankheiten, meist von der Kasse bezahlt":
    "Badaniem służącym wczesnemu wykrywaniu chorób, najczęściej opłacanym przez kasę",
  "Eine Untersuchung vor einer Operation": "Badaniem przed operacją",
  "Eine Untersuchung beim Zahnarzt nach Schmerzen": "Badaniem u dentysty po bólu",
  "Früherkennung statt Behandlung — etwa Krebsvorsorge, Kinderuntersuchungen und der Gesundheits-Check-up.":
    "Wczesne wykrywanie zamiast leczenia — na przykład profilaktyka nowotworowa, badania dzieci i przegląd zdrowia.",
  "Muss man in Deutschland für den Notruf 112 bezahlen?":
    "Czy w Niemczech trzeba płacić za telefon alarmowy 112?",
  "Ja, pro Anruf": "Tak, za każde połączenie",
  "Nein, der Notruf ist kostenlos": "Nie, telefon alarmowy jest bezpłatny",
  "Nur vom Handy": "Tylko z komórki",
  "Nur nachts": "Tylko nocą",
  "Der Anruf ist kostenlos und funktioniert von jedem Telefon, auch ohne Guthaben.":
    "Połączenie jest bezpłatne i działa z każdego telefonu, także bez doładowania.",
  "Wofür ist eine private Haftpflichtversicherung wichtig?":
    "Dlaczego prywatne ubezpieczenie odpowiedzialności cywilnej jest ważne?",
  "Für Schäden am eigenen Auto": "Przy szkodach na własnym samochodzie",
  "Für Schäden, die man anderen zufügt — sie kann existenzsichernd sein":
    "Przy szkodach, które wyrządza się innym — potrafi uratować byt",
  "Für die eigene Gesundheit": "Dla własnego zdrowia",
  "Für den Hausrat": "Dla mienia domowego",
  "Wer fahrlässig einen großen Schaden verursacht, haftet unbegrenzt mit seinem Vermögen. Deshalb gilt sie als wichtigste freiwillige Versicherung.":
    "Kto przez nieostrożność spowoduje wielką szkodę, odpowiada bez ograniczeń całym majątkiem. Dlatego uchodzi za najważniejsze dobrowolne ubezpieczenie.",
  "Wann ist der Tag der Deutschen Einheit?": "Kiedy jest Dzień Jedności Niemiec?",
  "Am 1. Mai": "1 maja",
  "Am 3. Oktober": "3 października",
  "Am 9. November": "9 listopada",
  "Am 23. Mai": "23 maja",
  "Der 3. Oktober, der Nationalfeiertag. Der 9. November ist der Tag des Mauerfalls, aber auch der Pogromnacht.":
    "3 października, święto narodowe. 9 listopada to dzień upadku muru, ale też nocy pogromu.",
  "Welcher Komponist schrieb die Melodie der „Ode an die Freude“, der Europahymne?":
    "Który kompozytor napisał melodię „Ody do radości”, hymnu Europy?",
  "Ludwig van Beethoven": "Ludwig van Beethoven",
  "Richard Wagner": "Richard Wagner",
  "Aus Beethovens 9. Sinfonie. Der Text stammt von Friedrich Schiller.":
    "Z IX symfonii Beethovena. Tekst pochodzi od Friedricha Schillera.",
  "Was ist die Bundesliga?": "Czym jest Bundesliga?",
  "Eine politische Vereinigung": "Zrzeszeniem politycznym",
  "Die höchste deutsche Fußballliga": "Najwyższą niemiecką ligą piłkarską",
  "Ein Fernsehsender": "Stacją telewizyjną",
  "Ein Zusammenschluss der Bundesländer": "Związkiem krajów związkowych",
  "Sie spielt von August bis Mai. Fußball ist die mit Abstand beliebteste Sportart in Deutschland.":
    "Gra od sierpnia do maja. Piłka nożna jest zdecydowanie najpopularniejszym sportem w Niemczech.",
  "Wofür ist Konrad Zuse bekannt?": "Z czego znany jest Konrad Zuse?",
  "Für den Buchdruck": "Z druku książek",
  "Für den Bau des ersten funktionsfähigen Computers":
    "Z budowy pierwszego działającego komputera",
  "Für das Automobil": "Z automobilu",
  "Zuse baute 1941 die Z3. Gutenberg steht für den Buchdruck, Einstein für die Physik, Benz für das Auto.":
    "Zuse zbudował w 1941 roku Z3. Gutenberg stoi za drukiem, Einstein za fizyką, Benz za samochodem.",
  "Was ist ein eingetragener Verein (e. V.)?":
    "Czym jest zarejestrowane stowarzyszenie (e. V.)?",
  "Ein Unternehmen": "Przedsiębiorstwem",
  "Ein Zusammenschluss von Menschen für einen gemeinsamen Zweck, ins Vereinsregister eingetragen":
    "Zrzeszeniem ludzi dla wspólnego celu, wpisanym do rejestru stowarzyszeń",
  "Eine Behörde": "Urzędem",
  "Eine Partei": "Partią",
  "Sport, Musik, Feuerwehr, Naturschutz — Vereine sind für viele der einfachste Weg, Anschluss zu finden.":
    "Sport, muzyka, straż pożarna, ochrona przyrody — stowarzyszenia są dla wielu najprostszą drogą do znalezienia kontaktu.",
  "Wann wird in Deutschland Karneval oder Fasching gefeiert?":
    "Kiedy w Niemczech świętuje się Karneval albo Fasching?",
  "Im Sommer": "Latem",
  "Im Winter, vor der Fastenzeit": "Zimą, przed okresem postu",
  "Immer im Dezember": "Zawsze w grudniu",
  "Zu Ostern": "Na Wielkanoc",
  "Höhepunkt sind die Tage vor Aschermittwoch, besonders im Rheinland und in Süddeutschland.":
    "Punktem szczytowym są dni przed Środą Popielcową, zwłaszcza w Nadrenii i południowych Niemczech.",
  "Wofür stehen die Buchstaben ARD und ZDF?": "Co oznaczają litery ARD i ZDF?",
  "Für private Fernsehsender": "Prywatne stacje telewizyjne",
  "Für den öffentlich-rechtlichen Rundfunk": "Radiofonię i telewizję publiczną",
  "Für Zeitungen": "Gazety",
  "Für Radiosender der Bundesländer": "Stacje radiowe krajów związkowych",
  "Beide werden über den Rundfunkbeitrag finanziert, damit sie unabhängig von Staat und Werbekunden berichten können.":
    "Obie finansuje się ze składki abonamentowej, żeby mogły informować niezależnie od państwa i reklamodawców.",
  "Warum ist die Unabhängigkeit der Medien in einer Demokratie wichtig?":
    "Dlaczego niezależność mediów jest ważna w demokracji?",
  "Damit die Regierung ihre Politik erklären kann": "Żeby rząd mógł objaśniać swoją politykę",
  "Damit Machtausübung öffentlich überprüft und kritisiert werden kann":
    "Żeby sprawowanie władzy dało się publicznie badać i krytykować",
  "Damit es mehr Unterhaltung gibt": "Żeby było więcej rozrywki",
  "Damit die Parteien gleich viel Sendezeit haben":
    "Żeby partie miały tyle samo czasu antenowego",
  "Freie Medien sind eine Kontrollinstanz. Genau das unterschied sie von der gelenkten Presse im NS-Staat und in der DDR.":
    "Wolne media są instancją kontrolną. Właśnie to odróżniało je od sterowanej prasy w państwie nazistowskim i w NRD.",
};
