/**
 * Polish for the Vivre en France practice questions.
 *
 * The lesson text of this course has had a Polish table for a while, and the
 * questions of the practice bank had none — so a lesson read in Polish and
 * then asked its questions in French. They arrive in the same stepped session
 * as the course's own quiz blocks, through the same component, so the marker
 * was already there and only the words were missing.
 *
 * Keyed on the FRENCH of frQuestionBank.ts, exactly as it stands there. Every
 * key was extracted from the built module and paired back by position, never
 * retyped: one wrong character and the lookup misses in silence — the marker
 * disappears and the reader is told there is nothing, for a question that was
 * in fact translated.
 *
 * Names of laws and institutions stay French, the way they do in
 * VIVRE_EN_FRANCE_PL: la laïcité, le Sénat, le SMIC, la Marseillaise, le
 * Défenseur des droits, la cour d'assises. The exam is sat in French and asks
 * for those exact words. What is translated is everything around them, and a
 * French term is glossed the first time it carries weight.
 *
 * Strings another Polish table already answers are deliberately absent. Every
 * table for one target is spread into a single object, so a second entry for
 * the same key would be a silent collision, and the older table would decide
 * the wording for both. check-pl-bank-translation counts what a reader
 * reaches rather than what this file holds.
 */
export const FR_QUESTION_BANK_PL: Record<string, string> = {
  "Quelle est la devise de la République française ?": "Jaka jest dewiza Republiki Francuskiej?",
  "Unité, Travail, Justice": "Unité, Travail, Justice",
  "Honneur et Patrie": "Honneur et Patrie",
  "Paix, Travail, Progrès": "Paix, Travail, Progrès",
  "Liberté, Égalité, Fraternité. Elle figure à l'article 2 de la Constitution et au fronton des bâtiments publics.":
    "Liberté, Égalité, Fraternité. Stoi w artykule 2 konstytucji i na frontonach budynków publicznych.",
  "Lequel de ces symboles représente la République française ?":
    "Który z tych symboli przedstawia Republikę Francuską?",
  "L'aigle impérial": "Orzeł cesarski",
  "La fleur de lys": "Lilia",
  "Le lion couronné": "Ukoronowany lew",
  "Marianne. La fleur de lys était l'emblème de la monarchie et l'aigle celui de l'Empire.":
    "Marianne. Lilia była godłem monarchii, a orzeł godłem cesarstwa.",
  "Où peut-on voir la devise de la République ?": "Gdzie można zobaczyć dewizę Republiki?",
  "Au fronton des mairies et des écoles": "Na frontonach merostw i szkół",
  "Uniquement sur les passeports": "Wyłącznie na paszportach",
  "Uniquement dans les églises": "Wyłącznie w kościołach",
  "Uniquement au Parlement européen": "Wyłącznie w Parlamencie Europejskim",
  "Sur les bâtiments publics — mairies, écoles, tribunaux — ainsi que sur les pièces de monnaie et les documents officiels.":
    "Na budynkach publicznych — merostwach, szkołach, sądach — a także na monetach i dokumentach urzędowych.",
  "Sur quel document peut-on voir Marianne ?": "Na jakim dokumencie można zobaczyć Marianne?",
  "Sur les timbres-poste": "Na znaczkach pocztowych",
  "Sur les factures d'électricité": "Na rachunkach za prąd",
  "Sur les billets de train": "Na biletach kolejowych",
  "Sur les ordonnances médicales": "Na receptach lekarskich",
  "Sur les timbres, sur les pièces d'euro françaises et sur les documents officiels. Son buste est aussi présent dans les mairies.":
    "Na znaczkach, na francuskich monetach euro i na dokumentach urzędowych. Jej popiersie stoi też w merostwach.",
  "Quel symbole de la République peut-on voir sur les maillots de l'équipe de France de football ?":
    "Który symbol Republiki można zobaczyć na koszulkach francuskiej reprezentacji w piłce nożnej?",
  "Le coq": "Kogut",
  "La tour Eiffel": "Wieża Eiffla",
  "Le coq gaulois. C'est un symbole populaire de la France, plus ancien que la République elle-même.":
    "Kogut galijski. To popularny symbol Francji, starszy niż sama Republika.",
  "Que commémore la fête nationale du 14 juillet ?": "Co upamiętnia święto narodowe 14 lipca?",
  "La prise de la Bastille et la Fête de la Fédération": "Zdobycie Bastylii i Święto Federacji",
  "La fin de la Seconde Guerre mondiale": "Koniec drugiej wojny światowej",
  "La signature du traité de Maastricht": "Podpisanie traktatu z Maastricht",
  "L'abolition de l'esclavage": "Zniesienie niewolnictwa",
  "La prise de la Bastille du 14 juillet 1789 et la Fête de la Fédération du 14 juillet 1790, qui célébrait l'unité de la nation.":
    "Zdobycie Bastylii 14 lipca 1789 roku i Święto Federacji 14 lipca 1790 roku, które celebrowało jedność narodu.",
  "Complétez les paroles de La Marseillaise : « Allons enfants de la Patrie... »":
    "Uzupełnij słowa La Marseillaise: „Allons enfants de la Patrie...”",
  "« ...le jour de gloire est arrivé ! »": "„...le jour de gloire est arrivé !”",
  "« ...la liberté nous appelle ! »": "„...la liberté nous appelle !”",
  "« ...le drapeau nous rassemble ! »": "„...le drapeau nous rassemble !”",
  "« ...la République est en marche ! »": "„...la République est en marche !”",
  "« Allons enfants de la Patrie, le jour de gloire est arrivé ! » Ce sont les deux premiers vers de l'hymne national.":
    "„Allons enfants de la Patrie, le jour de gloire est arrivé !” To dwa pierwsze wersy hymnu narodowego.",
  "Peut-on brûler publiquement un drapeau français ?":
    "Czy można publicznie spalić francuską flagę?",
  "Non, c'est une infraction": "Nie, to wykroczenie",
  "Oui, c'est protégé par la liberté d'expression": "Tak, chroni to wolność wypowiedzi",
  "Oui, lors d'une manifestation déclarée": "Tak, podczas zgłoszonej manifestacji",
  "Oui, si le drapeau vous appartient": "Tak, jeśli flaga należy do ciebie",
  "Non. L'outrage public au drapeau tricolore est une infraction, y compris lors d'une manifestation.":
    "Nie. Publiczna zniewaga trójkolorowej flagi jest wykroczeniem, także podczas manifestacji.",
  "Lequel de ces prénoms évoque un symbole de la République ?":
    "Które z tych imion przywołuje symbol Republiki?",
  "Joséphine": "Joséphine",
  "Adélaïde": "Adélaïde",
  "Clotilde": "Clotilde",
  "Marianne est la figure allégorique de la République. Les trois autres sont des prénoms sans portée symbolique républicaine.":
    "Marianne jest alegoryczną postacią Republiki. Pozostałe trzy to imiona bez republikańskiej wymowy symbolicznej.",
  "Lesquels sont des symboles officiels de la République française ?":
    "Które z nich są oficjalnymi symbolami Republiki Francuskiej?",
  "Le drapeau tricolore, La Marseillaise et la devise":
    "Trójkolorowa flaga, La Marseillaise i dewiza",
  "Le coq, le béret et la baguette": "Kogut, beret i bagietka",
  "La tour Eiffel et le Louvre": "Wieża Eiffla i Luwr",
  "Le lys, la couronne et le sceptre": "Lilia, korona i berło",
  "L'article 2 de la Constitution nomme le drapeau tricolore, l'hymne national et la devise. Le coq est populaire mais pas officiel.":
    "Artykuł 2 konstytucji wymienia trójkolorową flagę, hymn narodowy i dewizę. Kogut jest popularny, ale nie oficjalny.",
  "De quelles couleurs est le drapeau français ?": "Jakich kolorów jest francuska flaga?",
  "Bleu, blanc, rouge": "Niebieski, biały, czerwony",
  "Rouge, jaune, noir": "Czerwony, żółty, czarny",
  "Bleu, jaune, rouge": "Niebieski, żółty, czerwony",
  "Vert, blanc, rouge": "Zielony, biały, czerwony",
  "Bleu, blanc, rouge, en trois bandes verticales. Le bleu et le rouge viennent de Paris, le blanc de la royauté.":
    "Niebieski, biały, czerwony, w trzech pionowych pasach. Niebieski i czerwony pochodzą z Paryża, biały z monarchii.",
  "Qu'est-ce qu'une liberté ?": "Czym jest wolność?",
  "Le droit de faire ce que l'on veut sans nuire à autrui":
    "Prawem do robienia tego, co się chce, nie szkodząc innym",
  "Le droit de faire absolument tout ce que l'on veut":
    "Prawem do robienia absolutnie wszystkiego, co się chce",
  "Une autorisation délivrée par la mairie": "Zezwoleniem wydawanym przez merostwo",
  "Un avantage réservé aux citoyens français":
    "Przywilejem zastrzeżonym dla obywateli francuskich",
  "L'article 4 de la Déclaration de 1789 : « La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. »":
    "Artykuł 4 Deklaracji z 1789 roku: „Wolność polega na możności czynienia wszystkiego, co nie szkodzi drugiemu.”",
  "La liberté d'association est :": "Wolność zrzeszania się jest:",
  "un droit garanti, sans autorisation préalable":
    "prawem gwarantowanym, bez uprzedniego zezwolenia",
  "soumise à l'accord du préfet": "uzależniona od zgody prefekta",
  "réservée aux personnes de nationalité française":
    "zastrzeżona dla osób o francuskiej narodowości",
  "interdite aux salariés": "zakazana pracownikom najemnym",
  "Depuis la loi de 1901, créer une association demande une simple déclaration. Aucune autorisation n'est nécessaire.":
    "Od ustawy z 1901 roku założenie stowarzyszenia wymaga zwykłego zgłoszenia. Żadne zezwolenie nie jest potrzebne.",
  "La liberté d'expression sur les réseaux sociaux en France est :":
    "Wolność wypowiedzi w mediach społecznościowych we Francji jest:",
  "encadrée par la loi, comme partout ailleurs": "ujęta w ramy prawa, jak wszędzie indziej",
  "totale et sans limite": "całkowita i bez granic",
  "interdite aux personnes étrangères": "zakazana osobom z zagranicy",
  "soumise à une autorisation préalable": "uzależniona od uprzedniego zezwolenia",
  "La loi s'applique en ligne comme hors ligne : injure, diffamation, incitation à la haine et apologie du terrorisme restent des délits.":
    "Prawo obowiązuje w sieci tak samo jak poza nią: zniewaga, zniesławienie, podżeganie do nienawiści i pochwalanie terroryzmu pozostają przestępstwami.",
  "En quoi consiste le devoir de solidarité ?": "Na czym polega obowiązek solidarności?",
  "Contribuer à la vie collective et venir en aide aux autres":
    "Na wkładzie w życie zbiorowe i niesieniu pomocy innym",
  "Adhérer à une association humanitaire": "Na wstąpieniu do organizacji humanitarnej",
  "Donner de l'argent à une œuvre chaque année":
    "Na wpłacaniu co roku pieniędzy na cel dobroczynny",
  "Travailler bénévolement pour la commune": "Na nieodpłatnej pracy dla gminy",
  "Il se traduit concrètement par l'impôt, les cotisations sociales et l'obligation de porter secours à une personne en danger.":
    "Wyraża się konkretnie w podatkach, składkach społecznych i obowiązku udzielenia pomocy osobie w niebezpieczeństwie.",
  "Que permet la liberté de circulation ?": "Co umożliwia swoboda przemieszczania się?",
  "Se déplacer et s'installer librement, quitter le pays et y revenir":
    "Swobodne poruszanie się i osiedlanie, opuszczenie kraju i powrót do niego",
  "Circuler sans permis de conduire": "Poruszanie się bez prawa jazdy",
  "Entrer dans tout bâtiment public à toute heure":
    "Wejście do każdego budynku publicznego o każdej porze",
  "Choisir librement sa commune d'imposition":
    "Swobodny wybór gminy, w której się płaci podatki",
  "Elle couvre le déplacement à l'intérieur du territoire, le choix du domicile, la sortie du pays et le retour.":
    "Obejmuje przemieszczanie się wewnątrz kraju, wybór miejsca zamieszkania, wyjazd z kraju i powrót.",
  "Qu'est-ce que la liberté d'expression ?": "Czym jest wolność wypowiedzi?",
  "Le droit d'exprimer ses opinions dans les limites fixées par la loi":
    "Prawem do wyrażania swoich poglądów w granicach wyznaczonych przez ustawę",
  "Le droit de dire n'importe quoi sans conséquence":
    "Prawem do mówienia byle czego bez konsekwencji",
  "Le droit réservé aux journalistes de publier":
    "Prawem do publikowania, zastrzeżonym dla dziennikarzy",
  "Le droit de manifester sans déclaration": "Prawem do manifestowania bez zgłoszenia",
  "C'est un droit fondamental, mais encadré : l'injure, la diffamation et l'incitation à la haine ne sont pas des opinions, ce sont des délits.":
    "To prawo podstawowe, ale ujęte w ramy: zniewaga, zniesławienie i podżeganie do nienawiści nie są poglądami, tylko przestępstwami.",
  "Pour quel motif peut-on limiter la liberté d'expression ?":
    "Z jakiego powodu można ograniczyć wolność wypowiedzi?",
  "La protection de l'ordre public et des droits d'autrui":
    "Ochrona porządku publicznego i praw innych osób",
  "Le désaccord d'un ministre": "Sprzeciw ministra",
  "La demande d'une entreprise privée": "Żądanie prywatnego przedsiębiorstwa",
  "Le vote d'une assemblée de copropriété": "Uchwała zebrania wspólnoty mieszkaniowej",
  "Seule la loi peut limiter cette liberté, et seulement pour protéger l'ordre public, la dignité et les droits des autres.":
    "Tylko ustawa może ograniczyć tę wolność, i tylko po to, by chronić porządek publiczny, godność i prawa innych.",
  "Que garantit la liberté de la presse ?": "Co gwarantuje wolność prasy?",
  "Que les journalistes peuvent informer sans censure préalable":
    "Że dziennikarze mogą informować bez uprzedniej cenzury",
  "Que tous les journaux sont gratuits": "Że wszystkie gazety są bezpłatne",
  "Que l'État choisit les articles publiés": "Że państwo wybiera publikowane artykuły",
  "Que seuls les journalistes peuvent s'exprimer": "Że wypowiadać się mogą tylko dziennikarze",
  "Elle protège le droit d'informer et celui d'être informé. Elle date de la loi de 1881 et n'autorise pas pour autant la diffamation.":
    "Chroni prawo do informowania i prawo do bycia informowanym. Pochodzi z ustawy z 1881 roku i mimo to nie pozwala na zniesławienie.",
  "Quelle situation est une atteinte à la dignité humaine ?":
    "Która sytuacja narusza godność człowieka?",
  "Loger des travailleurs dans un local insalubre en les payant au noir":
    "Zakwaterowanie pracowników w lokalu niezdatnym do mieszkania i płacenie im na czarno",
  "Refuser une augmentation de salaire": "Odmowa podwyżki płacy",
  "Demander une pièce d'identité à un guichet": "Prośba o dokument tożsamości przy okienku",
  "Imposer un uniforme dans une entreprise": "Narzucenie w firmie stroju służbowego",
  "L'exploitation par le logement indigne et le travail dissimulé porte atteinte à la dignité, qui est un principe à valeur constitutionnelle.":
    "Wyzysk przez niegodne mieszkanie i pracę na czarno narusza godność, która jest zasadą o randze konstytucyjnej.",
  "L'article 4 de la Déclaration de 1789 affirme que la liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui. Qu'est-ce que cela signifie ?":
    "Artykuł 4 Deklaracji z 1789 roku głosi, że wolność polega na możności czynienia wszystkiego, co nie szkodzi drugiemu. Co to znaczy?",
  "Ma liberté s'arrête là où commence celle des autres":
    "Moja wolność kończy się tam, gdzie zaczyna się wolność innych",
  "Je peux tout faire tant que personne ne me voit":
    "Mogę robić wszystko, dopóki nikt mnie nie widzi",
  "La liberté n'existe que pour les citoyens": "Wolność istnieje tylko dla obywateli",
  "Seul l'État décide ce qui est permis": "Tylko państwo decyduje, co jest dozwolone",
  "C'est la règle de partage : chacun est libre jusqu'au point où son action porte atteinte à autrui.":
    "To reguła podziału: każdy jest wolny aż do punktu, w którym jego działanie szkodzi drugiemu.",
  "Tous les citoyens français ont-ils une religion ?":
    "Czy wszyscy obywatele francuscy mają jakąś religię?",
  "Non, chacun est libre de croire ou de ne pas croire":
    "Nie, każdy może wierzyć albo nie wierzyć",
  "Oui, la loi impose d'en déclarer une": "Tak, ustawa nakazuje zadeklarować jedną",
  "Oui, mais seulement à la naissance": "Tak, ale tylko przy urodzeniu",
  "Non, mais il faut le signaler à la mairie": "Nie, ale trzeba to zgłosić w merostwie",
  "La liberté de conscience comprend le droit de n'avoir aucune religion. L'État ne tient d'ailleurs aucun registre des croyances.":
    "Wolność sumienia obejmuje prawo do nieposiadania żadnej religii. Państwo zresztą nie prowadzi żadnego rejestru wierzeń.",
  "Qu'est-ce que la laïcité ?": "Czym jest laïcité?",
  "La séparation des institutions publiques et des religions, avec la liberté de conscience":
    "Rozdziałem instytucji publicznych i religii, wraz z wolnością sumienia",
  "L'interdiction de toute religion en France": "Zakazem wszelkiej religii we Francji",
  "L'obligation d'être athée pour travailler dans le public":
    "Obowiązkiem bycia ateistą, żeby pracować w sektorze publicznym",
  "La reconnaissance d'une religion officielle": "Uznaniem religii oficjalnej",
  "Trois idées : liberté de conscience, séparation de l'État et des cultes, égalité de tous quelles que soient leurs croyances.":
    "Trzy myśli: wolność sumienia, rozdział państwa i kultów, równość wszystkich niezależnie od wierzeń.",
  "Que garantit le principe de laïcité ?": "Co gwarantuje zasada laïcité?",
  "La liberté de croire, de ne pas croire et de changer de conviction":
    "Wolność wierzenia, niewierzenia i zmiany przekonań",
  "Que chaque religion reçoit une aide de l'État": "Że każda religia otrzymuje pomoc państwa",
  "Que les religions choisissent les programmes scolaires":
    "Że religie wybierają programy szkolne",
  "Que les fêtes religieuses sont toutes fériées":
    "Że wszystkie święta religijne są dniami wolnymi",
  "Elle garantit la liberté de conscience et l'égalité de traitement, sans que l'État privilégie ou finance un culte.":
    "Gwarantuje wolność sumienia i równe traktowanie, bez tego, by państwo faworyzowało albo finansowało jakiś kult.",
  "Que dit la loi de 1905 ?": "Co mówi ustawa z 1905 roku?",
  "Que la République ne reconnaît ni ne salarie aucun culte":
    "Że Republika nie uznaje ani nie opłaca żadnego kultu",
  "Que les religions sont interdites dans l'espace public":
    "Że religie są zakazane w przestrzeni publicznej",
  "Que l'école devient gratuite": "Że szkoła staje się bezpłatna",
  "Que le clergé est nommé par l'État": "Że duchownych mianuje państwo",
  "Son article 1er garantit la liberté de conscience, son article 2 pose que la République ne reconnaît, ne salarie ni ne subventionne aucun culte.":
    "Jej artykuł 1 gwarantuje wolność sumienia, artykuł 2 stanowi, że Republika żadnego kultu nie uznaje, nie opłaca ani nie dotuje.",
  "Quel texte est considéré comme le texte fondateur de la laïcité ?":
    "Który tekst uchodzi za tekst założycielski laïcité?",
  "La Déclaration de 1789": "Deklaracja z 1789 roku",
  "La loi de séparation des Églises et de l'État du 9 décembre 1905. Les autres textes sont fondateurs, mais d'autre chose.":
    "Ustawa o rozdziale Kościołów i państwa z 9 grudnia 1905 roku. Pozostałe teksty też są założycielskie, ale czegoś innego.",
  "Quel jour célèbre-t-on officiellement la laïcité en France ?":
    "W którym dniu obchodzi się we Francji oficjalnie laïcité?",
  "Le 9 décembre": "9 grudnia",
  "Le 1er mai": "1 maja",
  "Le 11 novembre": "11 listopada",
  "Le 9 décembre, date anniversaire de la loi de 1905.":
    "9 grudnia, w rocznicę ustawy z 1905 roku.",
  "Quelle institution française doit rester neutre en matière de religion ?":
    "Która francuska instytucja musi pozostać neutralna w sprawach religii?",
  "L'État et ses services publics": "Państwo i jego służby publiczne",
  "Les associations culturelles": "Stowarzyszenia kulturalne",
  "Les entreprises privées": "Przedsiębiorstwa prywatne",
  "Les familles": "Rodziny",
  "La neutralité s'impose à l'État et à ses agents. Les usagers, les familles et les associations restent libres.":
    "Neutralność obowiązuje państwo i jego funkcjonariuszy. Petenci, rodziny i stowarzyszenia pozostają wolne.",
  "Quel symbole religieux peut être porté dans une école publique dans le respect de la laïcité ?":
    "Jaki symbol religijny można nosić w szkole publicznej, z poszanowaniem laïcité?",
  "Un signe discret, non ostensible": "Znak dyskretny, nierzucający się w oczy",
  "N'importe quel signe, sans limite": "Dowolny znak, bez ograniczeń",
  "Aucun signe, même invisible": "Żaden znak, nawet niewidoczny",
  "Uniquement les signes chrétiens": "Wyłącznie znaki chrześcijańskie",
  "La loi de 2004 interdit les signes ostensibles à l'école publique. Un bijou discret n'est pas concerné.":
    "Ustawa z 2004 roku zakazuje w szkole publicznej znaków ostentacyjnych. Dyskretna biżuteria jej nie dotyczy.",
  "À l'école, la charte de la laïcité permet de :": "W szkole karta laïcité pozwala:",
  "expliquer aux élèves et aux familles ce que la laïcité permet et interdit":
    "wyjaśnić uczniom i rodzinom, na co laïcité pozwala, a czego zakazuje",
  "choisir un enseignement religieux": "wybrać nauczanie religii",
  "dispenser certains élèves des cours": "zwolnić niektórych uczniów z zajęć",
  "organiser des célébrations religieuses": "organizować uroczystości religijne",
  "Affichée dans les écoles depuis 2013, elle énonce en quinze articles ce que la laïcité signifie au quotidien scolaire.":
    "Wywieszana w szkołach od 2013 roku, w piętnastu artykułach mówi, co laïcité znaczy w szkolnej codzienności.",
  "En France, il est possible pour l'État de financer :": "We Francji państwo może finansować:",
  "l'entretien des édifices religieux construits avant 1905":
    "utrzymanie budynków sakralnych wzniesionych przed 1905 rokiem",
  "le salaire des ministres du culte": "wynagrodzenie duchownych",
  "la construction de nouveaux lieux de culte": "budowę nowych miejsc kultu",
  "les activités de propagande religieuse": "działalność propagandy religijnej",
  "L'État est propriétaire des édifices antérieurs à 1905 et en assure l'entretien. Il ne salarie ni ne subventionne aucun culte.":
    "Państwo jest właścicielem budynków sprzed 1905 roku i zapewnia ich utrzymanie. Żadnego kultu nie opłaca ani nie dotuje.",
  "Quel terme désigne précisément la haine ou les préjugés contre les Juifs ?":
    "Które określenie oznacza dokładnie nienawiść albo uprzedzenia wobec Żydów?",
  "L'antisémitisme": "Antysemityzm",
  "La xénophobie": "Ksenofobia",
  "Le sexisme": "Seksizm",
  "L'anticléricalisme": "Antyklerykalizm",
  "L'antisémitisme. La xénophobie vise les étrangers en général ; l'anticléricalisme s'oppose au pouvoir du clergé.":
    "Antysemityzm. Ksenofobia dotyczy cudzoziemców w ogóle; antyklerykalizm przeciwstawia się władzy duchowieństwa.",
  "Un agent d'accueil d'une mairie peut-il porter un signe religieux visible pendant son service ?":
    "Czy pracownik obsługi w merostwie może podczas służby nosić widoczny znak religijny?",
  "Non : la neutralité s'impose aux agents publics":
    "Nie: neutralność obowiązuje funkcjonariuszy publicznych",
  "Oui, c'est sa liberté de conscience": "Tak, to jego wolność sumienia",
  "Oui, si son responsable l'autorise": "Tak, jeśli zgodzi się przełożony",
  "Oui, en dehors des heures d'ouverture au public":
    "Tak, poza godzinami przyjmowania interesantów",
  "Un agent public représente l'État pendant son service et doit être neutre. L'usager qui vient au guichet, lui, reste libre.":
    "Funkcjonariusz publiczny podczas służby reprezentuje państwo i musi być neutralny. Petent, który przychodzi do okienka, pozostaje wolny.",
  "Qui a le droit de se syndiquer ?": "Kto ma prawo należeć do związku zawodowego?",
  "Tout salarié, quelle que soit sa nationalité": "Każdy pracownik, niezależnie od narodowości",
  "Seuls les salariés français": "Tylko pracownicy francuscy",
  "Seuls les salariés en contrat à durée indéterminée":
    "Tylko pracownicy na umowie na czas nieokreślony",
  "Seuls les cadres": "Tylko kadra kierownicza",
  "La liberté syndicale vaut pour tous les salariés. Nul ne peut être sanctionné pour y avoir adhéré — ni pour ne pas l'avoir fait.":
    "Wolność związkowa obowiązuje wobec wszystkich pracowników. Nikogo nie można ukarać za przystąpienie — ani za nieprzystąpienie.",
  "En France, est-ce possible d'adhérer à un parti politique ?":
    "Czy we Francji można należeć do partii politycznej?",
  "Oui, librement": "Tak, swobodnie",
  "Non, c'est réservé aux élus": "Nie, to zastrzeżone dla osób wybranych",
  "Oui, mais avec l'autorisation de la préfecture": "Tak, ale za zezwoleniem prefektury",
  "Non, les partis sont interdits": "Nie, partie są zakazane",
  "Les partis se forment et exercent leur activité librement. Adhérer, ou n'adhérer à aucun, est un choix personnel.":
    "Partie powstają i prowadzą działalność swobodnie. Przystąpienie albo nieprzystąpienie do żadnej to osobisty wybór.",
  "Une manifestation sur la voie publique doit-elle être signalée ?":
    "Czy manifestację na drodze publicznej trzeba zgłosić?",
  "Oui, elle doit être déclarée en préfecture": "Tak, trzeba ją zgłosić w prefekturze",
  "Non, aucune formalité n'est nécessaire": "Nie, żadne formalności nie są potrzebne",
  "Oui, elle doit être autorisée par le maire": "Tak, musi ją zezwolić mer",
  "Oui, elle doit être approuvée par un juge": "Tak, musi ją zatwierdzić sędzia",
  "Une déclaration préalable, pas une autorisation : l'administration en est informée et peut l'interdire seulement en cas de risque avéré pour l'ordre public.":
    "Uprzednie zgłoszenie, a nie zezwolenie: administracja jest o niej informowana i może jej zakazać tylko przy wykazanym zagrożeniu porządku publicznego.",
  "Un salarié peut-il être licencié parce qu'il a fait grève ?":
    "Czy pracownika można zwolnić za to, że strajkował?",
  "Non, la grève est un droit constitutionnel": "Nie, strajk jest prawem konstytucyjnym",
  "Oui, après deux jours d'absence": "Tak, po dwóch dniach nieobecności",
  "Oui, si l'entreprise perd de l'argent": "Tak, jeśli firma traci pieniądze",
  "Oui, si le syndicat n'est pas représentatif": "Tak, jeśli związek nie jest reprezentatywny",
  "L'exercice normal du droit de grève ne peut justifier ni licenciement ni sanction. Seule une faute lourde commise pendant la grève le pourrait.":
    "Normalne korzystanie z prawa do strajku nie uzasadnia ani zwolnienia, ani kary. Mogłoby to uzasadnić tylko ciężkie przewinienie popełnione podczas strajku.",
  "Qu'est-ce que la liberté d'association permet exactement ?":
    "Na co dokładnie pozwala wolność zrzeszania się?",
  "Créer une association, y adhérer ou n'en rejoindre aucune":
    "Na założenie stowarzyszenia, przystąpienie do niego albo nieprzystąpienie do żadnego",
  "Obliger ses collègues à rejoindre une association":
    "Na zmuszenie kolegów do przystąpienia do stowarzyszenia",
  "Créer une association exemptée d'impôts":
    "Na założenie stowarzyszenia zwolnionego z podatków",
  "Fonder un parti sans déclaration": "Na założenie partii bez zgłoszenia",
  "Elle comprend la liberté négative : personne ne peut être contraint d'adhérer à une association.":
    "Obejmuje wolność negatywną: nikogo nie można zmusić do przystąpienia do stowarzyszenia.",
  "Dans quel cas une liberté peut-elle être restreinte en France ?":
    "W jakim przypadku można we Francji ograniczyć wolność?",
  "Lorsqu'une loi le prévoit pour protéger l'ordre public":
    "Gdy przewiduje to ustawa dla ochrony porządku publicznego",
  "Lorsqu'une majorité de citoyens le souhaite": "Gdy życzy sobie tego większość obywateli",
  "Lorsqu'un ministre le décide": "Gdy zdecyduje o tym minister",
  "Lorsque cela arrange une administration": "Gdy tak jest wygodniej urzędowi",
  "La restriction doit être prévue par la loi, proportionnée et justifiée par l'ordre public — sécurité, santé publique, droits d'autrui.":
    "Ograniczenie musi być przewidziane ustawą, proporcjonalne i uzasadnione porządkiem publicznym — bezpieczeństwem, zdrowiem publicznym, prawami innych.",
  "Un message haineux publié sur un réseau social est :":
    "Nienawistny wpis opublikowany w mediach społecznościowych jest:",
  "une infraction, comme s'il avait été dit en public":
    "przestępstwem, tak jakby padł publicznie",
  "protégé par l'anonymat": "chroniony anonimowością",
  "une simple opinion": "zwykłą opinią",
  "sanctionné uniquement par la plateforme": "karany wyłącznie przez platformę",
  "La loi s'applique en ligne. L'incitation à la haine, l'injure publique et le harcèlement sont punis, l'anonymat n'y change rien.":
    "Prawo obowiązuje w sieci. Podżeganie do nienawiści, zniewaga publiczna i nękanie są karane, a anonimowość nic tu nie zmienia.",
  "Un employeur peut-il interdire à un salarié d'adhérer à un syndicat ?":
    "Czy pracodawca może zakazać pracownikowi wstąpienia do związku zawodowego?",
  "Non, c'est une discrimination interdite": "Nie, to zakazana dyskryminacja",
  "Oui, s'il l'écrit dans le contrat": "Tak, jeśli wpisze to w umowie",
  "Oui, pendant la période d'essai": "Tak, w okresie próbnym",
  "Oui, dans les petites entreprises": "Tak, w małych firmach",
  "Toute mesure prise contre un salarié en raison de son activité syndicale est une discrimination sanctionnée par la loi.":
    "Każde działanie podjęte przeciw pracownikowi z powodu jego działalności związkowej jest dyskryminacją karaną przez prawo.",
  "La liberté de conscience comprend :": "Wolność sumienia obejmuje:",
  "le droit de croire, de ne pas croire et de changer d'avis":
    "prawo do wierzenia, niewierzenia i zmiany zdania",
  "le droit d'imposer sa croyance aux autres": "prawo do narzucania swojej wiary innym",
  "le droit de refuser d'appliquer la loi": "prawo do odmowy stosowania ustawy",
  "le droit d'être dispensé de l'école": "prawo do zwolnienia ze szkoły",
  "Elle porte sur ce que l'on pense et croit, jamais sur le droit de se soustraire à la loi commune.":
    "Dotyczy tego, co się myśli i w co się wierzy, nigdy prawa do uchylania się od wspólnego prawa.",
  "Quelle liberté la loi de 1881 a-t-elle établie ?":
    "Którą wolność ustanowiła ustawa z 1881 roku?",
  "La liberté de la presse": "Wolność prasy",
  "La liberté d'association": "Wolność zrzeszania się",
  "La liberté de culte": "Wolność kultu",
  "La liberté syndicale": "Wolność związkową",
  "La loi du 29 juillet 1881 sur la liberté de la presse. Celle de 1901 concerne les associations, celle de 1905 la laïcité.":
    "Ustawa z 29 lipca 1881 roku o wolności prasy. Ta z 1901 roku dotyczy stowarzyszeń, ta z 1905 laïcité.",
  "Peut-on critiquer publiquement le gouvernement en France ?":
    "Czy we Francji można publicznie krytykować rząd?",
  "Non, c'est un outrage": "Nie, to zniewaga",
  "Oui, mais uniquement par écrit": "Tak, ale wyłącznie na piśmie",
  "Oui, avec l'accord de la préfecture": "Tak, za zgodą prefektury",
  "Critiquer le pouvoir est le cœur même de la liberté d'expression. Les limites concernent l'injure, la diffamation et l'incitation à la haine, pas la critique politique.":
    "Krytyka władzy jest samym rdzeniem wolności wypowiedzi. Granice dotyczą zniewagi, zniesławienia i podżegania do nienawiści, a nie krytyki politycznej.",
  "En France, les impôts permettent de financer les dépenses publiques. Quelle proposition est correcte ?":
    "We Francji podatki pozwalają finansować wydatki publiczne. Które stwierdzenie jest poprawne?",
  "Ils financent les écoles, les hôpitaux, la police et la justice":
    "Finansują szkoły, szpitale, policję i sądy",
  "Ils servent uniquement à payer les fonctionnaires": "Służą wyłącznie do opłacania urzędników",
  "Ils sont versés aux entreprises privées": "Są przekazywane prywatnym przedsiębiorstwom",
  "Ils financent uniquement la défense": "Finansują wyłącznie obronę",
  "L'impôt paie l'ensemble des services publics : éducation, santé, sécurité, justice, transports, aides sociales.":
    "Podatek opłaca całość służb publicznych: edukację, zdrowie, bezpieczeństwo, wymiar sprawiedliwości, transport, świadczenia socjalne.",
  "Est-ce obligatoire de déclarer ses impôts chaque année en France ?":
    "Czy we Francji trzeba co roku składać zeznanie podatkowe?",
  "Oui, même si l'on n'est pas imposable": "Tak, nawet jeśli nie podlega się opodatkowaniu",
  "Non, seulement si l'on gagne beaucoup": "Nie, tylko jeśli dużo się zarabia",
  "Non, l'administration s'en charge seule": "Nie, administracja zajmuje się tym sama",
  "Oui, mais une année sur deux": "Tak, ale co drugi rok",
  "La déclaration est annuelle et obligatoire. Elle sert aussi à ouvrir des droits — aides au logement, bourses, tarifs sociaux.":
    "Zeznanie jest coroczne i obowiązkowe. Służy też otwarciu uprawnień — dodatków mieszkaniowych, stypendiów, taryf socjalnych.",
  "Quel est l'un des devoirs principaux d'un citoyen français ?":
    "Jaki jest jeden z głównych obowiązków obywatela francuskiego?",
  "Payer ses impôts et respecter la loi": "Płacić podatki i przestrzegać prawa",
  "Adhérer à un parti politique": "Należeć do partii politycznej",
  "Assister à toutes les commémorations":
    "Uczestniczyć we wszystkich uroczystościach rocznicowych",
  "Pratiquer une religion": "Praktykować religię",
  "Respecter la loi, payer l'impôt, porter secours et répondre à une convocation comme juré sont des devoirs civiques.":
    "Przestrzeganie prawa, płacenie podatków, niesienie pomocy i stawienie się na wezwanie jako ławnik to obowiązki obywatelskie.",
  "À quoi sert la Sécurité sociale ?": "Czemu służy Sécurité sociale?",
  "À couvrir la maladie, la vieillesse, la famille et les accidents du travail":
    "Pokryciu choroby, starości, spraw rodzinnych i wypadków przy pracy",
  "À financer les partis politiques": "Finansowaniu partii politycznych",
  "À payer les impôts locaux": "Opłaceniu podatków lokalnych",
  "À assurer les biens et les logements": "Ubezpieczeniu mienia i mieszkań",
  "Créée en 1945, elle mutualise les risques de la vie : santé, retraite, famille, accidents du travail.":
    "Utworzona w 1945 roku, uwspólnia ryzyka życia: zdrowie, emeryturę, rodzinę, wypadki przy pracy.",
  "Un service public doit traiter les usagers :":
    "Służba publiczna musi traktować interesantów:",
  "de la même façon, sans distinction d'origine ni de religion":
    "tak samo, bez różnicy pochodzenia ani religii",
  "en priorité selon leur ancienneté dans la commune":
    "w pierwszej kolejności według stażu w gminie",
  "selon le montant de leurs impôts": "według wysokości ich podatków",
  "selon leur nationalité": "według ich obywatelstwa",
  "L'égalité de traitement est un principe du service public, avec la neutralité et la continuité.":
    "Równość traktowania jest zasadą służby publicznej, obok neutralności i ciągłości.",
  "Où s'inscrit-on sur les listes électorales quand on n'a pas d'accès à internet ?":
    "Gdzie zapisuje się na listy wyborcze, gdy nie ma się dostępu do internetu?",
  "À la mairie de son domicile": "W merostwie swojego miejsca zamieszkania",
  "Au tribunal": "W sądzie",
  "En ligne ou, sans internet, directement à la mairie de la commune où l'on habite.":
    "Przez internet albo, bez internetu, bezpośrednio w merostwie gminy, w której się mieszka.",
  "Que se passe-t-il si l'on ne déclare pas ses revenus ?":
    "Co się stanie, jeśli nie zgłosi się swoich dochodów?",
  "On s'expose à des pénalités et, dans les cas graves, à des poursuites":
    "Grożą kary finansowe, a w poważnych przypadkach ściganie",
  "Rien, la déclaration est facultative": "Nic, zeznanie jest dobrowolne",
  "On perd son droit de vote": "Traci się prawo głosu",
  "On est automatiquement exonéré": "Jest się automatycznie zwolnionym",
  "Le défaut de déclaration entraîne des majorations, et la fraude fiscale est un délit.":
    "Brak zeznania pociąga za sobą podwyżki, a oszustwo podatkowe jest przestępstwem.",
  "Qui finance les écoles publiques, les hôpitaux et la police ?":
    "Kto finansuje szkoły publiczne, szpitale i policję?",
  "L'impôt payé par les contribuables": "Podatek płacony przez podatników",
  "Les dons des entreprises": "Darowizny przedsiębiorstw",
  "L'Union européenne seule": "Sama Unia Europejska",
  "Les cotisations des syndicats": "Składki związków zawodowych",
  "L'impôt et les cotisations sociales financent les services publics. C'est la traduction concrète de la fraternité.":
    "Podatki i składki społeczne finansują służby publiczne. To konkretne przełożenie braterstwa.",
  "La continuité du service public signifie :": "Ciągłość służby publicznej oznacza:",
  "qu'il fonctionne sans interruption, avec un service minimum si nécessaire":
    "że działa bez przerwy, w razie potrzeby z usługą minimalną",
  "qu'il ne change jamais ses horaires": "że nigdy nie zmienia godzin otwarcia",
  "que les agents ne peuvent pas faire grève": "że jej pracownicy nie mogą strajkować",
  "que les tarifs restent identiques chaque année": "że taryfy pozostają co roku takie same",
  "La continuité justifie le service minimum dans certains secteurs, mais n'annule pas le droit de grève des agents.":
    "Ciągłość uzasadnia usługę minimalną w niektórych sektorach, ale nie znosi prawa pracowników do strajku.",
  "Quelle démarche ne se fait PAS à la mairie ?": "Której sprawy NIE załatwia się w merostwie?",
  "La demande d'un titre de séjour": "Wniosku o tytuł pobytowy",
  "La déclaration d'une naissance": "Zgłoszenia urodzenia",
  "L'inscription sur les listes électorales": "Wpisu na listy wyborcze",
  "La demande d'une carte d'identité": "Wniosku o dowód tożsamości",
  "Le titre de séjour relève de la préfecture. L'état civil, les listes électorales et les titres d'identité passent par la mairie.":
    "Tytuł pobytowy należy do prefektury. Akta stanu cywilnego, listy wyborcze i dokumenty tożsamości idą przez merostwo.",
  "Les cotisations sociales prélevées sur un salaire servent à :":
    "Składki społeczne potrącane z wynagrodzenia służą:",
  "financer la santé, la retraite et les allocations familiales":
    "finansowaniu zdrowia, emerytur i zasiłków rodzinnych",
  "payer l'impôt sur le revenu": "opłaceniu podatku dochodowego",
  "rémunérer les élus locaux": "wynagradzaniu władz lokalnych",
  "financer les campagnes électorales": "finansowaniu kampanii wyborczych",
  "Elles alimentent la Sécurité sociale. L'impôt sur le revenu, lui, est distinct et se déclare une fois par an.":
    "Zasilają Sécurité sociale. Podatek dochodowy jest natomiast czymś odrębnym i zgłasza się go raz w roku.",
  "Que dit l'article 1er de la Constitution française ?":
    "Co mówi artykuł 1 francuskiej konstytucji?",
  "La France est une République indivisible, laïque, démocratique et sociale":
    "Francja jest Republiką niepodzielną, świecką, demokratyczną i socjalną",
  "La France est une monarchie constitutionnelle": "Francja jest monarchią konstytucyjną",
  "La France est un État fédéral": "Francja jest państwem federalnym",
  "La France reconnaît une religion officielle": "Francja uznaje religię oficjalną",
  "Quatre adjectifs, dans cet ordre : indivisible, laïque, démocratique et sociale. L'article garantit aussi l'égalité devant la loi sans distinction d'origine, de race ou de religion.":
    "Cztery przymiotniki, w tej kolejności: niepodzielna, świecka, demokratyczna i socjalna. Artykuł gwarantuje też równość wobec prawa bez różnicy pochodzenia, rasy czy religii.",
  "Qu'est-ce que l'État de droit ?": "Czym jest państwo prawa?",
  "Un système où tout le monde, y compris l'État, est soumis à la loi":
    "Ustrojem, w którym wszyscy, także państwo, podlegają prawu",
  "Un système où l'État peut modifier la loi à tout moment":
    "Ustrojem, w którym państwo może w każdej chwili zmienić prawo",
  "Un système où seuls les citoyens sont soumis à la loi":
    "Ustrojem, w którym prawu podlegają tylko obywatele",
  "Un système où le président décide seul": "Ustrojem, w którym prezydent decyduje sam",
  "Personne n'est au-dessus des règles. Un citoyen peut faire annuler une décision de l'administration devant un juge.":
    "Nikt nie stoi ponad regułami. Obywatel może doprowadzić przed sędzią do uchylenia decyzji administracji.",
  "En quelle année la Constitution de la Ve République a-t-elle été adoptée ?":
    "W którym roku przyjęto konstytucję V Republiki?",
  "1962": "1962",
  "Le 4 octobre 1958. La IVe République datait de 1946 ; 1962 est l'année du passage à l'élection du président au suffrage universel direct.":
    "4 października 1958. IV Republika pochodziła z 1946 roku; 1962 to rok przejścia do wyboru prezydenta w wyborach powszechnych bezpośrednich.",
  "Quelle est l'une des voies possibles pour modifier la Constitution ?":
    "Jaka jest jedna z możliwych dróg zmiany konstytucji?",
  "Le référendum ou le vote du Congrès à la majorité des trois cinquièmes":
    "Referendum albo głosowanie Kongresu większością trzech piątych",
  "Une décision du Premier ministre": "Decyzja premiera",
  "Un vote du Conseil constitutionnel": "Głosowanie Rady Konstytucyjnej",
  "Un décret du président de la République": "Dekret prezydenta Republiki",
  "Après un vote identique des deux chambres, la révision est approuvée soit par référendum, soit par le Congrès réuni à Versailles.":
    "Po identycznym głosowaniu obu izb rewizję zatwierdza albo referendum, albo Kongres zebrany w Wersalu.",
  "Que signifie le mot « indivisible » dans l'article 1er de la Constitution ?":
    "Co znaczy słowo „niepodzielna” w artykule 1 konstytucji?",
  "Un seul peuple, un seul territoire, une même loi partout":
    "Jeden naród, jedno terytorium, to samo prawo wszędzie",
  "Qu'aucune loi ne peut être abrogée": "Że żadnej ustawy nie można uchylić",
  "Que les régions n'existent pas": "Że regiony nie istnieją",
  "Que le territoire ne peut pas être vendu": "Że terytorium nie można sprzedać",
  "Il n'existe pas de citoyenneté régionale ni de peuple particulier reconnu à l'intérieur de la République.":
    "Nie istnieje obywatelstwo regionalne ani odrębny naród uznany wewnątrz Republiki.",
  "Que signifie « la France est une République sociale » ?":
    "Co znaczy „Francja jest Republiką socjalną”?",
  "L'État garantit une protection : santé, retraite, aide aux plus fragiles":
    "Państwo gwarantuje ochronę: zdrowie, emeryturę, pomoc najsłabszym",
  "Tous les revenus sont identiques": "Wszystkie dochody są jednakowe",
  "L'État possède toutes les entreprises": "Państwo posiada wszystkie przedsiębiorstwa",
  "Les associations remplacent les services publics":
    "Stowarzyszenia zastępują służby publiczne",
  "Le caractère social se traduit par la Sécurité sociale, l'école gratuite et les aides aux personnes en difficulté.":
    "Charakter socjalny przekłada się na Sécurité sociale, bezpłatną szkołę i pomoc osobom w trudnej sytuacji.",
  "Qui a inspiré le principe de la séparation des pouvoirs ?":
    "Kto zainspirował zasadę podziału władz?",
  "Montesquieu": "Monteskiusz",
  "Voltaire": "Wolter",
  "Napoléon Ier": "Napoleon I",
  "Montesquieu, dans De l'esprit des lois (1748). L'idée est de répartir les pouvoirs pour qu'aucun ne devienne absolu.":
    "Monteskiusz, w O duchu praw (1748). Idea polega na rozdzieleniu władz, żeby żadna nie stała się absolutna.",
  "Le pouvoir de faire la loi s'appelle :": "Władza stanowienia prawa nazywa się:",
  "le pouvoir législatif": "władzą ustawodawczą",
  "le pouvoir exécutif": "władzą wykonawczą",
  "le pouvoir judiciaire": "władzą sądowniczą",
  "le pouvoir administratif": "władzą administracyjną",
  "Législatif pour faire la loi, exécutif pour l'appliquer, judiciaire pour juger.":
    "Ustawodawcza do stanowienia prawa, wykonawcza do jego stosowania, sądownicza do sądzenia.",
  "Qui a voulu la Constitution de la Ve République ?": "Kto chciał konstytucji V Republiki?",
  "Le général de Gaulle": "Generał de Gaulle",
  "Georges Pompidou": "Georges Pompidou",
  "Charles de Gaulle, appelé au pouvoir en 1958. La Constitution renforce le rôle du président pour sortir de l'instabilité de la IVe République.":
    "Charles de Gaulle, powołany do władzy w 1958 roku. Konstytucja wzmacnia rolę prezydenta, żeby wyjść z niestabilności IV Republiki.",
  "Un citoyen estime qu'une décision de l'administration est illégale. Que peut-il faire ?":
    "Obywatel uważa, że decyzja administracji jest niezgodna z prawem. Co może zrobić?",
  "Saisir un juge pour en demander l'annulation": "Zwrócić się do sędziego o jej uchylenie",
  "Refuser d'appliquer toute autre décision": "Odmówić stosowania każdej innej decyzji",
  "Cesser de payer ses impôts": "Przestać płacić podatki",
  "Rien : l'administration a toujours raison": "Nic: administracja ma zawsze rację",
  "C'est exactement ce que garantit l'État de droit : l'administration peut être jugée, et sa décision annulée.":
    "To właśnie gwarantuje państwo prawa: administrację można osądzić, a jej decyzję uchylić.",
  "Le Congrès désigne :": "Kongres oznacza:",
  "l'Assemblée nationale et le Sénat réunis à Versailles":
    "Zgromadzenie Narodowe i Sénat zebrane w Wersalu",
  "une réunion du gouvernement": "posiedzenie rządu",
  "un rassemblement des maires de France": "zjazd merów Francji",
  "le Parlement européen": "Parlament Europejski",
  "Le Congrès réunit les deux chambres pour approuver une révision de la Constitution à la majorité des trois cinquièmes.":
    "Kongres łączy obie izby, żeby zatwierdzić rewizję konstytucji większością trzech piątych.",
  "Qui dirige l'action du gouvernement ?": "Kto kieruje działaniem rządu?",
  "Le Premier ministre dirige l'action du gouvernement et fait appliquer les lois. Le président de la République est chef de l'État.":
    "Premier kieruje działaniem rządu i doprowadza do stosowania ustaw. Prezydent Republiki jest głową państwa.",
  "Quel est le rôle du président de la République ?": "Jaka jest rola prezydenta Republiki?",
  "Chef de l'État et chef des armées, il nomme le Premier ministre":
    "Głowa państwa i zwierzchnik sił zbrojnych, mianuje premiera",
  "Il vote les lois à l'Assemblée nationale": "Głosuje nad ustawami w Zgromadzeniu Narodowym",
  "Il juge les crimes les plus graves": "Sądzi najcięższe zbrodnie",
  "Il gère les collèges et les lycées": "Zarządza gimnazjami i liceami",
  "Il préside le Conseil des ministres, promulgue les lois, nomme le Premier ministre et peut dissoudre l'Assemblée nationale.":
    "Przewodniczy Radzie Ministrów, promulguje ustawy, mianuje premiera i może rozwiązać Zgromadzenie Narodowe.",
  "Quel est le rôle du Premier ministre ?": "Jaka jest rola premiera?",
  "Diriger l'action du gouvernement et faire appliquer les lois":
    "Kierować działaniem rządu i doprowadzać do stosowania ustaw",
  "Représenter la France à l'étranger en toutes circonstances":
    "Reprezentować Francję za granicą we wszystkich okolicznościach",
  "Présider le Conseil constitutionnel": "Przewodniczyć Radzie Konstytucyjnej",
  "Élire le président de la République": "Wybierać prezydenta Republiki",
  "Il propose les ministres, coordonne leur action et dispose de l'administration. Il est responsable devant l'Assemblée nationale.":
    "Proponuje ministrów, koordynuje ich działanie i dysponuje administracją. Odpowiada przed Zgromadzeniem Narodowym.",
  "Qui peut se présenter aux élections présidentielles ?":
    "Kto może kandydować w wyborach prezydenckich?",
  "Tout Français de 18 ans jouissant de ses droits civils et politiques, avec 500 parrainages":
    "Każdy Francuz od 18 lat korzystający z praw cywilnych i politycznych, z 500 podpisami poparcia",
  "Tout résident en France depuis dix ans": "Każdy mieszkający we Francji od dziesięciu lat",
  "Seuls les anciens ministres": "Tylko byli ministrowie",
  "Seuls les députés en exercice": "Tylko urzędujący deputowani",
  "Nationalité française, 18 ans révolus, droits civils et politiques, inscription sur les listes électorales et 500 parrainages d'élus.":
    "Obywatelstwo francuskie, ukończone 18 lat, prawa cywilne i polityczne, wpis na listy wyborcze i 500 podpisów poparcia od osób z mandatem.",
  "Quelle condition est obligatoire pour se présenter à l'élection présidentielle ?":
    "Który warunek jest obowiązkowy, żeby kandydować w wyborach prezydenckich?",
  "Être de nationalité française": "Posiadanie obywatelstwa francuskiego",
  "Avoir exercé un mandat local": "Sprawowanie mandatu lokalnego",
  "Avoir fait des études de droit": "Ukończenie studiów prawniczych",
  "Résider à Paris": "Zamieszkanie w Paryżu",
  "La nationalité française est indispensable. Le reste — expérience, diplômes, domicile — n'entre pas en compte.":
    "Obywatelstwo francuskie jest niezbędne. Reszta — doświadczenie, dyplomy, miejsce zamieszkania — się nie liczy.",
  "Le Défenseur des droits est :": "Défenseur des droits jest:",
  "une autorité indépendante que toute personne peut saisir":
    "niezależnym organem, do którego może zwrócić się każdy",
  "un ministre du gouvernement": "ministrem w rządzie",
  "un tribunal spécialisé": "wyspecjalizowanym sądem",
  "un service de la préfecture": "wydziałem prefektury",
  "Son indépendance est ce qui lui permet de s'opposer à une administration. Il n'appartient ni au gouvernement ni à la justice.":
    "Jego niezależność jest tym, co pozwala mu wystąpić przeciw administracji. Nie należy ani do rządu, ani do wymiaru sprawiedliwości.",
  "Le président de la République peut-il être renversé par une motion de censure ?":
    "Czy prezydenta Republiki można obalić wotum nieufności?",
  "Non : la motion de censure vise le gouvernement, pas le président":
    "Nie: wotum nieufności celuje w rząd, a nie w prezydenta",
  "Oui, par l'Assemblée nationale": "Tak, przez Zgromadzenie Narodowe",
  "Oui, par le Sénat": "Tak, przez Sénat",
  "Oui, par le Conseil constitutionnel": "Tak, przez Radę Konstytucyjną",
  "La motion de censure fait tomber le gouvernement. Le président, élu au suffrage universel, n'est pas responsable devant le Parlement.":
    "Wotum nieufności obala rząd. Prezydent, wybrany w wyborach powszechnych, nie odpowiada przed parlamentem.",
  "Qui préside le Conseil des ministres ?": "Kto przewodniczy Radzie Ministrów?",
  "Le ministre de l'Intérieur": "Minister spraw wewnętrznych",
  "Le président de la République, chaque semaine à l'Élysée. Le Premier ministre y assiste et peut le suppléer exceptionnellement.":
    "Prezydent Republiki, co tydzień w Pałacu Elizejskim. Premier w niej uczestniczy i wyjątkowo może go zastąpić.",
  "Les ministres sont :": "Ministrowie są:",
  "nommés par le président sur proposition du Premier ministre":
    "mianowani przez prezydenta na wniosek premiera",
  "élus par les citoyens": "wybierani przez obywateli",
  "désignés par le Conseil constitutionnel": "wyznaczani przez Radę Konstytucyjną",
  "tirés au sort parmi les députés": "losowani spośród deputowanych",
  "Ils ne sont jamais élus à leur fonction ministérielle, même lorsqu'ils sont par ailleurs élus locaux ou nationaux.":
    "Do funkcji ministra nigdy nie są wybierani, nawet jeśli skądinąd mają mandat lokalny albo krajowy.",
  "Combien de parrainages d'élus faut-il pour se présenter à l'élection présidentielle ?":
    "Ile podpisów poparcia od osób z mandatem trzeba, żeby kandydować w wyborach prezydenckich?",
  "100": "100",
  "1 000": "1000",
  "500 parrainages d'élus, provenant d'au moins trente départements ou collectivités différents.":
    "500 podpisów poparcia od osób z mandatem, z co najmniej trzydziestu różnych departamentów albo jednostek.",
  "Qui est le chef des armées en France ?": "Kto jest we Francji zwierzchnikiem sił zbrojnych?",
  "Le ministre de la Défense": "Minister obrony",
  "Le chef d'état-major": "Szef sztabu",
  "Le président de la République est chef des armées et garant de l'indépendance nationale.":
    "Prezydent Republiki jest zwierzchnikiem sił zbrojnych i gwarantem niepodległości narodowej.",
  "Qui vote les lois ?": "Kto uchwala ustawy?",
  "Le Parlement, c'est-à-dire l'Assemblée nationale et le Sénat":
    "Parlament, czyli Zgromadzenie Narodowe i Sénat",
  "Le gouvernement seul": "Sam rząd",
  "Le président de la République seul": "Sam prezydent Republiki",
  "Le Parlement vote la loi. Le gouvernement peut proposer un texte, mais il ne le vote pas.":
    "Ustawę uchwala parlament. Rząd może zaproponować tekst, ale go nie uchwala.",
  "Qui est élu lors des élections législatives ?":
    "Kogo wybiera się w wyborach do Zgromadzenia Narodowego?",
  "Les députés de l'Assemblée nationale": "Deputowanych Zgromadzenia Narodowego",
  "Les sénateurs": "Senatorów",
  "Les conseillers municipaux": "Radnych gminnych",
  "Les législatives élisent les députés. Les sénateurs sont élus au suffrage indirect par des grands électeurs.":
    "W wyborach do Zgromadzenia wybiera się deputowanych. Senatorów wybierają pośrednio wielcy elektorzy.",
  "Quelle est la durée du mandat des sénateurs ?": "Jak długo trwa kadencja senatorów?",
  "Six ans, avec un renouvellement par moitié tous les trois ans. Les députés, eux, sont élus pour cinq ans.":
    "Sześć lat, z odnowieniem połowy składu co trzy lata. Deputowanych wybiera się natomiast na pięć lat.",
  "Comment sont désignés les sénateurs ?": "W jaki sposób wyłania się senatorów?",
  "Au suffrage indirect, par des grands électeurs":
    "W wyborach pośrednich, przez wielkich elektorów",
  "Au suffrage universel direct": "W wyborach powszechnych bezpośrednich",
  "Par nomination du président": "Przez mianowanie przez prezydenta",
  "Par tirage au sort": "Przez losowanie",
  "Des grands électeurs — députés, conseillers régionaux et départementaux, délégués des conseils municipaux — les élisent.":
    "Wybierają ich wielcy elektorzy — deputowani, radni regionalni i departamentalni, delegaci rad gminnych.",
  "En cas de désaccord persistant entre les deux chambres, qui a le dernier mot ?":
    "W razie utrzymującego się braku zgody między izbami, kto ma ostatnie słowo?",
  "L'Assemblée nationale": "Zgromadzenie Narodowe",
  "Le Sénat": "Sénat",
  "Le gouvernement peut donner le dernier mot à l'Assemblée nationale, qui est élue au suffrage universel direct.":
    "Rząd może oddać ostatnie słowo Zgromadzeniu Narodowemu, które pochodzi z wyborów powszechnych bezpośrednich.",
  "Un texte proposé par le gouvernement s'appelle :":
    "Tekst zaproponowany przez rząd nazywa się:",
  "un projet de loi": "projet de loi",
  "une proposition de loi": "proposition de loi",
  "un décret": "décret",
  "une ordonnance": "ordonnance",
  "Projet de loi quand il vient du gouvernement, proposition de loi quand il vient de parlementaires.":
    "Projet de loi, gdy pochodzi od rządu, proposition de loi, gdy pochodzi od parlamentarzystów.",
  "Que fait le président de la République une fois une loi votée ?":
    "Co robi prezydent Republiki, gdy ustawa zostanie uchwalona?",
  "Il la promulgue, puis elle est publiée au Journal officiel":
    "Promulguje ją, a potem ogłasza się ją w Journal officiel",
  "Il la vote une dernière fois": "Głosuje nad nią ostatni raz",
  "Il la transmet au Conseil constitutionnel pour approbation obligatoire":
    "Przekazuje ją Radzie Konstytucyjnej do obowiązkowego zatwierdzenia",
  "Il la fait appliquer par les préfets sans la publier":
    "Każe prefektom ją stosować bez ogłoszenia",
  "La promulgation la rend exécutoire ; la publication au Journal officiel la rend opposable à tous.":
    "Promulgacja czyni ją wykonalną; ogłoszenie w Journal officiel sprawia, że można się na nią powołać wobec każdego.",
  "Combien y a-t-il de députés à l'Assemblée nationale ?":
    "Ilu deputowanych liczy Zgromadzenie Narodowe?",
  "577": "577",
  "348": "348",
  "700": "700",
  "577 députés, un par circonscription. Le Sénat compte un peu plus de trois cents sénateurs.":
    "577 deputowanych, po jednym na okręg. Sénat liczy nieco ponad trzystu senatorów.",
  "Où siège l'Assemblée nationale ?": "Gdzie zasiada Zgromadzenie Narodowe?",
  "Au Palais Bourbon": "W Palais Bourbon",
  "Au Palais du Luxembourg": "W Palais du Luxembourg",
  "À l'Élysée": "W Pałacu Elizejskim",
  "À Matignon": "W Matignon",
  "Palais Bourbon pour l'Assemblée, Palais du Luxembourg pour le Sénat. L'Élysée est la résidence du président, Matignon celle du Premier ministre.":
    "Palais Bourbon dla Zgromadzenia, Palais du Luxembourg dla Senatu. Pałac Elizejski jest rezydencją prezydenta, Matignon premiera.",
  "Laquelle de ces assemblées peut renverser le gouvernement ?":
    "Które z tych zgromadzeń może obalić rząd?",
  "Seule l'Assemblée nationale peut voter une motion de censure et contraindre le gouvernement à démissionner.":
    "Tylko Zgromadzenie Narodowe może uchwalić wotum nieufności i zmusić rząd do dymisji.",
  "Les partis politiques en France :": "Partie polityczne we Francji:",
  "se forment et exercent leur activité librement": "powstają i prowadzą działalność swobodnie",
  "doivent être autorisés par le ministère de l'Intérieur":
    "muszą uzyskać zezwolenie ministerstwa spraw wewnętrznych",
  "sont limités à quatre": "są ograniczone do czterech",
  "sont interdits aux personnes étrangères": "są zakazane osobom z zagranicy",
  "La Constitution garantit leur liberté, dans le respect de la souveraineté nationale et de la démocratie.":
    "Konstytucja gwarantuje im wolność, z poszanowaniem suwerenności narodowej i demokracji.",
  "Être juré d'assises est :": "Bycie ławnikiem w sądzie przysięgłych jest:",
  "obligatoire lorsqu'on est tiré au sort": "obowiązkowe, gdy zostanie się wylosowanym",
  "un choix personnel": "osobistym wyborem",
  "réservé aux juristes": "zastrzeżone dla prawników",
  "un métier rémunéré à plein temps": "płatnym zawodem na pełen etat",
  "C'est un devoir civique. Ne pas répondre à la convocation sans motif légitime est sanctionné par une amende.":
    "To obowiązek obywatelski. Niestawienie się na wezwanie bez uzasadnionej przyczyny jest karane grzywną.",
  "Que doit faire un citoyen appelé à être juré dans un procès d'assises ?":
    "Co musi zrobić obywatel wezwany na ławnika w procesie przed sądem przysięgłych?",
  "Se présenter à la date indiquée": "Stawić się we wskazanym terminie",
  "Refuser s'il n'a pas de formation juridique":
    "Odmówić, jeśli nie ma wykształcenia prawniczego",
  "Demander l'accord de son employeur avant de répondre":
    "Poprosić pracodawcę o zgodę, zanim odpowie",
  "Se faire remplacer par un proche": "Dać się zastąpić bliskiej osobie",
  "Il doit se présenter. L'employeur ne peut pas s'y opposer, et l'absence de formation juridique n'est pas un motif d'exemption.":
    "Musi się stawić. Pracodawca nie może się temu sprzeciwić, a brak wykształcenia prawniczego nie jest powodem zwolnienia.",
  "Suite à une interpellation par la police, il est possible de :":
    "Po zatrzymaniu przez policję można:",
  "garder le silence, être assisté d'un avocat et prévenir un proche":
    "zachować milczenie, korzystać z pomocy adwokata i zawiadomić bliską osobę",
  "quitter les lieux immédiatement": "natychmiast opuścić miejsce",
  "exiger d'être jugé sur place": "żądać osądzenia na miejscu",
  "refuser de décliner son identité sans conséquence":
    "bez konsekwencji odmówić podania tożsamości",
  "Ce sont les droits notifiés au début d'une garde à vue : silence, avocat, examen médical, information d'un proche.":
    "To prawa, o których poucza się na początku zatrzymania: milczenie, adwokat, badanie lekarskie, powiadomienie bliskiej osoby.",
  "Quelle aide permet aux personnes qui ont des difficultés financières d'avoir un avocat ?":
    "Która pomoc pozwala osobom w trudnej sytuacji finansowej mieć adwokata?",
  "L'allocation de solidarité": "Zasiłek solidarnościowy",
  "La prime d'activité": "Premia aktywizacyjna",
  "L'aide juridictionnelle : l'État prend en charge tout ou partie des frais d'avocat et de procédure selon les revenus.":
    "Aide juridictionnelle: państwo pokrywa w całości albo w części koszty adwokata i postępowania, zależnie od dochodów.",
  "Lequel de ces crimes ou délits peut entraîner la privation des droits civils et politiques par un juge ?":
    "Która z tych zbrodni albo występków może pociągnąć za sobą pozbawienie praw cywilnych i politycznych przez sędziego?",
  "Une condamnation pour corruption ou fraude électorale":
    "Skazanie za korupcję albo oszustwo wyborcze",
  "Un excès de vitesse": "Przekroczenie prędkości",
  "Un retard de paiement d'impôts": "Opóźnienie w zapłacie podatków",
  "Un différend avec son propriétaire": "Spór z właścicielem mieszkania",
  "Certaines condamnations, notamment pour atteinte à la probité, permettent au juge de prononcer l'inéligibilité et la privation du droit de vote.":
    "Niektóre skazania, zwłaszcza za naruszenie uczciwości, pozwalają sędziemu orzec pozbawienie biernego prawa wyborczego i prawa głosu.",
  "Une personne est privée de ses droits civils et politiques pendant 5 ans. Pendant cette période :":
    "Osoba zostaje pozbawiona praw cywilnych i politycznych na 5 lat. W tym okresie:",
  "elle ne peut ni voter ni être élue": "nie może ani głosować, ani być wybierana",
  "elle perd la nationalité française": "traci obywatelstwo francuskie",
  "elle ne peut plus travailler": "nie może już pracować",
  "elle n'est plus soumise à la loi": "nie podlega już prawu",
  "La privation touche les droits politiques. La nationalité, le travail et les obligations légales ne sont pas concernés.":
    "Pozbawienie dotyka praw politycznych. Obywatelstwo, praca i obowiązki prawne pozostają nietknięte.",
  "Quel tribunal juge les crimes les plus graves ?": "Który sąd sądzi najcięższe zbrodnie?",
  "La cour d'assises": "Cour d'assises",
  "Le tribunal correctionnel": "Tribunal correctionnel",
  "Le conseil de prud'hommes": "Conseil de prud'hommes",
  "Le tribunal de police": "Tribunal de police",
  "La cour d'assises, avec des jurés citoyens. Le tribunal correctionnel juge les délits, le tribunal de police les contraventions.":
    "Cour d'assises, z ławnikami spośród obywateli. Tribunal correctionnel sądzi występki, tribunal de police wykroczenia.",
  "Qui rend la justice en France ?": "Kto wymierza sprawiedliwość we Francji?",
  "Des magistrats indépendants, au nom du peuple français":
    "Niezawiśli sędziowie, w imieniu narodu francuskiego",
  "Le ministre de la Justice": "Minister sprawiedliwości",
  "Le préfet du département": "Prefekt departamentu",
  "L'indépendance de la justice interdit à l'exécutif de dicter une décision. Les jugements sont rendus au nom du peuple français.":
    "Niezawisłość wymiaru sprawiedliwości zakazuje władzy wykonawczej dyktowania rozstrzygnięć. Wyroki zapadają w imieniu narodu francuskiego.",
  "Le Conseil constitutionnel contrôle également :": "Rada Konstytucyjna kontroluje również:",
  "la régularité des élections nationales et des référendums":
    "prawidłowość wyborów krajowych i referendów",
  "les décisions des tribunaux correctionnels": "orzeczenia sądów poprawczych",
  "les comptes des communes": "rachunki gmin",
  "les contrats de travail": "umowy o pracę",
  "Il veille à la conformité des lois à la Constitution et à la régularité des scrutins nationaux.":
    "Czuwa nad zgodnością ustaw z konstytucją i nad prawidłowością głosowań krajowych.",
  "Un stationnement gênant est :": "Parkowanie utrudniające ruch jest:",
  "une contravention": "wykroczeniem",
  "un délit": "występkiem",
  "un crime": "zbrodnią",
  "une faute civile sans sanction": "przewinieniem cywilnym bez sankcji",
  "C'est l'infraction la plus légère, sanctionnée par une amende.":
    "To naruszenie najlżejsze, karane grzywną.",
  "Peut-on faire appel d'une décision de justice ?": "Czy można odwołać się od orzeczenia sądu?",
  "Oui, la plupart des décisions peuvent être réexaminées":
    "Tak, większość orzeczeń może zostać ponownie zbadana",
  "Non, un jugement est définitif": "Nie, wyrok jest ostateczny",
  "Oui, mais seulement en matière pénale": "Tak, ale tylko w sprawach karnych",
  "Oui, uniquement avec l'accord du procureur": "Tak, wyłącznie za zgodą prokuratora",
  "Le double degré de juridiction permet de faire réexaminer l'affaire par une cour d'appel.":
    "Dwuinstancyjność pozwala oddać sprawę do ponownego zbadania przez sąd apelacyjny.",
  "À quel âge peut-on devenir électeur en France ?":
    "W jakim wieku można we Francji zostać wyborcą?",
  "25 ans": "25 lat",
  "18 ans, à condition d'être français, d'être inscrit sur les listes électorales et de jouir de ses droits civils et politiques.":
    "18 lat, pod warunkiem posiadania obywatelstwa francuskiego, wpisu na listy wyborcze i korzystania z praw cywilnych i politycznych.",
  "L'inscription sur les listes électorales est :": "Wpis na listy wyborcze jest:",
  "obligatoire": "obowiązkowy",
  "facultative": "dobrowolny",
  "réservée aux propriétaires": "zastrzeżony dla właścicieli nieruchomości",
  "automatique pour toute personne résidant en France":
    "automatyczny dla każdej osoby mieszkającej we Francji",
  "Elle est obligatoire. L'inscription est automatique à 18 ans pour les jeunes recensés, mais doit être refaite après un déménagement.":
    "Jest obowiązkowy. Wpis następuje automatycznie w wieku 18 lat u młodych objętych spisem, ale po przeprowadzce trzeba go powtórzyć.",
  "Quelle condition est nécessaire pour voter aux élections présidentielles ?":
    "Jaki warunek jest konieczny, żeby głosować w wyborach prezydenckich?",
  "Avoir la nationalité française": "Posiadanie obywatelstwa francuskiego",
  "Résider en France depuis cinq ans": "Zamieszkiwanie we Francji od pięciu lat",
  "Payer des impôts locaux": "Płacenie podatków lokalnych",
  "Être né en France": "Urodzenie się we Francji",
  "Les présidentielles et les législatives sont réservées aux citoyens français. Les Européens résidant en France votent aux municipales et aux européennes.":
    "Wybory prezydenckie i do Zgromadzenia są zastrzeżone dla obywateli francuskich. Europejczycy mieszkający we Francji głosują w wyborach gminnych i europejskich.",
  "Qui est élu lors des élections municipales ?": "Kogo wybiera się w wyborach gminnych?",
  "Le maire directement": "Mera bezpośrednio",
  "Les députés": "Deputowanych",
  "Les habitants élisent le conseil municipal ; c'est ensuite le conseil qui élit le maire parmi ses membres.":
    "Mieszkańcy wybierają radę gminy; to potem rada wybiera mera spośród swoich członków.",
  "Quelle condition faut-il remplir pour être candidat aux élections municipales ?":
    "Jaki warunek trzeba spełnić, żeby kandydować w wyborach gminnych?",
  "Avoir 18 ans, ses droits civils et politiques, et un lien avec la commune":
    "Mieć 18 lat, prawa cywilne i polityczne oraz związek z gminą",
  "Habiter la commune depuis dix ans": "Mieszkać w gminie od dziesięciu lat",
  "Être propriétaire d'un logement": "Być właścicielem mieszkania",
  "Avoir déjà exercé un mandat": "Sprawować już wcześniej mandat",
  "Il faut être inscrit sur la liste électorale de la commune ou y être contribuable, et jouir de ses droits civils et politiques.":
    "Trzeba być wpisanym na listę wyborczą gminy albo płacić w niej podatki, i korzystać z praw cywilnych i politycznych.",
  "Parmi ces autorités, laquelle est élue ?": "Który z tych organów pochodzi z wyboru?",
  "Le recteur d'académie": "Rektor okręgu szkolnego",
  "Le procureur de la République": "Prokurator Republiki",
  "Le maire est élu par le conseil municipal, lui-même élu. Le préfet, le recteur et le procureur sont nommés.":
    "Mer jest wybierany przez radę gminy, samą pochodzącą z wyboru. Prefekt, rektor i prokurator są mianowani.",
  "Un citoyen d'un autre pays de l'Union européenne résidant en France peut voter :":
    "Obywatel innego kraju Unii Europejskiej mieszkający we Francji może głosować:",
  "aux élections municipales et européennes": "w wyborach gminnych i europejskich",
  "à toutes les élections françaises": "we wszystkich wyborach francuskich",
  "aux élections législatives seulement": "wyłącznie w wyborach do Zgromadzenia Narodowego",
  "à aucune élection en France": "w żadnych wyborach we Francji",
  "La citoyenneté européenne ouvre le vote municipal et européen dans le pays de résidence, pas les scrutins nationaux.":
    "Obywatelstwo europejskie otwiera głosowanie gminne i europejskie w kraju zamieszkania, ale nie wybory krajowe.",
  "Quelles sont les durées du mandat du conseil municipal et du maire ?":
    "Jak długo trwa kadencja rady gminy i mera?",
  "6 ans pour les deux": "6 lat dla obu",
  "5 ans pour les deux": "5 lat dla obu",
  "6 ans pour le conseil, 5 ans pour le maire": "6 lat dla rady, 5 lat dla mera",
  "5 ans pour le conseil, 6 ans pour le maire": "5 lat dla rady, 6 lat dla mera",
  "Six ans dans les deux cas : le maire est élu par le conseil pour la durée du mandat de celui-ci.":
    "Sześć lat w obu przypadkach: mer jest wybierany przez radę na czas jej kadencji.",
  "Qui élit les députés européens ?": "Kto wybiera eurodeputowanych?",
  "Les citoyens des États membres, au suffrage universel direct":
    "Obywatele państw członkowskich, w wyborach powszechnych bezpośrednich",
  "Les gouvernements nationaux": "Rządy krajowe",
  "Les députés nationaux": "Deputowani krajowi",
  "La Commission européenne": "Komisja Europejska",
  "Depuis 1979, les députés européens sont élus directement par les citoyens de chaque État membre.":
    "Od 1979 roku eurodeputowanych wybierają bezpośrednio obywatele każdego państwa członkowskiego.",
  "Le référendum permet aux citoyens :": "Referendum pozwala obywatelom:",
  "de se prononcer directement sur une question posée":
    "wypowiedzieć się bezpośrednio w postawionej kwestii",
  "d'élire un député supplémentaire": "wybrać dodatkowego deputowanego",
  "de destituer un maire": "odwołać mera",
  "d'annuler un jugement": "uchylić wyrok",
  "C'est l'exercice direct de la souveraineté, à côté de l'élection des représentants.":
    "To bezpośrednie sprawowanie suwerenności, obok wyboru przedstawicieli.",
  "Un électeur qui déménage doit :": "Wyborca, który się przeprowadza, musi:",
  "se réinscrire sur les listes électorales de sa nouvelle commune":
    "zapisać się ponownie na listy wyborcze swojej nowej gminy",
  "ne rien faire, l'inscription suit automatiquement":
    "nic nie robić, wpis przenosi się automatycznie",
  "prévenir uniquement la préfecture": "zawiadomić wyłącznie prefekturę",
  "attendre la prochaine élection présidentielle":
    "poczekać do następnych wyborów prezydenckich",
  "L'inscription est liée à la commune. Sans démarche, l'électeur reste inscrit là où il n'habite plus.":
    "Wpis jest związany z gminą. Bez zgłoszenia wyborca pozostaje zapisany tam, gdzie już nie mieszka.",
  "Combien y a-t-il de départements en France ?": "Ile departamentów ma Francja?",
  "95": "95",
  "83": "83",
  "101 départements, dont cinq d'outre-mer. Mayotte est devenue le 101e en 2011.":
    "101 departamentów, w tym pięć zamorskich. Majotta stała się 101. w 2011 roku.",
  "Comment est organisé le découpage administratif de la France ?":
    "Jak zorganizowany jest podział administracyjny Francji?",
  "En communes, départements et régions": "Na gminy, departamenty i regiony",
  "En cantons et provinces": "Na kantony i prowincje",
  "En Länder et arrondissements": "Na Landy i obwody",
  "En comtés et districts": "Na hrabstwa i dystrykty",
  "Trois niveaux de collectivités territoriales : la commune, le département, la région.":
    "Trzy poziomy jednostek samorządu terytorialnego: gmina, departament, region.",
  "Qui représente l'État dans un département ?": "Kto reprezentuje państwo w departamencie?",
  "Le président du conseil départemental": "Przewodniczący rady departamentu",
  "Le député": "Deputowany",
  "Le préfet est nommé par le président de la République et représente l'État. Les autres sont élus.":
    "Prefekta mianuje prezydent Republiki i to on reprezentuje państwo. Pozostali pochodzą z wyboru.",
  "Qui gère les écoles primaires et maternelles publiques ?":
    "Kto zarządza publicznymi szkołami podstawowymi i przedszkolami?",
  "La commune. Le département gère les collèges, la région les lycées.":
    "Gmina. Departament zarządza gimnazjami, region liceami.",
  "Quelle collectivité territoriale est responsable des transports régionaux ?":
    "Która jednostka samorządu odpowiada za transport regionalny?",
  "L'État": "Państwo",
  "La région organise les transports régionaux, dont les TER, ainsi que les lycées et la formation professionnelle.":
    "Region organizuje transport regionalny, w tym pociągi TER, a także licea i kształcenie zawodowe.",
  "Quelles sont les fonctions du maire ?": "Jakie są funkcje mera?",
  "Diriger la commune, célébrer les mariages et tenir l'état civil":
    "Kierowanie gminą, udzielanie ślubów i prowadzenie akt stanu cywilnego",
  "Voter les lois nationales": "Uchwalanie ustaw krajowych",
  "Juger les litiges entre habitants": "Rozstrzyganie sporów między mieszkańcami",
  "Le maire est à la fois exécutif de la commune, officier d'état civil et officier de police judiciaire.":
    "Mer jest zarazem organem wykonawczym gminy, urzędnikiem stanu cywilnego i funkcjonariuszem policji sądowej.",
  "Combien y a-t-il de régions en France métropolitaine ?":
    "Ile regionów ma Francja metropolitalna?",
  "22": "22",
  "13 régions métropolitaines depuis la réforme de 2016. Avec l'outre-mer, la France compte 18 régions.":
    "13 regionów metropolitalnych od reformy z 2016 roku. Wraz z terytoriami zamorskimi Francja liczy 18 regionów.",
  "Quel est le 101e département français depuis 2011 ?":
    "Który departament jest od 2011 roku 101. departamentem Francji?",
  "Saint-Martin": "Saint-Martin",
  "Mayotte, dans l'océan Indien. La Réunion et la Guyane étaient départements depuis 1946.":
    "Majotta, na Oceanie Indyjskim. Reunion i Gujana były departamentami od 1946 roku.",
  "Le conseil municipal est élu pour :": "Radę gminy wybiera się na:",
  "Six ans, comme le maire qu'il élit ensuite en son sein.":
    "Sześć lat, tak jak mera, którego następnie wybiera ze swojego grona.",
  "Un ressortissant d'un autre pays de l'Union européenne peut-il être maire en France ?":
    "Czy obywatel innego kraju Unii Europejskiej może być merem we Francji?",
  "Non, mais il peut être conseiller municipal": "Nie, ale może być radnym gminy",
  "Oui, sans condition": "Tak, bez warunków",
  "Non, il ne peut pas non plus être conseiller": "Nie, nie może też być radnym",
  "Oui, après dix ans de résidence": "Tak, po dziesięciu latach zamieszkania",
  "Il peut siéger au conseil municipal, mais les fonctions de maire et d'adjoint sont réservées aux citoyens français.":
    "Może zasiadać w radzie gminy, ale funkcje mera i jego zastępcy są zastrzeżone dla obywateli francuskich.",
  "Qui gère les lycées publics ?": "Kto zarządza liceami publicznymi?",
  "Le rectorat seul": "Sam rektorat",
  "La région construit et entretient les lycées ; l'État reste responsable des enseignants et des programmes.":
    "Region buduje i utrzymuje licea; państwo odpowiada za nauczycieli i programy.",
  "Où est le siège du Parlement européen ?": "Gdzie jest siedziba Parlamentu Europejskiego?",
  "Strasbourg est le siège officiel du Parlement européen. La Commission siège à Bruxelles, la BCE à Francfort.":
    "Strasburg jest oficjalną siedzibą Parlamentu Europejskiego. Komisja ma siedzibę w Brukseli, EBC we Frankfurcie.",
  "Où est le siège de la Commission européenne ?": "Gdzie jest siedziba Komisji Europejskiej?",
  "Bruxelles. La Commission propose les textes européens et veille à leur application.":
    "Bruksela. Komisja proponuje teksty europejskie i czuwa nad ich stosowaniem.",
  "En quelle année le traité de Maastricht a-t-il été signé ?":
    "W którym roku podpisano traktat z Maastricht?",
  "1992. Il fonde l'Union européenne et crée la citoyenneté européenne.":
    "W 1992. Ustanawia on Unię Europejską i tworzy obywatelstwo europejskie.",
  "En quelle année la citoyenneté européenne a-t-elle été créée ?":
    "W którym roku utworzono obywatelstwo europejskie?",
  "2004": "2004",
  "En 1992, par le traité de Maastricht. Tout ressortissant d'un État membre est aussi citoyen de l'Union.":
    "W 1992 roku, traktatem z Maastricht. Każdy obywatel państwa członkowskiego jest też obywatelem Unii.",
  "Quand est célébrée la journée de l'Europe ?": "Kiedy obchodzi się Dzień Europy?",
  "Le 9 mai": "9 maja",
  "Le 8 mai": "8 maja",
  "Le 9 novembre": "9 listopada",
  "Le 9 mai, anniversaire de la déclaration Schuman de 1950. Le 8 mai est la victoire de 1945.":
    "9 maja, w rocznicę deklaracji Schumana z 1950 roku. 8 maja to zwycięstwo z 1945 roku.",
  "De quoi est composé le drapeau européen ?": "Z czego składa się flaga europejska?",
  "De douze étoiles dorées en cercle sur fond bleu":
    "Z dwunastu złotych gwiazd w kole na niebieskim tle",
  "De vingt-sept étoiles blanches": "Z dwudziestu siedmiu białych gwiazd",
  "De trois bandes bleu, blanc, jaune": "Z trzech pasów: niebieskiego, białego, żółtego",
  "D'une carte de l'Europe sur fond bleu": "Z mapy Europy na niebieskim tle",
  "Douze étoiles, qui ne comptent pas les États membres : le douze est un symbole d'unité et de perfection.":
    "Dwanaście gwiazd, które nie oznaczają państw członkowskich: dwunastka jest symbolem jedności i doskonałości.",
  "Combien d'États font partie de l'Union européenne au 1er janvier 2025 ?":
    "Ile państw należy do Unii Europejskiej 1 stycznia 2025 roku?",
  "28": "28",
  "30": "30",
  "27 depuis le départ du Royaume-Uni en 2020.":
    "27, od wyjścia Zjednoczonego Królestwa w 2020 roku.",
  "Quelle est la première étape de la construction européenne, en 1951 ?":
    "Jaki był pierwszy etap budowy Europy, w 1951 roku?",
  "La Communauté européenne du charbon et de l'acier": "Europejska Wspólnota Węgla i Stali",
  "Le traité de Rome": "Traktat rzymski",
  "L'espace Schengen": "Strefa Schengen",
  "La zone euro": "Strefa euro",
  "La CECA, créée par le traité de Paris de 1951. Le traité de Rome date de 1957.":
    "EWWiS, utworzona traktatem paryskim z 1951 roku. Traktat rzymski pochodzi z 1957.",
  "Qui a composé l'hymne de l'Union européenne ?": "Kto skomponował hymn Unii Europejskiej?",
  "Claude Debussy": "Claude Debussy",
  "L'Ode à la joie est extraite de la Neuvième Symphonie de Beethoven. Elle est jouée sans paroles.":
    "Oda do radości pochodzi z IX symfonii Beethovena. Grana jest bez słów.",
  "Qui siège au Parlement européen ?": "Kto zasiada w Parlamencie Europejskim?",
  "Des députés élus par les citoyens des États membres":
    "Deputowani wybrani przez obywateli państw członkowskich",
  "Les ministres des États membres": "Ministrowie państw członkowskich",
  "Les chefs d'État et de gouvernement": "Szefowie państw i rządów",
  "Des fonctionnaires nommés par la Commission": "Urzędnicy mianowani przez Komisję",
  "Des députés européens élus au suffrage universel direct. Les ministres siègent au Conseil de l'Union.":
    "Eurodeputowani wybrani w wyborach powszechnych bezpośrednich. Ministrowie zasiadają w Radzie Unii.",
  "En quelle année l'euro est-il devenu la monnaie officielle en pièces et en billets en France ?":
    "W którym roku euro stało się we Francji oficjalną walutą w monetach i banknotach?",
  "Les pièces et les billets sont entrés en circulation le 1er janvier 2002. L'euro existait déjà comme monnaie de compte depuis 1999.":
    "Monety i banknoty weszły do obiegu 1 stycznia 2002 roku. Euro istniało już jako waluta rozliczeniowa od 1999.",
  "Quel traité concerne la construction de l'Union européenne ?":
    "Który traktat dotyczy budowy Unii Europejskiej?",
  "Le traité de Maastricht": "Traktat z Maastricht",
  "Le traité de Versailles": "Traktat wersalski",
  "Le traité de Vienne": "Traktat wiedeński",
  "Le traité de Tordesillas": "Traktat z Tordesillas",
  "Maastricht (1992) fonde l'Union. Versailles (1919) mettait fin à la Première Guerre mondiale.":
    "Maastricht (1992) ustanawia Unię. Wersal (1919) kończył pierwszą wojnę światową.",
  "Quel est le texte fondateur établissant les droits et les devoirs de chaque citoyen ?":
    "Który tekst założycielski ustanawia prawa i obowiązki każdego obywatela?",
  "Adoptée le 26 août 1789, elle fait partie du bloc de constitutionnalité et a donc encore aujourd'hui valeur de droit.":
    "Przyjęta 26 sierpnia 1789 roku, należy do bloku konstytucyjności, więc do dziś ma moc prawną.",
  "Laquelle de ces citations est inscrite dans la Déclaration des Droits de l'Homme et du Citoyen de 1789 ?":
    "Który z tych cytatów jest zapisany w Deklaracji Praw Człowieka i Obywatela z 1789 roku?",
  "« Les hommes naissent et demeurent libres et égaux en droits »":
    "„Ludzie rodzą się i pozostają wolni i równi w prawach”",
  "« La propriété, c'est le vol »": "„Własność to kradzież”",
  "« Liberté, Égalité, Fraternité »": "„Liberté, Égalité, Fraternité”",
  "« Travail, Famille, Patrie »": "„Travail, Famille, Patrie”",
  "C'est l'article 1er. La devise républicaine, elle, figure dans la Constitution, pas dans la Déclaration.":
    "To artykuł 1. Dewiza republikańska stoi natomiast w konstytucji, a nie w Deklaracji.",
  "En quelle année la Déclaration des droits de l'homme et du citoyen a-t-elle été adoptée ?":
    "W którym roku przyjęto Deklarację Praw Człowieka i Obywatela?",
  "1791": "1791",
  "Le 26 août 1789, quelques semaines après la prise de la Bastille.":
    "26 sierpnia 1789 roku, kilka tygodni po zdobyciu Bastylii.",
  "Quelle est la différence entre la Déclaration de 1789 et la Déclaration universelle des droits de l'homme ?":
    "Jaka jest różnica między Deklaracją z 1789 roku a Powszechną Deklaracją Praw Człowieka?",
  "La première est française et date de 1789, la seconde est celle de l'ONU et date de 1948":
    "Pierwsza jest francuska i pochodzi z 1789 roku, druga jest deklaracją ONZ i pochodzi z 1948",
  "Ce sont deux noms du même texte": "To dwie nazwy tego samego tekstu",
  "La première date de 1948, la seconde de 1789": "Pierwsza pochodzi z 1948 roku, druga z 1789",
  "La seconde n'a jamais été adoptée": "Druga nigdy nie została przyjęta",
  "Deux textes distincts. La Déclaration universelle a été adoptée par l'ONU en 1948, à Paris.":
    "Dwa odrębne teksty. Powszechną Deklarację przyjęła ONZ w 1948 roku, w Paryżu.",
  "Que signifie « la loi est l'expression de la volonté générale » ?":
    "Co znaczy „ustawa jest wyrazem woli powszechnej”?",
  "La loi est faite par les représentants du peuple et vaut pour tous":
    "Ustawę tworzą przedstawiciele narodu i obowiązuje ona wszystkich",
  "La loi change selon l'opinion du moment": "Ustawa zmienia się według chwilowych nastrojów",
  "La loi ne s'applique qu'aux citoyens": "Ustawa dotyczy tylko obywateli",
  "La loi est décidée par le gouvernement seul": "Ustawę uchwala sam rząd",
  "C'est l'article 6 de la Déclaration : la loi doit être la même pour tous, qu'elle protège ou qu'elle punisse.":
    "To artykuł 6 Deklaracji: ustawa musi być taka sama dla wszystkich, czy chroni, czy karze.",
  "Les droits fondamentaux appartiennent :": "Prawa podstawowe przysługują:",
  "à toute personne, sans condition de nationalité": "każdej osobie, bez warunku obywatelstwa",
  "aux seuls citoyens français": "wyłącznie obywatelom francuskim",
  "aux seuls contribuables": "wyłącznie podatnikom",
  "aux seules personnes majeures": "wyłącznie osobom pełnoletnim",
  "Les droits fondamentaux tiennent à la personne humaine. Les droits politiques, eux, sont liés à la citoyenneté.":
    "Prawa podstawowe wynikają z bycia człowiekiem. Prawa polityczne są natomiast związane z obywatelstwem.",
  "Que garantit l'article 11 de la Déclaration de 1789 ?":
    "Co gwarantuje artykuł 11 Deklaracji z 1789 roku?",
  "La libre communication des pensées et des opinions":
    "Swobodne przekazywanie myśli i poglądów",
  "Le droit au logement": "Prawo do mieszkania",
  "L'article 11 fonde la liberté d'expression, « un des droits les plus précieux de l'homme ».":
    "Artykuł 11 ustanawia wolność wypowiedzi, „jedno z najcenniejszych praw człowieka”.",
  "Que signifie être citoyen d'un État ?": "Co znaczy być obywatelem państwa?",
  "Avoir sa nationalité, avec les droits politiques et les devoirs qui vont avec":
    "Mieć jego obywatelstwo, z prawami politycznymi i obowiązkami, które z nim idą",
  "Y résider depuis plus de cinq ans": "Mieszkać w nim od ponad pięciu lat",
  "Y payer ses impôts": "Płacić w nim podatki",
  "Y être né": "Urodzić się w nim",
  "La citoyenneté ouvre le droit de vote, l'éligibilité et l'accès aux emplois publics, et impose les devoirs civiques.":
    "Obywatelstwo otwiera prawo głosu, bierne prawo wyborcze i dostęp do stanowisk publicznych, i nakłada obowiązki obywatelskie.",
  "Le bloc de constitutionnalité comprend :": "Blok konstytucyjności obejmuje:",
  "la Constitution, la Déclaration de 1789 et le préambule de 1946":
    "konstytucję, Deklarację z 1789 roku i preambułę z 1946 roku",
  "uniquement la Constitution de 1958": "wyłącznie konstytucję z 1958 roku",
  "l'ensemble des lois votées depuis 1958": "ogół ustaw uchwalonych od 1958 roku",
  "les traités européens": "traktaty europejskie",
  "C'est pourquoi un texte de 1789 peut encore aujourd'hui servir à faire annuler une loi.":
    "Dlatego tekst z 1789 roku może i dziś posłużyć do uchylenia ustawy.",
  "Dans quelle ville la Déclaration universelle des droits de l'homme a-t-elle été adoptée en 1948 ?":
    "W którym mieście przyjęto w 1948 roku Powszechną Deklarację Praw Człowieka?",
  "À New York": "W Nowym Jorku",
  "À Genève": "W Genewie",
  "À Paris, au palais de Chaillot, par l'Assemblée générale des Nations unies.":
    "W Paryżu, w Palais de Chaillot, przez Zgromadzenie Ogólne Narodów Zjednoczonych.",
  "La Déclaration de 1789 a-t-elle encore une valeur juridique aujourd'hui ?":
    "Czy Deklaracja z 1789 roku ma dziś jeszcze moc prawną?",
  "Oui, elle fait partie du bloc de constitutionnalité": "Tak, należy do bloku konstytucyjności",
  "Non, c'est un texte purement historique": "Nie, to tekst czysto historyczny",
  "Oui, mais seulement pour les débats parlementaires":
    "Tak, ale tylko w debatach parlamentarnych",
  "Non, elle a été remplacée en 1958": "Nie, została zastąpiona w 1958 roku",
  "Le Conseil constitutionnel s'appuie sur elle pour censurer des lois. Elle est du droit vivant, pas un souvenir.":
    "Rada Konstytucyjna opiera się na niej, uchylając ustawy. To prawo żywe, a nie wspomnienie.",
  "Qu'est-ce que la citoyenneté numérique ?": "Czym jest obywatelstwo cyfrowe?",
  "Appliquer en ligne les mêmes droits et devoirs qu'ailleurs":
    "Stosowaniem w sieci tych samych praw i obowiązków co gdzie indziej",
  "Le droit d'accéder gratuitement à internet": "Prawem do bezpłatnego dostępu do internetu",
  "Le fait de posséder un ordinateur": "Faktem posiadania komputera",
  "Une carte d'identité électronique": "Elektronicznym dowodem tożsamości",
  "S'informer, s'exprimer et participer en ligne, sans harceler, insulter ni diffuser de fausses informations.":
    "Informować się, wypowiadać i uczestniczyć w sieci, bez nękania, znieważania i rozsiewania fałszywych informacji.",
  "Un mineur de 14 ans veut s'inscrire sur un réseau social. Que dit la loi ?":
    "Czternastolatek chce założyć konto w mediach społecznościowych. Co mówi prawo?",
  "Il lui faut l'accord d'un parent": "Potrzebuje zgody rodzica",
  "C'est totalement interdit": "To całkowicie zakazane",
  "Il peut s'inscrire librement": "Może się zapisać swobodnie",
  "Il doit attendre 18 ans": "Musi poczekać do 18 lat",
  "La majorité numérique est fixée à 15 ans. En dessous, l'accord d'un titulaire de l'autorité parentale est requis.":
    "Pełnoletność cyfrową ustalono na 15 lat. Poniżej wymagana jest zgoda osoby sprawującej władzę rodzicielską.",
  "Quel est l'âge de la majorité civile en France ?":
    "W jakim wieku uzyskuje się we Francji pełnoletność cywilną?",
  "À 18 ans on devient juridiquement responsable : on peut signer un contrat, voter et se marier sans autorisation.":
    "W wieku 18 lat staje się prawnie odpowiedzialnym: można podpisać umowę, głosować i zawrzeć małżeństwo bez zezwolenia.",
  "Le droit à la sûreté signifie :": "Prawo do bezpieczeństwa osobistego oznacza:",
  "qu'on ne peut être arrêté que dans les cas et les formes prévus par la loi":
    "że można zostać zatrzymanym tylko w przypadkach i formach przewidzianych ustawą",
  "que l'État doit assurer la sécurité des biens":
    "że państwo musi zapewnić bezpieczeństwo mienia",
  "qu'on a droit à une assurance": "że ma się prawo do ubezpieczenia",
  "qu'on ne peut jamais être placé en garde à vue":
    "że nigdy nie można trafić do aresztu policyjnego",
  "C'est la protection contre l'arbitraire. Toute privation de liberté est encadrée et contrôlée par un juge.":
    "To ochrona przed samowolą. Każde pozbawienie wolności jest ujęte w ramy i kontrolowane przez sędziego.",
  "Une personne étrangère en situation régulière a-t-elle des droits fondamentaux en France ?":
    "Czy cudzoziemiec przebywający legalnie ma we Francji prawa podstawowe?",
  "Oui, les droits fondamentaux valent pour toute personne":
    "Tak, prawa podstawowe obowiązują wobec każdej osoby",
  "Non, ils sont réservés aux Français": "Nie, są zastrzeżone dla Francuzów",
  "Oui, mais seulement après cinq ans de résidence": "Tak, ale dopiero po pięciu latach pobytu",
  "Oui, uniquement le droit de propriété": "Tak, wyłącznie prawo własności",
  "Dignité, sûreté, liberté de conscience, accès à la justice : ces droits tiennent à la personne, pas à la nationalité.":
    "Godność, bezpieczeństwo osobiste, wolność sumienia, dostęp do sądu: te prawa wynikają z bycia osobą, a nie z obywatelstwa.",
  "Le droit d'être élu appartient :": "Bierne prawo wyborcze przysługuje:",
  "aux citoyens jouissant de leurs droits civils et politiques":
    "obywatelom korzystającym ze swoich praw cywilnych i politycznych",
  "à toute personne résidant en France": "każdej osobie mieszkającej we Francji",
  "aux seuls diplômés": "wyłącznie osobom z dyplomem",
  "aux seuls membres d'un parti": "wyłącznie członkom partii",
  "C'est un droit politique lié à la citoyenneté, et un juge peut le retirer par une peine d'inéligibilité.":
    "To prawo polityczne związane z obywatelstwem, a sędzia może je odebrać karą pozbawienia biernego prawa wyborczego.",
  "Le harcèlement en ligne est :": "Nękanie w sieci jest:",
  "un délit puni par la loi": "przestępstwem karanym przez prawo",
  "un comportement seulement sanctionné par les plateformes":
    "zachowaniem karanym tylko przez platformy",
  "autorisé entre adultes consentants": "dozwolone między zgadzającymi się dorosłymi",
  "toléré s'il reste anonyme": "tolerowane, jeśli pozostaje anonimowe",
  "Le harcèlement, y compris en ligne, est un délit. L'anonymat n'empêche ni l'enquête ni la condamnation.":
    "Nękanie, także w sieci, jest przestępstwem. Anonimowość nie przeszkadza ani śledztwu, ani skazaniu.",
  "Le droit à un procès équitable comprend :": "Prawo do rzetelnego procesu obejmuje:",
  "être jugé par un tribunal indépendant et pouvoir se défendre":
    "bycie sądzonym przez niezawisły sąd i możliwość obrony",
  "choisir son juge": "wybór swojego sędziego",
  "être jugé dans la journée": "osądzenie tego samego dnia",
  "refuser de comparaître": "odmowę stawienia się",
  "Indépendance du tribunal, droits de la défense, publicité des débats et possibilité de faire appel.":
    "Niezawisłość sądu, prawa obrony, jawność rozprawy i możliwość apelacji.",
  "Qu'est-ce qui distingue un droit fondamental d'un droit politique ?":
    "Co odróżnia prawo podstawowe od prawa politycznego?",
  "Le droit fondamental vaut pour toute personne, le droit politique pour les citoyens":
    "Prawo podstawowe przysługuje każdej osobie, prawo polityczne obywatelom",
  "Le droit fondamental est facultatif": "Prawo podstawowe jest fakultatywne",
  "Le droit politique est plus ancien": "Prawo polityczne jest starsze",
  "Il n'y a aucune différence": "Nie ma żadnej różnicy",
  "Voter et être élu supposent la citoyenneté ; la dignité et la sûreté ne supposent rien d'autre qu'être une personne.":
    "Głosowanie i kandydowanie zakładają obywatelstwo; godność i bezpieczeństwo osobiste nie zakładają nic poza byciem osobą.",
  "Une administration refuse un service à cause de l'origine d'une personne. C'est :":
    "Urząd odmawia usługi z powodu pochodzenia danej osoby. To:",
  "une discrimination interdite par la loi": "dyskryminacja zakazana przez prawo",
  "une décision de gestion normale": "zwykła decyzja organizacyjna",
  "autorisé si le service est saturé": "dozwolone, jeśli usługa jest przeciążona",
  "une simple erreur sans conséquence": "zwykła pomyłka bez konsekwencji",
  "C'est une discrimination. Le Défenseur des droits peut être saisi gratuitement, et une plainte est possible.":
    "To dyskryminacja. Do Défenseur des droits można zwrócić się bezpłatnie, a złożenie zawiadomienia jest możliwe.",
  "Diffuser une fausse information pour nuire à quelqu'un est :":
    "Rozpowszechnianie fałszywej informacji, żeby komuś zaszkodzić, jest:",
  "sanctionné par la loi": "karane przez prawo",
  "un exercice normal de la liberté d'expression":
    "normalnym korzystaniem z wolności wypowiedzi",
  "autorisé si la source est citée": "dozwolone, jeśli poda się źródło",
  "toléré sur les réseaux sociaux": "tolerowane w mediach społecznościowych",
  "Selon les cas, cela relève de la diffamation, de la dénonciation calomnieuse ou de la diffusion de fausse nouvelle.":
    "Zależnie od przypadku podpada to pod zniesławienie, fałszywe oskarżenie albo rozpowszechnianie fałszywej wiadomości.",
  "Quel comportement est un devoir du citoyen ?": "Które zachowanie jest obowiązkiem obywatela?",
  "Respecter la loi et les valeurs de la République":
    "Przestrzeganie prawa i wartości Republiki",
  "Adhérer à un syndicat": "Wstąpienie do związku zawodowego",
  "Participer à toutes les manifestations": "Udział we wszystkich manifestacjach",
  "Assister à la messe du dimanche": "Uczestnictwo w niedzielnej mszy",
  "Respecter la loi, payer l'impôt, porter secours et répondre à une convocation de juré sont des devoirs.":
    "Przestrzeganie prawa, płacenie podatków, niesienie pomocy i stawienie się na wezwanie ławnika to obowiązki.",
  "Un citoyen voit une personne s'effondrer dans la rue. Que doit-il faire ?":
    "Obywatel widzi, jak osoba osuwa się na ulicy. Co ma zrobić?",
  "Appeler les secours ou porter assistance s'il le peut sans risque":
    "Wezwać pomoc albo udzielić jej, jeśli może to zrobić bez ryzyka",
  "Continuer son chemin, ce n'est pas son affaire": "Iść dalej, to nie jego sprawa",
  "Attendre qu'un professionnel passe": "Poczekać, aż przejdzie ktoś z zawodu",
  "Filmer la scène pour prévenir plus tard": "Nagrać scenę, żeby zawiadomić później",
  "Ne rien faire est le délit de non-assistance à personne en danger. Appeler le 15 ou le 112 suffit à remplir l'obligation.":
    "Nierobienie niczego to przestępstwo nieudzielenia pomocy osobie w niebezpieczeństwie. Wystarczy zadzwonić pod 15 albo 112.",
  "À quel âge le recensement citoyen est-il obligatoire pour les jeunes Français ?":
    "W jakim wieku spis obywatelski jest obowiązkowy dla młodych Francuzów?",
  "À 16 ans, en mairie. Il ouvre la convocation à la Journée défense et citoyenneté et l'inscription automatique sur les listes électorales.":
    "W wieku 16 lat, w merostwie. Otwiera wezwanie na Journée défense et citoyenneté i automatyczny wpis na listy wyborcze.",
  "Le devoir de solidarité se traduit concrètement par :":
    "Obowiązek solidarności przekłada się konkretnie na:",
  "l'impôt, les cotisations sociales et l'obligation de porter secours":
    "podatki, składki społeczne i obowiązek niesienia pomocy",
  "l'obligation de donner à une association": "obowiązek wpłaty na rzecz stowarzyszenia",
  "l'obligation de faire du bénévolat": "obowiązek wolontariatu",
  "l'obligation d'héberger un proche": "obowiązek przyjęcia bliskiej osoby pod dach",
  "Il n'impose ni don ni bénévolat : il passe par la contribution commune et par l'obligation légale d'assistance.":
    "Nie nakłada ani darowizny, ani wolontariatu: przechodzi przez wspólny wkład i przez ustawowy obowiązek pomocy.",
  "Un employeur peut-il empêcher un salarié d'exercer sa mission de juré d'assises ?":
    "Czy pracodawca może przeszkodzić pracownikowi w wykonaniu obowiązku ławnika?",
  "Non, c'est une obligation légale que l'employeur doit respecter":
    "Nie, to obowiązek ustawowy, który pracodawca musi respektować",
  "Oui, s'il a besoin du salarié": "Tak, jeśli potrzebuje pracownika",
  "Oui, en période de forte activité": "Tak, w okresie wzmożonej pracy",
  "Oui, si le salarié est en période d'essai": "Tak, jeśli pracownik jest w okresie próbnym",
  "Être juré est un devoir civique. L'absence est justifiée de plein droit et ne peut pas être sanctionnée.":
    "Bycie ławnikiem to obowiązek obywatelski. Nieobecność jest z mocy prawa usprawiedliwiona i nie może być ukarana.",
  "Le devoir de mémoire concerne notamment :": "Obowiązek pamięci dotyczy w szczególności:",
  "la Shoah, l'esclavage et les guerres mondiales": "Szoa, niewolnictwa i wojen światowych",
  "l'obligation de conserver ses relevés bancaires":
    "obowiązku przechowywania wyciągów bankowych",
  "l'apprentissage par cœur de l'hymne national": "wyuczenia hymnu narodowego na pamięć",
  "la fréquentation des musées": "chodzenia do muzeów",
  "Commémorations, enseignement et lieux de mémoire : nommer ce qui s'est passé pour que cela ne recommence pas.":
    "Obchody, nauczanie i miejsca pamięci: nazwać to, co się stało, żeby się nie powtórzyło.",
  "Voter en France est :": "Głosowanie we Francji jest:",
  "un droit, alors que l'inscription sur les listes est une obligation":
    "prawem, podczas gdy wpis na listy jest obowiązkiem",
  "une obligation sanctionnée par une amende": "obowiązkiem karanym grzywną",
  "obligatoire seulement aux présidentielles": "obowiązkowe tylko w wyborach prezydenckich",
  "L'inscription est obligatoire, l'acte de voter reste libre. Certains pays voisins font l'inverse ; pas la France.":
    "Wpis jest obowiązkowy, sam akt głosowania pozostaje dobrowolny. Niektóre sąsiednie kraje robią odwrotnie; Francja nie.",
  "Nul n'est censé ignorer la loi. Qu'est-ce que cela signifie ?":
    "Nikt nie może zasłaniać się nieznajomością prawa. Co to znaczy?",
  "On ne peut pas invoquer son ignorance pour échapper à une sanction":
    "Nie można powoływać się na swoją niewiedzę, żeby uniknąć kary",
  "Chacun doit connaître tous les textes par cœur": "Każdy musi znać wszystkie teksty na pamięć",
  "Seuls les juristes sont responsables": "Odpowiedzialni są tylko prawnicy",
  "La loi ne s'applique qu'après information personnelle":
    "Ustawa obowiązuje dopiero po osobistym powiadomieniu",
  "La publication au Journal officiel rend la loi opposable à tous, sans notification individuelle.":
    "Ogłoszenie w Journal officiel sprawia, że na ustawę można powołać się wobec wszystkich, bez indywidualnego powiadamiania.",
  "La Journée défense et citoyenneté est :": "Journée défense et citoyenneté jest:",
  "obligatoire pour les jeunes Français recensés":
    "obowiązkowy dla młodych Francuzów objętych spisem",
  "réservée aux futurs militaires": "zastrzeżony dla przyszłych wojskowych",
  "remplacée par le service militaire": "zastąpiony służbą wojskową",
  "Elle est obligatoire et son attestation est exigée pour passer certains examens, dont le baccalauréat et le permis de conduire.":
    "Jest obowiązkowy, a zaświadczenie o nim wymagane przy niektórych egzaminach, w tym maturze i prawie jazdy.",
  "Payer ses impôts est :": "Płacenie podatków jest:",
  "un devoir de tout contribuable": "obowiązkiem każdego podatnika",
  "un geste volontaire": "dobrowolnym gestem",
  "réservé aux personnes nées en France": "zastrzeżone dla osób urodzonych we Francji",
  "une contribution demandée tous les cinq ans": "wkładem żądanym co pięć lat",
  "La contribution commune est répartie entre tous en raison de leurs facultés — l'article 13 de la Déclaration de 1789 le disait déjà.":
    "Wspólny wkład rozkłada się na wszystkich stosownie do ich możliwości — artykuł 13 Deklaracji z 1789 roku mówił to już wtedy.",
  "Respecter les valeurs de la République signifie notamment :":
    "Poszanowanie wartości Republiki oznacza w szczególności:",
  "respecter la laïcité, l'égalité femmes-hommes et la dignité de chacun":
    "poszanowanie laïcité, równości kobiet i mężczyzn oraz godności każdego",
  "adhérer aux idées du gouvernement": "przyjęcie poglądów rządu",
  "pratiquer la religion majoritaire": "praktykowanie religii większości",
  "parler exclusivement français chez soi": "mówienie w domu wyłącznie po francusku",
  "Ce sont des principes juridiques : liberté de conscience, égalité, dignité, respect de la loi commune.":
    "To zasady prawne: wolność sumienia, równość, godność, poszanowanie wspólnego prawa.",
  "Dans lequel de ces endroits est-on autorisé à fumer ?": "W którym z tych miejsc wolno palić?",
  "En terrasse ouverte d'un café": "Na otwartym tarasie kawiarni",
  "Dans un restaurant": "W restauracji",
  "Dans une gare couverte": "Na zadaszonym dworcu",
  "Dans une cour d'école": "Na szkolnym dziedzińcu",
  "Il est interdit de fumer dans tous les lieux fermés accueillant du public et dans les établissements scolaires.":
    "Palenie jest zakazane we wszystkich zamkniętych miejscach dostępnych publicznie i w placówkach szkolnych.",
  "En France, la conduite sans permis d'une moto est :":
    "We Francji prowadzenie motocykla bez prawa jazdy jest:",
  "une contravention légère": "lekkim wykroczeniem",
  "autorisée en dessous de 125 cm³": "dozwolone poniżej 125 cm³",
  "sans conséquence si l'on est assuré": "bez konsekwencji, jeśli jest się ubezpieczonym",
  "C'est un délit, puni d'une amende importante et pouvant aller jusqu'à une peine d'emprisonnement.":
    "To występek, karany wysoką grzywną, a nawet karą pozbawienia wolności.",
  "Le non-respect du code de la route est :": "Nieprzestrzeganie kodeksu drogowego jest:",
  "une infraction sanctionnée": "karanym naruszeniem prawa",
  "toléré hors agglomération": "tolerowane poza terenem zabudowanym",
  "sans conséquence pour les piétons": "bez konsekwencji dla pieszych",
  "une simple recommandation": "zwykłym zaleceniem",
  "Selon la gravité, c'est une contravention ou un délit : amende, retrait de points, suspension du permis, voire prison.":
    "Zależnie od wagi to wykroczenie albo występek: grzywna, odjęcie punktów, zawieszenie prawa jazdy, a nawet więzienie.",
  "Est-ce légal d'être marié à plusieurs personnes en même temps ?":
    "Czy legalne jest bycie w związku małżeńskim z kilkoma osobami naraz?",
  "Non, la polygamie est interdite": "Nie, poligamia jest zakazana",
  "Oui, si le mariage a été célébré à l'étranger": "Tak, jeśli małżeństwo zawarto za granicą",
  "Oui, avec l'accord des conjoints": "Tak, za zgodą małżonków",
  "Oui, dans certaines communes": "Tak, w niektórych gminach",
  "La bigamie est un délit. Un mariage contracté alors qu'on est déjà marié est nul en France.":
    "Bigamia jest występkiem. Małżeństwo zawarte przez osobę już zamężną jest we Francji nieważne.",
  "Pour obtenir une carte d'identité, il faut :": "Żeby uzyskać dowód tożsamości, trzeba:",
  "en faire la demande en mairie avec un justificatif de domicile et une photo":
    "złożyć wniosek w merostwie z potwierdzeniem adresu i zdjęciem",
  "s'adresser au commissariat": "zwrócić się na komisariat",
  "écrire à la préfecture de région": "napisać do prefektury regionu",
  "passer un examen": "zdać egzamin",
  "La demande se fait en mairie, dans une commune équipée du dispositif de recueil. La première demande est gratuite.":
    "Wniosek składa się w merostwie, w gminie wyposażonej w stanowisko do pobierania danych. Pierwszy wniosek jest bezpłatny.",
  "Le stationnement sur une place réservée aux personnes handicapées est :":
    "Parkowanie na miejscu zastrzeżonym dla osób z niepełnosprawnością jest:",
  "une infraction lourdement sanctionnée": "naruszeniem karanym bardzo surowo",
  "toléré pendant quelques minutes": "tolerowane przez kilka minut",
  "autorisé le dimanche": "dozwolone w niedzielę",
  "autorisé si aucune autre place n'est libre":
    "dozwolone, jeśli żadne inne miejsce nie jest wolne",
  "L'amende est de plusieurs centaines d'euros, et le véhicule peut être mis en fourrière. La place conditionne l'autonomie de quelqu'un.":
    "Grzywna wynosi kilkaset euro, a pojazd może trafić na parking depozytowy. To miejsce warunkuje czyjąś samodzielność.",
  "À partir de quel âge peut-on acheter du tabac en France ?":
    "Od jakiego wieku można we Francji kupić tytoń?",
  "17 ans": "17 lat",
  "18 ans, comme pour l'alcool. Le commerçant doit demander une pièce d'identité en cas de doute.":
    "18 lat, tak jak przy alkoholu. W razie wątpliwości sprzedawca musi poprosić o dokument tożsamości.",
  "Quelle est la différence entre un délit et une contravention ?":
    "Jaka jest różnica między występkiem a wykroczeniem?",
  "Le délit est plus grave et relève du tribunal correctionnel":
    "Występek jest cięższy i należy do tribunal correctionnel",
  "La contravention est plus grave": "Wykroczenie jest cięższe",
  "Le délit ne concerne que les entreprises": "Występek dotyczy tylko przedsiębiorstw",
  "Il n'y a aucune différence de gravité": "Nie ma żadnej różnicy w ciężarze",
  "Contravention, délit, crime, dans l'ordre croissant. Le tribunal de police, le tribunal correctionnel et la cour d'assises les jugent.":
    "Wykroczenie, występek, zbrodnia, w rosnącej kolejności. Sądzą je tribunal de police, tribunal correctionnel i cour d'assises.",
  "À quel âge devient-on pénalement majeur en France ?":
    "W jakim wieku uzyskuje się we Francji pełnoletność karną?",
  "18 ans. En dessous, la justice des mineurs s'applique, avec des peines et une procédure adaptées.":
    "18 lat. Poniżej stosuje się sądownictwo dla nieletnich, z dostosowanymi karami i procedurą.",
  "Dissimuler entièrement son visage dans l'espace public est :":
    "Całkowite zasłanianie twarzy w przestrzeni publicznej jest:",
  "interdit depuis 2010": "zakazane od 2010 roku",
  "autorisé partout": "dozwolone wszędzie",
  "interdit uniquement dans les administrations": "zakazane wyłącznie w urzędach",
  "autorisé pendant les manifestations": "dozwolone podczas manifestacji",
  "La loi de 2010 interdit la dissimulation du visage dans l'espace public, avec des exceptions prévues par le texte.":
    "Ustawa z 2010 roku zakazuje zasłaniania twarzy w przestrzeni publicznej, z wyjątkami przewidzianymi w tekście.",
  "La première demande d'une carte nationale d'identité est :":
    "Pierwszy wniosek o krajowy dowód tożsamości jest:",
  "gratuite": "bezpłatny",
  "payante, quel que soit le cas": "płatny, w każdym przypadku",
  "réservée aux personnes majeures": "zastrzeżony dla osób pełnoletnich",
  "faite en préfecture": "składany w prefekturze",
  "Elle est gratuite. Seul un renouvellement après perte ou vol donne lieu à un timbre fiscal.":
    "Jest bezpłatny. Tylko wznowienie po zgubieniu albo kradzieży wymaga opłaty skarbowej.",
  "Un collègue tient des propos racistes pendant une réunion. Quelle est la bonne attitude ?":
    "Kolega wygłasza na zebraniu rasistowskie uwagi. Jaka postawa jest właściwa?",
  "Signaler les faits à la hiérarchie ou aux représentants du personnel":
    "Zgłosić fakty przełożonym albo przedstawicielom pracowników",
  "Ne rien dire, ce sont ses opinions": "Nic nie mówić, to jego poglądy",
  "Répondre par des insultes": "Odpowiedzieć obelgami",
  "Quitter l'entreprise": "Odejść z firmy",
  "Les propos racistes sont un délit, et l'employeur a l'obligation de protéger ses salariés. Le Défenseur des droits peut aussi être saisi.":
    "Rasistowskie wypowiedzi są występkiem, a pracodawca ma obowiązek chronić swoich pracowników. Można też zwrócić się do Défenseur des droits.",
  "Un voisin fait beaucoup de bruit tard le soir, régulièrement. Que faire d'abord ?":
    "Sąsiad regularnie hałasuje późnym wieczorem. Co zrobić najpierw?",
  "Lui en parler calmement, puis saisir le syndic, le bailleur ou la mairie":
    "Porozmawiać z nim spokojnie, a potem zwrócić się do zarządcy, wynajmującego albo merostwa",
  "Couper son électricité": "Odciąć mu prąd",
  "Faire du bruit à son tour": "Samemu zacząć hałasować",
  "Déménager sans rien dire": "Wyprowadzić się bez słowa",
  "On règle d'abord par le dialogue, puis par l'institution compétente. On ne se fait jamais justice soi-même.":
    "Najpierw załatwia się to rozmową, potem przez właściwą instytucję. Nigdy nie wymierza się sprawiedliwości samemu.",
  "Une entreprise refuse d'embaucher une candidate parce qu'elle est enceinte. Cette décision est :":
    "Firma odmawia zatrudnienia kandydatki, bo jest w ciąży. Ta decyzja jest:",
  "un choix légitime de gestion": "uprawnionym wyborem organizacyjnym",
  "autorisée dans les petites entreprises": "dozwolona w małych firmach",
  "légale si le poste est physique": "zgodna z prawem, jeśli stanowisko jest fizyczne",
  "La grossesse fait partie des critères de discrimination interdits. La candidate n'est même pas tenue de la mentionner.":
    "Ciąża należy do zakazanych kryteriów dyskryminacji. Kandydatka nie ma nawet obowiązku o niej wspominać.",
  "Un agent de mairie refuse de célébrer un mariage parce que les époux ne partagent pas ses convictions. Que dit le droit ?":
    "Pracownik merostwa odmawia udzielenia ślubu, bo małżonkowie nie podzielają jego przekonań. Co mówi prawo?",
  "Il doit célébrer le mariage : le service public est neutre et égal pour tous":
    "Musi udzielić ślubu: służba publiczna jest neutralna i równa dla wszystkich",
  "Il a le droit de refuser au nom de sa liberté de conscience":
    "Ma prawo odmówić, powołując się na wolność sumienia",
  "Il doit demander l'avis du préfet": "Musi zapytać o zdanie prefekta",
  "Il peut refuser si le maire l'y autorise": "Może odmówić, jeśli mer mu na to pozwoli",
  "La neutralité du service public interdit à un agent de faire dépendre un service de ses convictions personnelles.":
    "Neutralność służby publicznej zakazuje pracownikowi uzależniania usługi od swoich osobistych przekonań.",
  "Un parent demande que sa fille soit dispensée du cours de natation. L'école :":
    "Rodzic prosi o zwolnienie córki z lekcji pływania. Szkoła:",
  "maintient l'obligation : les programmes s'appliquent à tous les élèves":
    "utrzymuje obowiązek: programy dotyczą wszystkich uczniów",
  "doit accepter la demande": "musi przyjąć prośbę",
  "doit organiser un cours séparé": "musi zorganizować osobne zajęcia",
  "doit demander l'avis de la mairie": "musi zapytać o zdanie merostwo",
  "Les motifs d'absence acceptés sont limités et ne comprennent pas les convictions personnelles. Seul un certificat médical peut dispenser.":
    "Dopuszczalne powody nieobecności są ograniczone i nie obejmują osobistych przekonań. Zwolnić może tylko zaświadczenie lekarskie.",
  "Un propriétaire refuse de louer un logement à cause du nom de famille du candidat. C'est :":
    "Właściciel odmawia wynajmu mieszkania z powodu nazwiska kandydata. To:",
  "une discrimination punie par la loi": "dyskryminacja karana przez prawo",
  "une liberté du propriétaire": "wolność właściciela",
  "légal si le logement est meublé": "zgodne z prawem, jeśli mieszkanie jest umeblowane",
  "légal si le candidat n'a pas de garant":
    "zgodne z prawem, jeśli kandydat nie ma poręczyciela",
  "Refuser pour un motif tenant à l'origine, réelle ou supposée, est un délit. Un refus doit reposer sur la solvabilité, pas sur le nom.":
    "Odmowa z powodu pochodzenia, rzeczywistego albo domniemanego, jest występkiem. Odmowa musi opierać się na wypłacalności, a nie na nazwisku.",
  "Un salarié constate qu'il est payé en dessous du SMIC. Que peut-il faire ?":
    "Pracownik stwierdza, że jest opłacany poniżej SMIC. Co może zrobić?",
  "Saisir l'inspection du travail ou le conseil de prud'hommes":
    "Zwrócić się do inspekcji pracy albo do conseil de prud'hommes",
  "Rien, le contrat a été signé": "Nic, umowa została podpisana",
  "Cesser de venir travailler sans prévenir": "Przestać przychodzić do pracy bez uprzedzenia",
  "Attendre la fin de son contrat": "Poczekać do końca umowy",
  "Aucun contrat ne peut prévoir moins que le SMIC. L'inspection du travail contrôle, les prud'hommes tranchent le litige.":
    "Żadna umowa nie może przewidywać mniej niż SMIC. Inspekcja pracy kontroluje, prud'hommes rozstrzyga spór.",
  "Une personne est harcelée en ligne par un compte anonyme. Que peut-elle faire ?":
    "Osoba jest nękana w sieci przez anonimowe konto. Co może zrobić?",
  "Conserver les preuves et porter plainte": "Zachować dowody i złożyć zawiadomienie",
  "Rien, l'anonymat empêche toute action":
    "Nic, anonimowość uniemożliwia jakiekolwiek działanie",
  "Répondre sur le même ton": "Odpowiedzieć tym samym tonem",
  "Supprimer son compte et oublier": "Skasować swoje konto i zapomnieć",
  "Le harcèlement en ligne est un délit. Les captures d'écran servent de preuves et l'enquête peut identifier l'auteur.":
    "Nękanie w sieci jest występkiem. Zrzuty ekranu służą za dowody, a śledztwo może ustalić sprawcę.",
  "Un usager estime qu'une administration l'a mal traité. Quel recours gratuit existe ?":
    "Petent uważa, że urząd potraktował go źle. Jaki bezpłatny środek istnieje?",
  "Saisir le Défenseur des droits": "Zwrócić się do Défenseur des droits",
  "Écrire au président de la République": "Napisać do prezydenta Republiki",
  "Engager un avocat obligatoirement": "Obowiązkowo wynająć adwokata",
  "Aucun recours n'existe": "Żaden środek nie istnieje",
  "La saisine du Défenseur des droits est gratuite et se fait en ligne, par courrier ou auprès d'un délégué local.":
    "Zwrócenie się do Défenseur des droits jest bezpłatne i odbywa się przez internet, listownie albo u lokalnego przedstawiciela.",
  "Dans une file d'attente à la préfecture, quelqu'un veut passer devant parce qu'il est pressé. Que dit le principe d'égalité ?":
    "W kolejce w prefekturze ktoś chce wejść przed innych, bo się spieszy. Co mówi zasada równości?",
  "Chacun est traité dans les mêmes conditions, sans passe-droit":
    "Każdego traktuje się na tych samych warunkach, bez przywilejów",
  "Le plus pressé passe en premier": "Pierwszy wchodzi ten, komu najbardziej się spieszy",
  "L'agent décide selon son humeur": "Pracownik decyduje według nastroju",
  "Les personnes âgées passent toujours après": "Osoby starsze zawsze idą na końcu",
  "L'égalité de traitement est un principe du service public. Des priorités existent, mais elles sont prévues, pas improvisées.":
    "Równość traktowania jest zasadą służby publicznej. Pierwszeństwa istnieją, ale są przewidziane, a nie improwizowane.",
  "Deux réponses semblent raisonnables dans une mise en situation. Laquelle choisir ?":
    "W sytuacji zadaniowej dwie odpowiedzi wydają się rozsądne. Którą wybrać?",
  "Celle qui s'adresse à l'institution compétente et respecte l'égalité":
    "Tę, która zwraca się do właściwej instytucji i szanuje równość",
  "Celle qui règle l'affaire le plus vite": "Tę, która załatwia sprawę najszybciej",
  "Celle qui évite le conflit à tout prix": "Tę, która za wszelką cenę unika konfliktu",
  "Celle qui suit l'usage local": "Tę, która idzie za miejscowym zwyczajem",
  "La bonne réponse fait passer le droit commun avant l'arrangement privé, et l'institution avant la justice personnelle.":
    "Dobra odpowiedź stawia prawo powszechne przed prywatnym układem, a instytucję przed wymierzaniem sprawiedliwości na własną rękę.",
  "Quel roi de France a été guillotiné pendant la Révolution française ?":
    "Który król Francji został zgilotynowany podczas rewolucji francuskiej?",
  "Louis XVI": "Ludwik XVI",
  "Louis XIV": "Ludwik XIV",
  "Charles X": "Karol X",
  "Henri IV": "Henryk IV",
  "Louis XVI, en 1793. Louis XIV, le Roi-Soleil, est mort en 1715 ; Henri IV a été assassiné en 1610.":
    "Ludwik XVI, w 1793 roku. Ludwik XIV, Król Słońce, umarł w 1715; Henryka IV zamordowano w 1610.",
  "En quelle année Napoléon Ier est-il devenu empereur ?":
    "W którym roku Napoleon I został cesarzem?",
  "1799": "1799",
  "En 1804, la même année que le Code civil. 1799 est le coup d'État du 18 Brumaire, 1815 la défaite de Waterloo.":
    "W 1804, w tym samym roku co Kodeks cywilny. 1799 to zamach stanu 18 brumaire'a, 1815 klęska pod Waterloo.",
  "Que signifie la date du 14 juillet pour les Français ?":
    "Co dla Francuzów oznacza data 14 lipca?",
  "La fête nationale, qui rappelle 1789 et 1790":
    "Święto narodowe, które przypomina rok 1789 i 1790",
  "L'entrée dans l'Union européenne": "Wejście do Unii Europejskiej",
  "Prise de la Bastille le 14 juillet 1789, Fête de la Fédération le 14 juillet 1790. La fête nationale a été instituée en 1880.":
    "Zdobycie Bastylii 14 lipca 1789 roku, Święto Federacji 14 lipca 1790. Święto narodowe ustanowiono w 1880 roku.",
  "Quel château célèbre se trouve près de Paris et symbolise le pouvoir royal de Louis XIV ?":
    "Który słynny zamek leży pod Paryżem i symbolizuje królewską władzę Ludwika XIV?",
  "Le château de Chambord": "Zamek Chambord",
  "Le château de Fontainebleau": "Zamek Fontainebleau",
  "Le château d'Amboise": "Zamek Amboise",
  "Versailles, où Louis XIV installe la cour en 1682 pour tenir la noblesse sous son regard.":
    "Wersal, gdzie Ludwik XIV osadza dwór w 1682 roku, żeby trzymać szlachtę na oku.",
  "Le Code civil est aussi appelé :": "Kodeks cywilny nazywa się też:",
  "le Code Napoléon": "Kodeksem Napoleona",
  "le Code Louis": "Kodeksem Ludwika",
  "le Code républicain": "Kodeksem republikańskim",
  "le Code de la Révolution": "Kodeksem rewolucji",
  "Adopté en 1804 sous Napoléon Ier, il unifie le droit privé et reste la base du droit français.":
    "Przyjęty w 1804 roku za Napoleona I, ujednolica prawo prywatne i pozostaje podstawą prawa francuskiego.",
  "En quelle année la Première République a-t-elle été proclamée ?":
    "W którym roku proklamowano I Republikę?",
  "En septembre 1792, après la chute de la monarchie. La Marseillaise a été écrite la même année.":
    "We wrześniu 1792 roku, po upadku monarchii. La Marseillaise napisano w tym samym roku.",
  "Avant 1789, la société française était divisée en :":
    "Przed 1789 rokiem społeczeństwo francuskie dzieliło się na:",
  "trois ordres : clergé, noblesse et tiers état":
    "trzy stany: duchowieństwo, szlachtę i stan trzeci",
  "deux classes : riches et pauvres": "dwie klasy: bogatych i biednych",
  "quatre régions autonomes": "cztery autonomiczne regiony",
  "cinq provinces royales": "pięć prowincji królewskich",
  "Le tiers état représentait la très grande majorité de la population et payait l'essentiel des impôts.":
    "Stan trzeci stanowił ogromną większość ludności i płacił większość podatków.",
  "Qu'était la Bastille ?": "Czym była Bastylia?",
  "Une prison royale devenue symbole de l'arbitraire":
    "Królewskim więzieniem, które stało się symbolem samowoli",
  "Un palais du roi": "Pałacem króla",
  "Une cathédrale parisienne": "Paryską katedrą",
  "Un port militaire": "Portem wojskowym",
  "Une forteresse-prison où l'on pouvait être enfermé sur simple ordre du roi. Sa prise, le 14 juillet 1789, a valeur de symbole.":
    "Twierdzą-więzieniem, gdzie można było trafić na sam rozkaz króla. Jej zdobycie 14 lipca 1789 roku ma wagę symbolu.",
  "Qui étaient les penseurs des Lumières ?": "Kim byli myśliciele oświecenia?",
  "Voltaire, Rousseau, Diderot et Montesquieu": "Wolter, Rousseau, Diderot i Monteskiusz",
  "Molière, Racine et Corneille": "Molier, Racine i Corneille",
  "Monet, Renoir et Cézanne": "Monet, Renoir i Cézanne",
  "Danton, Robespierre et Marat": "Danton, Robespierre i Marat",
  "Les philosophes du XVIIIe siècle qui défendent la raison, la tolérance et la séparation des pouvoirs, et préparent la Révolution.":
    "Filozofowie XVIII wieku, którzy bronią rozumu, tolerancji i podziału władz, i przygotowują rewolucję.",
  "La monarchie absolue signifie que :": "Monarchia absolutna oznacza, że:",
  "le roi détient tous les pouvoirs": "król dzierży wszystkie władze",
  "le roi partage le pouvoir avec un parlement": "król dzieli władzę z parlamentem",
  "le roi est élu": "król pochodzi z wyboru",
  "le roi n'a qu'un rôle religieux": "król ma tylko rolę religijną",
  "Le roi de droit divin concentrait le pouvoir de faire la loi, de l'appliquer et de juger.":
    "Król z bożej łaski skupiał władzę stanowienia prawa, jego stosowania i sądzenia.",
  "Le Code civil de 1804 a servi à :": "Kodeks cywilny z 1804 roku posłużył do:",
  "unifier le droit privé pour tout le pays": "ujednolicenia prawa prywatnego w całym kraju",
  "créer la Sécurité sociale": "utworzenia Sécurité sociale",
  "instaurer la laïcité": "wprowadzenia laïcité",
  "organiser les élections": "zorganizowania wyborów",
  "Avant lui, le droit variait d'une province à l'autre. Il reste aujourd'hui le socle du droit de la famille, des contrats et de la propriété.":
    "Przed nim prawo różniło się od prowincji do prowincji. Do dziś pozostaje fundamentem prawa rodzinnego, umów i własności.",
  "Quand a eu lieu la Première Guerre mondiale ?": "Kiedy trwała pierwsza wojna światowa?",
  "De 1914 à 1918": "Od 1914 do 1918",
  "De 1939 à 1945": "Od 1939 do 1945",
  "De 1870 à 1871": "Od 1870 do 1871",
  "De 1900 à 1910": "Od 1900 do 1910",
  "1914-1918. L'armistice du 11 novembre 1918 y met fin, et le 11 novembre est resté férié.":
    "1914–1918. Kończy ją rozejm z 11 listopada 1918 roku, a 11 listopada pozostał dniem wolnym.",
  "Quand a eu lieu la Seconde Guerre mondiale ?": "Kiedy trwała druga wojna światowa?",
  "De 1936 à 1940": "Od 1936 do 1940",
  "De 1945 à 1950": "Od 1945 do 1950",
  "1939-1945. Le 8 mai commémore la fin de la guerre en Europe.":
    "1939–1945. 8 maja upamiętnia koniec wojny w Europie.",
  "Que célèbre-t-on le 8 mai ?": "Co świętuje się 8 maja?",
  "La victoire des Alliés et la fin de la guerre en Europe en 1945":
    "Zwycięstwo aliantów i koniec wojny w Europie w 1945 roku",
  "L'armistice de 1918": "Rozejm z 1918 roku",
  "La libération de Paris": "Wyzwolenie Paryża",
  "La fête du Travail": "Święto pracy",
  "La capitulation de l'Allemagne nazie, le 8 mai 1945. Le 1er mai est la fête du Travail.":
    "Kapitulację nazistowskich Niemiec, 8 maja 1945 roku. 1 maja to święto pracy.",
  "De quand date l'appel à la résistance du général de Gaulle ?":
    "Z kiedy pochodzi apel generała de Gaulle'a o opór?",
  "Du 18 juin 1940": "Z 18 czerwca 1940",
  "Du 14 juillet 1940": "Z 14 lipca 1940",
  "Du 8 mai 1945": "Z 8 maja 1945",
  "Du 6 juin 1944": "Z 6 czerwca 1944",
  "L'appel du 18 juin 1940, prononcé depuis Londres sur les ondes de la BBC.":
    "Apel z 18 czerwca 1940 roku, wygłoszony z Londynu na falach BBC.",
  "Dans quelle région est située une partie des plages du débarquement de 1944 ?":
    "W którym regionie leży część plaż lądowania z 1944 roku?",
  "En Normandie": "W Normandii",
  "En Bretagne": "W Bretanii",
  "En Provence uniquement": "Wyłącznie w Prowansji",
  "Dans les Hauts-de-France": "W Hauts-de-France",
  "Le débarquement du 6 juin 1944 a eu lieu sur les plages normandes. Un second débarquement a suivi en Provence en août.":
    "Lądowanie 6 czerwca 1944 roku odbyło się na plażach normandzkich. Drugie lądowanie nastąpiło w sierpniu w Prowansji.",
  "À quelle date la ville de Paris a-t-elle été libérée ?": "Kiedy wyzwolono Paryż?",
  "Le 25 août 1944": "25 sierpnia 1944",
  "Le 6 juin 1944": "6 czerwca 1944",
  "Le 8 mai 1945": "8 maja 1945",
  "Le 11 novembre 1944": "11 listopada 1944",
  "Le 25 août 1944, après une insurrection parisienne et l'arrivée de la 2e division blindée du général Leclerc.":
    "25 sierpnia 1944 roku, po powstaniu paryskim i nadejściu 2. Dywizji Pancernej generała Leclerca.",
  "Quelle organisation a été créée en 1945 après la Seconde Guerre mondiale ?":
    "Która organizacja powstała w 1945 roku, po drugiej wojnie światowej?",
  "L'Organisation des Nations unies": "Organizacja Narodów Zjednoczonych",
  "L'Union européenne": "Unia Europejska",
  "L'OTAN": "NATO",
  "Le Conseil de l'Europe": "Rada Europy",
  "L'ONU, en 1945. L'OTAN date de 1949, le Conseil de l'Europe de 1949 également, l'Union européenne de 1992.":
    "ONZ, w 1945 roku. NATO pochodzi z 1949, Rada Europy również z 1949, Unia Europejska z 1992.",
  "En 1944, qu'est-ce qui a changé pour les femmes en France ?":
    "Co zmieniło się dla kobiet we Francji w 1944 roku?",
  "Elles ont obtenu le droit de vote": "Uzyskały prawo głosu",
  "Elles ont obtenu le droit de travailler": "Uzyskały prawo do pracy",
  "Elles ont obtenu le droit d'étudier": "Uzyskały prawo do nauki",
  "Elles ont obtenu le droit de se marier librement":
    "Uzyskały prawo do swobodnego zawarcia małżeństwa",
  "L'ordonnance d'avril 1944 leur accorde le droit de vote et d'éligibilité. Elles votent pour la première fois en 1945.":
    "Rozporządzenie z kwietnia 1944 roku przyznaje im czynne i bierne prawo wyborcze. Po raz pierwszy głosują w 1945.",
  "Depuis quand les Français élisent-ils le président de la République au suffrage universel direct ?":
    "Od kiedy Francuzi wybierają prezydenta Republiki w wyborach powszechnych bezpośrednich?",
  "Depuis 1962": "Od 1962",
  "Depuis 1946": "Od 1946",
  "Depuis 1958": "Od 1958",
  "Depuis 1981": "Od 1981",
  "Le référendum de 1962 l'a instauré ; la première élection de ce type a eu lieu en 1965.":
    "Ustanowiło to referendum z 1962 roku; pierwsze takie wybory odbyły się w 1965.",
  "Qui a été président de la Ve République ?": "Kto był prezydentem V Republiki?",
  "Napoléon III": "Napoleon III",
  "Léon Blum": "Léon Blum",
  "Jules Ferry": "Jules Ferry",
  "Jacques Chirac a été président de 1995 à 2007. Napoléon III fut empereur, Léon Blum et Jules Ferry présidents du Conseil ou ministres.":
    "Jacques Chirac był prezydentem od 1995 do 2007 roku. Napoleon III był cesarzem, Léon Blum i Jules Ferry premierami rządu albo ministrami.",
  "En quelle année la Constitution actuelle a-t-elle remplacé celle de la IVe République ?":
    "W którym roku obecna konstytucja zastąpiła tę z IV Republiki?",
  "La Constitution du 4 octobre 1958 fonde la Ve République, en réponse à l'instabilité gouvernementale de la IVe.":
    "Konstytucja z 4 października 1958 roku ustanawia V Republikę, w odpowiedzi na niestabilność rządów IV.",
  "Qui était une figure de la Résistance française pendant la Seconde Guerre mondiale ?":
    "Kto był postacią francuskiego ruchu oporu podczas drugiej wojny światowej?",
  "Émile Zola": "Émile Zola",
  "Gustave Eiffel": "Gustave Eiffel",
  "Jean Moulin a unifié les mouvements de résistance en 1943 avant d'être arrêté et torturé à mort. Il repose au Panthéon.":
    "Jean Moulin zjednoczył ruchy oporu w 1943 roku, zanim go aresztowano i zamęczono na śmierć. Spoczywa w Panteonie.",
  "Qui a aboli l'esclavage en France ?": "Kto zniósł niewolnictwo we Francji?",
  "Victor Schœlcher, en 1848": "Victor Schœlcher, w 1848 roku",
  "Napoléon Ier, en 1804": "Napoleon I, w 1804 roku",
  "Jules Ferry, en 1881": "Jules Ferry, w 1881 roku",
  "Léon Gambetta, en 1870": "Léon Gambetta, w 1870 roku",
  "Victor Schœlcher a porté le décret d'abolition de 1848. Napoléon avait au contraire rétabli l'esclavage en 1802.":
    "Victor Schœlcher przeprowadził dekret o zniesieniu z 1848 roku. Napoleon przeciwnie — przywrócił niewolnictwo w 1802.",
  "Quel était le principal port français impliqué dans la traite négrière au XVIIIe siècle ?":
    "Który port francuski był w XVIII wieku głównym uczestnikiem handlu niewolnikami?",
  "Marseille": "Marsylia",
  "Calais": "Calais",
  "Strasbourg": "Strasburg",
  "Nantes, devant Bordeaux et La Rochelle. La ville consacre aujourd'hui un mémorial à l'abolition de l'esclavage.":
    "Nantes, przed Bordeaux i La Rochelle. Miasto poświęca dziś pomnik zniesieniu niewolnictwa.",
  "Quel célèbre philosophe des Lumières a dénoncé l'esclavage ?":
    "Który słynny filozof oświecenia napiętnował niewolnictwo?",
  "Descartes": "Kartezjusz",
  "Pascal": "Pascal",
  "Machiavel": "Machiavelli",
  "Montesquieu, dans De l'esprit des lois, par une critique ironique restée célèbre. Descartes et Pascal sont antérieurs aux Lumières.":
    "Monteskiusz, w O duchu praw, ironiczną krytyką, która pozostała słynna. Kartezjusz i Pascal są wcześniejsi niż oświecenie.",
  "Quel pays a été une colonie française ?": "Który kraj był kolonią francuską?",
  "L'Algérie": "Algieria",
  "Le Brésil": "Brazylia",
  "L'Inde entière": "Całe Indie",
  "La Grèce": "Grecja",
  "L'Algérie, jusqu'en 1962. Le Brésil était portugais ; l'Inde fut surtout britannique, la France n'y ayant que cinq comptoirs.":
    "Algieria, aż do 1962 roku. Brazylia była portugalska; Indie były głównie brytyjskie, a Francja miała tam tylko pięć faktorii.",
  "En quelle année l'Algérie est-elle devenue indépendante ?":
    "W którym roku Algieria uzyskała niepodległość?",
  "1954": "1954",
  "1975": "1975",
  "En 1962, après huit ans de guerre commencée en 1954.":
    "W 1962 roku, po ośmiu latach wojny rozpoczętej w 1954.",
  "Nier publiquement l'existence de la Shoah est :":
    "Publiczne zaprzeczanie istnieniu Szoa jest:",
  "une opinion protégée": "chronionym poglądem",
  "une faute civile sans sanction pénale": "przewinieniem cywilnym bez sankcji karnej",
  "autorisé dans un cadre universitaire": "dozwolone w ramach uniwersyteckich",
  "La contestation de crimes contre l'humanité est un délit. C'est l'une des limites explicites de la liberté d'expression.":
    "Podważanie zbrodni przeciw ludzkości jest występkiem. To jedna z wyraźnych granic wolności wypowiedzi.",
  "Où repose Jean Moulin ?": "Gdzie spoczywa Jean Moulin?",
  "Au Panthéon": "W Panteonie",
  "Aux Invalides": "W Inwalidach",
  "À Notre-Dame de Paris": "W katedrze Notre-Dame w Paryżu",
  "Au château de Versailles": "W zamku wersalskim",
  "Au Panthéon depuis 1964. Les Invalides abritent notamment le tombeau de Napoléon Ier.":
    "W Panteonie od 1964 roku. W Inwalidach mieści się między innymi grobowiec Napoleona I.",
  "Une première abolition de l'esclavage avait eu lieu en 1794. Que s'est-il passé ensuite ?":
    "Pierwsze zniesienie niewolnictwa nastąpiło w 1794 roku. Co stało się potem?",
  "Napoléon l'a rétabli en 1802": "Napoleon przywrócił je w 1802 roku",
  "Elle a été maintenue sans interruption": "Utrzymano je bez przerwy",
  "Elle a été étendue à toute l'Europe": "Rozszerzono je na całą Europę",
  "Elle n'a jamais été appliquée nulle part": "Nigdzie nigdy go nie zastosowano",
  "Rétabli en 1802, l'esclavage n'a été aboli définitivement qu'en 1848.":
    "Przywrócone w 1802 roku, niewolnictwo zniesiono ostatecznie dopiero w 1848.",
  "Le 10 mai est en France :": "10 maja jest we Francji:",
  "la journée de commémoration de l'abolition de l'esclavage":
    "dniem upamiętnienia zniesienia niewolnictwa",
  "la fête nationale": "świętem narodowym",
  "la journée de la laïcité": "dniem laïcité",
  "la journée de l'Europe": "Dniem Europy",
  "La journée nationale des mémoires de la traite, de l'esclavage et de leurs abolitions, en métropole.":
    "Narodowy dzień pamięci o handlu niewolnikami, niewolnictwie i ich zniesieniu, we Francji metropolitalnej.",
  "Le régime de Vichy pendant la Seconde Guerre mondiale a :":
    "Reżim Vichy podczas drugiej wojny światowej:",
  "collaboré avec l'Allemagne nazie": "współpracował z nazistowskimi Niemcami",
  "dirigé la Résistance": "kierował ruchem oporu",
  "gouverné depuis Londres": "rządził z Londynu",
  "refusé toute coopération avec l'occupant": "odmówił wszelkiej współpracy z okupantem",
  "Il a collaboré, notamment aux arrestations et aux déportations de Juifs. La République l'a officiellement reconnu en 1995.":
    "Współpracował, między innymi przy aresztowaniach i deportacjach Żydów. Republika oficjalnie to uznała w 1995 roku.",
  "Quelle chaîne de montagnes est située entre la France et l'Italie ?":
    "Które pasmo górskie leży między Francją a Włochami?",
  "Les Pyrénées": "Pireneje",
  "Le Jura": "Jura",
  "Le Massif central": "Masyw Centralny",
  "Les Alpes. Les Pyrénées séparent la France de l'Espagne.":
    "Alpy. Pireneje oddzielają Francję od Hiszpanii.",
  "Quelle mer ou quel océan borde la France métropolitaine ?":
    "Które morze albo ocean obmywa Francję metropolitalną?",
  "La mer Méditerranée": "Morze Śródziemne",
  "La mer Noire": "Morze Czarne",
  "La mer Baltique": "Morze Bałtyckie",
  "L'océan Pacifique": "Ocean Spokojny",
  "La Manche, la mer du Nord, l'océan Atlantique et la mer Méditerranée bordent la métropole.":
    "Kanał La Manche, Morze Północne, Ocean Atlantycki i Morze Śródziemne obmywają metropolię.",
  "Quelle est la population approximative de la France en 2025 ?":
    "Ile mniej więcej ludzi liczy Francja w 2025 roku?",
  "Environ 68 millions d'habitants": "Około 68 milionów mieszkańców",
  "Environ 45 millions": "Około 45 milionów",
  "Environ 90 millions": "Około 90 milionów",
  "Environ 55 millions": "Około 55 milionów",
  "Environ 68,6 millions au 1er janvier 2025 : 66,4 en métropole et 2,3 dans les cinq départements d'outre-mer.":
    "Około 68,6 miliona na 1 stycznia 2025 roku: 66,4 w metropolii i 2,3 w pięciu departamentach zamorskich.",
  "Quel est le principal port maritime de France ?":
    "Który port morski jest głównym portem Francji?",
  "Bordeaux": "Bordeaux",
  "Marseille, sur la Méditerranée, est le premier port français par le tonnage traité.":
    "Marsylia, nad Morzem Śródziemnym, jest pierwszym portem Francji pod względem przeładunku.",
  "Quelle ville française fait partie des dix plus grandes métropoles du pays ?":
    "Które francuskie miasto należy do dziesięciu największych metropolii kraju?",
  "Toulouse": "Tuluza",
  "Chartres": "Chartres",
  "Vannes": "Vannes",
  "Colmar": "Colmar",
  "Paris, Lyon, Marseille, Toulouse, Lille, Bordeaux et Nice figurent parmi les plus grandes aires urbaines.":
    "Paryż, Lyon, Marsylia, Tuluza, Lille, Bordeaux i Nicea należą do największych obszarów miejskich.",
  "Quel est le chef-lieu de la région Auvergne-Rhône-Alpes ?":
    "Które miasto jest stolicą regionu Owernia-Rodan-Alpy?",
  "Lyon": "Lyon",
  "Grenoble": "Grenoble",
  "Clermont-Ferrand": "Clermont-Ferrand",
  "Saint-Étienne": "Saint-Étienne",
  "Lyon. Clermont-Ferrand était le chef-lieu de l'ancienne région Auvergne avant la fusion de 2016.":
    "Lyon. Clermont-Ferrand było stolicą dawnego regionu Owernia przed połączeniem w 2016 roku.",
  "Quel est le chef-lieu de la région Provence-Alpes-Côte d'Azur ?":
    "Które miasto jest stolicą regionu Prowansja-Alpy-Lazurowe Wybrzeże?",
  "Nice": "Nicea",
  "Toulon": "Tulon",
  "Avignon": "Awinion",
  "Marseille, qui est aussi la deuxième ville de France par la population.":
    "Marsylia, która jest zarazem drugim miastem Francji pod względem liczby ludności.",
  "Quelle région française est réputée pour ses stations de ski ?":
    "Który region francuski słynie ze swoich ośrodków narciarskich?",
  "Centre-Val de Loire": "Centre-Val de Loire",
  "Les Alpes du Nord concentrent les plus grandes stations. Les Pyrénées, en Occitanie, en comptent également.":
    "Alpy Północne skupiają największe ośrodki. Pireneje, w Oksytanii, też je mają.",
  "La Corse est :": "Korsyka jest:",
  "une île de la Méditerranée qui fait partie de la métropole":
    "wyspą na Morzu Śródziemnym, która należy do metropolii",
  "un département d'outre-mer": "departamentem zamorskim",
  "un État indépendant": "niepodległym państwem",
  "une collectivité située dans l'Atlantique": "jednostką leżącą na Atlantyku",
  "La Corse est une collectivité de la France métropolitaine, en mer Méditerranée.":
    "Korsyka jest jednostką Francji metropolitalnej, na Morzu Śródziemnym.",
  "Où peut-on voir des peintures préhistoriques en France ?":
    "Gdzie we Francji można zobaczyć malowidła prehistoryczne?",
  "Dans la grotte de Lascaux, en Dordogne": "W jaskini Lascaux, w Dordogne",
  "Au château de Chambord": "W zamku Chambord",
  "Dans les catacombes de Paris": "W katakumbach paryskich",
  "Au Mont-Saint-Michel": "Na Mont-Saint-Michel",
  "Lascaux, découverte en 1940, abrite des peintures vieilles d'environ 17 000 ans. La grotte Chauvet en Ardèche est plus ancienne encore.":
    "Lascaux, odkryte w 1940 roku, kryje malowidła sprzed około 17 000 lat. Jaskinia Chauvet w Ardèche jest jeszcze starsza.",
  "Quel fleuve français se jette dans la Méditerranée ?":
    "Która francuska rzeka uchodzi do Morza Śródziemnego?",
  "Le Rhône. La Seine se jette dans la Manche, la Loire et la Garonne dans l'Atlantique.":
    "Rodan. Sekwana uchodzi do kanału La Manche, Loara i Garonna do Atlantyku.",
  "Qu'est-ce que la France d'outre-mer ?": "Czym jest Francja zamorska?",
  "L'ensemble des territoires français situés hors d'Europe":
    "Ogółem terytoriów francuskich położonych poza Europą",
  "Les anciennes colonies devenues indépendantes":
    "Dawnymi koloniami, które uzyskały niepodległość",
  "Les régions frontalières de la métropole": "Regionami przygranicznymi metropolii",
  "Les ambassades françaises à l'étranger": "Ambasadami francuskimi za granicą",
  "Leurs habitants sont français et citoyens de l'Union européenne, votent aux mêmes élections et relèvent des mêmes lois.":
    "Ich mieszkańcy są Francuzami i obywatelami Unii Europejskiej, głosują w tych samych wyborach i podlegają tym samym ustawom.",
  "Quelle île fait partie des Antilles françaises ?":
    "Która wyspa należy do Antyli Francuskich?",
  "La Guadeloupe et la Martinique sont aux Antilles. La Réunion et Mayotte sont dans l'océan Indien.":
    "Gwadelupa i Martynika leżą na Antylach. Reunion i Majotta są na Oceanie Indyjskim.",
  "Quelle île est un département d'outre-mer français ?":
    "Która wyspa jest francuskim departamentem zamorskim?",
  "Madagascar": "Madagaskar",
  "Maurice": "Mauritius",
  "Haïti": "Haiti",
  "La Martinique est un département d'outre-mer. Madagascar, Maurice et Haïti sont des États indépendants.":
    "Martynika jest departamentem zamorskim. Madagaskar, Mauritius i Haiti to niepodległe państwa.",
  "De quelle ville française décolle la fusée Ariane ?":
    "Z którego francuskiego miasta startuje rakieta Ariane?",
  "Kourou, en Guyane": "Kourou, w Gujanie",
  "Fort-de-France": "Fort-de-France",
  "Le port spatial européen est à Kourou, en Guyane. La proximité de l'équateur facilite les lancements.":
    "Europejski port kosmiczny jest w Kourou, w Gujanie. Bliskość równika ułatwia starty.",
  "Quelle île française se trouve au sud-est du continent africain ?":
    "Która wyspa francuska leży na południowy wschód od kontynentu afrykańskiego?",
  "Saint-Pierre-et-Miquelon": "Saint-Pierre i Miquelon",
  "La Nouvelle-Calédonie": "Nowa Kaledonia",
  "La Réunion, dans l'océan Indien, près de Madagascar et de l'île Maurice.":
    "Reunion, na Oceanie Indyjskim, blisko Madagaskaru i Mauritiusa.",
  "Combien y a-t-il de départements d'outre-mer ?": "Ile jest departamentów zamorskich?",
  "5": "5",
  "7": "7",
  "Guadeloupe, Martinique, Guyane, La Réunion et Mayotte.":
    "Gwadelupa, Martynika, Gujana, Reunion i Majotta.",
  "Les habitants des départements d'outre-mer :": "Mieszkańcy departamentów zamorskich:",
  "sont français et citoyens de l'Union européenne":
    "są Francuzami i obywatelami Unii Europejskiej",
  "ont une nationalité distincte": "mają odrębne obywatelstwo",
  "ne votent pas aux élections nationales": "nie głosują w wyborach krajowych",
  "relèvent d'un droit entièrement séparé": "podlegają całkowicie odrębnemu prawu",
  "Mêmes droits, mêmes devoirs, mêmes élections, avec seulement des adaptations locales prévues par la loi.":
    "Te same prawa, te same obowiązki, te same wybory, tylko z dostosowaniami miejscowymi przewidzianymi ustawą.",
  "La Nouvelle-Calédonie se trouve :": "Nowa Kaledonia leży:",
  "dans l'océan Pacifique": "na Oceanie Spokojnym",
  "dans l'océan Indien": "na Oceanie Indyjskim",
  "dans la mer des Caraïbes": "na Morzu Karaibskim",
  "en Atlantique Nord": "na północnym Atlantyku",
  "Dans le Pacifique Sud, comme la Polynésie française et Wallis-et-Futuna.":
    "Na południowym Pacyfiku, jak Polinezja Francuska i Wallis i Futuna.",
  "Saint-Pierre-et-Miquelon se situe :": "Saint-Pierre i Miquelon leży:",
  "au large du Canada, dans l'Atlantique Nord": "u wybrzeży Kanady, na północnym Atlantyku",
  "aux Antilles": "na Antylach",
  "en Méditerranée": "na Morzu Śródziemnym",
  "Un archipel au sud de Terre-Neuve, dernier vestige de la Nouvelle-France en Amérique du Nord.":
    "Archipelag na południe od Nowej Fundlandii, ostatni ślad Nowej Francji w Ameryce Północnej.",
  "La Guyane est située :": "Gujana leży:",
  "en Amérique du Sud": "w Ameryce Południowej",
  "en Afrique": "w Afryce",
  "en Asie": "w Azji",
  "en Océanie": "w Oceanii",
  "Sur le continent sud-américain, entre le Brésil et le Suriname. C'est le plus vaste département français.":
    "Na kontynencie południowoamerykańskim, między Brazylią a Surinamem. To największy departament Francji.",
  "Combien d'habitants vivent dans les cinq départements d'outre-mer ?":
    "Ilu mieszkańców żyje w pięciu departamentach zamorskich?",
  "Environ 2,3 millions": "Około 2,3 miliona",
  "Environ 500 000": "Około 500 000",
  "Environ 8 millions": "Około 8 milionów",
  "Environ 15 millions": "Około 15 milionów",
  "Environ 2,3 millions au 1er janvier 2025, sur 68,6 millions d'habitants au total.":
    "Około 2,3 miliona na 1 stycznia 2025 roku, na 68,6 miliona mieszkańców ogółem.",
  "Dans quel grand musée parisien est exposée la Joconde ?":
    "W którym wielkim paryskim muzeum wystawiona jest Mona Lisa?",
  "Au Louvre": "W Luwrze",
  "Au musée d'Orsay": "W Musée d'Orsay",
  "Au Centre Pompidou": "W Centrum Pompidou",
  "Au musée Rodin": "W Muzeum Rodina",
  "Au Louvre. Le tableau de Léonard de Vinci est entré dans les collections royales au XVIe siècle.":
    "W Luwrze. Obraz Leonarda da Vinci trafił do zbiorów królewskich w XVI wieku.",
  "Quel peintre célèbre a peint les Nymphéas ?": "Który słynny malarz namalował Nenufary?",
  "Édouard Manet": "Édouard Manet",
  "Claude Monet. Les grands panneaux sont exposés au musée de l'Orangerie, à Paris.":
    "Claude Monet. Wielkie panele wystawione są w Musée de l'Orangerie w Paryżu.",
  "Qui était Molière ?": "Kim był Molier?",
  "Un auteur de théâtre du XVIIe siècle": "Autorem teatralnym z XVII wieku",
  "Un peintre impressionniste": "Malarzem impresjonistą",
  "Un compositeur": "Kompozytorem",
  "Un homme politique de la Révolution": "Politykiem rewolucji",
  "Le maître de la comédie française. On appelle le français « la langue de Molière ».":
    "Mistrz komedii francuskiej. Francuski nazywa się „językiem Moliera”.",
  "Qui était Charles Baudelaire ?": "Kim był Charles Baudelaire?",
  "Un poète du XIXe siècle": "Poetą z XIX wieku",
  "Un sculpteur": "Rzeźbiarzem",
  "Un roi de France": "Królem Francji",
  "Un scientifique": "Uczonym",
  "Poète, auteur des Fleurs du mal, publié en 1857.":
    "Poeta, autor Kwiatów zła, wydanych w 1857 roku.",
  "Qui était George Sand ?": "Kim była George Sand?",
  "Une romancière du XIXe siècle": "Powieściopisarką z XIX wieku",
  "Un peintre anglais": "Malarzem angielskim",
  "Un compositeur allemand": "Kompozytorem niemieckim",
  "Un général de l'Empire": "Generałem cesarstwa",
  "Une femme écrivain, de son vrai nom Aurore Dupin, qui avait choisi un pseudonyme masculin pour être publiée.":
    "Pisarka, naprawdę Aurore Dupin, która wybrała męski pseudonim, żeby ją wydawano.",
  "Qui était Marguerite Yourcenar ?": "Kim była Marguerite Yourcenar?",
  "La première femme élue à l'Académie française":
    "Pierwszą kobietą wybraną do Akademii Francuskiej",
  "Une chanteuse d'opéra": "Śpiewaczką operową",
  "Écrivaine, élue à l'Académie française en 1980, la première femme à y entrer.":
    "Pisarka, wybrana do Akademii Francuskiej w 1980 roku, pierwsza kobieta, która do niej weszła.",
  "Qui était Marie Curie ?": "Kim była Maria Curie?",
  "Une scientifique, deux fois prix Nobel": "Uczoną, dwukrotną noblistką",
  "Une reine de France": "Królową Francji",
  "Physicienne et chimiste, prix Nobel de physique puis de chimie. Elle repose au Panthéon.":
    "Fizyczka i chemiczka, noblistka z fizyki, a potem z chemii. Spoczywa w Panteonie.",
  "Qui était Auguste Rodin ?": "Kim był Auguste Rodin?",
  "Un peintre": "Malarzem",
  "Un écrivain": "Pisarzem",
  "Un architecte": "Architektem",
  "Sculpteur, auteur du Penseur et du Baiser. Un musée parisien lui est consacré.":
    "Rzeźbiarz, twórca Myśliciela i Pocałunku. Poświęcone mu jest paryskie muzeum.",
  "Qui était un célèbre compositeur français ?": "Kto był słynnym kompozytorem francuskim?",
  "Piotr Tchaïkovski": "Piotr Czajkowski",
  "Debussy, comme Ravel et Berlioz. Beethoven était allemand, Verdi italien, Tchaïkovski russe.":
    "Debussy, jak Ravel i Berlioz. Beethoven był Niemcem, Verdi Włochem, Czajkowski Rosjaninem.",
  "Quel monument historique se trouve sur une île en Normandie ?":
    "Który zabytek stoi na wyspie w Normandii?",
  "Le pont du Gard": "Pont du Gard",
  "La cité de Carcassonne": "Miasto Carcassonne",
  "Le Mont-Saint-Michel, sur un îlot rocheux dans la baie, classé au patrimoine mondial.":
    "Mont-Saint-Michel, na skalistej wysepce w zatoce, wpisany na listę światowego dziedzictwa.",
  "Pendant quelles journées peut-on visiter gratuitement des lieux culturels en France ?":
    "W które dni można we Francji bezpłatnie zwiedzać miejsca kultury?",
  "Les Journées européennes du patrimoine": "Europejskie Dni Dziedzictwa",
  "Les vacances de Noël": "Ferie bożonarodzeniowe",
  "Le 14 juillet uniquement": "Wyłącznie 14 lipca",
  "La Fête de la musique": "Święto Muzyki",
  "Le troisième week-end de septembre, des lieux habituellement fermés ouvrent gratuitement au public.":
    "W trzeci weekend września miejsca zwykle zamknięte otwierają się bezpłatnie dla publiczności.",
  "Que symbolise le 1er mai en France ?": "Co symbolizuje 1 maja we Francji?",
  "La fête nationale": "Święto narodowe",
  "Le 1er mai est la fête du Travail, jour férié et chômé pour la plupart des salariés.":
    "1 maja to święto pracy, dzień ustawowo wolny i nieprzepracowany dla większości pracowników.",
  "Quel plat est une spécialité de la cuisine française ?":
    "Która potrawa jest specjalnością kuchni francuskiej?",
  "Le pot-au-feu": "Pot-au-feu",
  "La paella": "Paella",
  "Le couscous royal marocain": "Marokański kuskus królewski",
  "Les spaghettis carbonara": "Spaghetti carbonara",
  "Le pot-au-feu, comme le bœuf bourguignon ou le cassoulet. Le repas gastronomique des Français est inscrit au patrimoine de l'UNESCO.":
    "Pot-au-feu, tak jak bœuf bourguignon albo cassoulet. Francuski posiłek gastronomiczny jest wpisany na listę dziedzictwa UNESCO.",
  "Qui était Albert Camus ?": "Kim był Albert Camus?",
  "Un écrivain et philosophe du XXe siècle": "Pisarzem i filozofem XX wieku",
  "Un peintre du XIXe siècle": "Malarzem XIX wieku",
  "Un président de la République": "Prezydentem Republiki",
  "Écrivain et philosophe, prix Nobel de littérature en 1957, auteur de L'Étranger et de La Peste.":
    "Pisarz i filozof, noblista w dziedzinie literatury w 1957 roku, autor Obcego i Dżumy.",
  "Quel mariage est reconnu légalement en France ?":
    "Które małżeństwo jest we Francji uznawane prawnie?",
  "Le mariage civil célébré en mairie": "Małżeństwo cywilne zawarte w merostwie",
  "Le mariage religieux": "Małżeństwo religijne",
  "Le mariage célébré chez un notaire": "Małżeństwo zawarte u notariusza",
  "Le mariage déclaré devant témoins": "Małżeństwo ogłoszone przed świadkami",
  "Seul le mariage civil produit des effets juridiques. Une cérémonie religieuse ne peut avoir lieu qu'après lui.":
    "Tylko małżeństwo cywilne rodzi skutki prawne. Ceremonia religijna może odbyć się dopiero po nim.",
  "Dans quel cas faut-il déclarer son enfant au service d'état civil ?":
    "W jakim przypadku trzeba zgłosić dziecko w urzędzie stanu cywilnego?",
  "Pour tout enfant né en France, quelle que soit la nationalité des parents":
    "Przy każdym dziecku urodzonym we Francji, niezależnie od obywatelstwa rodziców",
  "Seulement si les deux parents sont français": "Tylko jeśli oboje rodzice są Francuzami",
  "Seulement si l'enfant naît à l'hôpital": "Tylko jeśli dziecko rodzi się w szpitalu",
  "Seulement si les parents sont mariés": "Tylko jeśli rodzice są małżeństwem",
  "Toute naissance survenue en France est déclarée à la mairie du lieu de naissance.":
    "Każde urodzenie, do którego doszło we Francji, zgłasza się w merostwie miejsca urodzenia.",
  "Quand faut-il déclarer son enfant au service d'état civil ?":
    "Kiedy trzeba zgłosić dziecko w urzędzie stanu cywilnego?",
  "Dans les cinq jours qui suivent la naissance": "W ciągu pięciu dni po urodzeniu",
  "Dans le mois": "W ciągu miesiąca",
  "Dans l'année": "W ciągu roku",
  "Avant le premier anniversaire": "Przed pierwszymi urodzinami",
  "Cinq jours, le jour de l'accouchement n'étant pas compté. Passé ce délai, il faut un jugement pour régulariser.":
    "Pięć dni, przy czym dnia porodu się nie liczy. Po tym terminie do uregulowania potrzebne jest orzeczenie sądu.",
  "Qui peut demander le divorce de personnes mariées ?":
    "Kto może żądać rozwodu osób będących w związku małżeńskim?",
  "L'un des deux époux, ou les deux d'un commun accord":
    "Jedno z małżonków albo oboje za obopólną zgodą",
  "Uniquement les deux ensemble": "Wyłącznie oboje razem",
  "Uniquement l'époux qui travaille": "Wyłącznie ten małżonek, który pracuje",
  "La famille des époux": "Rodzina małżonków",
  "Le divorce peut être demandé unilatéralement. L'accord de l'autre n'est pas nécessaire pour engager la procédure.":
    "O rozwód można wystąpić jednostronnie. Zgoda drugiej strony nie jest potrzebna, żeby wszcząć postępowanie.",
  "Quelle est la définition de l'autorité parentale ?":
    "Jaka jest definicja władzy rodzicielskiej?",
  "L'ensemble des droits et devoirs pour protéger l'enfant : sécurité, santé, éducation, moralité":
    "Ogół praw i obowiązków służących ochronie dziecka: bezpieczeństwo, zdrowie, wychowanie, moralność",
  "Le droit de décider seul de la vie de l'enfant":
    "Prawo do samodzielnego decydowania o życiu dziecka",
  "Le droit de punir physiquement un enfant": "Prawo do fizycznego karania dziecka",
  "Le pouvoir du parent le plus âgé": "Władza starszego rodzica",
  "C'est un ensemble de devoirs autant que de droits, exercé dans l'intérêt de l'enfant et sans violence.":
    "To zbiór obowiązków w tym samym stopniu co praw, wykonywany w interesie dziecka i bez przemocy.",
  "Quelle action peut réaliser le locataire d'un logement sans l'autorisation du propriétaire ?":
    "Które działanie najemca mieszkania może wykonać bez zgody właściciela?",
  "Repeindre les murs et meubler le logement": "Odmalować ściany i umeblować mieszkanie",
  "Abattre une cloison": "Wyburzyć ściankę działową",
  "Transformer un garage en chambre": "Przerobić garaż na pokój",
  "Changer les fenêtres": "Wymienić okna",
  "L'entretien et la décoration relèvent du locataire ; toute transformation demande l'accord écrit du propriétaire.":
    "Utrzymanie i wystrój należą do najemcy; każda przebudowa wymaga pisemnej zgody właściciela.",
  "Si la machine à laver fournie avec le logement tombe en panne, il est possible de :":
    "Jeśli pralka dostarczona z mieszkaniem się zepsuje, można:",
  "demander au propriétaire de la réparer ou de la remplacer":
    "poprosić właściciela o jej naprawę albo wymianę",
  "l'enlever et déduire son prix du loyer": "usunąć ją i odliczyć jej cenę od czynszu",
  "cesser de payer le loyer": "przestać płacić czynsz",
  "exiger un déménagement immédiat": "zażądać natychmiastowej przeprowadzki",
  "Un équipement fourni avec le logement est à la charge du propriétaire, sauf si le locataire l'a détérioré.":
    "Wyposażenie dostarczone z mieszkaniem obciąża właściciela, chyba że najemca je uszkodził.",
  "Le PACS est :": "PACS jest:",
  "un contrat d'union civile ouvert à tous les couples":
    "umową związku cywilnego otwartą dla wszystkich par",
  "un contrat de travail": "umową o pracę",
  "un régime de retraite": "systemem emerytalnym",
  "un type de bail d'habitation": "rodzajem umowy najmu mieszkania",
  "Le pacte civil de solidarité organise la vie commune de deux personnes majeures, avec moins de formalités que le mariage.":
    "Pacte civil de solidarité porządkuje wspólne życie dwóch pełnoletnich osób, przy mniejszych formalnościach niż małżeństwo.",
  "Depuis quelle année le mariage entre personnes de même sexe est-il légal en France ?":
    "Od którego roku małżeństwo osób tej samej płci jest we Francji legalne?",
  "2013": "2013",
  "Depuis la loi de 2013. Le PACS, ouvert aux couples de même sexe, existait depuis 1999.":
    "Od ustawy z 2013 roku. PACS, otwarty dla par tej samej płci, istniał od 1999.",
  "Un parent frappe régulièrement son enfant pour le punir. Que dit la loi depuis 2019 ?":
    "Rodzic regularnie bije swoje dziecko, żeby je ukarać. Co mówi prawo od 2019 roku?",
  "Les violences éducatives sont interdites, quelle que soit leur intensité":
    "Przemoc wychowawcza jest zakazana, niezależnie od jej natężenia",
  "C'est autorisé jusqu'à un certain âge": "Jest dozwolona do pewnego wieku",
  "C'est autorisé si l'autre parent est d'accord":
    "Jest dozwolona, jeśli drugi rodzic się zgadza",
  "C'est une affaire strictement privée": "To sprawa ściśle prywatna",
  "L'autorité parentale s'exerce sans violence physique ni psychologique. Le principe figure dans le Code civil.":
    "Władzę rodzicielską wykonuje się bez przemocy fizycznej ani psychicznej. Zasada ta stoi w Kodeksie cywilnym.",
  "Où obtient-on un acte de naissance ?": "Gdzie uzyskuje się akt urodzenia?",
  "À la mairie du lieu de naissance": "W merostwie miejsca urodzenia",
  "La mairie tient les registres de l'état civil et délivre les actes de naissance, de mariage et de décès.":
    "Merostwo prowadzi rejestry stanu cywilnego i wydaje akty urodzenia, małżeństwa i zgonu.",
  "Auprès de quel organisme faut-il demander le remboursement des frais de santé ?":
    "W której instytucji trzeba wnioskować o zwrot kosztów leczenia?",
  "L'Assurance maladie, par l'intermédiaire de la caisse primaire d'assurance maladie (CPAM).":
    "W Assurance maladie, za pośrednictwem miejscowej kasy chorych (CPAM).",
  "L'inscription à l'Assurance maladie est :": "Zapisanie się do Assurance maladie jest:",
  "réservée aux salariés": "zastrzeżone dla pracowników najemnych",
  "renouvelable chaque année": "odnawialne co roku",
  "C'est une affiliation obligatoire, pas un contrat que l'on choisit de signer ou non.":
    "To obowiązkowa przynależność, a nie umowa, którą można podpisać albo nie.",
  "À quoi sert une mutuelle santé ?": "Czemu służy mutuelle zdrowotna?",
  "À rembourser ce que l'Assurance maladie ne couvre pas":
    "Zwrotowi tego, czego Assurance maladie nie pokrywa",
  "À remplacer l'Assurance maladie": "Zastąpieniu Assurance maladie",
  "À payer les médicaments à la place du patient": "Opłaceniu leków zamiast pacjenta",
  "À financer les hôpitaux publics": "Finansowaniu szpitali publicznych",
  "C'est une complémentaire santé, facultative. Beaucoup d'employeurs en proposent une à leurs salariés.":
    "To ubezpieczenie uzupełniające, dobrowolne. Wielu pracodawców oferuje je swoim pracownikom.",
  "La contraception en France est :": "Antykoncepcja we Francji jest:",
  "libre, et gratuite pour les jeunes femmes": "swobodna, a dla młodych kobiet bezpłatna",
  "interdite aux mineures": "zakazana osobom niepełnoletnim",
  "soumise à l'accord du conjoint": "uzależniona od zgody współmałżonka",
  "réservée aux personnes mariées": "zastrzeżona dla osób w związku małżeńskim",
  "Elle est libre et confidentielle, et prise en charge intégralement pour les femmes jusqu'à 25 ans.":
    "Jest swobodna i poufna, a dla kobiet do 25 roku życia w całości refundowana.",
  "L'interruption volontaire de grossesse est-elle possible en France ?":
    "Czy przerwanie ciąży jest we Francji możliwe?",
  "Oui, elle est légale depuis 1975": "Tak, jest legalne od 1975 roku",
  "Non, elle est interdite": "Nie, jest zakazane",
  "Oui, mais uniquement à l'étranger": "Tak, ale wyłącznie za granicą",
  "Oui, avec l'accord du conjoint": "Tak, za zgodą współmałżonka",
  "Légale depuis la loi Veil de 1975. Depuis 2024, la liberté d'y recourir est garantie par la Constitution.":
    "Legalne od ustawy Veil z 1975 roku. Od 2024 wolność skorzystania z niego gwarantuje konstytucja.",
  "Le médecin traitant sert à :": "Lekarz prowadzący służy do:",
  "coordonner les soins et donner droit au meilleur taux de remboursement":
    "koordynowania leczenia i otwiera prawo do najwyższej stawki zwrotu",
  "délivrer la carte Vitale": "wydawania karty Vitale",
  "fixer le prix des consultations": "ustalania cen wizyt",
  "gérer la mutuelle du patient": "zarządzania ubezpieczeniem uzupełniającym pacjenta",
  "Le parcours de soins coordonné passe par lui. Consulter un spécialiste sans passer par lui réduit le remboursement.":
    "Skoordynowana ścieżka leczenia prowadzi przez niego. Wizyta u specjalisty z jego pominięciem zmniejsza zwrot.",
  "La carte Vitale sert-elle à payer les consultations ?":
    "Czy karta Vitale służy do płacenia za wizyty?",
  "Non, elle atteste des droits et transmet les soins":
    "Nie, poświadcza uprawnienia i przekazuje dane o świadczeniach",
  "Oui, c'est une carte de paiement": "Tak, to karta płatnicza",
  "Oui, mais seulement à la pharmacie": "Tak, ale tylko w aptece",
  "Oui, dans les hôpitaux publics": "Tak, w szpitalach publicznych",
  "Elle n'est ni un moyen de paiement ni une pièce d'identité : elle prouve les droits et transmet la feuille de soins.":
    "Nie jest ani środkiem płatniczym, ani dokumentem tożsamości: poświadcza uprawnienia i przekazuje kartę świadczeń.",
  "Une personne aux revenus modestes peut bénéficier :":
    "Osoba o skromnych dochodach może skorzystać:",
  "de la complémentaire santé solidaire": "z complémentaire santé solidaire",
  "d'une exonération d'impôts automatique": "z automatycznego zwolnienia z podatków",
  "d'une carte Vitale gratuite en plus": "z dodatkowej bezpłatnej karty Vitale",
  "d'un médecin traitant imposé": "z narzuconego lekarza prowadzącego",
  "La complémentaire santé solidaire prend en charge, gratuitement ou à faible coût, ce que l'Assurance maladie ne rembourse pas.":
    "Complémentaire santé solidaire pokrywa, bezpłatnie albo za niewielką opłatą, to, czego Assurance maladie nie zwraca.",
  "En quelle année la loi légalisant l'IVG a-t-elle été votée ?":
    "W którym roku uchwalono ustawę legalizującą przerywanie ciąży?",
  "1965": "1965",
  "1981": "1981",
  "La loi Veil, portée par Simone Veil, alors ministre de la Santé.":
    "Ustawa Veil, przeprowadzona przez Simone Veil, ówczesną minister zdrowia.",
  "Que couvre la Sécurité sociale ?": "Co pokrywa Sécurité sociale?",
  "La maladie, la vieillesse, la famille et les accidents du travail":
    "Chorobę, starość, sprawy rodzinne i wypadki przy pracy",
  "Uniquement les hospitalisations": "Wyłącznie hospitalizacje",
  "Uniquement les retraites": "Wyłącznie emerytury",
  "Les dommages causés à un logement": "Szkody wyrządzone w mieszkaniu",
  "Quatre branches. Les dommages au logement relèvent d'une assurance privée, pas de la Sécurité sociale.":
    "Cztery działy. Szkody w mieszkaniu należą do ubezpieczenia prywatnego, a nie do Sécurité sociale.",
  "Une jeune femme de 17 ans souhaite une contraception. Le professionnel de santé doit :":
    "Siedemnastolatka chce antykoncepcji. Pracownik ochrony zdrowia musi:",
  "la lui délivrer de façon confidentielle": "wydać ją jej w sposób poufny",
  "prévenir ses parents": "zawiadomić jej rodziców",
  "refuser jusqu'à sa majorité": "odmówić do jej pełnoletności",
  "demander l'autorisation de la mairie": "poprosić o zezwolenie merostwa",
  "La délivrance est confidentielle et gratuite pour les mineures. Le secret médical s'applique pleinement.":
    "Wydanie jest poufne i bezpłatne dla osób niepełnoletnich. Tajemnica lekarska obowiązuje w pełni.",
  "Quelle est la durée légale du temps de travail par semaine ?":
    "Jaki jest ustawowy tygodniowy czas pracy?",
  "35 heures": "35 godzin",
  "39 heures": "39 godzin",
  "40 heures": "40 godzin",
  "42 heures": "42 godziny",
  "35 heures. Au-delà, ce sont des heures supplémentaires, qui donnent lieu à une majoration de salaire ou à un repos.":
    "35 godzin. Powyżej to godziny nadliczbowe, za które przysługuje dodatek do płacy albo odpoczynek.",
  "Quelle est la première démarche à réaliser pour chercher un emploi ?":
    "Jaki jest pierwszy krok w poszukiwaniu pracy?",
  "S'inscrire à France Travail": "Zapisać się do France Travail",
  "Se rendre à la préfecture": "Udać się do prefektury",
  "Attendre une offre par courrier": "Czekać na ofertę listem",
  "L'inscription à France Travail — l'ancien Pôle emploi — ouvre l'accompagnement, les offres et, sous conditions, l'allocation chômage.":
    "Zapisanie się do France Travail — dawnego Pôle emploi — otwiera wsparcie, oferty i, pod pewnymi warunkami, zasiłek dla bezrobotnych.",
  "Quels sont les textes qui définissent les règles au travail ?":
    "Które teksty określają zasady w pracy?",
  "Le Code du travail, les conventions collectives et le contrat de travail":
    "Kodeks pracy, układy zbiorowe i umowa o pracę",
  "Le Code civil uniquement": "Wyłącznie Kodeks cywilny",
  "Le règlement de la commune": "Regulamin gminy",
  "Les statuts du syndicat": "Statut związku zawodowego",
  "Trois niveaux qui s'emboîtent, le plus favorable au salarié s'appliquant généralement.":
    "Trzy poziomy, które się zazębiają, a stosuje się zwykle ten najkorzystniejszy dla pracownika.",
  "Qui peut demander un congé parental d'éducation ?": "Kto może wystąpić o urlop wychowawczy?",
  "Le père comme la mère": "Zarówno ojciec, jak i matka",
  "La mère uniquement": "Wyłącznie matka",
  "Le parent qui gagne le moins": "Ten rodzic, który zarabia mniej",
  "Les seuls salariés en contrat à durée indéterminée":
    "Wyłącznie pracownicy na umowie na czas nieokreślony",
  "Les deux parents y ont droit, sous condition d'ancienneté, à la naissance ou à l'adoption d'un enfant.":
    "Oboje rodzice mają do niego prawo, pod warunkiem stażu, przy urodzeniu albo przysposobieniu dziecka.",
  "Une personne étrangère en situation régulière peut créer son entreprise :":
    "Cudzoziemiec przebywający legalnie może założyć własną firmę:",
  "oui, comme toute personne remplissant les conditions":
    "tak, jak każda osoba spełniająca warunki",
  "non, c'est réservé aux Français": "nie, to zastrzeżone dla Francuzów",
  "seulement après dix ans de résidence": "dopiero po dziesięciu latach pobytu",
  "seulement avec un associé français": "tylko ze wspólnikiem Francuzem",
  "Le titre de séjour doit permettre l'activité envisagée, mais la nationalité n'est pas une condition en soi.":
    "Tytuł pobytowy musi pozwalać na zamierzoną działalność, ale obywatelstwo samo w sobie nie jest warunkiem.",
  "Une femme peut-elle créer son entreprise ?": "Czy kobieta może założyć własną firmę?",
  "Oui, dans les mêmes conditions qu'un homme": "Tak, na tych samych warunkach co mężczyzna",
  "Non, sans l'accord de son conjoint": "Nie, bez zgody współmałżonka",
  "Seulement dans certains secteurs": "Tylko w niektórych branżach",
  "Seulement si elle a plus de 25 ans": "Tylko jeśli ma ponad 25 lat",
  "L'égalité entre les femmes et les hommes vaut aussi pour l'entrepreneuriat. Aucune autorisation d'un tiers n'est requise.":
    "Równość kobiet i mężczyzn obowiązuje także w przedsiębiorczości. Zgoda osoby trzeciej nie jest wymagana.",
  "Est-il possible de licencier une femme enceinte ou en congé maternité en raison de sa grossesse ?":
    "Czy można zwolnić kobietę w ciąży albo na urlopie macierzyńskim z powodu jej ciąży?",
  "Non, c'est illégal": "Nie, to niezgodne z prawem",
  "Oui, avec un préavis plus long": "Tak, z dłuższym wypowiedzeniem",
  "Oui, dans les entreprises de moins de dix salariés":
    "Tak, w firmach poniżej dziesięciu pracowników",
  "Oui, si le poste est supprimé": "Tak, jeśli stanowisko zostaje zlikwidowane",
  "La grossesse et la maternité sont des motifs de licenciement expressément interdits, et la protection est renforcée pendant le congé.":
    "Ciąża i macierzyństwo są wprost zakazanymi powodami zwolnienia, a w czasie urlopu ochrona jest wzmocniona.",
  "Depuis le 1er juillet 2021, quelle est la durée du congé paternité ?":
    "Od 1 lipca 2021 roku, ile trwa urlop ojcowski?",
  "25 jours, auxquels s'ajoutent 3 jours de naissance":
    "25 dni, do których dochodzą 3 dni z tytułu urodzenia",
  "11 jours": "11 dni",
  "6 semaines": "6 tygodni",
  "3 jours seulement": "Tylko 3 dni",
  "25 jours calendaires, portés à 32 pour des naissances multiples, plus les 3 jours de congé de naissance.":
    "25 dni kalendarzowych, zwiększone do 32 przy porodzie mnogim, plus 3 dni urlopu z tytułu urodzenia.",
  "À quoi sert l'inspection du travail ?": "Do czego służy inspekcja pracy?",
  "À contrôler l'application du droit du travail dans les entreprises":
    "Do kontrolowania stosowania prawa pracy w przedsiębiorstwach",
  "À juger les licenciements": "Do osądzania zwolnień",
  "À payer les salaires en cas de faillite": "Do wypłacania wynagrodzeń w razie upadłości",
  "À délivrer les contrats de travail": "Do wydawania umów o pracę",
  "Elle contrôle et peut sanctionner. Les litiges individuels, eux, sont tranchés par le conseil de prud'hommes.":
    "Kontroluje i może karać. Spory indywidualne rozstrzyga natomiast conseil de prud'hommes.",
  "Quelle conséquence a le travail dissimulé pour le salarié ?":
    "Jaki skutek ma dla pracownika praca na czarno?",
  "Il perd ses droits à la retraite, au chômage et à la couverture accident":
    "Traci uprawnienia do emerytury, zasiłku dla bezrobotnych i ochrony wypadkowej",
  "Il paie moins d'impôts sans risque": "Płaci mniej podatków bez ryzyka",
  "Il conserve tous ses droits": "Zachowuje wszystkie swoje uprawnienia",
  "Il ne peut plus être embauché légalement": "Nie może już zostać legalnie zatrudniony",
  "Sans déclaration, il n'y a pas de cotisations — donc ni trimestres de retraite, ni allocation chômage, ni prise en charge d'un accident du travail.":
    "Bez zgłoszenia nie ma składek — a więc ani kwartałów emerytalnych, ani zasiłku dla bezrobotnych, ani pokrycia wypadku przy pracy.",
  "Un employeur peut-il payer un salarié moins que le SMIC ?":
    "Czy pracodawca może płacić pracownikowi mniej niż SMIC?",
  "Non, jamais": "Nie, nigdy",
  "Oui, pour un temps partiel": "Tak, przy części etatu",
  "Oui, si le salarié est d'accord": "Tak, jeśli pracownik się zgadza",
  "Le SMIC est un plancher légal. Aucun accord, même signé par le salarié, ne peut y déroger.":
    "SMIC jest ustawowym progiem. Żadne porozumienie, nawet podpisane przez pracownika, nie może od niego odstąpić.",
  "L'instruction des enfants est obligatoire de :": "Nauka dzieci jest obowiązkowa od:",
  "3 à 16 ans": "3 do 16 roku życia",
  "6 à 16 ans": "6 do 16 roku życia",
  "3 à 18 ans": "3 do 18 roku życia",
  "6 à 18 ans": "6 do 18 roku życia",
  "De 3 à 16 ans depuis la rentrée 2019, complétée par une obligation de formation de 16 à 18 ans.":
    "Od 3 do 16 lat od roku szkolnego 2019, uzupełniona obowiązkiem kształcenia od 16 do 18 lat.",
  "Jusqu'à quel âge l'école est-elle obligatoire ?": "Do jakiego wieku szkoła jest obowiązkowa?",
  "14 ans": "14 lat",
  "L'instruction est obligatoire jusqu'à 16 ans ; de 16 à 18 ans, le jeune doit être en formation, en emploi ou en accompagnement.":
    "Nauka jest obowiązkowa do 16 roku życia; od 16 do 18 lat młody człowiek musi się kształcić, pracować albo być objęty wsparciem.",
  "Auprès de quelle institution les parents inscrivent-ils leurs enfants à l'école publique ?":
    "W której instytucji rodzice zapisują dzieci do szkoły publicznej?",
  "Le rectorat": "W rektoracie",
  "Le conseil départemental": "W radzie departamentu",
  "La mairie procède à l'inscription et affecte l'enfant à une école de la commune.":
    "Zapisu dokonuje merostwo i przydziela dziecko do szkoły w gminie.",
  "Quel motif d'absence est accepté par l'école ?": "Jaki powód nieobecności szkoła przyjmuje?",
  "La maladie de l'enfant": "Chorobę dziecka",
  "Un voyage familial pendant la période scolaire": "Wyjazd rodzinny w czasie roku szkolnego",
  "Le désaccord avec un enseignement": "Niezgodę na treść nauczania",
  "Le mauvais temps": "Złą pogodę",
  "Maladie, maladie contagieuse dans la famille, réunion solennelle de famille, empêchement de transport, absence des responsables.":
    "Choroba, choroba zakaźna w rodzinie, uroczyste zebranie rodzinne, przeszkoda w transporcie, nieobecność opiekunów.",
  "Des parents ne respectent pas l'obligation d'instruction. Quelle sanction maximale risquent-ils ?":
    "Rodzice nie przestrzegają obowiązku nauki. Jaka najwyższa kara im grozi?",
  "Une amende et, dans les cas les plus graves, une peine d'emprisonnement":
    "Grzywna, a w najcięższych przypadkach kara pozbawienia wolności",
  "Un simple rappel à l'ordre": "Zwykłe upomnienie",
  "La perte des allocations uniquement": "Wyłącznie utrata zasiłków",
  "Aucune sanction": "Żadna kara",
  "Le manquement à l'obligation d'instruction est un délit, sanctionné après des étapes de rappel et de mise en demeure.":
    "Uchybienie obowiązkowi nauki jest występkiem, karanym po etapach upomnienia i wezwania.",
  "En tant que parent d'élève, il est possible de :": "Jako rodzic ucznia można:",
  "se faire élire au conseil d'école ou au conseil d'administration":
    "zostać wybranym do rady szkoły albo do rady placówki",
  "choisir les enseignants de son enfant": "wybierać nauczycieli swojego dziecka",
  "modifier les programmes scolaires": "zmieniać programy szkolne",
  "dispenser son enfant d'une matière": "zwolnić swoje dziecko z przedmiotu",
  "Les parents élisent leurs représentants chaque année et participent aux instances de l'établissement.":
    "Rodzice wybierają swoich przedstawicieli co roku i uczestniczą w organach placówki.",
  "Quelle instruction est prévue pour les enfants qui ne parlent pas français ?":
    "Jaka nauka jest przewidziana dla dzieci, które nie mówią po francusku?",
  "Un accueil avec des cours de français adaptés, en suivant les autres enseignements":
    "Przyjęcie z dostosowanymi lekcjami francuskiego, przy jednoczesnym udziale w pozostałych zajęciach",
  "Une scolarisation reportée d'un an": "Odroczenie nauki o rok",
  "Un enseignement uniquement dans leur langue": "Nauczanie wyłącznie w ich języku",
  "Aucun dispositif particulier": "Żadnego szczególnego rozwiązania",
  "Des dispositifs d'accueil permettent d'apprendre le français tout en suivant le reste de la scolarité.":
    "Rozwiązania przyjęciowe pozwalają uczyć się francuskiego, uczestnicząc jednocześnie w reszcie nauki.",
  "S'agissant de l'accueil des enfants en situation de handicap à l'école, laquelle de ces propositions est vraie ?":
    "Co do przyjmowania dzieci z niepełnosprawnością w szkole, które z tych stwierdzeń jest prawdziwe?",
  "Ils ont droit à être scolarisés en milieu ordinaire avec les aménagements nécessaires":
    "Mają prawo do nauki w szkole ogólnodostępnej, z koniecznymi dostosowaniami",
  "Ils doivent être scolarisés dans des établissements séparés":
    "Muszą uczyć się w placówkach odrębnych",
  "Leur scolarisation dépend de l'accord des autres parents":
    "Ich nauka zależy od zgody pozostałych rodziców",
  "Ils sont dispensés d'instruction": "Są zwolnione z obowiązku nauki",
  "L'école inclusive est un droit : aménagements, matériel adapté et accompagnement humain quand c'est nécessaire.":
    "Szkoła włączająca jest prawem: dostosowania, odpowiedni sprzęt i wsparcie osoby, gdy jest potrzebne.",
  "Depuis quelle année l'école publique est-elle gratuite ?":
    "Od którego roku szkoła publiczna jest bezpłatna?",
  "La loi Jules Ferry de 1881 rend l'école gratuite ; celle de 1882 la rend obligatoire et laïque.":
    "Ustawa Jules'a Ferry'ego z 1881 roku czyni szkołę bezpłatną; ta z 1882 czyni ją obowiązkową i świecką.",
  "Le lycée mène à :": "Liceum prowadzi do:",
  "au baccalauréat": "matury",
  "au brevet": "brevet",
  "au certificat d'études": "certificat d'études",
  "au doctorat": "doktoratu",
  "Le baccalauréat s'obtient en fin de lycée ; le brevet marque la fin du collège.":
    "Maturę zdaje się na koniec liceum; brevet wieńczy gimnazjum.",
  "L'instruction obligatoire signifie que :": "Obowiązek nauki oznacza, że:",
  "l'enfant doit être instruit, à l'école ou, sous conditions, dans la famille":
    "dziecko musi być kształcone, w szkole albo, pod pewnymi warunkami, w rodzinie",
  "l'enfant doit obligatoirement être scolarisé dans une école publique":
    "dziecko musi obowiązkowo chodzić do szkoły publicznej",
  "l'enfant peut choisir de ne pas apprendre à lire":
    "dziecko może zdecydować, że nie nauczy się czytać",
  "les parents doivent enseigner eux-mêmes": "rodzice muszą uczyć sami",
  "C'est l'instruction qui est obligatoire, pas l'établissement. L'instruction en famille est soumise à autorisation et à contrôle.":
    "Obowiązkowa jest nauka, a nie placówka. Nauczanie w rodzinie wymaga zezwolenia i podlega kontroli.",
  "Quel numéro d'urgence permet d'appeler la police ?": "Który numer alarmowy łączy z policją?",
  "119": "119",
  "Le 17 pour la police ou la gendarmerie, le 15 pour le SAMU, le 18 pour les pompiers.":
    "17 do policji albo żandarmerii, 15 do pogotowia SAMU, 18 do straży pożarnej.",
  "Quel numéro d'urgence fonctionne dans toute l'Union européenne ?":
    "Który numer alarmowy działa w całej Unii Europejskiej?",
  "Le 112 est le numéro d'urgence européen, joignable gratuitement depuis n'importe quel téléphone.":
    "112 to europejski numer alarmowy, bezpłatnie osiągalny z każdego telefonu.",
  "Quel numéro appeler en cas d'incendie ?": "Pod jaki numer dzwonić w razie pożaru?",
  "114": "114",
  "Le 18 pour les pompiers. Le 114 est le numéro d'urgence par SMS pour les personnes sourdes ou malentendantes.":
    "18 do straży pożarnej. 114 to numer alarmowy przez SMS dla osób głuchych i niedosłyszących.",
  "Où demande-t-on un titre de séjour ?": "Gdzie wnioskuje się o tytuł pobytowy?",
  "À la CPAM": "W CPAM",
  "La préfecture, où le préfet représente l'État. La mairie s'occupe de l'état civil et des titres d'identité français.":
    "W prefekturze, gdzie prefekt reprezentuje państwo. Merostwo zajmuje się stanem cywilnym i francuskimi dokumentami tożsamości.",
  "Une administration traite un usager différemment à cause de sa religion. Quel organisme peut-il saisir gratuitement ?":
    "Urząd traktuje petenta inaczej z powodu jego religii. Do której instytucji może zwrócić się bezpłatnie?",
  "La Cour des comptes": "Do Trybunału Obrachunkowego",
  "Le Défenseur des droits est compétent pour les discriminations et les relations avec les services publics.":
    "Défenseur des droits jest właściwy w sprawach dyskryminacji i relacji ze służbami publicznymi.",
  "Quel numéro appeler pour signaler un enfant en danger ?":
    "Pod jaki numer dzwonić, żeby zgłosić dziecko w niebezpieczeństwie?",
  "Le 119, joignable gratuitement et anonymement, 24 heures sur 24.":
    "119, osiągalny bezpłatnie i anonimowo, przez całą dobę.",
  "Un usager du service public peut :": "Petent służby publicznej może:",
  "demander une information, obtenir un document et déposer une réclamation":
    "poprosić o informację, otrzymać dokument i złożyć reklamację",
  "exiger d'être servi avant les autres": "żądać obsłużenia przed innymi",
  "choisir l'agent qui le reçoit": "wybrać pracownika, który go przyjmie",
  "obtenir un document sans justificatif": "otrzymać dokument bez zaświadczenia",
  "Le service public doit l'information, le traitement égal et une voie de réclamation. Il ne doit pas de passe-droit.":
    "Służba publiczna winna jest informację, równe traktowanie i drogę reklamacji. Nie jest winna przywileju.",
  "Le 114 sert à :": "114 służy do:",
  "joindre les secours par SMS pour les personnes sourdes ou malentendantes":
    "łączenia się ze służbami ratunkowymi przez SMS dla osób głuchych i niedosłyszących",
  "signaler une panne d'électricité": "zgłaszania awarii prądu",
  "joindre un médecin de garde": "łączenia się z lekarzem dyżurnym",
  "déclarer un vol de téléphone": "zgłaszania kradzieży telefonu",
  "C'est le numéro d'urgence accessible par SMS et par visio, pour toute urgence médicale, policière ou incendie.":
    "To numer alarmowy dostępny przez SMS i wideo, przy każdej sytuacji medycznej, policyjnej albo pożarowej.",
  "Où s'adresser pour une demande de permis de conduire ?":
    "Gdzie zwrócić się z wnioskiem o prawo jazdy?",
  "Aux services de l'État, en ligne, sous l'autorité de la préfecture":
    "Do służb państwowych, przez internet, pod zwierzchnictwem prefektury",
  "Au conseil régional": "Do rady regionu",
  "Les démarches de permis et de carte grise relèvent de l'État et se font en ligne, la préfecture restant l'autorité compétente.":
    "Sprawy prawa jazdy i dowodu rejestracyjnego należą do państwa i załatwia się je przez internet, a prefektura pozostaje właściwym organem.",
  "France Travail s'occupe :": "France Travail zajmuje się:",
  "de la recherche d'emploi et de l'accompagnement des demandeurs":
    "poszukiwaniem pracy i wsparciem osób jej szukających",
  "du remboursement des soins": "zwrotem kosztów leczenia",
  "de l'état civil": "stanem cywilnym",
  "des titres de séjour": "tytułami pobytowymi",
  "C'est l'ancien Pôle emploi. L'inscription est la première démarche pour chercher un emploi.":
    "To dawne Pôle emploi. Zapisanie się jest pierwszym krokiem w poszukiwaniu pracy.",
  "Un agent public refuse de recevoir un usager parce qu'il porte un signe religieux. Cette attitude est :":
    "Pracownik publiczny odmawia przyjęcia petenta, bo ten nosi znak religijny. Ta postawa jest:",
  "illégale : la neutralité s'impose à l'agent, pas à l'usager":
    "niezgodna z prawem: neutralność obowiązuje pracownika, a nie petenta",
  "conforme au principe de laïcité": "zgodna z zasadą laïcité",
  "laissée à l'appréciation de l'agent": "pozostawiona ocenie pracownika",
  "autorisée dans les mairies": "dozwolona w merostwach",
  "La laïcité oblige l'agent à être neutre et à servir tout le monde. Elle n'impose rien à la tenue des usagers.":
    "Laïcité zobowiązuje pracownika do neutralności i do obsłużenia wszystkich. Ubiorowi petentów nie narzuca nic.",
};
