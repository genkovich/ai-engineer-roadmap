window.ROADMAPS=window.ROADMAPS||{};
window.ROADMAPS['evals']={
  slug:'evals',
  title:'Evals',
  intro:'Регресійні тести для відповідей моделі: набір кейсів, перевірки кодом і суддею, прогін у CI. Стоїть після RAG, бо вже є що міряти, і перед оркестрацією та продом, бо розкладати промпт на кроки і викочувати його без регресійних тестів не варто.',
  root:{label:'Evals',kicker:'Вимірювання якості AI-системи',desc:'Набір еталонних запитів з очікуваними результатами, який проганяють після кожної зміни промпту, моделі або коду навколо. Відповідь щоразу трохи інша, тому перевіряють стабільне: факт, тул, формат, оцінку судді.',why:'Без evals правка промпту під один кейс ламає решту, і ви дізнаєтесь про це від користувачів.',
    links:[
      {t:'Your AI Product Needs Evals',u:'https://hamel.dev/blog/posts/evals/',k:'article',y:2024,s:'Hamel Husain',w:'Текст, з якого починається більшість розмов про evals'},
      {t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',y:2025,s:'Anthropic Docs',w:'Code-based, human і LLM-based grading з прикладами'},
      {t:'Demystifying evals for AI agents',u:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',k:'article',y:2026,s:'Anthropic Engineering',w:'Grader-и, pass@k і pass^k, трейси, бенчмарки агентів'},
      {t:'Why AI evals are the hottest new skill for product builders | Hamel Husain & Shreya Shankar',u:'https://www.youtube.com/watch?v=BsWxPI9UM4c',k:'video',y:2025,s:'YouTube · Lenny\'s Podcast',w:'Дві години живого розбору трейсів і error analysis'},
      {t:'A pragmatic guide to LLM evals for devs',u:'https://newsletter.pragmaticengineer.com/p/evals',k:'article',y:2025,s:'The Pragmatic Engineer',w:'Hamel Husain для розробників: з чого почати'},
      {t:'AI Evals: Everything You Need to Know',u:'https://hamel.dev/blog/posts/evals-faq/',k:'article',y:2025,s:'Hamel Husain',w:'FAQ з курсу Hamel і Shreya Shankar, 40+ відповідей'},
      {t:'Task-Specific LLM Evals that Do & Don\'t Work',u:'https://eugeneyan.com/writing/evals/',k:'article',y:2024,s:'Eugene Yan'}
    ]},
  end:{label:'Далі: Оркестрація →',href:'orchestration.html'},
  groups:[
    {label:'Навіщо evals',side:'left',desc:'Відповідь моделі недетермінована і залежить від кожного слова промпту. Evals це спосіб перевіряти її не на око, а числом.',why:'Ознака зрілості: є набір на 10-20 кейсів і прогін у CI, який не пускає зміну промпту в мердж, якщо щось зламалось.',
      links:[
        {t:'Your AI Product Needs Evals',u:'https://hamel.dev/blog/posts/evals/',k:'article',y:2024,s:'Hamel Husain'},
        {t:'AI Eval Concepts Explained in 15 Minutes',u:'https://www.youtube.com/watch?v=3rlYBCDK0K4',k:'video',s:'YouTube · Hamel Husain',w:'Короткий словник термінів перед усім іншим'},
        {t:'Всього 7% розробників довіряють AI важливі рішення',u:'https://t.me/beerphp/225',k:'post',y:2026,s:'beerphp',w:'Довіряють там, де результат легко перевірити'},
        {t:'LLM evaluation: a beginner\'s guide',u:'https://www.evidentlyai.com/llm-guide/llm-evaluation',k:'article',y:2025,s:'Evidently AI'},
        {t:'An LLM-as-Judge Won\'t Save The Product - Fixing Your Process Will',u:'https://eugeneyan.com/writing/eval-process/',k:'article',y:2025,s:'Eugene Yan'},
        {t:'Evals 101 - Doug Guthrie, Braintrust',u:'https://www.youtube.com/watch?v=bk0TmxoZlUY',k:'video',y:2025,s:'YouTube · AI Engineer'}
      ],
      children:[
        {label:'Регресія після зміни промпту',desc:'Виправили один кейс, зламали три інших, і ніхто не помітив до скарги користувача.',why:'Це головний сценарій, від якого захищають evals; усе інше надбудова.',
          links:[
            {t:'LLM Evals: Common Mistakes',u:'https://www.youtube.com/watch?v=GL0XhAj5LPE',k:'video',s:'YouTube · Hamel Husain'},
            {t:'A Field Guide to Rapidly Improving AI Products',u:'https://hamel.dev/blog/posts/field-guide/',k:'article',y:2025,s:'Hamel Husain'}
          ]},
        {label:'Evals проти unit-тестів',desc:'Unit-тест очікує точний результат; eval допускає розкид і міряє частку успішних кейсів або середню оцінку.',why:'Спроба писати на модель звичайні тести з точним збігом дає або червоний CI назавжди, або тести, які нічого не перевіряють.',
          links:[
            {t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',y:2025,s:'Anthropic Docs'},
            {t:'Evals Course: What is an eval?',u:'https://www.youtube.com/watch?v=44rL1Xi88UA',k:'video',s:'YouTube · Braintrust'}
          ]},
        {label:'Три рівні evals',desc:'Hamel Husain розділяє: рівень 1 - unit-тести і assertions кодом, рівень 2 - оцінка людиною і моделлю, рівень 3 - A/B на користувачах.',why:'Кожен рівень дорожчий за попередній; більшість проблем має ловитись на першому.',
          links:[
            {t:'Your AI Product Needs Evals',u:'https://hamel.dev/blog/posts/evals/',k:'article',y:2024,s:'Hamel Husain',w:'Саме тут описані три рівні'},
            {t:'AI Evaluations Clearly Explained in 50 Minutes (Real Example) | Hamel Husain',u:'https://www.youtube.com/watch?v=uiza7wp1KrE',k:'video',y:2025,s:'YouTube · Peter Yang'}
          ]},
        {label:'Що стабільне, а що ні',desc:'Текст відповіді змінюється; наявність факту, викликаний тул, формат за схемою, категорія зазвичай стабільні.',why:'Перевіряти треба те, що має лишатись однаковим, а не формулювання.',
          links:[
            {t:'Task-Specific LLM Evals that Do & Don\'t Work',u:'https://eugeneyan.com/writing/evals/',k:'article',y:2024,s:'Eugene Yan',w:'Які метрики працюють для класифікації, саммарі, перекладу'}
          ]},
        {label:'Evals як критерій готовності',desc:'Фіча готова не коли «відповідає нормально», а коли проходить набір кейсів на заданому рівні.',why:'Дає команді спільну мову про якість AI-фічі замість суперечок про враження.',
          links:[
            {t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/define-success',k:'doc',y:2025,s:'Anthropic Docs',w:'Як сформулювати вимірюваний критерій успіху'},
            {t:'Don\'t Approve the AI Model. Approve the App - Doneyli De Jesus, Langfuse',u:'https://www.youtube.com/watch?v=-uBABM2AuFg',k:'video',y:2025,s:'YouTube · AI Engineer'}
          ]},
        {label:'Eval-driven development',desc:'Спершу набір кейсів і критерій, потім промпт і код; кожна ітерація промпту оцінюється прогоном, а не враженням. Аналог TDD для AI-фіч.',why:'Без вимірювання кожна «покращена» версія промпту це ставка; з вимірюванням це рішення з числом.',
          links:[
            {t:'Evals for Taste: Hill-Climbing a Slide-Generation Agent',u:'https://claude.com/code-with-claude/session/sf-ext-eval-driven-agent-development',k:'video',y:2026,s:'Anthropic · Code with Claude',w:'Eval-driven розробка агента на живому прикладі'},
            {t:'Automated Testing for LLMOps',u:'https://www.deeplearning.ai/short-courses/automated-testing-llmops/',k:'course',s:'DeepLearning.AI',w:'Безкоштовний короткий курс: evals у CI з CircleCI'},
            {t:'Why the Best AI Agents Start With Evals, Not UI',u:'https://www.youtube.com/watch?v=JdrrYtpj-XA',k:'video',s:'YouTube · Jason Liu'},
            {t:'Бачу одну й ту саму картину в різних командах',u:'https://t.me/beerphp/226',k:'post',y:2026,s:'beerphp',w:'Ліцензії є в усіх, ефект ніхто не міряє'}
          ]}
      ]},
    {label:'Error analysis і перегляд трейсів',side:'right',desc:'Перш ніж писати перевірки, читають реальні трейси руками, нотують кожну помилку і групують у таксономію збоїв. Метод Hamel Husain і Shreya Shankar.',why:'Evals мають міряти збої, які реально трапляються, а не абстрактну «якість»; дізнатись, які саме, можна лише з даних.',
      links:[
        {t:'Q: Why is "error analysis" so important in AI evals, and how is it performed?',u:'https://hamel.dev/blog/posts/evals-faq/why-is-error-analysis-so-important-in-llm-evals-and-how-is-it-performed.html',k:'article',y:2025,s:'Hamel Husain'},
        {t:'Building eval systems that improve your AI product',u:'https://www.lennysnewsletter.com/p/building-eval-systems-that-improve',k:'article',y:2025,s:'Lenny\'s Newsletter',w:'Hamel і Shreya: від error analysis до валідованих суддів'},
        {t:'LLM Eval Office Hours #3: The Importance Of Starting With Error Analysis',u:'https://www.youtube.com/watch?v=ZEvXvyY17Ys',k:'video',s:'YouTube · Hamel Husain'},
        {t:'Evals, error analysis, and better prompts: A systematic approach to improving your AI products',u:'https://www.lennysnewsletter.com/p/evals-error-analysis-and-better-prompts',k:'article',y:2025,s:'Lenny\'s Newsletter'},
        {t:'How to Build Better AI Evals with Claude Code in 5 Steps | Shreya & Hamel',u:'https://www.youtube.com/watch?v=bdMHQLvtVaQ',k:'video',y:2026,s:'YouTube · Peter Yang'},
        {t:'Advanced evals: How to find (and fix) hidden AI failures in your product',u:'https://www.lennysnewsletter.com/p/advanced-evals-how-to-find-and-fix',k:'article',y:2026,s:'Lenny\'s Newsletter'}
      ],
      children:[
        {label:'Читати трейси руками',desc:'Трейс це повний запис одного прогону: вхід, промпт, виклики тулів, знайдені фрагменти, відповідь. Перші 50-100 трейсів читає людина, а не скрипт.',why:'Більшість команд знаходять свої головні збої за перші дві години читання трейсів.',
          links:[
            {t:'Evaluation of LLM Applications',u:'https://langfuse.com/docs/evaluation/overview',k:'doc',s:'Langfuse Docs',w:'Трейси, датасети й оцінки в одному open-source інструменті'},
            {t:'What is Arize Phoenix?',u:'https://arize.com/docs/phoenix',k:'doc',s:'Arize Phoenix',w:'Open-source трейсинг на OpenTelemetry плюс evals'},
            {t:'LangSmith Evaluation',u:'https://docs.langchain.com/langsmith/evaluation',k:'doc',s:'LangSmith Docs'},
            {t:'Generative AI semantic conventions',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/',k:'doc',s:'OpenTelemetry',w:'Стандарт, у якому трейси LLM пишуть усі інструменти'}
          ]},
        {label:'Open coding: нотатка до кожного трейсу',desc:'Для кожного трейсу вільним текстом записують першу помічену помилку, без заздалегідь заданих категорій.',why:'Заготовлені категорії («галюцинація», «тон») ховають реальні збої вашого продукту.',
          links:[
            {t:'Q: Why is "error analysis" so important in AI evals, and how is it performed?',u:'https://hamel.dev/blog/posts/evals-faq/why-is-error-analysis-so-important-in-llm-evals-and-how-is-it-performed.html',k:'article',y:2025,s:'Hamel Husain',w:'Open coding, axial coding і підрахунок по категоріях'},
            {t:'Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences',u:'https://arxiv.org/abs/2404.12272',k:'article',y:2024,s:'arXiv · Shreya Shankar et al.',w:'Критерії оцінки виникають під час перегляду відповідей'}
          ]},
        {label:'Axial coding: таксономія збоїв',desc:'Нотатки групують у 5-10 категорій, рахують частоту кожної і беруть у роботу найчастіші. Зупиняються, коли нові трейси не дають нових категорій.',why:'Так замість 300 розрізнених спостережень отримують пріоритезований список, що лагодити першим.',
          links:[
            {t:'Building eval systems that improve your AI product',u:'https://www.lennysnewsletter.com/p/building-eval-systems-that-improve',k:'article',y:2025,s:'Lenny\'s Newsletter'},
            {t:'Automating Error Analysis',u:'https://hamel.dev/notes/llm/ai-product-engineering/evals-error-analysis.html',k:'article',y:2026,s:'Hamel Husain',w:'Як скіл для агента оновлює таксономію під час розмітки'}
          ]},
        {label:'Доменний експерт як головний оцінювач',desc:'Один експерт у предметі (а не комітет і не розробник) читає трейси і виносить вердикт; інженер лише організовує процес.',why:'Розробник не знає, яка відповідь юристу або лікарю правильна; експерт знає, але йому потрібен зручний цикл.',
          links:[
            {t:'AI Evals: Everything You Need to Know',u:'https://hamel.dev/blog/posts/evals-faq/',k:'article',y:2025,s:'Hamel Husain',w:'Принцип «benevolent dictator» для розмітки'},
            {t:'Open Source Data Labeling and AI Evaluation',u:'https://labelstud.io/',k:'doc',s:'Label Studio',w:'Коли потрібен інтерфейс для розмітки експертом'}
          ]},
        {label:'Від симптому до причини',desc:'Сміття у відповіді частіше означає сміття в контексті: зайві інструкції, суперечливі правила, відсутня інформація, а не «тупа модель».',why:'Error analysis має доходити до причини, яку можна виправити, а не зупинятись на «модель помилилась».',
          links:[
            {t:'Чому AI пише тобі сміття: 5 помилок, які роблять всі',u:'https://www.youtube.com/watch?v=wOW0-RZDPbA',k:'video',y:2026,s:'BeerCode',w:'Пʼять типових причин поганого результату і як їх побачити'},
            {t:'Агенти пишуть тобі сміття, увага, не тому що вони тупі',u:'https://t.me/beerphp/176',k:'post',y:2026,s:'beerphp'},
            {t:'Debugging AI Products: From Data Leakage to Evals with Hamel Husain',u:'https://www.youtube.com/watch?v=_f-KEp2p7uY',k:'video',s:'YouTube · Product Talk'}
          ]},
        {label:'Автоматизація error analysis',type:'optional',desc:'Коли таксономія зріла, нові трейси класифікують моделлю за готовими категоріями, а людина перевіряє вибірку.',why:'Ручне читання не масштабується на тисячі трейсів на день; автоматизація можлива лише після ручного етапу.',
          links:[
            {t:'Automating Error Analysis',u:'https://hamel.dev/notes/llm/ai-product-engineering/evals-error-analysis.html',k:'article',y:2026,s:'Hamel Husain'},
            {t:'How to Automate AI Evals (Correctly)',u:'https://www.youtube.com/watch?v=tqUDjc1HzO4',k:'video',s:'YouTube · Hamel Husain'}
          ]}
      ]},
    {label:'Golden dataset',side:'left',desc:'Набір еталонних запитів з очікуваними результатами. Для початку 10-20 кейсів; росте разом із виявленими поломками.',why:'Це серце evals: якість перевірок обмежена якістю і різноманіттям кейсів.',
      links:[
        {t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',y:2025,s:'Anthropic Docs',w:'Поради щодо розміру набору і крайніх випадків'},
        {t:'AI Evals: Everything You Need to Know',u:'https://hamel.dev/blog/posts/evals-faq/',k:'article',y:2025,s:'Hamel Husain',w:'Скільки кейсів треба і звідки їх брати'},
        {t:'Evaluation concepts',u:'https://docs.langchain.com/langsmith/evaluation-concepts',k:'doc',s:'LangSmith Docs',w:'Datasets, examples, experiments: словник платформи'},
        {t:'Getting Started with LangSmith (5/8): Datasets & Evaluations',u:'https://www.youtube.com/watch?v=iEgjJyk3aTw',k:'video',s:'YouTube · LangChain'},
        {t:'Evals Course: Build a simple eval in Braintrust UI',u:'https://www.youtube.com/watch?v=90oopIixahM',k:'video',s:'YouTube · Braintrust'},
        {t:'Assertions and Metrics - LLM Output Validation',u:'https://www.promptfoo.dev/docs/configuration/expected-outputs/',k:'doc',s:'promptfoo Docs',w:'Як кейс з очікуванням виглядає у YAML'}
      ],
      children:[
        {label:'Структура кейсу',desc:'Вхід (запит, контекст, стан), очікуваний результат або критерії, метадані: категорія, джерело, дата додавання.',why:'Кейс без критерію «що вважати правильним» неможливо перевірити автоматично.',
          links:[
            {t:'Assertions and Metrics - LLM Output Validation',u:'https://www.promptfoo.dev/docs/configuration/expected-outputs/',k:'doc',s:'promptfoo Docs'},
            {t:'Pydantic Evals',u:'https://ai.pydantic.dev/evals/',k:'doc',s:'Pydantic Docs',w:'Case, Dataset, Evaluator у типізованому Python'}
          ]},
        {label:'Звідки брати кейси',desc:'Реальні запити з проду, ручно складені на типові і крайні випадки, синтетичні від моделі з ручною перевіркою.',why:'Набір лише з придуманих кейсів не ловить того, що реально роблять користувачі.',
          links:[
            {t:'A Field Guide to Rapidly Improving AI Products',u:'https://hamel.dev/blog/posts/field-guide/',k:'article',y:2025,s:'Hamel Husain'}
          ],
          children:[
            {label:'Прод-логи і скарги',desc:'Кожна поломка в проді стає кейсом у наборі.',why:'Найдешевше джерело кейсів, які точно трапляються.',links:[{t:'A Field Guide to Rapidly Improving AI Products',u:'https://hamel.dev/blog/posts/field-guide/',k:'article',y:2025,s:'Hamel Husain'}]},
            {label:'Крайні випадки руками',desc:'Порожній вхід, дуже довгий, іншою мовою, з суперечливими даними.',why:'Саме тут модель ламається найчастіше, а користувачі про це не пишуть.',links:[{t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',y:2025,s:'Anthropic Docs',w:'Список edge cases, які варто покрити'}]},
            {label:'Кейси з error analysis',desc:'Кожна категорія з таксономії збоїв отримує кілька представницьких кейсів.',why:'Так набір покриває реальні збої, а не вигадані.',links:[{t:'Q: Why is "error analysis" so important in AI evals, and how is it performed?',u:'https://hamel.dev/blog/posts/evals-faq/why-is-error-analysis-so-important-in-llm-evals-and-how-is-it-performed.html',k:'article',y:2025,s:'Hamel Husain'}]}
          ]},
        {label:'Розмір і покриття',desc:'Починати з 10-20 кейсів, покривати категорії запитів пропорційно до проду, додавати по одному на кожен інцидент.',why:'Сто кейсів однієї категорії дають менше, ніж двадцять з різних.',
          links:[
            {t:'AI Evals: Everything You Need to Know',u:'https://hamel.dev/blog/posts/evals-faq/',k:'article',y:2025,s:'Hamel Husain'}
          ]},
        {label:'Еталонна відповідь чи критерії',desc:'Для фактів і класифікації еталон точний; для вільного тексту замість еталону список критеріїв, яким має відповідати відповідь.',why:'Еталонний текст для відкритого питання майже ніколи не збігається з відповіддю, навіть правильною.',
          links:[
            {t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',y:2025,s:'Anthropic Docs'}
          ]},
        {label:'Синтетичні кейси від моделі',type:'optional',desc:'Модель генерує варіанти запитів (перефразування, інші персони, складніші умови), людина відбирає і править. Інструменти: Ragas testset generation, distilabel.',why:'Швидко розширює покриття, але без ручного відбору дає однакові кейси, які нічого нового не ловлять.',
          links:[
            {t:'Testset Generation',u:'https://docs.ragas.io/en/stable/concepts/test_data_generation/',k:'doc',s:'Ragas Docs',w:'Генерація питань до документів для RAG-evals'},
            {t:'argilla-io/distilabel',u:'https://github.com/argilla-io/distilabel',k:'github',s:'GitHub',w:'Пайплайни синтетичних даних і AI feedback'},
            {t:'Self-Instruct: Aligning Language Models with Self-Generated Instructions',u:'https://arxiv.org/abs/2212.10560',k:'article',y:2022,s:'arXiv',w:'Базова ідея: модель генерує інструкції для себе'}
          ],
          children:[
            {label:'Перефразування і персони',desc:'Той самий намір різними словами, від різних типів користувачів.',why:'Ловить промпт, що працює лише на «правильному» формулюванні.',links:[{t:'Testset Generation',u:'https://docs.ragas.io/en/stable/concepts/test_data_generation/',k:'doc',s:'Ragas Docs',w:'Персони і типи запитів у генерації набору'}]},
            {label:'Ускладнення (evol-instruct)',desc:'Модель навмисно ускладнює наявний кейс: додає умови, обмеження, кроки.',why:'Дає важкі кейси, які руками придумувати довго.',
              links:[{t:'WizardLM: Empowering large pre-trained language models to follow complex instructions',u:'https://arxiv.org/abs/2304.12244',k:'article',y:2023,s:'arXiv'}]}
          ]},
        {label:'Версіонування набору',desc:'Набір лежить у репо, зміни проходять ревʼю, кожен прогін знає, на якій версії він працював.',why:'Інакше неясно, чи метрика впала через промпт, чи через додані складні кейси.',
          links:[
            {t:'Evaluation concepts',u:'https://docs.langchain.com/langsmith/evaluation-concepts',k:'doc',s:'LangSmith Docs',w:'Версії датасетів і експерименти на них'}
          ]},
        {label:'Витік кейсів у промпт',type:'optional',desc:'Приклади з golden dataset не мають потрапляти у few-shot промпт або в документи для RAG. Та сама проблема, що контамінація публічних бенчмарків.',why:'Модель, що бачила відповідь, проходить тест, не вміючи розвʼязувати задачу.',
          links:[
            {t:'Benchmark Data Contamination of Large Language Models: A Survey',u:'https://arxiv.org/abs/2406.04244',k:'article',y:2024,s:'arXiv'}
          ]}
      ]},
    {label:'Детерміновані перевірки',side:'right',desc:'Перевірки кодом без участі моделі: точне порівняння, схема, пошук факту, перевірка виклику тула. У promptfoo це assertions, в Inspect це scorers.',why:'Дешеві, швидкі і надійні; з них починають, суддю-модель додають лише там, де коду не вистачає.',
      links:[
        {t:'Assertions and Metrics - LLM Output Validation',u:'https://www.promptfoo.dev/docs/configuration/expected-outputs/',k:'doc',s:'promptfoo Docs',w:'contains, equals, is-json, regex, javascript, python'},
        {t:'Scorers',u:'https://inspect.aisi.org.uk/scorers.html',k:'doc',s:'Inspect AI (UK AISI)',w:'match, includes, pattern, model_graded та власні scorers'},
        {t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',y:2025,s:'Anthropic Docs',w:'Code-based grading: exact match, cosine similarity, ROUGE-L'},
        {t:'braintrustdata/autoevals',u:'https://github.com/braintrustdata/autoevals',k:'github',s:'GitHub',w:'Готові скорери: Levenshtein, JSON diff, embedding similarity'},
        {t:'How to Systematically Setup LLM Evals (Metrics, Unit Tests, LLM-as-a-Judge)',u:'https://www.youtube.com/watch?v=a3SMraZWNNs',k:'video',s:'YouTube · Dave Ebbelaar'}
      ],
      children:[
        {label:'Exact match, regex і нормалізація',desc:'Точний збіг після приведення до нижнього регістру і прибирання пробілів; регулярні вирази для дат, email, номерів.',why:'Для класифікації, витягнутих полів і коротких фактів цього достатньо.',
          links:[
            {t:'Assertions and Metrics - LLM Output Validation',u:'https://www.promptfoo.dev/docs/configuration/expected-outputs/',k:'doc',s:'promptfoo Docs'}
          ]},
        {label:'Валідація за схемою',desc:'Відповідь розбирається як JSON і перевіряється за JSON Schema, Pydantic або Zod: поля, типи, enum.',why:'Невалідний формат це поломка, яку ловить код, а не користувач.',
          links:[
            {t:'Pydantic Evals',u:'https://ai.pydantic.dev/evals/',k:'doc',s:'Pydantic Docs'},
            {t:'Assertions and Metrics - LLM Output Validation',u:'https://www.promptfoo.dev/docs/configuration/expected-outputs/',k:'doc',s:'promptfoo Docs',w:'is-json з inline JSON Schema'}
          ]},
        {label:'Наявність факту або підрядка',desc:'У відповіді є потрібне число, назва, посилання; або немає забороненого.',why:'Перевіряє суть відповіді, не чіпляючись до формулювання.',links:[{t:'Assertions and Metrics - LLM Output Validation',u:'https://www.promptfoo.dev/docs/configuration/expected-outputs/',k:'doc',s:'promptfoo Docs',w:'contains, icontains, not-contains, contains-any'}]},
        {label:'Правильний виклик тула',desc:'Модель викликала потрібний тул з правильними аргументами і не викликала зайвих. Готові перевірки: agentevals від LangChain, trajectory evaluation в Google ADK.',why:'Для агентів це головна перевірка: текст відповіді вторинний, дія первинна.',
          links:[
            {t:'langchain-ai/agentevals',u:'https://github.com/langchain-ai/agentevals',k:'github',y:2025,s:'GitHub',w:'Trajectory match: strict, unordered, subset, superset'}
          ]},
        {label:'Семантична схожість',type:'optional',desc:'Косинусна схожість embeddings відповіді й еталону вище порога.',why:'Ловить перефразовані правильні відповіді, але поріг треба калібрувати на своїх даних.',
          links:[
            {t:'braintrustdata/autoevals',u:'https://github.com/braintrustdata/autoevals',k:'github',s:'GitHub',w:'EmbeddingSimilarity серед вбудованих скорерів'}
          ]},
        {label:'Виконання коду і тестів',type:'optional',desc:'Для задач на код: згенерований код запускається, тести проганяються, результат і є оцінкою. Так працюють HumanEval і SWE-bench.',why:'Найчесніша перевірка коду від моделі: не схоже на правильний, а працює.',
          links:[
            {t:'Evaluating Large Language Models Trained on Code',u:'https://arxiv.org/abs/2107.03374',k:'article',y:2021,s:'arXiv · OpenAI',w:'HumanEval і визначення pass@k'},
            {t:'SWE-bench: Can Language Models Resolve Real-World GitHub Issues?',u:'https://arxiv.org/abs/2310.06770',k:'article',y:2023,s:'arXiv'}
          ]},
        {label:'Власні assertions кодом',desc:'Функція на Python або JavaScript, яка отримує відповідь і повертає pass/fail чи бал: бізнес-правила, перевірка через БД, виклик зовнішнього API.',why:'Найгнучкіша перевірка; у promptfoo, DeepEval, Inspect і Pydantic Evals це перший клас.',
          links:[
            {t:'Scorers',u:'https://inspect.aisi.org.uk/scorers.html',k:'doc',s:'Inspect AI (UK AISI)'},
            {t:'confident-ai/deepeval',u:'https://github.com/confident-ai/deepeval',k:'github',s:'GitHub',w:'Evals як pytest-тести з власними метриками'}
          ]}
      ]},
    {label:'LLM-as-judge',side:'left',desc:'Інша модель оцінює відповідь за чіткою інструкцією і рубрикою, коли критерій не вкладається у перевірку кодом. Термін закріпила стаття про MT-Bench і Chatbot Arena.',why:'Тон, повнота, корисність, відповідність контексту: без судді це можна перевірити лише руками.',
      links:[
        {t:'Using LLM-as-a-Judge For Evaluation: A Complete Guide',u:'https://hamel.dev/blog/posts/llm-judge/',k:'article',y:2024,s:'Hamel Husain',w:'Бінарний суддя, калібрування на експерті, TPR/TNR'},
        {t:'Evaluating the Effectiveness of LLM-Evaluators (aka LLM-as-Judge)',u:'https://eugeneyan.com/writing/llm-evaluators/',k:'article',y:2024,s:'Eugene Yan',w:'Огляд досліджень: що працює, а що ні'},
        {t:'Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena',u:'https://arxiv.org/abs/2306.05685',k:'article',y:2023,s:'arXiv',w:'Стаття, що ввела термін і описала упередження'},
        {t:'LLM-as-a-judge: a complete guide to using LLMs for evaluations',u:'https://www.evidentlyai.com/llm-guide/llm-as-a-judge',k:'article',y:2025,s:'Evidently AI'},
        {t:'Using LLM-as-a-judge for an automated and versatile evaluation',u:'https://huggingface.co/learn/cookbook/llm_judge',k:'doc',s:'Hugging Face Cookbook',w:'Ноутбук: суддя, кореляція з людьми, покращення промпту'},
        {t:'LLM as a Judge: Scaling AI Evaluation Strategies',u:'https://www.youtube.com/watch?v=trfUBIDeI1Y',k:'video',s:'YouTube · IBM Technology'},
        {t:'A Survey on LLM-as-a-Judge',u:'https://arxiv.org/abs/2411.15594',k:'article',y:2024,s:'arXiv'}
      ],
      children:[
        {label:'Інструкція судді і рубрика',desc:'Що саме оцінювати, за якою шкалою, з прикладами хороших і поганих відповідей; одна властивість на один запит до судді. G-Eval додає chain-of-thought перед оцінкою.',why:'Суддя з розмитою інструкцією «оціни якість» дає оцінки, які не корелюють ні з чим.',
          links:[
            {t:'G-Eval: NLG Evaluation using GPT-4 with Better Human Alignment',u:'https://arxiv.org/abs/2303.16634',k:'article',y:2023,s:'arXiv'},
            {t:'Model-graded metrics',u:'https://www.promptfoo.dev/docs/configuration/expected-outputs/model-graded/',k:'doc',s:'promptfoo Docs',w:'llm-rubric, factuality, g-eval у конфігурації'},
            {t:'LLM-as-a-Judge: How It Works, Prompts & Evaluators',u:'https://arize.com/llm-as-a-judge/',k:'article',s:'Arize'}
          ]},
        {label:'Калібрування на ручній розмітці',desc:'Суддю перевіряють на наборі відповідей, розмічених людьми; згода з людьми (TPR, TNR або kappa) має бути високою до того, як суддю пускають у CI. EvalGen робить це циклом: людина оцінює, критерії уточнюються.',why:'Суддя теж модель і теж помиляється; неперевірений суддя дає хибне відчуття контролю.',
          links:[
            {t:'Using LLM-as-a-Judge For Evaluation: A Complete Guide',u:'https://hamel.dev/blog/posts/llm-judge/',k:'article',y:2024,s:'Hamel Husain'},
            {t:'Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences',u:'https://arxiv.org/abs/2404.12272',k:'article',y:2024,s:'arXiv · Shreya Shankar et al.',w:'EvalGen і феномен criteria drift'},
            {t:'JudgeBench: A Benchmark for Evaluating LLM-based Judges',u:'https://arxiv.org/abs/2410.12784',k:'article',y:2024,s:'arXiv'}
          ]},
        {label:'Упередження судді',desc:'Схильність до довших відповідей, до першого варіанту в парі, до власного стилю, до впевненого тону.',why:'Відомі упередження компенсують: міняють порядок у парах, обмежують довжину, перевіряють на контрольних кейсах.',
          links:[
            {t:'Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena',u:'https://arxiv.org/abs/2306.05685',k:'article',y:2023,s:'arXiv',w:'Position, verbosity і self-enhancement bias'},
            {t:'Evaluating the Effectiveness of LLM-Evaluators (aka LLM-as-Judge)',u:'https://eugeneyan.com/writing/llm-evaluators/',k:'article',y:2024,s:'Eugene Yan'}
          ],
          children:[
            {label:'Довжина: довше здається кращим',desc:'Суддя переоцінює довгі відповіді; порівнюють на схожій довжині або коригують за довжиною.',why:'Інакше «покращення» промпту це просто довші відповіді.',
              links:[{t:'Length-Controlled AlpacaEval: A Simple Way to Debias Automatic Evaluators',u:'https://arxiv.org/abs/2404.04475',k:'article',y:2024,s:'arXiv'}]},
            {label:'Позиція у парному порівнянні',desc:'Перший варіант виграє частіше; кожну пару ганяють в обох порядках.',why:'Без цього pairwise-результат залежить від порядку, а не від якості.',
              links:[{t:'Large Language Models are not Fair Evaluators',u:'https://arxiv.org/abs/2305.17926',k:'article',y:2023,s:'arXiv'}]},
            {label:'Самооцінка власної моделі',desc:'Модель прихильніша до своїх відповідей; суддю беруть іншого.',why:'Той самий провайдер як генератор і суддя завищує оцінку.',
              links:[{t:'LLM Evaluators Recognize and Favor Their Own Generations',u:'https://arxiv.org/abs/2404.13076',k:'article',y:2024,s:'arXiv'}]},
            {label:'Впевнений тон і красива форма',desc:'Суддя плутає впевнений, добре структурований текст із правильним.',why:'Галюцинація у гарній обгортці проходить, якщо рубрика не вимагає перевірки фактів.',links:[{t:'Evaluating the Effectiveness of LLM-Evaluators (aka LLM-as-Judge)',u:'https://eugeneyan.com/writing/llm-evaluators/',k:'article',y:2024,s:'Eugene Yan'}]}
          ]},
        {label:'Pairwise порівняння',desc:'Суддя обирає кращу з двох відповідей замість абсолютної оцінки кожної. Так влаштований Chatbot Arena (LMArena), лише з людьми замість судді.',why:'Відносні судження стабільніші за абсолютні бали; добре для порівняння двох версій промпту.',
          links:[
            {t:'Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena',u:'https://arxiv.org/abs/2306.05685',k:'article',y:2023,s:'arXiv'}
          ]},
        {label:'Бінарна оцінка проти шкали',desc:'Пройшов або не пройшов зазвичай надійніше за оцінку від 1 до 10.',why:'Різниця між 7 і 8 у судді випадкова; різниця між так і ні осмислена.',
          links:[
            {t:'Using LLM-as-a-Judge For Evaluation: A Complete Guide',u:'https://hamel.dev/blog/posts/llm-judge/',k:'article',y:2024,s:'Hamel Husain',w:'Аргументи за бінарного суддю з критикою'}
          ]},
        {label:'Суддя з доступом до еталону',type:'optional',desc:'Суддя порівнює відповідь з еталонною і перевіряє, чи передано ту саму суть (reference-guided grading).',why:'Значно надійніше за оцінку без еталону, коли еталон є.',
          links:[
            {t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',y:2025,s:'Anthropic Docs'}
          ]},
        {label:'Готові судді та відкриті моделі-судді',type:'optional',desc:'Бібліотеки з готовими промптами судді: autoevals (Braintrust), DeepEval G-Eval, promptfoo llm-rubric, Langfuse LLM-as-a-judge. Окремо натреновані судді: Prometheus 2.',why:'Готовий суддя економить час, але його теж треба калібрувати на своїх даних.',
          links:[
            {t:'braintrustdata/autoevals',u:'https://github.com/braintrustdata/autoevals',k:'github',s:'GitHub'},
            {t:'Prometheus 2: An Open Source Language Model Specialized in Evaluating Other Language Models',u:'https://arxiv.org/abs/2405.01535',k:'article',y:2024,s:'arXiv'},
            {t:'LLM-as-a-Judge Evaluation for Dataset Experiments in Langfuse',u:'https://www.youtube.com/watch?v=JOGMn5nqCSM',k:'video',s:'YouTube · Langfuse'},
            {t:'The Future of Evals: From LLM as a Judge to Agent as a Judge - Aparna Dhinakaran, Arize AI',u:'https://www.youtube.com/watch?v=q2JrUKBMf0w',k:'video',y:2025,s:'YouTube · AI Engineer'}
          ]}
      ]},
    {label:'Метрики і статистика',side:'right',desc:'Як з результатів окремих кейсів отримати число, якому можна довіряти, і як порівнювати прогони.',why:'Один прогін на двадцяти кейсах з недетермінованою моделлю дає шум; його треба вміти відрізнити від сигналу.',
      links:[
        {t:'A statistical approach to model evaluations',u:'https://www.anthropic.com/research/statistical-approach-to-model-evals',k:'article',y:2024,s:'Anthropic Research',w:'Довірчі інтервали, парні порівняння, power analysis для evals'},
        {t:'Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations',u:'https://arxiv.org/abs/2411.00640',k:'article',y:2024,s:'arXiv · Anthropic'},
        {t:'Demystifying evals for AI agents',u:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',k:'article',y:2026,s:'Anthropic Engineering',w:'pass@k проти pass^k'},
        {t:'Evaluating Large Language Models Trained on Code',u:'https://arxiv.org/abs/2107.03374',k:'article',y:2021,s:'arXiv · OpenAI',w:'Звідки взявся pass@k'},
        {t:'The Leaderboard Illusion',u:'https://arxiv.org/abs/2504.20879',k:'article',y:2025,s:'arXiv',w:'Як вибіркова публікація результатів спотворює рейтинг'}
      ],
      children:[
        {label:'Pass rate і accuracy',desc:'Частка кейсів, що пройшли, або частка правильних відповідей; базова метрика для бінарних перевірок.',why:'Проста, зрозуміла команді і достатня для блокування мерджу.',links:[{t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',y:2025,s:'Anthropic Docs'}]},
        {label:'Precision, recall і F1 для класифікації',desc:'Коли модель класифікує або витягує поля: precision (скільки з позначених правильні), recall (скільки з потрібних знайдено), F1 як баланс. Так само оцінюють і самого суддю проти людей.',why:'Accuracy на незбалансованих класах обманює: 95% можна отримати, завжди відповідаючи «ні».',
          links:[
            {t:'Task-Specific LLM Evals that Do & Don\'t Work',u:'https://eugeneyan.com/writing/evals/',k:'article',y:2024,s:'Eugene Yan',w:'Метрики для класифікації, витягу, саммарі'},
            {t:'Using LLM-as-a-Judge For Evaluation: A Complete Guide',u:'https://hamel.dev/blog/posts/llm-judge/',k:'article',y:2024,s:'Hamel Husain',w:'TPR і TNR судді проти експерта'}
          ]},
        {label:'Розподіл оцінок, не лише середнє',desc:'Середнє 4 з 5 може бути як «усі по 4», так і «половина 5, половина 3».',why:'Погіршення на кількох важливих кейсах ховається за незмінним середнім.',links:[{t:'A statistical approach to model evaluations',u:'https://www.anthropic.com/research/statistical-approach-to-model-evals',k:'article',y:2024,s:'Anthropic Research'}]},
        {label:'Повтори, pass@k і pass^k',desc:'Кожен кейс ганяють кілька разів; pass@k означає успіх хоча б в одному з k запусків, pass^k в усіх k. Для агентів у проді важливий саме pass^k.',why:'Недетермінізм моделі означає, що один запуск не говорить нічого про стабільність.',
          links:[
            {t:'Demystifying evals for AI agents',u:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',k:'article',y:2026,s:'Anthropic Engineering'},
            {t:'τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains',u:'https://arxiv.org/abs/2406.12045',k:'article',y:2024,s:'arXiv · Sierra',w:'Метрика pass^k уведена тут'}
          ]},
        {label:'Розріз за категоріями',desc:'Метрики окремо по типах запитів, мовах, джерелах кейсів.',why:'Загальний pass rate 90% може ховати 40% на одній важливій категорії.',links:[{t:'Building eval systems that improve your AI product',u:'https://www.lennysnewsletter.com/p/building-eval-systems-that-improve',k:'article',y:2025,s:'Lenny\'s Newsletter',w:'Метрики по категоріях збоїв з таксономії'}]},
        {label:'Поріг і допустимий розкид',desc:'Який pass rate вважати прохідним і яке падіння вважати регресією, а яке шумом.',why:'Без заданого порога кожне обговорення результату перетворюється на суперечку.',links:[{t:'Assertions and Metrics - LLM Output Validation',u:'https://www.promptfoo.dev/docs/configuration/expected-outputs/',k:'doc',s:'promptfoo Docs',w:'threshold і weight для assertions'}]},
        {label:'Статистична значущість',type:'optional',desc:'На малих наборах різниця в кілька відсотків часто випадкова; довірчі інтервали, парні порівняння на тих самих кейсах або більше кейсів.',why:'Рішення «нова версія краща на 3%» на двадцяти кейсах зазвичай необґрунтоване.',
          links:[
            {t:'A statistical approach to model evaluations',u:'https://www.anthropic.com/research/statistical-approach-to-model-evals',k:'article',y:2024,s:'Anthropic Research'},
            {t:'Adding Error Bars to Evals: A Statistical Approach to Language Model Evaluations',u:'https://arxiv.org/abs/2411.00640',k:'article',y:2024,s:'arXiv · Anthropic'}
          ]}
      ]},
    {label:'Прогін у CI і фреймворки',side:'left',desc:'Evals запускаються автоматично на кожну зміну промпту, моделі або коду навколо і блокують мердж при регресії. Інструменти: від власного скрипта до promptfoo, DeepEval, Braintrust, LangSmith, Langfuse, Inspect AI.',why:'Ознака зрілості: зміна промпту без зеленого прогону не мерджиться.',
      links:[
        {t:'Testing Prompts with GitHub Actions',u:'https://www.promptfoo.dev/docs/integrations/github-action/',k:'doc',s:'promptfoo Docs',w:'Прогін на PR з коментарем-різницею'},
        {t:'promptfoo/promptfoo',u:'https://github.com/promptfoo/promptfoo',k:'github',s:'GitHub',w:'Найпопулярніший open-source CLI для evals і red teaming'},
        {t:'Automated Testing for LLMOps',u:'https://www.deeplearning.ai/short-courses/automated-testing-llmops/',k:'course',s:'DeepLearning.AI'},
        {t:'GitHub Actions documentation',u:'https://docs.github.com/en/actions',k:'doc',s:'GitHub Docs'},
        {t:'Один із трендових напрямків зараз: інтеграція AI у CI/CD',u:'https://t.me/beerphp/129',k:'post',y:2025,s:'beerphp'},
        {t:'The Future of Evals - Ankur Goyal, Braintrust',u:'https://www.youtube.com/watch?v=MC55hdWLq4o',k:'video',y:2025,s:'YouTube · AI Engineer'},
        {t:'Evals in AI: A Deep Dive - Tejas Kumar, IBM',u:'https://www.youtube.com/watch?v=NdrSPm6NCdk',k:'video',y:2025,s:'YouTube · AI Engineer'}
      ],
      children:[
        {label:'Що запускає прогін',desc:'Зміна файлів промптів, схем, коду навколо виклику моделі; за розкладом для контролю дрейфу моделі.',why:'Прогін на кожен коміт у репо дорогий і зайвий; на зміну промпту обовʼязковий.',
          links:[
            {t:'Testing Prompts with GitHub Actions',u:'https://www.promptfoo.dev/docs/integrations/github-action/',k:'doc',s:'promptfoo Docs'},
            {t:'promptfoo/promptfoo-action',u:'https://github.com/promptfoo/promptfoo-action',k:'github',s:'GitHub'}
          ]},
        {label:'Блокування мерджу і звіт прогону',desc:'Падіння pass rate нижче порога або регресія на критичних кейсах робить перевірку червоною; результати кожного кейсу, відповіді й оцінки судді зберігаються і порівнюються з попереднім прогоном.',why:'Зелений прогін як умова мерджу робить evals обовʼязковими; червоний CI без деталей «що саме зламалось» змушує відтворювати все руками.',
          links:[
            {t:'confident-ai/deepeval',u:'https://github.com/confident-ai/deepeval',k:'github',s:'GitHub',w:'Evals як pytest: червоний тест, червоний пайплайн'},
            {t:'Evaluations overview',u:'https://weave-docs.wandb.ai/guides/core-types/evaluations/',k:'doc',s:'W&B Weave Docs',w:'Порівняння прогонів поруч'},
            {t:'LLM and Agent Evaluation',u:'https://mlflow.org/docs/latest/genai/eval-monitor/',k:'doc',s:'MLflow Docs'}
          ]},
        {label:'Бюджет, вартість і секрети в CI',desc:'Повний набір за розкладом, швидка вибірка критичних кейсів на кожен PR; ліміт витрат на прогін. Економія: кешування відповідей, Batch API зі знижкою 50%, дешевша модель-суддя. Ключ моделі у сховищі секретів CI, недоступний у PR з форків.',why:'Прогін на тисячу кейсів сильною моделлю на кожен PR коштує більше за користь, а ключ у логах CI це рахунок від чужих.',
          links:[
            {t:'Caching Configuration - Performance Optimization',u:'https://www.promptfoo.dev/docs/configuration/caching/',k:'doc',s:'promptfoo Docs'},
            {t:'Batch processing',u:'https://platform.claude.com/docs/en/build-with-claude/batch-processing',k:'doc',s:'Anthropic Docs',w:'Нічний прогін великого набору за пів ціни'},
            {t:'GitHub Actions documentation',u:'https://docs.github.com/en/actions',k:'doc',s:'GitHub Docs',w:'Secrets і права для workflow з форків'}
          ]},
        {label:'Власний скрипт спершу',desc:'Для початку досить скрипта приблизно на 50 рядків: цикл по кейсах, виклик, перевірка, звіт. Фреймворк беруть, коли наборів і команд багато. Hosted Evals від OpenAI закривається 30 листопада 2026, тож ставка на вендорський інструмент має свою ціну.',why:'Фреймворк evals додає залежність і абстракції; розуміти механіку треба до нього.',
          links:[
            {t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',y:2025,s:'Anthropic Docs',w:'Приклади грейдерів у кілька рядків коду'},
            {t:'Evaluation best practices',u:'https://developers.openai.com/api/docs/guides/evaluation-best-practices',k:'doc',s:'OpenAI Docs',w:'Hosted Evals закривають 30.11.2026; поради лишаються актуальні'},
            {t:'Using the Evaluation Tool',u:'https://platform.claude.com/docs/en/test-and-evaluate/eval-tool',k:'doc',s:'Anthropic Docs',w:'Evals у Claude Console без коду'},
            {t:'Gen AI evaluation service overview',u:'https://cloud.google.com/vertex-ai/generative-ai/docs/models/evaluation-overview',k:'doc',s:'Google Cloud Docs'}
          ]},
        {label:'Інструменти: бібліотеки і CLI',type:'optional',desc:'Open-source бібліотеки, що працюють локально і в CI: конфіг у YAML або тести на pytest, без зовнішнього сервісу. Обирають одну.',why:'Найшвидший старт для команди, яка вже має репо і CI, але не має evals.',
          links:[
            {t:'promptfoo Docs: Intro',u:'https://www.promptfoo.dev/docs/intro/',k:'doc',s:'promptfoo Docs'},
            {t:'Start with PromptFoo in under 10 min.',u:'https://www.youtube.com/watch?v=7Z6_7XkXwj0',k:'video',s:'YouTube · Jason Koo'},
            {t:'How to Systematically Setup LLM Evals (Metrics, Unit Tests, LLM-as-a-Judge)',u:'https://www.youtube.com/watch?v=a3SMraZWNNs',k:'video',s:'YouTube · Dave Ebbelaar'}
          ],
          children:[
            {label:'promptfoo',type:'alt',desc:'CLI і YAML-конфіг: промпти, провайдери, assertions, model-graded метрики, red teaming, GitHub Action.',why:'Найпоширеніший старт для evals промптів без коду.',
              links:[
                {t:'promptfoo Docs: Intro',u:'https://www.promptfoo.dev/docs/intro/',k:'doc',s:'promptfoo Docs'},
                {t:'promptfoo/promptfoo',u:'https://github.com/promptfoo/promptfoo',k:'github',s:'GitHub'}
              ]},
            {label:'DeepEval',type:'alt',desc:'Python-фреймворк на pytest з готовими метриками: G-Eval, faithfulness, answer relevancy, tool correctness.',why:'Для команди на Python, яка хоче evals як звичайні тести.',
              links:[
                {t:'DeepEval: Getting Started',u:'https://deepeval.com/docs/getting-started',k:'doc',s:'DeepEval Docs'},
                {t:'confident-ai/deepeval',u:'https://github.com/confident-ai/deepeval',k:'github',s:'GitHub'}
              ]},
            {label:'Ragas',type:'alt',desc:'Бібліотека метрик для RAG: faithfulness, context precision і recall, answer correctness, генерація тестових наборів.',why:'Коли головний обʼєкт оцінки це RAG-пайплайн, а не промпт.',
              links:[
                {t:'Ragas Documentation',u:'https://docs.ragas.io/en/stable/',k:'doc',s:'Ragas Docs'},
                {t:'explodinggradients/ragas',u:'https://github.com/explodinggradients/ragas',k:'github',s:'GitHub'}
              ]},
            {label:'TruLens',type:'alt',desc:'Трейсинг і feedback functions для RAG та агентів; RAG triad: context relevance, groundedness, answer relevance.',why:'Альтернатива Ragas з акцентом на трейси і оцінку в циклі розробки.',
              links:[
                {t:'TruLens: Evals and Tracing for AI Agents',u:'https://www.trulens.org/',k:'doc',s:'TruLens'},
                {t:'truera/trulens',u:'https://github.com/truera/trulens',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Інструменти: платформи з трейсингом',type:'optional',desc:'Трейси з проду, датасети, експерименти, судді й анотація в одному сервісі для всієї команди. Обирають одну.',why:'Коли evals і observability має бачити вся команда, не лише автор скрипта.',
          links:[
            {t:'Intro to Braintrust: AI Observability and Evals',u:'https://www.youtube.com/watch?v=qpmMxRwXzEQ',k:'video',s:'YouTube · Braintrust'},
            {t:'Getting Started with LangSmith (5/8): Datasets & Evaluations',u:'https://www.youtube.com/watch?v=iEgjJyk3aTw',k:'video',s:'YouTube · LangChain'},
            {t:'Langfuse Intro - Evaluations Deep Dive',u:'https://www.youtube.com/watch?v=hlgfW0IyREc',k:'video',s:'YouTube · Langfuse'}
          ],
          children:[
            {label:'Braintrust',type:'alt',desc:'Платформа evals і логів: SDK Eval(), autoevals-скорери, експерименти з baseline, online scoring.',why:'Сильний бік: порівняння експериментів і eval-first процес.',
              links:[
                {t:'Braintrust docs',u:'https://www.braintrust.dev/docs',k:'doc',s:'Braintrust Docs'},
                {t:'braintrustdata/autoevals',u:'https://github.com/braintrustdata/autoevals',k:'github',s:'GitHub'}
              ]},
            {label:'LangSmith',type:'alt',desc:'Платформа LangChain: трейсинг, датасети, offline і online evaluation, annotation queues, pytest-інтеграція.',why:'Природний вибір, якщо стек уже на LangChain або LangGraph.',
              links:[
                {t:'LangSmith Evaluation',u:'https://docs.langchain.com/langsmith/evaluation',k:'doc',s:'LangSmith Docs'},
                {t:'Evaluation concepts',u:'https://docs.langchain.com/langsmith/evaluation-concepts',k:'doc',s:'LangSmith Docs'}
              ]},
            {label:'Langfuse',type:'alt',desc:'Open-source платформа: трейси, scores, датасети, LLM-as-a-judge, user feedback; self-hosted або cloud.',why:'Коли дані мають лишатись у себе або потрібен open-source.',
              links:[
                {t:'Evaluation of LLM Applications',u:'https://langfuse.com/docs/evaluation/overview',k:'doc',s:'Langfuse Docs'},
                {t:'langfuse/langfuse',u:'https://github.com/langfuse/langfuse',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Інструменти: трейсинг і research harness-и',type:'optional',desc:'Трейсинг з вбудованими оцінками (Arize Phoenix, W&B Weave, MLflow) і дослідницькі harness-и для бенчмарків (Inspect AI, lm-evaluation-harness, openai/evals).',why:'Якщо трейсинг уже є, evals додаються туди ж; harness потрібен, коли порівнюють моделі на стандартних наборах.',
          links:[
            {t:'LLM and Agent Evaluation',u:'https://mlflow.org/docs/latest/genai/eval-monitor/',k:'doc',s:'MLflow Docs'},
            {t:'EleutherAI/lm-evaluation-harness',u:'https://github.com/EleutherAI/lm-evaluation-harness',k:'github',s:'GitHub'},
            {t:'openai/evals',u:'https://github.com/openai/evals',k:'github',s:'GitHub',w:'Open-source реєстр, уже не розвивається'},
            {t:'Inspect, an OSS Framework for LLM Evals',u:'https://www.youtube.com/watch?v=kNaZU9bz-UM',k:'video',s:'YouTube · Hamel Husain'}
          ],
          children:[
            {label:'Arize Phoenix',type:'alt',desc:'Open-source трейсинг на OpenTelemetry з evals: LLM-судді, RAG-метрики, порівняння експериментів.',why:'Коли вже є OpenTelemetry і потрібен self-hosted інструмент.',
              links:[
                {t:'What is Arize Phoenix?',u:'https://arize.com/docs/phoenix',k:'doc',s:'Arize Phoenix'},
                {t:'Arize-ai/phoenix',u:'https://github.com/Arize-ai/phoenix',k:'github',s:'GitHub'}
              ]},
            {label:'Weights & Biases Weave',type:'alt',desc:'Трейсинг і evaluations від W&B: Evaluation-обʼєкти, скорери, порівняння прогонів у звичному UI W&B.',why:'Природний вибір для команд, що вже ведуть ML-експерименти у W&B.',
              links:[
                {t:'W&B Weave',u:'https://weave-docs.wandb.ai/',k:'doc',s:'W&B Weave Docs'},
                {t:'wandb/weave',u:'https://github.com/wandb/weave',k:'github',s:'GitHub'}
              ]},
            {label:'Inspect AI',type:'alt',desc:'Open-source фреймворк UK AI Security Institute: tasks, solvers, scorers, готові реалізації бенчмарків і safety-evals.',why:'Коли треба порівнювати моделі на стандартних наборах або будувати agentic evals у пісочниці.',
              links:[
                {t:'Inspect',u:'https://inspect.aisi.org.uk/',k:'doc',s:'UK AI Security Institute'},
                {t:'UKGovernmentBEIS/inspect_ai',u:'https://github.com/UKGovernmentBEIS/inspect_ai',k:'github',s:'GitHub'}
              ]},
            {label:'lm-evaluation-harness',type:'alt',desc:'Harness від EleutherAI із сотнями академічних бенчмарків для відкритих і hosted моделей; стандарт для карток моделей.',why:'Коли ви файнтюните або хостите власну модель і маєте підтвердити її рівень.',
              links:[
                {t:'EleutherAI/lm-evaluation-harness',u:'https://github.com/EleutherAI/lm-evaluation-harness',k:'github',s:'GitHub'}
              ]}
          ]}
      ]},
    {label:'Evals для агентів',side:'right',desc:'Оцінка не однієї відповіді, а траєкторії: кроків, викликів тулів, кінцевого результату задачі. Еталон підходу: Anthropic «Demystifying evals for AI agents».',why:'Агент може дати правильну фінальну відповідь, зробивши дорогою небезпечну або зайву дію.',
      links:[
        {t:'Demystifying evals for AI agents',u:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',k:'article',y:2026,s:'Anthropic Engineering'},
        {t:'Evals for AI agents: How product builders get the most out of every new model',u:'https://claude.com/resources/webinars/evals-for-ai-agents-how-product-builders-get-the-most-out-of-every-new-model',k:'video',y:2026,s:'Anthropic'},
        {t:'Why evaluate agents',u:'https://google.github.io/adk-docs/evaluate/',k:'doc',s:'Google ADK Docs',w:'Trajectory і final response як два окремі обʼєкти оцінки'},
        {t:'langchain-ai/agentevals',u:'https://github.com/langchain-ai/agentevals',k:'github',y:2025,s:'GitHub'},
        {t:'Ship Real Agents: Hands-On Evals for Agentic Applications - Laurie Voss, Arize',u:'https://www.youtube.com/watch?v=Xfl50508LZM',k:'video',y:2025,s:'YouTube · AI Engineer'},
        {t:'Agentic Evaluations Workshop - Deep Dive on the Future on Evals for Agents.',u:'https://www.youtube.com/watch?v=UxMZfbWI3LY',k:'video',s:'YouTube · Hugging Face'},
        {t:'Evals for subjective, stateful agents',u:'https://claude.com/code-with-claude/session/sf-ext-evals-for-subjective-stateful-agents',k:'video',y:2026,s:'Anthropic · Code with Claude'}
      ],
      children:[
        {label:'Успіх задачі як кінцевий стан',desc:'Перевіряється результат у системі: тікет створено з правильними полями, файл змінено, тест проходить. Anthropic називає це outcome grading.',why:'Текст «готово» від агента нічого не доводить; доводить стан системи після нього.',
          links:[
            {t:'Demystifying evals for AI agents',u:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',k:'article',y:2026,s:'Anthropic Engineering'}
          ]},
        {label:'Траєкторія і tool-call accuracy',desc:'Послідовність викликів тулів порівнюється з очікуваною: ті самі тули, допустимий порядок, без заборонених дій. agentevals дає strict, unordered і subset режими.',why:'Виявляє агента, що досягає мети обхідним і ризикованим шляхом.',
          links:[
            {t:'langchain-ai/agentevals',u:'https://github.com/langchain-ai/agentevals',k:'github',y:2025,s:'GitHub'},
            {t:'Why evaluate agents',u:'https://google.github.io/adk-docs/evaluate/',k:'doc',s:'Google ADK Docs'}
          ]},
        {label:'Кількість кроків і вартість прогону',desc:'Скільки викликів моделі і тулів знадобилось, скільки токенів спожито.',why:'Агент, що розвʼязує задачу за 40 кроків замість 5, працює, але неприпустимо дорого.',links:[{t:'Demystifying evals for AI agents',u:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',k:'article',y:2026,s:'Anthropic Engineering'}]},
        {label:'Ізольоване середовище для прогону',desc:'Агент під evals працює на копії даних або в пісочниці з моками тулів, що пишуть; бенчмарки роблять це контейнерами (SWE-bench, Terminal-Bench).',why:'Evals, які створюють реальні тікети і надсилають реальні листи, це інцидент, а не тест.',
          links:[
            {t:'Everything Is a Rollout - Alex Shaw + Ryan Marten, Terminal-Bench, Harbor, Laude Institute',u:'https://www.youtube.com/watch?v=jRCpXUjz4CI',k:'video',y:2026,s:'YouTube · AI Engineer',w:'Harbor: контейнери для тисяч паралельних прогонів'}
          ]},
        {label:'Симульований користувач у multi-turn',desc:'Друга модель грає користувача за сценарієм, щоб перевірити агента в діалозі на кілька ходів. Так влаштований τ-bench.',why:'Більшість агентів ламаються не на першому запиті, а на третьому уточненні.',
          links:[
            {t:'τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains',u:'https://arxiv.org/abs/2406.12045',k:'article',y:2024,s:'arXiv · Sierra'},
            {t:'sierra-research/tau2-bench',u:'https://github.com/sierra-research/tau2-bench',k:'github',y:2025,s:'GitHub'}
          ]},
        {label:'Відновлення після помилки тула',type:'optional',desc:'Кейси, де тул повертає помилку, і перевірка, чи агент коректно її обробив.',why:'У проді тули падають; агент, який цього не переживає, не готовий.',links:[{t:'Writing effective tools for AI agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic Engineering',w:'Як повідомлення про помилку тула має допомагати агенту'}]},
        {label:'Публічні бенчмарки агентів',desc:'SWE-bench Verified для коду, Terminal-Bench для CLI, τ-bench для діалогових агентів, GAIA, WebArena, OSWorld, BrowseComp для асистентів і computer use.',why:'Показують, що взагалі вміють моделі, і дають готові приклади, як будувати власні agent evals.',
          links:[
            {t:'Demystifying evals for AI agents',u:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',k:'article',y:2026,s:'Anthropic Engineering',w:'Огляд бенчмарків агентів з коментарями'},
            {t:'What do AI Benchmarks Actually Mean?! A Fast Breakdown (MMLU, SWE-bench, & More Explained)',u:'https://www.youtube.com/watch?v=fSWg4HAJjBo',k:'video',s:'YouTube · Wish Lab'}
          ],
          children:[
            {label:'SWE-bench і SWE-bench Verified',desc:'Реальні GitHub issues з тестами; Verified це 500 задач, перевірених людьми.',why:'Головний бенчмарк coding-агентів і зразок грейдингу через тести.',
              links:[
                {t:'SWE-bench Leaderboards',u:'https://www.swebench.com/',k:'doc',s:'SWE-bench'},
                {t:'Introducing SWE-bench Verified',u:'https://openai.com/index/introducing-swe-bench-verified/',k:'article',y:2024,s:'OpenAI'},
                {t:'SWE-bench/SWE-bench',u:'https://github.com/SWE-bench/SWE-bench',k:'github',s:'GitHub'},
                {t:'Чому агент тупить при вирішенні бажинок?',u:'https://t.me/beerphp/182',k:'post',y:2026,s:'beerphp',w:'Чому один баг агент фіксить одразу, а інший ні'}
              ]},
            {label:'Terminal-Bench 2.0 і Harbor',desc:'89 задач у терміналі з контейнерами; Harbor запускає тисячі прогонів паралельно.',why:'Найближче до того, як агенти працюють у реальному середовищі розробника.',
              links:[
                {t:'Terminal-Bench',u:'https://www.tbench.ai/',k:'doc',s:'Terminal-Bench'},
                {t:'laude-institute/terminal-bench',u:'https://github.com/laude-institute/terminal-bench',k:'github',s:'GitHub'},
                {t:'Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces',u:'https://arxiv.org/abs/2601.11868',k:'article',y:2026,s:'arXiv'},
                {t:'Terminal-Bench: Evaluating AI Agents | Stanford CS329Z Guest Lecture with Alex Shaw & Ryan Marten',u:'https://www.youtube.com/watch?v=7GW-9ug2nvw',k:'video',s:'YouTube · Stanford Online'}
              ]},
            {label:'τ-bench і τ²-bench',desc:'Агент підтримки (авіалінії, рітейл, телеком) з симульованим користувачем і правилами домену.',why:'Еталон для діалогових агентів з тулами і метрики pass^k.',
              links:[
                {t:'sierra-research/tau-bench',u:'https://github.com/sierra-research/tau-bench',k:'github',y:2024,s:'GitHub'},
                {t:'sierra-research/tau2-bench',u:'https://github.com/sierra-research/tau2-bench',k:'github',y:2025,s:'GitHub'},
                {t:'τ-bench: Evaluating Real-World Tool-Agent-User Interaction',u:'https://www.youtube.com/watch?v=lTwnhgZ0-qQ',k:'video',s:'YouTube · Andriy Batutin'}
              ]},
            {label:'GAIA, WebArena, OSWorld',desc:'Асистенти загального призначення, веб, робочий стіл і пошук в інтернеті.',why:'Показують, що computer use і browsing агенти ще далеко від людини.',
              links:[
                {t:'GAIA: a benchmark for General AI Assistants',u:'https://arxiv.org/abs/2311.12983',k:'article',y:2023,s:'arXiv'},
                {t:'WebArena',u:'https://webarena.dev/',k:'doc',s:'WebArena'},
                {t:'OSWorld: Benchmarking Multimodal Agents for Open-Ended Tasks in Real Computer Environments',u:'https://os-world.github.io/',k:'doc',s:'OSWorld'},
                {t:'BrowseComp: a benchmark for browsing agents',u:'https://openai.com/index/browsecomp/',k:'article',y:2025,s:'OpenAI'}
              ]}
          ]}
      ]},
    {label:'Evals для RAG',side:'left',desc:'Пошук і генерація міряються окремо: recall@k для retrieval, faithfulness і answer correctness для відповіді. Готові метрики: Ragas, TruLens (RAG triad), Arize Phoenix.',why:'Одна метрика на весь RAG не каже, що саме лагодити; дві кажуть.',
      links:[
        {t:'Ragas Documentation',u:'https://docs.ragas.io/en/stable/',k:'doc',s:'Ragas Docs',w:'Faithfulness, context precision/recall, answer relevancy'},
        {t:'Ragas: Automated Evaluation of Retrieval Augmented Generation',u:'https://arxiv.org/abs/2309.15217',k:'article',y:2023,s:'arXiv'},
        {t:'RAG Evaluation',u:'https://huggingface.co/learn/cookbook/rag_evaluation',k:'doc',s:'Hugging Face Cookbook',w:'Ноутбук: синтетичні питання, суддя, порівняння chunking'},
        {t:'TruLens: Evals and Tracing for AI Agents',u:'https://www.trulens.org/',k:'doc',s:'TruLens',w:'RAG triad: context relevance, groundedness, answer relevance'},
        {t:'Evaluate AI Agents in Python with Ragas',u:'https://www.youtube.com/watch?v=dOKHuw52YTA',k:'video',s:'YouTube · NeuralNine'},
        {t:'ARES: An Automated Evaluation Framework for Retrieval-Augmented Generation Systems',u:'https://arxiv.org/abs/2311.09476',k:'article',y:2023,s:'arXiv'}
      ],
      children:[
        {label:'Пошук: recall@k на еталонних фрагментах',desc:'Для кожного питання відомо, які фрагменти мали знайтись; міряється, яка частка потрапила у топ-k. Для вибору embedding-моделі дивляться MTEB і BEIR.',why:'Падіння recall після зміни chunking або індексу видно одразу, а не через скарги.',
          links:[
            {t:'MTEB Leaderboard',u:'https://huggingface.co/spaces/mteb/leaderboard',k:'doc',s:'Hugging Face',w:'Порівняння embedding-моделей на retrieval-задачах'},
            {t:'beir-cellar/beir',u:'https://github.com/beir-cellar/beir',k:'github',s:'GitHub',w:'Zero-shot retrieval бенчмарк і nDCG@k, recall@k'},
            {t:'Generative Evals for benchmarking embedding models',u:'https://www.youtube.com/watch?v=kJ35KUr5yIg',k:'video',s:'YouTube · Jason Liu'}
          ]},
        {label:'Генерація: faithfulness і correctness',desc:'Чи відповідь спирається на знайдене (faithfulness, groundedness) і чи вона правильна (answer correctness); суддя з доступом до фрагментів і еталону.',why:'Відокремлює галюцинації моделі від поганого пошуку.',
          links:[
            {t:'Faithfulness',u:'https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/',k:'doc',s:'Ragas Docs'},
            {t:'Evaluation & Hallucination Detection for Abstractive Summaries',u:'https://eugeneyan.com/writing/abstractive/',k:'article',y:2024,s:'Eugene Yan',w:'Як ловити вигадане у відповіді на основі джерела'}
          ]},
        {label:'Кейси «відповіді немає»',desc:'Питання, на які документи не відповідають; очікування: модель каже про це, а не вигадує.',why:'Найдорожча помилка RAG перевіряється саме цими кейсами.',links:[{t:'Evaluation & Hallucination Detection for Abstractive Summaries',u:'https://eugeneyan.com/writing/abstractive/',k:'article',y:2024,s:'Eugene Yan'}]},
        {label:'Синтетичні питання до документів',type:'optional',desc:'Модель генерує питання і еталонні відповіді з ваших документів; людина перевіряє вибірку. Ragas testset generation робить це з урахуванням типів питань.',why:'Ручне складання еталонів для RAG повільне; синтетика дає перший набір за годину.',
          links:[
            {t:'Testset Generation',u:'https://docs.ragas.io/en/stable/concepts/test_data_generation/',k:'doc',s:'Ragas Docs'},
            {t:'RAG Evaluation',u:'https://huggingface.co/learn/cookbook/rag_evaluation',k:'doc',s:'Hugging Face Cookbook'}
          ]},
        {label:'Відтворення контексту',type:'optional',desc:'У звіті зберігаються знайдені фрагменти, щоб поломку можна було розібрати без повторного пошуку.',why:'Через місяць індекс інший, і без збереженого контексту причину вже не знайти.',
          links:[
            {t:'What is Arize Phoenix?',u:'https://arize.com/docs/phoenix',k:'doc',s:'Arize Phoenix',w:'Трейс RAG зі збереженими фрагментами'}
          ]}
      ]},
    {label:'Бенчмарки та їхні межі',side:'right',desc:'Публічні бенчмарки (MMLU, SWE-bench, Humanity\'s Last Exam, ARC-AGI) і лідерборди (LMArena, HELM, Epoch AI) порівнюють моделі між собою, але не відповідають, чи працює модель на вашій задачі.',why:'Вибір моделі за лідербордом без власного набору це ставка на чужі кейси; контамінація і вибіркова публікація результатів роблять її ще гіршою.',
      links:[
        {t:'Holistic Evaluation of Language Models (HELM)',u:'https://crfm.stanford.edu/helm/',k:'doc',s:'Stanford CRFM'},
        {t:'AI benchmarks & capabilities',u:'https://epoch.ai/benchmarks',k:'doc',s:'Epoch AI',w:'Незалежні прогони моделей на основних бенчмарках'},
        {t:'Benchmark Data Contamination of Large Language Models: A Survey',u:'https://arxiv.org/abs/2406.04244',k:'article',y:2024,s:'arXiv'},
        {t:'The Leaderboard Illusion',u:'https://arxiv.org/abs/2504.20879',k:'article',y:2025,s:'arXiv',w:'Критика Chatbot Arena: приватне тестування і вибіркова публікація'},
        {t:'huggingface/evaluation-guidebook',u:'https://github.com/huggingface/evaluation-guidebook',k:'github',y:2024,s:'GitHub',w:'Практика і теорія оцінки LLM від команди Open LLM Leaderboard'},
        {t:'Task-Specific LLM Evals that Do & Don\'t Work',u:'https://eugeneyan.com/writing/evals/',k:'article',y:2024,s:'Eugene Yan'}
      ],
      children:[
        {label:'Академічні бенчмарки: MMLU, HLE, ARC-AGI',desc:'MMLU перевіряє знання тестами з варіантами, Humanity\'s Last Exam збирає експертні питання на межі можливого, ARC-AGI міряє узагальнення на нових задачах.',why:'Корисно знати, що саме стоїть за цифрою в анонсі моделі.',
          links:[
            {t:'Measuring Massive Multitask Language Understanding',u:'https://arxiv.org/abs/2009.03300',k:'article',y:2020,s:'arXiv',w:'Стаття про MMLU'},
            {t:'Humanity\'s Last Exam',u:'https://lastexam.ai/',k:'doc',s:'Center for AI Safety · Scale AI'},
            {t:'ARC Prize',u:'https://arcprize.org/',k:'doc',s:'ARC Prize'}
          ]},
        {label:'Лідерборди: LMArena, HELM, Epoch AI',desc:'LMArena збирає парні оцінки людей наосліп, HELM ганяє стандартний набір сценаріїв, Epoch AI незалежно відтворює результати.',why:'Різні лідерборди міряють різне; розбіжність між ними сама по собі інформативна.',
          links:[
            {t:'Holistic Evaluation of Language Models (HELM)',u:'https://crfm.stanford.edu/helm/',k:'doc',s:'Stanford CRFM'},
            {t:'AI benchmarks & capabilities',u:'https://epoch.ai/benchmarks',k:'doc',s:'Epoch AI'},
            {t:'LMArena Co-Founders on the Future of AI Rankings',u:'https://www.youtube.com/watch?v=pF1-xRzOZ9g',k:'video',s:'YouTube · Bloomberg Live'}
          ]},
        {label:'Контамінація і saturation',desc:'Тестові дані потрапляють у тренувальний корпус, і бенчмарк завищує результат; коли топ-моделі набирають 90%+, бенчмарк перестає розрізняти. Відповідь: живі бенчмарки з новими задачами (LiveBench, LiveCodeBench).',why:'Та сама проблема у вашому golden dataset, якщо кейси потрапили у few-shot промпт.',
          links:[
            {t:'Benchmark Data Contamination of Large Language Models: A Survey',u:'https://arxiv.org/abs/2406.04244',k:'article',y:2024,s:'arXiv'},
            {t:'A Careful Examination of Large Language Model Performance on Grade School Arithmetic',u:'https://arxiv.org/abs/2405.00332',k:'article',y:2024,s:'arXiv',w:'GSM1k: падіння до 13% на незабруднених копіях задач'},
            {t:'LiveBench 2.0 - A challenging, contamination-free long-horizon AI benchmark',u:'https://livebench.ai/',k:'doc',s:'LiveBench'},
            {t:'LiveCodeBench: Holistic and Contamination Free Evaluation of Large Language Models for Code',u:'https://livecodebench.github.io/',k:'doc',s:'LiveCodeBench'}
          ]},
        {label:'Вибіркова публікація результатів',desc:'Лабораторії тестують десятки варіантів приватно і публікують найкращий; рейтинг зсувається у бік тих, хто тестує більше.',why:'Різниця між сусідніми моделями в рейтингу часто менша за цей ефект.',
          links:[
            {t:'The Leaderboard Illusion',u:'https://arxiv.org/abs/2504.20879',k:'article',y:2025,s:'arXiv'},
            {t:'New Research: LMArena is "rigged"',u:'https://www.youtube.com/watch?v=9W_OhS38rIE',k:'video',y:2025,s:'YouTube · Machine Learning Street Talk'}
          ]},
        {label:'Бенчмарк не дорівнює вашій задачі',desc:'Модель з найвищим SWE-bench може програвати дешевшій на ваших тікетах; вибір моделі робиться прогоном власного golden dataset.',why:'Публічний бенчмарк відповідає на питання «яка модель сильніша», а не «яка працює у нас».',
          links:[
            {t:'Task-Specific LLM Evals that Do & Don\'t Work',u:'https://eugeneyan.com/writing/evals/',k:'article',y:2024,s:'Eugene Yan'},
            {t:'AI Engineering with Chip Huyen',u:'https://www.youtube.com/watch?v=98o_L3jlixw',k:'video',y:2025,s:'YouTube · The Pragmatic Engineer'},
            {t:'How to evaluate LLMs for your use case? [AI Engineer Summit talk]',u:'https://www.youtube.com/watch?v=G5kBarp2vX0',k:'video',s:'YouTube · Airtrain AI'}
          ]},
        {label:'Harness для прогону бенчмарків',type:'optional',desc:'lm-evaluation-harness (EleutherAI), Inspect Evals (UK AISI), OpenAI simple-evals: готові реалізації сотень бенчмарків для своїх або відкритих моделей.',why:'Потрібно, коли ви файнтюните або хостите власну модель і маєте підтвердити її рівень.',
          links:[
            {t:'EleutherAI/lm-evaluation-harness',u:'https://github.com/EleutherAI/lm-evaluation-harness',k:'github',s:'GitHub'},
            {t:'Evals',u:'https://inspect.aisi.org.uk/evals/',k:'doc',s:'Inspect AI (UK AISI)',w:'Готові реалізації бенчмарків для Inspect'},
            {t:'openai/simple-evals',u:'https://github.com/openai/simple-evals',k:'github',s:'GitHub'},
            {t:'Evaluate on the Hub',u:'https://huggingface.co/docs/evaluate/index',k:'doc',s:'Hugging Face Docs'}
          ]}
      ]},
    {label:'Online evals і зворотний звʼязок',side:'left',desc:'Оцінка якості на реальному трафіку: сигнали від користувачів, вибіркова розмітка, A/B-порівняння версій.',why:'Offline набір не бачить, як змінились запити користувачів; прод бачить.',
      links:[
        {t:'Your AI Product Needs Evals',u:'https://hamel.dev/blog/posts/evals/',k:'article',y:2024,s:'Hamel Husain',w:'Рівень 3: A/B-тести як верхній рівень evals'},
        {t:'Evaluation of LLM Applications',u:'https://langfuse.com/docs/evaluation/overview',k:'doc',s:'Langfuse Docs',w:'Online-оцінка трейсів з проду суддею'},
        {t:'LLM and Agent Evaluation',u:'https://mlflow.org/docs/latest/genai/eval-monitor/',k:'doc',s:'MLflow Docs',w:'Моніторинг якості на проді тими ж скорерами'},
        {t:'The Hidden Signal in Production AI Logs: Scott Clark with Jason Liu',u:'https://www.youtube.com/watch?v=QBaSnETJr4Q',k:'video',s:'YouTube · Distributional'},
        {t:'Experiment Guide - Accelerate innovation using trustworthy online controlled experiments',u:'https://experimentguide.com/',k:'course',s:'Kohavi, Tang, Xu',w:'Сайт книги про A/B-тести, яка стала стандартом'}
      ],
      children:[
        {label:'Offline проти online',desc:'Offline: фіксований набір до релізу. Online: оцінка реальних прогонів після релізу, вибірково або суддею.',why:'Обидва потрібні: offline блокує регресію, online знаходить нові кейси для набору.',
          links:[
            {t:'Evaluation concepts',u:'https://docs.langchain.com/langsmith/evaluation-concepts',k:'doc',s:'LangSmith Docs',w:'Offline і online evaluation як два режими'}
          ]},
        {label:'Сигнали від користувачів',desc:'Оцінки thumbs up/down, повторні запити, редагування відповіді, відмова від результату.',why:'Дешевий, хоч і шумний, сигнал, який показує, де offline набір не покриває реальність.',
          links:[
            {t:'Evaluation of LLM Applications',u:'https://langfuse.com/docs/evaluation/overview',k:'doc',s:'Langfuse Docs',w:'User feedback як окремий тип score'}
          ]},
        {label:'A/B-тест версій промпту',type:'optional',desc:'Дві версії на частках трафіку з порівнянням метрик якості, вартості і latency.',why:'Остаточна відповідь, чи нова версія краща для користувачів, а не лише для golden dataset.',
          links:[
            {t:'Experiment Guide - Accelerate innovation using trustworthy online controlled experiments',u:'https://experimentguide.com/',k:'course',s:'Kohavi, Tang, Xu'}
          ]},
        {label:'Вибіркова оцінка прод-логів суддею',desc:'Частка реальних прогонів щодня проходить через суддю; падіння оцінки означає дрейф.',why:'Модель провайдера змінюється без вашого відома; це єдиний спосіб помітити.',
          links:[
            {t:'Evaluation',u:'https://arize.com/docs/phoenix/evaluation/llm-evals',k:'doc',s:'Arize Phoenix'},
            {t:'evidentlyai/evidently',u:'https://github.com/evidentlyai/evidently',k:'github',s:'GitHub',w:'Open-source моніторинг і тести для LLM-виходів'}
          ]},
        {label:'З проду в golden dataset',desc:'Погано оцінені прод-кейси після ручної перевірки додаються до набору.',why:'Так набір росте разом із продуктом, а не застигає на день запуску.',
          links:[
            {t:'A Field Guide to Rapidly Improving AI Products',u:'https://hamel.dev/blog/posts/field-guide/',k:'article',y:2025,s:'Hamel Husain',w:'Цикл: прод, error analysis, набір, прогін'}
          ]}
      ]},
    {label:'Люди в циклі і red-teaming',side:'right',desc:'Ручна розмітка, згода між оцінювачами, red-teaming: те, що модель-суддя не замінить. Red-teaming evals це міст від evals до розділу безпеки.',why:'Суддя калібрується на людській розмітці; без людей у циклі evals міряють невідомо що.',
      links:[
        {t:'AI Evals: Everything You Need to Know',u:'https://hamel.dev/blog/posts/evals-faq/',k:'article',y:2025,s:'Hamel Husain',w:'Хто має розмічати і скільки людей треба'},
        {t:'LLM red teaming guide (open source)',u:'https://www.promptfoo.dev/docs/red-team/',k:'doc',s:'promptfoo Docs'},
        {t:'Challenges in red teaming AI systems',u:'https://www.anthropic.com/news/challenges-in-red-teaming-ai-systems',k:'article',y:2024,s:'Anthropic'},
        {t:'OWASP Top 10 for LLM Applications',u:'https://genai.owasp.org/llm-top-10/',k:'doc',y:2025,s:'OWASP GenAI',w:'Список ризиків, з якого беруть категорії для adversarial-кейсів'},
        {t:'Безпека AI-агентів: як атакують Claude Code, Cursor і Codex',u:'https://www.youtube.com/watch?v=QKRs6IHV-y4',k:'video',y:2026,s:'BeerCode'},
        {t:'Open Source Data Labeling and AI Evaluation',u:'https://labelstud.io/',k:'doc',s:'Label Studio'}
      ],
      children:[
        {label:'Ручна розмітка еталонів',desc:'Люди розмічають частину відповідей за тією ж рубрикою, що й суддя. Інструменти: Label Studio, Argilla, або звичайна таблиця для перших сотень.',why:'Це єдиний спосіб дізнатись, чи суддя оцінює те, що ви маєте на увазі.',
          links:[
            {t:'Open Source Data Labeling and AI Evaluation',u:'https://labelstud.io/',k:'doc',s:'Label Studio'},
            {t:'argilla-io/argilla',u:'https://github.com/argilla-io/argilla',k:'github',s:'GitHub'},
            {t:'AI Evals: Everything You Need to Know',u:'https://hamel.dev/blog/posts/evals-faq/',k:'article',y:2025,s:'Hamel Husain',w:'Чому власний простий інтерфейс розмітки часто кращий'}
          ]},
        {label:'Згода між оцінювачами',desc:'Двоє людей розмічають одне й те ж; згоду міряють Cohen\'s kappa або Krippendorff\'s alpha. Низька згода означає нечітку рубрику, а не поганого суддю.',why:'Якщо люди не згодні між собою, суддя не може бути правий.',
          links:[
            {t:'Cohen\'s kappa',u:'https://en.wikipedia.org/wiki/Cohen%27s_kappa',k:'doc',s:'Wikipedia'},
            {t:'Krippendorff\'s alpha',u:'https://en.wikipedia.org/wiki/Krippendorff%27s_alpha',k:'doc',s:'Wikipedia'}
          ]},
        {label:'Red-teaming і adversarial кейси',type:'optional',desc:'Навмисні спроби зламати систему: prompt injection, jailbreak, витік системного промпту, обхід обмежень; кожна успішна стає кейсом. Інструменти: promptfoo red team, garak (NVIDIA), PyRIT (Microsoft).',why:'Безпека і guardrails перевіряються тими ж evals; це перший рівень захисту перед окремим розділом про security.',
          links:[
            {t:'LLM red teaming guide (open source)',u:'https://www.promptfoo.dev/docs/red-team/',k:'doc',s:'promptfoo Docs'},
            {t:'NVIDIA/garak',u:'https://github.com/NVIDIA/garak',k:'github',s:'GitHub',w:'Сканер уразливостей LLM з сотнями проб'},
            {t:'Azure/PyRIT',u:'https://github.com/Azure/PyRIT',k:'github',s:'GitHub',w:'Python Risk Identification Tool від Microsoft'},
            {t:'Red Team an AI App with Promptfoo',u:'https://www.youtube.com/watch?v=e7MlDhfN22s',k:'video',s:'YouTube · Promptfoo'}
          ],
          children:[
            {label:'Prompt injection у кейсах',desc:'Інструкції у даних (документ, email, результат тула), які модель не має виконувати.',why:'OWASP LLM01; найчастіша атака на агентів з тулами.',
              links:[{t:'OWASP Top 10 for LLM Applications',u:'https://genai.owasp.org/llm-top-10/',k:'doc',y:2025,s:'OWASP GenAI'}]},
            {label:'Safety-evals: шкідливий контент',desc:'Набори запитів, на які модель має відмовити, і перевірка, що відмова справді є.',why:'Відмови теж регресують після зміни системного промпту.',
              links:[{t:'Evals',u:'https://inspect.aisi.org.uk/evals/',k:'doc',s:'Inspect AI (UK AISI)',w:'Готові safety-бенчмарки в Inspect'}]},
            {label:'Автоматичний атакувальник',desc:'Модель генерує атаки, інша перевіряє успіх; людина дивиться знахідки.',why:'Ручний red-teaming не встигає за кожним релізом.',
              links:[{t:'Exploring Promptfoo\'s Red Teaming Capabilities',u:'https://www.youtube.com/watch?v=lqhKIjWoeuM',k:'video',s:'YouTube · Promptfoo'}]}
          ]},
        {label:'Ревʼю звіту перед релізом',desc:'Людина читає кейси, що змінили статус між прогонами, а не лише підсумкове число.',why:'Один критичний кейс, що впав, важить більше за три неважливих, що піднялись.',
          links:[
            {t:'Evaluations overview',u:'https://weave-docs.wandb.ai/guides/core-types/evaluations/',k:'doc',s:'W&B Weave Docs',w:'Порівняння двох прогонів кейс до кейсу'}
          ]}
      ]}
  ]
};
