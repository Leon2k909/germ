/**
 * French for the Vivir en España course cards, headings and questions.
 *
 * Keyed on the SPANISH source text exactly as it appears in
 * vivirEnEspanaCourse.ts. A missing key is not an error — the card shows the
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
 * WHAT STAYS SPANISH, and it follows VIVIR_EN_ESPANA_DE so that a reader who
 * switches between the two tables does not meet one word glossed two ways.
 * Institutions take their French form where one exists — the Congreso de los
 * Diputados is the Chambre des députés, the Tribunal Constitucional the
 * Tribunal constitutionnel. Where a word is the answer itself and has no
 * French equivalent — Cortes, padrón, empadronamiento, NIE, TIE, DNI, RETA,
 * concierto, arraigo, finiquito, menú del día, tapeo, sobremesa, la Roja —
 * the French gives the meaning and keeps the Spanish word beside it, so the
 * reader learns the term they will actually meet at the counter.
 *
 * The names of the four other official languages follow French usage where it
 * is settled — catalan, galicien, aranais — and keep the endonym where French
 * has none of its own: euskara, euskara batua.
 */
export const VIVIR_EN_ESPANA_FR: Record<string, string> = {
  "Historia, instituciones y vida diaria: cómo funciona el país.":
    "Histoire, institutions et vie quotidienne : comment fonctionne le pays.",
  "Símbolos nacionales": "Les symboles nationaux",
  "Símbolos y Constitución": "Symboles et Constitution",
  "Por qué se empieza aquí: los símbolos se ven todos los días — en el ayuntamiento, en el pasaporte, en la camiseta de la selección — y son la puerta más fácil para entrar en todo lo demás.":
    "Pourquoi commencer ici : on voit les symboles tous les jours — sur la mairie, sur le passeport, sur le maillot de la sélection — et c'est la porte la plus facile pour entrer dans tout le reste.",
  "La bandera": "Le drapeau",
  "La bandera tiene tres franjas horizontales: **roja, amarilla y roja**. La amarilla es **el doble de ancha** que cada una de las rojas, de modo que ocupa la mitad de la bandera. Lo establece el **artículo 4** de la Constitución.":
    "Le drapeau a trois bandes horizontales : **rouge, jaune et rouge**. La jaune est **deux fois plus large** que chacune des rouges, de sorte qu'elle occupe la moitié du drapeau. C'est l'**article 4** de la Constitution qui l'établit.",
  "Su origen es marinero. En **1785 Carlos III** convocó un concurso para dotar a la Armada de un pabellón que se distinguiera en el mar: casi todas las flotas europeas usaban entonces fondos blancos con escudos, y de lejos se confundían. El rojo y el amarillo se ven a mucha distancia. De ahí pasó al ejército y, en el siglo XIX, a bandera nacional.":
    "Son origine est marine. En **1785, Charles III** ouvrit un concours pour doter la marine d'un pavillon qui se distingue en mer : presque toutes les flottes européennes utilisaient alors des fonds blancs à écussons, et de loin elles se confondaient. Le rouge et le jaune se voient de très loin. De là il passa à l'armée et, au XIXe siècle, au rang de drapeau national.",
  "El escudo": "Les armoiries",
  "El escudo es un resumen de historia peninsular. Está **cuartelado**: cada cuartel corresponde a un reino que acabó formando parte de España.":
    "Les armoiries sont un résumé de l'histoire de la péninsule. Elles sont **écartelées** : chaque quartier correspond à un royaume qui a fini par faire partie de l'Espagne.",
  "Castilla y León": "La Castille et le León",
  "El castillo dorado y el león púrpura ocupan los dos primeros cuarteles.":
    "Le château d'or et le lion de pourpre occupent les deux premiers quartiers.",
  "Aragón y Navarra": "L'Aragon et la Navarre",
  "Los cuatro palos rojos de Aragón y las cadenas de Navarra completan el cuartelado.":
    "Les quatre pals rouges d'Aragon et les chaînes de Navarre complètent l'écartelé.",
  "Granada": "Grenade",
  "La granada al pie recuerda el último reino incorporado, en 1492.":
    "La grenade au pied rappelle le dernier royaume incorporé, en 1492.",
  "Las columnas": "Les colonnes",
  "Las columnas de Hércules, con el lema PLUS ULTRA: más allá, hacia el Atlántico. Antes del descubrimiento el lema era el contrario.":
    "Les colonnes d'Hercule, avec la devise PLUS ULTRA : plus loin, vers l'Atlantique. Avant la découverte, la devise disait le contraire.",
  "¿Cómo son las franjas de la bandera española?":
    "Comment sont les bandes du drapeau espagnol ?",
  "Tres franjas iguales: roja, amarilla y roja": "Trois bandes égales : rouge, jaune et rouge",
  "Roja, amarilla del doble de ancho, y roja": "Rouge, jaune deux fois plus large, et rouge",
  "Dos franjas: roja arriba y amarilla abajo": "Deux bandes : rouge en haut et jaune en bas",
  "Tres franjas verticales": "Trois bandes verticales",
  "La amarilla ocupa la mitad de la bandera y cada roja un cuarto. No son tres franjas iguales, y esa proporción está fijada en el artículo 4 de la Constitución.":
    "La jaune occupe la moitié du drapeau et chaque rouge un quart. Ce ne sont pas trois bandes égales, et cette proportion est fixée par l'article 4 de la Constitution.",
  "El himno": "L'hymne",
  "El himno se llama **Marcha Real** y tiene una rareza que lo distingue de casi todos los demás: **no tiene letra**. Se canta con la boca cerrada, o no se canta. Solo otros pocos países en el mundo están en la misma situación.":
    "L'hymne s'appelle la **Marcha Real** et a une singularité qui le distingue de presque tous les autres : il **n'a pas de paroles**. On le chante bouche fermée, ou on ne le chante pas. Seuls quelques autres pays au monde sont dans la même situation.",
  "Es además uno de los himnos más antiguos de Europa: aparece documentado ya en **1761** como Marcha Granadera. Se le han puesto letras en varias épocas, pero ninguna ha llegado a ser oficial, y los intentos de darle una han fracasado siempre.":
    "C'est en outre l'un des hymnes les plus anciens d'Europe : il est attesté dès **1761** sous le nom de Marche des grenadiers. On lui a donné des paroles à plusieurs époques, mais aucune n'est devenue officielle, et les tentatives pour lui en donner ont toujours échoué.",
  "¿Qué particularidad tiene el himno nacional español?":
    "Quelle particularité a l'hymne national espagnol ?",
  "Que dura menos de treinta segundos": "Qu'il dure moins de trente secondes",
  "Que no tiene letra oficial": "Qu'il n'a pas de paroles officielles",
  "Que solo puede interpretarse en actos militares":
    "Qu'il ne peut être joué que dans des cérémonies militaires",
  "Que se compuso en el siglo XX": "Qu'il a été composé au XXe siècle",
  "La Marcha Real carece de letra oficial. Se han propuesto varias a lo largo del tiempo y ninguna ha prosperado; es además uno de los himnos más antiguos de Europa, documentado desde 1761.":
    "La Marcha Real n'a pas de paroles officielles. On en a proposé plusieurs au fil du temps et aucune n'a abouti ; c'est de plus l'un des hymnes les plus anciens d'Europe, attesté depuis 1761.",
  "Las fechas": "Les dates",
  "12 de octubre": "Le 12 octobre",
  "Fiesta Nacional de España. Conmemora la llegada de Colón a América en 1492 y el desfile en Madrid es el acto central.":
    "La Fête nationale de l'Espagne. Elle commémore l'arrivée de Colomb en Amérique en 1492, et le défilé de Madrid en est l'acte central.",
  "6 de diciembre": "Le 6 décembre",
  "Día de la Constitución. Se celebra el referéndum de 1978, no la fecha en que entró en vigor.":
    "Le Jour de la Constitution. On célèbre le référendum de 1978, non la date de son entrée en vigueur.",
  "2 de mayo": "Le 2 mai",
  "Fiesta de la Comunidad de Madrid: el levantamiento de 1808 contra las tropas de Napoleón. Es autonómica, no nacional.":
    "La fête de la Communauté de Madrid : le soulèvement de 1808 contre les troupes de Napoléon. Elle est autonomique, non nationale.",
  "La lengua oficial del Estado es el **castellano**, según el artículo 3, que añade que las demás lenguas españolas serán también oficiales en sus comunidades. Es el único artículo de los primeros que habla de lenguas, y en el capítulo cuarto se ve por qué importa tanto.":
    "La langue officielle de l'État est le **castillan**, selon l'article 3, qui ajoute que les autres langues espagnoles seront elles aussi officielles dans leurs communautés. C'est le seul des premiers articles qui parle de langues, et le quatrième chapitre montre pourquoi cela compte tant.",
  "¿Qué se celebra el 12 de octubre?": "Que célèbre-t-on le 12 octobre ?",
  "El Día de la Constitución": "Le Jour de la Constitution",
  "La Fiesta Nacional de España": "La Fête nationale de l'Espagne",
  "El aniversario de la proclamación del rey": "L'anniversaire de la proclamation du roi",
  "El fin de la Guerra Civil": "La fin de la guerre civile",
  "El 12 de octubre es la Fiesta Nacional. El Día de la Constitución es el 6 de diciembre: dos fechas que se confunden con frecuencia porque ambas son festivos nacionales.":
    "Le 12 octobre est la Fête nationale. Le Jour de la Constitution est le 6 décembre : deux dates souvent confondues parce que toutes deux sont fériées dans tout le pays.",
  "Bandera con escudo y bandera sin escudo son las dos correctas. La que llevan los edificios oficiales incluye el escudo; la que se ve en un balcón o en un estadio normalmente no.":
    "Le drapeau avec les armoiries et celui sans sont tous deux corrects. Celui des bâtiments officiels porte les armoiries ; celui qu'on voit à un balcon ou dans un stade ne les porte normalement pas.",
  "La Constitución de 1978": "La Constitution de 1978",
  "Por qué importa: casi todo lo que viene después — el rey, las Cortes, las autonomías, las lenguas — está en un texto de 1978 que se escribió deliberadamente para que nadie ganara del todo. Entender ese punto de partida explica su forma.":
    "Pourquoi cela compte : presque tout ce qui vient ensuite — le roi, les Cortes, les autonomies, les langues — est dans un texte de 1978 écrit à dessein pour que personne ne gagne tout à fait. Comprendre ce point de départ explique sa forme.",
  "Cómo se hizo": "Comment elle s'est faite",
  "Tras la muerte de Franco en 1975, las **elecciones de junio de 1977** dieron unas Cortes que asumieron la tarea de escribir una Constitución. La comisión encargó el borrador a **siete diputados** de partidos distintos, a los que se conoce como los **padres de la Constitución**.":
    "Après la mort de Franco en 1975, les **élections de juin 1977** donnèrent des Cortes qui prirent en charge la rédaction d'une Constitution. La commission confia l'avant-projet à **sept députés** de partis différents, qu'on appelle les **pères de la Constitution**.",
  "El calendario del final del año siguiente conviene tenerlo ordenado: las Cortes aprobaron el texto el **31 de octubre de 1978**, el pueblo lo ratificó en **referéndum el 6 de diciembre**, el rey lo sancionó el **27 de diciembre** y entró en vigor el **29 de diciembre**, el día de su publicación en el Boletín Oficial del Estado.":
    "Le calendrier de la fin de l'année suivante mérite d'être tenu en ordre : les Cortes approuvèrent le texte le **31 octobre 1978**, le peuple le ratifia par **référendum le 6 décembre**, le roi le sanctionna le **27 décembre** et il entra en vigueur le **29 décembre**, jour de sa publication au Journal officiel de l'État.",
  "La palabra que resume el método es **consenso**. El texto se redactó buscando que ninguna fuerza quedara fuera, y esa es la razón de que algunos artículos sean deliberadamente amplios: se acordó la frase precisamente porque admitía más de una lectura.":
    "Le mot qui résume la méthode est **consensus**. Le texte fut rédigé pour qu'aucune force ne reste dehors, et c'est la raison pour laquelle certains articles sont délibérément larges : on s'est entendu sur la phrase précisément parce qu'elle admettait plus d'une lecture.",
  "¿En qué fecha se ratificó la Constitución en referéndum?":
    "À quelle date la Constitution fut-elle ratifiée par référendum ?",
  "El 31 de octubre de 1978": "Le 31 octobre 1978",
  "El 6 de diciembre de 1978": "Le 6 décembre 1978",
  "El 27 de diciembre de 1978": "Le 27 décembre 1978",
  "El 29 de diciembre de 1978": "Le 29 décembre 1978",
  "Aprobación en las Cortes el 31 de octubre, referéndum el 6 de diciembre, sanción real el 27 y entrada en vigor el 29. El Día de la Constitución celebra el referéndum.":
    "Approbation aux Cortes le 31 octobre, référendum le 6 décembre, sanction royale le 27 et entrée en vigueur le 29. Le Jour de la Constitution célèbre le référendum.",
  "Cómo está hecha": "Comment elle est faite",
  "Tiene **169 artículos**, repartidos en un **título preliminar** y **diez títulos**, más disposiciones adicionales, transitorias, derogatoria y final. Es un texto largo comparado con otras constituciones europeas, y buena parte de esa extensión está en el título dedicado a los derechos.":
    "Elle compte **169 articles**, répartis en un **titre préliminaire** et **dix titres**, plus des dispositions additionnelles, transitoires, abrogatoire et finale. C'est un texte long comparé à d'autres constitutions européennes, et une bonne part de cette longueur tient au titre consacré aux droits.",
  "Título preliminar": "Titre préliminaire",
  "Artículos 1 a 9: qué es España, dónde reside la soberanía, las lenguas, la bandera, la capital.":
    "Articles 1 à 9 : ce qu'est l'Espagne, où réside la souveraineté, les langues, le drapeau, la capitale.",
  "Título I": "Titre I",
  "Artículos 10 a 55: derechos y deberes fundamentales. Es el título más extenso.":
    "Articles 10 à 55 : droits et devoirs fondamentaux. C'est le titre le plus long.",
  "Títulos II a VI": "Titres II à VI",
  "La Corona, las Cortes, el Gobierno y el poder judicial: quién hace qué.":
    "La Couronne, les Cortes, le gouvernement et le pouvoir judiciaire : qui fait quoi.",
  "Título VIII": "Titre VIII",
  "La organización territorial del Estado. De aquí nacen las comunidades autónomas.":
    "L'organisation territoriale de l'État. C'est de là que naissent les communautés autonomes.",
  "Los primeros artículos": "Les premiers articles",
  "El **artículo 1** define España como un **Estado social y democrático de Derecho**, sitúa la soberanía en el pueblo español y establece que la **forma política del Estado es la Monarquía parlamentaria**. Las tres afirmaciones están en el mismo artículo y conviene no separarlas: la monarquía es la forma, no el fundamento.":
    "L'**article 1** définit l'Espagne comme un **État social et démocratique de droit**, place la souveraineté dans le peuple espagnol et établit que la **forme politique de l'État est la monarchie parlementaire**. Les trois affirmations sont dans le même article et il vaut mieux ne pas les séparer : la monarchie est la forme, non le fondement.",
  "El **artículo 2** contiene la frase más discutida del texto: se fundamenta en la **indisoluble unidad de la Nación española** y a la vez reconoce y garantiza **el derecho a la autonomía de las nacionalidades y regiones** que la integran. Las dos mitades se acordaron juntas, y el capítulo cuarto de este curso explica qué se construyó sobre ellas.":
    "L'**article 2** contient la phrase la plus discutée du texte : il se fonde sur l'**unité indissoluble de la nation espagnole** et reconnaît en même temps **le droit à l'autonomie des nationalités et des régions** qui la composent. Les deux moitiés ont été convenues ensemble, et le quatrième chapitre de ce cours explique ce qui s'est bâti dessus.",
  "¿Qué forma política del Estado establece el artículo 1?":
    "Quelle forme politique de l'État l'article 1 établit-il ?",
  "La república parlamentaria": "La république parlementaire",
  "La monarquía parlamentaria": "La monarchie parlementaire",
  "La monarquía absoluta": "La monarchie absolue",
  "El Estado federal": "L'État fédéral",
  "Monarquía parlamentaria: el rey es jefe del Estado pero no gobierna, y la soberanía reside en el pueblo. El mismo artículo define España como Estado social y democrático de Derecho.":
    "La monarchie parlementaire : le roi est chef de l'État mais ne gouverne pas, et la souveraineté réside dans le peuple. Le même article définit l'Espagne comme un État social et démocratique de droit.",
  "Cambiarla es difícil": "La changer est difficile",
  "Hay **dos procedimientos**. El **ordinario**, del artículo 167, exige tres quintos de cada cámara. El **agravado**, del artículo 168, se aplica a las partes más protegidas — el título preliminar, los derechos fundamentales de la sección primera y el título de la Corona — y es de una dureza poco común: dos tercios de ambas cámaras, **disolución de las Cortes**, elecciones, ratificación por las nuevas cámaras y **referéndum obligatorio**.":
    "Il y a **deux procédures**. L'**ordinaire**, de l'article 167, exige les trois cinquièmes de chaque chambre. L'**aggravée**, de l'article 168, s'applique aux parties les plus protégées — le titre préliminaire, les droits fondamentaux de la première section et le titre de la Couronne — et elle est d'une dureté peu commune : deux tiers des deux chambres, **dissolution des Cortes**, élections, ratification par les nouvelles chambres et **référendum obligatoire**.",
  "El resultado se ve en la práctica: la Constitución solo se ha reformado **dos veces** en más de cuarenta años, ambas por el procedimiento ordinario y ambas por exigencias europeas. En **1992** se tocó el artículo 13 para permitir el voto de extranjeros en las municipales tras Maastricht, y en **2011** el artículo 135, sobre estabilidad presupuestaria.":
    "Le résultat se voit dans la pratique : la Constitution n'a été réformée que **deux fois** en plus de quarante ans, toutes deux par la procédure ordinaire et toutes deux à la demande de l'Europe. En **1992**, on toucha à l'article 13 pour permettre le vote des étrangers aux municipales après Maastricht, et en **2011** à l'article 135, sur la stabilité budgétaire.",
  "¿Cuántas veces se ha reformado la Constitución española?":
    "Combien de fois la Constitution espagnole a-t-elle été réformée ?",
  "Ninguna": "Jamais",
  "Dos": "Deux fois",
  "Siete": "Sept fois",
  "Más de veinte": "Plus de vingt fois",
  "Dos: en 1992, para permitir el voto de extranjeros en elecciones municipales, y en 2011, sobre estabilidad presupuestaria. Ambas por el procedimiento ordinario del artículo 167.":
    "Deux : en 1992, pour permettre le vote des étrangers aux élections municipales, et en 2011, sur la stabilité budgétaire. Toutes deux par la procédure ordinaire de l'article 167.",
  "El **29 de diciembre** entró en vigor, pero el festivo es el **6 de diciembre**, el del referéndum. Se celebra el día en que la gente votó, no el día en que el texto empezó a regir.":
    "Le **29 décembre** elle entra en vigueur, mais le jour férié est le **6 décembre**, celui du référendum. On fête le jour où les gens ont voté, non celui où le texte a commencé à régir.",
  "Derechos y libertades fundamentales": "Droits et libertés fondamentaux",
  "Por qué importa: el título I no es una lista uniforme. Unos derechos están protegidos con todo el aparato del Estado y otros son principios que orientan la política. Saber en qué grupo cae cada uno es la mitad de entenderlo.":
    "Pourquoi cela compte : le titre I n'est pas une liste uniforme. Certains droits sont protégés par tout l'appareil de l'État, d'autres sont des principes qui orientent la politique. Savoir dans quel groupe tombe chacun, c'est déjà la moitié du travail.",
  "Tres niveles de protección": "Trois niveaux de protection",
  "La Constitución protege sus derechos con intensidad distinta, y el criterio es dónde está escrito cada uno.":
    "La Constitution protège ses droits avec une intensité différente, et le critère est l'endroit où chacun est écrit.",
  "Artículos 15 a 29": "Articles 15 à 29",
  "Derechos fundamentales y libertades públicas. Máxima protección: ley orgánica, procedimiento judicial preferente y recurso de amparo ante el Tribunal Constitucional.":
    "Droits fondamentaux et libertés publiques. Protection maximale : loi organique, procédure judiciaire préférentielle et recours d'amparo devant le Tribunal constitutionnel.",
  "Artículos 30 a 38": "Articles 30 à 38",
  "Derechos y deberes de los ciudadanos. Vinculan a los poderes públicos y se regulan por ley, pero sin amparo constitucional.":
    "Droits et devoirs des citoyens. Ils lient les pouvoirs publics et sont réglés par la loi, mais sans amparo constitutionnel.",
  "Artículos 39 a 52": "Articles 39 à 52",
  "Principios rectores de la política social y económica: vivienda, medio ambiente, tercera edad. Orientan al legislador y solo se alegan ante los tribunales conforme a las leyes que los desarrollen.":
    "Principes directeurs de la politique sociale et économique : logement, environnement, troisième âge. Ils orientent le législateur et ne s'invoquent devant les tribunaux que selon les lois qui les développent.",
  "El **artículo 14** abre la lista fuera de esa clasificación: los españoles son iguales ante la ley, sin que pueda prevalecer discriminación alguna por nacimiento, raza, sexo, religión, opinión o cualquier otra condición personal o social.":
    "L'**article 14** ouvre la liste hors de cette classification : les Espagnols sont égaux devant la loi, sans qu'aucune discrimination puisse prévaloir pour cause de naissance, de race, de sexe, de religion, d'opinion ou de toute autre condition personnelle ou sociale.",
  "La persona": "La personne",
  "El **artículo 15** reconoce el derecho a la vida y a la integridad física y moral, prohíbe la tortura y **abole la pena de muerte**, salvo lo que dispusieran las leyes penales militares en tiempo de guerra — excepción que fue suprimida por ley en 1995.":
    "L'**article 15** reconnaît le droit à la vie et à l'intégrité physique et morale, interdit la torture et **abolit la peine de mort**, sauf ce qu'en disposeraient les lois pénales militaires en temps de guerre — exception supprimée par une loi en 1995.",
  "El **artículo 16** garantiza la libertad ideológica y religiosa, y añade una frase decisiva: **ninguna confesión tendrá carácter estatal**. No es exactamente una separación al modo francés, porque el mismo artículo obliga a los poderes públicos a mantener relaciones de cooperación con la Iglesia católica y las demás confesiones. Es una aconfesionalidad con cooperación.":
    "L'**article 16** garantit la liberté idéologique et religieuse, et ajoute une phrase décisive : **aucune confession n'aura de caractère étatique**. Ce n'est pas exactement une séparation à la française, car le même article oblige les pouvoirs publics à entretenir des relations de coopération avec l'Église catholique et les autres confessions. C'est une non-confessionnalité avec coopération.",
  "El **artículo 17** protege la libertad personal: la **detención preventiva** no puede durar más de **setenta y dos horas**, pasadas las cuales el detenido debe ser puesto en libertad o a disposición judicial. El mismo artículo prevé el **habeas corpus**, el procedimiento para llevar de inmediato ante un juez a quien esté detenido ilegalmente.":
    "L'**article 17** protège la liberté personnelle : la **garde à vue** ne peut durer plus de **soixante-douze heures**, au terme desquelles la personne détenue doit être remise en liberté ou présentée au juge. Le même article prévoit l'**habeas corpus**, la procédure qui fait conduire immédiatement devant un juge quiconque est détenu illégalement.",
  "¿Cuál es la duración máxima de una detención preventiva?":
    "Quelle est la durée maximale d'une garde à vue ?",
  "Veinticuatro horas": "Vingt-quatre heures",
  "Cuarenta y ocho horas": "Quarante-huit heures",
  "Setenta y dos horas": "Soixante-douze heures",
  "Cinco días": "Cinq jours",
  "Setenta y dos horas, según el artículo 17. Cumplido el plazo, el detenido debe quedar en libertad o pasar a disposición judicial; el habeas corpus sirve para forzarlo si no ocurre.":
    "Soixante-douze heures, selon l'article 17. Le délai écoulé, la personne détenue doit être libérée ou présentée au juge ; l'habeas corpus sert à l'obtenir si cela n'arrive pas.",
  "La vida en común": "La vie en commun",
  "El **artículo 18** protege el honor, la intimidad y la propia imagen, declara **inviolable el domicilio** — no se entra sin consentimiento o resolución judicial, salvo delito flagrante — y garantiza el secreto de las comunicaciones. El **artículo 20** reconoce la libertad de expresión y el derecho a comunicar y recibir información veraz, y prohíbe la censura previa.":
    "L'**article 18** protège l'honneur, l'intimité et l'image de chacun, déclare le **domicile inviolable** — on n'y entre pas sans consentement ni décision judiciaire, sauf flagrant délit — et garantit le secret des communications. L'**article 20** reconnaît la liberté d'expression et le droit de communiquer et de recevoir une information véridique, et interdit la censure préalable.",
  "Los **artículos 21 y 22** amparan la reunión y la asociación: para reunirse en lugares de tránsito público basta comunicarlo a la autoridad, no pedir permiso. El **artículo 23** reconoce el derecho a participar en los asuntos públicos y a acceder en condiciones de igualdad a las funciones y cargos públicos.":
    "Les **articles 21 et 22** protègent la réunion et l'association : pour se réunir dans des lieux de passage public, il suffit d'en informer l'autorité, non de demander une permission. L'**article 23** reconnaît le droit de participer aux affaires publiques et d'accéder à égalité aux fonctions et charges publiques.",
  "¿Qué establece la Constitución sobre la religión del Estado?":
    "Que dit la Constitution sur la religion de l'État ?",
  "Que la religión católica es la oficial":
    "Que la religion catholique est la religion officielle",
  "Que ninguna confesión tendrá carácter estatal":
    "Qu'aucune confession n'aura de caractère étatique",
  "Que se prohíbe toda relación entre Estado y confesiones":
    "Que toute relation entre l'État et les confessions est interdite",
  "Que cada comunidad autónoma decide su confesión":
    "Que chaque communauté autonome décide de sa confession",
  "El artículo 16 dice que ninguna confesión tendrá carácter estatal, y a la vez obliga a mantener relaciones de cooperación con la Iglesia católica y las demás. Es aconfesionalidad, no separación estricta.":
    "L'article 16 dit qu'aucune confession n'aura de caractère étatique, et oblige en même temps à entretenir des relations de coopération avec l'Église catholique et les autres. C'est une non-confessionnalité, pas une séparation stricte.",
  "Ante la justicia": "Devant la justice",
  "El **artículo 24** reconoce la **tutela judicial efectiva**: derecho al juez ordinario predeterminado por la ley, a la defensa y a la asistencia de letrado, a un proceso público sin dilaciones indebidas y a la **presunción de inocencia**. El **artículo 25** añade que las penas privativas de libertad se orientarán a la reeducación y reinserción social.":
    "L'**article 24** reconnaît la **protection juridictionnelle effective** : droit au juge ordinaire prédéterminé par la loi, à la défense et à l'assistance d'un avocat, à un procès public sans retards indus et à la **présomption d'innocence**. L'**article 25** ajoute que les peines privatives de liberté seront orientées vers la rééducation et la réinsertion sociale.",
  "Cuando uno de los derechos de los artículos 14 a 29 se vulnera y los tribunales ordinarios no lo reparan, queda el **recurso de amparo** ante el **Tribunal Constitucional**. Es la última puerta interna, y solo se abre para ese grupo de derechos.":
    "Quand l'un des droits des articles 14 à 29 est violé et que les tribunaux ordinaires n'y remédient pas, il reste le **recurso de amparo** devant le **Tribunal constitutionnel**. C'est la dernière porte intérieure, et elle ne s'ouvre que pour ce groupe de droits.",
  "¿Ante qué órgano se interpone el recurso de amparo?":
    "Devant quel organe le recurso de amparo est-il porté ?",
  "Ante el Tribunal Supremo": "Devant le Tribunal suprême",
  "Ante el Tribunal Constitucional": "Devant le Tribunal constitutionnel",
  "Ante el Defensor del Pueblo": "Devant le Défenseur du peuple",
  "Ante el Consejo General del Poder Judicial":
    "Devant le Conseil général du pouvoir judiciaire",
  "El amparo se interpone ante el Tribunal Constitucional y solo protege los derechos de los artículos 14 a 29. El Tribunal Supremo es la cúspide de la jurisdicción ordinaria, que es otra cosa.":
    "L'amparo se porte devant le Tribunal constitutionnel et ne protège que les droits des articles 14 à 29. Le Tribunal suprême est le sommet de la juridiction ordinaire, ce qui est autre chose.",
  "El derecho a una **vivienda digna** está en el artículo 47, entre los principios rectores. Es un mandato al legislador, no un derecho que pueda reclamarse directamente ante un juez como la libertad de expresión.":
    "Le droit à un **logement digne** est à l'article 47, parmi les principes directeurs. C'est un mandat au législateur, non un droit que l'on puisse réclamer directement devant un juge comme la liberté d'expression.",
  "Deberes de los ciudadanos y la nacionalidad": "Devoirs des citoyens et nationalité",
  "Por qué importa: la Constitución no solo reparte derechos. Impone cuatro deberes, y uno de ellos se cumple todos los años. Y define quién es español, que es la puerta por la que se entra a todo lo demás.":
    "Pourquoi cela compte : la Constitution ne distribue pas que des droits. Elle impose quatre devoirs, et l'un d'eux s'accomplit tous les ans. Et elle définit qui est espagnol, ce qui est la porte par laquelle on entre dans tout le reste.",
  "Los deberes": "Les devoirs",
  "El **artículo 30** establece el derecho y el deber de **defender a España**. La ley regulaba con él el servicio militar obligatorio, que quedó **suspendido en 2001**: desde entonces las Fuerzas Armadas son enteramente profesionales. El mismo artículo prevé la objeción de conciencia y, para casos de grave riesgo, deberes de protección civil.":
    "L'**article 30** établit le droit et le devoir de **défendre l'Espagne**. C'est par lui que la loi réglait le service militaire obligatoire, **suspendu en 2001** : depuis, les forces armées sont entièrement professionnelles. Le même article prévoit l'objection de conscience et, pour les cas de risque grave, des devoirs de protection civile.",
  "El **artículo 31** es el deber que se cumple cada año: todos contribuirán al sostenimiento de los gastos públicos **de acuerdo con su capacidad económica**, mediante un sistema tributario **justo**, inspirado en los principios de **igualdad y progresividad**, y que en ningún caso tendrá alcance **confiscatorio**. Progresividad significa que quien más gana no paga solo más dinero, sino un porcentaje mayor.":
    "L'**article 31** est le devoir que l'on accomplit chaque année : tous contribueront aux dépenses publiques **selon leur capacité économique**, par un système fiscal **juste**, inspiré des principes d'**égalité et de progressivité**, et qui n'aura en aucun cas de portée **confiscatoire**. Progressivité veut dire que celui qui gagne le plus ne paie pas seulement plus d'argent, mais un pourcentage plus élevé.",
  "Defender a España · art. 30": "Défendre l'Espagne · art. 30",
  "Derecho y deber. El servicio militar obligatorio está suspendido desde 2001.":
    "Droit et devoir. Le service militaire obligatoire est suspendu depuis 2001.",
  "Contribuir · art. 31": "Contribuer · art. 31",
  "Según la capacidad económica, con un sistema progresivo y no confiscatorio.":
    "Selon la capacité économique, par un système progressif et non confiscatoire.",
  "Trabajar · art. 35": "Travailler · art. 35",
  "Deber y derecho al trabajo, a la libre elección de profesión y a una remuneración suficiente.":
    "Devoir et droit au travail, au libre choix de la profession et à une rémunération suffisante.",
  "La enseñanza básica · art. 27": "L'enseignement de base · art. 27",
  "Es obligatoria y gratuita. El deber recae sobre quien tiene la patria potestad.":
    "Il est obligatoire et gratuit. Le devoir pèse sur qui exerce l'autorité parentale.",
  "¿Qué significa que el sistema tributario es progresivo?":
    "Que signifie que le système fiscal est progressif ?",
  "Que los impuestos suben cada año": "Que les impôts montent chaque année",
  "Que quien tiene más renta paga un porcentaje mayor":
    "Que celui qui a le plus de revenus paie un pourcentage plus élevé",
  "Que todos pagan el mismo porcentaje": "Que tout le monde paie le même pourcentage",
  "Que se puede pagar a plazos": "Qu'on peut payer par échéances",
  "La progresividad del artículo 31 se refiere al porcentaje, no solo al importe. Un impuesto que cobrara a todos el mismo porcentaje sería proporcional, no progresivo.":
    "La progressivité de l'article 31 porte sur le pourcentage, pas seulement sur le montant. Un impôt qui prendrait à tous le même pourcentage serait proportionnel, non progressif.",
  "Quién es español": "Qui est espagnol",
  "El **artículo 11** remite a la ley, y esa ley es el **Código Civil**. La regla principal es la de la **sangre**: es español de origen quien nace de padre o madre españoles, con independencia del lugar de nacimiento. Nacer en territorio español no basta por sí solo, aunque hay reglas que evitan que un niño quede sin nacionalidad alguna.":
    "L'**article 11** renvoie à la loi, et cette loi est le **Code civil**. La règle principale est celle du **sang** : est espagnol d'origine qui naît d'un père ou d'une mère espagnols, quel que soit le lieu de naissance. Naître en territoire espagnol ne suffit pas à soi seul, même s'il existe des règles qui évitent qu'un enfant reste sans aucune nationalité.",
  "El mismo artículo prohíbe privar de la nacionalidad a los españoles de origen y permite tratados de **doble nacionalidad** con los países iberoamericanos y con aquellos que hayan tenido o tengan una vinculación particular con España.":
    "Le même article interdit de priver de la nationalité les Espagnols d'origine et permet des traités de **double nationalité** avec les pays ibéro-américains et avec ceux qui ont eu ou qui ont un lien particulier avec l'Espagne.",
  "La nacionalidad por residencia": "La nationalité par résidence",
  "El plazo general es de **diez años** de residencia legal, continuada e inmediatamente anterior a la solicitud. Hay plazos abreviados, y responden a la historia de España más que a un criterio administrativo.":
    "Le délai général est de **dix ans** de résidence légale, continue et immédiatement antérieure à la demande. Il existe des délais abrégés, et ils répondent à l'histoire de l'Espagne plus qu'à un critère administratif.",
  "Diez años": "Dix ans",
  "El plazo general, para quien no encaja en ninguna de las categorías siguientes.":
    "Le délai général, pour qui n'entre dans aucune des catégories suivantes.",
  "Cinco años": "Cinq ans",
  "Para quienes hayan obtenido la condición de refugiado.":
    "Pour ceux qui ont obtenu la qualité de réfugié.",
  "Dos años": "Deux ans",
  "Para nacionales de países iberoamericanos, Andorra, Filipinas, Guinea Ecuatorial y Portugal, y para los sefardíes.":
    "Pour les ressortissants des pays ibéro-américains, d'Andorre, des Philippines, de Guinée équatoriale et du Portugal, et pour les séfarades.",
  "Un año": "Un an",
  "Entre otros supuestos, para quien nació en territorio español, o lleva un año casado con española o español y no está separado.":
    "Entre autres cas, pour qui est né en territoire espagnol, ou est marié depuis un an à une Espagnole ou à un Espagnol sans être séparé.",
  "Además de la residencia se exigen **buena conducta cívica** y un **suficiente grado de integración**, que se acredita con dos pruebas del Instituto Cervantes: la de **lengua DELE A2** y la **CCSE**, de conocimientos constitucionales y socioculturales. Quien procede de un país donde el español es lengua oficial queda exento de la primera.":
    "Outre la résidence, on exige une **bonne conduite civique** et un **degré suffisant d'intégration**, qui s'établit par deux épreuves de l'Institut Cervantes : celle de langue, le **DELE A2**, et la **CCSE**, sur les connaissances constitutionnelles et socioculturelles. Qui vient d'un pays où l'espagnol est langue officielle est dispensé de la première.",
  "¿Cuántos años de residencia se exigen con carácter general para pedir la nacionalidad?":
    "Combien d'années de résidence exige-t-on en règle générale pour demander la nationalité ?",
  "Cinco": "Cinq",
  "Diez": "Dix",
  "Quince": "Quinze",
  "Diez años de residencia legal y continuada. Cinco corresponde a los refugiados y dos a los nacionales de países iberoamericanos y a otros supuestos con vínculo histórico con España.":
    "Dix ans de résidence légale et continue. Cinq correspond aux réfugiés et deux aux ressortissants des pays ibéro-américains et aux autres cas de lien historique avec l'Espagne.",
  "¿Qué plazo de residencia se aplica a los nacionales de países iberoamericanos?":
    "Quel délai de résidence s'applique aux ressortissants des pays ibéro-américains ?",
  "El mismo plazo general de diez años": "Le même délai général de dix ans",
  "Dos años, igual que para Andorra, Filipinas, Guinea Ecuatorial, Portugal y los sefardíes. El plazo de un año se reserva a supuestos como haber nacido en España o llevar un año casado con una persona española.":
    "Deux ans, comme pour Andorre, les Philippines, la Guinée équatoriale, le Portugal et les séfarades. Le délai d'un an est réservé à des cas comme être né en Espagne ou être marié depuis un an à une personne espagnole.",
  "La **mayoría de edad** en España son los **dieciocho años**, y con ella llegan el voto y la plena capacidad de obrar. El **DNI** es obligatorio a partir de los catorce.":
    "La **majorité** est en Espagne à **dix-huit ans**, et avec elle viennent le vote et la pleine capacité juridique. Le **DNI** est obligatoire à partir de quatorze ans.",
  "Fiestas y calendario": "Fêtes et calendrier",
  "Por qué importa: el calendario laboral español tiene tres capas — el Estado, la comunidad y el municipio — y por eso dos ciudades vecinas pueden trabajar en días distintos. Entender las capas evita más de un viaje en balde.":
    "Pourquoi cela compte : le calendrier des jours fériés espagnol a trois couches — l'État, la communauté et la commune — et c'est pourquoi deux villes voisines peuvent travailler des jours différents. Comprendre les couches évite plus d'un déplacement pour rien.",
  "Catorce días": "Quatorze jours",
  "El calendario laboral tiene **catorce festivos** al año. **Doce** los fija el Estado o la comunidad autónoma, y **dos son locales**, decididos por cada ayuntamiento: el día del patrón, la fiesta mayor, la feria del pueblo.":
    "Le calendrier compte **quatorze jours fériés** par an. **Douze** sont fixés par l'État ou par la communauté autonome, et **deux sont locaux**, décidés par chaque mairie : le jour du saint patron, la grande fête, la foire du village.",
  "De ahí que un festivo pueda no serlo a treinta kilómetros. Las comunidades pueden además sustituir algunos festivos nacionales por otros propios, de modo que ni siquiera la lista estatal se aplica igual en todas partes.":
    "D'où le fait qu'un jour férié puisse ne pas l'être à trente kilomètres de là. Les communautés peuvent en outre remplacer certains jours fériés nationaux par d'autres qui leur sont propres, si bien que même la liste de l'État ne s'applique pas partout de la même façon.",
  "Fijos en todo el país": "Fixes dans tout le pays",
  "1 de enero, 1 de mayo, 12 de octubre, 1 de noviembre, 6 y 8 de diciembre, y 25 de diciembre.":
    "Le 1er janvier, le 1er mai, le 12 octobre, le 1er novembre, les 6 et 8 décembre, et le 25 décembre.",
  "Semana Santa": "La Semaine sainte",
  "El Viernes Santo es festivo en toda España. El Jueves Santo lo es en la mayoría de las comunidades, pero no en todas.":
    "Le Vendredi saint est férié dans toute l'Espagne. Le Jeudi saint l'est dans la plupart des communautés, mais pas dans toutes.",
  "Días de la comunidad": "Les jours de la communauté",
  "El 11 de septiembre en Cataluña, el 25 de julio en Galicia, el 9 de octubre en la Comunidad Valenciana, el 28 de febrero en Andalucía.":
    "Le 11 septembre en Catalogne, le 25 juillet en Galice, le 9 octobre dans la Communauté valencienne, le 28 février en Andalousie.",
  "Los dos locales": "Les deux locaux",
  "Los elige el ayuntamiento. Suelen coincidir con el patrón o con la fiesta grande del municipio.":
    "C'est la mairie qui les choisit. Ils coïncident d'ordinaire avec le saint patron ou avec la grande fête de la commune.",
  "¿Cuántos días festivos tiene el calendario laboral español?":
    "Combien de jours fériés compte le calendrier espagnol ?",
  "Doce": "Douze",
  "Catorce": "Quatorze",
  "Dieciséis": "Seize",
  "Catorce: doce estatales o autonómicos y dos locales fijados por el ayuntamiento. Por eso dos municipios vecinos pueden tener días libres distintos.":
    "Quatorze : douze nationaux ou autonomiques et deux locaux fixés par la mairie. C'est pourquoi deux communes voisines peuvent avoir des jours de congé différents.",
  "El invierno": "L'hiver",
  "La **Nochevieja** tiene un rito muy preciso: al sonar las doce campanadas se comen **doce uvas**, una por campanada. Quien las termina a tiempo tendrá un buen año. La costumbre se difundió a comienzos del siglo XX y hoy se retransmite en directo desde la Puerta del Sol de Madrid.":
    "La **Saint-Sylvestre** a un rite très précis : aux douze coups de minuit, on mange **douze grains de raisin**, un par coup. Qui les finit à temps aura une bonne année. La coutume s'est répandue au début du XXe siècle et se retransmet aujourd'hui en direct depuis la Puerta del Sol à Madrid.",
  "Los regalos de invierno no llegan el 25 de diciembre sino el **6 de enero**, con los **Reyes Magos**. La tarde del día 5 se celebran las cabalgatas, y en Nochebuena y Navidad las familias se reúnen a comer. En muchas casas conviven ya ambas fechas, pero la de los Reyes sigue siendo la principal para los niños.":
    "Les cadeaux d'hiver n'arrivent pas le 25 décembre mais le **6 janvier**, avec les **Rois mages**. L'après-midi du 5 ont lieu les cavalcades, et la veille de Noël et le jour de Noël les familles se réunissent pour manger. Dans bien des maisons, les deux dates coexistent désormais, mais celle des Rois reste la principale pour les enfants.",
  "¿Qué se hace tradicionalmente en Nochevieja al sonar las campanadas?":
    "Que fait-on traditionnellement à la Saint-Sylvestre aux douze coups de minuit ?",
  "Se comen doce uvas, una por campanada": "On mange douze grains de raisin, un par coup",
  "Se encienden doce velas": "On allume douze bougies",
  "Se reparten doce monedas": "On distribue douze pièces",
  "Se cantan doce coplas": "On chante douze couplets",
  "Una uva por campanada, doce en total. La costumbre se extendió a principios del siglo XX y se retransmite cada año desde la Puerta del Sol.":
    "Un grain par coup, douze en tout. La coutume s'est répandue au début du XXe siècle et se retransmet chaque année depuis la Puerta del Sol.",
  "Las fiestas populares": "Les fêtes populaires",
  "Junto al calendario oficial está el de las fiestas que dan fama a las ciudades, y que en muchos casos duran una semana entera.":
    "À côté du calendrier officiel, il y a celui des fêtes qui font la renommée des villes, et qui durent dans bien des cas une semaine entière.",
  "Las Fallas": "Les Fallas",
  "En Valencia, en marzo. Se levantan monumentos de cartón y madera por toda la ciudad y la noche del 19 se queman.":
    "À Valence, en mars. On dresse des monuments de carton et de bois dans toute la ville et, la nuit du 19, on les brûle.",
  "La Feria de Abril": "La Feria de Abril",
  "En Sevilla, con casetas, caballos y trajes de flamenca, dos semanas después de Semana Santa.":
    "À Séville, avec ses casetas, ses chevaux et ses robes de flamenca, deux semaines après la Semaine sainte.",
  "San Fermín": "La San Fermín",
  "En Pamplona, del 6 al 14 de julio. Los encierros de la mañana son su imagen más conocida.":
    "À Pampelune, du 6 au 14 juillet. Les lâchers de taureaux du matin en sont l'image la plus connue.",
  "El Carnaval": "Le Carnaval",
  "El de Santa Cruz de Tenerife y el de Cádiz son los mayores; el gaditano se recuerda sobre todo por sus chirigotas.":
    "Celui de Santa Cruz de Tenerife et celui de Cadix sont les plus grands ; celui de Cadix se retient surtout pour ses chirigotas.",
  "¿En qué ciudad se celebran las Fallas?": "Dans quelle ville célèbre-t-on les Fallas ?",
  "En Sevilla": "À Séville",
  "En Pamplona": "À Pampelune",
  "En Valencia": "À Valence",
  "En Cádiz": "À Cadix",
  "Las Fallas son de Valencia y se queman en marzo. Sevilla tiene la Feria de Abril, Pamplona los San Fermines y Cádiz uno de los dos grandes carnavales.":
    "Les Fallas sont de Valence et se brûlent en mars. Séville a la Feria de Abril, Pampelune les San Fermines et Cadix l'un des deux grands carnavals.",
  "Cuando un festivo cae en martes o jueves, muchos hacen **puente** y libran también el lunes o el viernes. Si caen dos cerca, se llama **acueducto**: no es una figura legal, pero explica por qué en esas semanas media España está cerrada.":
    "Quand un jour férié tombe un mardi ou un jeudi, beaucoup font le **pont** et prennent aussi le lundi ou le vendredi. Si deux tombent près l'un de l'autre, on parle d'**aqueduc** : ce n'est pas une notion juridique, mais cela explique pourquoi la moitié de l'Espagne est fermée ces semaines-là.",
  "La Corona": "La Couronne",
  "Las instituciones del Estado": "Les institutions de l'État",
  "Por qué importa: España tiene un rey y no lo gobierna nadie desde el trono. Entender qué hace exactamente el jefe del Estado — y qué no hace — es la primera pieza del sistema.":
    "Pourquoi cela compte : l'Espagne a un roi et personne ne gouverne depuis le trône. Comprendre ce que fait exactement le chef de l'État — et ce qu'il ne fait pas — est la première pièce du système.",
  "Qué es el rey": "Ce qu'est le roi",
  "El **artículo 56** define al rey como **jefe del Estado**, **símbolo de su unidad y permanencia**, y le encarga **arbitrar y moderar** el funcionamiento regular de las instituciones. Ninguna de esas palabras significa gobernar: quien dirige la política es el Gobierno, y quien hace las leyes son las Cortes.":
    "L'**article 56** définit le roi comme **chef de l'État**, **symbole de son unité et de sa permanence**, et lui confie l'**arbitrage et la modération** du fonctionnement régulier des institutions. Aucun de ces mots ne veut dire gouverner : celui qui dirige la politique, c'est le gouvernement, et ceux qui font les lois, ce sont les Cortes.",
  "La persona del rey es **inviolable** y **no está sujeta a responsabilidad**. Eso solo se sostiene por una razón: sus actos los firma siempre otro, y ese otro responde.":
    "La personne du roi est **inviolable** et **n'est soumise à aucune responsabilité**. Cela ne tient que pour une raison : ses actes sont toujours signés par un autre, et cet autre en répond.",
  "El refrendo": "Le contreseing",
  "El **artículo 64** establece que los actos del rey serán **refrendados**, es decir, firmados también por quien asume su responsabilidad política: el **presidente del Gobierno**, el ministro competente, o el **presidente del Congreso** cuando se trata de proponer y nombrar al presidente del Gobierno o de disolver las Cortes. Un acto del rey sin refrendo carece de validez.":
    "L'**article 64** établit que les actes du roi seront **contresignés**, c'est-à-dire signés aussi par celui qui en assume la responsabilité politique : le **président du gouvernement**, le ministre compétent, ou le **président du Congrès** lorsqu'il s'agit de proposer et de nommer le président du gouvernement ou de dissoudre les Cortes. Un acte du roi sans contreseing est sans validité.",
  "Es el mecanismo que hace compatibles dos cosas que parecen incompatibles: un jefe del Estado que no responde de nada, y un sistema en el que todo acto tiene un responsable.":
    "C'est le mécanisme qui rend compatibles deux choses qui semblent incompatibles : un chef de l'État qui ne répond de rien, et un système où chaque acte a un responsable.",
  "¿Qué significa que un acto del rey está refrendado?":
    "Que signifie qu'un acte du roi est contresigné ?",
  "Que ha sido aprobado por referéndum": "Qu'il a été approuvé par référendum",
  "Que lo firma también quien asume su responsabilidad política":
    "Qu'il est signé aussi par celui qui en assume la responsabilité politique",
  "Que lo ha revisado el Tribunal Constitucional":
    "Qu'il a été examiné par le Tribunal constitutionnel",
  "Que se publica en el Boletín Oficial del Estado":
    "Qu'il est publié au Journal officiel de l'État",
  "El refrendo es la firma del presidente del Gobierno, del ministro competente o del presidente del Congreso. Sin ella el acto no vale, y es lo que permite que el rey sea irresponsable sin que nadie lo sea.":
    "Le contreseing est la signature du président du gouvernement, du ministre compétent ou du président du Congrès. Sans elle, l'acte ne vaut pas, et c'est ce qui permet au roi d'être irresponsable sans que personne ne le soit.",
  "Qué hace": "Ce qu'il fait",
  "Sancionar y promulgar": "Sanctionner et promulguer",
  "Firma las leyes aprobadas por las Cortes en el plazo de quince días. No puede negarse: es un acto debido.":
    "Il signe les lois adoptées par les Cortes dans un délai de quinze jours. Il ne peut pas s'y refuser : c'est un acte dû.",
  "Proponer candidato": "Proposer un candidat",
  "Tras consultar a los grupos políticos, propone al Congreso un candidato a presidente del Gobierno.":
    "Après avoir consulté les groupes politiques, il propose au Congrès un candidat à la présidence du gouvernement.",
  "Convocar y disolver": "Convoquer et dissoudre",
  "Convoca y disuelve las Cortes y convoca elecciones, siempre en los términos previstos en la Constitución.":
    "Il convoque et dissout les Cortes et convoque les élections, toujours dans les termes prévus par la Constitution.",
  "Mando supremo": "Le commandement suprême",
  "Tiene el mando supremo de las Fuerzas Armadas, que dirige en la práctica el Gobierno.":
    "Il a le commandement suprême des forces armées, que le gouvernement dirige en pratique.",
  "Ejerce además el **derecho de gracia**, es decir, los **indultos** individuales, con arreglo a la ley — que **prohíbe los indultos generales** — y acredita a los embajadores. Al ser proclamado, presta juramento de guardar y hacer guardar la Constitución ante las Cortes reunidas.":
    "Il exerce en outre le **droit de grâce**, c'est-à-dire les **grâces** individuelles, conformément à la loi — qui **interdit les grâces collectives** — et accrédite les ambassadeurs. Lors de sa proclamation, il prête serment de garder et de faire garder la Constitution devant les Cortes réunies.",
  "La sucesión": "La succession",
  "La corona se hereda en los sucesores de **Juan Carlos I**, según el orden del **artículo 57**: primogenitura y representación, prefiriendo la línea anterior a la posterior, el grado más próximo al más remoto y, **en el mismo grado, el varón a la mujer**. Esa última regla es la única preferencia por sexo que queda en el texto constitucional, y para cambiarla haría falta el procedimiento agravado del artículo 168.":
    "La couronne se transmet aux successeurs de **Juan Carlos Ier**, selon l'ordre de l'**article 57** : primogéniture et représentation, la ligne antérieure primant la postérieure, le degré le plus proche le plus lointain et, **à degré égal, l'homme la femme**. Cette dernière règle est la seule préférence de sexe qui reste dans le texte constitutionnel, et la changer demanderait la procédure aggravée de l'article 168.",
  "El heredero lleva el título de **Príncipe o Princesa de Asturias**. **Juan Carlos I** fue proclamado rey en **1975** y **abdicó en 2014**; **Felipe VI** fue proclamado el **19 de junio de 2014** ante las Cortes.":
    "L'héritier porte le titre de **prince ou princesse des Asturies**. **Juan Carlos Ier** fut proclamé roi en **1975** et **abdiqua en 2014** ; **Felipe VI** fut proclamé le **19 juin 2014** devant les Cortes.",
  "¿Qué título recibe el heredero o la heredera de la Corona?":
    "Quel titre reçoit l'héritier ou l'héritière de la Couronne ?",
  "Duque de Borgoña": "Duc de Bourgogne",
  "Príncipe o Princesa de Asturias": "Prince ou princesse des Asturies",
  "Infante de España": "Infant d'Espagne",
  "Delfín de la Corona": "Dauphin de la Couronne",
  "Príncipe o Princesa de Asturias, junto con otros títulos históricos. Infante o infanta es el tratamiento de los demás hijos del rey.":
    "Prince ou princesse des Asturies, avec d'autres titres historiques. Infant ou infante est le titre des autres enfants du roi.",
  "¿Puede el rey negarse a firmar una ley aprobada por las Cortes?":
    "Le roi peut-il refuser de signer une loi adoptée par les Cortes ?",
  "Sí, tiene derecho de veto": "Oui, il a un droit de veto",
  "No: la sanción es un acto debido": "Non : la sanction est un acte dû",
  "Solo si la ley afecta a la Corona": "Seulement si la loi touche à la Couronne",
  "Solo con el acuerdo del Tribunal Constitucional":
    "Seulement avec l'accord du Tribunal constitutionnel",
  "Sanciona y promulga en el plazo de quince días, sin margen para negarse. La monarquía parlamentaria española no conserva ningún veto real.":
    "Il sanctionne et promulgue dans un délai de quinze jours, sans marge de refus. La monarchie parlementaire espagnole ne conserve aucun veto royal.",
  "La preferencia del **varón sobre la mujer** en el mismo grado sigue en el artículo 57 y solo podría suprimirse por el procedimiento agravado del artículo 168, el que obliga a disolver las Cortes y convocar un referéndum. No es una omisión: es la parte más difícil de reformar.":
    "La préférence de l'**homme sur la femme** à degré égal est toujours à l'article 57 et ne pourrait être supprimée que par la procédure aggravée de l'article 168, celle qui oblige à dissoudre les Cortes et à convoquer un référendum. Ce n'est pas un oubli : c'est la partie la plus difficile à réformer.",
  "Las Cortes Generales": "Les Cortes Generales",
  "Por qué importa: España tiene dos cámaras, pero no pesan lo mismo. Saber cuál manda cuando discrepan explica buena parte de cómo se aprueban aquí las leyes.":
    "Pourquoi cela compte : l'Espagne a deux chambres, mais elles ne pèsent pas le même poids. Savoir laquelle commande quand elles divergent explique une bonne part de la façon dont les lois s'y adoptent.",
  "Dos cámaras desiguales": "Deux chambres inégales",
  "Las Cortes Generales, dice el **artículo 66**, representan al pueblo español y están formadas por el **Congreso de los Diputados** y el **Senado**. Ejercen la potestad legislativa, aprueban los **presupuestos** y **controlan** la acción del Gobierno.":
    "Les Cortes Generales, dit l'**article 66**, représentent le peuple espagnol et se composent du **Congrès des députés** et du **Sénat**. Elles exercent le pouvoir législatif, adoptent le **budget** et **contrôlent** l'action du gouvernement.",
  "El bicameralismo español es **imperfecto**, y la palabra es técnica, no despectiva: las dos cámaras no tienen el mismo peso. El **Congreso predomina**. Es el que inviste al presidente del Gobierno, el que puede derribarlo y el que tiene la última palabra cuando las dos discrepan sobre una ley.":
    "Le bicaméralisme espagnol est **imparfait**, et le mot est technique, non péjoratif : les deux chambres n'ont pas le même poids. Le **Congrès domine**. C'est lui qui investit le président du gouvernement, qui peut le renverser et qui a le dernier mot quand les deux divergent sur une loi.",
  "Congreso": "Le Congrès",
  "350 diputados. La Constitución fija una horquilla de entre 300 y 400, y la ley electoral ha elegido siempre el número redondo.":
    "350 députés. La Constitution fixe une fourchette de 300 à 400, et la loi électorale a toujours choisi le nombre rond.",
  "Senado": "Le Sénat",
  "Cámara de representación territorial: cuatro senadores por provincia elegidos directamente, más los que designan los parlamentos autonómicos.":
    "Chambre de représentation territoriale : quatre sénateurs par province élus directement, plus ceux que désignent les parlements des communautés autonomes.",
  "Cuatro años": "Quatre ans",
  "Es la duración de la legislatura, salvo disolución anticipada, que en España ha sido frecuente.":
    "C'est la durée de la législature, sauf dissolution anticipée, fréquente en Espagne.",
  "Diputación Permanente": "La Députation permanente",
  "Cuando las cámaras están disueltas o fuera de periodo de sesiones, un grupo reducido vela por sus poderes.":
    "Quand les chambres sont dissoutes ou hors session, un groupe restreint veille sur leurs pouvoirs.",
  "¿Cuántos diputados tiene el Congreso?": "Combien de députés compte le Congrès ?",
  "Doscientos": "Deux cents",
  "Trescientos": "Trois cents",
  "Trescientos cincuenta": "Trois cent cinquante",
  "Cuatrocientos": "Quatre cents",
  "Trescientos cincuenta. La Constitución permite entre trescientos y cuatrocientos, y la ley electoral ha optado siempre por la cifra intermedia.":
    "Trois cent cinquante. La Constitution permet entre trois cents et quatre cents, et la loi électorale a toujours choisi le chiffre intermédiaire.",
  "Cómo se elige el Congreso": "Comment le Congrès est élu",
  "La circunscripción es la **provincia**, y Ceuta y Melilla eligen un diputado cada una. Cada provincia tiene un **mínimo inicial de dos escaños** y el resto se reparte en proporción a la población, lo que da a las provincias pequeñas más peso relativo del que les correspondería.":
    "La circonscription est la **province**, et Ceuta et Melilla élisent un député chacune. Chaque province a un **minimum initial de deux sièges** et le reste se répartit à proportion de la population, ce qui donne aux petites provinces plus de poids relatif qu'elles n'en auraient autrement.",
  "El reparto dentro de cada circunscripción se hace por el **sistema D'Hondt**, con **listas cerradas y bloqueadas**: se vota una candidatura entera, en el orden que fijó el partido, sin poder alterarlo. Quedan fuera las listas que no alcancen el **tres por ciento** de los votos válidos en su circunscripción.":
    "La répartition à l'intérieur de chaque circonscription se fait par la **méthode D'Hondt**, avec des **listes fermées et bloquées** : on vote une candidature entière, dans l'ordre fixé par le parti, sans pouvoir le modifier. Restent dehors les listes qui n'atteignent pas **trois pour cent** des suffrages valides de leur circonscription.",
  "El Senado y sus límites": "Le Sénat et ses limites",
  "En el Senado, cada provincia peninsular elige **cuatro senadores** por voto directo; las islas y las ciudades autónomas siguen reglas propias. A ellos se suman los designados por las **comunidades autónomas**: uno por comunidad y otro más por cada millón de habitantes.":
    "Au Sénat, chaque province de la péninsule élit **quatre sénateurs** au suffrage direct ; les îles et les villes autonomes suivent des règles propres. S'y ajoutent ceux que désignent les **communautés autonomes** : un par communauté et un de plus par million d'habitants.",
  "Cuando el Senado **veta** un proyecto o lo enmienda, el Congreso puede **levantar el veto** por **mayoría absoluta**, o por mayoría simple pasados **dos meses**. De ahí que al Senado se le llame a menudo cámara de segunda lectura, y que su reforma sea una discusión abierta desde hace décadas.":
    "Quand le Sénat **oppose son veto** à un projet ou l'amende, le Congrès peut **lever le veto** à la **majorité absolue**, ou à la majorité simple passés **deux mois**. D'où le fait qu'on appelle souvent le Sénat une chambre de seconde lecture, et que sa réforme soit un débat ouvert depuis des décennies.",
  "¿Qué ocurre cuando el Senado veta un proyecto de ley?":
    "Que se passe-t-il quand le Sénat oppose son veto à un projet de loi ?",
  "El proyecto decae definitivamente": "Le projet tombe définitivement",
  "El Congreso puede levantar el veto por mayoría absoluta":
    "Le Congrès peut lever le veto à la majorité absolue",
  "Se convoca un referéndum": "On convoque un référendum",
  "Decide el Tribunal Constitucional": "C'est le Tribunal constitutionnel qui tranche",
  "El Congreso levanta el veto por mayoría absoluta, o por mayoría simple transcurridos dos meses. Es la razón por la que el bicameralismo español se llama imperfecto.":
    "Le Congrès lève le veto à la majorité absolue, ou à la majorité simple deux mois plus tard. C'est la raison pour laquelle le bicaméralisme espagnol est dit imparfait.",
  "¿Qué cámara se define como de representación territorial?":
    "Quelle chambre se définit comme de représentation territoriale ?",
  "El Congreso de los Diputados": "Le Congrès des députés",
  "El Senado": "Le Sénat",
  "Las dos por igual": "Les deux également",
  "Ninguna: la representación es siempre del conjunto del pueblo":
    "Aucune : la représentation est toujours celle du peuple tout entier",
  "El artículo 69 define así al Senado. En la práctica su composición mezcla elección provincial y designación autonómica, y esa doble vía es uno de los motivos de que se discuta su reforma.":
    "C'est ainsi que l'article 69 définit le Sénat. En pratique, sa composition mêle élection provinciale et désignation par les communautés, et cette double voie est l'une des raisons pour lesquelles sa réforme est discutée.",
  "El sistema D'Hondt no es lo que hace que las provincias pequeñas pesen más: eso lo produce el **mínimo de dos escaños por provincia**. Son dos efectos distintos que suelen atribuirse al mismo culpable.":
    "Ce n'est pas la méthode D'Hondt qui fait peser davantage les petites provinces : cela vient du **minimum de deux sièges par province**. Ce sont deux effets distincts que l'on attribue d'ordinaire au même coupable.",
  "El Gobierno": "Le gouvernement",
  "Por qué importa: en España un gobierno no cae si pierde una votación. Solo cae si hay quien lo sustituya, y esa regla — copiada de Alemania y perfeccionada aquí — explica la estabilidad de los últimos cuarenta años.":
    "Pourquoi cela compte : en Espagne, un gouvernement ne tombe pas parce qu'il perd un vote. Il ne tombe que s'il y a quelqu'un pour le remplacer, et cette règle — reprise de l'Allemagne et affinée ici — explique la stabilité des quarante dernières années.",
  "Qué hace y quién lo forma": "Ce qu'il fait et qui le compose",
  "El **artículo 97** encarga al Gobierno dirigir la **política interior y exterior**, la **Administración civil y militar** y la **defensa del Estado**, ejercer la **función ejecutiva** y la **potestad reglamentaria**. Lo componen el **presidente**, los **vicepresidentes** en su caso y los **ministros**, que reunidos forman el **Consejo de Ministros**. Su sede es el **Palacio de la Moncloa**.":
    "L'**article 97** charge le gouvernement de diriger la **politique intérieure et extérieure**, l'**administration civile et militaire** et la **défense de l'État**, d'exercer la **fonction exécutive** et le **pouvoir réglementaire**. Il se compose du **président**, des **vice-présidents** le cas échéant et des **ministres**, qui réunis forment le **Conseil des ministres**. Son siège est le **palais de la Moncloa**.",
  "La investidura": "L'investiture",
  "El **artículo 99** describe el camino. Tras unas elecciones, el rey **consulta** a los representantes designados por los grupos políticos y, a través del presidente del Congreso, **propone un candidato**. El candidato expone su programa ante la cámara y pide su confianza.":
    "L'**article 99** décrit le chemin. Après des élections, le roi **consulte** les représentants désignés par les groupes politiques et, par l'intermédiaire du président du Congrès, **propose un candidat**. Le candidat expose son programme devant la chambre et demande sa confiance.",
  "En la **primera votación** necesita la **mayoría absoluta**. Si no la obtiene, cuarenta y ocho horas después basta la **mayoría simple**, es decir, más síes que noes. Si transcurren **dos meses** desde la primera votación sin que nadie sea investido, el rey **disuelve las Cortes** y se convocan nuevas elecciones.":
    "Au **premier vote**, il lui faut la **majorité absolue**. S'il ne l'obtient pas, quarante-huit heures plus tard la **majorité simple** suffit, c'est-à-dire plus de oui que de non. Si **deux mois** passent depuis le premier vote sans que personne soit investi, le roi **dissout les Cortes** et de nouvelles élections sont convoquées.",
  "¿Qué mayoría se necesita en la primera votación de investidura?":
    "Quelle majorité faut-il au premier vote d'investiture ?",
  "Mayoría simple": "La majorité simple",
  "Mayoría absoluta": "La majorité absolue",
  "Tres quintos": "Les trois cinquièmes",
  "Dos tercios": "Les deux tiers",
  "Mayoría absoluta en la primera votación. En la segunda, cuarenta y ocho horas después, basta con que haya más votos a favor que en contra.":
    "La majorité absolue au premier vote. Au second, quarante-huit heures plus tard, il suffit qu'il y ait plus de voix pour que contre.",
  "La censura constructiva": "La censure constructive",
  "La **moción de censura** española es **constructiva**: para derribar a un gobierno no basta con reunir votos en contra, hay que **presentar a la vez un candidato alternativo**. Si la moción prospera, ese candidato queda **automáticamente investido** presidente.":
    "La **motion de censure** espagnole est **constructive** : pour renverser un gouvernement, il ne suffit pas de réunir des voix contre, il faut **présenter en même temps un candidat de remplacement**. Si la motion aboutit, ce candidat est **automatiquement investi** président.",
  "La firma al menos la **décima parte** de los diputados y se vota transcurridos **cinco días**, durante los cuales pueden presentarse mociones alternativas. Exige **mayoría absoluta**. En más de cuarenta años solo ha prosperado **una vez**, en **2018**.":
    "Elle est signée par au moins un **dixième** des députés et se vote **cinq jours** plus tard, délai pendant lequel des motions concurrentes peuvent être déposées. Elle exige la **majorité absolue**. En plus de quarante ans, elle n'a abouti qu'**une seule fois**, en **2018**.",
  "La figura inversa es la **cuestión de confianza**, que plantea el propio presidente sobre su programa o una declaración de política general: se gana con **mayoría simple**, y perderla obliga a dimitir.":
    "La figure inverse est la **question de confiance**, que le président pose lui-même sur son programme ou sur une déclaration de politique générale : elle se gagne à la **majorité simple**, et la perdre oblige à démissionner.",
  "¿Qué distingue a la moción de censura española?":
    "Qu'est-ce qui distingue la motion de censure espagnole ?",
  "Que solo puede presentarla la oposición": "Que seule l'opposition peut la déposer",
  "Que es constructiva: debe incluir un candidato alternativo":
    "Qu'elle est constructive : elle doit comprendre un candidat de remplacement",
  "Que exige una mayoría de dos tercios": "Qu'elle exige une majorité des deux tiers",
  "Que la convoca el rey": "Que c'est le roi qui la convoque",
  "Sin candidato alternativo no hay moción. Es la razón de que solo haya prosperado una vez desde 1978: es fácil reunir votos contra alguien y difícil reunirlos a favor de un sustituto concreto.":
    "Sans candidat de remplacement, il n'y a pas de motion. C'est la raison pour laquelle elle n'a abouti qu'une fois depuis 1978 : il est facile de réunir des voix contre quelqu'un et difficile d'en réunir pour un remplaçant précis.",
  "Disolver y seguir": "Dissoudre et continuer",
  "El presidente puede **disolver** las Cortes y convocar elecciones anticipadas, con dos límites: no cabe hacerlo mientras esté en trámite una moción de censura, ni antes de que haya transcurrido **un año** desde la disolución anterior.":
    "Le président peut **dissoudre** les Cortes et convoquer des élections anticipées, avec deux limites : il ne peut le faire tant qu'une motion de censure est en cours, ni avant qu'**un an** ne se soit écoulé depuis la dissolution précédente.",
  "Cuando el gobierno cesa, sigue **en funciones** hasta que tome posesión el siguiente. Un gobierno en funciones despacha lo ordinario y no puede, entre otras cosas, presentar proyectos de ley ni aprobar los presupuestos: mantiene el país en marcha, pero no lo dirige.":
    "Quand le gouvernement cesse ses fonctions, il reste **en gestion des affaires courantes** jusqu'à l'entrée en fonction du suivant. Un gouvernement en affaires courantes expédie l'ordinaire et ne peut pas, entre autres, déposer de projets de loi ni faire adopter le budget : il maintient le pays en marche, mais ne le dirige pas.",
  "¿Qué puede hacer un gobierno en funciones?":
    "Que peut faire un gouvernement en affaires courantes ?",
  "Todo lo que hacía antes de cesar": "Tout ce qu'il faisait avant de cesser ses fonctions",
  "Despachar los asuntos ordinarios, sin presentar proyectos de ley ni presupuestos":
    "Expédier les affaires ordinaires, sans déposer de projets de loi ni de budget",
  "Nada: la Administración queda paralizada": "Rien : l'administration est paralysée",
  "Solo convocar elecciones": "Seulement convoquer des élections",
  "Se limita al despacho ordinario para que el país siga funcionando, pero no puede iniciar la acción legislativa ni aprobar presupuestos. España ha tenido periodos largos en esa situación.":
    "Il se borne à l'expédition des affaires ordinaires pour que le pays continue de fonctionner, mais il ne peut pas engager l'action législative ni faire adopter le budget. L'Espagne a connu de longues périodes dans cette situation.",
  "**Jefe del Estado** y **presidente del Gobierno** son dos cargos distintos y dos edificios distintos: el rey en la **Zarzuela**, el presidente en la **Moncloa**. En España el jefe del Estado no preside el Gobierno.":
    "**Chef de l'État** et **président du gouvernement** sont deux charges distinctes et deux bâtiments distincts : le roi à la **Zarzuela**, le président à la **Moncloa**. En Espagne, le chef de l'État ne préside pas le gouvernement.",
  "El poder judicial y el Tribunal Constitucional":
    "Le pouvoir judiciaire et le Tribunal constitutionnel",
  "Por qué importa: hay dos tribunales en la cumbre y no son el mismo. Uno cierra los pleitos; el otro juzga las leyes. Confundirlos es el error más común sobre la justicia española.":
    "Pourquoi cela compte : il y a deux tribunaux au sommet et ce ne sont pas les mêmes. L'un clôt les litiges ; l'autre juge les lois. Les confondre est l'erreur la plus courante sur la justice espagnole.",
  "Jueces sometidos solo a la ley": "Des juges soumis à la seule loi",
  "El **artículo 117** dice que la justicia **emana del pueblo** y se administra **en nombre del rey** por jueces y magistrados **independientes, inamovibles, responsables y sometidos únicamente al imperio de la ley**. Se entra en la carrera judicial por **oposición**, no por nombramiento político.":
    "L'**article 117** dit que la justice **émane du peuple** et est rendue **au nom du roi** par des juges et des magistrats **indépendants, inamovibles, responsables et soumis uniquement à l'empire de la loi**. On entre dans la carrière judiciaire par **concours**, non par nomination politique.",
  "El **Consejo General del Poder Judicial** es su órgano de gobierno: decide nombramientos, ascensos, inspección y régimen disciplinario. Lo forman **veinte vocales** más su **presidente**, que lo es también del Tribunal Supremo, con un mandato de **cinco años**.":
    "Le **Conseil général du pouvoir judiciaire** en est l'organe de gouvernement : il décide des nominations, des promotions, de l'inspection et du régime disciplinaire. Il compte **vingt membres** et son **président**, qui l'est aussi du Tribunal suprême, pour un mandat de **cinq ans**.",
  "La escalera de los tribunales": "L'escalier des tribunaux",
  "Juzgados": "Les tribunaux de première instance",
  "La primera instancia, repartida por partidos judiciales. Aquí se ven los hechos.":
    "La première instance, répartie par ressorts judiciaires. C'est là que les faits sont examinés.",
  "Audiencias Provinciales": "Les Audiencias Provinciales",
  "Resuelven los recursos de apelación en cada provincia.":
    "Elles tranchent les appels dans chaque province.",
  "Tribunales Superiores de Justicia": "Les Tribunaux supérieurs de justice",
  "Uno por comunidad autónoma. Culminan la organización judicial en su territorio, sin ser una instancia superior al Supremo.":
    "Un par communauté autonome. Ils couronnent l'organisation judiciaire sur leur territoire, sans être une instance supérieure au Tribunal suprême.",
  "Tribunal Supremo": "Le Tribunal suprême",
  "El órgano jurisdiccional superior en todos los órdenes, salvo en materia de garantías constitucionales.":
    "L'organe juridictionnel supérieur dans tous les ordres, sauf en matière de garanties constitutionnelles.",
  "La jurisdicción se divide en cuatro **órdenes**: **civil**, **penal**, **contencioso-administrativo** — para pleitos con la Administración — y **social**, para los laborales. Existe además la **Audiencia Nacional**, con competencia en toda España sobre delitos concretos como el terrorismo o los económicos de gran alcance.":
    "La juridiction se divise en quatre **ordres** : **civil**, **pénal**, **contentieux administratif** — pour les litiges avec l'administration — et **social**, pour ceux du travail. Il existe en outre l'**Audiencia Nacional**, compétente dans toute l'Espagne pour des délits précis comme le terrorisme ou les grandes affaires économiques.",
  "El **Ministerio Fiscal** promueve la acción de la justicia en defensa de la legalidad y del interés público. Su jefe, el **fiscal general del Estado**, lo nombra el rey a propuesta del Gobierno, oído el Consejo General del Poder Judicial.":
    "Le **ministère public** promeut l'action de la justice au nom de la légalité et de l'intérêt public. Son chef, le **procureur général de l'État**, est nommé par le roi sur proposition du gouvernement, le Conseil général du pouvoir judiciaire entendu.",
  "¿Cuál es el órgano de gobierno del poder judicial?":
    "Quel est l'organe de gouvernement du pouvoir judiciaire ?",
  "El Tribunal Supremo": "Le Tribunal suprême",
  "El Consejo General del Poder Judicial": "Le Conseil général du pouvoir judiciaire",
  "El Ministerio de Justicia": "Le ministère de la Justice",
  "El Tribunal Constitucional": "Le Tribunal constitutionnel",
  "El CGPJ decide nombramientos, ascensos e inspección. El Tribunal Supremo juzga; el Ministerio de Justicia administra medios materiales, y no manda sobre los jueces.":
    "Le CGPJ décide des nominations, des promotions et de l'inspection. Le Tribunal suprême juge ; le ministère de la Justice administre les moyens matériels et ne commande pas aux juges.",
  "No forma parte del poder judicial: es un órgano **aparte**, regulado en su propio título. Tiene **doce magistrados**, nombrados por el rey a propuesta de cuatro órganos distintos, de modo que ninguno pueda componerlo por su cuenta.":
    "Il ne fait pas partie du pouvoir judiciaire : c'est un organe **à part**, réglé par son propre titre. Il compte **douze magistrats**, nommés par le roi sur proposition de quatre organes différents, de sorte qu'aucun ne puisse le composer à lui seul.",
  "Cuatro del Congreso": "Quatre par le Congrès",
  "Elegidos por mayoría de tres quintos de la cámara.":
    "Élus à la majorité des trois cinquièmes de la chambre.",
  "Cuatro del Senado": "Quatre par le Sénat",
  "También por tres quintos, entre candidatos propuestos por los parlamentos autonómicos.":
    "Également aux trois cinquièmes, parmi des candidats proposés par les parlements des communautés autonomes.",
  "Dos del Gobierno": "Deux par le gouvernement",
  "Es la vía más directa del ejecutivo al tribunal.":
    "C'est la voie la plus directe de l'exécutif vers le tribunal.",
  "Dos del CGPJ": "Deux par le CGPJ",
  "La aportación del gobierno de los jueces.": "L'apport du gouvernement des juges.",
  "El mandato es de **nueve años** y el tribunal se renueva **por terceras partes cada tres**, de manera que nunca cambia entero de una vez. Sus competencias principales son el **recurso** y la **cuestión de inconstitucionalidad** contra las leyes, el **recurso de amparo** en defensa de los derechos fundamentales y los **conflictos de competencia** entre el Estado y las comunidades autónomas.":
    "Le mandat est de **neuf ans** et le tribunal se renouvelle **par tiers tous les trois ans**, de sorte qu'il ne change jamais entièrement d'un coup. Ses compétences principales sont le **recours** et la **question d'inconstitutionnalité** contre les lois, le **recurso de amparo** en défense des droits fondamentaux et les **conflits de compétence** entre l'État et les communautés autonomes.",
  "¿Cuántos magistrados tiene el Tribunal Constitucional?":
    "Combien de magistrats compte le Tribunal constitutionnel ?",
  "Nueve": "Neuf",
  "Veinte": "Vingt",
  "Doce, nombrados a propuesta de cuatro órganos distintos: cuatro del Congreso, cuatro del Senado, dos del Gobierno y dos del CGPJ. Veinte son los vocales del CGPJ.":
    "Douze, nommés sur proposition de quatre organes différents : quatre par le Congrès, quatre par le Sénat, deux par le gouvernement et deux par le CGPJ. Vingt est le nombre des membres du CGPJ.",
  "¿Forma el Tribunal Constitucional parte del poder judicial?":
    "Le Tribunal constitutionnel fait-il partie du pouvoir judiciaire ?",
  "Sí, es su órgano superior": "Oui, il en est l'organe supérieur",
  "No: es un órgano aparte, regulado en su propio título":
    "Non : c'est un organe à part, réglé par son propre titre",
  "Sí, es una sala del Tribunal Supremo": "Oui, c'est une chambre du Tribunal suprême",
  "Solo cuando resuelve recursos de amparo": "Seulement quand il tranche des recursos de amparo",
  "Está fuera del poder judicial y por encima de él en su materia. El Tribunal Supremo es la cúspide de la jurisdicción ordinaria; el Constitucional juzga las leyes y los derechos fundamentales.":
    "Il est hors du pouvoir judiciaire et au-dessus de lui dans sa matière. Le Tribunal suprême est le sommet de la juridiction ordinaire ; le Constitutionnel juge les lois et les droits fondamentaux.",
  "Los **Tribunales Superiores de Justicia** culminan la organización judicial **en su comunidad**, pero no están por encima del Supremo. Autonómico no significa aquí una instancia más alta, sino un ámbito distinto.":
    "Les **Tribunaux supérieurs de justice** couronnent l'organisation judiciaire **dans leur communauté**, mais ne sont pas au-dessus du Tribunal suprême. Autonomique ne veut pas dire ici une instance plus haute, mais un domaine différent.",
  "Elecciones y participación ciudadana": "Élections et participation citoyenne",
  "Por qué importa: en España se vota en cuatro elecciones distintas, y en una de ellas no se elige a quien acaba mandando. Ese detalle sorprende a mucha gente el día que estrena el censo.":
    "Pourquoi cela compte : en Espagne on vote à quatre élections différentes, et dans l'une d'elles on n'élit pas celui qui finit par commander. Ce détail surprend beaucoup de gens le jour où ils votent pour la première fois.",
  "Cuatro urnas": "Quatre urnes",
  "El sufragio es **universal, libre, igual, directo y secreto**, y se ejerce desde los **dieciocho años**. Se vota en cuatro convocatorias distintas, que no coinciden en el tiempo ni tienen las mismas reglas.":
    "Le suffrage est **universel, libre, égal, direct et secret**, et s'exerce à partir de **dix-huit ans**. On vote à quatre scrutins différents, qui ne coïncident ni dans le temps ni dans leurs règles.",
  "Generales": "Les générales",
  "Para el Congreso y el Senado, cada cuatro años salvo disolución anticipada.":
    "Pour le Congrès et le Sénat, tous les quatre ans sauf dissolution anticipée.",
  "Autonómicas": "Les autonomiques",
  "Para el parlamento de cada comunidad. Muchas coinciden en el mismo día, pero no todas.":
    "Pour le parlement de chaque communauté. Beaucoup tombent le même jour, mais pas toutes.",
  "Municipales": "Les municipales",
  "Para el pleno del ayuntamiento. Se celebran a la vez en toda España.":
    "Pour le conseil municipal. Elles ont lieu le même jour dans toute l'Espagne.",
  "Europeas": "Les européennes",
  "Para el Parlamento Europeo, con España como circunscripción única.":
    "Pour le Parlement européen, avec l'Espagne comme circonscription unique.",
  "En las **municipales** se eligen **concejales**, no alcaldes. Es el pleno del ayuntamiento, ya constituido, el que **elige al alcalde** entre los cabezas de lista. Si ninguno logra la mayoría absoluta de los concejales, resulta elegido el que encabezó la lista más votada.":
    "Aux **municipales**, on élit des **conseillers**, non des maires. C'est le conseil municipal, une fois constitué, qui **élit le maire** parmi les têtes de liste. Si aucun n'obtient la majorité absolue des conseillers, est élu celui qui menait la liste arrivée en tête.",
  "¿Quién elige al alcalde en España?": "Qui élit le maire en Espagne ?",
  "Los vecinos, con voto directo al candidato": "Les habitants, par un vote direct au candidat",
  "Los concejales, en el pleno de constitución":
    "Les conseillers, lors de la séance de constitution",
  "El presidente de la comunidad autónoma": "Le président de la communauté autonome",
  "El delegado del Gobierno": "Le délégué du gouvernement",
  "En las municipales se vota una lista de concejales y son ellos quienes eligen alcalde. Si nadie reúne mayoría absoluta, lo es el cabeza de la lista más votada.":
    "Aux municipales, on vote une liste de conseillers et ce sont eux qui élisent le maire. Si personne ne réunit la majorité absolue, c'est la tête de la liste arrivée en tête.",
  "Partidos y sindicatos": "Partis et syndicats",
  "El **artículo 6** define a los **partidos políticos** como expresión del pluralismo político e instrumento fundamental de la participación, y exige que su **estructura interna y su funcionamiento sean democráticos**. El **artículo 7** dice lo mismo de los **sindicatos** y de las **asociaciones empresariales**.":
    "L'**article 6** définit les **partis politiques** comme l'expression du pluralisme politique et un instrument fondamental de la participation, et exige que leur **structure interne et leur fonctionnement soient démocratiques**. L'**article 7** dit la même chose des **syndicats** et des **organisations patronales**.",
  "Los dos sindicatos mayoritarios son **Comisiones Obreras** y la **Unión General de Trabajadores**, a los que se suman otros de ámbito autonómico o sectorial. La afiliación es baja en comparación europea, pero su papel es grande, porque los convenios que negocian se aplican a todo el sector y no solo a los afiliados.":
    "Les deux syndicats majoritaires sont **Comisiones Obreras** et l'**Unión General de Trabajadores**, auxquels s'ajoutent d'autres, régionaux ou sectoriels. L'adhésion est faible en comparaison européenne, mais leur rôle est grand, car les conventions qu'ils négocient s'appliquent à tout le secteur et non aux seuls adhérents.",
  "Participar sin ser elegido": "Participer sans être élu",
  "Iniciativa legislativa popular": "L'initiative législative populaire",
  "Quinientas mil firmas acreditadas permiten llevar una proposición de ley al Congreso. Quedan fuera materias como los tributos o el derecho de gracia.":
    "Cinq cent mille signatures certifiées permettent de porter une proposition de loi au Congrès. Des matières comme les impôts ou le droit de grâce en sont exclues.",
  "Derecho de petición": "Le droit de pétition",
  "El artículo 29 permite dirigirse por escrito a los poderes públicos. Es antiguo, sencillo y poco usado.":
    "L'article 29 permet de s'adresser par écrit aux pouvoirs publics. Il est ancien, simple et peu employé.",
  "Referéndum consultivo": "Le référendum consultatif",
  "El artículo 92 lo prevé para decisiones de especial trascendencia. Lo convoca el rey, a propuesta del presidente autorizada por el Congreso.":
    "L'article 92 le prévoit pour les décisions d'une importance particulière. Le roi le convoque, sur proposition du président autorisée par le Congrès.",
  "El jurado": "Le jury",
  "El artículo 125 abre la participación en la Administración de Justicia. El tribunal del jurado juzga determinados delitos.":
    "L'article 125 ouvre la participation à l'administration de la justice. Le tribunal du jury juge certains délits.",
  "Dos instituciones vigilan por cuenta de las Cortes. El **Defensor del Pueblo** es su **alto comisionado** para la defensa de los derechos del título I: supervisa la actividad de la Administración y puede interponer recursos ante el Tribunal Constitucional, aunque sus resoluciones no son ejecutivas. El **Tribunal de Cuentas** fiscaliza las cuentas y la gestión económica del Estado y del sector público.":
    "Deux institutions veillent pour le compte des Cortes. Le **Défenseur du peuple** en est le **haut-commissaire** pour la défense des droits du titre I : il surveille l'activité de l'administration et peut former des recours devant le Tribunal constitutionnel, même si ses décisions ne sont pas exécutoires. Le **Tribunal des comptes** contrôle les comptes et la gestion économique de l'État et du secteur public.",
  "¿Cuántas firmas se necesitan para una iniciativa legislativa popular?":
    "Combien de signatures faut-il pour une initiative législative populaire ?",
  "Cincuenta mil": "Cinquante mille",
  "Cien mil": "Cent mille",
  "Quinientas mil": "Cinq cent mille",
  "Un millón": "Un million",
  "Quinientas mil firmas acreditadas. Además hay materias excluidas: los tributos, lo internacional, el derecho de gracia y las leyes orgánicas quedan fuera de esta vía.":
    "Cinq cent mille signatures certifiées. Il y a en outre des matières exclues : les impôts, l'international, le droit de grâce et les lois organiques restent hors de cette voie.",
  "¿Qué es el Defensor del Pueblo?": "Qu'est-ce que le Défenseur du peuple ?",
  "Un tribunal que anula actos administrativos":
    "Un tribunal qui annule les actes administratifs",
  "El alto comisionado de las Cortes para la defensa de los derechos fundamentales":
    "Le haut-commissaire des Cortes pour la défense des droits fondamentaux",
  "Un ministerio del Gobierno": "Un ministère du gouvernement",
  "El fiscal jefe del Tribunal Supremo": "Le procureur en chef du Tribunal suprême",
  "Depende de las Cortes, no del Gobierno, y supervisa a la Administración. Sus resoluciones no obligan, pero puede recurrir leyes ante el Tribunal Constitucional.":
    "Il dépend des Cortes, non du gouvernement, et surveille l'administration. Ses décisions ne lient pas, mais il peut attaquer des lois devant le Tribunal constitutionnel.",
  "En las **autonómicas** tampoco se vota directamente al presidente de la comunidad: se elige el parlamento, y este lo inviste. La única elección directa de una persona en España es la del **Senado**.":
    "Aux **autonomiques** non plus on ne vote pas directement pour le président de la communauté : on élit le parlement, et c'est lui qui l'investit. La seule élection directe d'une personne en Espagne est celle du **Sénat**.",
  "De Hispania a al-Ándalus y los reinos cristianos":
    "De l'Hispanie à al-Andalus et aux royaumes chrétiens",
  "Historia de España": "L'histoire de l'Espagne",
  "Por qué se empieza aquí: durante casi ocho siglos la Península no fue un país sino varios, y dos mundos convivieron en ella. Esa larga frontera interior explica más de España que cualquier fecha suelta.":
    "Pourquoi commencer ici : pendant près de huit siècles, la péninsule ne fut pas un pays mais plusieurs, et deux mondes y ont coexisté. Cette longue frontière intérieure explique plus de l'Espagne que n'importe quelle date isolée.",
  "Antes de Roma": "Avant Rome",
  "La Península estuvo poblada por **íberos** en el este y el sur y por pueblos **celtas** en el interior y el noroeste, con **Tartessos** como la civilización más antigua de la que hablan las fuentes. Por la costa llegaron **fenicios**, **griegos** y **cartagineses** a comerciar: **Cádiz**, fundada por fenicios, se considera la ciudad más antigua de Europa occidental.":
    "La péninsule fut peuplée d'**Ibères** à l'est et au sud et de peuples **celtes** à l'intérieur et au nord-ouest, avec **Tartessos** comme la plus ancienne civilisation dont parlent les sources. Par la côte arrivèrent des **Phéniciens**, des **Grecs** et des **Carthaginois** pour commercer : **Cadix**, fondée par les Phéniciens, passe pour la plus ancienne ville d'Europe occidentale.",
  "Hispania": "L'Hispanie",
  "Los romanos desembarcaron en **Ampurias en el 218 antes de Cristo**, durante la segunda guerra púnica, y tardaron **dos siglos** en dominar el territorio: la resistencia del norte no cedió hasta las **guerras cántabras**, hacia el 19 antes de Cristo.":
    "Les Romains débarquèrent à **Ampurias en 218 avant Jésus-Christ**, pendant la deuxième guerre punique, et mirent **deux siècles** à dominer le territoire : la résistance du nord ne céda qu'avec les **guerres cantabres**, vers 19 avant Jésus-Christ.",
  "De Roma quedan la **lengua** —del latín salen el castellano, el gallego y el catalán—, el **derecho**, las **ciudades** y las obras que aún se usan: el **acueducto de Segovia**, el teatro de **Mérida**, las murallas de Lugo. Hispania dio además al imperio tres emperadores —**Trajano**, **Adriano** y **Teodosio**— y al pensamiento a **Séneca**.":
    "De Rome restent la **langue** — du latin viennent le castillan, le galicien et le catalan —, le **droit**, les **villes** et les ouvrages encore en usage : l'**aqueduc de Ségovie**, le théâtre de **Mérida**, les murailles de Lugo. L'Hispanie a en outre donné à l'empire trois empereurs — **Trajan**, **Hadrien** et **Théodose** — et à la pensée **Sénèque**.",
  "¿Qué emperadores romanos nacieron en Hispania?":
    "Quels empereurs romains sont nés en Hispanie ?",
  "Augusto y Nerón": "Auguste et Néron",
  "Trajano y Adriano": "Trajan et Hadrien",
  "César y Calígula": "César et Caligula",
  "Constantino y Justiniano": "Constantin et Justinien",
  "Trajano y Adriano nacieron en Itálica, cerca de la actual Sevilla, y Teodosio en la actual Segovia. Hispania no fue solo una provincia: llegó a dar emperadores al imperio.":
    "Trajan et Hadrien naquirent à Italica, près de l'actuelle Séville, et Théodose dans l'actuelle Ségovie. L'Hispanie ne fut pas seulement une province : elle en vint à donner des empereurs à l'empire.",
  "Los visigodos": "Les Wisigoths",
  "Con el imperio en descomposición entraron **suevos, vándalos y alanos** en el **409**, y tras ellos los **visigodos**, que acabaron formando un reino con capital en **Toledo**. Su momento decisivo llegó en el **589**, cuando el rey **Recaredo** abandonó el arrianismo y se convirtió al **catolicismo** en el III Concilio de Toledo: religión y monarquía quedaron unidas, y así seguirían durante siglos.":
    "L'empire se décomposant, entrèrent les **Suèves, les Vandales et les Alains** en **409**, et après eux les **Wisigoths**, qui finirent par former un royaume avec **Tolède** pour capitale. Leur moment décisif vint en **589**, quand le roi **Récarède** abandonna l'arianisme et se convertit au **catholicisme** au IIIe concile de Tolède : religion et monarchie se trouvèrent liées, et elles le resteraient des siècles.",
  "711 y al-Ándalus": "711 et al-Andalus",
  "En el **711** un ejército musulmán cruzó el Estrecho y derrotó al rey visigodo Rodrigo en la batalla de **Guadalete**. En pocos años dominó casi toda la Península, a la que llamó **al-Ándalus**.":
    "En **711**, une armée musulmane franchit le détroit et battit le roi wisigoth Rodrigue à la bataille du **Guadalete**. En quelques années, elle domina presque toute la péninsule, qu'elle appela **al-Andalus**.",
  "El momento de mayor esplendor fue el **Califato de Córdoba**, proclamado por **Abderramán III** en el **929**. Córdoba llegó a ser la ciudad más poblada de Europa occidental, con bibliotecas, baños y una mezquita que aún se levanta. En el **1031** el califato se deshizo en los **reinos de taifas**, y la Península se fragmentó todavía más.":
    "Le moment de plus grand éclat fut le **califat de Cordoue**, proclamé par **Abd al-Rahman III** en **929**. Cordoue devint la ville la plus peuplée d'Europe occidentale, avec ses bibliothèques, ses bains et une mosquée qui se dresse encore. En **1031**, le califat se défit en **royaumes de taïfas**, et la péninsule se fragmenta davantage encore.",
  "La Mezquita de Córdoba": "La Mosquée de Cordoue",
  "Ampliada durante dos siglos y convertida en catedral tras la conquista. El bosque de columnas sigue en pie.":
    "Agrandie pendant deux siècles et changée en cathédrale après la conquête. La forêt de colonnes est toujours debout.",
  "La Alhambra": "L'Alhambra",
  "Palacio y fortaleza del reino nazarí de Granada, el último de al-Ándalus, construido sobre todo en el siglo XIV.":
    "Palais et forteresse du royaume nasride de Grenade, le dernier d'al-Andalus, bâti surtout au XIVe siècle.",
  "La Escuela de Toledo": "L'École de Tolède",
  "Traductores cristianos, musulmanes y judíos vertieron al latín obras griegas y árabes que Europa había perdido.":
    "Des traducteurs chrétiens, musulmans et juifs mirent en latin des œuvres grecques et arabes que l'Europe avait perdues.",
  "El Camino de Santiago": "Le Chemin de Saint-Jacques",
  "Desde el siglo IX peregrinos de toda Europa cruzan el norte peninsular. Sigue haciéndose hoy.":
    "Depuis le IXe siècle, des pèlerins de toute l'Europe traversent le nord de la péninsule. On le fait encore aujourd'hui.",
  "¿En qué año cruzaron el Estrecho los ejércitos musulmanes?":
    "En quelle année les armées musulmanes ont-elles franchi le détroit ?",
  "En el 409": "En 409",
  "En el 589": "En 589",
  "En el 711": "En 711",
  "En el 1031": "En 1031",
  "El 711, con la derrota del rey visigodo Rodrigo en Guadalete. El 589 es la conversión de Recaredo y el 1031 el fin del Califato de Córdoba.":
    "En 711, avec la défaite du roi wisigoth Rodrigue au Guadalete. 589 est la conversion de Récarède et 1031 la fin du califat de Cordoue.",
  "Los reinos del norte": "Les royaumes du nord",
  "En la franja cantábrica se formó el reino de **Asturias**, cuyo origen la tradición sitúa en **Covadonga**, y de él salieron **León** y **Castilla**. Al este surgieron **Navarra**, **Aragón** y los **condados catalanes**, unidos a Aragón en el siglo XII. Del oeste leonés nació **Portugal**.":
    "Sur la frange cantabrique se forma le royaume des **Asturies**, dont la tradition place l'origine à **Covadonga**, et de lui sortirent **León** et la **Castille**. À l'est surgirent la **Navarre**, l'**Aragon** et les **comtés catalans**, unis à l'Aragon au XIIe siècle. De l'ouest léonais naquit le **Portugal**.",
  "El avance hacia el sur fue lento y desigual, con siglos de treguas, pactos y matrimonios además de batallas. **Toledo** cayó en **1085**, la victoria de **Las Navas de Tolosa** en **1212** abrió Andalucía, **Sevilla** en **1248**. Solo quedó el **reino nazarí de Granada**, que resistiría dos siglos y medio más.":
    "L'avancée vers le sud fut lente et inégale, avec des siècles de trêves, de pactes et de mariages autant que de batailles. **Tolède** tomba en **1085**, la victoire de **Las Navas de Tolosa** en **1212** ouvrit l'Andalousie, **Séville** en **1248**. Ne resta que le **royaume nasride de Grenade**, qui allait résister deux siècles et demi de plus.",
  "¿Qué ciudad fue la capital del Califato?": "Quelle ville fut la capitale du califat ?",
  "Toledo": "Tolède",
  "Córdoba": "Cordoue",
  "Sevilla": "Séville",
  "Córdoba, desde el 929. Toledo había sido la capital visigoda y Granada fue la sede del último reino nazarí, dos siglos y medio después de que el califato desapareciera.":
    "Cordoue, à partir de 929. Tolède avait été la capitale wisigothe et Grenade fut le siège du dernier royaume nasride, deux siècles et demi après la disparition du califat.",
  "Ocho siglos no son ocho siglos de guerra continua. Hubo largos periodos de tregua, alianzas cruzadas entre reyes cristianos y musulmanes, y un intercambio constante de libros, cultivos y palabras: buena parte del vocabulario español de la agricultura y la ciencia viene del árabe.":
    "Huit siècles ne sont pas huit siècles de guerre continue. Il y eut de longues périodes de trêve, des alliances croisées entre rois chrétiens et musulmans, et un échange constant de livres, de cultures et de mots : une bonne part du vocabulaire espagnol de l'agriculture et de la science vient de l'arabe.",
  "Los Reyes Católicos y la monarquía hispánica":
    "Les Rois Catholiques et la monarchie hispanique",
  "Por qué importa: en un solo año, 1492, España termina una guerra de siglos, expulsa a una parte de su población y llega a un continente que no sabía que existía. Casi todo lo que viene después arranca de ahí.":
    "Pourquoi cela compte : en une seule année, 1492, l'Espagne met fin à une guerre de siècles, expulse une partie de sa population et atteint un continent dont elle ignorait l'existence. Presque tout ce qui suit part de là.",
  "Una unión de personas, no de reinos": "Une union de personnes, non de royaumes",
  "**Isabel de Castilla** y **Fernando de Aragón** se casaron en **1469**. Lo que unieron fue una **corona**, no un Estado: cada reino conservó sus leyes, sus cortes, su moneda y sus aduanas. España nació como una **unión dinástica**, y la unificación jurídica no llegaría hasta el siglo XVIII.":
    "**Isabelle de Castille** et **Ferdinand d'Aragon** se marièrent en **1469**. Ce qu'ils unirent fut une **couronne**, non un État : chaque royaume garda ses lois, ses cortes, sa monnaie et ses douanes. L'Espagne naquit comme une **union dynastique**, et l'unification juridique n'arriverait qu'au XVIIIe siècle.",
  "1492": "1492",
  "La toma de Granada": "La prise de Grenade",
  "El 2 de enero cae el último reino nazarí, y con él termina la presencia política musulmana en la Península.":
    "Le 2 janvier tombe le dernier royaume nasride, et avec lui s'achève la présence politique musulmane dans la péninsule.",
  "La expulsión de los judíos": "L'expulsion des juifs",
  "El decreto de marzo obliga a convertirse o marchar. Los sefardíes conservaron durante siglos su lengua, y hoy tienen un plazo reducido para pedir la nacionalidad.":
    "Le décret de mars oblige à se convertir ou à partir. Les séfarades ont gardé leur langue pendant des siècles, et ils ont aujourd'hui un délai réduit pour demander la nationalité.",
  "La llegada a América": "L'arrivée en Amérique",
  "El 12 de octubre Colón alcanza una isla del Caribe. Es la fecha de la actual Fiesta Nacional.":
    "Le 12 octobre, Colomb atteint une île des Caraïbes. C'est la date de l'actuelle Fête nationale.",
  "La Gramática de Nebrija": "La Grammaire de Nebrija",
  "La primera gramática de una lengua romance. Se publicó ese mismo año, y no por casualidad.":
    "La première grammaire d'une langue romane. Elle parut cette même année, et ce n'est pas un hasard.",
  "En **1512** se incorporó **Navarra**, con lo que la Península quedó bajo una sola corona salvo Portugal. La empresa americana convirtió a Castilla en cabeza de un imperio en pocas décadas.":
    "En **1512** fut incorporée la **Navarre**, et la péninsule se trouva sous une seule couronne à l'exception du Portugal. L'entreprise américaine fit de la Castille la tête d'un empire en quelques décennies.",
  "¿Qué tres hechos coinciden en el año 1492?":
    "Quels trois faits coïncident dans l'année 1492 ?",
  "La toma de Granada, la expulsión de los judíos y la llegada a América":
    "La prise de Grenade, l'expulsion des juifs et l'arrivée en Amérique",
  "La unión de Castilla y Aragón, la conquista de Navarra y la de Portugal":
    "L'union de la Castille et de l'Aragon, la conquête de la Navarre et celle du Portugal",
  "La llegada de los Borbones, Utrecht y los Decretos de Nueva Planta":
    "L'arrivée des Bourbons, Utrecht et les décrets de Nueva Planta",
  "La fundación de Madrid, la de Sevilla y la de Cádiz":
    "La fondation de Madrid, celle de Séville et celle de Cadix",
  "Los tres ocurren en 1492, junto con la publicación de la primera gramática castellana. Navarra se incorporó en 1512 y Portugal solo estuvo unido a la corona entre 1580 y 1640.":
    "Les trois ont lieu en 1492, avec la publication de la première grammaire castillane. La Navarre fut incorporée en 1512 et le Portugal ne fut uni à la couronne qu'entre 1580 et 1640.",
  "Los Austrias": "Les Habsbourg",
  "**Carlos I** heredó en **1516** un conjunto sin precedentes: Castilla, Aragón, los territorios italianos, Flandes, Austria y América. Como **Carlos V** fue también emperador del Sacro Imperio. Su hijo **Felipe II** fijó la capital en **Madrid** en **1561**, construyó **El Escorial** y sumó **Portugal** en **1580**, en una unión que duraría hasta **1640**.":
    "**Charles Ier** hérita en **1516** d'un ensemble sans précédent : la Castille, l'Aragon, les territoires italiens, la Flandre, l'Autriche et l'Amérique. Sous le nom de **Charles Quint**, il fut aussi empereur du Saint-Empire. Son fils **Philippe II** fixa la capitale à **Madrid** en **1561**, bâtit l'**Escurial** et ajouta le **Portugal** en **1580**, dans une union qui durerait jusqu'en **1640**.",
  "De aquella extensión viene la frase del imperio **donde nunca se ponía el sol**. También vinieron guerras interminables, tres bancarrotas y una economía que dependía de la plata americana más que de su propia producción.":
    "De cette étendue vient la formule de l'empire **sur lequel le soleil ne se couchait jamais**. En vinrent aussi des guerres interminables, trois banqueroutes et une économie qui dépendait de l'argent d'Amérique plus que de sa propre production.",
  "El Siglo de Oro": "Le Siècle d'or",
  "Mientras el poder político se desgastaba, la cultura vivió su mayor momento. **Cervantes** publicó el **Quijote** en **1605**, considerado la primera novela moderna; escribieron **Lope de Vega**, **Calderón**, **Quevedo** y **Góngora**; pintaron **El Greco**, **Velázquez** y **Murillo**. **Las Meninas**, de 1656, sigue en el **Museo del Prado**.":
    "Pendant que le pouvoir politique s'usait, la culture connut son plus grand moment. **Cervantès** publia le **Quichotte** en **1605**, tenu pour le premier roman moderne ; écrivirent **Lope de Vega**, **Calderón**, **Quevedo** et **Góngora** ; peignirent **le Greco**, **Vélasquez** et **Murillo**. **Les Ménines**, de 1656, sont toujours au **musée du Prado**.",
  "¿Quién escribió el Quijote?": "Qui a écrit le Quichotte ?",
  "Lope de Vega": "Lope de Vega",
  "Miguel de Cervantes": "Miguel de Cervantès",
  "Francisco de Quevedo": "Francisco de Quevedo",
  "Pedro Calderón de la Barca": "Pedro Calderón de la Barca",
  "Cervantes publicó la primera parte en 1605 y la segunda en 1615. Se considera la primera novela moderna, y el 23 de abril, fecha de su muerte, es el Día del Libro.":
    "Cervantès publia la première partie en 1605 et la seconde en 1615. On y voit le premier roman moderne, et le 23 avril, date de sa mort, est la Journée du livre.",
  "Los Borbones": "Les Bourbons",
  "La muerte sin descendencia del último Austria abrió en **1700** la **Guerra de Sucesión**, una guerra europea peleada también dentro de España. La ganó **Felipe V**, el primer **Borbón**, y el **Tratado de Utrecht** de **1713** repartió los despojos: España perdió sus territorios europeos y **Gibraltar**, que sigue siendo británico.":
    "La mort sans descendance du dernier Habsbourg ouvrit en **1700** la **guerre de Succession**, une guerre européenne livrée aussi à l'intérieur de l'Espagne. **Philippe V**, le premier **Bourbon**, la gagna, et le **traité d'Utrecht** de **1713** partagea les dépouilles : l'Espagne perdit ses territoires européens et **Gibraltar**, qui reste britannique.",
  "Felipe V impuso los **Decretos de Nueva Planta**, que suprimieron las instituciones propias de la Corona de Aragón y extendieron el modelo castellano. La unión dinástica de 1469 se convirtió entonces, dos siglos y medio después, en un Estado unificado.":
    "Philippe V imposa les **décrets de Nueva Planta**, qui supprimèrent les institutions propres de la Couronne d'Aragon et étendirent le modèle castillan. L'union dynastique de 1469 devint alors, deux siècles et demi plus tard, un État unifié.",
  "¿Qué dinastía llegó al trono tras la Guerra de Sucesión?":
    "Quelle dynastie arriva sur le trône après la guerre de Succession ?",
  "Los Trastámara": "Les Trastamare",
  "Los Saboya": "Les Savoie",
  "Los Borbones, con Felipe V, y siguen reinando hoy. Los Trastámara fueron la dinastía de los Reyes Católicos y los Saboya solo dieron un rey, Amadeo I, en el siglo XIX.":
    "Les Bourbons, avec Philippe V, et ils règnent encore aujourd'hui. Les Trastamare furent la dynastie des Rois Catholiques et les Savoie ne donnèrent qu'un roi, Amédée Ier, au XIXe siècle.",
  "La unión de 1469 fue **dinástica**. Castilla y Aragón mantuvieron leyes, cortes y aduanas propias durante dos siglos y medio, y quien las suprimió fue un Borbón en el siglo XVIII, no los Reyes Católicos.":
    "L'union de 1469 fut **dynastique**. La Castille et l'Aragon gardèrent lois, cortes et douanes propres pendant deux siècles et demi, et celui qui les supprima fut un Bourbon au XVIIIe siècle, non les Rois Catholiques.",
  "El siglo XIX": "Le XIXe siècle",
  "Por qué importa: en cien años España pierde un imperio, estrena su primera constitución, se pelea consigo misma tres veces y prueba una república que dura once meses. La inestabilidad del XIX explica la del XX.":
    "Pourquoi cela compte : en cent ans, l'Espagne perd un empire, se donne sa première constitution, se bat trois fois contre elle-même et essaie une république qui dure onze mois. L'instabilité du XIXe explique celle du XXe.",
  "1808": "1808",
  "Napoleón entró en España con la excusa de atravesarla hacia Portugal y acabó colocando en el trono a su hermano **José I**. El **2 de mayo de 1808** el pueblo de Madrid se levantó, y con él el resto del país: empezó la **Guerra de la Independencia**, seis años de guerra irregular que dieron al mundo la palabra **guerrilla**.":
    "Napoléon entra en Espagne sous prétexte de la traverser vers le Portugal et finit par mettre son frère **Joseph Ier** sur le trône. Le **2 mai 1808**, le peuple de Madrid se souleva, et avec lui le reste du pays : commença la **guerre d'Indépendance**, six ans de guerre irrégulière qui donnèrent au monde le mot **guérilla**.",
  "La Pepa": "La Pepa",
  "Mientras el país estaba ocupado, unas Cortes reunidas en **Cádiz** —la ciudad que resistía— aprobaron el **19 de marzo de 1812** la primera **Constitución** española. Como ese día es San José, se la conoce como **La Pepa**.":
    "Pendant que le pays était occupé, des Cortes réunies à **Cadix** — la ville qui résistait — adoptèrent le **19 mars 1812** la première **Constitution** espagnole. Comme ce jour est la Saint-Joseph, on la connaît sous le nom de **La Pepa**.",
  "Proclamaba la **soberanía nacional**, la división de poderes y la libertad de imprenta. Duró poco: **Fernando VII** volvió en **1814**, la derogó y restauró el absolutismo. Ese vaivén entre texto liberal y vuelta atrás se repetiría durante todo el siglo.":
    "Elle proclamait la **souveraineté nationale**, la séparation des pouvoirs et la liberté de la presse. Elle dura peu : **Ferdinand VII** revint en **1814**, l'abrogea et rétablit l'absolutisme. Ce va-et-vient entre texte libéral et retour en arrière se répéterait tout au long du siècle.",
  "¿Cómo se conoce popularmente la Constitución de 1812?":
    "Comment appelle-t-on couramment la Constitution de 1812 ?",
  "La Gloriosa": "La Gloriosa",
  "La Nanita": "La Nanita",
  "La Cadista": "La Cadista",
  "Se aprobó el 19 de marzo, día de San José, y de ahí el apodo. La Gloriosa es en cambio el nombre de la revolución de 1868.":
    "Elle fut adoptée le 19 mars, jour de la Saint-Joseph, d'où le surnom. La Gloriosa est en revanche le nom de la révolution de 1868.",
  "El fin del imperio americano": "La fin de l'empire d'Amérique",
  "El vacío de poder de 1808 fue el detonante que las colonias esperaban. Entre **1810 y 1824** los territorios continentales de América se independizaron uno tras otro, y la batalla de **Ayacucho**, en 1824, cerró el proceso. Quedaron solo **Cuba**, **Puerto Rico** y **Filipinas**.":
    "Le vide du pouvoir de 1808 fut l'étincelle que les colonies attendaient. Entre **1810 et 1824**, les territoires continentaux d'Amérique devinrent indépendants l'un après l'autre, et la bataille d'**Ayacucho**, en 1824, clôtura le processus. Ne restèrent que **Cuba**, **Porto Rico** et les **Philippines**.",
  "Un siglo de conflictos": "Un siècle de conflits",
  "Las guerras carlistas": "Les guerres carlistes",
  "Tres guerras civiles desde 1833 entre los partidarios de Isabel II y los del pretendiente Carlos. Enfrentaron dos ideas de país.":
    "Trois guerres civiles depuis 1833 entre les partisans d'Isabelle II et ceux du prétendant Charles. Elles opposèrent deux idées du pays.",
  "El Sexenio Democrático": "Le Sexennat démocratique",
  "De 1868 a 1874, tras la revolución llamada la Gloriosa. Incluyó un rey importado, Amadeo de Saboya, que abdicó a los dos años.":
    "De 1868 à 1874, après la révolution dite la Gloriosa. Il comprit un roi importé, Amédée de Savoie, qui abdiqua au bout de deux ans.",
  "La Primera República": "La Première République",
  "Proclamada en 1873, duró once meses y tuvo cuatro presidentes. Terminó con un golpe militar.":
    "Proclamée en 1873, elle dura onze mois et eut quatre présidents. Elle finit par un coup d'État militaire.",
  "La Restauración": "La Restauration",
  "Desde 1875, con Alfonso XII. Cánovas diseñó un turno pactado entre dos partidos, sostenido por el caciquismo en el campo.":
    "À partir de 1875, avec Alphonse XII. Cánovas conçut une alternance convenue entre deux partis, soutenue par le caciquisme dans les campagnes.",
  "¿Cuánto duró la Primera República española?":
    "Combien de temps dura la Première République espagnole ?",
  "Once meses": "Onze mois",
  "Tres años": "Trois ans",
  "Ocho años": "Huit ans",
  "Veinte años": "Vingt ans",
  "Proclamada en febrero de 1873 y terminada por un golpe a comienzos de 1874, con cuatro presidentes en ese tiempo. La Segunda República, de 1931, duró ocho años.":
    "Proclamée en février 1873 et achevée par un coup d'État au début de 1874, avec quatre présidents dans cet intervalle. La Deuxième République, de 1931, dura huit ans.",
  "El Desastre": "Le Désastre",
  "En **1898**, tras una guerra breve con **Estados Unidos**, España perdió **Cuba**, **Puerto Rico** y **Filipinas**. Se lo llamó simplemente **el Desastre**, y el golpe fue más moral que militar: el país descubrió de golpe que ya no era una potencia.":
    "En **1898**, après une guerre brève avec les **États-Unis**, l'Espagne perdit **Cuba**, **Porto Rico** et les **Philippines**. On l'appela simplement **le Désastre**, et le coup fut moral plus que militaire : le pays découvrit d'un seul coup qu'il n'était plus une puissance.",
  "De esa conmoción salió la **Generación del 98**, un grupo de escritores —Unamuno, Baroja, Azorín, Machado— que se preguntó qué era España y qué debía hacer consigo misma. La pregunta atravesaría todo el siglo siguiente.":
    "De ce choc sortit la **génération de 98**, un groupe d'écrivains — Unamuno, Baroja, Azorín, Machado — qui se demanda ce qu'était l'Espagne et ce qu'elle devait faire d'elle-même. La question traverserait tout le siècle suivant.",
  "Mientras tanto, **Cataluña** y el **País Vasco** se industrializaban: el textil catalán y la siderurgia vasca crearon las primeras grandes concentraciones obreras, y con ellas el movimiento sindical. El **PSOE** se había fundado en **1879**.":
    "Pendant ce temps, la **Catalogne** et le **Pays basque** s'industrialisaient : le textile catalan et la sidérurgie basque créèrent les premières grandes concentrations ouvrières, et avec elles le mouvement syndical. Le **PSOE** avait été fondé en **1879**.",
  "¿Qué territorios perdió España en 1898?": "Quels territoires l'Espagne perdit-elle en 1898 ?",
  "México, Perú y Colombia": "Le Mexique, le Pérou et la Colombie",
  "Cuba, Puerto Rico y Filipinas": "Cuba, Porto Rico et les Philippines",
  "Gibraltar y el Sáhara": "Gibraltar et le Sahara",
  "Flandes y los territorios italianos": "La Flandre et les territoires italiens",
  "Las últimas posesiones de ultramar, tras una guerra breve con Estados Unidos. La América continental se había independizado setenta años antes, y Gibraltar se perdió en 1713.":
    "Les dernières possessions d'outre-mer, après une guerre brève avec les États-Unis. L'Amérique continentale était devenue indépendante soixante-dix ans plus tôt, et Gibraltar fut perdu en 1713.",
  "La Constitución de 1812 y la de 1978 se citan a veces juntas y no se parecen en nada salvo en el nombre. Entre ambas hubo otras cinco, más varios proyectos que no llegaron a regir.":
    "La Constitution de 1812 et celle de 1978 sont parfois citées ensemble et ne se ressemblent en rien, sinon par le nom. Entre les deux, il y en eut cinq autres, plus plusieurs projets qui n'entrèrent jamais en vigueur.",
  "República, Guerra Civil y dictadura": "République, guerre civile et dictature",
  "Por qué importa: son los cuarenta y cinco años que la Constitución de 1978 tiene detrás. Casi cada decisión de aquel texto —el consenso, la rigidez, la censura constructiva— es una respuesta a algo que ocurrió aquí.":
    "Pourquoi cela compte : ce sont les quarante-cinq ans que la Constitution de 1978 a derrière elle. Presque chaque décision de ce texte — le consensus, la rigidité, la censure constructive — répond à quelque chose qui s'est passé ici.",
  "El 14 de abril": "Le 14 avril",
  "Tras la dictadura de **Primo de Rivera**, entre 1923 y 1930, las **elecciones municipales** del 12 de abril de 1931 se leyeron como un plebiscito sobre la monarquía. Las ciudades votaron republicano; **Alfonso XIII** salió de España y el **14 de abril de 1931** se proclamó la **Segunda República**.":
    "Après la dictature de **Primo de Rivera**, entre 1923 et 1930, les **élections municipales** du 12 avril 1931 furent lues comme un plébiscite sur la monarchie. Les villes votèrent républicain ; **Alphonse XIII** quitta l'Espagne et, le **14 avril 1931**, la **Deuxième République** fut proclamée.",
  "La **Constitución de 1931** fue de las más avanzadas de su tiempo: Estado laico, **divorcio**, y sobre todo el **voto femenino**, defendido en las Cortes por **Clara Campoamor** contra buena parte de su propio grupo. Las mujeres votaron por primera vez en **1933**. Se aprobaron además los primeros **estatutos de autonomía**, el de Cataluña en 1932.":
    "La **Constitution de 1931** fut l'une des plus avancées de son temps : État laïque, **divorce**, et surtout le **vote des femmes**, défendu aux Cortes par **Clara Campoamor** contre une bonne part de son propre groupe. Les femmes votèrent pour la première fois en **1933**. Furent en outre adoptés les premiers **statuts d'autonomie**, celui de la Catalogne en 1932.",
  "¿Qué día se proclamó la Segunda República?":
    "Quel jour la Deuxième République fut-elle proclamée ?",
  "El 12 de abril de 1931": "Le 12 avril 1931",
  "El 14 de abril de 1931": "Le 14 avril 1931",
  "El 18 de julio de 1936": "Le 18 juillet 1936",
  "El 1 de abril de 1939": "Le 1er avril 1939",
  "El 12 de abril fueron las municipales y el 14 la proclamación. El 18 de julio de 1936 comienza la guerra y el 1 de abril de 1939 termina.":
    "Le 12 avril eurent lieu les municipales et le 14 la proclamation. Le 18 juillet 1936 commence la guerre et le 1er avril 1939 elle s'achève.",
  "La guerra": "La guerre",
  "El **17 y 18 de julio de 1936** una parte del ejército se sublevó contra el Gobierno de la República. El golpe triunfó en unas zonas y fracasó en otras, y ese fracaso parcial fue precisamente lo que convirtió una sublevación en una **guerra civil** de casi tres años.":
    "Les **17 et 18 juillet 1936**, une partie de l'armée se souleva contre le gouvernement de la République. Le coup réussit dans certaines zones et échoua dans d'autres, et cet échec partiel fut précisément ce qui transforma un soulèvement en une **guerre civile** de près de trois ans.",
  "Fue también un ensayo de la guerra europea que venía: Alemania e Italia apoyaron al bando sublevado y la Unión Soviética al republicano, mientras las democracias se mantenían en la no intervención. El bombardeo de **Guernica** en **1937** dio a Picasso el motivo de su cuadro más conocido, hoy en el **Museo Reina Sofía**.":
    "Ce fut aussi une répétition de la guerre européenne qui venait : l'Allemagne et l'Italie soutinrent le camp des insurgés et l'Union soviétique le camp républicain, tandis que les démocraties s'en tenaient à la non-intervention. Le bombardement de **Guernica** en **1937** donna à Picasso le motif de son tableau le plus connu, aujourd'hui au **musée Reina Sofía**.",
  "La guerra terminó el **1 de abril de 1939**. Dejó cientos de miles de muertos y un **exilio** de medio millón de personas, entre ellas buena parte de los científicos, escritores y maestros del país.":
    "La guerre s'acheva le **1er avril 1939**. Elle laissa des centaines de milliers de morts et un **exil** d'un demi-million de personnes, dont une bonne part des savants, des écrivains et des instituteurs du pays.",
  "¿Cuándo terminó la Guerra Civil española?":
    "Quand la guerre civile espagnole s'est-elle achevée ?",
  "En 1936": "En 1936",
  "En 1937": "En 1937",
  "En 1939": "En 1939",
  "En 1945": "En 1945",
  "El 1 de abril de 1939, cinco meses antes de que empezara la Segunda Guerra Mundial. El bombardeo de Guernica fue en 1937.":
    "Le 1er avril 1939, cinq mois avant le début de la Seconde Guerre mondiale. Le bombardement de Guernica eut lieu en 1937.",
  "La dictadura": "La dictature",
  "**Francisco Franco** gobernó desde **1939 hasta 1975**. Se suprimieron los partidos y los sindicatos libres, se implantó la **censura**, se persiguió a los vencidos y las lenguas distintas del castellano quedaron fuera de la escuela y de la vida pública.":
    "**Francisco Franco** gouverna de **1939 à 1975**. Les partis et les syndicats libres furent supprimés, la **censure** installée, les vaincus persécutés, et les langues autres que le castillan écartées de l'école et de la vie publique.",
  "La autarquía": "L'autarcie",
  "Los años cuarenta: aislamiento internacional, cartillas de racionamiento y hambre. Se los llamó los años del hambre.":
    "Les années quarante : isolement international, cartes de rationnement et faim. On les a appelées les années de la faim.",
  "1953 y 1955": "1953 et 1955",
  "Los acuerdos con Estados Unidos y el concordato con la Santa Sede rompen el aislamiento; en 1955 España ingresa en la ONU.":
    "Les accords avec les États-Unis et le concordat avec le Saint-Siège rompent l'isolement ; en 1955, l'Espagne entre à l'ONU.",
  "El desarrollismo": "Le développementalisme",
  "En los sesenta llegan la industria, el turismo de sol y playa y las divisas de dos millones de emigrantes en Europa.":
    "Dans les années soixante arrivent l'industrie, le tourisme de plage et les devises de deux millions d'émigrés en Europe.",
  "El almirante Carrero Blanco, sucesor previsto en la presidencia, muere en un atentado de ETA. El plan de continuidad se rompe.":
    "L'amiral Carrero Blanco, successeur prévu à la présidence, meurt dans un attentat de l'ETA. Le plan de continuité se brise.",
  "En **1969** Franco designó sucesor a título de rey a **Juan Carlos de Borbón**, nieto de Alfonso XIII. Franco murió el **20 de noviembre de 1975**, y lo que ocurrió después no estaba escrito en ninguna parte.":
    "En **1969**, Franco désigna comme successeur à titre de roi **Juan Carlos de Bourbon**, petit-fils d'Alphonse XIII. Franco mourut le **20 novembre 1975**, et ce qui suivit n'était écrit nulle part.",
  "¿Quién defendió el voto femenino en las Cortes republicanas?":
    "Qui défendit le vote des femmes aux Cortes républicaines ?",
  "Victoria Kent": "Victoria Kent",
  "Clara Campoamor": "Clara Campoamor",
  "Dolores Ibárruri": "Dolores Ibárruri",
  "María Zambrano": "María Zambrano",
  "Clara Campoamor lo defendió y lo sacó adelante, en contra de buena parte de su propio grupo. Victoria Kent, también diputada, se opuso entonces por temor al voto conservador de las mujeres.":
    "Clara Campoamor le défendit et le fit adopter, contre une bonne part de son propre groupe. Victoria Kent, députée elle aussi, s'y opposa alors par crainte du vote conservateur des femmes.",
  "La Segunda República duró **ocho años** y solo los tres últimos fueron de guerra. No son lo mismo, aunque se nombren muchas veces de un tirón.":
    "La Deuxième République dura **huit ans** et seuls les trois derniers furent de guerre. Ce n'est pas la même chose, même si on les nomme souvent d'un seul trait.",
  "La Transición y la democracia": "La Transition et la démocratie",
  "Por qué importa: en tres años España pasó de una dictadura a una democracia sin romper la legalidad anterior y sin una nueva guerra. Cómo se hizo eso es la explicación de casi todo el sistema descrito en el capítulo dos.":
    "Pourquoi cela compte : en trois ans, l'Espagne passa d'une dictature à une démocratie sans rompre la légalité antérieure et sans nouvelle guerre. Comment cela s'est fait explique presque tout le système décrit au chapitre deux.",
  "De la ley a la ley": "De la loi à la loi",
  "**Juan Carlos I** fue proclamado rey el **22 de noviembre de 1975**, dos días después de la muerte de Franco, dentro de las reglas del régimen. En julio de **1976** nombró presidente del Gobierno a **Adolfo Suárez**, procedente del propio aparato franquista, lo que casi nadie interpretó entonces como una buena noticia.":
    "**Juan Carlos Ier** fut proclamé roi le **22 novembre 1975**, deux jours après la mort de Franco, dans les règles du régime. En juillet **1976**, il nomma président du gouvernement **Adolfo Suárez**, issu de l'appareil franquiste lui-même, ce que presque personne n'interpréta alors comme une bonne nouvelle.",
  "Suárez llevó a las Cortes del régimen la **Ley para la Reforma Política**, que en la práctica las disolvía y abría elecciones libres. Las Cortes la aprobaron y el pueblo la ratificó en referéndum en **diciembre de 1976**. De ahí la fórmula con que se resume la Transición: se fue **de la ley a la ley**, sin ruptura formal.":
    "Suárez porta devant les Cortes du régime la **loi pour la réforme politique**, qui en pratique les dissolvait et ouvrait des élections libres. Les Cortes l'adoptèrent et le peuple la ratifia par référendum en **décembre 1976**. D'où la formule qui résume la Transition : on alla **de la loi à la loi**, sans rupture formelle.",
  "En abril de **1977**, un **Sábado Santo**, se legalizó el **Partido Comunista**, la decisión más arriesgada del periodo. El **15 de junio de 1977** se celebraron las **primeras elecciones libres** desde 1936.":
    "En avril **1977**, un **Samedi saint**, le **Parti communiste** fut légalisé, la décision la plus risquée de la période. Le **15 juin 1977** eurent lieu les **premières élections libres** depuis 1936.",
  "¿Quién fue el presidente del Gobierno que dirigió la Transición?":
    "Qui fut le président du gouvernement qui conduisit la Transition ?",
  "Leopoldo Calvo-Sotelo": "Leopoldo Calvo-Sotelo",
  "Adolfo Suárez": "Adolfo Suárez",
  "Felipe González": "Felipe González",
  "Manuel Fraga": "Manuel Fraga",
  "Adolfo Suárez, nombrado en 1976 y ganador de las elecciones de 1977 y 1979. Calvo-Sotelo le sucedió en 1981 y Felipe González ganó en 1982.":
    "Adolfo Suárez, nommé en 1976 et vainqueur des élections de 1977 et de 1979. Calvo-Sotelo lui succéda en 1981 et Felipe González gagna en 1982.",
  "Los años difíciles": "Les années difficiles",
  "En **octubre de 1977** los partidos firmaron los **Pactos de la Moncloa**, un acuerdo económico y social que permitió afrontar la inflación y el paro sin que el sistema saltara por los aires. Al año siguiente se aprobó la **Constitución**.":
    "En **octobre 1977**, les partis signèrent les **pactes de la Moncloa**, un accord économique et social qui permit d'affronter l'inflation et le chômage sans que le système explose. L'année suivante fut adoptée la **Constitution**.",
  "El momento más peligroso llegó el **23 de febrero de 1981**: un grupo de guardias civiles asaltó el Congreso durante la votación de investidura y secuestró al Gobierno y a los diputados. El golpe fracasó esa misma noche. Fue el último intento de volver atrás por la fuerza.":
    "Le moment le plus dangereux vint le **23 février 1981** : un groupe de gardes civils prit d'assaut le Congrès pendant le vote d'investiture et retint le gouvernement et les députés. Le coup échoua la nuit même. Ce fut la dernière tentative de revenir en arrière par la force.",
  "¿Qué ocurrió el 23 de febrero de 1981?": "Que s'est-il passé le 23 février 1981 ?",
  "Se aprobó la Constitución": "La Constitution fut adoptée",
  "Un intento de golpe de Estado en el Congreso": "Une tentative de coup d'État au Congrès",
  "España entró en la Comunidad Económica Europea":
    "L'Espagne entra dans la Communauté économique européenne",
  "Se celebraron las primeras elecciones libres": "Les premières élections libres eurent lieu",
  "El asalto al Congreso durante una votación de investidura, conocido desde entonces como el 23-F. Fracasó esa misma noche y fue el último intento de volver atrás por la fuerza.":
    "L'assaut du Congrès pendant un vote d'investiture, connu depuis sous le nom de 23-F. Il échoua la nuit même et fut la dernière tentative de revenir en arrière par la force.",
  "La normalidad": "La normalité",
  "1982": "1982",
  "El PSOE gana con mayoría absoluta y gobierna hasta 1996. La alternancia demuestra que el sistema funciona.":
    "Le PSOE gagne à la majorité absolue et gouverne jusqu'en 1996. L'alternance montre que le système fonctionne.",
  "1986": "1986",
  "España entra en la Comunidad Económica Europea y ratifica en referéndum su permanencia en la OTAN.":
    "L'Espagne entre dans la Communauté économique européenne et ratifie par référendum son maintien dans l'OTAN.",
  "1992": "1992",
  "Juegos Olímpicos de Barcelona, Exposición Universal de Sevilla y el primer tren de alta velocidad. El año en que el país se enseña al mundo.":
    "Les Jeux olympiques de Barcelone, l'Exposition universelle de Séville et le premier train à grande vitesse. L'année où le pays se montre au monde.",
  "2002": "2002",
  "El euro sustituye a la peseta en los bolsillos, tras tres años de existir solo en las cuentas.":
    "L'euro remplace la peseta dans les poches, après trois ans d'existence dans les seuls comptes.",
  "El **11 de marzo de 2004** una serie de bombas en trenes de cercanías de Madrid causó ciento noventa y tres muertos: el mayor atentado de la historia de España. **ETA**, que había matado a más de ochocientas personas desde los años sesenta, anunció el fin de su actividad armada en 2011 y su disolución en 2018.":
    "Le **11 mars 2004**, une série de bombes dans des trains de banlieue de Madrid fit cent quatre-vingt-treize morts : le plus grand attentat de l'histoire de l'Espagne. L'**ETA**, qui avait tué plus de huit cents personnes depuis les années soixante, annonça la fin de son activité armée en 2011 et sa dissolution en 2018.",
  "En **2014** **Juan Carlos I abdicó** y fue proclamado **Felipe VI**. El sistema autonómico, que la Constitución dejó abierto, se completó en los años ochenta y noventa hasta las diecisiete comunidades y las dos ciudades autónomas de hoy.":
    "En **2014**, **Juan Carlos Ier abdiqua** et **Felipe VI** fut proclamé. Le système des autonomies, que la Constitution avait laissé ouvert, se compléta dans les années quatre-vingt et quatre-vingt-dix jusqu'aux dix-sept communautés et aux deux villes autonomes d'aujourd'hui.",
  "¿En qué año entró España en la Comunidad Económica Europea?":
    "En quelle année l'Espagne est-elle entrée dans la Communauté économique européenne ?",
  "En 1978": "En 1978",
  "En 1982": "En 1982",
  "En 1986": "En 1986",
  "En 1992": "En 1992",
  "El 1 de enero de 1986, junto con Portugal. Ese mismo año se celebró el referéndum sobre la permanencia en la OTAN.":
    "Le 1er janvier 1986, avec le Portugal. Cette même année eut lieu le référendum sur le maintien dans l'OTAN.",
  "La Transición no fue una ruptura sino una **reforma pactada**: las instituciones del régimen aprobaron su propia disolución. Esa elección explica tanto la estabilidad posterior como los debates que siguen abiertos sobre lo que quedó sin resolver.":
    "La Transition ne fut pas une rupture mais une **réforme négociée** : les institutions du régime approuvèrent leur propre dissolution. Ce choix explique autant la stabilité qui suivit que les débats encore ouverts sur ce qui est resté sans réponse.",
  "Las comunidades autónomas": "Les communautés autonomes",
  "El Estado autonómico, el territorio y las lenguas":
    "L'État des autonomies, le territoire et les langues",
  "Por qué importa: la Constitución no dibujó un mapa. Reconoció un derecho y dejó que el mapa se hiciera solo, y el resultado es uno de los Estados más descentralizados de Europa sin ser formalmente federal.":
    "Pourquoi cela compte : la Constitution n'a pas dessiné de carte. Elle a reconnu un droit et laissé la carte se faire seule, et le résultat est l'un des États les plus décentralisés d'Europe sans être formellement fédéral.",
  "Un modelo abierto": "Un modèle ouvert",
  "El **título VIII** no enumera comunidades: establece **cómo** pueden constituirse. Las provincias limítrofes con características históricas, culturales y económicas comunes podían acceder al autogobierno, y de ese procedimiento salieron **diecisiete comunidades autónomas** y, desde **1995**, las **dos ciudades autónomas** de **Ceuta** y **Melilla**.":
    "Le **titre VIII** n'énumère pas de communautés : il établit **comment** elles peuvent se constituer. Les provinces limitrophes ayant des traits historiques, culturels et économiques communs pouvaient accéder à l'autonomie, et de cette procédure sont sorties **dix-sept communautés autonomes** et, depuis **1995**, les **deux villes autonomes** de **Ceuta** et de **Melilla**.",
  "Hubo **dos vías**. La del **artículo 151**, más rápida y con más competencias desde el principio, la siguieron **Cataluña**, el **País Vasco**, **Galicia** y **Andalucía**. La del **artículo 143**, más lenta, la recorrieron las demás. Con los años las diferencias se fueron igualando en buena medida.":
    "Il y eut **deux voies**. Celle de l'**article 151**, plus rapide et avec plus de compétences dès le départ, fut suivie par la **Catalogne**, le **Pays basque**, la **Galice** et l'**Andalousie**. Celle de l'**article 143**, plus lente, fut suivie par les autres. Avec les années, les différences se sont largement égalisées.",
  "El estatuto": "Le statut",
  "Cada comunidad tiene un **Estatuto de Autonomía**, que la Constitución llama su **norma institucional básica**. No es una ley cualquiera: se aprueba como **ley orgánica** de las Cortes Generales, de modo que forma parte a la vez del ordenamiento autonómico y del estatal.":
    "Chaque communauté a un **statut d'autonomie**, que la Constitution appelle sa **norme institutionnelle de base**. Ce n'est pas une loi ordinaire : il s'adopte comme **loi organique** des Cortes Generales, de sorte qu'il appartient à la fois à l'ordre juridique de la communauté et à celui de l'État.",
  "Asamblea legislativa": "L'assemblée législative",
  "El parlamento de la comunidad, elegido por sus ciudadanos. Aprueba las leyes autonómicas y el presupuesto.":
    "Le parlement de la communauté, élu par ses citoyens. Il adopte les lois de la communauté et son budget.",
  "Consejo de Gobierno": "Le Conseil de gouvernement",
  "El ejecutivo, con su presidente al frente, investido por la asamblea igual que en el Estado.":
    "L'exécutif, avec son président à sa tête, investi par l'assemblée comme au niveau de l'État.",
  "Tribunal Superior de Justicia": "Le Tribunal supérieur de justice",
  "Culmina la organización judicial en el territorio, sin ser una instancia por encima del Tribunal Supremo.":
    "Il couronne l'organisation judiciaire sur le territoire, sans être une instance au-dessus du Tribunal suprême.",
  "Delegado del Gobierno": "Le délégué du gouvernement",
  "Representa a la Administración del Estado en la comunidad. No es un cargo autonómico: lo nombra el Gobierno central.":
    "Il représente l'administration de l'État dans la communauté. Ce n'est pas une charge autonomique : le gouvernement central le nomme.",
  "¿Cuántas comunidades autónomas tiene España?":
    "Combien de communautés autonomes compte l'Espagne ?",
  "Diecisiete": "Dix-sept",
  "Diecinueve": "Dix-neuf",
  "Cincuenta": "Cinquante",
  "Diecisiete comunidades, más las ciudades autónomas de Ceuta y Melilla desde 1995. Cincuenta es el número de provincias, que es otra división.":
    "Dix-sept communautés, plus les villes autonomes de Ceuta et Melilla depuis 1995. Cinquante est le nombre de provinces, qui est une autre division.",
  "Quién hace qué": "Qui fait quoi",
  "El **artículo 149** enumera las materias **exclusivas del Estado**: relaciones internacionales, defensa, administración de justicia, moneda, legislación mercantil, penal y laboral, y la regulación básica de muchas otras. El **artículo 148** enumera las que las comunidades **pueden asumir**: urbanismo, agricultura, turismo, sanidad e higiene, cultura, y por esa vía se llega a la sanidad y la educación que hoy gestionan.":
    "L'**article 149** énumère les matières **exclusives de l'État** : relations internationales, défense, administration de la justice, monnaie, législation commerciale, pénale et du travail, et la réglementation de base de bien d'autres. L'**article 148** énumère celles que les communautés **peuvent assumer** : urbanisme, agriculture, tourisme, santé et hygiène, culture, et c'est par cette voie qu'on arrive à la santé et à l'éducation qu'elles gèrent aujourd'hui.",
  "La **financiación** sigue dos regímenes. La mayoría está en el **régimen común**, con una parte de los impuestos cedida y un fondo de reparto. El **País Vasco** y **Navarra** tienen **régimen foral** —el **concierto** y el **convenio**— por el que recaudan sus propios impuestos y pagan al Estado una cantidad por los servicios comunes. Es una excepción histórica reconocida en la disposición adicional primera.":
    "Le **financement** suit deux régimes. La plupart relèvent du **régime commun**, avec une part d'impôts cédée et un fonds de répartition. Le **Pays basque** et la **Navarre** ont un **régime foral** — le **concierto** et le **convenio** — par lequel ils lèvent leurs propres impôts et versent à l'État une somme pour les services communs. C'est une exception historique reconnue par la première disposition additionnelle.",
  "¿Qué comunidades tienen régimen foral de financiación?":
    "Quelles communautés ont un régime foral de financement ?",
  "Cataluña y el País Vasco": "La Catalogne et le Pays basque",
  "El País Vasco y Navarra": "Le Pays basque et la Navarre",
  "Galicia y Navarra": "La Galice et la Navarre",
  "Ninguna: el sistema es igual para todas": "Aucune : le système est le même pour toutes",
  "El concierto vasco y el convenio navarro: recaudan sus propios impuestos y pagan al Estado por los servicios comunes. Es una excepción histórica reconocida en la disposición adicional primera.":
    "Le concierto basque et le convenio navarrais : ils lèvent leurs propres impôts et versent à l'État pour les services communs. C'est une exception historique reconnue par la première disposition additionnelle.",
  "Los límites": "Les limites",
  "La Constitución garantiza la **solidaridad** entre territorios y prohíbe que las diferencias entre estatutos impliquen **privilegios económicos o sociales**. Para corregir desequilibrios existe el **Fondo de Compensación Interterritorial**.":
    "La Constitution garantit la **solidarité** entre territoires et interdit que les différences entre statuts entraînent des **privilèges économiques ou sociaux**. Pour corriger les déséquilibres existe le **Fonds de compensation interterritoriale**.",
  "Y hay un último recurso: el **artículo 155**. Si una comunidad **incumple gravemente** sus obligaciones constitucionales o atenta contra el interés general de España, el Gobierno puede requerirla y, si no atiende el requerimiento, adoptar medidas con la **aprobación del Senado por mayoría absoluta**. Se aplicó por primera vez en 2017.":
    "Et il y a un dernier recours : l'**article 155**. Si une communauté **manque gravement** à ses obligations constitutionnelles ou porte atteinte à l'intérêt général de l'Espagne, le gouvernement peut la mettre en demeure et, si elle n'obtempère pas, prendre des mesures avec l'**approbation du Sénat à la majorité absolue**. Il fut appliqué pour la première fois en 2017.",
  "¿Qué es un Estatuto de Autonomía?": "Qu'est-ce qu'un statut d'autonomie ?",
  "Un reglamento del Gobierno autonómico": "Un règlement du gouvernement de la communauté",
  "La norma institucional básica de la comunidad, aprobada como ley orgánica":
    "La norme institutionnelle de base de la communauté, adoptée comme loi organique",
  "Un acuerdo entre comunidades vecinas": "Un accord entre communautés voisines",
  "La constitución propia de cada comunidad": "La constitution propre de chaque communauté",
  "Es a la vez norma autonómica y ley orgánica estatal, y por eso su reforma exige el acuerdo de la comunidad y de las Cortes Generales. Constitución solo hay una.":
    "C'est à la fois une norme de la communauté et une loi organique de l'État, et c'est pourquoi sa réforme exige l'accord de la communauté et des Cortes Generales. De Constitution, il n'y en a qu'une.",
  "**Provincia** y **comunidad autónoma** no son lo mismo. Hay **cincuenta provincias** y diecisiete comunidades: siete de ellas son **uniprovinciales**, como Madrid, Murcia o Asturias, y en esos casos la comunidad absorbió las funciones de la diputación.":
    "**Province** et **communauté autonome** ne sont pas la même chose. Il y a **cinquante provinces** et dix-sept communautés : sept d'entre elles sont **uniprovinciales**, comme Madrid, Murcie ou les Asturies, et dans ces cas la communauté a absorbé les fonctions du conseil provincial.",
  "El territorio": "Le territoire",
  "Por qué importa: España es el país más montañoso de Europa después de Suiza, y eso explica su clima, su reparto de población y por qué durante siglos fue tan difícil de gobernar desde un solo sitio.":
    "Pourquoi cela compte : l'Espagne est le pays le plus montagneux d'Europe après la Suisse, et cela explique son climat, la répartition de sa population et pourquoi elle fut pendant des siècles si difficile à gouverner depuis un seul endroit.",
  "Una meseta rodeada de sierras": "Un plateau entouré de sierras",
  "El territorio ocupa unos **505.000 kilómetros cuadrados**, lo que hace de España el **segundo país más extenso de la Unión Europea** tras Francia, con algo menos de **cincuenta millones** de habitantes.":
    "Le territoire occupe quelque **505 000 kilomètres carrés**, ce qui fait de l'Espagne le **deuxième pays le plus étendu de l'Union européenne** après la France, avec un peu moins de **cinquante millions** d'habitants.",
  "En el centro está la **Meseta Central**, una llanura elevada a más de seiscientos metros y partida en dos por el **Sistema Central**. La rodean cordilleras por casi todos lados, y esa altitud media —de las más altas de Europa— es la razón de que el interior tenga inviernos duros pese a la latitud.":
    "Au centre se trouve la **Meseta**, une plaine élevée à plus de six cents mètres et coupée en deux par le **Système central**. Des chaînes l'entourent de presque tous les côtés, et cette altitude moyenne — l'une des plus hautes d'Europe — explique que l'intérieur ait des hivers rudes malgré la latitude.",
  "Los Pirineos": "Les Pyrénées",
  "Frontera con Francia y Andorra, de mar a mar. Aíslan la Península del resto del continente.":
    "Frontière avec la France et l'Andorre, d'une mer à l'autre. Elles isolent la péninsule du reste du continent.",
  "La Cordillera Cantábrica": "La cordillère Cantabrique",
  "Cierra el norte y separa la España húmeda de la seca. Los Picos de Europa son su tramo más alto.":
    "Elle ferme le nord et sépare l'Espagne humide de la sèche. Les Picos de Europa en sont la partie la plus haute.",
  "Los Sistemas Béticos": "Les systèmes bétiques",
  "En el sur, con Sierra Nevada y el Mulhacén, de 3.479 metros: el pico más alto de la Península.":
    "Au sud, avec la Sierra Nevada et le Mulhacén, 3 479 mètres : le sommet le plus haut de la péninsule.",
  "El Teide": "Le Teide",
  "En Tenerife, 3.715 metros. Es el punto más alto de España, y está en el Atlántico, no en la Península.":
    "À Tenerife, 3 715 mètres. C'est le point le plus haut d'Espagne, et il est dans l'Atlantique, non dans la péninsule.",
  "¿Cuál es el pico más alto de España?": "Quel est le sommet le plus haut d'Espagne ?",
  "El Mulhacén": "Le Mulhacén",
  "El Aneto": "L'Aneto",
  "El Naranjo de Bulnes": "Le Naranjo de Bulnes",
  "El Teide, en Tenerife, con 3.715 metros. El Mulhacén, en Sierra Nevada, es el más alto de la Península con 3.479, y el Aneto el más alto de los Pirineos.":
    "Le Teide, à Tenerife, avec 3 715 mètres. Le Mulhacén, dans la Sierra Nevada, est le plus haut de la péninsule avec 3 479, et l'Aneto le plus haut des Pyrénées.",
  "Los ríos": "Les fleuves",
  "Los ríos se reparten en tres **vertientes**. La **cantábrica** tiene ríos cortos y caudalosos. La **atlántica** recoge los grandes: el **Tajo**, el más largo de la Península, que desemboca en Lisboa; el **Duero**; el **Guadiana**; y el **Guadalquivir**, el único navegable, hasta Sevilla. La **mediterránea** es la más seca salvo por el **Ebro**, el de mayor caudal de España.":
    "Les fleuves se répartissent sur trois **versants**. Le **cantabrique** a des cours d'eau courts et abondants. L'**atlantique** recueille les grands : le **Tage**, le plus long de la péninsule, qui se jette à Lisbonne ; le **Douro** ; la **Guadiana** ; et le **Guadalquivir**, le seul navigable, jusqu'à Séville. Le **méditerranéen** est le plus sec, à l'exception de l'**Èbre**, le plus abondant d'Espagne.",
  "Que los grandes ríos vayan al Atlántico y desemboquen dos de ellos en Portugal tiene consecuencias prácticas: el agua es un asunto compartido con el país vecino, y el sureste peninsular, el más seco de Europa continental, depende de trasvases y desaladoras.":
    "Que les grands fleuves aillent à l'Atlantique et que deux d'entre eux se jettent au Portugal a des conséquences pratiques : l'eau est une affaire partagée avec le pays voisin, et le sud-est de la péninsule, le plus sec d'Europe continentale, dépend de transferts et d'usines de dessalement.",
  "¿Cuál es el río más largo de la Península Ibérica?":
    "Quel est le plus long fleuve de la péninsule Ibérique ?",
  "El Ebro": "L'Èbre",
  "El Tajo": "Le Tage",
  "El Duero": "Le Douro",
  "El Guadalquivir": "Le Guadalquivir",
  "El Tajo, que desemboca en Lisboa. El Ebro es el de mayor caudal y el Guadalquivir el único navegable, hasta Sevilla: tres ríos y tres primeros puestos distintos.":
    "Le Tage, qui se jette à Lisbonne. L'Èbre est le plus abondant et le Guadalquivir le seul navigable, jusqu'à Séville : trois fleuves et trois premières places différentes.",
  "Las islas y África": "Les îles et l'Afrique",
  "Las **Islas Baleares** están en el Mediterráneo; las **Canarias**, en el Atlántico, frente a la costa africana y a unos mil quinientos kilómetros de la Península. Son de origen **volcánico**, y el volcán sigue activo: la erupción de La Palma de 2021 lo recordó.":
    "Les **îles Baléares** sont en Méditerranée ; les **Canaries**, dans l'Atlantique, face à la côte africaine et à quelque mille cinq cents kilomètres de la péninsule. Elles sont d'origine **volcanique**, et le volcan reste actif : l'éruption de La Palma en 2021 l'a rappelé.",
  "**Ceuta** y **Melilla** están en el norte de África y son las **únicas fronteras terrestres** de la Unión Europea con el continente africano. España limita además con **Portugal**, **Francia**, **Andorra** y el territorio británico de **Gibraltar**.":
    "**Ceuta** et **Melilla** sont au nord de l'Afrique et constituent les **seules frontières terrestres** de l'Union européenne avec le continent africain. L'Espagne est en outre limitrophe du **Portugal**, de la **France**, de l'**Andorre** et du territoire britannique de **Gibraltar**.",
  "Los climas": "Les climats",
  "El clima **mediterráneo** domina la mayor parte, con veranos secos y calurosos. El norte y el noroeste tienen clima **oceánico**, húmedo y templado: es la llamada España verde. El interior conserva el mediterráneo pero **continentalizado**, con más frío y más calor. El sureste es **semiárido** —Almería tiene el único desierto de Europa continental— y las **Canarias** son **subtropicales**, con temperaturas suaves todo el año.":
    "Le climat **méditerranéen** domine la plus grande partie, avec des étés secs et chauds. Le nord et le nord-ouest ont un climat **océanique**, humide et tempéré : c'est ce qu'on appelle l'Espagne verte. L'intérieur garde le méditerranéen mais **continentalisé**, avec plus de froid et plus de chaleur. Le sud-est est **semi-aride** — Almería a le seul désert d'Europe continentale — et les **Canaries** sont **subtropicales**, avec des températures douces toute l'année.",
  "¿Qué tipo de clima tienen las Islas Canarias?": "Quel type de climat ont les îles Canaries ?",
  "Oceánico": "Océanique",
  "Continental": "Continental",
  "Subtropical": "Subtropical",
  "Semiárido": "Semi-aride",
  "Subtropical, con temperaturas suaves durante todo el año por su latitud y por la corriente marina. El oceánico corresponde al norte peninsular y el semiárido al sureste.":
    "Subtropical, avec des températures douces toute l'année, du fait de la latitude et du courant marin. L'océanique correspond au nord de la péninsule et le semi-aride au sud-est.",
  "Las Canarias están a unos **mil quinientos kilómetros** de la Península y tienen **una hora menos** que el resto del país. Es la única parte de España en otro huso horario.":
    "Les Canaries sont à quelque **mille cinq cents kilomètres** de la péninsule et ont **une heure de moins** que le reste du pays. C'est la seule partie de l'Espagne dans un autre fuseau horaire.",
  "Las lenguas de España": "Les langues d'Espagne",
  "Por qué importa: en España se habla castellano en todas partes y otras cuatro lenguas son oficiales en su territorio. No es una curiosidad regional: está en el artículo 3 y organiza escuelas, administraciones y medios enteros.":
    "Pourquoi cela compte : on parle castillan partout en Espagne et quatre autres langues sont officielles sur leur territoire. Ce n'est pas une curiosité régionale : c'est dans l'article 3 et cela organise des écoles, des administrations et des médias entiers.",
  "Lo que dice el artículo 3": "Ce que dit l'article 3",
  "Tiene tres apartados y conviene leerlos juntos. El primero: el **castellano** es la lengua española oficial del Estado, y todos los españoles tienen el **deber de conocerla** y el **derecho a usarla**. El segundo: las **demás lenguas españolas** serán también oficiales en sus comunidades **de acuerdo con sus estatutos**. El tercero: la riqueza de las modalidades lingüísticas es un **patrimonio cultural** objeto de especial respeto y protección.":
    "Il a trois alinéas et il vaut mieux les lire ensemble. Le premier : le **castillan** est la langue espagnole officielle de l'État, et tous les Espagnols ont le **devoir de la connaître** et le **droit de l'employer**. Le deuxième : les **autres langues espagnoles** seront elles aussi officielles dans leurs communautés **selon leurs statuts**. Le troisième : la richesse des modalités linguistiques est un **patrimoine culturel** qui fait l'objet d'un respect et d'une protection particuliers.",
  "El deber de conocer se predica **solo del castellano**, y esa asimetría es deliberada. La cooficialidad, en cambio, no la decide el Estado en abstracto: la remite a cada estatuto.":
    "Le devoir de connaître ne vaut que **pour le castillan**, et cette asymétrie est délibérée. La co-officialité, en revanche, n'est pas décidée par l'État dans l'abstrait : elle est renvoyée à chaque statut.",
  "Catalán": "Le catalan",
  "Oficial en Cataluña y en las Illes Balears, y en la Comunidad Valenciana con la denominación de valenciano que fija su estatuto.":
    "Officiel en Catalogne et aux Illes Balears, et dans la Communauté valencienne sous la dénomination de valencien que fixe son statut.",
  "Gallego": "Le galicien",
  "Oficial en Galicia. Comparte origen con el portugués: ambos vienen del galaicoportugués medieval.":
    "Officiel en Galice. Il a la même origine que le portugais : tous deux viennent du galaïco-portugais médiéval.",
  "Euskera": "L'euskara",
  "Oficial en el País Vasco y en la zona vascófona de Navarra, donde el régimen lingüístico varía por comarcas.":
    "Officiel au Pays basque et dans la zone bascophone de Navarre, où le régime linguistique varie selon les cantons.",
  "Aranés": "L'aranais",
  "Una variedad del occitano, oficial en toda Cataluña desde 2006 y propia del Valle de Arán, donde lo habla unos pocos miles de personas.":
    "Une variété de l'occitan, officielle dans toute la Catalogne depuis 2006 et propre au Val d'Aran, où quelques milliers de personnes le parlent.",
  "¿En qué valle se habla el aranés?": "Dans quelle vallée parle-t-on l'aranais ?",
  "En el Valle de Arán": "Dans le Val d'Aran",
  "En el Valle del Roncal": "Dans la vallée du Roncal",
  "En el Valle de Benasque": "Dans la vallée de Benasque",
  "En el Valle de Ansó": "Dans la vallée d'Ansó",
  "En el Valle de Arán, en el Pirineo de Lérida, y es una variedad del occitano. Es la lengua oficial con menos hablantes de España, unos pocos miles.":
    "Dans le Val d'Aran, dans les Pyrénées de Lérida, et c'est une variété de l'occitan. C'est la langue officielle d'Espagne qui a le moins de locuteurs, quelques milliers.",
  "El euskera, aparte": "L'euskara, à part",
  "El castellano, el catalán y el gallego vienen del **latín**, como el portugués, el francés o el italiano. El **euskera no**: es una lengua **anterior a la llegada de Roma**, sin parentesco demostrado con ninguna lengua viva. Sobrevivió al latín en un rincón del continente donde todas las demás lenguas prerromanas desaparecieron.":
    "Le castillan, le catalan et le galicien viennent du **latin**, comme le portugais, le français ou l'italien. L'**euskara non** : c'est une langue **antérieure à l'arrivée de Rome**, sans parenté démontrée avec aucune langue vivante. Elle a survécu au latin dans un coin du continent où toutes les autres langues préromaines ont disparu.",
  "No tuvo un estándar escrito unificado hasta el siglo XX: el **euskera batua**, fijado desde los años sesenta, es lo que se enseña hoy en la escuela, sobre los distintos dialectos históricos.":
    "Elle n'a pas eu de standard écrit unifié avant le XXe siècle : l'**euskara batua**, fixé depuis les années soixante, est ce qu'on enseigne aujourd'hui à l'école, au-dessus des différents dialectes historiques.",
  "¿Cuál de estas lenguas NO procede del latín?":
    "Laquelle de ces langues ne vient PAS du latin ?",
  "El catalán": "Le catalan",
  "El gallego": "Le galicien",
  "El euskera": "L'euskara",
  "El aranés": "L'aranais",
  "El euskera es anterior a Roma y no tiene parentesco conocido con ninguna lengua viva. Las otras tres son romances, igual que el castellano.":
    "L'euskara est antérieur à Rome et n'a aucune parenté connue avec une langue vivante. Les trois autres sont romanes, comme le castillan.",
  "Lo que se protege sin ser oficial": "Ce qui est protégé sans être officiel",
  "El tercer apartado del artículo 3 cubre hablas que **no son cooficiales** pero sí objeto de protección: el **asturiano**, llamado también bable, el **aragonés** en el Pirineo, el **leonés**, la **fala** extremeña o el **caló**. Sus estatutos y sus leyes autonómicas les dan grados distintos de reconocimiento, siempre por debajo de la oficialidad.":
    "Le troisième alinéa de l'article 3 couvre des parlers qui **ne sont pas co-officiels** mais font l'objet d'une protection : l'**asturien**, appelé aussi bable, l'**aragonais** dans les Pyrénées, le **léonais**, la **fala** d'Estrémadure ou le **caló**. Leurs statuts et les lois des communautés leur donnent des degrés divers de reconnaissance, toujours en deçà de l'officialité.",
  "El español fuera de España": "L'espagnol hors d'Espagne",
  "El español lo hablan alrededor de **seiscientos millones** de personas y es la **segunda lengua materna del mundo** por número de hablantes, después del chino mandarín. La mayoría de ellos no vive en España: el país que más hispanohablantes tiene es **México**.":
    "L'espagnol est parlé par quelque **six cents millions** de personnes et c'est la **deuxième langue maternelle du monde** par le nombre de locuteurs, après le chinois mandarin. La plupart d'entre eux ne vivent pas en Espagne : le pays qui compte le plus d'hispanophones est le **Mexique**.",
  "Por eso la norma no se decide en Madrid a solas. La **Real Academia Española** trabaja con las **veintidós academias** de América y Filipinas en la **Asociación de Academias de la Lengua Española**, y los diccionarios y gramáticas se publican en común. Es lo que se llama **política panhispánica**. La difusión de la lengua fuera corresponde al **Instituto Cervantes**, que es además quien administra las pruebas para la nacionalidad.":
    "C'est pourquoi la norme ne se décide pas à Madrid toute seule. La **Real Academia Española** travaille avec les **vingt-deux académies** d'Amérique et des Philippines au sein de l'**Association des académies de la langue espagnole**, et les dictionnaires et les grammaires se publient en commun. C'est ce qu'on appelle la **politique panhispanique**. La diffusion de la langue à l'étranger revient à l'**Instituto Cervantes**, qui administre en outre les épreuves pour la nationalité.",
  "¿Qué establece el artículo 3 respecto al castellano?":
    "Qu'établit l'article 3 au sujet du castillan ?",
  "Solo el derecho a usarlo": "Seulement le droit de l'employer",
  "El deber de conocerlo y el derecho a usarlo":
    "Le devoir de le connaître et le droit de l'employer",
  "El deber de conocerlo, sin más": "Le devoir de le connaître, sans plus",
  "Que su uso es voluntario en las comunidades con lengua propia":
    "Que son usage est facultatif dans les communautés ayant une langue propre",
  "Deber de conocer y derecho a usar, y solo respecto del castellano. Para las demás lenguas oficiales la Constitución remite a los estatutos, sin imponer un deber equivalente.":
    "Devoir de connaître et droit d'employer, et pour le seul castillan. Pour les autres langues officielles, la Constitution renvoie aux statuts, sans imposer un devoir équivalent.",
  "**Español** y **castellano** designan la misma lengua. La Constitución emplea castellano, precisamente porque las otras lenguas de España también son españolas; en América y en el uso internacional predomina español.":
    "**Espagnol** et **castillan** désignent la même langue. La Constitution emploie castillan, précisément parce que les autres langues d'Espagne sont espagnoles elles aussi ; en Amérique et dans l'usage international, espagnol l'emporte.",
  "La economía y España en Europa": "L'économie et l'Espagne en Europe",
  "Por qué importa: en cuarenta años España pasó de pedir la entrada en Europa a ser una de sus mayores economías. Y arrastra desde entonces un problema que no ha resuelto ningún gobierno: el paro.":
    "Pourquoi cela compte : en quarante ans, l'Espagne est passée de demander son entrée en Europe à être l'une de ses plus grandes économies. Et elle traîne depuis un problème qu'aucun gouvernement n'a résolu : le chômage.",
  "De qué vive el país": "De quoi vit le pays",
  "Los **servicios** son con diferencia el sector mayor, y dentro de ellos el **turismo**: España está año tras año entre los primeros destinos del mundo por número de visitantes, con la costa, las islas y las ciudades históricas como principales reclamos.":
    "Les **services** sont de loin le secteur le plus grand, et en leur sein le **tourisme** : l'Espagne est année après année parmi les premières destinations du monde par le nombre de visiteurs, avec la côte, les îles et les villes historiques comme principaux attraits.",
  "Aceite de oliva": "L'huile d'olive",
  "España es el primer productor mundial, muy por delante del segundo. Jaén sola produce más que países enteros.":
    "L'Espagne est le premier producteur mondial, très loin devant le deuxième. Jaén à elle seule produit plus que des pays entiers.",
  "Frutas y hortalizas": "Fruits et légumes",
  "El invernadero de Almería abastece a buena parte de Europa en invierno, y los cítricos valencianos tienen mercado propio.":
    "La serre d'Almería approvisionne une bonne part de l'Europe en hiver, et les agrumes valenciens ont leur propre marché.",
  "Automóvil": "L'automobile",
  "Uno de los mayores fabricantes de Europa, aunque sin marcas propias: las plantas son de grupos extranjeros.":
    "L'un des plus grands constructeurs d'Europe, sans marques propres pourtant : les usines appartiennent à des groupes étrangers.",
  "Renovables": "Les renouvelables",
  "La eólica y la solar tienen un peso creciente en la generación eléctrica, favorecidas por el viento del interior y las horas de sol.":
    "L'éolien et le solaire pèsent de plus en plus dans la production électrique, favorisés par le vent de l'intérieur et les heures de soleil.",
  "¿De qué producto es España el primer productor mundial?":
    "De quel produit l'Espagne est-elle le premier producteur mondial ?",
  "Del vino": "Du vin",
  "Del aceite de oliva": "De l'huile d'olive",
  "Del arroz": "Du riz",
  "Del azúcar": "Du sucre",
  "Del aceite de oliva, con diferencia sobre el segundo. En vino está entre los primeros del mundo por superficie de viñedo, pero no encabeza la producción todos los años.":
    "De l'huile d'olive, loin devant le deuxième. Pour le vin, elle est parmi les premiers du monde par la surface de vignoble, mais elle ne mène pas la production toutes les années.",
  "Los problemas de fondo": "Les problèmes de fond",
  "El **paro** es el más persistente. La tasa española ha estado sistemáticamente por encima de la media europea durante décadas, con dos rasgos añadidos: el **desempleo juvenil**, que en las crisis ha llegado a duplicar la tasa general, y la **temporalidad**, la proporción de contratos de duración limitada.":
    "Le **chômage** est le plus tenace. Le taux espagnol est systématiquement resté au-dessus de la moyenne européenne pendant des décennies, avec deux traits supplémentaires : le **chômage des jeunes**, qui dans les crises a atteint le double du taux général, et la **précarité**, la part des contrats à durée limitée.",
  "El segundo es **territorial**. Buena parte del interior se ha ido despoblando durante generaciones, y a ese fenómeno se lo llama desde hace unos años la **España vaciada**: provincias enteras con menos de diez habitantes por kilómetro cuadrado, mientras la costa y las grandes ciudades concentran el crecimiento.":
    "Le deuxième est **territorial**. Une bonne part de l'intérieur se dépeuple depuis des générations, et l'on appelle ce phénomène depuis quelques années l'**Espagne vidée** : des provinces entières à moins de dix habitants au kilomètre carré, tandis que la côte et les grandes villes concentrent la croissance.",
  "El tercero es **demográfico**: la natalidad es de las más bajas de Europa y la esperanza de vida de las más altas del mundo, una combinación que tensiona el sistema de pensiones a largo plazo.":
    "Le troisième est **démographique** : la natalité est parmi les plus basses d'Europe et l'espérance de vie parmi les plus hautes du monde, une combinaison qui met le système des retraites sous tension à long terme.",
  "¿Qué se conoce como la España vaciada?": "Qu'appelle-t-on l'Espagne vidée ?",
  "Las ciudades que perdieron población en la crisis de 2008":
    "Les villes qui ont perdu des habitants lors de la crise de 2008",
  "Las zonas del interior que llevan generaciones despoblándose":
    "Les zones de l'intérieur qui se dépeuplent depuis des générations",
  "Los pueblos abandonados tras la Guerra Civil":
    "Les villages abandonnés après la guerre civile",
  "Las comarcas sin cobertura de internet": "Les cantons sans couverture internet",
  "Provincias enteras del interior con densidades por debajo de diez habitantes por kilómetro cuadrado, mientras la costa y las grandes ciudades concentran el crecimiento.":
    "Des provinces entières de l'intérieur, à moins de dix habitants au kilomètre carré, tandis que la côte et les grandes villes concentrent la croissance.",
  "España en Europa": "L'Espagne en Europe",
  "La entrada en la **Comunidad Económica Europea** el **1 de enero de 1986**, junto con Portugal, fue el mayor cambio económico del periodo democrático. Los **fondos estructurales y de cohesión** financiaron carreteras, depuradoras, universidades y trenes, y el mercado único reorientó el comercio exterior hacia Europa.":
    "L'entrée dans la **Communauté économique européenne** le **1er janvier 1986**, avec le Portugal, fut le plus grand changement économique de la période démocratique. Les **fonds structurels et de cohésion** financèrent des routes, des stations d'épuration, des universités et des trains, et le marché unique réorienta le commerce extérieur vers l'Europe.",
  "España forma parte del **euro** desde su creación, del espacio **Schengen**, y está en la **OTAN** desde **1982**, confirmada por el referéndum de 1986. En la **ONU** entró en **1955**.":
    "L'Espagne fait partie de l'**euro** depuis sa création, de l'espace **Schengen**, et elle est dans l'**OTAN** depuis **1982**, confirmée par le référendum de 1986. Elle est entrée à l'**ONU** en **1955**.",
  "El vínculo iberoamericano": "Le lien ibéro-américain",
  "Con América Latina el vínculo es lingüístico y también institucional: las **Cumbres Iberoamericanas** reúnen periódicamente a los jefes de Estado y de Gobierno, y existen organismos comunes en educación y cultura. Ese vínculo se refleja también en la ley: los nacionales de países iberoamericanos pueden pedir la nacionalidad tras **dos años** de residencia en lugar de diez.":
    "Avec l'Amérique latine, le lien est linguistique et aussi institutionnel : les **Sommets ibéro-américains** réunissent périodiquement les chefs d'État et de gouvernement, et il existe des organismes communs en éducation et en culture. Ce lien se retrouve aussi dans la loi : les ressortissants des pays ibéro-américains peuvent demander la nationalité après **deux ans** de résidence au lieu de dix.",
  "Y el flujo se ha invertido. El país del que salieron millones de emigrantes en el siglo XX cuenta hoy con varios millones de **residentes extranjeros**, procedentes sobre todo de América Latina, Europa del Este, Marruecos y la propia Unión Europea.":
    "Et le flux s'est inversé. Le pays d'où sont partis des millions d'émigrants au XXe siècle compte aujourd'hui plusieurs millions de **résidents étrangers**, venus surtout d'Amérique latine, d'Europe de l'Est, du Maroc et de l'Union européenne elle-même.",
  "¿En qué año entró España en la OTAN?":
    "En quelle année l'Espagne est-elle entrée dans l'OTAN ?",
  "En 1975": "En 1975",
  "En 1982, y la permanencia se confirmó en el referéndum de 1986, el mismo año de la entrada en la Comunidad Económica Europea. Son dos hechos distintos que suelen juntarse.":
    "En 1982, et le maintien fut confirmé par le référendum de 1986, l'année même de l'entrée dans la Communauté économique européenne. Ce sont deux faits distincts qu'on réunit souvent.",
  "La entrada en la CEE **no** se sometió a referéndum: fue un tratado ratificado por las Cortes. Lo que se votó en 1986 fue la **permanencia en la OTAN**, y esa consulta sí fue un referéndum.":
    "L'entrée dans la CEE **ne** fut **pas** soumise à référendum : ce fut un traité ratifié par les Cortes. Ce qui fut voté en 1986, c'est le **maintien dans l'OTAN**, et cette consultation-là fut bien un référendum.",
  "Trabajo, contratos y Seguridad Social": "Travail, contrats et Sécurité sociale",
  "Sociedad y vida cotidiana": "Société et vie quotidienne",
  "Por qué importa: la nómina española tiene dos cifras muy distintas arriba y abajo, y entender qué pasa entre una y otra explica cómo se financian la sanidad, el paro y las pensiones.":
    "Pourquoi cela compte : la fiche de paie espagnole porte deux chiffres très différents en haut et en bas, et comprendre ce qui se passe entre les deux explique comment se financent la santé, le chômage et les retraites.",
  "Lo que dice la Constitución": "Ce que dit la Constitution",
  "El **artículo 35** reconoce el **deber y el derecho** al trabajo, a la libre elección de profesión y a una remuneración suficiente. El **artículo 28** garantiza la **libertad sindical** y el **derecho de huelga**; el **37**, la **negociación colectiva**; y el **41** obliga a mantener un régimen público de **Seguridad Social** para todos los ciudadanos.":
    "L'**article 35** reconnaît le **devoir et le droit** au travail, au libre choix de la profession et à une rémunération suffisante. L'**article 28** garantit la **liberté syndicale** et le **droit de grève** ; le **37**, la **négociation collective** ; et le **41** oblige à maintenir un régime public de **Sécurité sociale** pour tous les citoyens.",
  "La norma que lo desarrolla es el **Estatuto de los Trabajadores**, y por debajo de él están los **convenios colectivos**, que pueden ser de sector o de empresa y mejorar siempre lo que la ley fija como mínimo.":
    "La norme qui le développe est le **Statut des travailleurs**, et en dessous se trouvent les **conventions collectives**, qui peuvent être de secteur ou d'entreprise et toujours améliorer ce que la loi fixe comme minimum.",
  "El salario mínimo": "Le salaire minimum",
  "España **sí tiene un salario mínimo legal**: el **salario mínimo interprofesional**, que el **Gobierno fija cada año** por real decreto, previa consulta a sindicatos y organizaciones empresariales. Se expresa por día, por mes y por año, y se refiere a la jornada completa.":
    "L'Espagne **a bien un salaire minimum légal** : le **salaire minimum interprofessionnel**, que le **gouvernement fixe chaque année** par décret royal, après consultation des syndicats et des organisations patronales. Il s'exprime par jour, par mois et par an, et se rapporte au temps plein.",
  "Es una diferencia real con otros países del sur de Europa, donde los mínimos solo existen dentro de los convenios. Aquí el convenio puede subir el suelo, nunca bajarlo.":
    "C'est une différence réelle avec d'autres pays du sud de l'Europe, où les minima n'existent que dans les conventions. Ici, la convention peut relever le plancher, jamais l'abaisser.",
  "¿Quién fija el salario mínimo en España?": "Qui fixe le salaire minimum en Espagne ?",
  "Cada convenio colectivo, sector por sector":
    "Chaque convention collective, secteur par secteur",
  "El Gobierno, cada año, por real decreto": "Le gouvernement, chaque année, par décret royal",
  "No existe salario mínimo legal": "Il n'existe pas de salaire minimum légal",
  "El salario mínimo interprofesional lo fija el Gobierno previa consulta a sindicatos y empresarios. Los convenios pueden mejorarlo pero nunca quedar por debajo.":
    "Le salaire minimum interprofessionnel est fixé par le gouvernement après consultation des syndicats et du patronat. Les conventions peuvent l'améliorer mais jamais passer en dessous.",
  "El contrato y la jornada": "Le contrat et la durée du travail",
  "Indefinido": "À durée indéterminée",
  "Sin fecha de fin. Es la forma de referencia desde la reforma de 2021, que restringió el uso del contrato temporal.":
    "Sans date de fin. C'est la forme de référence depuis la réforme de 2021, qui a restreint l'usage du contrat temporaire.",
  "Temporal": "Temporaire",
  "Solo por causas tasadas: circunstancias de la producción o sustitución de una persona con derecho a reserva del puesto.":
    "Seulement pour des causes énumérées : circonstances de la production ou remplacement d'une personne dont le poste est réservé.",
  "Fijo discontinuo": "Fixe discontinu",
  "Indefinido pero para trabajos estacionales o intermitentes. Se llama a la persona cada temporada.":
    "À durée indéterminée mais pour des travaux saisonniers ou intermittents. On rappelle la personne à chaque saison.",
  "Autónomo": "Indépendant",
  "No es un contrato sino un régimen: se factura, y se pagan por cuenta propia impuestos y cotización.":
    "Ce n'est pas un contrat mais un régime : on facture, et l'on paie soi-même impôts et cotisations.",
  "La **jornada máxima** es de **cuarenta horas semanales** de promedio en cómputo anual, y las **vacaciones** mínimas son de **treinta días naturales** al año, que no pueden sustituirse por dinero. Las horas extraordinarias tienen tope legal.":
    "La **durée maximale** est de **quarante heures par semaine** en moyenne sur l'année, et les **congés** minimaux sont de **trente jours calendaires** par an, qui ne peuvent pas être remplacés par de l'argent. Les heures supplémentaires ont un plafond légal.",
  "¿Cuántos días de vacaciones al año garantiza como mínimo la ley?":
    "Combien de jours de congés par an la loi garantit-elle au minimum ?",
  "Veintiuno naturales": "Vingt et un jours calendaires",
  "Veintidós hábiles o treinta naturales":
    "Vingt-deux jours ouvrables, soit trente jours calendaires",
  "Cuarenta y cinco naturales": "Quarante-cinq jours calendaires",
  "Los que fije cada empresa": "Ceux que fixe chaque entreprise",
  "Treinta días naturales, que equivalen a los veintidós hábiles con que suelen contarse. No pueden cambiarse por dinero: el descanso es obligatorio.":
    "Trente jours calendaires, qui correspondent aux vingt-deux jours ouvrables dont on les compte d'ordinaire. On ne peut pas les échanger contre de l'argent : le repos est obligatoire.",
  "La nómina": "La fiche de paie",
  "Entre el **bruto** y el **neto** hay dos descuentos. Las **cotizaciones a la Seguridad Social**, que la persona paga en parte y la empresa en parte mucho mayor, y la **retención del IRPF**, un adelanto del impuesto sobre la renta que se ajusta al año siguiente en la **declaración**.":
    "Entre le **brut** et le **net**, il y a deux retenues. Les **cotisations de Sécurité sociale**, que la personne paie en partie et l'entreprise pour une part bien plus grande, et la **retenue d'IRPF**, une avance sur l'impôt sur le revenu qui se régularise l'année suivante à la **déclaration**.",
  "Son habituales **dos pagas extraordinarias**, en junio y en diciembre, que muchos convenios permiten **prorratear** en las doce mensualidades. Al terminar un contrato se recibe el **finiquito**, con lo pendiente de vacaciones y pagas, y en algunos despidos una **indemnización** aparte.":
    "Deux **primes** sont habituelles, en juin et en décembre, que beaucoup de conventions permettent de **répartir** sur les douze mois. À la fin d'un contrat, on reçoit le **finiquito**, le solde de tout compte, avec les congés et primes restants, et dans certains licenciements une **indemnité** à part.",
  "La Seguridad Social": "La Sécurité sociale",
  "Todo trabajador tiene un **número de afiliación** que le acompaña toda la vida. Hay dos grandes regímenes: el **general**, para quien trabaja por cuenta ajena, y el **RETA**, el régimen especial de **trabajadores autónomos**, para quien lo hace por cuenta propia.":
    "Tout travailleur a un **numéro d'affiliation** qui l'accompagne toute sa vie. Il y a deux grands régimes : le **général**, pour qui travaille comme salarié, et le **RETA**, le régime spécial des **travailleurs indépendants**, pour qui travaille à son compte.",
  "De ahí salen las prestaciones: **desempleo** —que gestiona el **SEPE** y exige haber cotizado un mínimo—, **incapacidad temporal**, **nacimiento y cuidado de menor**, y la **jubilación**. El documento que resume todo lo cotizado se llama **vida laboral** y puede pedirse en cualquier momento.":
    "De là viennent les prestations : le **chômage** — que gère le **SEPE** et qui exige d'avoir cotisé un minimum —, l'**incapacité temporaire**, la **naissance et la garde d'un enfant**, et la **retraite**. Le document qui récapitule tout ce qui a été cotisé s'appelle la **vie professionnelle** et peut être demandé à tout moment.",
  "¿Qué es el RETA?": "Qu'est-ce que le RETA ?",
  "El registro de contratos temporales": "Le registre des contrats temporaires",
  "El régimen especial de trabajadores autónomos":
    "Le régime spécial des travailleurs indépendants",
  "La retención del IRPF en la nómina": "La retenue d'IRPF sur la fiche de paie",
  "El fondo de garantía salarial": "Le fonds de garantie des salaires",
  "Es el régimen de la Seguridad Social para quien trabaja por cuenta propia, frente al régimen general de quien lo hace por cuenta ajena.":
    "C'est le régime de Sécurité sociale de qui travaille à son compte, face au régime général de qui travaille comme salarié.",
  "**Finiquito** e **indemnización** no son lo mismo. El finiquito se cobra siempre al terminar y liquida lo pendiente; la indemnización solo corresponde en determinados despidos, y se suma al finiquito.":
    "**Finiquito** et **indemnité** ne sont pas la même chose. Le finiquito se perçoit toujours à la fin et solde ce qui reste dû ; l'indemnité n'est due que dans certains licenciements, et elle s'ajoute au finiquito.",
  "Sanidad y educación": "Santé et éducation",
  "Por qué importa: los dos servicios que más se usan viviendo en un país. Los dos son públicos y universales, y los dos los gestionan las comunidades, no el Estado: eso explica que no funcionen igual en todas partes.":
    "Pourquoi cela compte : les deux services que l'on utilise le plus en vivant dans un pays. Tous deux sont publics et universels, et tous deux sont gérés par les communautés, non par l'État : cela explique qu'ils ne fonctionnent pas partout de la même façon.",
  "El Sistema Nacional de Salud": "Le Système national de santé",
  "El **artículo 43** reconoce el derecho a la protección de la salud. El **Sistema Nacional de Salud** es **universal** y se financia con **impuestos**, no con un seguro: no hay primas ni cuotas mensuales. La gestión corresponde a las **comunidades autónomas**, y el Estado fija las bases y coordina.":
    "L'**article 43** reconnaît le droit à la protection de la santé. Le **Système national de santé** est **universel** et se finance par l'**impôt**, non par une assurance : il n'y a ni prime ni cotisation mensuelle. La gestion revient aux **communautés autonomes**, et l'État fixe les bases et coordonne.",
  "La puerta de entrada es el **centro de salud** y el **médico de familia**, que atiende, receta y **deriva** al especialista. A urgencias se puede acudir directamente, y para las emergencias hay un número único en toda España y en toda Europa: el **112**.":
    "La porte d'entrée est le **centre de santé** et le **médecin de famille**, qui soigne, prescrit et **oriente** vers le spécialiste. On peut se rendre directement aux urgences, et pour les urgences vitales il y a un numéro unique dans toute l'Espagne et dans toute l'Europe : le **112**.",
  "La tarjeta sanitaria": "La carte de santé",
  "Individual y emitida por la comunidad. Es lo que identifica a la persona ante el sistema; cambia si se cambia de comunidad.":
    "Individuelle et délivrée par la communauté. C'est elle qui identifie la personne auprès du système ; elle change si l'on change de communauté.",
  "La receta electrónica": "L'ordonnance électronique",
  "El médico prescribe en el sistema y la farmacia lee la tarjeta. Ya casi no se usa el papel.":
    "Le médecin prescrit dans le système et la pharmacie lit la carte. Le papier ne sert presque plus.",
  "El copago farmacéutico": "Le ticket modérateur sur les médicaments",
  "Una parte del precio del medicamento a cargo del paciente, en porcentaje según la renta. Los pensionistas tienen topes mensuales.":
    "Une part du prix du médicament à la charge du patient, en pourcentage selon le revenu. Les retraités ont des plafonds mensuels.",
  "Las farmacias": "Les pharmacies",
  "Establecimientos privados con licencia y horarios regulados. Siempre hay una de guardia abierta en cada zona.":
    "Des établissements privés sous licence, aux horaires réglementés. Il y en a toujours une de garde ouverte dans chaque secteur.",
  "¿Qué número se marca en España para una emergencia?":
    "Quel numéro compose-t-on en Espagne pour une urgence ?",
  "El 091": "Le 091",
  "El 112": "Le 112",
  "El 061": "Le 061",
  "El 080": "Le 080",
  "El 112 es el número único de emergencias en toda España y en toda la Unión Europea, y coordina policía, bomberos y ambulancias. Los otros son teléfonos de servicios concretos.":
    "Le 112 est le numéro d'urgence unique dans toute l'Espagne et dans toute l'Union européenne, et il coordonne police, pompiers et ambulances. Les autres sont des numéros de services particuliers.",
  "La escuela": "L'école",
  "El **artículo 27** reconoce el derecho a la educación y declara la enseñanza básica **obligatoria y gratuita**. La obligatoriedad va de los **seis a los dieciséis años**, y también aquí gestionan las comunidades sobre unas bases estatales comunes.":
    "L'**article 27** reconnaît le droit à l'éducation et déclare l'enseignement de base **obligatoire et gratuit**. L'obligation va de **six à seize ans**, et là encore ce sont les communautés qui gèrent, sur des bases communes fixées par l'État.",
  "Infantil · 0 a 6": "La maternelle · 0 à 6 ans",
  "No obligatoria. El segundo ciclo, de tres a seis años, es gratuito y lo cursa la práctica totalidad de los niños.":
    "Non obligatoire. Le second cycle, de trois à six ans, est gratuit et suivi par la quasi-totalité des enfants.",
  "Primaria · 6 a 12": "Le primaire · 6 à 12 ans",
  "Seis cursos, obligatoria. Es lo que en la conversación se sigue llamando el colegio.":
    "Six années, obligatoire. C'est ce qu'on continue d'appeler dans la conversation le colegio.",
  "ESO · 12 a 16": "L'ESO · 12 à 16 ans",
  "Cuatro cursos de Educación Secundaria Obligatoria. Al superarla se obtiene el título de Graduado en ESO.":
    "Quatre années d'enseignement secondaire obligatoire. En la réussissant on obtient le titre de Graduado en ESO.",
  "Bachillerato o FP · 16 a 18": "Bachillerato ou FP · 16 à 18 ans",
  "Dos años de Bachillerato, o Formación Profesional de grado medio. Ninguna de las dos es obligatoria.":
    "Deux années de Bachillerato, ou une formation professionnelle de niveau intermédiaire. Ni l'une ni l'autre n'est obligatoire.",
  "Para entrar en la universidad hay que superar el Bachillerato y una prueba de acceso, conocida durante décadas como **selectividad** y hoy con siglas que han ido cambiando. La universidad se organiza en **grado**, de cuatro años en la mayoría de las carreras, **máster** y **doctorado**.":
    "Pour entrer à l'université, il faut réussir le Bachillerato et une épreuve d'accès, connue pendant des décennies sous le nom de **selectividad** et désignée aujourd'hui par des sigles qui ont changé plusieurs fois. L'université s'organise en **grado**, quatre ans dans la plupart des filières, **master** et **doctorat**.",
  "¿Qué título se obtiene al terminar la enseñanza obligatoria?":
    "Quel titre obtient-on à la fin de l'enseignement obligatoire ?",
  "El Bachillerato": "Le Bachillerato",
  "El Graduado en ESO": "Le Graduado en ESO",
  "El certificado de escolaridad": "Le certificat de scolarité",
  "El grado universitario": "Le grado universitaire",
  "El título de Graduado en Educación Secundaria Obligatoria, a los dieciséis años. El Bachillerato son dos cursos posteriores y no es obligatorio.":
    "Le titre de Graduado en Educación Secundaria Obligatoria, à seize ans. Le Bachillerato, ce sont deux années postérieures et il n'est pas obligatoire.",
  "Tres tipos de centro": "Trois types d'établissement",
  "Los centros son **públicos**, **privados** o **concertados**. El **concertado** es la figura característica de España: un centro de titularidad **privada** —a menudo religiosa— sostenido con **fondos públicos** mediante un concierto, que a cambio no puede cobrar por la enseñanza en las etapas concertadas. Escolariza a una parte grande del alumnado, sobre todo en las ciudades.":
    "Les établissements sont **publics**, **privés** ou **concertados**. Le **concertado** est la figure caractéristique de l'Espagne : un établissement de propriété **privée** — souvent religieuse — soutenu par des **fonds publics** au moyen d'une convention, et qui en échange ne peut pas faire payer l'enseignement dans les cycles conventionnés. Il scolarise une grande part des élèves, surtout dans les villes.",
  "Las calificaciones van de **cero a diez**, y se aprueba a partir del **cinco**. En la universidad la escala es la misma, con la mención de **matrícula de honor** para las mejores notas.":
    "Les notes vont de **zéro à dix**, et la moyenne est à **cinq**. À l'université, l'échelle est la même, avec la mention de **matrícula de honor** pour les meilleures notes.",
  "¿Qué es un centro concertado?": "Qu'est-ce qu'un établissement concertado ?",
  "Un centro público con horario ampliado": "Un établissement public à horaires élargis",
  "Un centro privado sostenido con fondos públicos":
    "Un établissement privé soutenu par des fonds publics",
  "Un centro que solo imparte Formación Profesional":
    "Un établissement qui ne donne que de la formation professionnelle",
  "Un centro para alumnos con necesidades especiales":
    "Un établissement pour élèves à besoins particuliers",
  "De titularidad privada y financiación pública mediante concierto, y por eso no puede cobrar por la enseñanza en las etapas concertadas. Es una figura característica del sistema español.":
    "De propriété privée et de financement public par convention, et c'est pourquoi il ne peut pas faire payer l'enseignement dans les cycles conventionnés. C'est une figure caractéristique du système espagnol.",
  "La **tarjeta sanitaria** la emite la comunidad autónoma, no el Estado: al mudarse de comunidad hay que **cambiar de tarjeta y de médico**. La atención está garantizada en toda España, pero el trámite es autonómico.":
    "La **carte de santé** est délivrée par la communauté autonome, non par l'État : en déménageant d'une communauté à l'autre, il faut **changer de carte et de médecin**. Les soins sont garantis dans toute l'Espagne, mais la démarche est autonomique.",
  "Vivir en España": "Vivre en Espagne",
  "Por qué importa: esta es la lección práctica. Ninguna de las pruebas que aquí se mencionan versa sobre historia, y este curso no prepara para ninguna de ellas: sirven para saber qué pide el Estado, y a quién.":
    "Pourquoi cela compte : c'est la leçon pratique. Aucune des épreuves mentionnées ici ne porte sur l'histoire, et ce cours ne prépare à aucune d'elles : elles servent à savoir ce que l'État demande, et à qui.",
  "El padrón, primero": "Le padrón, d'abord",
  "El **empadronamiento** es la inscripción en el **padrón municipal** del ayuntamiento donde se vive. Es el trámite del que dependen casi todos los demás: la **tarjeta sanitaria**, la **escolarización** de los hijos, las ayudas municipales y, para los ciudadanos de la Unión, el voto en las **municipales**.":
    "L'**empadronamiento** est l'inscription au **padrón municipal** de la mairie du lieu où l'on vit. C'est la démarche dont dépendent presque toutes les autres : la **carte de santé**, la **scolarisation** des enfants, les aides municipales et, pour les citoyens de l'Union, le vote aux **municipales**.",
  "Tiene una particularidad que conviene conocer: el padrón registra **dónde vive** una persona, no su situación administrativa, y puede empadronarse **con independencia** de ella. El certificado de empadronamiento acredita además el tiempo de residencia, que es lo que después cuentan otros expedientes.":
    "Il a une particularité qu'il vaut mieux connaître : le padrón enregistre **où vit** une personne, non sa situation administrative, et l'on peut s'y inscrire **indépendamment** d'elle. Le certificat d'empadronamiento atteste en outre la durée de résidence, qui est ce que d'autres dossiers compteront ensuite.",
  "Los documentos": "Les papiers",
  "DNI": "Le DNI",
  "El documento nacional de identidad de los españoles, obligatorio desde los catorce años.":
    "La carte nationale d'identité des Espagnols, obligatoire à partir de quatorze ans.",
  "NIE": "Le NIE",
  "El número de identidad de extranjero. No es una tarjeta sino un número, y hace falta para trabajar, abrir una cuenta o firmar un contrato.":
    "Le numéro d'identité d'étranger. Ce n'est pas une carte mais un numéro, et il faut l'avoir pour travailler, ouvrir un compte ou signer un contrat.",
  "TIE": "La TIE",
  "La tarjeta de identidad de extranjero: el documento físico que acredita la autorización de residencia y lleva el NIE.":
    "La carte d'identité d'étranger : le document physique qui atteste l'autorisation de séjour et porte le NIE.",
  "Número de la Seguridad Social": "Le numéro de Sécurité sociale",
  "Necesario para ser dado de alta en un empleo. Es distinto del NIE y no lo sustituye.":
    "Nécessaire pour être déclaré dans un emploi. Il est différent du NIE et ne le remplace pas.",
  "Los ciudadanos de la **Unión Europea** no necesitan permiso de residencia: se inscriben en el Registro Central de Extranjeros y obtienen un **certificado de registro**, que es un trámite más ligero.":
    "Les citoyens de l'**Union européenne** n'ont pas besoin d'un titre de séjour : ils s'inscrivent au Registre central des étrangers et obtiennent un **certificat d'enregistrement**, une démarche plus légère.",
  "¿Qué es el empadronamiento?": "Qu'est-ce que l'empadronamiento ?",
  "La inscripción en el padrón municipal del lugar donde se vive":
    "L'inscription au registre municipal du lieu où l'on vit",
  "El permiso de residencia": "Le titre de séjour",
  "El alta en la Seguridad Social": "L'affiliation à la Sécurité sociale",
  "La declaración anual de la renta": "La déclaration annuelle de revenus",
  "Es un registro del ayuntamiento sobre quién vive en el municipio. De él dependen la tarjeta sanitaria, la escolarización y el certificado que acredita el tiempo de residencia.":
    "C'est un registre de la mairie sur qui vit dans la commune. En dépendent la carte de santé, la scolarisation et le certificat qui atteste la durée de résidence.",
  "La residencia": "Le séjour",
  "Las autorizaciones de residencia y trabajo son **temporales** al principio y se renuevan. Existen además figuras de **arraigo** —social, laboral, familiar o para la formación— pensadas para quien lleva ya tiempo en el país y acredita vínculos.":
    "Les autorisations de séjour et de travail sont **temporaires** au début et se renouvellent. Il existe en outre des figures d'**arraigo** — social, professionnel, familial ou pour la formation — pensées pour qui est déjà depuis un temps dans le pays et peut justifier de liens.",
  "Tras **cinco años** de residencia legal y continuada puede solicitarse la **residencia de larga duración**, que autoriza a residir y trabajar de forma indefinida en las mismas condiciones que los españoles, salvo en lo que la ley reserva a la nacionalidad, como el voto en las generales.":
    "Après **cinq ans** de séjour légal et continu, on peut demander la **résidence de longue durée**, qui autorise à résider et à travailler de façon indéfinie dans les mêmes conditions que les Espagnols, sauf pour ce que la loi réserve à la nationalité, comme le vote aux élections générales.",
  "¿Cuántos años de residencia legal se exigen para la residencia de larga duración?":
    "Combien d'années de séjour légal exige-t-on pour la résidence de longue durée ?",
  "Tres": "Trois",
  "Cinco años, y autoriza a residir y trabajar indefinidamente. Diez es el plazo general para pedir la nacionalidad, que es un paso distinto y posterior.":
    "Cinq ans, et elle autorise à résider et à travailler indéfiniment. Dix est le délai général pour demander la nationalité, qui est une étape différente et postérieure.",
  "Los trámites de cada día": "Les démarches de tous les jours",
  "Buena parte de la Administración se hace ya por internet, y para ello hace falta una **identidad digital**: el sistema **Cl@ve** o un **certificado digital**. Con ellos se pide cita en la Seguridad Social, se descarga la vida laboral, se presenta la declaración de la renta o se consulta un expediente.":
    "Une bonne part de l'administration se fait désormais par internet, et il faut pour cela une **identité numérique** : le système **Cl@ve** ou un **certificat numérique**. Avec eux on prend rendez-vous à la Sécurité sociale, on télécharge sa vie professionnelle, on dépose sa déclaration de revenus ou l'on consulte un dossier.",
  "La **declaración de la renta** se presenta cada año ante la **Agencia Tributaria**, normalmente entre abril y junio, y regulariza lo que ya se fue reteniendo en la nómina: puede salir a pagar o a devolver.":
    "La **déclaration de revenus** se dépose chaque année auprès de l'**Agencia Tributaria**, normalement entre avril et juin, et régularise ce qui a déjà été retenu sur la fiche de paie : il peut en résulter un solde à payer ou à rembourser.",
  "La nacionalidad": "La nationalité",
  "El expediente se tramita ante el **Ministerio de Justicia**. Además del plazo de residencia que corresponda, se exigen **buena conducta cívica** y acreditar la **integración** con las dos pruebas del **Instituto Cervantes**: el **DELE A2** de lengua —del que están exentos los nacionales de países hispanohablantes— y la **CCSE**, de conocimientos constitucionales y socioculturales.":
    "Le dossier est instruit par le **ministère de la Justice**. Outre le délai de résidence qui s'applique, on exige une **bonne conduite civique** et la preuve de l'**intégration** par les deux épreuves de l'**Instituto Cervantes** : le **DELE A2** de langue — dont sont dispensés les ressortissants des pays hispanophones — et la **CCSE**, sur les connaissances constitutionnelles et socioculturelles.",
  "Concedida la nacionalidad, se cierra con un acto formal: **jurar o prometer fidelidad al Rey y obediencia a la Constitución y a las leyes**, y la inscripción en el Registro Civil.":
    "Une fois la nationalité accordée, elle se clôt par un acte formel : **jurer ou promettre fidélité au Roi et obéissance à la Constitution et aux lois**, et l'inscription à l'état civil.",
  "¿Qué número identifica a un extranjero en España para trabajar o firmar un contrato?":
    "Quel numéro identifie un étranger en Espagne pour travailler ou signer un contrat ?",
  "El DNI": "Le DNI",
  "El NIE": "Le NIE",
  "El número de la Seguridad Social": "Le numéro de Sécurité sociale",
  "El número de pasaporte": "Le numéro de passeport",
  "El número de identidad de extranjero. La TIE es la tarjeta física que lo lleva impreso, y el número de la Seguridad Social es otro distinto, necesario además para el alta laboral.":
    "Le numéro d'identité d'étranger. La TIE est la carte physique qui le porte imprimé, et le numéro de Sécurité sociale en est un autre, nécessaire de plus pour la déclaration d'embauche.",
  "**Residencia** y **nacionalidad** son dos cosas distintas y dos expedientes distintos. La residencia de larga duración se pide a los cinco años ante Extranjería; la nacionalidad, con el plazo que corresponda, ante el Ministerio de Justicia.":
    "**Séjour** et **nationalité** sont deux choses distinctes et deux dossiers distincts. La résidence de longue durée se demande au bout de cinq ans auprès du service des étrangers ; la nationalité, avec le délai qui s'applique, auprès du ministère de la Justice.",
  "La vida diaria": "La vie de tous les jours",
  "Por qué se cierra aquí: los horarios españoles desconciertan a casi todo el que llega, y las reglas de trato no están escritas en ninguna parte. Ninguna de estas cosas es obligatoria; todas son reales.":
    "Pourquoi on finit là-dessus : les horaires espagnols déconcertent presque tous ceux qui arrivent, et les règles de politesse ne sont écrites nulle part. Aucune de ces choses n'est obligatoire ; toutes sont réelles.",
  "El reloj": "L'horloge",
  "España come y cena **más tarde** que casi toda Europa: la **comida** entre las dos y las tres, la **cena** a partir de las nueve, más tarde en verano y en el sur. El desayuno es ligero —café con leche y una tostada— y a media mañana mucha gente hace un segundo desayuno, el **almuerzo**.":
    "L'Espagne déjeune et dîne **plus tard** que presque toute l'Europe : le **déjeuner** entre quatorze et quinze heures, le **dîner** à partir de vingt et une heures, plus tard en été et dans le sud. Le petit-déjeuner est léger — café au lait et une tartine — et en milieu de matinée bien des gens prennent un second petit-déjeuner, l'**almuerzo**.",
  "Una parte de la explicación está en el huso horario: España peninsular usa la hora de Europa central pese a estar a la longitud de Londres, de modo que el sol se pone más tarde de lo que marca el reloj. La otra parte es costumbre heredada.":
    "Une partie de l'explication tient au fuseau horaire : l'Espagne péninsulaire est à l'heure d'Europe centrale bien qu'elle soit à la longitude de Londres, de sorte que le soleil se couche plus tard que ne le dit l'horloge. L'autre partie est une habitude héritée.",
  "Muchos comercios pequeños y oficinas cierran a mediodía y reabren por la tarde: es la **jornada partida**, más común cuanto más pequeño es el municipio. La **siesta** existe, pero como costumbre de fin de semana o de verano más que como práctica diaria.":
    "Beaucoup de petits commerces et de bureaux ferment à midi et rouvrent l'après-midi : c'est la **journée coupée**, d'autant plus courante que la commune est petite. La **sieste** existe, mais comme habitude de week-end ou d'été plus que comme pratique quotidienne.",
  "¿A qué hora se cena habitualmente en España?":
    "À quelle heure dîne-t-on habituellement en Espagne ?",
  "Entre las siete y las ocho": "Entre dix-neuf et vingt heures",
  "A partir de las nueve": "À partir de vingt et une heures",
  "Entre las seis y las siete": "Entre dix-huit et dix-neuf heures",
  "Después de medianoche": "Après minuit",
  "A partir de las nueve, y más tarde en verano y en el sur. La comida principal del día es la del mediodía, entre las dos y las tres.":
    "À partir de vingt et une heures, et plus tard en été et dans le sud. Le repas principal de la journée est celui de midi, entre quatorze et quinze heures.",
  "La mesa": "La table",
  "El **menú del día** es una institución: en la mayoría de los restaurantes, al mediodía y entre semana, se ofrece primer plato, segundo, pan, bebida y postre o café a **precio fijo**. Nació de una norma de los años sesenta pensada para el turismo y se quedó como costumbre.":
    "Le **menú del día** est une institution : dans la plupart des restaurants, à midi et en semaine, on propose une entrée, un plat, du pain, une boisson et un dessert ou un café à **prix fixe**. Il est né d'une règle des années soixante pensée pour le tourisme et il est resté comme habitude.",
  "Fuera de las comidas está el **tapeo**: ir de bar en bar tomando algo pequeño con la bebida. En algunas ciudades la tapa se sirve **incluida** con la consumición y en otras se paga aparte. Y después de comer viene la **sobremesa**, el rato de conversación con la mesa ya recogida, que puede durar más que la comida.":
    "Hors des repas, il y a le **tapeo** : aller de bar en bar en prenant une petite chose avec la boisson. Dans certaines villes, la tapa est servie **comprise** avec la consommation, dans d'autres elle se paie à part. Et après le repas vient la **sobremesa**, le moment de conversation une fois la table débarrassée, qui peut durer plus longtemps que le repas.",
  "¿Qué es el menú del día?": "Qu'est-ce que le menú del día ?",
  "La carta completa del restaurante": "La carte complète du restaurant",
  "Una comida completa a precio fijo, al mediodía y entre semana":
    "Un repas complet à prix fixe, à midi et en semaine",
  "El plato recomendado por el cocinero": "Le plat recommandé par le cuisinier",
  "Un servicio reservado a los turistas": "Un service réservé aux touristes",
  "Primer plato, segundo, pan, bebida y postre o café por un precio único. Nació de una norma de los años sesenta y se quedó como costumbre del país.":
    "Une entrée, un plat, du pain, une boisson et un dessert ou un café pour un prix unique. Il est né d'une règle des années soixante et il est resté comme habitude du pays.",
  "El trato": "Le tutoiement",
  "El **tuteo** está mucho más extendido en España que en otros países de lengua española. Se tutea a compañeros de trabajo, a camareros, a dependientes y con frecuencia a desconocidos de edad parecida. El **usted** se reserva para personas mayores, para contextos muy formales y para dirigirse a alguien de quien se quiere marcar distancia o respeto especial.":
    "Le **tutoiement** est bien plus répandu en Espagne que dans d'autres pays de langue espagnole. On tutoie ses collègues, les serveurs, les vendeurs et souvent des inconnus d'âge voisin. Le **usted** se réserve aux personnes âgées, aux contextes très formels et à quelqu'un envers qui l'on veut marquer une distance ou un respect particulier.",
  "El saludo habitual entre conocidos, y en presentaciones informales, son **dos besos** en la mejilla, empezando por la izquierda de quien saluda. Entre hombres suele ser un apretón de manos o un abrazo. En contextos profesionales la mano es lo normal.":
    "Le salut habituel entre gens qui se connaissent, et lors de présentations informelles, ce sont **deux bises** sur la joue, en commençant par la gauche de celui qui salue. Entre hommes, c'est plutôt une poignée de main ou une accolade. Dans un cadre professionnel, la main est la norme.",
  "¿Cómo se saluda habitualmente entre conocidos en una situación informal?":
    "Comment se salue-t-on habituellement entre connaissances dans une situation informelle ?",
  "Con una inclinación": "Par une inclinaison",
  "Con dos besos en la mejilla": "Par deux bises sur la joue",
  "Sin contacto físico": "Sans contact physique",
  "Con tres besos": "Par trois bises",
  "Dos besos, empezando por la izquierda de quien saluda. Entre hombres es más común el apretón de manos o el abrazo, y en el trabajo la mano es lo habitual.":
    "Deux bises, en commençant par la gauche de celui qui salue. Entre hommes, la poignée de main ou l'accolade est plus courante, et au travail la main est la norme.",
  "La calle y la casa": "La rue et la maison",
  "La vida social ocurre mucho **fuera de casa**: en el bar del barrio, en la terraza, en la plaza. Es una consecuencia práctica del clima y de las viviendas, en su mayoría **pisos** en edificios y no casas individuales. La **propiedad** está muy extendida: la proporción de hogares en vivienda propia es de las más altas de Europa, aunque el alquiler crece entre los jóvenes.":
    "La vie sociale se passe beaucoup **hors de chez soi** : au bar du quartier, en terrasse, sur la place. C'est une conséquence pratique du climat et des logements, pour la plupart des **appartements** dans des immeubles et non des maisons individuelles. La **propriété** est très répandue : la proportion de ménages propriétaires est parmi les plus élevées d'Europe, même si la location progresse chez les jeunes.",
  "La familia sigue siendo muy cercana en el trato y en la práctica, y los jóvenes se **independizan tarde**, más que en casi toda Europa, por razones sobre todo económicas.":
    "La famille reste très proche, dans le ton comme dans les faits, et les jeunes **prennent leur indépendance tard**, plus que presque partout en Europe, pour des raisons surtout économiques.",
  "El deporte": "Le sport",
  "El **fútbol** ocupa la conversación de agosto a mayo, con **LaLiga** y el partido entre los dos grandes clubes que se llama simplemente **el clásico**. La selección se conoce como **la Roja**. Después vienen el **baloncesto**, el **ciclismo** con la **Vuelta a España** cada septiembre, el **tenis** y el **motociclismo**, disciplinas en las que el país lleva décadas dando campeones.":
    "Le **football** occupe la conversation d'août à mai, avec **LaLiga** et le match entre les deux grands clubs qu'on appelle simplement **el clásico**. La sélection est connue sous le nom de **la Roja**. Viennent ensuite le **basket-ball**, le **cyclisme** avec la **Vuelta** chaque septembre, le **tennis** et la **moto**, disciplines où le pays donne des champions depuis des décennies.",
  "Los horarios están cambiando, y en las grandes ciudades muchos comercios ya no cierran a mediodía. Estas costumbres describen una tendencia general, no una regla que valga en todas partes ni para todo el mundo.":
    "Les horaires changent, et dans les grandes villes beaucoup de commerces ne ferment plus à midi. Ces habitudes décrivent une tendance générale, non une règle qui vaudrait partout et pour tout le monde.",
};
