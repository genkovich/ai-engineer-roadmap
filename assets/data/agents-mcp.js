window.ROADMAPS=window.ROADMAPS||{};
window.ROADMAPS['agents-mcp']={
  slug:'agents-mcp',
  title:'Агенти, tool use і MCP',
  intro:'Агент: цикл, у якому модель просить викликати функцію, ваш код виконує її й повертає результат, і так до кінця задачі. Крок третій, бо ви вже працюєте з агентом як користувач і знаєте, що він бачить у контексті; час зібрати його зсередини. Після циклу, написаного руками, фреймворки і MCP перестають бути магією.',
  root:{label:'Агенти, tool use і MCP',kicker:'Цикл агента, тули, протокол MCP',desc:'Агент: цикл, у якому модель просить викликати функцію, ваш код виконує її й повертає результат, і так до кінця задачі. Tool use (інакше function calling) і є цей механізм. MCP: протокол, через який агент підключає інструменти й дані.',why:'Ознака зрілості: цикл агента написано руками, без фреймворку, і піднято хоча б один MCP-сервер до реального API, яким ви користуєтесь щодня.',
    links:[
      {t:'Building effective AI agents',u:'https://www.anthropic.com/engineering/building-effective-agents',k:'article',y:2024,s:'Anthropic',w:'Головний текст про те, коли агент потрібен, а коли вистачить пайплайна'},
      {t:'Tool use with Claude',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview',k:'doc',s:'Claude Docs'},
      {t:'What is the Model Context Protocol (MCP)?',u:'https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro',k:'doc',y:2026,s:'MCP Docs'},
      {t:'How We Build Effective Agents: Barry Zhang, Anthropic',u:'https://www.youtube.com/watch?v=D7_ipDqhtwk',k:'video',y:2025,s:'YouTube · AI Engineer'},
      {t:'Як працює coding assistants під капотом',u:'https://t.me/beerphp/148',k:'post',y:2026,s:'beerphp',w:'Цикл агента на прикладі coding assistant: JSON Schema тулів і блоки tool use'},
      {t:'Agents',u:'https://huyenchip.com/2025/01/07/agents.html',k:'article',y:2025,s:'Chip Huyen',w:'Розділ з книги «AI Engineering»: планування, тули, помилки агентів'}
    ]},
  end:{label:'Далі: LLM API і structured outputs →',href:'llm-api.html'},
  groups:[
    {label:'Цикл агента руками',side:'left',desc:'Модель повертає «виклич цю функцію з такими аргументами», ваш код виконує й віддає результат, і так, поки модель не скаже, що закінчила. Сама вона нічого не виконує.',why:'Хто написав цей цикл один раз, бачить, що роблять фреймворки, і де вони ламаються.',
      links:[
        {t:'How to Build an Agent',u:'https://ampcode.com/how-to-build-an-agent',k:'article',y:2025,s:'Amp',w:'Повний цикл агента з трьома тулами на кількасот рядків Go'},
        {t:'Handle tool calls',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls',k:'doc',s:'Claude Docs'},
        {t:'Function calling',u:'https://developers.openai.com/api/docs/guides/function-calling',k:'doc',s:'OpenAI Docs'},
        {t:'Tips for building AI agents',u:'https://www.youtube.com/watch?v=LP5OCa20Zpg',k:'video',y:2025,s:'YouTube · Anthropic'},
        {t:'Як працює coding assistants під капотом',u:'https://t.me/beerphp/148',k:'post',y:2026,s:'beerphp'},
        {t:'anthropics/courses: tool_use',u:'https://github.com/anthropics/courses/tree/master/tool_use',k:'course',s:'GitHub',w:'Безкоштовний курс із ноутбуками: від першого тула до повного циклу'}
      ],
      children:[
        {label:'Крок 1: запит із списком тулів',desc:'У виклик моделі разом із повідомленнями передається перелік доступних функцій зі схемами аргументів.',why:'Модель обирає лише з того, що ви їй показали.',
          links:[
            {t:'Define tools',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools',k:'doc',s:'Claude Docs'},
            {t:'Function calling with the Gemini API',u:'https://ai.google.dev/gemini-api/docs/function-calling',k:'doc',s:'Google AI for Developers'},
            {t:'Tool reference',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-reference',k:'doc',s:'Claude Docs',w:'Таблиця вбудованих тулів Claude: версії, beta-заголовки, що виконує сервер'}
          ],
          children:[
            {label:'Claude, OpenAI, Gemini: різниця',desc:'У Claude тул оголошується через input_schema і блок tool_use, в OpenAI через functions у Responses API, у Gemini через function declarations. Ідея та сама, назви полів різні.',why:'Код циклу переноситься між провайдерами, якщо ви знаєте, де саме відрізняються формати.',
              links:[
                {t:'Tool use with Claude',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview',k:'doc',s:'Claude Docs'},
                {t:'Function calling',u:'https://developers.openai.com/api/docs/guides/function-calling',k:'doc',s:'OpenAI Docs'},
                {t:'Function calling with the Gemini API',u:'https://ai.google.dev/gemini-api/docs/function-calling',k:'doc',s:'Google AI for Developers'}
              ]}
          ]},
        {label:'Крок 2: модель просить виклик',desc:'Відповідь містить блок tool use: назва функції і аргументи у форматі JSON за вашою схемою.',why:'Це не виконання, а прохання. Виконує ваш код.',
          links:[
            {t:'Handle tool calls',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls',k:'doc',s:'Claude Docs'},
            {t:'ReAct: Synergizing Reasoning and Acting in Language Models',u:'https://arxiv.org/abs/2210.03629',k:'article',y:2022,s:'arXiv',w:'Стаття, з якої виріс патерн «подумай, виклич тул, подивись результат»'}
          ]},
        {label:'Крок 3: код виконує і повертає',desc:'Ваш код викликає реальну функцію, результат (або помилку) додає в розмову як tool result і знову викликає модель.',why:'Тут живуть усі перевірки, права і логування.',
          links:[
            {t:'Handle tool calls',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls',k:'doc',s:'Claude Docs'},
            {t:'How to Build an Agent',u:'https://ampcode.com/how-to-build-an-agent',k:'article',y:2025,s:'Amp'},
            {t:'Toolformer: Language Models Can Teach Themselves to Use Tools',u:'https://arxiv.org/abs/2302.04761',k:'article',y:2023,s:'arXiv'}
          ]},
        {label:'Stop reason: коли зупинятись',desc:'Відповідь моделі каже, чому вона зупинилась: хоче виклик тула, закінчила, вперлась у ліміт токенів.',why:'Цикл крутиться, поки причина зупинки «потрібен тул». Усе інше кінець або помилка.',
          links:[
            {t:'Stop reasons and fallback',u:'https://platform.claude.com/docs/en/api/handling-stop-reasons',k:'doc',s:'Claude Docs'},
            {t:'Troubleshooting tool use',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/troubleshooting-tool-use',k:'doc',s:'Claude Docs'}
          ]},
        {label:'Ліміт кроків і бюджет',desc:'Максимальна кількість ітерацій, токенів або часу на один прогін, після якої цикл зупиняється примусово.',why:'Агент без ліміту кроків колись зациклиться і спалить бюджет за ніч.',
          links:[
            {t:'12-Factor Agents',u:'https://github.com/humanlayer/12-factor-agents',k:'github',y:2025,s:'GitHub · HumanLayer',w:'Принципи надійних агентів: малі цикли, контроль стану, зупинка'},
            {t:'Manage costs effectively',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Claude Code Docs'},
            {t:'Dynamic Workflows: Запускаємо сотні агентів паралельно',u:'https://t.me/beerphp/171',k:'post',y:2026,s:'beerphp',w:'Одна команда зʼїла 3,2 млн токенів: чому бюджет треба рахувати заздалегідь'}
          ]},
        {label:'Стан між кроками',desc:'Що зберігається між ітераціями: історія повідомлень, результати тулів, проміжні дані у вашому коді. У фреймворках це checkpointer, у Managed Agents сесія.',why:'Довгий прогін має переживати рестарт процесу, інакше кожна помилка починає все з нуля.',
          links:[
            {t:'Persistence',u:'https://docs.langchain.com/oss/python/langgraph/persistence',k:'doc',s:'LangChain Docs',w:'Як LangGraph зберігає стан між кроками і між запусками'},
            {t:'12-Factor Agents',u:'https://github.com/humanlayer/12-factor-agents',k:'github',y:2025,s:'GitHub · HumanLayer'},
            {t:'Claude Managed Agents overview',u:'https://platform.claude.com/docs/en/managed-agents/overview',k:'doc',y:2026,s:'Claude Docs'}
          ]},
        {label:'Стрімінг у циклі',type:'optional',desc:'Відповідь моделі приходить частинами; блоки tool use збираються з потоку перед виконанням.',why:'Користувач бачить прогрес, а не пʼять секунд тиші на кожному кроці.',
          links:[
            {t:'Fine-grained tool streaming',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/fine-grained-tool-streaming',k:'doc',s:'Claude Docs'},
            {t:'Function calling',u:'https://developers.openai.com/api/docs/guides/function-calling',k:'doc',s:'OpenAI Docs'}
          ]}
      ]},
    {label:'Опис тулів',side:'right',desc:'Назва, призначення, схема аргументів. Від якості опису залежить, чи модель обере правильний інструмент і передасть правильні аргументи.',why:'Половина помилок агента лікується не промптом, а кращим описом тула.',
      links:[
        {t:'Writing effective tools for AI agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic',w:'Консолідація тулів, простір імен, компактний результат, evals на тули'},
        {t:'Define tools',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools',k:'doc',s:'Claude Docs'},
        {t:'Tools',u:'https://modelcontextprotocol.io/specification/2026-07-28/server/tools',k:'doc',y:2026,s:'MCP Spec',w:'Як тул описано у протоколі: name, description, inputSchema, annotations'},
        {t:'Berkeley Function Calling Leaderboard (BFCL) V4',u:'https://gorilla.cs.berkeley.edu/leaderboard.html',k:'article',s:'UC Berkeley',w:'Бенчмарк, що міряє, наскільки точно моделі викликають функції'},
        {t:'Introducing advanced tool use for Claude',u:'https://www.anthropic.com/engineering/advanced-tool-use',k:'article',y:2025,s:'Anthropic'}
      ],
      children:[
        {label:'Назва і призначення',desc:'Дієслово плюс обʼєкт, і опис, що робить тул, коли його використовувати і коли ні.',why:'Модель читає опис тула так само, як інструкцію.',
          links:[
            {t:'Writing effective tools for AI agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic'},
            {t:'Define tools',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools',k:'doc',s:'Claude Docs'},
            {t:'Tools',u:'https://openai.github.io/openai-agents-python/tools/',k:'doc',s:'OpenAI Agents SDK'}
          ]},
        {label:'JSON Schema аргументів',desc:'Типи, обовʼязкові поля, enum, опис кожного параметра з прикладами значень. Схему зазвичай генерують з Pydantic (Python) або Zod (TypeScript).',why:'Опис параметра це єдине місце, звідки модель дізнається формат дати чи ідентифікатора.',
          links:[
            {t:'Define tools',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/define-tools',k:'doc',s:'Claude Docs'},
            {t:'Structured outputs',u:'https://platform.claude.com/docs/en/build-with-claude/structured-outputs',k:'doc',s:'Claude Docs',w:'Строга валідація схеми: модель не може повернути поле, якого немає'},
            {t:'Function Tools',u:'https://ai.pydantic.dev/tools/',k:'doc',s:'Pydantic AI',w:'Схема тула з type hints і докстрінгів'}
          ],
          children:[
            {label:'Pydantic, Zod, JSON Schema 2020-12',desc:'Схему не пишуть руками: Pydantic у Python і Zod у TypeScript генерують її з типів. Специфікація MCP приймає будь-які ключові слова JSON Schema 2020-12.',why:'Одна модель даних для валідації аргументів у коді і для опису тула моделі.',
              links:[
                {t:'Function Tools',u:'https://ai.pydantic.dev/tools/',k:'doc',s:'Pydantic AI'},
                {t:'Key Changes',u:'https://modelcontextprotocol.io/specification/2026-07-28/changelog',k:'doc',y:2026,s:'MCP Spec'}
              ]},
            {label:'Strict mode для аргументів',desc:'Режим, у якому провайдер гарантує, що аргументи виклику відповідають схемі, а не лише «схожі на неї».',why:'Знімає клас помилок «модель вигадала поле» без власної валідації й повторів.',
              links:[
                {t:'Structured outputs',u:'https://platform.claude.com/docs/en/build-with-claude/structured-outputs',k:'doc',s:'Claude Docs'},
                {t:'Function calling',u:'https://developers.openai.com/api/docs/guides/function-calling',k:'doc',s:'OpenAI Docs'}
              ]}
          ]},
        {label:'Результат тула: що повертати',desc:'Компактний, структурований, з потрібним для наступного кроку і без зайвого. Помилка повертається як текст, який модель зрозуміє.',why:'Результати тулів найбільший споживач контексту.',
          links:[
            {t:'Writing effective tools for AI agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic'},
            {t:'Manage tool context',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/manage-tool-context',k:'doc',s:'Claude Docs',w:'Очищення старих результатів тулів з контексту'},
            {t:'Context editing',u:'https://platform.claude.com/docs/en/build-with-claude/context-editing',k:'doc',s:'Claude Docs'}
          ]},
        {label:'Помилки назад у модель',desc:'Невалідні аргументи, 404, таймаут повертаються як tool result з поясненням, а не кидають виняток із циклу. Повтори з обмеженням кількості.',why:'Модель уміє виправити виклик, якщо бачить, що саме пішло не так.',
          links:[
            {t:'Handle tool calls',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls',k:'doc',s:'Claude Docs'},
            {t:'Tools',u:'https://modelcontextprotocol.io/specification/2026-07-28/server/tools',k:'doc',y:2026,s:'MCP Spec',w:'isError у результаті тула: помилка виконання йде моделі, а не ламає протокол'},
            {t:'Troubleshooting tool use',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/troubleshooting-tool-use',k:'doc',s:'Claude Docs'}
          ]},
        {label:'Скільки тулів давати',desc:'Менше схожих тулів, чіткі межі між ними. Десятки тулів зі схожими описами плутають модель і зʼїдають контекст.',why:'Якість вибору тула падає з кожним зайвим варіантом.',
          links:[
            {t:'Writing effective tools for AI agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic'},
            {t:'Tool search tool',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool',k:'doc',s:'Claude Docs',w:'defer_loading: тули підвантажуються за потреби, а не всі одразу'},
            {t:'MCP vs CLI',u:'https://t.me/beerphp/149',k:'post',y:2026,s:'beerphp',w:'Скільки контексту зʼїдають описи тулів MCP-серверів'}
          ]},
        {label:'Паралельні виклики',type:'optional',desc:'Модель може попросити кілька тулів за один крок; ваш код виконує їх паралельно і повертає всі результати в одному повідомленні.',why:'Три незалежні запити за один крок замість трьох кроків.',
          links:[
            {t:'Handle tool calls',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls',k:'doc',s:'Claude Docs'},
            {t:'Function calling',u:'https://developers.openai.com/api/docs/guides/function-calling',k:'doc',s:'OpenAI Docs'}
          ]},
        {label:'Programmatic tool calling',type:'optional',desc:'Модель пише код, який викликає ваші тули всередині sandbox, і повертає лише підсумок. Десять викликів і фільтрація результатів без десяти обходів через модель.',why:'Різко менше токенів і раундів для задач «зібрати дані з кількох джерел і порахувати».',
          links:[
            {t:'Programmatic tool calling',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/programmatic-tool-calling',k:'doc',s:'Claude Docs'},
            {t:'Introducing advanced tool use for Claude',u:'https://www.anthropic.com/engineering/advanced-tool-use',k:'article',y:2025,s:'Anthropic'},
            {t:'Programmatic Tool Calling',u:'https://developers.openai.com/api/docs/guides/tools-programmatic-tool-calling',k:'doc',s:'OpenAI Docs'}
          ]}
      ]},
    {label:'Проєктування агента',side:'left',desc:'Рішення до коду: що агент може робити, які в нього межі, як він повідомляє про результат і коли зупиняється.',why:'Патерни з «Building effective agents»: найпростіше рішення, яке працює, і агент лише там, де справді потрібна гнучкість.',
      links:[
        {t:'Building effective AI agents',u:'https://www.anthropic.com/engineering/building-effective-agents',k:'article',y:2024,s:'Anthropic'},
        {t:'A practical guide to building agents',u:'https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf',k:'article',y:2025,s:'OpenAI',w:'PDF: коли агент виправданий, один агент чи кілька, guardrails'},
        {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic'},
        {t:'LLM Powered Autonomous Agents',u:'https://lilianweng.github.io/posts/2023-06-23-agent/',k:'article',y:2023,s:'Lilian Weng',w:'Класична схема: планування, памʼять, тули'},
        {t:'I think “agent” may finally have a widely enough agreed upon definition to be useful jargon now',u:'https://simonwillison.net/2025/Sep/18/agents/',k:'article',y:2025,s:'Simon Willison'},
        {t:'Agentic Engineering: Мій ідеальний AI Workflow розробки',u:'https://www.youtube.com/watch?v=4uLqamwjl-w',k:'video',y:2026,s:'YouTube · BeerCode'}
      ],
      children:[
        {label:'Агент чи пайплайн',desc:'У пайплайні наступний крок вирішує код, в агента модель. Агент потрібен, коли кількість і порядок кроків невідомі заздалегідь.',why:'Більшість задач закривається пайплайном, і він дешевший і передбачуваніший.',
          links:[
            {t:'Building effective AI agents',u:'https://www.anthropic.com/engineering/building-effective-agents',k:'article',y:2024,s:'Anthropic'},
            {t:'How to think about agent frameworks',u:'https://blog.langchain.com/how-to-think-about-agent-frameworks/',k:'article',y:2025,s:'LangChain Blog'},
            {t:'How We Build Effective Agents: Barry Zhang, Anthropic',u:'https://www.youtube.com/watch?v=D7_ipDqhtwk',k:'video',y:2025,s:'YouTube · AI Engineer'}
          ],
          children:[
            {label:'Prompt chaining і routing',desc:'Ланцюжок: вихід одного виклику стає входом наступного. Routing: класифікатор відправляє запит у потрібну гілку.',why:'Два найдешевші патерни, якими закривається більшість «агентних» задач.',
              links:[{t:'Building effective AI agents',u:'https://www.anthropic.com/engineering/building-effective-agents',k:'article',y:2024,s:'Anthropic'}]},
            {label:'Parallelization і voting',desc:'Незалежні підзадачі виконуються одночасно, або одну задачу проганяють кілька разів і порівнюють відповіді.',why:'Швидше і надійніше, коли підзадачі справді незалежні.',
              links:[{t:'Building effective AI agents',u:'https://www.anthropic.com/engineering/building-effective-agents',k:'article',y:2024,s:'Anthropic'}]},
            {label:'Orchestrator-workers',desc:'Центральна модель розбиває задачу і роздає підзадачі робочим моделям, потім збирає результати.',why:'Основа мультиагентних систем: так влаштовані ресерч-агенти і Dynamic Workflows.',
              links:[
                {t:'How we built our multi-agent research system',u:'https://www.anthropic.com/engineering/multi-agent-research-system',k:'article',y:2025,s:'Anthropic'},
                {t:'Dynamic Workflows: Запускаємо сотні агентів паралельно',u:'https://t.me/beerphp/171',k:'post',y:2026,s:'beerphp'}
              ]},
            {label:'Evaluator-optimizer',desc:'Одна модель генерує, інша оцінює і повертає зауваження, цикл повторюється до прийнятного результату.',why:'Працює там, де є чіткий критерій якості, наприклад тести або рубрика.',
              links:[{t:'Building effective AI agents',u:'https://www.anthropic.com/engineering/building-effective-agents',k:'article',y:2024,s:'Anthropic'}]}
          ]},
        {label:'System prompt агента',desc:'Роль, задача, правила використання тулів, формат фінальної відповіді, коли просити підтвердження.',why:'Це контракт між вами і агентом на кожен крок.',
          links:[
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic'},
            {t:'Best practices for Claude Code',u:'https://www.anthropic.com/engineering/claude-code-best-practices',k:'article',y:2025,s:'Anthropic'},
            {t:'Чому AI пише тобі сміття: 5 помилок, які роблять всі',u:'https://www.youtube.com/watch?v=wOW0-RZDPbA',k:'video',y:2026,s:'YouTube · BeerCode'}
          ]},
        {label:'Межі дій і підтвердження',desc:'Читати агент може сам, дії, що щось змінюють, чекають на «ок» від людини (human-in-the-loop). Докладніше в роадмапах «Оркестрація» і «Безпека».',why:'Жодна дія, що пише в систему, не має проходити без перевірки.',
          links:[
            {t:'Interrupts',u:'https://docs.langchain.com/oss/python/langgraph/interrupts',k:'doc',s:'LangChain Docs',w:'Пауза графа на підтвердження людини і продовження з того ж місця'},
            {t:'Configure permissions',u:'https://code.claude.com/docs/en/agent-sdk/permissions',k:'doc',s:'Claude Code Docs'},
            {t:'Guardrails',u:'https://openai.github.io/openai-agents-python/guardrails/',k:'doc',s:'OpenAI Agents SDK'},
            {t:'Hooks reference',u:'https://code.claude.com/docs/en/hooks',k:'doc',s:'Claude Code Docs',w:'Детермінований код до і після кожного виклику тула'}
          ]},
        {label:'Памʼять агента',desc:'Коротка (історія сесії), робоча (нотатки у файлі чи базі), довга (факти між прогонами). Окремі memory tool у провайдерів і бібліотеки Letta, Mem0.',why:'Без памʼяті поза вікном довгий прогін забуває власний план.',
          links:[
            {t:'Memory tool',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool',k:'doc',s:'Claude Docs'},
            {t:'Managing context on the Claude Developer Platform',u:'https://www.anthropic.com/news/context-management',k:'article',y:2025,s:'Anthropic'},
            {t:'letta-ai/letta',u:'https://github.com/letta-ai/letta',k:'github',s:'GitHub',w:'Агенти з памʼяттю (раніше MemGPT)'},
            {t:'mem0ai/mem0',u:'https://github.com/mem0ai/mem0',k:'github',s:'GitHub'}
          ],
          children:[
            {label:'Memory tool і context editing',desc:'Вбудований тул, через який модель сама пише і читає файли памʼяті, та очищення старих результатів тулів з контексту.',why:'Довгі прогони без ручного керування вікном контексту.',
              links:[
                {t:'Memory tool',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/memory-tool',k:'doc',s:'Claude Docs'},
                {t:'Context editing',u:'https://platform.claude.com/docs/en/build-with-claude/context-editing',k:'doc',s:'Claude Docs'}
              ]},
            {label:'Компакція і нотатки агента',desc:'Коли контекст майже повний, історія стискається в підсумок; важливе агент виносить у файл нотаток, який читає на старті.',why:'Так Claude Code і ресерч-агенти переживають сесії на сотні кроків.',
              links:[
                {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic'},
                {t:'Context Engineering for Agents',u:'https://rlancemartin.github.io/2025/06/23/context_engineering/',k:'article',y:2025,s:'Lance Martin'},
                {t:'Як я використовую Obsidian в Agentic Workflow',u:'https://www.youtube.com/watch?v=Lm5NLnTQbx0',k:'video',y:2026,s:'YouTube · BeerCode'}
              ]}
          ]},
        {label:'Підагенти',type:'optional',desc:'Головний агент делегує підзадачу окремому агенту зі своїм контекстом і набором тулів, отримує лише результат.',why:'Ізольований контекст для великих підзадач і окремі права для різних ролей.',
          links:[
            {t:'How we built our multi-agent research system',u:'https://www.anthropic.com/engineering/multi-agent-research-system',k:'article',y:2025,s:'Anthropic'},
            {t:'Create custom subagents',u:'https://code.claude.com/docs/en/sub-agents',k:'doc',s:'Claude Code Docs'},
            {t:'Невеличкий шматок з минулого воркшопу про субагентів',u:'https://t.me/beerphp/168',k:'post',y:2026,s:'beerphp',w:'Чому з ресерчу повертається 10 тисяч токенів важливого, а не 120 тисяч сміття'},
            {t:'Anthropic доволі чітко рухається в сторону автономної агентної системи',u:'https://t.me/beerphp/169',k:'post',y:2026,s:'beerphp'},
            {t:'Handoffs',u:'https://openai.github.io/openai-agents-python/handoffs/',k:'doc',s:'OpenAI Agents SDK'}
          ]},
        {label:'Тестування агента',desc:'Тули мокаються, сценарії фіксуються, перевіряється вибір тула і аргументи, а не текст відповіді. Докладніше у групі «Оцінка агентів» і роадмапі «Evals».',why:'Агент без тестів змінює поведінку з кожним оновленням моделі.',
          links:[
            {t:'Demystifying evals for AI agents',u:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',k:'article',y:2026,s:'Anthropic'},
            {t:'Evaluation concepts',u:'https://docs.langchain.com/langsmith/evaluation-concepts',k:'doc',s:'LangSmith Docs'}
          ]}
      ]},
    {label:'MCP: протокол',side:'right',desc:'Model Context Protocol: відкритий стандарт, через який агент підключає інструменти й дані. Сервер віддає тули, клієнт (Claude Code, Cursor, ChatGPT та інші) їх викликає. З грудня 2025 протокол живе в Agentic AI Foundation під Linux Foundation.',why:'Один сервер працює з будь-яким клієнтом, і навпаки. Без протоколу кожну інтеграцію пишуть під кожен інструмент окремо.',
      links:[
        {t:'What is the Model Context Protocol (MCP)?',u:'https://modelcontextprotocol.io/docs/2026-07-28/getting-started/intro',k:'doc',y:2026,s:'MCP Docs'},
        {t:'Specification',u:'https://modelcontextprotocol.io/specification/2026-07-28',k:'doc',y:2026,s:'MCP Spec',w:'Чинна редакція специфікації 2026-07-28'},
        {t:'Introducing the Model Context Protocol',u:'https://www.anthropic.com/news/model-context-protocol',k:'article',y:2024,s:'Anthropic'},
        {t:'Building Agents with Model Context Protocol - Full Workshop with Mahesh Murag of Anthropic',u:'https://www.youtube.com/watch?v=kQmXtrmQ5Zg',k:'video',y:2025,s:'YouTube · AI Engineer'},
        {t:'The Creators of Model Context Protocol',u:'https://www.latent.space/p/mcp',k:'article',y:2025,s:'Latent Space',w:'Подкаст з авторами протоколу: навіщо він і що в нього не ввійшло'},
        {t:'Introduction to Model Context Protocol',u:'https://anthropic.skilljar.com/introduction-to-model-context-protocol',k:'course',s:'Anthropic Academy'}
      ],
      children:[
        {label:'Хост, клієнт, сервер',desc:'Сервер: ваш код, що віддає тули і дані. Клієнт: частина застосунку з моделлю, яка тримає зʼєднання з одним сервером. Хост: сам застосунок (Claude Code, Cursor), у якому живуть клієнти. Між ними JSON-RPC 2.0.',why:'Треба чітко розуміти, з якого боку ви пишете код.',
          links:[
            {t:'Architecture overview',u:'https://modelcontextprotocol.io/docs/2026-07-28/learn/architecture',k:'doc',y:2026,s:'MCP Docs'},
            {t:'Understanding MCP clients',u:'https://modelcontextprotocol.io/docs/2026-07-28/learn/client-concepts',k:'doc',y:2026,s:'MCP Docs'},
            {t:'The Model Context Protocol (MCP)',u:'https://www.youtube.com/watch?v=CQywdSdi5iA',k:'video',y:2025,s:'YouTube · Anthropic'},
            {t:'What is MCP? Integrate AI Agents with Databases & APIs',u:'https://www.youtube.com/watch?v=eur8dUO9mvE',k:'video',y:2025,s:'YouTube · IBM Technology'}
          ]},
        {label:'Примітиви: tools, resources, prompts',desc:'Tools: функції для моделі. Resources: дані для читання (файли, записи). Prompts: готові шаблони, які користувач обирає. Плюс elicitation: сервер просить у користувача додаткові дані.',why:'Більшість серверів використовують лише tools, і це часто правильно.',
          links:[
            {t:'Understanding MCP servers',u:'https://modelcontextprotocol.io/docs/2026-07-28/learn/server-concepts',k:'doc',y:2026,s:'MCP Docs'},
            {t:'Tools',u:'https://modelcontextprotocol.io/specification/2026-07-28/server/tools',k:'doc',y:2026,s:'MCP Spec'},
            {t:'[Keynote] MCP201: The Protocol in Depth with David Soria Parra at Anthropic',u:'https://www.youtube.com/watch?v=C_nqAWHsldo',k:'video',y:2025,s:'YouTube · Agentic AI Foundation'}
          ],
          children:[
            {label:'Tools: функції з схемою',desc:'Те саме, що тули в циклі агента, але оголошені сервером і доступні будь-якому клієнту. Анотації readOnlyHint і destructiveHint підказують клієнту, чи просити підтвердження.',why:'Основа майже кожного MCP-сервера.',
              links:[{t:'Tools',u:'https://modelcontextprotocol.io/specification/2026-07-28/server/tools',k:'doc',y:2026,s:'MCP Spec'}]},
            {label:'Resources: дані за URI',desc:'Файли, записи, документи, які клієнт може прочитати і покласти в контекст.',why:'Для даних, які не треба викликати, а лише читати.',
              links:[{t:'Resources',u:'https://modelcontextprotocol.io/specification/2026-07-28/server/resources',k:'doc',y:2026,s:'MCP Spec'}]},
            {label:'Prompts: шаблони для людини',desc:'Готові промпти з параметрами, які користувач обирає в клієнті.',why:'Спосіб поділитися робочим промптом разом із тулами.',
              links:[{t:'Prompts',u:'https://modelcontextprotocol.io/specification/2026-07-28/server/prompts',k:'doc',y:2026,s:'MCP Spec'}]},
            {label:'Elicitation: питання користувачу',desc:'Сервер посеред виклику може попросити в користувача уточнення або підтвердження. У редакції 2026-07-28 це реалізовано через Multi Round-Trip Requests.',why:'Без цього тул або вгадує, або падає, коли бракує даних.',
              links:[
                {t:'Elicitation',u:'https://modelcontextprotocol.io/specification/2026-07-28/client/elicitation',k:'doc',y:2026,s:'MCP Spec'},
                {t:'Multi Round-Trip Requests',u:'https://modelcontextprotocol.io/specification/2026-07-28/basic/patterns/mrtr',k:'doc',y:2026,s:'MCP Spec'}
              ]}
          ]},
        {label:'Транспорти: stdio і Streamable HTTP',desc:'Stdio: сервер запускається локально як процес, обмін через stdin і stdout. Streamable HTTP: сервер віддалений, один POST-ендпоінт, відповіді потоком SSE. Старий HTTP+SSE застарів.',why:'Локальний сервер для своєї машини, HTTP для команди і проду.',
          links:[
            {t:'Overview',u:'https://modelcontextprotocol.io/specification/2026-07-28/basic/transports',k:'doc',y:2026,s:'MCP Spec',w:'Розділ специфікації про транспорти'},
            {t:'Connect to local MCP servers',u:'https://modelcontextprotocol.io/docs/2026-07-28/develop/connect-local-servers',k:'doc',y:2026,s:'MCP Docs'},
            {t:'Connect to remote MCP Servers',u:'https://modelcontextprotocol.io/docs/2026-07-28/develop/connect-remote-servers',k:'doc',y:2026,s:'MCP Docs'}
          ]},
        {label:'Версії спеки і життєвий цикл',desc:'До редакції 2025-11-25 клієнт і сервер починали з рукостискання initialize та обміну capabilities. Редакція 2026-07-28 зробила протокол stateless: версія і можливості їдуть у _meta кожного запиту, а сервер відповідає на server/discover.',why:'Половина «не підключається» лікується розумінням, яку версію протоколу говорять клієнт і сервер.',
          links:[
            {t:'Key Changes',u:'https://modelcontextprotocol.io/specification/2026-07-28/changelog',k:'doc',y:2026,s:'MCP Spec',w:'Що змінилось: без сесій, без initialize, server/discover, extensions'},
            {t:'Versioning and Compatibility',u:'https://modelcontextprotocol.io/specification/2026-07-28/basic/versioning',k:'doc',y:2026,s:'MCP Spec'},
            {t:'Discovery',u:'https://modelcontextprotocol.io/specification/2026-07-28/server/discover',k:'doc',y:2026,s:'MCP Spec'},
            {t:'MCP 2026 Spec Changes: Stateless, Extensions & Direct Discovery',u:'https://aaif.io/blog/mcp-2026-changes-the-rules',k:'article',y:2026,s:'Agentic AI Foundation'},
            {t:'David Soria Parra on What\'s Changing in the Next MCP Release (MCP Tasks + Client ID Metadata)',u:'https://www.youtube.com/watch?v=d0V2Rv_995Y',k:'video',y:2025,s:'YouTube · Agentic AI Foundation'}
          ],
          children:[
            {label:'Розширення: tasks, apps, skills',desc:'Поза ядром протоколу живуть офіційні розширення: tasks для довгих асинхронних викликів, MCP Apps для інтерфейсу від сервера, skills для передачі навичок через MCP.',why:'Ядро лишається малим, а складні сценарії не ламають базову сумісність.',
              links:[
                {t:'Extensions Overview',u:'https://modelcontextprotocol.io/extensions/overview',k:'doc',y:2026,s:'MCP Docs'},
                {t:'Tasks',u:'https://modelcontextprotocol.io/extensions/tasks/overview',k:'doc',y:2026,s:'MCP Docs'},
                {t:'Deprecated Features',u:'https://modelcontextprotocol.io/specification/2026-07-28/deprecated',k:'doc',y:2026,s:'MCP Spec',w:'Roots, sampling і logging позначені застарілими'}
              ]}
          ]},
        {label:'Авторизація: OAuth 2.1 для HTTP',desc:'Віддалені сервери авторизують клієнта через OAuth 2.1: сервер ресурсу публікує Protected Resource Metadata, клієнт знаходить authorization server, реєструється динамічно і отримує токен. Локальні сервери зазвичай беруть ключі зі змінних середовища.',why:'MCP-сервер до вашого трекера працює від імені користувача, і це треба зробити правильно.',
          links:[
            {t:'Authorization',u:'https://modelcontextprotocol.io/specification/2026-07-28/basic/authorization',k:'doc',y:2026,s:'MCP Spec'},
            {t:'Understanding Authorization in MCP',u:'https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/authorization',k:'doc',y:2026,s:'MCP Docs'},
            {t:'Authorization',u:'https://developers.cloudflare.com/agents/model-context-protocol/authorization/',k:'doc',s:'Cloudflare Docs',w:'Практична реалізація OAuth для віддаленого MCP-сервера'},
            {t:'MCP servers',u:'https://developers.openai.com/api/docs/guides/tools-connectors-mcp',k:'doc',s:'OpenAI Docs',w:'Як Responses API підключає віддалені MCP-сервери з авторизацією'}
          ]},
        {label:'MCP Registry і каталоги серверів',desc:'Офіційний реєстр registry.modelcontextprotocol.io: метадані серверів, звідки їх беруть клієнти і сторонні каталоги (Glama, mcp.so, Docker MCP Catalog). Еталонні сервери лежать у репозиторії modelcontextprotocol/servers; частина старих (GitHub, PostgreSQL, Slack, Google Drive) перенесена в servers-archived або до вендорів.',why:'Перш ніж писати свій сервер, перевірте, чи його вже не написали, і подивіться, як влаштовані еталонні.',
          links:[
            {t:'Official MCP Registry',u:'https://registry.modelcontextprotocol.io/',k:'doc',s:'MCP Registry'},
            {t:'The MCP Registry',u:'https://modelcontextprotocol.io/registry/about',k:'doc',y:2026,s:'MCP Docs'},
            {t:'Introducing the MCP Registry',u:'https://blog.modelcontextprotocol.io/posts/2025-09-08-mcp-registry-preview/',k:'article',y:2025,s:'MCP Blog'},
            {t:'modelcontextprotocol/servers',u:'https://github.com/modelcontextprotocol/servers',k:'github',s:'GitHub',w:'Еталонні сервери: filesystem, fetch, git, memory та інші'},
            {t:'Docker MCP Catalog and Toolkit',u:'https://docs.docker.com/ai/mcp-catalog-and-toolkit/',k:'doc',s:'Docker Docs'},
            {t:'punkpeye/awesome-mcp-servers',u:'https://github.com/punkpeye/awesome-mcp-servers',k:'github',s:'GitHub'}
          ],
          children:[
            {label:'GitHub MCP Server',type:'alt',desc:'Офіційний сервер GitHub до репозиторіїв, issues, pull requests і Actions; еталонна реалізація з modelcontextprotocol/servers переїхала сюди.',why:'Приклад великого продакшн-сервера: toolsets, віддалений режим, OAuth.',
              links:[{t:'github/github-mcp-server',u:'https://github.com/github/github-mcp-server',k:'github',s:'GitHub'}]},
            {label:'Filesystem: еталонний сервер',type:'alt',desc:'Живий еталонний сервер з доступом до файлів у дозволених папках: читання, запис, пошук, перелік.',why:'Найпростіший код, щоб побачити, як влаштовано сервер на TypeScript SDK.',
              links:[{t:'modelcontextprotocol/servers: filesystem',u:'https://github.com/modelcontextprotocol/servers/tree/main/src/filesystem',k:'github',s:'GitHub'}]},
            {label:'PostgreSQL: архівний еталон',type:'alt',desc:'Еталонний сервер з read-only доступом до бази; перенесений у servers-archived і не підтримується.',why:'Корисний як зразок схем тулів для баз даних, але не для проду.',
              links:[{t:'modelcontextprotocol/servers-archived: postgres',u:'https://github.com/modelcontextprotocol/servers-archived/tree/main/src/postgres',k:'github',s:'GitHub'}]},
            {label:'Google Drive: архівний еталон',type:'alt',desc:'Еталонний сервер для пошуку і читання файлів з Google Drive, також в архіві без підтримки, як і Slack.',why:'Показує, як виглядають resources і OAuth у сервері до хмарного сховища.',
              links:[{t:'modelcontextprotocol/servers-archived: gdrive',u:'https://github.com/modelcontextprotocol/servers-archived/tree/main/src/gdrive',k:'github',s:'GitHub'},{t:'modelcontextprotocol/servers-archived',u:'https://github.com/modelcontextprotocol/servers-archived',k:'github',s:'GitHub'}]}
          ]}
      ]},
    {label:'Свій MCP-сервер',side:'left',desc:'Вправа з маршруту: MCP-сервер до API, яким ви користуєтесь у роботі, наприклад до трекера задач, підключений до клієнта, яким працюєте щодня.',why:'«MCP-сервер до чогось корисного» один із трьох артефактів для портфоліо, про який є що розповісти.',
      links:[
        {t:'Build an MCP server',u:'https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server',k:'doc',y:2026,s:'MCP Docs'},
        {t:'SDKs',u:'https://modelcontextprotocol.io/docs/2026-07-28/sdk',k:'doc',y:2026,s:'MCP Docs',w:'Офіційні SDK: Python, TypeScript, Java, Kotlin, C#, Go, Rust, PHP та інші'},
        {t:'MCP: Build Rich-Context AI Apps with Anthropic',u:'https://www.deeplearning.ai/short-courses/mcp-build-rich-context-ai-apps-with-anthropic/',k:'course',y:2025,s:'DeepLearning.AI',w:'Безкоштовний короткий курс: сервер, клієнт, деплой'},
        {t:'Welcome to the 🤗 Model Context Protocol (MCP) Course',u:'https://huggingface.co/learn/mcp-course/unit0/introduction',k:'course',y:2025,s:'Hugging Face'},
        {t:'Build An MCP Server In 5 Prompts // Vibe Coding That Doesn\'t Suck',u:'https://www.youtube.com/watch?v=FRogt98OF80',k:'video',y:2025,s:'YouTube · Matt Pocock'},
        {t:'microsoft/mcp-for-beginners',u:'https://github.com/microsoft/mcp-for-beginners',k:'course',y:2025,s:'GitHub · Microsoft'}
      ],
      children:[
        {label:'SDK: Python або TypeScript',desc:'Офіційні SDK беруть на себе протокол: ви описуєте тули як функції зі схемами, решту робить бібліотека.',why:'Писати JSON-RPC руками не треба, але розуміти, що робить SDK, варто.',
          links:[
            {t:'SDKs',u:'https://modelcontextprotocol.io/docs/2026-07-28/sdk',k:'doc',y:2026,s:'MCP Docs'},
            {t:'Build an MCP server',u:'https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server',k:'doc',y:2026,s:'MCP Docs'}
          ],
          children:[
            {label:'Python SDK',type:'alt',desc:'Офіційний SDK: тул оголошується як функція з type hints і докстрінгом, схема генерується з них.',why:'Найкоротший шлях для бекендера на Python.',
              links:[
                {t:'modelcontextprotocol/python-sdk',u:'https://github.com/modelcontextprotocol/python-sdk',k:'github',s:'GitHub'},
                {t:'SDKs',u:'https://modelcontextprotocol.io/docs/2026-07-28/sdk',k:'doc',y:2026,s:'MCP Docs'}
              ]},
            {label:'TypeScript SDK',type:'alt',desc:'Офіційний SDK: тул описується зі схемою zod і обробником; сервер запускається через npx у клієнтах.',why:'Поширення через npm, нативно для TypeScript-команд.',
              links:[
                {t:'modelcontextprotocol/typescript-sdk',u:'https://github.com/modelcontextprotocol/typescript-sdk',k:'github',s:'GitHub'},
                {t:'Build a Remote MCP server',u:'https://developers.cloudflare.com/agents/guides/remote-mcp-server/',k:'doc',s:'Cloudflare Docs'}
              ]},
            {label:'FastMCP',type:'alt',desc:'Високорівнева бібліотека для Python поверх протоколу: декоратори для тулів і ресурсів, авторизація, деплой, клієнт і тестування.',why:'Швидший старт і більше готового, ніж у базовому SDK, ціною ще одного шару абстракції.',
              links:[
                {t:'FastMCP',u:'https://gofastmcp.com/',k:'doc',s:'FastMCP'},
                {t:'jlowin/fastmcp',u:'https://github.com/jlowin/fastmcp',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Який тул робити першим',desc:'Одна-дві дії, які ви робите в цьому API щодня руками. Не повний API, а те, що потрібне агенту.',why:'Дзеркало всього API дає десятки схожих тулів і плутає модель.',
          links:[
            {t:'Writing effective tools for AI agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic'},
            {t:'github/github-mcp-server',u:'https://github.com/github/github-mcp-server',k:'github',s:'GitHub',w:'Великий офіційний сервер: приклад, як групувати тули в toolsets'},
            {t:'За що хейтять MCP? CLI – новий тренд',u:'https://www.youtube.com/watch?v=9Tu8usEv8EU',k:'video',y:2026,s:'YouTube · BeerCode'}
          ]},
        {label:'Підключення до Claude Code або Cursor',desc:'Конфігурація клієнта: команда запуску або URL, змінні середовища з ключами. Перевірка переліку тулів у клієнті.',why:'Сервер, який не підключено до клієнта, яким ви користуєтесь, не вважається зробленим.',
          links:[
            {t:'Connect Claude Code to tools via MCP',u:'https://code.claude.com/docs/en/mcp',k:'doc',s:'Claude Code Docs'},
            {t:'Connect to local MCP servers',u:'https://modelcontextprotocol.io/docs/2026-07-28/develop/connect-local-servers',k:'doc',y:2026,s:'MCP Docs'},
            {t:'MCP connector',u:'https://platform.claude.com/docs/en/agents-and-tools/mcp-connector',k:'doc',s:'Claude Docs',w:'Підключення віддаленого сервера прямо з Messages API без власного клієнта'},
            {t:'Model context protocol (MCP)',u:'https://openai.github.io/openai-agents-python/mcp/',k:'doc',s:'OpenAI Agents SDK'}
          ]},
        {label:'Налагодження: MCP Inspector і логи',desc:'MCP Inspector: інструмент із веб-інтерфейсом і CLI для ручних викликів тулів і перегляду схем. Логи в stderr (не в stdout для stdio).',why:'Один print у stdout ламає весь stdio-транспорт.',
          links:[
            {t:'MCP Inspector',u:'https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector',k:'doc',y:2026,s:'MCP Docs'},
            {t:'modelcontextprotocol/inspector',u:'https://github.com/modelcontextprotocol/inspector',k:'github',s:'GitHub'},
            {t:'Debugging',u:'https://modelcontextprotocol.io/docs/2026-07-28/tools/debugging',k:'doc',y:2026,s:'MCP Docs'}
          ]},
        {label:'Віддалений сервер: HTTP і OAuth',type:'optional',desc:'Сервер на Streamable HTTP за публічним URL з авторизацією OAuth 2.1, або локальний сервер, виведений назовні через тунель (MCP tunnels у Claude, Secure MCP Tunnel в OpenAI).',why:'Так сервером користується команда і хмарні агенти, а не лише ваш ноутбук.',
          links:[
            {t:'Build a Remote MCP server',u:'https://developers.cloudflare.com/agents/guides/remote-mcp-server/',k:'doc',s:'Cloudflare Docs'},
            {t:'Connect to remote MCP Servers',u:'https://modelcontextprotocol.io/docs/2026-07-28/develop/connect-remote-servers',k:'doc',y:2026,s:'MCP Docs'},
            {t:'MCP tunnels',u:'https://platform.claude.com/docs/en/agents-and-tools/mcp-tunnels/overview',k:'doc',y:2026,s:'Claude Docs'},
            {t:'MCP servers',u:'https://developers.openai.com/api/docs/guides/tools-connectors-mcp',k:'doc',s:'OpenAI Docs'}
          ]},
        {label:'Поширення і версії',type:'optional',desc:'Пакет у npm або PyPI, образ Docker, публікація в MCP Registry через server.json, фіксована версія протоколу і залежностей.',why:'Колеги мають підключити сервер однією командою.',
          links:[
            {t:'Quickstart: Publish an MCP Server to the MCP Registry',u:'https://modelcontextprotocol.io/registry/quickstart',k:'doc',y:2026,s:'MCP Docs'},
            {t:'modelcontextprotocol/registry',u:'https://github.com/modelcontextprotocol/registry',k:'github',s:'GitHub'},
            {t:'Docker MCP Catalog and Toolkit',u:'https://docs.docker.com/ai/mcp-catalog-and-toolkit/',k:'doc',s:'Docker Docs'}
          ]}
      ]},
    {label:'Поза MCP: CLI, код і скіли',side:'right',desc:'MCP не єдиний спосіб дати агенту інструмент. CLI, яку модель уже знає з навчальних даних, виконання коду замість десятків викликів тулів, Agent Skills як папки з інструкціями. У 2026 році це предмет живих суперечок.',why:'Вибір між MCP, CLI і скілом впливає на контекст, надійність і вартість кожного прогону.',
      links:[
        {t:'За що хейтять MCP? CLI – новий тренд',u:'https://www.youtube.com/watch?v=9Tu8usEv8EU',k:'video',y:2026,s:'YouTube · BeerCode',w:'Розбір під капотом: чому MCP програє в ціні і де лишається незамінним'},
        {t:'MCP vs CLI',u:'https://t.me/beerphp/149',k:'post',y:2026,s:'beerphp'},
        {t:'Code execution with MCP for efficient agents',u:'https://www.anthropic.com/engineering/code-execution-with-mcp',k:'article',y:2025,s:'Anthropic'},
        {t:'Tools: Code Is All You Need',u:'https://lucumr.pocoo.org/2025/7/3/tools/',k:'article',y:2025,s:'Armin Ronacher'},
        {t:'Equipping agents with Agent Skills',u:'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills',k:'article',y:2025,s:'Anthropic'},
        {t:'Claude Skills are awesome, maybe a bigger deal than MCP',u:'https://simonwillison.net/2025/Oct/16/claude-skills/',k:'article',y:2025,s:'Simon Willison'}
      ],
      children:[
        {label:'Дебати MCP vs CLI',desc:'Описи тулів MCP-сервера займають контекст ще до першого запиту, сервер додає точку відмови, а CLI моделі знають з мільйонів прикладів у відкритому коді. Відповідь залежить від задачі: локальна робота чи інтеграція для команди і проду.',why:'Щоб обрати інструмент аргументовано, треба знати обидві сторони і міряти токени на своїх задачах.',
          links:[
            {t:'За що хейтять MCP? CLI – новий тренд',u:'https://www.youtube.com/watch?v=9Tu8usEv8EU',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'MCP vs CLI',u:'https://t.me/beerphp/149',k:'post',y:2026,s:'beerphp'},
            {t:'CLIs are more token-efficient than MCP. Or are they?',u:'https://www.checklyhq.com/blog/mcp-vs-cli-token-efficiency/',k:'article',y:2026,s:'Checkly'},
            {t:'MCP is the wrong abstraction',u:'https://www.youtube.com/watch?v=bAYZjVAodoo',k:'video',y:2025,s:'YouTube · Theo - t3.gg'},
            {t:'The Future of MCP -  David Soria Parra, Anthropic',u:'https://www.youtube.com/watch?v=v3Fr2JR47KA',k:'video',y:2025,s:'YouTube · AI Engineer',w:'Відповідь з боку авторів протоколу'}
          ]},
        {label:'Code execution замість викликів тулів',desc:'Модель пише код, який викликає тули й обробляє дані в sandbox, а в контекст повертається лише результат. Anthropic описує скорочення токенів на порядок; Cloudflare називає це Code Mode.',why:'Десятки викликів тулів і великі проміжні дані перестають проходити через контекст моделі.',
          links:[
            {t:'Code execution with MCP for efficient agents',u:'https://www.anthropic.com/engineering/code-execution-with-mcp',k:'article',y:2025,s:'Anthropic'},
            {t:'Code Mode: the better way to use MCP',u:'https://blog.cloudflare.com/code-mode/',k:'article',y:2025,s:'Cloudflare Blog'},
            {t:'Tools: Code Is All You Need',u:'https://lucumr.pocoo.org/2025/7/3/tools/',k:'article',y:2025,s:'Armin Ronacher'},
            {t:'Code execution tool',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/code-execution-tool',k:'doc',s:'Claude Docs'},
            {t:'Introducing smolagents: simple agents that write actions in code.',u:'https://huggingface.co/blog/smolagents',k:'article',y:2024,s:'Hugging Face',w:'Code agents: дії як код замість JSON-викликів'}
          ]},
        {label:'Agent Skills: папка зі SKILL.md',desc:'Скіл: папка з файлом SKILL.md (frontmatter name і description, далі інструкції) та опційними скриптами і довідками. Агент бачить лише назви й описи, повний текст читає тоді, коли скіл потрібен. Відкрита специфікація на agentskills.io.',why:'Дешевий спосіб передати агенту процедуру команди без нового сервера і без роздування контексту.',
          links:[
            {t:'Agent Skills',u:'https://agentskills.io/',k:'doc',y:2025,s:'agentskills.io',w:'Відкрита специфікація формату скілів'},
            {t:'Equipping agents with Agent Skills',u:'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills',k:'article',y:2025,s:'Anthropic'},
            {t:'Skill authoring best practices',u:'https://platform.claude.com/docs/en/agents-and-tools/agent-skills/best-practices',k:'doc',s:'Claude Docs'},
            {t:'Як правильно працювати з Agent Skills',u:'https://www.youtube.com/watch?v=3t7VVZp2si8',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Твій скіл можна шерити в команді?',u:'https://t.me/beerphp/185',k:'post',y:2026,s:'beerphp',w:'Зрілість скіла: від чернетки до такого, що не соромно віддати команді'},
            {t:'anthropics/skills',u:'https://github.com/anthropics/skills',k:'github',y:2025,s:'GitHub',w:'Готові скіли Anthropic і skill-creator'}
          ],
          children:[
            {label:'Скіли в Claude Code і SDK',desc:'Скіли підхоплюються з папок проєкту і користувача, працюють у Claude Code, Agent SDK і через API. Розширення MCP дозволяє роздавати скіли і через сервер.',why:'Один формат для особистих, командних і публічних навичок агента.',
              links:[
                {t:'Extend Claude with skills',u:'https://code.claude.com/docs/en/skills',k:'doc',s:'Claude Code Docs'},
                {t:'Agent Skills',u:'https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview',k:'doc',s:'Claude Docs'},
                {t:'Skills',u:'https://modelcontextprotocol.io/extensions/skills/overview',k:'doc',y:2026,s:'MCP Docs'},
                {t:'Build with Agent Skills',u:'https://modelcontextprotocol.io/docs/2026-07-28/develop/build-with-agent-skills',k:'doc',y:2026,s:'MCP Docs'}
              ]}
          ]},
        {label:'Tool Search: тули за потреби',desc:'Замість усіх схем у кожному запиті модель отримує тул пошуку тулів; описи решти підвантажуються, коли потрібні (defer_loading). Працює і для MCP-серверів в Agent SDK.',why:'Сотні тулів із кількох MCP-серверів перестають зʼїдати контекст ще до першого слова користувача.',
          links:[
            {t:'Tool search tool',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-search-tool',k:'doc',s:'Claude Docs'},
            {t:'Scale to many tools with tool search',u:'https://code.claude.com/docs/en/agent-sdk/tool-search',k:'doc',s:'Claude Code Docs'},
            {t:'Introducing advanced tool use for Claude',u:'https://www.anthropic.com/engineering/advanced-tool-use',k:'article',y:2025,s:'Anthropic'},
            {t:'Progressive Disclosure Charter',u:'https://modelcontextprotocol.io/community/working-groups/progressive-disclosure',k:'doc',y:2026,s:'MCP Docs',w:'Робоча група MCP над тією ж проблемою на рівні протоколу'}
          ]},
        {label:'Вбудовані тули провайдера',desc:'Тули, які виконує сам провайдер: web search, web fetch, code execution, bash, text editor, computer use, memory. Оголошуються за назвою й версією, код обробника не потрібен.',why:'Половину типових тулів не треба писати і хостити самому, але треба знати їхні межі і ціну.',
          links:[
            {t:'Tool reference',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/tool-reference',k:'doc',s:'Claude Docs'},
            {t:'Web search tool',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/web-search-tool',k:'doc',s:'Claude Docs'},
            {t:'New tools for building agents',u:'https://openai.com/index/new-tools-for-building-agents/',k:'article',y:2025,s:'OpenAI',w:'Responses API з web search, file search і computer use як вбудованими тулами'}
          ]},
        {label:'Sandbox для коду: E2B, Daytona, Docker',desc:'Код, який пише агент, виконується в ізольованому середовищі: хмарні E2B, Daytona, Modal Sandboxes або локальні Docker Sandboxes. Managed Agents і Agents API дають sandbox «з коробки».',why:'Агент, що виконує згенерований код на вашій машині без ізоляції, це питання часу, а не ймовірності.',
          links:[
            {t:'E2B Documentation',u:'https://e2b.dev/docs',k:'doc',s:'E2B'},
            {t:'Documentation · Daytona',u:'https://www.daytona.io/docs',k:'doc',s:'Daytona'},
            {t:'Docker Sandboxes',u:'https://docs.docker.com/ai/sandboxes/',k:'doc',s:'Docker Docs'},
            {t:'Sandboxes',u:'https://modal.com/docs/guide/sandbox',k:'doc',s:'Modal Docs'},
            {t:'Making Agents Useful: MCP, Tool Calling, and Sandboxed Execution',u:'https://www.youtube.com/watch?v=TU6VY3fKAbk',k:'video',y:2025,s:'YouTube · Modal'},
            {t:'Building computer use agents on E2B, Daytona, Beam, Modal and CodeSandbox',u:'https://www.youtube.com/watch?v=uUlC9G0e4XY',k:'video',y:2025,s:'YouTube · James Murdza'}
          ]}
      ]},
    {label:'Безпека MCP і тулів',side:'left',desc:'MCP-сервер це код, що виконується з вашими правами, і канал, через який у контекст потрапляє чужий текст. OWASP у 2025 році випустив окремий Top 10 для агентних застосунків.',why:'Агент з доступом до приватних даних, чужого контенту і зовнішнього каналу (lethal trifecta) вразливий за визначенням. Повний роадмап окремою навичкою.',
      links:[
        {t:'Security Best Practices',u:'https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices',k:'doc',y:2026,s:'MCP Docs'},
        {t:'The lethal trifecta for AI agents: private data, untrusted content, and external communication',u:'https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/',k:'article',y:2025,s:'Simon Willison'},
        {t:'OWASP Top 10 for Agentic Applications for 2026',u:'https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications/',k:'doc',y:2025,s:'OWASP GenAI'},
        {t:'Безпека AI-агентів: як атакують Claude Code, Cursor і Codex',u:'https://www.youtube.com/watch?v=QKRs6IHV-y4',k:'video',y:2026,s:'YouTube · BeerCode'},
        {t:'MCP Tools: Attack Vectors and Defense Recommendations for Autonomous Agents',u:'https://www.elastic.co/security-labs/threat-command/mcp-tools-attack-defense-recommendations',k:'article',s:'Elastic Security Labs'},
        {t:'Model Context Protocol Threat Modeling and Analyzing Vulnerabilities to Prompt Injection with Tool Poisoning',u:'https://arxiv.org/abs/2603.22489',k:'article',y:2026,s:'arXiv'}
      ],
      children:[
        {label:'Довіра до сторонніх серверів',desc:'Чужий сервер з npx це виконання чужого коду на вашій машині. Читати джерело, фіксувати версію, брати з офіційного реєстру або каталогу з перевіркою.',why:'Те саме правило, що й для будь-якої залежності, але з доступом до агента.',
          links:[
            {t:'Local Server Security',u:'https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/local-server-security',k:'doc',y:2026,s:'MCP Docs'},
            {t:'Jumping the line: How MCP servers can attack you before you ever use them',u:'https://blog.trailofbits.com/2025/04/21/jumping-the-line-how-mcp-servers-can-attack-you-before-you-ever-use-them/',k:'article',y:2025,s:'Trail of Bits'},
            {t:'Docker MCP Catalog and Toolkit',u:'https://docs.docker.com/ai/mcp-catalog-and-toolkit/',k:'doc',s:'Docker Docs',w:'Сервери в контейнерах із перевіркою походження'}
          ],
          children:[
            {label:'Tool poisoning і rug pull',desc:'Шкідливі інструкції ховають в описі тула, який користувач не бачить, або підмінюють опис після того, як сервер уже схвалено.',why:'Клієнт показує людині коротку назву, а модель читає весь опис.',
              links:[
                {t:'MCP Security Notification: Tool Poisoning Attacks',u:'https://invariantlabs.ai/blog/mcp-security-notification-tool-poisoning-attacks',k:'article',y:2025,s:'Invariant Labs'},
                {t:'Model Context Protocol has prompt injection security problems',u:'https://simonwillison.net/2025/Apr/9/mcp-prompt-injection/',k:'article',y:2025,s:'Simon Willison'}
              ]}
          ]},
        {label:'Права сервера мінімальні',desc:'Ключ сервера має лише потрібні права: читання, якщо потрібне лише читання; окремий користувач у трекері; окремий токен на кожен сервер.',why:'Права обрізаються на рівні доступів, а не в промпті.',
          links:[
            {t:'Security Best Practices',u:'https://modelcontextprotocol.io/docs/2026-07-28/tutorials/security/security_best_practices',k:'doc',y:2026,s:'MCP Docs'},
            {t:'Agentic AI - Threats and Mitigations',u:'https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/',k:'doc',y:2025,s:'OWASP GenAI'}
          ]},
        {label:'Prompt injection через результати',desc:'Текст, який тул повертає (тікет, лист, сторінка), може містити інструкції для моделі. Модель їх прочитає. OWASP LLM01.',why:'Агент, що читає зовнішні дані і може діяти, вразливий за визначенням.',
          links:[
            {t:'LLM01:2025 Prompt Injection',u:'https://genai.owasp.org/llmrisk/llm01-prompt-injection/',k:'doc',y:2025,s:'OWASP GenAI'},
            {t:'The lethal trifecta for AI agents: private data, untrusted content, and external communication',u:'https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/',k:'article',y:2025,s:'Simon Willison'},
            {t:'Design Patterns for Securing LLM Agents against Prompt Injections',u:'https://simonwillison.net/2025/Jun/13/prompt-injection-design-patterns/',k:'article',y:2025,s:'Simon Willison',w:'Шість патернів архітектури, що обмежують шкоду від інʼєкції'},
            {t:'Безпека AI-агентів: як атакують Claude Code, Cursor і Codex',u:'https://www.youtube.com/watch?v=QKRs6IHV-y4',k:'video',y:2026,s:'YouTube · BeerCode'}
          ]},
        {label:'Підтвердження деструктивних дій',desc:'Видалення, оплата, надсилання, зміна прав: окреме «ок» від людини перед виконанням. У MCP для цього є анотації тулів, у клієнтах режими дозволів.',why:'Помилку в читанні можна пробачити, помилку в записі інколи ні.',
          links:[
            {t:'Tools',u:'https://modelcontextprotocol.io/specification/2026-07-28/server/tools',k:'doc',y:2026,s:'MCP Spec',w:'Анотації destructiveHint, readOnlyHint, idempotentHint'},
            {t:'Configure permissions',u:'https://code.claude.com/docs/en/agent-sdk/permissions',k:'doc',s:'Claude Code Docs'},
            {t:'MCP servers',u:'https://developers.openai.com/api/docs/guides/tools-connectors-mcp',k:'doc',s:'OpenAI Docs',w:'require_approval для викликів віддалених MCP-тулів'}
          ]},
        {label:'Логи кожного виклику тула',desc:'Назва, аргументи, результат, час, токени. Для кожного кроку кожного прогону. Стандарт для трейсів: OpenTelemetry GenAI semantic conventions.',why:'Коли агент учора зробив щось дивне, це єдине джерело правди.',
          links:[
            {t:'open-telemetry/semantic-conventions-genai',u:'https://github.com/open-telemetry/semantic-conventions-genai',k:'github',y:2026,s:'GitHub · OpenTelemetry'},
            {t:'Langfuse Documentation',u:'https://langfuse.com/docs',k:'doc',s:'Langfuse'},
            {t:'Hooks reference',u:'https://code.claude.com/docs/en/hooks',k:'doc',s:'Claude Code Docs',w:'PostToolUse hook як найпростіший спосіб логувати кожен виклик'}
          ]},
        {label:'OWASP Top 10 для агентних застосунків',desc:'Окремий перелік ризиків для агентів (ASI01..ASI10): від перехоплення цілей і зловживання тулами до вразливостей ланцюга постачання, коли агент підтягує тули і промпти під час виконання.',why:'Спільна мова з безпечниками і чеклист для рев\'ю власного агента.',
          links:[
            {t:'OWASP Top 10 for Agentic Applications for 2026',u:'https://genai.owasp.org/resource/owasp-top-10-for-agentic-applications/',k:'doc',y:2025,s:'OWASP GenAI'},
            {t:'Agentic AI - Threats and Mitigations',u:'https://genai.owasp.org/resource/agentic-ai-threats-and-mitigations/',k:'doc',y:2025,s:'OWASP GenAI'},
            {t:'LLMRisks Archive',u:'https://genai.owasp.org/llm-top-10/',k:'doc',y:2025,s:'OWASP GenAI',w:'Класичний OWASP Top 10 for LLM Applications 2025'}
          ]},
        {label:'Ізоляція агента: sandbox і мережа',type:'optional',desc:'Файлова система і мережа агента обмежені: доступ лише до робочої папки і дозволених доменів. У Claude Code це sandboxed Bash, у хмарі sandbox-провайдери.',why:'Ізоляція працює навіть тоді, коли інʼєкція пройшла і модель вирішила зробити щось зайве.',
          links:[
            {t:'Making Claude Code safer with sandboxing',u:'https://www.anthropic.com/engineering/claude-code-sandboxing',k:'article',y:2025,s:'Anthropic'},
            {t:'Configure the sandboxed Bash tool',u:'https://code.claude.com/docs/en/sandboxing',k:'doc',s:'Claude Code Docs'},
            {t:'anthropic-experimental/sandbox-runtime',u:'https://github.com/anthropic-experimental/sandbox-runtime',k:'github',y:2025,s:'GitHub'},
            {t:'Docker Sandboxes',u:'https://docs.docker.com/ai/sandboxes/',k:'doc',s:'Docker Docs'}
          ]}
      ]},
    {label:'Фреймворки після механіки',side:'right',desc:'LangGraph, Claude Agent SDK, OpenAI Agents SDK, Pydantic AI, Google ADK, CrewAI, smolagents, Vercel AI SDK: що вони додають до циклу і за що беруть складність. Має сенс лише після циклу, написаного руками.',why:'Фреймворк економить час на старті, якщо ви знаєте, що саме він ховає. Західні команди частіше пишуть «orchestration patterns» без назви фреймворку.',
      links:[
        {t:'How to think about agent frameworks',u:'https://blog.langchain.com/how-to-think-about-agent-frameworks/',k:'article',y:2025,s:'LangChain Blog'},
        {t:'Introduction to Agentic Frameworks',u:'https://huggingface.co/learn/agents-course/unit2/introduction',k:'course',y:2025,s:'Hugging Face',w:'Безкоштовний курс: smolagents, LlamaIndex, LangGraph в одній програмі'},
        {t:'Building agents with the Claude Agent SDK',u:'https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk',k:'article',y:2025,s:'Anthropic'},
        {t:'OpenAI Agents SDK',u:'https://openai.github.io/openai-agents-python/',k:'doc',s:'OpenAI'},
        {t:'LangGraph overview',u:'https://docs.langchain.com/oss/python/langgraph/overview',k:'doc',s:'LangChain Docs'},
        {t:'When to Build Your Own Agent Harness | Harrison Chase, LangChain',u:'https://www.youtube.com/watch?v=HI2q3ci3Iuc',k:'video',s:'YouTube · Sequoia Capital'}
      ],
      children:[
        {label:'Що дає фреймворк',desc:'Готовий цикл, стан і checkpointing, повтори, трейсинг, інтеграції з провайдерами, MCP і векторними базами.',why:'Економія часу на старті, якщо ви знаєте, що саме він ховає.',
          links:[
            {t:'How to think about agent frameworks',u:'https://blog.langchain.com/how-to-think-about-agent-frameworks/',k:'article',y:2025,s:'LangChain Blog'},
            {t:'Agents',u:'https://docs.langchain.com/oss/python/langchain/agents',k:'doc',s:'LangChain Docs'}
          ]},
        {label:'За що береться складність',desc:'Абстракції поверх абстракцій, оновлення, що ламають API, налагодження всередині чужого циклу.',why:'Відповідь «не знаю, що робить фреймворк усередині» на співбесіді не проходить.',
          links:[
            {t:'12-Factor Agents',u:'https://github.com/humanlayer/12-factor-agents',k:'github',y:2025,s:'GitHub · HumanLayer',w:'Чому команди, що дійшли до проду, володіють своїм циклом'},
            {t:'How to Build an Agent',u:'https://ampcode.com/how-to-build-an-agent',k:'article',y:2025,s:'Amp'}
          ]},
        {label:'LangGraph',type:'alt',desc:'Граф станів для агентів: вузли, ребра, умови переходів, збереження стану через checkpointer, паузи на людину (interrupts), тривале виконання.',why:'Найпоширеніший фреймворк серед Python-команд і база для LangSmith-трейсингу.',
          links:[
            {t:'LangGraph overview',u:'https://docs.langchain.com/oss/python/langgraph/overview',k:'doc',s:'LangChain Docs'},
            {t:'langchain-ai/langgraph',u:'https://github.com/langchain-ai/langgraph',k:'github',s:'GitHub'},
            {t:'langchain-ai/langchain-academy',u:'https://github.com/langchain-ai/langchain-academy',k:'course',s:'GitHub · LangChain',w:'Ноутбуки безкоштовного курсу «Introduction to LangGraph»'},
            {t:'langchain-ai/deepagents',u:'https://github.com/langchain-ai/deepagents',k:'github',y:2025,s:'GitHub',w:'Готовий «глибокий» агент на LangGraph: планування, підагенти, файли'},
            {t:'Context Engineering Our Way to Long-Horizon Agents: LangChain’s Harrison Chase',u:'https://www.youtube.com/watch?v=vtugjs2chdA',k:'video',y:2025,s:'YouTube · Sequoia Capital'}
          ],
          children:[
            {label:'Persistence і checkpointer',desc:'Стан графа зберігається після кожного кроку; прогін можна відновити, відмотати або розгалузити.',why:'Довгі прогони переживають падіння процесу і повторюються з потрібного місця.',
              links:[
                {t:'Persistence',u:'https://docs.langchain.com/oss/python/langgraph/persistence',k:'doc',s:'LangChain Docs'},
                {t:'Persistence',u:'https://docs.langchain.com/oss/python/langgraph/durable-execution',k:'doc',s:'LangChain Docs',w:'Durable execution: як граф переживає збої'}
              ]},
            {label:'Interrupts: пауза на людину',desc:'Граф зупиняється перед дією і чекає рішення людини, потім продовжує з того самого стану.',why:'Human-in-the-loop без ручного збереження стану.',
              links:[{t:'Interrupts',u:'https://docs.langchain.com/oss/python/langgraph/interrupts',k:'doc',s:'LangChain Docs'}]}
          ]},
        {label:'Фреймворки: від провайдерів моделей',desc:'SDK від компаній, що випускають моделі: Claude Agent SDK (Anthropic), OpenAI Agents SDK, Google ADK. Найтісніша інтеграція зі своїм API, тули й харнес «з коробки».',why:'Якщо ви на одному провайдері, його SDK дає найменше тертя; ціна цього прив\'язка.',
          links:[
            {t:'Building agents with the Claude Agent SDK',u:'https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk',k:'article',y:2025,s:'Anthropic'},
            {t:'OpenAI Agents SDK',u:'https://openai.github.io/openai-agents-python/',k:'doc',s:'OpenAI'},
            {t:'Agent Development Kit (ADK)',u:'https://google.github.io/adk-docs/',k:'doc',s:'Google'}
          ],
          children:[
            {label:'Claude Agent SDK',type:'alt',desc:'SDK від Anthropic з готовим циклом агента, що стоїть за Claude Code: тули для файлів і терміналу, MCP, скіли, підагенти, hooks, дозволи. Python і TypeScript.',why:'Той самий цикл, що в Claude Code, доступний з коду.',
                  links:[
                    {t:'Agent SDK overview',u:'https://code.claude.com/docs/en/agent-sdk/overview',k:'doc',s:'Claude Code Docs'},
                    {t:'Building agents with the Claude Agent SDK',u:'https://www.anthropic.com/engineering/building-agents-with-the-claude-agent-sdk',k:'article',y:2025,s:'Anthropic'},
                    {t:'anthropics/claude-agent-sdk-python',u:'https://github.com/anthropics/claude-agent-sdk-python',k:'github',s:'GitHub'},
                    {t:'anthropics/claude-agent-sdk-typescript',u:'https://github.com/anthropics/claude-agent-sdk-typescript',k:'github',s:'GitHub'},
                    {t:'Claude Agent SDK [Full Workshop] -  Thariq Shihipar, Anthropic',u:'https://www.youtube.com/watch?v=TqC1qOfiVcQ',k:'video',y:2025,s:'YouTube · AI Engineer'},
                    {t:'Subagents in the SDK',u:'https://code.claude.com/docs/en/agent-sdk/subagents',k:'doc',s:'Claude Code Docs'}
                  ]},
            {label:'OpenAI Agents SDK',type:'alt',desc:'Легкий фреймворк від OpenAI: агенти, handoffs між агентами, guardrails на вхід і вихід, сесії, MCP, трейсинг. Python і TypeScript; у 2026 році додано sandbox-виконання.',why:'Мінімум абстракцій і прямий шлях до Responses API та Agents API.',
                  links:[
                    {t:'OpenAI Agents SDK',u:'https://openai.github.io/openai-agents-python/',k:'doc',s:'OpenAI'},
                    {t:'openai/openai-agents-python',u:'https://github.com/openai/openai-agents-python',k:'github',s:'GitHub'},
                    {t:'OpenAI Agents SDK TypeScript',u:'https://openai.github.io/openai-agents-js/',k:'doc',s:'OpenAI'},
                    {t:'The next evolution of the Agents SDK',u:'https://openai.com/index/the-next-evolution-of-the-agents-sdk/',k:'article',y:2026,s:'OpenAI'},
                    {t:'Handoffs',u:'https://openai.github.io/openai-agents-python/handoffs/',k:'doc',s:'OpenAI Agents SDK'}
                  ]},
            {label:'Google ADK',type:'alt',desc:'Agent Development Kit від Google: агенти, тули, оркестрація, оцінка, підтримка MCP і A2A; Python і Java, оптимізований під Gemini, але працює з іншими моделями.',why:'Природний вибір для Gemini і Google Cloud, і єдиний з трьох з рідною підтримкою A2A.',
              links:[
                {t:'Agent Development Kit (ADK)',u:'https://google.github.io/adk-docs/',k:'doc',s:'Google'},
                {t:'google/adk-python',u:'https://github.com/google/adk-python',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Фреймворки: open source',desc:'Незалежні бібліотеки для Python: Pydantic AI, CrewAI, smolagents, LlamaIndex Workflows. Для TypeScript ту саму роль грає Vercel AI SDK.',why:'Не привʼязані до провайдера моделі; обирають під стек команди і стиль (типи, ролі, код як дії, події).',
          links:[
            {t:'Introduction to Agentic Frameworks',u:'https://huggingface.co/learn/agents-course/unit2/introduction',k:'course',y:2025,s:'Hugging Face'},
            {t:'How to think about agent frameworks',u:'https://blog.langchain.com/how-to-think-about-agent-frameworks/',k:'article',y:2025,s:'LangChain Blog'},
            {t:'AI SDK',u:'https://ai-sdk.dev/docs/introduction',k:'doc',s:'Vercel'}
          ],
          children:[
            {label:'Pydantic AI',type:'alt',desc:'Типобезпечні агенти: тули й результати описуються моделями Pydantic, невалідну відповідь фреймворк повертає моделі на виправлення.',why:'Природний вибір для команд, що вже живуть на FastAPI і Pydantic.',
              links:[
                {t:'Pydantic AI',u:'https://ai.pydantic.dev/',k:'doc',s:'Pydantic'},
                {t:'pydantic/pydantic-ai',u:'https://github.com/pydantic/pydantic-ai',k:'github',s:'GitHub'}
              ]},
            {label:'CrewAI',type:'alt',desc:'Агенти з ролями, обʼєднані в «команди» (crews) з задачами і процесом, плюс Flows для детермінованих кроків.',why:'Швидкий прототип мультиагентної системи з рольовою моделлю.',
              links:[
                {t:'CrewAI Documentation',u:'https://docs.crewai.com/',k:'doc',s:'CrewAI'},
                {t:'crewAIInc/crewAI',u:'https://github.com/crewAIInc/crewAI',k:'github',s:'GitHub'}
              ]},
            {label:'smolagents',type:'alt',desc:'Маленька бібліотека Hugging Face, де агент пише дії Python-кодом в ізольованому інтерпретаторі. На ній побудовано Open Deep Research.',why:'Найкоротший спосіб відчути різницю між tool calling і code agents.',
              links:[
                {t:'smolagents',u:'https://huggingface.co/docs/smolagents/index',k:'doc',s:'Hugging Face'},
                {t:'huggingface/smolagents',u:'https://github.com/huggingface/smolagents',k:'github',s:'GitHub'},
                {t:'Open-source DeepResearch – Freeing our search agents',u:'https://huggingface.co/blog/open-deep-research',k:'article',y:2025,s:'Hugging Face'}
              ]},
            {label:'LlamaIndex Workflows',type:'alt',desc:'Подієва модель: кроки реагують на події і породжують нові, стан зберігається між кроками. Частина LlamaIndex з сильним ухилом у RAG.',why:'Коли агент здебільшого працює з документами і вже стоїть LlamaIndex.',
              links:[
                {t:'LlamaIndex Workflows',u:'https://docs.llamaindex.ai/en/stable/module_guides/workflow/',k:'doc',s:'LlamaIndex Docs'},
                {t:'run-llama/workflows-py',u:'https://github.com/run-llama/workflows-py',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Фреймворки: Microsoft, AWS, дослідницькі',desc:'Microsoft Agent Framework (спадкоємець AutoGen і Semantic Kernel), AWS Strands Agents, Agno, CAMEL. Корпоративні фреймворки з багатопровайдерністю і дослідницькі мультиагентні бібліотеки.',why:'Трапляються в корпоративних стеках і в наукових роботах; достатньо вміти прочитати код і знати, де документація.',
          links:[
            {t:'Microsoft Agent Framework Overview',u:'https://learn.microsoft.com/en-us/agent-framework/overview/',k:'doc',s:'Microsoft Learn'},
            {t:'Strands Agents',u:'https://strandsagents.com/latest/',k:'doc',s:'AWS'},
            {t:'Welcome to Agno',u:'https://docs.agno.com/',k:'doc',s:'Agno'}
          ],
          children:[
            {label:'Microsoft Agent Framework',type:'alt',desc:'Обʼєднав AutoGen (мультиагентні патерни) і Semantic Kernel (корпоративний SDK) в один фреймворк для .NET і Python з підтримкою MCP і A2A. AutoGen заархівовано.',why:'Стандарт для команд на .NET і Azure; AutoGen і Semantic Kernel тепер читають лише як історію.',
              links:[
                {t:'Microsoft Agent Framework Overview',u:'https://learn.microsoft.com/en-us/agent-framework/overview/',k:'doc',s:'Microsoft Learn'},
                {t:'microsoft/autogen',u:'https://github.com/microsoft/autogen',k:'github',s:'GitHub',w:'Архівований попередник із посиланням на міграцію'},
                {t:'microsoft/semantic-kernel',u:'https://github.com/microsoft/semantic-kernel',k:'github',s:'GitHub'}
              ]},
            {label:'AWS Strands Agents',type:'alt',desc:'Відкритий SDK від AWS з моделецентричним циклом: модель, промпт і тули, мінімум власної оркестрації; працює з Bedrock і іншими провайдерами.',why:'Легкий шлях для команд на AWS, стикується з Bedrock AgentCore.',
              links:[
                {t:'Strands Agents',u:'https://strandsagents.com/latest/',k:'doc',s:'AWS'},
                {t:'strands-agents/sdk-python',u:'https://github.com/strands-agents/sdk-python',k:'github',s:'GitHub'}
              ]},
            {label:'Agno',type:'alt',desc:'Швидкий фреймворк для агентів і мультиагентних систем з памʼяттю, знаннями і готовим runtime для деплою.',why:'Альтернатива CrewAI і LangGraph з акцентом на продуктивність і простий API.',
              links:[
                {t:'Welcome to Agno',u:'https://docs.agno.com/',k:'doc',s:'Agno'},
                {t:'agno-agi/agno',u:'https://github.com/agno-agi/agno',k:'github',s:'GitHub'}
              ]},
            {label:'CAMEL',type:'alt',desc:'Дослідницький фреймворк для мультиагентних систем і симуляцій: рольові діалоги агентів, генерація даних, вивчення поведінки агентів у масштабі.',why:'Для експериментів і даних, а не для продуктового циклу.',
              links:[
                {t:'CAMEL - Build Multi-Agent AI Systems',u:'https://docs.camel-ai.org/',k:'doc',s:'CAMEL-AI'},
                {t:'camel-ai/camel',u:'https://github.com/camel-ai/camel',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Без фреймворку',type:'alt',desc:'Власний цикл на SDK провайдера плюс кілька сотень рядків коду: стан, повтори, логи, ліміти.',why:'Для більшості продуктових задач цього достатньо, і все видно в дебагері.',
          links:[
            {t:'How to Build an Agent',u:'https://ampcode.com/how-to-build-an-agent',k:'article',y:2025,s:'Amp'},
            {t:'12-Factor Agents',u:'https://github.com/humanlayer/12-factor-agents',k:'github',y:2025,s:'GitHub · HumanLayer'},
            {t:'anthropics/claude-cookbooks',u:'https://github.com/anthropics/claude-cookbooks',k:'github',s:'GitHub',w:'Ноутбуки з циклом tool use без фреймворку'}
          ]}
      ]},
    {label:'Інші види агентів',side:'left',type:'main',desc:'Агенти, що діють не через API, а через екран чи браузер, агенти з довгим автономним прогоном у хмарі або на вашому сервері, і рої підагентів під одну задачу.',why:'Трапляються рідше за класичний цикл, але варто знати, що існують, скільки коштують і де їхні межі.',
      links:[
        {t:'Claude Managed Agents overview',u:'https://platform.claude.com/docs/en/managed-agents/overview',k:'doc',y:2026,s:'Claude Docs'},
        {t:'Introducing the Agents API',u:'https://openai.com/index/introducing-the-agents-api/',k:'article',y:2026,s:'OpenAI'},
        {t:'Computer use tool',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool',k:'doc',s:'Claude Docs'},
        {t:'AI-асистент 24/7: Claude Code + VPS + Telegram',u:'https://www.youtube.com/watch?v=Nioa8ZBzDqE',k:'video',y:2026,s:'YouTube · BeerCode'},
        {t:'Ambient Agents and the New Agent Inbox ft. Harrison Chase',u:'https://www.youtube.com/watch?v=egSh4TxS5go',k:'video',y:2025,s:'YouTube · Sequoia Capital',w:'Агенти, що працюють від подій у фоні, а не від чату'}
      ],
      children:[
        {label:'Computer use',type:'optional',desc:'Модель бачить знімок екрана і керує мишею й клавіатурою. У Claude це вбудований computer use tool, в OpenAI Computer-Using Agent.',why:'Для систем без API це єдиний шлях, повільний і дорогий.',
          links:[
            {t:'Computer use tool',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/computer-use-tool',k:'doc',s:'Claude Docs'},
            {t:'Computer use, Claude 3.5 Sonnet, and Claude 3.5 Haiku',u:'https://www.anthropic.com/news/3-5-models-and-computer-use',k:'article',y:2024,s:'Anthropic'},
            {t:'anthropics/anthropic-quickstarts: computer-use-demo',u:'https://github.com/anthropics/anthropic-quickstarts/tree/main/computer-use-demo',k:'github',s:'GitHub'},
            {t:'Computer-Using Agent',u:'https://openai.com/index/computer-using-agent/',k:'article',y:2025,s:'OpenAI'},
            {t:'Building Towards Computer Use with Anthropic',u:'https://www.deeplearning.ai/short-courses/building-toward-computer-use-with-anthropic/',k:'course',y:2025,s:'DeepLearning.AI'}
          ]},
        {label:'Браузерні агенти',type:'optional',desc:'Агент керує браузером через інструмент автоматизації: Playwright MCP, browser-use, Claude in Chrome, browser use tool у Claude API. Відкриває сторінки, читає DOM або знімок, клікає.',why:'Тестування інтерфейсу і робота з сайтами без API.',
          links:[
            {t:'microsoft/playwright-mcp',u:'https://github.com/microsoft/playwright-mcp',k:'github',s:'GitHub'},
            {t:'browser-use/browser-use',u:'https://github.com/browser-use/browser-use',k:'github',s:'GitHub'},
            {t:'Browser use tool',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/browser-use-tool',k:'doc',s:'Claude Docs'},
            {t:'Piloting Claude in Chrome',u:'https://www.anthropic.com/news/claude-for-chrome',k:'article',y:2025,s:'Anthropic'}
          ]},
        {label:'Фонові агенти в CI',type:'optional',desc:'Агент запускається подією (пул-реквест, тікет, cron) без людини за екраном і повертає результат як коментар або диф: Claude Code GitHub Actions, headless-режим, Codex у хмарі.',why:'Саме такий AI-воркфлоу «без щоденного нагляду» і є метою для більшості команд.',
          links:[
            {t:'Claude Code GitHub Actions',u:'https://code.claude.com/docs/en/github-actions',k:'doc',s:'Claude Code Docs'},
            {t:'Run Claude Code programmatically',u:'https://code.claude.com/docs/en/headless',k:'doc',s:'Claude Code Docs'},
            {t:'openai/codex',u:'https://github.com/openai/codex',k:'github',s:'GitHub'},
            {t:'Один із трендових напрямків зараз: інтеграція AI у CI/CD',u:'https://t.me/beerphp/129',k:'post',y:2025,s:'beerphp'},
            {t:'Чи готовий агент чергувати замість тебе?',u:'https://t.me/beerphp/183',k:'post',y:2026,s:'beerphp',w:'Дослідження про агентів на черзі інцидентів без людини'}
          ]},
        {label:'Персональний агент на VPS і в Telegram',type:'optional',desc:'Claude Code на сервері за кілька доларів на місяць, керований через Telegram: перевіряє код, ставить задачі, ходить у календар. Повноцінний агент з усіма підключеними MCP-серверами, який працює цілодобово.',why:'Найдешевший спосіб відчути, що таке агент з довгим автономним прогоном, на власних задачах.',
          links:[
            {t:'AI-асистент 24/7: Claude Code + VPS + Telegram',u:'https://www.youtube.com/watch?v=Nioa8ZBzDqE',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Як підняти свого персонального асистента claude + telegram',u:'https://t.me/beerphp/151',k:'post',y:2026,s:'beerphp'},
            {t:'Run Claude Code programmatically',u:'https://code.claude.com/docs/en/headless',k:'doc',s:'Claude Code Docs'}
          ]},
        {label:'Managed Agents і Agents API',desc:'Хостований цикл агента від провайдера: ви описуєте агента (модель, промпт, тули, MCP, скіли) і середовище, провайдер тримає сесію, sandbox і історію. У Anthropic це Claude Managed Agents, в OpenAI Agents API на харнесі Codex.',why:'Альтернатива власному циклу для довгих задач: менше інфраструктури, але дані і стан живуть у провайдера.',
          links:[
            {t:'Claude Managed Agents overview',u:'https://platform.claude.com/docs/en/managed-agents/overview',k:'doc',y:2026,s:'Claude Docs'},
            {t:'Choosing an agent environment',u:'https://platform.claude.com/docs/en/managed-agents/choosing-an-environment',k:'doc',y:2026,s:'Claude Docs',w:'Хмарний sandbox Anthropic чи self-hosted на своїй інфраструктурі'},
            {t:'Scaling Managed Agents with stable interfaces',u:'https://www.anthropic.com/engineering/managed-agents',k:'article',y:2026,s:'Anthropic'},
            {t:'Introducing the Agents API',u:'https://openai.com/index/introducing-the-agents-api/',k:'article',y:2026,s:'OpenAI'},
            {t:'New tools for building agents',u:'https://openai.com/index/new-tools-for-building-agents/',k:'article',y:2025,s:'OpenAI',w:'Responses API: база, на якій стоять Agents SDK і Agents API'}
          ],
          children:[
            {label:'Claude Managed Agents',type:'alt',desc:'Хостований харнес Anthropic: агент, середовище (хмарний або self-hosted sandbox), сесія, події. Beta.',why:'Той самий цикл, що в Claude Code, але без власної інфраструктури.',
              links:[{t:'Claude Managed Agents overview',u:'https://platform.claude.com/docs/en/managed-agents/overview',k:'doc',y:2026,s:'Claude Docs'}]},
            {label:'OpenAI Agents API',type:'alt',desc:'Хмарні агенти на харнесі Codex: задачі всередину, події й результати назовні, sandbox від OpenAI, партнера або свій.',why:'Варіант для тих, хто вже на Responses API і Agents SDK.',
              links:[{t:'Introducing the Agents API',u:'https://openai.com/index/introducing-the-agents-api/',k:'article',y:2026,s:'OpenAI'}]},
            {label:'Amazon Bedrock AgentCore',type:'alt',desc:'Сервіси AWS для запуску агентів у проді незалежно від фреймворку: runtime, memory, gateway до тулів, identity, observability.',why:'Вибір команд, чия інфраструктура вже в AWS.',
              links:[{t:'Amazon Bedrock AgentCore',u:'https://aws.amazon.com/bedrock/agentcore/',k:'doc',s:'AWS'},{t:'What is Amazon Bedrock AgentCore?',u:'https://docs.aws.amazon.com/bedrock-agentcore/latest/devguide/what-is-bedrock-agentcore.html',k:'doc',s:'AWS Docs'}]},
            {label:'Microsoft Foundry Agent Service',type:'alt',desc:'Керований сервіс агентів в Azure (раніше Azure AI Agent Service): моделі, тули, знання і безпека під корпоративні вимоги.',why:'Вибір команд на Azure і Microsoft 365.',
              links:[{t:'What is Microsoft Foundry Agent Service?',u:'https://learn.microsoft.com/en-us/azure/ai-foundry/agents/overview',k:'doc',s:'Microsoft Learn'}]}
          ]},
        {label:'Dynamic Workflows: рій підагентів',type:'optional',desc:'Claude Code сам пише JavaScript-скрипт оркестрації і запускає під задачу десятки чи сотні підагентів з перевіркою результатів. Виросло з простого bash-циклу (ralph loop).',why:'Показує, куди йдуть агентні системи, і скільки це коштує: один прогін може зʼїсти мільйони токенів.',
          links:[
            {t:'Як влаштовані Dynamic Workflows зсередини? Сотні AI-агентів працюють паралельно',u:'https://www.youtube.com/watch?v=cbQ0QCK7ujc',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Dynamic Workflows: Запускаємо сотні агентів паралельно',u:'https://t.me/beerphp/171',k:'post',y:2026,s:'beerphp'},
            {t:'Orchestrate subagents at scale with dynamic workflows',u:'https://code.claude.com/docs/en/workflows',k:'doc',y:2026,s:'Claude Code Docs'},
            {t:'A harness for every task: dynamic workflows in Claude Code',u:'https://claude.com/blog/a-harness-for-every-task-dynamic-workflows-in-claude-code',k:'article',y:2026,s:'Claude Blog'},
            {t:'Claude Code Adds Dynamic Workflows for Parallel Agent Coordination',u:'https://www.infoq.com/news/2026/06/dynamic-workflows-claude-code/',k:'article',y:2026,s:'InfoQ'}
          ]},
        {label:'A2A: протокол між агентами',type:'optional',desc:'Agent2Agent: відкритий протокол Google, тепер під Linux Foundation, для спілкування агентів між собою (Agent Card, задачі, повідомлення). Версія 1.0 вийшла у 2026 році. MCP всередині агента, A2A між агентами.',why:'Поки потрібен рідко, але це відповідь на питання «як два агенти різних вендорів домовляться».',
          links:[
            {t:'A2A Protocol',u:'https://a2a-protocol.org/latest/',k:'doc',y:2026,s:'A2A Protocol'},
            {t:'A2A and MCP',u:'https://a2a-protocol.org/latest/topics/a2a-and-mcp/',k:'doc',y:2026,s:'A2A Protocol'},
            {t:'a2aproject/A2A',u:'https://github.com/a2aproject/A2A',k:'github',s:'GitHub'},
            {t:'A year of open collaboration: Celebrating the anniversary of A2A',u:'https://opensource.googleblog.com/2026/04/a-year-of-open-collaboration-celebrating-the-anniversary-of-a2a.html',k:'article',y:2026,s:'Google Open Source Blog'}
          ]}
      ]},
    {label:'Оцінка агентів і бенчмарки',side:'right',desc:'Як міряти агента: не текст відповіді, а траєкторію (вибір тулів, аргументи, кількість кроків) і кінцевий стан системи. Публічні бенчмарки задають планку і словник: SWE-bench, tau-bench, Terminal-Bench, BFCL.',why:'Без вимірювання кожне оновлення моделі або промпту міняє поведінку агента непомітно. Докладніше в роадмапі «Evals».',
      links:[
        {t:'Demystifying evals for AI agents',u:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',k:'article',y:2026,s:'Anthropic'},
        {t:'Evaluation concepts',u:'https://docs.langchain.com/langsmith/evaluation-concepts',k:'doc',s:'LangSmith Docs'},
        {t:'Your AI Product Needs Evals',u:'https://hamel.dev/blog/posts/evals/',k:'article',y:2024,s:'Hamel Husain'},
        {t:'Inspect',u:'https://inspect.aisi.org.uk/',k:'doc',s:'UK AI Security Institute',w:'Відкритий фреймворк для evals агентів з тулами і sandbox'},
        {t:'Всього 7% розробників довіряють AI важливі рішення',u:'https://t.me/beerphp/225',k:'post',y:2026,s:'beerphp',w:'Довіра росте там, де результат легко перевірити'}
      ],
      children:[
        {label:'Trajectory evals: тули й аргументи',desc:'Перевіряється, чи агент викликав потрібні тули з правильними аргументами і в розумній кількості кроків, а також кінцевий стан (файл змінено, тікет створено). Оцінювач: код або LLM-судʼя з рубрикою.',why:'Текст відповіді агента майже нічого не каже про те, що він зробив у системі.',
          links:[
            {t:'Demystifying evals for AI agents',u:'https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents',k:'article',y:2026,s:'Anthropic'},
            {t:'Evaluation concepts',u:'https://docs.langchain.com/langsmith/evaluation-concepts',k:'doc',s:'LangSmith Docs'},
            {t:'Writing effective tools for AI agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic',w:'Evals на самі тули: як перевірити, що опис працює'}
          ]},
        {label:'Бенчмарки: SWE-bench, tau-bench та інші',desc:'SWE-bench: виправлення реальних issue з GitHub. tau-bench і tau2-bench: агент-клієнт-тули у доменах авіаліній, ритейлу, телекому з правилами. Terminal-Bench: задачі в терміналі. BFCL: точність виклику функцій.',why:'Щоб читати релізи моделей критично і розуміти, що саме стоїть за «+3% на SWE-bench».',
          links:[
            {t:'SWE-bench Leaderboards',u:'https://www.swebench.com/',k:'doc',s:'SWE-bench'},
            {t:'Terminal-Bench',u:'https://www.tbench.ai/',k:'doc',y:2025,s:'Terminal-Bench'},
            {t:'sierra-research/tau2-bench',u:'https://github.com/sierra-research/tau2-bench',k:'github',y:2025,s:'GitHub · Sierra'},
            {t:'Berkeley Function Calling Leaderboard (BFCL) V4',u:'https://gorilla.cs.berkeley.edu/leaderboard.html',k:'doc',s:'UC Berkeley'}
          ],
          children:[
            {label:'SWE-bench і SWE-bench Verified',desc:'Реальні issue з Python-репозиторіїв, агент має зробити патч, що проходить тести. Verified: підмножина, перевірена людьми.',why:'Головний бенчмарк coding-агентів, його цифри є в кожному релізі моделей.',
              links:[
                {t:'SWE-bench: Can Language Models Resolve Real-World GitHub Issues?',u:'https://arxiv.org/abs/2310.06770',k:'article',y:2023,s:'arXiv'},
                {t:'SWE-bench/SWE-bench',u:'https://github.com/SWE-bench/SWE-bench',k:'github',s:'GitHub'}
              ]},
            {label:'tau-bench і tau2-bench',desc:'Агент розмовляє з симульованим користувачем і працює з тулами за правилами домену; tau2 додає dual-control, коли користувач також діє в системі.',why:'Найближчий до продуктових агентів підтримки бенчмарк: правила, тули, людина.',
              links:[
                {t:'τ-bench: A Benchmark for Tool-Agent-User Interaction in Real-World Domains',u:'https://arxiv.org/abs/2406.12045',k:'article',y:2024,s:'arXiv'},
                {t:'τ²-Bench: Evaluating Conversational Agents in a Dual-Control Environment',u:'https://arxiv.org/abs/2506.07982',k:'article',y:2025,s:'arXiv'},
                {t:'sierra-research/tau-bench',u:'https://github.com/sierra-research/tau-bench',k:'github',y:2024,s:'GitHub · Sierra'}
              ]},
            {label:'Terminal-Bench 2.0 і Harbor',desc:'89 перевірених людьми задач у терміналі, від збірки проєктів до адміністрування; Harbor: фреймворк для запуску агентів у контейнерах.',why:'Міряє саме те, що робить coding-агент у CLI, а не відповіді в чаті.',
              links:[
                {t:'Terminal-Bench: Benchmarking Agents on Hard, Realistic Tasks in Command Line Interfaces',u:'https://arxiv.org/abs/2601.11868',k:'article',y:2026,s:'arXiv'},
                {t:'laude-institute/terminal-bench',u:'https://github.com/laude-institute/terminal-bench',k:'github',s:'GitHub'}
              ]},
            {label:'BFCL: точність виклику функцій',desc:'Berkeley Function Calling Leaderboard: прості, паралельні, багатокрокові виклики і випадки, коли треба не викликати нічого.',why:'Єдиний відкритий спосіб порівняти моделі саме за tool use, а не за загальним інтелектом.',
              links:[
                {t:'Berkeley Function Calling Leaderboard (BFCL) V4',u:'https://gorilla.cs.berkeley.edu/leaderboard.html',k:'doc',s:'UC Berkeley'},
                {t:'BFCL V3 • Multi-Turn & Multi-Step Function Calling',u:'https://gorilla.cs.berkeley.edu/blogs/13_bfcl_v3_multi_turn.html',k:'article',y:2024,s:'UC Berkeley'}
              ]}
          ]},
        {label:'Трейсинг агента: OpenTelemetry GenAI',desc:'Кожен прогін як трейс: спани на виклик моделі, на кожен тул, на підагента, з токенами і вартістю. Семантичні конвенції OpenTelemetry для GenAI задають єдині назви атрибутів; їх читають Langfuse, LangSmith, Phoenix.',why:'Без трейсу налагодження агента зводиться до читання логів на кілька мегабайтів.',
          links:[
            {t:'open-telemetry/semantic-conventions-genai',u:'https://github.com/open-telemetry/semantic-conventions-genai',k:'github',y:2026,s:'GitHub · OpenTelemetry'},
            {t:'Semantic Conventions for GenAI agent and framework spans',u:'https://github.com/open-telemetry/semantic-conventions-genai/blob/main/docs/gen-ai/gen-ai-agent-spans.md',k:'doc',y:2026,s:'GitHub · OpenTelemetry'},
            {t:'Langfuse Documentation',u:'https://langfuse.com/docs',k:'doc',s:'Langfuse'},
            {t:'Key Changes',u:'https://modelcontextprotocol.io/specification/2026-07-28/changelog',k:'doc',y:2026,s:'MCP Spec',w:'MCP тепер описує передачу traceparent через _meta'}
          ]},
        {label:'Вартість прогону: токени і кроки',desc:'Скільки токенів і кроків коштує одна задача, яку частку зʼїдають описи тулів і результати, як це змінюється від моделі до моделі. Міряється на тих самих сценаріях, що й якість.',why:'Агент, що розвʼязує задачу за 3 мільйони токенів, у проді не живе, навіть якщо проходить усі evals.',
          links:[
            {t:'Manage costs effectively',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Claude Code Docs'},
            {t:'CLIs are more token-efficient than MCP. Or are they?',u:'https://www.checklyhq.com/blog/mcp-vs-cli-token-efficiency/',k:'article',y:2026,s:'Checkly'},
            {t:'Code execution with MCP for efficient agents',u:'https://www.anthropic.com/engineering/code-execution-with-mcp',k:'article',y:2025,s:'Anthropic'},
            {t:'Де ті х10 до швидкості розробки, котрі так хочуть менеджери?',u:'https://t.me/beerphp/214',k:'post',y:2026,s:'beerphp'}
          ]}
      ]},
    {label:'Вправа і критерій «готово»',side:'left',desc:'Напишіть цикл агента руками, без фреймворку, з трьома тулами. Потім один MCP-сервер до свого робочого API, наприклад до трекера задач. І порівняйте його з CLI на тих самих задачах.',why:'Це дві навички, які видно в портфоліо одразу, і третя, яка показує, що ви розумієте ціну рішення.',
      links:[
        {t:'How to Build an Agent',u:'https://ampcode.com/how-to-build-an-agent',k:'article',y:2025,s:'Amp'},
        {t:'Build an MCP server',u:'https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server',k:'doc',y:2026,s:'MCP Docs'},
        {t:'Building with the Claude API',u:'https://anthropic.skilljar.com/claude-with-the-anthropic-api',k:'course',s:'Anthropic Academy'},
        {t:'Welcome to the 🤗 AI Agents Course',u:'https://huggingface.co/learn/agents-course/unit0/introduction',k:'course',y:2025,s:'Hugging Face'},
        {t:'NirDiamant/GenAI_Agents',u:'https://github.com/NirDiamant/GenAI_Agents',k:'github',s:'GitHub',w:'Збірка ноутбуків з агентами різної складності'}
      ],
      children:[
        {label:'Агент з трьома тулами розвʼязує задачу',desc:'Задача з кількох кроків, тули обирає сам, зупиняється сам, ліміт кроків є, кожен виклик залогований.',why:'Якщо цикл написаний, решта роадмапу читається інакше.',
          links:[
            {t:'How to Build an Agent',u:'https://ampcode.com/how-to-build-an-agent',k:'article',y:2025,s:'Amp'},
            {t:'anthropics/courses: tool_use',u:'https://github.com/anthropics/courses/tree/master/tool_use',k:'course',s:'GitHub'},
            {t:'Handle tool calls',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/handle-tool-calls',k:'doc',s:'Claude Docs'}
          ]},
        {label:'MCP-сервер підключений і працює',desc:'Сервер підключено до клієнта, яким ви користуєтесь щодня, перевірено в MCP Inspector, і агент ним реально виконує роботу.',why:'Артефакт для портфоліо, про який можна розповісти.',
          links:[
            {t:'Build an MCP server',u:'https://modelcontextprotocol.io/docs/2026-07-28/develop/build-server',k:'doc',y:2026,s:'MCP Docs'},
            {t:'MCP Inspector',u:'https://modelcontextprotocol.io/docs/2026-07-28/tools/inspector',k:'doc',y:2026,s:'MCP Docs'},
            {t:'Connect Claude Code to tools via MCP',u:'https://code.claude.com/docs/en/mcp',k:'doc',s:'Claude Code Docs'}
          ]},
        {label:'Порівняння з CLI: токени і надійність',type:'optional',desc:'Ті самі дві-три задачі через ваш MCP-сервер і через CLI або скрипт. Порахуйте токени на описи тулів і на результати, кількість кроків, кількість збоїв.',why:'Після цього суперечка «MCP чи CLI» для вас закривається цифрами, а не думками.',
          links:[
            {t:'За що хейтять MCP? CLI – новий тренд',u:'https://www.youtube.com/watch?v=9Tu8usEv8EU',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'CLIs are more token-efficient than MCP. Or are they?',u:'https://www.checklyhq.com/blog/mcp-vs-cli-token-efficiency/',k:'article',y:2026,s:'Checkly'},
            {t:'Code execution with MCP for efficient agents',u:'https://www.anthropic.com/engineering/code-execution-with-mcp',k:'article',y:2025,s:'Anthropic'}
          ]},
        {label:'Що читати',desc:'Документація Claude, розділ Tool use. Специфікація і документація MCP. Anthropic, «Building effective agents» і «Writing effective tools for AI agents».',why:'Чотири першоджерела, яких вистачає для всього роадмапу.',
          links:[
            {t:'Tool use with Claude',u:'https://platform.claude.com/docs/en/agents-and-tools/tool-use/overview',k:'doc',s:'Claude Docs'},
            {t:'Specification',u:'https://modelcontextprotocol.io/specification/2026-07-28',k:'doc',y:2026,s:'MCP Spec'},
            {t:'Building effective AI agents',u:'https://www.anthropic.com/engineering/building-effective-agents',k:'article',y:2024,s:'Anthropic'},
            {t:'Writing effective tools for AI agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic'},
            {t:'MCP @ AI Engineer',u:'https://www.youtube.com/playlist?list=PLcfpQ4tk2k0UqhUyxuMMMmDwyiApd4sDw',k:'video',s:'YouTube · AI Engineer',w:'Плейлист усіх доповідей і воркшопів про MCP з конференцій AI Engineer'}
          ]}
      ]}
  ]
};
