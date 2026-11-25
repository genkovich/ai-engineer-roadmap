window.ROADMAPS=window.ROADMAPS||{};
window.ROADMAPS['llm-api']={
  slug:'llm-api',
  title:'LLM API і structured outputs',
  intro:'Інтеграція з моделлю як із будь-якою зовнішньою залежністю, тільки відповідь щоразу трохи інша. Це бекендерська територія: запит, відповідь, помилки, ліміти, ціна. Без надійного виклику і відповіді за схемою неможливо будувати RAG, агентів і evals далі.',
  root:{label:'LLM API і structured outputs',kicker:'Основа кожної AI-фічі',desc:'Виклик моделі з коду через Anthropic Messages API, OpenAI Responses API чи Gemini API: запит, відповідь, стрімінг, помилки, ліміти, токени і ціна. Structured outputs: відповідь у форматі за JSON Schema, яку код розбирає без евристик.',why:'Кожна AI-фіча в проді починається з виклику API. Якщо він ненадійний або відповідь неструктурована, усе зверху ламається.',links:[
    {t:'Get started with Claude',u:'https://platform.claude.com/docs/en/get-started',k:'doc',s:'Anthropic Docs',w:'Перший запит до Messages API за десять хвилин'},
    {t:'Developer quickstart',u:'https://developers.openai.com/api/docs/quickstart',k:'doc',s:'OpenAI Docs',w:'Той самий перший запит у OpenAI Responses API'},
    {t:'Getting started - Gemini API',u:'https://ai.google.dev/gemini-api/docs/quickstart',k:'doc',s:'Gemini API Docs'},
    {t:'Building with the Claude API',u:'https://anthropic.skilljar.com/claude-with-the-anthropic-api',k:'course',s:'Anthropic Academy',w:'Безплатний курс: API, стрімінг, тули, кешування, citations'},
    {t:'anthropics/courses',u:'https://github.com/anthropics/courses',k:'github',s:'GitHub',w:'Ноутбуки: API fundamentals, prompt engineering, tool use'},
    {t:'What We Learned from a Year of Building with LLMs (Part I)',u:'https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-i/',k:'article',y:2024,s:'O\'Reilly Radar',w:'Eugene Yan, Hamel Husain та інші: тактичні уроки з проду'},
    {t:'AI Engineering (book repo)',u:'https://github.com/chiphuyen/aie-book',k:'course',y:2025,s:'Chip Huyen',w:'Матеріали до книги: вибір моделі, вартість, latency, evals'}
  ]},
  end:{label:'Далі: RAG →',href:'rag.html'},
  groups:[
    {label:'Виклик моделі з коду',side:'left',desc:'Запит до API моделі з сервісу: SDK або прямий HTTP, системний промпт, список повідомлень, параметри генерації, стрімінг.',why:'Це той самий виклик зовнішнього API, який бекендер робив сотні разів, але з іншими параметрами і іншою ціною помилки.',links:[
        {t:'Messages - Claude API Reference',u:'https://platform.claude.com/docs/en/api/messages',k:'doc',s:'Anthropic Docs',w:'Повний опис запиту і відповіді /v1/messages'},
        {t:'API overview',u:'https://platform.claude.com/docs/en/api/overview',k:'doc',s:'Anthropic Docs'},
        {t:'Text generation',u:'https://developers.openai.com/api/docs/guides/text',k:'doc',s:'OpenAI Docs'},
        {t:'Text generation - Gemini API',u:'https://ai.google.dev/gemini-api/docs/text-generation',k:'doc',s:'Gemini API Docs'},
        {t:'A Hackers\' Guide to Language Models',u:'https://www.youtube.com/watch?v=jkrNMKz9pWU',k:'video',y:2023,s:'YouTube · Jeremy Howard',w:'Як виглядає робота з моделлю через API очима програміста'},
        {t:'Building Systems with the ChatGPT API',u:'https://www.deeplearning.ai/short-courses/building-systems-with-chatgpt/',k:'course',s:'DeepLearning.AI',w:'Короткий безплатний курс: ланцюжок викликів, класифікація, перевірки'}
      ],
      children:[
        {label:'SDK чи прямий HTTP',desc:'Офіційні бібліотеки для Python і TypeScript ховають ретраї, таймаути і стрімінг; прямий HTTP дає повний контроль і менше залежностей.',why:'Треба хоч раз побачити сирий запит і відповідь, щоб розуміти, що саме робить SDK, коли щось іде не так.',links:[
            {t:'SDKs, CLI, and libraries',u:'https://platform.claude.com/docs/en/cli-sdks-libraries/overview',k:'doc',s:'Anthropic Docs'},
            {t:'Gemini API libraries',u:'https://ai.google.dev/gemini-api/docs/libraries',k:'doc',s:'Gemini API Docs'},
            {t:'anthropics/anthropic-sdk-python',u:'https://github.com/anthropics/anthropic-sdk-python',k:'github',s:'GitHub'},
            {t:'openai/openai-python',u:'https://github.com/openai/openai-python',k:'github',s:'GitHub'}
          ],
          children:[
            {label:'Anthropic SDK: Python і TypeScript',desc:'anthropic і @anthropic-ai/sdk: типізовані клієнти з ретраями, таймаутами і хелперами для стрімінгу та структурованих відповідей.',why:'Більшість прикладів у документації і cookbook написані саме через SDK; читати їх без SDK важко.',links:[
                {t:'anthropics/anthropic-sdk-typescript',u:'https://github.com/anthropics/anthropic-sdk-typescript',k:'github',s:'GitHub'},
                {t:'anthropic on PyPI',u:'https://pypi.org/project/anthropic/',k:'doc',s:'PyPI'}
              ]},
            {label:'OpenAI SDK і OpenAI-compatible API',desc:'openai для Python і Node; формат Chat Completions підтримують десятки інших провайдерів і локальних серверів через base_url.',why:'Один клієнт з іншим base_url часто дає доступ до Gemini, Ollama чи vLLM без нової бібліотеки.',links:[
                {t:'openai/openai-node',u:'https://github.com/openai/openai-node',k:'github',s:'GitHub'},
                {t:'OpenAI compatibility - Gemini API',u:'https://ai.google.dev/gemini-api/docs/openai',k:'doc',s:'Gemini API Docs',w:'Gemini через бібліотеку openai'},
                {t:'OpenAI compatibility - Ollama',u:'https://docs.ollama.com/api/openai-compatibility',k:'doc',s:'Ollama Docs'}
              ]},
            {label:'Google GenAI SDK',desc:'google-genai для Python і @google/genai для JS: єдиний клієнт для Gemini Developer API і Vertex AI.',why:'Стара бібліотека google-generativeai застаріла; нові приклади і фічі лише в GenAI SDK.',links:[
                {t:'googleapis/python-genai',u:'https://github.com/googleapis/python-genai',k:'github',s:'GitHub'},
                {t:'googleapis/js-genai',u:'https://github.com/googleapis/js-genai',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Messages API: ролі і повідомлення',desc:'Розмова як список повідомлень з ролями user і assistant; модель продовжує цей список. Кожне повідомлення складається з content blocks: text, image, document, tool_use, tool_result.',why:'Історія діалогу, результати тулів і попередні відповіді живуть саме в цьому списку, і за його розмір платите ви.',links:[
            {t:'Messages - Claude API Reference',u:'https://platform.claude.com/docs/en/api/messages',k:'doc',s:'Anthropic Docs'},
            {t:'Prompting best practices',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices',k:'doc',s:'Anthropic Docs',w:'Роль, XML-теги, шаблони, системний промпт'},
            {t:'Prompt engineering',u:'https://developers.openai.com/api/docs/guides/prompt-engineering',k:'doc',s:'OpenAI Docs'},
            {t:'Prompting 101 | Code w/ Claude',u:'https://www.youtube.com/watch?v=ysPbXH0LpIE',k:'video',y:2025,s:'YouTube · Anthropic',w:'24 хвилини: як Applied AI команда збирає промпт для проду'}
          ],
          children:[
            {label:'System prompt окремо від діалогу',desc:'Інструкції для моделі, що стоять поза діалогом: роль, правила, формат. В Anthropic це поле system, в OpenAI Responses це instructions.',why:'Стабільний системний промпт на початку запиту ще й основа для prompt caching.',links:[
                {t:'Prompting best practices',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices',k:'doc',s:'Anthropic Docs'}
              ]},
            {label:'Історія розмови в кожному запиті',desc:'Messages API не памʼятає попередні виклики; усю історію щоразу надсилає ваш код. Stateful варіанти (OpenAI previous_response_id, Anthropic message threads) зберігають її на стороні провайдера.',why:'Довга історія означає більше токенів у кожному запиті і ризик вилетіти за контекстне вікно.',links:[
                {t:'Context windows',u:'https://platform.claude.com/docs/en/build-with-claude/context-windows',k:'doc',s:'Anthropic Docs'},
                {t:'Message threads',u:'https://platform.claude.com/docs/en/build-with-claude/message-threads',k:'doc',s:'Anthropic Docs',w:'Beta: провайдер тримає розмову, ви шлете лише нові повідомлення'},
                {t:'Compaction overview',u:'https://platform.claude.com/docs/en/build-with-claude/compaction',k:'doc',s:'Anthropic Docs',w:'Серверне стискання довгої історії'}
              ]}
          ]},
        {label:'OpenAI: Responses API vs Chat Completions',desc:'Responses API: новіший основний інтерфейс OpenAI з вбудованими тулами, reasoning items і станом розмови; Chat Completions: старіший формат, який став де-факто стандартом для інших провайдерів.',why:'Нові фічі OpenAI виходять у Responses, а сумісність з рештою екосистеми тримається на Chat Completions; треба знати обидва.',links:[
            {t:'Migrate to the Responses API',u:'https://developers.openai.com/api/docs/guides/migrate-to-responses',k:'doc',s:'OpenAI Docs',w:'Що змінилось: instructions, text.format, previous_response_id'},
            {t:'New tools for building agents',u:'https://openai.com/index/new-tools-for-building-agents/',k:'article',y:2025,s:'OpenAI',w:'Анонс Responses API'},
            {t:'Responses API example',u:'https://github.com/openai/openai-cookbook/blob/main/examples/responses_api/responses_example.ipynb',k:'github',y:2025,s:'OpenAI Cookbook'},
            {t:'Using tools',u:'https://developers.openai.com/api/docs/guides/tools',k:'doc',s:'OpenAI Docs',w:'Вбудовані тули Responses API: web search, file search, code interpreter'}
          ]},
        {label:'Параметри генерації',desc:'temperature для випадковості, max_tokens як верхня межа відповіді, stop-послідовності для раннього завершення. У нових моделей з увімкненим thinking temperature часто недоступна.',why:'Для структурованої відповіді temperature ближче до нуля, а max_tokens треба вибрати так, щоб JSON не обірвався посередині.',links:[
            {t:'Messages - Claude API Reference',u:'https://platform.claude.com/docs/en/api/messages',k:'doc',s:'Anthropic Docs'},
            {t:'Text generation - Gemini API',u:'https://ai.google.dev/gemini-api/docs/text-generation',k:'doc',s:'Gemini API Docs',w:'generationConfig: temperature, maxOutputTokens, stopSequences'}
          ],
          children:[
            {label:'temperature і детермінізм',desc:'Нуль не дає повної повторюваності, лише зменшує розкид; у reasoning-моделей параметр взагалі ігнорується або заборонений.',why:'Тести, що покладаються на однакову відповідь при temperature 0, будуть flaky.',links:[
                {t:'Messages - Claude API Reference',u:'https://platform.claude.com/docs/en/api/messages',k:'doc',s:'Anthropic Docs',w:'Параметри temperature, top_p, top_k і їхні обмеження'}
              ]},
            {label:'max_tokens і обрізана відповідь',desc:'Stop reason у відповіді показує, чи модель закінчила сама, чи її обрізав ліміт. Для великих відповідей SDK вимагають стрімінг.',why:'Обрізаний JSON через max_tokens виглядає як помилка парсингу, хоча причина інша.',links:[
                {t:'Stop reasons and fallback',u:'https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons',k:'doc',s:'Anthropic Docs'}
              ]}
          ]},
        {label:'Extended thinking і effort',desc:'Режим міркування: модель витрачає токени на reasoning перед відповіддю. В Anthropic це adaptive thinking плюс output_config.effort, в OpenAI reasoning_effort, у Gemini thinking budget.',why:'Thinking підвищує якість на складних задачах і множить ціну та latency; це параметр, який треба обирати свідомо під кожен крок.',links:[
            {t:'Extended thinking',u:'https://platform.claude.com/docs/en/build-with-claude/extended-thinking',k:'doc',s:'Anthropic Docs'},
            {t:'Effort',u:'https://platform.claude.com/docs/en/build-with-claude/effort',k:'doc',s:'Anthropic Docs',w:'low / medium / high / xhigh / max і що це означає для ціни'},
            {t:'Steering thinking',u:'https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost',k:'doc',s:'Anthropic Docs'},
            {t:'Reasoning best practices',u:'https://platform.openai.com/docs/guides/reasoning-best-practices',k:'doc',s:'OpenAI Docs'},
            {t:'Gemini thinking',u:'https://ai.google.dev/gemini-api/docs/thinking',k:'doc',s:'Gemini API Docs'}
          ],
          children:[
            {label:'Thinking-токени у рахунку',desc:'Reasoning рахується як output-токени навіть тоді, коли сам текст міркувань у відповідь не повертається.',why:'Без цього розуміння рахунок за «коротку» відповідь виглядає незрозуміло великим.',links:[
                {t:'Steering thinking',u:'https://platform.claude.com/docs/en/build-with-claude/thinking-steering-and-cost',k:'doc',s:'Anthropic Docs'}
              ]}
          ]},
        {label:'Стрімінг відповіді (SSE)',desc:'Відповідь приходить частинами через Server-Sent Events: події message_start, content_block_delta, message_stop. Код збирає її на льоту і показує користувачу.',why:'Відповідь на кілька секунд без стрімінгу виглядає як завислий інтерфейс, а для довгих відповідей SDK стрімінг вимагають, щоб не впертись у HTTP timeout.',links:[
            {t:'Streaming messages',u:'https://platform.claude.com/docs/en/build-with-claude/streaming',k:'doc',s:'Anthropic Docs',w:'Типи подій і приклади для SDK'},
            {t:'Server-sent events',u:'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events',k:'doc',s:'MDN',w:'Сам протокол SSE, на якому стрімлять усі провайдери'},
            {t:'How to stream completions',u:'https://github.com/openai/openai-cookbook/blob/main/examples/How_to_stream_completions.ipynb',k:'github',s:'OpenAI Cookbook'},
            {t:'anthropic-sdk-python helpers',u:'https://github.com/anthropics/anthropic-sdk-python/blob/main/helpers.md',k:'github',s:'GitHub',w:'Стрім-хелпери: get_final_message, події text'},
            {t:'streamText - AI SDK',u:'https://ai-sdk.dev/docs/reference/ai-sdk-core/stream-text',k:'doc',s:'Vercel AI SDK',w:'Стрімінг у TypeScript з типізованими частинами'}
          ],
          children:[
            {label:'Стрімінг аргументів тула',desc:'Великий input тула (код, документ) теж можна отримувати частинами, але тоді JSON може прийти неповним і його треба валідувати самому.',why:'Без цього агент чекає, доки сервер збере весь input, і інтерфейс зависає на довгих викликах.',links:[
                {t:'Fine-grained tool streaming',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/fine-grained-tool-streaming',k:'doc',s:'Anthropic Docs'}
              ]}
          ]}
      ]},
    {label:'Мультимодальний вхід і файли',side:'right',desc:'Зображення, PDF, аудіо і завантажені файли в запиті разом із текстом; окремі ліміти, формати і ціна в токенах.',why:'Скріншоти, рахунки і PDF вже приймаються API; варто знати, як їх передати і скільки це коштує.',links:[
        {t:'Vision',u:'https://platform.claude.com/docs/en/build-with-claude/vision',k:'doc',s:'Anthropic Docs'},
        {t:'Images and vision',u:'https://developers.openai.com/api/docs/guides/images-vision',k:'doc',s:'OpenAI Docs'},
        {t:'Image understanding - Gemini API',u:'https://ai.google.dev/gemini-api/docs/image-understanding',k:'doc',s:'Gemini API Docs'},
        {t:'Working with charts, graphs, and slide decks',u:'https://platform.claude.com/cookbook/multimodal-reading-charts-graphs-powerpoints',k:'github',s:'Claude Cookbook'},
        {t:'Audio understanding - Gemini API',u:'https://ai.google.dev/gemini-api/docs/audio',k:'doc',s:'Gemini API Docs'}
      ],
      children:[
        {label:'Зображення: base64, URL, file_id',desc:'Картинку передають як base64, за URL або як ідентифікатор завантаженого файлу; формати JPEG, PNG, GIF, WebP, обмеження на розмір і кількість.',why:'Зображення коштує токенів пропорційно до площі; без зменшення скріншотів рахунок росте непомітно.',links:[
            {t:'Vision',u:'https://platform.claude.com/docs/en/build-with-claude/vision',k:'doc',s:'Anthropic Docs',w:'Формула токенів за зображення і ліміти'},
            {t:'Images and vision',u:'https://developers.openai.com/api/docs/guides/images-vision',k:'doc',s:'OpenAI Docs'},
            {t:'Image understanding - Gemini API',u:'https://ai.google.dev/gemini-api/docs/image-understanding',k:'doc',s:'Gemini API Docs'}
          ]},
        {label:'PDF і документи',desc:'PDF передається як document block: модель бачить і текст, і зображення сторінок; ліміти на кількість сторінок і розмір запиту.',why:'Рахунки, договори і звіти частіше приходять у PDF, ніж у чистому тексті.',links:[
            {t:'PDF support',u:'https://platform.claude.com/docs/en/build-with-claude/pdf-support',k:'doc',s:'Anthropic Docs'},
            {t:'File inputs',u:'https://developers.openai.com/api/docs/guides/file-inputs',k:'doc',s:'OpenAI Docs'},
            {t:'Document understanding - Gemini API',u:'https://ai.google.dev/gemini-api/docs/document-processing',k:'doc',s:'Gemini API Docs'},
            {t:'"Uploading" PDFs to Claude via the API',u:'https://platform.claude.com/cookbook/misc-pdf-upload-summarization',k:'github',s:'Claude Cookbook'}
          ]},
        {label:'Аудіо і мова',type:'optional',desc:'Gemini приймає аудіо напряму; в інших провайдерів мова спершу транскрибується окремою моделлю (speech-to-text), і в модель іде текст.',why:'Голосові повідомлення і записи дзвінків стають вхідними даними; треба знати, де транскрипція дешевша.',links:[
            {t:'Audio understanding - Gemini API',u:'https://ai.google.dev/gemini-api/docs/audio',k:'doc',s:'Gemini API Docs'}
          ]},
        {label:'Files API',desc:'Файл завантажується один раз і далі посилається за file_id у багатьох запитах замість повторного base64.',why:'Один PDF на сотню запитів у base64 означає сотню завантажень і зайвий трафік.',links:[
            {t:'Files API',u:'https://platform.claude.com/docs/en/build-with-claude/files',k:'doc',s:'Anthropic Docs'},
            {t:'Files API - Gemini API',u:'https://ai.google.dev/gemini-api/docs/files',k:'doc',s:'Gemini API Docs'},
            {t:'File inputs',u:'https://developers.openai.com/api/docs/guides/file-inputs',k:'doc',s:'OpenAI Docs'}
          ]},
        {label:'Citations: посилання на джерело',type:'optional',desc:'Модель повертає відповідь разом із точними фрагментами документа, на які спирається: сторінка, символи, блок.',why:'Для юридичних і фінансових відповідей користувач має бачити, звідки взято твердження.',links:[
            {t:'Citations',u:'https://platform.claude.com/docs/en/build-with-claude/citations',k:'doc',s:'Anthropic Docs'},
            {t:'Citations | Claude Cookbook',u:'https://platform.claude.com/cookbook/misc-using-citations',k:'github',s:'Claude Cookbook'}
          ]}
      ]},
    {label:'Надійність виклику',side:'left',desc:'Виклик моделі падає, затримується і впирається в ліміти частіше за звичайне API. Код має це переживати.',why:'Ознака зрілості: відмова чи затримка API моделі не валить сервіс і не подвоює дії.',links:[
        {t:'Timeouts, retries, and backoff with jitter',u:'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/',k:'article',s:'Amazon Builders\' Library',w:'Класика про ретраї і таймаути, що однаково працює для LLM API'},
        {t:'Rate limits',u:'https://platform.claude.com/docs/en/api/rate-limits',k:'doc',s:'Anthropic Docs'},
        {t:'How to handle rate limits',u:'https://github.com/openai/openai-cookbook/blob/main/examples/How_to_handle_rate_limits.ipynb',k:'github',s:'OpenAI Cookbook'},
        {t:'Production best practices',u:'https://developers.openai.com/api/docs/guides/production-best-practices',k:'doc',s:'OpenAI Docs'},
        {t:'Retry pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/retry',k:'article',s:'Microsoft Learn'},
        {t:'Productionizing LLM Gateways: Architecture, Tradeoffs and Hard Lessons - Kanish Manuja, Twilio',u:'https://www.youtube.com/watch?v=zrZ1amZBSPw',k:'video',y:2026,s:'YouTube · AI Engineer',w:'Доступність, latency і вартість на реальному трафіку'}
      ],
      children:[
        {label:'Ретраї з експоненційним backoff',desc:'Повтор після тимчасової помилки з наростаючою паузою і випадковим зсувом (jitter), обмежена кількість спроб. SDK вже роблять 2 ретраї за замовчуванням.',why:'429 і 529 від API моделі регулярні; ретрай без паузи лише додає навантаження і подовжує збій.',links:[
            {t:'Exponential Backoff And Jitter',u:'https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/',k:'article',s:'AWS Architecture Blog'},
            {t:'anthropics/anthropic-sdk-python',u:'https://github.com/anthropics/anthropic-sdk-python',k:'github',s:'GitHub',w:'Розділ Retries у README: max_retries і які коди ретраяться'},
            {t:'jd/tenacity',u:'https://github.com/jd/tenacity',k:'github',s:'GitHub',w:'Декоратор ретраїв для Python'},
            {t:'litl/backoff',u:'https://github.com/litl/backoff',k:'github',s:'GitHub'}
          ],
          children:[
            {label:'Retry-After і заголовки ліміту',desc:'Провайдер повертає, скільки чекати і скільки залишилось запитів чи токенів; правильний ретрай читає ці заголовки замість вгадувати паузу.',why:'Пауза за заголовком знімає навантаження рівно настільки, скільки треба.',links:[
                {t:'Rate limits',u:'https://platform.claude.com/docs/en/api/rate-limits',k:'doc',s:'Anthropic Docs',w:'Заголовки anthropic-ratelimit-* і retry-after'}
              ]}
          ]},
        {label:'Таймаути',desc:'Межа очікування на зʼєднання і на всю відповідь; окремо для стрімінгу, де паузи між частинами нормальні. У SDK таймаут за замовчуванням 10 хвилин, і він множиться на кількість ретраїв.',why:'Без таймауту завислий виклик тримає воркер і зʼїдає пул зʼєднань.',links:[
            {t:'Timeouts - HTTPX',u:'https://www.python-httpx.org/advanced/timeouts/',k:'doc',s:'HTTPX',w:'connect, read, write, pool: чим вони відрізняються'},
            {t:'anthropics/anthropic-sdk-python',u:'https://github.com/anthropics/anthropic-sdk-python',k:'github',s:'GitHub',w:'Розділ Timeouts у README'}
          ]},
        {label:'Rate limits: RPM, TPM і tiers',desc:'Провайдер обмежує і кількість запитів за хвилину, і кількість вхідних та вихідних токенів; ліміти ростуть з рівнем (tier) витрат організації.',why:'Батч із сотні документів вичерпує ліміт токенів за секунди, якщо не ставити чергу на стороні клієнта.',links:[
            {t:'Rate limits',u:'https://platform.claude.com/docs/en/api/rate-limits',k:'doc',s:'Anthropic Docs'},
            {t:'Rate limits',u:'https://developers.openai.com/api/docs/guides/rate-limits',k:'doc',s:'OpenAI Docs'},
            {t:'Rate limits - Gemini API',u:'https://ai.google.dev/gemini-api/docs/rate-limits',k:'doc',s:'Gemini API Docs'},
            {t:'Service tiers',u:'https://platform.claude.com/docs/en/api/service-tiers',k:'doc',s:'Anthropic Docs',w:'Priority tier і що він дає під навантаженням'}
          ]},
        {label:'Клієнтська черга і конкурентність',desc:'Semaphore або черга обмежує кількість одночасних викликів і темп у токенах за хвилину; batch-задачі йдуть через воркери, а не паралельним map по всьому списку.',why:'Контроль темпу на своєму боці дешевший за сотні 429 і ретраїв.',links:[
            {t:'How to handle rate limits',u:'https://github.com/openai/openai-cookbook/blob/main/examples/How_to_handle_rate_limits.ipynb',k:'github',s:'OpenAI Cookbook',w:'Приклад паралельного процесора з лімітом запитів і токенів'},
            {t:'Latency optimization',u:'https://developers.openai.com/api/docs/guides/latency-optimization',k:'doc',s:'OpenAI Docs',w:'Сім принципів: менше токенів, менше запитів, паралелізм'}
          ]},
        {label:'Fallback на іншу модель чи провайдера',desc:'Запасний варіант на випадок відмови: інша модель того ж провайдера або інший провайдер за єдиним інтерфейсом. Anthropic має серверний fallbacks для refusal, LiteLLM і OpenRouter роблять це на рівні шлюзу.',why:'Збій у провайдера на годину не має бути збоєм вашого продукту на годину.',links:[
            {t:'Stop reasons and fallback',u:'https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons',k:'doc',s:'Anthropic Docs'},
            {t:'Fallbacks (Provider Failover) - LiteLLM',u:'https://docs.litellm.ai/docs/proxy/reliability',k:'doc',s:'LiteLLM Docs'},
            {t:'Provider Routing - Smart Multi-Provider Request Management',u:'https://openrouter.ai/docs/guides/routing/provider-selection',k:'doc',s:'OpenRouter Docs'}
          ]},
        {label:'Ідемпотентність і дублікати',desc:'Повторний виклик після таймауту не має призводити до подвійної дії далі по ланцюжку: ключ ідемпотентності на побічні ефекти, дедуплікація за request id.',why:'Ретрай виклику, після якого агент створює тікет, легко створює два тікети.',links:[
            {t:'Designing robust and predictable APIs with idempotency',u:'https://stripe.com/blog/idempotency',k:'article',s:'Stripe',w:'Еталонне пояснення ключів ідемпотентності'},
            {t:'Idempotent requests - Stripe API',u:'https://docs.stripe.com/api/idempotent_requests',k:'doc',s:'Stripe Docs'},
            {t:'The Idempotency-Key HTTP Header Field',u:'https://datatracker.ietf.org/doc/html/draft-ietf-httpapi-idempotency-key-header',k:'doc',s:'IETF',w:'Чернетка стандарту для заголовка Idempotency-Key'}
          ]},
        {label:'Circuit breaker',type:'optional',desc:'Після серії помилок виклики до провайдера тимчасово зупиняються, щоб не добивати його і не чекати даремно.',why:'Дає сервісу швидко перейти на fallback замість повільних таймаутів на кожному запиті.',links:[
            {t:'CircuitBreaker',u:'https://martinfowler.com/bliki/CircuitBreaker.html',k:'article',s:'Martin Fowler'},
            {t:'Circuit Breaker pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker',k:'article',s:'Microsoft Learn'},
            {t:'danielfm/pybreaker',u:'https://github.com/danielfm/pybreaker',k:'github',s:'GitHub'},
            {t:'resilience4j/resilience4j',u:'https://github.com/resilience4j/resilience4j',k:'github',s:'GitHub',w:'Для JVM: circuit breaker, rate limiter, retry'}
          ]}
      ]},
    {label:'Обробка помилок API',side:'right',desc:'Класи помилок від провайдера і що робити з кожним: ретраїти, падати, повертати запасну відповідь.',why:'Ретраїти 400 безглуздо, не ретраїти 529 марнотратно; різниця у коді статусу.',links:[
        {t:'Claude API errors',u:'https://platform.claude.com/docs/en/api/errors',k:'doc',s:'Anthropic Docs',w:'Коди 400-529 і тип помилки в тілі відповіді'},
        {t:'Error codes',u:'https://developers.openai.com/api/docs/guides/error-codes',k:'doc',s:'OpenAI Docs'},
        {t:'Troubleshooting guide - Gemini API',u:'https://ai.google.dev/gemini-api/docs/troubleshooting',k:'doc',s:'Gemini API Docs'},
        {t:'Stop reasons and fallback',u:'https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons',k:'doc',s:'Anthropic Docs'}
      ],
      children:[
        {label:'4xx: невалідний запит, ключ, ліміти',desc:'400 помилка в запиті (invalid_request_error), 401 і 403 проблема з ключем або доступом, 404 невідома модель, 413 занадто великий запит, 429 перевищення ліміту.',why:'З цих лише 429 має сенс ретраїти; решта потребує виправлення коду або конфігурації.',links:[
            {t:'Claude API errors',u:'https://platform.claude.com/docs/en/api/errors',k:'doc',s:'Anthropic Docs'},
            {t:'Error codes',u:'https://developers.openai.com/api/docs/guides/error-codes',k:'doc',s:'OpenAI Docs'}
          ]},
        {label:'5xx і 529 overloaded',desc:'Помилки на стороні провайдера і окремий статус перевантаження (529 overloaded_error в Anthropic), коли модель тимчасово недоступна.',why:'Саме тут працюють ретраї з backoff і fallback.',links:[
            {t:'Claude API errors',u:'https://platform.claude.com/docs/en/api/errors',k:'doc',s:'Anthropic Docs'}
          ]},
        {label:'Stop reason і неповна відповідь',desc:'Відповідь може закінчитись через end_turn, max_tokens, stop_sequence, tool_use, pause_turn або refusal; код має розрізняти ці випадки, бо всі вони приходять з HTTP 200.',why:'Обрізаний JSON через max_tokens виглядає як помилка парсингу, хоча причина інша.',links:[
            {t:'Stop reasons and fallback',u:'https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons',k:'doc',s:'Anthropic Docs'}
          ]},
        {label:'Відмова моделі і фільтри контенту',desc:'Модель може відмовитись відповідати (stop_reason refusal з категорією у stop_details), а провайдер може заблокувати відповідь фільтром.',why:'Такий випадок треба логувати і показувати користувачу щось осмислене, а не порожню сторінку.',links:[
            {t:'Stop reasons and fallback',u:'https://platform.claude.com/docs/en/build-with-claude/handling-stop-reasons',k:'doc',s:'Anthropic Docs',w:'Refusal, stop_details і серверний fallback на іншу модель'}
          ]},
        {label:'Типізовані винятки SDK',desc:'SDK кидають окремі класи: RateLimitError, APIStatusError, APIConnectionError, APITimeoutError. Обробляти їх ланцюжком від конкретного до загального.',why:'Один broad except втрачає різницю між тим, що треба ретраїти, і тим, що треба лагодити.',links:[
            {t:'anthropics/anthropic-sdk-python',u:'https://github.com/anthropics/anthropic-sdk-python',k:'github',s:'GitHub',w:'Розділ Handling errors у README'},
            {t:'openai/openai-python',u:'https://github.com/openai/openai-python',k:'github',s:'GitHub',w:'Такий самий розділ для OpenAI SDK'}
          ]},
        {label:'request-id у логах помилок',desc:'Кожна відповідь має ідентифікатор запиту (request-id); його пишуть у лог разом із кодом помилки і моделлю, щоб підтримка провайдера могла знайти виклик.',why:'Без request-id звернення в підтримку з «іноді падає» ні до чого не приводить.',links:[
            {t:'Claude API errors',u:'https://platform.claude.com/docs/en/api/errors',k:'doc',s:'Anthropic Docs',w:'Заголовок request-id і для чого він'}
          ]}
      ]},
    {label:'Structured outputs',side:'left',desc:'Відповідь моделі у форматі за схемою: JSON з наперед відомими полями і типами. Нативні режими: Anthropic output_config.format, OpenAI strict JSON schema, Gemini responseSchema.',why:'Код розбирає відповідь без регулярних виразів і евристик, а зміна формату ловиться валідацією, не користувачем.',links:[
        {t:'Structured outputs',u:'https://platform.claude.com/docs/en/build-with-claude/structured-outputs',k:'doc',s:'Anthropic Docs',w:'output_config.format і strict tools'},
        {t:'Structured model outputs',u:'https://developers.openai.com/api/docs/guides/structured-outputs',k:'doc',s:'OpenAI Docs'},
        {t:'Structured outputs - Gemini API',u:'https://ai.google.dev/gemini-api/docs/structured-output',k:'doc',s:'Gemini API Docs'},
        {t:'Pydantic is all you need: Jason Liu',u:'https://www.youtube.com/watch?v=yj-wSRJwrrc',k:'video',y:2023,s:'YouTube · AI Engineer',w:'Доповідь, з якої почалась мода на схеми замість парсингу'},
        {t:'OpenAI DevDay 2024 | Structured outputs for reliable applications',u:'https://www.youtube.com/watch?v=kE4BkATIl9c',k:'video',y:2024,s:'YouTube · OpenAI'},
        {t:'Structured data extraction from unstructured content using LLM schemas',u:'https://simonwillison.net/2025/Feb/28/llm-schemas/',k:'article',y:2025,s:'Simon Willison'}
      ],
      children:[
        {label:'JSON Schema як опис формату',desc:'Стандартний спосіб описати структуру: типи полів, обовʼязкові поля, enum, вкладені обʼєкти, additionalProperties: false.',why:'Та сама мова описує і схему тула для моделі, і формат відповіді, і контракт вашого API.',links:[
            {t:'Understanding JSON Schema',u:'https://json-schema.org/understanding-json-schema',k:'doc',s:'json-schema.org'},
            {t:'Creating your first schema',u:'https://json-schema.org/learn/getting-started-step-by-step',k:'doc',s:'json-schema.org'},
            {t:'Structured outputs',u:'https://platform.claude.com/docs/en/build-with-claude/structured-outputs',k:'doc',s:'Anthropic Docs'}
          ],
          children:[
            {label:'Нативний режим провайдера',desc:'Провайдер гарантує відповідність схемі на рівні генерації (constrained decoding): Anthropic output_config.format, OpenAI text.format зі strict: true, Gemini responseSchema.',why:'Гарантія формату з боку провайдера знімає більшість ретраїв через зламаний JSON.',links:[
                {t:'Structured outputs',u:'https://platform.claude.com/docs/en/build-with-claude/structured-outputs',k:'doc',s:'Anthropic Docs'},
                {t:'Structured model outputs',u:'https://developers.openai.com/api/docs/guides/structured-outputs',k:'doc',s:'OpenAI Docs'},
                {t:'Introducing Structured Outputs in the API',u:'https://openai.com/index/introducing-structured-outputs-in-the-api/',k:'article',y:2024,s:'OpenAI'}
              ]},
            {label:'Підмножина JSON Schema',desc:'Провайдери підтримують не весь стандарт: обмеження на вкладеність, кількість enum, формати рядків, рекурсивні типи.',why:'Схема, що проходить у pydantic, може повернутись 400 від API; це треба перевірити до продакшену.',links:[
                {t:'Structured outputs',u:'https://platform.claude.com/docs/en/build-with-claude/structured-outputs',k:'doc',s:'Anthropic Docs',w:'Розділ про підтримувані і непідтримувані ключові слова'}
              ]}
          ]},
        {label:'pydantic або zod: схема в коді',desc:'Модель даних у коді генерує JSON Schema для API і перевіряє відповідь після отримання. Anthropic SDK має messages.parse(), OpenAI SDK responses.parse(), Vercel AI SDK приймає zod напряму.',why:'Одне джерело правди для схеми замість трьох копій, що розʼїжджаються.',links:[
            {t:'Pydantic documentation',u:'https://docs.pydantic.dev/latest/',k:'doc',s:'Pydantic'},
            {t:'JSON Schema - Pydantic',u:'https://docs.pydantic.dev/latest/concepts/json_schema/',k:'doc',s:'Pydantic',w:'Як модель перетворюється на JSON Schema'},
            {t:'Zod',u:'https://zod.dev/',k:'doc',s:'Zod'},
            {t:'Pydantic for LLM Workflows',u:'https://www.deeplearning.ai/courses/pydantic-for-llm-workflows',k:'course',y:2025,s:'DeepLearning.AI',w:'Короткий курс: валідація відповідей і аргументів тулів'},
            {t:'Generating Structured Data - AI SDK',u:'https://ai-sdk.dev/docs/ai-sdk-core/generating-structured-data',k:'doc',s:'Vercel AI SDK'}
          ],
          children:[
            {label:'parse() хелпери в SDK',desc:'messages.parse() в anthropic і responses.parse() в openai приймають pydantic або zod-тип, самі будують схему і повертають типізований обʼєкт.',why:'Менше ручного коду між схемою і відповіддю, менше місць, де вони розходяться.',links:[
                {t:'anthropic-sdk-python helpers',u:'https://github.com/anthropics/anthropic-sdk-python/blob/main/helpers.md',k:'github',s:'GitHub'},
                {t:'openai-python helpers',u:'https://github.com/openai/openai-python/blob/main/helpers.md',k:'github',s:'GitHub'}
              ]},
            {label:'Instructor',desc:'Бібліотека поверх SDK провайдерів: pydantic-модель як response_model, автоматичний повтор з текстом помилки валідації.',why:'Готовий цикл «запит, валідація, повтор» для провайдерів без нативного режиму.',links:[
                {t:'Instructor',u:'https://python.useinstructor.com/',k:'doc',s:'Instructor'},
                {t:'567-labs/instructor',u:'https://github.com/567-labs/instructor',k:'github',s:'GitHub'},
                {t:'Pydantic is STILL all you need: Jason Liu',u:'https://www.youtube.com/watch?v=pZ4DIH2BVqg',k:'video',y:2024,s:'YouTube · AI Engineer'}
              ]},
            {label:'Outlines і constrained decoding',desc:'Для open-weight моделей формат гарантують на рівні семплінгу: Outlines, guidance, structured outputs у vLLM і Ollama.',why:'Локальна модель без такого обмеження повертає JSON «майже завжди», і це «майже» ламає пайплайн.',links:[
                {t:'dottxt-ai/outlines',u:'https://github.com/dottxt-ai/outlines',k:'github',s:'GitHub'},
                {t:'No more bad outputs with structured generation: Remi Louf',u:'https://www.youtube.com/watch?v=aNmfvN6S_n4',k:'video',y:2024,s:'YouTube · AI Engineer'},
                {t:'Structured Outputs - vLLM',u:'https://docs.vllm.ai/en/latest/features/structured_outputs.html',k:'doc',s:'vLLM Docs'},
                {t:'Say What You Mean: A Response to \'Let Me Speak Freely\'',u:'https://blog.dottxt.co/say-what-you-mean.html',k:'article',y:2024,s:'.txt',w:'Чи псує constrained decoding якість відповіді'}
              ]},
            {label:'BAML і DSL для схем',desc:'Окрема мова опису функцій і типів для LLM з генерацією клієнтів для Python і TypeScript; альтернатива pydantic/zod з власним парсером.',why:'Варто знати як варіант, коли одна схема потрібна в кількох мовах.',links:[
                {t:'BAML documentation',u:'https://docs.boundaryml.com/home',k:'doc',s:'BoundaryML'},
                {t:'BoundaryML/baml',u:'https://github.com/BoundaryML/baml',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Валідація відповіді',desc:'Перевірка JSON за схемою після отримання, навіть якщо провайдер обіцяє відповідність; плюс семантичні перевірки значень.',why:'Схема може бути правильною, а значення безглуздими: пріоритет high для порожнього тікета.',links:[
            {t:'Pydantic documentation',u:'https://docs.pydantic.dev/latest/',k:'doc',s:'Pydantic'},
            {t:'python-jsonschema/jsonschema',u:'https://github.com/python-jsonschema/jsonschema',k:'github',s:'GitHub'},
            {t:'ajv-validator/ajv',u:'https://github.com/ajv-validator/ajv',k:'github',s:'GitHub',w:'Валідатор JSON Schema для JavaScript'}
          ]},
        {label:'Повтор при невалідній відповіді',desc:'Якщо відповідь не пройшла валідацію, запит повторюється з текстом помилки в контексті; кількість повторів обмежена і логується.',why:'Один повтор з поясненням зазвичай лагодить відповідь дешевше, ніж ручна евристика.',links:[
            {t:'Instructor',u:'https://python.useinstructor.com/',k:'doc',s:'Instructor',w:'Реалізація повтору з помилкою валідації в контексті'}
          ]},
        {label:'Тул як схема відповіді',desc:'Прийом: описати бажаний формат як єдиний тул і змусити модель його викликати; аргументи тула і є структурованою відповіддю.',why:'Працює там, де рідного режиму структурованих відповідей немає, і дає ту ж гарантію формату.',links:[
            {t:'Extracting structured JSON using Claude and tool use',u:'https://platform.claude.com/cookbook/tool-use-extracting-structured-json',k:'github',s:'Claude Cookbook'},
            {t:'Note-saving tool with Pydantic and Anthropic tool use',u:'https://platform.claude.com/cookbook/tool-use-tool-use-with-pydantic',k:'github',s:'Claude Cookbook'},
            {t:'Prompting Claude for "JSON mode"',u:'https://platform.claude.com/cookbook/misc-how-to-enable-json-mode',k:'github',s:'Claude Cookbook'}
          ]},
        {label:'Enum і обмежений вибір',desc:'Поля з переліком дозволених значень замість вільного тексту: тип тікета, пріоритет, категорія.',why:'Класифікація через enum дає стабільні значення, за якими можна фільтрувати і рахувати.',links:[
            {t:'Structured outputs - Gemini API',u:'https://ai.google.dev/gemini-api/docs/structured-output',k:'doc',s:'Gemini API Docs',w:'Є окремий режим відповіді-enum'}
          ]},
        {label:'Межі схем: простота і вкладеність',type:'optional',desc:'Глибока вкладеність, десятки optional-полів і складні умови погіршують якість; опис поля (description) у схемі працює як частина промпту.',why:'Плоска схема з десятком полів працює краще за дерево на пʼять рівнів.',links:[
            {t:'Structured outputs',u:'https://platform.claude.com/docs/en/build-with-claude/structured-outputs',k:'doc',s:'Anthropic Docs'},
            {t:'Structured Outputs Intro',u:'https://github.com/openai/openai-cookbook/blob/main/examples/Structured_Outputs_Intro.ipynb',k:'github',s:'OpenAI Cookbook'}
          ]}
      ]},
    {label:'Tool calling: інтерфейс до агентів',side:'right',desc:'Модель не викликає функції сама: вона повертає блок tool_use з назвою і аргументами за JSON Schema, ваш код виконує дію і повертає tool_result. Це механіка, на якій стоять усі агенти.',why:'Agent loop, MCP і Agent SDK зверху лише автоматизують цей цикл; хто не розуміє його на рівні API, не може налагодити агента.',links:[
        {t:'Tool use with Claude',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview',k:'doc',s:'Anthropic Docs'},
        {t:'Function calling',u:'https://developers.openai.com/api/docs/guides/function-calling',k:'doc',s:'OpenAI Docs'},
        {t:'Function calling with the Gemini API',u:'https://ai.google.dev/gemini-api/docs/function-calling',k:'doc',s:'Gemini API Docs'},
        {t:'Building effective agents',u:'https://www.anthropic.com/engineering/building-effective-agents',k:'article',y:2024,s:'Anthropic Engineering',w:'Від одного виклику з тулами до агентних патернів'},
        {t:'How We Build Effective Agents: Barry Zhang, Anthropic',u:'https://www.youtube.com/watch?v=D7_ipDqhtwk',k:'video',y:2025,s:'YouTube · AI Engineer'},
        {t:'Як працює coding assistants під капотом',u:'https://t.me/beerphp/148',k:'post',y:2026,s:'beerphp',w:'Цикл «модель просить тул, код виконує, результат назад» на прикладі асистента'}
      ],
      children:[
        {label:'Опис тула: name, description, input_schema',desc:'Тул описується назвою, текстом для моделі і JSON Schema аргументів; якість description напряму впливає на те, коли і як модель його викликає.',why:'Поганий опис тула це головна причина «агент не викликав потрібну функцію».',links:[
            {t:'Define tools',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools',k:'doc',s:'Anthropic Docs'},
            {t:'Writing effective tools for agents - with agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Tools - AI SDK',u:'https://ai-sdk.dev/docs/foundations/tools',k:'doc',s:'Vercel AI SDK'}
          ]},
        {label:'Цикл tool_use → tool_result',desc:'Відповідь зі stop_reason tool_use містить id виклику і аргументи; код виконує дію і повертає tool_result з тим самим id у наступному повідомленні user, доки модель не дасть end_turn.',why:'Це той цикл while, який потім ховають Agent SDK і фреймворки; написати його руками хоч раз обовʼязково.',links:[
            {t:'Tool use with Claude',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview',k:'doc',s:'Anthropic Docs'},
            {t:'How to call functions with chat models',u:'https://github.com/openai/openai-cookbook/blob/main/examples/How_to_call_functions_with_chat_models.ipynb',k:'github',s:'OpenAI Cookbook'},
            {t:'Creating a customer service agent with client-side tools',u:'https://platform.claude.com/cookbook/tool-use-customer-service-agent',k:'github',s:'Claude Cookbook'},
            {t:'Як працює coding assistants під капотом',u:'https://t.me/beerphp/148',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Паралельні виклики тулів',desc:'Одна відповідь може містити кілька tool_use; їх виконують паралельно і повертають усі tool_result в одному повідомленні.',why:'Розбиті по різних повідомленнях результати тихо вчать модель не робити паралельні виклики.',links:[
            {t:'Tool use with Claude',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview',k:'doc',s:'Anthropic Docs',w:'Розділ про parallel tool use'}
          ]},
        {label:'Strict tools і валідація аргументів',desc:'strict: true на описі тула гарантує, що аргументи точно відповідають схемі; без цього аргументи треба валідувати самому перед виконанням.',why:'Виконати shell-команду з аргументами, які модель «приблизно» зібрала, це інцидент, а не фіча.',links:[
            {t:'Strict tool use',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/strict-tool-use',k:'doc',s:'Anthropic Docs'},
            {t:'Function calling',u:'https://developers.openai.com/api/docs/guides/function-calling',k:'doc',s:'OpenAI Docs',w:'strict у function calling OpenAI'}
          ]},
        {label:'tool_choice: auto, none, конкретний тул',desc:'Параметр, що керує, чи може модель викликати тули, чи мусить, і який саме; у частини нових моделей примусовий вибір прибрали на користь structured outputs.',why:'Примусовий виклик часто використовували лише щоб отримати JSON; тепер для цього є окремий режим.',links:[
            {t:'Tool use with Claude',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview',k:'doc',s:'Anthropic Docs'},
            {t:'Tool Calling - AI SDK',u:'https://ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling',k:'doc',s:'Vercel AI SDK',w:'toolChoice і багатокрокові виклики через stopWhen'}
          ]}
      ]},
    {label:'Токени і ціна',side:'left',desc:'Кожен виклик повертає кількість вхідних і вихідних токенів; з них і з тарифу моделі рахується вартість.',why:'Ознака зрілості: назвати ціну одного прогону з токенів, не чекаючи рахунку наприкінці місяця.',links:[
        {t:'Pricing',u:'https://platform.claude.com/docs/en/about-claude/pricing',k:'doc',s:'Anthropic Docs'},
        {t:'Pricing',u:'https://developers.openai.com/api/docs/pricing',k:'doc',s:'OpenAI Docs'},
        {t:'Gemini Developer API pricing',u:'https://ai.google.dev/gemini-api/docs/pricing',k:'doc',s:'Gemini API Docs'},
        {t:'Optimizing for cost and intelligence',u:'https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence',k:'doc',s:'Anthropic Docs',w:'Виміряні важелі: кеш, batch, effort, вибір моделі'},
        {t:'LLM pricing calculator',u:'https://www.llm-prices.com/',k:'doc',s:'Simon Willison',w:'Калькулятор ціни за токенами для різних моделей'},
        {t:'Let\'s build the GPT Tokenizer',u:'https://www.youtube.com/watch?v=zduSFxRajkE',k:'video',y:2024,s:'YouTube · Andrej Karpathy',w:'Що таке токен і чому кирилиця коштує дорожче'}
      ],
      children:[
        {label:'usage у відповіді API',desc:'Поле з кількістю input і output токенів у кожній відповіді, а також cache_read і cache_creation токенів.',why:'Це єдине чесне джерело для підрахунку ціни; оцінки за довжиною тексту помиляються в рази.',links:[
            {t:'Messages - Claude API Reference',u:'https://platform.claude.com/docs/en/api/messages',k:'doc',s:'Anthropic Docs',w:'Обʼєкт usage у відповіді'},
            {t:'Understand and count tokens - Gemini API',u:'https://ai.google.dev/gemini-api/docs/tokens',k:'doc',s:'Gemini API Docs'}
          ]},
        {label:'Логувати токени з першого дня',desc:'Кількість токенів, модель, effort і тривалість пишуться в лог на кожен виклик разом з ідентифікатором запиту; стандарт для цього вже є в OpenTelemetry.',why:'Без цього наприкінці місяця ви знаєте суму рахунку, але не знаєте, який крок найдорожчий.',links:[
            {t:'Semantic conventions for generative AI systems',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/',k:'doc',s:'OpenTelemetry',w:'Стандартні атрибути: gen_ai.usage.input_tokens тощо'},
            {t:'OpenTelemetry tracing for the Claude API',u:'https://platform.claude.com/docs/en/manage-claude/opentelemetry',k:'doc',s:'Anthropic Docs'},
            {t:'Usage and Cost API',u:'https://platform.claude.com/docs/en/manage-claude/usage-cost-api',k:'doc',s:'Anthropic Docs',w:'Звіт по токенах і вартості на рівні організації'}
          ]},
        {label:'Input і output токени коштують по-різному',desc:'Вихідні токени в кілька разів дорожчі за вхідні, кеш-читання дешевше за звичайний input, а batch дає знижку; thinking рахується як output.',why:'Прохання «відповідай коротко» і max_tokens це інструменти економії, а не лише стилю.',links:[
            {t:'Pricing',u:'https://platform.claude.com/docs/en/about-claude/pricing',k:'doc',s:'Anthropic Docs'},
            {t:'Models overview',u:'https://platform.claude.com/docs/en/about-claude/models/overview',k:'doc',s:'Anthropic Docs',w:'Таблиця моделей з цінами і контекстом'}
          ]},
        {label:'Підрахунок токенів до виклику',desc:'Ендпоінт count_tokens в Anthropic і Gemini або локальна бібліотека tiktoken для OpenAI: кількість токенів у промпті без генерації.',why:'Дозволяє перевірити, чи вміститься контекст, і оцінити ціну до того, як її заплатити.',links:[
            {t:'Token counting',u:'https://platform.claude.com/docs/en/build-with-claude/token-counting',k:'doc',s:'Anthropic Docs'},
            {t:'openai/tiktoken',u:'https://github.com/openai/tiktoken',k:'github',s:'GitHub'},
            {t:'How to count tokens with tiktoken',u:'https://github.com/openai/openai-cookbook/blob/main/examples/How_to_count_tokens_with_tiktoken.ipynb',k:'github',s:'OpenAI Cookbook'},
            {t:'Understand and count tokens - Gemini API',u:'https://ai.google.dev/gemini-api/docs/tokens',k:'doc',s:'Gemini API Docs'}
          ],
          children:[
            {label:'Токенайзер залежить від моделі',desc:'Кожна родина моделей має свій токенайзер; той самий текст дає різну кількість токенів у Claude, GPT і Gemini, а кирилиця токенізується гірше за англійську.',why:'Оцінка через tiktoken для не-OpenAI моделі це вгадування, а не підрахунок.',links:[
                {t:'Tokenizers - Hugging Face LLM Course',u:'https://huggingface.co/learn/llm-course/chapter2/4',k:'course',s:'Hugging Face'},
                {t:'Tokenizer - OpenAI Platform',u:'https://platform.openai.com/tokenizer',k:'doc',s:'OpenAI',w:'Подивитись руками, як текст ріжеться на токени'}
              ]}
          ]},
        {label:'Prompt caching',desc:'Повторювана частина промпту (системні інструкції, тули, великий документ) кешується провайдером і коштує дешевше при наступних викликах. В Anthropic явні cache_control breakpoints, в OpenAI і Gemini кеш автоматичний за префіксом.',why:'Для агентів з довгим системним промптом кеш зменшує рахунок у кілька разів і скорочує latency.',links:[
            {t:'Prompt caching',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',k:'doc',s:'Anthropic Docs'},
            {t:'Prompt caching',u:'https://developers.openai.com/api/docs/guides/prompt-caching',k:'doc',s:'OpenAI Docs'},
            {t:'Context caching - Gemini API',u:'https://ai.google.dev/gemini-api/docs/caching',k:'doc',s:'Gemini API Docs'},
            {t:'Prompt caching through the Claude API',u:'https://platform.claude.com/cookbook/misc-prompt-caching',k:'github',s:'Claude Cookbook'},
            {t:'Prompt Caching 101',u:'https://github.com/openai/openai-cookbook/blob/main/examples/Prompt_Caching101.ipynb',k:'github',s:'OpenAI Cookbook'},
            {t:'Prompt caching with Claude',u:'https://www.anthropic.com/news/prompt-caching',k:'article',y:2024,s:'Anthropic'}
          ],
          children:[
            {label:'Стабільний префікс: що ламає кеш',desc:'Кеш працює за точним збігом префікса tools, system, messages; дата в системному промпті, невпорядкований JSON або змінний набір тулів обнуляють його.',why:'Якщо cache_read_input_tokens у usage нуль на повторних запитах, десь є непомітний інвалідатор.',links:[
                {t:'Prompt caching',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',k:'doc',s:'Anthropic Docs',w:'Порядок tools → system → messages і до 4 breakpoints'}
              ]},
            {label:'TTL кешу: 5 хвилин чи година',desc:'Кеш живе обмежений час після останнього читання; довший TTL коштує дорожче на запис, але виправданий для рідких, та регулярних викликів.',why:'Cron-джоба раз на 10 хвилин із 5-хвилинним кешем платить за запис кожного разу і нічого не економить.',links:[
                {t:'Prompt caching',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',k:'doc',s:'Anthropic Docs'},
                {t:'Prompt caching - Simon Willison',u:'https://simonwillison.net/tags/prompt-caching/',k:'article',y:2025,s:'Simon Willison',w:'Як різні провайдери підійшли до кешу'}
              ]}
          ]},
        {label:'Batch API',type:'optional',desc:'Асинхронна обробка великої кількості запитів зі знижкою близько 50% і часом виконання до доби: Anthropic Message Batches, OpenAI Batch API, Gemini Batch API.',why:'Нічний прогін evals або розмітка тисяч документів не потребують відповіді за секунду.',links:[
            {t:'Batch processing',u:'https://platform.claude.com/docs/en/build-with-claude/batch-processing',k:'doc',s:'Anthropic Docs'},
            {t:'Batch API',u:'https://developers.openai.com/api/docs/guides/batch',k:'doc',s:'OpenAI Docs'},
            {t:'Batch API - Gemini API',u:'https://ai.google.dev/gemini-api/docs/batch-api',k:'doc',s:'Gemini API Docs'},
            {t:'Batch processing with Message Batches API',u:'https://platform.claude.com/cookbook/misc-batch-processing',k:'github',s:'Claude Cookbook'},
            {t:'Batch processing with the Batch API',u:'https://github.com/openai/openai-cookbook/blob/main/examples/batch_processing.ipynb',k:'github',s:'OpenAI Cookbook'}
          ]},
        {label:'Оцінка вартості прогону',desc:'Ціна одного прогону = сума токенів кожного кроку × тариф моделі; рахується з usage до релізу на вибірці запитів, окремо для кеш-хітів і промахів.',why:'Фіча, що коштує 0,30 долара за користувача на день, має бути відома до запуску, а не з рахунку.',links:[
            {t:'Optimizing for cost and intelligence',u:'https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence',k:'doc',s:'Anthropic Docs'},
            {t:'LLM pricing calculator',u:'https://www.llm-prices.com/',k:'doc',s:'Simon Willison'},
            {t:'Model optimization',u:'https://developers.openai.com/api/docs/guides/model-optimization',k:'doc',s:'OpenAI Docs'}
          ]}
      ]},
    {label:'Вибір моделі і роутинг',side:'right',desc:'Не одна модель на все: швидка і дешева для простих кроків, сильна там, де помилка дорога. Плюс версії, депрекації і кілька дверей до тих самих моделей.',why:'Три осі оптимізації: якість, latency і вартість. Вибір моделі рухає всі три.',links:[
        {t:'Choosing the right model',u:'https://platform.claude.com/docs/en/about-claude/models/choosing-a-model',k:'doc',s:'Anthropic Docs'},
        {t:'Model selection',u:'https://developers.openai.com/api/docs/guides/model-selection',k:'doc',s:'OpenAI Docs'},
        {t:'Models - Gemini API',u:'https://ai.google.dev/gemini-api/docs/models',k:'doc',s:'Gemini API Docs'},
        {t:'Practical Guide for Model Selection for Real-World Use Cases',u:'https://github.com/openai/openai-cookbook/blob/main/examples/partners/model_selection_guide/model_selection_guide.ipynb',k:'github',y:2025,s:'OpenAI Cookbook'},
        {t:'Deep Dive into LLMs like ChatGPT',u:'https://www.youtube.com/watch?v=7xTGNNLPyMI',k:'video',y:2025,s:'YouTube · Andrej Karpathy',w:'Що всередині моделей різних рівнів і чому вони відрізняються'},
        {t:'AI Engineering (book repo)',u:'https://github.com/chiphuyen/aie-book',k:'course',y:2025,s:'Chip Huyen',w:'Розділ про вибір моделі: якість, вартість, latency, власні evals'}
      ],
      children:[
        {label:'Рівні моделей: Haiku / Sonnet / Opus',desc:'У кожного провайдера є три рівні: малий і швидкий (Haiku, GPT mini/nano, Gemini Flash), середній (Sonnet) і флагман (Opus, Gemini Pro). Різниця в ціні між рівнями сягає десятків разів.',why:'Класифікувати тікет флагманом це платити вдесятеро за той самий результат.',links:[
            {t:'Models overview',u:'https://platform.claude.com/docs/en/about-claude/models/overview',k:'doc',s:'Anthropic Docs'},
            {t:'Models',u:'https://developers.openai.com/api/docs/models',k:'doc',s:'OpenAI Docs'},
            {t:'Models - Gemini API',u:'https://ai.google.dev/gemini-api/docs/models',k:'doc',s:'Gemini API Docs'}
          ],
          children:[
            {label:'Effort замість зміни моделі',desc:'У нових моделей сильна модель на низькому effort часто дешевша і точніша за слабку на високому; це варто виміряти до того, як будувати каскад із кількох моделей.',why:'Одна модель означає один простір кешу; каскад моделей кеш між собою не ділить.',links:[
                {t:'Optimizing for cost and intelligence',u:'https://platform.claude.com/docs/en/about-claude/models/optimizing-for-cost-and-intelligence',k:'doc',s:'Anthropic Docs'},
                {t:'Effort',u:'https://platform.claude.com/docs/en/build-with-claude/effort',k:'doc',s:'Anthropic Docs'}
              ]}
          ]},
        {label:'Розмір контекстного вікна',desc:'Скільки токенів модель приймає за раз (200K, 1M); визначає, чи влізе документ або історія, і скільки це коштуватиме.',why:'Довгий контекст дорогий і не завжди кращий за RAG; це рішення треба ухвалювати свідомо.',links:[
            {t:'Context windows',u:'https://platform.claude.com/docs/en/build-with-claude/context-windows',k:'doc',s:'Anthropic Docs'},
            {t:'Models overview',u:'https://platform.claude.com/docs/en/about-claude/models/overview',k:'doc',s:'Anthropic Docs'}
          ]},
        {label:'Порівняння на своїх evals',desc:'Вибір моделі за прогоном власного golden dataset, а не за публічними бенчмарками; лідерборди годяться лише як перший фільтр.',why:'Бенчмарки міряють чуже; ваша задача має свої кейси і свою ціну помилки.',links:[
            {t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',s:'Anthropic Docs'},
            {t:'Building evals | Claude Cookbook',u:'https://platform.claude.com/cookbook/misc-building-evals',k:'github',s:'Claude Cookbook'},
            {t:'LLM Leaderboard - Artificial Analysis',u:'https://artificialanalysis.ai/leaderboards/models',k:'doc',s:'Artificial Analysis',w:'Якість, швидкість і ціна моделей в одній таблиці'},
            {t:'Your AI Product Needs Evals',u:'https://hamel.dev/blog/posts/evals/',k:'article',y:2024,s:'Hamel Husain'}
          ]},
        {label:'Роутинг запитів між моделями',desc:'Простий запит іде в дешеву модель, складний у сильну: за правилами, за класифікатором або за навченим роутером (RouteLLM); рішення логується разом із результатом.',why:'Роутинг дає більшу економію, ніж будь-яка оптимізація промпту, але потребує evals для кожної гілки.',links:[
            {t:'lm-sys/RouteLLM',u:'https://github.com/lm-sys/RouteLLM',k:'github',y:2024,s:'GitHub',w:'Відкритий фреймворк і дослідження роутингу між сильною і дешевою моделлю'},
            {t:'Router - Load Balancing - LiteLLM',u:'https://docs.litellm.ai/docs/routing',k:'doc',s:'LiteLLM Docs'},
            {t:'Building A Generative AI Platform',u:'https://huyenchip.com/2024/07/25/genai-platform.html',k:'article',y:2024,s:'Chip Huyen',w:'Роутер, шлюз і кеш як окремі шари платформи'}
          ]},
        {label:'Провайдери: закриті моделі',type:'alt',desc:'Інструменти з мапи AI-екосистеми: основні API-провайдери з власними моделями. Обирають одного як основного і одного як fallback.',why:'Код виклику в усіх схожий, але формати повідомлень, фічі і ціни різні; знати треба хоча б двох.',links:[
            {t:'OpenAI API Platform Documentation',u:'https://developers.openai.com/api/docs',k:'doc',s:'OpenAI Docs'},
            {t:'Get started with Claude',u:'https://platform.claude.com/docs/en/get-started',k:'doc',s:'Anthropic Docs'},
            {t:'Docs - Gemini API',u:'https://ai.google.dev/gemini-api/docs',k:'doc',s:'Gemini API Docs'},
            {t:'Cohere Documentation',u:'https://docs.cohere.com/',k:'doc',s:'Cohere Docs'}
          ],
          children:[
            {label:'OpenAI',type:'alt',desc:'GPT-моделі через Responses API і Chat Completions, embeddings, Batch, structured outputs.',why:'Формат Chat Completions став де-факто стандартом, який копіюють інші провайдери.',links:[
                {t:'OpenAI API Platform Documentation',u:'https://developers.openai.com/api/docs',k:'doc',s:'OpenAI Docs'},
                {t:'openai/openai-python',u:'https://github.com/openai/openai-python',k:'github',s:'GitHub'}
              ]},
            {label:'Anthropic Claude',type:'alt',desc:'Моделі Claude через Messages API: tool use, prompt caching з явними breakpoints, Batches, Files, structured outputs.',why:'Сильний вибір для агентів і коду; явне керування кешем і effort дає контроль над ціною.',links:[
                {t:'Get started with Claude',u:'https://platform.claude.com/docs/en/get-started',k:'doc',s:'Anthropic Docs'},
                {t:'anthropics/anthropic-sdk-python',u:'https://github.com/anthropics/anthropic-sdk-python',k:'github',s:'GitHub'}
              ]},
            {label:'Google Gemini',type:'alt',desc:'Gemini API через GenAI SDK: довгий контекст, нативне аудіо і відео на вході, context caching, OpenAI-сумісний endpoint.',why:'Найдешевший шлях для мультимодальних входів і дуже довгих документів.',links:[
                {t:'Docs - Gemini API',u:'https://ai.google.dev/gemini-api/docs',k:'doc',s:'Gemini API Docs'},
                {t:'googleapis/python-genai',u:'https://github.com/googleapis/python-genai',k:'github',s:'GitHub'}
              ]},
            {label:'Cohere',type:'alt',desc:'Command-моделі для генерації плюс Embed і Rerank як окремі API; сильний фокус на RAG і корпоративному пошуку.',why:'Для RAG частіше беруть саме їхні Embed і Rerank, а не чат-модель.',links:[
                {t:'Cohere Documentation',u:'https://docs.cohere.com/',k:'doc',s:'Cohere Docs'},
                {t:'cohere-ai/cohere-python',u:'https://github.com/cohere-ai/cohere-python',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Провайдери і хмарні шляхи',type:'alt',desc:'Прямі API: Anthropic, OpenAI, Gemini. Через хмару: Amazon Bedrock, Google Cloud Vertex AI, Microsoft Foundry. Хмарний шлях дає єдиний рахунок, IAM і регіон даних, прямий швидший доступ до нових фіч.',why:'Ті самі моделі можна брати різними дверима; ідентифікатори моделей і доступність фіч при цьому відрізняються.',links:[
            {t:'Claude in Amazon Bedrock',u:'https://platform.claude.com/docs/en/build-with-claude/claude-in-amazon-bedrock',k:'doc',s:'Anthropic Docs'},
            {t:'Claude Models on Google Cloud',u:'https://platform.claude.com/docs/en/build-with-claude/claude-models-on-google-cloud/google-managed',k:'doc',s:'Anthropic Docs'},
            {t:'Claude in Microsoft Foundry',u:'https://platform.claude.com/docs/en/build-with-claude/claude-in-microsoft-foundry',k:'doc',s:'Anthropic Docs'},
            {t:'Claude Platform on AWS',u:'https://platform.claude.com/docs/en/build-with-claude/claude-platform-on-aws',k:'doc',s:'Anthropic Docs'},
            {t:'Claude models on Vertex AI',u:'https://cloud.google.com/vertex-ai/generative-ai/docs/partner-models/claude',k:'doc',s:'Google Cloud Docs'}
          ]},
        {label:'Версії моделей і депрекації',desc:'Моделі мають ідентифікатори версій і дати виведення з експлуатації; провайдери публікують графік і гайди міграції. Нова версія не гарантує кращої поведінки саме на вашій задачі.',why:'Модель, на яку ви розраховували, зникне через рік; без привʼязки до версії і evals міграція перетворюється на пожежу.',links:[
            {t:'Model deprecations',u:'https://platform.claude.com/docs/en/about-claude/model-deprecations',k:'doc',s:'Anthropic Docs'},
            {t:'Migration guides',u:'https://platform.claude.com/docs/en/about-claude/models/migration-guide',k:'doc',s:'Anthropic Docs'},
            {t:'Deprecations',u:'https://developers.openai.com/api/docs/deprecations',k:'doc',s:'OpenAI Docs'},
            {t:'Gemini deprecations',u:'https://ai.google.dev/gemini-api/docs/deprecations',k:'doc',s:'Gemini API Docs'},
            {t:'API versions',u:'https://platform.claude.com/docs/en/api/versioning',k:'doc',s:'Anthropic Docs',w:'Заголовок anthropic-version і що він фіксує'},
            {t:'А старі моделі часом не пишуть краще?',u:'https://t.me/beerphp/195',k:'post',y:2026,s:'beerphp',w:'Приклад, коли новіша модель гірша на конкретній задачі'}
          ]}
      ]},
    {label:'Шлюзи і абстракції над провайдерами',side:'left',desc:'Шар між кодом і провайдерами: єдиний інтерфейс, fallback, ліміти, облік витрат. Від тонкого власного інтерфейсу до LiteLLM, OpenRouter, Vercel AI SDK і AI gateway.',why:'Дозволяє fallback і міграцію без переписування всього коду, але додає ще один шар, який треба налагоджувати і який ховає реальний промпт.',links:[
        {t:'Fuck You, Show Me The Prompt.',u:'https://hamel.dev/blog/posts/prompt/',k:'article',y:2024,s:'Hamel Husain',w:'Чому треба бачити, що саме абстракція шле в API'},
        {t:'LLM: A CLI tool and Python library',u:'https://llm.datasette.io/en/stable/',k:'doc',s:'Simon Willison',w:'Приклад тонкої абстракції з плагінами під десятки провайдерів'},
        {t:'Fun stories from building OpenRouter and where all this is going - Alex Atallah, OpenRouter',u:'https://www.youtube.com/watch?v=84Vtz2IL1Ug',k:'video',y:2025,s:'YouTube · AI Engineer'},
        {t:'One API to Rule Them All? LiteLLM in Production',u:'https://www.youtube.com/watch?v=RWDJKIya-WI',k:'video',y:2025,s:'YouTube · PyData',w:'Реальний досвід LiteLLM у проді: що зламалось і що допомогло'},
        {t:'What Is an LLM Gateway?',u:'https://openrouter.ai/blog/insights/llm-gateway/',k:'article',y:2025,s:'OpenRouter'}
      ],
      children:[
        {label:'LiteLLM: один SDK і проксі',desc:'Бібліотека і проксі-сервер з OpenAI-сумісним інтерфейсом до сотень моделей: роутинг, fallback, бюджети, ключі для команд.',why:'Найпоширеніший спосіб дати команді один endpoint і один рахунок на всіх провайдерів.',links:[
            {t:'LiteLLM Docs',u:'https://docs.litellm.ai/docs/',k:'doc',s:'LiteLLM Docs'},
            {t:'BerriAI/litellm',u:'https://github.com/BerriAI/litellm',k:'github',s:'GitHub'},
            {t:'Retries, fallbacks and cooldowns - LiteLLM',u:'https://docs.litellm.ai/docs/router/learn/reliability',k:'doc',s:'LiteLLM Docs'}
          ]},
        {label:'OpenRouter',desc:'Хостований шлюз з єдиним API-ключем до моделей багатьох провайдерів, роутингом між ними і рейтингом використання моделей.',why:'Зручний спосіб спробувати нову модель за хвилину і порівняти провайдерів без десятка акаунтів.',links:[
            {t:'Models API Reference - List, Filter, and Sort AI Models on OpenRouter',u:'https://openrouter.ai/docs/api_reference/models',k:'doc',s:'OpenRouter Docs'},
            {t:'Provider Routing - Smart Multi-Provider Request Management',u:'https://openrouter.ai/docs/guides/routing/provider-selection',k:'doc',s:'OpenRouter Docs'},
            {t:'Structured Outputs - Type-Safe JSON Responses from AI Models',u:'https://openrouter.ai/docs/guides/features/structured-outputs',k:'doc',s:'OpenRouter Docs'}
          ]},
        {label:'Vercel AI SDK (TypeScript)',desc:'Бібліотека для TypeScript з єдиними функціями generateText, streamText і структурованим виводом через zod поверх провайдерів; тісно інтегрована з React і Next.js.',why:'Для фронтенд- і Node-команд це стандартний спосіб писати стрімінг-чат і tool calling без прямої роботи з SSE.',links:[
            {t:'AI SDK by Vercel',u:'https://ai-sdk.dev/docs/introduction',k:'doc',s:'Vercel AI SDK'},
            {t:'Generating Text - AI SDK',u:'https://ai-sdk.dev/docs/ai-sdk-core/generating-text',k:'doc',s:'Vercel AI SDK'},
            {t:'vercel/ai',u:'https://github.com/vercel/ai',k:'github',s:'GitHub'},
            {t:'AI SDK: A Deep Dive with Nico Albanese',u:'https://www.youtube.com/watch?v=8lzBr9QAo_8',k:'video',y:2024,s:'YouTube · Ray Fernando',w:'Довга жива сесія з автором SDK: структурований вивід, тули, UI'}
          ]},
        {label:'AI gateway: Cloudflare, Portkey',type:'optional',desc:'Керований проксі перед провайдерами з логами, кешем, лімітами і аналітикою витрат без змін у коді, лише base_url.',why:'Швидкий спосіб отримати спостережуваність і ліміти на всю компанію, якщо не хочеться тримати свій LiteLLM.',links:[
            {t:'Cloudflare AI Gateway',u:'https://developers.cloudflare.com/ai-gateway/',k:'doc',s:'Cloudflare Docs'},
            {t:'AI Gateway - Portkey Docs',u:'https://portkey.ai/docs/product/ai-gateway',k:'doc',s:'Portkey Docs'},
            {t:'Portkey-AI/gateway',u:'https://github.com/Portkey-AI/gateway',k:'github',s:'GitHub'}
          ]}
      ]},
    {label:'Промпти як код',side:'right',desc:'Промпт це частина коду: живе в репо, має версії, тести і ревʼю.',why:'Зміна одного слова в промпті змінює поведінку проду так само, як зміна рядка коду.',links:[
        {t:'Prompting best practices',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices',k:'doc',s:'Anthropic Docs'},
        {t:'Prompt engineering overview',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview',k:'doc',s:'Anthropic Docs'},
        {t:'Prompt design strategies - Gemini API',u:'https://ai.google.dev/gemini-api/docs/prompting-strategies',k:'doc',s:'Gemini API Docs'},
        {t:'anthropics/prompt-eng-interactive-tutorial',u:'https://github.com/anthropics/prompt-eng-interactive-tutorial',k:'github',s:'GitHub',w:'Інтерактивний курс із вправами в ноутбуках'},
        {t:'GPT-4.1 Prompting Guide',u:'https://github.com/openai/openai-cookbook/blob/main/examples/gpt4-1_prompting_guide.ipynb',k:'github',y:2025,s:'OpenAI Cookbook'},
        {t:'Prompting 101 | Code w/ Claude',u:'https://www.youtube.com/watch?v=ysPbXH0LpIE',k:'video',y:2025,s:'YouTube · Anthropic'}
      ],
      children:[
        {label:'Промпти в репо, не в базі чи чаті',desc:'Текст промпту лежить у файлах поруч із кодом і проходить через пул-реквест; альтернатива з prompt management (Langfuse) теж має версії і ролбек.',why:'Диф промпту в ревʼю видно; зміну в адмінці ніхто не побачить, доки не зламається.',links:[
            {t:'Get Started with Prompt Management - Langfuse',u:'https://langfuse.com/docs/prompt-management/get-started',k:'doc',s:'Langfuse Docs',w:'Коли промпти таки живуть поза репо: версії, labels, API'},
            {t:'Lessons From A Year Building With LLMs',u:'https://www.youtube.com/watch?v=qBHfQT3YtyY',k:'video',y:2024,s:'YouTube · AI Engineer'}
          ]},
        {label:'Версіонування і відкат',desc:'Кожна версія промпту ідентифікована (хеш або номер); у логах видно, яка саме версія дала відповідь, і її можна повернути за хвилину.',why:'Коли якість упала вчора, треба за хвилину знайти, що саме змінилось.',links:[
            {t:'Open Source Prompt Management - Langfuse',u:'https://langfuse.com/docs/prompt-management/overview',k:'doc',s:'Langfuse Docs'}
          ]},
        {label:'Шаблони і підстановка змінних',desc:'Промпт як шаблон з параметрами; дані користувача підставляються в чітко позначені місця, наприклад у XML-теги.',why:'Текст користувача всередині інструкцій без межі це prompt injection, що чекає свого часу.',links:[
            {t:'Prompting best practices',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices',k:'doc',s:'Anthropic Docs',w:'XML-теги і шаблони зі змінними'},
            {t:'Jinja',u:'https://jinja.palletsprojects.com/',k:'doc',s:'Pallets',w:'Шаблонізатор для промптів у Python'}
          ]},
        {label:'Тести з моками відповіді',desc:'Unit-тести коду навколо виклику використовують записані або згенеровані відповіді моделі (vcrpy, respx, msw); реальне API ходять лише інтеграційні тести і evals.',why:'Тести не ходять у реальне API: дорого, повільно і недетерміновано.',links:[
            {t:'unittest.mock',u:'https://docs.python.org/3/library/unittest.mock.html',k:'doc',s:'Python Docs'},
            {t:'kevin1024/vcrpy',u:'https://github.com/kevin1024/vcrpy',k:'github',s:'GitHub',w:'Записує реальні HTTP-відповіді й відтворює їх у тестах'},
            {t:'RESPX',u:'https://lundberg.github.io/respx/',k:'doc',s:'RESPX',w:'Мок для HTTPX, на якому працюють Python SDK провайдерів'},
            {t:'mswjs/msw',u:'https://github.com/mswjs/msw',k:'github',s:'GitHub',w:'Мок HTTP для Node і браузера'}
          ]},
        {label:'Промпт у циклі evals',desc:'Кожна зміна промпту проганяється на наборі кейсів перед мерджем (promptfoo або власний скрипт); результат порівнюється з попередньою версією.',why:'Без цього «покращив промпт» означає «змінив і сподіваюсь».',links:[
            {t:'promptfoo - Intro',u:'https://www.promptfoo.dev/docs/intro',k:'doc',s:'promptfoo'},
            {t:'Define success criteria and build evaluations',u:'https://platform.claude.com/docs/en/test-and-evaluate/develop-tests',k:'doc',s:'Anthropic Docs'},
            {t:'A Field Guide to Rapidly Improving AI Products',u:'https://hamel.dev/blog/posts/field-guide/',k:'article',y:2025,s:'Hamel Husain'}
          ]}
      ]},
    {label:'Embeddings API',side:'left',desc:'Окремий тип виклику: текст перетворюється на вектор чисел, схожі тексти дають близькі вектори. Моделі: OpenAI text-embedding-3, Voyage, Gemini Embedding, Cohere Embed.',why:'Місток до наступного кроку: RAG будується на embeddings, і це той самий API з тими самими лімітами і ціною.',links:[
        {t:'Vector embeddings',u:'https://developers.openai.com/api/docs/guides/embeddings',k:'doc',s:'OpenAI Docs'},
        {t:'Embeddings',u:'https://platform.claude.com/docs/en/build-with-claude/embeddings',k:'doc',s:'Anthropic Docs',w:'Anthropic рекомендує Voyage AI для embeddings'},
        {t:'Embeddings - Gemini API',u:'https://ai.google.dev/gemini-api/docs/embeddings',k:'doc',s:'Gemini API Docs'},
        {t:'Embeddings: What they are and why they matter',u:'https://simonwillison.net/2023/Oct/23/embeddings/',k:'article',y:2023,s:'Simon Willison',w:'Найзрозуміліше пояснення для бекендера'},
        {t:'Sentence Transformers',u:'https://sbert.net/',k:'doc',s:'SBERT',w:'Локальні embeddings без API'}
      ],
      children:[
        {label:'Вектор, розмірність, схожість',desc:'Відповідь це масив чисел фіксованої довжини (наприклад 1024 або 3072); близькість міряють косинусною схожістю або скалярним добутком.',why:'Без розуміння, що саме порівнюється, пошук за embeddings виглядає як магія, а налагоджувати магію неможливо.',links:[
            {t:'Embeddings: What they are and why they matter',u:'https://simonwillison.net/2023/Oct/23/embeddings/',k:'article',y:2023,s:'Simon Willison'},
            {t:'Vector embeddings',u:'https://developers.openai.com/api/docs/guides/embeddings',k:'doc',s:'OpenAI Docs'}
          ]},
        {label:'Моделі embeddings і їхні провайдери',desc:'OpenAI text-embedding-3-small/large, Voyage voyage-4, Gemini Embedding, Cohere Embed, відкриті моделі з MTEB; різняться якістю на мовах, довжиною входу і ціною.',why:'Для української якість різних моделей відрізняється суттєво; вибір треба перевіряти на своїх даних.',links:[
            {t:'Text Embeddings - Voyage AI',u:'https://docs.voyageai.com/docs/embeddings',k:'doc',s:'Voyage AI Docs'},
            {t:'Cohere\'s Embed Models',u:'https://docs.cohere.com/docs/cohere-embed',k:'doc',s:'Cohere Docs'},
            {t:'MTEB Leaderboard',u:'https://huggingface.co/spaces/mteb/leaderboard',k:'doc',s:'Hugging Face',w:'Порівняння embedding-моделей на бенчмарках, у тому числі багатомовних'},
            {t:'New embedding models and API updates',u:'https://openai.com/index/new-embedding-models-and-api-updates/',k:'article',y:2024,s:'OpenAI'}
          ]},
        {label:'Батчинг і ліміти',desc:'Кілька текстів в одному запиті, ліміт на кількість і довжину входу; довгі документи ріжуться на фрагменти до виклику.',why:'Індексація тисяч документів по одному запиту на кожен упирається в rate limit за хвилину.',links:[
            {t:'Embedding texts that are longer than the model\'s maximum context length',u:'https://github.com/openai/openai-cookbook/blob/main/examples/Embedding_long_inputs.ipynb',k:'github',s:'OpenAI Cookbook'}
          ]},
        {label:'Одна модель для індексу і запитів',desc:'Вектори різних моделей несумісні; зміна моделі означає переіндексацію всього корпусу.',why:'Оновлення моделі embeddings без переіндексації тихо ламає пошук.',links:[
            {t:'Embeddings - Gemini API',u:'https://ai.google.dev/gemini-api/docs/embeddings',k:'doc',s:'Gemini API Docs'}
          ]},
        {label:'Розмірність і Matryoshka',type:'optional',desc:'Деякі моделі дозволяють вкорочувати вектор (параметр dimensions) з невеликою втратою якості; це зменшує індекс і прискорює пошук.',why:'Вектор на 3072 числа для мільйона документів це гігабайти; 512 часто достатньо.',links:[
            {t:'Introduction to Matryoshka Embedding Models',u:'https://huggingface.co/blog/matryoshka',k:'article',y:2024,s:'Hugging Face'},
            {t:'Vector embeddings',u:'https://developers.openai.com/api/docs/guides/embeddings',k:'doc',s:'OpenAI Docs',w:'Параметр dimensions у text-embedding-3'}
          ]}
      ]},
    {label:'Open-weight моделі і локальний інференс',side:'right',desc:'Моделі з відкритими вагами (Llama, Qwen, gpt-oss, Mistral) запускають у себе через Ollama, vLLM або llama.cpp; інтерфейс зазвичай OpenAI-сумісний.',why:'Коли дані не можуть покинути периметр або обсяг робить API занадто дорогим, той самий код має працювати з локальною моделлю.',links:[
        {t:'Ollama documentation',u:'https://docs.ollama.com/',k:'doc',s:'Ollama Docs'},
        {t:'vLLM documentation',u:'https://docs.vllm.ai/en/latest/',k:'doc',s:'vLLM Docs'},
        {t:'ggml-org/llama.cpp',u:'https://github.com/ggml-org/llama.cpp',k:'github',s:'GitHub'},
        {t:'Hugging Face LLM Course',u:'https://huggingface.co/learn/llm-course/chapter1/1',k:'course',s:'Hugging Face',w:'Безплатний курс про transformers, токенайзери і запуск моделей'},
        {t:'[1hr Talk] Intro to Large Language Models',u:'https://www.youtube.com/watch?v=zjkBMFhNj_g',k:'video',y:2023,s:'YouTube · Andrej Karpathy'}
      ],
      children:[
        {label:'Ollama',type:'optional',desc:'Найпростіший локальний сервер моделей: одна команда для завантаження і запуску, OpenAI-сумісний endpoint на localhost:11434, structured outputs за JSON Schema.',why:'Для розробки і тестів без рахунку за API і для прототипів з приватними даними.',links:[
            {t:'ollama/ollama',u:'https://github.com/ollama/ollama',k:'github',s:'GitHub'},
            {t:'OpenAI compatibility - Ollama',u:'https://docs.ollama.com/api/openai-compatibility',k:'doc',s:'Ollama Docs'},
            {t:'Structured Outputs - Ollama',u:'https://docs.ollama.com/capabilities/structured-outputs',k:'doc',s:'Ollama Docs'}
          ]},
        {label:'vLLM і llama.cpp server',type:'optional',desc:'vLLM: продакшн-сервер для GPU з високим throughput і OpenAI-сумісним API; llama.cpp: інференс на CPU і споживчих GPU з форматом GGUF, також із власним сервером.',why:'Ollama для ноутбука, vLLM для сервера з GPU під навантаженням; обирати треба за профілем трафіку.',links:[
            {t:'vllm-project/vllm',u:'https://github.com/vllm-project/vllm',k:'github',s:'GitHub'},
            {t:'OpenAI-Compatible Server - vLLM',u:'https://docs.vllm.ai/en/latest/serving/openai_compatible_server.html',k:'doc',s:'vLLM Docs'},
            {t:'llama.cpp server',u:'https://github.com/ggml-org/llama.cpp/tree/master/tools/server',k:'github',s:'GitHub'},
            {t:'sgl-project/sglang',u:'https://github.com/sgl-project/sglang',k:'github',s:'GitHub',w:'Ще один швидкий сервер інференсу'}
          ]},
        {label:'Hugging Face: Hub, Inference, transformers',type:'optional',desc:'Hub як реєстр моделей і ваг, Inference Providers як API до них без власних GPU, transformers для запуску з коду.',why:'Більшість відкритих моделей живе на Hub; без навички знайти і порівняти їх там локальний інференс не починається.',links:[
            {t:'Inference Providers',u:'https://huggingface.co/docs/inference-providers/index',k:'doc',s:'Hugging Face Docs'},
            {t:'Structured outputs - Inference Providers',u:'https://huggingface.co/docs/inference-providers/en/guides/structured-output',k:'doc',s:'Hugging Face Docs'},
            {t:'Generation with LLMs - Transformers',u:'https://huggingface.co/docs/transformers/llm_tutorial',k:'doc',s:'Hugging Face Docs'},
            {t:'Chat templates - Transformers',u:'https://huggingface.co/docs/transformers/main/en/chat_templating',k:'doc',s:'Hugging Face Docs',w:'Чому формат повідомлень залежить від моделі'}
          ]},
        {label:'Моделі: Llama, Qwen, gpt-oss, Mistral',type:'optional',desc:'Родини моделей з відкритими вагами різного розміру і ліцензій; вибір за розміром під наявну памʼять, якістю на вашій мові і ліцензією.',why:'Ліцензія і розмір визначають, чи можна взагалі запустити модель у вас і чи можна використовувати її комерційно.',links:[
            {t:'meta-llama/llama-models',u:'https://github.com/meta-llama/llama-models',k:'github',s:'GitHub'},
            {t:'QwenLM/Qwen3',u:'https://github.com/QwenLM/Qwen3',k:'github',s:'GitHub'},
            {t:'openai/gpt-oss',u:'https://github.com/openai/gpt-oss',k:'github',y:2025,s:'GitHub'},
            {t:'Introducing gpt-oss',u:'https://openai.com/index/introducing-gpt-oss/',k:'article',y:2025,s:'OpenAI'},
            {t:'Models - Hugging Face',u:'https://huggingface.co/models',k:'doc',s:'Hugging Face'}
          ],
          children:[
            {label:'Meta Llama',type:'alt',desc:'Родина відкритих моделей Meta різного розміру під власною ліцензією Llama; базова опція для Ollama, vLLM і llama.cpp.',why:'Найбільша екосистема інструментів і файнтюнів навколо однієї родини відкритих моделей.',links:[
                {t:'Products & Solutions for AI Developers | Meta',u:'https://www.llama.com/',k:'doc',s:'Meta'},
                {t:'meta-llama/llama-models',u:'https://github.com/meta-llama/llama-models',k:'github',s:'GitHub'}
              ]},
            {label:'Mistral',type:'alt',desc:'Європейський провайдер з відкритими вагами для частини моделей і власним API (La Plateforme); моделі можна запускати локально або брати через API.',why:'Варіант, коли потрібні і відкриті ваги для self-hosting, і API з європейською юрисдикцією даних.',links:[
                {t:'Welcome to Mistral Documentation',u:'https://docs.mistral.ai/',k:'doc',s:'Mistral Docs'},
                {t:'mistralai/mistral-inference',u:'https://github.com/mistralai/mistral-inference',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Квантизація і GGUF',type:'optional',desc:'Стискання ваг до 8, 4 чи менше біт, щоб модель влізла в памʼять і працювала швидше; GGUF як поширений формат для llama.cpp і Ollama.',why:'Різниця між «не запускається» і «працює на ноутбуці» це зазвичай квантизація, і вона коштує якості.',links:[
            {t:'GGUF - Hugging Face Hub',u:'https://huggingface.co/docs/hub/gguf',k:'doc',s:'Hugging Face Docs'},
            {t:'Quantization - Transformers',u:'https://huggingface.co/docs/transformers/en/quantization/overview',k:'doc',s:'Hugging Face Docs'}
          ]}
      ]}
  ]
};
