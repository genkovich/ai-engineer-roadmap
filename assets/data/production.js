window.ROADMAPS=window.ROADMAPS||{};
window.ROADMAPS['production']={
  slug:'production',
  title:'Прод: деплой, observability, вартість',
  intro:'Деплой бекендер уже вміє, тут до нього додаються трейси кожного прогону, ціна в токенах і latency, яку відчуває користувач. Крок стоїть останнім, бо саме тут усе попереднє збирається в систему, яка працює в проді або CI без щоденного нагляду.',
  root:{label:'Прод: деплой, observability, вартість',kicker:'деплой · трейси · ціна прогону · latency',desc:'Викотити LLM-сервіс, бачити кожен його крок у проді, знати, скільки коштує один прогін і скільки триває відповідь. Три осі, за якими оптимізують AI-фічу: якість, latency і вартість.',why:'Відмінність LLM-сервісу від звичайного після деплою: відповідь щоразу інша, ціна рахується токенами, а поломку без трейсів не відтворити.',
    links:[
      {t:'What We Learned from a Year of Building with LLMs',u:'https://applied-llms.org/',k:'article',y:2024,s:'Applied LLMs',w:'Розділ Operational: моніторинг, деградація моделей, дані з проду'},
      {t:'Books',u:'https://huyenchip.com/books/',k:'course',y:2025,s:'Chip Huyen',w:'AI Engineering: глави про inference optimization і AI engineering architecture'},
      {t:'Patterns for Building LLM-based Systems & Products',u:'https://eugeneyan.com/writing/llm-patterns/',k:'article',y:2023,s:'Eugene Yan',w:'Caching, guardrails, defensive UX, collecting feedback як патерни'},
      {t:'Production best practices',u:'https://platform.openai.com/docs/guides/production-best-practices',k:'doc',s:'OpenAI Docs'},
      {t:'How we built our multi-agent research system',u:'https://www.anthropic.com/engineering/multi-agent-research-system',k:'article',y:2025,s:'Anthropic Engineering',w:'Розділ про production reliability і трейсинг агентів'},
      {t:'AI Engineer Roadmap',u:'https://roadmap.sh/ai-engineer',k:'article',s:'roadmap.sh'},
      {t:'Observability in the Age of AI',u:'https://www.honeycomb.io/blog/observability-age-of-ai',k:'article',y:2023,s:'Honeycomb'}
    ]},
  end:{label:'Повернутись до головного роадмапу →',href:'../index.html'},
  groups:[
    {label:'Деплой LLM-сервісу',side:'left',desc:'Те саме, що деплой будь-якого сервісу, плюс кілька речей: конфігурація моделі, секрети провайдера, версіонування промптів разом із кодом і поступова викатка змін.',why:'Сервіс викочується пайплайном, а не руками, і промпт у проді має версію, як і код.',
      links:[
        {t:'Docker Docs',u:'https://docs.docker.com/',k:'doc',s:'Docker Docs'},
        {t:'GitHub Actions documentation',u:'https://docs.github.com/en/actions',k:'doc',s:'GitHub Docs'},
        {t:'The Twelve-Factor App: Config',u:'https://12factor.net/config',k:'article',s:'12factor.net',w:'Конфіг у середовищі, а не в коді: база для моделі й ключів'},
        {t:'Feature Toggles (aka Feature Flags)',u:'https://martinfowler.com/articles/feature-toggles.html',k:'article',s:'Martin Fowler'},
        {t:'Hosting the Agent SDK',u:'https://platform.claude.com/docs/en/agent-sdk/hosting',k:'doc',y:2026,s:'Claude Docs',w:'Як хостити агента: контейнери, сесії, ephemeral vs hybrid'},
        {t:'Hosting your agent',u:'https://platform.claude.com/cookbook/claude-agent-sdk-07-hosting-the-agent',k:'doc',y:2026,s:'Claude Cookbook',w:'Готовий код для Docker, Modal і Kubernetes'}
      ],
      children:[
        {label:'Контейнер і пайплайн деплою',desc:'Образ зі сервісом і залежностями SDK, збірка і викатка в CI/CD. Базові речі з роадмапу класичної інженерії.',why:'Викотити руками можна раз. Далі кожна зміна промпту теж має їхати пайплайном.',
          links:[
            {t:'Get started with Docker',u:'https://docs.docker.com/get-started/',k:'doc',s:'Docker Docs'},
            {t:'Docker Compose',u:'https://docs.docker.com/compose/',k:'doc',s:'Docker Docs'},
            {t:'Building and testing Python',u:'https://docs.github.com/en/actions/use-cases-and-examples/building-and-testing/building-and-testing-python',k:'doc',s:'GitHub Docs'},
            {t:'Hosting your agent',u:'https://platform.claude.com/cookbook/claude-agent-sdk-07-hosting-the-agent',k:'doc',y:2026,s:'Claude Cookbook'}
          ]},
        {label:'Конфігурація моделі через середовище',desc:'Назва моделі, провайдер, ліміти, таймаути задаються змінними середовища, а не константами в коді. Версія моделі зафіксована явно (pinned), а не alias «latest».',why:'Перехід на нову версію моделі або запасного провайдера не має вимагати нового релізу.',
          links:[
            {t:'The Twelve-Factor App: Config',u:'https://12factor.net/config',k:'article',s:'12factor.net'},
            {t:'Models overview',u:'https://platform.claude.com/docs/en/about-claude/models/overview',k:'doc',s:'Claude Docs',w:'Точні ідентифікатори моделей і alias, які можуть змінитись'},
            {t:'Gemini models',u:'https://ai.google.dev/gemini-api/docs/models',k:'doc',s:'Google AI for Developers'}
          ]},
        {label:'Секрети провайдера',desc:'Ключі API в менеджері секретів або сховищі CI, окремі ключі на середовище, ротація, ліміти витрат на ключ.',why:'Ключ моделі дорівнює грошам. Його витік помічають за рахунком.',
          links:[
            {t:'Using secrets in GitHub Actions',u:'https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions',k:'doc',s:'GitHub Docs'},
            {t:'What is AWS Secrets Manager?',u:'https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html',k:'doc',s:'AWS Docs'},
            {t:'Vault product documentation',u:'https://developer.hashicorp.com/vault/docs',k:'doc',s:'HashiCorp Developer'},
            {t:'Virtual Keys',u:'https://docs.litellm.ai/docs/proxy/virtual_keys',k:'doc',s:'LiteLLM Docs',w:'Віртуальні ключі з бюджетом замість роздачі справжнього ключа провайдера'}
          ]},
        {label:'Версіонування промптів і prompt registry',desc:'Промпти лежать у репо разом із кодом або в реєстрі промптів (Langfuse, Braintrust, LangSmith) з версіями, тегами і прив\'язкою до трейсів. Зміна проходить рев\'ю і evals.',why:'«Хтось поправив промпт у проді» має бути неможливим, як і правка коду на сервері.',
          links:[
            {t:'Open Source Prompt Management',u:'https://langfuse.com/docs/prompt-management/overview',k:'doc',s:'Langfuse Docs'},
            {t:'Get Started with Prompt Management',u:'https://langfuse.com/docs/prompt-management/get-started',k:'doc',s:'Langfuse Docs'},
            {t:'Use prompts in code',u:'https://www.braintrust.dev/docs/guides/functions/prompts',k:'doc',s:'Braintrust Docs'},
            {t:'Prompt engineering concepts',u:'https://docs.smith.langchain.com/prompt_engineering/concepts',k:'doc',s:'LangSmith Docs'}
          ],
          children:[
            {label:'Промпт у репо, зміна через PR',desc:'Файл промпту поруч із кодом, рев\'ю як для коду, evals у CI перед мерджем.',why:'Найпростіший реєстр промптів: git з історією і blame.',links:[{t:'Prompt engineering concepts',u:'https://docs.smith.langchain.com/prompt_engineering/concepts',k:'doc',s:'LangSmith Docs'}]},
            {label:'Реєстр: Langfuse, Braintrust',desc:'Окремий сервіс зберігає версії промптів, віддає їх по API, лінкує до трейсів і до evals.',why:'Правка промпту без релізу коду, але з версією і відкатом.',links:[{t:'Open Source Prompt Management',u:'https://langfuse.com/docs/prompt-management/overview',k:'doc',s:'Langfuse Docs'},{t:'Use prompts in code',u:'https://www.braintrust.dev/docs/guides/functions/prompts',k:'doc',s:'Braintrust Docs'}]},
            {label:'Версія промпту в трейсі',desc:'Кожен span виклику моделі несе ідентифікатор версії промпту.',why:'Без цього не зрозуміти, чи деградація почалась після зміни промпту.',links:[{t:'Semantic conventions for generative client AI spans',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-spans/',k:'doc',s:'OpenTelemetry'}]}
          ]},
        {label:'Конфіг під середовища',desc:'Dev, staging, prod з різними моделями, лімітами і джерелами даних. Дешевша модель і моки в dev.',why:'Інтеграційні тести на реальній моделі в кожному прогоні CI коштують грошей і часу.',
          links:[
            {t:'The Twelve-Factor App: Config',u:'https://12factor.net/config',k:'article',s:'12factor.net'},
            {t:'Docker Compose',u:'https://docs.docker.com/compose/',k:'doc',s:'Docker Docs'}
          ]},
        {label:'Стратегії викатки: flags, shadow, canary',desc:'Нова версія промпту або моделі не вмикається всім одразу: feature flag, тіньовий прогін без показу користувачу, канарейка на частку трафіку, відкат за хвилину.',why:'Нова модель може бути краща в evals і гірша на вашому трафіку. Поступова викатка показує це до того, як її побачать усі.',
          links:[
            {t:'Feature Toggles (aka Feature Flags)',u:'https://martinfowler.com/articles/feature-toggles.html',k:'article',s:'Martin Fowler'},
            {t:'Canary Release',u:'https://martinfowler.com/bliki/CanaryRelease.html',k:'article',s:'Martin Fowler'},
            {t:'OpenFeature',u:'https://openfeature.dev/',k:'doc',s:'OpenFeature',w:'Відкритий стандарт feature flags під CNCF'},
            {t:'github/scientist',u:'https://github.com/github/scientist',k:'github',s:'GitHub',w:'Бібліотека для тіньових експериментів: стара й нова логіка поруч'},
            {t:'AI Configs',u:'https://launchdarkly.com/docs/home/ai-configs',k:'doc',y:2025,s:'LaunchDarkly Docs',w:'Промпт і модель як конфіг під прапорцем'}
          ],
          children:[
            {label:'Feature flags: OpenFeature',desc:'AI-фіча і версія промпту за прапорцем, який перемикається без деплою.',why:'Вимкнути фічу за секунду, коли модель почала дивно відповідати.',links:[{t:'OpenFeature',u:'https://openfeature.dev/',k:'doc',s:'OpenFeature'},{t:'Unleash Documentation',u:'https://docs.getunleash.io/',k:'doc',s:'Unleash Docs'},{t:'LaunchDarkly Documentation',u:'https://docs.launchdarkly.com/',k:'doc',s:'LaunchDarkly Docs'}]},
            {label:'Shadow mode',desc:'Нова версія виконується на реальному трафіку паралельно, її відповідь записується, але користувач бачить стару.',why:'Порівняння на живих запитах без ризику для користувачів, ціною подвійних викликів.',links:[{t:'github/scientist',u:'https://github.com/github/scientist',k:'github',s:'GitHub'}]},
            {label:'Canary на частку трафіку',desc:'Нова версія отримує 5-10% запитів, її метрики порівнюються зі старою, частка росте.',why:'Деградацію бачить малий відсоток користувачів, а не всі.',links:[{t:'Canary Release',u:'https://martinfowler.com/bliki/CanaryRelease.html',k:'article',s:'Martin Fowler'}]},
            {label:'Blue-green і відкат',desc:'Попередня версія промпту чи моделі лишається готовою до повернення за хвилину.',why:'Відкат є першим кроком реагування на інцидент, а не останнім.',links:[{t:'Blue Green Deployment',u:'https://martinfowler.com/bliki/BlueGreenDeployment.html',k:'article',s:'Martin Fowler'}]}
          ]},
        {label:'Serverless чи довгоживучий сервіс',type:'optional',desc:'Функції з лімітом часу погано підходять для довгих прогонів агента. Воркер з чергою або контейнер з сесією підходить краще.',why:'Вибір платформи залежить від тривалості прогону, а не від звички.',
          links:[
            {t:'Configure Lambda function timeout',u:'https://docs.aws.amazon.com/lambda/latest/dg/configuration-timeout.html',k:'doc',s:'AWS Docs'},
            {t:'Hosting the Agent SDK',u:'https://platform.claude.com/docs/en/agent-sdk/hosting',k:'doc',y:2026,s:'Claude Docs'},
            {t:'Queue-Based Load Leveling pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling',k:'doc',s:'Microsoft Learn'}
          ]}
      ]},
    {label:'Трейси',side:'right',desc:'Запис кожного прогону: кожен промпт, виклик тула, рішення моделі, кількість токенів і час. Так, щоб будь-який прогін можна було відтворити і розібрати.',why:'Коли агент учора зробив щось дивне, ви за хвилину знаходите, що саме він бачив і який тул викликав.',
      links:[
        {t:'Traces',u:'https://opentelemetry.io/docs/concepts/signals/traces/',k:'doc',s:'OpenTelemetry'},
        {t:'Observability primer',u:'https://opentelemetry.io/docs/concepts/observability-primer/',k:'doc',s:'OpenTelemetry'},
        {t:'LLM Observability & Application Tracing (Open Source)',u:'https://langfuse.com/docs/observability/overview',k:'doc',s:'Langfuse Docs'},
        {t:'Observability concepts',u:'https://docs.smith.langchain.com/observability/concepts',k:'doc',s:'LangSmith Docs'},
        {t:'How agent o11y differs from traditional o11y - Phil Hetzel, Braintrust',u:'https://www.youtube.com/watch?v=XBaznoTRDFI',k:'video',y:2025,s:'YouTube · AI Engineer'},
        {t:'Claude Code in Action: Trace Tool Calls & Decisions with Langfuse',u:'https://www.youtube.com/watch?v=fsoBHf_WNmQ',k:'video',y:2025,s:'YouTube · Langfuse'}
      ],
      children:[
        {label:'Один прогін дорівнює один trace',desc:'Усе, що сталось від запиту до результату, має спільний ідентифікатор. За ним збирається вся історія; кілька прогонів одного користувача групуються в сесію.',why:'Без спільного ідентифікатора логи окремих кроків неможливо зшити назад у прогін.',
          links:[
            {t:'Traces',u:'https://opentelemetry.io/docs/concepts/signals/traces/',k:'doc',s:'OpenTelemetry'},
            {t:'Context propagation',u:'https://opentelemetry.io/docs/concepts/context-propagation/',k:'doc',s:'OpenTelemetry'},
            {t:'Sessions',u:'https://langfuse.com/docs/observability/features/sessions',k:'doc',s:'Langfuse Docs'},
            {t:'Sessions',u:'https://docs.helicone.ai/features/sessions',k:'doc',s:'Helicone Docs'}
          ]},
        {label:'Span на кожен крок',desc:'Виклик моделі, виклик тула, крок workflow, запит до бази чи векторного індексу: кожен має свій span з початком, кінцем і атрибутами, вкладений у батьківський.',why:'Дерево span відповідає на питання, де саме витрачається час і де зламалось.',
          links:[
            {t:'Semantic conventions for generative client AI spans',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-spans/',k:'doc',s:'OpenTelemetry'},
            {t:'Semantic Conventions for GenAI agent and framework spans',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/',k:'doc',s:'OpenTelemetry'},
            {t:'Tracing',u:'https://openai.github.io/openai-agents-python/tracing/',k:'doc',s:'OpenAI Agents SDK',w:'Приклад, як SDK агентів сам розбиває прогін на span'}
          ],
          children:[
            {label:'Span виклику моделі',desc:'Модель, версія промпту, токени на вході й виході, stop reason, тривалість, помилка.',why:'Найдорожчий і найповільніший span; саме його оптимізують першим.',links:[{t:'Semantic conventions for generative client AI spans',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-spans/',k:'doc',s:'OpenTelemetry'}]},
            {label:'Span виклику тула',desc:'Назва тула, аргументи, результат або помилка, тривалість.',why:'Помилки тулів зазвичай є першою ознакою, що змінилось зовнішнє API.',links:[{t:'Semantic Conventions for GenAI agent and framework spans',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/',k:'doc',s:'OpenTelemetry'}]},
            {label:'Span кроку workflow',desc:'Назва кроку, вхід і вихід, вкладені span викликів моделі й тулів.',why:'Дає читабельне дерево замість плаского списку викликів.',links:[{t:'Tracing',u:'https://openai.github.io/openai-agents-python/tracing/',k:'doc',s:'OpenAI Agents SDK'}]},
            {label:'Span retrieval і embedding',desc:'Запит до векторної бази: текст запиту, кількість знайдених документів, їхні ідентифікатори, score.',why:'Половина поганих відповідей RAG пояснюється тим, що знайшлось не те.',links:[{t:'Arize-ai/openinference',u:'https://github.com/Arize-ai/openinference',k:'github',s:'GitHub',w:'Конвенції OpenInference покривають retriever і embedding span'}]}
          ]},
        {label:'Що записувати в атрибути',desc:'Модель і версія, версія промпту, вхідні й вихідні токени, stop reason, назва тула й аргументи, тривалість, помилки. Повний текст промпту і відповіді з урахуванням приватності.',why:'Атрибути перетворюють трейс із «щось сталось» на «ось що саме сталось і скільки це коштувало».',
          links:[
            {t:'Semantic Conventions for Generative AI systems',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/',k:'doc',s:'OpenTelemetry'},
            {t:'Token & Cost Tracking',u:'https://langfuse.com/docs/observability/features/token-and-cost-tracking',k:'doc',s:'Langfuse Docs'},
            {t:'Instrument your application',u:'https://www.braintrust.dev/docs/guides/traces',k:'doc',s:'Braintrust Docs'}
          ]},
        {label:'Логування промптів і PII',desc:'Повний текст промптів і відповідей потрібен для дебагу, але містить персональні дані користувачів. Маскування, семплінг повних текстів, окремі строки зберігання.',why:'Трейс із паспортними даними в сторонньому сервісі observability є витоком, навіть якщо модель поводилась ідеально.',
          links:[
            {t:'Masking',u:'https://langfuse.com/docs/observability/features/masking',k:'doc',s:'Langfuse Docs'},
            {t:'Prevent logging of sensitive data in traces',u:'https://docs.smith.langchain.com/observability/how_to_guides/mask_inputs_outputs',k:'doc',s:'LangSmith Docs'},
            {t:'Presidio: Data Protection and De-identification SDK',u:'https://microsoft.github.io/presidio/',k:'doc',s:'Microsoft'},
            {t:'OWASP Top 10 for LLM Applications 2025',u:'https://genai.owasp.org/llm-top-10/',k:'doc',y:2025,s:'OWASP',w:'LLM02: Sensitive Information Disclosure'}
          ],
          children:[
            {label:'Маскування PII: Presidio',desc:'Детектор персональних даних замінює імена, телефони, номери карт на плейсхолдери перед записом у трейс.',why:'Дебаг лишається можливим, а дані користувача не виходять за межі сервісу.',links:[{t:'microsoft/presidio',u:'https://github.com/microsoft/presidio',k:'github',s:'GitHub'},{t:'Masking',u:'https://langfuse.com/docs/observability/features/masking',k:'doc',s:'Langfuse Docs'}]},
            {label:'Семплінг повних текстів',desc:'Метадані записуються для всіх прогонів, повні тексти лише для частки або для помилкових.',why:'Економить сховище і зменшує поверхню витоку.',links:[{t:'Observability concepts',u:'https://docs.smith.langchain.com/observability/concepts',k:'doc',s:'LangSmith Docs'}]},
            {label:'Строки зберігання трейсів',desc:'Повні тексти живуть днями, агреговані метрики місяцями. Видалення за запитом користувача.',why:'GDPR і внутрішні політики вимагають знати, де лежать дані і коли вони зникнуть.',links:[{t:'Data protection',u:'https://commission.europa.eu/law/law-topic/data-protection_en',k:'doc',s:'European Commission'}]}
          ]},
        {label:'Відтворення прогону',desc:'За трейсом можна зібрати точний вхід кожного кроку і запустити його знову, щоб перевірити поломку або нову версію промпту.',why:'Критерій «готово» для цього кроку: будь-який прогін можна відтворити по логах.',
          links:[
            {t:'Experiments',u:'https://www.braintrust.dev/docs/guides/evals/write',k:'doc',s:'Braintrust Docs',w:'Прогін з проду стає кейсом для експерименту'},
            {t:'Evaluation of LLM Applications',u:'https://langfuse.com/docs/evaluation/overview',k:'doc',s:'Langfuse Docs'}
          ]},
        {label:'Мінімальний варіант: лог у файл',desc:'Для початку досить писати в лог кожен промпт, кожен виклик тула і кількість токенів, яку повертає API, з ідентифікатором прогону.',why:'Трейси не вимагають платформи. Вимагають звички писати їх з першого дня.',
          links:[
            {t:'Logs',u:'https://opentelemetry.io/docs/concepts/signals/logs/',k:'doc',s:'OpenTelemetry'},
            {t:'Metrics, tracing, and logging',u:'https://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html',k:'article',y:2017,s:'Peter Bourgon'}
          ]}
      ]},
    {label:'OpenTelemetry і інструменти',side:'left',desc:'Стандарт збору трейсів, метрик і логів, на який спираються інструменти для LLM, і клас інструментів LLM-observability (Langfuse, Arize Phoenix, LangSmith, Braintrust, Helicone, Datadog, Sentry), що показують прогони зручно.',why:'Стандарт дає змогу змінити інструмент, не переписуючи інструментацію.',
      links:[
        {t:'OpenTelemetry Documentation',u:'https://opentelemetry.io/docs/',k:'doc',s:'OpenTelemetry'},
        {t:'Semantic Conventions for Generative AI systems',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/',k:'doc',s:'OpenTelemetry'},
        {t:'OpenTelemetry for Generative AI',u:'https://opentelemetry.io/blog/2024/otel-generative-ai/',k:'article',y:2024,s:'OpenTelemetry Blog'},
        {t:'OpenLLMetry is all you need',u:'https://www.youtube.com/watch?v=KVgbERRPU4M',k:'video',y:2025,s:'YouTube · AI Engineer'},
        {t:'LLM Observability, Evaluation, Experimentation Platform - Dat Ngo, Arize',u:'https://www.youtube.com/watch?v=JsCCrBF7F1g',k:'video',y:2026,s:'YouTube · AI Engineer'},
        {t:'What Is LLM Observability and Monitoring?',u:'https://www.honeycomb.io/resources/getting-started/what-is-llm-observability',k:'article',y:2025,s:'Honeycomb'}
      ],
      children:[
        {label:'OpenTelemetry: трейси, метрики, логи',desc:'Відкритий стандарт і SDK для збору телеметрії. Один формат для трейсів, метрик і логів, Collector для маршрутизації, експорт у будь-який бекенд: Jaeger, Grafana Tempo, Datadog, Langfuse.',why:'Інструменти LLM-observability здебільшого приймають OpenTelemetry або будуються на нього.',
          links:[
            {t:'OpenTelemetry Documentation',u:'https://opentelemetry.io/docs/',k:'doc',s:'OpenTelemetry'},
            {t:'Python',u:'https://opentelemetry.io/docs/languages/python/',k:'doc',s:'OpenTelemetry'},
            {t:'JavaScript',u:'https://opentelemetry.io/docs/languages/js/',k:'doc',s:'OpenTelemetry'},
            {t:'Collector',u:'https://opentelemetry.io/docs/collector/',k:'doc',s:'OpenTelemetry'},
            {t:'Jaeger Documentation',u:'https://www.jaegertracing.io/docs/latest/',k:'doc',s:'Jaeger'},
            {t:'Grafana Tempo documentation',u:'https://grafana.com/docs/tempo/latest/',k:'doc',s:'Grafana Docs'}
          ]},
        {label:'GenAI semantic conventions',desc:'Домовленості OpenTelemetry про назви атрибутів для викликів моделей і агентів: gen_ai.request.model, gen_ai.usage.input_tokens, gen_ai.operation.name. Ще в статусі development, але вже задають словник.',why:'Однакові назви атрибутів дають змогу порівнювати сервіси і будувати спільні дашборди.',
          links:[
            {t:'Semantic Conventions for Generative AI systems',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/',k:'doc',s:'OpenTelemetry'},
            {t:'open-telemetry/semantic-conventions-genai',u:'https://github.com/open-telemetry/semantic-conventions-genai',k:'github',s:'GitHub'},
            {t:'Inside the LLM Call: GenAI Observability with OpenTelemetry',u:'https://opentelemetry.io/blog/2026/genai-observability/',k:'article',y:2026,s:'OpenTelemetry Blog'},
            {t:'OpenTelemetry for Generative AI',u:'https://www.cncf.io/blog/2025/01/20/opentelemetry-for-generative-ai/',k:'article',y:2025,s:'CNCF Blog'}
          ],
          children:[
            {label:'gen_ai.* атрибути span',desc:'Модель, провайдер, параметри запиту, токени, finish reason на span виклику моделі.',why:'Готовий перелік того, що записувати, замість вигадування власних назв.',links:[{t:'Semantic conventions for generative client AI spans',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-spans/',k:'doc',s:'OpenTelemetry'}]},
            {label:'Agent і tool span',desc:'Окремі конвенції для create_agent, invoke_agent і execute_tool.',why:'Агентні прогони отримують стандартну структуру дерева.',links:[{t:'Semantic Conventions for GenAI agent and framework spans',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-agent-spans/',k:'doc',s:'OpenTelemetry'}]},
            {label:'Метрики gen_ai.client.*',desc:'Стандартні гістограми: token.usage, operation.duration, time_to_first_token.',why:'Дашборд latency і токенів будується з стандартних метрик без ручного коду.',links:[{t:'Semantic conventions for generative AI metrics',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-metrics/',k:'doc',s:'OpenTelemetry'}]},
            {label:'Події з текстом промптів',desc:'Повний вхід і вихід записуються як події (events), вимкнені за замовчуванням.',why:'Тексти промптів відокремлені від метаданих: їх можна не збирати або маскувати.',links:[{t:'Semantic conventions for Generative AI events',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-events/',k:'doc',s:'OpenTelemetry'}]}
          ]},
        {label:'Observability: open source',desc:'Платформи LLM-observability, які можна підняти у себе: дерево прогону з промптами, відповідями, токенами і ціною, сесії, evals, prompt management. Обирається одна.',why:'Self-hosted варіант знімає питання, куди відлітають промпти з персональними даними.',
          links:[
            {t:'Get Started with LLM Tracing',u:'https://langfuse.com/docs/observability/get-started',k:'doc',s:'Langfuse Docs'},
            {t:'What is Arize Phoenix?',u:'https://arize.com/docs/phoenix',k:'doc',s:'Arize Docs'},
            {t:'Opik Documentation',u:'https://www.comet.com/docs/opik/',k:'doc',s:'Comet Docs'},
            {t:'MLflow Tracing',u:'https://mlflow.org/docs/latest/genai/tracing/',k:'doc',s:'MLflow Docs'},
            {t:'Langfuse Walkthrough - Full Demo of Agent Tracing, Evals, Experiments and Prompt Management',u:'https://www.youtube.com/watch?v=THfB4p2xCFY',k:'video',y:2025,s:'YouTube · Langfuse'}
          ],
          children:[
            {label:'Langfuse',type:'alt',desc:'Open source платформа: трейси, сесії, оцінки, prompt management, self-hosted або cloud.',why:'Найпоширеніший self-hosted варіант із підтримкою OpenTelemetry.',links:[{t:'Get Started with LLM Tracing',u:'https://langfuse.com/docs/observability/get-started',k:'doc',s:'Langfuse Docs'},{t:'langfuse/langfuse',u:'https://github.com/langfuse/langfuse',k:'github',s:'GitHub'}]},
            {label:'Arize Phoenix',type:'alt',desc:'Open source трейсинг і evals від Arize на базі OpenInference і OpenTelemetry.',why:'Сильний у RAG: retrieval span і оцінка релевантності з коробки.',links:[{t:'What is Arize Phoenix?',u:'https://arize.com/docs/phoenix',k:'doc',s:'Arize Docs'},{t:'Arize-ai/phoenix',u:'https://github.com/Arize-ai/phoenix',k:'github',s:'GitHub'}]},
            {label:'Opik',type:'alt',desc:'Open source платформа від Comet: трейси, evals, дашборди, self-hosted.',why:'Альтернатива Langfuse з тим самим набором функцій.',links:[{t:'Opik Documentation',u:'https://www.comet.com/docs/opik/',k:'doc',s:'Comet Docs'},{t:'comet-ml/opik',u:'https://github.com/comet-ml/opik',k:'github',s:'GitHub'}]},
            {label:'MLflow Tracing',type:'alt',desc:'Трейсинг GenAI у MLflow, якщо він уже стоїть для класичного ML.',why:'Один інструмент для моделей ML і для LLM-застосунків.',links:[{t:'MLflow Tracing',u:'https://mlflow.org/docs/latest/genai/tracing/',k:'doc',s:'MLflow Docs'},{t:'mlflow/mlflow',u:'https://github.com/mlflow/mlflow',k:'github',s:'GitHub'}]}
          ]},
        {label:'Observability: SaaS',desc:'Хмарні платформи того ж класу: LangSmith від LangChain, Braintrust з акцентом на evals, Helicone як проксі перед провайдером, Weave від Weights & Biases. Обирається одна.',why:'Швидкий старт без власної інфраструктури; платите за обсяг трейсів.',
          links:[
            {t:'LangSmith Observability',u:'https://docs.smith.langchain.com/observability',k:'doc',s:'LangSmith Docs'},
            {t:'Observe your application',u:'https://www.braintrust.dev/docs/guides/logs',k:'doc',s:'Braintrust Docs'},
            {t:'Quick Start',u:'https://docs.helicone.ai/getting-started/quick-start',k:'doc',s:'Helicone Docs'},
            {t:'Weave documentation',u:'https://weave-docs.wandb.ai/',k:'doc',s:'Weights & Biases'},
            {t:'How agent o11y differs from traditional o11y - Phil Hetzel, Braintrust',u:'https://www.youtube.com/watch?v=XBaznoTRDFI',k:'video',y:2025,s:'YouTube · AI Engineer'}
          ],
          children:[
            {label:'LangSmith',type:'alt',desc:'Платформа від LangChain: трейси, online evals, prompt hub. Працює і без LangChain у коді.',why:'Природний вибір для команд на LangChain або LangGraph.',links:[{t:'LangSmith Observability',u:'https://docs.smith.langchain.com/observability',k:'doc',s:'LangSmith Docs'},{t:'langchain-ai/langsmith-sdk',u:'https://github.com/langchain-ai/langsmith-sdk',k:'github',s:'GitHub'}]},
            {label:'Braintrust',type:'alt',desc:'Логи, експерименти і evals в одному місці, з human review і prompt playground.',why:'Коли evals важливіші за трейси.',links:[{t:'Observe your application',u:'https://www.braintrust.dev/docs/guides/logs',k:'doc',s:'Braintrust Docs'}]},
            {label:'Helicone',type:'alt',desc:'Проксі перед провайдером: логує всі запити, рахує вартість, кешує, дає rate limits. Є open source.',why:'Підключення зміною base URL без змін у коді.',links:[{t:'Quick Start',u:'https://docs.helicone.ai/getting-started/quick-start',k:'doc',s:'Helicone Docs'},{t:'Helicone/helicone',u:'https://github.com/Helicone/helicone',k:'github',s:'GitHub'}]},
            {label:'Weights & Biases Weave',type:'alt',desc:'Трейсинг і evals LLM-застосунків у екосистемі W&B.',why:'Для команд, що вже тримають експерименти ML у W&B.',links:[{t:'Weave documentation',u:'https://weave-docs.wandb.ai/',k:'doc',s:'Weights & Biases'},{t:'wandb/weave',u:'https://github.com/wandb/weave',k:'github',s:'GitHub'}]}
          ]},
        {label:'APM і трейсинг: Datadog, Sentry, Honeycomb',desc:'Якщо команда вже сидить на Datadog, Sentry, Honeycomb чи Grafana, LLM-трейси зручніше додати туди, ніж заводити окремий інструмент.',why:'Один екран для HTTP, бази, черги і моделі замість двох несумісних.',
          links:[
            {t:'LLM Observability',u:'https://docs.datadoghq.com/llm_observability/',k:'doc',s:'Datadog Docs'},
            {t:'Monitor, troubleshoot, and improve AI agents with Datadog',u:'https://www.datadoghq.com/blog/monitor-ai-agents/',k:'article',y:2025,s:'Datadog Blog'},
            {t:'Agents',u:'https://docs.sentry.io/product/insights/agents/',k:'doc',s:'Sentry Docs'},
            {t:'LLM',u:'https://docs.honeycomb.io/get-started/start-building/llm/',k:'doc',s:'Honeycomb Docs'},
            {t:'Grafana Tempo documentation',u:'https://grafana.com/docs/tempo/latest/',k:'doc',s:'Grafana Docs'}
          ],
          children:[
            {label:'Datadog LLM Observability',type:'alt',desc:'Трейси агентів, evals і дашборди всередині Datadog APM.',why:'Для команд, у яких Datadog уже є стандартом.',links:[{t:'LLM Observability',u:'https://docs.datadoghq.com/llm_observability/',k:'doc',s:'Datadog Docs'}]},
            {label:'Sentry AI Agents',type:'alt',desc:'Insights для агентів у Sentry: виклики моделі, тули, токени поруч із помилками застосунку.',why:'Помилка в коді і дивна відповідь моделі в одному трейсі.',links:[{t:'Agents',u:'https://docs.sentry.io/product/insights/agents/',k:'doc',s:'Sentry Docs'}]},
            {label:'Honeycomb',type:'alt',desc:'Трейси LLM як частина звичайних OpenTelemetry-трейсів застосунку.',why:'Жоден окремий «LLM-інструмент», лише атрибути на наявних span.',links:[{t:'LLM',u:'https://docs.honeycomb.io/get-started/start-building/llm/',k:'doc',s:'Honeycomb Docs'}]},
            {label:'Grafana Tempo + Jaeger',type:'alt',desc:'Open source бекенди трейсів для OpenTelemetry без LLM-специфіки.',why:'Достатньо, якщо потрібні лише span і атрибути без UI для промптів.',links:[{t:'Grafana Tempo documentation',u:'https://grafana.com/docs/tempo/latest/',k:'doc',s:'Grafana Docs'},{t:'Jaeger Documentation',u:'https://www.jaegertracing.io/docs/latest/',k:'doc',s:'Jaeger'}]}
          ]},
        {label:'Автоінструментація: OpenLLMetry',type:'optional',desc:'Бібліотеки, що автоматично обгортають виклики SDK моделі, векторних баз і фреймворків і створюють span без ручного коду. OpenLLMetry від Traceloop, OpenInference від Arize, telemetry у Vercel AI SDK, Logfire від Pydantic.',why:'Швидкий старт, але варто розуміти, що саме вони записують і чого ні.',
          links:[
            {t:'traceloop/openllmetry',u:'https://github.com/traceloop/openllmetry',k:'github',s:'GitHub'},
            {t:'Introduction',u:'https://www.traceloop.com/docs/openllmetry/introduction',k:'doc',s:'Traceloop Docs'},
            {t:'Arize-ai/openinference',u:'https://github.com/Arize-ai/openinference',k:'github',s:'GitHub'},
            {t:'Telemetry',u:'https://ai-sdk.dev/docs/ai-sdk-core/telemetry',k:'doc',s:'Vercel AI SDK'},
            {t:'Pydantic Logfire Documentation',u:'https://logfire.pydantic.dev/docs/',k:'doc',s:'Pydantic'},
            {t:'OpenLLMetry is all you need',u:'https://www.youtube.com/watch?v=KVgbERRPU4M',k:'video',y:2025,s:'YouTube · AI Engineer'}
          ]},
        {label:'Кореляція з рештою системи',desc:'Трейс LLM-частини зшивається з трейсом HTTP-запиту, бази і черги через той самий trace id, що передається у заголовках.',why:'Повільна відповідь може бути не моделлю, а запитом до бази перед нею. Видно це лише в спільному трейсі.',
          links:[
            {t:'Context propagation',u:'https://opentelemetry.io/docs/concepts/context-propagation/',k:'doc',s:'OpenTelemetry'},
            {t:'LLM',u:'https://docs.honeycomb.io/get-started/start-building/llm/',k:'doc',s:'Honeycomb Docs',w:'LLM-інструментація додається до наявних трейсів застосунку'},
            {t:'Monitoring',u:'https://code.claude.com/docs/en/monitoring-usage',k:'doc',s:'Claude Code Docs',w:'Приклад: Claude Code віддає метрики й події через OpenTelemetry'}
          ]}
      ]},
    {label:'Метрики, логи, алерти',side:'right',desc:'Числа, за якими стежать так само, як за помилками звичайного сервісу, і сигнали, коли щось пішло не туди.',why:'Трейс показує один прогін. Метрики показують, чи сервіс загалом живий і скільки коштує.',
      links:[
        {t:'Metrics',u:'https://opentelemetry.io/docs/concepts/signals/metrics/',k:'doc',s:'OpenTelemetry'},
        {t:'Monitoring Distributed Systems',u:'https://sre.google/sre-book/monitoring-distributed-systems/',k:'course',s:'Google SRE Book',w:'Чотири золоті сигнали: latency, traffic, errors, saturation'},
        {t:'Prometheus overview',u:'https://prometheus.io/docs/introduction/overview/',k:'doc',s:'Prometheus'},
        {t:'Semantic conventions for generative AI metrics',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-metrics/',k:'doc',s:'OpenTelemetry'},
        {t:'LLM Observability at Datadog: Dashboards',u:'https://www.datadoghq.com/blog/llm-observability-at-datadog-dashboards/',k:'article',y:2026,s:'Datadog Blog'},
        {t:'Grafana dashboards',u:'https://grafana.com/docs/grafana/latest/dashboards/',k:'doc',s:'Grafana Docs'}
      ],
      children:[
        {label:'Логи, трейси, метрики: різниця',desc:'Лог: подія з текстом. Трейс: звʼязані події одного прогону. Метрика: число в часі. Кожне відповідає на своє питання.',why:'Шукати середню latency в логах або причину одного падіння в метриках однаково марно.',
          links:[
            {t:'Metrics, tracing, and logging',u:'https://peter.bourgon.org/blog/2017/02/21/metrics-tracing-and-logging.html',k:'article',y:2017,s:'Peter Bourgon'},
            {t:'Observability primer',u:'https://opentelemetry.io/docs/concepts/observability-primer/',k:'doc',s:'OpenTelemetry'},
            {t:'Grafana Loki documentation',u:'https://grafana.com/docs/loki/latest/',k:'doc',s:'Grafana Docs'}
          ]},
        {label:'Latency: p50, p95, TTFT, tokens/sec',desc:'Час відповіді не в середньому, а за процентилями; окремо на весь прогін і на кожен крок. Для стрімінгу ще time to first token і швидкість генерації в токенах за секунду.',why:'Середнє ховає хвіст: p95 показує, скільки чекає кожен двадцятий користувач.',
          links:[
            {t:'LLM Inference Benchmarking: Fundamental Concepts',u:'https://developer.nvidia.com/blog/llm-benchmarking-fundamental-concepts',k:'article',y:2025,s:'NVIDIA Technical Blog',w:'Визначення TTFT, ITL, tokens/sec і чому вони міряються по-різному'},
            {t:'Histograms and summaries',u:'https://prometheus.io/docs/practices/histograms/',k:'doc',s:'Prometheus',w:'Як правильно рахувати p95'},
            {t:'LLM Inference Performance Engineering: Best Practices',u:'https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices',k:'article',y:2023,s:'Databricks'},
            {t:'Semantic conventions for generative AI metrics',u:'https://opentelemetry.io/docs/specs/semconv/gen-ai/gen-ai-metrics/',k:'doc',s:'OpenTelemetry'}
          ],
          children:[
            {label:'TTFT: час до першого токена',desc:'Скільки минає від запиту до першого символу відповіді. Зростає з довжиною промпту.',why:'Для стрімінгу це і є сприйнята швидкість.',links:[{t:'LLM Inference Benchmarking: Fundamental Concepts',u:'https://developer.nvidia.com/blog/llm-benchmarking-fundamental-concepts',k:'article',y:2025,s:'NVIDIA Technical Blog'}]},
            {label:'Tokens/sec і inter-token latency',desc:'Швидкість генерації після першого токена; падає, коли провайдер перевантажений.',why:'Пояснює, чому та сама відповідь уранці йде 4 секунди, а ввечері 12.',links:[{t:'LLM Inference Performance Engineering: Best Practices',u:'https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices',k:'article',y:2023,s:'Databricks'}]},
            {label:'p95 по кроках прогону',desc:'Процентилі окремо для кожного span: модель, тул, retrieval.',why:'Показує, який крок тягне хвіст.',links:[{t:'Histograms and summaries',u:'https://prometheus.io/docs/practices/histograms/',k:'doc',s:'Prometheus'}]}
          ]},
        {label:'Error rate і tool error rate',desc:'Частка прогонів з помилкою, окремо помилки API моделі (429, 529, таймаути), невалідні відповіді за схемою, помилки тулів.',why:'Зростання помилок тулів часто є першим сигналом, що зовнішнє API змінилось.',
          links:[
            {t:'Claude API errors',u:'https://platform.claude.com/docs/en/api/errors',k:'doc',s:'Claude Docs'},
            {t:'Error codes',u:'https://platform.openai.com/docs/guides/error-codes',k:'doc',s:'OpenAI Docs'},
            {t:'Monitoring Distributed Systems',u:'https://sre.google/sre-book/monitoring-distributed-systems/',k:'course',s:'Google SRE Book'}
          ]},
        {label:'Токени і вартість на прогін',desc:'Вхідні й вихідні токени, ціна за прогін з них, розподіл по кроках і по моделях.',why:'Відповідь на питання «скільки коштує один прогін» береться з цієї метрики, а не з рахунку в кінці місяця.',
          links:[
            {t:'Token & Cost Tracking',u:'https://langfuse.com/docs/observability/features/token-and-cost-tracking',k:'doc',s:'Langfuse Docs'},
            {t:'Usage and Cost API',u:'https://platform.claude.com/docs/en/build-with-claude/usage-cost-api',k:'doc',s:'Claude Docs'},
            {t:'Usage',u:'https://platform.openai.com/docs/api-reference/usage',k:'doc',s:'OpenAI API Reference'}
          ]},
        {label:'Алерти',desc:'На зростання вартості за годину, на error rate, на latency p95, на падіння метрики якості з online evals. Алерт має бути actionable: з ним можна щось зробити зараз.',why:'Цикл агента, що зациклився, помічають за алертом на вартість, а не за рахунком через місяць.',
          links:[
            {t:'Alerting overview',u:'https://prometheus.io/docs/alerting/latest/overview/',k:'doc',s:'Prometheus'},
            {t:'Practical Alerting from Time-Series Data',u:'https://sre.google/sre-book/practical-alerting/',k:'course',s:'Google SRE Book'},
            {t:'Alerting on SLOs',u:'https://sre.google/workbook/alerting-on-slos/',k:'course',s:'Google SRE Workbook'}
          ],
          children:[
            {label:'На вартість за годину',desc:'Витрати за останню годину перевищили поріг: ознака циклу або сплеску трафіку.',why:'Найдешевший алерт з усіх: ловить баг, який інакше коштує тисячі.',links:[{t:'Budgets, Rate Limits',u:'https://docs.litellm.ai/docs/proxy/users',k:'doc',s:'LiteLLM Docs'}]},
            {label:'На помилки і latency',desc:'Error rate або p95 вище порогу за вікно часу.',why:'Деградація провайдера видна за хвилини, а не за скаргами.',links:[{t:'Practical Alerting from Time-Series Data',u:'https://sre.google/sre-book/practical-alerting/',k:'course',s:'Google SRE Book'}]},
            {label:'На деградацію якості',desc:'Метрика online evals впала нижче порогу: сигнал, що змінилась модель або дані.',why:'Єдиний алерт, який помічає тихі поломки без помилок у логах.',links:[{t:'Set up LLM-as-a-judge online evaluators',u:'https://docs.smith.langchain.com/observability/how_to_guides/online_evaluations',k:'doc',s:'LangSmith Docs'}]}
          ]},
        {label:'SLO для AI-фічі',desc:'Явна домовленість: 95% відповідей за 8 секунд, 99% прогонів без помилки, частка «добрих» відповідей за online evals не нижче порогу. Error budget показує, скільки ще можна ламати.',why:'Без SLO будь-яка latency «нормальна», а будь-який алерт спірний.',
          links:[
            {t:'Service Level Objectives',u:'https://sre.google/sre-book/service-level-objectives/',k:'course',s:'Google SRE Book'},
            {t:'Implementing SLOs',u:'https://sre.google/workbook/implementing-slos/',k:'course',s:'Google SRE Workbook'},
            {t:'Alerting on SLOs',u:'https://sre.google/workbook/alerting-on-slos/',k:'course',s:'Google SRE Workbook'},
            {t:'What Is LLM Observability and Monitoring?',u:'https://www.honeycomb.io/resources/getting-started/what-is-llm-observability',k:'article',y:2025,s:'Honeycomb'}
          ]},
        {label:'Дашборд фічі',type:'optional',desc:'Одна сторінка: прогони, latency, помилки, вартість, якість за день і тиждень.',why:'Той самий дашборд показується на співбесіді як доказ, що фіча живе в проді.',
          links:[
            {t:'Grafana dashboards',u:'https://grafana.com/docs/grafana/latest/dashboards/',k:'doc',s:'Grafana Docs'},
            {t:'LLM Observability at Datadog: Dashboards',u:'https://www.datadoghq.com/blog/llm-observability-at-datadog-dashboards/',k:'article',y:2026,s:'Datadog Blog'},
            {t:'10 min Walkthrough of Langfuse - Open Source LLM Observability, Evaluation, and Prompt Management',u:'https://www.youtube.com/watch?v=2E8iTvGo9Hs',k:'video',y:2025,s:'YouTube · Langfuse'}
          ]}
      ]},
    {label:'Вартість і FinOps',side:'left',desc:'Скільки коштує один прогін і місяць роботи фічі. Важелі: prompt caching, Batch API, роутинг на дешевшу модель, кеш відповідей, бюджети на ключ і на tenant.',why:'Критерій «готово»: ви називаєте ціну прогону з кількості токенів, не чекаючи рахунку.',
      links:[
        {t:'Pricing',u:'https://www.anthropic.com/pricing',k:'doc',s:'Anthropic'},
        {t:'API Pricing',u:'https://openai.com/api/pricing/',k:'doc',s:'OpenAI'},
        {t:'LLM pricing calculator',u:'https://www.llm-prices.com/',k:'doc',s:'Simon Willison',w:'Порахувати ціну виклику з кількості токенів для різних моделей'},
        {t:'FinOps for AI Overview',u:'https://www.finops.org/wg/finops-for-ai-overview/',k:'article',y:2025,s:'FinOps Foundation'},
        {t:'LLM Inference Benchmarking: How Much Does Your LLM Inference Cost?',u:'https://developer.nvidia.com/blog/llm-inference-benchmarking-how-much-does-your-llm-inference-cost/',k:'article',y:2025,s:'NVIDIA Technical Blog'},
        {t:'Manage costs effectively',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Claude Code Docs',w:'Приклад контролю витрат на агента в команді'}
      ],
      children:[
        {label:'Вхідні й вихідні токени, usage',desc:'API повертає кількість токенів на кожен виклик, окремо для кешованих і нових. Вихідні зазвичай у кілька разів дорожчі за вхідні. З цих чисел і прайсу рахується ціна виклику.',why:'Це єдине джерело правди про вартість. Логується з першого дня.',
          links:[
            {t:'Token counting',u:'https://platform.claude.com/docs/en/build-with-claude/token-counting',k:'doc',s:'Claude Docs'},
            {t:'Usage and Cost API',u:'https://platform.claude.com/docs/en/build-with-claude/usage-cost-api',k:'doc',s:'Claude Docs'},
            {t:'Usage',u:'https://platform.openai.com/docs/api-reference/usage',k:'doc',s:'OpenAI API Reference'},
            {t:'Gemini Developer API Pricing',u:'https://ai.google.dev/pricing',k:'doc',s:'Google AI for Developers'}
          ]},
        {label:'Ціна прогону по кроках',desc:'Сума викликів у прогоні з розбивкою: який крок найдорожчий, скільки зʼїдають результати тулів і історія. Контекст росте сам, якщо його не обрізати, і разом із ним росте ціна кожного наступного кроку.',why:'Оптимізувати можна лише те, що видно. Зазвичай один крок коштує більше за решту разом.',
          links:[
            {t:'Token & Cost Tracking',u:'https://langfuse.com/docs/observability/features/token-and-cost-tracking',k:'doc',s:'Langfuse Docs'},
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering',w:'Компактизація контексту і чому він дорожчає з кожним кроком'},
            {t:'Observe your application',u:'https://www.braintrust.dev/docs/guides/logs',k:'doc',s:'Braintrust Docs'}
          ]},
        {label:'Prompt caching',desc:'Провайдер кешує незмінну частину промпту (системні інструкції, великі документи, опис тулів) і бере за неї значно менше при повторних викликах. В Anthropic явні cache breakpoints, в OpenAI автоматично для префіксів, у Gemini context caching.',why:'Для агента з довгим системним промптом це помітна частка рахунку.',
          links:[
            {t:'Prompt caching',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',k:'doc',s:'Claude Docs'},
            {t:'Prompt caching',u:'https://platform.openai.com/docs/guides/prompt-caching',k:'doc',s:'OpenAI Docs'},
            {t:'Context caching',u:'https://ai.google.dev/gemini-api/docs/caching',k:'doc',s:'Google AI for Developers'}
          ],
          children:[
            {label:'Anthropic: cache_control',desc:'Явні точки кешування в промпті, TTL 5 хвилин або 1 година, окрема ціна запису і читання кешу.',why:'Стабільний префікс спереду, змінне в кінці: інакше кеш не спрацює.',links:[{t:'Prompt caching',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',k:'doc',s:'Claude Docs'}]},
            {label:'OpenAI: автоматичний кеш префіксів',desc:'Кеш вмикається сам для промптів від певної довжини; знижка на кешовані вхідні токени.',why:'Той самий принцип: незмінне спереду.',links:[{t:'Prompt caching',u:'https://platform.openai.com/docs/guides/prompt-caching',k:'doc',s:'OpenAI Docs'}]},
            {label:'Gemini: context caching',desc:'Явно створений кеш великого контексту з TTL, на який посилаються наступні запити.',why:'Для великих документів і відео, які питають багато разів.',links:[{t:'Context caching',u:'https://ai.google.dev/gemini-api/docs/caching',k:'doc',s:'Google AI for Developers'}]}
          ]},
        {label:'Batch API',desc:'Несрочні задачі (класифікація архіву, evals, генерація описів) надсилаються пакетом і виконуються протягом годин за половину ціни.',why:'Половина витрат за те, що результат прийде не за секунди, а за години. Для фонових задач це безпрограшно.',
          links:[
            {t:'Batch processing',u:'https://platform.claude.com/docs/en/build-with-claude/batch-processing',k:'doc',s:'Claude Docs'},
            {t:'Batch API',u:'https://platform.openai.com/docs/guides/batch',k:'doc',s:'OpenAI Docs'},
            {t:'Batch Mode',u:'https://ai.google.dev/gemini-api/docs/batch-mode',k:'doc',s:'Google AI for Developers'},
            {t:'Flex processing',u:'https://platform.openai.com/docs/guides/flex-processing',k:'doc',s:'OpenAI Docs',w:'Дешевший tier для несрочних синхронних запитів'}
          ]},
        {label:'Model routing і каскади',desc:'Класифікація, роутинг, витягування полів часто роблять менші моделі з тією ж якістю. Роутер обирає модель під запит; каскад спершу пробує дешеву модель і ескалює до сильної, якщо відповідь непевна.',why:'Вибір моделі під задачу є найбільшим важелем вартості після скорочення контексту.',
          links:[
            {t:'RouteLLM: An Open-Source Framework for Cost-Effective LLM Routing',u:'https://lmsys.org/blog/2024-07-01-routellm/',k:'article',y:2024,s:'LMSYS Org'},
            {t:'lm-sys/RouteLLM',u:'https://github.com/lm-sys/RouteLLM',k:'github',s:'GitHub'},
            {t:'FrugalGPT: How to Use Large Language Models While Reducing Cost and Improving Performance',u:'https://arxiv.org/abs/2305.05176',k:'article',y:2023,s:'arXiv',w:'Каскади моделей як метод'},
            {t:'Router - Load Balancing',u:'https://docs.litellm.ai/docs/routing',k:'doc',s:'LiteLLM Docs'},
            {t:'Auto Router',u:'https://openrouter.ai/docs/features/model-routing',k:'doc',s:'OpenRouter Docs'}
          ]},
        {label:'Кеш відповідей: exact і semantic',desc:'Однакові запити отримують збережену відповідь без виклику моделі. Семантичний кеш (GPTCache, Redis LangCache, кеш у gateway) віддає відповідь і на близькі за змістом запити.',why:'Частина трафіку повторюється. Кеш економить і гроші, і секунди.',
          links:[
            {t:'zilliztech/GPTCache',u:'https://github.com/zilliztech/GPTCache',k:'github',s:'GitHub'},
            {t:'Redis LangCache',u:'https://redis.io/docs/latest/develop/ai/langcache/',k:'doc',s:'Redis Docs'},
            {t:'Caching',u:'https://developers.cloudflare.com/ai-gateway/configuration/caching/',k:'doc',s:'Cloudflare Docs'},
            {t:'Cache (Simple & Semantic)',u:'https://portkey.ai/docs/product/ai-gateway/cache-simple-and-semantic',k:'doc',s:'Portkey Docs'},
            {t:'Caching',u:'https://docs.litellm.ai/docs/proxy/caching',k:'doc',s:'LiteLLM Docs'}
          ]},
        {label:'Бюджети, ліміти, rate limit на tenant',desc:'Ліміт витрат на день на ключ, на користувача, на команду, на прогін. Rate limit на кожного клієнта (tenant), щоб один не зʼїв квоту всіх. Перевищення зупиняє, а не нарощує рахунок.',why:'Помилка в циклі без ліміту коштує стільки, скільки встигла до того, як хтось помітив.',
          links:[
            {t:'Budgets, Rate Limits',u:'https://docs.litellm.ai/docs/proxy/users',k:'doc',s:'LiteLLM Docs'},
            {t:'Budget Limits',u:'https://portkey.ai/docs/product/ai-gateway/virtual-keys/budget-limits',k:'doc',s:'Portkey Docs'},
            {t:'Custom Rate Limits',u:'https://docs.helicone.ai/features/advanced-usage/custom-rate-limits',k:'doc',s:'Helicone Docs'},
            {t:'Rate limiting',u:'https://developers.cloudflare.com/ai-gateway/features/rate-limiting/',k:'doc',s:'Cloudflare Docs'},
            {t:'Rate limits',u:'https://platform.claude.com/docs/en/api/rate-limits',k:'doc',s:'Claude Docs',w:'Ліміти самого провайдера, у які впираєтесь ви'}
          ]}
      ]},
    {label:'Latency',side:'right',desc:'Скільки чекає користувач. Виклики моделі тривають секунди, і ланцюжок з кількох кроків легко розтягується на хвилину.',why:'Покращення latency зазвичай коштує якості або грошей, і це треба усвідомлювати.',
      links:[
        {t:'Latency optimization',u:'https://platform.openai.com/docs/guides/latency-optimization',k:'doc',s:'OpenAI Docs',w:'Сім принципів: менше токенів, швидша модель, паралелізм, стрімінг'},
        {t:'LLM Inference Benchmarking: Fundamental Concepts',u:'https://developer.nvidia.com/blog/llm-benchmarking-fundamental-concepts',k:'article',y:2025,s:'NVIDIA Technical Blog'},
        {t:'LLM Inference Performance Engineering: Best Practices',u:'https://www.databricks.com/blog/llm-inference-performance-engineering-best-practices',k:'article',y:2023,s:'Databricks'},
        {t:'Streaming messages',u:'https://platform.claude.com/docs/en/build-with-claude/streaming',k:'doc',s:'Claude Docs'}
      ],
      children:[
        {label:'Стрімінг відповіді: SSE, TTFT',desc:'Токени показуються в міру генерації замість очікування повної відповіді. Транспорт зазвичай Server-Sent Events; ключова метрика стає time to first token.',why:'Сприйнята швидкість змінюється радикально, хоча повний час той самий.',
          links:[
            {t:'Streaming messages',u:'https://platform.claude.com/docs/en/build-with-claude/streaming',k:'doc',s:'Claude Docs'},
            {t:'Streaming API responses',u:'https://platform.openai.com/docs/guides/streaming-responses',k:'doc',s:'OpenAI Docs'},
            {t:'Using server-sent events',u:'https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events',k:'doc',s:'MDN'}
          ]},
        {label:'Паралельні виклики',desc:'Незалежні кроки і виклики тулів виконуються одночасно, а не послідовно: asyncio, Promise.all, паралельні tool calls моделі.',why:'Три послідовні виклики по дві секунди дорівнює шість секунд. Паралельно дорівнює дві.',
          links:[
            {t:'Latency optimization',u:'https://platform.openai.com/docs/guides/latency-optimization',k:'doc',s:'OpenAI Docs'},
            {t:'How we built our multi-agent research system',u:'https://www.anthropic.com/engineering/multi-agent-research-system',k:'article',y:2025,s:'Anthropic Engineering',w:'Паралельні субагенти і паралельні tool calls скоротили час дослідження до 90%'},
            {t:'Як влаштовані Dynamic Workflows зсередини? Сотні AI-агентів працюють паралельно',u:'https://www.youtube.com/watch?v=cbQ0QCK7ujc',k:'video',y:2026,s:'BeerCode'}
          ]},
        {label:'Швидша модель де вистачає',desc:'Менша модель відповідає швидше. Для простих кроків це виграш без втрати якості.',why:'Той самий важіль, що і для вартості, і зазвичай вони рухаються разом.',
          links:[
            {t:'Models overview',u:'https://platform.claude.com/docs/en/about-claude/models/overview',k:'doc',s:'Claude Docs'},
            {t:'Gemini models',u:'https://ai.google.dev/gemini-api/docs/models',k:'doc',s:'Google AI for Developers'},
            {t:'RouteLLM: An Open-Source Framework for Cost-Effective LLM Routing',u:'https://lmsys.org/blog/2024-07-01-routellm/',k:'article',y:2024,s:'LMSYS Org'}
          ]},
        {label:'Менший контекст і коротший вивід',desc:'Менше токенів на вході і на виході, менше часу. Структурований короткий вивід замість розлогого тексту; коротша історія, компактні результати тулів, лише потрібні документи в RAG.',why:'Час генерації пропорційний довжині відповіді. Зайвий абзац коштує секунд.',
          links:[
            {t:'Latency optimization',u:'https://platform.openai.com/docs/guides/latency-optimization',k:'doc',s:'OpenAI Docs'},
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'Predicted Outputs',u:'https://platform.openai.com/docs/guides/predicted-outputs',k:'doc',s:'OpenAI Docs',w:'Коли більшість виводу відома наперед (правка коду), генерація пришвидшується'}
          ]},
        {label:'Таймаути і fallback',desc:'Ліміт очікування на виклик, запасний варіант при його перевищенні: інша модель, кешована відповідь, чесне повідомлення.',why:'Затримка API не має валити сервіс і тримати користувача без відповіді.',
          links:[
            {t:'Timeouts, retries, and backoff with jitter',u:'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/',k:'article',s:'Amazon Builders\' Library'},
            {t:'Fallbacks (Provider Failover)',u:'https://docs.litellm.ai/docs/proxy/reliability',k:'doc',s:'LiteLLM Docs'},
            {t:'Fallbacks',u:'https://portkey.ai/docs/product/ai-gateway/fallbacks',k:'doc',s:'Portkey Docs'}
          ]},
        {label:'Service tiers: priority і flex',type:'optional',desc:'Провайдери продають різні рівні обслуговування: пріоритетна черга з передбачуваною latency за вищу ціну або дешевший повільний tier для несрочного.',why:'Для користувацького чату платять за priority, для фонових задач беруть flex або batch.',
          links:[
            {t:'Service tiers',u:'https://platform.claude.com/docs/en/api/service-tiers',k:'doc',s:'Claude Docs'},
            {t:'Priority processing',u:'https://platform.openai.com/docs/guides/priority-processing',k:'doc',s:'OpenAI Docs'},
            {t:'Flex processing',u:'https://platform.openai.com/docs/guides/flex-processing',k:'doc',s:'OpenAI Docs'}
          ]},
        {label:'Фонове виконання довгих задач',type:'optional',desc:'Якщо прогін усе одно триває хвилини, користувач отримує підтвердження одразу, а результат пізніше: через чергу, вебхук або сповіщення.',why:'Інколи правильна відповідь на latency не прискорити, а змінити взаємодію.',
          links:[
            {t:'Queue-Based Load Leveling pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling',k:'doc',s:'Microsoft Learn'},
            {t:'Batch processing',u:'https://platform.claude.com/docs/en/build-with-claude/batch-processing',k:'doc',s:'Claude Docs'},
            {t:'Durable AI',u:'https://docs.temporal.io/ai',k:'doc',s:'Temporal Docs'}
          ]}
      ]},
    {label:'Надійність: ретраї, fallback, gateway',side:'left',desc:'Провайдер моделі є зовнішньою залежністю, яка падає, гальмує і повертає 429. Ретраї з backoff, fallback на іншу модель чи провайдера, circuit breaker, черги і LLM gateway (LiteLLM, Portkey, Cloudflare AI Gateway), що робить це за вас.',why:'Збій провайдера на годину не має бути вашим збоєм на годину.',
      links:[
        {t:'Timeouts, retries, and backoff with jitter',u:'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/',k:'article',s:'Amazon Builders\' Library'},
        {t:'Cloud design patterns',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/',k:'doc',s:'Microsoft Learn'},
        {t:'Getting Started',u:'https://docs.litellm.ai/docs/',k:'doc',s:'LiteLLM Docs'},
        {t:'Productionizing LLM Gateways: Architecture, Tradeoffs and Hard Lessons - Kanish Manuja, Twilio',u:'https://www.youtube.com/watch?v=zrZ1amZBSPw',k:'video',y:2026,s:'YouTube · AI Engineer'},
        {t:'Claude API errors',u:'https://platform.claude.com/docs/en/api/errors',k:'doc',s:'Claude Docs'},
        {t:'Reliability Pillar - AWS Well-Architected Framework',u:'https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/welcome.html',k:'doc',s:'AWS Docs'}
      ],
      children:[
        {label:'Ретраї з backoff і jitter, 429 і 529',desc:'Повтор невдалого виклику з експоненційною паузою і випадковим зсувом, з лімітом спроб. Rate limit (429) і overloaded (529) ретраяться, помилки валідації (400) ні. SDK провайдерів роблять це з коробки.',why:'Ретраї без backoff під час збою провайдера перетворюють його проблему на DDoS від вас.',
          links:[
            {t:'Exponential Backoff And Jitter',u:'https://aws.amazon.com/blogs/architecture/exponential-backoff-and-jitter/',k:'article',y:2015,s:'AWS Architecture Blog'},
            {t:'Retry pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/retry',k:'doc',s:'Microsoft Learn'},
            {t:'anthropics/anthropic-sdk-python',u:'https://github.com/anthropics/anthropic-sdk-python',k:'github',s:'GitHub',w:'Розділи Retries і Timeouts у README'},
            {t:'Tenacity',u:'https://tenacity.readthedocs.io/en/latest/',k:'doc',s:'Tenacity Docs'},
            {t:'App-vNext/Polly',u:'https://github.com/App-vNext/Polly',k:'github',s:'GitHub'}
          ]},
        {label:'Fallback між моделями і провайдерами',desc:'Якщо основна модель недоступна або перевищила таймаут, запит іде до запасної: інша модель того ж провайдера, інший провайдер, той самий Claude через Bedrock чи Vertex.',why:'Два провайдери рідко падають одночасно. Один завжди колись падає.',
          links:[
            {t:'Fallbacks (Provider Failover)',u:'https://docs.litellm.ai/docs/proxy/reliability',k:'doc',s:'LiteLLM Docs'},
            {t:'Fallbacks',u:'https://portkey.ai/docs/product/ai-gateway/fallbacks',k:'doc',s:'Portkey Docs'},
            {t:'Provider Routing',u:'https://openrouter.ai/docs/features/provider-routing',k:'doc',s:'OpenRouter Docs'},
            {t:'Load Balancing',u:'https://portkey.ai/docs/product/ai-gateway/load-balancing',k:'doc',s:'Portkey Docs'}
          ]},
        {label:'LLM gateway: LiteLLM, Portkey, Cloudflare',desc:'Проксі між застосунком і провайдерами з єдиним API: роутинг, fallback, ретраї, кеш, бюджети, віртуальні ключі, логи. LiteLLM open source, Portkey, Cloudflare AI Gateway, Vercel AI Gateway, Kong AI Gateway.',why:'Замість того, щоб кожен сервіс сам реалізовував ретраї і бюджети, це робить один шар.',
          links:[
            {t:'Getting Started',u:'https://docs.litellm.ai/docs/',k:'doc',s:'LiteLLM Docs'},
            {t:'BerriAI/litellm',u:'https://github.com/BerriAI/litellm',k:'github',s:'GitHub'},
            {t:'What is Portkey?',u:'https://portkey.ai/docs',k:'doc',s:'Portkey Docs'},
            {t:'Cloudflare AI Gateway',u:'https://developers.cloudflare.com/ai-gateway/',k:'doc',s:'Cloudflare Docs'},
            {t:'Vercel AI Gateway',u:'https://vercel.com/docs/ai-gateway',k:'doc',s:'Vercel Docs'},
            {t:'Productionizing LLM Gateways: Architecture, Tradeoffs and Hard Lessons - Kanish Manuja, Twilio',u:'https://www.youtube.com/watch?v=zrZ1amZBSPw',k:'video',y:2026,s:'YouTube · AI Engineer'}
          ],
          children:[
            {label:'LiteLLM proxy',desc:'Open source проксі з OpenAI-сумісним API до сотні провайдерів, роутингом, бюджетами і логами.',why:'Найпоширеніший варіант для self-hosted gateway.',links:[{t:'BerriAI/litellm',u:'https://github.com/BerriAI/litellm',k:'github',s:'GitHub'},{t:'Router - Load Balancing',u:'https://docs.litellm.ai/docs/routing',k:'doc',s:'LiteLLM Docs'}]},
            {label:'Cloudflare AI Gateway',desc:'Керований gateway: кеш, rate limiting, логи і аналітика без власного сервера.',why:'Нуль інфраструктури, достатньо змінити base URL.',links:[{t:'Cloudflare AI Gateway',u:'https://developers.cloudflare.com/ai-gateway/',k:'doc',s:'Cloudflare Docs'},{t:'Logging',u:'https://developers.cloudflare.com/ai-gateway/observability/logging/',k:'doc',s:'Cloudflare Docs'}]},
            {label:'Kong AI Gateway',desc:'AI-плагіни для API gateway Kong, якщо він уже стоїть перед вашими сервісами.',why:'LLM-трафік керується тим самим шаром, що й решта API.',links:[{t:'AI Proxy',u:'https://docs.konghq.com/hub/kong-inc/ai-proxy/',k:'doc',s:'Kong Docs'}]}
          ]},
        {label:'Circuit breaker і bulkhead',desc:'Після серії помилок провайдера виклики до нього тимчасово припиняються і одразу йдуть у fallback; пул ресурсів для LLM-викликів ізольований від решти сервісу.',why:'Сервіс, що чекає таймаути на кожному запиті до мертвого провайдера, вмирає разом із ним.',
          links:[
            {t:'CircuitBreaker',u:'https://martinfowler.com/bliki/CircuitBreaker.html',k:'article',s:'Martin Fowler'},
            {t:'Circuit Breaker pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/circuit-breaker',k:'doc',s:'Microsoft Learn'},
            {t:'Bulkhead pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/bulkhead',k:'doc',s:'Microsoft Learn'},
            {t:'resilience4j',u:'https://resilience4j.readme.io/',k:'doc',s:'Resilience4j Docs'}
          ]},
        {label:'Черги і backpressure',desc:'Запити до моделі йдуть через чергу з обмеженою кількістю воркерів, щоб сплеск трафіку не впирався в rate limit провайдера; зайве чекає або відхиляється.',why:'Rate limit провайдера є жорсткою межею. Черга перетворює її зі збою на затримку.',
          links:[
            {t:'Queue-Based Load Leveling pattern',u:'https://learn.microsoft.com/en-us/azure/architecture/patterns/queue-based-load-leveling',k:'doc',s:'Microsoft Learn'},
            {t:'Rate limits',u:'https://platform.openai.com/docs/guides/rate-limits',k:'doc',s:'OpenAI Docs'},
            {t:'RabbitMQ Tutorials',u:'https://www.rabbitmq.com/tutorials',k:'doc',s:'RabbitMQ'},
            {t:'BullMQ',u:'https://docs.bullmq.io/',k:'doc',s:'BullMQ Docs'},
            {t:'Celery',u:'https://docs.celeryq.dev/en/stable/',k:'doc',s:'Celery Docs'}
          ]},
        {label:'Статуси провайдерів і деградація',desc:'Статус-сторінки Anthropic, OpenAI, Google підписані на алерти; у сервісі є режим деградації: коротша відповідь, дешевша модель або чесне «спробуйте пізніше».',why:'Інцидент провайдера видно за хвилину на статус-сторінці, а не за годину з трейсів.',
          links:[
            {t:'Anthropic Status',u:'https://status.anthropic.com/',k:'doc',s:'Anthropic'},
            {t:'OpenAI Status',u:'https://status.openai.com/',k:'doc',s:'OpenAI'},
            {t:'API, ChatGPT & Sora Facing Issues',u:'https://status.openai.com/incidents/ctrsv3lwd797',k:'article',y:2024,s:'OpenAI Status',w:'Приклад постмортему великого збою провайдера'}
          ]}
      ]},
    {label:'Якість у проді',side:'right',desc:'Evals перед релізом не гарантують якості на живому трафіку. У проді додаються online evals, явний і неявний фідбек користувачів, порівняння версій на трафіку і реакція на зміну моделей провайдером.',why:'Якість міряється і після деплою, інакше про деградацію повідомляють користувачі.',
      links:[
        {t:'Your AI Product Needs Evals',u:'https://hamel.dev/blog/posts/evals/',k:'article',y:2024,s:'Hamel Husain'},
        {t:'Evaluation of LLM Applications',u:'https://langfuse.com/docs/evaluation/overview',k:'doc',s:'Langfuse Docs'},
        {t:'LangSmith Evaluation',u:'https://docs.smith.langchain.com/evaluation/concepts',k:'doc',s:'LangSmith Docs'},
        {t:'Engineering Better Evals: Scalable LLM Evaluation Pipelines That Work - Dat Ngo, Aman Khan, Arize',u:'https://www.youtube.com/watch?v=spvXj9tnWAQ',k:'video',y:2025,s:'YouTube · AI Engineer'},
        {t:'Evaluating the Effectiveness of LLM-Evaluators (aka LLM-as-Judge)',u:'https://eugeneyan.com/writing/llm-evaluators/',k:'article',y:2024,s:'Eugene Yan'},
        {t:'What We Learned from a Year of Building with LLMs',u:'https://applied-llms.org/',k:'article',y:2024,s:'Applied LLMs'}
      ],
      children:[
        {label:'Online evals на вибірці трафіку',desc:'Частина реальних прогонів оцінюється автоматично: схема, наявність фактів, модель-суддя (LLM-as-a-judge). Результат стає метрикою з алертом.',why:'Golden dataset не покриває все, що пишуть реальні користувачі.',
          links:[
            {t:'Set up LLM-as-a-judge online evaluators',u:'https://docs.smith.langchain.com/observability/how_to_guides/online_evaluations',k:'doc',s:'LangSmith Docs'},
            {t:'LLM-as-a-Judge',u:'https://langfuse.com/docs/evaluation/evaluation-methods/llm-as-a-judge',k:'doc',s:'Langfuse Docs'},
            {t:'Evaluation',u:'https://arize.com/docs/phoenix/evaluation/llm-evals',k:'doc',s:'Arize Docs'},
            {t:'Creating a LLM-as-a-Judge That Drives Business Results',u:'https://hamel.dev/blog/posts/llm-judge/',k:'article',y:2024,s:'Hamel Husain'},
            {t:'Who Validates the Validators? Aligning LLM-Assisted Evaluation of LLM Outputs with Human Preferences',u:'https://arxiv.org/abs/2404.12272',k:'article',y:2024,s:'arXiv'}
          ]},
        {label:'Фідбек користувачів: явний і неявний',desc:'Оцінка відповіді, кнопка «неправильно», коментар. Неявні сигнали: користувач переписав відповідь, повторив запит, скопіював результат, закрив вікно. Усе збирається разом із трейсом прогону.',why:'Негативний фідбек з трейсом є готовим кейсом для golden dataset.',
          links:[
            {t:'User Feedback',u:'https://langfuse.com/docs/scores/user-feedback',k:'doc',s:'Langfuse Docs'},
            {t:'Log user feedback using the SDK',u:'https://docs.smith.langchain.com/evaluation/how_to_guides/attach_user_feedback',k:'doc',s:'LangSmith Docs'},
            {t:'Set up human review',u:'https://www.braintrust.dev/docs/guides/human-review',k:'doc',s:'Braintrust Docs'},
            {t:'Patterns for Building LLM-based Systems & Products',u:'https://eugeneyan.com/writing/llm-patterns/',k:'article',y:2023,s:'Eugene Yan',w:'Розділ Collect user feedback: явні й неявні сигнали'}
          ],
          children:[
            {label:'Thumbs up / down з трейсом',desc:'Оцінка прив\'язується до trace id і зберігається як score поруч із прогоном.',why:'Фідбек без трейсу не пояснює, що саме пішло не так.',links:[{t:'User Feedback',u:'https://langfuse.com/docs/scores/user-feedback',k:'doc',s:'Langfuse Docs'}]},
            {label:'Неявні сигнали',desc:'Правка відповіді, повторний запит, час до наступної дії, прийняття пропозиції коду.',why:'Явну оцінку ставить один зі ста. Неявні сигнали є в кожного.',links:[{t:'Patterns for Building LLM-based Systems & Products',u:'https://eugeneyan.com/writing/llm-patterns/',k:'article',y:2023,s:'Eugene Yan'}]},
            {label:'Рев\'ю людиною у черзі',desc:'Частина прогонів потрапляє в чергу на ручну оцінку експертом за рубрикою.',why:'Калібрує модель-суддю і ловить те, чого автоматика не бачить.',links:[{t:'Set up human review',u:'https://www.braintrust.dev/docs/guides/human-review',k:'doc',s:'Braintrust Docs'}]}
          ]},
        {label:'A/B і canary за метриками якості',desc:'Нова версія промпту або моделі отримує частку трафіку, її online evals, фідбек, latency і ціна порівнюються зі старою, потім частка росте або версія відкочується.',why:'Нова модель може бути краща в evals і гірша на вашому трафіку. Canary показує це до того, як її побачать усі.',
          links:[
            {t:'Canary Release',u:'https://martinfowler.com/bliki/CanaryRelease.html',k:'article',s:'Martin Fowler'},
            {t:'AI Configs',u:'https://launchdarkly.com/docs/home/ai-configs',k:'doc',y:2025,s:'LaunchDarkly Docs'},
            {t:'Experiments',u:'https://www.braintrust.dev/docs/guides/evals/write',k:'doc',s:'Braintrust Docs'}
          ]},
        {label:'Поповнення golden dataset з проду',desc:'Реальні кейси з поганих прогонів і фідбеку додаються в набір evals. Набір росте разом із продуктом.',why:'Так evals перестають бути знімком першого тижня і починають відображати реальний трафік.',
          links:[
            {t:'Your AI Product Needs Evals',u:'https://hamel.dev/blog/posts/evals/',k:'article',y:2024,s:'Hamel Husain'},
            {t:'Evaluation of LLM Applications',u:'https://langfuse.com/docs/evaluation/overview',k:'doc',s:'Langfuse Docs'},
            {t:'Carrying Out Error Analysis (C3W2L01)',u:'https://www.youtube.com/watch?v=JoAxZsdw_3w',k:'video',s:'YouTube · DeepLearningAI',w:'Аналіз помилок як відправна точка для нових кейсів'}
          ]},
        {label:'Drift і deprecation моделей',desc:'Провайдери оновлюють і виводять з експлуатації моделі за графіком; поведінка alias «latest» змінюється без вашої участі. Pinned версія, календар deprecations і повторний прогін evals на новій моделі до переходу.',why:'Фіча, яка працювала рік, ламається в день, коли стару модель вимкнули.',
          links:[
            {t:'Model deprecations',u:'https://platform.claude.com/docs/en/about-claude/model-deprecations',k:'doc',s:'Claude Docs'},
            {t:'Deprecations',u:'https://platform.openai.com/docs/deprecations',k:'doc',s:'OpenAI Docs'},
            {t:'Gemini models',u:'https://ai.google.dev/gemini-api/docs/models',k:'doc',s:'Google AI for Developers'},
            {t:'How is ChatGPT\'s behavior changing over time?',u:'https://arxiv.org/abs/2307.09009',k:'article',y:2023,s:'arXiv',w:'Класичне дослідження про те, як та сама модель змінюється між версіями'}
          ]}
      ]},
    {label:'AI-кроки в CI/CD',side:'left',desc:'Пайплайн, у якому перевірки агентів і AI-кроки стоять поруч із тестами: крок ревʼю (Claude Code GitHub Action, Codex, Copilot code review), прогін evals, без якого зміна не проходить далі, і вимірювання ефекту AI в команді.',why:'Це єдине справді нове в деплої AI-фічі: решта є звичайним CI/CD.',
      links:[
        {t:'GitHub Actions documentation',u:'https://docs.github.com/en/actions',k:'doc',s:'GitHub Docs'},
        {t:'Claude Code GitHub Actions',u:'https://code.claude.com/docs/en/github-actions',k:'doc',s:'Claude Code Docs'},
        {t:'anthropics/claude-code-action',u:'https://github.com/anthropics/claude-code-action',k:'github',s:'GitHub'},
        {t:'Один із трендових напрямків зараз: інтеграція AI у CI/CD',u:'https://t.me/beerphp/129',k:'post',y:2025,s:'beerphp'},
        {t:'GitHub Action',u:'https://www.promptfoo.dev/docs/integrations/github-action/',k:'doc',s:'promptfoo Docs'},
        {t:'Security hardening for GitHub Actions',u:'https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions',k:'doc',s:'GitHub Docs'}
      ],
      children:[
        {label:'Крок ревʼю агентом',desc:'Агент читає диф пул-реквесту за чеклістом команди і пише зауваження. Блокуючий або консультативний, за домовленістю. Готові варіанти: Claude Code GitHub Action, Codex code review, GitHub Copilot code review, CodeRabbit, Cursor Bugbot, Gemini Code Assist.',why:'Друга пара очей на кожному PR, зокрема на коді, який написав інший агент.',
          links:[
            {t:'Claude Code GitHub Actions',u:'https://code.claude.com/docs/en/github-actions',k:'doc',s:'Claude Code Docs'},
            {t:'Code review',u:'https://developers.openai.com/codex/cloud/code-review',k:'doc',s:'OpenAI Developers'},
            {t:'Using GitHub Copilot code review',u:'https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review',k:'doc',s:'GitHub Docs'},
            {t:'CodeRabbit Docs',u:'https://docs.coderabbit.ai/',k:'doc',s:'CodeRabbit Docs'},
            {t:'Bugbot',u:'https://cursor.com/docs/bugbot',k:'doc',s:'Cursor Docs'},
            {t:'Review GitHub code with Gemini Code Assist',u:'https://developers.google.com/gemini-code-assist/docs/review-github-code',k:'doc',s:'Google for Developers'}
          ],
          children:[
            {label:'Claude Code GitHub Action',desc:'Агент у workflow реагує на згадку, лейбл або подію PR, читає диф і коментує або править код.',why:'Найгнучкіший варіант: власний промпт і чекліст команди.',links:[{t:'anthropics/claude-code-action',u:'https://github.com/anthropics/claude-code-action',k:'github',s:'GitHub'},{t:'Claude Code GitHub Actions',u:'https://code.claude.com/docs/en/github-actions',k:'doc',s:'Claude Code Docs'}]},
            {label:'Codex і Copilot code review',desc:'Вбудовані рев\'юери від OpenAI і GitHub, увімкнення на рівні репозиторію.',why:'Нуль налаштувань, але і менше контролю над чеклістом.',links:[{t:'Code review',u:'https://developers.openai.com/codex/cloud/code-review',k:'doc',s:'OpenAI Developers'},{t:'Using GitHub Copilot code review',u:'https://docs.github.com/en/copilot/using-github-copilot/code-review/using-copilot-code-review',k:'doc',s:'GitHub Docs'}]},
            {label:'CodeRabbit, Bugbot, Gemini',desc:'Сторонні боти рев\'ю з власними правилами, саммарі PR і пошуком багів.',why:'Варіанти для команд не на одному провайдері.',links:[{t:'CodeRabbit Docs',u:'https://docs.coderabbit.ai/',k:'doc',s:'CodeRabbit Docs'},{t:'Bugbot',u:'https://cursor.com/docs/bugbot',k:'doc',s:'Cursor Docs'}]}
          ]},
        {label:'Прогін evals на зміну промпту',desc:'Golden dataset проганяється в CI після кожної зміни промпту або моделі: promptfoo, DeepEval, Braintrust, OpenAI Evals. Падіння метрики нижче порогу блокує мердж.',why:'Критерій «готово» з кроку evals, тепер як частина пайплайна.',
          links:[
            {t:'GitHub Action',u:'https://www.promptfoo.dev/docs/integrations/github-action/',k:'doc',s:'promptfoo Docs'},
            {t:'Unit Testing in CI/CD',u:'https://deepeval.com/docs/evaluation-unit-testing-in-ci-cd',k:'doc',s:'DeepEval Docs'},
            {t:'Experiments',u:'https://www.braintrust.dev/docs/guides/evals/write',k:'doc',s:'Braintrust Docs'},
            {t:'Evaluating model performance',u:'https://platform.openai.com/docs/guides/evals',k:'doc',s:'OpenAI Docs'},
            {t:'Inspect',u:'https://inspect.aisi.org.uk/',k:'doc',s:'UK AI Security Institute'}
          ]},
        {label:'Секрети для AI-кроків у CI',desc:'Ключ моделі лежить у сховищі CI, доступний лише з довірених гілок, з лімітом витрат. pull_request_target з форків є класичною дірою.',why:'Пул-реквест з форку з доступом до ключа моделі є витоком з рахунком.',
          links:[
            {t:'Using secrets in GitHub Actions',u:'https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions',k:'doc',s:'GitHub Docs'},
            {t:'Security hardening for GitHub Actions',u:'https://docs.github.com/en/actions/security-for-github-actions/security-guides/security-hardening-for-github-actions',k:'doc',s:'GitHub Docs'},
            {t:'Keeping your GitHub Actions and workflows secure Part 1: Preventing pwn requests',u:'https://securitylab.github.com/resources/github-actions-preventing-pwn-requests/',k:'article',y:2021,s:'GitHub Security Lab'}
          ]},
        {label:'Звіти як артефакти',type:'optional',desc:'Результат evals і ревʼю зберігається як артефакт прогону, порівнюється з попереднім.',why:'Видно не лише «впало», а й динаміку: що саме погіршилось з минулого разу.',
          links:[
            {t:'Storing and sharing data from a workflow',u:'https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/storing-and-sharing-data-from-a-workflow',k:'doc',s:'GitHub Docs'},
            {t:'Configuration guide',u:'https://www.promptfoo.dev/docs/configuration/guide/',k:'doc',s:'promptfoo Docs'}
          ]},
        {label:'Вартість і час пайплайна',desc:'AI-кроки коштують грошей і хвилин. Запускаються лише на релевантні зміни (paths filters), з кешем і лімітами.',why:'Evals на кожен коміт у документацію є марнуванням бюджету.',
          links:[
            {t:'Workflow syntax for GitHub Actions',u:'https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions',k:'doc',s:'GitHub Docs',w:'Фільтри paths і paths-ignore'},
            {t:'Manage costs effectively',u:'https://code.claude.com/docs/en/costs',k:'doc',s:'Claude Code Docs'},
            {t:'Batch processing',u:'https://platform.claude.com/docs/en/build-with-claude/batch-processing',k:'doc',s:'Claude Docs',w:'Великі прогони evals дешевше ганяти батчем'}
          ]},
        {label:'Міряти ефект AI у команді',desc:'Ліцензії на агентів є у всіх, PR більшають, рев\'ю не встигає, а ефект ніхто не міряє. Метрики DORA, cycle time PR, частка відкочених змін, час рев\'ю до і після.',why:'Без вимірювання «AI пришвидшив розробку» лишається враженням, а не фактом.',
          links:[
            {t:'Бачу одну й ту саму картину в різних командах',u:'https://t.me/beerphp/226',k:'post',y:2026,s:'beerphp'},
            {t:'AI в розробці дає не ×10, добре, якщо +10-40%. Чому так і як дістати більше? Розмова двох інженерів',u:'https://www.youtube.com/watch?v=xxn6gOey9G0',k:'video',y:2026,s:'BeerCode'},
            {t:'DORA',u:'https://dora.dev/',k:'doc',s:'DORA'},
            {t:'2025 DORA State of AI-assisted Software Development Report',u:'https://dora.dev/research/2025/dora-report/',k:'article',y:2025,s:'DORA'},
            {t:'Measuring the Impact of Early-2025 AI on Experienced Open-Source Developer Productivity',u:'https://metr.org/blog/2025-07-10-early-2025-ai-experienced-os-dev-study/',k:'article',y:2025,s:'METR'},
            {t:'Де ті х10 до швидкості розробки, котрі так хочуть менеджери?',u:'https://t.me/beerphp/214',k:'post',y:2026,s:'beerphp'}
          ]}
      ]},
    {label:'Робота без щоденного нагляду',side:'right',desc:'Система, яка працює в проді або CI сама: за розкладом або з черги, з ретраями, з обробкою невдач і зрозумілою процедурою, коли щось пішло не так. Персональний асистент на VPS є мінімальним прикладом.',why:'Ознака зрілості: хоча б один AI-воркфлоу, що живе без вас.',
      links:[
        {t:'AI-асистент 24/7: Claude Code + VPS + Telegram',u:'https://www.youtube.com/watch?v=Nioa8ZBzDqE',k:'video',y:2026,s:'BeerCode'},
        {t:'Як підняти свого персонального асистента claude + telegram',u:'https://t.me/beerphp/151',k:'post',y:2026,s:'beerphp'},
        {t:'Run Claude Code programmatically',u:'https://code.claude.com/docs/en/headless',k:'doc',s:'Claude Code Docs'},
        {t:'Agent SDK overview',u:'https://platform.claude.com/docs/en/agent-sdk/overview',k:'doc',s:'Claude Docs'},
        {t:'Timeouts, retries, and backoff with jitter',u:'https://aws.amazon.com/builders-library/timeouts-retries-and-backoff-with-jitter/',k:'article',s:'Amazon Builders\' Library'},
        {t:'Durable AI',u:'https://docs.temporal.io/ai',k:'doc',s:'Temporal Docs'}
      ],
      children:[
        {label:'Запуск за розкладом або з черги',desc:'cron, systemd timer, планувальник або черга повідомлень як джерело задач. Воркер бере задачу, виконує, пише результат. Агент запускається headless: claude -p або Agent SDK.',why:'Воркфлоу без ручного запуску є мінімальною вимогою до «працює само».',
          links:[
            {t:'crontab(5)',u:'https://man7.org/linux/man-pages/man5/crontab.5.html',k:'doc',s:'man7.org'},
            {t:'systemd.timer',u:'https://www.freedesktop.org/software/systemd/man/latest/systemd.timer.html',k:'doc',s:'freedesktop.org'},
            {t:'Run Claude Code programmatically',u:'https://code.claude.com/docs/en/headless',k:'doc',s:'Claude Code Docs'},
            {t:'RabbitMQ Tutorials',u:'https://www.rabbitmq.com/tutorials',k:'doc',s:'RabbitMQ'}
          ]},
        {label:'Персональний агент на VPS 24/7',desc:'Claude Code на дешевому сервері, вхід через Telegram, доступ до репозиторіїв і задач, cron для регулярних перевірок. Найменший повний приклад системи без нагляду.',why:'На власному асистенті набиваються всі шишки проду: ліміти, зависання, ціна, логи, безпека ключів.',
          links:[
            {t:'AI-асистент 24/7: Claude Code + VPS + Telegram',u:'https://www.youtube.com/watch?v=Nioa8ZBzDqE',k:'video',y:2026,s:'BeerCode'},
            {t:'Як підняти свого персонального асистента claude + telegram',u:'https://t.me/beerphp/151',k:'post',y:2026,s:'beerphp'},
            {t:'Hosting the Agent SDK',u:'https://platform.claude.com/docs/en/agent-sdk/hosting',k:'doc',y:2026,s:'Claude Docs'},
            {t:'Monitoring',u:'https://code.claude.com/docs/en/monitoring-usage',k:'doc',s:'Claude Code Docs',w:'Метрики і події Claude Code через OpenTelemetry'}
          ]},
        {label:'Ретраї і dead-letter',desc:'Невдала задача повторюється обмежену кількість разів з паузою, потім потрапляє в окрему чергу (dead-letter queue) для розбору людиною.',why:'Без dead-letter невдалі задачі або губляться, або крутяться вічно.',
          links:[
            {t:'Using dead-letter queues in Amazon SQS',u:'https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html',k:'doc',s:'AWS Docs'},
            {t:'Dead Letter Exchanges',u:'https://www.rabbitmq.com/docs/dlx',k:'doc',s:'RabbitMQ'},
            {t:'Reliability Guide',u:'https://www.rabbitmq.com/docs/reliability',k:'doc',s:'RabbitMQ'},
            {t:'Tasks',u:'https://docs.celeryq.dev/en/stable/userguide/tasks.html',k:'doc',s:'Celery Docs',w:'Ретраї задач із backoff у Celery'}
          ]},
        {label:'Ідемпотентність задач',desc:'Повторне виконання тієї самої задачі не робить дію двічі: ключ ідемпотентності, перевірка «вже зроблено» перед побічним ефектом.',why:'Ретрай після збою не має надіслати другий лист або створити другий тікет.',
          links:[
            {t:'Making retries safe with idempotent APIs',u:'https://aws.amazon.com/builders-library/making-retries-safe-with-idempotent-APIs/',k:'article',s:'Amazon Builders\' Library'},
            {t:'Idempotent requests',u:'https://docs.stripe.com/api/idempotent_requests',k:'doc',s:'Stripe Docs'}
          ]},
        {label:'Health checks і watchdog',desc:'Перевірка, що воркер живий і обробляє задачі; автоматичний перезапуск; алерт, якщо черга росте або остання успішна задача була давно.',why:'Воркер, що тихо завис, виглядає як відсутність задач. Різницю показує лише моніторинг.',
          links:[
            {t:'Pattern: Health Check API',u:'https://microservices.io/patterns/observability/health-check-api.html',k:'article',s:'microservices.io'},
            {t:'Configure Liveness, Readiness and Startup Probes',u:'https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/',k:'doc',s:'Kubernetes Docs'},
            {t:'Monitoring Distributed Systems',u:'https://sre.google/sre-book/monitoring-distributed-systems/',k:'course',s:'Google SRE Book'}
          ]},
        {label:'Durable execution: Temporal, Inngest',type:'optional',desc:'Фреймворки, що зберігають стан довгого workflow між кроками і дотягують його після падіння процесу: Temporal, Inngest. Крок агента стає activity з ретраями і таймаутом.',why:'Прогін агента на 40 хвилин не має починатись з нуля через рестарт контейнера.',
          links:[
            {t:'Temporal Platform Documentation',u:'https://docs.temporal.io/',k:'doc',s:'Temporal Docs'},
            {t:'Durable AI',u:'https://docs.temporal.io/ai',k:'doc',s:'Temporal Docs'},
            {t:'Inngest Documentation',u:'https://www.inngest.com/docs',k:'doc',s:'Inngest Docs'},
            {t:'AgentKit',u:'https://www.inngest.com/docs/agent-kit/overview',k:'doc',s:'Inngest Docs'}
          ]},
        {label:'Дежурство і runbook',type:'optional',desc:'Хто реагує на алерт, що робити при типових збоях, як вимкнути фічу. І окреме питання: що з цього можна віддати агенту, а що ні.',why:'«Працює без нагляду» означає, що нагляд є, але не щоденний і за процедурою.',
          links:[
            {t:'Чи готовий агент чергувати замість тебе?',u:'https://t.me/beerphp/183',k:'post',y:2026,s:'beerphp'},
            {t:'Being On-Call',u:'https://sre.google/sre-book/being-on-call/',k:'course',s:'Google SRE Book'},
            {t:'On-Call',u:'https://sre.google/workbook/on-call/',k:'course',s:'Google SRE Workbook'},
            {t:'PagerDuty Incident Response',u:'https://response.pagerduty.com/',k:'doc',s:'PagerDuty'},
            {t:'From 4 Hours to 8 Minutes with AI Agents That Transform SRE Incident Response',u:'https://www.usenix.org/conference/srecon25emea/presentation/jausovec',k:'video',y:2025,s:'USENIX SREcon'}
          ]}
      ]},
    {label:'Інциденти і постмортем',side:'left',desc:'Коли агент або фіча зламались у проді: як знайти причину по трейсах, що виправити і як розповісти про це так, щоб команда повірила.',why:'Розбір інциденту є одним із найпереконливіших артефактів портфоліо AI-інженера.',
      links:[
        {t:'Postmortem Culture: Learning from Failure',u:'https://sre.google/sre-book/postmortem-culture/',k:'course',s:'Google SRE Book'},
        {t:'A postmortem of three recent issues',u:'https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues',k:'article',y:2025,s:'Anthropic Engineering',w:'Як виглядає постмортем деградації моделі від самого провайдера'},
        {t:'Expanding on what we missed with sycophancy',u:'https://openai.com/index/expanding-on-sycophancy/',k:'article',y:2025,s:'OpenAI',w:'Постмортем відкоченого оновлення моделі'},
        {t:'danluu/post-mortems',u:'https://github.com/danluu/post-mortems',k:'github',s:'GitHub'},
        {t:'Can Claude Fix Itself? Using LLMs for Incident Response',u:'https://www.infoq.com/presentations/claude-sre-incidents/',k:'video',y:2026,s:'InfoQ'},
        {t:'From Vibes to Outages: Riding the AI Code Wave',u:'https://www.usenix.org/conference/srecon25emea/presentation/kalache',k:'video',y:2025,s:'USENIX SREcon'}
      ],
      children:[
        {label:'Пошук причини по трейсах',desc:'Від скарги до прогону, від прогону до кроку, від кроку до входу, який його зламав: документ, тул, зміна промпту.',why:'Саме для цього писались трейси. Без них розбір є вгадуванням.',
          links:[
            {t:'Effective Troubleshooting',u:'https://sre.google/sre-book/effective-troubleshooting/',k:'course',s:'Google SRE Book'},
            {t:'Claude Code in Action: Trace Tool Calls & Decisions with Langfuse',u:'https://www.youtube.com/watch?v=fsoBHf_WNmQ',k:'video',y:2025,s:'YouTube · Langfuse'},
            {t:'Observability concepts',u:'https://docs.smith.langchain.com/observability/concepts',k:'doc',s:'LangSmith Docs'}
          ]},
        {label:'Типові причини інцидентів',desc:'Зміна версії моделі провайдером, зміна зовнішнього API тула, деградація через роздутий контекст, injection у даних, вичерпання лімітів, збій самого провайдера.',why:'Знаючи типові причини, перевіряєте їх першими і скорочуєте час розбору.',
          links:[
            {t:'A postmortem of three recent issues',u:'https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'OWASP Top 10 for LLM Applications 2025',u:'https://genai.owasp.org/llm-top-10/',k:'doc',y:2025,s:'OWASP'},
            {t:'Claude API errors',u:'https://platform.claude.com/docs/en/api/errors',k:'doc',s:'Claude Docs'}
          ],
          children:[
            {label:'Нова версія моделі',desc:'Провайдер оновив модель, і відповіді змінились. Зафіксована версія моделі і canary зменшують ризик.',why:'Найчастіша причина «нічого не міняли, а зламалось».',links:[{t:'Model deprecations',u:'https://platform.claude.com/docs/en/about-claude/model-deprecations',k:'doc',s:'Claude Docs'},{t:'Expanding on what we missed with sycophancy',u:'https://openai.com/index/expanding-on-sycophancy/',k:'article',y:2025,s:'OpenAI'}]},
            {label:'Змінилось API тула',desc:'Зовнішній сервіс змінив формат відповіді, тул почав повертати помилки або інші дані.',why:'Видно за зростанням tool error rate раніше, ніж за скаргами.',links:[{t:'Writing effective tools for agents - with agents',u:'https://www.anthropic.com/engineering/writing-tools-for-agents',k:'article',y:2025,s:'Anthropic Engineering'}]},
            {label:'Контекст виріс',desc:'Історія, результати тулів або документи роздули контекст, якість і latency деградували.',why:'Повзуча деградація без жодної помилки в логах.',links:[{t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic Engineering'}]},
            {label:'Вичерпано ліміти',desc:'Rate limit, бюджет або квота провайдера вичерпані, запити падають з 429.',why:'Лікується чергою, бюджетами і fallback, а не збільшенням ліміту.',links:[{t:'Rate limits',u:'https://platform.claude.com/docs/en/api/rate-limits',k:'doc',s:'Claude Docs'},{t:'Rate limits',u:'https://platform.openai.com/docs/guides/rate-limits',k:'doc',s:'OpenAI Docs'}]}
          ]},
        {label:'Постмортем без пошуку винних',desc:'Що сталось, як помітили, скільки тривало, причина, що виправили, що зробити, щоб не повторилось. Нові кейси йдуть у golden dataset.',why:'Інцидент перетворюється на тест, який не дасть йому повторитись.',
          links:[
            {t:'Postmortem Culture: Learning from Failure',u:'https://sre.google/sre-book/postmortem-culture/',k:'course',s:'Google SRE Book'},
            {t:'Postmortem Culture: Learning from Failure',u:'https://sre.google/workbook/postmortem-culture/',k:'course',s:'Google SRE Workbook'},
            {t:'How to run a blameless postmortem',u:'https://www.atlassian.com/incident-management/postmortem',k:'article',s:'Atlassian'},
            {t:'Emergency Response',u:'https://sre.google/sre-book/emergency-response/',k:'course',s:'Google SRE Book'}
          ]},
        {label:'Розбір інциденту як артефакт',desc:'Публічний або портфельний текст: як ваш агент зламався і як ви це знайшли. Проду немає: розберіть поломку у власному пет-проєкті або асистенті на VPS.',why:'Хоча б один інцидент, про який ви можете розповісти з трейсами в руках.',
          links:[
            {t:'danluu/post-mortems',u:'https://github.com/danluu/post-mortems',k:'github',s:'GitHub',w:'Сотні публічних постмортемів як зразки формату'},
            {t:'A postmortem of three recent issues',u:'https://www.anthropic.com/engineering/a-postmortem-of-three-recent-issues',k:'article',y:2025,s:'Anthropic Engineering'},
            {t:'API, ChatGPT & Sora Facing Issues',u:'https://status.openai.com/incidents/ctrsv3lwd797',k:'article',y:2024,s:'OpenAI Status'}
          ]},
        {label:'Агент у відповіді на інцидент',type:'optional',desc:'LLM як помічник дежурного: збирає контекст із логів і трейсів, пропонує гіпотези, пише чернетку постмортему. Першопричину все ще знаходить людина.',why:'Агент скорочує час збору фактів, але його переконливий текст про «причину» треба перевіряти.',
          links:[
            {t:'Can Claude Fix Itself? Using LLMs for Incident Response',u:'https://www.infoq.com/presentations/claude-sre-incidents/',k:'video',y:2026,s:'InfoQ'},
            {t:'From 4 Hours to 8 Minutes with AI Agents That Transform SRE Incident Response',u:'https://www.usenix.org/conference/srecon25emea/presentation/jausovec',k:'video',y:2025,s:'USENIX SREcon'},
            {t:'Чи готовий агент чергувати замість тебе?',u:'https://t.me/beerphp/183',k:'post',y:2026,s:'beerphp'},
            {t:'SRE for AI and AI for SRE',u:'https://www.usenix.org/conference/srecon25emea/presentation/underwood',k:'video',y:2025,s:'USENIX SREcon'}
          ]}
      ]},
    {label:'Дані, compliance, self-hosting',side:'right',desc:'Куди йдуть промпти користувачів і скільки їх зберігає провайдер, які зобов\'язання накладають GDPR і EU AI Act, і коли має сенс підняти модель у себе на vLLM чи Ollama.',why:'Питання «де лежать наші дані» ставить юрист або клієнт, і відповідь має бути готовою до деплою.',
      links:[
        {t:'API and data retention',u:'https://platform.claude.com/docs/en/manage-claude/api-and-data-retention',k:'doc',s:'Claude Docs'},
        {t:'Your data',u:'https://platform.openai.com/docs/guides/your-data',k:'doc',s:'OpenAI Docs'},
        {t:'EU Artificial Intelligence Act',u:'https://artificialintelligenceact.eu/',k:'doc',s:'EU AI Act'},
        {t:'OWASP Top 10 for LLM Applications 2025',u:'https://genai.owasp.org/llm-top-10/',k:'doc',y:2025,s:'OWASP'},
        {t:'vLLM',u:'https://docs.vllm.ai/en/latest/',k:'doc',s:'vLLM Docs'},
        {t:'Ollama documentation',u:'https://docs.ollama.com/',k:'doc',s:'Ollama Docs'}
      ],
      children:[
        {label:'Data retention у провайдерів, ZDR',desc:'Скільки днів провайдер зберігає вхід і вихід API, чи навчається на них, чи є zero data retention. У Anthropic і OpenAI стандартно 30 днів для API без навчання, ZDR за домовленістю.',why:'Клієнт запитає, чи його документи лежать у третьої сторони. Відповідь береться з цих сторінок.',
          links:[
            {t:'API and data retention',u:'https://platform.claude.com/docs/en/manage-claude/api-and-data-retention',k:'doc',s:'Claude Docs'},
            {t:'Zero data retention',u:'https://code.claude.com/docs/en/zero-data-retention',k:'doc',s:'Claude Code Docs'},
            {t:'Your data',u:'https://platform.openai.com/docs/guides/your-data',k:'doc',s:'OpenAI Docs'},
            {t:'Enterprise privacy at OpenAI',u:'https://openai.com/enterprise-privacy/',k:'doc',s:'OpenAI'},
            {t:'Anthropic Trust Center',u:'https://trust.anthropic.com/',k:'doc',s:'Anthropic'}
          ]},
        {label:'Власні логи: строки і видалення',desc:'Трейси з текстами промптів живуть обмежений час, персональні дані маскуються, є процедура видалення за запитом користувача. Логи в observability-сервісі теж є обробкою даних.',why:'Observability-інструмент із повними промптами є ще одним місцем, де зберігаються дані клієнтів.',
          links:[
            {t:'Masking',u:'https://langfuse.com/docs/observability/features/masking',k:'doc',s:'Langfuse Docs'},
            {t:'Prevent logging of sensitive data in traces',u:'https://docs.smith.langchain.com/observability/how_to_guides/mask_inputs_outputs',k:'doc',s:'LangSmith Docs'},
            {t:'Presidio: Data Protection and De-identification SDK',u:'https://microsoft.github.io/presidio/',k:'doc',s:'Microsoft'},
            {t:'Data protection',u:'https://commission.europa.eu/law/law-topic/data-protection_en',k:'doc',s:'European Commission'}
          ]},
        {label:'GDPR і EU AI Act',desc:'GDPR: законна підстава обробки, мінімізація, право на видалення. EU AI Act: класи ризику, обов\'язки для GPAI і прозорість для користувача, що спілкується з AI.',why:'Фіча для європейських користувачів має відповідати обом, і це перевіряється до запуску, а не після скарги.',
          links:[
            {t:'EU Artificial Intelligence Act',u:'https://artificialintelligenceact.eu/',k:'doc',s:'EU AI Act'},
            {t:'AI Act',u:'https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai',k:'doc',s:'European Commission'},
            {t:'Data protection',u:'https://commission.europa.eu/law/law-topic/data-protection_en',k:'doc',s:'European Commission'},
            {t:'Safety best practices',u:'https://platform.openai.com/docs/guides/safety-best-practices',k:'doc',s:'OpenAI Docs'}
          ]},
        {label:'Self-hosting: vLLM, Ollama',type:'optional',desc:'Відкриті моделі на власному GPU. vLLM для продакшн-сервінгу з PagedAttention і батчингом, SGLang і TGI як альтернативи, Ollama і llama.cpp для локальної розробки.',why:'Виправдано, коли дані не можуть покидати периметр або обсяг токенів робить API дорожчим за GPU.',
          links:[
            {t:'vLLM',u:'https://docs.vllm.ai/en/latest/',k:'doc',s:'vLLM Docs'},
            {t:'vllm-project/vllm',u:'https://github.com/vllm-project/vllm',k:'github',s:'GitHub'},
            {t:'vLLM: Easy, Fast, and Cheap LLM Serving with PagedAttention',u:'https://blog.vllm.ai/2023/06/20/vllm.html',k:'article',y:2023,s:'vLLM Blog'},
            {t:'Ollama documentation',u:'https://docs.ollama.com/',k:'doc',s:'Ollama Docs'},
            {t:'Welcome to SGLang',u:'https://docs.sglang.ai/',k:'doc',s:'SGLang Docs'},
            {t:'Office Hours',u:'https://vllm.ai/office-hours',k:'video',s:'vLLM',w:'Записи регулярних сесій команди vLLM'}
          ],
          children:[
            {label:'vLLM: PagedAttention, батчинг',desc:'Сервер із OpenAI-сумісним API, continuous batching і ефективною пам\'яттю KV-кешу.',why:'Стандарт де-факто для сервінгу відкритих моделей.',links:[{t:'vLLM',u:'https://docs.vllm.ai/en/latest/',k:'doc',s:'vLLM Docs'},{t:'Efficient Memory Management for Large Language Model Serving with PagedAttention',u:'https://arxiv.org/abs/2309.06180',k:'article',y:2023,s:'arXiv'}]},
            {label:'Ollama і llama.cpp локально',desc:'Запуск квантованих моделей на ноутбуці або сервері без GPU-кластера.',why:'Dev-середовище і тести без витрат на API.',links:[{t:'Ollama documentation',u:'https://docs.ollama.com/',k:'doc',s:'Ollama Docs'},{t:'ggml-org/llama.cpp',u:'https://github.com/ggml-org/llama.cpp',k:'github',s:'GitHub'}]},
            {label:'SGLang і TGI',desc:'Альтернативні сервери: SGLang із RadixAttention, Text Generation Inference від Hugging Face.',why:'Варто знати назви, щоб порівняти під своє навантаження.',links:[{t:'Welcome to SGLang',u:'https://docs.sglang.ai/',k:'doc',s:'SGLang Docs'},{t:'Text Generation Inference',u:'https://huggingface.co/docs/text-generation-inference/index',k:'doc',s:'Hugging Face Docs'}]},
            {label:'GPU і ціна за мільйон токенів',desc:'Вибір GPU під розмір моделі, квантизація, порівняння ціни токена на власному залізі з API.',why:'Self-hosting дешевший лише від певного обсягу, і його треба порахувати.',links:[{t:'LLM Inference Benchmarking: How Much Does Your LLM Inference Cost?',u:'https://developer.nvidia.com/blog/llm-inference-benchmarking-how-much-does-your-llm-inference-cost/',k:'article',y:2025,s:'NVIDIA Technical Blog'},{t:'GPU',u:'https://huggingface.co/docs/transformers/perf_infer_gpu_one',k:'doc',s:'Hugging Face Docs'}]}
          ]}
      ]}
  ]
};
