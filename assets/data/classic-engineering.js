window.ROADMAPS=window.ROADMAPS||{};
window.ROADMAPS['classic-engineering']={
  slug:'classic-engineering',
  title:'Класична інженерія',
  intro:'База, з якої стартує AI-інженер: мова, HTTP, база даних, тести, Git, контейнери, CI, спостережуваність. LLM-фіча живе всередині звичайного сервісу, і саме ця база визначає, чи доживе вона до проду. Якщо ви бекендер, більшість вузлів тут уже закриті: позначте їх і йдіть далі.',
  root:{label:'Класична інженерія',kicker:'Інженерна база',desc:'Звичайна розробка сервісів: Python або TypeScript, HTTP і API, PostgreSQL, тести, Git, Docker, CI/CD, хмара, базова безпека, логи й трейси. Усе, що потрібно, щоб сервіс жив у проді і його можна було безпечно змінювати.',why:'Виклик моделі додає до сервісу ще одну зовнішню залежність: повільну, дорогу й недетерміновану. Решта роадмапу (RAG, агенти, evals, безпека AI) стоїть на цих основах, і без них агент лише швидше генерує код, який ніхто не може перевірити.',
    links:[
      {t:'Backend Developer Roadmap',u:'https://roadmap.sh/backend',k:'article',s:'roadmap.sh',w:'Повна карта бекенду; тут лише та частина, що потрібна для LLM-сервісів'},
      {t:'The Missing Semester of Your CS Education',u:'https://missing.csail.mit.edu/',k:'course',s:'MIT',w:'Shell, Git, налагодження: те, чого не вчать на курсах'},
      {t:'Software Engineering at Google',u:'https://abseil.io/resources/swe-book',k:'course',s:'Google',w:'Безкоштовна книга про тести, ревʼю і процеси у великій інженерії'},
      {t:'Як вижити в IT у 2026 році?',u:'https://www.youtube.com/watch?v=VN-7dUP454k',k:'video',y:2026,s:'BeerCode'},
      {t:'Так, AI замінить тебе',u:'https://t.me/beerphp/141',k:'post',y:2026,s:'beerphp'},
      {t:'AI в розробці дає не ×10, добре, якщо +10-40%. Чому так і як дістати більше? Розмова двох інженерів',u:'https://www.youtube.com/watch?v=xxn6gOey9G0',k:'video',y:2026,s:'BeerCode'}
    ]},
  end:{label:'Далі: Метод роботи з агентами →',href:'agentic-workflow.html'},
  groups:[
    {label:'Мова програмування та інструменти',side:'left',desc:'Одна мова на рівні, коли ви пишете на ній сервіс у прод, а не скрипт: Python або TypeScript, плюс сучасний набір інструментів навколо (uv, ruff, pydantic; pnpm, biome, zod) і веб-фреймворк.',why:'SDK моделей, MCP і майже всі приклади в документації написані на Python і TypeScript. Агент пише код швидше за вас, але ревʼю робите ви, і для цього мову треба знати глибоко.',
      links:[
        {t:'Python Developer Roadmap',u:'https://roadmap.sh/python',k:'article',s:'roadmap.sh'},
        {t:'TypeScript Roadmap',u:'https://roadmap.sh/typescript',k:'article',s:'roadmap.sh'},
        {t:'The Hitchhiker\'s Guide to Python',u:'https://docs.python-guide.org/',k:'course',s:'python-guide.org',w:'Як влаштований «дорослий» Python-проєкт'},
        {t:'Python in 100 Seconds',u:'https://www.youtube.com/watch?v=x7X9w_GIm1s',k:'video',s:'YouTube · Fireship'},
        {t:'TypeScript in 100 Seconds',u:'https://www.youtube.com/watch?v=zQnBQ4tB3ZA',k:'video',s:'YouTube · Fireship'},
        {t:'Exercism: Python track',u:'https://exercism.org/tracks/python',k:'course',s:'Exercism',w:'Безкоштовні вправи з менторським ревʼю'}
      ],
      children:[
        {label:'Python',type:'alt',desc:'Основна мова AI-розробки: SDK моделей, бібліотеки для embeddings і більшість прикладів у документації саме на ньому. Сучасний стек: Python 3.12+, uv, ruff, pydantic v2, FastAPI.',why:'Найкоротший шлях від документації до робочого коду.',
          links:[
            {t:'The Python Tutorial',u:'https://docs.python.org/3/tutorial/',k:'doc',s:'Python Docs'},
            {t:'What\'s New In Python 3.13',u:'https://docs.python.org/3/whatsnew/3.13.html',k:'doc',s:'Python Docs',w:'Новий REPL, експериментальний free-threading, JIT'},
            {t:'The Python Language Reference: Data model',u:'https://docs.python.org/3/reference/datamodel.html',k:'doc',s:'Python Docs',w:'Dunder-методи, дескриптори, протоколи: як мова працює під капотом'},
            {t:'Python Tutorial: Unit Testing Your Code with the unittest Module',u:'https://www.youtube.com/watch?v=6tNS--WetLI',k:'video',s:'YouTube · Corey Schafer'},
            {t:'python/cpython',u:'https://github.com/python/cpython',k:'github',s:'GitHub'}
          ],
          children:[
            {label:'Типи: hints, dataclasses, pydantic v2',desc:'Анотації типів у сигнатурах, dataclasses для простих структур, pydantic v2 для валідації даних на межах системи; mypy або pyright як перевірка типів у CI.',why:'Structured outputs моделі найзручніше описувати як pydantic-модель: та сама схема і для API, і для JSON Schema тула, і для валідації відповіді.',
              links:[
                {t:'typing: Support for type hints',u:'https://docs.python.org/3/library/typing.html',k:'doc',s:'Python Docs'},
                {t:'Pydantic: Models',u:'https://docs.pydantic.dev/latest/concepts/models/',k:'doc',s:'Pydantic Docs'},
                {t:'Pydantic: JSON Schema',u:'https://docs.pydantic.dev/latest/concepts/json_schema/',k:'doc',s:'Pydantic Docs',w:'Як модель перетворюється на схему для тула чи structured output'},
                {t:'Static Typing with Python',u:'https://typing.python.org/en/latest/',k:'doc',s:'typing.python.org'},
                {t:'mypy: Type hints cheat sheet',u:'https://mypy.readthedocs.io/en/stable/cheat_sheet_py3.html',k:'doc',s:'mypy Docs'},
                {t:'Do We Still Need Dataclasses? // PYDANTIC Tutorial',u:'https://www.youtube.com/watch?v=Vj-iU-8_xLs',k:'video',s:'YouTube · ArjanCodes'}
              ]},
            {label:'asyncio і конкурентність',desc:'Асинхронні виклики, TaskGroup, Semaphore для обмеження паралелізму, asyncio.Queue; розуміння GIL і коли брати потоки чи процеси замість корутин.',why:'Виклики моделі довгі, по секунді і більше. Без async сервіс чекає на кожен окремо, а без семафора ви впираєтесь у rate limit провайдера.',
              links:[
                {t:'asyncio: Asynchronous I/O',u:'https://docs.python.org/3/library/asyncio.html',k:'doc',s:'Python Docs'},
                {t:'asyncio: Coroutines and Tasks',u:'https://docs.python.org/3/library/asyncio-task.html',k:'doc',s:'Python Docs',w:'TaskGroup, gather, timeout'},
                {t:'asyncio: Synchronization Primitives',u:'https://docs.python.org/3/library/asyncio-sync.html',k:'doc',s:'Python Docs',w:'Semaphore обмежує кількість одночасних викликів моделі'},
                {t:'Next-Level Concurrent Programming In Python With Asyncio',u:'https://www.youtube.com/watch?v=GpqAQxH1Afc',k:'video',s:'YouTube · ArjanCodes'},
                {t:'AnyIO documentation',u:'https://anyio.readthedocs.io/en/stable/',k:'doc',s:'AnyIO Docs',w:'Структурована конкурентність поверх asyncio; на ній стоїть Starlette і FastAPI'}
              ]},
            {label:'Пакети: uv, pyproject.toml, uv.lock',desc:'uv як єдиний інструмент замість pip, venv і pyenv: ізольоване середовище на проєкт, pyproject.toml, uv.lock із зафіксованими версіями, inline-залежності скриптів (PEP 723).',why:'SDK моделей оновлюються щомісяця і ламають сумісність. Зафіксовані версії рятують прод, а uv робить це за секунди і в CI, і в Docker.',
              links:[
                {t:'uv: An extremely fast Python package and project manager',u:'https://docs.astral.sh/uv/',k:'doc',s:'Astral Docs'},
                {t:'uv: Working on projects',u:'https://docs.astral.sh/uv/guides/projects/',k:'doc',s:'Astral Docs'},
                {t:'uv: Running scripts',u:'https://docs.astral.sh/uv/guides/scripts/',k:'doc',s:'Astral Docs',w:'Скрипт із залежностями в одному файлі (PEP 723): зручно для тулів агента'},
                {t:'Writing your pyproject.toml',u:'https://packaging.python.org/en/latest/guides/writing-pyproject-toml/',k:'doc',s:'Python Packaging Guide'},
                {t:'uv IS the Future of Python Packaging!',u:'https://www.youtube.com/watch?v=8UuW8o4bHbw',k:'video',y:2024,s:'YouTube · Hynek Schlawack'},
                {t:'astral-sh/uv',u:'https://github.com/astral-sh/uv',k:'github',s:'GitHub'}
              ]},
            {label:'Винятки й обробка помилок',desc:'Ієрархія винятків, власні класи помилок, ExceptionGroup, контекстні менеджери для ресурсів, логування з traceback.',why:'API моделі падає, таймаутиться і повертає сміття. Кожен з цих випадків має свою гілку обробки, а не один голий except.',
              links:[
                {t:'Errors and Exceptions',u:'https://docs.python.org/3/tutorial/errors.html',k:'doc',s:'Python Docs'},
                {t:'Built-in Exceptions',u:'https://docs.python.org/3/library/exceptions.html',k:'doc',s:'Python Docs',w:'Ієрархія, ExceptionGroup, add_note'},
                {t:'contextlib: Utilities for with-statement contexts',u:'https://docs.python.org/3/library/contextlib.html',k:'doc',s:'Python Docs'},
                {t:'Errors: Claude API',u:'https://docs.claude.com/en/api/errors',k:'doc',s:'Anthropic Docs',w:'Реальні класи помилок провайдера, які доведеться ловити'}
              ]}
          ]},
        {label:'TypeScript',type:'alt',desc:'Друга мова AI-стеку: Node.js (або Bun) на бекенді, типи на етапі компіляції, zod для схем. Node 22+ запускає .ts напряму, а компілятор TypeScript переписують на Go.',why:'MCP-сервери і SDK моделей мають першокласну підтримку TypeScript; фронтенд з AI-фічами теж тут.',
          links:[
            {t:'The TypeScript Handbook',u:'https://www.typescriptlang.org/docs/handbook/intro.html',k:'doc',s:'TypeScript Docs'},
            {t:'TypeScript Deep Dive',u:'https://basarat.gitbook.io/typescript/',k:'course',s:'Basarat Ali Syed',w:'Безкоштовна книга, від основ до компілятора'},
            {t:'total-typescript/total-typescript-book',u:'https://github.com/total-typescript/total-typescript-book',k:'github',s:'GitHub',w:'Книга Total TypeScript Essentials, відкритий репозиторій'},
            {t:'A 10x Faster TypeScript',u:'https://devblogs.microsoft.com/typescript/typescript-native-port/',k:'article',y:2025,s:'Microsoft'},
            {t:'TypeScript just changed forever',u:'https://www.youtube.com/watch?v=3-W95H5_lX0',k:'video',y:2025,s:'YouTube · Theo - t3.gg'},
            {t:'type-challenges/type-challenges',u:'https://github.com/type-challenges/type-challenges',k:'github',s:'GitHub',w:'Вправи на систему типів'}
          ],
          children:[
            {label:'Система типів: generics, union, narrowing',desc:'Типи як опис контракту: обʼєднання, звуження через перевірки, узагальнені типи, utility types, satisfies.',why:'Відповідь моделі приходить як unknown; звуження типів змушує перевірити її, перш ніж використати.',
              links:[
                {t:'Narrowing',u:'https://www.typescriptlang.org/docs/handbook/2/narrowing.html',k:'doc',s:'TypeScript Docs'},
                {t:'Generics',u:'https://www.typescriptlang.org/docs/handbook/2/generics.html',k:'doc',s:'TypeScript Docs'},
                {t:'Everyday Types',u:'https://www.typescriptlang.org/docs/handbook/2/everyday-types.html',k:'doc',s:'TypeScript Docs'},
                {t:'Utility Types',u:'https://www.typescriptlang.org/docs/handbook/utility-types.html',k:'doc',s:'TypeScript Docs'},
                {t:'Effective TypeScript',u:'https://effectivetypescript.com/',k:'course',s:'Dan Vanderkam',w:'83 конкретні поради; блог з частиною матеріалу безкоштовно'}
              ]},
            {label:'async/await, Promise, стріми',desc:'Асинхронний код, AbortController для таймаутів, ReadableStream і async-ітератори для потокових даних у Node.js.',why:'Стрімінг відповіді моделі токен за токеном у TypeScript робиться саме через стріми й for await.',
              links:[
                {t:'Using promises',u:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises',k:'doc',s:'MDN'},
                {t:'Streams API',u:'https://developer.mozilla.org/en-US/docs/Web/API/Streams_API',k:'doc',s:'MDN'},
                {t:'for await...of',u:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for-await...of',k:'doc',s:'MDN',w:'Саме так читається стрім відповіді моделі в SDK'},
                {t:'AbortController',u:'https://developer.mozilla.org/en-US/docs/Web/API/AbortController',k:'doc',s:'MDN',w:'Скасування запиту до моделі по таймауту або коли користувач пішов'},
                {t:'Node.js: Stream',u:'https://nodejs.org/api/stream.html',k:'doc',s:'Node.js Docs'}
              ]},
            {label:'npm, pnpm, package.json, версії',desc:'Залежності, lock-файл, семантичні версії, скрипти; pnpm як швидший менеджер з жорсткою ізоляцією залежностей; ESM і CommonJS.',why:'MCP-сервери поширюються як npm-пакети; треба розуміти, що саме ви запускаєте через npx і чому lock-файл має бути в репо.',
              links:[
                {t:'package.json',u:'https://docs.npmjs.com/cli/v10/configuring-npm/package-json',k:'doc',s:'npm Docs'},
                {t:'About semantic versioning',u:'https://docs.npmjs.com/about-semantic-versioning',k:'doc',s:'npm Docs'},
                {t:'Semantic Versioning 2.0.0',u:'https://semver.org/',k:'doc',s:'semver.org'},
                {t:'pnpm/pnpm',u:'https://github.com/pnpm/pnpm',k:'github',s:'GitHub'},
                {t:'Node.js: Modules: Packages',u:'https://nodejs.org/api/packages.html',k:'doc',s:'Node.js Docs',w:'ESM vs CommonJS, поле exports'},
                {t:'Node.js: Running TypeScript Natively',u:'https://nodejs.org/api/typescript.html',k:'doc',s:'Node.js Docs'}
              ]},
            {label:'Валідація схем: zod, valibot, arktype',type:'optional',desc:'Бібліотека, що описує схему даних у коді, перевіряє значення під час виконання і генерує JSON Schema.',why:'Та сама схема описує і тул для моделі, і перевірку її відповіді. SDK Anthropic і OpenAI приймають zod-схеми напряму.',
              links:[
                {t:'Zod',u:'https://zod.dev/',k:'doc',s:'Zod Docs'},
                {t:'Zod: JSON Schema',u:'https://zod.dev/json-schema',k:'doc',s:'Zod Docs',w:'z.toJSONSchema: схема тула з коду'},
                {t:'Valibot',u:'https://valibot.dev/',k:'doc',s:'Valibot Docs',w:'Модульна альтернатива з малим бандлом'},
                {t:'ArkType',u:'https://arktype.io/',k:'doc',s:'ArkType Docs'}
              ]}
          ]},
        {label:'Веб-фреймворк: FastAPI / Hono, Fastify',desc:'Фреймворк для HTTP-сервісу: роутинг, валідація запитів через pydantic або zod, dependency injection, OpenAPI з коробки, lifespan для з\'єднань, StreamingResponse для SSE.',why:'Ваш AI-ендпоінт це звичайний ендпоінт із довгою відповіддю. FastAPI дає схему, валідацію і стрімінг без зайвого коду; Hono і Fastify роблять те саме в TypeScript.',
          links:[
            {t:'FastAPI',u:'https://fastapi.tiangolo.com/',k:'doc',s:'FastAPI Docs'},
            {t:'FastAPI: Tutorial - User Guide',u:'https://fastapi.tiangolo.com/tutorial/',k:'doc',s:'FastAPI Docs'},
            {t:'FastAPI: Concurrency and async / await',u:'https://fastapi.tiangolo.com/async/',k:'doc',s:'FastAPI Docs',w:'Коли def, а коли async def: найчастіша помилка новачків'},
            {t:'Hono',u:'https://hono.dev/docs/',k:'doc',s:'Hono Docs',w:'Легкий фреймворк на Web Standards: Node, Bun, Cloudflare Workers'},
            {t:'Fastify',u:'https://fastify.dev/docs/latest/',k:'doc',s:'Fastify Docs'},
            {t:'FastAPI Course for Beginners',u:'https://www.youtube.com/watch?v=tLKKmouUams',k:'video',s:'YouTube · freeCodeCamp.org'},
            {t:'zhanymkanov/fastapi-best-practices',u:'https://github.com/zhanymkanov/fastapi-best-practices',k:'github',s:'GitHub',w:'Структура проєкту, залежності, помилки з продакшну'}
          ],
          children:[
            {label:'Dependency injection і lifespan',desc:'Depends у FastAPI для з\'єднань, клієнтів і авторизації; lifespan для ресурсів, що живуть весь час роботи сервісу (пул до бази, клієнт моделі).',why:'Клієнт моделі створюється один раз у lifespan і підмінюється моком у тестах через override залежності.',
              links:[
                {t:'FastAPI: Dependencies',u:'https://fastapi.tiangolo.com/tutorial/dependencies/',k:'doc',s:'FastAPI Docs'},
                {t:'FastAPI: Lifespan Events',u:'https://fastapi.tiangolo.com/advanced/events/',k:'doc',s:'FastAPI Docs'},
                {t:'Dependency Injection, The Best Pattern',u:'https://www.youtube.com/watch?v=J1f5b4vcxCQ',k:'video',s:'YouTube · CodeAesthetic'}
              ]},
            {label:'SSE, WebSockets, фонові задачі',desc:'StreamingResponse для SSE, WebSocket-ендпоінти, BackgroundTasks для короткої пост-обробки після відповіді.',why:'Токени моделі стрімляться користувачу через StreamingResponse; збереження трейсу в базу іде у фоновій задачі, щоб не тримати відповідь.',
              links:[
                {t:'FastAPI: Custom Response - HTML, Stream, File, others',u:'https://fastapi.tiangolo.com/advanced/custom-response/',k:'doc',s:'FastAPI Docs'},
                {t:'FastAPI: WebSockets',u:'https://fastapi.tiangolo.com/advanced/websockets/',k:'doc',s:'FastAPI Docs'},
                {t:'FastAPI: Background Tasks',u:'https://fastapi.tiangolo.com/tutorial/background-tasks/',k:'doc',s:'FastAPI Docs'},
                {t:'Python FastAPI Tutorial: Build a REST API in 15 Minutes',u:'https://www.youtube.com/watch?v=iWS9ogMPOI0',k:'video',s:'YouTube · pixegami'}
              ]},
            {label:'Settings: pydantic-settings, .env',desc:'Налаштування сервісу з типами і валідацією, зчитані зі змінних середовища і .env; окремі значення для dev, test і prod.',why:'Ключ моделі, назва моделі, ліміти токенів і таймаути живуть у Settings, а не розкидані по коду.',
              links:[
                {t:'Pydantic: Settings Management',u:'https://docs.pydantic.dev/latest/concepts/pydantic_settings/',k:'doc',s:'Pydantic Docs'},
                {t:'The Twelve-Factor App: Config',u:'https://12factor.net/config',k:'article',s:'12factor.net'},
                {t:'pydantic/pydantic-settings',u:'https://github.com/pydantic/pydantic-settings',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'HTTP-клієнти: httpx, aiohttp, fetch',desc:'Асинхронний HTTP-клієнт з таймаутами, пулом з\'єднань, ретраями і стрімінгом відповіді; у Node.js вбудований fetch і undici.',why:'SDK моделей зібрані поверх httpx і fetch: таймаути, проксі й ретраї конфігуруються саме там. Для власних тулів агента клієнт пишете ви.',
          links:[
            {t:'HTTPX',u:'https://www.python-httpx.org/',k:'doc',s:'HTTPX Docs'},
            {t:'HTTPX: Async Support',u:'https://www.python-httpx.org/async/',k:'doc',s:'HTTPX Docs',w:'AsyncClient, стрімінг, обмеження пулу'},
            {t:'aiohttp',u:'https://docs.aiohttp.org/en/stable/',k:'doc',s:'aiohttp Docs'},
            {t:'Using the Fetch API',u:'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch',k:'doc',s:'MDN'},
            {t:'encode/httpx',u:'https://github.com/encode/httpx',k:'github',s:'GitHub'}
          ]},
        {label:'Якість коду: ruff, mypy, eslint, biome',desc:'Лінтер і форматер як один інструмент (ruff для Python, biome або eslint з prettier для TypeScript), перевірка типів (mypy, pyright, tsc) у pre-commit і CI.',why:'Агент генерує багато коду, і єдине, що тримає його в одному стилі без ревʼю людиною, це автоматичні перевірки, які падають у CI.',
          links:[
            {t:'Ruff',u:'https://docs.astral.sh/ruff/',k:'doc',s:'Astral Docs',w:'Лінтер і форматер Python в одному, замінює flake8, isort, black'},
            {t:'Ruff: Rules',u:'https://docs.astral.sh/ruff/rules/',k:'doc',s:'Astral Docs'},
            {t:'mypy documentation',u:'https://mypy.readthedocs.io/en/stable/',k:'doc',s:'mypy Docs'},
            {t:'Pyright',u:'https://microsoft.github.io/pyright/',k:'doc',s:'Microsoft',w:'Швидший тайпчекер, той самий, що у VS Code / Pylance'},
            {t:'Biome',u:'https://biomejs.dev/',k:'doc',s:'Biome Docs',w:'Лінтер і форматер для JS/TS в одному бінарнику'},
            {t:'typescript-eslint',u:'https://typescript-eslint.io/',k:'doc',s:'typescript-eslint Docs'},
            {t:'pre-commit',u:'https://pre-commit.com/',k:'doc',s:'pre-commit.com'}
          ]},
        {label:'Налагодження і профілювання',type:'optional',desc:'Відладчик (pdb, breakpoint, інспектор Node), логування замість print, профайлери (cProfile, py-spy) для пошуку, де саме повільно.',why:'Коли агент каже «я виправив», а тест далі падає, крок під відладчиком показує правду швидше за ще один промпт.',
          links:[
            {t:'pdb: The Python Debugger',u:'https://docs.python.org/3/library/pdb.html',k:'doc',s:'Python Docs'},
            {t:'The Python Profilers',u:'https://docs.python.org/3/library/profile.html',k:'doc',s:'Python Docs'},
            {t:'benfred/py-spy',u:'https://github.com/benfred/py-spy',k:'github',s:'GitHub',w:'Семплюючий профайлер для продакшну без зупинки процесу'},
            {t:'Node.js: Inspector',u:'https://nodejs.org/api/inspector.html',k:'doc',s:'Node.js Docs'},
            {t:'Logging HOWTO',u:'https://docs.python.org/3/howto/logging.html',k:'doc',s:'Python Docs'}
          ]}
      ]},
    {label:'HTTP і API',side:'right',desc:'Як сервіси говорять між собою: запити, відповіді, коди статусу, JSON і JSON Schema, OpenAPI, автентифікація, ретраї, ліміти, вебхуки, стрімінг.',why:'Виклик моделі, MCP по HTTP, вебхуки від зовнішніх систем: усе це HTTP. Більшість помилок інтеграції лежать саме тут.',
      links:[
        {t:'HTTP',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP',k:'doc',s:'MDN'},
        {t:'RFC 9110: HTTP Semantics',u:'https://www.rfc-editor.org/rfc/rfc9110.html',k:'doc',s:'RFC Editor',w:'Первинне джерело про методи, статуси й заголовки'},
        {t:'API Design Roadmap',u:'https://roadmap.sh/api-design',k:'article',s:'roadmap.sh'},
        {t:'Good APIs Vs Bad APIs: 7 Tips for API Design',u:'https://www.youtube.com/watch?v=_gQaygjm_hg',k:'video',s:'YouTube · ByteByteGo'},
        {t:'HTTP/1 to HTTP/2 to HTTP/3',u:'https://www.youtube.com/watch?v=a-sBfyiXysI',k:'video',s:'YouTube · ByteByteGo'},
        {t:'Everything curl',u:'https://everything.curl.dev/',k:'course',s:'curl.se',w:'Безкоштовна книга про curl: головний інструмент дебагу HTTP'}
      ],
      children:[
        {label:'REST: ресурси, методи, коди статусу',desc:'Структура URL, GET/POST/PUT/PATCH/DELETE, що означають 2xx, 4xx, 5xx і коли повертати який; пагінація, фільтри, версіонування; формат помилок за RFC 9457.',why:'Ваш AI-ендпоінт теж REST. 429 і 503 від API моделі треба читати правильно, щоб ретраїти лише те, що варто.',
          links:[
            {t:'HTTP response status codes',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status',k:'doc',s:'MDN'},
            {t:'HTTP request methods',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods',k:'doc',s:'MDN'},
            {t:'RFC 9457: Problem Details for HTTP APIs',u:'https://www.rfc-editor.org/rfc/rfc9457.html',k:'doc',s:'RFC Editor',w:'Стандартний JSON для помилок замість вигаданого свого'},
            {t:'Google Cloud API design guide',u:'https://cloud.google.com/apis/design',k:'doc',s:'Google Cloud'},
            {t:'microsoft/api-guidelines',u:'https://github.com/microsoft/api-guidelines',k:'github',s:'GitHub'},
            {t:'Top 6 Most Popular API Architecture Styles',u:'https://www.youtube.com/watch?v=4vLxWqE94l4',k:'video',s:'YouTube · ByteByteGo',w:'REST проти GraphQL, gRPC, WebSocket, вебхуків'}
          ],
          children:[
            {label:'OpenAPI 3.1 і автогенерація клієнтів',desc:'Специфікація API як файл, з якого генеруються документація, клієнти і контрактні тести. FastAPI і Hono генерують її з коду.',why:'OpenAPI-опис вашого сервісу це готовий набір тулів для агента: багато фреймворків перетворюють його на tool definitions напряму.',
              links:[
                {t:'OpenAPI Specification v3.1',u:'https://spec.openapis.org/oas/latest.html',k:'doc',s:'OpenAPI Initiative'},
                {t:'OpenAPI Initiative: Learn',u:'https://learn.openapis.org/',k:'doc',s:'OpenAPI Initiative'},
                {t:'OAI/OpenAPI-Specification',u:'https://github.com/OAI/OpenAPI-Specification',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'JSON і JSON Schema',desc:'Формат обміну даними і JSON Schema як опис структури: типи, required, enum, additionalProperties, $ref.',why:'Схеми тулів і structured outputs описуються JSON Schema. Це мова, якою ви пояснюєте моделі формат, тому її варто читати і писати без підказок.',
          links:[
            {t:'Working with JSON',u:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Scripting/JSON',k:'doc',s:'MDN'},
            {t:'JSON Schema: Getting Started Step-By-Step',u:'https://json-schema.org/learn/getting-started-step-by-step',k:'doc',s:'json-schema.org'},
            {t:'Understanding JSON Schema',u:'https://json-schema.org/understanding-json-schema',k:'course',s:'json-schema.org',w:'Повний довідник з прикладами'},
            {t:'RFC 8259: The JSON Data Interchange Format',u:'https://www.rfc-editor.org/rfc/rfc8259',k:'doc',s:'RFC Editor'},
            {t:'JSON Lines',u:'https://jsonlines.org/',k:'doc',s:'jsonlines.org',w:'Формат для стрімінгу й батчів: один JSON на рядок'}
          ]},
        {label:'Автентифікація: API-ключі, OAuth 2.1, JWT',desc:'Як клієнт доводить, хто він: ключ у заголовку, Bearer-токен з терміном дії, потік OAuth 2.1 з PKCE для доступу від імені користувача, сесії й cookies.',why:'Ключ моделі в коді дорівнює рахунку на тисячі доларів. MCP-сервери до зовнішніх API авторизуються через OAuth 2.1, і специфікація MCP вимагає саме його.',
          links:[
            {t:'HTTP authentication',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication',k:'doc',s:'MDN'},
            {t:'OAuth 2.1',u:'https://oauth.net/2.1/',k:'doc',s:'oauth.net',w:'Консолідована версія OAuth 2 з обов\'язковим PKCE'},
            {t:'PKCE: Proof Key for Code Exchange',u:'https://oauth.net/2/pkce/',k:'doc',s:'oauth.net'},
            {t:'RFC 7519: JSON Web Token (JWT)',u:'https://www.rfc-editor.org/rfc/rfc7519',k:'doc',s:'RFC Editor'},
            {t:'Session vs Token Authentication in 100 Seconds',u:'https://www.youtube.com/watch?v=UBUNrFtufWo',k:'video',s:'YouTube · Fireship'},
            {t:'Authentication Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',k:'doc',s:'OWASP'}
          ]},
        {label:'Ретраї, таймаути, backoff, circuit breaker',desc:'Повтор запиту після тимчасової помилки з експоненційною паузою і jitter, обмеження часу очікування, ідемпотентність повтору, circuit breaker, щоб не добивати впалий сервіс.',why:'API моделі повертає 429 і 529 регулярно. Без backoff ретраї лише погіршують ситуацію, а без таймаута один завислий виклик тримає воркер хвилинами.',
          links:[
            {t:'Exponential Backoff And Jitter',u:'https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/',k:'article',s:'AWS Architecture Blog'},
            {t:'Timeouts, retries, and backoff with jitter',u:'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/',k:'article',s:'Amazon Builders\' Library'},
            {t:'Retry pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/retry',k:'doc',s:'Azure Architecture Center'},
            {t:'Circuit Breaker pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker',k:'doc',s:'Azure Architecture Center'},
            {t:'Retry strategy',u:'https://cloud.google.com/storage/docs/retry-strategy',k:'doc',s:'Google Cloud',w:'Які помилки ретраїти, а які ні, на прикладі реального API'}
          ],
          children:[
            {label:'Idempotency-Key і безпечні повтори',desc:'Заголовок із унікальним ключем запиту: сервер повертає той самий результат на повтор замість повторної дії.',why:'Агент з ретраями легко створить два платежі або два тікети. Ідемпотентний ключ робить повтор безпечним.',
              links:[
                {t:'Idempotency-Key',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Idempotency-Key',k:'doc',s:'MDN'},
                {t:'Designing robust and predictable APIs with idempotency',u:'https://stripe.com/blog/idempotency',k:'article',s:'Stripe'},
                {t:'Implementing Stripe-like Idempotency Keys in Postgres',u:'https://brandur.org/idempotency-keys',k:'article',s:'Brandur Leach'},
                {t:'Making retries safe with idempotent APIs',u:'https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/',k:'article',s:'Amazon Builders\' Library'}
              ]}
          ]},
        {label:'Rate limits і квоти',desc:'Обмеження кількості запитів або токенів за хвилину, заголовки 429 і Retry-After, черга чи семафор на стороні клієнта, пріоритети між користувачами.',why:'Ліміти в API моделей рахуються токенами, і їх легко вичерпати одним батчем. Семафор на клієнті дешевший за ретраї.',
          links:[
            {t:'429 Too Many Requests',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/429',k:'doc',s:'MDN'},
            {t:'Retry-After',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Retry-After',k:'doc',s:'MDN'},
            {t:'Rate limits: Claude API',u:'https://docs.claude.com/en/api/rate-limits',k:'doc',s:'Anthropic Docs',w:'RPM, ITPM, OTPM: як саме рахуються ліміти в реальному API моделі'},
            {t:'Distributed Locks with Redis',u:'https://redis.io/docs/latest/develop/use/patterns/distributed-locks/',k:'doc',s:'Redis Docs',w:'Патерни розподілених блокувань, на яких будують ліміти'},
            {t:'Top 7 Ways to 10x Your API Performance',u:'https://www.youtube.com/watch?v=zvWKqUiovAM',k:'video',s:'YouTube · ByteByteGo'}
          ]},
        {label:'Вебхуки',type:'optional',desc:'Зовнішня система сама викликає ваш URL, коли щось сталось. Підпис HMAC, перевірка часу, повтори з боку відправника, ідемпотентна обробка, тунель (ngrok) для локальної розробки.',why:'Агент, який реагує на подію з трекера чи платіжки, починається з вебхука. Без перевірки підпису будь-хто зможе запустити вашого агента.',
          links:[
            {t:'Webhooks documentation',u:'https://docs.github.com/en/webhooks',k:'doc',s:'GitHub Docs'},
            {t:'Receive Stripe events in your webhook endpoint',u:'https://docs.stripe.com/webhooks',k:'doc',s:'Stripe Docs',w:'Еталонна документація вебхуків: підпис, повтори, ідемпотентність'},
            {t:'standard-webhooks/standard-webhooks',u:'https://github.com/standard-webhooks/standard-webhooks',k:'github',s:'GitHub',w:'Відкрита специфікація підпису й заголовків вебхуків'},
            {t:'ngrok documentation',u:'https://ngrok.com/docs',k:'doc',s:'ngrok Docs'}
          ]},
        {label:'Стрімінг: SSE, WebSockets, chunked',desc:'Сервер віддає відповідь частинами, не чекаючи кінця. Server-Sent Events як простий односторонній потік, WebSockets для двостороннього, NDJSON поверх chunked transfer.',why:'Відповідь моделі стрімиться токенами. Без стрімінгу користувач дивиться на порожній екран кілька секунд; MCP по HTTP теж використовує SSE.',
          links:[
            {t:'Server-sent events',u:'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events',k:'doc',s:'MDN'},
            {t:'Streaming Messages: Claude API',u:'https://docs.claude.com/en/docs/build-with-claude/streaming',k:'doc',s:'Anthropic Docs',w:'Як виглядає реальний SSE-потік від моделі'},
            {t:'Server-Sent Events Crash Course',u:'https://www.youtube.com/watch?v=4HlNv1qpZFY',k:'video',s:'YouTube · Hussein Nasser'},
            {t:'Server-Sent Events vs WebSockets',u:'https://www.freecodecamp.org/news/server-sent-events-vs-websockets/',k:'article',s:'freeCodeCamp'},
            {t:'Transfer-Encoding',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Headers/Transfer-Encoding',k:'doc',s:'MDN'}
          ],
          children:[
            {label:'SSE: EventSource і формат подій',desc:'Текстовий протокол поверх HTTP: рядки data:, event:, id:, автоматичне перепідключення на клієнті.',why:'Саме так SDK моделей віддають токени; знаючи формат, ви читаєте сирий потік curl-ом під час дебагу.',
              links:[
                {t:'Using server-sent events',u:'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events',k:'doc',s:'MDN'},
                {t:'HTML Standard: Server-sent events',u:'https://html.spec.whatwg.org/multipage/server-sent-events.html',k:'doc',s:'WHATWG'},
                {t:'EventSource',u:'https://developer.mozilla.org/en-US/docs/Web/API/EventSource',k:'doc',s:'MDN'}
              ]},
            {label:'WebSockets: коли двосторонній канал',desc:'Постійне з\'єднання для обміну повідомленнями в обидва боки; протокол upgrade, heartbeat, перепідключення.',why:'Голосові агенти і спільне редагування з AI потребують двостороннього каналу; для простого стрімінгу тексту SSE простіший.',
              links:[
                {t:'The WebSocket API (WebSockets)',u:'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',k:'doc',s:'MDN'},
                {t:'WebSockets in 100 Seconds & Beyond with Socket.io',u:'https://www.youtube.com/watch?v=1BfCnjr_Vjg',k:'video',s:'YouTube · Fireship'},
                {t:'Protocol upgrade mechanism',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/Protocol_upgrade_mechanism',k:'doc',s:'MDN'}
              ]}
          ]}
      ]},
    {label:'Бази даних',side:'left',desc:'Де живуть дані сервісу: PostgreSQL як основа, SQL, моделювання, індекси, транзакції, міграції, Redis для кешу й черг.',why:'RAG, логи прогонів агента, стан діалогів, embeddings: усе лягає в базу. Postgres із pgvector закриває перший векторний пошук без окремої системи.',
      links:[
        {t:'PostgreSQL Documentation',u:'https://www.postgresql.org/docs/current/',k:'doc',s:'PostgreSQL Docs'},
        {t:'PostgreSQL DBA Roadmap',u:'https://roadmap.sh/postgresql-dba',k:'article',s:'roadmap.sh'},
        {t:'Designing Data-Intensive Applications',u:'https://dataintensive.net/',k:'course',s:'Martin Kleppmann',w:'Книга про сховища, реплікацію й консистентність; обов\'язкове читання'},
        {t:'PostgreSQL in 100 Seconds',u:'https://www.youtube.com/watch?v=n2Fluyr3lbc',k:'video',s:'YouTube · Fireship'},
        {t:'7 Database Paradigms',u:'https://www.youtube.com/watch?v=W2Z7fbCLSTw',k:'video',s:'YouTube · Fireship'},
        {t:'Don\'t Do This',u:'https://wiki.postgresql.org/wiki/Don%27t_Do_This',k:'doc',s:'PostgreSQL Wiki',w:'Список типових помилок у схемі й типах даних'}
      ],
      children:[
        {label:'SQL: SELECT, JOIN, агрегації, CTE',desc:'Вибірка, обʼєднання таблиць, групування, підзапити, CTE (WITH), віконні функції, робота з JSONB.',why:'Агент пише запити, а перевіряєте їх ви. Аналітика по трейсах агента (середня вартість, частка помилок по версіях промпту) це віконні функції й агрегації.',
          links:[
            {t:'The SQL Language',u:'https://www.postgresql.org/docs/current/tutorial-sql.html',k:'doc',s:'PostgreSQL Docs'},
            {t:'Window Functions',u:'https://www.postgresql.org/docs/current/tutorial-window.html',k:'doc',s:'PostgreSQL Docs'},
            {t:'WITH Queries (Common Table Expressions)',u:'https://www.postgresql.org/docs/current/queries-with.html',k:'doc',s:'PostgreSQL Docs'},
            {t:'JSON Types',u:'https://www.postgresql.org/docs/current/datatype-json.html',k:'doc',s:'PostgreSQL Docs',w:'JSONB для сирих відповідей моделі й метаданих'},
            {t:'PostgreSQL Exercises',u:'https://pgexercises.com/',k:'course',s:'pgexercises.com'},
            {t:'SQLBolt',u:'https://sqlbolt.com/',k:'course',s:'sqlbolt.com'},
            {t:'SQL Explained in 100 Seconds',u:'https://www.youtube.com/watch?v=zsjvFFKOm3c',k:'video',s:'YouTube · Fireship'}
          ]},
        {label:'Моделювання: нормалізація, ключі, ORM',desc:'Таблиці, первинні й зовнішні ключі, constraints, коли нормалізувати, а коли денормалізувати; ORM (SQLAlchemy 2.0, Drizzle, Prisma) як шар між кодом і SQL.',why:'Схема бази живе довше за код. Погану схему агент не виправить, а лише обійде костилями; ORM з типами дає агенту контракт, якого він тримається.',
          links:[
            {t:'Constraints',u:'https://www.postgresql.org/docs/current/ddl-constraints.html',k:'doc',s:'PostgreSQL Docs'},
            {t:'Database normalization',u:'https://en.wikipedia.org/wiki/Database_normalization',k:'article',s:'Wikipedia'},
            {t:'SQLAlchemy 2.0: ORM Quick Start',u:'https://docs.sqlalchemy.org/en/20/orm/quickstart.html',k:'doc',s:'SQLAlchemy Docs'},
            {t:'SQLAlchemy: Asynchronous I/O (asyncio)',u:'https://docs.sqlalchemy.org/en/20/orm/extensions/asyncio.html',k:'doc',s:'SQLAlchemy Docs'},
            {t:'Drizzle ORM',u:'https://orm.drizzle.team/docs/overview',k:'doc',s:'Drizzle Docs',w:'TypeScript ORM, близький до SQL'},
            {t:'SQLModel',u:'https://sqlmodel.tiangolo.com/',k:'doc',s:'SQLModel Docs',w:'Pydantic плюс SQLAlchemy: одна модель для API і бази'}
          ]},
        {label:'Індекси і план запиту',desc:'B-tree, складені й часткові індекси, GIN для JSONB і повнотекстового пошуку, HNSW для векторів; EXPLAIN ANALYZE для читання плану виконання, pg_stat_statements для пошуку важких запитів.',why:'Логи трейсів агента ростуть швидко; без індексів пошук по ним стає неможливим. Векторний пошук без HNSW-індексу це повний перебір таблиці.',
          links:[
            {t:'Indexes',u:'https://www.postgresql.org/docs/current/indexes.html',k:'doc',s:'PostgreSQL Docs'},
            {t:'Use The Index, Luke',u:'https://use-the-index-luke.com/',k:'course',s:'Markus Winand',w:'Безкоштовна книга про індекси для розробників'},
            {t:'How do database indexes work?',u:'https://planetscale.com/blog/how-do-database-indexes-work',k:'article',s:'PlanetScale'},
            {t:'Using EXPLAIN',u:'https://www.postgresql.org/docs/current/using-explain.html',k:'doc',s:'PostgreSQL Docs'}
          ],
          children:[
            {label:'EXPLAIN ANALYZE і pg_stat_statements',desc:'Реальний план із часом і кількістю рядків на кожному кроці; статистика по всіх запитах сервера для пошуку найдорожчих.',why:'Коли агент каже «я оптимізував запит», єдиний доказ це план до і після.',
              links:[
                {t:'pg_stat_statements',u:'https://www.postgresql.org/docs/current/pgstatstatements.html',k:'doc',s:'PostgreSQL Docs'},
                {t:'explain.dalibo.com',u:'https://explain.dalibo.com/',k:'doc',s:'Dalibo',w:'Візуалізатор планів: вставте вивід EXPLAIN і бачите вузьке місце'},
                {t:'explain.depesz.com',u:'https://explain.depesz.com/',k:'doc',s:'depesz'}
              ]}
          ]},
        {label:'Транзакції й ізоляція',desc:'ACID, рівні ізоляції, MVCC, блокування рядків, дедлоки, SELECT ... FOR UPDATE SKIP LOCKED для черг у Postgres.',why:'Агент, що пише в базу паралельно з користувачем, швидко виявляє, де ви не подумали про транзакції. Черга задач агента на Postgres стоїть на SKIP LOCKED.',
          links:[
            {t:'Transactions',u:'https://www.postgresql.org/docs/current/tutorial-transactions.html',k:'doc',s:'PostgreSQL Docs'},
            {t:'Transaction Isolation',u:'https://www.postgresql.org/docs/current/transaction-iso.html',k:'doc',s:'PostgreSQL Docs'},
            {t:'Explicit Locking',u:'https://www.postgresql.org/docs/current/explicit-locking.html',k:'doc',s:'PostgreSQL Docs'},
            {t:'Concurrency Control (MVCC)',u:'https://www.postgresql.org/docs/current/mvcc.html',k:'doc',s:'PostgreSQL Docs'}
          ]},
        {label:'Міграції схеми',desc:'Версіоновані зміни структури бази, що застосовуються автоматично при деплої: Alembic для SQLAlchemy, Drizzle Kit і Prisma Migrate у TypeScript, Atlas і pgroll як незалежні інструменти.',why:'Згенеровані агентом зміни схеми мають проходити тим самим шляхом, що й людські: через міграцію в репо, ревʼю і CI.',
          links:[
            {t:'Alembic: Tutorial',u:'https://alembic.sqlalchemy.org/en/latest/tutorial.html',k:'doc',s:'Alembic Docs'},
            {t:'Evolutionary Database Design',u:'https://martinfowler.com/articles/evodb.html',k:'article',s:'Martin Fowler'},
            {t:'Safely making database schema changes',u:'https://planetscale.com/blog/safely-making-database-schema-changes',k:'article',s:'PlanetScale',w:'Expand/contract: як міняти схему без простою'},
            {t:'Atlas',u:'https://atlasgo.io/',k:'doc',s:'Atlas Docs',w:'Міграції як код з перевіркою небезпечних змін у CI'},
            {t:'xataio/pgroll',u:'https://github.com/xataio/pgroll',k:'github',s:'GitHub',w:'Zero-downtime міграції для Postgres'}
          ]},
        {label:'PostgreSQL: pgvector, FTS, pooling',type:'alt',desc:'Найпоширеніша реляційна база для сервісів. Розширення pgvector для векторного пошуку, вбудований full-text search, JSONB, партиціювання, PgBouncer для пулу з\'єднань.',why:'Для першого RAG не потрібна окрема векторна база: вистачить Postgres з pgvector. Гібридний пошук (вектор плюс FTS) теж робиться в одній базі.',
          links:[
            {t:'pgvector/pgvector',u:'https://github.com/pgvector/pgvector',k:'github',s:'GitHub',w:'Векторні типи, HNSW і IVFFlat індекси для Postgres'},
            {t:'Full Text Search',u:'https://www.postgresql.org/docs/current/textsearch.html',k:'doc',s:'PostgreSQL Docs'},
            {t:'Table Partitioning',u:'https://www.postgresql.org/docs/current/ddl-partitioning.html',k:'doc',s:'PostgreSQL Docs',w:'Для таблиць трейсів, що ростуть на мільйони рядків'},
            {t:'I replaced my entire tech stack with Postgres...',u:'https://www.youtube.com/watch?v=3JW732GrMdg',k:'video',s:'YouTube · Fireship'},
            {t:'dhamaniasad/awesome-postgres',u:'https://github.com/dhamaniasad/awesome-postgres',k:'github',s:'GitHub'}
          ],
          children:[
            {label:'pgvector: embeddings у Postgres',desc:'Тип vector, оператори відстані (cosine, L2, inner product), індекси HNSW та IVFFlat, гібридний пошук з FTS.',why:'Перший RAG живе тут: одна транзакція і для документа, і для його embedding.',
              links:[
                {t:'pgvector/pgvector',u:'https://github.com/pgvector/pgvector',k:'github',s:'GitHub'},
                {t:'pgvector/pgvector-python',u:'https://github.com/pgvector/pgvector-python',k:'github',s:'GitHub',w:'Інтеграція з SQLAlchemy, Django, psycopg, asyncpg'},
                {t:'Redis as a vector database',u:'https://redis.io/docs/latest/develop/get-started/vector-database/',k:'doc',s:'Redis Docs',w:'Альтернатива, коли вектори потрібні в кеші'}
              ]},
            {label:'Connection pooling: PgBouncer',desc:'Пул з\'єднань між сервісом і базою: Postgres погано переносить тисячі прямих конекшенів, особливо від serverless і воркерів.',why:'Паралельні воркери агента відкривають з\'єднання лавиною; без пулу база падає раніше за модель.',
              links:[
                {t:'PgBouncer',u:'https://www.pgbouncer.org/',k:'doc',s:'pgbouncer.org'},
                {t:'asyncpg',u:'https://magicstack.github.io/asyncpg/current/',k:'doc',s:'asyncpg Docs',w:'Швидкий асинхронний драйвер із власним пулом'},
                {t:'Psycopg 3',u:'https://www.psycopg.org/psycopg3/docs/',k:'doc',s:'Psycopg Docs'}
              ]}
          ]},
        {label:'Redis або інший кеш',type:'optional',desc:'Сховище ключ-значення в памʼяті для кешу з TTL, сесій, лімітів, розподілених блокувань і простих черг (Streams); Valkey як відкритий форк.',why:'Кеш відповідей моделі на однакові запити заощаджує гроші і секунди; rate limiter і черга задач агента теж часто живуть у Redis.',
          links:[
            {t:'Redis documentation',u:'https://redis.io/docs/latest/',k:'doc',s:'Redis Docs'},
            {t:'Understand Redis data types',u:'https://redis.io/docs/latest/develop/data-types/',k:'doc',s:'Redis Docs'},
            {t:'Redis Streams',u:'https://redis.io/docs/latest/develop/data-types/streams/',k:'doc',s:'Redis Docs',w:'Лог подій і черга з consumer groups'},
            {t:'Distributed Locks with Redis',u:'https://redis.io/docs/latest/develop/use/patterns/distributed-locks/',k:'doc',s:'Redis Docs'},
            {t:'Redis in 100 Seconds',u:'https://www.youtube.com/watch?v=G1rOthIU-uo',k:'video',s:'YouTube · Fireship'},
            {t:'Valkey',u:'https://valkey.io/',k:'doc',s:'valkey.io',w:'Відкритий форк Redis під Linux Foundation'}
          ]}
      ]},
    {label:'Тестування',side:'right',desc:'Автоматична перевірка, що код робить те, що треба, і не зламався після змін: unit, інтеграційні, контрактні, E2E; pytest і vitest як інструменти; TDD як метод.',why:'Test-first з агентами означає, що тест пишеться до коду і стає критерієм готовності. Без звички писати тести метод роботи з агентами не запрацює: нема чим перевірити, що агент зробив.',
      links:[
        {t:'pytest documentation',u:'https://docs.pytest.org/en/stable/',k:'doc',s:'pytest Docs'},
        {t:'Vitest: Getting Started',u:'https://vitest.dev/guide/',k:'doc',s:'Vitest Docs'},
        {t:'The Practical Test Pyramid',u:'https://martinfowler.com/articles/practical-test-pyramid.html',k:'article',s:'martinfowler.com',w:'Який тип тесту що ловить і скільки їх треба'},
        {t:'Software Engineering at Google: Testing Overview',u:'https://abseil.io/resources/swe-book/html/ch11.html',k:'course',s:'Google'},
        {t:'Test-Driven Development // Fun TDD Introduction with JavaScript',u:'https://www.youtube.com/watch?v=Jv2uxzhPFl4',k:'video',s:'YouTube · Fireship'},
        {t:'Всього 7% розробників довіряють AI важливі рішення',u:'https://t.me/beerphp/225',k:'post',y:2026,s:'beerphp',w:'Довіра до AI росте там, де результат легко перевірити: тести і є ця перевірка'}
      ],
      children:[
        {label:'Unit-тести: pytest, vitest',desc:'Перевірка однієї функції чи класу в ізоляції. pytest з fixtures, parametrize і markers у Python; vitest, jest або вбудований node:test у TypeScript.',why:'Згенерований агентом код без тестів неможливо прийняти в ревʼю: нема чим довести, що він працює. Параметризований тест на десять кейсів пишеться за хвилину.',
          links:[
            {t:'pytest: How to use fixtures',u:'https://docs.pytest.org/en/stable/how-to/fixtures.html',k:'doc',s:'pytest Docs'},
            {t:'pytest: How to parametrize fixtures and test functions',u:'https://docs.pytest.org/en/stable/how-to/parametrize.html',k:'doc',s:'pytest Docs'},
            {t:'pytest: Good Integration Practices',u:'https://docs.pytest.org/en/stable/explanation/goodpractices.html',k:'doc',s:'pytest Docs',w:'Структура тестів у проєкті'},
            {t:'unittest: Unit testing framework',u:'https://docs.python.org/3/library/unittest.html',k:'doc',s:'Python Docs'},
            {t:'Node.js: Test runner',u:'https://nodejs.org/api/test.html',k:'doc',s:'Node.js Docs'},
            {t:'How To Write Unit Tests For Existing Python Code // Part 1 of 2',u:'https://www.youtube.com/watch?v=ULxMQ57engo',k:'video',s:'YouTube · ArjanCodes'},
            {t:'Software Engineering at Google: Unit Testing',u:'https://abseil.io/resources/swe-book/html/ch12.html',k:'course',s:'Google'}
          ]},
        {label:'Інтеграційні тести',desc:'Перевірка кількох компонентів разом: сервіс плюс база, сервіс плюс зовнішнє API. Реальний Postgres у контейнері через Testcontainers або Compose замість SQLite-замінника.',why:'Більшість поломок AI-фіч живуть на стиках: між вашим кодом, моделлю і базою. Тест на реальній базі ловить проблеми з JSONB і міграціями, яких unit-тест не бачить.',
          links:[
            {t:'IntegrationTest',u:'https://martinfowler.com/bliki/IntegrationTest.html',k:'article',s:'martinfowler.com'},
            {t:'FastAPI: Testing',u:'https://fastapi.tiangolo.com/tutorial/testing/',k:'doc',s:'FastAPI Docs',w:'TestClient і override залежностей'},
            {t:'pytest-asyncio',u:'https://pytest-asyncio.readthedocs.io/en/latest/',k:'doc',s:'pytest-asyncio Docs'},
            {t:'Software Engineering at Google: Larger Testing',u:'https://abseil.io/resources/swe-book/html/ch14.html',k:'course',s:'Google'}
          ],
          children:[
            {label:'Testcontainers',desc:'Бібліотека, що піднімає Postgres, Redis чи будь-який Docker-образ на час тесту і прибирає після.',why:'Інтеграційний тест запускається однією командою і в CI, і на ноутбуці; агент теж може його прогнати сам.',
              links:[
                {t:'Testcontainers for Python',u:'https://testcontainers-python.readthedocs.io/',k:'doc',s:'Testcontainers Docs'},
                {t:'Getting started with Testcontainers for Python',u:'https://testcontainers.com/guides/getting-started-with-testcontainers-for-python/',k:'doc',s:'testcontainers.com'},
                {t:'Testcontainers for Node.js',u:'https://node.testcontainers.org/',k:'doc',s:'Testcontainers Docs'}
              ]}
          ]},
        {label:'Моки і фікстури',desc:'Підміна зовнішніх залежностей контрольованими відповідями; підготовка стану перед тестом. Для HTTP: respx або pytest-httpx у Python, msw або nock у Node; VCR-касети для запису реальних відповідей.',why:'Тести не мають ходити в реальне API моделі: дорого, повільно і недетерміновано. Відповідь моделі мокається або записується один раз у касету.',
          links:[
            {t:'unittest.mock',u:'https://docs.python.org/3/library/unittest.mock.html',k:'doc',s:'Python Docs'},
            {t:'pytest-mock',u:'https://pytest-mock.readthedocs.io/en/latest/',k:'doc',s:'pytest-mock Docs'},
            {t:'Mocks Aren\'t Stubs',u:'https://martinfowler.com/articles/mocksArentStubs.html',k:'article',s:'martinfowler.com'},
            {t:'Vitest: Mocking',u:'https://vitest.dev/guide/mocking.html',k:'doc',s:'Vitest Docs'}
          ],
          children:[
            {label:'HTTP-моки: respx, pytest-httpx, msw',desc:'Перехоплення запитів httpx або fetch на рівні транспорту з підготовленими відповідями; vcrpy записує реальні відповіді у касети.',why:'Мок відповіді моделі з реальним JSON із касети надійніший за вигаданий словник.',
              links:[
                {t:'RESPX',u:'https://lundberg.github.io/respx/',k:'doc',s:'respx Docs'},
                {t:'pytest_httpx',u:'https://colin-b.github.io/pytest_httpx/',k:'doc',s:'pytest_httpx Docs'},
                {t:'vcrpy',u:'https://vcrpy.readthedocs.io/en/latest/',k:'doc',s:'vcrpy Docs'},
                {t:'mswjs/msw',u:'https://github.com/mswjs/msw',k:'github',s:'GitHub',w:'Mock Service Worker: перехоплення fetch у Node і браузері'},
                {t:'nock/nock',u:'https://github.com/nock/nock',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'TDD: тест до коду',desc:'Цикл червоний-зелений-рефакторинг: спершу тест, що падає, потім мінімальний код, потім чистка.',why:'Саме так ставиться задача агенту: ось тест, зроби його зеленим. Anthropic описує це як один із найефективніших воркфлоу для Claude Code.',
          links:[
            {t:'TestDrivenDevelopment',u:'https://martinfowler.com/bliki/TestDrivenDevelopment.html',k:'article',s:'martinfowler.com'},
            {t:'Test-Driven Development with Python (Obey the Testing Goat)',u:'https://www.obeythetestinggoat.com/',k:'course',s:'Harry Percival',w:'Безкоштовна книга про TDD у вебі на Python'},
            {t:'Modern Test-Driven Development in Python',u:'https://testdriven.io/blog/modern-tdd/',k:'article',s:'TestDriven.io'},
            {t:'Claude Code: Best practices for agentic coding',u:'https://www.anthropic.com/engineering/claude-code-best-practices',k:'article',y:2025,s:'Anthropic Engineering',w:'Розділ про test-driven воркфлоу з агентом'},
            {t:'Agentic Engineering: Мій ідеальний AI Workflow розробки',u:'https://www.youtube.com/watch?v=4uLqamwjl-w',k:'video',y:2026,s:'BeerCode'}
          ]},
        {label:'Контрактні тести API',type:'optional',desc:'Перевірка, що відповідь ендпоінта відповідає задокументованій схемі: Schemathesis генерує тести з OpenAPI, Pact для контрактів між сервісами.',why:'Та сама ідея лягає в основу evals: відповідь моделі перевіряється проти схеми. Якщо агент змінив API, контрактний тест скаже про це раніше за клієнта.',
          links:[
            {t:'ContractTest',u:'https://martinfowler.com/bliki/ContractTest.html',k:'article',s:'martinfowler.com'},
            {t:'Schemathesis',u:'https://schemathesis.readthedocs.io/en/stable/',k:'doc',s:'Schemathesis Docs',w:'Property-based тести з вашого OpenAPI-файлу'},
            {t:'Pact Docs',u:'https://docs.pact.io/',k:'doc',s:'Pact Docs'},
            {t:'Hypothesis',u:'https://hypothesis.readthedocs.io/en/latest/',k:'doc',s:'Hypothesis Docs',w:'Property-based тестування для Python'}
          ]},
        {label:'Покриття і що ним не міряти',type:'optional',desc:'Відсоток рядків, які виконались під тестами, і чому це не показник якості тестів; mutation testing як чесніша міра.',why:'Агент легко нагенерує тести на 100% покриття, які нічого не перевіряють. Mutation testing ловить саме такі.',
          links:[
            {t:'Coverage.py',u:'https://coverage.readthedocs.io/en/latest/',k:'doc',s:'coverage.py Docs'},
            {t:'Code Coverage Best Practices',u:'https://testing.googleblog.com/2020/08/code-coverage-best-practices.html',k:'article',s:'Google Testing Blog'},
            {t:'mutmut',u:'https://mutmut.readthedocs.io/en/latest/',k:'doc',s:'mutmut Docs',w:'Mutation testing для Python'},
            {t:'Stryker Mutator',u:'https://stryker-mutator.io/',k:'doc',s:'Stryker Docs',w:'Mutation testing для JS/TS'}
          ]},
        {label:'E2E і браузерні тести: Playwright',type:'optional',desc:'Автоматизація браузера для сценаріїв від початку до кінця; Playwright для Python і TypeScript, Playwright MCP, щоб агент сам клікав і перевіряв UI.',why:'Коли агент каже «фронтенд працює», Playwright дає йому можливість довести це скріншотом і зеленим прогоном.',
          links:[
            {t:'Playwright: Installation',u:'https://playwright.dev/docs/intro',k:'doc',s:'Playwright Docs'},
            {t:'Playwright for Python',u:'https://playwright.dev/python/docs/intro',k:'doc',s:'Playwright Docs'},
            {t:'microsoft/playwright-mcp',u:'https://github.com/microsoft/playwright-mcp',k:'github',s:'GitHub',w:'MCP-сервер, через який агент керує браузером'},
            {t:'Playwright: Test Agents',u:'https://playwright.dev/docs/test-agents',k:'doc',y:2025,s:'Playwright Docs',w:'Агенти planner, generator, healer для написання тестів'}
          ]}
      ]},
    {label:'Git і робота в команді',side:'left',desc:'Система контролю версій і процес навколо неї: гілки, пул-реквести, ревʼю, атомарні коміти, hooks, worktrees для паралельних сесій агентів.',why:'Диф агента ревʼюється як чужий пул-реквест. Для цього треба вільно читати дифи, володіти гілками й уміти привести історію до ладу перед мерджем.',
      links:[
        {t:'Pro Git',u:'https://git-scm.com/book/en/v2',k:'course',s:'git-scm.com',w:'Безкоштовна книга; розділи 2, 3 і 7 покривають усе потрібне'},
        {t:'Learn Git Branching',u:'https://learngitbranching.js.org/',k:'course',s:'learngitbranching.js.org',w:'Інтерактивний тренажер гілок і rebase'},
        {t:'Oh Shit, Git!?!',u:'https://ohshitgit.com/',k:'article',s:'Katie Sylor-Miller',w:'Як вилізти з типових ситуацій'},
        {t:'Git Explained in 100 Seconds',u:'https://www.youtube.com/watch?v=hwP7WQkmECE',k:'video',s:'YouTube · Fireship'},
        {t:'13 Advanced (but useful) Git Techniques and Shortcuts',u:'https://www.youtube.com/watch?v=ecK3EnyGD8o',k:'video',s:'YouTube · Fireship'},
        {t:'Бачу одну й ту саму картину в різних командах',u:'https://t.me/beerphp/226',k:'post',y:2026,s:'beerphp',w:'PR більшають, ревʼю не встигає: що з цим робити команді'}
      ],
      children:[
        {label:'Гілки, merge, rebase',desc:'Паралельні лінії розробки і два способи їх обʼєднати. Коли переписувати історію, а коли ні; trunk-based development з короткими гілками.',why:'Агент працює в окремій гілці або worktree; ви маєте впевнено забрати або відкинути його зміни і не загубити своїх.',
          links:[
            {t:'Git Branching - Branches in a Nutshell',u:'https://git-scm.com/book/en/v2/Git-Branching-Branches-in-a-Nutshell',k:'doc',s:'Pro Git'},
            {t:'Git Branching - Rebasing',u:'https://git-scm.com/book/en/v2/Git-Branching-Rebasing',k:'doc',s:'Pro Git'},
            {t:'Patterns for Managing Source Code Branches',u:'https://martinfowler.com/articles/branching-patterns.html',k:'article',s:'Martin Fowler'},
            {t:'Trunk Based Development',u:'https://trunkbaseddevelopment.com/',k:'doc',s:'trunkbaseddevelopment.com'},
            {t:'Git Tutorial for Beginners: Command-Line Fundamentals',u:'https://www.youtube.com/watch?v=HVsySz-h9r4',k:'video',s:'YouTube · Corey Schafer'}
          ]},
        {label:'Пул-реквести і ревʼю коду',desc:'Опис зміни, обговорення в коментарях, критерії прийняття, малі PR, CODEOWNERS і захищені гілки; gh CLI для роботи з PR з термінала.',why:'Головна навичка роботи з агентами: прочитати чужий диф і знайти, де він неправий. Великий PR від агента не ревʼюється, тому задачі ріжуться дрібніше.',
          links:[
            {t:'About pull requests',u:'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests',k:'doc',s:'GitHub Docs'},
            {t:'About pull request reviews',u:'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/about-pull-request-reviews',k:'doc',s:'GitHub Docs'},
            {t:'GitHub CLI manual',u:'https://cli.github.com/manual/',k:'doc',s:'GitHub CLI',w:'gh pr create / view / review: агент теж користується саме цим'},
            {t:'About code owners',u:'https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners',k:'doc',s:'GitHub Docs'},
            {t:'About protected branches',u:'https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches/about-protected-branches',k:'doc',s:'GitHub Docs'},
            {t:'How to Do Code Reviews Like a Human',u:'https://mtlynch.io/code-review-love/',k:'article',s:'Michael Lynch'}
          ],
          children:[
            {label:'Google Engineering Practices',desc:'Відкритий гайд Google для рецензента й автора: що шукати в ревʼю, швидкість, як писати малі зміни.',why:'Готовий стандарт ревʼю, який можна дати і команді, і агенту-рецензенту як інструкцію.',
              links:[
                {t:'Code Review Developer Guide',u:'https://google.github.io/eng-practices/review/',k:'doc',s:'Google'},
                {t:'How to do a code review',u:'https://google.github.io/eng-practices/review/reviewer/',k:'doc',s:'Google'},
                {t:'Small CLs',u:'https://google.github.io/eng-practices/review/developer/small-cls.html',k:'doc',s:'Google',w:'Чому малі зміни ревʼюються швидше й краще'}
              ]}
          ]},
        {label:'Атомарні коміти, історія, версії',desc:'Один коміт дорівнює одна логічна зміна з осмисленим повідомленням; Conventional Commits, interactive rebase для чистки, semver і changelog для релізів.',why:'Коміти агента часто або величезні, або безглузді. Ваша робота привести їх до ладу перед мерджем; Conventional Commits дають агенту чіткий формат.',
          links:[
            {t:'How to Write a Git Commit Message',u:'https://cbea.ms/git-commit/',k:'article',s:'Chris Beams'},
            {t:'Conventional Commits',u:'https://www.conventionalcommits.org/en/v1.0.0/',k:'doc',s:'conventionalcommits.org'},
            {t:'Git Tools - Rewriting History',u:'https://git-scm.com/book/en/v2/Git-Tools-Rewriting-History',k:'doc',s:'Pro Git'},
            {t:'Keep a Changelog',u:'https://keepachangelog.com/en/1.1.0/',k:'doc',s:'keepachangelog.com'},
            {t:'googleapis/release-please',u:'https://github.com/googleapis/release-please',k:'github',s:'GitHub',w:'Автоматичні релізи й changelog з Conventional Commits'}
          ]},
        {label:'Розвʼязання конфліктів',desc:'Коли дві гілки змінили один рядок: читання маркерів конфлікту, вибір правильного варіанту, rerere, git bisect для пошуку поломки.',why:'Кілька агентів у паралельних гілках означає більше конфліктів, ніж ви звикли. Агент може їх розвʼязати, але перевіряти результат мусите ви.',
          links:[
            {t:'Resolving a merge conflict using the command line',u:'https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/addressing-merge-conflicts/resolving-a-merge-conflict-using-the-command-line',k:'doc',s:'GitHub Docs'},
            {t:'Git Tools - Advanced Merging',u:'https://git-scm.com/book/en/v2/Git-Tools-Advanced-Merging',k:'doc',s:'Pro Git'},
            {t:'git-bisect',u:'https://git-scm.com/docs/git-bisect',k:'doc',s:'git-scm.com',w:'Бінарний пошук коміту, який зламав тест'},
            {t:'git-tips/tips',u:'https://github.com/git-tips/tips',k:'github',s:'GitHub'}
          ]},
        {label:'Hooks, .gitignore, секрети поза репо',desc:'Автоматичні перевірки перед комітом (pre-commit, husky); що ніколи не комітиться; сканування секретів gitleaks і push protection на GitHub.',why:'Агент може закомітити .env з ключем моделі. Pre-commit hook зупинить це раніше за вас, а push protection на сервері стане другою лінією.',
          links:[
            {t:'Customizing Git - Git Hooks',u:'https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks',k:'doc',s:'Pro Git'},
            {t:'Ignoring files',u:'https://docs.github.com/en/get-started/git-basics/ignoring-files',k:'doc',s:'GitHub Docs'},
            {t:'github/gitignore',u:'https://github.com/github/gitignore',k:'github',s:'GitHub',w:'Готові шаблони .gitignore для Python, Node і решти'},
            {t:'typicode/husky',u:'https://github.com/typicode/husky',k:'github',s:'GitHub'}
          ],
          children:[
            {label:'pre-commit, gitleaks, push protection',desc:'Фреймворк pre-commit запускає ruff, mypy і gitleaks перед кожним комітом; GitHub блокує push із секретом.',why:'Три рівні захисту від ключа в репо: локальний hook, сканер, сервер.',
              links:[
                {t:'pre-commit',u:'https://pre-commit.com/',k:'doc',s:'pre-commit.com'},
                {t:'gitleaks/gitleaks',u:'https://github.com/gitleaks/gitleaks',k:'github',s:'GitHub'},
                {t:'About push protection',u:'https://docs.github.com/en/code-security/secret-scanning/introduction/about-push-protection',k:'doc',s:'GitHub Docs'},
                {t:'trufflesecurity/trufflehog',u:'https://github.com/trufflesecurity/trufflehog',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Worktrees і паралельні сесії агентів',desc:'git worktree дає кілька робочих копій одного репо в різних каталогах; кожен агент працює у своїй гілці й каталозі, не заважаючи іншим.',why:'Три-пʼять паралельних сесій Claude Code у власних worktree це найбільший приріст швидкості за оцінкою Anthropic; без розуміння worktree ви плутаєтесь у змінах.',
          links:[
            {t:'git-worktree',u:'https://git-scm.com/docs/git-worktree',k:'doc',s:'git-scm.com'},
            {t:'Claude Code: Common workflows',u:'https://code.claude.com/docs/en/common-workflows',k:'doc',s:'Claude Code Docs',w:'Розділ про паралельні сесії з git worktrees'},
            {t:'Claude Code power user tips',u:'https://support.claude.com/en/articles/14554000-claude-code-power-user-tips',k:'doc',s:'Claude Help Center'},
            {t:'Mastering Claude Code in 30 minutes',u:'https://www.youtube.com/watch?v=6eBSHbLKuN0',k:'video',y:2025,s:'YouTube · Anthropic'},
            {t:'jj-vcs/jj',u:'https://github.com/jj-vcs/jj',k:'github',s:'GitHub',w:'Jujutsu: сумісна з Git VCS, зручна для багатьох паралельних змін'}
          ]}
      ]},
    {label:'Linux і термінал',side:'right',desc:'Командний рядок, файлова система, процеси, права, SSH, змінні середовища, cron і systemd, базова мережа і TLS.',why:'Агенти для кодингу живуть у терміналі і виконують команди. Щоб перевірити їхні дії і дозволити лише потрібне, треба читати ці команди вільно. Ваш власний агент на VPS теж стоїть на цьому.',
      links:[
        {t:'Linux Roadmap',u:'https://roadmap.sh/linux',k:'article',s:'roadmap.sh'},
        {t:'The Linux Command Line',u:'https://linuxcommand.org/tlcl.php',k:'course',s:'William Shotts',w:'Безкоштовна книга від нуля до скриптів'},
        {t:'The Missing Semester: Course overview + the shell',u:'https://missing.csail.mit.edu/2020/course-shell/',k:'course',s:'MIT'},
        {t:'Linux in 100 Seconds',u:'https://www.youtube.com/watch?v=rrB13utjYV4',k:'video',s:'YouTube · Fireship'},
        {t:'AI-асистент 24/7: Claude Code + VPS + Telegram',u:'https://www.youtube.com/watch?v=Nioa8ZBzDqE',k:'video',y:2026,s:'BeerCode'},
        {t:'Як підняти свого персонального асистента claude + telegram',u:'https://t.me/beerphp/151',k:'post',y:2026,s:'beerphp'},
        {t:'jlevy/the-art-of-command-line',u:'https://github.com/jlevy/the-art-of-command-line',k:'github',s:'GitHub'}
      ],
      children:[
        {label:'Shell: pipes, grep, find, sed, jq',desc:'Склеювання команд через конвеєр, пошук у файлах і по дереву (grep, ripgrep, find, fd), потокові заміни sed, jq для JSON, shellcheck для скриптів.',why:'Половина дій агента в терміналі саме це. Ви маєте бачити, що він робить, не запускаючи; jq читає JSON-відповіді API і логи трейсів.',
          links:[
            {t:'Bash Reference Manual',u:'https://www.gnu.org/software/bash/manual/',k:'doc',s:'GNU'},
            {t:'BashGuide',u:'https://mywiki.wooledge.org/BashGuide',k:'doc',s:'Greg\'s Wiki',w:'Найкращий безкоштовний гайд по Bash без міфів'},
            {t:'jq Manual',u:'https://jqlang.org/manual/',k:'doc',s:'jqlang.org'},
            {t:'BurntSushi/ripgrep',u:'https://github.com/BurntSushi/ripgrep',k:'github',s:'GitHub',w:'Швидкий grep, яким користуються агенти для пошуку по коду'},
            {t:'explainshell.com',u:'https://explainshell.com/',k:'doc',s:'explainshell.com',w:'Вставте команду агента і побачите, що робить кожен прапорець'},
            {t:'Bash in 100 Seconds',u:'https://www.youtube.com/watch?v=I4EWvMFj37g',k:'video',s:'YouTube · Fireship'},
            {t:'Як працює coding assistants під капотом',u:'https://t.me/beerphp/148',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Процеси, сигнали, порти',desc:'Хто що запустив (ps, top), як зупинити (kill, сигнали SIGTERM і SIGKILL), який процес слухає порт (ss, lsof), фонові процеси й tmux.',why:'Завислий MCP-сервер або два поллери одного бота знаходяться саме цими командами. Graceful shutdown сервісу починається з обробки SIGTERM.',
          links:[
            {t:'signal(7)',u:'https://man7.org/linux/man-pages/man7/signal.7.html',k:'doc',s:'man7.org'},
            {t:'ps(1)',u:'https://man7.org/linux/man-pages/man1/ps.1.html',k:'doc',s:'man7.org'},
            {t:'ss(8)',u:'https://man7.org/linux/man-pages/man8/ss.8.html',k:'doc',s:'man7.org',w:'Хто слухає порт: ss -tlnp'},
            {t:'tmux wiki',u:'https://github.com/tmux/tmux/wiki',k:'doc',s:'GitHub',w:'Сесії, що живуть після відключення SSH'},
            {t:'Linux Directories Explained in 100 Seconds',u:'https://www.youtube.com/watch?v=42iQKuQodW4',k:'video',s:'YouTube · Fireship'}
          ]},
        {label:'Права доступу і користувачі',desc:'chmod, chown, sudo, окремі користувачі для сервісів, мінімальні права на файли з секретами.',why:'Агент має працювати під користувачем з мінімальними правами, а не під вашим; .env з ключем має права 600.',
          links:[
            {t:'File permissions and attributes',u:'https://wiki.archlinux.org/title/File_permissions_and_attributes',k:'doc',s:'ArchWiki'},
            {t:'Users and groups',u:'https://wiki.archlinux.org/title/Users_and_groups',k:'doc',s:'ArchWiki'},
            {t:'Sudo',u:'https://wiki.archlinux.org/title/Sudo',k:'doc',s:'ArchWiki'},
            {t:'Initial Server Setup with Ubuntu',u:'https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu',k:'article',s:'DigitalOcean',w:'Новий користувач, sudo, firewall на свіжому сервері'}
          ]},
        {label:'SSH і ключі',desc:'Безпечний доступ до віддаленої машини, ключі замість паролів, ssh_config з alias-ами, ssh-agent і agent forwarding, порт-форвардинг.',why:'Деплой, доступ до сервера з логами, робота агента на віддаленій машині. Ключ без passphrase на ноутбуці це ключ від проду.',
          links:[
            {t:'OpenSSH',u:'https://wiki.archlinux.org/title/OpenSSH',k:'doc',s:'ArchWiki'},
            {t:'ssh_config(5)',u:'https://man.openbsd.org/ssh_config',k:'doc',s:'OpenBSD manual'},
            {t:'Connecting to GitHub with SSH',u:'https://docs.github.com/en/authentication/connecting-to-github-with-ssh',k:'doc',s:'GitHub Docs'},
            {t:'How To Set Up SSH Keys on Ubuntu 22.04',u:'https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-22-04',k:'article',s:'DigitalOcean'},
            {t:'Learn SSH In 6 Minutes - Beginners Guide to SSH Tutorial',u:'https://www.youtube.com/watch?v=v45p_kJV9i4',k:'video',s:'YouTube · Code With Bubb'}
          ]},
        {label:'Змінні середовища і .env',desc:'Конфігурація через середовище, окремі значення для dev і prod, .env лише локально, direnv для автозавантаження по каталогах.',why:'Ключі моделей живуть лише у змінних середовища, ніколи в коді й ніколи в репо.',
          links:[
            {t:'The Twelve-Factor App: Config',u:'https://12factor.net/config',k:'article',s:'12factor.net'},
            {t:'direnv',u:'https://direnv.net/',k:'doc',s:'direnv.net'},
            {t:'motdotla/dotenv',u:'https://github.com/motdotla/dotenv',k:'github',s:'GitHub'},
            {t:'Pydantic: Settings Management',u:'https://docs.pydantic.dev/latest/concepts/pydantic_settings/',k:'doc',s:'Pydantic Docs'}
          ]},
        {label:'cron і systemd',type:'optional',desc:'Запуск за розкладом (cron, systemd timers) і сервіси, що піднімаються самі після перезавантаження і перезапускаються після падіння.',why:'Агент, який «працює без щоденного нагляду», часто є саме cron-задачею або systemd-сервісом на VPS за кілька доларів.',
          links:[
            {t:'systemd',u:'https://wiki.archlinux.org/title/Systemd',k:'doc',s:'ArchWiki'},
            {t:'systemd.service',u:'https://www.freedesktop.org/software/systemd/man/latest/systemd.service.html',k:'doc',s:'freedesktop.org'},
            {t:'Systemd/Timers',u:'https://wiki.archlinux.org/title/Systemd/Timers',k:'doc',s:'ArchWiki'},
            {t:'Cron',u:'https://wiki.archlinux.org/title/Cron',k:'doc',s:'ArchWiki'},
            {t:'crontab guru',u:'https://crontab.guru/',k:'doc',s:'crontab.guru'},
            {t:'Setting up a production ready VPS is a lot easier than I thought.',u:'https://www.youtube.com/watch?v=F-9KWQByeU0',k:'video',s:'YouTube · Dreams of Code'}
          ]},
        {label:'Мережа: curl, DNS, TLS, reverse proxy',desc:'curl і httpie для запитів руками, DNS і записи, TLS-сертифікати через Let\'s Encrypt, Caddy або nginx перед сервісом.',why:'Вебхук не доходить, сертифікат протух, MCP-сервер за проксі не бачить заголовків: усе це дебажиться curl-ом і знанням, як працює TLS.',
          links:[
            {t:'curl tutorial',u:'https://curl.se/docs/manual.html',k:'doc',s:'curl.se'},
            {t:'HTTPie CLI documentation',u:'https://httpie.io/docs/cli',k:'doc',s:'HTTPie Docs'},
            {t:'How It Works: Let\'s Encrypt',u:'https://letsencrypt.org/how-it-works/',k:'doc',s:'Let\'s Encrypt'},
            {t:'Caddy documentation',u:'https://caddyserver.com/docs/',k:'doc',s:'Caddy Docs',w:'Reverse proxy з автоматичним HTTPS в одному рядку конфігу'},
            {t:'Beginner\'s Guide: nginx',u:'https://nginx.org/en/docs/beginners_guide.html',k:'doc',s:'nginx.org'},
            {t:'Transport Layer Security',u:'https://developer.mozilla.org/en-US/docs/Web/Security/Transport_Layer_Security',k:'doc',s:'MDN'}
          ]}
      ]},
    {label:'Docker і контейнери',side:'left',desc:'Пакування сервісу разом із залежностями в образ, що однаково запускається де завгодно: Dockerfile, шари, Compose для локального стенду, безпека образу, dev containers і sandbox для агентів.',why:'Деплой майже завжди іде через контейнери. Агента теж краще запускати в контейнері чи sandbox, щоб обмежити, що він може зачепити.',
      links:[
        {t:'Docker Docs',u:'https://docs.docker.com/',k:'doc',s:'Docker Docs'},
        {t:'Get started with Docker',u:'https://docs.docker.com/get-started/',k:'doc',s:'Docker Docs'},
        {t:'Docker Roadmap',u:'https://roadmap.sh/docker',k:'article',s:'roadmap.sh'},
        {t:'Docker in 100 Seconds',u:'https://www.youtube.com/watch?v=Gjnup-PuquQ',k:'video',s:'YouTube · Fireship'},
        {t:'100+ Docker Concepts you Need to Know',u:'https://www.youtube.com/watch?v=rIrNIzy6U_g',k:'video',s:'YouTube · Fireship'},
        {t:'Docker Tutorial for Beginners [FULL COURSE in 3 Hours]',u:'https://www.youtube.com/watch?v=3c-iBn73dDE',k:'video',s:'YouTube · TechWorld with Nana'},
        {t:'iximiuz Labs',u:'https://labs.iximiuz.com/',k:'course',s:'iximiuz.com',w:'Інтерактивні пісочниці з контейнерами й Linux'}
      ],
      children:[
        {label:'Образ, Dockerfile, шари',desc:'Інструкції збірки, кешування шарів, порядок COPY і RUN, .dockerignore, малі базові образи, multi-stage збірка.',why:'Образ з Python і залежностями на SDK моделей збирається щодня в CI. Повільний Dockerfile коштує часу всій команді.',
          links:[
            {t:'Dockerfile reference',u:'https://docs.docker.com/reference/dockerfile/',k:'doc',s:'Docker Docs'},
            {t:'Understanding the image layers',u:'https://docs.docker.com/get-started/docker-concepts/building-images/understanding-image-layers/',k:'doc',s:'Docker Docs'},
            {t:'Building best practices',u:'https://docs.docker.com/build/building/best-practices/',k:'doc',s:'Docker Docs'},
            {t:'hadolint/hadolint',u:'https://github.com/hadolint/hadolint',k:'github',s:'GitHub',w:'Лінтер Dockerfile'},
            {t:'wagoodman/dive',u:'https://github.com/wagoodman/dive',k:'github',s:'GitHub',w:'Подивитись, що саме важить у кожному шарі'}
          ],
          children:[
            {label:'Multi-stage і кеш збірки',desc:'Збірка залежностей в одному етапі, копіювання лише потрібного в мінімальний фінальний образ; cache mounts BuildKit.',why:'Образ із 2 ГБ до 200 МБ і збірка з 5 хвилин до 30 секунд: різниця саме тут.',
              links:[
                {t:'Multi-stage builds',u:'https://docs.docker.com/build/building/multi-stage/',k:'doc',s:'Docker Docs'},
                {t:'Optimize cache usage in builds',u:'https://docs.docker.com/build/cache/optimize/',k:'doc',s:'Docker Docs'},
                {t:'Using the build cache',u:'https://docs.docker.com/get-started/docker-concepts/building-images/using-the-build-cache/',k:'doc',s:'Docker Docs'}
              ]}
          ]},
        {label:'Контейнери: мережа, томи, env',desc:'Запуск, публікація портів, мережі між контейнерами, збереження даних поза контейнером у томах, передача конфігурації через env.',why:'MCP-сервер у контейнері, база в контейнері, агент у контейнері: усі мають бачити одне одного, а дані Postgres мають пережити перезапуск.',
          links:[
            {t:'What is a container?',u:'https://docs.docker.com/get-started/docker-concepts/the-basics/what-is-a-container/',k:'doc',s:'Docker Docs'},
            {t:'Networking overview',u:'https://docs.docker.com/engine/network/',k:'doc',s:'Docker Docs'},
            {t:'Volumes',u:'https://docs.docker.com/engine/storage/volumes/',k:'doc',s:'Docker Docs'},
            {t:'Persisting container data',u:'https://docs.docker.com/get-started/docker-concepts/running-containers/persisting-container-data/',k:'doc',s:'Docker Docs'},
            {t:'Docker CLI reference',u:'https://docs.docker.com/reference/cli/docker/',k:'doc',s:'Docker Docs'}
          ]},
        {label:'Docker Compose для локального стенду',desc:'Опис кількох сервісів в одному файлі: застосунок, Postgres, Redis; healthcheck і depends_on, profiles і override-файли для різних режимів.',why:'Локальний стенд для інтеграційних тестів піднімається однією командою. Агент теж може ним користуватись, щоб перевірити себе на реальній базі.',
          links:[
            {t:'Docker Compose',u:'https://docs.docker.com/compose/',k:'doc',s:'Docker Docs'},
            {t:'Compose file: Services',u:'https://docs.docker.com/reference/compose-file/services/',k:'doc',s:'Docker Docs',w:'healthcheck, depends_on, environment'},
            {t:'Using profiles with Compose',u:'https://docs.docker.com/compose/how-tos/profiles/',k:'doc',s:'Docker Docs'},
            {t:'Merge Compose files',u:'https://docs.docker.com/compose/how-tos/multiple-compose-files/merge/',k:'doc',s:'Docker Docs'},
            {t:'Multi-container applications',u:'https://docs.docker.com/get-started/docker-concepts/running-containers/multi-container-applications/',k:'doc',s:'Docker Docs'},
            {t:'Docker Compose in 12 Minutes',u:'https://www.youtube.com/watch?v=Qw9zlE3t8Ko',k:'video',s:'YouTube · Jake Wright'}
          ]},
        {label:'Образи для Python і Node: uv, slim',desc:'Офіційні образи python:3.x-slim і node:lts-slim, uv у Docker з кешем залежностей, distroless для фінального етапу, правильний PID 1 і сигнали.',why:'Образ з uv збирається за секунди і детерміновано, а slim без зайвих інструментів менше цікавить атакуючого через prompt injection.',
          links:[
            {t:'Using uv in Docker',u:'https://docs.astral.sh/uv/guides/integration/docker/',k:'doc',s:'Astral Docs'},
            {t:'astral-sh/uv-docker-example',u:'https://github.com/astral-sh/uv-docker-example',k:'github',s:'GitHub'},
            {t:'Production-ready Python Docker Containers with uv',u:'https://hynek.me/articles/docker-uv/',k:'article',y:2024,s:'Hynek Schlawack'},
            {t:'Docker packaging guide for Python',u:'https://pythonspeed.com/docker/',k:'article',s:'Python⇒Speed'},
            {t:'Docker and Node.js Best Practices',u:'https://github.com/nodejs/docker-node/blob/main/docs/BestPractices.md',k:'github',s:'GitHub'},
            {t:'GoogleContainerTools/distroless',u:'https://github.com/GoogleContainerTools/distroless',k:'github',s:'GitHub'}
          ]},
        {label:'Безпека образу: non-root, сканери',type:'optional',desc:'Користувач без root, read-only файлова система, мінімальний образ, сканування вразливостей Trivy або Docker Scout, rootless Docker.',why:'Контейнер агента з root і повним набором інструментів дорівнює подарунок для prompt injection: один виконаний curl | sh і сервер чужий.',
          links:[
            {t:'Docker Engine security',u:'https://docs.docker.com/engine/security/',k:'doc',s:'Docker Docs'},
            {t:'Run the Docker daemon as a non-root user (Rootless mode)',u:'https://docs.docker.com/engine/security/rootless/',k:'doc',s:'Docker Docs'},
            {t:'Docker Security Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Docker_Security_Cheat_Sheet.html',k:'doc',s:'OWASP'},
            {t:'Trivy',u:'https://trivy.dev/',k:'doc',s:'Trivy Docs',w:'Сканер вразливостей образів, файлів і IaC'},
            {t:'Docker Scout',u:'https://docs.docker.com/scout/',k:'doc',s:'Docker Docs'}
          ]},
        {label:'Dev containers і sandbox для агента',desc:'devcontainer.json описує середовище розробки як контейнер; Docker Sandboxes, Claude Code sandboxing і sandbox Codex ізолюють агента по файловій системі й мережі.',why:'Агент у режимі без підтверджень має працювати в ізоляції: інакше rm -rf чи витік ключа зачепить ваш ноутбук. Sandbox знімає 84% запитів на дозвіл за даними Anthropic.',
          links:[
            {t:'Development Containers',u:'https://containers.dev/',k:'doc',s:'containers.dev',w:'Відкрита специфікація devcontainer.json'},
            {t:'Developing inside a Container',u:'https://code.visualstudio.com/docs/devcontainers/containers',k:'doc',s:'VS Code Docs'},
            {t:'Claude Code: Development containers',u:'https://code.claude.com/docs/en/devcontainer',k:'doc',s:'Claude Code Docs'},
            {t:'Containing Agent Chaos - Solomon Hykes, Dagger',u:'https://www.youtube.com/watch?v=bUBF5V6oDKw',k:'video',y:2025,s:'YouTube · AI Engineer'},
            {t:'Why AI Agents Need Isolation',u:'https://www.docker.com/blog/why-ai-agents-need-isolation/',k:'article',y:2026,s:'Docker Blog'}
          ],
          children:[
            {label:'Docker Sandboxes для coding agents',desc:'microVM на кожну сесію агента: Claude Code, Codex CLI, Copilot CLI, Gemini CLI з ізольованою мережею, allow/deny-списками і швидким скиданням.',why:'Готовий спосіб запустити агента «в YOLO-режимі» і не боятись за хост.',
              links:[
                {t:'Docker Sandboxes',u:'https://docs.docker.com/ai/sandboxes/',k:'doc',y:2026,s:'Docker Docs'},
                {t:'Docker Sandboxes: Run Claude Code and Other Coding Agents Unsupervised (but Safely)',u:'https://www.docker.com/blog/docker-sandboxes-run-claude-code-and-other-coding-agents-unsupervised-but-safely/',k:'article',y:2026,s:'Docker Blog'},
                {t:'Docker Sandboxes: A New Approach for Coding Agent Safety',u:'https://www.docker.com/blog/docker-sandboxes-a-new-approach-for-coding-agent-safety/',k:'article',y:2025,s:'Docker Blog'}
              ]},
            {label:'Sandboxing у Claude Code і Codex',desc:'Вбудована ізоляція агентів на рівні ОС: Seatbelt на macOS, bubblewrap на Linux, обмеження мережі через проксі; sandbox Codex CLI з тими самими ідеями.',why:'Знати, що саме обмежує sandbox і що ні (MCP-сервери й hooks працюють на хості), це різниця між реальним захистом і відчуттям захисту.',
              links:[
                {t:'Claude Code: Sandboxing',u:'https://code.claude.com/docs/en/sandboxing',k:'doc',s:'Claude Code Docs'},
                {t:'Claude Code: Sandbox environments',u:'https://code.claude.com/docs/en/sandbox-environments',k:'doc',s:'Claude Code Docs',w:'Порівняння підходів: вбудований sandbox, devcontainer, VM'},
                {t:'Beyond permission prompts: making Claude Code more secure and autonomous',u:'https://www.anthropic.com/engineering/claude-code-sandboxing',k:'article',y:2025,s:'Anthropic Engineering'},
                {t:'How we contain Claude across products',u:'https://www.anthropic.com/engineering/how-we-contain-claude',k:'article',y:2026,s:'Anthropic Engineering'},
                {t:'Codex: Sandbox',u:'https://github.com/openai/codex/blob/main/docs/sandbox.md',k:'github',s:'GitHub'},
                {t:'OpenAI on Securing Code-Executing AI Agents - Fouad Matin',u:'https://www.youtube.com/watch?v=w7IMuYsBNr8',k:'video',y:2025,s:'YouTube · AI Engineer'}
              ]}
          ]},
        {label:'Реєстр і теги: GHCR, Docker Hub',type:'optional',desc:'Публікація образу в реєстр, теги за версією і за SHA коміту замість latest, підпис образів через Sigstore.',why:'Деплой бере образ із реєстру за точним тегом; latest у проді означає, що ви не знаєте, що саме крутиться.',
          links:[
            {t:'Build, tag, and publish an image',u:'https://docs.docker.com/get-started/docker-concepts/building-images/build-tag-and-publish-an-image/',k:'doc',s:'Docker Docs'},
            {t:'Working with the Container registry',u:'https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-container-registry',k:'doc',s:'GitHub Docs'},
            {t:'Docker Hub',u:'https://docs.docker.com/docker-hub/',k:'doc',s:'Docker Docs'},
            {t:'Sigstore',u:'https://www.sigstore.dev/',k:'doc',s:'sigstore.dev'}
          ]}
      ]},
    {label:'CI/CD',side:'right',desc:'Автоматичний прогін перевірок на кожну зміну і автоматична викатка в прод: GitHub Actions або GitLab CI, секрети через OIDC, кеш і артефакти, стратегії деплою, feature flags, AI-кроки в пайплайні.',why:'Evals, перевірки агента, AI-ревʼю: усе це живе в пайплайні. Без пайплайна вони лишаються скриптом на ноутбуці, а код агента потрапляє в main без перевірки.',
      links:[
        {t:'GitHub Actions documentation',u:'https://docs.github.com/en/actions',k:'doc',s:'GitHub Docs'},
        {t:'Continuous Integration',u:'https://martinfowler.com/articles/continuousIntegration.html',k:'article',s:'Martin Fowler',w:'Що таке CI насправді, окремо від інструментів'},
        {t:'DORA: Guides',u:'https://dora.dev/guides/',k:'doc',s:'DORA',w:'Чотири метрики доставки й практики, що на них впливають'},
        {t:'GitHub Actions Tutorial - Basic Concepts and CI/CD Pipeline with Docker',u:'https://www.youtube.com/watch?v=R8_veQiYBjI',k:'video',s:'YouTube · TechWorld with Nana'},
        {t:'5 Ways to DevOps-ify your App - Github Actions Tutorial',u:'https://www.youtube.com/watch?v=eB0nUzAI7M8',k:'video',s:'YouTube · Fireship'},
        {t:'DevOps Roadmap',u:'https://roadmap.sh/devops',k:'article',s:'roadmap.sh'}
      ],
      children:[
        {label:'Пайплайн: lint, типи, тести, збірка',desc:'Послідовність кроків на кожен push або пул-реквест (ruff, mypy, pytest, docker build), що блокує мердж при помилці; required status checks на захищеній гілці.',why:'Код агента не має шансів потрапити в main без зеленого пайплайна. Це єдина перевірка, яку агент не може пропустити.',
          links:[
            {t:'Understanding GitHub Actions',u:'https://docs.github.com/en/actions/get-started/understanding-github-actions',k:'doc',s:'GitHub Docs'},
            {t:'Quickstart for GitHub Actions',u:'https://docs.github.com/en/actions/writing-workflows/quickstart',k:'doc',s:'GitHub Docs'},
            {t:'Building and testing Python',u:'https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-python',k:'doc',s:'GitHub Docs'},
            {t:'Building and testing Node.js',u:'https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-nodejs',k:'doc',s:'GitHub Docs'},
            {t:'GitLab CI/CD',u:'https://docs.gitlab.com/ci/',k:'doc',s:'GitLab Docs'},
            {t:'nektos/act',u:'https://github.com/nektos/act',k:'github',s:'GitHub',w:'Запустити GitHub Actions локально'}
          ],
          children:[
            {label:'Workflow-синтаксис, runners, actions',desc:'YAML з jobs і steps, тригери on:, runners, готові actions (setup-python, setup-uv, setup-node, build-push-action), pinning версій actions по SHA.',why:'Пайплайн теж код: агент напише його за хвилину, а ви маєте побачити, що він підтягнув неперевірений action.',
              links:[
                {t:'Workflow syntax for GitHub Actions',u:'https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions',k:'doc',s:'GitHub Docs'},
                {t:'Events that trigger workflows',u:'https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows',k:'doc',s:'GitHub Docs'},
                {t:'astral-sh/setup-uv',u:'https://github.com/astral-sh/setup-uv',k:'github',s:'GitHub'},
                {t:'actions/setup-python',u:'https://github.com/actions/setup-python',k:'github',s:'GitHub'},
                {t:'docker/build-push-action',u:'https://github.com/docker/build-push-action',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Секрети в CI',desc:'Зберігання ключів у сховищі CI, не в репо; environments з approvals; OIDC для хмари замість довгоживучих ключів; обмежений доступ з гілок і форків.',why:'Evals у CI викликають реальну модель, тому ключ має бути в CI, але недоступним у пул-реквестах з форків. pull_request_target з checkout чужого коду класична дірка.',
          links:[
            {t:'Using secrets in GitHub Actions',u:'https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions',k:'doc',s:'GitHub Docs'},
            {t:'Security hardening for GitHub Actions',u:'https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions',k:'doc',s:'GitHub Docs'},
            {t:'Managing environments for deployment',u:'https://docs.github.com/en/actions/managing-workflow-runs-and-deployments/managing-deployments/managing-environments-for-deployment',k:'doc',s:'GitHub Docs'},
            {t:'Keeping your GitHub Actions and workflows secure: Preventing pwn requests',u:'https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/',k:'article',s:'GitHub Security Lab'},
            {t:'CI/CD Security Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/CI_CD_Security_Cheat_Sheet.html',k:'doc',s:'OWASP'}
          ],
          children:[
            {label:'OIDC замість довгоживучих ключів',desc:'CI отримує короткоживучий токен хмари за федерацією ідентичності, без збереженого AWS-ключа в секретах.',why:'Витік секрету з CI це найчастіший шлях до чужого облікового запису в хмарі; OIDC прибирає сам секрет.',
              links:[
                {t:'About security hardening with OpenID Connect',u:'https://docs.github.com/en/actions/security-for-github-actions/security-hardening-your-deployments/about-security-hardening-with-openid-connect',k:'doc',s:'GitHub Docs'},
                {t:'Create an OpenID Connect (OIDC) identity provider in IAM',u:'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_create_oidc.html',k:'doc',s:'AWS Docs'},
                {t:'Workload Identity Federation',u:'https://cloud.google.com/iam/docs/workload-identity-federation',k:'doc',s:'Google Cloud'}
              ]}
          ]},
        {label:'Артефакти, кеш, матриця',type:'optional',desc:'Збережені результати збірки й звіти, кеш залежностей (uv, pnpm), прогін на кількох версіях Python або Node паралельно.',why:'Звіт evals зберігається як артефакт, щоб порівняти з попереднім прогоном; кеш uv робить пайплайн удвічі швидшим.',
          links:[
            {t:'Caching dependencies to speed up workflows',u:'https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/caching-dependencies-to-speed-up-workflows',k:'doc',s:'GitHub Docs'},
            {t:'Storing and sharing data from a workflow',u:'https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow',k:'doc',s:'GitHub Docs'},
            {t:'Running variations of jobs in a workflow',u:'https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow',k:'doc',s:'GitHub Docs'},
            {t:'Using uv in GitHub Actions',u:'https://docs.astral.sh/uv/guides/integration/github/',k:'doc',s:'Astral Docs'}
          ]},
        {label:'Стратегії деплою: rolling, blue-green, canary',desc:'Викатка без простою, можливість швидко відкотити, поступове перемикання трафіку з порівнянням метрик.',why:'Нова версія промпту чи моделі теж викочується canary: на частку трафіку, з порівнянням якості й вартості.',
          links:[
            {t:'ContinuousDelivery',u:'https://martinfowler.com/bliki/ContinuousDelivery.html',k:'article',s:'martinfowler.com'},
            {t:'BlueGreenDeployment',u:'https://martinfowler.com/bliki/BlueGreenDeployment.html',k:'article',s:'martinfowler.com'},
            {t:'CanaryRelease',u:'https://martinfowler.com/bliki/CanaryRelease.html',k:'article',s:'martinfowler.com'},
            {t:'Kubernetes: Deployments',u:'https://kubernetes.io/docs/concepts/workloads/controllers/deployment/',k:'doc',s:'Kubernetes Docs',w:'Rolling update як стандартна поведінка'},
            {t:'Argo Rollouts',u:'https://argo-rollouts.readthedocs.io/en/stable/',k:'doc',s:'Argo Docs',w:'Canary і blue-green у Kubernetes з аналізом метрик'}
          ]},
        {label:'Відкат і feature flags',desc:'Повернення попередньої версії за хвилину; вимкнення фічі без деплою через прапорець; OpenFeature як стандарт, Unleash і Flagsmith як відкриті сервери.',why:'AI-фічу має бути можливо вимкнути прапорцем, коли модель почала давати дивні відповіді, а перемикання моделі чи промпту робиться без релізу.',
          links:[
            {t:'Feature Toggles (aka Feature Flags)',u:'https://martinfowler.com/articles/feature-toggles.html',k:'article',s:'martinfowler.com'},
            {t:'OpenFeature: Introduction',u:'https://openfeature.dev/docs/reference/intro',k:'doc',s:'OpenFeature Docs',w:'Відкритий стандарт SDK для прапорців, CNCF'},
            {t:'Unleash/unleash',u:'https://github.com/Unleash/unleash',k:'github',s:'GitHub'},
            {t:'Flagsmith/flagsmith',u:'https://github.com/Flagsmith/flagsmith',k:'github',s:'GitHub'}
          ]},
        {label:'AI-кроки в пайплайні',desc:'Агент як крок CI: автоматичне ревʼю PR (Claude Code GitHub Action, Copilot code review), генерація тестів, виправлення по коментарю, прогін evals на зміну промпту.',why:'Саме тут AI дає перевірюваний ефект: ревʼю-бот ловить проблеми до людини, а evals у CI не дають зламати промпт тихо.',
          links:[
            {t:'Claude Code GitHub Actions',u:'https://code.claude.com/docs/en/github-actions',k:'doc',s:'Claude Code Docs'},
            {t:'anthropics/claude-code-action',u:'https://github.com/anthropics/claude-code-action',k:'github',s:'GitHub'},
            {t:'Code review',u:'https://docs.github.com/en/copilot/concepts/agents/code-review',k:'doc',s:'GitHub Docs',w:'Copilot code review як рецензент PR'},
            {t:'promptfoo: GitHub Actions integration',u:'https://www.promptfoo.dev/docs/integrations/github-action/',k:'doc',s:'promptfoo Docs',w:'Evals промптів на кожен PR'},
            {t:'Один із трендових напрямків зараз: інтеграція AI у CI/CD',u:'https://t.me/beerphp/129',k:'post',y:2025,s:'beerphp'}
          ]},
        {label:'Оновлення залежностей: Dependabot, Renovate',type:'optional',desc:'Автоматичні PR з оновленнями пакетів і actions, групування, автомердж патчів за зеленим пайплайном.',why:'SDK моделей оновлюються щомісяця; без автоматики ви або відстаєте на пів року, або оновлюєте все одразу й ламаєте прод.',
          links:[
            {t:'Dependabot',u:'https://docs.github.com/en/code-security/dependabot',k:'doc',s:'GitHub Docs'},
            {t:'Renovate Docs',u:'https://docs.renovatebot.com/',k:'doc',s:'Renovate Docs'},
            {t:'Vulnerable Dependency Management Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Vulnerable_Dependency_Management_Cheat_Sheet.html',k:'doc',s:'OWASP'}
          ]}
      ]},
    {label:'Хмара й інфраструктура',side:'left',desc:'Де крутиться сервіс: віртуальні машини, контейнерні сервіси, serverless, керовані бази, обʼєктне сховище, IAM, інфраструктура як код, вартість; моделі через Bedrock, Vertex AI, Azure AI Foundry.',why:'AWS, GCP або Azure трапляються майже в кожному проєкті. Моделі теж часто беруть через хмарні сервіси, і права агента обрізаються на рівні IAM, а не в промпті.',
      links:[
        {t:'AWS Well-Architected Framework',u:'https://docs.aws.amazon.com/wellarchitected/latest/framework/welcome.html',k:'doc',s:'AWS Docs'},
        {t:'Google Cloud Architecture Framework',u:'https://cloud.google.com/architecture/framework',k:'doc',s:'Google Cloud'},
        {t:'Azure Well-Architected Framework',u:'https://learn.microsoft.com/en-us/azure/well-architected/',k:'doc',s:'Microsoft Learn'},
        {t:'Top 50+ AWS Services Explained in 10 Minutes',u:'https://www.youtube.com/watch?v=JIbIYCM48to',k:'video',s:'YouTube · Fireship'},
        {t:'DevOps Prerequisites Course - Getting started with DevOps',u:'https://www.youtube.com/watch?v=Wvf0mBNGjXY',k:'video',s:'YouTube · freeCodeCamp.org'},
        {t:'Serverless Architectures',u:'https://martinfowler.com/articles/serverless.html',k:'article',s:'martinfowler.com'}
      ],
      children:[
        {label:'Обчислення: VM, контейнерний сервіс, serverless',desc:'Три способи запустити код у хмарі (EC2 чи Compute Engine; ECS/Fargate чи Cloud Run; Lambda, Cloud Functions, Cloudflare Workers) і коли який доречний; Fly.io, Railway, Render для швидкого MVP.',why:'Агент з довгими прогонами погано живе в serverless з лімітом часу на запит; це треба знати до вибору платформи.',
          links:[
            {t:'What is Cloud Run',u:'https://cloud.google.com/run/docs/overview/what-is-cloud-run',k:'doc',s:'Google Cloud'},
            {t:'What is Amazon ECS?',u:'https://docs.aws.amazon.com/AmazonECS/latest/developerguide/Welcome.html',k:'doc',s:'AWS Docs'},
            {t:'What is AWS Lambda?',u:'https://docs.aws.amazon.com/lambda/latest/dg/welcome.html',k:'doc',s:'AWS Docs'},
            {t:'Cloudflare Workers',u:'https://developers.cloudflare.com/workers/',k:'doc',s:'Cloudflare Docs'},
            {t:'Fly.io Docs',u:'https://fly.io/docs/',k:'doc',s:'Fly.io Docs'},
            {t:'Railway Docs',u:'https://docs.railway.com/',k:'doc',s:'Railway Docs'}
          ],
          children:[
            {label:'Ліміти serverless і холодний старт',desc:'Максимальна тривалість запиту, холодний старт, розмір пакета, ліміти памʼяті; у Cloud Run і Lambda вони різні.',why:'Прогін агента на три хвилини не вкладеться в ліміт функції; треба або черга з воркером, або контейнерний сервіс.',
              links:[
                {t:'Lambda quotas',u:'https://docs.aws.amazon.com/lambda/latest/dg/gettingstarted-limits.html',k:'doc',s:'AWS Docs'},
                {t:'Cloud Run: Set request timeout',u:'https://cloud.google.com/run/docs/configuring/request-timeout',k:'doc',s:'Google Cloud'},
                {t:'Operating Lambda: Performance optimization - Part 1',u:'https://aws.amazon.com/blogs/compute/operating-lambda-performance-optimization-part-1/',k:'article',s:'AWS Compute Blog',w:'Холодні старти і як з ними жити'}
              ]}
          ]},
        {label:'Керовані бази і обʼєктне сховище',desc:'База як сервіс (RDS, Cloud SQL, Neon), бакети для файлів (S3, GCS, MinIO як self-hosted), бекапи і point-in-time recovery.',why:'Документи для RAG лежать у бакеті, їхні embeddings у керованому Postgres; PITR рятує, коли агент виконав DELETE без WHERE.',
          links:[
            {t:'What is Amazon S3?',u:'https://docs.aws.amazon.com/AmazonS3/latest/userguide/Welcome.html',k:'doc',s:'AWS Docs'},
            {t:'What is Amazon RDS?',u:'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Welcome.html',k:'doc',s:'AWS Docs'},
            {t:'Cloud SQL documentation',u:'https://cloud.google.com/sql/docs',k:'doc',s:'Google Cloud'},
            {t:'Restoring a DB instance to a specified time',u:'https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_PIT.html',k:'doc',s:'AWS Docs',w:'Point-in-time recovery'},
            {t:'MinIO Object Storage for Linux',u:'https://min.io/docs/minio/linux/index.html',k:'doc',s:'MinIO Docs',w:'S3-сумісне сховище для локального стенду'},
            {t:'neondatabase/neon',u:'https://github.com/neondatabase/neon',k:'github',s:'GitHub',w:'Serverless Postgres з гілками бази'}
          ]},
        {label:'IAM: ролі й мінімальні права',desc:'Хто і що може робити в хмарі; ролі для сервісів замість ключів користувачів; workload identity для контейнерів і CI; принцип least privilege.',why:'Права агента обрізаються на рівні IAM-ролі, а не в промпті. Це найсильніший guardrail: агент фізично не може видалити бакет, якщо роль цього не дозволяє.',
          links:[
            {t:'What is IAM?',u:'https://docs.aws.amazon.com/IAM/latest/UserGuide/introduction.html',k:'doc',s:'AWS Docs'},
            {t:'Security best practices in IAM',u:'https://docs.aws.amazon.com/IAM/latest/UserGuide/best-practices.html',k:'doc',s:'AWS Docs'},
            {t:'IAM roles',u:'https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html',k:'doc',s:'AWS Docs'},
            {t:'IAM overview',u:'https://cloud.google.com/iam/docs/overview',k:'doc',s:'Google Cloud'},
            {t:'Using IAM securely',u:'https://cloud.google.com/iam/docs/using-iam-securely',k:'doc',s:'Google Cloud'}
          ]},
        {label:'Інфраструктура як код',type:'optional',desc:'Terraform або OpenTofu, Pulumi, AWS CDK: інфраструктура описана файлами в репо, зміни через plan і ревʼю.',why:'Агент може запропонувати зміну інфраструктури як пул-реквест, і її можна проревʼювати через terraform plan, а не клацати в консолі.',
          links:[
            {t:'OpenTofu Docs',u:'https://opentofu.org/docs/',k:'doc',s:'OpenTofu Docs',w:'Відкритий форк Terraform під Linux Foundation'},
            {t:'hashicorp/terraform',u:'https://github.com/hashicorp/terraform',k:'github',s:'GitHub'},
            {t:'Pulumi Docs',u:'https://www.pulumi.com/docs/',k:'doc',s:'Pulumi Docs',w:'IaC на Python або TypeScript'},
            {t:'AWS CDK Developer Guide',u:'https://docs.aws.amazon.com/cdk/v2/guide/home.html',k:'doc',s:'AWS Docs'},
            {t:'Terraform in 100 Seconds',u:'https://www.youtube.com/watch?v=tomUWcQ0P3k',k:'video',s:'YouTube · Fireship'},
            {t:'Terraform explained in 15 mins | Terraform Tutorial for Beginners',u:'https://www.youtube.com/watch?v=l5k1ai_GBDE',k:'video',s:'YouTube · TechWorld with Nana'}
          ]},
        {label:'Вартість хмари',type:'optional',desc:'Що саме коштує грошей: обчислення, трафік, сховище, запити; бюджети й алерти, теги для розподілу витрат, Infracost для оцінки змін IaC.',why:'Токени лише частина рахунку: воркери агента, що крутяться вхолосту, і трафік embeddings до бази теж коштують. Бюджет-алерт дешевший за сюрприз у кінці місяця.',
          links:[
            {t:'How AWS Pricing Works',u:'https://docs.aws.amazon.com/whitepapers/latest/how-aws-pricing-works/welcome.html',k:'doc',s:'AWS Docs'},
            {t:'Managing your costs with AWS Budgets',u:'https://docs.aws.amazon.com/cost-management/latest/userguide/budgets-managing-costs.html',k:'doc',s:'AWS Docs'},
            {t:'Create, edit, or delete budgets and budget alerts',u:'https://cloud.google.com/billing/docs/how-to/budgets',k:'doc',s:'Google Cloud'},
            {t:'Infracost Docs',u:'https://infracost.io/docs/',k:'doc',s:'Infracost Docs',w:'Вартість зміни інфраструктури прямо в PR'}
          ]},
        {label:'Моделі через хмару: Bedrock, Vertex, Foundry',desc:'Ті самі моделі Anthropic, OpenAI, Google через хмарні сервіси: Amazon Bedrock, Vertex AI, Azure AI Foundry; доступ через IAM хмари, дані лишаються в регіоні.',why:'Корпоративні замовники часто вимагають саме хмарний доступ через compliance і біллінг; SDK Anthropic працює з Bedrock і Vertex без зміни коду.',
          links:[
            {t:'What is Amazon Bedrock?',u:'https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-bedrock.html',k:'doc',s:'AWS Docs'},
            {t:'Generative AI on Vertex AI',u:'https://cloud.google.com/vertex-ai/generative-ai/docs/overview',k:'doc',s:'Google Cloud'},
            {t:'What is Azure AI Foundry?',u:'https://learn.microsoft.com/en-us/azure/ai-foundry/what-is-azure-ai-foundry',k:'doc',s:'Microsoft Learn'},
            {t:'Claude on Amazon Bedrock',u:'https://docs.claude.com/en/api/claude-on-amazon-bedrock',k:'doc',s:'Anthropic Docs'},
            {t:'Claude on Vertex AI',u:'https://docs.claude.com/en/api/claude-on-vertex-ai',k:'doc',s:'Anthropic Docs'}
          ]}
      ]},
    {label:'Безпека: базова',side:'right',desc:'Мінімум, який має знати кожен бекендер: секрети, OWASP Top 10:2025, інʼєкції й SSRF, валідація входу, залежності й supply chain, TLS і заголовки безпеки.',why:'Агент з доступом до бази й API множить кожну дірку: текст від моделі це теж зовнішній вхід. Повний роадмап безпеки для AI-систем окремою навичкою.',
      links:[
        {t:'OWASP Top 10:2025',u:'https://owasp.org/Top10/2025/',k:'doc',y:2025,s:'OWASP'},
        {t:'OWASP Cheat Sheet Series',u:'https://cheatsheetseries.owasp.org/',k:'doc',s:'OWASP',w:'Короткі практичні інструкції на кожну тему безпеки'},
        {t:'Web Security Academy',u:'https://portswigger.net/web-security',k:'course',s:'PortSwigger',w:'Безкоштовні лабораторії з реальними вразливостями'},
        {t:'Website security',u:'https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Website_security',k:'doc',s:'MDN'},
        {t:'Безпека AI-агентів: як атакують Claude Code, Cursor і Codex',u:'https://www.youtube.com/watch?v=QKRs6IHV-y4',k:'video',y:2026,s:'BeerCode'},
        {t:'The lethal trifecta for AI agents: private data, untrusted content, and external communication',u:'https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/',k:'article',y:2025,s:'Simon Willison'}
      ],
      children:[
        {label:'Секрети: ніколи в коді й логах',desc:'Ключі у змінних середовища або менеджері секретів (Vault, AWS Secrets Manager, SOPS для файлів у репо), маскування в логах, ротація, сканери gitleaks і trufflehog.',why:'Трейси агента записують усе, що він бачив. Якщо там ключ, він у логах назавжди; ротація має бути звичною операцією, а не аварією.',
          links:[
            {t:'Secrets Management Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html',k:'doc',s:'OWASP'},
            {t:'What is AWS Secrets Manager?',u:'https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html',k:'doc',s:'AWS Docs'},
            {t:'hashicorp/vault',u:'https://github.com/hashicorp/vault',k:'github',s:'GitHub'},
            {t:'getsops/sops',u:'https://github.com/getsops/sops',k:'github',s:'GitHub',w:'Шифровані секрети у файлах, які можна комітити'},
            {t:'gitleaks/gitleaks',u:'https://github.com/gitleaks/gitleaks',k:'github',s:'GitHub'},
            {t:'Logging Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Logging_Cheat_Sheet.html',k:'doc',s:'OWASP',w:'Що не має потрапляти в логи'}
          ]},
        {label:'OWASP Top 10:2025 базово',desc:'Десять найпоширеніших класів вразливостей вебзастосунків у редакції 2025: Broken Access Control, Security Misconfiguration, Software Supply Chain Failures, Injection, SSRF, Mishandling of Exceptional Conditions тощо.',why:'Агент, що формує SQL або URL з тексту користувача, це класична інʼєкція з новим фасадом; агент, що ставить npm-пакет із відповіді моделі, це supply chain failure.',
          links:[
            {t:'OWASP Top 10:2025',u:'https://owasp.org/Top10/2025/',k:'doc',y:2025,s:'OWASP'},
            {t:'OWASP/Top10',u:'https://github.com/OWASP/Top10',k:'github',s:'GitHub'},
            {t:'OWASP Top 10 2025: What\'s New',u:'https://semgrep.dev/blog/2026/owasp-top-10-2025-whats-new',k:'article',y:2026,s:'Semgrep'},
            {t:'OWASP Top 10: Broken access control still tops app security list',u:'https://www.theregister.com/2025/11/11/new_owasp_top_ten_broken/',k:'article',y:2025,s:'The Register'},
            {t:'REST Security Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/REST_Security_Cheat_Sheet.html',k:'doc',s:'OWASP'}
          ],
          children:[
            {label:'Injection і SSRF у лабораторії',desc:'SQL-інʼєкція, command injection, SSRF: як виглядають, як експлуатуються і як закриваються; практика на PortSwigger.',why:'Поки не зламаєте це руками в лабораторії, не побачите, де агент робить те саме у вашому коді.',
              links:[
                {t:'SQL injection',u:'https://portswigger.net/web-security/sql-injection',k:'course',s:'PortSwigger'},
                {t:'Server-side request forgery (SSRF)',u:'https://portswigger.net/web-security/ssrf',k:'course',s:'PortSwigger'},
                {t:'SQL Injection Prevention Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html',k:'doc',s:'OWASP'},
                {t:'Server Side Request Forgery Prevention Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Server_Side_Request_Forgery_Prevention_Cheat_Sheet.html',k:'doc',s:'OWASP'}
              ]}
          ]},
        {label:'Валідація входу і вихідних даних',desc:'Перевірка всього, що прийшло зовні, за схемою (pydantic, zod); параметризовані запити; allow-list для команд shell і URL; екранування того, що йде в HTML.',why:'Текст від моделі теж зовнішній вхід. Він не має потрапляти в shell, SQL чи HTML без перевірки, а тул агента, що приймає URL, мусить мати allow-list хостів.',
          links:[
            {t:'Input Validation Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html',k:'doc',s:'OWASP'},
            {t:'Injection Prevention Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Injection_Prevention_Cheat_Sheet.html',k:'doc',s:'OWASP'},
            {t:'OS Command Injection Defense Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/OS_Command_Injection_Defense_Cheat_Sheet.html',k:'doc',s:'OWASP',w:'Агент із Bash-тулом це саме цей клас ризику'},
            {t:'Cross Site Scripting Prevention Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html',k:'doc',s:'OWASP'},
            {t:'LLM Prompt Injection Prevention Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/LLM_Prompt_Injection_Prevention_Cheat_Sheet.html',k:'doc',s:'OWASP'}
          ]},
        {label:'Залежності й supply chain',desc:'Аудит пакетів (pip-audit, npm audit, OSV-Scanner), lock-файли, Dependabot, SBOM, SLSA і Sigstore для походження артефактів.',why:'MCP-сервер з npm це код, який запускається з вашими правами. Що саме ви встановлюєте і хто це опублікував?',
          links:[
            {t:'pypa/pip-audit',u:'https://github.com/pypa/pip-audit',k:'github',s:'GitHub'},
            {t:'npm-audit',u:'https://docs.npmjs.com/cli/v10/commands/npm-audit',k:'doc',s:'npm Docs'},
            {t:'OSV: Open Source Vulnerabilities',u:'https://osv.dev/',k:'doc',s:'osv.dev'},
            {t:'google/osv-scanner',u:'https://github.com/google/osv-scanner',k:'github',s:'GitHub'},
            {t:'About Dependabot alerts',u:'https://docs.github.com/en/code-security/dependabot/dependabot-alerts/about-dependabot-alerts',k:'doc',s:'GitHub Docs'}
          ],
          children:[
            {label:'SBOM, SLSA, Sigstore',desc:'Список компонентів артефакту (SBOM у CycloneDX), рівні гарантій збірки SLSA, підпис і перевірка артефактів через Sigstore; PyPI attestations.',why:'Коли агент збирає образ і публікує пакет, походження артефакту має бути доказовим, а не «здається, з CI».',
              links:[
                {t:'SLSA: Supply-chain Levels for Software Artifacts',u:'https://slsa.dev/',k:'doc',s:'slsa.dev'},
                {t:'CycloneDX',u:'https://cyclonedx.org/',k:'doc',s:'OWASP CycloneDX'},
                {t:'Sigstore documentation',u:'https://docs.sigstore.dev/',k:'doc',s:'Sigstore Docs'},
                {t:'PyPI now supports digital attestations',u:'https://blog.pypi.org/posts/2024-11-14-pypi-now-supports-digital-attestations/',k:'article',y:2024,s:'PyPI Blog'},
                {t:'OpenSSF Scorecard',u:'https://scorecard.dev/',k:'doc',s:'OpenSSF'}
              ]}
          ]},
        {label:'TLS, CORS, заголовки безпеки',desc:'HTTPS усюди, HSTS, CSP, правильний CORS замість «*», cookies з HttpOnly і SameSite, helmet у Node.',why:'Фронтенд з AI-чатом ходить до вашого API з браузера; неправильний CORS або відкриті cookies віддадуть сесію користувача разом із його діалогами.',
          links:[
            {t:'Cross-Origin Resource Sharing (CORS)',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS',k:'doc',s:'MDN'},
            {t:'Content Security Policy (CSP)',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP',k:'doc',s:'MDN'},
            {t:'Strict-Transport-Security',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security',k:'doc',s:'MDN'},
            {t:'HTTP Headers Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Headers_Cheat_Sheet.html',k:'doc',s:'OWASP'},
            {t:'Transport Layer Security Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Transport_Layer_Security_Cheat_Sheet.html',k:'doc',s:'OWASP'},
            {t:'Helmet',u:'https://helmetjs.github.io/',k:'doc',s:'helmetjs.github.io',w:'Безпечні заголовки для Express/Node одним middleware'}
          ]},
        {label:'SAST і безпечний код: Semgrep, CodeQL, Bandit',type:'optional',desc:'Статичний аналіз на вразливості в CI: Semgrep з правилами під ваш стек, CodeQL на GitHub, Bandit для Python; ревʼю коду з питанням «де тут вхід від користувача».',why:'Агент генерує код швидше, ніж людина встигає його читати на безпеку; SAST у пайплайні ловить класичні патерни автоматично.',
          links:[
            {t:'Semgrep Docs',u:'https://semgrep.dev/docs/',k:'doc',s:'Semgrep Docs'},
            {t:'About code scanning with CodeQL',u:'https://docs.github.com/en/code-security/code-scanning/introduction-to-code-scanning/about-code-scanning-with-codeql',k:'doc',s:'GitHub Docs'},
            {t:'Bandit',u:'https://bandit.readthedocs.io/en/latest/',k:'doc',s:'Bandit Docs'},
            {t:'Node.js Security Cheat Sheet',u:'https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html',k:'doc',s:'OWASP'},
            {t:'OWASP Top 10 for LLM Applications 2025',u:'https://genai.owasp.org/resource/owasp-top-10-for-llm-applications-2025/',k:'doc',y:2025,s:'OWASP GenAI',w:'Місток до окремої навички безпеки AI-систем'}
          ]}
      ]},
    {label:'Архітектура сервісів',side:'left',desc:'Як розкласти систему на частини, щоб її можна було змінювати і масштабувати: шари і межі, черги й воркери, ідемпотентність, кешування, моноліт чи сервіси, документація і ADR.',why:'AI-фіча швидко обростає чергами, воркерами, кешами і кількома провайдерами моделей. Без базової архітектурної грамотності це перетворюється на клубок, який агент лише ущільнює.',
      links:[
        {t:'The Twelve-Factor App',u:'https://12factor.net/',k:'doc',s:'12factor.net'},
        {t:'Architecture Patterns with Python',u:'https://www.cosmicpython.com/',k:'course',s:'Harry Percival, Bob Gregory',w:'Безкоштовна книга: репозиторій, unit of work, події, CQRS на Python'},
        {t:'Cloud Design Patterns',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/',k:'doc',s:'Azure Architecture Center',w:'Каталог патернів: retry, circuit breaker, queue-based load leveling, cache-aside'},
        {t:'donnemartin/system-design-primer',u:'https://github.com/donnemartin/system-design-primer',k:'github',s:'GitHub'},
        {t:'ByteByteGoHq/system-design-101',u:'https://github.com/ByteByteGoHq/system-design-101',k:'github',s:'GitHub'},
        {t:'Site Reliability Engineering',u:'https://sre.google/sre-book/table-of-contents/',k:'course',s:'Google',w:'Безкоштовна книга про те, як сервіси живуть у проді'}
      ],
      children:[
        {label:'Шари і межі: API, домен, інфраструктура',desc:'Відокремлення бізнес-логіки від транспорту і сховища: hexagonal / ports and adapters, dependency injection, репозиторії.',why:'Виклик моделі ховається за інтерфейсом, щоб підмінити провайдера (Anthropic, OpenAI, Bedrock) або мокнути в тесті без зміни бізнес-логіки.',
          links:[
            {t:'Hexagonal architecture',u:'https://alistair.cockburn.us/hexagonal-architecture/',k:'article',s:'Alistair Cockburn'},
            {t:'The Clean Architecture',u:'https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html',k:'article',s:'Robert C. Martin'},
            {t:'Architecture Patterns with Python: Repository Pattern',u:'https://www.cosmicpython.com/book/chapter_02_repository.html',k:'course',s:'cosmicpython.com'},
            {t:'Abstraction Can Make Your Code Worse',u:'https://www.youtube.com/watch?v=rQlMtztiAoA',k:'video',s:'YouTube · CodeAesthetic',w:'Протиотрута від зайвих шарів'},
            {t:'BerriAI/litellm',u:'https://github.com/BerriAI/litellm',k:'github',s:'GitHub',w:'Один інтерфейс до сотні провайдерів моделей: приклад адаптера'}
          ]},
        {label:'Черги й фонові задачі',desc:'Асинхронна обробка через чергу повідомлень і воркери (Celery, arq, Dramatiq у Python; BullMQ у Node) поверх Redis, RabbitMQ, SQS або Kafka; повтори, dead-letter queue.',why:'Прогін агента на кілька хвилин не живе в HTTP-запиті. Він іде в чергу, а користувач отримує результат пізніше через polling, SSE або вебхук.',
          links:[
            {t:'Celery: Introduction to Celery',u:'https://docs.celeryq.dev/en/stable/getting-started/introduction.html',k:'doc',s:'Celery Docs'},
            {t:'arq',u:'https://arq-docs.helpmanual.io/',k:'doc',s:'arq Docs',w:'Асинхронна черга на Redis від автора pydantic'},
            {t:'BullMQ',u:'https://docs.bullmq.io/',k:'doc',s:'BullMQ Docs'},
            {t:'RabbitMQ Tutorials',u:'https://www.rabbitmq.com/tutorials',k:'doc',s:'RabbitMQ Docs'},
            {t:'Amazon SQS dead-letter queues',u:'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html',k:'doc',s:'AWS Docs'},
            {t:'Queue-Based Load Leveling pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling',k:'doc',s:'Azure Architecture Center'},
            {t:'System Design: Why is Kafka fast?',u:'https://www.youtube.com/watch?v=UNUz1-msbOM',k:'video',s:'YouTube · ByteByteGo'}
          ],
          children:[
            {label:'Durable execution: Temporal, Inngest',desc:'Воркфлоу, що переживають падіння процесу: стан кожного кроку зберігається, повтори й таймери вбудовані; Temporal, Inngest, Restate.',why:'Багатокроковий агент із викликами моделі на хвилини це саме той воркфлоу, який не має починатись з нуля після рестарту воркера.',
              links:[
                {t:'temporalio/temporal',u:'https://github.com/temporalio/temporal',k:'github',s:'GitHub'},
                {t:'temporalio/sdk-python',u:'https://github.com/temporalio/sdk-python',k:'github',s:'GitHub'},
                {t:'inngest/inngest',u:'https://github.com/inngest/inngest',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Ідемпотентність і повтори',desc:'Повторна обробка того самого повідомлення не має робити дію двічі: ідемпотентні ключі, дедуплікація, transactional outbox для надійної публікації подій.',why:'Агент з ретраями легко створить два тікети або надішле два листи. Повтор має бути безпечним на кожному рівні: HTTP, черга, база.',
          links:[
            {t:'Idempotent Consumer',u:'https://microservices.io/patterns/communication-style/idempotent-consumer.html',k:'doc',s:'microservices.io'},
            {t:'Implementing Stripe-like Idempotency Keys in Postgres',u:'https://brandur.org/idempotency-keys',k:'article',s:'Brandur Leach'},
            {t:'Idempotent',u:'https://developer.mozilla.org/en-US/docs/Glossary/Idempotent',k:'doc',s:'MDN'}
          ],
          children:[
            {label:'Transactional outbox',desc:'Подія пишеться в ту саму транзакцію, що й дані, а окремий процес публікує її в чергу; так подія не губиться і не дублюється.',why:'«Зберегли результат агента, але повідомлення в чергу не пішло» зникає як клас проблем.',
              links:[
                {t:'Pattern: Transactional outbox',u:'https://microservices.io/patterns/data/transactional-outbox.html',k:'doc',s:'microservices.io'},
                {t:'Enterprise Integration Patterns: Messaging Patterns',u:'https://www.enterpriseintegrationpatterns.com/patterns/messaging/',k:'doc',s:'Gregor Hohpe'}
              ]}
          ]},
        {label:'Кешування',desc:'Де і що кешувати, cache-aside, інвалідація, TTL; кеш відповідей моделі на однакові запити, prompt caching на стороні API.',why:'Однакові запити до моделі кешуються цілком і коштують нуль; prompt caching зменшує рахунок за довгий системний промпт у кілька разів.',
          links:[
            {t:'HTTP caching',u:'https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching',k:'doc',s:'MDN'},
            {t:'Cache-Aside pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/cache-aside',k:'doc',s:'Azure Architecture Center'},
            {t:'Prompt caching: Claude API',u:'https://docs.claude.com/en/docs/build-with-claude/prompt-caching',k:'doc',s:'Anthropic Docs'},
            {t:'Cache Systems Every Developer Should Know',u:'https://www.youtube.com/watch?v=dGAgxozNWFE',k:'video',s:'YouTube · ByteByteGo'},
            {t:'TwoHardThings',u:'https://martinfowler.com/bliki/TwoHardThings.html',k:'article',s:'martinfowler.com',w:'Інвалідація кешу як одна з двох важких речей'}
          ]},
        {label:'Моноліт чи сервіси',type:'optional',desc:'Коли дробити систему на сервіси, а коли це передчасно; strangler fig для поступового винесення.',why:'AI-частину часто виносять окремим сервісом через інші вимоги до масштабування, деплою і залежностей (великі ML-бібліотеки).',
          links:[
            {t:'MonolithFirst',u:'https://martinfowler.com/bliki/MonolithFirst.html',k:'article',s:'martinfowler.com'},
            {t:'Microservices',u:'https://martinfowler.com/articles/microservices.html',k:'article',s:'martinfowler.com'},
            {t:'MicroservicePremium',u:'https://martinfowler.com/bliki/MicroservicePremium.html',k:'article',s:'martinfowler.com'},
            {t:'Strangler Fig pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/strangler-fig',k:'doc',s:'Azure Architecture Center'},
            {t:'The Problem With Microservices',u:'https://www.youtube.com/watch?v=zzMLg3Ys5vI',k:'video',s:'YouTube · Modern Software Engineering'}
          ]},
        {label:'Документація і ADR',type:'optional',desc:'Запис архітектурних рішень з причинами (ADR, MADR), C4-діаграми, Mermaid у репо, структура документації за Diátaxis.',why:'Агент читає ADR і CLAUDE.md як контекст і не пропонує те, від чого команда вже відмовилась; але сам факт файлу нічого не гарантує, важливо, що і як там написано.',
          links:[
            {t:'Architectural Decision Records',u:'https://adr.github.io/',k:'doc',s:'adr.github.io'},
            {t:'MADR: Markdown Architectural Decision Records',u:'https://adr.github.io/madr/',k:'doc',s:'adr.github.io'},
            {t:'C4 model',u:'https://c4model.com/',k:'doc',s:'c4model.com'},
            {t:'Mermaid: About',u:'https://mermaid.js.org/intro/',k:'doc',s:'Mermaid Docs'},
            {t:'Diátaxis',u:'https://diataxis.fr/',k:'doc',s:'diataxis.fr',w:'Чотири типи документації і чому їх не варто змішувати'}
          ],
          children:[
            {label:'CLAUDE.md і AGENTS.md як контекст',desc:'Файли з інструкціями для агента в корені репо: що читати, як запускати тести, яких рішень триматись; як агенти насправді їх читають.',why:'Документація стає інтерфейсом для агента, і її якість прямо впливає на якість згенерованого коду.',
              links:[
                {t:'Claude Code: Manage Claude\'s memory',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Claude Code Docs'},
                {t:'agentsmd/agents.md',u:'https://github.com/agentsmd/agents.md',k:'github',s:'GitHub',w:'Відкритий формат AGENTS.md для різних агентів'},
                {t:'Claude Code, Cursor і Codex: як агенти читають документацію? Чому CLAUDE.md нічого не гарантує',u:'https://www.youtube.com/watch?v=GWGFNRM0o40',k:'video',y:2026,s:'BeerCode'},
                {t:'Як AI-агенти використовують CLAUDE.md і документацію',u:'https://t.me/beerphp/193',k:'post',y:2026,s:'beerphp'}
              ]}
          ]}
      ]},
    {label:'Спостережуваність: логи, метрики, трейси',side:'right',desc:'Як дізнатись, що сервіс робить у проді: структуровані логи, метрики Prometheus, розподілені трейси OpenTelemetry, дашборди й алерти Grafana, health checks, error tracking.',why:'Прогін агента це десятки викликів моделі й тулів; без трейсу неможливо зрозуміти, де він витратив 40 секунд і 2 долари. OpenTelemetry уже має конвенції для GenAI, тож стек той самий, що й для решти сервісу.',
      links:[
        {t:'OpenTelemetry Documentation',u:'https://opentelemetry.io/docs/',k:'doc',s:'OpenTelemetry Docs'},
        {t:'Observability primer',u:'https://opentelemetry.io/docs/concepts/observability-primer/',k:'doc',s:'OpenTelemetry Docs'},
        {t:'Monitoring Distributed Systems',u:'https://sre.google/sre-book/monitoring-distributed-systems/',k:'course',s:'Google SRE Book',w:'Чотири золоті сигнали: latency, traffic, errors, saturation'},
        {t:'OpenTelemetry Course - Understand Software Performance',u:'https://www.youtube.com/watch?v=r8UvWSX3KA8',k:'video',s:'YouTube · freeCodeCamp.org'},
        {t:'Observability Engineering (безкоштовна книга від Honeycomb)',u:'https://info.honeycomb.io/observability-engineering-oreilly-book-2022',k:'course',s:'Honeycomb'},
        {t:'The Twelve-Factor App: Logs',u:'https://12factor.net/logs',k:'article',s:'12factor.net'}
      ],
      children:[
        {label:'Структуровані логи і correlation id',desc:'Логи як JSON з полями, а не рядки тексту; request id і trace id у кожному записі; рівні; structlog або loguru в Python, pino в Node.',why:'Коли агент впав на пʼятому кроці, ви шукаєте всі записи за одним id, а не грепаєте текст по часу.',
          links:[
            {t:'structlog',u:'https://www.structlog.org/en/stable/',k:'doc',s:'structlog Docs'},
            {t:'Loguru',u:'https://loguru.readthedocs.io/en/stable/',k:'doc',s:'Loguru Docs'},
            {t:'pino',u:'https://getpino.io/',k:'doc',s:'getpino.io',w:'Найшвидший JSON-логер для Node'},
            {t:'Logging HOWTO',u:'https://docs.python.org/3/howto/logging.html',k:'doc',s:'Python Docs'},
            {t:'Logs vs. Structured Events',u:'https://charity.wtf/2019/02/05/logs-vs-structured-events/',k:'article',s:'Charity Majors'}
          ]},
        {label:'Метрики: Prometheus, RED/USE',desc:'Лічильники, гістограми й gauge; метод RED для сервісів (rate, errors, duration) і USE для ресурсів; client_python, експорт через /metrics або OTLP.',why:'Кількість викликів моделі, частка помилок 429, латентність p95 і витрачені токени за хвилину: це метрики, і їх треба бачити до того, як подзвонить замовник.',
          links:[
            {t:'Prometheus: Overview',u:'https://prometheus.io/docs/introduction/overview/',k:'doc',s:'Prometheus Docs'},
            {t:'Prometheus: Instrumentation best practices',u:'https://prometheus.io/docs/practices/instrumentation/',k:'doc',s:'Prometheus Docs'},
            {t:'Prometheus: Metric and label naming',u:'https://prometheus.io/docs/practices/naming/',k:'doc',s:'Prometheus Docs'},
            {t:'The RED Method: How to Instrument Your Services',u:'https://grafana.com/blog/2018/08/02/the-red-method-how-to-instrument-your-services/',k:'article',s:'Grafana Labs'},
            {t:'The USE Method',u:'https://www.brendangregg.com/usemethod.html',k:'article',s:'Brendan Gregg'},
            {t:'How Prometheus Monitoring works | Prometheus Architecture explained',u:'https://www.youtube.com/watch?v=h4Sl21AKiDg',k:'video',s:'YouTube · TechWorld with Nana'}
          ]},
        {label:'Трейсинг: OpenTelemetry',desc:'Спани, контекст, що передається між сервісами, OTel SDK для Python і JS, автоінструментація FastAPI і httpx, Collector і OTLP як транспорт до будь-якого бекенду.',why:'Один трейс показує весь прогін агента: запит користувача, кожен виклик моделі з токенами, кожен тул, запити до бази. Це базовий інструмент дебагу агентів.',
          links:[
            {t:'Traces',u:'https://opentelemetry.io/docs/concepts/signals/traces/',k:'doc',s:'OpenTelemetry Docs'},
            {t:'OpenTelemetry Python: Getting Started',u:'https://opentelemetry.io/docs/languages/python/getting-started/',k:'doc',s:'OpenTelemetry Docs'},
            {t:'OpenTelemetry JS: Getting Started (Node.js)',u:'https://opentelemetry.io/docs/languages/js/getting-started/nodejs/',k:'doc',s:'OpenTelemetry Docs'},
            {t:'Python zero-code instrumentation',u:'https://opentelemetry.io/docs/zero-code/python/',k:'doc',s:'OpenTelemetry Docs',w:'Трейси FastAPI і httpx без зміни коду'},
            {t:'Collector',u:'https://opentelemetry.io/docs/collector/',k:'doc',s:'OpenTelemetry Docs'},
            {t:'open-telemetry/opentelemetry-python-contrib',u:'https://github.com/open-telemetry/opentelemetry-python-contrib',k:'github',s:'GitHub'}
          ],
          children:[
            {label:'GenAI semantic conventions в OTel',desc:'Стандартні атрибути спанів для викликів моделей і агентів: gen_ai.provider.name, модель, токени, інструменти; на них стоять Langfuse, Phoenix, Logfire, OpenLLMetry.',why:'Один стандарт замість власних полів у кожному фреймворку: трейс агента читається тим самим Grafana Tempo, що й решта сервісу.',
              links:[
                {t:'Semantic conventions for generative AI systems',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/',k:'doc',s:'OpenTelemetry Docs'},
                {t:'Semantic conventions for generative client AI spans',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-spans/',k:'doc',s:'OpenTelemetry Docs'},
                {t:'Semantic conventions for GenAI agent and framework spans',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/',k:'doc',s:'OpenTelemetry Docs'},
                {t:'Inside the LLM Call: GenAI Observability with OpenTelemetry',u:'https://opentelemetry.io/blog/2026/genai-observability/',k:'article',y:2026,s:'OpenTelemetry Blog'},
                {t:'Pydantic Logfire',u:'https://logfire.pydantic.dev/docs/',k:'doc',s:'Logfire Docs',w:'Платформа на OTel від авторів pydantic, зручна для FastAPI і агентів'},
                {t:'traceloop/openllmetry',u:'https://github.com/traceloop/openllmetry',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Дашборди, алерти, SLO: Grafana',desc:'Grafana для дашбордів поверх Prometheus, Loki для логів, Tempo для трейсів; алерти на симптоми, а не на причини; SLO і error budget.',why:'Алерт «частка помилок моделі понад 5% за 5 хвилин» будить вас раніше за користувачів; SLO відповідає, чи взагалі варто будити.',
          links:[
            {t:'Grafana documentation',u:'https://grafana.com/docs/grafana/latest/',k:'doc',s:'Grafana Docs'},
            {t:'Grafana Loki documentation',u:'https://grafana.com/docs/loki/latest/',k:'doc',s:'Grafana Docs'},
            {t:'Grafana Tempo documentation',u:'https://grafana.com/docs/tempo/latest/',k:'doc',s:'Grafana Docs'},
            {t:'Prometheus: Alerting overview',u:'https://prometheus.io/docs/alerting/latest/overview/',k:'doc',s:'Prometheus Docs'},
            {t:'Service Level Objectives',u:'https://sre.google/sre-book/service-level-objectives/',k:'course',s:'Google SRE Book'},
            {t:'Implementing SLOs',u:'https://sre.google/workbook/implementing-slos/',k:'course',s:'Google SRE Workbook'}
          ]},
        {label:'Health checks і graceful shutdown',type:'optional',desc:'Ендпоінти liveness і readiness, перевірка залежностей (база, провайдер моделі), коректне завершення на SIGTERM із дочеканням поточних запитів.',why:'Оркестратор перезапускає контейнер за health check; без readiness трафік піде на сервіс, який ще не підняв пул до бази.',
          links:[
            {t:'Configure Liveness, Readiness and Startup Probes',u:'https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/',k:'doc',s:'Kubernetes Docs'},
            {t:'Pattern: Health Check API',u:'https://microservices.io/patterns/observability/health-check-api.html',k:'doc',s:'microservices.io'},
            {t:'Health Endpoint Monitoring pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/health-endpoint-monitoring',k:'doc',s:'Azure Architecture Center'}
          ]},
        {label:'Error tracking: Sentry',type:'optional',desc:'Збір винятків зі стеком, контекстом запиту і групуванням однакових помилок; інтеграції з FastAPI, Node, фронтендом.',why:'Виняток у тулі агента з повним контекстом (який промпт, яка модель, який крок) прилітає у Sentry одразу, а не знаходиться в логах через день.',
          links:[
            {t:'getsentry/sentry-python',u:'https://github.com/getsentry/sentry-python',k:'github',s:'GitHub'},
            {t:'getsentry/sentry',u:'https://github.com/getsentry/sentry',k:'github',s:'GitHub',w:'Відкритий код, можна хостити самому'},
            {t:'SigNoz/signoz',u:'https://github.com/SigNoz/signoz',k:'github',s:'GitHub',w:'Відкрита альтернатива на OpenTelemetry: логи, метрики, трейси разом'}
          ]}
      ]}
  ]
};
