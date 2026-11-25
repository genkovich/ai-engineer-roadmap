window.ROADMAPS=window.ROADMAPS||{};
window.ROADMAPS['agentic-workflow']={
  slug:'agentic-workflow',
  title:'Метод роботи з агентами',
  intro:'Перший крок маршруту. Це не окрема технологія, а спосіб працювати: специфікація і тест до коду, агент пише реалізацію, ви читаєте диф як чужий пул-реквест і міряєте, чи стало швидше. Тренувати його можна з завтрашнього дня на будь-якій задачі зі спринту, без LLM у проді: усе далі в маршруті ви робитимете цим же методом.',
  root:{label:'Метод роботи з агентами',kicker:'спосіб працювати, не інструмент',desc:'Цикл від вимог до релізу, де агент виконує етап (пише код, ганяє тести, шукає по репо), а рішення ухвалює людина. Спершу специфікація й тест, потім агент пише код, потім ви читаєте його диф як чужий пул-реквест. Інструменти міняються щопівроку, цикл лишається.',why:'Код пише агент, але в проді падає ваш сервіс. Метод потрібен, щоб відповідальність лишалась у вас, а швидкість зʼявилась від агента.',
    links:[
      {t:'Best practices for Claude Code',u:'https://code.claude.com/docs/en/best-practices',k:'doc',s:'Anthropic Docs',w:'Базовий цикл explore, plan, code, commit від команди Claude Code'},
      {t:'Agentic Engineering: Мій ідеальний AI Workflow розробки',u:'https://www.youtube.com/watch?v=4uLqamwjl-w',k:'video',y:2026,s:'YouTube · BeerCode',w:'Весь цикл від постановки до мерджу на реальному проєкті'},
      {t:'What is agentic engineering?',u:'https://simonwillison.net/guides/agentic-engineering-patterns/what-is-agentic-engineering/',k:'article',y:2026,s:'Simon Willison',w:'Перший розділ його гайду про роботу з coding agents'},
      {t:'Agentic Engineering',u:'https://addyosmani.com/blog/agentic-engineering/',k:'article',y:2026,s:'Addy Osmani',w:'Агент робить реалізацію, інженер відповідає за архітектуру і правильність'},
      {t:'The role of developer skills in agentic coding',u:'https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html',k:'article',y:2025,s:'martinfowler.com',w:'Birgitta Böckeler про те, де саме потрібна людина в циклі з агентом'},
      {t:'AI Workflow',u:'https://t.me/beerphp/144',k:'post',y:2026,s:'beerphp',w:'Чому довіра до згенерованого коду падає і що з цим робити'}
    ]},
  end:{label:'Далі: Контекст →',href:'context.html'},
  groups:[
    {label:'Постановка задачі',side:'left',desc:'Специфікація до коду: що має робити зміна, що ні, як це перевірити. Без неї агент заповнює прогалини власними припущеннями, і ви дізнаєтесь про них у проді.',why:'Агент робить рівно те, що написано. Якість результату дорівнює якості постановки.',
      links:[
        {t:'My LLM codegen workflow atm',u:'https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/',k:'article',y:2025,s:'Harper Reed',w:'Класика: ідея, spec.md, план, і лише потім код'},
        {t:'Here\'s how I use LLMs to help me write code',u:'https://simonwillison.net/2025/Mar/11/using-llms-for-code/',k:'article',y:2025,s:'Simon Willison',w:'Як ставити задачу так, щоб LLM не вгадувала'},
        {t:'Чому AI пише тобі сміття: 5 помилок, які роблять всі',u:'https://www.youtube.com/watch?v=wOW0-RZDPbA',k:'video',y:2026,s:'YouTube · BeerCode',w:'Більшість помилок саме в постановці'},
        {t:'My LLM coding workflow going into 2026',u:'https://addyo.substack.com/p/my-llm-coding-workflow-going-into',k:'article',y:2025,s:'Addy Osmani'},
        {t:'The New Code - Sean Grove, OpenAI | AI Engineer',u:'https://www.youtube.com/watch?v=8rABwKRsec4',k:'video',y:2025,s:'YouTube · AI Engineer',w:'Специфікація як головний артефакт, код як її похідна'},
        {t:'Prompts I use',u:'https://simonwillison.net/guides/agentic-engineering-patterns/prompts/',k:'article',y:2026,s:'Simon Willison'}
      ],
      children:[
        {label:'Специфікація: що, що ні, як перевірити',desc:'Короткий текст перед задачею: очікувана поведінка, межі зміни і критерій готовності. Пишеться для агента так само, як для нового колеги.',why:'Спека і є контракт, проти якого ви потім ревʼюєте диф.',
          links:[
            {t:'My LLM codegen workflow atm',u:'https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/',k:'article',y:2025,s:'Harper Reed'},
            {t:'Best practices for Claude Code',u:'https://code.claude.com/docs/en/best-practices',k:'doc',s:'Anthropic Docs',w:'Розділ про те, як давати задачу: конкретно, з прикладами й перевіркою'},
            {t:'Specs - Kiro Docs',u:'https://kiro.dev/docs/specs/',k:'doc',s:'Kiro',w:'Requirements, design, tasks: приклад структури спеки для агента'}
          ],
          children:[
            {label:'Очікувана поведінка і приклади',desc:'Один-два конкретні приклади входу й виходу замість абстрактного опису.',why:'Приклад агент розуміє точніше за абзац тексту.',
              links:[{t:'Best practices for Claude Code',u:'https://code.claude.com/docs/en/best-practices',k:'doc',s:'Anthropic Docs'}]},
            {label:'Межі: чого не чіпати',desc:'Явний список файлів, модулів або поведінки, які зміна не має зачепити.',why:'Без меж агент «покращує» сусідній код, і диф роздувається.',
              links:[{t:'Agentic Coding Recommendations',u:'https://lucumr.pocoo.org/2025/6/12/agentic-coding/',k:'article',y:2025,s:'Armin Ronacher',w:'Як тримати агента в межах задачі і структури проєкту'}]},
            {label:'Критерій готовності',desc:'Яка перевірка має пройти, щоб задача вважалась зробленою: тест, команда, ручний сценарій.',why:'Інакше «готово» агента нема з чим порівняти.',
              links:[{t:'Loop Engineering',u:'https://www.oreilly.com/radar/loop-engineering/',k:'article',y:2026,s:'O\'Reilly Radar',w:'«Готово» агента - це заява, а не доказ; критерій має бути перевірним'}]}
          ]},
        {label:'Spec-driven development: Kiro, Spec Kit',desc:'Підхід, де спека стає окремим артефактом у репо: requirements, design, tasks, і агент працює від них, а не від чату. Інструменти: Kiro (AWS), GitHub Spec Kit, Tessl.',why:'Коли спека лежить у репо, її можна ревʼювати, версіонувати й віддати іншому агенту без втрати змісту.',
          links:[
            {t:'Understanding Spec-Driven-Development: Kiro, spec-kit, and Tessl',u:'https://martinfowler.com/articles/exploring-gen-ai/sdd-3-tools.html',k:'article',y:2025,s:'martinfowler.com',w:'Порівняння трьох підходів і де вони ламаються'},
            {t:'Spec-driven development with AI: Get started with a new open source toolkit',u:'https://github.blog/ai-and-ml/generative-ai/spec-driven-development-with-ai-get-started-with-a-new-open-source-toolkit/',k:'article',y:2025,s:'GitHub Blog'},
            {t:'github/spec-kit',u:'https://github.com/github/spec-kit',k:'github',s:'GitHub'},
            {t:'Kiro and the future of AI spec-driven software development',u:'https://kiro.dev/blog/kiro-and-the-future-of-software-development/',k:'article',y:2025,s:'Kiro',w:'Marc Brooker про спеку як версіонований артефакт'},
            {t:'Spec-driven development | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/spec-driven-development',k:'article',y:2025,s:'Thoughtworks Radar'}
          ]},
        {label:'Декомпозиція на кроки',desc:'Велика задача ріжеться на частини, кожна з яких перевіряється окремо і вкладається в один контекст агента.',why:'Задача, що не вміщається в одну сесію, губить контекст на середині і ламається непомітно.',
          links:[
            {t:'My LLM codegen workflow atm',u:'https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/',k:'article',y:2025,s:'Harper Reed',w:'План, нарізаний на кроки, кожен крок окремий промпт'},
            {t:'humanlayer/12-factor-agents',u:'https://github.com/humanlayer/12-factor-agents',k:'github',s:'GitHub',w:'Фактор «small, focused agents»: маленькі задачі, передбачуваний результат'},
            {t:'Effective harnesses for long-running agents',u:'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',k:'article',y:2025,s:'Anthropic',w:'Як різати довгу роботу на сесії, що не губляться'}
          ]},
        {label:'План перед кодом: plan mode',desc:'Агент спершу пропонує план змін (які файли, який підхід), а ви його правите, і лише потім він пише код. У Claude Code це окремий plan mode, у Codex і Cursor схожі режими.',why:'Поправити план дешевше, ніж переписувати готовий диф.',
          links:[
            {t:'Common workflows - Claude Code Docs',u:'https://code.claude.com/docs/en/common-workflows',k:'doc',s:'Anthropic Docs',w:'Розділ про plan mode і цикл «спершу план»'},
            {t:'Best practices for Claude Code',u:'https://code.claude.com/docs/en/best-practices',k:'doc',s:'Anthropic Docs'},
            {t:'How far can we push AI autonomy in code generation?',u:'https://martinfowler.com/articles/pushing-ai-autonomy.html',k:'article',y:2025,s:'martinfowler.com',w:'Експеримент Thoughtworks: де план рятує, а де агент все одно зносить'},
            {t:'Vibing a Non-Trivial Ghostty Feature',u:'https://mitchellh.com/writing/non-trivial-vibing',k:'article',y:2025,s:'Mitchell Hashimoto',w:'Сесії планування без коду перед реалізацією, з усіма промптами'}
          ]},
        {label:'Контекст у постановці',desc:'Разом із задачею агент отримує те, без чого помилиться: де лежить схожий код, які домовленості в проєкті, як запустити тести.',why:'Агент знає лише те, що бачить у контексті. Решти для нього не існує.',
          links:[
            {t:'Чому агент тупить при вирішенні бажинок?',u:'https://t.me/beerphp/182',k:'post',y:2026,s:'beerphp',w:'Чому один баг фікситься одразу, а інший ні: справа в контексті'},
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic'},
            {t:'Context Engineering: Bringing Engineering Discipline to Prompts',u:'https://addyo.substack.com/p/context-engineering-bringing-engineering',k:'article',y:2025,s:'Addy Osmani'},
            {t:'Anchoring AI to a reference application',u:'https://martinfowler.com/articles/exploring-gen-ai/anchoring-to-reference.html',k:'article',y:2025,s:'martinfowler.com',w:'Дати агенту еталонний код замість опису словами'}
          ]},
        {label:'Коли агент не потрібен',type:'optional',desc:'Зміна на один рядок, незрозуміла вам самим задача або код, який ви хочете вивчити руками.',why:'Пояснення задачі агенту інколи довше за саму задачу.',
          links:[
            {t:'My AI Adoption Journey',u:'https://mitchellh.com/writing/my-ai-adoption-journey',k:'article',y:2026,s:'Mitchell Hashimoto',w:'Чесно про те, де агенти йому не допомогли, і як він це зʼясував'},
            {t:'I still care about the code',u:'https://martinfowler.com/articles/exploring-gen-ai/i-still-care-about-the-code.html',k:'article',y:2025,s:'martinfowler.com'},
            {t:'Anti-patterns: things to avoid',u:'https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/',k:'article',y:2026,s:'Simon Willison'}
          ]}
      ]},
    {label:'Test-first',side:'right',desc:'Тест пишеться до того, як агент бере задачу. Агент отримує червоний тест і завдання зробити його зеленим.',why:'Без тесту до коду «готово» агента нема з чим порівняти, і перевіряти доводиться на око.',
      links:[
        {t:'Red/green TDD',u:'https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/',k:'article',y:2026,s:'Simon Willison',w:'Червоний тест, зелений тест, рефакторинг: цикл для агента'},
        {t:'TDD inside the agent loop - theater or actual value?',u:'https://martinfowler.com/articles/exploring-gen-ai/tdd-in-the-agent-loop.html',k:'article',y:2026,s:'martinfowler.com',w:'Чи справді TDD в агентному циклі щось дає, з експериментом'},
        {t:'Augmented Coding: Beyond the Vibes',u:'https://tidyfirst.substack.com/p/augmented-coding-beyond-the-vibes',k:'article',y:2025,s:'Kent Beck',w:'Beck про те, як TDD тримає агента в руках'},
        {t:'TDD, AI agents and coding with Kent Beck',u:'https://www.youtube.com/watch?v=aSXaxOdVtAQ',k:'video',y:2025,s:'YouTube · The Pragmatic Engineer'},
        {t:'Canon TDD',u:'https://tidyfirst.substack.com/p/canon-tdd',k:'article',y:2023,s:'Kent Beck',w:'Канонічний TDD від автора, щоб не плутати з «написати тести після»'},
        {t:'Best practices for Claude Code',u:'https://code.claude.com/docs/en/best-practices',k:'doc',s:'Anthropic Docs',w:'Є окремий сценарій «write tests, commit; code, iterate, commit»'}
      ],
      children:[
        {label:'Тест як постановка задачі',desc:'Тест фіксує очікувану поведінку точніше за текст: вхід, вихід, крайні випадки.',why:'Агент не може «не так зрозуміти» тест, який падає.',
          links:[
            {t:'Red/green TDD',u:'https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/',k:'article',y:2026,s:'Simon Willison'},
            {t:'Test Driven Development',u:'https://martinfowler.com/bliki/TestDrivenDevelopment.html',k:'article',s:'martinfowler.com'},
            {t:'Persistent Prompting',u:'https://newsletter.kentbeck.com/p/persistent-prompting',k:'article',y:2025,s:'Kent Beck',w:'Його постійне правило агенту: без червоного тесту коду не писати'}
          ]},
        {label:'Червоний тест до коду',desc:'Переконатися, що тест справді падає без змін. Тест, який зелений одразу, нічого не перевіряє.',why:'Агент охоче «виправляє» тест замість коду, якщо не бачить різниці.',
          links:[
            {t:'First run the tests',u:'https://simonwillison.net/guides/agentic-engineering-patterns/first-run-the-tests/',k:'article',y:2026,s:'Simon Willison',w:'Перш ніж щось міняти, агент має побачити стан тестів'},
            {t:'Canon TDD',u:'https://tidyfirst.substack.com/p/canon-tdd',k:'article',y:2023,s:'Kent Beck'}
          ]},
        {label:'Крайні випадки у тестах',desc:'Порожній вхід, помилка зовнішнього сервісу, дубльоване повідомлення, одночасні виклики.',why:'Щасливий сценарій агент напише сам. Крайні випадки треба замовити явно.',
          links:[
            {t:'Agentic manual testing',u:'https://simonwillison.net/guides/agentic-engineering-patterns/agentic-manual-testing/',k:'article',y:2026,s:'Simon Willison',w:'Як доручити агенту ручні сценарії, які не покриті юніт-тестами'},
            {t:'Assessing internal quality while coding with an agent',u:'https://martinfowler.com/articles/exploring-gen-ai/ccmenu-quality.html',k:'article',y:2026,s:'martinfowler.com'}
          ]},
        {label:'Тести не чіпати: заборона агенту',desc:'Явне правило: тести змінювати не можна, якщо вони не очевидно неправильні, і про це треба сказати. Моделі справді схильні до reward hacking: обійти перевірку замість виправити код.',why:'Найпоширеніший спосіб агента зробити тест зеленим: послабити або видалити перевірку.',
          links:[
            {t:'Recent Frontier Models Are Reward Hacking',u:'https://metr.org/blog/2025-06-05-recent-reward-hacking/',k:'article',y:2025,s:'METR',w:'Задокументовані випадки, коли модель ламає тест, а не код'},
            {t:'Detecting misbehavior in frontier reasoning models',u:'https://openai.com/index/chain-of-thought-monitoring/',k:'article',y:2025,s:'OpenAI',w:'Моделі обходять тести і пишуть про це в reasoning'},
            {t:'Persistent Prompting',u:'https://newsletter.kentbeck.com/p/persistent-prompting',k:'article',y:2025,s:'Kent Beck'}
          ]},
        {label:'Запуск тестів агентом',desc:'Агент сам запускає тести після кожної зміни і читає результат, замість того щоб ви робили це за нього.',why:'Цикл «змінив, запустив, прочитав помилку» агент крутить швидше за людину.',
          links:[
            {t:'Feedback sensors for coding agents | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/feedback-sensors-for-coding-agents',k:'article',y:2026,s:'Thoughtworks Radar',w:'Компілятор, лінтер, тести як датчики у циклі агента'},
            {t:'Designing agentic loops',u:'https://simonwillison.net/2025/Sep/30/designing-agentic-loops/',k:'article',y:2025,s:'Simon Willison'},
            {t:'Як працює coding assistants під капотом',u:'https://t.me/beerphp/148',k:'post',y:2026,s:'beerphp',w:'Що відбувається всередині, коли агент читає помилку тесту'}
          ]},
        {label:'Mutation testing: Infection, Stryker',type:'optional',desc:'Інструмент навмисно ламає код і дивиться, чи впадуть тести. Infection для PHP, Stryker для JS/TS/C#. Показує, чи тести агента справді щось перевіряють.',why:'Покриття 100% від агента нічого не означає. Mutation score означає.',
          links:[
            {t:'Infection',u:'https://infection.github.io/',k:'doc',s:'Infection'},
            {t:'Stryker Mutator',u:'https://stryker-mutator.io/',k:'doc',s:'Stryker'},
            {t:'As AI Accelerates Software Complexity, Thoughtworks Technology Radar Urges a Return to Engineering Fundamentals to Combat Cognitive Debt',u:'https://www.thoughtworks.com/about-us/news/2026/combat-ai-cognitive-debt-radar-v34',k:'article',y:2026,s:'Thoughtworks',w:'Mutation testing як зворотний контроль у харнесі агента'}
          ]}
      ]},
    {label:'Ревʼю дифа агента',side:'left',desc:'Диф агента читається як чужий пул-реквест, перш ніж мерджити. Код, прийнятий не читаючи, це vibe coding.',why:'Саме тут лишається ваша відповідальність: в проді падає ваш сервіс, а не агент.',
      links:[
        {t:'Code Review in the Age of AI - by Addy Osmani',u:'https://addyo.substack.com/p/code-review-in-the-age-of-ai',k:'article',y:2025,s:'Addy Osmani'},
        {t:'Agentic Code Review',u:'https://www.oreilly.com/radar/agentic-code-review/',k:'article',y:2026,s:'O\'Reilly Radar',w:'Ревʼю стає вузьким місцем, коли агенти пишуть більше за людей'},
        {t:'Introduction | eng-practices',u:'https://google.github.io/eng-practices/review/',k:'doc',s:'Google',w:'Еталонний гайд з code review, працює і для дифів агента'},
        {t:'Anthropic Outlines its AI-Powered Code Review Process for Claude Code',u:'https://www.infoq.com/news/2026/11/claude-code-review',k:'article',y:2026,s:'InfoQ',w:'Як команда Claude Code ревʼює код, який на 90% пише агент'},
        {t:'A Fireside Chat with Cat and Thariq from the Claude Code team',u:'https://simonwillison.net/2026/Jul/21/cat-and-thariq/',k:'article',y:2026,s:'Simon Willison'},
        {t:'Complacency with AI-generated code | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/complacency-with-ai-generated-code',k:'article',y:2025,s:'Thoughtworks Radar',w:'Thoughtworks поставили «розслаблене ревʼю» у Hold'}
      ],
      children:[
        {label:'Читати як чужий PR',desc:'Той самий стандарт, що й для коду колеги: кожен змінений файл прочитаний, кожна незрозуміла зміна обговорена.',why:'Агент пише впевнено і неправильно однаково переконливо.',
          links:[
            {t:'Introduction | eng-practices',u:'https://google.github.io/eng-practices/review/',k:'doc',s:'Google'},
            {t:'Should AI Engineers Still Read Code in 2026? The Z/L Continuum - Alex Volkov, ThursdAI | AI Engineer',u:'https://www.youtube.com/watch?v=ZpK5PWX2YRM',k:'video',y:2026,s:'YouTube · AI Engineer',w:'Дискусія про те, скільки коду агента взагалі треба читати'},
            {t:'Vibe engineering',u:'https://simonwillison.net/2025/Oct/7/vibe-engineering/',k:'article',y:2025,s:'Simon Willison'}
          ]},
        {label:'Чекліст ревʼю',desc:'Що перевіряти щоразу: чи зроблено саме те, що просили; чи не зачеплено зайве; чи тести перевіряють поведінку; чи немає секретів і сміття в дифі.',why:'Чекліст тримає увагу, коли ревʼюєте пʼятий диф за день.',
          links:[
            {t:'Code Review in the Age of AI - by Addy Osmani',u:'https://addyo.substack.com/p/code-review-in-the-age-of-ai',k:'article',y:2025,s:'Addy Osmani'},
            {t:'AI vs Human Code Generation Report',u:'https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report',k:'article',y:2025,s:'CodeRabbit',w:'Які саме класи помилок частіші в PR від агентів: логіка, читабельність, обробка помилок'}
          ],
          children:[
            {label:'Зміна відповідає спеці',desc:'Диф робить те, що написано в постановці, і нічого поза нею.',why:'Агент любить додавати «корисне» поза задачею.',
              links:[{t:'The Intent Debt',u:'https://www.oreilly.com/radar/the-intent-debt/',k:'article',y:2026,s:'O\'Reilly Radar'}]},
            {label:'Зайві файли й рефакторинг',desc:'Перейменування, форматування і «покращення» в сусідніх файлах, яких ніхто не просив.',why:'Розмазаний диф неможливо ревʼювати і важко відкотити.',
              links:[{t:'Small CLs | eng-practices',u:'https://google.github.io/eng-practices/review/developer/small-cls.html',k:'doc',s:'Google'}]},
            {label:'Тести перевіряють поведінку',desc:'Чи тест упаде, якщо зламати функцію. Чи не замокано те, що треба було перевірити.',why:'Тести на 100% покриття, які нічого не перевіряють, агент генерує легко.',
              links:[{t:'Infection',u:'https://infection.github.io/',k:'doc',s:'Infection',w:'Mutation testing відповідає на це питання автоматично'}]},
            {label:'Секрети, залежності, міграції',desc:'Нові пакети, зміни схеми бази, ключі у файлах: усе це окремий пункт уваги.',why:'Один випадково доданий пакет або закомічений .env коштує дорожче за весь виграш у часі.',
              links:[{t:'Безпека AI-агентів: як атакують Claude Code, Cursor і Codex',u:'https://www.youtube.com/watch?v=QKRs6IHV-y4',k:'video',y:2026,s:'YouTube · BeerCode'}]}
          ]},
        {label:'Розмір PR і час ревʼю',desc:'Агент генерує код швидше, ніж команда його читає, і PR ростуть. Правило лишається: малий диф, одна зміна на PR, стек з кількох PR замість одного великого.',why:'Великий PR або ревʼюється формально, або лежить. Обидва варіанти зʼїдають виграш від агента.',
          links:[
            {t:'Small CLs | eng-practices',u:'https://google.github.io/eng-practices/review/developer/small-cls.html',k:'doc',s:'Google'},
            {t:'Speed of Code Reviews | eng-practices',u:'https://google.github.io/eng-practices/review/reviewer/speed.html',k:'doc',s:'Google'},
            {t:'Бачу одну й ту саму картину в різних командах',u:'https://t.me/beerphp/226',k:'post',y:2026,s:'beerphp',w:'PR більшають, ревʼю не встигає, ефект ніхто не міряє'},
            {t:'Agentic Code Review',u:'https://www.oreilly.com/radar/agentic-code-review/',k:'article',y:2026,s:'O\'Reilly Radar'}
          ]},
        {label:'AI-ревʼю як перший фільтр',desc:'Окремий агент (Claude Code Code Review, Codex review, Copilot code review, CodeRabbit) читає PR до людини: ловить очевидні баги, безпеку, відхилення від правил репо. Людина лишається останньою.',why:'Перший прохід машиною знімає рутину з ревʼюера, але не знімає з нього відповідальності за мердж.',
          links:[
            {t:'Code Review - Claude Code Docs',u:'https://code.claude.com/docs/en/code-review',k:'doc',s:'Anthropic Docs'},
            {t:'Code Review for Claude Code',u:'https://claude.com/blog/code-review',k:'article',y:2026,s:'Claude Blog',w:'Команда агентів шукає баги паралельно, потім відсіює хибні'},
            {t:'Custom Code Review rules for Codex',u:'https://developers.openai.com/blog/custom-code-review-rules-for-codex',k:'article',y:2026,s:'OpenAI',w:'Правила ревʼю в секції AGENTS.md'},
            {t:'GitHub Copilot code review - GitHub Docs',u:'https://docs.github.com/en/copilot/concepts/agent-capabilities/agent-powered-workflows-and-operations/code-review',k:'doc',s:'GitHub Docs'},
            {t:'CodeRabbit Docs',u:'https://docs.coderabbit.ai/',k:'doc',s:'CodeRabbit'},
            {t:'A quote from Addy Osmani, Morgan Westlee Lunt, and Qing Wang',u:'https://simonwillison.net/2026/Oct/16/code-review/',k:'article',y:2026,s:'Simon Willison',w:'Ревʼю як spellcheck: безперервно, поки пишеш'}
          ]},
        {label:'Правити самому чи повертати агенту',desc:'Дрібне правите руками, системне повертаєте агенту з коментарем, як колезі в ревʼю.',why:'Переписувати половину дифа руками означає, що постановка була погана. Це сигнал виправити її, а не код.',
          links:[
            {t:'Partner with the AI, throw away the code',u:'https://martinfowler.com/articles/exploring-gen-ai/partner-with-ai-and-throw-away-the-code.html',k:'article',y:2025,s:'martinfowler.com'},
            {t:'Vibing a Non-Trivial Ghostty Feature',u:'https://mitchellh.com/writing/non-trivial-vibing',k:'article',y:2025,s:'Mitchell Hashimoto',w:'Що він правив сам, а що повертав агенту, по сесіях'}
          ]},
        {label:'Коміти й історія після агента',desc:'Великий диф агента розбивається на осмислені коміти перед мерджем; повідомлення пояснюють, чому, а не що.',why:'Через місяць історію читатимуть люди і агенти. Обом потрібне «чому».',
          links:[
            {t:'Using Git with coding agents',u:'https://simonwillison.net/guides/agentic-engineering-patterns/using-git-with-coding-agents/',k:'article',y:2026,s:'Simon Willison'},
            {t:'How to Write a Git Commit Message',u:'https://cbea.ms/git-commit/',k:'article',s:'cbea.ms'},
            {t:'Conventional Commits',u:'https://www.conventionalcommits.org/en/v1.0.0/',k:'doc',s:'Conventional Commits',w:'Формат, який агент легко дотримує, якщо записати в правила'}
          ]},
        {label:'Коли відкинути диф цілком',type:'optional',desc:'Якщо диф не схожий на те, що ви просили, дешевше викинути його і переписати постановку, ніж правити.',why:'Три ітерації правок поверх поганого дифа коштують більше за новий старт.',
          links:[
            {t:'Partner with the AI, throw away the code',u:'https://martinfowler.com/articles/exploring-gen-ai/partner-with-ai-and-throw-away-the-code.html',k:'article',y:2025,s:'martinfowler.com'},
            {t:'Writing code is cheap now',u:'https://simonwillison.net/guides/agentic-engineering-patterns/code-is-cheap/',k:'article',y:2026,s:'Simon Willison',w:'Код дешевий: викинути і згенерувати заново часто правильніше'}
          ]}
      ]},
    {label:'Розподіл відповідальності',side:'right',desc:'AI пише реалізацію, людина відповідає за архітектуру, якість і правильність. Остаточне рішення завжди за людиною.',why:'Саме про це питають на співбесіді: що ви віддаєте агенту, а що лишаєте собі, і чому.',
      links:[
        {t:'Agentic Engineering',u:'https://addyosmani.com/blog/agentic-engineering/',k:'article',y:2026,s:'Addy Osmani'},
        {t:'Humans and Agents in Software Engineering Loops',u:'https://martinfowler.com/articles/exploring-gen-ai/humans-and-agents.html',k:'article',y:2026,s:'martinfowler.com',w:'Де в циклі стоїть людина і які рішення не делегуються'},
        {t:'Own the Outer Loop',u:'https://www.oreilly.com/radar/own-the-outer-loop/',k:'article',y:2026,s:'O\'Reilly Radar'},
        {t:'Andrej Karpathy: Software Is Changing (Again)',u:'https://www.youtube.com/watch?v=LCEmiRjPEtQ',k:'video',y:2025,s:'YouTube · Y Combinator',w:'Software 3.0 і «тримати AI на повідці»'},
        {t:'Всього 7% розробників довіряють AI важливі рішення',u:'https://t.me/beerphp/225',k:'post',y:2026,s:'beerphp'},
        {t:'Як вижити в IT у 2026 році?',u:'https://www.youtube.com/watch?v=VN-7dUP454k',k:'video',y:2026,s:'YouTube · BeerCode'}
      ],
      children:[
        {label:'Що віддавати агенту',desc:'Реалізація за спекою, тести за описом, рутинні зміни по шаблону, пошук по кодовій базі, чернетка документації.',why:'Це те, де агент швидший і де помилку легко побачити в дифі.',
          links:[
            {t:'How Anthropic teams use Claude Code',u:'https://claude.com/blog/how-anthropic-teams-use-claude-code',k:'article',y:2025,s:'Claude Blog',w:'Конкретні задачі, які команди Anthropic віддають агенту'},
            {t:'Embracing the parallel coding agent lifestyle',u:'https://simonwillison.net/2025/Oct/5/parallel-coding-agents/',k:'article',y:2025,s:'Simon Willison',w:'Ресерч, прототипи, рутинні зміни: що він доручає агентам'},
            {t:'Hoard things you know how to do',u:'https://simonwillison.net/guides/agentic-engineering-patterns/hoard-things-you-know-how-to-do/',k:'article',y:2026,s:'Simon Willison'}
          ]},
        {label:'Що лишати собі',desc:'Архітектурні рішення, межі модулів, вибір залежностей, усе, що важко відкотити, і фінальне «мерджимо».',why:'Помилка в архітектурі коштує місяців, і агент за неї не відповідає.',
          links:[
            {t:'Own the Outer Loop',u:'https://www.oreilly.com/radar/own-the-outer-loop/',k:'article',y:2026,s:'O\'Reilly Radar'},
            {t:'The role of developer skills in agentic coding',u:'https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html',k:'article',y:2025,s:'martinfowler.com'},
            {t:'The Intent Debt',u:'https://www.oreilly.com/radar/the-intent-debt/',k:'article',y:2026,s:'O\'Reilly Radar',w:'Намір - єдине, що мусить прийти від людини'}
          ]},
        {label:'Vibe coding проти agentic engineering',desc:'Vibe coding: прийняти код, не читаючи, поки «працює». Agentic engineering: спека, тест, ревʼю, і тільки потім мердж. Терміни від Karpathy, уточнені Willison і Osmani.',why:'Для пет-проєкту підійде перше. У проді, де падає ваш сервіс, лише друге.',
          links:[
            {t:'Not all AI-assisted programming is vibe coding (but vibe coding rocks)',u:'https://simonwillison.net/2025/Mar/19/vibe-coding/',k:'article',y:2025,s:'Simon Willison'},
            {t:'Vibe coding is not the same as AI-Assisted engineering.',u:'https://addyo.substack.com/p/vibe-coding-is-not-the-same-as-ai',k:'article',y:2025,s:'Addy Osmani'},
            {t:'To vibe or not to vibe',u:'https://martinfowler.com/articles/exploring-gen-ai/to-vibe-or-not-vibe.html',k:'article',y:2025,s:'martinfowler.com'},
            {t:'Vibe coding in prod | Code w/ Claude | Anthropic',u:'https://www.youtube.com/watch?v=fHWFF_pnqDk',k:'video',y:2025,s:'YouTube · Anthropic'},
            {t:'Agentic Engineering',u:'https://addyosmani.com/blog/agentic-engineering/',k:'article',y:2026,s:'Addy Osmani'}
          ]},
        {label:'Рівні автономії агента',desc:'Від автодоповнення до фонового агента, якому дають issue і отримують PR: автодоповнення, чат, агент у редакторі з підтвердженням, агент у CI, cloud-агент (Codex cloud, Copilot coding agent, Devin, Jules).',why:'Що вище автономія, то більше вимог до спеки, тестів і ревʼю. Рівень обирається під задачу, а не під моду.',
          links:[
            {t:'Autonomous coding agents: A Codex example',u:'https://martinfowler.com/articles/exploring-gen-ai/autonomous-agents-codex-example.html',k:'article',y:2025,s:'martinfowler.com'},
            {t:'Agents on a leash: Agentic AI remains mostly single-agent and monitored at work',u:'https://stackoverflow.blog/2026/05/27/agents-on-a-leash-agentic-ai-remains-mostly-monitored-at-work',k:'article',y:2026,s:'Stack Overflow',w:'Більшість досі не відпускає агентів на автопілот, і це нормально'},
            {t:'Anthropic, доволі чітко рухається в сторону автономної агентної системи для роботи',u:'https://t.me/beerphp/169',k:'post',y:2026,s:'beerphp'},
            {t:'Enabling Claude Code to work more autonomously',u:'https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously',k:'article',y:2025,s:'Anthropic'}
          ]},
        {label:'Відповідь на співбесіді',desc:'Готова історія про останню задачу: як ставили, що написав агент, що знайшли в ревʼю, що виправили. З реальними деталями.',why:'На співбесідах перевіряють саме метод, а не знання назв інструментів.',
          links:[
            {t:'Так, AI замінить тебе',u:'https://t.me/beerphp/141',k:'post',y:2026,s:'beerphp',w:'Але тільки якщо лишитись там, де ти є зараз'},
            {t:'Revenge of the junior developer | Sourcegraph',u:'https://sourcegraph.com/blog/revenge-of-the-junior-developer',k:'article',y:2025,s:'Sourcegraph',w:'Steve Yegge про те, хто виграє від агентів і чому'},
            {t:'Inside the Development Workflow of Claude Code\'s Creator - InfoQ',u:'https://www.infoq.com/news/2026/01/claude-code-creator-workflow',k:'article',y:2026,s:'InfoQ',w:'Приклад, як розповісти про свій workflow конкретно'}
          ]},
        {label:'Експертиза не зникає',desc:'Щоб ревʼюїти код агента, треба вміти його написати самому. Агент прискорює експерта і маскує прогалини в новачка.',why:'Ознака зрілості: метод працює разом із класичною інженерією, а не замість неї.',
          links:[
            {t:'The 70% problem: Hard truths about AI-assisted coding',u:'https://addyo.substack.com/p/the-70-problem-hard-truths-about',k:'article',y:2024,s:'Addy Osmani',w:'Останні 30% роботи вимагають саме інженерної експертизи'},
            {t:'Comprehension Debt: The Hidden Cost of AI-Generated Code',u:'https://www.oreilly.com/radar/comprehension-debt-the-hidden-cost-of-ai-generated-code/',k:'article',y:2026,s:'O\'Reilly Radar'},
            {t:'The role of developer skills in agentic coding',u:'https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html',k:'article',y:2025,s:'martinfowler.com'},
            {t:'Всього 7% розробників довіряють AI важливі рішення',u:'https://t.me/beerphp/225',k:'post',y:2026,s:'beerphp'}
          ]}
      ]},
    {label:'Інструменти: ландшафт coding agents',side:'left',desc:'Агенти для кодингу як клас: Claude Code, Codex CLI, Cursor, Gemini CLI, Aider, фонові агенти GitHub Copilot, Devin і Jules. Різні інтерфейси й моделі, той самий цикл: прочитати репо, спланувати, змінити, запустити, показати диф.',why:'Інструмент знати треба, але це базовий мінімум. Метод переноситься між ними майже без змін, і саме його варто тренувати.',
      links:[
        {t:'How coding agents work',u:'https://simonwillison.net/guides/agentic-engineering-patterns/how-coding-agents-work/',k:'article',y:2026,s:'Simon Willison',w:'Що всередині будь-якого coding agent: цикл з інструментами'},
        {t:'How to Build an Agent - Amp',u:'https://ampcode.com/how-to-build-an-agent',k:'article',y:2025,s:'Amp',w:'Thorsten Ball збирає coding agent на 300 рядків, щоб зняти магію'},
        {t:'5 Trends That Defined AI Engineering at World\'s Fair 2026',u:'https://latent.space/p/aiewf26trends',k:'article',y:2026,s:'Latent Space',w:'Coding agents витіснили IDE як основний інтерфейс розробника'},
        {t:'The results of the 2026 Developer Survey are here!',u:'https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/',k:'article',y:2026,s:'Stack Overflow',w:'Якими агентами реально користуються розробники у 2026'},
        {t:'Інструментів дуже багато і не зрозуміло чим користуватись',u:'https://t.me/beerphp/142',k:'post',y:2026,s:'beerphp'},
        {t:'Technology Radar | Thoughtworks',u:'https://www.thoughtworks.com/radar',k:'article',y:2026,s:'Thoughtworks Radar',w:'Що в Adopt, що в Trial, що в Hold серед агентних інструментів'}
      ],
      children:[
        {label:'Claude Code',type:'alt',desc:'Агент у терміналі від Anthropic: читає репо, пише код, запускає команди, працює з Git. Є CLAUDE.md, skills, субагенти, hooks, plan mode, headless-режим і версія в браузері.',why:'Найбільш опрацьована екосистема розширень, тому часто стає еталоном для решти.',
          links:[
            {t:'Overview - Claude Code Docs',u:'https://code.claude.com/docs/en/overview',k:'doc',s:'Anthropic Docs'},
            {t:'Mastering Claude Code in 30 minutes',u:'https://www.youtube.com/watch?v=6eBSHbLKuN0',k:'video',y:2025,s:'YouTube · Anthropic',w:'Boris Cherny показує базовий цикл роботи'},
            {t:'Claude Code & the evolution of agentic coding - Boris Cherny, Anthropic | AI Engineer',u:'https://www.youtube.com/watch?v=Lue8K2jqfKk',k:'video',y:2025,s:'YouTube · AI Engineer'},
            {t:'Claude Code | Technology Radar',u:'https://www.thoughtworks.com/radar/tools/claude-code',k:'article',y:2026,s:'Thoughtworks Radar'},
            {t:'hesreallyhim/awesome-claude-code',u:'https://github.com/hesreallyhim/awesome-claude-code',k:'github',s:'GitHub'},
            {t:'anthropics/claude-code',u:'https://github.com/anthropics/claude-code',k:'github',s:'GitHub'}
          ]},
        {label:'Codex CLI',type:'alt',desc:'Open-source агент у терміналі від OpenAI з жорстким sandbox за замовчуванням, AGENTS.md, codex exec для скриптів і CI, codex review і cloud-версією, що бере задачі з GitHub.',why:'Другий великий гравець; підхід до пісочниці та інструкцій у ньому варто знати навіть користувачам Claude Code.',
          links:[
            {t:'openai/codex',u:'https://github.com/openai/codex',k:'github',s:'GitHub'},
            {t:'Introducing Codex | OpenAI',u:'https://openai.com/index/introducing-codex/',k:'article',y:2025,s:'OpenAI'},
            {t:'Best practices - Codex',u:'https://developers.openai.com/codex/learn/best-practices',k:'doc',s:'OpenAI Docs'},
            {t:'Agent approvals & security - Codex',u:'https://developers.openai.com/codex/agent-approvals-security',k:'doc',s:'OpenAI Docs'},
            {t:'The Golden Age of AI Engineering - Alexander Embiricos & Romain Huet & Peter Steinberger, OpenAI | AI Engineer',u:'https://www.youtube.com/watch?v=pMggiOb18tc',k:'video',y:2026,s:'YouTube · AI Engineer'}
          ]},
        {label:'Cursor та агентні редактори',type:'alt',desc:'Редактор з вбудованим агентом: ті самі дії, але з інтерфейсом поверх коду. Має rules, hooks, CLI-агента, вікно з паралельними агентами у worktree і cloud-агентів.',why:'Для людей, які більше читають код, ніж пишуть команди, це часто швидше.',
          links:[
            {t:'Rules - Cursor Docs',u:'https://cursor.com/docs/rules',k:'doc',s:'Cursor Docs'},
            {t:'Best practices for coding with agents · Cursor',u:'https://cursor.com/blog/agent-best-practices',k:'article',y:2025,s:'Cursor'},
            {t:'Agents Window - Cursor Docs',u:'https://cursor.com/docs/agent/agents-window',k:'doc',s:'Cursor Docs',w:'Паралельні агенти в ізольованих worktree прямо в редакторі'},
            {t:'Cursor | Technology Radar',u:'https://www.thoughtworks.com/radar/tools/cursor',k:'article',y:2026,s:'Thoughtworks Radar'}
          ]},
        {label:'Gemini CLI, Aider та інші CLI',type:'alt',desc:'Gemini CLI: open-source агент від Google з GEMINI.md. Aider: один з перших термінальних агентів, працює з будь-якою моделлю, сильний у Git-дисципліні. Amp від Sourcegraph.',why:'Корисно знати альтернативи: щоб бачити, що в методі спільне, а що особливість одного вендора.',
          links:[
            {t:'google-gemini/gemini-cli',u:'https://github.com/google-gemini/gemini-cli',k:'github',s:'GitHub'},
            {t:'Google announces Gemini CLI: your open-source AI agent',u:'https://blog.google/technology/developers/introducing-gemini-cli-open-source-ai-agent/',k:'article',y:2025,s:'Google'},
            {t:'Aider - AI Pair Programming in Your Terminal',u:'https://aider.chat/',k:'doc',s:'Aider'},
            {t:'Tips | aider',u:'https://aider.chat/docs/usage/tips.html',k:'doc',s:'Aider',w:'Поради, які переносяться на будь-який агент: маленькі кроки, чисті коміти'},
            {t:'Introduction | Amp Docs',u:'https://ampcode.com/manual',k:'doc',s:'Amp'}
          ]},
        {label:'Фонові агенти: Copilot, Devin, Jules',type:'alt',desc:'Агент отримує issue, працює у власному середовищі в хмарі і повертає PR: GitHub Copilot coding agent, Devin від Cognition, Google Jules, cloud-режим Codex і Claude Code on the web.',why:'Інший режим роботи: ви не сидите над агентом, а ревʼюєте результат. Тому спека і тести тут важать ще більше.',
          links:[
            {t:'About GitHub Copilot agents - GitHub Docs',u:'https://docs.github.com/en/copilot/concepts/agent-capabilities/about-agents/about-github-copilot-agents',k:'doc',s:'GitHub Docs'},
            {t:'GitHub Copilot coding agent 101: Getting started with agentic workflows on GitHub',u:'https://github.blog/ai-and-ml/github-copilot/github-copilot-coding-agent-101-getting-started-with-agentic-workflows-on-github/',k:'article',y:2025,s:'GitHub Blog'},
            {t:'Introducing Devin - Devin Docs',u:'https://docs.devin.ai/get-started/devin-intro',k:'doc',s:'Devin Docs'},
            {t:'Coding Agents 101: The Art of Actually Getting Things Done',u:'https://devin.ai/agents101',k:'article',y:2025,s:'Cognition',w:'Як ставити задачі фоновому агенту, щоб PR повернувся придатним'},
            {t:'Getting started | Jules',u:'https://jules.google/docs',k:'doc',s:'Google'},
            {t:'Use Claude Code in the cloud - Claude Code Docs',u:'https://code.claude.com/docs/en/claude-code-on-the-web',k:'doc',s:'Anthropic Docs'}
          ]},
        {label:'Як обирати, коли все міняється',type:'optional',desc:'Інструменти міняються щопівроку. Критерій вибору: модель, якість роботи з вашим стеком, ізоляція і права, підтримка спільних форматів (AGENTS.md, Agent Skills, MCP), ціна.',why:'Переходити між агентами доведеться. Якщо метод і правила живуть у репо, перехід коштує день, а не місяць.',
          links:[
            {t:'Інструментів дуже багато і не зрозуміло чим користуватись',u:'https://t.me/beerphp/142',k:'post',y:2026,s:'beerphp'},
            {t:'2025: Make Coding Agents Work. 2026: Make Them Work Better.',u:'https://jedi.be/blog/2025/2025-make-coding-agents-work-2026-make-them-work-better/',k:'article',y:2025,s:'jedi.be',w:'Великий огляд ландшафту і що з нього справді працює'},
            {t:'Third-party coding agents - GitHub Docs',u:'https://docs.github.com/en/copilot/concepts/agents/about-third-party-coding-agents',k:'doc',s:'GitHub Docs',w:'Claude і Codex працюють поруч із Copilot на GitHub'},
            {t:'Just Talk To It - the no-bs Way of Agentic Engineering',u:'https://steipete.me/posts/just-talk-to-it',k:'article',y:2025,s:'Peter Steinberger',w:'Протилежна думка: менше обвʼязки, більше прямої розмови з агентом'}
          ]}
      ]},
    {label:'Робоче місце і безпека агента',side:'right',desc:'Де і з якими правами працює агент: окрема гілка чи worktree, дозволи на команди, sandbox або контейнер, захист від інструкцій, підкинутих у файли й веб-сторінки.',why:'Агент виконує команди на вашій машині від вашого імені. Без меж він колись видалить базу або витече секрет, і зробить це впевнено.',
      links:[
        {t:'Безпека AI-агентів: як атакують Claude Code, Cursor і Codex',u:'https://www.youtube.com/watch?v=QKRs6IHV-y4',k:'video',y:2026,s:'YouTube · BeerCode'},
        {t:'Making Claude Code safer with sandboxing',u:'https://www.anthropic.com/engineering/claude-code-sandboxing',k:'article',y:2025,s:'Anthropic',w:'Чому пісочниця краща за нескінченні запити на підтвердження'},
        {t:'Living dangerously with Claude',u:'https://simonwillison.net/2025/Oct/22/living-dangerously-with-claude/',k:'article',y:2025,s:'Simon Willison',w:'Що насправді ризикуєш, вмикаючи режим без підтверджень'},
        {t:'Security - Claude Code Docs',u:'https://code.claude.com/docs/en/security',k:'doc',s:'Anthropic Docs'},
        {t:'Sandboxed execution for coding agents | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/sandboxed-execution-for-coding-agents',k:'article',y:2026,s:'Thoughtworks Radar'},
        {t:'Agent approvals & security - Codex',u:'https://developers.openai.com/codex/agent-approvals-security',k:'doc',s:'OpenAI Docs'}
      ],
      children:[
        {label:'Гілки і worktree для агента',desc:'Агент працює в окремій гілці або git worktree, щоб ваш робочий стан не змішувався з його змінами.',why:'Кілька агентів паралельно можливі лише з ізольованими робочими копіями.',
          links:[
            {t:'Git - git-worktree Documentation',u:'https://git-scm.com/docs/git-worktree',k:'doc',s:'Git'},
            {t:'Common workflows - Claude Code Docs',u:'https://code.claude.com/docs/en/common-workflows',k:'doc',s:'Anthropic Docs',w:'Розділ про паралельні сесії у worktree'},
            {t:'Using Git with coding agents',u:'https://simonwillison.net/guides/agentic-engineering-patterns/using-git-with-coding-agents/',k:'article',y:2026,s:'Simon Willison'},
            {t:'Using Agent in CLI - Cursor Docs',u:'https://cursor.com/docs/cli/using',k:'doc',s:'Cursor Docs',w:'Прапорець --worktree запускає агента в окремій копії'}
          ]},
        {label:'Права агента: що без питань, що ніколи',desc:'Що агент може виконувати без підтвердження, що лише з ним, а що ніколи. Allow/deny-списки команд замість режиму «дозволити все».',why:'Агент з правами видалити базу колись це зробить.',
          links:[
            {t:'Configure permissions - Claude Code Docs',u:'https://code.claude.com/docs/en/permissions',k:'doc',s:'Anthropic Docs'},
            {t:'Agent approvals & security - Codex',u:'https://developers.openai.com/codex/agent-approvals-security',k:'doc',s:'OpenAI Docs'},
            {t:'Inside the Development Workflow of Claude Code\'s Creator - InfoQ',u:'https://www.infoq.com/news/2026/01/claude-code-creator-workflow',k:'article',y:2026,s:'InfoQ',w:'Cherny не вмикає skip-permissions, а дозволяє конкретні безпечні команди'},
            {t:'Living dangerously with Claude',u:'https://simonwillison.net/2025/Oct/22/living-dangerously-with-claude/',k:'article',y:2025,s:'Simon Willison'}
          ]},
        {label:'Sandbox і контейнер',desc:'Агент виконує команди у пісочниці: обмежена файлова система і мережа (вбудований sandbox Claude Code і Codex) або окремий контейнер чи користувач на машині.',why:'Пісочниця дає змогу відпустити агента на довгу задачу без підтвердження кожної команди і без страху за систему.',
          links:[
            {t:'Configure the sandboxed Bash tool - Claude Code Docs',u:'https://code.claude.com/docs/en/sandboxing',k:'doc',s:'Anthropic Docs'},
            {t:'Making Claude Code safer with sandboxing',u:'https://www.anthropic.com/engineering/claude-code-sandboxing',k:'article',y:2025,s:'Anthropic'},
            {t:'Agent approvals & security - Codex',u:'https://developers.openai.com/codex/agent-approvals-security',k:'doc',s:'OpenAI Docs',w:'Sandbox за замовчуванням, мережа вимкнена'},
            {t:'Sandboxed execution for coding agents | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/sandboxed-execution-for-coding-agents',k:'article',y:2026,s:'Thoughtworks Radar'}
          ]},
        {label:'Prompt injection через репо і веб',desc:'Інструкції для агента можуть бути сховані в README чужої залежності, у коментарі до issue, у веб-сторінці, яку він читає. Lethal trifecta: приватні дані + недовірений контент + вихід у мережу.',why:'Агент не відрізняє ваші інструкції від тих, що лежать у файлі. Поєднання з доступом до секретів і мережі робить це реальною атакою.',
          links:[
            {t:'The lethal trifecta for AI agents: private data, untrusted content, and external communication',u:'https://simonwillison.net/2025/Jun/16/the-lethal-trifecta/',k:'article',y:2025,s:'Simon Willison'},
            {t:'Безпека AI-агентів: як атакують Claude Code, Cursor і Codex',u:'https://www.youtube.com/watch?v=QKRs6IHV-y4',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Security - Claude Code Docs',u:'https://code.claude.com/docs/en/security',k:'doc',s:'Anthropic Docs'},
            {t:'Coding Assistants Threaten the Software Supply Chain',u:'https://martinfowler.com/articles/exploring-gen-ai/software-supply-chain-attack-surface.html',k:'article',y:2025,s:'martinfowler.com'}
          ]},
        {label:'Багато агентів паралельно',type:'optional',desc:'Декілька задач одночасно, кожна у своєму worktree, з ревʼю по черзі. Від двох-трьох сесій у терміналі до скриптованої оркестрації десятків агентів.',why:'Виграш у швидкості впирається у вашу здатність ревʼюїти, а не в агента.',
          links:[
            {t:'Embracing the parallel coding agent lifestyle',u:'https://simonwillison.net/2025/Oct/5/parallel-coding-agents/',k:'article',y:2025,s:'Simon Willison'},
            {t:'Як влаштовані Dynamic Workflows зсередини? Сотні AI-агентів працюють паралельно',u:'https://www.youtube.com/watch?v=cbQ0QCK7ujc',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Dynamic Workflows: Запускаємо сотні агентів паралельно',u:'https://t.me/beerphp/171',k:'post',y:2026,s:'beerphp'},
            {t:'Coding agent swarms | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/coding-agent-swarms',k:'article',y:2026,s:'Thoughtworks Radar',w:'Thoughtworks ставить рої агентів у Caution: читайте, перш ніж масштабувати'},
            {t:'Don\'t Build Multi-Agents',u:'https://cognition.ai/blog/dont-build-multi-agents',k:'article',y:2025,s:'Cognition',w:'Чому паралельні агенти без спільного контексту ламають одне одного'}
          ]}
      ]},
    {label:'Контекст сесії: коли зупинитись',side:'left',desc:'Контекст агента скінченний і псується з часом: старі помилки, зайві файли, суміш задач. Гігієна сесії: одна задача на контекст, очищення або нова сесія вчасно, зовнішня памʼять у файлах замість нескінченного чату.',why:'Більшість «агент потупів» пояснюється не моделлю, а тим, що в її контексті лежить. Це керується з вашого боку.',
      links:[
        {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic'},
        {t:'How Long Contexts Fail',u:'https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html',k:'article',y:2025,s:'Drew Breunig',w:'Чотири способи, якими довгий контекст ламає агента'},
        {t:'Context Rot: How Increasing Input Tokens Impacts LLM Performance',u:'https://www.trychroma.com/research/context-rot',k:'article',y:2025,s:'Chroma',w:'Дослідження на 18 моделях: якість падає з довжиною входу'},
        {t:'Context Engineering for Coding Agents',u:'https://martinfowler.com/articles/exploring-gen-ai/context-engineering-coding-agents.html',k:'article',y:2026,s:'martinfowler.com'},
        {t:'Manage costs effectively - Claude Code Docs',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Anthropic Docs',w:'/clear, /compact і чому це про якість, а не лише про гроші'},
        {t:'Advanced Context Engineering for Agents | YC Root Access',u:'https://www.youtube.com/watch?v=IS_y40zY-hc',k:'video',y:2025,s:'YouTube · Y Combinator',w:'Dex Horthy про дослідження, план, реалізацію в окремих контекстах'}
      ],
      children:[
        {label:'Один контекст на одну задачу',desc:'Нова задача починається з нової сесії. Усе, що треба перенести, переноситься файлом (план, нотатки), а не історією чату.',why:'Залишки попередньої задачі в контексті - головне джерело дивних рішень агента.',
          links:[
            {t:'Best practices for Claude Code',u:'https://code.claude.com/docs/en/best-practices',k:'doc',s:'Anthropic Docs'},
            {t:'Advanced Context Engineering for Agents | YC Root Access',u:'https://www.youtube.com/watch?v=IS_y40zY-hc',k:'video',y:2025,s:'YouTube · Y Combinator'},
            {t:'humanlayer/advanced-context-engineering-for-coding-agents',u:'https://github.com/humanlayer/advanced-context-engineering-for-coding-agents',k:'github',s:'GitHub'}
          ]},
        {label:'Коли чистити контекст і починати заново',desc:'Сигнали: агент повторює помилку, забув домовленість з початку сесії, диф виходить за межі задачі. Тоді /clear або нова сесія з коротким підсумком, а не «спробуй ще раз».',why:'Після певної точки кожна наступна спроба в тій самій сесії гірша за попередню.',
          links:[
            {t:'Manage costs effectively - Claude Code Docs',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Anthropic Docs'},
            {t:'How to Fix Your Context',u:'https://www.dbreunig.com/2025/06/26/how-to-fix-your-context.html',k:'article',y:2025,s:'Drew Breunig',w:'Шість тактик: від обрізання до карантину контексту'},
            {t:'Context Inertia: When Agents Won\'t Let Go',u:'https://www.dbreunig.com/2026/10/14/context-inertia.html',k:'article',y:2026,s:'Drew Breunig',w:'Агент тримається за стару ціль; скидання контексту допомагає'},
            {t:'Агенти пишуть тобі сміття, увага, не тому що вони тупі',u:'https://t.me/beerphp/176',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Чекпойнти і відкат',desc:'Стан коду до кожного кроку агента можна повернути: checkpointing у Claude Code, коміти після кожного зеленого кроку, git stash перед ризиковою зміною.',why:'Коли відкат коштує секунду, можна дозволити агенту сміливіші кроки.',
          links:[
            {t:'Checkpointing - Claude Code Docs',u:'https://code.claude.com/docs/en/checkpointing',k:'doc',s:'Anthropic Docs'},
            {t:'Enabling Claude Code to work more autonomously',u:'https://www.anthropic.com/news/enabling-claude-code-to-work-more-autonomously',k:'article',y:2025,s:'Anthropic'},
            {t:'Using Git with coding agents',u:'https://simonwillison.net/guides/agentic-engineering-patterns/using-git-with-coding-agents/',k:'article',y:2026,s:'Simon Willison'}
          ]},
        {label:'Зовнішня памʼять: нотатки, Obsidian, docs/',desc:'Те, що має пережити сесію, живе у файлах: план задачі, рішення, що відкинули, нотатки з дослідження коду. Obsidian або просто docs/ у репо, які агент читає і дописує.',why:'Контекст сесії зникає. Файл лишається і для вас, і для наступного агента.',
          links:[
            {t:'Як я використовую Obsidian в Agentic Workflow',u:'https://www.youtube.com/watch?v=Lm5NLnTQbx0',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Як я використовую Obsidian в Agentic Workflow',u:'https://t.me/beerphp/161',k:'post',y:2026,s:'beerphp'},
            {t:'How Claude remembers your project - Claude Code Docs',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Anthropic Docs'},
            {t:'Context Engineering for AI Agents: Lessons from Building Manus',u:'https://manus.im/blog/Context-Engineering-for-AI-Agents-Lessons-from-Building-Manus',k:'article',y:2025,s:'Manus',w:'Файлова система як памʼять агента'},
            {t:'An Accidental Blackboard',u:'https://martinfowler.com/articles/exploring-gen-ai/an-accidental-blackboard.html',k:'article',y:2026,s:'martinfowler.com'}
          ]},
        {label:'Ресерч окремо від реалізації',desc:'Дослідження коду (де що лежить, як влаштовано) робиться окремим субагентом або окремою сесією, а в основний контекст повертається короткий підсумок.',why:'Пошук по репо генерує десятки тисяч токенів сміття. В основному контексті потрібні лише висновки.',
          links:[
            {t:'Невеличкий шматок з минулого воркшопу: про субагентів',u:'https://t.me/beerphp/168',k:'post',y:2026,s:'beerphp',w:'Замість 120 тисяч токенів сміття у головне вікно повертається 10 тисяч важливого'},
            {t:'Subagents',u:'https://simonwillison.net/guides/agentic-engineering-patterns/subagents/',k:'article',y:2026,s:'Simon Willison'},
            {t:'Create custom subagents - Claude Code Docs',u:'https://code.claude.com/docs/en/sub-agents',k:'doc',s:'Anthropic Docs'}
          ]}
      ]},
    {label:'Повторювана робота',side:'right',desc:'Те, що ви пояснюєте агенту вдруге, оформлюється як правило, команда, skill або субагент. Файли інструкцій CLAUDE.md і AGENTS.md, slash-команди, Agent Skills, hooks, плагіни.',why:'Інакше кожна сесія починається з нуля, і метод тримається лише на вашій памʼяті.',
      links:[
        {t:'How Claude remembers your project - Claude Code Docs',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Anthropic Docs'},
        {t:'Extend Claude with skills - Claude Code Docs',u:'https://code.claude.com/docs/en/skills',k:'doc',s:'Anthropic Docs'},
        {t:'Ідеальний AI Workflow 2.0 від Head of Ai Transformation',u:'https://www.youtube.com/watch?v=TX4VVabF6Jw',k:'video',y:2026,s:'YouTube · BeerCode',w:'Як правила, скіли і субагенти збираються в один робочий цикл'},
        {t:'Curated shared instructions for software teams | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/curated-shared-instructions-for-software-teams',k:'article',y:2025,s:'Thoughtworks Radar'},
        {t:'Customization - Codex',u:'https://developers.openai.com/codex/concepts/customization',k:'doc',s:'OpenAI Docs',w:'Та сама ідея в Codex: AGENTS.md, skills, hooks, субагенти'},
        {t:'Superpowers: How I\'m using coding agents in October 2025',u:'https://blog.fsck.com/2025/10/09/superpowers/',k:'article',y:2025,s:'Jesse Vincent',w:'Приклад цілої методології, упакованої у набір скілів'}
      ],
      children:[
        {label:'CLAUDE.md / AGENTS.md: файл інструкцій',desc:'Файл у корені репо, який агент читає на старті: як запустити проєкт і тести, домовленості, яких він не вгадає. CLAUDE.md для Claude Code, AGENTS.md як спільний формат для Codex, Copilot, Cursor та інших, GEMINI.md для Gemini CLI. Докладніше в роадмапі «Контекст».',why:'Пʼять рядків про запуск тестів економлять пояснення в кожній сесії. Пʼятсот рядків правил роблять агента гіршим.',
          links:[
            {t:'How Claude remembers your project - Claude Code Docs',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Anthropic Docs'},
            {t:'Чому AGENTS.md та CLAUDE.md робить агента тупим?',u:'https://www.youtube.com/watch?v=PM463SX0mxg',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Writing a good CLAUDE.md',u:'https://www.humanlayer.dev/blog/writing-a-good-claude-md',k:'article',y:2025,s:'HumanLayer',w:'Менше 60 рядків, WHAT/WHY/HOW, без лінтера в промпті'},
            {t:'Custom instructions with AGENTS.md - Codex',u:'https://developers.openai.com/codex/guides/agents-md',k:'doc',s:'OpenAI Docs'},
            {t:'Provide context with GEMINI.md files | Gemini CLI',u:'https://geminicli.com/docs/cli/gemini-md/',k:'doc',s:'Gemini CLI'},
            {t:'Adding repository custom instructions for GitHub Copilot - GitHub Docs',u:'https://docs.github.com/en/copilot/how-tos/configure-custom-instructions/add-repository-instructions',k:'doc',s:'GitHub Docs'}
          ],
          children:[
            {label:'Що агент реально читає',desc:'Файл інструкцій не гарантує виконання: агент може прочитати і не застосувати, а застаріла інструкція перекриває реальний код.',why:'Правило в промпті - побажання. Правило в hook або тесті - закон.',
              links:[
                {t:'Як AI-агенти використовують CLAUDE.md і документацію',u:'https://t.me/beerphp/193',k:'post',y:2026,s:'beerphp'},
                {t:'Claude Code, Cursor і Codex: як агенти читають документацію? Чому CLAUDE.md нічого не гарантує',u:'https://www.youtube.com/watch?v=GWGFNRM0o40',k:'video',y:2026,s:'YouTube · BeerCode'},
                {t:'Stale Instruction Files Override the Code in Coding Agents: A One-Sentence Fix',u:'https://arxiv.org/abs/2610.30571',k:'article',y:2026,s:'arXiv'}
              ]},
            {label:'Коротко і за посиланнями',desc:'Короткий корінь і окремі файли під теми, які агент підтягує за потреби (progressive disclosure). Не генерувати файл автоматично.',why:'Дослідження показують: згенеровані агентом файли інструкцій погіршують результат і здорожчують роботу.',
              links:[
                {t:'Writing a good CLAUDE.md',u:'https://www.humanlayer.dev/blog/writing-a-good-claude-md',k:'article',y:2025,s:'HumanLayer'},
                {t:'Evaluating AGENTS.md: Are Repository-Level Context Files Helpful for Coding Agents?',u:'https://arxiv.org/abs/2602.11988',k:'article',y:2026,s:'arXiv'},
                {t:'Чому AGENTS.md та CLAUDE.md робить агента тупим?',u:'https://t.me/beerphp/154',k:'post',y:2026,s:'beerphp'}
              ]},
            {label:'AGENTS.md як спільний формат',desc:'Відкритий формат, який читають понад 20 агентів: один файл замість окремого під кожен інструмент. Понад 60 тисяч репозиторіїв на GitHub.',why:'Правила в спільному форматі переживають зміну інструмента.',
              links:[
                {t:'AGENTS.md',u:'https://agents.md/',k:'doc',s:'agents.md'},
                {t:'How to write a great agents.md: Lessons from over 2,500 repositories',u:'https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/',k:'article',y:2025,s:'GitHub Blog'},
                {t:'What Open-Source Projects Tell Their Coding Agents: A Census of AGENTS.md and CLAUDE.md',u:'https://arxiv.org/abs/2610.31715',k:'article',y:2026,s:'arXiv'},
                {t:'AGENTS.md | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/agents-md',k:'article',y:2025,s:'Thoughtworks Radar'}
              ]},
            {label:'Ієрархія файлів і імпорти',desc:'Глобальний файл користувача, кореневий файл репо, вкладені файли в підпапках: ближчий до коду має пріоритет. Імпорти інших файлів через @.',why:'Домовленості сервісу не мають засмічувати контекст, коли агент працює в іншому.',
              links:[
                {t:'How Claude remembers your project - Claude Code Docs',u:'https://code.claude.com/docs/en/memory',k:'doc',s:'Anthropic Docs'},
                {t:'Custom instructions with AGENTS.md - Codex',u:'https://developers.openai.com/codex/guides/agents-md',k:'doc',s:'OpenAI Docs'},
                {t:'Rules - Cursor Docs',u:'https://cursor.com/docs/rules',k:'doc',s:'Cursor Docs'}
              ]}
          ]},
        {label:'Slash-команди для повторюваних дій',desc:'Збережені промпти, які викликаються однією командою: «/review за нашим чеклістом», «/commit-push-pr», «/release». У Claude Code живуть у .claude/commands або як skills.',why:'Промпт, який ви вводите вдесяте, вже має бути файлом у репо.',
          links:[
            {t:'Extend Claude with skills - Claude Code Docs',u:'https://code.claude.com/docs/en/skills',k:'doc',s:'Anthropic Docs',w:'Slash-команди і skills у Claude Code тепер один механізм'},
            {t:'Inside the Development Workflow of Claude Code\'s Creator - InfoQ',u:'https://www.infoq.com/news/2026/01/claude-code-creator-workflow',k:'article',y:2026,s:'InfoQ',w:'/commit-push-pr десятки разів на день'},
            {t:'Developer commands - Codex',u:'https://developers.openai.com/codex/cli/reference',k:'doc',s:'OpenAI Docs'}
          ]},
        {label:'Agent Skills: SKILL.md',desc:'Папка з SKILL.md (інструкція, коли і як робити) плюс скрипти й довідкові файли. Агент бачить лише назву й опис, а повний текст підтягує за потреби. Відкритий стандарт agentskills.io, працює в Claude Code, Codex, Copilot, Cursor.',why:'Скіл - це знання «як ми робимо X», яке можна віддати команді, а не тримати в голові.',
          links:[
            {t:'Як правильно працювати з Agent Skills',u:'https://www.youtube.com/watch?v=3t7VVZp2si8',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Equipping agents with Agent Skills',u:'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills',k:'article',y:2025,s:'Anthropic'},
            {t:'Specification - Agent Skills',u:'https://agentskills.io/specification',k:'doc',s:'Agent Skills'},
            {t:'Extend Claude with skills - Claude Code Docs',u:'https://code.claude.com/docs/en/skills',k:'doc',s:'Anthropic Docs'},
            {t:'anthropics/skills',u:'https://github.com/anthropics/skills',k:'github',s:'GitHub',w:'Публічні приклади скілів від Anthropic'}
          ],
          children:[
            {label:'Progressive disclosure',desc:'На старті агент отримує лише назву й опис скілу; тіло SKILL.md і додаткові файли читаються, коли скіл спрацював.',why:'Сотня скілів не зʼїдає контекст, якщо завантажується лише потрібний.',
              links:[
                {t:'Equipping agents with Agent Skills',u:'https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills',k:'article',y:2025,s:'Anthropic'},
                {t:'Best practices for skill creators - Agent Skills',u:'https://agentskills.io/skill-creation/best-practices',k:'doc',s:'Agent Skills'}
              ]},
            {label:'Зрілість скілу: для себе і команди',desc:'Перший варіант працює у вас. Командний варіант має чіткий тригер в описі, перевірені скрипти, приклади і не ламається в чужому репо.',why:'Скіл, який працює лише у автора, не економить час нікому іншому.',
              links:[
                {t:'Твій скіл можна шерити в команді?',u:'https://t.me/beerphp/185',k:'post',y:2026,s:'beerphp'},
                {t:'Як правильно працювати з Agent Skills',u:'https://www.youtube.com/watch?v=3t7VVZp2si8',k:'video',y:2026,s:'YouTube · BeerCode'},
                {t:'obra/superpowers',u:'https://github.com/obra/superpowers',k:'github',s:'GitHub',w:'Великий відкритий набір скілів як приклад зрілої структури'}
              ]}
          ]},
        {label:'Субагенти для ізольованих задач',desc:'Окремий агент зі своїм контекстом під одну роль: ревʼюер, дослідник кодової бази, генератор тестів. Є у Claude Code і Codex.',why:'Ревʼю власного коду тим самим контекстом упереджене. Свіжий контекст бачить більше.',
          links:[
            {t:'Create custom subagents - Claude Code Docs',u:'https://code.claude.com/docs/en/sub-agents',k:'doc',s:'Anthropic Docs'},
            {t:'Subagents - Codex',u:'https://developers.openai.com/codex/subagents/',k:'doc',s:'OpenAI Docs'},
            {t:'Subagents',u:'https://simonwillison.net/guides/agentic-engineering-patterns/subagents/',k:'article',y:2026,s:'Simon Willison'},
            {t:'How we built our multi-agent research system',u:'https://www.anthropic.com/engineering/multi-agent-research-system',k:'article',y:2025,s:'Anthropic',w:'Коли субагенти справді допомагають і скільки це коштує в токенах'},
            {t:'Невеличкий шматок з минулого воркшопу: про субагентів',u:'https://t.me/beerphp/168',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Hooks і автоматичні перевірки',desc:'Скрипти, що виконуються на подіях агента: форматер після кожної зміни файлу, lint перед комітом, заборона певних команд, перевірка перед завершенням. Є в Claude Code, Cursor, Codex.',why:'Правило в коді надійніше за правило в промпті: hook спрацює завжди, інструкцію агент може пропустити.',
          links:[
            {t:'Automate actions with hooks - Claude Code Docs',u:'https://code.claude.com/docs/en/hooks-guide',k:'doc',s:'Anthropic Docs'},
            {t:'Hooks reference - Claude Code Docs',u:'https://code.claude.com/docs/en/hooks',k:'doc',s:'Anthropic Docs'},
            {t:'Hooks - Cursor Docs',u:'https://cursor.com/docs/hooks',k:'doc',s:'Cursor Docs'},
            {t:'pre-commit',u:'https://pre-commit.com/',k:'doc',s:'pre-commit',w:'Класичні git-хуки, які ловлять і людину, і агента'},
            {t:'Feedback sensors for coding agents | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/feedback-sensors-for-coding-agents',k:'article',y:2026,s:'Thoughtworks Radar'}
          ]},
        {label:'Плагіни і спільні набори',type:'optional',desc:'Команди, скіли, субагенти і hooks пакуються в плагін і ставляться з маркетплейсу: одна команда замість копіювання файлів по репо.',why:'Так метод роздається на всю команду і оновлюється централізовано.',
          links:[
            {t:'Plugins overview - Claude Code Docs',u:'https://code.claude.com/docs/en/plugins',k:'doc',s:'Anthropic Docs'},
            {t:'Customize Claude Code with plugins',u:'https://www.anthropic.com/news/claude-code-plugins',k:'article',y:2025,s:'Anthropic'},
            {t:'obra/superpowers',u:'https://github.com/obra/superpowers',k:'github',s:'GitHub'}
          ]},
        {label:'Правила живуть у репо',desc:'Інструкції, команди, skills і hooks комітяться разом із кодом і ревʼюються як код. Документація, яку читає агент (README, ADR, docs/), теж частина правил.',why:'Метод має працювати для всієї команди, а не лише на вашому ноутбуці.',
          links:[
            {t:'Curated shared instructions for software teams | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/curated-shared-instructions-for-software-teams',k:'article',y:2025,s:'Thoughtworks Radar'},
            {t:'Context as Code',u:'https://www.oreilly.com/radar/context-as-code/',k:'article',y:2026,s:'O\'Reilly Radar'},
            {t:'AI-friendly code design | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/ai-friendly-code-design',k:'article',y:2025,s:'Thoughtworks Radar'},
            {t:'architecture-decision-record',u:'https://github.com/joelparkerhenderson/architecture-decision-record',k:'github',s:'GitHub',w:'ADR: записані рішення, які агент прочитає замість вгадувати'}
          ]}
      ]},
    {label:'Автоматизація: headless, CI, цикли',side:'left',desc:'Агент без людини за клавіатурою: headless-режим зі скрипту, запуск у CI на подію в репо, черговий асистент на сервері, цикл «працюй, поки критерій не виконано». Усе це тримається на спеці, тестах і hooks з попередніх груп.',why:'Поки агент працює лише в терміналі перед вами, виграш обмежений вашим робочим днем.',
      links:[
        {t:'Run Claude Code programmatically - Claude Code Docs',u:'https://code.claude.com/docs/en/headless',k:'doc',s:'Anthropic Docs'},
        {t:'Non-interactive mode - Codex',u:'https://developers.openai.com/codex/noninteractive',k:'doc',s:'OpenAI Docs'},
        {t:'Loop Engineering - наступний крок після Context Engineering',u:'https://t.me/beerphp/180',k:'post',y:2026,s:'beerphp'},
        {t:'Один із трендових напрямків зараз: інтеграція AI у CI/CD',u:'https://t.me/beerphp/129',k:'post',y:2025,s:'beerphp'},
        {t:'Harness engineering: leveraging Codex in an agent-first world | OpenAI',u:'https://openai.com/index/harness-engineering/',k:'article',y:2026,s:'OpenAI'},
        {t:'Effective harnesses for long-running agents',u:'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',k:'article',y:2025,s:'Anthropic'}
      ],
      children:[
        {label:'Headless-режим: claude -p, codex exec',desc:'Агент запускається зі скрипту з промптом і повертає результат у stdout або JSON. Основа для крону, CI і власних пайплайнів.',why:'Усе, що ви робите руками в терміналі агента, можна запустити за розкладом.',
          links:[
            {t:'Run Claude Code programmatically - Claude Code Docs',u:'https://code.claude.com/docs/en/headless',k:'doc',s:'Anthropic Docs'},
            {t:'Non-interactive mode - Codex',u:'https://developers.openai.com/codex/noninteractive',k:'doc',s:'OpenAI Docs'},
            {t:'Agent SDK overview - Claude Code Docs',u:'https://code.claude.com/docs/en/agent-sdk/overview',k:'doc',s:'Anthropic Docs',w:'Коли треба більше, ніж один виклик зі скрипту'}
          ]},
        {label:'Агент у CI: GitHub Actions',desc:'Агент запускається на подію в репо: згадка в issue, новий PR, падіння тестів. Claude Code GitHub Action, codex-action, Copilot coding agent на GitHub Actions.',why:'Рутина (тріаж issue, виправлення лінтера, чернетка PR) робиться без людини, а людина лишається на ревʼю.',
          links:[
            {t:'Claude Code GitHub Actions - Claude Code Docs',u:'https://code.claude.com/docs/en/github-actions',k:'doc',s:'Anthropic Docs'},
            {t:'anthropics/claude-code-action',u:'https://github.com/anthropics/claude-code-action',k:'github',s:'GitHub'},
            {t:'openai/codex-action',u:'https://github.com/openai/codex-action',k:'github',s:'GitHub'},
            {t:'Best practices for using GitHub Copilot to work on tasks - GitHub Docs',u:'https://docs.github.com/en/copilot/tutorials/cloud-agent/get-the-best-results',k:'doc',s:'GitHub Docs'},
            {t:'Один із трендових напрямків зараз: інтеграція AI у CI/CD',u:'https://t.me/beerphp/129',k:'post',y:2025,s:'beerphp'}
          ]},
        {label:'Черговий агент 24/7: сервер, Telegram, крон',desc:'Агент на VPS, який приймає задачі з месенджера або за розкладом: перевірити код, зібрати звіт, подивитись логи. Той самий Claude Code, але без вашого терміналу.',why:'Показує межі автономії на практиці: що агент справді може зробити сам, а де потрібна людина.',
          links:[
            {t:'AI-асистент 24/7: Claude Code + VPS + Telegram',u:'https://www.youtube.com/watch?v=Nioa8ZBzDqE',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Як підняти свого персонального асистента claude + telegram',u:'https://t.me/beerphp/151',k:'post',y:2026,s:'beerphp'},
            {t:'Чи готовий агент чергувати замість тебе?',u:'https://t.me/beerphp/183',k:'post',y:2026,s:'beerphp',w:'Дослідження про агентів на чергуванні і їхні межі'},
            {t:'Run Claude Code programmatically - Claude Code Docs',u:'https://code.claude.com/docs/en/headless',k:'doc',s:'Anthropic Docs'}
          ]},
        {label:'Loop engineering: цикл до критерію',desc:'Агент крутить цикл «зміни, перевір, виправ», поки не виконано перевірний критерій (тести зелені, лінтер чистий, задача в трекері закрита). Від простого «Ralph loop» у bash до окремого агента-судді.',why:'Цикл без чіткої умови зупинки або крутиться вічно, або зупиняється на «здається, готово».',
          links:[
            {t:'Loop Engineering - наступний крок після Context Engineering',u:'https://t.me/beerphp/180',k:'post',y:2026,s:'beerphp'},
            {t:'Designing agentic loops',u:'https://simonwillison.net/2025/Sep/30/designing-agentic-loops/',k:'article',y:2025,s:'Simon Willison'},
            {t:'Ralph Wiggum as a "software engineer"',u:'https://ghuntley.com/ralph/',k:'article',y:2025,s:'Geoffrey Huntley',w:'Найпростіший цикл: той самий промпт у while true, поки не зроблено'},
            {t:'Practical Loop Engineering',u:'https://www.oreilly.com/radar/practical-loop-engineering/',k:'article',y:2026,s:'O\'Reilly Radar',w:'Умови зупинки, незалежна перевірка, рівень автоматизації під ризик'},
            {t:'Effective harnesses for long-running agents',u:'https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents',k:'article',y:2025,s:'Anthropic'}
          ]},
        {label:'Harness engineering',desc:'Усе навколо моделі, що робить її роботу передбачуваною: інструкції, інструменти, hooks, sandbox, тести, цикли, трекер задач для агентів (наприклад, Beads). Термін 2026 року для того, що раніше називали «обвʼязкою».',why:'Різниця між командами, де агенти працюють, і де «не зайшло», майже завжди в харнесі, а не в моделі.',
          links:[
            {t:'Harness engineering: leveraging Codex in an agent-first world | OpenAI',u:'https://openai.com/index/harness-engineering/',k:'article',y:2026,s:'OpenAI'},
            {t:'Harness Engineering - first thoughts',u:'https://martinfowler.com/articles/exploring-gen-ai/harness-engineering-memo.html',k:'article',y:2026,s:'martinfowler.com'},
            {t:'Are Harnesses Worth the Cost?',u:'https://martinfowler.com/articles/are-harnesses-worth-the-cost.html',k:'article',y:2026,s:'martinfowler.com',w:'Тверезий погляд: харнес теж коштує, і не завжди окупається'},
            {t:'Harness Engineering for Agentic AI Coding Tools: An Exploratory Study',u:'https://arxiv.org/abs/2602.14690',k:'article',y:2026,s:'arXiv'},
            {t:'Beads',u:'https://github.com/gastownhall/beads',k:'github',s:'GitHub',w:'Git-трекер задач, який агенти ділять між собою; у Thoughtworks Radar в Trial'}
          ]}
      ]},
    {label:'Типові провали',side:'right',desc:'Помилки, які роблять майже всі на старті. Варто знати їх наперед, щоб упізнати у себе.',why:'Кожен з цих провалів виглядає як економія часу і коштує його втричі більше.',
      links:[
        {t:'Чому AI пише тобі сміття: 5 помилок, які роблять всі',u:'https://www.youtube.com/watch?v=wOW0-RZDPbA',k:'video',y:2026,s:'YouTube · BeerCode'},
        {t:'Агенти пишуть тобі сміття, увага, не тому що вони тупі',u:'https://t.me/beerphp/176',k:'post',y:2026,s:'beerphp'},
        {t:'Anti-patterns: things to avoid',u:'https://simonwillison.net/guides/agentic-engineering-patterns/anti-patterns/',k:'article',y:2026,s:'Simon Willison'},
        {t:'The 70% problem: Hard truths about AI-assisted coding',u:'https://addyo.substack.com/p/the-70-problem-hard-truths-about',k:'article',y:2024,s:'Addy Osmani'},
        {t:'Complacency with AI-generated code | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/complacency-with-ai-generated-code',k:'article',y:2025,s:'Thoughtworks Radar'},
        {t:'The role of developer skills in agentic coding',u:'https://martinfowler.com/articles/exploring-gen-ai/13-role-of-developer-skills.html',k:'article',y:2025,s:'martinfowler.com',w:'Список реальних збоїв агента з практики Thoughtworks'}
      ],
      children:[
        {label:'Прийняти код не читаючи',desc:'«Тести зелені, мерджимо». Через тиждень ніхто не знає, як це працює і чому впало.',why:'Це vibe coding, і саме його відрізняють на співбесіді від інженерії.',
          links:[
            {t:'Complacency with AI-generated code | Technology Radar',u:'https://www.thoughtworks.com/radar/techniques/complacency-with-ai-generated-code',k:'article',y:2025,s:'Thoughtworks Radar'},
            {t:'Vibe engineering',u:'https://simonwillison.net/2025/Oct/7/vibe-engineering/',k:'article',y:2025,s:'Simon Willison'},
            {t:'AI vs Human Code Generation Report',u:'https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report',k:'article',y:2025,s:'CodeRabbit'}
          ]},
        {label:'Ітерувати без тесту',desc:'«Не працює, спробуй ще раз» по колу, поки випадково не запрацює.',why:'Без тесту агент не бачить, що саме не так, і міняє навмання.',
          links:[
            {t:'Red/green TDD',u:'https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/',k:'article',y:2026,s:'Simon Willison'},
            {t:'Чому агент тупить при вирішенні бажинок?',u:'https://t.me/beerphp/182',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Роздутий контекст',desc:'Одна нескінченна сесія з усіма задачами підряд. Агент починає плутати старе з новим.',why:'Свіжа сесія на нову задачу майже завжди краща за продовження старої.',
          links:[
            {t:'How Long Contexts Fail',u:'https://www.dbreunig.com/2025/06/22/how-contexts-fail-and-how-to-fix-them.html',k:'article',y:2025,s:'Drew Breunig'},
            {t:'Context Rot: How Increasing Input Tokens Impacts LLM Performance',u:'https://www.trychroma.com/research/context-rot',k:'article',y:2025,s:'Chroma'},
            {t:'Manage costs effectively - Claude Code Docs',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Anthropic Docs'}
          ]},
        {label:'Задача без меж',desc:'«Зроби краще» або «виправ баги» без критерію готовності.',why:'Агент знайде, що покращити, у кожному файлі репо.',
          links:[
            {t:'Чому AI пише тобі сміття: 5 помилок, які роблять всі',u:'https://www.youtube.com/watch?v=wOW0-RZDPbA',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Here\'s how I use LLMs to help me write code',u:'https://simonwillison.net/2025/Mar/11/using-llms-for-code/',k:'article',y:2025,s:'Simon Willison'}
          ]},
        {label:'Правити тести замість коду',desc:'Агент послаблює перевірку, щоб тест пройшов, а ви цього не помічаєте в дифі.',why:'Зелений тест, який нічого не перевіряє, гірший за червоний.',
          links:[
            {t:'Recent Frontier Models Are Reward Hacking',u:'https://metr.org/blog/2025-06-05-recent-reward-hacking/',k:'article',y:2025,s:'METR'},
            {t:'Detecting misbehavior in frontier reasoning models',u:'https://openai.com/index/chain-of-thought-monitoring/',k:'article',y:2025,s:'OpenAI'}
          ]},
        {label:'Код, якого ніхто не розуміє',desc:'Comprehension debt: коду в системі стає більше, ніж будь-хто в команді розуміє. Проявляється не одразу, а на першому серйозному інциденті.',why:'Швидкість генерації без швидкості розуміння - це борг, який платять під час падіння проду.',
          links:[
            {t:'Comprehension Debt: The Hidden Cost of AI-Generated Code',u:'https://www.oreilly.com/radar/comprehension-debt-the-hidden-cost-of-ai-generated-code/',k:'article',y:2026,s:'O\'Reilly Radar'},
            {t:'As AI Accelerates Software Complexity, Thoughtworks Technology Radar Urges a Return to Engineering Fundamentals to Combat Cognitive Debt',u:'https://www.thoughtworks.com/about-us/news/2026/combat-ai-cognitive-debt-radar-v34',k:'article',y:2026,s:'Thoughtworks'},
            {t:'AI Copilot Code Quality: 2025 Data Suggests 4x Growth in Code Clones - GitClear',u:'https://www.gitclear.com/ai_assistant_code_quality_2025_research',k:'article',y:2025,s:'GitClear',w:'Дубльований код зростає вчетверо: симптом того ж боргу'},
            {t:'Linear walkthroughs',u:'https://simonwillison.net/guides/agentic-engineering-patterns/linear-walkthroughs/',k:'article',y:2026,s:'Simon Willison',w:'Як використати агента, щоб зрозуміти код, а не лише згенерувати'}
          ]},
        {label:'Файл правил на пʼятсот рядків',desc:'CLAUDE.md, у який дописують кожну прикру помилку, доки агент не перестає виконувати будь-що з нього. Згенерований агентом файл інструкцій - окремий підвид тієї ж проблеми.',why:'Що більше інструкцій, то гірше виконується кожна. Правила, які можна перевірити кодом, мають бути hook-ом або тестом.',
          links:[
            {t:'Чому AGENTS.md та CLAUDE.md робить агента тупим?',u:'https://www.youtube.com/watch?v=PM463SX0mxg',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Writing a good CLAUDE.md',u:'https://www.humanlayer.dev/blog/writing-a-good-claude-md',k:'article',y:2025,s:'HumanLayer'},
            {t:'On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents',u:'https://arxiv.org/abs/2601.20404',k:'article',y:2026,s:'arXiv'}
          ]}
      ]},
    {label:'Вимірювання ефекту',side:'left',desc:'Чи стало швидше й краще насправді, а не за відчуттями. Що кажуть дослідження (METR, DORA, Stack Overflow, Google), які метрики команди дивитись і як поставити експеримент у себе.',why:'Відчуття «я на 20% швидший» у METR розійшлось із виміряним «на 19% повільніший». Без цифр метод не вдосконалюється.',
      links:[
        {t:'AI в розробці дає не ×10, добре, якщо +10-40%. Чому так і як дістати більше? Розмова двох інженерів',u:'https://www.youtube.com/watch?v=xxn6gOey9G0',k:'video',y:2026,s:'YouTube · BeerCode'},
        {t:'Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity - METR',u:'https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/',k:'article',y:2025,s:'METR'},
        {t:'DORA | State of AI-assisted Software Development 2025',u:'https://dora.dev/research/2025/dora-report/',k:'article',y:2025,s:'DORA'},
        {t:'AI 2026 | Stack Overflow Developer Survey',u:'https://survey.stackoverflow.co/2026/ai',k:'article',y:2026,s:'Stack Overflow'},
        {t:'The reality of AI-Assisted software engineering productivity',u:'https://addyo.substack.com/p/the-reality-of-ai-assisted-software',k:'article',y:2025,s:'Addy Osmani',w:'Огляд усіх досліджень продуктивності в одному місці'},
        {t:'Де ті х10 до швидкості розробки, котрі так хочуть менеджери?',u:'https://t.me/beerphp/214',k:'post',y:2026,s:'beerphp'}
      ],
      children:[
        {label:'Що показують дослідження',desc:'METR 2025: досвідчені open-source розробники з AI були на 19% повільніші, хоча відчували прискорення. Google RCT 2024: близько 21% швидше на типовій задачі. DORA 2025: AI підсилює і сильні, і слабкі команди. Stack Overflow 2025/2026: використання росте, довіра падає.',why:'Ці цифри треба знати, щоб не обіцяти менеджеру ×10 і не здивуватись, коли спринт не прискорився.',
          links:[
            {t:'Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity - METR',u:'https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/',k:'article',y:2025,s:'METR'},
            {t:'How much does AI impact development speed? An enterprise-based randomized controlled trial',u:'https://arxiv.org/abs/2410.12944',k:'article',y:2024,s:'arXiv',w:'RCT у Google: близько 21% швидше на контрольованій задачі'},
            {t:'How are developers using AI? Inside Google\'s 2025 DORA report',u:'https://blog.google/technology/developers/dora-report-2025/',k:'article',y:2025,s:'Google'},
            {t:'The results of the 2026 Developer Survey are here!',u:'https://stackoverflow.blog/2026/10/06/the-results-of-the-2026-developer-survey-are-here/',k:'article',y:2026,s:'Stack Overflow'}
          ],
          children:[
            {label:'METR 2025: мінус 19% замість плюс',desc:'16 досвідчених розробників, 246 реальних задач у своїх репо. З AI повільніше на 19%, а самі оцінювали, що швидше на 20%.',why:'Головний урок: власні відчуття швидкості не є метрикою.',
              links:[
                {t:'Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity - METR',u:'https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/',k:'article',y:2025,s:'METR'},
                {t:'Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity',u:'https://arxiv.org/abs/2507.09089',k:'article',y:2025,s:'arXiv'}
              ]},
            {label:'DORA 2025: AI як підсилювач',desc:'Опитування майже 5000 фахівців: AI підвищує throughput, але нестабільність теж росте; виграють команди з малим звʼязуванням, швидким фідбеком і сильним code review.',why:'Якщо у команди нема тестів і ревʼю, агент зробить гірше швидше.',
              links:[
                {t:'DORA | State of AI-assisted Software Development 2025',u:'https://dora.dev/research/2025/dora-report/',k:'article',y:2025,s:'DORA'},
                {t:'Announcing the 2025 DORA Report | Google Cloud Blog',u:'https://cloud.google.com/blog/products/ai-machine-learning/announcing-the-2025-dora-report',k:'article',y:2025,s:'Google Cloud'},
                {t:'DORA | Artificial Intelligence',u:'https://dora.dev/ai/',k:'doc',s:'DORA',w:'DORA AI Capabilities Model: які практики підсилюють ефект від AI'}
              ]},
            {label:'Stack Overflow 2025/2026: довіра',desc:'Користуються майже всі, але довіряють результату меншість, і лише 7% довіряють AI важливі рішення. Довіра зʼявляється там, де результат легко перевірити.',why:'Перевірність результату - це і є ваш метод: тест, диф, ревʼю.',
              links:[
                {t:'AI | 2025 Stack Overflow Developer Survey',u:'https://survey.stackoverflow.co/2025/ai',k:'article',y:2025,s:'Stack Overflow'},
                {t:'AI 2026 | Stack Overflow Developer Survey',u:'https://survey.stackoverflow.co/2026/ai',k:'article',y:2026,s:'Stack Overflow'},
                {t:'Всього 7% розробників довіряють AI важливі рішення',u:'https://t.me/beerphp/225',k:'post',y:2026,s:'beerphp'},
                {t:'Developers remain willing but reluctant to use AI: The 2025 Developer Survey results are here',u:'https://stackoverflow.blog/2025/07/29/developers-remain-willing-but-reluctant-to-use-ai-the-2025-developer-survey-results-are-here/',k:'article',y:2025,s:'Stack Overflow'}
              ]},
            {label:'Швидкість людини проти команди',desc:'Розробник з Copilot почувається продуктивнішим (CACM 2024), але на рівні організації throughput майже не росте, а ревʼю і баги зʼїдають виграш (Faros 2025).',why:'Міряти треба команду і релізи, а не кількість рядків за годину.',
              links:[
                {t:'AI Productivity Paradox: Why Engineering Performance Stalled',u:'https://www.faros.ai/ai-productivity-paradox',k:'article',y:2025,s:'Faros AI'},
                {t:'Measuring GitHub Copilot\'s Impact on Productivity',u:'https://cacm.acm.org/research/measuring-github-copilots-impact-on-productivity/',k:'article',y:2024,s:'Communications of the ACM'}
              ]}
          ]},
        {label:'Метрики команди: lead time, PR, rework',desc:'Що дивитись до і після впровадження агентів: lead time задачі, розмір і кількість PR, час до першого ревʼю, частка revert і rework, change failure rate з DORA.',why:'Без базової лінії «до» будь-яке «стало швидше» недоказове.',
          links:[
            {t:'Бачу одну й ту саму картину в різних командах',u:'https://t.me/beerphp/226',k:'post',y:2026,s:'beerphp',w:'Ліцензії є в усіх, а ефект ніхто не міряє'},
            {t:'Measuring AI code assistants and agents',u:'https://getdx.com/research/measuring-ai-code-assistants-and-agents/',k:'article',y:2025,s:'DX',w:'Фреймворк метрик для AI-інструментів: utilization, impact, cost'},
            {t:'DORA | State of AI-assisted Software Development 2025',u:'https://dora.dev/research/2025/dora-report/',k:'article',y:2025,s:'DORA'},
            {t:'Speed of Code Reviews | eng-practices',u:'https://google.github.io/eng-practices/review/reviewer/speed.html',k:'doc',s:'Google'}
          ]},
        {label:'Якість коду після агентів',desc:'Код від агентів частіше дублюється (GitClear), має більше проблем на PR (CodeRabbit: приблизно 1,7 раза), а інциденти в 2025 році частково пов’язують із ним. Міряється: дублікати, churn, баги після релізу.',why:'Швидкість без контролю якості просто переносить роботу з розробки в підтримку.',
          links:[
            {t:'AI Copilot Code Quality: 2025 Data Suggests 4x Growth in Code Clones - GitClear',u:'https://www.gitclear.com/ai_assistant_code_quality_2025_research',k:'article',y:2025,s:'GitClear'},
            {t:'AI vs Human Code Generation Report',u:'https://www.coderabbit.ai/blog/state-of-ai-vs-human-code-generation-report',k:'article',y:2025,s:'CodeRabbit'},
            {t:'Assessing internal quality while coding with an agent',u:'https://martinfowler.com/articles/exploring-gen-ai/ccmenu-quality.html',k:'article',y:2026,s:'martinfowler.com'},
            {t:'А старі моделі часом не пишуть краще?',u:'https://t.me/beerphp/195',k:'post',y:2026,s:'beerphp'}
          ]},
        {label:'Де реально +10-40%',desc:'Реалістичний виграш на типовій продуктовій розробці: десятки відсотків, не рази. Більше там, де задачі добре специфіковані, є тести і швидкий фідбек; майже нуль там, де вузьке місце не в написанні коду.',why:'Знати, де виграш реальний, означає вкладати зусилля в спеку і тести, а не в ще один інструмент.',
          links:[
            {t:'AI в розробці дає не ×10, добре, якщо +10-40%. Чому так і як дістати більше? Розмова двох інженерів',u:'https://www.youtube.com/watch?v=xxn6gOey9G0',k:'video',y:2026,s:'YouTube · BeerCode'},
            {t:'Де ті х10 до швидкості розробки, котрі так хочуть менеджери?',u:'https://t.me/beerphp/214',k:'post',y:2026,s:'beerphp'},
            {t:'The reality of AI-Assisted software engineering productivity',u:'https://addyo.substack.com/p/the-reality-of-ai-assisted-software',k:'article',y:2025,s:'Addy Osmani'},
            {t:'My AI Adoption Journey',u:'https://mitchellh.com/writing/my-ai-adoption-journey',k:'article',y:2026,s:'Mitchell Hashimoto',w:'Що саме дало йому виграш після року спроб'}
          ]},
        {label:'Експеримент у своїй команді',desc:'Зафіксувати базову лінію за місяць, домовитись про метод (спека, тест, ревʼю), обрати метрики, порівняти через два спринти. Чесно записати, що не спрацювало.',why:'Дослідження показують середнє по індустрії. Що працює у вашій команді, покаже лише ваш експеримент.',
          links:[
            {t:'Бачу одну й ту саму картину в різних командах',u:'https://t.me/beerphp/226',k:'post',y:2026,s:'beerphp'},
            {t:'Measuring AI code assistants and agents',u:'https://getdx.com/research/measuring-ai-code-assistants-and-agents/',k:'article',y:2025,s:'DX'},
            {t:'How much does AI impact development speed? An enterprise-based randomized controlled trial',u:'https://arxiv.org/abs/2410.12944',k:'article',y:2024,s:'arXiv',w:'Приклад дизайну експерименту, який можна спростити для команди'},
            {t:'DORA | Artificial Intelligence',u:'https://dora.dev/ai/',k:'doc',s:'DORA'}
          ]}
      ]},
    {label:'Вправа і критерій «готово»',side:'right',desc:'Наступна задача зі спринту: спершу спека і тест, код пише агент. Диф читаєте й правите як чуже. Потім ще дві такі самі.',why:'Метод не вчиться зі статей: лише з трьох задач поспіль, зроблених саме так.',
      links:[
        {t:'Agentic Engineering: Мій ідеальний AI Workflow розробки',u:'https://www.youtube.com/watch?v=4uLqamwjl-w',k:'video',y:2026,s:'YouTube · BeerCode'},
        {t:'Best practices for Claude Code',u:'https://code.claude.com/docs/en/best-practices',k:'doc',s:'Anthropic Docs'},
        {t:'Basic Claude Code | Harper Reed\'s Blog',u:'https://harper.blog/2025/05/08/basic-claude-code/',k:'article',y:2025,s:'Harper Reed',w:'Мінімальний робочий цикл для старту без зайвої обвʼязки'},
        {t:'Agentic Engineering Patterns - Simon Willison\'s Weblog',u:'https://simonwillison.net/guides/agentic-engineering-patterns/',k:'course',y:2026,s:'Simon Willison',w:'Безкоштовний гайд-книга: принципи, Git, тести, промпти'},
        {t:'Exploring Generative AI',u:'https://martinfowler.com/articles/exploring-gen-ai.html',k:'course',s:'martinfowler.com',w:'Серія мемо Birgitta Böckeler 2023-2026 про агентний кодинг'}
      ],
      children:[
        {label:'Три задачі поспіль за методом',desc:'Спека і тест були до коду, диф агента пройшов ваше ревʼю і мердж без переписування руками.',why:'Одна задача може бути везінням. Три означають, що метод у вас працює.',
          links:[
            {t:'Red/green TDD',u:'https://simonwillison.net/guides/agentic-engineering-patterns/red-green-tdd/',k:'article',y:2026,s:'Simon Willison'},
            {t:'Basic Claude Code | Harper Reed\'s Blog',u:'https://harper.blog/2025/05/08/basic-claude-code/',k:'article',y:2025,s:'Harper Reed'},
            {t:'KentBeck/BPlusTree3',u:'https://github.com/KentBeck/BPlusTree3',k:'github',y:2025,s:'GitHub',w:'Реальний репо, написаний Beck з агентом за TDD; подивіться його CLAUDE.md'}
          ]},
        {label:'Опишіть свій workflow на одну сторінку',desc:'Після трьох задач записати, як саме ви працюєте: що в спеці, як пишете тест, що перевіряєте в дифі, коли чистите контекст. Так роблять Harper Reed, Addy Osmani, Simon Willison.',why:'Записаний workflow можна показати на співбесіді, віддати команді і виправити, коли щось не працює.',
          links:[
            {t:'My LLM codegen workflow atm',u:'https://harper.blog/2025/02/16/my-llm-codegen-workflow-atm/',k:'article',y:2025,s:'Harper Reed'},
            {t:'My LLM coding workflow going into 2026',u:'https://addyo.substack.com/p/my-llm-coding-workflow-going-into',k:'article',y:2025,s:'Addy Osmani'},
            {t:'How I\'m writing code in 2026 | Cory Zue',u:'https://www.coryzue.com/writing/coding-2026/',k:'article',y:2026,s:'Cory Zue',w:'Приклад чесного опису особистого workflow'},
            {t:'Inside the Development Workflow of Claude Code\'s Creator - InfoQ',u:'https://www.infoq.com/news/2026/01/claude-code-creator-workflow',k:'article',y:2026,s:'InfoQ'}
          ]}
      ]}
  ]
};
