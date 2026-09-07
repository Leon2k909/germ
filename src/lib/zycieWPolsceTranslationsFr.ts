/**
 * French for the Życie w Polsce course cards, headings and questions.
 *
 * Keyed on the POLISH source text exactly as it appears in
 * zycieWPolsceCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but a key that matches nothing
 * in the course is one nobody can ever see, and nothing reports it at
 * runtime: the card renders, the tap works, and the reader is told there is
 * no translation for a card that was in fact translated. So every key here
 * was extracted from the built module and paired back by position, never
 * retyped.
 *
 * Like the German table and unlike the older ones, this covers the QUIZZES as
 * well. A lesson that ends in three untranslated questions is not a lesson
 * somebody can finish.
 *
 * WHAT STAYS POLISH, and it follows ZYCIE_W_POLSCE_DE so that a reader who
 * switches between the two tables does not meet one word glossed two ways.
 * Institutions keep their French conventional form where one exists — the
 * Rada Ministrów is the Conseil des ministres, the Trybunał Konstytucyjny the
 * Tribunal constitutionnel, the Sąd Najwyższy the Cour suprême. Sejm and
 * Senat keep their own names, which French uses as they are. Where a word is
 * the answer itself and has no French equivalent — PESEL, PIT, ZUS, CEIDG,
 * województwo, powiat, gmina, wójt, sejmik, ławnicy — the French gives the
 * meaning and keeps the Polish word beside it, so the reader learns the term
 * they will actually meet.
 */
