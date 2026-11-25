window.ROADMAPS=window.ROADMAPS||{};
window.ROADMAPS['context']={
  slug:'context',
  title:'Контекст',
  intro:'Крок стоїть другим: агент знає лише те, що лежить у контекстному вікні, і місце там обмежене. Типова хвороба після першого кроку: файл інструкцій, у який кожен дописує своє, поки він не зʼїсть місце для задачі й коду. Тут про токени, CLAUDE.md і AGENTS.md, prompt engineering і те, що тепер називають context engineering.',
  root:{label:'Контекст',kicker:'Крок 2: що бачить модель',desc:'Що саме модель бачить у контекстному вікні: інструкції, задача, код, результати тулів, історія розмови. Решти для неї не існує, а місце міряють токенами, ними ж рахують ціну.',why:'Без цього кроку метод роботи з агентами працює в одному репо і ламається в іншому.',
    links:[
      {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering',w:'Головний текст теми: контекст як обмежений ресурс уваги'},
      {t:'Prompt engineering overview',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview',k:'doc',s:'Claude Docs',w:'Техніки в порядку від простих до складних'},
      {t:'Context Engineering for Agents',u:'https://blog.langchain.com/context-engineering-for-agents/',k:'article',y:2025,s:'LangChain Blog',w:'Чотири стратегії: write, select, compress, isolate'},
      {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus',w:'Практика з продакшену: KV-cache, тули, файлова система'},
      {t:'Context Rot: How Increasing Input Tokens Impacts LLM Performance',u:'https://research.trychroma.com/context-rot',k:'article',y:2025,s:'Chroma Research',w:'Дослідження 18 моделей: якість падає з ростом входу'},
      {t:'Чому AGENTS.md та CLAUDE.md робить агента тупим?',u:'https://www.youtube.com/watch?v=PM463SX0mxg',k:'video',y:2026,s:'YouTube · BeerCode',w:'Що відбувається з файлом інструкцій у реальній сесії'},
      {t:'Context engineering',u:'https://simonwillison.net/2025/Jun/27/context-engineering/',k:'article',y:2025,s:'Simon Willison',w:'Звідки взявся термін і чому він замінив prompt engineering'}
    ]},
  end:{label:'Далі: Агенти, tool use і MCP →',href:'agents-mcp.html'},
  groups:[
    {label:'Контекстне вікно і токени',side:'left',desc:'Усе, що модель бачить за один виклик, у токенах: обмежений обсяг, який заповнюється інструкціями, задачею, кодом і результатами тулів.',why:'Токени одночасно і місце, і гроші. Хто їх не рахує, платить двічі: якістю і рахунком.',
      links:[
        {t:'Context windows',u:'https://docs.claude.com/en/docs/build-with-claude/context-windows',k:'doc',s:'Claude Docs',w:'Як вікно заповнюється в багатокроковій розмові і з thinking'},
        {t:'Long context',u:'https://ai.google.dev/gemini-api/docs/long-context',k:'doc',s:'Gemini API Docs',w:'Що дає вікно на мільйон токенів і де його межі'},
        {t:'Understand and count tokens',u:'https://ai.google.dev/gemini-api/docs/tokens',k:'doc',s:'Gemini API Docs'},
        {t:'Let\'s build the GPT Tokenizer',u:'https://www.youtube.com/watch?v=zduSFxRajkE',k:'video',y:2024,s:'YouTube · Andrej Karpathy',w:'Дві години, після яких токени перестають бути магією'},
        {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering'},
        {t:'Як працює coding assistants під капотом',u:'https://t.me/beerphp/148',k:'post',y:2026,s:'beerphp',w:'Що саме агент збирає у вікно, коли фіксить баг'}
      ],
      children:[
        {label:'Токен: що це і як рахується',desc:'Одиниця тексту для моделі, приблизно частина слова. Токенізатори (BPE у tiktoken, SentencePiece) ріжуть різні мови й код по-різному: українська зазвичай дорожча за англійську у два-три рази.',why:'Усі ліміти, ціни і швидкість виражено в токенах, а не в символах.',
          links:[
            {t:'Let\'s build the GPT Tokenizer',u:'https://www.youtube.com/watch?v=zduSFxRajkE',k:'video',y:2024,s:'YouTube · Andrej Karpathy'},
            {t:'Tokenizers',u:'https://huggingface.co/learn/llm-course/chapter2/4',k:'course',s:'Hugging Face LLM Course',w:'BPE, WordPiece, SentencePiece на прикладах'},
            {t:'Tiktokenizer',u:'https://tiktokenizer.vercel.app/',k:'doc',s:'tiktokenizer.vercel.app',w:'Вставте свій промпт і подивіться на токени очима моделі'},
            {t:'OpenAI Tokenizer',u:'https://platform.openai.com/tokenizer',k:'doc',s:'OpenAI Platform'},
            {t:'Implementing A Byte Pair Encoding (BPE) Tokenizer From Scratch',u:'https://sebastianraschka.com/blog/2025/bpe-from-scratch.html',k:'article',y:2025,s:'Sebastian Raschka'},
            {t:'openai/tiktoken',u:'https://github.com/openai/tiktoken',k:'github',s:'GitHub'}
          ]},
        {label:'Що лежить у вікні',desc:'System prompt, інструкції проєкту, описи тулів, історія розмови, задача, прочитаний код, результати тулів, відповіді моделі.',why:'Щоб керувати контекстом, треба бачити його склад, а не лише розмір.',
          links:[
            {t:'How Claude Code works',u:'https://code.claude.com/docs/en/how-claude-code-works',k:'doc',s:'Claude Code Docs',w:'З чого складається контекст агентної сесії'},
            {t:'Context windows',u:'https://docs.claude.com/en/docs/build-with-claude/context-windows',k:'doc',s:'Claude Docs'},
            {t:'Як працює coding assistants під капотом',u:'https://t.me/beerphp/148',k:'post',y:2026,s:'beerphp'},
            {t:'Factor 3: Own your context window',u:'https://github.com/humanlayer/12-factor-agents/blob/main/content/factor-03-own-your-context-window.md',k:'github',y:2025,s:'12-Factor Agents',w:'Контекст це ваш формат, а не лише список повідомлень'}
          ],
          children:[
            {label:'System prompt і інструкції',desc:'Постійна частина: роль, правила, формат. Йде першою в кожному виклику.',why:'Це єдине, що гарантовано бачить модель у кожному кроці.',
              links:[
                {t:'Giving Claude a role with a system prompt',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/system-prompts',k:'doc',s:'Claude Docs'},
                {t:'System Prompts release notes',u:'https://docs.claude.com/en/release-notes/system-prompts',k:'doc',s:'Claude Docs',w:'Справжні системні промпти Claude.ai, опубліковані Anthropic'}
              ]},
            {label:'Історія розмови',desc:'Усі попередні повідомлення в сесії, разом із помилками і відкинутими варіантами.',why:'Історія росте непомітно і витісняє корисне.',
              links:[
                {t:'Context windows',u:'https://docs.claude.com/en/docs/build-with-claude/context-windows',k:'doc',s:'Claude Docs'},
                {t:'Short-term memory',u:'https://docs.langchain.com/oss/python/langchain/short-term-memory',k:'doc',s:'LangChain Docs',w:'Як фреймворки тримають і обрізають історію'}
              ]},
            {label:'Результати тулів',desc:'Вивід команд, прочитані файли, відповіді API. Найбільший споживач місця в агентній сесії.',why:'Один cat великого файлу зʼїдає більше, ніж усі ваші інструкції разом.',
              links:[
                {t:'Writing effective tools for agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic Engineering',w:'Чому відповідь тула має бути короткою і для моделі'},
                {t:'Context editing',u:'https://docs.claude.com/en/docs/build-with-claude/context-editing',k:'doc',y:2025,s:'Claude Docs',w:'API сам прибирає старі результати тулів'}
              ]},
            {label:'Описи тулів: schema теж токени',desc:'Кожен підключений tool або MCP-сервер додає у вікно свій опис і JSON Schema параметрів, навіть якщо його не викликали.',why:'Пʼятдесят тулів із MCP можуть зʼїсти десятки тисяч токенів до першого слова задачі.',
              links:[
                {t:'Code execution with MCP: building more efficient agents',u:'https://www.anthropic.com/engineering/code-execution-with-mcp',k:'article',y:2025,s:'Anthropic Engineering',w:'Як описи тулів зʼїдають контекст і що з цим робити'},
                {t:'Introducing advanced tool use on the Claude Developer Platform',u:'https://www.anthropic.com/engineering/advanced-tool-use',k:'article',y:2025,s:'Anthropic Engineering',w:'Tool search: підтягувати описи тулів за потреби'},
                {t:'За що хейтять MCP? CLI - новий тренд',u:'https://www.youtube.com/watch?v=9Tu8usEv8EU',k:'video',y:2026,s:'YouTube · BeerCode'}
              ]}
          ]},
        {label:'Ліміти і ціна в токенах',desc:'Ліміт вікна на виклик (200K, 1M), rate limits за хвилину, окрема ціна за вхідні, вихідні й кешовані токени.',why:'Ціна одного прогону агента рахується з токенів, і це перше питання бізнесу до будь-якого AI-проєкту.',
          links:[
            {t:'Pricing',u:'https://docs.claude.com/en/docs/about-claude/pricing',k:'doc',s:'Claude Docs',w:'Вхідні, вихідні, кеш, batch: усе в одній таблиці'},
            {t:'Rate limits',u:'https://docs.claude.com/en/api/rate-limits',k:'doc',s:'Claude Docs'},
            {t:'Claude Sonnet 4 now supports 1M tokens of context',u:'https://www.anthropic.com/news/1m-context',k:'article',y:2025,s:'Anthropic',w:'Що змінює вікно на мільйон і скільки воно коштує'},
            {t:'Manage costs effectively',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Claude Code Docs',w:'Скільки коштує сесія агента і як це зменшити'}
          ]},
        {label:'Підрахунок токенів',desc:'API повертає usage на кожен виклик, окремий ендпоінт count_tokens рахує їх до відправки, локально це робить tiktoken. У Claude Code є /context і /cost, для статистики ccusage.',why:'Знати, скільки токенів займає ваш CLAUDE.md, можна лише порахувавши.',
          links:[
            {t:'Token counting',u:'https://docs.claude.com/en/docs/build-with-claude/token-counting',k:'doc',s:'Claude Docs'},
            {t:'Count Message tokens',u:'https://docs.claude.com/en/api/messages-count-tokens',k:'doc',s:'Claude API Reference'},
            {t:'How to count tokens with tiktoken',u:'https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken',k:'doc',s:'OpenAI Cookbook'},
            {t:'Slash commands',u:'https://code.claude.com/docs/en/slash-commands',k:'doc',s:'Claude Code Docs',w:'/context показує, хто зʼїв вікно; /cost показує ціну'},
            {t:'ryoppippi/ccusage',u:'https://github.com/ryoppippi/ccusage',k:'github',s:'GitHub',w:'Статистика токенів і вартості сесій Claude Code з локальних логів'}
          ]},
        {label:'Context rot і «lost in the middle»',desc:'Явище: що більше токенів у вікні, то гірше модель працює з кожним із них. Інструкції із середини довгого контексту губляться, а зайві схожі фрагменти збивають.',why:'Більше контексту не означає кращу відповідь. Часто навпаки.',
          links:[
            {t:'Context Rot: How Increasing Input Tokens Impacts LLM Performance',u:'https://research.trychroma.com/context-rot',k:'article',y:2025,s:'Chroma Research'},
            {t:'Context Rot: When Long Context Fails',u:'https://www.youtube.com/watch?v=3s_N60u0jEY',k:'video',y:2025,s:'YouTube · Hamel Husain',w:'Kelly Hong з Chroma розповідає про дослідження'},
            {t:'Lost in the Middle: How Language Models Use Long Contexts',u:'https://arxiv.org/abs/2307.03172',k:'article',y:2023,s:'arXiv'},
            {t:'How Long Contexts Fail',u:'https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html',k:'article',y:2025,s:'Drew Breunig',w:'Чотири режими відмови: poisoning, distraction, confusion, clash'},
            {t:'Чому агент тупить при вирішенні бажинок?',u:'https://t.me/beerphp/182',k:'post',y:2026,s:'beerphp',w:'Той самий ефект на прикладі бага і стектрейсу'}
          ],
          children:[
            {label:'Lost in the Middle (2023)',desc:'Експеримент: та сама відповідь лежить на початку, в середині або в кінці довгого контексту. У середині моделі знаходять її найгірше.',why:'Звідси правило «важливе на початку або в кінці».',
              links:[
                {t:'Lost in the Middle: How Language Models Use Long Contexts',u:'https://arxiv.org/abs/2307.03172',k:'article',y:2023,s:'arXiv'},
                {t:'Long context prompting tips',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/long-context-tips',k:'doc',s:'Claude Docs'}
              ]},
            {label:'Context Rot (Chroma, 2025)',desc:'18 моделей на простих задачах із різною довжиною входу: якість падає з ростом токенів навіть там, де задача не ускладнилась. Код дослідження відкритий.',why:'Головний аргумент за короткий контекст у 2025-2026 роках, із цифрами.',
              links:[
                {t:'Context Rot: How Increasing Input Tokens Impacts LLM Performance',u:'https://research.trychroma.com/context-rot',k:'article',y:2025,s:'Chroma Research'},
                {t:'chroma-core/context-rot',u:'https://github.com/chroma-core/context-rot',k:'github',y:2025,s:'GitHub',w:'Код і дані експериментів'},
                {t:'P6: Context Rot',u:'https://hamel.dev/notes/llm/rag/p6-context_rot.html',k:'article',y:2025,s:'Hamel Husain',w:'Анотована доповідь з таймкодами'}
              ]},
            {label:'NIAH, RULER, NoLiMa',desc:'Бенчмарки довгого контексту: від пошуку одного речення в «сіні» до RULER і NoLiMa, де відповідь не збігається з питанням дослівно.',why:'Заявлений розмір вікна і реальний робочий розмір це різні числа.',
              links:[
                {t:'RULER: What\'s the Real Context Size of Your Long-Context Language Models?',u:'https://arxiv.org/abs/2404.06654',k:'article',y:2024,s:'arXiv'},
                {t:'NoLiMa: Long-Context Evaluation Beyond Literal Matching',u:'https://arxiv.org/abs/2502.05167',k:'article',y:2025,s:'arXiv'}
              ]},
            {label:'Чотири режими відмови (Breunig)',desc:'Poisoning: помилка потрапила в контекст і повторюється. Distraction: модель спирається на контекст замість знань. Confusion: зайве впливає на відповідь. Clash: частини контексту суперечать.',why:'Назвати режим відмови означає знати, що саме прибирати з вікна.',
              links:[
                {t:'How Long Contexts Fail',u:'https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html',k:'article',y:2025,s:'Drew Breunig'},
                {t:'How to Fix Your Context',u:'https://www.dbreunig.com/2025/06/26/how-to-fix-your-context.html',k:'article',y:2025,s:'Drew Breunig',w:'Шість прийомів проти кожного режиму'},
                {t:'How to Fix Your Context',u:'https://simonwillison.net/2025/Jun/29/how-to-fix-your-context/',k:'article',y:2025,s:'Simon Willison'}
              ]}
          ]}
      ]},
    {label:'Файли інструкцій: CLAUDE.md і AGENTS.md',side:'right',desc:'CLAUDE.md, AGENTS.md, .cursor/rules і подібні: те, що агент читає на старті кожної сесії у вашому репо.',why:'Ознака зрілості: у файлі лишилось тільки те, без чого агент помиляється, і ви знаєте, скільки токенів це займає.',
      links:[
        {t:'Чому AGENTS.md та CLAUDE.md робить агента тупим?',u:'https://www.youtube.com/watch?v=PM463SX0mxg',k:'video',y:2026,s:'YouTube · BeerCode'},
        {t:'Manage Claude\'s memory',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Claude Code Docs',w:'Ієрархія CLAUDE.md: user, project, local, вкладені'},
        {t:'AGENTS.md',u:'https://agents.md/',k:'doc',y:2025,s:'agents.md',w:'Відкритий формат, який читають Codex, Cursor, Copilot та інші'},
        {t:'Claude Code: Best practices for agentic coding',u:'https://www.anthropic.com/engineering/claude-code-best-practices',k:'article',y:2025,s:'Anthropic Engineering'},
        {t:'Writing a good CLAUDE.md',u:'https://humanlayer.com/blog/writing-a-good-claude-md',k:'article',y:2025,s:'HumanLayer',w:'WHAT, WHY, HOW і чому файл має бути коротким'},
        {t:'Чому AGENTS.md та CLAUDE.md робить агента тупим?',u:'https://t.me/beerphp/154',k:'post',y:2026,s:'beerphp'}
      ],
      children:[
        {label:'Що має бути у файлі',desc:'Як запустити проєкт і тести, домовленості, яких не вгадати з коду, заборони. Пʼять рядків для початку.',why:'Файл із пʼяти рядків уже закриває більшість повторних пояснень.',
          links:[
            {t:'Manage Claude\'s memory',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Claude Code Docs'},
            {t:'Writing a good CLAUDE.md',u:'https://humanlayer.com/blog/writing-a-good-claude-md',k:'article',y:2025,s:'HumanLayer'},
            {t:'Claude Code: Best practices for agentic coding',u:'https://www.anthropic.com/engineering/claude-code-best-practices',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Custom instructions with AGENTS.md',u:'https://developers.openai.com/codex/guides/agents-md',k:'doc',s:'OpenAI Codex Docs'},
            {t:'Claude Code best practices | Code w/ Claude',u:'https://www.youtube.com/watch?v=gv0WHhKelSE',k:'video',y:2025,s:'YouTube · Anthropic'}
          ]},
        {label:'Чого там бути не має',desc:'Усе, що видно з коду, загальні поради з програмування, історія минулих поломок, довгі переліки «ніколи не».',why:'Кожен рядок коштує токенів у кожній сесії і розмиває увагу до важливого.',
          links:[
            {t:'Чому AI пише тобі сміття: 5 помилок, які роблять всі',u:'https://www.youtube.com/watch?v=wOW0-RZDPbA',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Writing a good CLAUDE.md',u:'https://humanlayer.com/blog/writing-a-good-claude-md',k:'article',y:2025,s:'HumanLayer'},
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering',w:'Розділ про system prompt: «right altitude», без жорстко закодованої логіки'},
            {t:'Агенти пишуть тобі сміття, увага, не тому що вони тупі',u:'https://t.me/beerphp/176',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Token-aware: знати ціну файлу',desc:'Порахувати, скільки токенів займає файл, і пояснити, навіщо кожен рядок.',why:'Файл інструкцій легко виростає до розміру, коли на задачу і код лишається мало.',
          links:[
            {t:'Token counting',u:'https://docs.claude.com/en/docs/build-with-claude/token-counting',k:'doc',s:'Claude Docs'},
            {t:'Tiktokenizer',u:'https://tiktokenizer.vercel.app/',k:'doc',s:'tiktokenizer.vercel.app'},
            {t:'Slash commands',u:'https://code.claude.com/docs/en/slash-commands',k:'doc',s:'Claude Code Docs',w:'/context показує частку CLAUDE.md у вікні'},
            {t:'Manage costs effectively',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Claude Code Docs'}
          ]},
        {label:'Хвороба росту',desc:'Типовий сценарій: кожна поломка дописує правило, файл росте, агент перестає читати середину.',why:'Це перша хвороба після освоєння методу, і її видно у кожній другій команді.',
          links:[
            {t:'Чому AGENTS.md та CLAUDE.md робить агента тупим?',u:'https://www.youtube.com/watch?v=PM463SX0mxg',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Context Rot: How Increasing Input Tokens Impacts LLM Performance',u:'https://research.trychroma.com/context-rot',k:'article',y:2025,s:'Chroma Research'},
            {t:'How Long Contexts Fail',u:'https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html',k:'article',y:2025,s:'Drew Breunig'},
            {t:'Бачу одну й ту саму картину в різних командах',u:'https://t.me/beerphp/226',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Чи читає агент файл насправді',desc:'Інструкція у файлі не гарантує виконання: агент читає файл, але далі діє за системним промптом харнесу і власним планом. Інструкції «загального характеру» пропускає частіше.',why:'Якщо не знати, як харнес підсовує файл моделі, ви будете писати правила, які ніхто не виконує.',
          links:[
            {t:'Claude Code, Cursor і Codex: як агенти читають документацію? Чому CLAUDE.md нічого не гарантує',u:'https://www.youtube.com/watch?v=GWGFNRM0o40',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Як AI-агенти використовують CLAUDE.md і документацію',u:'https://t.me/beerphp/193',k:'post',y:2026,s:'beerphp'},
            {t:'AGENTS.md outperforms skills in our agent evals',u:'https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals',k:'article',y:2025,s:'Vercel',w:'Експеримент: що агент реально використовує з інструкцій'},
            {t:'Writing a good CLAUDE.md',u:'https://humanlayer.com/blog/writing-a-good-claude-md',k:'article',y:2025,s:'HumanLayer'}
          ]},
        {label:'Вкладені файли і формати інших агентів',type:'optional',desc:'Окремий файл інструкцій у підкаталозі, який читається лише під час роботи з ним. У кожного інструмента свій формат: AGENTS.md, .cursor/rules, copilot-instructions.md, GEMINI.md.',why:'Правила бекенду не потрібні, коли агент править фронтенд. А команда з Cursor і Claude Code має тримати одну правду.',
          links:[
            {t:'Manage Claude\'s memory',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Claude Code Docs'},
            {t:'AGENTS.md',u:'https://agents.md/',k:'doc',y:2025,s:'agents.md'},
            {t:'Rules',u:'https://cursor.com/docs/context/rules',k:'doc',s:'Cursor Docs'},
            {t:'Adding repository custom instructions for GitHub Copilot',u:'https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions',k:'doc',s:'GitHub Docs'}
          ],
          children:[
            {label:'AGENTS.md: спільний формат',desc:'Один файл для Codex, Cursor, Copilot, Gemini CLI, Zed та інших. Codex шукає його в кожному каталозі, є AGENTS.override.md.',why:'Команда з різними інструментами не має тримати пʼять копій тих самих правил.',
              links:[
                {t:'AGENTS.md',u:'https://agents.md/',k:'doc',y:2025,s:'agents.md'},
                {t:'agentsmd/agents.md',u:'https://github.com/agentsmd/agents.md',k:'github',y:2025,s:'GitHub'},
                {t:'Custom instructions with AGENTS.md',u:'https://developers.openai.com/codex/guides/agents-md',k:'doc',s:'OpenAI Codex Docs'}
              ]},
            {label:'.cursor/rules: .mdc і globs',desc:'Правила Cursor у .mdc з frontmatter: alwaysApply, globs за шляхами файлів, description для вибору за змістом.',why:'Перший масовий приклад правил, що вмикаються за типом файлу, а не завжди.',
              links:[
                {t:'Rules',u:'https://cursor.com/docs/context/rules',k:'doc',s:'Cursor Docs'}
              ]},
            {label:'Copilot instructions і GEMINI.md',desc:'Copilot читає .github/copilot-instructions.md і path-specific instructions; Gemini CLI читає GEMINI.md з ієрархією каталогів.',why:'Той самий принцип у кожному інструменті, різні назви файлів.',
              links:[
                {t:'Adding repository custom instructions for GitHub Copilot',u:'https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions',k:'doc',s:'GitHub Docs'},
                {t:'Use custom instructions in VS Code',u:'https://code.visualstudio.com/docs/copilot/customization/custom-instructions',k:'doc',s:'VS Code Docs'},
                {t:'Provide context with GEMINI.md files',u:'https://geminicli.com/docs/cli/gemini-md/',k:'doc',s:'Gemini CLI Docs'},
                {t:'Specifying coding conventions',u:'https://aider.chat/docs/usage/conventions.html',k:'doc',s:'Aider Docs'}
              ]}
          ]},
        {label:'Файл як код: ревʼю і коміти',desc:'Інструкції лежать у репо, змінюються через пул-реквест і ревʼюються командою.',why:'Інакше у кожного своя версія правил і різна поведінка агента.',
          links:[
            {t:'Claude Code: Best practices for agentic coding',u:'https://www.anthropic.com/engineering/claude-code-best-practices',k:'article',y:2025,s:'Anthropic Engineering',w:'CLAUDE.md у git, під ревʼю, як звичайний код'},
            {t:'Claude Code & the evolution of agentic coding',u:'https://www.youtube.com/watch?v=Lue8K2jqfKk',k:'video',y:2025,s:'YouTube · AI Engineer',w:'Boris Cherny про CLAUDE.md у кожній команді Anthropic'},
            {t:'Бачу одну й ту саму картину в різних командах',u:'https://t.me/beerphp/226',k:'post',y:2026,s:'beerphp'}
          ]}
      ]},
    {label:'Правила за потреби: progressive disclosure',side:'left',desc:'Окремі файли (як писати тести, як ходити в базу, як оформлювати міграції), які агент читає лише коли потрібно.',why:'Так контекст залишається малим за замовчуванням і росте лише під конкретну задачу.',
      links:[
        {t:'Equipping agents for the real world with Agent Skills',u:'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills',k:'article',y:2025,s:'Anthropic Engineering',w:'Progressive disclosure як принцип дизайну skills'},
        {t:'Як правильно працювати з Agent Skills',u:'https://www.youtube.com/watch?v=3t7VVZp2si8',k:'video',y:2026,s:'YouTube · BeerCode'},
        {t:'Skills',u:'https://code.claude.com/docs/en/skills',k:'doc',s:'Claude Code Docs'},
        {t:'Agent Skills',u:'https://agentskills.io/',k:'doc',y:2025,s:'agentskills.io',w:'Відкрита специфікація SKILL.md'},
        {t:'Claude Skills are awesome, maybe a bigger deal than MCP',u:'https://simonwillison.net/2025/Oct/16/claude-skills/',k:'article',y:2025,s:'Simon Willison'},
        {t:'Твій скіл можна шерити в команді?',u:'https://t.me/beerphp/185',k:'post',y:2026,s:'beerphp'}
      ],
      children:[
        {label:'Прогресивне розкриття',desc:'Головний файл коротко каже, що існує; деталі лежать в окремих файлах і підтягуються за потреби. У skills це metadata, потім SKILL.md, потім references.',why:'Той самий принцип, що й у документації: оглядова сторінка, а далі за посиланням.',
          links:[
            {t:'Equipping agents for the real world with Agent Skills',u:'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering',w:'Just-in-time context замість завантаження всього наперед'},
            {t:'Writing a good CLAUDE.md',u:'https://humanlayer.com/blog/writing-a-good-claude-md',k:'article',y:2025,s:'HumanLayer'},
            {t:'Manage Claude\'s memory',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Claude Code Docs',w:'Імпорти @file і правила в .claude/rules'}
          ]},
        {label:'Коли читати: тригери',desc:'Умова, за якою агент має відкрити правило: шлях файлу (globs, paths у frontmatter), опис skill, назва задачі, явна команда.',why:'Правило без тригера або читається завжди, або ніколи.',
          links:[
            {t:'Rules',u:'https://cursor.com/docs/context/rules',k:'doc',s:'Cursor Docs',w:'globs, alwaysApply, description'},
            {t:'Manage Claude\'s memory',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Claude Code Docs'},
            {t:'Skills',u:'https://code.claude.com/docs/en/skills',k:'doc',s:'Claude Code Docs',w:'description вирішує, чи модель відкриє skill'},
            {t:'Claude Code, Cursor і Codex: як агенти читають документацію? Чому CLAUDE.md нічого не гарантує',u:'https://www.youtube.com/watch?v=GWGFNRM0o40',k:'video',y:2026,s:'YouTube · BeerCode'}
          ]},
        {label:'Skills і команди як пакет правил',desc:'Інструкція, приклади і скрипти під одну повторювану дію, що викликаються разом: SKILL.md за відкритою специфікацією, slash-команди, плагіни.',why:'Багаторазові skills і промпти це артефакт, який можна показати команді і передати далі.',
          links:[
            {t:'Як правильно працювати з Agent Skills',u:'https://www.youtube.com/watch?v=3t7VVZp2si8',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Introducing Agent Skills',u:'https://www.anthropic.com/news/skills',k:'article',y:2025,s:'Anthropic'},
            {t:'anthropics/skills',u:'https://github.com/anthropics/skills',k:'github',y:2025,s:'GitHub',w:'Приклади skills від Anthropic'},
            {t:'Agent Skills',u:'https://agentskills.io/',k:'doc',y:2025,s:'agentskills.io'},
            {t:'Твій скіл можна шерити в команді?',u:'https://t.me/beerphp/185',k:'post',y:2026,s:'beerphp'}
          ],
          children:[
            {label:'SKILL.md і agentskills.io',desc:'Папка з SKILL.md (frontmatter name, description), опційно scripts/ і references/. Формат відкритий, його читають Claude Code, Codex, Copilot, Cursor.',why:'Одна специфікація замість окремого формату під кожен інструмент.',
              links:[
                {t:'Agent Skills',u:'https://agentskills.io/',k:'doc',y:2025,s:'agentskills.io'},
                {t:'agentskills/agentskills',u:'https://github.com/agentskills/agentskills',k:'github',y:2025,s:'GitHub'},
                {t:'Agent Skills',u:'https://simonwillison.net/2025/Dec/19/agent-skills/',k:'article',y:2025,s:'Simon Willison'}
              ]},
            {label:'Slash-команди і шаблони',desc:'Промпт у файлі .claude/commands з аргументами, який викликається однією командою.',why:'Повторюваний промпт у файлі замість копіпасти з нотаток.',
              links:[
                {t:'Slash commands',u:'https://code.claude.com/docs/en/slash-commands',k:'doc',s:'Claude Code Docs'},
                {t:'Common workflows',u:'https://code.claude.com/docs/en/common-workflows',k:'doc',s:'Claude Code Docs'}
              ]},
            {label:'Скрипти замість інструкцій',desc:'Детерміновану частину (конвертація, перевірка, запит у базу) кладемо скриптом у skill, модель лише викликає.',why:'Скрипт не галюцинує і не зʼїдає токени на роздуми.',
              links:[
                {t:'Equipping agents for the real world with Agent Skills',u:'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills',k:'article',y:2025,s:'Anthropic Engineering'},
                {t:'anthropics/skills',u:'https://github.com/anthropics/skills',k:'github',y:2025,s:'GitHub'}
              ]}
          ]},
        {label:'Правило чи код: hooks і лінтери',desc:'Усе, що можна перевірити програмно (lint, формат, заборонені команди), виноситься в код і hooks, не в текст.',why:'Інструкція в тексті виконується інколи, перевірка в коді завжди.',
          links:[
            {t:'Hooks reference',u:'https://code.claude.com/docs/en/hooks',k:'doc',s:'Claude Code Docs',w:'PreToolUse, PostToolUse, Stop: код замість «ніколи не»'},
            {t:'Claude Code: Best practices for agentic coding',u:'https://www.anthropic.com/engineering/claude-code-best-practices',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Agentic Engineering: Мій ідеальний AI Workflow розробки',u:'https://www.youtube.com/watch?v=4uLqamwjl-w',k:'video',y:2026,s:'YouTube · BeerCode'}
          ]},
        {label:'Документація для агента: llms.txt',desc:'Стислий файл для моделей на корені сайту або в репо: що це, де головні сторінки, що читати далі. Плюс README і ADR, написані так, щоб їх читав агент.',why:'Агент читає документацію не так, як людина: їй потрібна карта, а не красивий лендінг.',
          links:[
            {t:'The /llms.txt file',u:'https://llmstxt.org/',k:'doc',y:2024,s:'llmstxt.org'},
            {t:'Claude Code, Cursor і Codex: як агенти читають документацію? Чому CLAUDE.md нічого не гарантує',u:'https://www.youtube.com/watch?v=GWGFNRM0o40',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Як AI-агенти використовують CLAUDE.md і документацію',u:'https://t.me/beerphp/193',k:'post',y:2026,s:'beerphp'},
            {t:'Як я використовую Obsidian в Agentic Workflow',u:'https://www.youtube.com/watch?v=Lm5NLnTQbx0',k:'video',y:2026,s:'YouTube · BeerCode',w:'База знань у markdown як контекст для агента'}
          ]}
      ]},
    {label:'Prompt engineering базово',side:'right',desc:'Як сформулювати запит, щоб модель дала потрібний результат з першого разу: задача, роль, приклади, формат, структура.',why:'Більшість «модель тупа» лікується переписуванням промпту, і це перевіряють на співбесіді.',
      links:[
        {t:'Prompt engineering overview',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview',k:'doc',s:'Claude Docs'},
        {t:'Prompting 101 | Code w/ Claude',u:'https://www.youtube.com/watch?v=ysPbXH0LpIE',k:'video',y:2025,s:'YouTube · Anthropic',w:'Пів години від applied AI team Anthropic, з живим прикладом'},
        {t:'Prompt engineering',u:'https://platform.openai.com/docs/guides/prompt-engineering',k:'doc',s:'OpenAI Platform'},
        {t:'Prompt design strategies',u:'https://ai.google.dev/gemini-api/docs/prompting-strategies',k:'doc',s:'Gemini API Docs'},
        {t:'Prompt Engineering (whitepaper)',u:'https://www.kaggle.com/whitepaper-prompt-engineering',k:'course',y:2025,s:'Kaggle · Google',w:'Lee Boonstra: усі базові техніки з прикладами і налаштуваннями'},
        {t:'anthropics/prompt-eng-interactive-tutorial',u:'https://github.com/anthropics/prompt-eng-interactive-tutorial',k:'course',s:'GitHub',w:'Інтерактивний курс у ноутбуках, дев\'ять розділів'},
        {t:'Prompt Engineering Guide',u:'https://www.promptingguide.ai/',k:'course',s:'DAIR.AI'}
      ],
      children:[
        {label:'Чітка задача і критерій',desc:'Що зробити, для кого, що вважати успіхом. Прямо і конкретно, без натяків.',why:'Модель не вгадує намір, вона виконує текст.',
          links:[
            {t:'Be clear, direct, and detailed',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/be-clear-and-direct',k:'doc',s:'Claude Docs'},
            {t:'Define your success criteria',u:'https://docs.claude.com/en/docs/test-and-evaluate/define-success',k:'doc',s:'Claude Docs'},
            {t:'Prompting 101 | Code w/ Claude',u:'https://www.youtube.com/watch?v=ysPbXH0LpIE',k:'video',y:2025,s:'YouTube · Anthropic'},
            {t:'Prompting Fundamentals and How to Apply them Effectively',u:'https://eugeneyan.com/writing/prompting/',k:'article',y:2024,s:'Eugene Yan'}
          ]},
        {label:'Роль і контекст задачі',desc:'Хто модель у цій задачі і навіщо результат: «ти ревʼюер бекенду, результат піде в пул-реквест». Зазвичай це system prompt.',why:'Роль задає стиль і глибину відповіді краще за десять правил.',
          links:[
            {t:'Giving Claude a role with a system prompt',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/system-prompts',k:'doc',s:'Claude Docs'},
            {t:'Prompt library',u:'https://docs.claude.com/en/resources/prompt-library/library',k:'doc',s:'Claude Docs',w:'Готові system prompt під типові ролі'},
            {t:'Prompt Engineering',u:'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/',k:'article',y:2023,s:'Lilian Weng'}
          ]},
        {label:'Приклади: few-shot',desc:'Два-три приклади входу й бажаного виходу прямо в промпті, бажано в тегах example.',why:'Приклад формату працює надійніше за його опис словами.',
          links:[
            {t:'Use examples (multishot prompting) to guide Claude\'s behavior',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/multishot-prompting',k:'doc',s:'Claude Docs'},
            {t:'Language Models are Few-Shot Learners',u:'https://arxiv.org/abs/2005.14165',k:'article',y:2020,s:'arXiv',w:'Стаття про GPT-3, звідки пішов термін few-shot'},
            {t:'Prompt design strategies',u:'https://ai.google.dev/gemini-api/docs/prompting-strategies',k:'doc',s:'Gemini API Docs'}
          ]},
        {label:'Формат відповіді',desc:'Явно задати структуру: список, JSON, таблиця, довжина, мова. У Claude формат можна задати і початком відповіді (prefill).',why:'Без формату кожна відповідь інша, і парсити її доводиться евристиками.',
          links:[
            {t:'Prefill Claude\'s response for greater output control',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/prefill-claudes-response',k:'doc',s:'Claude Docs'},
            {t:'Increase output consistency (JSON mode)',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/increase-consistency',k:'doc',s:'Claude Docs'},
            {t:'Structured outputs',u:'https://docs.claude.com/en/docs/build-with-claude/structured-outputs',k:'doc',s:'Claude Docs'}
          ]},
        {label:'Структура промпту: XML або markdown',desc:'Розділи з заголовками або тегами: інструкції, дані, приклади, задача окремо.',why:'Модель краще відділяє дані від інструкцій, коли вони помічені явно.',
          links:[
            {t:'Use XML tags to structure your prompts',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/use-xml-tags',k:'doc',s:'Claude Docs'},
            {t:'GPT-4.1 Prompting Guide',u:'https://github.com/openai/openai-cookbook/blob/main/examples/gpt4-1_prompting_guide.ipynb',k:'doc',y:2025,s:'OpenAI Cookbook',w:'Розділ про роздільники: markdown, XML, що працює гірше'},
            {t:'Prompting 101 | Code w/ Claude',u:'https://www.youtube.com/watch?v=ysPbXH0LpIE',k:'video',y:2025,s:'YouTube · Anthropic'}
          ]},
        {label:'Порядок інформації',desc:'Довгі документи вище, інструкції й питання внизу; найважливіше на початку або в кінці.',why:'Середина довгого контексту читається найгірше.',
          links:[
            {t:'Long context prompting tips',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/long-context-tips',k:'doc',s:'Claude Docs'},
            {t:'Lost in the Middle: How Language Models Use Long Contexts',u:'https://arxiv.org/abs/2307.03172',k:'article',y:2023,s:'arXiv'},
            {t:'GPT-4.1 Prompting Guide',u:'https://github.com/openai/openai-cookbook/blob/main/examples/gpt4-1_prompting_guide.ipynb',k:'doc',y:2025,s:'OpenAI Cookbook',w:'Повторити інструкції на початку і в кінці довгого контексту'}
          ]},
        {label:'Дати моделі подумати: CoT і thinking',type:'optional',desc:'Попросити пройти задачу кроками (chain-of-thought) або увімкнути extended thinking у reasoning-моделях.',why:'На задачах з логікою це помітно знижує кількість помилок, але коштує токенів.',
          links:[
            {t:'Let Claude think (chain of thought prompting)',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/chain-of-thought',k:'doc',s:'Claude Docs'},
            {t:'Extended thinking tips',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/extended-thinking-tips',k:'doc',s:'Claude Docs'},
            {t:'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',u:'https://arxiv.org/abs/2201.11903',k:'article',y:2022,s:'arXiv'}
          ],
          children:[
            {label:'Chain-of-thought (2022)',desc:'Приклади з проміжними міркуваннями або просте «подумай крок за кроком» (Kojima et al., 2022).',why:'Найцитованіша техніка промптингу, працює і на старих моделях.',
              links:[
                {t:'Chain-of-Thought Prompting Elicits Reasoning in Large Language Models',u:'https://arxiv.org/abs/2201.11903',k:'article',y:2022,s:'arXiv'},
                {t:'Large Language Models are Zero-Shot Reasoners',u:'https://arxiv.org/abs/2205.11916',k:'article',y:2022,s:'arXiv'}
              ]},
            {label:'Extended thinking і reasoning',desc:'Модель думає окремим блоком перед відповіддю; бюджет роздумів задається параметром. Промпт для таких моделей інший: менше «подумай», більше задачі.',why:'Thinking-токени теж у вікні і теж у рахунку.',
              links:[
                {t:'Building with extended thinking',u:'https://docs.claude.com/en/docs/build-with-claude/extended-thinking',k:'doc',s:'Claude Docs'},
                {t:'Extended thinking tips',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/extended-thinking-tips',k:'doc',s:'Claude Docs'},
                {t:'GPT-5 prompting guide',u:'https://github.com/openai/openai-cookbook/blob/main/examples/gpt-5/gpt-5_prompting_guide.ipynb',k:'doc',y:2025,s:'OpenAI Cookbook'}
              ]}
          ]}
      ]},
    {label:'Prompt engineering далі',side:'left',desc:'Що йде після базових технік: ланцюжки викликів, шаблони і версії, meta-prompting, промпти під конкретну модель, промпт як програма.',why:'Промпт у продакшені це код: він має версії, тести і власника.',
      links:[
        {t:'Prompt engineering overview',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview',k:'doc',s:'Claude Docs'},
        {t:'The Prompt Report: A Systematic Survey of Prompting Techniques',u:'https://arxiv.org/abs/2406.06608',k:'article',y:2024,s:'arXiv',w:'58 технік промптингу в одній таксономії'},
        {t:'Prompting for Agents | Code w/ Claude',u:'https://www.youtube.com/watch?v=XSZP9GhhuAc',k:'video',y:2025,s:'YouTube · Anthropic'},
        {t:'Fuck You, Show Me The Prompt',u:'https://hamel.dev/blog/posts/prompt/',k:'article',y:2024,s:'Hamel Husain',w:'Дивитись на реальний промпт, що йде в API, а не на абстракцію'},
        {t:'Prompt Engineering Guide',u:'https://www.promptingguide.ai/',k:'course',s:'DAIR.AI'},
        {t:'NirDiamant/Prompt_Engineering',u:'https://github.com/NirDiamant/Prompt_Engineering',k:'github',s:'GitHub',w:'Ноутбуки з усіма техніками від базових до просунутих'}
      ],
      children:[
        {label:'Prompt chaining: ланцюжок викликів',desc:'Складна задача ріжеться на кроки, кожен крок окремий виклик зі своїм коротким промптом, вихід одного вхід наступного.',why:'Один довгий промпт на все робить гірше, ніж три короткі, і його неможливо дебажити.',
          links:[
            {t:'Chain complex prompts for stronger performance',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/chain-prompts',k:'doc',s:'Claude Docs'},
            {t:'Building effective agents',u:'https://www.anthropic.com/engineering/building-effective-agents',k:'article',y:2024,s:'Anthropic Engineering',w:'Prompt chaining як перший патерн workflow'},
            {t:'Prompt Engineering',u:'https://lilianweng.github.io/posts/2023-03-15-prompt-engineering/',k:'article',y:2023,s:'Lilian Weng'}
          ]},
        {label:'Шаблони і змінні: промпт як код',desc:'Промпт у шаблоні з плейсхолдерами, лежить у репо або в prompt registry (MLflow, Langfuse, Prompty), має версію і тести в promptfoo.',why:'Промпт, захардкоджений у рядок, не можна ні зревʼювати, ні відкотити.',
          links:[
            {t:'Use prompt templates and variables',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/prompt-templates-and-variables',k:'doc',s:'Claude Docs'},
            {t:'MLflow Prompt Registry',u:'https://mlflow.org/docs/latest/genai/prompt-registry/',k:'doc',s:'MLflow Docs'},
            {t:'microsoft/prompty',u:'https://github.com/microsoft/prompty',k:'github',s:'GitHub',w:'Промпт як файл .prompty з frontmatter'},
            {t:'promptfoo/promptfoo',u:'https://github.com/promptfoo/promptfoo',k:'github',s:'GitHub',w:'Тести промптів у CI'},
            {t:'langfuse/langfuse',u:'https://github.com/langfuse/langfuse',k:'github',s:'GitHub',w:'Open-source prompt management і трейсинг'}
          ]},
        {label:'Meta-prompting і prompt improver',desc:'Модель пише або покращує промпт: prompt generator і improver у Claude Console, prompt optimizer в OpenAI Playground, meta-prompting з cookbook.',why:'Перший драфт промпту швидше згенерувати, а далі правити руками за результатами.',
          links:[
            {t:'Use our prompt improver to optimize your prompts',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/prompt-improver',k:'doc',s:'Claude Docs'},
            {t:'Automatically generate first draft prompt templates',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/prompt-generator',k:'doc',s:'Claude Docs'},
            {t:'Enhance your prompts with meta prompting',u:'https://github.com/openai/openai-cookbook/blob/main/examples/Enhance_your_prompts_with_meta_prompting.ipynb',k:'doc',y:2024,s:'OpenAI Cookbook'},
            {t:'Meta-Prompting: Enhancing Language Models with Task-Agnostic Scaffolding',u:'https://arxiv.org/abs/2401.12954',k:'article',y:2024,s:'arXiv'}
          ]},
        {label:'Промпти під конкретну модель',desc:'Кожне покоління моделей має свої особливості: Claude 4 слухає буквально, GPT-4.1 потребує явних інструкцій щодо тулів, reasoning-моделям заважає зайвий CoT.',why:'Промпт, що працював на попередній моделі, після апгрейду може зламатись.',
          links:[
            {t:'Claude 4 prompt engineering best practices',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/claude-4-best-practices',k:'doc',y:2025,s:'Claude Docs'},
            {t:'GPT-4.1 Prompting Guide',u:'https://github.com/openai/openai-cookbook/blob/main/examples/gpt4-1_prompting_guide.ipynb',k:'doc',y:2025,s:'OpenAI Cookbook'},
            {t:'GPT-5 prompting guide',u:'https://github.com/openai/openai-cookbook/blob/main/examples/gpt-5/gpt-5_prompting_guide.ipynb',k:'doc',y:2025,s:'OpenAI Cookbook'},
            {t:'А старі моделі часом не пишуть краще?',u:'https://t.me/beerphp/195',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Системні промпти з продакшену',desc:'Anthropic публікує системні промпти Claude.ai; промпти Cursor, Claude Code, Devin та інших зібрані в репозиторіях витоків.',why:'Найкращий підручник структури system prompt це реальні промпти великих продуктів.',
          links:[
            {t:'System Prompts release notes',u:'https://docs.claude.com/en/release-notes/system-prompts',k:'doc',s:'Claude Docs'},
            {t:'x1xhlol/system-prompts-and-models-of-ai-tools',u:'https://github.com/x1xhlol/system-prompts-and-models-of-ai-tools',k:'github',s:'GitHub',w:'Системні промпти Cursor, Devin, Replit, Claude Code та інших'},
            {t:'asgeirtj/system_prompts_leaks',u:'https://github.com/asgeirtj/system_prompts_leaks',k:'github',s:'GitHub'},
            {t:'Fuck You, Show Me The Prompt',u:'https://hamel.dev/blog/posts/prompt/',k:'article',y:2024,s:'Hamel Husain'}
          ]},
        {label:'DSPy: промпт як програма',type:'optional',desc:'Фреймворк зі Стенфорда: описуєте сигнатуру входу і виходу, DSPy сам підбирає інструкції й few-shot приклади під метрику.',why:'Коли промптів десятки і вони ламаються при зміні моделі, оптимізація за метрикою дешевша за ручне підкручування.',
          links:[
            {t:'stanfordnlp/dspy',u:'https://github.com/stanfordnlp/dspy',k:'github',s:'GitHub'},
            {t:'DSPy: Compiling Declarative Language Model Calls into Self-Improving Pipelines',u:'https://arxiv.org/abs/2310.03714',k:'article',y:2023,s:'arXiv'}
          ]}
      ]},
    {label:'Structured outputs у контексті',side:'right',desc:'Відповідь моделі у форматі за схемою: ви описуєте JSON Schema, модель повертає валідний обʼєкт.',why:'Схема це частина промпту і частина контексту. Докладніше про механіку в роадмапі «LLM API».',
      links:[
        {t:'Structured outputs',u:'https://docs.claude.com/en/docs/build-with-claude/structured-outputs',k:'doc',s:'Claude Docs'},
        {t:'Structured Outputs',u:'https://platform.openai.com/docs/guides/structured-outputs',k:'doc',s:'OpenAI Platform'},
        {t:'Structured output',u:'https://ai.google.dev/gemini-api/docs/structured-output',k:'doc',s:'Gemini API Docs'},
        {t:'Instructor',u:'https://python.useinstructor.com/',k:'doc',s:'Instructor Docs',w:'Pydantic-модель як схема відповіді для будь-якого API'},
        {t:'JSON Schema',u:'https://json-schema.org/',k:'doc',s:'json-schema.org'}
      ],
      children:[
        {label:'Схема як частина промпту',desc:'Схема відповіді теж займає токени і теж є інструкцією. Поля з описами працюють як підказки моделі.',why:'Назва й опис поля часто важливіші за решту промпту.',
          links:[
            {t:'Structured outputs',u:'https://docs.claude.com/en/docs/build-with-claude/structured-outputs',k:'doc',s:'Claude Docs'},
            {t:'Structured Outputs',u:'https://platform.openai.com/docs/guides/structured-outputs',k:'doc',s:'OpenAI Platform'},
            {t:'Increase output consistency (JSON mode)',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/increase-consistency',k:'doc',s:'Claude Docs'}
          ]},
        {label:'Опис полів замість правил',desc:'Пояснення, що саме має лежати в полі, пишеться в схемі (description), а не в окремому абзаці промпту.',why:'Інструкція біля поля не губиться в середині промпту.',
          links:[
            {t:'Instructor',u:'https://python.useinstructor.com/',k:'doc',s:'Instructor Docs'},
            {t:'Pydantic',u:'https://docs.pydantic.dev/latest/',k:'doc',s:'Pydantic Docs',w:'Field(description=...) потрапляє у JSON Schema'},
            {t:'Zod',u:'https://zod.dev/',k:'doc',s:'zod.dev',w:'Те саме для TypeScript: .describe()'}
          ]},
        {label:'Enum і обмеження',desc:'Перелік дозволених значень, типи, обовʼязкові поля, вкладені обʼєкти.',why:'Модель не вигадає категорію, якої немає в enum.',
          links:[
            {t:'JSON Schema',u:'https://json-schema.org/',k:'doc',s:'json-schema.org'},
            {t:'Structured Outputs',u:'https://platform.openai.com/docs/guides/structured-outputs',k:'doc',s:'OpenAI Platform',w:'Які підмножини JSON Schema підтримуються'},
            {t:'Structured output',u:'https://ai.google.dev/gemini-api/docs/structured-output',k:'doc',s:'Gemini API Docs'}
          ]},
        {label:'Інструменти: Pydantic, Zod, Instructor',desc:'Схема описується типами мови (Pydantic у Python, Zod у TypeScript), бібліотека генерує JSON Schema і валідує відповідь, Instructor додає retry за помилкою валідації.',why:'Схему пишуть один раз у коді, а не окремо для моделі і для валідації.',
          links:[
            {t:'Pydantic',u:'https://docs.pydantic.dev/latest/',k:'doc',s:'Pydantic Docs'},
            {t:'Zod',u:'https://zod.dev/',k:'doc',s:'zod.dev'},
            {t:'Instructor',u:'https://python.useinstructor.com/',k:'doc',s:'Instructor Docs'}
          ]}
      ]},
    {label:'Довга сесія',side:'left',desc:'Як не губити контекст, коли задача не вкладається в одну розмову: компакція, нотатки у файлах, субагенти, свіжий старт.',why:'Більшість дивної поведінки агента на другій годині роботи пояснюється переповненим вікном.',
      links:[
        {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering',w:'Розділ про long-horizon tasks: compaction, notes, sub-agents'},
        {t:'Managing context on the Claude Developer Platform',u:'https://www.anthropic.com/news/context-management',k:'article',y:2025,s:'Anthropic',w:'Context editing і memory tool в API'},
        {t:'Manage costs effectively',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Claude Code Docs',w:'Auto-compact і /compact'},
        {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus'},
        {t:'Як я використовую Obsidian в Agentic Workflow',u:'https://www.youtube.com/watch?v=Lm5NLnTQbx0',k:'video',y:2026,s:'YouTube · BeerCode'},
        {t:'Невеличкий шматок з минулого воркшопу про субагентів',u:'https://t.me/beerphp/168',k:'post',y:2026,s:'beerphp'}
      ],
      children:[
        {label:'Компакція і summary',desc:'Стискання історії в коротке резюме, коли вікно заповнюється: autocompact і /compact у Claude Code, context editing на рівні API.',why:'Після компакції агент памʼятає висновки, але не деталі: їх треба перечитати з файлів.',
          links:[
            {t:'Manage costs effectively',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Claude Code Docs',w:'Як працює auto-compact і коли його запускати руками'},
            {t:'Context editing',u:'https://docs.claude.com/en/docs/build-with-claude/context-editing',k:'doc',y:2025,s:'Claude Docs'},
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Context Engineering for Agents',u:'https://blog.langchain.com/context-engineering-for-agents/',k:'article',y:2025,s:'LangChain Blog',w:'Compress: summarization і trimming'}
          ]},
        {label:'Коли починати нову сесію',desc:'Нова задача, зміна напрямку, перші ознаки плутанини: дешевше стартувати з чистого вікна.',why:'Продовження старої сесії тягне за собою всі помилкові спроби.',
          links:[
            {t:'Claude Code: Best practices for agentic coding',u:'https://www.anthropic.com/engineering/claude-code-best-practices',k:'article',y:2025,s:'Anthropic Engineering',w:'/clear між задачами як базова гігієна'},
            {t:'How Long Contexts Fail',u:'https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html',k:'article',y:2025,s:'Drew Breunig'},
            {t:'Чому агент тупить при вирішенні бажинок?',u:'https://t.me/beerphp/182',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Нотатки і стан поза вікном',desc:'План, прогрес і рішення записуються у файл (todo.md, PLAN.md, нотатки в Obsidian), який агент перечитує після рестарту. Файлова система як необмежений контекст.',why:'Файл на диску не стискається і не губиться, на відміну від історії.',
          links:[
            {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus',w:'todo.md як спосіб тримати мету в кінці контексту'},
            {t:'Як я використовую Obsidian в Agentic Workflow',u:'https://www.youtube.com/watch?v=Lm5NLnTQbx0',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Як я використовую Obsidian в Agentic Workflow',u:'https://t.me/beerphp/161',k:'post',y:2026,s:'beerphp'},
            {t:'langchain-ai/deepagents',u:'https://github.com/langchain-ai/deepagents',k:'github',y:2025,s:'GitHub',w:'Planning tool і файлова система як базові примітиви агента'},
            {t:'Common workflows',u:'https://code.claude.com/docs/en/common-workflows',k:'doc',s:'Claude Code Docs'}
          ]},
        {label:'Субагенти з власним вікном',type:'optional',desc:'Велика підзадача віддається окремому агенту, а в основне вікно повертається лише результат.',why:'Пошук по кодовій базі на сто файлів не має жити в головному контексті.',
          links:[
            {t:'Невеличкий шматок з минулого воркшопу про субагентів',u:'https://t.me/beerphp/168',k:'post',y:2026,s:'beerphp',w:'120 тисяч токенів сміття проти 10 тисяч важливого'},
            {t:'Subagents',u:'https://code.claude.com/docs/en/sub-agents',k:'doc',s:'Claude Code Docs'},
            {t:'How we built our multi-agent research system',u:'https://www.anthropic.com/engineering/built-multi-agent-research-system',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Don\'t Build Multi-Agents',u:'https://cognition.ai/blog/dont-build-multi-agents',k:'article',y:2025,s:'Cognition',w:'Контраргумент: субагенти губять спільний контекст'}
          ]}
      ]},
    {label:'Памʼять агента',side:'right',desc:'Що агент памʼятає між сесіями і де це лежить: короткочасна памʼять у вікні, довготривала у файлах, базі або графі, і готові memory layers.',why:'Повторні пояснення того самого це перша ознака, що памʼять потрібна. Друга: ви не знаєте, куди вона пишеться.',
      links:[
        {t:'Memory',u:'https://langchain-ai.github.io/langgraph/concepts/memory/',k:'doc',s:'LangGraph Docs',w:'Short-term і long-term memory: semantic, episodic, procedural'},
        {t:'Memory tool',u:'https://docs.claude.com/en/docs/agents-and-tools/tool-use/memory-tool',k:'doc',y:2025,s:'Claude Docs'},
        {t:'Memory for agents',u:'https://blog.langchain.com/memory-for-agents/',k:'article',y:2024,s:'LangChain Blog'},
        {t:'Agent Memory: How to Build Agents that Learn and Remember',u:'https://www.letta.com/blog/agent-memory',k:'article',s:'Letta'},
        {t:'MemGPT: Towards LLMs as Operating Systems',u:'https://arxiv.org/abs/2310.08560',k:'article',y:2023,s:'arXiv',w:'Ієрархія памʼяті як в ОС: головна і зовнішня'},
        {t:'Як я використовую Obsidian в Agentic Workflow',u:'https://www.youtube.com/watch?v=Lm5NLnTQbx0',k:'video',y:2026,s:'YouTube · BeerCode'}
      ],
      children:[
        {label:'Short-term і long-term memory',desc:'Короткочасна: усе, що лежить у контекстному вікні поточної сесії і зникає з нею. Довготривала: факти, вподобання і досвід у зовнішньому сховищі, звідки їх підтягують у нові сесії.',why:'Поки не розділити ці два шари, «памʼять» означає просто довшу історію чату, а вона закінчується.',
          links:[
            {t:'Memory',u:'https://langchain-ai.github.io/langgraph/concepts/memory/',k:'doc',s:'LangGraph Docs'},
            {t:'Short-term memory',u:'https://docs.langchain.com/oss/python/langchain/short-term-memory',k:'doc',s:'LangChain Docs'},
            {t:'MemGPT: Towards LLMs as Operating Systems',u:'https://arxiv.org/abs/2310.08560',k:'article',y:2023,s:'arXiv'},
            {t:'Agent Memory: How to Build Agents that Learn and Remember',u:'https://www.letta.com/blog/agent-memory',k:'article',s:'Letta'}
          ]},
        {label:'Memory tool і файли як памʼять',desc:'Anthropic memory tool: модель сама читає й пише файли в каталозі памʼяті між розмовами. Claude Code тримає auto memory і CLAUDE.md на рівні користувача; нотатки в Obsidian працюють так само.',why:'Памʼять як файли це найпростіша реалізація, яку можна переглянути, поправити руками і покласти в git.',
          links:[
            {t:'Memory tool',u:'https://docs.claude.com/en/docs/agents-and-tools/tool-use/memory-tool',k:'doc',y:2025,s:'Claude Docs'},
            {t:'Managing context on the Claude Developer Platform',u:'https://www.anthropic.com/news/context-management',k:'article',y:2025,s:'Anthropic'},
            {t:'Manage Claude\'s memory',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Claude Code Docs'},
            {t:'Як я використовую Obsidian в Agentic Workflow',u:'https://www.youtube.com/watch?v=Lm5NLnTQbx0',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Як я використовую Obsidian в Agentic Workflow',u:'https://t.me/beerphp/161',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Mem0',type:'alt',desc:'Memory layer як сервіс або бібліотека: витягує факти з розмов, дедуплікує, зберігає у векторну базу або граф і повертає релевантні за запитом.',why:'Найпопулярніший готовий шар памʼяті, коли писати свій немає сенсу.',
          links:[
            {t:'Mem0 Documentation',u:'https://docs.mem0.ai/',k:'doc',s:'Mem0 Docs'},
            {t:'mem0ai/mem0',u:'https://github.com/mem0ai/mem0',k:'github',s:'GitHub'}
          ]},
        {label:'Zep',type:'alt',desc:'Памʼять як темпоральний граф знань: факти з часом появи і застарівання, побудований на open-source рушії Graphiti.',why:'Коли важливо, що було правдою вчора, а що сьогодні, плоский список фактів не допомагає.',
          links:[
            {t:'Zep Documentation',u:'https://help.getzep.com/',k:'doc',s:'Zep Docs'},
            {t:'getzep/graphiti',u:'https://github.com/getzep/graphiti',k:'github',s:'GitHub',w:'Open-source рушій графа знань під Zep'}
          ]},
        {label:'Letta (MemGPT)',type:'alt',desc:'Платформа агентів зі stateful-памʼяттю, що виросла з дослідження MemGPT: core memory у контексті, archival і recall за межами, агент сам керує переносом.',why:'Референсна реалізація ідеї «памʼять як ОС», корисна навіть якщо ви її не використовуєте.',
          links:[
            {t:'Letta Documentation',u:'https://docs.letta.com/',k:'doc',s:'Letta Docs'},
            {t:'letta-ai/letta',u:'https://github.com/letta-ai/letta',k:'github',s:'GitHub'},
            {t:'MemGPT: Towards LLMs as Operating Systems',u:'https://arxiv.org/abs/2310.08560',k:'article',y:2023,s:'arXiv'}
          ]},
        {label:'LangGraph memory: LangMem і Store',type:'alt',desc:'Вбудована памʼять фреймворку: checkpointer для короткочасної, Store для довготривалої з namespace на користувача, LangMem для витягування і оновлення фактів.',why:'Якщо агент уже на LangGraph, памʼять береться з коробки, без окремого сервісу.',
          links:[
            {t:'Memory',u:'https://langchain-ai.github.io/langgraph/concepts/memory/',k:'doc',s:'LangGraph Docs'},
            {t:'Persistence',u:'https://docs.langchain.com/oss/python/langgraph/persistence',k:'doc',s:'LangGraph Docs',w:'Checkpointer і Store'},
            {t:'LangMem',u:'https://langchain-ai.github.io/langmem/',k:'doc',s:'LangChain Docs'},
            {t:'langchain-ai/langmem',u:'https://github.com/langchain-ai/langmem',k:'github',s:'GitHub'}
          ]},
        {label:'Сховище для памʼяті',desc:'Де фізично лежить довготривала памʼять: key-value і вектори в Redis, pgvector у звичному Postgres, граф у Neo4j, векторна база Chroma.',why:'Memory layer це логіка, а сховище окреме рішення: від нього залежать пошук, latency і ціна.',
          links:[
            {t:'Memory',u:'https://langchain-ai.github.io/langgraph/concepts/memory/',k:'doc',s:'LangGraph Docs'},
            {t:'Agent memory',u:'https://redis.io/docs/latest/develop/ai/agent-memory/',k:'doc',s:'Redis Docs'},
            {t:'pgvector/pgvector',u:'https://github.com/pgvector/pgvector',k:'github',s:'GitHub'},
            {t:'Neo4j for GenAI',u:'https://neo4j.com/generativeai/',k:'doc',s:'Neo4j'}
          ],
          children:[
            {label:'Redis',type:'alt',desc:'In-memory сховище з векторним пошуком і готовим Agent Memory Server для короткочасної та довготривалої памʼяті.',why:'Найшвидший варіант для сесійного стану і кешу памʼяті.',
              links:[
                {t:'Agent memory',u:'https://redis.io/docs/latest/develop/ai/agent-memory/',k:'doc',s:'Redis Docs'},
                {t:'redis/agent-memory-server',u:'https://github.com/redis/agent-memory-server',k:'github',s:'GitHub'}
              ]},
            {label:'Postgres (pgvector)',type:'alt',desc:'Розширення для Postgres, що додає векторний тип і індекси HNSW/IVFFlat: памʼять лежить поруч з іншими даними застосунку.',why:'Одна база замість ще одного сервісу, якщо Postgres уже є.',
              links:[
                {t:'pgvector/pgvector',u:'https://github.com/pgvector/pgvector',k:'github',s:'GitHub'}
              ]},
            {label:'Neo4j: граф і Graphiti',type:'alt',desc:'Графова база для памʼяті у вигляді сутностей і звʼязків; Graphiti будує на ній темпоральний граф знань з розмов.',why:'Коли факти повʼязані між собою і змінюються з часом, граф відповідає краще за вектор.',
              links:[
                {t:'Neo4j for GenAI',u:'https://neo4j.com/generativeai/',k:'doc',s:'Neo4j'},
                {t:'getzep/graphiti',u:'https://github.com/getzep/graphiti',k:'github',s:'GitHub'},
                {t:'Graphiti: Knowledge Graph Memory for an Agentic World',u:'https://neo4j.com/blog/developer/graphiti-knowledge-graph-memory/',k:'article',s:'Neo4j Blog'}
              ]},
            {label:'Chroma',type:'alt',desc:'Open-source векторна база з простим API, працює вбудовано або сервером; під памʼять агента її використовують як сховище ембедингів фактів.',why:'Найшвидший старт для прототипу з семантичним пошуком по памʼяті.',
              links:[
                {t:'Chroma Docs',u:'https://docs.trychroma.com/',k:'doc',s:'Chroma Docs'},
                {t:'chroma-core/chroma',u:'https://github.com/chroma-core/chroma',k:'github',s:'GitHub'}
              ]}
          ]}
      ]},
    {label:'Context engineering для агентів',side:'left',desc:'Дисципліна, що виросла з prompt engineering у 2025 році: збирати у вікно саме те, що потрібно для наступного кроку, і прибирати решту.',why:'Промпт це одноразове формулювання, а контекст агента змінюється на кожному кроці і потребує стратегії.',
      links:[
        {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering'},
        {t:'Context Engineering for Agents',u:'https://blog.langchain.com/context-engineering-for-agents/',k:'article',y:2025,s:'LangChain Blog'},
        {t:'Context Engineering for Agents | LangChain',u:'https://www.youtube.com/watch?v=4GiqzUHD5AA',k:'video',y:2025,s:'YouTube · LangChain',w:'Lance Martin за 20 хвилин про всі чотири стратегії'},
        {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus'},
        {t:'The New Skill in AI is Not Prompting, It\'s Context Engineering',u:'https://www.philschmid.de/context-engineering',k:'article',y:2025,s:'Phil Schmid'},
        {t:'Loop Engineering - наступний крок після Context Engineering',u:'https://t.me/beerphp/180',k:'post',y:2026,s:'beerphp'},
        {t:'Context Engineering',u:'https://www.ai.engineer/topics/context-engineering',k:'video',s:'AI Engineer',w:'Добірка доповідей з конференцій AI Engineer'}
      ],
      children:[
        {label:'Що таке context engineering',desc:'Термін Карпаті (червень 2025): «мистецтво наповнити вікно саме тією інформацією, що потрібна для наступного кроку». Anthropic описує контекст як обмежений бюджет уваги.',why:'Назва змінила фокус: не «як сформулювати», а «що покласти у вікно і що звідти прибрати».',
          links:[
            {t:'Context engineering',u:'https://simonwillison.net/2025/Jun/27/context-engineering/',k:'article',y:2025,s:'Simon Willison'},
            {t:'The rise of "context engineering"',u:'https://blog.langchain.com/the-rise-of-context-engineering/',k:'article',y:2025,s:'LangChain Blog'},
            {t:'The New Skill in AI is Not Prompting, It\'s Context Engineering',u:'https://www.philschmid.de/context-engineering',k:'article',y:2025,s:'Phil Schmid'},
            {t:'Andrej Karpathy: Software Is Changing (Again)',u:'https://www.youtube.com/watch?v=LCEmiRjPEtQ',k:'video',y:2025,s:'YouTube · Y Combinator'},
            {t:'Context Engineering: Bringing Engineering Discipline to Prompts',u:'https://addyo.substack.com/p/context-engineering-bringing-engineering',k:'article',y:2025,s:'Addy Osmani'}
          ]},
        {label:'Write, select, compress, isolate',desc:'Класифікація Lance Martin: write (винести з вікна у файл чи памʼять), select (підтягнути потрібне), compress (стиснути), isolate (ізолювати в субагенті або sandbox).',why:'Будь-який прийом роботи з контекстом лягає в одну з чотирьох клітинок, і це спрощує розмову в команді.',
          links:[
            {t:'Context Engineering for Agents',u:'https://blog.langchain.com/context-engineering-for-agents/',k:'article',y:2025,s:'LangChain Blog'},
            {t:'Context Engineering for Agents | LangChain',u:'https://www.youtube.com/watch?v=4GiqzUHD5AA',k:'video',y:2025,s:'YouTube · LangChain'},
            {t:'Context Engineering',u:'https://rlancemartin.github.io/2025/06/23/context_engineering/',k:'article',y:2025,s:'Lance Martin',w:'Оригінальний пост із діаграмою'},
            {t:'langchain-ai/context_engineering',u:'https://github.com/langchain-ai/context_engineering',k:'github',y:2025,s:'GitHub',w:'Ноутбуки з реалізацією кожної стратегії в LangGraph'},
            {t:'Context Engineering for Agents: Lance Martin, LangChain',u:'https://www.latent.space/p/context-engineering-for-agents-lance',k:'video',y:2025,s:'Latent Space'}
          ]},
        {label:'Just-in-time: читати, коли треба',desc:'Замість завантажувати все наперед агент тримає легкі ідентифікатори (шляхи, посилання, назви) і читає зміст у момент потреби через тули: grep, head, пошук.',why:'Так працюють Claude Code та інші coding-агенти: вікно росте лише тим, що реально знадобилось.',
          links:[
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering',w:'Розділ Hybrid strategy: pre-load проти just-in-time'},
            {t:'Claude Code, Cursor і Codex: як агенти читають документацію? Чому CLAUDE.md нічого не гарантує',u:'https://www.youtube.com/watch?v=GWGFNRM0o40',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Code execution with MCP: building more efficient agents',u:'https://www.anthropic.com/engineering/code-execution-with-mcp',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Introducing advanced tool use on the Claude Developer Platform',u:'https://www.anthropic.com/engineering/advanced-tool-use',k:'article',y:2025,s:'Anthropic Engineering'}
          ]},
        {label:'Уроки Manus: KV-cache і стабільний префікс',desc:'Шість практичних правил від команди Manus після чотирьох переписувань агента: тримати префікс стабільним, маскувати тули, а не видаляти, лишати помилки у контексті, уникати few-shot патернів.',why:'Один з небагатьох текстів від команди, яка міряла це на мільйонах сесій.',
          links:[
            {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus'},
            {t:'Prompt caching',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-caching',k:'doc',s:'Claude Docs'},
            {t:'Context Engineering for Agents',u:'https://blog.langchain.com/context-engineering-for-agents/',k:'article',y:2025,s:'LangChain Blog'}
          ],
          children:[
            {label:'KV-cache hit rate як метрика',desc:'Будь-яка зміна на початку промпту (timestamp, порядок тулів) скидає кеш і робить кожен крок у рази дорожчим.',why:'Для агента з сотнею кроків кеш це різниця між прибутком і збитком.',
              links:[
                {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus'},
                {t:'Prompt caching',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-caching',k:'doc',s:'Claude Docs'}
              ]},
            {label:'Маскувати тули, а не видаляти',desc:'Динамічне додавання і видалення тулів ламає кеш і збиває модель; краще обмежувати вибір через logit masking або ієрархічні префікси назв.',why:'Описи тулів стоять на початку контексту, і їх зміна найдорожча.',
              links:[
                {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus'},
                {t:'Introducing advanced tool use on the Claude Developer Platform',u:'https://www.anthropic.com/engineering/advanced-tool-use',k:'article',y:2025,s:'Anthropic Engineering'}
              ]},
            {label:'Лишати помилки в контексті',desc:'Невдалий виклик тула і стектрейс залишаються у вікні: модель бачить наслідок і рідше повторює ту саму дію.',why:'Чистити історію від помилок означає прибирати доказ того, що не працює.',
              links:[
                {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus'},
                {t:'How Long Contexts Fail',u:'https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html',k:'article',y:2025,s:'Drew Breunig',w:'Але стежте за context poisoning'}
              ]}
          ]},
        {label:'12-Factor Agents: own your context window',desc:'Маніфест Dex Horthy (HumanLayer): контекст це ваш формат даних, а не список повідомлень чату; ви самі вирішуєте, як серіалізувати історію, помилки і стан.',why:'Фреймворк ховає контекст за абстракцією, а продакшен вимагає контролю над кожним токеном.',
          links:[
            {t:'humanlayer/12-factor-agents',u:'https://github.com/humanlayer/12-factor-agents',k:'github',y:2025,s:'GitHub'},
            {t:'Factor 3: Own your context window',u:'https://github.com/humanlayer/12-factor-agents/blob/main/content/factor-03-own-your-context-window.md',k:'github',y:2025,s:'12-Factor Agents'},
            {t:'12-Factor Agents: Patterns of reliable LLM applications',u:'https://www.youtube.com/watch?v=8kMaTybvDUw',k:'video',y:2025,s:'YouTube · AI Engineer'},
            {t:'How to think about agent frameworks',u:'https://blog.langchain.com/how-to-think-about-agent-frameworks/',k:'article',y:2025,s:'LangChain Blog',w:'Відповідь з боку фреймворку: контроль над контекстом як критерій вибору'}
          ]},
        {label:'Context engineering для coding-агентів',desc:'Робочий цикл research, plan, implement з окремим контекстом на кожну фазу, плани у файлах, часте стискання. Kyrylo називає наступний крок loop engineering.',why:'На великій кодовій базі без цього агент тоне в контексті на другій задачі.',
          links:[
            {t:'No Vibes Allowed: Solving Hard Problems in Complex Codebases',u:'https://www.youtube.com/watch?v=rmvDxxNubIg',k:'video',y:2025,s:'YouTube · AI Engineer',w:'Dex Horthy: research-plan-implement і стискання контексту'},
            {t:'humanlayer/advanced-context-engineering-for-coding-agents',u:'https://github.com/humanlayer/advanced-context-engineering-for-coding-agents',k:'github',y:2025,s:'GitHub'},
            {t:'Context Engineering for Coding Agents',u:'https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html',k:'article',y:2025,s:'martinfowler.com'},
            {t:'Context engineering with Dex Horthy',u:'https://newsletter.pragmaticengineer.com/p/context-engineering-with-dex-horthy',k:'article',y:2025,s:'The Pragmatic Engineer'},
            {t:'Loop Engineering - наступний крок після Context Engineering',u:'https://t.me/beerphp/180',k:'post',y:2026,s:'beerphp'},
            {t:'Agentic Engineering Patterns',u:'https://simonwillison.net/guides/agentic-engineering-patterns/',k:'article',y:2025,s:'Simon Willison'}
          ]}
      ]},
    {label:'Економія контексту',side:'right',desc:'Прийоми, щоб у вікні лишалось місце для задачі: обрізання результатів тулів, кешування, вибір, що читати, вибір моделі, batch.',why:'Три осі, якість, latency і вартість, усі впираються в кількість токенів.',
      links:[
        {t:'Prompt caching',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-caching',k:'doc',s:'Claude Docs'},
        {t:'Manage costs effectively',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Claude Code Docs'},
        {t:'Reduce latency',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/reduce-latency',k:'doc',s:'Claude Docs'},
        {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus'},
        {t:'Де ті х10 до швидкості розробки, котрі так хочуть менеджери?',u:'https://t.me/beerphp/214',k:'post',y:2026,s:'beerphp'}
      ],
      children:[
        {label:'Результати тулів: обрізати і фільтрувати',desc:'Читати частину файлу, а не весь; grep замість cat; обрізати довгий вивід команд; тул повертає стислий результат замість сирого дампу.',why:'Результати тулів найбільший споживач вікна в агентній сесії.',
          links:[
            {t:'Writing effective tools for agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Context editing',u:'https://docs.claude.com/en/docs/build-with-claude/context-editing',k:'doc',y:2025,s:'Claude Docs'},
            {t:'Code execution with MCP: building more efficient agents',u:'https://www.anthropic.com/engineering/code-execution-with-mcp',k:'article',y:2025,s:'Anthropic Engineering',w:'Фільтрувати дані в коді до того, як вони потраплять у вікно'},
            {t:'MCP vs CLI',u:'https://t.me/beerphp/149',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Prompt caching',desc:'Повторювана частина промпту (інструкції, описи тулів, великий документ) кешується на стороні API і коштує дешевше в наступних викликах: cache_control у Claude, автоматично в OpenAI, context caching у Gemini.',why:'Для агента з довгим system prompt це помітна економія на кожному кроці.',
          links:[
            {t:'Prompt caching',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-caching',k:'doc',s:'Claude Docs'},
            {t:'Prompt caching with Claude',u:'https://www.anthropic.com/news/prompt-caching',k:'article',y:2024,s:'Anthropic'},
            {t:'Prompt caching',u:'https://platform.openai.com/docs/guides/prompt-caching',k:'doc',s:'OpenAI Platform'},
            {t:'Context caching',u:'https://ai.google.dev/gemini-api/docs/caching',k:'doc',s:'Gemini API Docs'},
            {t:'Prompt caching cookbook',u:'https://github.com/anthropics/claude-cookbooks/blob/main/misc/prompt_caching.ipynb',k:'github',s:'Claude Cookbooks'}
          ]},
        {label:'Що читати, а що ні',desc:'Агент має читати лише файли, потрібні для задачі, і не підтягувати «на всяк випадок».',why:'Кожен прочитаний файл лишається у вікні до кінця сесії.',
          links:[
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Чому агент тупить при вирішенні бажинок?',u:'https://t.me/beerphp/182',k:'post',y:2026,s:'beerphp',w:'Більше вхідних даних не означає кращий фікс'},
            {t:'Claude Code: Best practices for agentic coding',u:'https://www.anthropic.com/engineering/claude-code-best-practices',k:'article',y:2025,s:'Anthropic Engineering'}
          ]},
        {label:'Вибір моделі під крок: model routing',type:'optional',desc:'Дрібні кроки дешевшою моделлю (Haiku, mini), складні рішення сильнішою. Автоматично це роблять роутери: RouteLLM, OpenRouter.',why:'Не кожен крок агента потребує найдорожчої моделі.',
          links:[
            {t:'lm-sys/RouteLLM',u:'https://github.com/lm-sys/RouteLLM',k:'github',y:2024,s:'GitHub'},
            {t:'RouteLLM: Learning to Route LLMs with Preference Data',u:'https://arxiv.org/abs/2406.18665',k:'article',y:2024,s:'arXiv'},
            {t:'Model Routing',u:'https://openrouter.ai/docs/features/model-routing',k:'doc',s:'OpenRouter Docs'},
            {t:'Subagents',u:'https://code.claude.com/docs/en/sub-agents',k:'doc',s:'Claude Code Docs',w:'Окрема модель на субагента'}
          ]},
        {label:'Batch API для некритичних задач',type:'optional',desc:'Задачі без вимоги до часу відповіді (класифікація, оцінка, масова обробка) відправляються пакетом і коштують удвічі дешевше.',why:'Половина токенів у типовому пайплайні не потребує відповіді за секунду.',
          links:[
            {t:'Batch processing',u:'https://docs.claude.com/en/docs/build-with-claude/batch-processing',k:'doc',s:'Claude Docs'},
            {t:'Pricing',u:'https://docs.claude.com/en/docs/about-claude/pricing',k:'doc',s:'Claude Docs'}
          ]}
      ]},
    {label:'Вправа і критерій «готово»',side:'left',desc:'Відкрийте свій CLAUDE.md і лишіть тільки те, без чого агент помиляється. Решту винесіть в окремі файли правил або skills. Файлу ще немає: створіть його з пʼяти рядків.',why:'Знання про контекст перевіряється лише на власному репо.',
      links:[
        {t:'Чому AGENTS.md та CLAUDE.md робить агента тупим?',u:'https://www.youtube.com/watch?v=PM463SX0mxg',k:'video',y:2026,s:'YouTube · BeerCode'},
        {t:'Manage Claude\'s memory',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Claude Code Docs'},
        {t:'Writing a good CLAUDE.md',u:'https://humanlayer.com/blog/writing-a-good-claude-md',k:'article',y:2025,s:'HumanLayer'},
        {t:'Slash commands',u:'https://code.claude.com/docs/en/slash-commands',k:'doc',s:'Claude Code Docs',w:'/context: подивитись, що саме займає вікно'},
        {t:'Agentic Engineering: Мій ідеальний AI Workflow розробки',u:'https://www.youtube.com/watch?v=4uLqamwjl-w',k:'video',y:2026,s:'YouTube · BeerCode'}
      ],
      children:[
        {label:'Знаєте ціну кожного рядка',desc:'Ви можете назвати, скільки токенів займають інструкції, і пояснити, навіщо кожен рядок.',why:'Це дослівно ознака зрілості з карти.',
          links:[
            {t:'Token counting',u:'https://docs.claude.com/en/docs/build-with-claude/token-counting',k:'doc',s:'Claude Docs'},
            {t:'Tiktokenizer',u:'https://tiktokenizer.vercel.app/',k:'doc',s:'tiktokenizer.vercel.app'},
            {t:'Slash commands',u:'https://code.claude.com/docs/en/slash-commands',k:'doc',s:'Claude Code Docs'}
          ]},
        {label:'Агент проходить задачу без повторів',desc:'Типова задача у вашому репо проходить без повторних пояснень того, що вже написано у файлі.',why:'Якщо доводиться повторювати, файл не працює.',
          links:[
            {t:'Claude Code, Cursor і Codex: як агенти читають документацію? Чому CLAUDE.md нічого не гарантує',u:'https://www.youtube.com/watch?v=GWGFNRM0o40',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Hooks reference',u:'https://code.claude.com/docs/en/hooks',k:'doc',s:'Claude Code Docs',w:'Те, що повторюєте, переносьте в hook'},
            {t:'AGENTS.md outperforms skills in our agent evals',u:'https://vercel.com/blog/agents-md-outperforms-skills-in-our-agent-evals',k:'article',y:2025,s:'Vercel'}
          ]},
        {label:'Що читати',desc:'Anthropic, «Effective context engineering for AI agents». Документація Claude, розділ Prompt engineering. Manus про уроки з продакшену. Chroma про context rot.',why:'Першоджерела про контекст від тих, хто бачить його зсередини.',
          links:[
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Prompt engineering overview',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview',k:'doc',s:'Claude Docs'},
            {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus'},
            {t:'Context Rot: How Increasing Input Tokens Impacts LLM Performance',u:'https://research.trychroma.com/context-rot',k:'article',y:2025,s:'Chroma Research'},
            {t:'Prompt Engineering (whitepaper)',u:'https://www.kaggle.com/whitepaper-prompt-engineering',k:'course',y:2025,s:'Kaggle · Google'},
            {t:'anthropics/courses',u:'https://github.com/anthropics/courses',k:'course',s:'GitHub',w:'Безплатні курси Anthropic: API, prompt engineering, evals, tool use'}
          ]}
      ]}
  ]
};
