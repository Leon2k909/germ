/**
 * Russian for the Life in the UK course cards, headings and questions.
 *
 * Keyed on the ENGLISH source text exactly as it appears in
 * lifeInTheUkCourse.ts. A missing key is not an error — the card shows the
 * original and says there is no translation — but a key that matches nothing
 * is, because it fails silently: the card renders, the tap works, and the
 * reader is told a translated card has no translation. Every key here was
 * extracted from the built module and paired back, never retyped: one wrong
 * character — a straight quote for a typographic one, a hyphen for an en dash
 * — and the lookup misses without a sound. check-ru-country-translations
 * catches that.
 *
 * The line between what is translated and what is not runs where Russian
 * itself draws it. An institution Russian has a name for gets that name —
 * парламент, палата общин, Великая хартия вольностей. What stays English is
 * what a reader will meet printed on a form or a doorplate and nowhere else:
 * the NHS, National Insurance, the DVLA, a council tax bill. Those lead in
 * English, and a Russian gloss follows once.
 */
export const LIFE_IN_THE_UK_RU: Record<string, string> = {
  "History, government and traditions — how life in the UK works.":
    "История, управление и обычаи — как устроена жизнь в Соединённом Королевстве.",
  "British Values & Principles": "Британские ценности и начала",
  "Values and principles": "Ценности и начала",
  "British society rests on a short list of shared values. They are not decoration: they are what the law, the courts and everyday expectations are built on, and understanding them explains a great deal of what follows in this course.":
    "Британское общество держится на коротком перечне общих ценностей. Это не украшение: на них построены закон, суды и повседневные ожидания, и понимание их объясняет многое из того, что пойдёт дальше в этом курсе.",
  "Why this lesson first: the test does not only ask facts. Several questions ask what British society expects of you, and those answers come straight from the values below.":
    "Почему эта лекция первая: тест спрашивает не только о фактах. Несколько вопросов касаются того, чего британское общество ждёт от тебя, и ответы на них идут прямо из ценностей ниже.",
  "The fundamental principles": "Основные начала",
  "The UK sets out a short list of shared values. Learn them as a list — questions often ask you to pick which one is *not* included.":
    "Соединённое Королевство выкладывает короткий перечень общих ценностей. Учи их именно списком — вопросы часто просят выбрать то, чего в нём *нет*.",
  "Democracy": "Демократия",
  "Government by the people, through representatives you elect and can vote out.":
    "Правление народа через представителей, которых избирают и которых можно голосованием убрать.",
  "The rule of law": "Верховенство права",
  "Everyone is subject to the law — including ministers, the police and the government itself.":
    "Закону подчинены все — в том числе министры, полиция и само правительство.",
  "Individual liberty": "Свобода личности",
  "Freedom to live as you choose, within the law.":
    "Свобода жить так, как выберешь, в границах закона.",
  "Equality": "Равенство",
  "No one may be treated less favourably because of who they are. The Equality Act 2010 makes this law.":
    "Ни к кому нельзя относиться хуже из-за того, кто он есть. Equality Act 2010 делает это законом.",
  "Tolerance": "Терпимость",
  "Respect for those of different faiths and beliefs, and of none.":
    "Уважение к людям иной веры и иных убеждений, а также к тем, у кого их нет.",
  "Respect": "Уважение",
  "For other people, for their property, and for the environment you share.":
    "К другим людям, к их имуществу и к среде, которую вы делите.",
  "Participation": "Участие",
  "Taking part in community life — voting, volunteering, jury service.":
    "Участие в жизни общины — голосование, добровольная помощь, служба присяжным.",
  "Equality: the nine protected characteristics": "Равенство: девять защищённых признаков",
  "It is unlawful to discriminate against someone on any of these grounds: **age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation**.":
    "Противозаконно ущемлять человека по любому из этих оснований: **возраст, инвалидность, смена пола, брак и гражданское партнёрство, беременность и материнство, раса, религия или убеждения, пол и сексуальная ориентация**.",
  "Rights and responsibilities": "Права и обязанности",
  "The values cut both ways. Living in the UK gives you rights, and each one carries a matching duty.":
    "Ценности режут в обе стороны. Жизнь в Соединённом Королевстве даёт права, и у каждого из них есть ответная обязанность.",
  "Your rights": "Твои права",
  "Freedom of speech and of the press. Freedom of religion and belief. Freedom from unfair discrimination. A fair trial. A vote in a free election.":
    "Свобода слова и печати. Свобода религии и убеждений. Свобода от несправедливого ущемления. Справедливый суд. Голос на свободных выборах.",
  "Your responsibilities": "Твои обязанности",
  "Obey the law. Pay tax and National Insurance. Serve on a jury when called. Respect the rights of others. Look after the area you live in.":
    "Соблюдать закон. Платить налоги и National Insurance. Служить присяжным, когда позовут. Уважать права других. Беречь место, где живёшь.",
  "Freedom of speech is not unlimited. Speech that incites violence or racial hatred is a criminal offence. The test does ask about that boundary.":
    "Свобода слова не безгранична. Речь, подстрекающая к насилию или расовой ненависти, есть уголовное преступление. Об этой границе тест спрашивает.",
  "What you must know": "Что нужно знать",
  "Key names": "Ключевые имена",
  "No people to learn here — this lesson is about principles, not personalities.":
    "Имён учить здесь не надо — эта лекция о началах, а не о людях.",
  "Key dates and numbers": "Ключевые даты и числа",
  "Equality Act 2010 — the law that sets out the nine protected characteristics. Human Rights Act 1998.":
    "Equality Act 2010 — закон, устанавливающий девять защищённых признаков. Human Rights Act 1998.",
  "Key terms": "Ключевые понятия",
  "Rule of law · individual liberty · tolerance · protected characteristics · discrimination · rights and responsibilities.":
    "Верховенство права · свобода личности · терпимость · защищённые признаки · ущемление · права и обязанности.",
  "In one line: The values are a list you may be asked to complete or spot a gap in, and every right on it has a matching duty.":
    "Одной строкой: ценности — это перечень, который могут попросить дополнить или найти в нём пропуск, и у каждого права в нём есть ответная обязанность.",
  "Now answer these": "Теперь ответь на эти вопросы",
  "Which of these is one of the UK's fundamental values?":
    "Что из этого относится к основным ценностям Соединённого Королевства?",
  "Loyalty to a political party": "Верность политической партии",
  "Compulsory military service": "Обязательная военная служба",
  "Membership of an established church": "Принадлежность к государственной церкви",
  "The rule of law means everyone is subject to the law, including those who govern. The other three are not British values at all.":
    "Верховенство права означает, что закону подчинены все, в том числе правящие. Остальные три к британским ценностям не относятся вовсе.",
  "What does 'individual liberty' mean as a British value?":
    "Что означает «свобода личности» как британская ценность?",
  "Freedom to do anything at all": "Свобода делать что угодно",
  "Freedom to live as you choose, within the law":
    "Свобода жить так, как выберешь, в границах закона",
  "Freedom from paying tax": "Свобода не платить налогов",
  "Freedom to ignore laws you disagree with":
    "Свобода не исполнять законы, с которыми не согласен",
  "Liberty operates inside the law, not outside it. You change laws you disagree with by campaigning and voting.":
    "Свобода действует внутри закона, а не вне его. Законы, с которыми не согласен, меняют доводами и голосованием.",
  "Which of these is NOT one of the nine protected characteristics under the Equality Act 2010?":
    "Что из этого НЕ входит в девять защищённых признаков по Equality Act 2010?",
  "Political opinion": "Политические взгляды",
  "Gender reassignment": "Смена пола",
  "Religion or belief": "Религия или убеждения",
  "Sexual orientation": "Сексуальная ориентация",
  "Political opinion is not a protected characteristic. The nine are age, disability, gender reassignment, marriage and civil partnership, pregnancy and maternity, race, religion or belief, sex, and sexual orientation.":
    "Политические взгляды защищённым признаком не являются. Девять признаков — это возраст, инвалидность, смена пола, брак и гражданское партнёрство, беременность и материнство, раса, религия или убеждения, пол и сексуальная ориентация.",
  "The UK & Geography": "Соединённое Королевство и его география",
  "What is the UK?": "Что такое Соединённое Королевство?",
  "This trips people up constantly, and the test knows it. **The United Kingdom** is England, Scotland, Wales and Northern Ireland. **Great Britain** is only England, Scotland and Wales — it is the island, so Northern Ireland is not part of it.":
    "На этом спотыкаются постоянно, и тест об этом знает. **Соединённое Королевство** — это Англия, Шотландия, Уэльс и Северная Ирландия. **Великобритания** — только Англия, Шотландия и Уэльс: это остров, и Северная Ирландия в него не входит.",
  "The Channel Islands and the Isle of Man are Crown Dependencies. They are NOT part of the UK. They have their own governments and are linked to the Crown, not to Parliament in Westminster.":
    "Нормандские острова и остров Мэн — владения Короны. В состав Соединённого Королевства они НЕ входят. У них свои правительства, и связаны они с Короной, а не с парламентом в Вестминстере.",
  "The four nations and their capitals": "Четыре части страны и их столицы",
  "England — London": "Англия — Лондон",
  "Also the capital of the UK as a whole, and the seat of the UK Parliament. By far the largest nation by population.":
    "Он же столица всего Соединённого Королевства и место его парламента. Самая населённая часть страны, и с большим отрывом.",
  "Scotland — Edinburgh": "Шотландия — Эдинбург",
  "Home of the Scottish Parliament, at Holyrood. Glasgow is Scotland's largest city.":
    "Здесь заседает шотландский парламент, в Холируде. Самый большой город Шотландии — Глазго.",
  "Wales — Cardiff": "Уэльс — Кардифф",
  "Home of the Welsh Parliament, the Senedd. Swansea and Newport are the other large cities.":
    "Здесь заседает валлийский парламент, Senedd. Другие большие города — Суонси и Ньюпорт.",
  "Northern Ireland — Belfast": "Северная Ирландия — Белфаст",
  "Home of the Northern Ireland Assembly, at Stormont. Londonderry/Derry is the second city.":
    "Здесь заседает Ассамблея Северной Ирландии, в Стормонте. Второй город — Лондондерри, он же Дерри.",
  "Other important cities": "Другие важные города",
  "England": "Англия",
  "Birmingham, Manchester, Liverpool, Leeds, Sheffield, Bristol, Newcastle upon Tyne, Oxford and Cambridge.":
    "Бирмингем, Манчестер, Ливерпуль, Лидс, Шеффилд, Бристоль, Ньюкасл-апон-Тайн, Оксфорд и Кембридж.",
  "Scotland": "Шотландия",
  "Glasgow (the largest), Aberdeen, Dundee, Inverness and Stirling.":
    "Глазго (самый большой), Абердин, Данди, Инвернесс и Стерлинг.",
  "Wales": "Уэльс",
  "Swansea, Newport, Bangor, and St Davids — the smallest city in Britain.":
    "Суонси, Ньюпорт, Бангор и Сент-Дэвидс — самый маленький город Британии.",
  "Northern Ireland": "Северная Ирландия",
  "Londonderry/Derry, Lisburn, Newry and Armagh.":
    "Лондондерри, он же Дерри, Лисберн, Ньюри и Арма.",
  "Regions and counties": "Области и графства",
  "England is divided into **counties** — Kent, Yorkshire, Cornwall, Devon, Lancashire and dozens more — and into broader regions such as the **South East, the Midlands, the North West and East Anglia**. Scotland has council areas and historic regions such as the **Highlands, the Lowlands and the Borders**. Northern Ireland has six counties: Antrim, Armagh, Down, Fermanagh, Londonderry and Tyrone.":
    "Англия делится на **графства** — Кент, Йоркшир, Корнуолл, Девон, Ланкашир и ещё десятки — и на более крупные области, такие как **юго-восток, Мидлендс, северо-запад и Восточная Англия**. У Шотландии есть советские округа и исторические края — **Хайлендс, Лоулендс и Границы**. В Северной Ирландии шесть графств: Антрим, Арма, Даун, Фермана, Лондондерри и Тирон.",
  "Rivers": "Реки",
  "Severn": "Северн",
  "The longest river in the UK, at about 220 miles. It rises in Wales and reaches the sea through the Bristol Channel.":
    "Самая длинная река Соединённого Королевства, около 220 миль. Берёт начало в Уэльсе и доходит до моря через Бристольский залив.",
  "Thames": "Темза",
  "Flows through Oxford, Reading and London. The second longest, and the most famous.":
    "Течёт через Оксфорд, Рединг и Лондон. Вторая по длине и самая известная.",
  "Trent, Mersey, Tyne": "Трент, Мерси, Тайн",
  "Major English rivers — the Mersey at Liverpool, the Tyne at Newcastle upon Tyne.":
    "Крупные английские реки: Мерси у Ливерпуля, Тайн у Ньюкасла-апон-Тайн.",
  "Clyde, Tay and Bann": "Клайд, Тей и Банн",
  "The Clyde flows through Glasgow; the Tay is Scotland's longest. In Northern Ireland the Bann is the principal river.":
    "Клайд течёт через Глазго; Тей — самая длинная река Шотландии. В Северной Ирландии главная река — Банн.",
  "Mountains and high ground": "Горы и возвышенности",
  "Ben Nevis — 1,345 m": "Бен-Невис — 1345 м",
  "In the Scottish Highlands. The highest mountain in Scotland and in the whole UK.":
    "В шотландском Хайлендсе. Самая высокая гора Шотландии и всего Соединённого Королевства.",
  "Snowdon (Yr Wyddfa) — 1,085 m": "Сноудон (Yr Wyddfa) — 1085 м",
  "In Snowdonia (Eryri). The highest mountain in Wales.":
    "В Сноудонии (Eryri). Самая высокая гора Уэльса.",
  "Scafell Pike — 978 m": "Скофелл-Пайк — 978 м",
  "In the Lake District. The highest mountain in England.":
    "В Озёрном крае. Самая высокая гора Англии.",
  "Slieve Donard — 850 m": "Слив-Донард — 850 м",
  "In the Mourne Mountains. The highest in Northern Ireland.":
    "В горах Морн. Самая высокая в Северной Ирландии.",
  "Lakes and lochs": "Озёра и лохи",
  "**Lough Neagh** in Northern Ireland is the largest freshwater lake in the whole UK by area. **Loch Ness** and **Loch Lomond** are the best-known Scottish lochs — Loch Lomond is the largest by surface area in Great Britain, while Loch Ness holds the most water. **Windermere** in the Lake District is the largest lake in England.":
    "**Лох-Ней** в Северной Ирландии — самое большое по площади пресное озеро всего Соединённого Королевства. **Лох-Несс** и **Лох-Ломонд** — самые известные шотландские лохи: Лох-Ломонд больше всех по площади в Великобритании, а Лох-Несс вмещает больше всех воды. **Уиндермир** в Озёрном крае — самое большое озеро Англии.",
  "Islands and surrounding seas": "Острова и окружающие моря",
  "Islands": "Острова",
  "The Isle of Wight, the Isles of Scilly, Anglesey, the Hebrides, Orkney and Shetland.":
    "Остров Уайт, острова Силли, Англси, Гебриды, Оркнейские и Шетландские острова.",
  "Not UK islands": "Острова не Соединённого Королевства",
  "The Isle of Man and the Channel Islands are Crown Dependencies — self-governing and linked to the Crown, not part of the UK.":
    "Остров Мэн и Нормандские острова — владения Короны: они управляются сами и связаны с Короной, а в состав Соединённого Королевства не входят.",
  "Seas": "Моря",
  "The North Sea to the east, the English Channel to the south, the Irish Sea to the west, and the Atlantic Ocean to the north and west.":
    "Северное море на востоке, Ла-Манш на юге, Ирландское море на западе и Атлантический океан на севере и западе.",
  "The Channel Tunnel": "Тоннель под Ла-Маншем",
  "Opened in 1994, linking Folkestone in England with Coquelles in France — the UK's only fixed land link to the continent.":
    "Открыт в 1994 году, связывает Фолкстон в Англии с Кокелем во Франции — единственная постоянная сухопутная связь страны с материком.",
  "National Parks and famous places": "Национальные парки и знаменитые места",
  "There are **15 National Parks** across the UK. The best known are the **Lake District, Snowdonia (Eryri), the Peak District, the Yorkshire Dales, Dartmoor, the Cairngorms** and **Loch Lomond and the Trossachs**. Landmarks the test may mention include **Stonehenge**, **Hadrian's Wall**, the **Giant's Causeway** in County Antrim, the **Tower of London**, **Edinburgh Castle** and the **Lake District**.":
    "По всему Соединённому Королевству **15 национальных парков**. Самые известные — **Озёрный край, Сноудония (Eryri), Пик-Дистрикт, Йоркшир-Дейлс, Дартмур, Кернгормс** и **Лох-Ломонд и Троссахс**. Из достопримечательностей тест может назвать **Стоунхендж**, **вал Адриана**, **Дорогу гигантов** в графстве Антрим, **лондонский Тауэр**, **Эдинбургский замок** и **Озёрный край**.",
  "Languages": "Языки",
  "English is spoken throughout. **Welsh** is an official language in Wales and is taught in schools there. **Gaelic** is spoken in parts of Scotland, and **Irish** is spoken in Northern Ireland. Scots and Ulster Scots are also recognised.":
    "По-английски говорят повсюду. **Валлийский** — официальный язык Уэльса, и там его учат в школах. **Гэльский** звучит в отдельных частях Шотландии, **ирландский** — в Северной Ирландии. Признаны также скотс и ольстерский скотс.",
  "Ben Nevis · Snowdon (Yr Wyddfa) · Scafell Pike · Slieve Donard · Severn · Thames · Lough Neagh · Loch Lomond · Windermere.":
    "Бен-Невис · Сноудон (Yr Wyddfa) · Скофелл-Пайк · Слив-Донард · Северн · Темза · Лох-Ней · Лох-Ломонд · Уиндермир.",
  "Channel Tunnel opened 1994. 15 National Parks. Northern Ireland has 6 counties.":
    "Тоннель под Ла-Маншем открыт в 1994 году. 15 национальных парков. В Северной Ирландии 6 графств.",
  "United Kingdom vs Great Britain · Crown Dependency · county · region · saltire · devolved capital.":
    "Соединённое Королевство и Великобритания · владение Короны · графство · область · косой крест · столица с переданными полномочиями.",
  "In one line: Great Britain is the island — three nations. The UK is four. The Isle of Man and the Channel Islands are in neither.":
    "Одной строкой: Великобритания — это остров, три части страны. Соединённое Королевство — четыре. Остров Мэн и Нормандские острова не входят ни туда, ни сюда.",
  "Which of these is in the UK but NOT in Great Britain?":
    "Что из этого входит в Соединённое Королевство, но НЕ в Великобританию?",
  "The Isle of Man": "Остров Мэн",
  "Great Britain is the island: England, Scotland and Wales. The UK adds Northern Ireland. The Isle of Man is in neither — it is a Crown Dependency.":
    "Великобритания — это остров: Англия, Шотландия и Уэльс. Соединённое Королевство добавляет Северную Ирландию. Остров Мэн не входит ни туда, ни сюда — он владение Короны.",
  "What is the longest river in the UK?": "Какая река самая длинная в Соединённом Королевстве?",
  "The Thames": "Темза",
  "The Severn": "Северн",
  "The Trent": "Трент",
  "The Clyde": "Клайд",
  "The Severn, at roughly 220 miles, is longer than the Thames. It rises in Wales and reaches the sea through the Bristol Channel.":
    "Северн, около 220 миль, длиннее Темзы. Он берёт начало в Уэльсе и доходит до моря через Бристольский залив.",
  "Where is Ben Nevis, the highest mountain in the UK?":
    "Где находится Бен-Невис, самая высокая гора Соединённого Королевства?",
  "The Lake District, England": "В Озёрном крае, Англия",
  "Snowdonia, Wales": "В Сноудонии, Уэльс",
  "The Scottish Highlands": "В шотландском Хайлендсе",
  "The Mourne Mountains, Northern Ireland": "В горах Морн, Северная Ирландия",
  "Ben Nevis (1,345 m) is in the Highlands of Scotland. Snowdon is the highest in Wales, Scafell Pike in England, and Slieve Donard in Northern Ireland.":
    "Бен-Невис (1345 м) стоит в Хайлендсе Шотландии. Сноудон — самая высокая в Уэльсе, Скофелл-Пайк в Англии, Слив-Донард в Северной Ирландии.",
  "National Identity & Symbols": "Народная самобытность и символы",
  "Every nation of the UK carries its own saint, flower, flag and symbol — and the Union brings three of the four together in one flag. The test asks which belongs to which, so learn them as four sets rather than as one long list.":
    "У каждой части Соединённого Королевства свой святой, свой цветок, свой флаг и свой знак — а союзный флаг сводит три из четырёх в один. Тест спрашивает, что чему принадлежит, поэтому учи их четырьмя наборами, а не одним длинным списком.",
  "The Union Flag": "Союзный флаг",
  "The **Union Flag** — often called the **Union Jack** — combines three crosses: the red cross of **St George** on white for England, the white diagonal cross (saltire) of **St Andrew** on blue for Scotland, and the red diagonal cross of **St Patrick** on white for Ireland.":
    "**Союзный флаг**, который часто зовут **Union Jack**, соединяет три креста: красный крест **святого Георгия** на белом за Англию, белый косой крест **святого Андрея** на синем за Шотландию и красный косой крест **святого Патрика** на белом за Ирландию.",
  "Why Wales is missing: when the first Union Flag was designed in 1606, Wales had already been joined to England, so it was not treated as a separate kingdom. The Welsh dragon flies on its own flag instead.":
    "Почему Уэльса нет: когда в 1606 году составляли первый союзный флаг, Уэльс уже был присоединён к Англии, и отдельным королевством его не считали. Валлийский дракон летает вместо этого на собственном флаге.",
  "The four national flags": "Четыре флага",
  "St George's Cross — a red cross on a white background.":
    "Крест святого Георгия — красный крест на белом поле.",
  "The Saltire — a white diagonal cross on a blue background.":
    "Салтайр — белый косой крест на синем поле.",
  "Y Ddraig Goch, the Red Dragon, on a green and white field.":
    "Y Ddraig Goch, Красный дракон, на зелёно-белом поле.",
  "St Patrick's Cross — a red diagonal cross on white — is the element carried into the Union Flag.":
    "Крест святого Патрика — красный косой крест на белом — это то, что перешло в союзный флаг.",
  "Patron saints and their days": "Святые покровители и их дни",
  "Four saints, four dates. Two fall in March, and that is the pair people mix up.":
    "Четыре святых, четыре даты. Две приходятся на март, и как раз эту пару и путают.",
  "St David — 1 March": "Святой Давид — 1 марта",
  "Wales. Dewi Sant in Welsh.": "Уэльс. По-валлийски Dewi Sant.",
  "St Patrick — 17 March": "Святой Патрик — 17 марта",
  "Northern Ireland. A bank holiday there.": "Северная Ирландия. Там это нерабочий день.",
  "St George — 23 April": "Святой Георгий — 23 апреля",
  "England.": "Англия.",
  "St Andrew — 30 November": "Святой Андрей — 30 ноября",
  "Scotland. St Andrew's Day is a bank holiday in Scotland.":
    "Шотландия. День святого Андрея — нерабочий день в Шотландии.",
  "National flowers and plants": "Цветы и растения",
  "England — the Rose": "Англия — роза",
  "The Tudor rose, red and white, dating from the end of the Wars of the Roses.":
    "Роза Тюдоров, красно-белая, идущая от конца войны Алой и Белой розы.",
  "Scotland — the Thistle": "Шотландия — чертополох",
  "A spiny purple flower, Scotland's emblem for centuries.":
    "Колючий лиловый цветок, знак Шотландии на протяжении веков.",
  "Wales — the Daffodil": "Уэльс — нарцисс",
  "Worn on St David's Day. The leek is also a Welsh emblem.":
    "Его носят в день святого Давида. Знаком Уэльса служит и лук-порей.",
  "Northern Ireland — the Shamrock": "Северная Ирландия — трилистник",
  "The three-leaved clover, associated with St Patrick.":
    "Трёхлистный клевер, связанный со святым Патриком.",
  "Other national symbols": "Другие знаки",
  "The **Welsh Dragon** appears on the flag of Wales. The **lion** and the **unicorn** support the Royal Coat of Arms — the lion for England, the unicorn for Scotland. The **oak tree** is a long-standing English symbol, and the **poppy** is worn nationally for Remembrance.":
    "**Валлийский дракон** стоит на флаге Уэльса. **Лев** и **единорог** держат королевский герб — лев за Англию, единорог за Шотландию. **Дуб** давно служит английским знаком, а **мак** носят по всей стране в день поминовения.",
  "National anthem": "Государственный гимн",
  "The national anthem of the UK is **God Save the King** (God Save the Queen during a queen's reign). It is played at state occasions and when the monarch appears in public. In sport each nation may use its own song — **Flower of Scotland** for Scotland, **Hen Wlad Fy Nhadau (Land of My Fathers)** for Wales, and **Jerusalem** or the national anthem for England.":
    "Государственный гимн Соединённого Королевства — **God Save the King** (God Save the Queen при правлении королевы). Его играют на государственных торжествах и когда монарх появляется на людях. В спорте каждая часть страны может брать свою песню: **Flower of Scotland** у Шотландии, **Hen Wlad Fy Nhadau (Земля моих отцов)** у Уэльса, **Jerusalem** или государственный гимн у Англии.",
  "Why the words change: they follow the monarch's gender, not the country. Nothing else in the song changes.":
    "Почему слова меняются: они следуют за полом монарха, а не за страной. Больше в песне не меняется ничего.",
  "St David · St Patrick · St George · St Andrew · Y Ddraig Goch (the Red Dragon).":
    "Святой Давид · святой Патрик · святой Георгий · святой Андрей · Y Ddraig Goch (Красный дракон).",
  "St David 1 March · St Patrick 17 March · St George 23 April · St Andrew 30 November. First Union Flag 1606.":
    "Святой Давид — 1 марта · святой Патрик — 17 марта · святой Георгий — 23 апреля · святой Андрей — 30 ноября. Первый союзный флаг — 1606 год.",
  "Union Flag / Union Jack · saltire · patron saint · Tudor rose · thistle · daffodil · leek · shamrock.":
    "Союзный флаг, он же Union Jack · косой крест · святой покровитель · роза Тюдоров · чертополох · нарцисс · лук-порей · трилистник.",
  "In one line: Four saints, four flowers, four dates — and only three crosses in the flag, because Wales was already joined to England.":
    "Одной строкой: четыре святых, четыре цветка, четыре даты — и всего три креста на флаге, потому что Уэльс уже был присоединён к Англии.",
  "Which national flower belongs to Wales?": "Какой цветок принадлежит Уэльсу?",
  "The thistle": "Чертополох",
  "The daffodil": "Нарцисс",
  "The shamrock": "Трилистник",
  "The rose": "Роза",
  "The daffodil is worn in Wales on St David's Day, alongside the leek. The thistle is Scotland's, the shamrock Northern Ireland's, and the rose England's.":
    "Нарцисс носят в Уэльсе в день святого Давида, рядом с луком-пореем. Чертополох принадлежит Шотландии, трилистник — Северной Ирландии, роза — Англии.",
  "Why does the Union Flag contain no Welsh emblem?":
    "Почему на союзном флаге нет валлийского знака?",
  "Wales chose not to join the Union": "Уэльс решил не входить в союз",
  "Wales had already been united with England when the flag was designed":
    "Уэльс уже был соединён с Англией, когда составляли флаг",
  "The dragon was thought too difficult to draw": "Дракона сочли слишком трудным для рисования",
  "Wales joined the UK only in the twentieth century":
    "Уэльс вошёл в Соединённое Королевство лишь в двадцатом веке",
  "Wales was joined to England before the first Union Flag of 1606, so it was not represented as a separate kingdom. It flies the Red Dragon on its own flag.":
    "Уэльс был присоединён к Англии ещё до первого союзного флага 1606 года, и отдельным королевством его не изобразили. На собственном флаге он поднимает Красного дракона.",
  "Early British History": "Ранняя история Британии",
  "A long and illustrious history": "Долгая и славная история",
  "For most of prehistory Britain was not an island. It was joined to the continent by land, and people walked here. Around **10,000 years ago** the land bridge flooded and Britain was cut off.":
    "Бóльшую часть доисторического времени Британия не была островом. Её связывала с материком суша, и люди приходили сюда пешком. Около **10 000 лет назад** этот перешеек затопило, и Британия оказалась отрезана.",
  "Stone Age, Bronze Age and Iron Age": "Каменный век, бронзовый и железный",
  "Stone Age": "Каменный век",
  "Hunter-gatherers first, then the first farmers around 6,000 years ago. They built **Stonehenge** and the tombs at **Skara Brae** in Orkney.":
    "Сначала охотники и собиратели, затем первые земледельцы около 6000 лет назад. Они построили **Стоунхендж** и гробницы **Скара-Брей** на Оркнейских островах.",
  "Bronze Age": "Бронзовый век",
  "From about 4,000 years ago. People learned to make bronze, lived in roundhouses and buried their dead in barrows.":
    "Примерно с 4000 лет назад. Люди научились делать бронзу, жили в круглых домах и хоронили умерших в курганах.",
  "Iron Age": "Железный век",
  "Iron tools and weapons, hill forts such as **Maiden Castle**, and the first British coins. The people are known as the **Celts**.":
    "Железные орудия и оружие, укрепления на холмах, такие как **Мейден-Касл**, и первые британские монеты. Этих людей знают как **кельтов**.",
  "The **Celts** spoke languages from which modern **Welsh, Gaelic and Irish** descend. **Stonehenge** in Wiltshire is the most famous prehistoric monument in Britain and is still a World Heritage Site.":
    "**Кельты** говорили на языках, от которых происходят нынешние **валлийский, гэльский и ирландский**. **Стоунхендж** в Уилтшире — самый известный доисторический памятник Британии и поныне объект всемирного наследия.",
  "The Romans": "Римляне",
  "**Julius Caesar** led an expedition in **55 BC** and it failed — he did not conquer Britain. The successful invasion came almost a century later, under the Emperor **Claudius in AD 43**.":
    "**Юлий Цезарь** привёл сюда поход в **55 году до нашей эры**, и тот не удался — Британию он не покорил. Успешное вторжение пришло почти веком позже, при императоре **Клавдии в 43 году нашей эры**.",
  "55 BC and AD 43 are the pair the test loves. Caesar came and left; Claudius came and stayed. Do not swap them.":
    "55 год до нашей эры и 43 год нашей эры — излюбленная тестом пара. Цезарь пришёл и ушёл; Клавдий пришёл и остался. Не менять их местами.",
  "**Boudicca**, queen of the Iceni in what is now East Anglia, led a famous revolt against Roman rule. Her statue stands on Westminster Bridge in London. The Romans never conquered what is now Scotland, and the Emperor **Hadrian** built **Hadrian's Wall** across the north of England to keep out the tribes he called the Picts. The Romans left Britain in **AD 410** to defend Rome itself.":
    "**Боудикка**, царица иценов в нынешней Восточной Англии, подняла знаменитое восстание против римского владычества. Её изваяние стоит на Вестминстерском мосту в Лондоне. Нынешнюю Шотландию римляне так и не покорили, и император **Адриан** построил через север Англии **вал Адриана**, чтобы не пускать племена, которых называл пиктами. Британию римляне оставили в **410 году нашей эры**, чтобы защищать сам Рим.",
  "The Anglo-Saxons": "Англосаксы",
  "After the Romans left, tribes from northern Europe — the **Angles, Saxons and Jutes** — settled in Britain. Their language became the basis of modern English, and the country took its name from the Angles: *Angle-land*, England. The burial ship at **Sutton Hoo** in Suffolk dates from this period.":
    "После ухода римлян в Британии осели племена из северной Европы — **англы, саксы и юты**. Их язык стал основой нынешнего английского, а страна взяла имя от англов: *Angle-land*, England. Погребальный корабль в **Саттон-Ху** в Суффолке относится к этому времени.",
  "Christian missionaries arrived to convert the Anglo-Saxons — **St Augustine** in the south, who became the first Archbishop of Canterbury, and **St Columba** in Scotland, who founded a monastery on **Iona**.":
    "Обращать англосаксов пришли христианские проповедники — **святой Августин** на юге, ставший первым архиепископом Кентерберийским, и **святой Колумба** в Шотландии, основавший монастырь на **Ионе**.",
  "The Vikings and the Danelaw": "Викинги и Данелаг",
  "Vikings from Denmark and Norway first raided in **AD 789** and later settled. **Alfred the Great**, King of Wessex, defeated them and agreed a boundary: the north and east of England became the **Danelaw**, under Danish law, while Wessex remained English.":
    "Викинги из Дании и Норвегии впервые напали в **789 году нашей эры**, а позже осели здесь. **Альфред Великий**, король Уэссекса, разбил их и уговорился о границе: север и восток Англии стали **Данелагом**, под датским законом, а Уэссекс остался английским.",
  "The Norman Conquest": "Нормандское завоевание",
  "In **1066** **William, Duke of Normandy**, defeated King Harold at the **Battle of Hastings** and became William I — William the Conqueror. It is the last time Britain was successfully invaded, and the date every schoolchild in Britain knows.":
    "В **1066 году** **Вильгельм, герцог Нормандии**, разбил короля Гарольда в **битве при Гастингсе** и стал Вильгельмом I — Вильгельмом Завоевателем. Это последнее удачное вторжение в Британию и дата, которую знает в Британии каждый школьник.",
  "Julius Caesar · Claudius · Hadrian · Boudicca · Alfred the Great · St Augustine · St Columba · William of Normandy.":
    "Юлий Цезарь · Клавдий · Адриан · Боудикка · Альфред Великий · святой Августин · святой Колумба · Вильгельм Нормандский.",
  "55 BC Caesar fails · AD 43 Claudius invades · AD 122 Hadrian's Wall · AD 410 Romans leave · AD 789 first Viking raids · 1066 Hastings.":
    "55 до н. э. — неудача Цезаря · 43 н. э. — вторжение Клавдия · 122 н. э. — вал Адриана · 410 н. э. — уход римлян · 789 н. э. — первые набеги викингов · 1066 — Гастингс.",
  "Celts · Danelaw · Anglo-Saxons · Iceni · Picts · Norman Conquest.":
    "Кельты · Данелаг · англосаксы · ицены · пикты · нормандское завоевание.",
  "In one line: Caesar came and left in 55 BC; Claudius came and stayed in AD 43. That pair is the trap this chapter is built around.":
    "Одной строкой: Цезарь пришёл и ушёл в 55 году до нашей эры; Клавдий пришёл и остался в 43 году нашей эры. На этой паре и построена ловушка всей главы.",
  "Which Roman leader successfully began the conquest of Britain?":
    "Какой римский правитель успешно начал покорение Британии?",
  "Julius Caesar, in 55 BC": "Юлий Цезарь, в 55 году до нашей эры",
  "Claudius, in AD 43": "Клавдий, в 43 году нашей эры",
  "Hadrian, in AD 122": "Адриан, в 122 году нашей эры",
  "Augustus, in AD 1": "Август, в 1 году нашей эры",
  "Caesar's expedition of 55 BC failed. The conquest began under Claudius in AD 43. Hadrian came later and built the wall.":
    "Поход Цезаря 55 года до нашей эры не удался. Покорение началось при Клавдии в 43 году нашей эры. Адриан пришёл позже и построил вал.",
  "What was the Danelaw?": "Чем был Данелаг?",
  "A Viking law code used across all of England":
    "Сводом законов викингов, действовавшим по всей Англии",
  "The part of England under Danish rule after Alfred the Great's settlement":
    "Той частью Англии, что осталась под датской властью по уговору Альфреда Великого",
  "The treaty that ended the Norman Conquest": "Договором, окончившим нормандское завоевание",
  "A tax paid to the Roman Empire": "Налогом, который платили Римской империи",
  "Alfred the Great could not drive the Vikings out entirely, so a boundary was agreed. The north and east — the Danelaw — kept Danish law.":
    "Изгнать викингов целиком Альфред Великий не сумел, и уговорились о границе. Север и восток — Данелаг — сохранили датский закон.",
  "Who led a revolt against the Romans and has a statue on Westminster Bridge?":
    "Кто поднял восстание против римлян и чьё изваяние стоит на Вестминстерском мосту?",
  "Boudicca": "Боудикка",
  "Alfred the Great": "Альфред Великий",
  "St Columba": "Святой Колумба",
  "William Wallace": "Уильям Уоллес",
  "Boudicca was queen of the Iceni in eastern England. Her rebellion against Roman rule made her a lasting national figure.":
    "Боудикка была царицей иценов в восточной Англии. Восстание против римского владычества сделало её непреходящей народной фигурой.",
  "Medieval Britain": "Средневековая Британия",
  "The Middle Ages run from the Norman Conquest to the Tudors. Two themes carry most of the test questions: the slow limiting of the king's power, and the long wars with Wales, Scotland and France.":
    "Средние века тянутся от нормандского завоевания до Тюдоров. Бóльшую часть вопросов теста несут две темы: медленное урезание королевской власти и долгие войны с Уэльсом, Шотландией и Францией.",
  "The Normans": "Норманны",
  "William the Conqueror": "Вильгельм Завоеватель",
  "Won the **Battle of Hastings** in **1066** and became William I. Built castles across England, including the Tower of London.":
    "Выиграл **битву при Гастингсе** в **1066 году** и стал Вильгельмом I. Строил замки по всей Англии, в том числе лондонский Тауэр.",
  "The Domesday Book": "Книга Страшного суда",
  "Ordered by William in **1086** — a survey of who owned what land, and what it was worth, across England.":
    "Заказана Вильгельмом в **1086 году** — опись того, кто какой землёй владеет и сколько она стоит, по всей Англии.",
  "The feudal system": "Феодальный порядок",
  "The king owned all land and granted it to nobles in return for service; peasants worked it in return for protection.":
    "Вся земля принадлежала королю, и он раздавал её знати за службу; крестьяне работали на ней в обмен на защиту.",
  "Magna Carta": "Великая хартия вольностей",
  "**King John** was forced by his barons to agree to **Magna Carta** — the Great Charter — in **1215** at Runnymede. It established that the king was **not above the law** and could not tax as he pleased. It is the foundation of the rule of law in Britain.":
    "Бароны вынудили **короля Иоанна** согласиться на **Великую хартию вольностей** в **1215 году** в Раннимиде. Она установила, что король **не стоит выше закона** и не может облагать податями как ему вздумается. Это основание верховенства права в Британии.",
  "Why Magna Carta still matters: it is the first written statement that a ruler is bound by law. The principle behind it is one of the fundamental values you learned in lesson 1.":
    "Почему Великая хартия важна и сегодня: это первое записанное утверждение, что правитель связан законом. Стоящее за ней начало — одна из основных ценностей из первой лекции.",
  "**Henry II** reformed the courts and quarrelled with **Thomas Becket**, Archbishop of Canterbury, who was murdered in Canterbury Cathedral in 1170. **Richard I**, the Lionheart, spent almost his whole reign abroad on crusade.":
    "**Генрих II** переустроил суды и рассорился с **Томасом Бекетом**, архиепископом Кентерберийским, которого убили в Кентерберийском соборе в 1170 году. **Ричард I**, Львиное Сердце, провёл почти всё своё правление за морем, в крестовом походе.",
  "Wales and Scotland": "Уэльс и Шотландия",
  "**Edward I** conquered **Wales** and built a ring of castles there; the **Statute of Rhuddlan (1284)** annexed Wales to the English Crown. He tried the same in **Scotland** and failed.":
    "**Эдуард I** покорил **Уэльс** и построил там кольцо замков; **Ридланский статут (1284)** присоединил Уэльс к английской Короне. То же он попробовал в **Шотландии** и потерпел неудачу.",
  "Led Scottish resistance to Edward I. Captured and executed in 1305, and remembered as a national hero.":
    "Возглавил шотландское сопротивление Эдуарду I. Схвачен и казнён в 1305 году, остался в памяти народным героем.",
  "Robert the Bruce": "Роберт Брюс",
  "Crowned King of Scots, he defeated the English at the **Battle of Bannockburn in 1314**, securing Scottish independence.":
    "Коронованный королём шотландцев, он разбил англичан в **битве при Бэннокберне в 1314 году** и закрепил независимость Шотландии.",
  "The result": "Итог",
  "Scotland stayed a separate kingdom for nearly 400 more years, until the Act of Union of 1707.":
    "Шотландия оставалась отдельным королевством ещё почти 400 лет, до Акта об унии 1707 года.",
  "The Hundred Years War": "Столетняя война",
  "England and France fought on and off from **1337 to 1453**. The English won famous victories at **Crécy (1346)** and **Agincourt (1415)** under **Henry V**, but by the end had lost all their French lands except Calais.":
    "Англия и Франция воевали с перерывами с **1337 по 1453 год**. Англичане одержали знаменитые победы при **Креси (1346)** и **Азенкуре (1415)** под началом **Генриха V**, но к концу потеряли все свои французские земли, кроме Кале.",
  "The Black Death and the Peasants Revolt": "Чёрная смерть и восстание крестьян",
  "The **Black Death** reached Britain in **1348** and killed roughly a third of the population. So few labourers were left that survivors could demand better pay — the feudal system began to break down. When a poll tax was imposed, the **Peasants Revolt of 1381** broke out, led by **Wat Tyler**.":
    "**Чёрная смерть** дошла до Британии в **1348 году** и унесла примерно треть населения. Работников осталось так мало, что выжившие могли требовать лучшей платы, — феодальный порядок начал рушиться. Когда ввели подушную подать, вспыхнуло **восстание крестьян 1381 года** во главе с **Уотом Тайлером**.",
  "The Wars of the Roses": "Война Алой и Белой розы",
  "A civil war between the **House of Lancaster** (red rose) and the **House of York** (white rose), ending at the **Battle of Bosworth Field in 1485**. Richard III was killed, Henry Tudor won, and the **Tudor rose** — red and white together — was the emblem of the peace that followed.":
    "Междоусобная война **дома Ланкастеров** (алая роза) и **дома Йорков** (белая роза), окончившаяся **битвой при Босворте в 1485 году**. Ричард III погиб, Генрих Тюдор победил, а **роза Тюдоров** — алая и белая вместе — стала знаком наставшего мира.",
  "William the Conqueror · Henry II · Thomas Becket · Richard I · King John · Edward I · William Wallace · Robert the Bruce · Henry V · Wat Tyler.":
    "Вильгельм Завоеватель · Генрих II · Томас Бекет · Ричард I · король Иоанн · Эдуард I · Уильям Уоллес · Роберт Брюс · Генрих V · Уот Тайлер.",
  "1066 Hastings · 1086 Domesday Book · 1215 Magna Carta · 1284 Statute of Rhuddlan · 1314 Bannockburn · 1337–1453 Hundred Years War · 1348 Black Death · 1381 Peasants' Revolt · 1415 Agincourt · 1485 Bosworth Field.":
    "1066 — Гастингс · 1086 — Книга Страшного суда · 1215 — Великая хартия · 1284 — Ридланский статут · 1314 — Бэннокберн · 1337–1453 — Столетняя война · 1348 — Чёрная смерть · 1381 — восстание крестьян · 1415 — Азенкур · 1485 — Босворт.",
  "Feudal system · Magna Carta · Domesday Book · Wars of the Roses · poll tax · barons.":
    "Феодальный порядок · Великая хартия вольностей · Книга Страшного суда · война Алой и Белой розы · подушная подать · бароны.",
  "In one line: Magna Carta in 1215 is the first written statement that a ruler is bound by law — the root of the rule of law you learned in lesson 1.":
    "Одной строкой: Великая хартия 1215 года — первое записанное утверждение, что правитель связан законом, корень того верховенства права из первой лекции.",
  "What did Magna Carta establish in 1215?":
    "Что установила Великая хартия вольностей в 1215 году?",
  "That Parliament could choose the king": "Что парламент может выбирать короля",
  "That the king was subject to the law and could not tax at will":
    "Что король подчинён закону и не может облагать податями по своей воле",
  "That all men could vote": "Что голосовать могут все мужчины",
  "That England and Scotland were united": "Что Англия и Шотландия соединены",
  "Magna Carta bound King John to the law. It did not create Parliament or give anyone the vote, but the principle that no one is above the law starts here.":
    "Великая хартия связала короля Иоанна законом. Парламента она не создала и права голоса никому не дала, но начало, по которому никто не стоит выше закона, идёт отсюда.",
  "Who defeated the English at the Battle of Bannockburn in 1314?":
    "Кто разбил англичан в битве при Бэннокберне в 1314 году?",
  "Edward I": "Эдуард I",
  "Owain Glyndwr": "Оуайн Глиндур",
  "Robert the Bruce won at Bannockburn, securing Scottish independence. Wallace had led the earlier resistance and was executed in 1305.":
    "При Бэннокберне победил Роберт Брюс и закрепил независимость Шотландии. Уоллес возглавлял более раннее сопротивление и был казнён в 1305 году.",
  "Roughly what share of Britain's population died in the Black Death of 1348?":
    "Примерно какая часть населения Британии погибла в Чёрную смерть 1348 года?",
  "About a tenth": "Около десятой части",
  "About a third": "Около трети",
  "About two thirds": "Около двух третей",
  "About a twentieth": "Около двадцатой части",
  "Around a third. The shortage of labour that followed gave surviving peasants bargaining power and helped end the feudal system.":
    "Около трети. Нехватка рабочих рук после этого дала выжившим крестьянам силу торговаться и помогла покончить с феодальным порядком.",
  "The Tudors": "Тюдоры",
  "Five Tudor monarchs in 118 years, and between them they broke with Rome, changed the country's religion three times, and turned England into a naval power.":
    "Пять государей Тюдоров за 118 лет, и вместе они порвали с Римом, трижды меняли веру страны и превратили Англию в морскую державу.",
  "Henry VII and Henry VIII": "Генрих VII и Генрих VIII",
  "**Henry VII** ended the Wars of the Roses and founded the dynasty. His son **Henry VIII** is remembered for his **six wives** and for breaking with the Pope.":
    "**Генрих VII** окончил войну Алой и Белой розы и основал династию. Его сын **Генрих VIII** остался в памяти **шестью жёнами** и разрывом с папой.",
  "Catherine of Aragon": "Екатерина Арагонская",
  "Divorced. Mother of Mary I. The refusal of the Pope to annul this marriage triggered the Reformation in England.":
    "Развод. Мать Марии I. Отказ папы расторгнуть этот брак и запустил Реформацию в Англии.",
  "Anne Boleyn": "Анна Болейн",
  "Beheaded. Mother of Elizabeth I.": "Казнена. Мать Елизаветы I.",
  "Jane Seymour": "Джейн Сеймур",
  "Died — shortly after giving birth to Edward VI, Henry's only surviving son.":
    "Умерла — вскоре после рождения Эдуарда VI, единственного выжившего сына Генриха.",
  "Anne of Cleves": "Анна Клевская",
  "Divorced. A political match that Henry disliked on sight.":
    "Развод. Политический брак, который Генриху не понравился с первого взгляда.",
  "Catherine Howard": "Екатерина Говард",
  "Beheaded.": "Казнена.",
  "Catherine Parr": "Екатерина Парр",
  "Survived him, and outlived Henry by a year.": "Пережила его, на год.",
  "The rhyme British children learn: divorced, beheaded, died; divorced, beheaded, survived. It is the fastest way to keep the six in order.":
    "Считалка, которую учат британские дети: развод, казнь, смерть; развод, казнь, пережила. Быстрее всего так и держать этих шестерых по порядку.",
  "The Reformation": "Реформация",
  "When the Pope refused to annul his first marriage, Henry VIII broke with Rome and made himself **Head of the Church of England**. The **Dissolution of the Monasteries** followed: monasteries were closed and their wealth taken by the Crown. Wales was formally united with England by law during his reign.":
    "Когда папа отказался расторгнуть его первый брак, Генрих VIII порвал с Римом и сделал себя **главой Церкви Англии**. За этим последовал **роспуск монастырей**: их закрывали, а богатства забирала Корона. В его же правление Уэльс законом окончательно соединили с Англией.",
  "Edward VI, Mary I and Elizabeth I": "Эдуард VI, Мария I и Елизавета I",
  "Edward VI": "Эдуард VI",
  "Henry's young son. Strongly Protestant — the Book of Common Prayer dates from his reign. He died at 15.":
    "Юный сын Генриха. Твёрдый протестант — Книга общих молитв идёт от его правления. Умер в пятнадцать лет.",
  "Mary I": "Мария I",
  "A devout Catholic who reversed the Reformation and had Protestants executed, earning the name Bloody Mary.":
    "Ревностная католичка, повернувшая Реформацию вспять и казнившая протестантов, за что и получила прозвище Кровавая Мэри.",
  "Elizabeth I": "Елизавета I",
  "Protestant, and reigned 45 years. She found a middle way in religion that largely held, and never married.":
    "Протестантка, правила 45 лет. Она нашла в делах веры средний путь, который в целом устоял, и замуж так и не вышла.",
  "The Spanish Armada": "Испанская армада",
  "In **1588** Catholic Spain sent a great fleet, the **Armada**, to invade England. It was defeated by the English navy and scattered by storms. The victory made Elizabeth's reputation and established England as a serious naval power.":
    "В **1588 году** католическая Испания послала на Англию великий флот, **Армаду**. Английский флот её разбил, а бури довершили дело. Эта победа создала славу Елизаветы и утвердила Англию как серьёзную морскую державу.",
  "Shakespeare": "Шекспир",
  "**William Shakespeare (1564–1616)** was born in **Stratford-upon-Avon**. He wrote plays and poetry, worked at the **Globe Theatre** in London, and shaped the English language more than any other writer. Famous works include *Hamlet*, *Macbeth*, *Romeo and Juliet* and *A Midsummer Night's Dream*.":
    "**Уильям Шекспир (1564–1616)** родился в **Стратфорде-на-Эйвоне**. Он писал пьесы и стихи, работал в лондонском театре **Глобус** и повлиял на английский язык больше любого другого писателя. Среди известных сочинений *Гамлет*, *Макбет*, *Ромео и Джульетта* и *Сон в летнюю ночь*.",
  "Also in this period: **Mary, Queen of Scots**, a Catholic cousin of Elizabeth, fled to England, was imprisoned for years and eventually executed in 1587. Her son became James VI of Scotland — and then James I of England.":
    "В это же время **Мария, королева Шотландии**, католичка и двоюродная сестра Елизаветы, бежала в Англию, годами сидела в заточении и была казнена в 1587 году. Её сын стал Яковом VI Шотландским — а затем Яковом I Английским.",
  "Henry VII · Henry VIII · his six wives · Edward VI · Mary I · Elizabeth I · Mary, Queen of Scots · William Shakespeare.":
    "Генрих VII · Генрих VIII · его шесть жён · Эдуард VI · Мария I · Елизавета I · Мария, королева Шотландии · Уильям Шекспир.",
  "1485 Tudors begin · 1534 break with Rome · 1587 Mary, Queen of Scots executed · 1588 Spanish Armada · 1564–1616 Shakespeare.":
    "1485 — начало Тюдоров · 1534 — разрыв с Римом · 1587 — казнь Марии, королевы Шотландии · 1588 — Испанская армада · 1564–1616 — Шекспир.",
  "Reformation · Church of England · Dissolution of the Monasteries · annulment · Armada · the Globe Theatre.":
    "Реформация · Церковь Англии · роспуск монастырей · расторжение брака · Армада · театр Глобус.",
  "In one line: Divorced, beheaded, died; divorced, beheaded, survived. The break with Rome started as a marriage dispute, not a change of belief.":
    "Одной строкой: развод, казнь, смерть; развод, казнь, пережила. Разрыв с Римом начался как спор о браке, а не как перемена веры.",
  "Why did Henry VIII break with the Roman Catholic Church?":
    "Почему Генрих VIII порвал с Римско-католической церковью?",
  "He had become a Protestant by conviction": "Он стал протестантом по убеждению",
  "The Pope refused to annul his marriage to Catherine of Aragon":
    "Папа отказался расторгнуть его брак с Екатериной Арагонской",
  "Parliament voted to leave the Church": "Парламент проголосовал за выход из церкви",
  "The Pope excommunicated all English kings": "Папа отлучил всех английских королей",
  "The break began as a dispute over his first marriage. Henry made himself Head of the Church of England so the annulment could be granted at home.":
    "Разрыв начался со спора о его первом браке. Генрих сделал себя главой Церкви Англии, чтобы расторжение можно было получить дома.",
  "What happened to the Spanish Armada in 1588?": "Что случилось с Испанской армадой в 1588 году?",
  "It successfully landed in Kent": "Она успешно высадилась в Кенте",
  "It was defeated by the English navy and scattered by storms":
    "Её разбил английский флот, а бури рассеяли",
  "It turned back before reaching Britain": "Она повернула назад, не дойдя до Британии",
  "It captured Elizabeth I": "Она захватила Елизавету I",
  "The Armada was beaten off by English ships and then wrecked by weather on its way home. The victory made England a naval power.":
    "Армаду отбили английские корабли, а на обратном пути её добила непогода. Эта победа сделала Англию морской державой.",
  "Where was William Shakespeare born?": "Где родился Уильям Шекспир?",
  "London": "Лондон",
  "Stratford-upon-Avon": "Стратфорд-на-Эйвоне",
  "Canterbury": "Кентербери",
  "York": "Йорк",
  "Shakespeare was born in Stratford-upon-Avon in 1564 and worked in London, at the Globe Theatre.":
    "Шекспир родился в Стратфорде-на-Эйвоне в 1564 году, а работал в Лондоне, в театре Глобус.",
  "Stuarts & Civil War": "Стюарты и гражданская война",
  "The seventeenth century is where Parliament wins. A king is executed, a republic is tried and abandoned, and by 1689 it is settled law that the Crown rules with Parliament, not over it.":
    "Семнадцатый век — это век победы парламента. Короля казнят, республику пробуют и оставляют, а к 1689 году законом установлено, что Корона правит вместе с парламентом, а не над ним.",
  "James I and the Gunpowder Plot": "Яков I и Пороховой заговор",
  "When Elizabeth I died childless in 1603, **James VI of Scotland** became **James I of England** — the same man wearing two crowns, though the countries stayed separate. He ordered the **King James Bible**, still the best-known English translation.":
    "Когда в 1603 году Елизавета I умерла бездетной, **Яков VI Шотландский** стал **Яковом I Английским** — один человек в двух коронах, хотя страны остались раздельными. По его приказу сделали **Библию короля Якова**, и поныне самый известный английский перевод.",
  "In **1605** a group of Catholics led by **Guy Fawkes** tried to blow up Parliament and the King. The **Gunpowder Plot** failed, and the country still marks it on **5 November** with bonfires and fireworks.":
    "В **1605 году** горстка католиков во главе с **Гаем Фоксом** попыталась взорвать парламент и короля. **Пороховой заговор** провалился, и страна до сих пор отмечает это **5 ноября** кострами и фейерверками.",
  "Charles I and the English Civil War": "Карл I и английская гражданская война",
  "**Charles I** believed in the **divine right of kings** — that his authority came from God and Parliament could not limit it. He ruled for eleven years without calling Parliament at all. The quarrel became war in **1642**.":
    "**Карл I** верил в **божественное право королей** — что власть его от Бога и парламент её ограничить не может. Одиннадцать лет он правил, вовсе не созывая парламента. В **1642 году** ссора стала войной.",
  "Cavaliers": "Кавалеры",
  "Supporters of the King. Also called Royalists.": "Сторонники короля. Их звали и роялистами.",
  "Roundheads": "Круглоголовые",
  "Supporters of Parliament, named for their short haircuts. Also called Parliamentarians.":
    "Сторонники парламента, прозванные так за короткую стрижку. Их звали и парламентариями.",
  "The outcome": "Исход",
  "Parliament won. Charles I was tried and **executed in 1649** — the only English king ever put to death by his own subjects.":
    "Парламент победил. Карла I судили и **казнили в 1649 году** — единственный английский король, преданный смерти собственными подданными.",
  "Cromwell and the Commonwealth": "Кромвель и Содружество",
  "England became a republic, the **Commonwealth**, with **Oliver Cromwell** as **Lord Protector**. His rule was strict and puritan — theatres closed, Christmas celebrations discouraged. He also campaigned brutally in Ireland. When he died his son could not hold the country together.":
    "Англия стала республикой, **Содружеством**, а **Оливер Кромвель** — **лордом-протектором**. Правил он строго и по-пуритански: театры закрыли, рождественские празднества не поощряли. В Ирландии он воевал жестоко. Когда он умер, его сын страну удержать не смог.",
  "The Restoration": "Реставрация",
  "In **1660** Parliament invited **Charles II** back to the throne — the **Restoration**. His reign saw the **Great Plague of 1665** and the **Great Fire of London in 1666**, and the founding of the **Royal Society**, Britain's oldest scientific institution.":
    "В **1660 году** парламент позвал **Карла II** обратно на трон — это **Реставрация**. На его правление пришлись **великая чума 1665 года** и **великий лондонский пожар 1666 года**, а также основание **Королевского общества**, старейшего научного учреждения Британии.",
  "The Glorious Revolution and the Bill of Rights": "Славная революция и Билль о правах",
  "**James II** was Catholic, and Protestant leaders feared where he would take the country. They invited his Protestant daughter **Mary** and her Dutch husband **William of Orange** to take the throne. William landed in 1688 and James fled without a battle — hence **Glorious Revolution**, a revolution with almost no bloodshed in England.":
    "**Яков II** был католиком, и протестантские вожди боялись, куда он поведёт страну. Они позвали на трон его дочь-протестантку **Марию** и её мужа-голландца **Вильгельма Оранского**. Вильгельм высадился в 1688 году, а Яков бежал без боя — отсюда и **Славная революция**, революция почти без крови в Англии.",
  "**William III and Mary II** ruled jointly. In **1689** the **Bill of Rights** settled the terms: the monarch may not raise taxes or keep an army without Parliament, Parliament must meet regularly, and elections must be free.":
    "**Вильгельм III и Мария II** правили совместно. В **1689 году** **Билль о правах** установил условия: монарх не может ни собирать подати, ни держать войско без парламента, парламент должен собираться постоянно, а выборы должны быть свободными.",
  "Why 1689 is the hinge: everything after it is a constitutional monarchy. The monarch reigns, Parliament governs — the arrangement Britain still has.":
    "Почему 1689 год — поворотная петля: всё после него есть конституционная монархия. Монарх царствует, парламент правит — этот порядок в Британии и поныне.",
  "James I · Guy Fawkes · Charles I · Oliver Cromwell · Charles II · James II · William III · Mary II.":
    "Яков I · Гай Фокс · Карл I · Оливер Кромвель · Карл II · Яков II · Вильгельм III · Мария II.",
  "1603 James I · 1605 Gunpowder Plot · 1642–1651 Civil War · 1649 Charles I executed · 1660 Restoration · 1665 Plague · 1666 Great Fire · 1688 Glorious Revolution · 1689 Bill of Rights.":
    "1603 — Яков I · 1605 — Пороховой заговор · 1642–1651 — гражданская война · 1649 — казнь Карла I · 1660 — Реставрация · 1665 — чума · 1666 — великий пожар · 1688 — Славная революция · 1689 — Билль о правах.",
  "Divine right of kings · Cavaliers · Roundheads · Commonwealth · Lord Protector · Restoration · Bill of Rights.":
    "Божественное право королей · кавалеры · круглоголовые · Содружество · лорд-протектор · Реставрация · Билль о правах.",
  "In one line: 1689 is the hinge: after the Bill of Rights the monarch reigns and Parliament governs. Everything since is a constitutional monarchy.":
    "Одной строкой: 1689 год — поворотная петля: после Билля о правах монарх царствует, а правит парламент. Всё с тех пор есть конституционная монархия.",
  "Who were the Roundheads in the English Civil War?":
    "Кем были круглоголовые в английской гражданской войне?",
  "Supporters of the King": "Сторонниками короля",
  "Supporters of Parliament": "Сторонниками парламента",
  "Scottish rebels": "Шотландскими бунтовщиками",
  "Catholic plotters": "Католическими заговорщиками",
  "Roundheads were the Parliamentarians, named for their short hair. The Cavaliers, or Royalists, supported Charles I.":
    "Круглоголовые были парламентариями, прозванными так за короткие волосы. Кавалеры, они же роялисты, стояли за Карла I.",
  "What did the Bill of Rights of 1689 establish?": "Что установил Билль о правах 1689 года?",
  "That everyone over 21 could vote": "Что голосовать могут все старше 21 года",
  "That the monarch could not raise taxes or keep an army without Parliament":
    "Что монарх не может ни собирать подати, ни держать войско без парламента",
  "That Catholics could not be prosecuted": "Что католиков нельзя преследовать по суду",
  "The Bill of Rights made the monarchy constitutional: no taxation or standing army without Parliament, regular parliaments, and free elections.":
    "Билль о правах сделал монархию конституционной: никаких податей и постоянного войска без парламента, постоянные созывы парламента и свободные выборы.",
  "Why is the events of 1688 called the Glorious Revolution?":
    "Почему события 1688 года называют Славной революцией?",
  "It restored the monarchy after a republic": "Она вернула монархию после республики",
  "William of Orange took the throne with almost no bloodshed in England":
    "Вильгельм Оранский занял трон почти без пролития крови в Англии",
  "It gave the vote to ordinary people": "Она дала право голоса простым людям",
  "It ended the Hundred Years War": "Она окончила Столетнюю войну",
  "James II fled rather than fight, so the change of monarch happened without a battle in England. The Restoration of 1660 is the separate event that brought back the monarchy.":
    "Яков II предпочёл бегство бою, и смена монарха в Англии обошлась без сражения. Реставрация 1660 года — отдельное событие, вернувшее монархию.",
  "Britain 1700–1900": "Британия 1700–1900",
  "Two centuries in which Britain becomes one kingdom, then the first industrial nation, then the largest empire in history — and in which a long argument about slavery and about the vote begins to be won.":
    "Два столетия, за которые Британия становится одним королевством, потом первой промышленной страной, потом крупнейшей империей в истории — и за которые долгий спор о рабстве и о праве голоса начинают выигрывать.",
  "The Act of Union and the Jacobites": "Акт об унии и якобиты",
  "The **Act of Union in 1707** joined the parliaments of England and Scotland into the **Kingdom of Great Britain**, governed from Westminster. A second **Act of Union in 1801** added Ireland, creating the United Kingdom.":
    "**Акт об унии 1707 года** соединил парламенты Англии и Шотландии в **Королевство Великобритания**, управляемое из Вестминстера. Второй **Акт об унии 1801 года** добавил Ирландию и создал Соединённое Королевство.",
  "The **Jacobites** wanted the Stuart line restored. **Bonnie Prince Charlie** — Charles Edward Stuart — landed in Scotland in 1745, raised an army, and was crushed at the **Battle of Culloden in 1746**, the last battle fought on British soil.":
    "**Якобиты** хотели вернуть линию Стюартов. **Красавчик принц Чарли** — Карл Эдуард Стюарт — высадился в Шотландии в 1745 году, собрал войско и был разбит в **битве при Куллодене в 1746 году**, последнем сражении на британской земле.",
  "The Industrial Revolution": "Промышленный переворот",
  "Britain was the first country to industrialise. Machines replaced hand tools, factories replaced workshops, and people moved from the countryside into fast-growing cities such as Manchester, Birmingham and Glasgow.":
    "Британия первой в мире стала промышленной. Машины сменили ручные орудия, фабрики сменили мастерские, а люди двинулись из деревни в быстро растущие города — Манчестер, Бирмингем, Глазго.",
  "The steam engine": "Паровая машина",
  "**James Watt** improved it decisively. Steam powered factories, mines, ships and trains.":
    "**Джеймс Уатт** улучшил её решающим образом. Пар двигал фабрики, шахты, суда и поезда.",
  "Railways": "Железные дороги",
  "**George Stephenson** built the Rocket. Britain built the first passenger railways, and the network transformed travel and trade.":
    "**Джордж Стефенсон** построил «Ракету». Британия проложила первые пассажирские железные дороги, и эта сеть перевернула и поездки, и торговлю.",
  "Factories": "Фабрики",
  "Textiles led the way. Conditions were harsh, and child labour was common until reforming laws restricted it.":
    "Впереди шло текстильное дело. Условия были тяжёлые, а детский труд обычным, пока преобразовательные законы его не ограничили.",
  "Engineering": "Инженерное дело",
  "**Isambard Kingdom Brunel** built the Great Western Railway, bridges, tunnels and steamships — the most famous engineer of the age.":
    "**Изамбард Кингдом Брюнель** построил Большую Западную железную дорогу, мосты, тоннели и пароходы — самый знаменитый инженер своего века.",
  "Empire, slavery and abolition": "Империя, рабство и его отмена",
  "The **British Empire** grew until it covered around a quarter of the world. Its wealth came partly from the **slave trade**, in which British ships carried enslaved Africans to the colonies.":
    "**Британская империя** разрослась примерно на четверть мира. Богатство её отчасти шло от **работорговли**, в которой британские корабли везли обращённых в рабство африканцев в колонии.",
  "Two dates, often confused. **1807** abolished the slave TRADE — carrying and selling. **1833** abolished SLAVERY itself throughout the Empire. The Abolition Act freed those already enslaved.":
    "Две даты, которые часто путают. **1807 год** отменил РАБОТОРГОВЛЮ — перевозку и продажу. **1833 год** отменил САМО РАБСТВО по всей империи. Акт об отмене освободил тех, кто уже был в рабстве.",
  "**William Wilberforce** led the parliamentary campaign against the trade, and the Quakers were prominent among the campaigners.":
    "**Уильям Уилберфорс** вёл в парламенте борьбу против работорговли, и заметное место среди борцов занимали квакеры.",
  "Wars and revolutions": "Войны и перевороты",
  "American Revolution": "Американская революция",
  "The thirteen American colonies declared independence in **1776** and won it. Britain lost its most valuable settler colonies.":
    "Тринадцать американских колоний объявили независимость в **1776 году** и добились её. Британия потеряла самые ценные свои переселенческие колонии.",
  "Napoleonic Wars": "Наполеоновские войны",
  "Britain fought France under Napoleon for over twenty years.":
    "Британия воевала с Францией при Наполеоне больше двадцати лет.",
  "Trafalgar, 1805": "Трафальгар, 1805",
  "**Admiral Nelson** destroyed the French and Spanish fleets at sea and was killed in the battle. Nelson's Column stands in Trafalgar Square.":
    "**Адмирал Нельсон** уничтожил французский и испанский флоты на море и был убит в бою. Колонна Нельсона стоит на Трафальгарской площади.",
  "Waterloo, 1815": "Ватерлоо, 1815",
  "The **Duke of Wellington** finally defeated Napoleon on land, ending the wars.":
    "**Герцог Веллингтон** окончательно разбил Наполеона на суше, чем и кончил эти войны.",
  "Victorian Britain": "Викторианская Британия",
  "**Queen Victoria** reigned from **1837 to 1901** — 64 years, the second longest reign in British history. Britain was at the height of its industrial and imperial power. The **Great Exhibition of 1851** in the Crystal Palace displayed it to the world.":
    "**Королева Виктория** правила с **1837 по 1901 год** — 64 года, второе по длительности правление в британской истории. Британия стояла на вершине промышленного и имперского могущества. **Всемирная выставка 1851 года** в Хрустальном дворце показала это миру.",
  "Reform and reformers": "Преобразования и преобразователи",
  "The **Reform Act of 1832** began widening the vote, and further acts in 1867 and 1884 extended it — though at the end of Victoria's reign no woman could vote and many working men still could not. Laws limited working hours and child labour, and free primary schooling was introduced.":
    "**Акт о реформе 1832 года** начал расширять право голоса, а акты 1867 и 1884 годов расширили его дальше — хотя к концу правления Виктории голосовать не могла ни одна женщина и многие рабочие мужчины тоже. Законы ограничили рабочее время и детский труд, а начальное обучение сделали бесплатным.",
  "Florence Nightingale": "Флоренс Найтингейл",
  "Founded modern nursing during the Crimean War and set up the first nursing school, at St Thomas' Hospital in London.":
    "Заложила нынешнее сестринское дело во время Крымской войны и открыла первую школу медсестёр при больнице святого Фомы в Лондоне.",
  "Charles Darwin": "Чарльз Дарвин",
  "Published *On the Origin of Species* in 1859, setting out evolution by natural selection.":
    "Издал в 1859 году *Происхождение видов*, изложив учение о развитии путём естественного отбора.",
  "Charles Dickens": "Чарльз Диккенс",
  "Novelist whose books — *Oliver Twist*, *Great Expectations* — exposed the poverty of industrial Britain.":
    "Романист, чьи книги — *Оливер Твист*, *Большие надежды* — выставили напоказ нищету промышленной Британии.",
  "Emmeline Pankhurst": "Эммелин Панкхерст",
  "Later in the century she began organising the campaign that became the suffragette movement.":
    "Позже в том же веке она начала собирать движение, которое стало движением суфражисток.",
  "Bonnie Prince Charlie · James Watt · George Stephenson · Isambard Kingdom Brunel · William Wilberforce · Admiral Nelson · the Duke of Wellington · Queen Victoria · Florence Nightingale · Charles Darwin.":
    "Красавчик принц Чарли · Джеймс Уатт · Джордж Стефенсон · Изамбард Кингдом Брюнель · Уильям Уилберфорс · адмирал Нельсон · герцог Веллингтон · королева Виктория · Флоренс Найтингейл · Чарльз Дарвин.",
  "1707 Act of Union · 1746 Culloden · 1776 American independence · 1801 Union with Ireland · 1805 Trafalgar · 1807 slave trade abolished · 1815 Waterloo · 1832 Reform Act · 1833 slavery abolished · 1837–1901 Victoria · 1851 Great Exhibition · 1859 Origin of Species.":
    "1707 — Акт об унии · 1746 — Куллоден · 1776 — независимость Америки · 1801 — уния с Ирландией · 1805 — Трафальгар · 1807 — отмена работорговли · 1815 — Ватерлоо · 1832 — Акт о реформе · 1833 — отмена рабства · 1837–1901 — Виктория · 1851 — Всемирная выставка · 1859 — «Происхождение видов».",
  "Jacobites · Industrial Revolution · British Empire · abolition · Reform Act · Crystal Palace.":
    "Якобиты · промышленный переворот · Британская империя · отмена рабства · Акт о реформе · Хрустальный дворец.",
  "In one line: 1807 ended the trade in people; 1833 ended slavery itself. Two dates, twenty-six years apart, and the test asks which is which.":
    "Одной строкой: 1807 год покончил с торговлей людьми, 1833 — с самим рабством. Две даты, двадцать шесть лет между ними, и тест спрашивает, какая из них какая.",
  "Which Act abolished slavery itself throughout the British Empire?":
    "Какой акт отменил само рабство по всей Британской империи?",
  "The Act of 1807": "Акт 1807 года",
  "The Act of 1833": "Акт 1833 года",
  "The Reform Act of 1832": "Акт о реформе 1832 года",
  "The Act of Union of 1801": "Акт об унии 1801 года",
  "1807 ended the slave trade — the buying and carrying of people. 1833 abolished slavery itself and freed those already enslaved.":
    "1807 год покончил с работорговлей — покупкой и перевозкой людей. 1833 отменил само рабство и освободил тех, кто уже был в неволе.",
  "Who commanded the British fleet at the Battle of Trafalgar in 1805?":
    "Кто вёл британский флот в Трафальгарском сражении 1805 года?",
  "The Duke of Wellington": "Герцог Веллингтон",
  "Admiral Nelson": "Адмирал Нельсон",
  "James Watt": "Джеймс Уатт",
  "Bonnie Prince Charlie": "Красавчик принц Чарли",
  "Nelson won at Trafalgar and was killed there. Wellington was the general who beat Napoleon on land at Waterloo in 1815.":
    "Нельсон победил при Трафальгаре и там же погиб. Веллингтон был тем полководцем, который разбил Наполеона на суше при Ватерлоо в 1815 году.",
  "How long did Queen Victoria reign?": "Сколько правила королева Виктория?",
  "From 1837 to 1901": "С 1837 по 1901 год",
  "From 1801 to 1837": "С 1801 по 1837 год",
  "From 1707 to 1760": "С 1707 по 1760 год",
  "From 1901 to 1936": "С 1901 по 1936 год",
  "Victoria reigned 64 years, from 1837 to 1901 — the second longest reign, after Elizabeth II.":
    "Виктория правила 64 года, с 1837 по 1901, — второе по длительности правление, после Елизаветы II.",
  "Britain 1900–Present": "Британия с 1900 года до наших дней",
  "Two world wars, votes for women, the founding of the NHS, the end of empire and the arrival of the Britain you live in now.":
    "Две мировые войны, право голоса для женщин, основание NHS, конец империи и появление той Британии, в которой живёшь сейчас.",
  "The First World War": "Первая мировая война",
  "Britain entered the war in **1914** and it ended on **11 November 1918**. Around a million from Britain and its Empire were killed. That date is why **Remembrance Day** falls on 11 November and why poppies are worn.":
    "Британия вступила в войну в **1914 году**, а кончилась она **11 ноября 1918 года**. Погибло около миллиона человек из Британии и её империи. Из-за этой даты **День поминовения** и приходится на 11 ноября, и потому носят маки.",
  "Votes for women": "Право голоса для женщин",
  "The **suffragettes**, led by **Emmeline Pankhurst**, campaigned for the vote — with protests, hunger strikes and imprisonment.":
    "**Суфражистки** во главе с **Эммелин Панкхерст** боролись за право голоса — протестами, голодовками и тюрьмой.",
  "Two dates again. **1918**: women over 30 who met a property qualification got the vote. **1928**: women got the vote on the same terms as men, at 21. The gap of ten years is a favourite question.":
    "Снова две даты. **1918**: право голоса получили женщины старше 30 лет, отвечавшие имущественному условию. **1928**: женщины получили право голоса на тех же условиях, что мужчины, с 21 года. Разрыв в десять лет — излюбленный вопрос.",
  "The Second World War": "Вторая мировая война",
  "Britain declared war on Germany in **1939** after the invasion of Poland. **Winston Churchill** became Prime Minister in 1940 and led the country through it.":
    "Британия объявила войну Германии в **1939 году**, после нападения на Польшу. **Уинстон Черчилль** стал премьер-министром в 1940 году и провёл страну через неё.",
  "Dunkirk, 1940": "Дюнкерк, 1940",
  "British and Allied troops were evacuated from France by warships and hundreds of small civilian boats.":
    "Британские и союзные войска вывозили из Франции военные корабли и сотни малых гражданских судов.",
  "The Battle of Britain, 1940": "Битва за Британию, 1940",
  "The RAF held off the German air force, preventing invasion. Churchill: never was so much owed by so many to so few.":
    "Королевские военно-воздушные силы сдержали немецкую авиацию и не дали случиться вторжению. Черчилль сказал: никогда ещё столь многие не были обязаны столь немногим.",
  "The Blitz": "Блиц",
  "German bombing of London and other cities — Coventry, Liverpool, Glasgow, Belfast — night after night.":
    "Немецкие бомбёжки Лондона и других городов — Ковентри, Ливерпуля, Глазго, Белфаста — ночь за ночью.",
  "D-Day, 6 June 1944": "День «Д», 6 июня 1944",
  "Allied forces landed in Normandy, opening the campaign that liberated western Europe.":
    "Союзные войска высадились в Нормандии, открыв поход, освободивший западную Европу.",
  "The war in Europe ended on **VE Day, 8 May 1945**; the war against Japan ended that August. **Alan Turing** and the codebreakers at **Bletchley Park** broke German ciphers and shortened the war.":
    "Война в Европе кончилась **8 мая 1945 года, в День победы в Европе**; война с Японией кончилась в августе того же года. **Алан Тьюринг** и дешифровальщики в **Блетчли-Парке** взломали немецкие шифры и укоротили войну.",
  "The Welfare State and the NHS": "Государство всеобщего благосостояния и NHS",
  "The **Beveridge Report of 1942** set out a plan to tackle what it called the five giants — want, disease, ignorance, squalor and idleness. After the war the Labour government built the **welfare state**, and in **1948 Aneurin Bevan** founded the **National Health Service**, free at the point of use.":
    "**Доклад Бевериджа 1942 года** изложил замысел борьбы с тем, что он назвал пятью великанами: нуждой, болезнью, невежеством, убожеством и праздностью. После войны лейбористское правительство построило **государство всеобщего благосостояния**, а в **1948 году Эньюрин Бивен** основал **Национальную службу здравоохранения**, бесплатную в месте обращения.",
  "Empire to Commonwealth": "От империи к Содружеству",
  "After 1945 the colonies became independent, one after another — this is **decolonisation**. **India and Pakistan in 1947** came first, then most of Africa and the Caribbean. Many of the new countries joined the **Commonwealth**, a voluntary association of independent states, now around 56 members. The monarch is its Head, but the Commonwealth has no power over its members.":
    "После 1945 года колонии одна за другой становились независимыми — это **деколонизация**. Первыми пришли **Индия и Пакистан в 1947 году**, затем бóльшая часть Африки и Карибов. Многие новые страны вошли в **Содружество**, добровольное объединение независимых государств, сегодня около 56 членов. Монарх стоит во главе его, но власти над членами Содружество не имеет.",
  "Immigration and modern Britain": "Переселение и нынешняя Британия",
  "Britain invited workers from the Caribbean, India, Pakistan and elsewhere to help rebuild after the war — the ship **Empire Windrush** arrived in **1948** and gave its name to that generation. Later arrivals came from Uganda, Eastern Europe and around the world. Britain today is a diverse, multi-faith society.":
    "Британия позвала работников с Карибов, из Индии, Пакистана и других мест, чтобы отстроиться после войны, — корабль **Empire Windrush** пришёл в **1948 году** и дал имя целому поколению. Позже приезжали из Уганды, Восточной Европы и со всего света. Британия сегодня — общество разнородное и многоверное.",
  "Europe and Brexit": "Европа и брексит",
  "The UK joined the **European Economic Community in 1973**, which became the **European Union**. In a referendum in **June 2016** the UK voted to leave, and it formally left on **31 January 2020**.":
    "Соединённое Королевство вошло в **Европейское экономическое сообщество в 1973 году**, которое стало **Европейским союзом**. На референдуме в **июне 2016 года** оно проголосовало за выход и формально вышло **31 января 2020 года**.",
  "Other landmarks: **Margaret Thatcher** became the first woman Prime Minister in **1979**; the **Good Friday Agreement of 1998** brought peace to Northern Ireland; devolved parliaments opened in Scotland and Wales in **1999**; London hosted the **Olympic Games in 2012**; **Queen Elizabeth II** died in **2022** after 70 years, and **King Charles III** succeeded her.":
    "Другие вехи: **Маргарет Тэтчер** стала первой женщиной-премьером в **1979 году**; **Соглашение Страстной пятницы 1998 года** принесло мир Северной Ирландии; парламенты с переданными полномочиями открылись в Шотландии и Уэльсе в **1999 году**; Лондон принял **Олимпийские игры в 2012 году**; **королева Елизавета II** умерла в **2022 году** после 70 лет правления, и её сменил **король Карл III**.",
  "Emmeline Pankhurst · Winston Churchill · Clement Attlee · William Beveridge · Aneurin Bevan · Alan Turing · Margaret Thatcher · Elizabeth II · Charles III.":
    "Эммелин Панкхерст · Уинстон Черчилль · Клемент Эттли · Уильям Беверидж · Эньюрин Бивен · Алан Тьюринг · Маргарет Тэтчер · Елизавета II · Карл III.",
  "1914–1918 First World War · 1918 and 1928 votes for women · 1939–1945 Second World War · 1940 Battle of Britain · 6 June 1944 D-Day · 8 May 1945 VE Day · 1947 India and Pakistan · 1948 NHS and Windrush · 1973 joined EEC · 1979 Thatcher · 1998 Good Friday Agreement · 1999 devolution · 2012 Olympics · 2016 referendum · 31 January 2020 left the EU · 2022 Charles III.":
    "1914–1918 — Первая мировая война · 1918 и 1928 — право голоса для женщин · 1939–1945 — Вторая мировая война · 1940 — битва за Британию · 6 июня 1944 — день «Д» · 8 мая 1945 — День победы в Европе · 1947 — Индия и Пакистан · 1948 — NHS и Windrush · 1973 — вступление в ЕЭС · 1979 — Тэтчер · 1998 — Соглашение Страстной пятницы · 1999 — передача полномочий · 2012 — Олимпиада · 2016 — референдум · 31 января 2020 — выход из ЕС · 2022 — Карл III.",
  "Suffragettes · the Blitz · welfare state · NHS · Commonwealth · decolonisation · Brexit.":
    "Суфражистки · блиц · государство всеобщего благосостояния · NHS · Содружество · деколонизация · брексит.",
  "In one line: 1918 gave the vote to women over 30 with property; 1928 made it equal at 21. Ten years apart, and a favourite question.":
    "Одной строкой: 1918 год дал голос женщинам старше 30 лет с имуществом; 1928 уравнял всех с 21 года. Десять лет между ними, и это излюбленный вопрос.",
  "In which year did all women in the UK get the vote on the same terms as men?":
    "В каком году все женщины Соединённого Королевства получили право голоса на равных с мужчинами?",
  "1918": "1918",
  "1928": "1928",
  "1945": "1945",
  "1969": "1969",
  "1918 gave the vote to women over 30 who met a property qualification. Full equality at 21 came in 1928.":
    "1918 год дал голос женщинам старше 30 лет, отвечавшим имущественному условию. Полное равенство с 21 года пришло в 1928.",
  "Who founded the National Health Service in 1948?":
    "Кто основал Национальную службу здравоохранения в 1948 году?",
  "Winston Churchill": "Уинстон Черчилль",
  "Aneurin Bevan": "Эньюрин Бивен",
  "William Beveridge": "Уильям Беверидж",
  "Clement Attlee": "Клемент Эттли",
  "Bevan, as Health Minister, founded the NHS. Beveridge wrote the 1942 report that set out the plan, and Attlee was the Prime Minister of the government that carried it out.":
    "NHS основал Бивен, будучи министром здравоохранения. Беверидж написал доклад 1942 года, изложивший замысел, а Эттли был премьер-министром правительства, которое его исполнило.",
  "When did the UK formally leave the European Union?":
    "Когда Соединённое Королевство формально вышло из Европейского союза?",
  "June 2016": "В июне 2016 года",
  "31 January 2020": "31 января 2020 года",
  "31 December 2020": "31 декабря 2020 года",
  "1 January 2021": "1 января 2021 года",
  "The referendum was in June 2016; the UK formally left on 31 January 2020. A transition period ran to the end of that year.":
    "Референдум был в июне 2016 года; формально страна вышла 31 января 2020. Переходный срок тянулся до конца того же года.",
  "Important Dates & Timeline": "Важные даты и лента времени",
  "Every date in the six history lessons, in one place and in order. Read this last, and then read it again the night before the test — most history questions are really date questions wearing a costume.":
    "Все даты шести исторических лекций, в одном месте и по порядку. Читай это последним, а потом ещё раз накануне теста: большинство вопросов по истории — это переодетые вопросы о датах.",
  "Why a timeline earns its own lesson: the test rarely asks what happened. It asks WHEN, or which of two similar events came first. Order is the thing worth drilling.":
    "Почему лента времени заслуживает отдельной лекции: тест редко спрашивает, что произошло. Он спрашивает КОГДА или какое из двух похожих событий было раньше. Отрабатывать стоит именно порядок.",
  "Before the Norman Conquest": "До нормандского завоевания",
  "c. 6000 BC": "ок. 6000 до н. э.",
  "Britain is cut off from the continent as the land bridge floods.":
    "Британия отрезана от материка: перешеек затоплен.",
  "c. 2500 BC": "ок. 2500 до н. э.",
  "Stonehenge is built. Skara Brae in Orkney is occupied.":
    "Строят Стоунхендж. В Скара-Брей на Оркнейских островах живут люди.",
  "55 BC": "55 до н. э.",
  "Julius Caesar's expedition — and it fails.": "Поход Юлия Цезаря — и он не удаётся.",
  "AD 43": "43 н. э.",
  "Claudius invades. The Roman conquest of Britain begins.":
    "Вторгается Клавдий. Начинается римское покорение Британии.",
  "AD 122": "122 н. э.",
  "Hadrian's Wall is begun across northern England.":
    "Начинают строить вал Адриана через север Англии.",
  "AD 410": "410 н. э.",
  "The Romans leave Britain.": "Римляне покидают Британию.",
  "AD 789": "789 н. э.",
  "The first Viking raids.": "Первые набеги викингов.",
  "AD 878": "878 н. э.",
  "Alfred the Great defeats the Vikings; the Danelaw is agreed.":
    "Альфред Великий разбивает викингов; уговариваются о Данелаге.",
  "1066 to 1500": "От 1066 до 1500",
  "1066": "1066",
  "Battle of Hastings. William the Conqueror takes the throne.":
    "Битва при Гастингсе. Вильгельм Завоеватель занимает трон.",
  "1086": "1086",
  "The Domesday Book.": "Книга Страшного суда.",
  "1215": "1215",
  "Magna Carta — King John accepts that the king is bound by law.":
    "Великая хартия вольностей — король Иоанн признаёт, что король связан законом.",
  "1284": "1284",
  "The Statute of Rhuddlan annexes Wales to the English Crown.":
    "Ридланский статут присоединяет Уэльс к английской Короне.",
  "1314": "1314",
  "Robert the Bruce wins at Bannockburn.": "Роберт Брюс побеждает при Бэннокберне.",
  "1337–1453": "1337–1453",
  "The Hundred Years War with France.": "Столетняя война с Францией.",
  "1348": "1348",
  "The Black Death reaches Britain.": "Чёрная смерть доходит до Британии.",
  "1381": "1381",
  "The Peasants Revolt.": "Восстание крестьян.",
  "1415": "1415",
  "Henry V wins at Agincourt.": "Генрих V побеждает при Азенкуре.",
  "1485": "1485",
  "Battle of Bosworth Field ends the Wars of the Roses. The Tudors begin.":
    "Битва при Босворте оканчивает войну Алой и Белой розы. Начинаются Тюдоры.",
  "The Tudors and Stuarts": "Тюдоры и Стюарты",
  "1534": "1534",
  "Henry VIII breaks with Rome and becomes Head of the Church of England.":
    "Генрих VIII рвёт с Римом и становится главой Церкви Англии.",
  "1588": "1588",
  "The Spanish Armada is defeated.": "Испанскую армаду разбивают.",
  "1603": "1603",
  "James VI of Scotland becomes James I of England.":
    "Яков VI Шотландский становится Яковом I Английским.",
  "1605": "1605",
  "The Gunpowder Plot fails — remembered every 5 November.":
    "Пороховой заговор проваливается — о нём вспоминают каждое 5 ноября.",
  "1642–1651": "1642–1651",
  "The English Civil War.": "Английская гражданская война.",
  "1649": "1649",
  "Charles I is executed. The Commonwealth begins under Cromwell.":
    "Карла I казнят. Начинается Содружество при Кромвеле.",
  "1660": "1660",
  "The Restoration — Charles II returns.": "Реставрация — возвращается Карл II.",
  "1666": "1666",
  "The Great Fire of London.": "Великий лондонский пожар.",
  "1688": "1688",
  "The Glorious Revolution. William and Mary take the throne.":
    "Славная революция. Трон занимают Вильгельм и Мария.",
  "1689": "1689",
  "The Bill of Rights makes the monarchy constitutional.":
    "Билль о правах делает монархию конституционной.",
  "1700 to 1900": "От 1700 до 1900",
  "1707": "1707",
  "The Act of Union joins England and Scotland as Great Britain.":
    "Акт об унии соединяет Англию и Шотландию в Великобританию.",
  "1746": "1746",
  "Battle of Culloden — the last battle fought on British soil.":
    "Битва при Куллодене — последнее сражение на британской земле.",
  "1776": "1776",
  "The American colonies declare independence.": "Американские колонии объявляют независимость.",
  "1801": "1801",
  "The Act of Union with Ireland creates the United Kingdom.":
    "Акт об унии с Ирландией создаёт Соединённое Королевство.",
  "1805": "1805",
  "Nelson wins at Trafalgar.": "Нельсон побеждает при Трафальгаре.",
  "1807": "1807",
  "The slave trade is abolished.": "Работорговлю отменяют.",
  "1815": "1815",
  "Wellington defeats Napoleon at Waterloo.": "Веллингтон разбивает Наполеона при Ватерлоо.",
  "1832": "1832",
  "The Reform Act begins widening the vote.": "Акт о реформе начинает расширять право голоса.",
  "1833": "1833",
  "Slavery itself is abolished across the Empire.": "Само рабство отменяют по всей империи.",
  "1837–1901": "1837–1901",
  "The reign of Queen Victoria.": "Правление королевы Виктории.",
  "1851": "1851",
  "The Great Exhibition.": "Всемирная выставка.",
  "1859": "1859",
  "Darwin publishes On the Origin of Species.": "Дарвин издаёт «Происхождение видов».",
  "1900 to today": "От 1900 до наших дней",
  "1914–1918": "1914–1918",
  "The First World War. It ends on 11 November 1918.":
    "Первая мировая война. Кончается 11 ноября 1918 года.",
  "Women over 30 with property win the vote.":
    "Женщины старше 30 лет, имеющие имущество, добиваются права голоса.",
  "Women win the vote on equal terms with men, at 21.":
    "Женщины добиваются права голоса на равных с мужчинами, с 21 года.",
  "1939–1945": "1939–1945",
  "The Second World War. VE Day is 8 May 1945.":
    "Вторая мировая война. День победы в Европе — 8 мая 1945 года.",
  "1940": "1940",
  "The Battle of Britain and the Blitz. Churchill becomes Prime Minister.":
    "Битва за Британию и блиц. Черчилль становится премьер-министром.",
  "1944": "1944",
  "D-Day, 6 June — the Normandy landings.": "День «Д», 6 июня — высадка в Нормандии.",
  "1947": "1947",
  "India and Pakistan become independent.": "Индия и Пакистан становятся независимыми.",
  "1948": "1948",
  "The NHS is founded. The Empire Windrush arrives.": "Основана NHS. Приходит Empire Windrush.",
  "1973": "1973",
  "The UK joins the European Economic Community.":
    "Соединённое Королевство входит в Европейское экономическое сообщество.",
  "1979": "1979",
  "Margaret Thatcher becomes the first woman Prime Minister.":
    "Маргарет Тэтчер становится первой женщиной-премьером.",
  "1998": "1998",
  "The Good Friday Agreement.": "Соглашение Страстной пятницы.",
  "1999": "1999",
  "The Scottish Parliament and Welsh Assembly open.":
    "Открываются шотландский парламент и валлийская ассамблея.",
  "2012": "2012",
  "London hosts the Olympic Games.": "Лондон принимает Олимпийские игры.",
  "2016": "2016",
  "The referendum votes to leave the EU.": "Референдум голосует за выход из ЕС.",
  "2020": "2020",
  "The UK formally leaves the EU on 31 January.":
    "Соединённое Королевство формально выходит из ЕС 31 января.",
  "2022": "2022",
  "Queen Elizabeth II dies; King Charles III succeeds.":
    "Умирает королева Елизавета II; наследует король Карл III.",
  "Every name in the six history lessons appears here in date order rather than by topic.":
    "Все имена шести исторических лекций стоят здесь по датам, а не по темам.",
  "The whole course in order: c. 2500 BC Stonehenge · 55 BC · AD 43 · AD 410 · 1066 · 1215 · 1314 · 1348 · 1485 · 1588 · 1649 · 1689 · 1707 · 1805 · 1833 · 1918 · 1928 · 1945 · 1948 · 2020 · 2022.":
    "Весь курс по порядку: ок. 2500 до н. э. — Стоунхендж · 55 до н. э. · 43 н. э. · 410 н. э. · 1066 · 1215 · 1314 · 1348 · 1485 · 1588 · 1649 · 1689 · 1707 · 1805 · 1833 · 1918 · 1928 · 1945 · 1948 · 2020 · 2022.",
  "Chronology · century · BC and AD · reign · era.":
    "Хронология · век · до нашей эры и нашей эры · правление · эпоха.",
  "In one line: Most history questions are really date questions. Learn the order and the 'which came first' questions answer themselves.":
    "Одной строкой: большинство вопросов по истории — это на деле вопросы о датах. Выучи порядок, и вопросы «что было раньше» ответят на себя сами.",
  "Put these in order: Magna Carta, the Battle of Hastings, the Spanish Armada.":
    "Расставь по порядку: Великая хартия вольностей, битва при Гастингсе, Испанская армада.",
  "Hastings, Magna Carta, Armada": "Гастингс, Великая хартия, Армада",
  "Magna Carta, Hastings, Armada": "Великая хартия, Гастингс, Армада",
  "Hastings, Armada, Magna Carta": "Гастингс, Армада, Великая хартия",
  "Armada, Hastings, Magna Carta": "Армада, Гастингс, Великая хартия",
  "Hastings 1066, Magna Carta 1215, the Armada 1588. The Norman Conquest comes first, and everything medieval sits between it and the Tudors.":
    "Гастингс — 1066, Великая хартия — 1215, Армада — 1588. Нормандское завоевание идёт первым, а всё средневековое лежит между ним и Тюдорами.",
  "Which came first: the founding of the NHS, or the end of the Second World War?":
    "Что было раньше: основание NHS или конец Второй мировой войны?",
  "The NHS, in 1945": "NHS, в 1945 году",
  "The end of the war, in 1945 — the NHS followed in 1948":
    "Конец войны, в 1945 году, — NHS появилась в 1948",
  "They happened in the same year": "Это случилось в один и тот же год",
  "The NHS was founded before the war began": "NHS основали ещё до начала войны",
  "The war in Europe ended on 8 May 1945. The NHS opened three years later, in 1948, built by the government elected after the war.":
    "Война в Европе кончилась 8 мая 1945 года. NHS открылась тремя годами позже, в 1948, и построило её правительство, избранное после войны.",
  "Which of these happened in 1707?": "Что из этого произошло в 1707 году?",
  "The Act of Union joining England and Scotland": "Акт об унии, соединивший Англию и Шотландию",
  "The Bill of Rights": "Билль о правах",
  "The Battle of Culloden": "Битва при Куллодене",
  "The Act of Union with Ireland": "Акт об унии с Ирландией",
  "1707 created the Kingdom of Great Britain. The Bill of Rights was 1689, Culloden 1746, and the union with Ireland 1801.":
    "1707 год создал Королевство Великобритания. Билль о правах был в 1689, Куллоден в 1746, а уния с Ирландией в 1801.",
  "The Monarchy": "Монархия",
  "Government, the law and your role": "Управление, право и твоя роль",
  "The UK is a **constitutional monarchy**. The monarch is **Head of State**, but does not govern. Parliament makes the law and the Prime Minister runs the government. The monarch's role is formal, ceremonial and strictly non-political.":
    "Соединённое Королевство есть **конституционная монархия**. Монарх — **глава государства**, но не правит. Законы творит парламент, а правительством ведает премьер-министр. Роль монарха обрядовая, представительная и строго вне политики.",
  "What the monarch actually does": "Что монарх делает на самом деле",
  "Royal Assent": "Королевское одобрение",
  "Every Act of Parliament needs the monarch's signature to become law. It has not been refused since 1708 — it is a formality.":
    "Каждому акту парламента для превращения в закон нужна подпись монарха. С 1708 года в ней ни разу не отказали — это обряд.",
  "State Opening of Parliament": "Торжественное открытие парламента",
  "The monarch opens each parliamentary year and reads a speech setting out the government's plans. The speech is written by the government, not the monarch.":
    "Монарх открывает каждый парламентский год и читает речь, излагающую замыслы правительства. Пишет эту речь правительство, а не монарх.",
  "Appointing the Prime Minister": "Назначение премьер-министра",
  "The monarch invites the leader who can command a majority in the House of Commons to form a government.":
    "Монарх зовёт составить правительство того вождя, который может опереться на большинство в палате общин.",
  "Ceremonial and representative": "Обряды и представительство",
  "State visits, honours, and representing the UK abroad. Also Head of the Commonwealth.":
    "Государственные визиты, награды и представительство страны за границей. А также глава Содружества.",
  "The monarch must be politically neutral. They do not vote, do not express political opinions in public, and act on the advice of ministers. That neutrality is the whole point of the office.":
    "Монарх обязан быть вне политики. Он не голосует, не высказывает на людях политических взглядов и действует по совету министров. В этой беспристрастности и весь смысл его должности.",
  "Succession and coronation": "Наследование и коронация",
  "The throne passes by **hereditary succession**. Since a change in the law in 2013, the eldest child inherits regardless of sex — an older sister is no longer passed over for a younger brother. A **coronation** is the ceremony that crowns a new monarch; it takes place at **Westminster Abbey** and is conducted by the **Archbishop of Canterbury**. The monarch succeeds immediately on the death of the previous one — the coronation comes later.":
    "Трон переходит по **наследству**. С изменения закона в 2013 году наследует старший ребёнок независимо от пола — старшую сестру больше не обходят ради младшего брата. **Коронация** — обряд венчания нового монарха; проходит она в **Вестминстерском аббатстве**, а совершает её **архиепископ Кентерберийский**. Монарх наследует сразу после смерти предыдущего — коронация бывает позже.",
  "The Royal Family": "Королевская семья",
  "**King Charles III** became monarch in **September 2022** on the death of his mother, **Queen Elizabeth II**, who had reigned for **70 years** — the longest in British history. The heir to the throne is **Prince William, Prince of Wales**. Members of the Royal Family carry out public duties and support charities.":
    "**Король Карл III** стал монархом в **сентябре 2022 года** после смерти своей матери, **королевы Елизаветы II**, правившей **70 лет** — дольше всех в британской истории. Наследник трона — **принц Уильям, принц Уэльский**. Члены королевской семьи исполняют общественные обязанности и поддерживают благотворительность.",
  "Monarchs worth knowing": "Монархи, которых стоит знать",
  "William I": "Вильгельм I",
  "1066 — the Norman Conquest.": "1066 — нормандское завоевание.",
  "Henry VIII": "Генрих VIII",
  "Six wives, and the break with Rome.": "Шесть жён и разрыв с Римом.",
  "45 years, the Armada, and the Elizabethan age.":
    "45 лет правления, Армада и елизаветинский век.",
  "Charles I": "Карл I",
  "Executed in 1649 after the Civil War.": "Казнён в 1649 году после гражданской войны.",
  "Victoria": "Виктория",
  "1837–1901, the height of empire.": "1837–1901, вершина империи.",
  "Elizabeth II": "Елизавета II",
  "1952–2022, the longest reign in British history.":
    "1952–2022, самое долгое правление в британской истории.",
  "Elizabeth II · Charles III · Prince William · the Archbishop of Canterbury.":
    "Елизавета II · Карл III · принц Уильям · архиепископ Кентерберийский.",
  "Elizabeth II reigned 1952–2022, 70 years. Charles III from September 2022. Royal Assent last refused 1708. Succession law changed 2013.":
    "Елизавета II правила с 1952 по 2022 год, 70 лет. Карл III — с сентября 2022. В королевском одобрении последний раз отказали в 1708 году. Закон о наследовании изменён в 2013.",
  "Constitutional monarchy · Head of State · Royal Assent · State Opening of Parliament · coronation · hereditary succession · Head of the Commonwealth.":
    "Конституционная монархия · глава государства · королевское одобрение · торжественное открытие парламента · коронация · наследование трона · глава Содружества.",
  "In one line: The monarch reigns but does not govern, and must stay politically neutral. Royal Assent is a formality, not a veto.":
    "Одной строкой: монарх царствует, но не правит, и обязан оставаться вне политики. Королевское одобрение есть обряд, а не вето.",
  "What is Royal Assent?": "Что такое королевское одобрение?",
  "The monarch's power to reject any law": "Власть монарха отвергнуть любой закон",
  "The monarch's formal signature that turns a bill into an Act of Parliament":
    "Обрядовая подпись монарха, превращающая законопроект в акт парламента",
  "The ceremony that crowns a new monarch": "Обряд венчания нового монарха",
  "The monarch's approval of a new Prime Minister": "Одобрение монархом нового премьер-министра",
  "Royal Assent is the final formal step in making a law. It has not been withheld since 1708, which is what makes the monarchy constitutional rather than ruling.":
    "Королевское одобрение — последний обрядовый шаг в создании закона. В нём не отказывали с 1708 года, и именно это делает монархию конституционной, а не правящей.",
  "Who reigned for 70 years and died in 2022?": "Кто правил 70 лет и умер в 2022 году?",
  "Queen Victoria": "Королева Виктория",
  "Queen Elizabeth II": "Королева Елизавета II",
  "Queen Elizabeth I": "Королева Елизавета I",
  "Queen Mary II": "Королева Мария II",
  "Elizabeth II reigned from 1952 to 2022 — the longest reign in British history. Victoria's 64 years is second.":
    "Елизавета II правила с 1952 по 2022 год — самое долгое правление в британской истории. Виктория с её 64 годами вторая.",
  "Government & Parliament": "Правительство и парламент",
  "Parliament sits at the **Palace of Westminster** in London. It has two chambers — the House of Commons and the House of Lords — and the monarch. Almost every test question about government comes down to knowing which of the two chambers does what.":
    "Парламент заседает в **Вестминстерском дворце** в Лондоне. У него две палаты — палата общин и палата лордов — и монарх. Почти каждый вопрос теста об управлении сводится к тому, чтобы знать, что делает которая из двух палат.",
  "The two Houses": "Две палаты",
  "House of Commons": "Палата общин",
  "**650 elected MPs**, one for each constituency. This is the chamber that matters: it makes law, controls tax and spending, and the government must hold its confidence.":
    "**650 избранных депутатов**, по одному от каждого округа. Это та палата, которая решает: она творит законы, распоряжается податями и расходами, и правительство обязано держать её доверие.",
  "House of Lords": "Палата лордов",
  "**Not elected.** Members are appointed — life peers, some hereditary peers, and senior bishops of the Church of England. It revises and scrutinises bills and can delay them, but cannot block the Commons indefinitely.":
    "**Не избирается.** Её членов назначают — пожизненные пэры, часть наследственных пэров и старшие епископы Церкви Англии. Она правит законопроекты и разбирает их, может задержать, но перекрыть общинам дорогу навсегда не может.",
  "Government, Cabinet and Opposition": "Правительство, кабинет и оппозиция",
  "The Prime Minister": "Премьер-министр",
  "The leader of the party that can command a majority in the Commons. Lives and works at **10 Downing Street**.":
    "Вождь партии, способной опереться на большинство в палате общин. Живёт и работает на **Даунинг-стрит, 10**.",
  "The Cabinet": "Кабинет",
  "About 20 senior ministers chosen by the PM, each running a department — Chancellor of the Exchequer, Home Secretary, Foreign Secretary and so on.":
    "Около 20 старших министров, выбранных премьером, каждый во главе своего ведомства — канцлер казначейства, министр внутренних дел, министр иностранных дел и так далее.",
  "The Opposition": "Оппозиция",
  "The largest party not in government. Its leader is **Leader of the Opposition** and heads a shadow cabinet that challenges each minister.":
    "Крупнейшая партия вне правительства. Её вождь — **лидер оппозиции**, он возглавляет теневой кабинет, который спорит с каждым министром.",
  "The Speaker": "Спикер",
  "Chairs debates in the Commons, keeps order and is politically neutral — the Speaker gives up party allegiance.":
    "Ведёт прения в палате общин, держит порядок и стоит вне политики — спикер отказывается от партийной принадлежности.",
  "Elections and voting": "Выборы и голосование",
  "A **general election** must be held at least every **five years**. The UK is divided into **constituencies**, and each elects one MP by **first past the post** — whoever gets the most votes wins the seat.":
    "**Всеобщие выборы** должны проходить не реже чем раз в **пять лет**. Страна поделена на **округа**, и каждый избирает одного депутата **по большинству**: мандат берёт тот, у кого голосов больше всех.",
  "Who can vote": "Кто может голосовать",
  "You must be **18 or over** and on the **electoral register**. British, Irish and qualifying Commonwealth citizens may vote in general elections.":
    "Нужно быть **не моложе 18 лет** и состоять в **списке избирателей**. На всеобщих выборах голосуют граждане Британии, Ирландии и отвечающие условиям граждане стран Содружества.",
  "How to vote": "Как голосовать",
  "In person at a polling station, by post, or by proxy. Photo ID is now required at polling stations in Great Britain.":
    "Лично на участке, по почте или через доверенное лицо. На участках в Великобритании теперь требуют удостоверение с фотографией.",
  "By-elections": "Довыборы",
  "Held in a single constituency when its MP dies or resigns between general elections.":
    "Проходят в одном округе, когда его депутат умирает или уходит между всеобщими выборами.",
  "Political parties": "Политические партии",
  "The main UK-wide parties are Conservative, Labour and the Liberal Democrats. There are also national parties such as the SNP in Scotland and Plaid Cymru in Wales.":
    "Главные общегосударственные партии — консерваторы, лейбористы и либеральные демократы. Есть и партии частей страны: SNP в Шотландии, Plaid Cymru в Уэльсе.",
  "How a law is made": "Как творится закон",
  "A proposal is a **bill**. It is debated and voted on in the Commons, then in the Lords, then returns to the Commons if the Lords amended it. Once both agree, it goes to the monarch for **Royal Assent** and becomes an **Act of Parliament**.":
    "Предложение называется **законопроектом**. Его обсуждают и голосуют в палате общин, потом в палате лордов, а если лорды его поправили — он возвращается к общинам. Когда обе палаты согласны, он идёт к монарху за **королевским одобрением** и становится **актом парламента**.",
  "Local government": "Местное управление",
  "**Councils** run local services — schools, refuse collection, housing, roads, libraries and planning. Councillors are elected, usually for four years, and councils are funded by **council tax** and by central government. Many areas also elect a **mayor**.":
    "**Советы** ведают местными службами — школами, вывозом мусора, жильём, дорогами, библиотеками и застройкой. Советников избирают, обычно на четыре года, а живут советы на **council tax**, местный налог, и на деньги из центра. Во многих местах избирают ещё и **мэра**.",
  "Why the civil service is separate: civil servants carry out government policy but are politically neutral and stay in post when the government changes. Ministers come and go; the machine does not.":
    "Почему государственная служба стоит особняком: служащие исполняют политику правительства, но остаются вне политики и не уходят при смене правительства. Министры приходят и уходят; сама машина — нет.",
  "The Prime Minister · the Chancellor of the Exchequer · the Home Secretary · the Speaker · the Leader of the Opposition.":
    "Премьер-министр · канцлер казначейства · министр внутренних дел · спикер · лидер оппозиции.",
  "650 MPs. General elections at least every 5 years. Voting age 18. Councillors usually elected for 4 years.":
    "650 депутатов. Всеобщие выборы не реже чем раз в 5 лет. Голосуют с 18 лет. Советников обычно избирают на 4 года.",
  "House of Commons · House of Lords · constituency · first past the post · by-election · Cabinet · shadow cabinet · bill · Act of Parliament · civil service · council tax.":
    "Палата общин · палата лордов · избирательный округ · выборы по большинству · довыборы · кабинет · теневой кабинет · законопроект · акт парламента · государственная служба · council tax.",
  "In one line: The Commons is elected and holds the power; the Lords is appointed and can only revise and delay. That split answers most questions here.":
    "Одной строкой: палату общин избирают, и власть у неё; палату лордов назначают, и она может лишь править и задерживать. Это разделение и отвечает на большинство здешних вопросов.",
  "How many MPs are there in the House of Commons?": "Сколько депутатов в палате общин?",
  "500": "500",
  "650": "650",
  "800": "800",
  "1,000": "1000",
  "650 MPs, one for each constituency, each elected by first past the post.":
    "650 депутатов, по одному от каждого округа, и каждый избран по большинству голосов.",
  "How do people become members of the House of Lords?":
    "Как люди становятся членами палаты лордов?",
  "They are elected by constituencies": "Их избирают округа",
  "They are appointed, or sit as hereditary peers or bishops":
    "Их назначают, либо они сидят там как наследственные пэры или епископы",
  "They are chosen by the House of Commons": "Их выбирает палата общин",
  "They are selected at random, like a jury": "Их отбирают по жребию, как присяжных",
  "The Lords is not elected. Most members are life peers appointed for their expertise or service, alongside some hereditary peers and senior Church of England bishops.":
    "Палату лордов не избирают. Большинство её членов — пожизненные пэры, назначенные за знания или заслуги, рядом с частью наследственных пэров и старшими епископами Церкви Англии.",
  "What is the maximum period between UK general elections?":
    "Каков наибольший срок между всеобщими выборами в стране?",
  "Three years": "Три года",
  "Four years": "Четыре года",
  "Five years": "Пять лет",
  "Seven years": "Семь лет",
  "At least one general election must be held every five years, though one can be called sooner.":
    "Всеобщие выборы должны проходить не реже раза в пять лет, хотя назначить их можно и раньше.",
  "Devolution": "Передача полномочий",
  "**Devolution** means powers handed from the UK Parliament in Westminster to elected bodies in Scotland, Wales and Northern Ireland. It began after referendums in the late 1990s, and the three bodies first sat in **1999**.":
    "**Передача полномочий** означает, что власть из парламента страны в Вестминстере отдана избираемым собраниям Шотландии, Уэльса и Северной Ирландии. Началось это после референдумов конца 1990-х, и все три собрания впервые сели в **1999 году**.",
  "The three devolved bodies": "Три собрания с переданными полномочиями",
  "Scottish Parliament": "Шотландский парламент",
  "At **Holyrood** in Edinburgh. Members are **MSPs**. It has the widest powers of the three, including some power over income tax.":
    "В **Холируде** в Эдинбурге. Его члены зовутся **MSP**. Полномочий у него больше, чем у двух других, включая некоторую власть над подоходным налогом.",
  "Senedd Cymru": "Senedd Cymru",
  "The **Welsh Parliament**, in Cardiff. Members are **MSs**. It was called the National Assembly for Wales until 2020.":
    "**Валлийский парламент**, в Кардиффе. Его члены зовутся **MS**. До 2020 года он назывался Национальной ассамблеей Уэльса.",
  "Northern Ireland Assembly": "Ассамблея Северной Ирландии",
  "At **Stormont** in Belfast. Members are **MLAs**. Created by the **Good Friday Agreement of 1998**, and power is shared between communities.":
    "В **Стормонте** в Белфасте. Её члены зовутся **MLA**. Создана **Соглашением Страстной пятницы 1998 года**, и власть в ней делят между общинами.",
  "What the devolved governments control": "Чем ведают правительства с переданными полномочиями",
  "Broadly the same list in each nation: **health, education, housing, transport, policing (in Scotland and Northern Ireland), the environment, agriculture** and local government. This is why the NHS, schools and university fees genuinely differ between the four nations.":
    "В целом один и тот же перечень в каждой части страны: **здравоохранение, образование, жильё, транспорт, полиция (в Шотландии и Северной Ирландии), окружающая среда, сельское хозяйство** и местное управление. Именно поэтому NHS, школы и плата за университет в четырёх частях страны и вправду разные.",
  "What stays with the UK Parliament": "Что остаётся за парламентом страны",
  "Westminster keeps the matters that must be decided for the whole country — these are called **reserved matters**: **defence, foreign policy, immigration and nationality, the currency, most taxation, and national security**.":
    "Вестминстер держит те дела, которые решаются для всей страны, — их зовут **зарезервированными**: **оборона, внешняя политика, переселение и гражданство, валюта, бóльшая часть податей и государственная безопасность**.",
  "England has no devolved parliament of its own. English matters are decided by the UK Parliament, which is why the two are easy to confuse.":
    "У Англии собственного парламента с переданными полномочиями нет. Английские дела решает парламент страны, оттого эти два легко и спутать.",
  "Holyrood · the Senedd · Stormont.": "Холируд · Senedd · Стормонт.",
  "Referendums 1997. All three bodies first sat in 1999. Good Friday Agreement 1998. Senedd renamed 2020.":
    "Референдумы 1997 года. Все три собрания впервые сели в 1999. Соглашение Страстной пятницы — 1998. Senedd переименован в 2020.",
  "Devolution · devolved matter · reserved matter · MSP · MS · MLA · power sharing.":
    "Передача полномочий · переданное дело · зарезервированное дело · MSP · MS · MLA · раздел власти.",
  "In one line: Health, education and housing are devolved; defence, foreign policy, immigration and the currency are reserved to Westminster. England has no devolved parliament.":
    "Одной строкой: здравоохранение, образование и жильё переданы; оборона, внешняя политика, переселение и валюта оставлены Вестминстеру. У Англии своего такого парламента нет.",
  "Which of these is a reserved matter, kept by the UK Parliament rather than devolved?":
    "Что из этого зарезервировано за парламентом страны, а не передано?",
  "Health": "Здравоохранение",
  "Education": "Образование",
  "Defence and foreign policy": "Оборона и внешняя политика",
  "Housing": "Жильё",
  "Defence, foreign policy, immigration, the currency and national security are reserved to Westminster. Health, education and housing are devolved.":
    "Оборона, внешняя политика, переселение, валюта и государственная безопасность оставлены Вестминстеру. Здравоохранение, образование и жильё переданы.",
  "What are members of the Scottish Parliament called?":
    "Как зовутся члены шотландского парламента?",
  "MPs": "MP",
  "MSPs": "MSP",
  "MSs": "MS",
  "MLAs": "MLA",
  "MSPs in Scotland, MSs in the Senedd in Wales, MLAs in the Northern Ireland Assembly, and MPs at Westminster.":
    "MSP в Шотландии, MS в Senedd в Уэльсе, MLA в Ассамблее Северной Ирландии и MP в Вестминстере.",
  "Law & Justice": "Право и правосудие",
  "The **rule of law** means everyone is subject to the law — including the government, the police and the monarch's ministers. Judges are independent of government, and no one may be punished except by a court.":
    "**Верховенство права** означает, что закону подчинены все — в том числе правительство, полиция и министры монарха. Судьи независимы от правительства, и наказать человека может только суд.",
  "Criminal law and civil law": "Уголовное право и гражданское",
  "Criminal law": "Уголовное право",
  "Offences against society — theft, assault, dangerous driving. The state prosecutes, and the punishment can be a fine, community service or prison.":
    "Посягательства на общество — кража, нападение, опасная езда. Обвиняет государство, а наказанием может быть штраф, работы на общее благо или тюрьма.",
  "Civil law": "Гражданское право",
  "Disputes between people or organisations — debt, employment, housing, discrimination. The remedy is usually compensation or an order, not punishment.":
    "Споры между людьми или организациями — долг, работа, жильё, ущемление прав. Исходом обычно бывает возмещение или предписание, а не наказание.",
  "The courts": "Суды",
  "Magistrates' Court": "Мировой суд",
  "Handles most criminal cases in England, Wales and Northern Ireland. **Magistrates** are usually unpaid volunteers from the local community, not professional judges. In Scotland the equivalent is the Justice of the Peace Court.":
    "Разбирает бóльшую часть уголовных дел в Англии, Уэльсе и Северной Ирландии. **Магистраты** обычно не профессиональные судьи, а добровольцы из местных жителей, работающие без платы. В Шотландии тому же отвечает суд мировых судей.",
  "Crown Court": "Королевский суд",
  "Serious criminal cases, heard before a **judge and a jury of 12**. In Scotland serious cases go to the Sheriff Court or the High Court, where a jury has 15 members.":
    "Тяжкие уголовные дела, разбираемые перед **судьёй и коллегией из 12 присяжных**. В Шотландии тяжкие дела идут в шерифский суд или в Высокий суд, где присяжных пятнадцать.",
  "County Court": "Суд графства",
  "Civil cases — debt, contracts, personal injury, family matters.":
    "Гражданские дела — долги, договоры, увечья, семейные дела.",
  "The Supreme Court": "Верховный суд",
  "The highest court of appeal in the UK, sitting in London. It replaced the House of Lords in that role in 2009.":
    "Высший суд обжалования в стране, заседает в Лондоне. В этой роли он сменил палату лордов в 2009 году.",
  "Who is who": "Кто есть кто",
  "Judges": "Судьи",
  "Independent of government. They interpret the law and make sure trials are fair. A government act found unlawful by a judge must be put right.":
    "Независимы от правительства. Они толкуют закон и следят, чтобы разбирательство было справедливым. Действие правительства, признанное судьёй незаконным, обязаны исправить.",
  "Solicitors": "Солиситоры",
  "Give legal advice, prepare cases and represent clients, usually in the lower courts.":
    "Дают правовые советы, готовят дела и представляют доверителей, обычно в нижних судах.",
  "Barristers": "Барристеры",
  "Specialist advocates who argue cases in the higher courts.":
    "Особые защитники, ведущие дела в высших судах.",
  "The police": "Полиция",
  "Keep order, prevent and investigate crime. They must obey the law themselves, and complaints are investigated independently.":
    "Держит порядок, предупреждает и расследует преступления. Сама она обязана соблюдать закон, а жалобы на неё разбирают независимо.",
  "Jury service": "Служба присяжным",
  "If you are on the electoral register and aged **18 to 70**, you may be summoned for **jury service**. It is a duty, not a request — you must attend unless you are excused. A jury decides the facts: whether the accused is guilty or not guilty. The judge decides the law and the sentence.":
    "Если ты в списке избирателей и тебе от **18 до 70 лет**, тебя могут вызвать на **службу присяжным**. Это обязанность, а не просьба: явиться нужно, если тебя не освободили. Присяжные решают о фактах: виновен обвиняемый или нет. Судья решает о праве и о наказании.",
  "Legal aid": "Правовая помощь за счёт казны",
  "**Legal aid** is public funding that pays for legal advice or representation for people who cannot afford it. It exists so that the right to a fair trial is real rather than theoretical.":
    "**Legal aid** — это деньги казны, которыми оплачивают правовой совет или представительство тем, кому это не по средствам. Существует она затем, чтобы право на справедливый суд было настоящим, а не отвлечённым.",
  "Why juries are drawn at random: a jury of ordinary people, chosen by lot rather than appointed, is what stops the state deciding guilt on its own. That is the rule of law in practice.":
    "Почему присяжных берут по жребию: коллегия обычных людей, отобранных жребием, а не назначенных, и не даёт государству решать о вине в одиночку. Вот верховенство права на деле.",
  "Magistrates · judges · solicitors · barristers · the Supreme Court.":
    "Магистраты · судьи · солиситоры · барристеры · Верховный суд.",
  "Jury of 12 in England, Wales and Northern Ireland; 15 in Scotland. Jury service 18–70. Supreme Court took over from the Lords in 2009. Age of criminal responsibility 12 in Scotland, 10 elsewhere.":
    "Коллегия из 12 присяжных в Англии, Уэльсе и Северной Ирландии; 15 в Шотландии. Служба присяжным с 18 до 70 лет. Верховный суд принял дела у палаты лордов в 2009 году. Возраст уголовной ответственности — 12 лет в Шотландии, 10 в остальных частях страны.",
  "Rule of law · criminal law · civil law · Magistrates' Court · Crown Court · County Court · legal aid · jury service.":
    "Верховенство права · уголовное право · гражданское право · мировой суд · королевский суд · суд графства · legal aid · служба присяжным.",
  "In one line: The jury decides the facts, the judge decides the law and the sentence — and everyone, including the government, is subject to both.":
    "Одной строкой: присяжные решают о фактах, судья — о праве и наказании, и подчинены обоим все, включая правительство.",
  "How many people sit on a jury in a Crown Court in England and Wales?":
    "Сколько человек входит в коллегию присяжных королевского суда в Англии и Уэльсе?",
  "10": "10",
  "12": "12",
  "15": "15",
  "20": "20",
  "12 in England, Wales and Northern Ireland. Scotland is the exception, with 15.":
    "12 в Англии, Уэльсе и Северной Ирландии. Шотландия — исключение, там 15.",
  "Who normally hears minor criminal cases in England and Wales?":
    "Кто обычно разбирает мелкие уголовные дела в Англии и Уэльсе?",
  "A Crown Court judge and jury": "Судья королевского суда с присяжными",
  "Magistrates, who are usually unpaid volunteers":
    "Магистраты, обычно добровольцы, работающие без платы",
  "A panel of barristers": "Коллегия барристеров",
  "Magistrates handle the great majority of criminal cases. They are members of the local community and are not usually paid or legally qualified.":
    "Магистраты разбирают подавляющее большинство уголовных дел. Это местные жители, обычно без платы и без юридического образования.",
  "Which of these is a civil rather than a criminal matter?":
    "Что из этого дело гражданское, а не уголовное?",
  "Theft from a shop": "Кража из магазина",
  "A dispute with a landlord over a deposit": "Спор с наймодателем о залоге",
  "Dangerous driving": "Опасная езда",
  "Assault": "Нападение",
  "Civil law covers disputes between people and organisations — housing, debt, employment. Theft, assault and dangerous driving are criminal offences.":
    "Гражданское право покрывает споры между людьми и организациями — жильё, долги, работа. Кража, нападение и опасная езда суть уголовные преступления.",
  "Rights & Responsibilities": "Права и обязанности",
  "Lesson 1 introduced the values. This one is the practical side: what you are entitled to, and what is expected of you in return.":
    "Первая лекция ввела ценности. Эта — их сторона на деле: что тебе полагается и чего в ответ ждут от тебя.",
  "The vote": "Голос",
  "At 18, in free elections, by secret ballot. Your vote cannot be seen or traced.":
    "С 18 лет, на свободных выборах, тайной подачей. Твой голос нельзя ни увидеть, ни отследить.",
  "Freedom of speech": "Свобода слова",
  "To say and publish what you think — subject to laws against incitement, hatred and defamation.":
    "Говорить и печатать то, что думаешь, — с оглядкой на законы против подстрекательства, ненависти и клеветы.",
  "Freedom of religion": "Свобода религии",
  "To follow any religion or none, to change religion, and to worship openly.":
    "Держаться любой веры или никакой, менять её и открыто совершать богослужение.",
  "Protection from discrimination on any of the nine protected characteristics.":
    "Защита от ущемления по любому из девяти защищённых признаков.",
  "A fair trial": "Справедливый суд",
  "Presumed innocent until proven guilty, with legal representation and an independent judge.":
    "Невиновен, пока вина не доказана, с защитником и независимым судьёй.",
  "Human rights": "Права человека",
  "Set out in the Human Rights Act 1998, which brought the European Convention on Human Rights into UK law.":
    "Изложены в Human Rights Act 1998, который ввёл Европейскую конвенцию о правах человека в право страны.",
  "Obey the law": "Соблюдать закон",
  "All of it, including laws you disagree with. Change them by campaigning and voting, not by ignoring them.":
    "Весь, в том числе те законы, с которыми не согласен. Менять их надо доводами и голосованием, а не тем, что их не исполняешь.",
  "Pay tax": "Платить налоги",
  "**Income tax** and **National Insurance** on what you earn. NI pays towards the state pension and some benefits.":
    "**Подоходный налог** и **National Insurance** с того, что зарабатываешь. Из National Insurance идут государственная пенсия и часть пособий.",
  "Attend when summoned, between 18 and 70.": "Являться по вызову, в возрасте от 18 до 70 лет.",
  "Respect others": "Уважать других",
  "Their rights, their property, and their freedom to live differently from you.":
    "Их права, их имущество и их свободу жить не так, как ты.",
  "Look after your area": "Беречь своё место",
  "Recycle, do not litter, and take part in the community.":
    "Сдавать на переработку, не сорить и участвовать в жизни округи.",
  "Tax and National Insurance": "Налоги и National Insurance",
  "Most people pay income tax through **PAYE** — deducted by an employer before wages are paid. The self-employed complete a **Self Assessment** tax return each year. Tax funds the NHS, schools, roads, defence and the police. **HM Revenue and Customs (HMRC)** collects it.":
    "Большинство платит подоходный налог через **PAYE** — работодатель удерживает его до выдачи заработка. Работающие на себя ежегодно заполняют налоговое заявление **Self Assessment**. Из налогов живут NHS, школы, дороги, оборона и полиция. Собирает их **HM Revenue and Customs (HMRC)**.",
  "Taking part": "Участие",
  "Volunteering, joining a school governing body, helping a charity, standing as a councillor, or simply voting — participation is treated as part of citizenship rather than an optional extra.":
    "Добровольная помощь, работа в школьном попечительском совете, помощь благотворительному обществу, выдвижение в советники или просто голосование — участие считают частью гражданства, а не необязательной добавкой.",
  "HM Revenue and Customs (HMRC).": "HM Revenue and Customs (HMRC).",
  "Vote at 18. Jury service 18–70. Human Rights Act 1998. Equality Act 2010.":
    "Голос с 18 лет. Служба присяжным с 18 до 70. Human Rights Act 1998. Equality Act 2010.",
  "PAYE · Self Assessment · National Insurance · income tax · secret ballot · human rights · protected characteristics.":
    "PAYE · Self Assessment · National Insurance · подоходный налог · тайная подача голоса · права человека · защищённые признаки.",
  "In one line: Every right carries a duty: the vote and the electoral register, the NHS and your taxes, a fair trial and jury service.":
    "Одной строкой: у каждого права есть обязанность — голос и список избирателей, NHS и твои налоги, справедливый суд и служба присяжным.",
  "From what age must you attend jury service if summoned?":
    "С какого возраста нужно являться на службу присяжным по вызову?",
  "16": "16",
  "18": "18",
  "21": "21",
  "25": "25",
  "Between 18 and 70, if you are on the electoral register. It is a legal duty, not an invitation.":
    "От 18 до 70 лет, если ты в списке избирателей. Это обязанность по закону, а не приглашение.",
  "What does National Insurance pay towards?": "На что идёт National Insurance?",
  "Only the NHS": "Только на NHS",
  "The state pension and certain benefits": "На государственную пенсию и часть пособий",
  "Council services such as refuse collection": "На службы совета, вроде вывоза мусора",
  "Private health insurance": "На частное медицинское страхование",
  "National Insurance contributions build entitlement to the state pension and some benefits. Council tax pays for local services.":
    "Взносы National Insurance накапливают право на государственную пенсию и часть пособий. Местные службы оплачивает council tax.",
  "British Society & Culture": "Британское общество и культура",
  "A modern, thriving society": "Общество нынешнее и живое",
  "The UK is a diverse society of around **67 million** people. England is much the largest of the four nations. Roughly a fifth of people belong to a minority ethnic group, and the largest cities are the most diverse.":
    "Соединённое Королевство — разнородное общество примерно из **67 миллионов** человек. Англия много больше трёх остальных частей страны. Около пятой части людей принадлежит к этническим меньшинствам, и самые большие города самые разнородные.",
  "Family life": "Семейная жизнь",
  "Most households are small. Both parents commonly work, and children usually leave home in their late teens or twenties. Older relatives often live independently rather than with their children.":
    "Большинство семей невелики. Работают обычно оба родителя, а дети уходят из дома в конце подросткового возраста или к двадцати с небольшим. Старшие родственники часто живут отдельно, а не с детьми.",
  "Marriage and civil partnership": "Брак и гражданское партнёрство",
  "Marriage": "Брак",
  "You must be **16 or over** (18 in England, Wales and Northern Ireland since 2023) and both people must consent freely.":
    "Нужно быть **не моложе 16 лет** (18 в Англии, Уэльсе и Северной Ирландии с 2023 года), и оба должны согласиться свободно.",
  "Same-sex marriage": "Однополый брак",
  "Legal in England, Wales and Scotland since 2014, and in Northern Ireland since 2020.":
    "Законен в Англии, Уэльсе и Шотландии с 2014 года, в Северной Ирландии с 2020.",
  "Civil partnership": "Гражданское партнёрство",
  "A legal alternative to marriage with similar rights, open to both same-sex and opposite-sex couples.":
    "Законная замена браку с похожими правами, открытая и однополым, и разнополым парам.",
  "Forced marriage": "Брак по принуждению",
  "A **criminal offence**. Marriage requires the free consent of both people — arranged is not the same as forced.":
    "**Уголовное преступление**. Браку нужно свободное согласие обоих: сговорённый и принудительный — не одно и то же.",
  "Community and volunteering": "Округа и добровольная помощь",
  "Volunteering is widespread and highly regarded — charity shops, food banks, sports clubs, school governors, the National Trust, hospital and mountain rescue volunteers. Charities are a large part of British life, and giving time is seen as valuable as giving money.":
    "Добровольная помощь распространена и в почёте — благотворительные лавки, продовольственные банки, спортивные клубы, школьные попечители, National Trust, добровольцы в больницах и в горноспасательной службе. Благотворительные общества занимают в британской жизни большое место, и отданное время ценят не меньше отданных денег.",
  "Everyday social values": "Повседневные общественные правила",
  "Queuing, punctuality, saying please and thank you, and apologising readily are all noticed. Politeness matters more than formality, and small talk about the weather is genuinely a social convention rather than a joke about one.":
    "Очередь, точность во времени, «пожалуйста» и «спасибо», лёгкость извинения — всё это замечают. Вежливость значит больше, чем чопорность, а разговор о погоде — и вправду общественный обычай, а не шутка о нём.",
  "No names to memorise — this lesson is about how people live rather than who they were.":
    "Имён заучивать не надо — эта лекция о том, как люди живут, а не о том, кем они были.",
  "Population around 67 million. Same-sex marriage 2014 in England, Wales and Scotland; 2020 in Northern Ireland. Marriage age raised to 18 in England and Wales in 2023.":
    "Население около 67 миллионов. Однополый брак — 2014 год в Англии, Уэльсе и Шотландии; 2020 в Северной Ирландии. Возраст вступления в брак поднят до 18 лет в Англии и Уэльсе в 2023 году.",
  "Civil partnership · forced marriage · arranged marriage · volunteering · community · diversity.":
    "Гражданское партнёрство · брак по принуждению · сговорённый брак · добровольная помощь · округа · разнородность.",
  "In one line: An arranged marriage both people freely accept is lawful. A forced marriage is a crime. Consent is the whole distinction.":
    "Одной строкой: сговорённый брак, на который оба идут свободно, законен. Брак по принуждению есть преступление. Всё различие — в согласии.",
  "What is the legal position on forced marriage in the UK?":
    "Каково положение закона о браке по принуждению в стране?",
  "It is permitted with parental consent": "Он позволен с согласия родителей",
  "It is a criminal offence": "Это уголовное преступление",
  "It is allowed for those over 21": "Он разрешён тем, кто старше 21 года",
  "It is a civil matter only": "Это дело только гражданское",
  "Forcing someone to marry is a crime. Both people must consent freely — an arranged marriage that both freely accept is lawful, a forced one is not.":
    "Принуждать кого-то к браку есть преступление. Оба должны согласиться свободно: сговорённый брак, на который оба идут свободно, законен, принудительный — нет.",
  "Roughly what is the population of the UK?":
    "Каково примерно население Соединённого Королевства?",
  "About 45 million": "Около 45 миллионов",
  "About 67 million": "Около 67 миллионов",
  "About 85 million": "Около 85 миллионов",
  "About 100 million": "Около 100 миллионов",
  "Around 67 million, with much the largest share in England.":
    "Около 67 миллионов, и наибольшая доля с большим отрывом приходится на Англию.",
  "Religion & Beliefs": "Религия и убеждения",
  "The UK is historically Christian but is now a multi-faith society, and a large and growing share of people report no religion at all. **Freedom of religion** is a legal right: you may practise any faith or none, and change your faith.":
    "Страна исторически христианская, но сегодня это общество многих вер, и большая, растущая доля людей не называет никакой религии вовсе. **Свобода религии** есть право по закону: можно держаться любой веры или никакой и менять её.",
  "The established churches": "Церкви, установленные законом",
  "Church of England": "Церковь Англии",
  "The **established church** in England. The monarch is its Supreme Governor and the **Archbishop of Canterbury** its senior bishop. Its bishops sit in the House of Lords. Known as the Anglican Church or, in the US, Episcopal.":
    "**Установленная законом церковь** в Англии. Монарх её верховный правитель, а **архиепископ Кентерберийский** — старший епископ. Её епископы сидят в палате лордов. Известна как англиканская церковь, а в США — как епископальная.",
  "Church of Scotland": "Церковь Шотландии",
  "The national church of Scotland, **Presbyterian** in form. It is not governed by the monarch and has no bishops in the Lords.":
    "Народная церковь Шотландии, по устройству **пресвитерианская**. Монарх ею не правит, и епископов в палате лордов у неё нет.",
  "Wales and Northern Ireland": "Уэльс и Северная Ирландия",
  "There is **no established church** in Wales or Northern Ireland.":
    "Ни в Уэльсе, ни в Северной Ирландии **установленной законом церкви нет**.",
  "The main faiths practised in the UK": "Главные веры страны",
  "Christianity": "Христианство",
  "The largest faith. Includes Anglican, Roman Catholic, Presbyterian, Methodist, Baptist and Orthodox traditions.":
    "Самая большая вера. Включает англикан, римских католиков, пресвитериан, методистов, баптистов и православных.",
  "Islam": "Ислам",
  "The second largest religion in the UK. Major festivals include Eid al-Fitr and Eid al-Adha.":
    "Вторая по величине религия страны. Среди главных праздников Ураза-байрам и Курбан-байрам.",
  "Hinduism": "Индуизм",
  "Festivals include Diwali, the festival of lights.": "Среди праздников Дивали, праздник огней.",
  "Sikhism": "Сикхизм",
  "Founded by Guru Nanak. Vaisakhi is its major festival.":
    "Основан гуру Нанаком. Главный его праздник — Вайсакхи.",
  "Judaism": "Иудаизм",
  "A long-established community. Festivals include Hanukkah, Passover and Yom Kippur.":
    "Давно осевшая община. Среди праздников Ханука, Песах и Йом-Кипур.",
  "Buddhism": "Буддизм",
  "Practised across the UK, with Wesak among its main observances.":
    "Его держатся по всей стране, и среди главных его дней Весак.",
  "Tolerance in practice": "Терпимость на деле",
  "Religious tolerance is one of the fundamental values. It protects believers of every faith **and** those with none, and it is unlawful to discriminate against someone for their religion or belief. Places of worship for all major faiths are found across the UK.":
    "Религиозная терпимость — одна из основных ценностей. Она защищает верующих любой веры **и** тех, у кого веры нет, а ущемлять человека за религию или убеждения противозаконно. Молитвенные дома всех главных вер есть по всей стране.",
  "The Archbishop of Canterbury · Guru Nanak · the Church of England · the Church of Scotland.":
    "Архиепископ Кентерберийский · гуру Нанак · Церковь Англии · Церковь Шотландии.",
  "Church of England established since Henry VIII's break with Rome in the 1530s.":
    "Церковь Англии установлена законом со времени разрыва Генриха VIII с Римом в 1530-е годы.",
  "Established church · Supreme Governor · Anglican · Presbyterian · religious tolerance · freedom of belief.":
    "Установленная законом церковь · верховный правитель · англиканский · пресвитерианский · религиозная терпимость · свобода убеждений.",
  "In one line: England has an established church with the monarch at its head; Scotland's is Presbyterian; Wales and Northern Ireland have none.":
    "Одной строкой: у Англии есть установленная законом церковь во главе с монархом; у Шотландии она пресвитерианская; у Уэльса и Северной Ирландии её нет вовсе.",
  "Who is the Supreme Governor of the Church of England?":
    "Кто верховный правитель Церкви Англии?",
  "The Archbishop of Canterbury": "Архиепископ Кентерберийский",
  "The monarch": "Монарх",
  "The Pope": "Папа римский",
  "The monarch is Supreme Governor — a role dating from Henry VIII's break with Rome. The Archbishop of Canterbury is its most senior bishop.":
    "Верховный правитель — монарх, и роль эта идёт от разрыва Генриха VIII с Римом. Архиепископ Кентерберийский — старший её епископ.",
  "Which nation of the UK has a Presbyterian national church rather than an Anglican one?":
    "У какой части Соединённого Королевства народная церковь пресвитерианская, а не англиканская?",
  "The Church of Scotland is Presbyterian and is Scotland's national church. Wales and Northern Ireland have no established church.":
    "Церковь Шотландии пресвитерианская и является народной церковью Шотландии. У Уэльса и Северной Ирландии установленной законом церкви нет.",
  "British Traditions & Celebrations": "Британские обычаи и праздники",
  "Some of these are public holidays, some are simply widely marked. The test asks which is which, and it asks dates — so learn the date alongside the name.":
    "Одни из них нерабочие дни, другие просто широко отмечают. Тест спрашивает, что из них что, и спрашивает даты, — так что дату учи вместе с названием.",
  "The Christian calendar": "Христианский календарь",
  "Christmas Day — 25 December": "Рождество — 25 декабря",
  "A public holiday throughout the UK. Families exchange presents and eat a Christmas dinner, traditionally roast turkey.":
    "Нерабочий день по всей стране. Семьи обмениваются подарками и садятся за рождественский обед, по обычаю с жареной индейкой.",
  "Boxing Day — 26 December": "Boxing Day — 26 декабря",
  "A public holiday, the day after Christmas.": "Нерабочий день, следующий за Рождеством.",
  "Good Friday": "Страстная пятница",
  "A public holiday. The Friday before Easter, marking the crucifixion.":
    "Нерабочий день. Пятница перед Пасхой, в память о распятии.",
  "Easter Sunday and Easter Monday": "Пасхальное воскресенье и пасхальный понедельник",
  "Easter Monday is a public holiday in most of the UK. The date moves each year — Easter falls in March or April.":
    "Пасхальный понедельник — нерабочий день почти по всей стране. Дата каждый год другая: Пасха приходится на март или апрель.",
  "Pancake Day": "Блинный день",
  "Shrove Tuesday, the day before Lent begins. Not a public holiday, but pancakes are eaten across the country.":
    "Вторник перед началом Великого поста. Не нерабочий день, но блины едят по всей стране.",
  "Other dates in the year": "Другие даты года",
  "New Year's Day — 1 January": "Новый год — 1 января",
  "A public holiday. In Scotland **Hogmanay** on 31 December is the bigger celebration, and 2 January is also a holiday there.":
    "Нерабочий день. В Шотландии больше празднуют **Хогманай** 31 декабря, и 2 января там тоже выходной.",
  "Valentine's Day — 14 February": "День святого Валентина — 14 февраля",
  "Cards and gifts between couples. Not a holiday.":
    "Открытки и подарки между влюблёнными. Не выходной.",
  "Mothering Sunday and Father's Day": "День матери и День отца",
  "Mothering Sunday falls in March, three weeks before Easter; Father's Day is the third Sunday in June.":
    "День матери приходится на март, за три недели до Пасхи; День отца — третье воскресенье июня.",
  "Halloween — 31 October": "Хеллоуин — 31 октября",
  "An ancient festival, now marked with costumes, pumpkins and trick-or-treating.":
    "Древний праздник, который нынче отмечают костюмами, тыквами и хождением за угощением.",
  "Bonfire Night — 5 November": "Ночь костров — 5 ноября",
  "Bonfires and fireworks marking the failure of the **Gunpowder Plot of 1605**. Also called Guy Fawkes Night.":
    "Костры и фейерверки в память о провале **Порохового заговора 1605 года**. Её зовут и ночью Гая Фокса.",
  "Remembrance Day — 11 November": "День поминовения — 11 ноября",
  "Marks the end of the First World War in 1918. Poppies are worn and there is a two-minute silence at 11am.":
    "Отмечает конец Первой мировой войны в 1918 году. Носят маки, а в 11 часов утра держат двухминутное молчание.",
  "The patron saints' days": "Дни святых покровителей",
  "**St David's Day, 1 March** (Wales); **St Patrick's Day, 17 March** (Northern Ireland); **St George's Day, 23 April** (England); **St Andrew's Day, 30 November** (Scotland). Only St Patrick's Day in Northern Ireland and St Andrew's Day in Scotland are public holidays.":
    "**День святого Давида, 1 марта** (Уэльс); **день святого Патрика, 17 марта** (Северная Ирландия); **день святого Георгия, 23 апреля** (Англия); **день святого Андрея, 30 ноября** (Шотландия). Нерабочими днями являются только день святого Патрика в Северной Ирландии и день святого Андрея в Шотландии.",
  "Bank holidays": "Банковские выходные",
  "**Bank holidays** are public holidays when most businesses close. They differ between the four nations — Scotland and Northern Ireland each have days the others do not. Besides Christmas and Easter there are holidays in early May, late May and August.":
    "**Банковские выходные** — нерабочие дни, когда бóльшая часть заведений закрыта. В четырёх частях страны они разные: у Шотландии и у Северной Ирландии есть дни, которых нет у других. Кроме Рождества и Пасхи выходные приходятся на начало мая, конец мая и август.",
  "Guy Fawkes · Robert Burns · the four patron saints.":
    "Гай Фокс · Роберт Бёрнс · четыре святых покровителя.",
  "1 January · 25 January Burns Night · 1 March · 17 March · 23 April · 31 October · 5 November · 11 November · 30 November · 25 and 26 December. Gunpowder Plot 1605. Armistice 1918.":
    "1 января · 25 января — ночь Бёрнса · 1 марта · 17 марта · 23 апреля · 31 октября · 5 ноября · 11 ноября · 30 ноября · 25 и 26 декабря. Пороховой заговор — 1605. Перемирие — 1918.",
  "Bank holiday · Hogmanay · Shrove Tuesday · Remembrance · Boxing Day.":
    "Банковский выходной · Хогманай · вторник перед постом · поминовение · Boxing Day.",
  "In one line: Only St Patrick's Day in Northern Ireland and St Andrew's Day in Scotland are public holidays. The other two saints' days are not.":
    "Одной строкой: нерабочими являются только день святого Патрика в Северной Ирландии и день святого Андрея в Шотландии. Два других дня святых — нет.",
  "What does Bonfire Night on 5 November commemorate?": "О чём напоминает ночь костров 5 ноября?",
  "The end of the First World War": "О конце Первой мировой войны",
  "The failure of the Gunpowder Plot in 1605": "О провале Порохового заговора в 1605 году",
  "The Great Fire of London": "О великом лондонском пожаре",
  "The defeat of the Spanish Armada": "О разгроме Испанской армады",
  "Guy Fawkes and his fellow plotters failed to blow up Parliament in 1605. Remembrance Day, six days later on 11 November, is the one that marks the end of the First World War.":
    "Гай Фокс и его сообщники не сумели взорвать парламент в 1605 году. А День поминовения, шестью днями позже, 11 ноября, — это тот, что отмечает конец Первой мировой войны.",
  "Which patron saint's day falls on 1 March?":
    "День какого святого покровителя приходится на 1 марта?",
  "St Patrick": "Святого Патрика",
  "St David": "Святого Давида",
  "St George": "Святого Георгия",
  "St Andrew": "Святого Андрея",
  "St David of Wales, 1 March. St Patrick follows on 17 March — the two March dates are the ones people mix up.":
    "Святого Давида Уэльского, 1 марта. Святой Патрик идёт следом, 17 марта, — эти две мартовские даты и путают.",
  "What is Hogmanay?": "Что такое Хогманай?",
  "The Scottish New Year celebration on 31 December": "Шотландский новогодний праздник 31 декабря",
  "A Welsh harvest festival": "Валлийский праздник урожая",
  "The day before Lent": "День перед Великим постом",
  "A Northern Irish bank holiday in July": "Североирландский банковский выходной в июле",
  "Hogmanay is New Year's Eve in Scotland and is celebrated on a larger scale than in the rest of the UK. Scotland also takes 2 January as a holiday.":
    "Хогманай — это канун Нового года в Шотландии, и празднуют его шире, чем в остальной стране. Второе января в Шотландии тоже выходной.",
  "Sports & Leisure": "Спорт и досуг",
  "Britain invented or codified a remarkable number of the world's sports, and the test asks about the events as much as the games — which tournament is played where.":
    "Британия придумала или свела в правила поразительно много мировых видов спорта, и тест спрашивает о состязаниях не меньше, чем о самих играх: какой турнир где проходит.",
  "The major sports": "Главные виды спорта",
  "Football": "Футбол",
  "The most popular sport. Each nation has its own team and league; the **FA Cup** is the oldest football competition in the world.":
    "Самый любимый вид спорта. У каждой части страны своя сборная и своя лига; **Кубок Футбольной ассоциации** — старейшее футбольное состязание в мире.",
  "Rugby": "Регби",
  "Two codes, **rugby union** and **rugby league**. The **Six Nations** is contested by England, Scotland, Wales, Ireland, France and Italy.":
    "Два свода правил: **регби-юнион** и **регби-лиг**. В **Кубке шести наций** играют Англия, Шотландия, Уэльс, Ирландия, Франция и Италия.",
  "Cricket": "Крикет",
  "Originated in England. **The Ashes** is the historic Test series between England and Australia. **Lord's** in London is the most famous ground.":
    "Родом из Англии. **Пепельная урна** — историческая серия матчей между Англией и Австралией. **Лордс** в Лондоне — самое знаменитое поле.",
  "Tennis": "Теннис",
  "**Wimbledon**, held in London every summer, is the oldest tennis tournament in the world and the only Grand Slam still played on grass.":
    "**Уимблдон**, проходящий в Лондоне каждое лето, — старейший теннисный турнир мира и единственный из четырёх великих, который до сих пор играют на траве.",
  "Other sports and events": "Другие виды спорта и состязания",
  "Golf": "Гольф",
  "Originated in **Scotland**. **St Andrews** is its historic home and the Open Championship is the oldest golf major.":
    "Родом из **Шотландии**. **Сент-Эндрюс** — его историческая родина, а Открытый чемпионат — старейший из больших турниров гольфа.",
  "Horse racing": "Скачки",
  "Long royal associations. The **Grand National** at Aintree and **Royal Ascot** are the best-known meetings; the Derby at Epsom is the classic flat race.":
    "Давние связи с королевским домом. **Гранд Нэшнл** в Эйнтри и **Королевский Аскот** — самые известные съезды; дерби в Эпсоме — классическая гладкая скачка.",
  "The Olympics": "Олимпийские игры",
  "London has hosted the summer Games **three times** — 1908, 1948 and **2012**. The 2012 Games also included the Paralympics, whose modern origins are British, at Stoke Mandeville.":
    "Лондон принимал летние игры **три раза** — в 1908, 1948 и **2012 годах**. В игры 2012 года вошли и Паралимпийские, чьё нынешнее начало британское, из Сток-Мандевилла.",
  "Commonwealth Games": "Игры Содружества",
  "Held every four years between Commonwealth nations. Each UK nation competes separately, rather than as one British team.":
    "Проходят раз в четыре года между странами Содружества. Каждая часть Соединённого Королевства выступает отдельно, а не одной британской сборной.",
  "Leisure": "Досуг",
  "Gardening, walking, going to the pub, watching television and following a team are all common. The **National Trust** cares for historic houses, gardens and coastline, and public footpaths give a legal right of way across much of the countryside.":
    "Сад, прогулки, поход в паб, телевизор и болельщицкая верность своей команде — всё это обычно. **National Trust** содержит исторические дома, сады и берега, а общественные тропы дают законное право прохода по большей части сельской местности.",
  "Wimbledon · Lord's · St Andrews · Aintree · Ascot · the National Trust.":
    "Уимблдон · Лордс · Сент-Эндрюс · Эйнтри · Аскот · National Trust.",
  "London hosted the Olympics in 1908, 1948 and 2012. Commonwealth Games every four years.":
    "Лондон принимал Олимпиаду в 1908, 1948 и 2012 годах. Игры Содружества — раз в четыре года.",
  "The Ashes · Six Nations · FA Cup · Grand National · rugby union and rugby league · Paralympics.":
    "Пепельная урна · Кубок шести наций · Кубок Футбольной ассоциации · Гранд Нэшнл · регби-юнион и регби-лиг · Паралимпийские игры.",
  "In one line: Golf is Scottish, cricket and rugby are English, and at the Commonwealth Games the four nations compete separately rather than as one team.":
    "Одной строкой: гольф шотландский, крикет и регби английские, а на играх Содружества четыре части страны выступают порознь, а не одной сборной.",
  "Where is the Wimbledon tennis tournament held?": "Где проходит теннисный турнир Уимблдон?",
  "Manchester": "Манчестер",
  "Edinburgh": "Эдинбург",
  "Birmingham": "Бирмингем",
  "Wimbledon is a district of south-west London. It is the oldest tennis tournament in the world and the only Grand Slam played on grass.":
    "Уимблдон — район на юго-западе Лондона. Это старейший теннисный турнир мира и единственный из четырёх великих, который играют на траве.",
  "Which sport originated in Scotland?": "Какой вид спорта родом из Шотландии?",
  "Rugby league": "Регби-лиг",
  "Golf began in Scotland, and St Andrews remains its historic home. Cricket and rugby originated in England.":
    "Гольф начался в Шотландии, и Сент-Эндрюс остаётся его исторической родиной. Крикет и регби пошли из Англии.",
  "How many times has London hosted the summer Olympic Games?":
    "Сколько раз Лондон принимал летние Олимпийские игры?",
  "Once": "Один раз",
  "Twice": "Два раза",
  "Three times": "Три раза",
  "Four times": "Четыре раза",
  "1908, 1948 and 2012 — more than any other city.":
    "В 1908, 1948 и 2012 годах — больше любого другого города.",
  "Literature, Art & Music": "Литература, живопись и музыка",
  "Names and one fact each. The test does not expect you to have read the books — it expects you to know who wrote what, and which nation claims them.":
    "Имена и по одному факту при каждом. Тест не ждёт, что ты читал эти книги, — он ждёт, что ты знаешь, кто что написал и какая часть страны его считает своим.",
  "Writers": "Писатели",
  "Geoffrey Chaucer": "Джеффри Чосер",
  "Wrote *The Canterbury Tales* in the fourteenth century — among the earliest great works in English.":
    "Написал *Кентерберийские рассказы* в четырнадцатом веке — одно из первых великих сочинений на английском.",
  "William Shakespeare": "Уильям Шекспир",
  "Born in Stratford-upon-Avon, 1564. Plays and sonnets; the Globe Theatre in London.":
    "Родился в Стратфорде-на-Эйвоне в 1564 году. Пьесы и сонеты; театр Глобус в Лондоне.",
  "Jane Austen": "Джейн Остин",
  "*Pride and Prejudice*, *Sense and Sensibility* — novels of English social life in the early nineteenth century.":
    "*Гордость и предубеждение*, *Чувство и чувствительность* — романы об английской светской жизни начала девятнадцатого века.",
  "*Oliver Twist*, *A Christmas Carol*, *Great Expectations* — the poverty of Victorian Britain, read by everyone.":
    "*Оливер Твист*, *Рождественская песнь*, *Большие надежды* — нищета викторианской Британии, читанная всеми.",
  "Robert Burns": "Роберт Бёрнс",
  "Scotland's national poet, known as the Bard. Wrote *Auld Lang Syne*, sung at New Year. **Burns Night** is 25 January.":
    "Народный поэт Шотландии, известный как Бард. Написал *Auld Lang Syne*, которую поют в Новый год. **Ночь Бёрнса** — 25 января.",
  "Others to know": "Другие, кого стоит знать",
  "The Brontë sisters, Thomas Hardy, Rudyard Kipling, Agatha Christie, J. R. R. Tolkien, George Orwell, Dylan Thomas and J. K. Rowling.":
    "Сёстры Бронте, Томас Гарди, Редьярд Киплинг, Агата Кристи, Джон Толкин, Джордж Оруэлл, Дилан Томас и Джоан Роулинг.",
  "Art and museums": "Живопись и музеи",
  "Artists": "Художники",
  "**Thomas Gainsborough** and **John Constable** for portraits and landscape, **J. M. W. Turner** for light and sea, **Henry Moore** for sculpture, **David Hockney** among the living.":
    "**Томас Гейнсборо** и **Джон Констебл** — портрет и пейзаж, **Джозеф Тёрнер** — свет и море, **Генри Мур** — скульптура, **Дэвид Хокни** — среди живых.",
  "National Gallery": "Национальная галерея",
  "In **Trafalgar Square**, London. Holds the national collection of paintings. Free to enter.":
    "На **Трафальгарской площади** в Лондоне. Хранит народное собрание живописи. Вход бесплатный.",
  "British Museum": "Британский музей",
  "In London, founded 1753 — the first national public museum in the world. Free to enter.":
    "В Лондоне, основан в 1753 году — первый в мире общедоступный народный музей. Вход бесплатный.",
  "Others": "Другие",
  "Tate Britain and Tate Modern in London, the National Museum of Scotland in Edinburgh, and the Turner Prize for contemporary art.":
    "Tate Britain и Tate Modern в Лондоне, Национальный музей Шотландии в Эдинбурге и премия Тёрнера за современное искусство.",
  "Music": "Музыка",
  "**The Beatles** — John Lennon, Paul McCartney, George Harrison and Ringo Starr — came from **Liverpool** and are the most successful British band ever. Also from Britain: the Rolling Stones, Queen, David Bowie, Elton John and Adele.":
    "**The Beatles** — Джон Леннон, Пол Маккартни, Джордж Харрисон и Ринго Старр — вышли из **Ливерпуля** и остаются самой успешной британской группой всех времён. Из Британии же: the Rolling Stones, Queen, Дэвид Боуи, Элтон Джон и Адель.",
  "In classical music, **Henry Purcell**, **Edward Elgar**, **Gustav Holst**, **Ralph Vaughan Williams** and **Benjamin Britten**. The **Proms** — a summer season of concerts at the Royal Albert Hall, ending with the Last Night — has run since 1895.":
    "В музыке строгой — **Генри Пёрселл**, **Эдуард Элгар**, **Густав Холст**, **Ральф Воан-Уильямс** и **Бенджамин Бриттен**. **Промс** — летний ряд концертов в Королевском Альберт-холле, кончающийся Последней ночью, — идёт с 1895 года.",
  "Chaucer · Shakespeare · Jane Austen · Charles Dickens · Robert Burns · Turner · Constable · Gainsborough · Henry Moore · The Beatles · Elgar.":
    "Чосер · Шекспир · Джейн Остин · Чарльз Диккенс · Роберт Бёрнс · Тёрнер · Констебл · Гейнсборо · Генри Мур · The Beatles · Элгар.",
  "Shakespeare 1564–1616. British Museum founded 1753. The Proms since 1895. Burns Night 25 January.":
    "Шекспир — 1564–1616. Британский музей основан в 1753 году. Промс — с 1895. Ночь Бёрнса — 25 января.",
  "The Globe Theatre · the Turner Prize · the National Gallery · the British Museum · the Last Night of the Proms.":
    "Театр Глобус · премия Тёрнера · Национальная галерея · Британский музей · Последняя ночь Промс.",
  "In one line: One name, one fact. Chaucer came before Shakespeare, Burns is Scotland's poet, and The Beatles came from Liverpool.":
    "Одной строкой: одно имя, один факт. Чосер был раньше Шекспира, Бёрнс — поэт Шотландии, а The Beatles вышли из Ливерпуля.",
  "Who wrote The Canterbury Tales?": "Кто написал «Кентерберийские рассказы»?",
  "Chaucer wrote The Canterbury Tales in the fourteenth century — two hundred years before Shakespeare.":
    "Чосер написал «Кентерберийские рассказы» в четырнадцатом веке — за двести лет до Шекспира.",
  "Which city were The Beatles from?": "Из какого города были The Beatles?",
  "Liverpool": "Ливерпуль",
  "Liverpool. They are the most commercially successful band in British history.":
    "Ливерпуль. Это самая успешная в продажах группа британской истории.",
  "Robert Burns is the national poet of which nation?":
    "Роберт Бёрнс — народный поэт какой части страны?",
  "Burns is Scotland's Bard. Burns Night is celebrated on 25 January, and his Auld Lang Syne is sung at New Year across the world.":
    "Бёрнс — Бард Шотландии. Ночь Бёрнса отмечают 25 января, а его Auld Lang Syne поют в Новый год по всему свету.",
  "Science & Inventions": "Наука и изобретения",
  "British science shows up repeatedly in the test, usually as one name attached to one discovery. Learn the pairs.":
    "Британская наука всплывает в тесте снова и снова, обычно как одно имя при одном открытии. Учи их парами.",
  "Scientists": "Учёные",
  "Isaac Newton": "Исаак Ньютон",
  "Gravity and the laws of motion. His *Principia Mathematica* is one of the most important scientific books ever written.":
    "Тяготение и законы движения. Его *Principia Mathematica* — одна из самых важных научных книг, когда-либо написанных.",
  "*On the Origin of Species*, 1859 — evolution by natural selection.":
    "*Происхождение видов*, 1859 год — развитие путём естественного отбора.",
  "Alexander Fleming": "Александр Флеминг",
  "A Scot who discovered **penicillin** in 1928, the first true antibiotic.":
    "Шотландец, открывший **пенициллин** в 1928 году, первый настоящий антибиотик.",
  "Michael Faraday": "Майкл Фарадей",
  "Electromagnetic induction — the principle behind the electric motor and the generator.":
    "Электромагнитная индукция — начало, на котором стоят электродвигатель и генератор.",
  "Ernest Rutherford": "Эрнест Резерфорд",
  "Split the atom and established the structure of the atomic nucleus.":
    "Расщепил атом и установил строение атомного ядра.",
  "Rosalind Franklin": "Розалинд Франклин",
  "Her X-ray work was essential to discovering the double-helix structure of DNA, alongside Crick and Watson.":
    "Её работы с рентгеновскими лучами были решающими для открытия двойной спирали ДНК, вместе с Криком и Уотсоном.",
  "Inventors and engineers": "Изобретатели и инженеры",
  "Transformed the steam engine and made industrial power practical.":
    "Преобразил паровую машину и сделал промышленную силу пригодной для дела.",
  "George Stephenson": "Джордж Стефенсон",
  "The Rocket, and the first practical passenger railways.":
    "«Ракета» и первые настоящие пассажирские железные дороги.",
  "Isambard Kingdom Brunel": "Изамбард Кингдом Брюнель",
  "The Great Western Railway, the Clifton Suspension Bridge, and pioneering steamships.":
    "Великая западная железная дорога, Клифтонский висячий мост и первопроходческие пароходы.",
  "Alexander Graham Bell": "Александр Грейам Белл",
  "Born in Edinburgh; developed the **telephone**.": "Родился в Эдинбурге; создал **телефон**.",
  "John Logie Baird": "Джон Лоджи Бэрд",
  "A Scot who gave the first public demonstration of **television**.":
    "Шотландец, который первым показал на людях **телевидение**.",
  "Tim Berners-Lee": "Тим Бернерс-Ли",
  "Invented the **World Wide Web** in 1989 while working at CERN.":
    "Изобрёл **Всемирную паутину** в 1989 году, работая в ЦЕРН.",
  "Other British firsts": "Другие британские первенства",
  "**Alan Turing** laid the foundations of computer science and broke German codes at Bletchley Park. The first successful **IVF** birth took place in England in 1978. The **Royal Society**, founded in the 1660s, is the oldest scientific institution still in existence. **Dolly the sheep**, the first cloned mammal, was created in Scotland in 1996.":
    "**Алан Тьюринг** заложил основы вычислительной науки и раскрыл немецкие шифры в Блетчли-парке. Первый удачный ребёнок из **пробирки** родился в Англии в 1978 году. **Королевское общество**, основанное в 1660-е годы, — старейшее научное учреждение из ныне существующих. **Овечка Долли**, первое клонированное млекопитающее, была создана в Шотландии в 1996 году.",
  "Isaac Newton · Charles Darwin · Alexander Fleming · Michael Faraday · Ernest Rutherford · Rosalind Franklin · James Watt · George Stephenson · Brunel · Alexander Graham Bell · John Logie Baird · Alan Turing · Tim Berners-Lee.":
    "Исаак Ньютон · Чарльз Дарвин · Александр Флеминг · Майкл Фарадей · Эрнест Резерфорд · Розалинд Франклин · Джеймс Уатт · Джордж Стефенсон · Брюнель · Александр Грейам Белл · Джон Лоджи Бэрд · Алан Тьюринг · Тим Бернерс-Ли.",
  "Origin of Species 1859 · penicillin 1928 · first IVF birth 1978 · World Wide Web 1989 · Dolly the sheep 1996. Royal Society founded in the 1660s.":
    "«Происхождение видов» — 1859 · пенициллин — 1928 · первый ребёнок из пробирки — 1978 · Всемирная паутина — 1989 · овечка Долли — 1996. Королевское общество основано в 1660-е годы.",
  "Natural selection · antibiotic · electromagnetic induction · DNA · the World Wide Web · cloning.":
    "Естественный отбор · антибиотик · электромагнитная индукция · ДНК · Всемирная паутина · клонирование.",
  "In one line: Learn these as pairs — one person, one discovery. That is exactly how the test asks about them.":
    "Одной строкой: учи их парами — один человек, одно открытие. Именно так о них и спрашивает тест.",
  "Who discovered penicillin?": "Кто открыл пенициллин?",
  "Fleming, a Scottish scientist, discovered penicillin in 1928. It became the first widely used antibiotic and has saved countless lives.":
    "Флеминг, шотландский учёный, открыл пенициллин в 1928 году. Он стал первым широко применяемым антибиотиком и спас несчётное число жизней.",
  "Who invented the World Wide Web?": "Кто изобрёл Всемирную паутину?",
  "Alan Turing": "Алан Тьюринг",
  "Charles Babbage": "Чарльз Бэббидж",
  "Tim Berners-Lee, a British scientist, invented the World Wide Web in 1989. Turing laid the foundations of computing decades earlier.":
    "Тим Бернерс-Ли, британский учёный, изобрёл Всемирную паутину в 1989 году. Тьюринг заложил основы вычислений несколькими десятилетиями раньше.",
  "Famous British People": "Знаменитые британцы",
  "One place to revise every name in the course, sorted by what they are known for. If a name here is unfamiliar, go back to the lesson it came from.":
    "Одно место, где можно повторить все имена курса, разобранные по тому, чем они известны. Если имя тут незнакомо, вернись к той лекции, откуда оно.",
  "Monarchs": "Монархи",
  "Won at Hastings in 1066 and became the first Norman king.":
    "Победил при Гастингсе в 1066 году и стал первым нормандским королём.",
  "Six wives, and the break with Rome that created the Church of England.":
    "Шесть жён и разрыв с Римом, создавший Церковь Англии.",
  "Reigned 45 years; the Armada was defeated in 1588.":
    "Правила 45 лет; армада была разбита в 1588 году.",
  "1837–1901, at the height of British industrial and imperial power.":
    "1837–1901, на вершине британской промышленной и имперской силы.",
  "Charles III": "Карл III",
  "The present monarch, since September 2022.": "Нынешний монарх, с сентября 2022 года.",
  "Political figures": "Государственные деятели",
  "Oliver Cromwell": "Оливер Кромвель",
  "Led Parliament to victory in the Civil War and ruled as Lord Protector.":
    "Привёл парламент к победе в гражданской войне и правил как лорд-протектор.",
  "William Wilberforce": "Уильям Уилберфорс",
  "Led the parliamentary campaign to abolish the slave trade.":
    "Возглавил в парламенте борьбу за отмену работорговли.",
  "Prime Minister through the Second World War, and voted the greatest Briton in a national poll.":
    "Премьер-министр всю Вторую мировую войну; во всенародном опросе его назвали величайшим британцем.",
  "Prime Minister from 1945; his government built the welfare state and the NHS.":
    "Премьер-министр с 1945 года; его правительство построило государство всеобщего благосостояния и NHS.",
  "Margaret Thatcher": "Маргарет Тэтчер",
  "The first woman Prime Minister, from 1979 to 1990.":
    "Первая женщина на посту премьер-министра, с 1979 по 1990 год.",
  "Led the suffragette campaign for votes for women.":
    "Возглавила борьбу суфражисток за право голоса для женщин.",
  "Scientists, engineers and reformers": "Учёные, инженеры и преобразователи",
  "Gravity and the laws of motion.": "Тяготение и законы движения.",
  "Evolution by natural selection.": "Развитие путём естественного отбора.",
  "Penicillin, 1928.": "Пенициллин, 1928 год.",
  "Railways, bridges and steamships.": "Железные дороги, мосты и пароходы.",
  "Founded modern nursing.": "Положила начало нынешнему сестринскому делу.",
  "Computing, and the codebreakers at Bletchley Park.":
    "Вычисления и раскрытие шифров в Блетчли-парке.",
  "Writers, artists and musicians": "Писатели, художники и музыканты",
  "The most influential writer in the English language.":
    "Самый влиятельный писатель английского языка.",
  "Jane Austen and Charles Dickens": "Джейн Остин и Чарльз Диккенс",
  "The two most widely read English novelists of the nineteenth century.":
    "Два самых читаемых английских романиста девятнадцатого века.",
  "Scotland's national poet.": "Народный поэт Шотландии.",
  "J. M. W. Turner": "Джозеф Тёрнер",
  "Landscape and seascape painter; the Turner Prize is named after him.":
    "Живописец земли и моря; премия Тёрнера названа его именем.",
  "The Beatles": "The Beatles",
  "From Liverpool — the most successful British band.":
    "Из Ливерпуля — самая успешная британская группа.",
  "Sake Dean Mahomet": "Сейк Дин Махомет",
  "Opened Britain's first Indian restaurant and introduced shampooing; an early figure in Britain's multicultural history.":
    "Открыл первый в Британии индийский ресторан и ввёл в обиход мытьё головы с растиранием; один из первых людей в многонародной истории Британии.",
  "Military and exploration": "Войско и открытие земель",
  "**Admiral Nelson** at Trafalgar in 1805, the **Duke of Wellington** at Waterloo in 1815, **Boudicca** against the Romans, **William Wallace** and **Robert the Bruce** for Scotland, and **Captain James Cook**, whose voyages mapped much of the Pacific.":
    "**Адмирал Нельсон** при Трафальгаре в 1805 году, **герцог Веллингтон** при Ватерлоо в 1815-м, **Боудикка** против римлян, **Уильям Уоллес** и **Роберт Брюс** за Шотландию и **капитан Джеймс Кук**, чьи плавания положили на карту большую часть Тихого океана.",
  "Every name in the course, grouped by what they are known for — monarchs, politicians, scientists, writers, artists and reformers.":
    "Все имена курса, собранные по тому, чем они известны: монархи, государственные деятели, учёные, писатели, художники и преобразователи.",
  "The dates belong to the lessons these people came from; this one is for matching the person to the achievement.":
    "Даты остались в тех лекциях, откуда эти люди; здесь надо соединить человека с его делом.",
  "Monarch · Prime Minister · reformer · abolitionist · suffragette · engineer · physicist.":
    "Монарх · премьер-министр · преобразователь · борец против рабства · суфражистка · инженер · физик.",
  "In one line: If a name here is unfamiliar, go back to the lesson it came from rather than trying to learn it in isolation.":
    "Одной строкой: если имя тут незнакомо, вернись к той лекции, откуда оно, а не учи его в отрыве от всего.",
  "Who was the first woman Prime Minister of the UK?":
    "Кто был первой женщиной на посту премьер-министра страны?",
  "Theresa May": "Тереза Мэй",
  "Margaret Thatcher, Prime Minister from 1979 to 1990. Theresa May was the second, from 2016.":
    "Маргарет Тэтчер, премьер-министр с 1979 по 1990 год. Тереза Мэй была второй, с 2016 года.",
  "Which Prime Minister led Britain through the Second World War?":
    "Какой премьер-министр вёл Британию через Вторую мировую войну?",
  "Neville Chamberlain": "Невилл Чемберлен",
  "David Lloyd George": "Дэвид Ллойд Джордж",
  "Churchill became Prime Minister in 1940 and led the country for the rest of the war. Attlee won the election that followed in 1945.":
    "Черчилль стал премьер-министром в 1940 году и вёл страну до конца войны. Эттли победил на выборах, которые прошли следом, в 1945-м.",
  "Education & Healthcare": "Образование и здравоохранение",
  "Two things you will use, and two things the test asks about in practical terms: how school works, and how to get medical help.":
    "Две вещи, которыми ты будешь пользоваться и о которых тест спрашивает по-деловому: как устроена школа и как получить врачебную помощь.",
  "Education is **compulsory** for children aged **5 to 16** (4 to 16 in Northern Ireland). In England, young people must stay in education or training until 18. State schooling is free.":
    "Обучение **обязательно** для детей от **5 до 16 лет** (в Северной Ирландии с 4 до 16). В Англии молодёжь обязана оставаться в учёбе или в обучении ремеслу до 18 лет. Государственная школа бесплатна.",
  "Primary school": "Начальная школа",
  "From about age 5 to 11. One class teacher covers most subjects.":
    "Примерно с 5 до 11 лет. Один классный учитель ведёт большую часть предметов.",
  "Secondary school": "Средняя школа",
  "From about 11 to 16, ending with **GCSEs** in England, Wales and Northern Ireland, or **National Qualifications** in Scotland.":
    "Примерно с 11 до 16 лет; в конце — **GCSE** в Англии, Уэльсе и Северной Ирландии или **National Qualifications** в Шотландии.",
  "Further education": "Дальнейшее образование",
  "**A levels**, or Highers in Scotland, and vocational courses at sixth form or college, usually 16 to 18.":
    "**A level**, а в Шотландии Highers, и ремесленные курсы в старших классах или в колледже, обычно с 16 до 18 лет.",
  "Higher education": "Высшее образование",
  "Universities award degrees. **Oxford** and **Cambridge** are the oldest. Tuition fees and support differ between the four nations, because education is devolved.":
    "Университеты присуждают степени. **Оксфорд** и **Кембридж** — старейшие. Плата за учёбу и помощь учащимся в четырёх частях страны разные, потому что образование передано местным властям.",
  "Parents must make sure their children attend. Schools have **governing bodies** that parents can join, and there is a national curriculum in England.":
    "Родители обязаны следить за тем, чтобы дети ходили в школу. При школах есть **попечительские советы**, в которые родители могут войти, а в Англии действует общегосударственная учебная программа.",
  "The NHS": "NHS",
  "The **National Health Service** was founded in **1948** by **Aneurin Bevan**. Its principle is care **free at the point of use**, paid for through taxation, based on need rather than ability to pay.":
    "**Народную службу здоровья** основал в **1948 году** **Эньюрин Бивен**. Её начало — помощь **бесплатно в момент обращения**, оплаченная налогами и оказываемая по нужде, а не по кошельку.",
  "Your GP": "Твой врач общей практики",
  "A **general practitioner** is your first point of contact. Register with a local practice; you need to be registered to be referred for most other care.":
    "**Врач общей практики (GP)** — первый, к кому обращаются. Запишись в местную поликлинику: без записи не дадут направления почти ни на какую другую помощь.",
  "Hospitals": "Больницы",
  "You normally attend after a GP referral, except in an emergency.":
    "Обычно туда попадают по направлению от врача общей практики, кроме случаев неотложных.",
  "Prescriptions": "Рецепты",
  "Charged in England, with many exemptions. Free in Scotland, Wales and Northern Ireland.":
    "В Англии за них платят, но с многими исключениями. В Шотландии, Уэльсе и Северной Ирландии бесплатно.",
  "Dentists and opticians": "Зубные врачи и окулисты",
  "NHS treatment is available but usually carries a charge.":
    "Лечение по NHS доступно, но обычно за деньги.",
  "Emergency services": "Неотложные службы",
  "Dial **999** or **112** for police, ambulance, fire or coastguard. Both numbers are free from any phone. For urgent but non-life-threatening medical help call **111**; for non-emergency police matters call **101**.":
    "Набирай **999** или **112**, чтобы вызвать полицию, скорую, пожарных или береговую охрану. Оба номера бесплатны с любого телефона. Если врачебная помощь нужна срочно, но жизни ничто не грозит, звони **111**; по полицейским делам, которые не терпят, но и не горят, — **101**.",
  "999 is for emergencies only — a life at risk, a serious injury, a crime in progress or a fire. Misusing it is an offence, and 111 exists for everything urgent that is not an emergency.":
    "999 — только для неотложного: угроза жизни, тяжёлое увечье, преступление на ходу или пожар. Звонить туда попусту — правонарушение, а для всего срочного, но не неотложного есть 111.",
  "Aneurin Bevan · your GP · Oxford and Cambridge.":
    "Эньюрин Бивен · твой врач общей практики · Оксфорд и Кембридж.",
  "School compulsory 5–16 (4–16 in Northern Ireland); education or training to 18 in England. NHS founded 1948. Emergency 999 or 112; urgent advice 111; non-emergency police 101.":
    "Школа обязательна с 5 до 16 (в Северной Ирландии с 4 до 16); учёба или обучение ремеслу до 18 в Англии. NHS основана в 1948. Неотложное — 999 или 112; срочный совет — 111; полиция не по неотложному — 101.",
  "GCSE · A level · Highers · National Qualifications · further education · higher education · GP · free at the point of use · prescription charge.":
    "GCSE · A level · Highers · National Qualifications · дальнейшее образование · высшее образование · GP · бесплатно в момент обращения · плата за рецепт.",
  "In one line: 999 is for emergencies only and misusing it is an offence. 111 is the number for everything urgent that is not one.":
    "Одной строкой: 999 — только для неотложного, и звонить туда попусту есть правонарушение. 111 — номер для всего срочного, что неотложным не является.",
  "Between which ages is education compulsory in England?":
    "В каком возрасте обучение в Англии обязательно?",
  "4 to 16": "С 4 до 16",
  "5 to 16": "С 5 до 16",
  "6 to 18": "С 6 до 18",
  "5 to 14": "С 5 до 14",
  "5 to 16 in England, Wales and Scotland; Northern Ireland starts at 4. In England, young people must remain in education or training until 18.":
    "С 5 до 16 в Англии, Уэльсе и Шотландии; в Северной Ирландии начинают с 4. В Англии молодёжь обязана оставаться в учёбе или в обучении ремеслу до 18 лет.",
  "Which number do you call for urgent medical advice that is not an emergency?":
    "По какому номеру звонить за срочным врачебным советом, когда случай не неотложный?",
  "999": "999",
  "111": "111",
  "101": "101",
  "112": "112",
  "111 is the NHS urgent advice line. 999 and 112 are for emergencies, and 101 is for non-emergency police matters.":
    "111 — это линия срочных советов NHS. 999 и 112 — для неотложного, а 101 — для полицейских дел, которые не неотложны.",
  "What does free at the point of use mean for the NHS?":
    "Что значит для NHS «бесплатно в момент обращения»?",
  "The NHS costs the taxpayer nothing": "Что NHS ничего не стоит налогоплательщику",
  "You are not charged for treatment when you receive it, because it is funded through taxation":
    "Что за лечение не берут денег в тот миг, когда его оказывают, потому что оно оплачено налогами",
  "Only emergency treatment is free": "Что бесплатна только неотложная помощь",
  "Treatment is free only for British citizens":
    "Что лечение бесплатно только для британских подданных",
  "The NHS is paid for through taxation rather than at the door. Care is based on clinical need, not on ability to pay.":
    "NHS оплачивается налогами, а не у дверей. Помощь оказывают по врачебной нужде, а не по кошельку.",
  "That is the whole syllabus": "Вот и вся программа",
  "Twenty-three lessons, five official chapters, and every date in the timeline. Work back through anything that felt shaky, then sit a practice test.":
    "Двадцать три лекции, пять положенных глав и все даты в череде лет. Пройди заново всё, что показалось шатким, и садись за пробный тест.",
};