export const ZYCIE_W_POLSCE_FR: Record<string, string> = {
  "Historia, ustrój i codzienność — jak działa ten kraj.":
    "Histoire, institutions et vie quotidienne — comment fonctionne ce pays.",
  "Symbole narodowe": "Les symboles nationaux",
  "Symbole i wartości Rzeczypospolitej": "Symboles et valeurs de la République",
  "Dlaczego od tego zaczynamy: symbole widuje się codziennie — na urzędzie, na paszporcie, na koszulce reprezentacji — więc są najłatwiejszym wejściem w resztę.":
    "Pourquoi commencer par là : on voit les symboles tous les jours — sur un bâtiment public, sur le passeport, sur le maillot de l'équipe nationale — c'est donc l'entrée la plus facile vers le reste.",
  "Godło": "Les armoiries",
  "Godłem Polski jest **orzeł biały** w złotej koronie, ze złotym dziobem i szponami, na **czerwonym** tle. Opisuje go **artykuł 28 Konstytucji**. Korona wróciła na głowę orła w **1990 roku**; w czasach PRL orzeł jej nie miał.":
    "Les armoiries de la Pologne sont un **aigle blanc** à couronne d'or, au bec et aux serres d'or, sur fond **rouge**. L'**article 28 de la Constitution** les décrit. La couronne est revenue sur la tête de l'aigle en **1990** ; sous la République populaire, l'aigle n'en avait pas.",
  "Flaga i barwy": "Le drapeau et les couleurs",
  "Flaga ma dwa poziome pasy: **biały u góry, czerwony u dołu**. Kolejność nie jest dowolna — biel jest zawsze nad czerwienią. **2 maja** obchodzi się Dzień Flagi Rzeczypospolitej Polskiej.":
    "Le drapeau a deux bandes horizontales : **blanc en haut, rouge en bas**. L'ordre n'est pas libre — le blanc est toujours au-dessus du rouge. Le **2 mai**, on célèbre le Jour du drapeau de la République de Pologne.",
  "Hymn": "L'hymne",
  "Mazurek Dąbrowskiego": "Mazurek Dąbrowskiego",
  "Hymn państwowy, powstały w 1797 roku we Włoszech, w Legionach Polskich. Słowa napisał Józef Wybicki.":
    "L'hymne national, né en 1797 en Italie, dans les Légions polonaises. Józef Wybicki en a écrit les paroles.",
  "Pierwsze słowa": "Les premiers mots",
  "„Jeszcze Polska nie zginęła, kiedy my żyjemy” — zdanie napisane wtedy, gdy państwa polskiego na mapie nie było.":
    "« Jeszcze Polska nie zginęła, kiedy my żyjemy » — la Pologne n'a pas encore péri tant que nous vivons : une phrase écrite au moment où l'État polonais ne figurait plus sur la carte.",
  "Który kolor znajduje się na fladze Polski u góry?":
    "Quelle couleur se trouve en haut du drapeau polonais ?",
  "Czerwony": "Le rouge",
  "Biały": "Le blanc",
  "Kolejność jest dowolna": "L'ordre est libre",
  "Złoty": "L'or",
  "Biały pas jest zawsze na górze, czerwony na dole. Odwrócona flaga to flaga Indonezji lub Monako.":
    "La bande blanche est toujours en haut, la rouge en bas. Le drapeau inversé est celui de l'Indonésie ou de Monaco.",
  "Barwy i ich użycie": "Les couleurs et leur usage",
  "Flagi używa się w dni świąt państwowych, na budynkach urzędów i podczas uroczystości. Wersję z **godłem** na białym pasie stosują polskie statki i placówki dyplomatyczne — nie wywiesza się jej na balkonie.":
    "On arbore le drapeau les jours de fête nationale, sur les bâtiments publics et lors des cérémonies. La version aux **armoiries** sur la bande blanche est réservée aux navires polonais et aux postes diplomatiques — on ne la met pas à son balcon.",
  "Skąd wzięły się barwy": "D'où viennent les couleurs",
  "Biel od orła, czerwień od pola herbowego. Ustalono je oficjalnie **7 lutego 1831 roku**, w czasie powstania listopadowego — barwy narodowe są więc młodsze niż sam herb o kilkaset lat.":
    "Le blanc vient de l'aigle, le rouge du champ de l'écu. Elles ont été fixées officiellement le **7 février 1831**, pendant l'insurrection de Novembre — les couleurs nationales sont donc de plusieurs siècles plus jeunes que les armes elles-mêmes.",
  "Kto napisał słowa hymnu Polski?": "Qui a écrit les paroles de l'hymne polonais ?",
  "Adam Mickiewicz": "Adam Mickiewicz",
  "Józef Wybicki": "Józef Wybicki",
  "Fryderyk Chopin": "Fryderyk Chopin",
  "Juliusz Słowacki": "Juliusz Słowacki",
  "Józef Wybicki, w 1797 roku we Włoszech. Mickiewicz i Słowacki to poeci romantyczni, Chopin kompozytor.":
    "Józef Wybicki, en 1797 en Italie. Mickiewicz et Słowacki sont des poètes romantiques, Chopin un compositeur.",
  "Konstytucja i wartości ustrojowe": "La Constitution et les principes du régime",
  "Konstytucja z 1997 roku": "La Constitution de 1997",
  "Obowiązująca **Konstytucja Rzeczypospolitej Polskiej** została uchwalona **2 kwietnia 1997 roku** i przyjęta w referendum. Jest najwyższym prawem w państwie: żadna ustawa nie może być z nią sprzeczna.":
    "La **Constitution de la République de Pologne** en vigueur a été adoptée le **2 avril 1997** et approuvée par référendum. C'est la norme suprême de l'État : aucune loi ne peut la contredire.",
  "Zasady ustrojowe": "Les principes du régime",
  "Republika": "La république",
  "Polska jest republiką — głowę państwa się wybiera, a nie dziedziczy.":
    "La Pologne est une république — le chef de l'État est élu, il n'hérite pas de sa charge.",
  "Państwo prawa": "L'État de droit",
  "Organy władzy działają na podstawie i w granicach prawa, nie poza nim.":
    "Les organes du pouvoir agissent sur le fondement et dans les limites de la loi, non en dehors d'elle.",
  "Podział władz": "La séparation des pouvoirs",
  "Ustawodawcza, wykonawcza i sądownicza są rozdzielone i wzajemnie się równoważą.":
    "Le législatif, l'exécutif et le judiciaire sont séparés et s'équilibrent mutuellement.",
  "Konstytucja to nie zbiór życzeń: sprzeczną z nią ustawę może uchylić **Trybunał Konstytucyjny**.":
    "La Constitution n'est pas une liste de vœux : le **Trybunał Konstytucyjny**, le Tribunal constitutionnel, peut annuler une loi qui la contredit.",
  "W którym roku uchwalono obowiązującą Konstytucję RP?":
    "En quelle année la Constitution polonaise en vigueur a-t-elle été adoptée ?",
  "1989": "1989",
  "1997": "1997",
  "2004": "2004",
  "1952": "1952",
  "2 kwietnia 1997 roku, potwierdzona w referendum. 1989 to rok wyborów czerwcowych, 2004 to wejście do Unii Europejskiej.":
    "Le 2 avril 1997, confirmée par référendum. 1989 est l'année des élections de juin, 2004 celle de l'entrée dans l'Union européenne.",
  "Jak zmienić Konstytucję": "Comment modifier la Constitution",
  "Zmiana wymaga większości **2/3** w Sejmie i bezwzględnej w Senacie. Jeśli dotyczy rozdziałów o ustroju, wolnościach albo o samej procedurze zmiany, można zażądać jeszcze **referendum**.":
    "Une révision exige une majorité des **deux tiers** au Sejm et la majorité absolue au Senat. Si elle touche aux chapitres sur le régime, sur les libertés ou sur la procédure de révision elle-même, on peut encore exiger un **référendum**.",
  "Poprzednie konstytucje": "Les constitutions précédentes",
  "3 maja 1791": "3 mai 1791",
  "Pierwsza w Europie, obowiązywała czternaście miesięcy.":
    "La première d'Europe ; elle a été en vigueur quatorze mois.",
  "Marcowa 1921": "Celle de mars 1921",
  "Republika parlamentarna II Rzeczypospolitej.":
    "La république parlementaire de la Deuxième République.",
  "Kwietniowa 1935": "Celle d'avril 1935",
  "Wzmocniła prezydenta kosztem parlamentu.":
    "Elle a renforcé le président aux dépens du parlement.",
  "Z 1952": "Celle de 1952",
  "Konstytucja PRL, zmieniana wielokrotnie, obowiązywała do 1997 roku.":
    "La Constitution de la République populaire, modifiée bien des fois, est restée en vigueur jusqu'en 1997.",
  "Jakiej większości w Sejmie wymaga zmiana Konstytucji?":
    "Quelle majorité au Sejm une révision de la Constitution exige-t-elle ?",
  "Zwykłej": "La majorité simple",
  "Bezwzględnej": "La majorité absolue",
  "Dwóch trzecich": "Les deux tiers",
  "Jednomyślności": "L'unanimité",
  "Dwóch trzecich w Sejmie i bezwzględnej w Senacie — próg wyraźnie wyższy niż przy zwykłej ustawie.":
    "Les deux tiers au Sejm et la majorité absolue au Senat — un seuil nettement plus haut que pour une loi ordinaire.",
  "Prawa i wolności": "Droits et libertés",
  "Rozdział II Konstytucji jest najdłuższy w całym dokumencie. To nie przypadek: państwo, które przez pół wieku ograniczało wolności, spisało je potem wyjątkowo dokładnie.":
    "Le chapitre II de la Constitution est le plus long de tout le texte. Ce n'est pas un hasard : un État qui a limité les libertés pendant un demi-siècle les a ensuite écrites avec un soin particulier.",
  "Wolności osobiste": "Les libertés personnelles",
  "Każdemu przysługuje **prawo do życia**, **nietykalność osobista** i **wolność sumienia**. Nikogo nie wolno zatrzymać bez podstawy prawnej, a zatrzymanego trzeba w ciągu **48 godzin** przekazać sądowi — inaczej musi zostać zwolniony.":
    "Chacun a **droit à la vie**, à l'**inviolabilité de sa personne** et à la **liberté de conscience**. Nul ne peut être arrêté sans base légale, et la personne arrêtée doit être présentée au juge dans les **48 heures** — faute de quoi elle doit être relâchée.",
  "Obowiązuje **domniemanie niewinności**: dopóki sąd nie orzeknie prawomocnie, człowiek jest niewinny. Kara może spotkać tylko za czyn, który był zabroniony **w chwili popełnienia**.":
    "La **présomption d'innocence** s'applique : tant qu'un tribunal n'a pas statué définitivement, la personne est innocente. On ne peut être puni que pour un acte qui était interdit **au moment où il a été commis**.",
  "Wolności polityczne": "Les libertés politiques",
  "Wolność słowa": "La liberté d'expression",
  "Wolno wyrażać poglądy i rozpowszechniać informacje. Cenzura prewencyjna jest zakazana.":
    "On peut exprimer ses opinions et diffuser des informations. La censure préalable est interdite.",
  "Zgromadzenia": "Les rassemblements",
  "Wolno organizować pokojowe zgromadzenia i w nich uczestniczyć.":
    "On peut organiser des rassemblements pacifiques et y participer.",
  "Zrzeszanie się": "L'association",
  "Wolno tworzyć partie, związki zawodowe i stowarzyszenia.":
    "On peut créer des partis, des syndicats et des associations.",
  "Petycje": "Les pétitions",
  "Każdy może kierować wnioski i skargi do organów władzy publicznej.":
    "Chacun peut adresser des demandes et des plaintes aux autorités publiques.",
  "Prawa socjalne": "Les droits sociaux",
  "Konstytucja mówi też o **prawie do nauki** — obowiązkowej i bezpłatnej w szkołach publicznych do 18. roku życia — o **ochronie zdrowia** i o **prawie do zabezpieczenia społecznego** na starość, w chorobie i przy bezrobociu.":
    "La Constitution parle aussi du **droit à l'instruction** — obligatoire et gratuite dans les écoles publiques jusqu'à 18 ans —, de la **protection de la santé** et du **droit à la sécurité sociale** pour la vieillesse, la maladie et le chômage.",
  "Kto broni tych praw": "Qui défend ces droits",
  "**Rzecznik Praw Obywatelskich** stoi na straży wolności i praw człowieka. Można się do niego zwrócić bezpłatnie, także pisemnie. Osobno działa **Rzecznik Praw Dziecka**.":
    "Le **Rzecznik Praw Obywatelskich**, le médiateur des droits civiques, veille sur les libertés et les droits de l'homme. On peut le saisir gratuitement, y compris par écrit. Il existe séparément un **Rzecznik Praw Dziecka**, médiateur des droits de l'enfant.",
  "Wolności nie są nieograniczone. Ograniczyć je może tylko **ustawa** i tylko wtedy, gdy jest to konieczne dla bezpieczeństwa, porządku publicznego, zdrowia albo wolności innych osób. Nigdy nie wolno naruszyć **istoty** danej wolności.":
    "Les libertés ne sont pas sans limites. Seule une **loi** peut les restreindre, et seulement lorsque c'est nécessaire à la sécurité, à l'ordre public, à la santé ou aux libertés d'autrui. Il n'est jamais permis de porter atteinte à l'**essence** d'une liberté.",
  "W ciągu ilu godzin zatrzymany musi zostać przekazany sądowi?":
    "Dans quel délai une personne arrêtée doit-elle être présentée au juge ?",
  "24 godzin": "24 heures",
  "48 godzin": "48 heures",
  "72 godzin": "72 heures",
  "Nie ma takiego terminu": "Il n'y a pas de délai",
  "48 godzin. Sąd ma potem 24 godziny na decyzję o tymczasowym aresztowaniu — razem najwyżej 72.":
    "48 heures. Le tribunal dispose ensuite de 24 heures pour décider de la détention provisoire — 72 au total, au plus.",
  "Skarga konstytucyjna": "Le recours constitutionnel",
  "Kto uważa, że jego wolność naruszył **przepis**, a nie sam wyrok, może po wyczerpaniu drogi sądowej złożyć **skargę konstytucyjną** do Trybunału Konstytucyjnego. Skargę sporządza adwokat albo radca prawny.":
    "Qui estime que sa liberté a été atteinte par une **disposition** et non par le jugement lui-même peut, une fois les voies de recours épuisées, déposer un **recours constitutionnel** devant le Tribunal constitutionnel. Le recours est rédigé par un avocat ou un conseil juridique.",
  "Ochrona danych": "La protection des données",
  "Od 2018 roku obowiązuje europejskie rozporządzenie **RODO**. Każdy ma prawo wiedzieć, jakie dane o nim zebrano, żądać ich poprawienia i — w wielu wypadkach — usunięcia. Nadzoruje to **Prezes Urzędu Ochrony Danych Osobowych**.":
    "Depuis 2018 s'applique le règlement européen **RODO**, le RGPD. Chacun a le droit de savoir quelles données ont été recueillies sur lui, d'en demander la rectification et, dans bien des cas, l'effacement. Le **président de l'Office de protection des données personnelles** y veille.",
  "Do kogo można się zwrócić bezpłatnie, gdy urząd narusza prawa obywatela?":
    "À qui peut-on s'adresser gratuitement quand une administration viole les droits d'un citoyen ?",
  "Do Rzecznika Praw Obywatelskich": "Au Rzecznik Praw Obywatelskich",
  "Do wojewody": "Au voïvode",
  "Do Prezydenta": "Au président de la République",
  "Do Najwyższej Izby Kontroli": "À la Najwyższa Izba Kontroli",
  "Rzecznik Praw Obywatelskich stoi na straży wolności i praw; wniosek jest wolny od opłat.":
    "Le Rzecznik Praw Obywatelskich veille sur les libertés et les droits ; la saisine est gratuite.",
  "Obowiązki obywatela": "Les devoirs du citoyen",
  "Wierność i troska o dobro wspólne": "La fidélité et le souci du bien commun",
  "Konstytucja wymienia obowiązki krótko, w kilku artykułach. Pierwszy z nich to **wierność Rzeczypospolitej** i troska o **dobro wspólne** — sformułowanie ogólne, ale to z niego wynikają pozostałe.":
    "La Constitution énumère les devoirs brièvement, en quelques articles. Le premier est la **fidélité à la République** et le souci du **bien commun** — une formule générale, mais c'est d'elle que découlent les autres.",
  "Obowiązki konkretne": "Les devoirs concrets",
  "Przestrzeganie prawa": "Respecter la loi",
  "Obowiązuje każdego, kto znajduje się pod władzą Rzeczypospolitej — także cudzoziemca.":
    "Cela vaut pour quiconque se trouve sous l'autorité de la République — un étranger compris.",
  "Ciężary publiczne": "Les charges publiques",
  "Podatki i inne świadczenia nakłada wyłącznie ustawa, nie rozporządzenie.":
    "Les impôts et autres prélèvements ne sont imposés que par une loi, jamais par un règlement.",
  "Obrona ojczyzny": "La défense de la patrie",
  "Obowiązek obywateli polskich. Kto ze względu na przekonania nie może pełnić służby wojskowej, może zostać skierowany do służby zastępczej.":
    "Un devoir des citoyens polonais. Qui ne peut accomplir le service militaire en raison de ses convictions peut être affecté à un service de remplacement.",
  "Dbałość o środowisko": "Le soin de l'environnement",
  "Kto pogarsza stan środowiska, odpowiada za to.":
    "Qui dégrade l'état de l'environnement en répond.",
  "Obowiązek szkolny": "L'obligation scolaire",
  "Nauka jest **obowiązkowa do 18. roku życia**. Odpowiadają za to rodzice albo opiekunowie; szkoła publiczna jest bezpłatna.":
    "L'instruction est **obligatoire jusqu'à 18 ans**. Les parents ou les tuteurs en répondent ; l'école publique est gratuite.",
  "Obowiązkowa zasadnicza służba wojskowa została w Polsce **zawieszona w 2009 roku**. Obowiązek obrony pozostał w Konstytucji, ale pobór w czasie pokoju się nie odbywa.":
    "Le service militaire obligatoire a été **suspendu en 2009** en Pologne. Le devoir de défense est resté dans la Constitution, mais il n'y a pas de conscription en temps de paix.",
  "Do którego roku życia trwa w Polsce obowiązek nauki?":
    "Jusqu'à quel âge l'obligation d'instruction dure-t-elle en Pologne ?",
  "Do 15. roku życia": "Jusqu'à 15 ans",
  "Do 16. roku życia": "Jusqu'à 16 ans",
  "Do 18. roku życia": "Jusqu'à 18 ans",
  "Do ukończenia szkoły średniej": "Jusqu'à la fin du lycée",
  "Do 18. roku życia. Obowiązek szkolny — nauka w szkole podstawowej — kończy się wcześniej, ale obowiązek nauki trwa dłużej.":
    "Jusqu'à 18 ans. L'obligation scolaire — la scolarité à l'école primaire — s'achève plus tôt, mais l'obligation d'instruction dure plus longtemps.",
  "Podatki w praktyce": "Les impôts en pratique",
  "Zeznanie roczne **PIT** składa się do **30 kwietnia** za rok poprzedni. Można to zrobić przez internet; urząd skarbowy przygotowuje wstępnie wypełnione zeznanie, które wystarczy sprawdzić i zatwierdzić.":
    "La déclaration annuelle **PIT** se dépose avant le **30 avril** pour l'année précédente. On peut le faire par internet ; l'administration fiscale prépare une déclaration préremplie qu'il suffit de vérifier et de valider.",
  "Udział w wyborach": "La participation aux élections",
  "Głosowanie jest **prawem, nie obowiązkiem** — nie ma kary za nieoddanie głosu. Prawo wybierania przysługuje od 18. roku życia, także obywatelom mieszkającym za granicą, w obwodach przy placówkach dyplomatycznych.":
    "Voter est un **droit, non un devoir** — aucune peine ne frappe celui qui s'abstient. Le droit de vote s'acquiert à 18 ans, y compris pour les citoyens vivant à l'étranger, dans les bureaux ouverts auprès des postes diplomatiques.",
  "Do kiedy składa się roczne zeznanie podatkowe PIT?":
    "Jusqu'à quand la déclaration de revenus PIT doit-elle être déposée ?",
  "Do 31 stycznia": "Jusqu'au 31 janvier",
  "Do 30 kwietnia": "Jusqu'au 30 avril",
  "Do 30 czerwca": "Jusqu'au 30 juin",
  "Do 31 grudnia": "Jusqu'au 31 décembre",
  "Do 30 kwietnia za rok poprzedni.": "Jusqu'au 30 avril, pour l'année précédente.",
  "Sejm i Senat": "Le Sejm et le Senat",
  "Ustrój i instytucje": "Le régime et les institutions",
  "Dwie izby, dwie różne liczby i dwie różne role. Mylenie ich to najczęstsza pomyłka w rozmowie o polskiej polityce.":
    "Deux chambres, deux nombres différents et deux rôles différents. Les confondre est l'erreur la plus fréquente dès qu'on parle de politique polonaise.",
  "Dwie izby parlamentu": "Les deux chambres du parlement",
  "Sejm": "Sejm",
  "460 posłów, wybieranych na 4 lata. Izba pierwsza: to tutaj powstają i zapadają rozstrzygnięcia.":
    "460 députés, élus pour 4 ans. La première chambre : c'est là que naissent et se tranchent les décisions.",
  "Senat": "Senat",
  "100 senatorów, również na 4 lata. Izba druga: poprawia, odrzuca albo przyjmuje ustawy Sejmu.":
    "100 sénateurs, également pour 4 ans. La seconde chambre : elle amende, rejette ou adopte les lois du Sejm.",
  "Kto może kandydować": "Qui peut se présenter",
  "Posłem może zostać obywatel, który ukończył **21 lat**; senatorem — **30 lat**. Głosować wolno od **18. roku życia**. Mandatu poselskiego nie można łączyć z senatorskim.":
    "Est éligible comme député le citoyen qui a **21 ans** révolus ; comme sénateur, **30 ans**. On vote à partir de **18 ans**. Un mandat de député ne se cumule pas avec un mandat de sénateur.",
  "Jak powstaje ustawa": "Comment naît une loi",
  "Projekt trafia do Sejmu, który czyta go i głosuje. Przyjęty projekt idzie do **Senatu**: ten ma **30 dni**, żeby go przyjąć, odrzucić albo poprawić. Poprawki i odrzucenie Sejm może **odrzucić bezwzględną większością**. Na końcu ustawę podpisuje **Prezydent**.":
    "Le projet arrive au Sejm, qui l'examine et vote. Le projet adopté passe au **Senat** : celui-ci a **30 jours** pour l'adopter, le rejeter ou l'amender. Le Sejm peut **écarter à la majorité absolue** les amendements comme le rejet. À la fin, le **président de la République** signe la loi.",
  "Inicjatywę ustawodawczą mają posłowie, Senat, Prezydent, Rada Ministrów — a także **100 tysięcy obywateli**, którzy złożą podpisy pod projektem.":
    "L'initiative des lois appartient aux députés, au Senat, au président, au Conseil des ministres — et aussi à **100 000 citoyens** qui signent un projet.",
  "Zgromadzenie Narodowe": "L'Assemblée nationale",
  "Sejm i Senat obradujące wspólnie tworzą **Zgromadzenie Narodowe**. Zbiera się rzadko: żeby odebrać przysięgę od Prezydenta, uznać go za trwale niezdolnego do sprawowania urzędu albo postawić przed Trybunałem Stanu.":
    "Le Sejm et le Senat siégeant ensemble forment l'**Assemblée nationale**. Elle se réunit rarement : pour recevoir le serment du président, le déclarer durablement empêché ou le renvoyer devant le Tribunal d'État.",
  "Ilu posłów zasiada w Sejmie?": "Combien de députés siègent au Sejm ?",
  "100": "100",
  "230": "230",
  "460": "460",
  "560": "560",
  "460 posłów. 100 to liczba senatorów; razem obie izby liczą 560 osób.":
    "460 députés. 100 est le nombre de sénateurs ; ensemble, les deux chambres comptent 560 personnes.",
  "Jak się głosuje": "Comment on vote",
  "Do Sejmu wybiera się **proporcjonalnie**, z list w okręgach; mandaty dzieli się metodą **d'Hondta**, a partia musi przekroczyć próg **5 procent** (koalicja 8). Do Senatu głosuje się **większościowo**: w każdym ze stu okręgów wygrywa jeden kandydat.":
    "Le Sejm est élu à la **proportionnelle**, sur des listes de circonscription ; les sièges se répartissent selon la méthode **d'Hondt**, et un parti doit franchir le seuil de **5 pour cent** (8 pour une coalition). Le Senat est élu au **scrutin majoritaire** : dans chacune des cent circonscriptions, un seul candidat l'emporte.",
  "Immunitet": "L'immunité",
  "Posła ani senatora nie można pociągnąć do odpowiedzialności karnej bez zgody własnej izby. Immunitet chroni mandat, a nie osobę: izba może go **uchylić**.":
    "Un député ou un sénateur ne peut être poursuivi pénalement sans l'accord de sa propre chambre. L'immunité protège le mandat, non la personne : la chambre peut la **lever**.",
  "Ilu senatorów liczy Senat?": "Combien de sénateurs compte le Senat ?",
  "100 senatorów, po jednym z każdego okręgu. 460 to liczba posłów.":
    "100 sénateurs, un par circonscription. 460 est le nombre de députés.",
  "Prezydent": "Le président de la République",
  "Wybór i kadencja": "L'élection et le mandat",
  "Prezydenta wybierają obywatele w **wyborach powszechnych**, na **5 lat**, najwyżej **dwa razy**. Kandydat musi mieć ukończone **35 lat** i zebrać **100 tysięcy podpisów**. Wygrywa ten, kto uzyska ponad połowę głosów; jeśli nikt nie uzyska, po dwóch tygodniach odbywa się **druga tura** między dwoma najlepszymi.":
    "Les citoyens élisent le président au **suffrage universel**, pour **5 ans**, **deux fois** au plus. Le candidat doit avoir **35 ans** révolus et réunir **100 000 signatures**. L'emporte celui qui obtient plus de la moitié des voix ; si personne n'y parvient, un **second tour** oppose deux semaines plus tard les deux mieux placés.",
  "Co Prezydent może": "Ce que le président peut faire",
  "Podpisać albo nie": "Signer ou non",
  "Ustawę podpisuje w ciągu 21 dni. Może ją zawetować albo skierować do Trybunału Konstytucyjnego.":
    "Il signe une loi dans les 21 jours. Il peut y opposer son veto ou la déférer au Tribunal constitutionnel.",
  "Weto": "Le veto",
  "Weto Sejm odrzuca większością 3/5 głosów. Ustawy skierowanej do Trybunału zawetować już nie można.":
    "Le Sejm renverse un veto à la majorité des 3/5. Une loi déférée au Tribunal ne peut plus faire l'objet d'un veto.",
  "Powołania": "Les nominations",
  "Powołuje Prezesa Rady Ministrów, sędziów na wniosek Krajowej Rady Sądownictwa i ratyfikuje umowy międzynarodowe.":
    "Il nomme le président du Conseil des ministres et les juges sur proposition du Conseil national de la magistrature, et ratifie les traités.",
  "Zwierzchnictwo": "Le commandement",
  "Jest najwyższym zwierzchnikiem Sił Zbrojnych; w czasie pokoju sprawuje je przez Ministra Obrony Narodowej.":
    "Il est le chef suprême des forces armées ; en temps de paix, il l'exerce par l'intermédiaire du ministre de la Défense nationale.",
  "Kontrasygnata": "Le contreseing",
  "Większość aktów urzędowych Prezydenta wymaga **podpisu Prezesa Rady Ministrów**, który bierze za nie odpowiedzialność przed Sejmem. Konstytucja wylicza jednak **prerogatywy** — akty, których kontrasygnata nie dotyczy, na przykład prawo łaski, zarządzenie wyborów czy nadanie obywatelstwa.":
    "La plupart des actes officiels du président exigent la **signature du président du Conseil des ministres**, qui en répond devant le Sejm. La Constitution énumère toutefois des **prérogatives** — des actes que le contreseing ne touche pas : le droit de grâce, la convocation des élections ou l'octroi de la nationalité.",
  "Prezydent nie kieruje rządem. Politykę bieżącą prowadzi **Rada Ministrów**; Prezydent reprezentuje państwo i stoi na straży Konstytucji.":
    "Le président ne dirige pas le gouvernement. La politique courante est menée par le **Conseil des ministres** ; le président représente l'État et veille sur la Constitution.",
  "Na ile lat wybiera się Prezydenta Rzeczypospolitej?":
    "Pour combien d'années le président de la République est-il élu ?",
  "4 lata": "4 ans",
  "5 lat": "5 ans",
  "6 lat": "6 ans",
  "7 lat": "7 ans",
  "5 lat, najwyżej dwie kadencje. 4 lata trwa kadencja Sejmu i Senatu.":
    "5 ans, deux mandats au plus. La législature du Sejm et du Senat dure 4 ans.",
  "Gdy Prezydenta zabraknie": "Quand le président vient à manquer",
  "Jeśli Prezydent nie może sprawować urzędu, zastępuje go **Marszałek Sejmu**, a gdyby i on nie mógł — Marszałek Senatu. Tak stało się w kwietniu 2010 roku po katastrofie smoleńskiej.":
    "Si le président ne peut exercer sa charge, le **Marszałek Sejmu**, qui préside la chambre basse, le remplace ; et si lui non plus ne le peut, le Marszałek Senatu. C'est ce qui est arrivé en avril 2010, après la catastrophe de Smolensk.",
  "Rezydencja i przysięga": "La résidence et le serment",
  "Siedzibą Prezydenta jest **Pałac Prezydencki** w Warszawie. Urząd obejmuje po złożeniu przysięgi przed **Zgromadzeniem Narodowym**.":
    "Le siège du président est le **Palais présidentiel** à Varsovie. Il entre en fonction après avoir prêté serment devant l'**Assemblée nationale**.",
  "Jaką większością Sejm odrzuca weto Prezydenta?":
    "À quelle majorité le Sejm renverse-t-il le veto du président ?",
  "Zwykłą": "À la majorité simple",
  "Bezwzględną": "À la majorité absolue",
  "Trzech piątych": "Aux trois cinquièmes",
  "Trzech piątych głosów. Dwie trzecie potrzebne są do zmiany Konstytucji.":
    "Aux trois cinquièmes des voix. Les deux tiers sont nécessaires pour réviser la Constitution.",
  "Rada Ministrów": "Le Conseil des ministres",
  "Kto rządzi na co dzień": "Qui gouverne au quotidien",
  "**Rada Ministrów** — czyli rząd — prowadzi politykę wewnętrzną i zagraniczną państwa. Na jej czele stoi **Prezes Rady Ministrów**, w mowie potocznej premier. W skład wchodzą ministrowie kierujący działami administracji.":
    "Le **Conseil des ministres** — c'est-à-dire le gouvernement — conduit la politique intérieure et étrangère de l'État. À sa tête se trouve le **Prezes Rady Ministrów**, que l'on appelle couramment le premier ministre. Il réunit les ministres qui dirigent les départements de l'administration.",
  "Jak powstaje rząd": "Comment se forme un gouvernement",
  "Prezydent desygnuje premiera, ten proponuje skład rządu, a Sejm udziela mu **wotum zaufania** bezwzględną większością. Gdy się nie uda, inicjatywę przejmuje Sejm — Konstytucja przewiduje **trzy kolejne kroki**, żeby państwo nie zostało bez rządu.":
    "Le président désigne le premier ministre, celui-ci propose la composition du gouvernement, et le Sejm lui accorde la **confiance** à la majorité absolue. En cas d'échec, l'initiative passe au Sejm — la Constitution prévoit **trois étapes successives**, pour que l'État ne reste pas sans gouvernement.",
  "Jak rząd upada": "Comment un gouvernement tombe",
  "**Konstruktywne wotum nieufności**: Sejm może odwołać rząd tylko wtedy, gdy jednocześnie wskaże nowego premiera. Nie da się obalić rządu, nie mając następcy — to zabezpieczenie wzięte z niemieckiej Ustawy Zasadniczej.":
    "La **motion de censure constructive** : le Sejm ne peut renverser le gouvernement qu'en désignant en même temps un nouveau premier ministre. On ne peut pas abattre un gouvernement sans avoir de successeur — une protection reprise de la Loi fondamentale allemande.",
  "Kto pilnuje rządu": "Qui surveille le gouvernement",
  "Uchwala budżet, pyta w interpelacjach, odwołuje ministrów.":
    "Il vote le budget, interroge par voie d'interpellation, révoque des ministres.",
  "Najwyższa Izba Kontroli": "La Najwyższa Izba Kontroli",
  "Bada wydatki państwa i podlega Sejmowi, nie rządowi.":
    "Cette chambre suprême de contrôle examine les dépenses de l'État et relève du Sejm, non du gouvernement.",
  "Trybunał Stanu": "Le Trybunał Stanu",
  "Sądzi najwyższych urzędników za naruszenie Konstytucji lub ustawy.":
    "Ce tribunal d'État juge les plus hauts responsables pour violation de la Constitution ou de la loi.",
  "Czego wymaga konstruktywne wotum nieufności?":
    "Que suppose une motion de censure constructive ?",
  "Zgody Prezydenta": "L'accord du président",
  "Jednoczesnego wskazania nowego premiera":
    "La désignation simultanée d'un nouveau premier ministre",
  "Rozwiązania Sejmu": "La dissolution du Sejm",
  "Większości 2/3 głosów": "Une majorité des 2/3",
  "Sejm musi wskazać następcę. Bez tego wniosek jest bezskuteczny — państwo nie zostaje bez rządu.":
    "Le Sejm doit désigner un successeur. Sans cela, la motion est sans effet — l'État ne reste pas sans gouvernement.",
  "Budżet": "Le budget",
  "Rada Ministrów przygotowuje **ustawę budżetową** i przedkłada ją Sejmowi. Jeśli parlament nie uchwali jej w ciągu **czterech miesięcy**, Prezydent może skrócić kadencję Sejmu.":
    "Le Conseil des ministres prépare la **loi de finances** et la soumet au Sejm. Si le parlement ne l'adopte pas dans les **quatre mois**, le président peut abréger la législature.",
  "Ministerstwa": "Les ministères",
  "Każdy minister kieruje **działem administracji rządowej** — finansami, zdrowiem, edukacją, obroną. Podział działów określa ustawa, a nie sam premier; liczba ministerstw bywa różna w kolejnych rządach.":
    "Chaque ministre dirige un **département de l'administration gouvernementale** — les finances, la santé, l'éducation, la défense. La répartition des départements est fixée par une loi et non par le premier ministre ; le nombre de ministères varie d'un gouvernement à l'autre.",
  "Kto przygotowuje projekt ustawy budżetowej?": "Qui prépare le projet de loi de finances ?",
  "Narodowy Bank Polski": "La Banque nationale de Pologne",
  "Rada Ministrów. Sejm budżet uchwala, ale sam go nie pisze.":
    "Le Conseil des ministres. Le Sejm vote le budget, mais il ne l'écrit pas.",
  "Sądy i Trybunały": "Les tribunaux et les cours",
  "Trzy szczeble sądów": "Les trois degrés de juridiction",
  "Sprawy zaczynają się w **sądzie rejonowym**, odwołania trafiają do **okręgowego**, a dalej do **apelacyjnego**. Na szczycie stoi **Sąd Najwyższy**, który czuwa nad jednolitością orzecznictwa — nie rozpatruje spraw od początku.":
    "Les affaires commencent au **tribunal d'arrondissement**, les appels vont au **tribunal régional**, puis à la **cour d'appel**. Au sommet siège la **Cour suprême**, qui veille à l'unité de la jurisprudence — elle ne rejuge pas une affaire depuis le début.",
  "Sądy administracyjne": "Les juridictions administratives",
  "Osobną drogą idą spory z urzędami. Skargę na decyzję rozpatruje **wojewódzki sąd administracyjny**, a skargę kasacyjną — **Naczelny Sąd Administracyjny**.":
    "Les litiges avec l'administration suivent une voie séparée. Le recours contre une décision est examiné par le **tribunal administratif de voïvodie**, et le pourvoi en cassation par la **Cour administrative suprême**.",
  "Dwa trybunały": "Les deux cours",
  "Trybunał Konstytucyjny": "Le Tribunal constitutionnel",
  "Orzeka, czy ustawa jest zgodna z Konstytucją. Może to zbadać na skargę konstytucyjną obywatela.":
    "Il dit si une loi est conforme à la Constitution. Il peut en être saisi par le recours constitutionnel d'un citoyen.",
  "Sądzi Prezydenta, premiera i ministrów za delikty konstytucyjne — nie za zwykłe przestępstwa.":
    "Il juge le président, le premier ministre et les ministres pour manquement constitutionnel — pas pour une infraction ordinaire.",
  "Zasady procesu": "Les principes du procès",
  "Postępowanie jest **dwuinstancyjne**: od wyroku przysługuje odwołanie. Rozprawy są **jawne**, a wyrok ogłasza się publicznie. Sędziowie są **niezawiśli** i podlegają tylko Konstytucji oraz ustawom.":
    "La procédure comporte **deux degrés** : un jugement peut être frappé d'appel. Les audiences sont **publiques** et le jugement est prononcé publiquement. Les juges sont **indépendants** et ne sont soumis qu'à la Constitution et aux lois.",
  "Sądy powszechne rozstrzygają spory między ludźmi i sądzą przestępstwa. **Trybunał Konstytucyjny nie jest sądem odwoławczym** — nie zmieni wyroku w sprawie, przygląda się przepisowi.":
    "Les juridictions ordinaires tranchent les litiges entre personnes et jugent les infractions. Le **Tribunal constitutionnel n'est pas une juridiction d'appel** — il ne réformera pas un jugement, il examine une disposition.",
  "Który organ orzeka o zgodności ustawy z Konstytucją?":
    "Quel organe se prononce sur la conformité d'une loi à la Constitution ?",
  "Sąd Najwyższy": "La Cour suprême",
  "Naczelny Sąd Administracyjny": "La Cour administrative suprême",
  "Trybunał Konstytucyjny. Sąd Najwyższy czuwa nad orzecznictwem sądów, Trybunał Stanu sądzi urzędników.":
    "Le Tribunal constitutionnel. La Cour suprême veille sur la jurisprudence des tribunaux, le Tribunal d'État juge les responsables publics.",
  "Ława przysięgłych? Nie tutaj": "Un jury ? Pas ici",
  "Polska nie ma ławy przysięgłych. W części spraw obok sędziego zawodowego orzekają **ławnicy** — obywatele wybierani przez rady gmin, którzy mają przy wyrokowaniu taki sam głos jak sędzia.":
    "La Pologne n'a pas de jury populaire. Dans une partie des affaires, des **ławnicy** — des citoyens élus par les conseils communaux — siègent à côté du juge professionnel et ont, au moment du jugement, la même voix que lui.",
  "Prokuratura i adwokatura": "Le parquet et le barreau",
  "Prokurator": "Le procureur",
  "Prowadzi postępowanie przygotowawcze i oskarża przed sądem.":
    "Il mène l'enquête et soutient l'accusation devant le tribunal.",
  "Adwokat i radca prawny": "L'avocat et le conseil juridique",
  "Bronią i reprezentują. Kto nie ma środków, może dostać obrońcę z urzędu.":
    "Ils défendent et représentent. Qui n'a pas les moyens peut obtenir un défenseur commis d'office.",
  "Komornik": "L'huissier",
  "Wykonuje prawomocne orzeczenia sądu, gdy dłużnik ich nie wypełnia.":
    "Il exécute les décisions de justice définitives quand le débiteur ne s'y conforme pas.",
  "Kto orzeka w polskim sądzie obok sędziego zawodowego w części spraw?":
    "Qui juge, dans une partie des affaires, aux côtés du juge professionnel en Pologne ?",
  "Ława przysięgłych": "Un jury populaire",
  "Ławnicy": "Les ławnicy",
  "Wojewoda": "Le voïvode",
  "Ławnicy, wybierani przez rady gmin. Ławy przysięgłych w Polsce nie ma.":
    "Les ławnicy, élus par les conseils communaux. Il n'y a pas de jury populaire en Pologne.",
  "Samorząd terytorialny": "L'autonomie locale",
  "Trzy szczeble": "Les trois échelons",
  "Polska dzieli się na **16 województw**, te na **powiaty**, a powiaty na **gminy**. Gmina jest szczeblem podstawowym: to ona odpowiada za sprawy, których nie zastrzeżono dla innych.":
    "La Pologne se divise en **16 województwa**, ceux-ci en **powiaty**, et les powiaty en **gminy**. La gmina est l'échelon de base : c'est elle qui répond de tout ce qui n'a pas été réservé aux autres.",
  "Kto czym kieruje": "Qui dirige quoi",
  "Gmina": "La gmina",
  "Rada gminy i wójt, w mieście burmistrz albo prezydent miasta. Szkoły podstawowe, drogi lokalne, woda, śmieci.":
    "Le conseil communal et le wójt, en ville le burmistrz ou le prezydent miasta. Écoles primaires, voirie locale, eau, déchets.",
  "Powiat": "Le powiat",
  "Rada powiatu i starosta. Szpitale powiatowe, szkoły średnie, prawa jazdy, rejestracja pojazdów.":
    "Le conseil du powiat et le starosta. Hôpitaux d'arrondissement, lycées, permis de conduire, immatriculation des véhicules.",
  "Województwo": "Le województwo",
  "Sejmik i marszałek. Rozwój regionu, drogi wojewódzkie, fundusze europejskie.":
    "Le sejmik et le marszałek. Développement régional, routes de voïvodie, fonds européens.",
  "Wojewoda a marszałek": "Le voïvode et le marszałek",
  "W województwie są **dwie** władze i łatwo je pomylić. **Marszałka** wybiera sejmik — to samorząd. **Wojewodę** powołuje premier — to przedstawiciel rządu w terenie, który nadzoruje legalność działań samorządu.":
    "Il y a **deux** autorités dans une voïvodie, et on les confond facilement. Le **marszałek** est élu par le sejmik — c'est l'autonomie locale. Le **voïvode** est nommé par le premier ministre — c'est le représentant du gouvernement sur place, qui contrôle la légalité des actes de l'autonomie locale.",
  "Wybory samorządowe": "Les élections locales",
  "Radnych, wójtów, burmistrzów i prezydentów miast wybiera się co **5 lat**. Mieszkańcy mogą też odwołać wójta albo radę w **referendum lokalnym**.":
    "Les conseillers, les wójtowie, les burmistrzowie et les prezydenci miast sont élus tous les **5 ans**. Les habitants peuvent aussi révoquer un wójt ou un conseil par un **référendum local**.",
  "Kto powołuje wojewodę?": "Qui nomme le voïvode ?",
  "Sejmik województwa": "Le sejmik de la voïvodie",
  "Prezes Rady Ministrów": "Le président du Conseil des ministres",
  "Prezydent Rzeczypospolitej": "Le président de la République",
  "Mieszkańcy w wyborach": "Les habitants, par une élection",
  "Premier. Wojewoda reprezentuje rząd; marszałka wybiera sejmik i to on kieruje samorządem województwa.":
    "Le premier ministre. Le voïvode représente le gouvernement ; le marszałek est élu par le sejmik et c'est lui qui dirige l'autonomie de la voïvodie.",
  "Skąd samorząd bierze pieniądze": "D'où l'autonomie locale tire son argent",
  "Gminy mają **dochody własne** — podatek od nieruchomości, opłaty lokalne — oraz **udział w podatkach** PIT i CIT. Do tego dochodzą subwencje i dotacje z budżetu państwa, między innymi oświatowa.":
    "Les gminy ont des **recettes propres** — la taxe foncière, les redevances locales — et une **part des impôts** PIT et CIT. S'y ajoutent des subventions et des dotations du budget de l'État, dont celle de l'enseignement.",
  "Sołectwa i dzielnice": "Sołectwa et quartiers",
  "Wewnątrz gminy działają jednostki pomocnicze: na wsi **sołectwa** z sołtysem, w mieście **dzielnice** albo **osiedla**. Część gmin oddaje mieszkańcom do rozdysponowania **budżet obywatelski**.":
    "À l'intérieur d'une gmina existent des unités auxiliaires : à la campagne les **sołectwa** avec leur sołtys, en ville des **dzielnice** ou des **osiedla**. Une partie des gminy laisse les habitants disposer d'un **budget participatif**.",
  "Który szczebel samorządu odpowiada za szkoły podstawowe?":
    "Quel échelon de l'autonomie locale répond des écoles primaires ?",
  "Państwo": "L'État",
  "Gmina. Powiat prowadzi szkoły średnie, województwo zajmuje się rozwojem regionu.":
    "La gmina. Le powiat tient les lycées, la voïvodie s'occupe du développement régional.",
  "Od Mieszka I do Rzeczypospolitej Obojga Narodów":
    "De Mieszko Ier à la République des Deux Nations",
  "Historia Polski": "L'histoire de la Pologne",
  "Sześćset lat w jednej lekcji — nie po to, żeby je zapamiętać, tylko żeby wiedzieć, skąd biorą się nazwy, które wracają później: Piastowie, Jagiellonowie, Rzeczpospolita.":
    "Six cents ans en une leçon — non pour les retenir, mais pour savoir d'où viennent les noms qui reviendront plus tard : les Piast, les Jagellon, la Rzeczpospolita.",
  "Chrzest i pierwsze państwo": "Le baptême et le premier État",
  "**Mieszko I** przyjmuje chrzest w **966 roku**. Jego syn **Bolesław Chrobry** koronuje się w **1025** na pierwszego króla Polski. Dynastia nazywa się **Piastami** i rządzi do 1370 roku.":
    "**Mieszko Ier** reçoit le baptême en **966**. Son fils **Boleslas le Vaillant** se fait couronner en **1025** premier roi de Pologne. La dynastie s'appelle les **Piast** et règne jusqu'en 1370.",
  "Rozbicie i zjednoczenie": "Le morcellement et la réunification",
  "Po śmierci Bolesława Krzywoustego w 1138 roku kraj rozpada się na dzielnice na blisko dwieście lat. Scala go dopiero **Władysław Łokietek**, a jego syn **Kazimierz Wielki** (1333–1370) rozbudowuje państwo — powiada się o nim, że „zastał Polskę drewnianą, a zostawił murowaną”. W **1364** zakłada uniwersytet w Krakowie.":
    "Après la mort de Boleslas Bouche-Torse en 1138, le pays se morcelle en duchés pour près de deux cents ans. Seul **Ladislas le Bref** le recompose, et son fils **Casimir le Grand** (1333-1370) agrandit l'État — on dit de lui qu'il trouva une Pologne de bois et laissa une Pologne de pierre. En **1364**, il fonde l'université de Cracovie.",
  "Unia z Litwą": "L'union avec la Lituanie",
  "1385 — unia w Krewie": "1385 — l'union de Krewo",
  "Wielki książę litewski Jagiełło żeni się z królową Jadwigą, przyjmuje chrzest i zostaje królem Polski.":
    "Le grand-duc de Lituanie Jagellon épouse la reine Hedwige, reçoit le baptême et devient roi de Pologne.",
  "1410 — Grunwald": "1410 — Grunwald",
  "Wojska polsko-litewskie pokonują zakon krzyżacki w jednej z największych bitew średniowiecznej Europy.":
    "Les armées polono-lituaniennes battent l'ordre Teutonique dans l'une des plus grandes batailles de l'Europe médiévale.",
  "1569 — unia lubelska": "1569 — l'union de Lublin",
  "Polska i Litwa tworzą jedno państwo: Rzeczpospolitą Obojga Narodów, ze wspólnym sejmem i wspólnym królem.":
    "La Pologne et la Lituanie forment un seul État : la République des Deux Nations, avec une diète commune et un roi commun.",
  "Szlachecka republika": "La république nobiliaire",
  "Rzeczpospolita jest monarchią, ale króla **wybiera szlachta** w wolnej elekcji. Sejm decyduje o podatkach i wojnie. Zasada **liberum veto** pozwala jednemu posłowi zerwać obrady — z czasem paraliżuje państwo.":
    "La Rzeczpospolita est une monarchie, mais le roi est **élu par la noblesse** en libre élection. La diète décide de l'impôt et de la guerre. Le principe du **liberum veto** permet à un seul député de rompre la séance — avec le temps, il paralyse l'État.",
  "W którym roku odbyła się bitwa pod Grunwaldem?":
    "En quelle année eut lieu la bataille de Grunwald ?",
  "1385": "1385",
  "1410": "1410",
  "1569": "1569",
  "1683": "1683",
  "1410. 1385 to unia w Krewie, 1569 unia lubelska, 1683 odsiecz wiedeńska.":
    "1410. 1385 est l'union de Krewo, 1569 l'union de Lublin, 1683 le secours de Vienne.",
  "Gniezno i Kraków": "Gniezno et Cracovie",
  "Pierwszą stolicą było **Gniezno**, gdzie w **1000 roku** cesarz Otton III spotkał się z Bolesławem Chrobrym. Od XI wieku ośrodkiem władzy stał się **Kraków**, na Wawelu koronowano królów aż do XVIII wieku.":
    "La première capitale fut **Gniezno**, où l'empereur Otton III rencontra Boleslas le Vaillant en l'an **1000**. À partir du XIe siècle, le centre du pouvoir devint **Cracovie** : on y couronna les rois au Wawel jusqu'au XVIIIe siècle.",
  "Złoty wiek": "Le siècle d'or",
  "XVI stulecie nazywa się **złotym wiekiem**: rozkwitają nauka i literatura, **Mikołaj Kopernik** ogłasza teorię heliocentryczną, a **Jan Kochanowski** pisze po polsku zamiast po łacinie.":
    "On appelle le XVIe siècle le **siècle d'or** : les sciences et les lettres s'épanouissent, **Nicolas Copernic** publie sa théorie héliocentrique et **Jan Kochanowski** écrit en polonais au lieu du latin.",
  "Który uniwersytet założono w Krakowie w 1364 roku?":
    "Quelle université fut fondée à Cracovie en 1364 ?",
  "Uniwersytet Warszawski": "L'université de Varsovie",
  "Uniwersytet Jagielloński": "L'université Jagellonne",
  "Uniwersytet Wrocławski": "L'université de Wrocław",
  "Politechnika Gdańska": "L'École polytechnique de Gdańsk",
  "Uniwersytet Jagielloński, jedna z najstarszych uczelni Europy. Uniwersytet Warszawski powstał w 1816 roku.":
    "L'université Jagellonne, l'une des plus anciennes d'Europe. L'université de Varsovie fut créée en 1816.",
  "Rozbiory i walka o niepodległość": "Les partages et la lutte pour l'indépendance",
  "Trzy rozbiory": "Les trois partages",
  "Osłabioną Rzeczpospolitą dzielą między siebie **Rosja, Prusy i Austria**: w **1772**, **1793** i **1795** roku. Po trzecim rozbiorze państwo polskie **znika z mapy na 123 lata**.":
    "La Rzeczpospolita affaiblie est partagée entre la **Russie, la Prusse et l'Autriche** : en **1772**, **1793** et **1795**. Après le troisième partage, l'État polonais **disparaît de la carte pour 123 ans**.",
  "Próba ratunku": "Une tentative de sauvetage",
  "Cztery lata przed końcem Sejm Czteroletni uchwala **Konstytucję 3 maja 1791** — pierwszą w Europie i drugą na świecie nowoczesną konstytucję spisaną. Znosi liberum veto i wolną elekcję. Sąsiedzi widzą w niej zagrożenie i wkraczają zbrojnie.":
    "Quatre ans avant la fin, la Grande Diète adopte la **Constitution du 3 mai 1791** — la première d'Europe et la deuxième au monde parmi les constitutions écrites modernes. Elle abolit le liberum veto et la libre élection. Les voisins y voient une menace et entrent en armes.",
  "Powstania": "Les insurrections",
  "1794 — insurekcja kościuszkowska": "1794 — l'insurrection de Kościuszko",
  "Tadeusz Kościuszko prowadzi ostatnią próbę obrony Rzeczypospolitej. Po klęsce następuje trzeci rozbiór.":
    "Tadeusz Kościuszko mène la dernière tentative de défense de la Rzeczpospolita. La défaite est suivie du troisième partage.",
  "1830 — powstanie listopadowe": "1830 — l'insurrection de Novembre",
  "Wybucha w Warszawie przeciw Rosji. Po klęsce tysiące ludzi emigruje na Zachód.":
    "Elle éclate à Varsovie contre la Russie. Après la défaite, des milliers de gens émigrent vers l'Ouest.",
  "1863 — powstanie styczniowe": "1863 — l'insurrection de Janvier",
  "Największe i najdłuższe. Po nim represje: rusyfikacja, konfiskaty, zsyłki na Sybir.":
    "La plus grande et la plus longue. Elle est suivie de la répression : russification, confiscations, déportations en Sibérie.",
  "Naród bez państwa": "Une nation sans État",
  "Przez sto dwadzieścia trzy lata polskość trwa w kulturze: w wierszach **Mickiewicza** i **Słowackiego**, w muzyce **Chopina**, w malarstwie **Matejki**. W 1903 roku **Maria Skłodowska-Curie** dostaje Nagrodę Nobla — pierwszą z dwóch.":
    "Pendant cent vingt-trois ans, la Pologne se maintient dans la culture : dans les vers de **Mickiewicz** et de **Słowacki**, dans la musique de **Chopin**, dans la peinture de **Matejko**. En 1903, **Marie Skłodowska-Curie** reçoit le prix Nobel — le premier de deux.",
  "Ile lat Polski nie było na mapie Europy?":
    "Combien d'années la Pologne a-t-elle été absente de la carte de l'Europe ?",
  "50 lat": "50 ans",
  "99 lat": "99 ans",
  "123 lata": "123 ans",
  "150 lat": "150 ans",
  "123 lata — od trzeciego rozbioru w 1795 do odzyskania niepodległości w 1918.":
    "123 ans — du troisième partage en 1795 au retour de l'indépendance en 1918.",
  "Trzej zaborcy, trzy porządki": "Trois puissances, trois régimes",
  "Zabór rosyjski": "La zone russe",
  "Największy. Po powstaniach nasilona rusyfikacja i zsyłki.":
    "La plus grande. Après les insurrections, russification accrue et déportations.",
  "Zabór pruski": "La zone prussienne",
  "Silna germanizacja, ale i lepsza gospodarka oraz powszechna szkoła.":
    "Germanisation forte, mais aussi meilleure économie et école pour tous.",
  "Zabór austriacki": "La zone autrichienne",
  "Galicja, uboga, lecz od 1867 roku z autonomią: polskie szkoły i sejm we Lwowie.":
    "La Galicie, pauvre, mais autonome à partir de 1867 : écoles polonaises et diète à Lwów.",
  "Praca zamiast powstania": "Le travail plutôt que l'insurrection",
  "Po klęsce 1863 roku część działaczy odchodzi od zbrojnych zrywów na rzecz **pracy organicznej**: zakładania szkół, spółdzielni i czytelni. Spór między walką a pracą u podstaw przewija się przez cały wiek XIX.":
    "Après la défaite de 1863, une partie des militants abandonne les soulèvements armés au profit du **travail organique** : fonder des écoles, des coopératives et des salles de lecture. Le débat entre la lutte et le travail de fond traverse tout le XIXe siècle.",
  "Które powstanie wybuchło w 1863 roku?": "Quelle insurrection éclata en 1863 ?",
  "Listopadowe": "Celle de Novembre",
  "Styczniowe": "Celle de Janvier",
  "Warszawskie": "Celle de Varsovie",
  "Wielkopolskie": "Celle de Grande-Pologne",
  "Styczniowe. Listopadowe to 1830, wielkopolskie 1918, warszawskie 1944.":
    "Celle de Janvier. Celle de Novembre, c'est 1830 ; celle de Grande-Pologne 1918 ; celle de Varsovie 1944.",
  "II Rzeczpospolita": "La Deuxième République",
  "11 listopada 1918": "Le 11 novembre 1918",
  "Gdy trzy zaborcze mocarstwa przegrywają albo rozpadają się w I wojnie światowej, Polska wraca. **11 listopada 1918** Rada Regencyjna przekazuje **Józefowi Piłsudskiemu** władzę wojskową. Dzień ten jest dziś **Narodowym Świętem Niepodległości**.":
    "Quand les trois puissances qui l'avaient partagée perdent la guerre ou s'effondrent, la Pologne revient. Le **11 novembre 1918**, le Conseil de régence remet le pouvoir militaire à **Józef Piłsudski**. Ce jour est aujourd'hui la **Fête nationale de l'Indépendance**.",
  "Granice trzeba było wywalczyć": "Il a fallu conquérir les frontières",
  "Kształt państwa ustala się w walkach i plebiscytach: powstanie wielkopolskie, trzy powstania śląskie, wojna z Rosją bolszewicką. **Bitwa Warszawska w sierpniu 1920** zatrzymuje ofensywę na zachód — nazywa się ją „cudem nad Wisłą”.":
    "La forme de l'État se décide par les armes et par les plébiscites : l'insurrection de Grande-Pologne, les trois insurrections de Silésie, la guerre contre la Russie bolchevique. La **bataille de Varsovie, en août 1920**, arrête l'offensive vers l'ouest — on l'appelle le miracle de la Vistule.",
  "Państwo od zera": "Un État à partir de rien",
  "Jedna waluta": "Une seule monnaie",
  "Trzy systemy prawne, trzy koleje, cztery waluty. W 1924 roku reforma Grabskiego wprowadza złotego.":
    "Trois systèmes juridiques, trois réseaux ferrés, quatre monnaies. En 1924, la réforme Grabski introduit le złoty.",
  "Gdynia": "Gdynia",
  "Port budowany od podstaw od 1926 roku daje krajowi własne wyjście na Bałtyk.":
    "Un port bâti à partir de rien depuis 1926 donne au pays son propre accès à la Baltique.",
  "Konstytucja marcowa": "La Constitution de mars",
  "1921 — republika parlamentarna. W 1935 zastępuje ją kwietniowa, wzmacniająca prezydenta.":
    "1921 — une république parlementaire. En 1935, celle d'avril la remplace et renforce le président.",
  "Kraj wielu narodów": "Un pays de plusieurs peuples",
  "W II Rzeczypospolitej mieszkają Polacy, Ukraińcy, Żydzi, Białorusini, Niemcy i Litwini. Około **jednej trzeciej** mieszkańców to mniejszości narodowe — więcej niż dziś.":
    "Dans la Deuxième République vivent des Polonais, des Ukrainiens, des Juifs, des Biélorusses, des Allemands et des Lituaniens. Environ **un tiers** des habitants appartient à une minorité nationale — plus qu'aujourd'hui.",
  "Jak nazywa się bitwa z sierpnia 1920 roku, która zatrzymała ofensywę bolszewicką?":
    "Comment s'appelle la bataille d'août 1920 qui arrêta l'offensive bolchevique ?",
  "Bitwa pod Grunwaldem": "La bataille de Grunwald",
  "Bitwa Warszawska": "La bataille de Varsovie",
  "Bitwa pod Wiedniem": "La bataille de Vienne",
  "Bitwa nad Bzurą": "La bataille de la Bzura",
  "Bitwa Warszawska, zwana cudem nad Wisłą. Bzura to wrzesień 1939, Wiedeń 1683, Grunwald 1410.":
    "La bataille de Varsovie, dite le miracle de la Vistule. La Bzura, c'est septembre 1939 ; Vienne 1683 ; Grunwald 1410.",
  "Zamach majowy": "Le coup d'État de mai",
  "W **maju 1926** Piłsudski przeprowadza zamach stanu. Zaczyna się okres **sanacji** — rządów obozu piłsudczykowskiego, w których rola parlamentu maleje. Piłsudski umiera w 1935 roku.":
    "En **mai 1926**, Piłsudski fait un coup d'État. Commence la période de la **sanacja** — le gouvernement du camp de Piłsudski, où le rôle du parlement s'amenuise. Piłsudski meurt en 1935.",
  "Kultura międzywojnia": "La culture de l'entre-deux-guerres",
  "Dwudziestolecie to czas **Tuwima**, **Witkacego** i **Gombrowicza**, kabaretu warszawskiego i pierwszego polskiego radia. W 1924 roku powstaje Polskie Radio, a filmy kręci się w Warszawie i Wilnie.":
    "Ces vingt années sont celles de **Tuwim**, de **Witkacy** et de **Gombrowicz**, du cabaret de Varsovie et de la première radio polonaise. Polskie Radio naît en 1924, et l'on tourne des films à Varsovie et à Vilnius.",
  "Kto przeprowadził zamach majowy w 1926 roku?": "Qui a mené le coup d'État de mai 1926 ?",
  "Roman Dmowski": "Roman Dmowski",
  "Józef Piłsudski": "Józef Piłsudski",
  "Ignacy Paderewski": "Ignacy Paderewski",
  "Wincenty Witos": "Wincenty Witos",
  "Józef Piłsudski. Dmowski był jego głównym przeciwnikiem politycznym, Paderewski pianistą i premierem w 1919 roku.":
    "Józef Piłsudski. Dmowski était son principal adversaire politique, Paderewski un pianiste et le chef du gouvernement de 1919.",
  "II wojna światowa i okupacja": "La Seconde Guerre mondiale et l'occupation",
  "Sześć lat, które zmieniły granice, ludność i krajobraz kraju bardziej niż cokolwiek wcześniej. Bez nich nie da się zrozumieć ani dzisiejszej mapy, ani dzisiejszych świąt.":
    "Six ans qui ont changé les frontières, la population et le paysage du pays plus que tout ce qui avait précédé. Sans eux, on ne comprend ni la carte d'aujourd'hui ni les fêtes d'aujourd'hui.",
  "Wrzesień 1939": "Septembre 1939",
  "**1 września 1939** Niemcy atakują Polskę — wojna zaczyna się od ostrzału **Westerplatte**. **17 września** od wschodu wkracza Związek Radziecki, wykonując tajny protokół paktu Ribbentrop–Mołotow. Państwo zostaje podzielone między dwóch okupantów.":
    "Le **1er septembre 1939**, l'Allemagne attaque la Pologne — la guerre commence par le bombardement de **Westerplatte**. Le **17 septembre**, l'Union soviétique entre par l'est, exécutant le protocole secret du pacte Ribbentrop-Molotov. L'État est partagé entre deux occupants.",
  "Okupacja": "L'occupation",
  "Niemcy prowadzą na ziemiach polskich **Zagładę**: w obozach, z których największym był **Auschwitz-Birkenau**, ginie około trzech milionów polskich Żydów. Sowieci wywożą setki tysięcy ludzi na wschód, a wiosną 1940 mordują w **Katyniu** i innych miejscach blisko 22 tysiące polskich oficerów.":
    "Les Allemands mènent sur les terres polonaises la **Shoah** : dans les camps, dont le plus grand fut **Auschwitz-Birkenau**, périssent environ trois millions de Juifs polonais. Les Soviétiques déportent des centaines de milliers de personnes vers l'est et, au printemps 1940, assassinent à **Katyn** et ailleurs près de 22 000 officiers polonais.",
  "Państwo Podziemne": "L'État clandestin",
  "Armia Krajowa": "L'Armia Krajowa",
  "Największa podziemna armia okupowanej Europy, podległa rządowi w Londynie.":
    "La plus grande armée clandestine de l'Europe occupée, dépendant du gouvernement de Londres.",
  "Tajne nauczanie": "L'enseignement clandestin",
  "Szkoły i uniwersytety działały w mieszkaniach, mimo kary śmierci za nauczanie.":
    "Écoles et universités fonctionnaient dans des appartements, malgré la peine de mort encourue pour enseigner.",
  "Powstanie w getcie": "L'insurrection du ghetto",
  "Kwiecień 1943: zryw skazany z góry, podjęty, by zginąć z bronią w ręku.":
    "Avril 1943 : un soulèvement perdu d'avance, entrepris pour mourir les armes à la main.",
  "Powstanie Warszawskie": "L'insurrection de Varsovie",
  "1 sierpnia 1944, 63 dni walki. Miasto zostaje po nim celowo zburzone.":
    "Le 1er août 1944, 63 jours de combat. La ville est ensuite détruite délibérément.",
  "Bilans": "Le bilan",
  "Polska traci około **6 milionów** obywateli — blisko jedną piątą ludności. Granice przesuwają się na zachód: kraj traci Kresy Wschodnie, zyskuje ziemie nad Odrą i Bałtykiem. Miliony ludzi zostają przesiedlone.":
    "La Pologne perd environ **6 millions** de citoyens — près d'un cinquième de sa population. Les frontières se déplacent vers l'ouest : le pays perd les Kresy, ses confins orientaux, et gagne les terres de l'Oder et de la Baltique. Des millions de gens sont déplacés.",
  "Którego dnia rozpoczęła się II wojna światowa atakiem na Polskę?":
    "Quel jour la Seconde Guerre mondiale a-t-elle commencé par l'attaque contre la Pologne ?",
  "17 września 1939": "Le 17 septembre 1939",
  "1 września 1939": "Le 1er septembre 1939",
  "1 sierpnia 1944": "Le 1er août 1944",
  "8 maja 1945": "Le 8 mai 1945",
  "1 września 1939. 17 września to wkroczenie ZSRR, 1 sierpnia 1944 to Powstanie Warszawskie, 8 maja 1945 to koniec wojny w Europie.":
    "Le 1er septembre 1939. Le 17 septembre est l'entrée de l'URSS, le 1er août 1944 l'insurrection de Varsovie, le 8 mai 1945 la fin de la guerre en Europe.",
  "Polacy poza krajem": "Les Polonais hors du pays",
  "Rząd przeniósł się do **Londynu**. Polscy lotnicy walczyli w bitwie o Anglię — najskuteczniejszy był **dywizjon 303**. Żołnierze generała Andersa przeszli przez Bliski Wschód do Włoch i w 1944 roku zdobyli **Monte Cassino**.":
    "Le gouvernement s'installe à **Londres**. Des aviateurs polonais combattent dans la bataille d'Angleterre — le plus efficace fut le **squadron 303**. Les soldats du général Anders traversent le Proche-Orient jusqu'en Italie et prennent le **Mont-Cassin** en 1944.",
  "Ci, którzy ratowali": "Ceux qui ont sauvé",
  "Za pomoc Żydom groziła w okupowanej Polsce **kara śmierci**, także dla całej rodziny. Mimo to działała **Żegota** — Rada Pomocy Żydom. Polacy stanowią najliczniejszą grupę wśród odznaczonych tytułem **Sprawiedliwy wśród Narodów Świata**.":
    "Aider un Juif exposait, dans la Pologne occupée, à la **peine de mort**, y compris pour toute la famille. Malgré cela, **Żegota** — le Conseil d'aide aux Juifs — a fonctionné. Les Polonais forment le groupe le plus nombreux parmi les personnes distinguées du titre de **Juste parmi les nations**.",
  "Jak nazywał się polski dywizjon myśliwski, który wsławił się w bitwie o Anglię?":
    "Comment s'appelait l'escadrille de chasse polonaise qui s'illustra dans la bataille d'Angleterre ?",
  "Dywizjon 300": "Le squadron 300",
  "Dywizjon 303": "Le squadron 303",
  "Dywizjon 316": "Le squadron 316",
  "Dywizjon 1": "Le squadron 1",
  "Dywizjon 303 imienia Tadeusza Kościuszki, jeden z najskuteczniejszych w całej bitwie.":
    "Le squadron 303 Tadeusz Kościuszko, l'un des plus efficaces de toute la bataille.",
  "PRL i Solidarność": "La République populaire et Solidarność",
  "Polska Rzeczpospolita Ludowa": "La République populaire de Pologne",
  "Po wojnie Polska znajduje się w strefie wpływów Związku Radzieckiego. Władzę sprawuje jedna partia — **PZPR**. Gospodarka jest planowana centralnie, prywatny przemysł znacjonalizowany, granica zachodnia potwierdzona dopiero układami z lat 1970 i 1990.":
    "Après la guerre, la Pologne se trouve dans la zone d'influence de l'Union soviétique. Un seul parti gouverne — le **PZPR**. L'économie est planifiée centralement, l'industrie privée nationalisée, et la frontière occidentale n'est confirmée que par les traités de 1970 et de 1990.",
  "Bunty": "Les révoltes",
  "1956 — Poznań": "1956 — Poznań",
  "Robotniczy protest stłumiony wojskiem; zapoczątkował odwilż.":
    "Une protestation ouvrière écrasée par l'armée ; elle ouvrit le dégel.",
  "1968 — Marzec": "1968 — Mars",
  "Protesty studenckie i antysemicka kampania, po której kraj opuszcza kilkanaście tysięcy osób.":
    "Des manifestations étudiantes et une campagne antisémite, après laquelle plus de dix mille personnes quittent le pays.",
  "1970 — Wybrzeże": "1970 — la côte",
  "Strajki przeciw podwyżkom cen, stłumione strzałami do robotników.":
    "Des grèves contre la hausse des prix, réprimées à coups de fusil contre les ouvriers.",
  "1976 — Radom i Ursus": "1976 — Radom et Ursus",
  "Kolejne strajki; powstaje Komitet Obrony Robotników.":
    "De nouvelles grèves ; naît le Comité de défense des ouvriers.",
  "Solidarność": "Solidarność",
  "W **sierpniu 1980** strajk w Stoczni Gdańskiej kończy się **porozumieniami sierpniowymi**. Powstaje **NSZZ „Solidarność”** — pierwszy niezależny związek zawodowy w bloku wschodnim, z **Lechem Wałęsą** na czele. W szczytowym momencie liczy blisko dziesięć milionów członków.":
    "En **août 1980**, la grève des chantiers navals de Gdańsk s'achève par les **accords d'août**. Naît le syndicat **NSZZ Solidarność** — le premier syndicat indépendant du bloc de l'Est, avec **Lech Wałęsa** à sa tête. À son sommet, il compte près de dix millions de membres.",
  "Stan wojenny": "L'état de guerre",
  "**13 grudnia 1981** generał Wojciech Jaruzelski wprowadza **stan wojenny**. Solidarność zostaje zdelegalizowana, tysiące działaczy internowanych. Związek działa dalej w podziemiu.":
    "Le **13 décembre 1981**, le général Wojciech Jaruzelski proclame l'**état de guerre**. Solidarność est interdite, des milliers de militants internés. Le syndicat continue dans la clandestinité.",
  "Wybór **Karola Wojtyły** na papieża w **1978** i jego pielgrzymka do Polski rok później są dla wielu badaczy jednym z warunków tego, co stało się w 1980 roku.":
    "L'élection de **Karol Wojtyła** comme pape en **1978** et son pèlerinage en Pologne l'année suivante sont, pour bien des historiens, l'une des conditions de ce qui s'est produit en 1980.",
  "W którym roku wprowadzono w Polsce stan wojenny?":
    "En quelle année l'état de guerre a-t-il été proclamé en Pologne ?",
  "1970": "1970",
  "1976": "1976",
  "1981": "1981",
  "13 grudnia 1981 roku. 1980 to powstanie Solidarności, 1989 to wybory czerwcowe.":
    "Le 13 décembre 1981. 1980 est la naissance de Solidarność, 1989 les élections de juin.",
  "Życie codzienne w PRL": "La vie quotidienne sous la République populaire",
  "Gospodarka niedoboru oznaczała **kolejki** i **kartki** na mięso, cukier czy buty. Mieszkania przydzielała spółdzielnia, a na samochód czekało się latami. Paszport trzymał urząd i trzeba było o niego prosić.":
    "L'économie de pénurie voulait dire des **files d'attente** et des **tickets** de rationnement pour la viande, le sucre ou les chaussures. Le logement était attribué par une coopérative et l'on attendait des années une voiture. Le passeport était gardé par l'administration et il fallait le demander.",
  "Kultura mimo cenzury": "La culture malgré la censure",
  "Mimo cenzury powstawały film, teatr i muzyka, które znano poza krajem: szkoła filmowa w Łodzi, plakat polski, jazz. Obok tego działał **drugi obieg** — książki drukowane i kolportowane nielegalnie.":
    "Malgré la censure sont nés un cinéma, un théâtre et une musique connus hors du pays : l'école de cinéma de Łódź, l'affiche polonaise, le jazz. À côté existait le **second circuit** — des livres imprimés et diffusés illégalement.",
  "W którym roku powstała Solidarność?": "En quelle année Solidarność est-elle née ?",
  "1980": "1980",
  "W sierpniu 1980 roku, po strajku w Stoczni Gdańskiej. W 1981 wprowadzono stan wojenny.":
    "En août 1980, après la grève des chantiers navals de Gdańsk. L'état de guerre fut proclamé en 1981.",
  "1989 i III Rzeczpospolita": "1989 et la Troisième République",
  "Okrągły Stół": "La Table ronde",
  "Wiosną **1989** władza i opozycja siadają do rozmów przy **Okrągłym Stole**. Ustalają częściowo wolne wybory: o 35 procent miejsc w Sejmie wolno ubiegać się każdemu, Senat jest wolny w całości.":
    "Au printemps **1989**, le pouvoir et l'opposition s'assoient à la **Table ronde**. Ils conviennent d'élections partiellement libres : 35 pour cent des sièges du Sejm sont ouverts à tous, le Senat l'est entièrement.",
  "4 czerwca 1989": "Le 4 juin 1989",
  "Solidarność zdobywa **wszystkie** mandaty, o które mogła się ubiegać w Sejmie, i **99 na 100** miejsc w Senacie. We wrześniu **Tadeusz Mazowiecki** zostaje pierwszym od czterdziestu lat niekomunistycznym premierem w bloku wschodnim.":
    "Solidarność remporte **tous** les sièges qu'elle pouvait briguer au Sejm et **99 sur 100** au Senat. En septembre, **Tadeusz Mazowiecki** devient le premier chef de gouvernement non communiste du bloc de l'Est depuis quarante ans.",
  "Przemiany lat dziewięćdziesiątych": "Les changements des années quatre-vingt-dix",
  "Gospodarka": "L'économie",
  "Plan Balcerowicza otwiera rynek. Ceny rosną, przedsiębiorstwa upadają, ale półki pustoszeć przestają.":
    "Le plan Balcerowicz ouvre le marché. Les prix montent, des entreprises font faillite, mais les rayons cessent de se vider.",
  "Samorząd": "L'autonomie locale",
  "1990: pierwsze wolne wybory samorządowe i odrodzenie gmin.":
    "1990 : les premières élections locales libres et la renaissance des gminy.",
  "Konstytucja": "La Constitution",
  "1997: nowa ustawa zasadnicza zastępuje poprawianą konstytucję z 1952 roku.":
    "1997 : une nouvelle loi fondamentale remplace la constitution de 1952 tant de fois rapiécée.",
  "Reforma administracyjna": "La réforme administrative",
  "1999: 49 województw zastąpiono 16, przywrócono powiaty.":
    "1999 : les 49 voïvodies sont remplacées par 16, et les powiaty rétablis.",
  "Miejsce w Europie": "La place en Europe",
  "W **1999** Polska wstępuje do **NATO**, w **2004** do **Unii Europejskiej** — po referendum, w którym za opowiedziało się ponad trzy czwarte głosujących. Od **2007** należy do strefy Schengen; waluty euro nie przyjęła.":
    "En **1999**, la Pologne entre dans l'**OTAN**, en **2004** dans l'**Union européenne** — après un référendum où plus des trois quarts des votants se sont prononcés pour. Depuis **2007**, elle appartient à l'espace Schengen ; elle n'a pas adopté l'euro.",
  "W którym roku Polska wstąpiła do Unii Europejskiej?":
    "En quelle année la Pologne est-elle entrée dans l'Union européenne ?",
  "2007": "2007",
  "1 maja 2004. 1999 to wejście do NATO, 2007 to strefa Schengen.":
    "Le 1er mai 2004. 1999 est l'entrée dans l'OTAN, 2007 l'espace Schengen.",
  "Prezydenci III Rzeczypospolitej": "Les présidents de la Troisième République",
  "Pierwszym prezydentem wybranym w wyborach powszechnych został w **1990 roku Lech Wałęsa**. Po nim urząd sprawowali kolejno Aleksander Kwaśniewski, Lech Kaczyński, Bronisław Komorowski i Andrzej Duda.":
    "Le premier président élu au suffrage universel fut, en **1990, Lech Wałęsa**. Après lui, la charge fut exercée successivement par Aleksander Kwaśniewski, Lech Kaczyński, Bronisław Komorowski et Andrzej Duda.",
  "Katastrofa smoleńska": "La catastrophe de Smolensk",
  "**10 kwietnia 2010** w katastrofie samolotu pod Smoleńskiem zginęło 96 osób, w tym prezydent **Lech Kaczyński** z małżonką oraz wielu przedstawicieli władz. Delegacja leciała na obchody rocznicy zbrodni katyńskiej.":
    "Le **10 avril 2010**, l'accident d'avion près de Smolensk fit 96 morts, dont le président **Lech Kaczyński** et son épouse ainsi que de nombreux représentants des autorités. La délégation se rendait aux commémorations du crime de Katyn.",
  "Kto był pierwszym prezydentem wybranym w wyborach powszechnych po 1989 roku?":
    "Qui a été le premier président élu au suffrage universel après 1989 ?",
  "Wojciech Jaruzelski": "Wojciech Jaruzelski",
  "Lech Wałęsa": "Lech Wałęsa",
  "Aleksander Kwaśniewski": "Aleksander Kwaśniewski",
  "Tadeusz Mazowiecki": "Tadeusz Mazowiecki",
  "Lech Wałęsa, w 1990 roku. Jaruzelskiego wybrało Zgromadzenie Narodowe w 1989, Mazowiecki był premierem.":
    "Lech Wałęsa, en 1990. Jaruzelski avait été élu par l'Assemblée nationale en 1989, Mazowiecki était chef du gouvernement.",
  "Geografia i regiony": "Géographie et régions",
  "Geografia, gospodarka i Polska w świecie": "Géographie, économie et la Pologne dans le monde",
  "Położenie i sąsiedzi": "La situation et les voisins",
  "Polska leży w Europie Środkowej i graniczy z **siedmioma** państwami: Niemcami, Czechami, Słowacją, Ukrainą, Białorusią, Litwą i Rosją (obwód kaliningradzki). Od północy ma dostęp do **Morza Bałtyckiego**.":
    "La Pologne est en Europe centrale et a une frontière avec **sept** États : l'Allemagne, la Tchéquie, la Slovaquie, l'Ukraine, la Biélorussie, la Lituanie et la Russie (l'oblast de Kaliningrad). Au nord, elle donne sur la **mer Baltique**.",
  "Ukształtowanie terenu": "Le relief",
  "Kraj opada z południa na północ: **góry** na granicy południowej, **wyżyny** w środku, **niziny** na północy, **pojezierza** i wybrzeże. Najwyższy szczyt to **Rysy** w Tatrach — **2499 m n.p.m.** Powierzchnia kraju to około **312 700 km²**.":
    "Le pays descend du sud au nord : des **montagnes** à la frontière méridionale, des **plateaux** au centre, des **plaines** au nord, des **régions de lacs** et le littoral. Le point culminant est le **Rysy**, dans les Tatras — **2 499 m**. La superficie du pays est d'environ **312 700 km²**.",
  "Rzeki i jeziora": "Fleuves et lacs",
  "Wisła": "La Vistule",
  "Najdłuższa rzeka, 1047 km. Płynie z gór na północ, przez Kraków i Warszawę, do Bałtyku pod Gdańskiem.":
    "Le plus long fleuve, 1 047 km. Il coule des montagnes vers le nord, par Cracovie et Varsovie, jusqu'à la Baltique près de Gdańsk.",
  "Odra": "L'Oder",
  "Druga co do długości, na znacznym odcinku granica z Niemcami.":
    "Le deuxième par la longueur ; sur une grande partie de son cours, il fait frontière avec l'Allemagne.",
  "Mazury": "La Mazurie",
  "Kraina tysiąca jezior na północnym wschodzie; największe z nich to Śniardwy.":
    "Le pays des mille lacs, au nord-est ; le plus grand d'entre eux est le Śniardwy.",
  "Puszcza Białowieska": "La forêt de Białowieża",
  "Ostatni fragment pierwotnej puszczy niżowej Europy, wpisany na listę UNESCO. Żyją tu żubry.":
    "Le dernier fragment de la forêt primaire de plaine d'Europe, inscrit à la liste de l'UNESCO. Des bisons d'Europe y vivent.",
  "Krainy historyczne": "Les régions historiques",
  "Poza podziałem administracyjnym mówi się o krainach: **Mazowsze** wokół Warszawy, **Małopolska** wokół Krakowa, **Wielkopolska** wokół Poznania, **Śląsk** na południowym zachodzie, **Pomorze** nad morzem, **Mazury** i **Podlasie** na wschodzie.":
    "En dehors du découpage administratif, on parle de régions : la **Mazovie** autour de Varsovie, la **Petite-Pologne** autour de Cracovie, la **Grande-Pologne** autour de Poznań, la **Silésie** au sud-ouest, la **Poméranie** au bord de la mer, la **Mazurie** et la **Podlachie** à l'est.",
  "Jak nazywa się najwyższy szczyt Polski?":
    "Comment s'appelle le point culminant de la Pologne ?",
  "Śnieżka": "La Śnieżka",
  "Rysy": "Le Rysy",
  "Giewont": "Le Giewont",
  "Babia Góra": "La Babia Góra",
  "Rysy w Tatrach, 2499 m. Śnieżka to najwyższy szczyt Karkonoszy, Giewont jest niższy i leży nad Zakopanem.":
    "Le Rysy, dans les Tatras, 2 499 m. La Śnieżka est le point culminant des monts des Géants, le Giewont est plus bas et domine Zakopane.",
  "Klimat": "Le climat",
  "Klimat jest **umiarkowany przejściowy**: między morskim z zachodu a kontynentalnym ze wschodu. Dlatego pogoda bywa zmienna, a zimy raz łagodne, raz mroźne. Występują wszystkie **cztery pory roku**.":
    "Le climat est **tempéré de transition** : entre l'océanique venu de l'ouest et le continental venu de l'est. La météo est donc changeante, et les hivers tantôt doux, tantôt rigoureux. Les **quatre saisons** y sont marquées.",
  "Parki narodowe": "Les parcs nationaux",
  "Jest ich **23**. Najstarsze to Białowieski i Pieniński, najwyżej położony — **Tatrzański**. Nad morzem leży Słowiński z ruchomymi wydmami, które przesuwają się o kilka metrów rocznie.":
    "Il y en a **23**. Les plus anciens sont celui de Białowieża et celui des Pieniny, le plus haut est celui des **Tatras**. Au bord de la mer se trouve le parc de Słowiński, avec ses dunes mobiles qui avancent de plusieurs mètres par an.",
  "Która rzeka jest najdłuższa w Polsce?": "Quel est le plus long fleuve de Pologne ?",
  "Warta": "La Warta",
  "Bug": "Le Bug",
  "Wisła, 1047 km. Odra jest druga, Warta jest dopływem Odry.":
    "La Vistule, 1 047 km. L'Oder vient en deuxième, la Warta est un affluent de l'Oder.",
  "Podział administracyjny i miasta": "Le découpage administratif et les villes",
  "Szesnaście województw": "Seize voïvodies",
  "Od reformy z **1999 roku** kraj dzieli się na **16 województw**. Wcześniej było ich 49. Każde ma stolicę — a dwa z nich mają po dwie: w kujawsko-pomorskim sejmik obraduje w Toruniu, a wojewoda urzęduje w Bydgoszczy; w lubuskim podobnie dzielą się Zielona Góra i Gorzów Wielkopolski.":
    "Depuis la réforme de **1999**, le pays se divise en **16 województwa**. Il y en avait 49 auparavant. Chacune a une capitale — et deux d'entre elles en ont deux : en Cujavie-Poméranie, le sejmik siège à Toruń tandis que le voïvode a son bureau à Bydgoszcz ; en Lubusz, Zielona Góra et Gorzów Wielkopolski se partagent de la même façon.",
  "Największe miasta": "Les plus grandes villes",
  "Warszawa": "Varsovie",
  "Stolica od 1596 roku, około 1,8 miliona mieszkańców. Siedziba Sejmu, Senatu, Prezydenta i rządu.":
    "Capitale depuis 1596, environ 1,8 million d'habitants. Siège du Sejm, du Senat, du président et du gouvernement.",
  "Kraków": "Cracovie",
  "Dawna stolica i miejsce koronacji królów. Uniwersytet Jagielloński działa od 1364 roku.":
    "L'ancienne capitale et le lieu du couronnement des rois. L'université Jagellonne fonctionne depuis 1364.",
  "Łódź, Wrocław, Poznań": "Łódź, Wrocław, Poznań",
  "Kolejne co do wielkości. Wrocław leży nad Odrą, Poznań nad Wartą.":
    "Les suivantes par la taille. Wrocław est sur l'Oder, Poznań sur la Warta.",
  "Gdańsk": "Gdańsk",
  "Główny port, miasto porozumień sierpniowych i początku Solidarności.":
    "Le port principal, la ville des accords d'août et des débuts de Solidarność.",
  "Ludność": "La population",
  "W Polsce mieszka około **37–38 milionów** osób. Kraj jest dziś **jednolity narodowościowo** — inaczej niż przed wojną, gdy jedną trzecią mieszkańców stanowiły mniejszości. Uznanych mniejszości narodowych i etnicznych jest **dziewięć i cztery**, a językiem regionalnym jest **kaszubski**.":
    "La Pologne compte environ **37 à 38 millions** d'habitants. Le pays est aujourd'hui **homogène du point de vue national** — autrement qu'avant la guerre, où un tiers des habitants appartenait à une minorité. On reconnaît **neuf** minorités nationales et **quatre** minorités ethniques, et le **cachoube** est langue régionale.",
  "Stolicą Polski nie zawsze była Warszawa. Najpierw było **Gniezno**, potem przez pół tysiąclecia **Kraków**; przeniesienie dworu do Warszawy nastąpiło za Zygmunta III Wazy pod koniec XVI wieku.":
    "Varsovie n'a pas toujours été la capitale. Ce fut d'abord **Gniezno**, puis pendant un demi-millénaire **Cracovie** ; le transfert de la cour à Varsovie eut lieu sous Sigismond III Vasa, à la fin du XVIe siècle.",
  "Ile województw ma Polska?": "Combien de voïvodies la Pologne compte-t-elle ?",
  "24": "24",
  "49": "49",
  "16 od reformy z 1999 roku. Wcześniej było 49.":
    "16 depuis la réforme de 1999. Il y en avait 49 auparavant.",
  "Zabytki na liście UNESCO": "Les monuments inscrits à l'UNESCO",
  "Historyczne centrum, wpisane w 1978 roku wśród pierwszych obiektów na świecie.":
    "Le centre historique, inscrit en 1978 parmi les tout premiers sites au monde.",
  "Wieliczka": "Wieliczka",
  "Kopalnia soli czynna od średniowiecza, z kaplicami wykutymi w solnej skale.":
    "Une mine de sel exploitée depuis le Moyen Âge, avec des chapelles taillées dans la roche de sel.",
  "Starówka odbudowana po wojnie — wpisana właśnie za tę odbudowę.":
    "La vieille ville reconstruite après la guerre — inscrite précisément pour cette reconstruction.",
  "Auschwitz-Birkenau": "Auschwitz-Birkenau",
  "Miejsce pamięci, zachowane jako świadectwo.":
    "Un lieu de mémoire, conservé comme témoignage.",
  "Miasta wojewódzkie": "Les chefs-lieux de voïvodie",
  "Stolicami województw są między innymi Warszawa, Kraków, Łódź, Wrocław, Poznań, Gdańsk, Szczecin, Lublin, Białystok, Katowice, Rzeszów, Kielce, Olsztyn i Opole.":
    "Les capitales de voïvodie sont entre autres Varsovie, Cracovie, Łódź, Wrocław, Poznań, Gdańsk, Szczecin, Lublin, Białystok, Katowice, Rzeszów, Kielce, Olsztyn et Opole.",
  "Które miasto było stolicą Polski przed Warszawą?":
    "Quelle ville fut la capitale de la Pologne avant Varsovie ?",
  "Poznań": "Poznań",
  "Wrocław": "Wrocław",
  "Kraków, przez blisko pięćset lat. Jeszcze wcześniej stolicą było Gniezno.":
    "Cracovie, pendant près de cinq cents ans. Plus tôt encore, la capitale était Gniezno.",
  "Gospodarka i praca": "L'économie et le travail",
  "Waluta": "La monnaie",
  "Walutą jest **złoty (PLN)**, dzielony na 100 groszy. Polska należy do Unii Europejskiej, ale **nie przyjęła euro** — zobowiązała się do tego w traktacie akcesyjnym, bez wyznaczonej daty. Pieniądz emituje **Narodowy Bank Polski**.":
    "La monnaie est le **złoty (PLN)**, divisé en 100 groszy. La Pologne appartient à l'Union européenne mais **n'a pas adopté l'euro** — elle s'y est engagée dans le traité d'adhésion, sans date fixée. La **Banque nationale de Pologne** émet la monnaie.",
  "Praca": "Le travail",
  "Umowa o pracę": "Le contrat de travail",
  "Daje urlop, ochronę przed zwolnieniem i składki. Obok niej działają umowy zlecenia i o dzieło.":
    "Il donne des congés, une protection contre le licenciement et des cotisations. À côté existent le contrat de mission et le contrat d'ouvrage.",
  "Płaca minimalna": "Le salaire minimum",
  "Ustalana co roku rozporządzeniem Rady Ministrów, obowiązuje wszystkich pracowników.":
    "Fixé chaque année par un règlement du Conseil des ministres, il vaut pour tous les salariés.",
  "Czas pracy": "Le temps de travail",
  "Zasadniczo 8 godzin dziennie i 40 tygodniowo, przeciętnie w przyjętym okresie rozliczeniowym.":
    "En principe 8 heures par jour et 40 par semaine, en moyenne sur la période de référence retenue.",
  "Urlop": "Les congés",
  "20 dni przy stażu poniżej 10 lat, 26 dni powyżej. Nauka wlicza się do stażu.":
    "20 jours en dessous de 10 ans d'ancienneté, 26 au-delà. Les études comptent dans l'ancienneté.",
  "Podatki i składki": "Impôts et cotisations",
  "Podatek dochodowy od osób fizycznych (**PIT**) jest progresywny. Do tego dochodzą składki na **ZUS** — emerytalna, rentowa, chorobowa i wypadkowa — oraz składka zdrowotna na **NFZ**. Podstawowa stawka **VAT** wynosi 23 procent, na żywność i książki jest niższa.":
    "L'impôt sur le revenu des personnes physiques (**PIT**) est progressif. S'y ajoutent les cotisations à la **ZUS** — retraite, invalidité, maladie et accidents — ainsi que la cotisation santé au **NFZ**. Le taux normal de **TVA** est de 23 pour cent ; il est plus bas sur l'alimentation et les livres.",
  "Czym Polska żyje": "De quoi vit la Pologne",
  "Gospodarka opiera się na przemyśle, usługach i rolnictwie. Kraj jest dużym producentem żywności, mebli, sprzętu AGD i części samochodowych, a od lat dziewięćdziesiątych rośnie w nim sektor informatyczny i usług dla biznesu.":
    "L'économie repose sur l'industrie, les services et l'agriculture. Le pays est un grand producteur de denrées alimentaires, de meubles, d'électroménager et de pièces automobiles, et depuis les années quatre-vingt-dix le secteur informatique et les services aux entreprises y progressent.",
  "Jaka jest waluta Polski?": "Quelle est la monnaie de la Pologne ?",
  "Euro": "L'euro",
  "Korona": "La couronne",
  "Marka": "Le mark",
  "Złoty, dzielony na 100 groszy. Polska jest w Unii Europejskiej, ale euro nie przyjęła.":
    "Le złoty, divisé en 100 groszy. La Pologne est dans l'Union européenne, mais elle n'a pas adopté l'euro.",
  "Zakładanie działalności": "Créer une activité",
  "Jednoosobową działalność gospodarczą rejestruje się w **CEIDG** — bezpłatnie i przez internet. Spółki wpisuje się do **KRS**. Do rozliczeń potrzebny jest numer **NIP**, a przy zatrudnianiu zgłoszenie do ZUS.":
    "L'entreprise individuelle s'enregistre au **CEIDG** — gratuitement et par internet. Les sociétés s'inscrivent au **KRS**. Un numéro **NIP** est nécessaire pour les déclarations, et l'embauche suppose une déclaration à la ZUS.",
  "Emerytura": "La retraite",
  "Wiek emerytalny wynosi **60 lat dla kobiet** i **65 lat dla mężczyzn**. Wysokość świadczenia zależy od sumy odprowadzonych składek i przewidywanej długości życia — im dłużej się pracuje, tym wyższa emerytura.":
    "L'âge de la retraite est de **60 ans pour les femmes** et de **65 ans pour les hommes**. Le montant de la pension dépend du total des cotisations versées et de l'espérance de vie retenue — plus on travaille longtemps, plus la pension est élevée.",
  "Gdzie rejestruje się jednoosobową działalność gospodarczą?":
    "Où enregistre-t-on une entreprise individuelle ?",
  "W CEIDG": "Au CEIDG",
  "W KRS": "Au KRS",
  "W ZUS": "À la ZUS",
  "W urzędzie wojewódzkim": "Au bureau de la voïvodie",
  "W CEIDG, bezpłatnie i przez internet. KRS jest rejestrem spółek.":
    "Au CEIDG, gratuitement et par internet. Le KRS est le registre des sociétés.",
  "Polska w Unii Europejskiej i NATO": "La Pologne dans l'Union européenne et l'OTAN",
  "Dwie daty": "Deux dates",
  "**1999** — wejście do **NATO**, razem z Czechami i Węgrami. **2004** — wejście do **Unii Europejskiej**, razem z dziewięcioma innymi państwami, po referendum, w którym wzięło udział blisko 59 procent uprawnionych, a za opowiedziało się ponad trzy czwarte głosujących.":
    "**1999** — l'entrée dans l'**OTAN**, avec la Tchéquie et la Hongrie. **2004** — l'entrée dans l'**Union européenne**, avec neuf autres États, après un référendum auquel ont pris part près de 59 pour cent des inscrits et où plus des trois quarts des votants se sont prononcés pour.",
  "Co daje członkostwo w Unii": "Ce qu'apporte l'appartenance à l'Union",
  "Swoboda przemieszczania": "La libre circulation",
  "Wolno mieszkać, pracować i studiować w każdym państwie członkowskim.":
    "On peut habiter, travailler et étudier dans n'importe quel État membre.",
  "Schengen": "Schengen",
  "Od 2007 roku granice wewnętrzne przekracza się bez kontroli.":
    "Depuis 2007, on franchit les frontières intérieures sans contrôle.",
  "Fundusze": "Les fonds",
  "Polska jest jednym z największych odbiorców funduszy spójności — drogi, koleje, oczyszczalnie.":
    "La Pologne est l'un des plus grands bénéficiaires des fonds de cohésion — routes, chemins de fer, stations d'épuration.",
  "Parlament Europejski": "Le Parlement européen",
  "Polacy wybierają swoich posłów co pięć lat, w wyborach bezpośrednich.":
    "Les Polonais élisent leurs députés tous les cinq ans, au suffrage direct.",
  "Sąsiedztwo i bezpieczeństwo": "Le voisinage et la sécurité",
  "Polska graniczy z **Ukrainą, Białorusią i Rosją**, więc granica wschodnia kraju jest zarazem zewnętrzną granicą Unii Europejskiej i NATO. Współpracuje też w formatach regionalnych — **Grupa Wyszehradzka** z Czechami, Słowacją i Węgrami oraz **Trójkąt Weimarski** z Niemcami i Francją.":
    "La Pologne a une frontière avec l'**Ukraine, la Biélorussie et la Russie** : sa frontière orientale est donc aussi la frontière extérieure de l'Union européenne et de l'OTAN. Elle coopère aussi dans des formats régionaux — le **groupe de Visegrád** avec la Tchéquie, la Slovaquie et la Hongrie, et le **triangle de Weimar** avec l'Allemagne et la France.",
  "**Polonia** — Polacy i osoby polskiego pochodzenia mieszkające za granicą — liczy według szacunków kilkanaście do dwudziestu milionów osób. Największe skupiska są w Stanach Zjednoczonych, Niemczech i Wielkiej Brytanii.":
    "La **Polonia** — les Polonais et les personnes d'origine polonaise vivant à l'étranger — compte, selon les estimations, de dix à vingt millions de personnes. Les plus grandes concentrations sont aux États-Unis, en Allemagne et au Royaume-Uni.",
  "W którym roku Polska wstąpiła do NATO?":
    "En quelle année la Pologne est-elle entrée dans l'OTAN ?",
  "1999, pięć lat przed wejściem do Unii Europejskiej. 2007 to strefa Schengen.":
    "En 1999, cinq ans avant l'entrée dans l'Union européenne. 2007 est l'espace Schengen.",
  "Prawo europejskie": "Le droit européen",
  "Prawo Unii Europejskiej obowiązuje w Polsce bezpośrednio, a **Trybunał Sprawiedliwości Unii Europejskiej** w Luksemburgu czuwa nad jego stosowaniem. Osobno działa **Europejski Trybunał Praw Człowieka** w Strasburgu, do którego można złożyć skargę po wyczerpaniu drogi krajowej.":
    "Le droit de l'Union européenne s'applique directement en Pologne, et la **Cour de justice de l'Union européenne**, à Luxembourg, veille à son application. Séparément siège la **Cour européenne des droits de l'homme**, à Strasbourg, que l'on peut saisir une fois les voies de recours nationales épuisées.",
  "Pomoc dla Ukrainy": "L'aide à l'Ukraine",
  "Po pełnoskalowej agresji Rosji na Ukrainę w **2022 roku** przez Polskę przeszły miliony uchodźców, a kilkaset tysięcy zostało na dłużej. Był to największy ruch ludności w tej części Europy od czasu II wojny światowej.":
    "Après l'agression russe à grande échelle contre l'Ukraine en **2022**, des millions de réfugiés ont traversé la Pologne, et plusieurs centaines de milliers y sont restés durablement. C'est le plus grand mouvement de population dans cette partie de l'Europe depuis la Seconde Guerre mondiale.",
  "Który trybunał rozpatruje skargi na naruszenie praw człowieka po wyczerpaniu drogi krajowej?":
    "Quelle cour examine les requêtes pour violation des droits de l'homme une fois les voies nationales épuisées ?",
  "Europejski Trybunał Praw Człowieka w Strasburgu":
    "La Cour européenne des droits de l'homme, à Strasbourg",
  "Trybunał w Strasburgu. Ten w Luksemburgu zajmuje się prawem Unii, a nie skargami indywidualnymi tego rodzaju.":
    "La cour de Strasbourg. Celle de Luxembourg s'occupe du droit de l'Union, non de ce genre de requêtes individuelles.",
  "Religia i tradycje": "Religion et traditions",
  "Społeczeństwo i życie codzienne": "La société et la vie quotidienne",
  "Kościół i państwo": "L'Église et l'État",
  "Konstytucja zapewnia **wolność sumienia i wyznania**, a państwo jest **bezstronne** w sprawach przekonań religijnych. Nie ma religii państwowej. Stosunki z Kościołem katolickim reguluje **konkordat** ze Stolicą Apostolską z 1993 roku.":
    "La Constitution garantit la **liberté de conscience et de religion**, et l'État est **impartial** en matière de convictions religieuses. Il n'y a pas de religion d'État. Les rapports avec l'Église catholique sont réglés par le **concordat** conclu avec le Saint-Siège en 1993.",
  "Kto w co wierzy": "Qui croit en quoi",
  "Zdecydowana większość mieszkańców deklaruje wyznanie **rzymskokatolickie**, choć udział praktykujących od lat maleje, zwłaszcza w miastach i wśród młodych. Obecne są też **prawosławie** — najliczniej na Podlasiu — oraz protestantyzm, judaizm i islam, ten ostatni między innymi wśród **Tatarów polskich**, osiadłych tu od stuleci.":
    "Une nette majorité des habitants se déclare de confession **catholique romaine**, même si la part des pratiquants diminue depuis des années, surtout dans les villes et chez les jeunes. Sont présents aussi l'**orthodoxie** — surtout en Podlachie — ainsi que le protestantisme, le judaïsme et l'islam, ce dernier notamment chez les **Tatars polonais**, installés là depuis des siècles.",
  "Jan Paweł II": "Jean-Paul II",
  "Wybór **Karola Wojtyły** na papieża w **1978 roku** i jego pielgrzymki do kraju miały znaczenie wykraczające poza religię: dla wielu badaczy są jednym z warunków tego, co wydarzyło się w 1980 roku.":
    "L'élection de **Karol Wojtyła** comme pape en **1978** et ses pèlerinages dans le pays ont eu une portée qui dépasse la religion : pour bien des chercheurs, ils sont l'une des conditions de ce qui s'est produit en 1980.",
  "Religia w szkole publicznej jest **nieobowiązkowa**. Rodzice albo pełnoletni uczniowie decydują, czy dziecko chodzi na religię, na etykę, czy na żadne z nich.":
    "Le cours de religion à l'école publique n'est **pas obligatoire**. Les parents, ou les élèves majeurs, décident si l'enfant suit la religion, l'éthique, ou aucune des deux.",
  "Jaki jest stosunek państwa polskiego do wyznań według Konstytucji?":
    "Quel est le rapport de l'État polonais aux confessions selon la Constitution ?",
  "Katolicyzm jest religią państwową": "Le catholicisme est religion d'État",
  "Państwo jest bezstronne w sprawach przekonań religijnych":
    "L'État est impartial en matière de convictions religieuses",
  "Wyznawanie religii jest zakazane": "Pratiquer une religion est interdit",
  "Religię wybiera wojewoda": "C'est le voïvode qui choisit la religion",
  "Państwo jest bezstronne, a każdemu przysługuje wolność sumienia i wyznania. Religii państwowej nie ma.":
    "L'État est impartial, et chacun jouit de la liberté de conscience et de religion. Il n'y a pas de religion d'État.",
  "Miejsca pielgrzymek": "Les lieux de pèlerinage",
  "Najważniejszym jest **Jasna Góra** w Częstochowie z obrazem Matki Boskiej Częstochowskiej. Sierpniowe piesze pielgrzymki idą tam z całego kraju, niektóre po kilkanaście dni.":
    "Le plus important est **Jasna Góra**, à Częstochowa, avec l'icône de la Vierge noire. En août, des pèlerinages à pied y montent de tout le pays, certains pendant une bonne dizaine de jours.",
  "Mniejszości wyznaniowe": "Les minorités confessionnelles",
  "Prawosławni najliczniej mieszkają na **Podlasiu**, ewangelicy na **Śląsku Cieszyńskim**. Meczety Tatarów polskich w **Kruszynianach** i **Bohonikach** stoją tam od stuleci.":
    "Les orthodoxes vivent surtout en **Podlachie**, les protestants en **Silésie de Cieszyn**. Les mosquées des Tatars polonais, à **Kruszyniany** et à **Bohoniki**, sont là depuis des siècles.",
  "Gdzie znajduje się najważniejsze sanktuarium pielgrzymkowe w Polsce?":
    "Où se trouve le plus important sanctuaire de pèlerinage de Pologne ?",
  "W Krakowie": "À Cracovie",
  "W Częstochowie": "À Częstochowa",
  "W Gnieźnie": "À Gniezno",
  "W Licheniu": "À Licheń",
  "Jasna Góra w Częstochowie. Gniezno jest siedzibą prymasa, ale nie głównym miejscem pielgrzymek.":
    "Jasna Góra, à Częstochowa. Gniezno est le siège du primat, mais non le principal lieu de pèlerinage.",
  "Święta i kalendarz": "Fêtes et calendrier",
  "Trzy daty wracają najczęściej i najłatwiej je pomylić: 3 maja, 11 listopada i 1 sierpnia. Pierwsza to konstytucja, druga niepodległość, trzecia powstanie.":
    "Trois dates reviennent le plus souvent et se confondent le plus facilement : le 3 mai, le 11 novembre et le 1er août. La première, c'est la constitution ; la deuxième, l'indépendance ; la troisième, l'insurrection.",
  "Święta państwowe": "Les fêtes nationales",
  "3 maja": "Le 3 mai",
  "Święto Konstytucji 3 Maja — rocznica ustawy z 1791 roku. Dzień wolny od pracy.":
    "La fête de la Constitution du 3 Mai — l'anniversaire du texte de 1791. Jour chômé.",
  "11 listopada": "Le 11 novembre",
  "Narodowe Święto Niepodległości — rocznica roku 1918. Dzień wolny od pracy.":
    "La Fête nationale de l'Indépendance — l'anniversaire de 1918. Jour chômé.",
  "1 sierpnia": "Le 1er août",
  "Godzina „W”: o 17.00 syreny w Warszawie upamiętniają Powstanie Warszawskie. Dniem wolnym nie jest.":
    "L'heure W : à 17 heures, les sirènes de Varsovie rappellent l'insurrection de Varsovie. Ce n'est pas un jour chômé.",
  "Święta kościelne wolne od pracy": "Les fêtes religieuses chômées",
  "Wolne są między innymi **Wielkanoc** z poniedziałkiem wielkanocnym, **Boże Ciało**, **15 sierpnia** (Wniebowzięcie, zarazem Święto Wojska Polskiego), **1 listopada** (Wszystkich Świętych) oraz **25 i 26 grudnia**.":
    "Sont chômés entre autres **Pâques** avec le lundi de Pâques, la **Fête-Dieu**, le **15 août** (l'Assomption, en même temps que la fête de l'armée polonaise), le **1er novembre** (la Toussaint) ainsi que les **25 et 26 décembre**.",
  "Zwyczaje": "Les coutumes",
  "Wigilia": "La Wigilia",
  "24 grudnia: dwanaście potraw, opłatek, wolne miejsce przy stole, kolacja po pierwszej gwiazdce.":
    "Le 24 décembre : douze plats, le partage de l'oplatek, une place laissée libre à table, le repas après la première étoile.",
  "Śmigus-dyngus": "Śmigus-dyngus",
  "Poniedziałek wielkanocny, gdy polewa się wodą — zwyczaj starszy niż chrześcijaństwo.":
    "Le lundi de Pâques, où l'on s'asperge d'eau — une coutume plus ancienne que le christianisme.",
  "Andrzejki": "Andrzejki",
  "Wieczór 29 listopada, wróżby z wosku lanego przez ucho od klucza.":
    "La soirée du 29 novembre, avec ses présages tirés de la cire versée par l'anneau d'une clé.",
  "Imieniny": "La fête du prénom",
  "Bywają obchodzone chętniej niż urodziny, zwłaszcza przez starsze pokolenia.":
    "Elle est parfois fêtée plus volontiers que l'anniversaire, surtout par les générations plus âgées.",
  "Co upamiętnia święto 3 maja?": "Que commémore la fête du 3 mai ?",
  "Odzyskanie niepodległości": "Le retour de l'indépendance",
  "Uchwalenie Konstytucji 3 maja 1791 roku": "L'adoption de la Constitution du 3 mai 1791",
  "Wybuch Powstania Warszawskiego": "Le déclenchement de l'insurrection de Varsovie",
  "Wejście do Unii Europejskiej": "L'entrée dans l'Union européenne",
  "Konstytucję z 1791 roku. Niepodległość to 11 listopada, Powstanie Warszawskie to 1 sierpnia.":
    "La Constitution de 1791. L'indépendance, c'est le 11 novembre ; l'insurrection de Varsovie, le 1er août.",
  "Wszystkich Świętych": "La Toussaint",
  "**1 listopada** miliony ludzi jadą na groby bliskich i stawiają znicze. Cmentarze świecą wtedy przez całą noc — to jeden z najbardziej rozpoznawalnych obrazów polskiego roku.":
    "Le **1er novembre**, des millions de gens se rendent sur les tombes de leurs proches et y posent des lanternes. Les cimetières brillent alors toute la nuit — c'est l'une des images les plus reconnaissables de l'année polonaise.",
  "Rok szkolny i wakacje": "L'année scolaire et les vacances",
  "Rok szkolny zaczyna się **1 września** i kończy w drugiej połowie czerwca. Wakacje trwają lipiec i sierpień, ferie zimowe dwa tygodnie, w różnych terminach zależnie od województwa.":
    "L'année scolaire commence le **1er septembre** et s'achève dans la seconde moitié de juin. Les grandes vacances durent juillet et août, les vacances d'hiver deux semaines, à des dates différentes selon la voïvodie.",
  "Co upamiętnia 11 listopada?": "Que commémore le 11 novembre ?",
  "Uchwalenie Konstytucji": "L'adoption de la Constitution",
  "Odzyskanie niepodległości w 1918 roku": "Le retour de l'indépendance en 1918",
  "Wejście do NATO": "L'entrée dans l'OTAN",
  "Odzyskanie niepodległości. Konstytucja to 3 maja, Powstanie Warszawskie 1 sierpnia.":
    "Le retour de l'indépendance. La Constitution, c'est le 3 mai ; l'insurrection de Varsovie, le 1er août.",
  "Edukacja i zdrowie": "Éducation et santé",
  "Droga przez szkołę": "Le chemin de l'école",
  "Dzieci zaczynają od **rocznego przygotowania przedszkolnego** w wieku sześciu lat, potem idzie **ośmioletnia szkoła podstawowa**. Kończy ją **egzamin ósmoklasisty**. Dalej wybiera się **liceum** (4 lata), **technikum** (5 lat) albo **szkołę branżową**.":
    "Les enfants commencent par une **année préparatoire en maternelle** à six ans, puis vient l'**école primaire de huit ans**. Elle s'achève par l'**examen de huitième**. Ensuite on choisit le **lycée général** (4 ans), le **lycée technique** (5 ans) ou l'**école professionnelle**.",
  "Matura i studia": "Le baccalauréat et les études",
  "**Matura** otwiera drogę na studia; wyniki decydują o przyjęciu na uczelnię. Studia dzielą się na **licencjackie**, **magisterskie** i **doktoranckie**. Studia dzienne na uczelniach publicznych są **bezpłatne**.":
    "La **matura** ouvre la voie aux études supérieures ; les résultats décident de l'admission. Les études se divisent en **licence**, **master** et **doctorat**. Les études à temps plein dans les établissements publics sont **gratuites**.",
  "Ochrona zdrowia": "La santé",
  "NFZ": "Le NFZ",
  "Narodowy Fundusz Zdrowia finansuje leczenie ze składek. Ubezpieczony leczy się bezpłatnie.":
    "Le Fonds national de santé finance les soins par les cotisations. L'assuré se fait soigner gratuitement.",
  "Lekarz rodzinny": "Le médecin de famille",
  "Pierwszy kontakt; kieruje do specjalisty i prowadzi dokumentację.":
    "Le premier contact ; il oriente vers le spécialiste et tient le dossier.",
  "Numer 112": "Le numéro 112",
  "Jeden numer alarmowy do pogotowia, straży i policji, w całej Unii Europejskiej.":
    "Un seul numéro d'urgence pour le SAMU, les pompiers et la police, dans toute l'Union européenne.",
  "PESEL": "Le PESEL",
  "Jedenastocyfrowy numer identyfikacyjny; potrzebny u lekarza, w urzędzie i w banku.":
    "Un numéro d'identification à onze chiffres ; il faut le donner chez le médecin, à l'administration et à la banque.",
  "Numer **PESEL** zawiera datę urodzenia i płeć: przedostatnia cyfra parzysta oznacza kobietę, nieparzysta mężczyznę.":
    "Le numéro **PESEL** contient la date de naissance et le sexe : l'avant-dernier chiffre pair désigne une femme, impair un homme.",
  "Ile lat trwa w Polsce szkoła podstawowa?":
    "Combien d'années dure l'école primaire en Pologne ?",
  "8 lat": "8 ans",
  "9 lat": "9 ans",
  "12 lat": "12 ans",
  "Osiem lat, zakończone egzaminem ósmoklasisty. Liceum trwa cztery lata, technikum pięć.":
    "Huit ans, conclues par l'examen de huitième. Le lycée général dure quatre ans, le lycée technique cinq.",
  "Uczelnie": "Les établissements supérieurs",
  "Najstarszą uczelnią jest **Uniwersytet Jagielloński** (1364), największą **Uniwersytet Warszawski**. Obok uniwersytetów działają politechniki, uczelnie medyczne, ekonomiczne i artystyczne, a także szkoły prywatne.":
    "Le plus ancien est l'**université Jagellonne** (1364), le plus grand l'**université de Varsovie**. À côté des universités existent des écoles polytechniques, médicales, économiques et artistiques, ainsi que des établissements privés.",
  "Apteki i leki": "Pharmacies et médicaments",
  "Leki na receptę wydaje apteka po okazaniu **e-recepty** — kodu przychodzącego SMS-em albo widocznego w aplikacji. Część leków jest refundowana, czyli tańsza dzięki dopłacie NFZ.":
    "La pharmacie délivre les médicaments sur ordonnance contre une **e-ordonnance** — un code reçu par SMS ou visible dans l'application. Une partie des médicaments est remboursée, donc moins chère grâce à la participation du NFZ.",
  "Jaki jest numer alarmowy obowiązujący w Polsce i całej Unii Europejskiej?":
    "Quel est le numéro d'urgence en vigueur en Pologne et dans toute l'Union européenne ?",
  "997": "997",
  "998": "998",
  "112. Dawne numery 997, 998 i 999 nadal działają, ale 112 łączy ze wszystkimi służbami.":
    "Le 112. Les anciens numéros 997, 998 et 999 fonctionnent toujours, mais le 112 relie à tous les services.",
  "Codzienność, media i kultura": "Vie quotidienne, médias et culture",
  "Załatwianie spraw": "Les démarches",
  "Sprawy urzędowe załatwia się w **urzędzie gminy** albo **miasta**, a coraz częściej przez internet: **profil zaufany** i aplikacja **mObywatel** zastępują wizytę i papierowy dowód. Meldunek zgłasza się w urzędzie miejsca zamieszkania.":
    "Les démarches administratives se font à la **mairie de la gmina** ou de la **ville**, et de plus en plus souvent par internet : le **profil de confiance** et l'application **mObywatel** remplacent la visite et la carte d'identité en papier. La domiciliation se déclare à la mairie du lieu de résidence.",
  "Życie codzienne": "La vie de tous les jours",
  "Zakupy w niedziele": "Les courses le dimanche",
  "Handel w niedziele jest ograniczony ustawą; otwarte pozostają między innymi piekarnie, stacje paliw i sklepy prowadzone przez właściciela.":
    "Le commerce dominical est limité par la loi ; restent ouverts entre autres les boulangeries, les stations-service et les magasins tenus par leur propriétaire.",
  "Transport": "Les transports",
  "PKP prowadzi koleje dalekobieżne, w miastach jeżdżą tramwaje i autobusy, bilet kasuje się przy wejściu.":
    "La PKP fait rouler les trains grandes lignes ; dans les villes circulent tramways et autobus, et l'on composte son billet en montant.",
  "Kuchnia": "La cuisine",
  "Pierogi, bigos, żurek, rosół, kotlet schabowy; obiad bywa jedzony wcześniej niż w Europie Zachodniej.":
    "Pierogi, bigos, żurek, bouillon de poule, escalope panée ; le repas de midi se prend souvent plus tôt qu'en Europe de l'Ouest.",
  "Powitanie": "Les salutations",
  "„Dzień dobry” do wszystkich, „cześć” do znajomych. Do osoby starszej mówi się „pan” albo „pani”.":
    "« Dzień dobry » à tout le monde, « cześć » entre gens qui se connaissent. À une personne plus âgée, on dit « pan » ou « pani ».",
  "Media": "Les médias",
  "Działają media **publiczne** — Telewizja Polska i Polskie Radio, finansowane z abonamentu i budżetu — oraz liczne prywatne stacje, gazety i portale. Nad rynkiem czuwa **Krajowa Rada Radiofonii i Telewizji**, wymieniona w Konstytucji.":
    "Il existe des médias **publics** — la Télévision polonaise et Polskie Radio, financés par la redevance et le budget — et de nombreuses stations, journaux et sites privés. Le **Conseil national de la radiodiffusion et de la télévision**, nommé dans la Constitution, veille sur ce marché.",
  "Kultura": "La culture",
  "Polska ma pięcioro noblistów literackich: **Sienkiewicza**, **Reymonta**, **Miłosza**, **Szymborską** i **Tokarczuk**. W muzyce najbardziej znany jest **Chopin**, któremu poświęcony jest konkurs pianistyczny odbywający się w Warszawie co pięć lat.":
    "La Pologne compte cinq prix Nobel de littérature : **Sienkiewicz**, **Reymont**, **Miłosz**, **Szymborska** et **Tokarczuk**. En musique, le plus connu est **Chopin**, à qui est consacré un concours de piano qui se tient à Varsovie tous les cinq ans.",
  "Jak nazywa się aplikacja, w której można nosić dokumenty w telefonie?":
    "Comment s'appelle l'application qui permet de porter ses papiers dans son téléphone ?",
  "ePUAP": "ePUAP",
  "mObywatel": "mObywatel",
  "mBank": "mBank",
  "mObywatel. PESEL to numer identyfikacyjny, a nie aplikacja.":
    "mObywatel. Le PESEL est un numéro d'identification, pas une application.",
  "Mieszkanie": "Le logement",
  "Większość ludzi mieszka **we własnym** mieszkaniu lub domu — udział własności jest jednym z najwyższych w Europie. Przy najmie podpisuje się umowę i zwykle wpłaca kaucję; opłaty za wodę i ogrzewanie często idą osobno, do wspólnoty albo spółdzielni.":
    "La plupart des gens habitent un logement ou une maison **dont ils sont propriétaires** — la part de la propriété est l'une des plus élevées d'Europe. En location, on signe un contrat et l'on verse en général une caution ; l'eau et le chauffage se paient souvent à part, à la copropriété ou à la coopérative.",
  "Najpopularniejsze są **piłka nożna** i **siatkówka**; reprezentacja siatkarzy należy do najlepszych na świecie. Zimą kraj ogląda **skoki narciarskie**, a raz w roku ulicami miast biegną tysiące uczestników maratonów.":
    "Les sports les plus populaires sont le **football** et le **volley-ball** ; l'équipe nationale de volley est parmi les meilleures du monde. L'hiver, le pays regarde le **saut à ski**, et une fois par an des milliers de coureurs traversent les villes lors des marathons.",
  "Ile osób z Polski otrzymało literacką Nagrodę Nobla?":
    "Combien de personnes venues de Pologne ont reçu le prix Nobel de littérature ?",
  "Dwie": "Deux",
  "Trzy": "Trois",
  "Pięć": "Cinq",
  "Siedem": "Sept",
  "Pięć: Sienkiewicz, Reymont, Miłosz, Szymborska i Tokarczuk.":
    "Cinq : Sienkiewicz, Reymont, Miłosz, Szymborska et Tokarczuk.",
};
