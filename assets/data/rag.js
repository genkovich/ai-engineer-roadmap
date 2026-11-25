window.ROADMAPS=window.ROADMAPS||{};
window.ROADMAPS['rag']={
  slug:'rag',
  title:'RAG',
  intro:'Модель відповідає на основі ваших даних, яких не було в її навчанні: знаходимо потрібні шматки документів і кладемо їх у промпт разом із питанням. Стоїть після LLM API, бо потребує надійного виклику і структурованої відповіді, і перед evals, бо дві його частини треба міряти окремо.',
  root:{label:'RAG',kicker:'Retrieval-augmented generation',desc:'Retrieval-augmented generation: пошук потрібних фрагментів у ваших даних і генерація відповіді на їх основі. Дві частини, дві метрики, два місця, де ламається.',why:'Найпоширеніший спосіб дати моделі знання про ваш продукт і документи без донавчання.',
    links:[
      {t:'Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks',u:'https://arxiv.org/abs/2005.11401',k:'article',y:2020,s:'arXiv',w:'стаття Lewis et al., з якої пішов сам термін RAG'},
      {t:'Retrieval-Augmented Generation for Large Language Models: A Survey',u:'https://arxiv.org/abs/2312.10997',k:'article',y:2023,s:'arXiv',w:'огляд усіх варіацій: naive, advanced, modular RAG'},
      {t:'Retrieval Augmented Generation',u:'https://www.pinecone.io/learn/series/rag/',k:'course',s:'Pinecone',w:'серія уроків від основ до rerankers і evals'},
      {t:'Introduction to RAG',u:'https://developers.llamaindex.ai/python/framework/understanding/rag/',k:'doc',s:'LlamaIndex Docs',w:'пʼять етапів пайплайну на одній сторінці'},
      {t:'Patterns for Building LLM-based Systems & Products',u:'https://eugeneyan.com/writing/llm-patterns/',k:'article',y:2023,s:'Eugene Yan',w:'RAG як один із семи патернів LLM-систем'},
      {t:'AI Engineering (AIE) Book Resources',u:'https://github.com/chiphuyen/aie-book',k:'course',y:2025,s:'Chip Huyen',w:'матеріали до книги, розділ про RAG і агентів'},
      {t:'Building Production-Ready RAG Applications: Jerry Liu',u:'https://www.youtube.com/watch?v=TRjq7t2Ms5I',k:'video',y:2023,s:'YouTube · AI Engineer',w:'засновник LlamaIndex про те, що ламається у проді'}
    ]},
  end:{label:'Далі: Evals →',href:'evals.html'},
  groups:[
    {label:'Що таке RAG і коли він потрібен',side:'left',desc:'Пайплайн з двох частин: пошук (retrieval) знаходить фрагменти документів, генерація (generation) складає з них відповідь на питання.',why:'Якщо не бачити ці дві частини окремо, неможливо зрозуміти, яка з них винна, коли відповідь погана.',
      links:[
        {t:'What is Retrieval-Augmented Generation (RAG)?',u:'https://www.youtube.com/watch?v=T-D1OfcDW1M',k:'video',y:2023,s:'YouTube · IBM Technology',w:'сім хвилин на саму ідею'},
        {t:'Understanding Retrieval-Augmented Generation (RAG)',u:'https://qdrant.tech/articles/what-is-rag-in-ai/',k:'article',s:'Qdrant'},
        {t:'Retrieval augmented generation',u:'https://platform.claude.com/cookbook/capabilities-retrieval-augmented-generation-guide',k:'doc',s:'Claude Cookbook',w:'повний ноутбук: від базового RAG до reranking і evals'},
        {t:'Retrieval',u:'https://docs.langchain.com/oss/python/langchain/retrieval',k:'doc',s:'LangChain Docs',w:'2-step RAG, agentic RAG і hybrid RAG як три архітектури'},
        {t:'RAG in 2025: State of the Art and the Road Forward - Tengyu Ma',u:'https://www.youtube.com/watch?v=W_CYk2ogcDI',k:'video',y:2025,s:'YouTube · AI Engineer',w:'засновник Voyage AI про стан RAG і куди він іде'}
      ],
      children:[
        {label:'Пошук і генерація як два етапи',desc:'Спершу за питанням знаходяться k найбільш релевантних фрагментів, потім вони разом із питанням йдуть у промпт.',why:'Поганий пошук сильна модель не врятує: вона впевнено відповість на основі нерелевантних шматків.',
          links:[
            {t:'Retrieval-Augmented Generation (RAG)',u:'https://www.pinecone.io/learn/retrieval-augmented-generation/',k:'article',s:'Pinecone'},
            {t:'Deconstructing RAG',u:'https://blog.langchain.com/deconstructing-rag/',k:'article',y:2023,s:'LangChain',w:'карта всіх місць, де можна покрутити пайплайн'},
            {t:'RAG From Scratch: Part 1 (Overview)',u:'https://www.youtube.com/watch?v=wd7TZ4w1mSw',k:'video',y:2024,s:'YouTube · LangChain'},
            {t:'Question answering using embeddings-based search',u:'https://cookbook.openai.com/examples/question_answering_using_embeddings',k:'doc',s:'OpenAI Cookbook',w:'мінімальний RAG у сто рядків без фреймворків'}
          ]},
        {label:'Коли RAG не потрібен',desc:'Якщо всі дані влазять у контекстне вікно і запитів мало, простіше покласти документ у промпт цілком.',why:'RAG додає індекс, пайплайн оновлення і ще одне місце для поломок; це ціна, яку варто платити свідомо.',
          links:[
            {t:'Long context',u:'https://ai.google.dev/gemini-api/docs/long-context',k:'doc',s:'Gemini API Docs',w:'коли мільйон токенів контексту замінює індекс'},
            {t:'Prompt caching',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',k:'doc',s:'Anthropic Docs',w:'робить «весь документ у промпті» дешевшим у рази'},
            {t:'Long Context RAG Performance of LLMs',u:'https://www.databricks.com/blog/long-context-rag-performance-llms',k:'article',y:2024,s:'Databricks'},
            {t:'Still Need Chunking When Long-Context Models Can Do It All?',u:'https://jina.ai/news/still-need-chunking-when-long-context-models-can-do-it-all/',k:'article',y:2024,s:'Jina AI'}
          ]},
        {label:'RAG проти fine-tuning',desc:'Донавчання змінює поведінку і стиль моделі, RAG дає їй актуальні факти. Для знань про ваші документи майже завжди RAG.',why:'Типова помилка на старті: донавчати модель на документах, коли потрібен був пошук по них.',
          links:[
            {t:'Optimizing LLM Accuracy',u:'https://developers.openai.com/api/docs/guides/optimizing-llm-accuracy',k:'doc',s:'OpenAI Docs',w:'матриця: коли prompt, коли RAG, коли fine-tuning'},
            {t:'RAG makes LLMs better and equal',u:'https://www.pinecone.io/blog/rag-study/',k:'article',s:'Pinecone',w:'дослідження: RAG вирівнює якість між моделями'},
            {t:'Building A Generative AI Platform',u:'https://huyenchip.com/2024/07/25/genai-platform.html',k:'article',y:2024,s:'Chip Huyen',w:'де RAG стоїть в архітектурі GenAI-платформи'}
          ]},
        {label:'Naive, advanced і modular RAG',desc:'Три рівні зрілості: базовий пайплайн, пайплайн з покращеннями до і після пошуку (query rewriting, reranking), і модульна система з кількома джерелами та маршрутизацією.',why:'Дає спільну мову: коли кажуть «просунутий RAG», можна спитати, які саме модулі додано і що це дало за метриками.',
          links:[
            {t:'Advanced RAG Techniques',u:'https://weaviate.io/blog/advanced-rag',k:'article',s:'Weaviate'},
            {t:'Advanced RAG Cheat Sheet And Recipes Guide',u:'https://www.llamaindex.ai/blog/a-cheat-sheet-and-some-recipes-for-building-advanced-rag-803a9d94c41b',k:'article',y:2024,s:'LlamaIndex'},
            {t:'NirDiamant/RAG_Techniques',u:'https://github.com/NirDiamant/RAG_Techniques',k:'github',s:'GitHub',w:'десятки технік RAG з ноутбуком на кожну'},
            {t:'Layering every technique in RAG, one query at a time - David Karam',u:'https://www.youtube.com/watch?v=w9u11ioHGA0',k:'video',y:2025,s:'YouTube · AI Engineer'}
          ]},
        {label:'Типові застосування',desc:'Відповіді по документації, підтримка на базі знань, пошук по внутрішніх документах, асистент по кодовій базі.',why:'Усі вони мають одну структуру, і один раз зібраний пайплайн переноситься між ними.',
          links:[
            {t:'Levels of Complexity: RAG Applications',u:'https://jxnl.co/writing/2024/02/28/levels-of-complexity-rag-applications/',k:'article',y:2024,s:'Jason Liu',w:'від прототипу до продакшну за рівнями'},
            {t:'RAG',u:'https://parlance-labs.com/education/rag/',k:'course',s:'Parlance Labs',w:'безкоштовні лекції Hamel Husain і гостей про RAG у проді'},
            {t:'Advanced RAG on Hugging Face documentation using LangChain',u:'https://huggingface.co/learn/cookbook/advanced_rag',k:'doc',s:'Hugging Face',w:'RAG по документації як наскрізний приклад'},
            {t:'What We’ve Learned From A Year of Building with LLMs',u:'https://applied-llms.org/',k:'article',y:2024,s:'Applied LLMs',w:'уроки шести практиків, чимало про RAG'}
          ]}
      ]},
    {label:'Ingestion: завантаження документів',side:'right',desc:'Шлях документа від джерела до тексту, готового до нарізки: завантаження, парсинг, очищення, метадані.',why:'Сміття на вході дає сміття у пошуку; більшість поганих відповідей RAG починаються ще тут.',
      links:[
        {t:'Loading Data',u:'https://developers.llamaindex.ai/python/framework/module_guides/loading/',k:'doc',s:'LlamaIndex Docs'},
        {t:'Document loader integrations',u:'https://docs.langchain.com/oss/python/integrations/document_loaders',k:'doc',s:'LangChain Docs',w:'сотні готових loaders для файлів, баз і сервісів'},
        {t:'How to parse PDF docs for RAG',u:'https://cookbook.openai.com/examples/parse_pdf_docs_for_rag',k:'doc',s:'OpenAI Cookbook'},
        {t:'Preprocessing Unstructured Data for LLM Applications',u:'https://www.deeplearning.ai/short-courses/preprocessing-unstructured-data-for-llm-applications/',k:'course',s:'DeepLearning.AI',w:'короткий безкоштовний курс про парсинг PDF, HTML, таблиць'},
        {t:'Seven Failure Points When Engineering a Retrieval Augmented Generation System',u:'https://arxiv.org/abs/2401.05856',k:'article',y:2024,s:'arXiv',w:'перші точки відмови саме на етапі ingestion'}
      ],
      children:[
        {label:'Джерела: файли, бази, API, сайти',desc:'Звідки беруться документи і як забирати їх регулярно, а не один раз руками.',why:'Пайплайн, який працює лише з папкою на ноутбуці, не доживе до проду.',
          links:[
            {t:'Document loader integrations',u:'https://docs.langchain.com/oss/python/integrations/document_loaders',k:'doc',s:'LangChain Docs'},
            {t:'Unstructured-IO/unstructured-ingest',u:'https://github.com/Unstructured-IO/unstructured-ingest',k:'github',s:'GitHub',w:'конектори до S3, Google Drive, Notion, Confluence тощо'},
            {t:'apache/tika',u:'https://github.com/apache/tika',k:'github',s:'GitHub',w:'витягує текст із тисячі форматів, перевірено роками'}
          ]},
        {label:'Парсинг PDF, HTML, таблиць',desc:'Витягання тексту зі збереженням структури: заголовки, абзаци, таблиці, код. Інструменти: Unstructured, Docling, LlamaParse, PyMuPDF, Marker.',why:'PDF із двома колонками, прочитаний рядок за рядком, дає текст, який не зрозуміє ні людина, ні модель.',
          links:[
            {t:'How to parse PDF docs for RAG',u:'https://cookbook.openai.com/examples/parse_pdf_docs_for_rag',k:'doc',s:'OpenAI Cookbook'},
            {t:'Process PDFs in Python: Step-by-Step Guide',u:'https://unstructured.io/blog/how-to-process-pdf-in-python',k:'article',s:'Unstructured'},
            {t:'microsoft/markitdown',u:'https://github.com/microsoft/markitdown',k:'github',s:'GitHub',w:'Office-документи і PDF у Markdown однією командою'},
            {t:'opendatalab/MinerU',u:'https://github.com/opendatalab/MinerU',k:'github',s:'GitHub',w:'PDF із формулами і таблицями у Markdown чи JSON'}
          ],
          children:[
            {label:'Unstructured',desc:'Бібліотека і сервіс, що розбирають PDF, DOCX, HTML, зображення на елементи: заголовок, абзац, таблиця, список.',why:'Елементи з типами дають нарізку за структурою замість нарізки за символами.',
              links:[
                {t:'Unstructured-IO/unstructured',u:'https://github.com/Unstructured-IO/unstructured',k:'github',s:'GitHub'},
                {t:'Overview',u:'https://docs.unstructured.io/open-source/introduction/overview',k:'doc',s:'Unstructured Docs'}
              ]},
            {label:'Docling (IBM)',desc:'Відкритий парсер від IBM: розкладка сторінки, таблиці, формули, читання у правильному порядку, експорт у Markdown і JSON.',why:'Один із найточніших безкоштовних варіантів для складних PDF, працює локально.',
              links:[
                {t:'docling-project/docling',u:'https://github.com/docling-project/docling',k:'github',s:'GitHub'},
                {t:'Docling Technical Report',u:'https://arxiv.org/abs/2408.09869',k:'article',y:2024,s:'arXiv'},
                {t:'Chunking',u:'https://docling-project.github.io/docling/concepts/chunking/',k:'doc',s:'Docling Docs',w:'нарізка з урахуванням структури прямо в парсері'}
              ]},
            {label:'LlamaParse',desc:'Хмарний парсер від LlamaIndex із режимами на базі моделей для складних таблиць, схем і сканів.',why:'Коли локальні парсери не дають ладу з документом, це найшвидший спосіб перевірити, чи справа в парсингу.',
              links:[
                {t:'LlamaParse platform',u:'https://www.llamaindex.ai/llamaparse',k:'doc',s:'LlamaIndex'},
                {t:'Overview of Parse',u:'https://docs.cloud.llamaindex.ai/llamaparse/overview',k:'doc',s:'LlamaIndex Docs'}
              ]},
            {label:'PyMuPDF, pdfplumber, Marker, OCR',desc:'Швидкі локальні бібліотеки для тексту і таблиць із PDF; Marker перетворює PDF у Markdown моделями; для сканів потрібен OCR (Tesseract, PaddleOCR, surya).',why:'Для чистих цифрових PDF важка артилерія не потрібна, а скан без OCR дасть порожній текст.',
              links:[
                {t:'pymupdf/PyMuPDF',u:'https://github.com/pymupdf/PyMuPDF',k:'github',s:'GitHub'},
                {t:'jsvine/pdfplumber',u:'https://github.com/jsvine/pdfplumber',k:'github',s:'GitHub',w:'таблиці і координати символів'},
                {t:'datalab-to/marker',u:'https://github.com/datalab-to/marker',k:'github',s:'GitHub'},
                {t:'PaddlePaddle/PaddleOCR',u:'https://github.com/PaddlePaddle/PaddleOCR',k:'github',s:'GitHub',w:'OCR для сканів і зображень'}
              ]}
          ]},
        {label:'Очищення і нормалізація',desc:'Прибрати навігацію, колонтитули, дублікати, зайві пробіли; привести кодування і формати до одного.',why:'Повторюваний футер у кожному фрагменті зʼїдає місце в контексті і псує схожість.',
          links:[
            {t:'adbar/trafilatura',u:'https://github.com/adbar/trafilatura',k:'github',s:'GitHub',w:'чистий текст із веб-сторінок без меню і реклами'},
            {t:'mozilla/readability',u:'https://github.com/mozilla/readability',k:'github',s:'GitHub',w:'той самий алгоритм, що й режим читання у Firefox'},
            {t:'kepano/defuddle',u:'https://github.com/kepano/defuddle',k:'github',s:'GitHub',w:'основний контент сторінки у Markdown'}
          ]},
        {label:'Метадані: джерело, дата, розділ, права',desc:'До кожного фрагмента додаються поля, за якими потім фільтрують і цитують.',why:'Без джерела неможливо дати посилання у відповіді, без прав доступу користувач побачить чуже.',
          links:[
            {t:'Metadata Extraction',u:'https://developers.llamaindex.ai/python/framework/module_guides/indexing/metadata_extraction/',k:'doc',s:'LlamaIndex Docs',w:'модель сама дописує заголовок і ключові слова до фрагмента'},
            {t:'Chunk documents for retrieval',u:'https://docs.langchain.com/oss/python/langchain/chunking',k:'doc',s:'LangChain Docs',w:'розділ про метадані заголовків у фрагментах'},
            {t:'Points',u:'https://qdrant.tech/documentation/manage-data/points/',k:'doc',s:'Qdrant Docs',w:'як вектор і його payload живуть разом'}
          ]},
        {label:'Дедуплікація',type:'optional',desc:'Виявлення однакових або майже однакових документів і фрагментів до індексації: хеші для точних копій, MinHash для близьких.',why:'Пʼять копій одного документа займуть усі k місць у результатах пошуку.',
          links:[
            {t:'ekzhu/datasketch',u:'https://github.com/ekzhu/datasketch',k:'github',s:'GitHub',w:'MinHash і LSH для майже-дублікатів'},
            {t:'ChenghaoMou/text-dedup',u:'https://github.com/ChenghaoMou/text-dedup',k:'github',s:'GitHub'},
            {t:'huggingface/datatrove',u:'https://github.com/huggingface/datatrove',k:'github',s:'GitHub',w:'пайплайни очищення і дедуплікації великих корпусів'}
          ]}
      ]},
    {label:'Chunking: нарізка на фрагменти',side:'left',desc:'Поділ документа на шматки, які індексуються і повертаються пошуком окремо. Розмір і межі нарізки прямо впливають на якість.',why:'Фрагмент, обрізаний посередині думки, не знайдеться за питанням і не допоможе моделі, якщо знайдеться.',
      links:[
        {t:'Chunking Strategies for LLM Applications',u:'https://www.pinecone.io/learn/chunking-strategies/',k:'article',s:'Pinecone'},
        {t:'Chunk documents for retrieval',u:'https://docs.langchain.com/oss/python/langchain/chunking',k:'doc',s:'LangChain Docs'},
        {t:'Chunking Strategies to Improve LLM RAG Pipeline Performance',u:'https://weaviate.io/blog/chunking-strategies-for-rag',k:'article',s:'Weaviate'},
        {t:'The 5 Levels Of Text Splitting For Retrieval',u:'https://www.youtube.com/watch?v=8OJC21T2SL4',k:'video',y:2024,s:'YouTube · Greg Kamradt',w:'від символів до агентної нарізки за годину'},
        {t:'Evaluating Chunking Strategies for Retrieval',u:'https://research.trychroma.com/evaluating-chunking',k:'article',y:2024,s:'Chroma',w:'єдине порівняння стратегій нарізки за метриками'}
      ],
      children:[
        {label:'Фіксований розмір з overlap',desc:'Нарізка по N токенів із перекриттям сусідніх фрагментів, щоб не губити думку на межі.',why:'Найпростіший старт: працює посередньо скрізь і легко налаштовується.',
          links:[
            {t:'Chunking Strategies for LLM Applications',u:'https://www.pinecone.io/learn/chunking-strategies/',k:'article',s:'Pinecone'},
            {t:'Embedding texts that are longer than the model’s maximum context length',u:'https://cookbook.openai.com/examples/embedding_long_inputs',k:'doc',s:'OpenAI Cookbook'},
            {t:'Chunking Strategies for RAG: Best Practices and Key Methods',u:'https://unstructured.io/blog/chunking-for-rag-best-practices',k:'article',s:'Unstructured'}
          ]},
        {label:'За структурою документа',desc:'Межі фрагментів по заголовках, абзацах, пунктах списку, функціях у коді: RecursiveCharacterTextSplitter, Markdown- і HTML-splitters, нарізка за елементами парсера.',why:'Фрагмент, що збігається з логічною одиницею документа, і шукається, і читається краще.',
          links:[
            {t:'Text splitter integrations',u:'https://docs.langchain.com/oss/python/integrations/splitters',k:'doc',s:'LangChain Docs'},
            {t:'Node Parser Usage Pattern',u:'https://developers.llamaindex.ai/python/framework/module_guides/loading/node_parsers/',k:'doc',s:'LlamaIndex Docs'},
            {t:'Chunking',u:'https://docs.unstructured.io/open-source/core-functionality/chunking',k:'doc',s:'Unstructured Docs',w:'by_title: нарізка за заголовками з парсера'},
            {t:'Chunking',u:'https://docling-project.github.io/docling/concepts/chunking/',k:'doc',s:'Docling Docs'}
          ]},
        {label:'Семантична нарізка',type:'optional',desc:'Межі визначаються за зміною теми, яку міряють через embeddings сусідніх речень.',why:'Дорожче і складніше, але допомагає на довгих текстах без явної структури.',
          links:[
            {t:'Semantic Chunker',u:'https://developers.llamaindex.ai/python/examples/node_parsers/semantic_chunking/',k:'doc',s:'LlamaIndex Docs'},
            {t:'5 Levels Of Text Splitting (notebook)',u:'https://github.com/FullStackRetrieval-com/RetrievalTutorials/blob/main/tutorials/LevelsOfTextSplitting/5_Levels_Of_Text_Splitting.ipynb',k:'github',y:2024,s:'GitHub'},
            {t:'Finding Optimal Breakpoints in Long Documents Using Small Language Models',u:'https://jina.ai/news/finding-optimal-breakpoints-in-long-documents-using-small-language-models/',k:'article',s:'Jina AI'}
          ]},
        {label:'Бібліотеки: LangChain splitters, chonkie',desc:'Готові реалізації стратегій нарізки: пакет langchain-text-splitters, легка бібліотека chonkie, node parsers у LlamaIndex.',why:'Нарізку не варто писати з нуля: бібліотеки вже рахують токени, тримають overlap і метадані.',
          links:[
            {t:'langchain-text-splitters',u:'https://pypi.org/project/langchain-text-splitters/',k:'doc',s:'PyPI'},
            {t:'langchain/libs/text-splitters',u:'https://github.com/langchain-ai/langchain/tree/master/libs/text-splitters',k:'github',s:'GitHub'},
            {t:'chonkie-inc/chonkie',u:'https://github.com/chonkie-inc/chonkie',k:'github',s:'GitHub',w:'token, sentence, recursive, semantic, late chunking в одному пакеті'},
            {t:'Chonkie Documentation',u:'https://docs.chonkie.ai/',k:'doc',s:'Chonkie Docs'}
          ]},
        {label:'Late chunking (Jina)',type:'optional',desc:'Спершу весь документ проходить через embedding-модель з довгим контекстом, і лише потім токени групуються у фрагменти: вектор фрагмента знає про контекст навколо.',why:'Розвʼязує проблему «фрагмент без контексту» без дописування тексту моделлю, як у contextual retrieval.',
          links:[
            {t:'Late Chunking in Long-Context Embedding Models',u:'https://jina.ai/news/late-chunking-in-long-context-embedding-models/',k:'article',y:2024,s:'Jina AI'},
            {t:'Late Chunking: Contextual Chunk Embeddings Using Long-Context Embedding Models',u:'https://arxiv.org/abs/2409.04701',k:'article',y:2024,s:'arXiv'},
            {t:'jina-ai/late-chunking',u:'https://github.com/jina-ai/late-chunking',k:'github',s:'GitHub'},
            {t:'Late Chunking: Balancing Precision and Cost in Long Context Retrieval',u:'https://weaviate.io/blog/late-chunking',k:'article',s:'Weaviate'},
            {t:'What Late Chunking Really Is & What It’s Not: Part II',u:'https://jina.ai/news/what-late-chunking-really-is-and-what-its-not-part-ii/',k:'article',y:2024,s:'Jina AI'}
          ]},
        {label:'Розмір фрагмента як компроміс',desc:'Малі фрагменти точніше знаходяться, але втрачають контекст; великі зберігають контекст, але розмивають схожість і дорожчі у промпті.',why:'Розмір фрагмента це параметр, який треба підбирати на своїх даних за метриками, не за порадою зі статті.',
          links:[
            {t:'Evaluating Chunking Strategies for Retrieval',u:'https://research.trychroma.com/evaluating-chunking',k:'article',y:2024,s:'Chroma'},
            {t:'brandonstarxel/chunking_evaluation',u:'https://github.com/brandonstarxel/chunking_evaluation',k:'github',s:'GitHub',w:'код і датасети з дослідження Chroma'},
            {t:'RAG Chunk Size Guide: Find The Best Setting',u:'https://www.llamaindex.ai/blog/evaluating-the-ideal-chunk-size-for-a-rag-system-using-llamaindex-6207e5d3fec5',k:'article',s:'LlamaIndex'}
          ]},
        {label:'Фрагмент плюс контекст документа',desc:'До кожного фрагмента додається назва документа, розділ або короткий опис, звідки він.',why:'Фрагмент «ставка 5%» без назви документа однаково схожий на все і ні на що.',
          links:[
            {t:'Contextual retrieval in AI systems',u:'https://www.anthropic.com/engineering/contextual-retrieval',k:'article',y:2024,s:'Anthropic'},
            {t:'Metadata Extraction',u:'https://developers.llamaindex.ai/python/framework/module_guides/indexing/metadata_extraction/',k:'doc',s:'LlamaIndex Docs'},
            {t:'Chunk documents for retrieval',u:'https://docs.langchain.com/oss/python/langchain/chunking',k:'doc',s:'LangChain Docs',w:'заголовки Markdown як метадані фрагмента'}
          ]}
      ]},
    {label:'Embeddings',side:'right',desc:'Текст перетворюється на вектор чисел так, що близькі за змістом тексти дають близькі вектори. На цьому стоїть семантичний пошук.',why:'Це механізм, яким питання користувача зустрічається з фрагментом, сформульованим іншими словами.',
      links:[
        {t:'Embeddings: What they are and why they matter',u:'https://simonwillison.net/2023/Oct/23/embeddings/',k:'article',y:2023,s:'Simon Willison',w:'найзрозуміліше пояснення для бекендера'},
        {t:'Vector embeddings',u:'https://developers.openai.com/api/docs/guides/embeddings',k:'doc',s:'OpenAI Docs'},
        {t:'Vector Embeddings Explained',u:'https://weaviate.io/blog/vector-embeddings-explained',k:'article',s:'Weaviate'},
        {t:'Getting Started With Embeddings',u:'https://huggingface.co/blog/getting-started-with-embeddings',k:'article',s:'Hugging Face'},
        {t:'$0 Embeddings (OpenAI vs. free & open source)',u:'https://www.youtube.com/watch?v=QdDoFfkVkcw',k:'video',y:2023,s:'YouTube · Rabbit Hole Syndrome'},
        {t:'Embedding Models: from Architecture to Implementation',u:'https://www.deeplearning.ai/short-courses/embedding-models-from-architecture-to-implementation/',k:'course',s:'DeepLearning.AI'}
      ],
      children:[
        {label:'Моделі embeddings і розмірність',desc:'Різні моделі дають вектори різної довжини і якості; розмірність впливає на точність, розмір індексу і швидкість. Комерційні API: OpenAI, Cohere, Voyage, Google.',why:'Вибір моделі embeddings робиться один раз на індекс: зміна означає переіндексацію всього.',
          links:[
            {t:'Vector embeddings',u:'https://developers.openai.com/api/docs/guides/embeddings',k:'doc',s:'OpenAI Docs'},
            {t:'Embedding model integrations',u:'https://docs.langchain.com/oss/python/integrations/text_embedding',k:'doc',s:'LangChain Docs',w:'єдиний інтерфейс до всіх провайдерів'},
            {t:'Embeddings',u:'https://platform.claude.com/docs/en/build-with-claude/embeddings',k:'doc',s:'Anthropic Docs',w:'Anthropic рекомендує Voyage для embeddings'}
          ],
          children:[
            {label:'OpenAI text-embedding-3',type:'alt',desc:'Моделі small і large з параметром dimensions: можна вкоротити вектор без переіндексації моделлю.',why:'Найпоширеніший вибір за замовчуванням; варто знати ціну і обмеження.',
              links:[
                {t:'Vector embeddings',u:'https://developers.openai.com/api/docs/guides/embeddings',k:'doc',s:'OpenAI Docs'},
                {t:'New embedding models and API updates',u:'https://openai.com/index/new-embedding-models-and-api-updates/',k:'article',y:2024,s:'OpenAI'},
                {t:'OpenAI’s Text Embeddings v3',u:'https://www.pinecone.io/learn/openai-embeddings-v3/',k:'article',y:2024,s:'Pinecone'}
              ]},
            {label:'Cohere Embed',type:'alt',desc:'Embed 4 з мультимовністю, мультимодальністю і окремими input_type для запитів і документів.',why:'Сильний на retrieval у понад сотні мов, у тому числі українській.',
              links:[
                {t:'Introduction to Embeddings at Cohere',u:'https://docs.cohere.com/docs/embeddings',k:'doc',s:'Cohere Docs'},
                {t:'Embed',u:'https://cohere.com/embed',k:'doc',s:'Cohere'},
                {t:'Introducing Embed 4: Multimodal search for business',u:'https://cohere.com/blog/embed-4',k:'article',y:2025,s:'Cohere'}
              ]},
            {label:'Voyage AI',type:'alt',desc:'voyage-3-large і voyage-3.5 для тексту, voyage-code-3 для коду, мультимодальні моделі; тепер частина MongoDB.',why:'Часто точніша за OpenAI на пошуку і рекомендована Anthropic як партнер по embeddings.',
              links:[
                {t:'Text Embeddings',u:'https://docs.voyageai.com/docs/embeddings',k:'doc',s:'Voyage AI Docs'},
                {t:'voyage-3-large: the new state-of-the-art general-purpose embedding model',u:'https://blog.voyageai.com/2025/01/07/voyage-3-large/',k:'article',y:2025,s:'Voyage AI'}
              ]},
            {label:'Gemini і Vertex AI Embeddings',type:'alt',desc:'gemini-embedding-001: понад сто мов, розмірність 128-3072 через Matryoshka, доступна в Gemini API і Vertex AI.',why:'Один із лідерів MTEB і природний вибір, якщо генерація вже на Gemini або інфраструктура в Google Cloud.',
              links:[
                {t:'Embeddings',u:'https://ai.google.dev/gemini-api/docs/embeddings',k:'doc',s:'Gemini API Docs'},
                {t:'Get text embeddings',u:'https://cloud.google.com/vertex-ai/generative-ai/docs/embeddings/get-text-embeddings',k:'doc',s:'Google Cloud Docs'},
                {t:'Gemini Embedding now generally available in the Gemini API',u:'https://developers.googleblog.com/en/gemini-embedding-available-gemini-api/',k:'article',y:2025,s:'Google Developers Blog'}
              ]}
          ]},
        {label:'Відкриті моделі embeddings',type:'alt',desc:'Моделі з відкритими вагами, які можна запускати у себе через sentence-transformers або vLLM: BGE, E5, nomic-embed, Qwen3-Embedding, jina-embeddings; LanceDB і Qdrant вміють рахувати їх вбудовано.',why:'Дані не виходять за межі інфраструктури, а ціна за мільйон токенів прагне до нуля.',
          links:[
            {t:'MTEB Leaderboard',u:'https://huggingface.co/spaces/mteb/leaderboard',k:'doc',s:'Hugging Face',w:'фільтр за відкритими моделями і розміром'},
            {t:'Pretrained Models',u:'https://sbert.net/docs/sentence_transformer/pretrained_models.html',k:'doc',s:'Sentence Transformers'},
            {t:'FastEmbed',u:'https://qdrant.tech/documentation/fastembed/',k:'doc',s:'Qdrant Docs',w:'легкий запуск відкритих моделей без PyTorch'},
            {t:'$0 Embeddings (OpenAI vs. free & open source)',u:'https://www.youtube.com/watch?v=QdDoFfkVkcw',k:'video',y:2023,s:'YouTube · Rabbit Hole Syndrome'}
          ],
          children:[
            {label:'BGE (BAAI)',type:'alt',desc:'Сімейство моделей від BAAI; bge-m3 дає dense, sparse і multi-vector представлення в одній моделі.',why:'Один із найсильніших відкритих варіантів для мультимовного гібридного пошуку.',
              links:[
                {t:'BAAI/bge-m3',u:'https://huggingface.co/BAAI/bge-m3',k:'doc',s:'Hugging Face'},
                {t:'FlagOpen/FlagEmbedding',u:'https://github.com/FlagOpen/FlagEmbedding',k:'github',s:'GitHub'}
              ]},
            {label:'E5 (intfloat)',type:'alt',desc:'Моделі від Microsoft з префіксами query: і passage:; multilingual-e5 покриває сотню мов.',why:'Невелика, швидка і давно перевірена у проді мультимовна модель.',
              links:[
                {t:'intfloat/multilingual-e5-large',u:'https://huggingface.co/intfloat/multilingual-e5-large',k:'doc',s:'Hugging Face'},
                {t:'intfloat/e5-mistral-7b-instruct',u:'https://huggingface.co/intfloat/e5-mistral-7b-instruct',k:'doc',s:'Hugging Face'}
              ]},
            {label:'nomic-embed',type:'alt',desc:'Повністю відкриті моделі з відкритими даними і кодом навчання, Matryoshka і контекст 8k; окрема модель для коду.',why:'Прозорість навчання і довгий контекст без ліцензійних обмежень.',
              links:[
                {t:'nomic-ai/nomic-embed-text-v1.5',u:'https://huggingface.co/nomic-ai/nomic-embed-text-v1.5',k:'doc',s:'Hugging Face'},
                {t:'nomic-ai/nomic-embed-code',u:'https://huggingface.co/nomic-ai/nomic-embed-code',k:'doc',s:'Hugging Face'}
              ]},
            {label:'Qwen3 Embedding',type:'alt',desc:'Серія 0.6B-8B від Alibaba на базі Qwen3 з парними rerankers; верхні позиції MMTEB серед відкритих.',why:'Коли потрібна максимальна якість відкритої моделі і є GPU для 4B-8B.',
              links:[
                {t:'Qwen3 Embedding: Advancing Text Embedding and Reranking Through Foundation Models',u:'https://qwenlm.github.io/blog/qwen3-embedding/',k:'article',y:2025,s:'Qwen'},
                {t:'Qwen/Qwen3-Embedding-8B',u:'https://huggingface.co/Qwen/Qwen3-Embedding-8B',k:'doc',s:'Hugging Face'},
                {t:'Qwen3 Embedding: Advancing Text Embedding and Reranking Through Foundation Models',u:'https://arxiv.org/abs/2506.05176',k:'article',y:2025,s:'arXiv'}
              ]}
          ]},
        {label:'MTEB: як обирати модель',desc:'Massive Text Embedding Benchmark: лідерборд моделей embeddings за задачами, мовами і розмірами; MMTEB розширює його до сотень задач і мов.',why:'Дає короткий список кандидатів; остаточний вибір все одно за recall@k на ваших даних.',
          links:[
            {t:'MTEB Leaderboard',u:'https://huggingface.co/spaces/mteb/leaderboard',k:'doc',s:'Hugging Face'},
            {t:'embeddings-benchmark/mteb',u:'https://github.com/embeddings-benchmark/mteb',k:'github',s:'GitHub',w:'запустити бенчмарк на власних даних'},
            {t:'MTEB: Massive Text Embedding Benchmark',u:'https://huggingface.co/blog/mteb',k:'article',y:2022,s:'Hugging Face'},
            {t:'MMTEB: Massive Multilingual Text Embedding Benchmark',u:'https://arxiv.org/abs/2502.13595',k:'article',y:2025,s:'arXiv'}
          ]},
        {label:'Косинус, відстані і нормалізація',desc:'Міра близькості двох векторів: косинус, скалярний добуток, евклідова відстань. Після нормалізації до одиничної довжини косинус дорівнює скалярному добутку.',why:'Поріг схожості, нижче якого фрагмент не брати, це один з найважливіших параметрів пайплайну; а нормалізація пояснює, чому індекси вимагають саме її.',
          links:[
            {t:'Vector Similarity Explained',u:'https://www.pinecone.io/learn/vector-similarity/',k:'article',s:'Pinecone'},
            {t:'Distance Metrics in Vector Search',u:'https://weaviate.io/blog/distance-metrics-in-vector-search',k:'article',s:'Weaviate'},
            {t:'What is Similarity Search?',u:'https://www.pinecone.io/learn/what-is-similarity-search/',k:'article',s:'Pinecone'},
            {t:'Semantic Search',u:'https://www.sbert.net/examples/applications/semantic-search/README.html',k:'doc',s:'Sentence Transformers',w:'normalize_embeddings і dot product замість косинуса'}
          ]},
        {label:'Matryoshka і квантизація векторів',type:'optional',desc:'Matryoshka representation learning дозволяє обрізати вектор до перших N вимірів; квантизація у int8 чи binary стискає індекс у рази.',why:'Індекс на мільйони векторів коштує памʼяті і грошей; ці два прийоми зменшують його без переучування моделі.',
          links:[
            {t:'Introduction to Matryoshka Embedding Models',u:'https://huggingface.co/blog/matryoshka',k:'article',y:2024,s:'Hugging Face'},
            {t:'Matryoshka Representation Learning',u:'https://arxiv.org/abs/2205.13147',k:'article',y:2022,s:'arXiv'},
            {t:'Matryoshka embeddings: faster OpenAI vector search using Adaptive Retrieval',u:'https://supabase.com/blog/matryoshka-embeddings',k:'article',y:2024,s:'Supabase'},
            {t:'Binary and Scalar Embedding Quantization for Significantly Faster & Cheaper Retrieval',u:'https://huggingface.co/blog/embedding-quantization',k:'article',y:2024,s:'Hugging Face'},
            {t:'Quantization',u:'https://qdrant.tech/documentation/guides/quantization/',k:'doc',s:'Qdrant Docs'}
          ]},
        {label:'Embeddings для коду і мультимовні',type:'optional',desc:'Окремі моделі або режими для кодових баз (voyage-code-3, nomic-embed-code) і для текстів кількома мовами (bge-m3, multilingual-e5, jina-embeddings-v3).',why:'Українські документи і англійські питання до них зустрічаються лише з мультимовною моделлю.',
          links:[
            {t:'voyage-code-3: more accurate code retrieval with lower dimensional, quantized embeddings',u:'https://blog.voyageai.com/2024/12/04/voyage-code-3/',k:'article',y:2024,s:'Voyage AI'},
            {t:'nomic-ai/nomic-embed-code',u:'https://huggingface.co/nomic-ai/nomic-embed-code',k:'doc',s:'Hugging Face'},
            {t:'Jina Embeddings v3: A Frontier Multilingual Embedding Model',u:'https://jina.ai/news/jina-embeddings-v3-a-frontier-multilingual-embedding-model/',k:'article',y:2024,s:'Jina AI'},
            {t:'Multilingual Embed Models',u:'https://docs.cohere.com/docs/multilingual-language-models',k:'doc',s:'Cohere Docs'}
          ]},
        {label:'Локальні моделі: sentence-transformers',type:'optional',desc:'Бібліотека для запуску і донавчання відкритих embedding-моделей і cross-encoders на своєму залізі.',why:'Для прототипу і для чутливих даних це спосіб отримати embeddings без жодного зовнішнього API.',
          links:[
            {t:'SentenceTransformers Documentation',u:'https://sbert.net/',k:'doc',s:'Sentence Transformers'},
            {t:'Pretrained Models',u:'https://sbert.net/docs/sentence_transformer/pretrained_models.html',k:'doc',s:'Sentence Transformers'},
            {t:'Training and Finetuning Embedding Models with Sentence Transformers',u:'https://huggingface.co/blog/train-sentence-transformers',k:'article',y:2024,s:'Hugging Face',w:'донавчити модель на своїх парах питання-фрагмент'},
            {t:'FlagOpen/FlagEmbedding',u:'https://github.com/FlagOpen/FlagEmbedding',k:'github',s:'GitHub',w:'код і моделі BGE'}
          ]}
      ]},
    {label:'Векторне сховище',side:'left',desc:'Де лежать вектори і метадані фрагментів і як по них шукати найближчі: pgvector, Qdrant, Weaviate, Pinecone, Milvus, Chroma, LanceDB, Elasticsearch.',why:'Для першого RAG не потрібна окрема база: розширення до вже наявного Postgres вистачає.',
      links:[
        {t:'What is a Vector Database & How Does it Work?',u:'https://www.pinecone.io/learn/vector-database/',k:'article',s:'Pinecone'},
        {t:'What is a Vector Database?',u:'https://qdrant.tech/articles/what-is-a-vector-database/',k:'article',s:'Qdrant'},
        {t:'Vector Databases Are the Wrong Abstraction',u:'https://www.timescale.com/blog/vector-databases-are-the-wrong-abstraction',k:'article',y:2024,s:'Tiger Data',w:'аргумент за вектори у звичайній базі'},
        {t:'Vector databases',u:'https://cookbook.openai.com/examples/vector_databases/readme',k:'doc',s:'OpenAI Cookbook',w:'приклади з десятком різних сховищ'},
        {t:'Vector store integrations',u:'https://docs.langchain.com/oss/python/integrations/vectorstores',k:'doc',s:'LangChain Docs'},
        {t:'Vector Databases: from Embeddings to Applications',u:'https://www.deeplearning.ai/short-courses/vector-databases-embeddings-applications/',k:'course',s:'DeepLearning.AI'}
      ],
      children:[
        {label:'pgvector у Postgres',type:'alt',desc:'Розширення, що додає тип вектора, оператори відстані і індекси HNSW та IVFFlat до звичайної бази.',why:'Вектори лежать поруч із даними, транзакціями і правами доступу, які вже є.',
          links:[
            {t:'pgvector/pgvector',u:'https://github.com/pgvector/pgvector',k:'github',s:'GitHub'},
            {t:'AI & Vectors',u:'https://supabase.com/docs/guides/ai',k:'doc',s:'Supabase Docs',w:'найповніший практичний гайд по pgvector'},
            {t:'HNSW Indexes with Postgres and pgvector',u:'https://www.crunchydata.com/blog/hnsw-indexes-with-postgres-and-pgvector',k:'article',y:2023,s:'Crunchy Data'},
            {t:'pgvector 0.5.0 Feature Highlights and HOWTOs',u:'https://jkatz05.com/post/postgres/pgvector-overview-0.5.0/',k:'article',y:2023,s:'Jonathan Katz'},
            {t:'pgvector vs Pinecone: cost and performance',u:'https://supabase.com/blog/pgvector-vs-pinecone',k:'article',y:2024,s:'Supabase'}
          ]},
        {label:'Вектори у звичайних базах: Redis, MongoDB',type:'alt',desc:'Векторний індекс як функція бази, що вже є в продукті: Redis з Query Engine і RedisVL, MongoDB Atlas Vector Search.',why:'Та сама логіка, що з pgvector: не додавати нову систему, якщо наявна вже вміє шукати вектори.',
          links:[
            {t:'Redis for AI',u:'https://redis.io/docs/latest/develop/ai/',k:'doc',s:'Redis Docs'},
            {t:'Atlas Vector Search Overview',u:'https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-overview/',k:'doc',s:'MongoDB Docs'}
          ],
          children:[
            {label:'Redis',type:'alt',desc:'Векторний пошук (HNSW, FLAT) і фільтри у Redis Query Engine; RedisVL дає Python-клієнт і semantic cache.',why:'Якщо Redis уже є для кешу і сесій, вектори і semantic cache живуть поруч із ним.',
              links:[
                {t:'Vector search',u:'https://redis.io/docs/latest/develop/ai/search-and-query/vectors/',k:'doc',s:'Redis Docs'},
                {t:'redis/redis-vl-python',u:'https://github.com/redis/redis-vl-python',k:'github',s:'GitHub'}
              ]},
            {label:'MongoDB Atlas Vector Search',type:'alt',desc:'Векторний індекс поверх колекцій MongoDB з фільтрами за полями документа і гібридним пошуком через Atlas Search.',why:'Для продуктів на MongoDB це RAG без нової бази і без синхронізації даних.',
              links:[
                {t:'Atlas Vector Search Overview',u:'https://www.mongodb.com/docs/atlas/atlas-vector-search/vector-search-overview/',k:'doc',s:'MongoDB Docs'}
              ]}
          ]},
        {label:'Векторні бази: open source',type:'alt',desc:'Окремі системи для векторного пошуку, які можна підняти у себе: Qdrant, Weaviate, Milvus, Chroma; LanceDB як вбудована база на форматі Lance.',why:'Мають сенс на десятках мільйонів векторів або коли потрібні функції, яких у Postgres немає.',
          links:[
            {t:'Vector Search Explained',u:'https://weaviate.io/blog/vector-search-explained',k:'article',s:'Weaviate'},
            {t:'Vector Search Benchmarks',u:'https://qdrant.tech/benchmarks/',k:'doc',s:'Qdrant',w:'порівняння швидкості і recall між базами'},
            {t:'LanceDB',u:'https://lancedb.com/docs',k:'doc',s:'LanceDB Docs',w:'вбудована база без окремого сервера'},
            {t:'lancedb/vectordb-recipes',u:'https://github.com/lancedb/vectordb-recipes',k:'github',s:'GitHub',w:'десятки прикладів RAG і мультимодального пошуку'}
          ],
          children:[
            {label:'Qdrant',type:'alt',desc:'Відкрита база на Rust з фільтрами всередині HNSW, sparse-векторами, квантизацією і multitenancy.',why:'Популярний вибір для self-hosted RAG з гібридним пошуком з коробки.',
              links:[
                {t:'Documentation',u:'https://qdrant.tech/documentation/',k:'doc',s:'Qdrant Docs'},
                {t:'qdrant/qdrant',u:'https://github.com/qdrant/qdrant',k:'github',s:'GitHub'},
                {t:'Hybrid Queries',u:'https://qdrant.tech/documentation/concepts/hybrid-queries/',k:'doc',s:'Qdrant Docs'}
              ]},
            {label:'Weaviate',type:'alt',desc:'Відкрита база з гібридним пошуком, модулями для векторизації і мультитенантністю.',why:'Сильна документація і блог: половина хороших статей про hybrid search звідти.',
              links:[
                {t:'Weaviate Database',u:'https://docs.weaviate.io/weaviate',k:'doc',s:'Weaviate Docs'},
                {t:'weaviate/weaviate',u:'https://github.com/weaviate/weaviate',k:'github',s:'GitHub'},
                {t:'Hybrid search',u:'https://docs.weaviate.io/weaviate/search/hybrid',k:'doc',s:'Weaviate Docs'}
              ]},
            {label:'Milvus',type:'alt',desc:'Cloud-native база для великих розгортань з шардингом, кількома типами індексів і гібридним multi-vector пошуком.',why:'Коли векторів мільярди і потрібен кластер, а не один процес.',
              links:[
                {t:'Milvus vector database documentation',u:'https://milvus.io/docs',k:'doc',s:'Milvus Docs'},
                {t:'milvus-io/milvus',u:'https://github.com/milvus-io/milvus',k:'github',s:'GitHub'}
              ]},
            {label:'Chroma',type:'alt',desc:'Проста база для Python з вбудованим режимом і сервером; відома дослідженням про нарізку.',why:'Найшвидший старт для прототипу: pip install і три рядки коду.',
              links:[
                {t:'Introduction',u:'https://docs.trychroma.com/docs/overview/introduction',k:'doc',s:'Chroma Docs'},
                {t:'chroma-core/chroma',u:'https://github.com/chroma-core/chroma',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Векторні бази: managed',type:'alt',desc:'Хмарні сервіси без власного сервера: Pinecone як найвідоміша векторна база, Turbopuffer як дешевий пошук поверх object storage.',why:'Коли не хочеться тримати ще одну базу самому, а обсяги великі.',
          links:[
            {t:'What is a Vector Database & How Does it Work?',u:'https://www.pinecone.io/learn/vector-database/',k:'article',s:'Pinecone'},
            {t:'Vector Databases in Production for Busy Engineers',u:'https://www.pinecone.io/learn/series/vector-databases-in-production-for-busy-engineers/',k:'course',s:'Pinecone'}
          ],
          children:[
            {label:'Pinecone',type:'alt',desc:'Serverless векторна база з namespaces, фільтрами, гібридним пошуком і вбудованим reranking.',why:'Еталон managed-підходу: нуль адміністрування, оплата за використання.',
              links:[
                {t:'Pinecone Database',u:'https://docs.pinecone.io/guides/get-started/overview',k:'doc',s:'Pinecone Docs'},
                {t:'pinecone-io/pinecone-python-client',u:'https://github.com/pinecone-io/pinecone-python-client',k:'github',s:'GitHub'}
              ]},
            {label:'Turbopuffer',type:'alt',desc:'Пошук по векторах і BM25 поверх object storage з кешем на SSD; використовують Cursor і Notion.',why:'На великих обсягах виходить у рази дешевше за бази в памʼяті.',
              links:[
                {t:'Introduction',u:'https://turbopuffer.com/docs',k:'doc',s:'turbopuffer Docs'},
                {t:'turbopuffer: fast search on object storage',u:'https://turbopuffer.com/blog/turbopuffer',k:'article',s:'turbopuffer'}
              ]}
          ]},
        {label:'Elasticsearch і OpenSearch з векторами',type:'alt',desc:'Пошукові рушії, які додали kNN-пошук до повнотекстового: один сервіс для BM25, векторів і гібридного ранжування.',why:'Якщо Elasticsearch уже стоїть у продукті, гібридний RAG можна зібрати на ньому без нової бази.',
          links:[
            {t:'Vector search in Elasticsearch',u:'https://www.elastic.co/docs/solutions/search/vector',k:'doc',s:'Elastic Docs'},
            {t:'kNN search in Elasticsearch',u:'https://www.elastic.co/guide/en/elasticsearch/reference/current/knn-search.html',k:'doc',s:'Elastic Docs'},
            {t:'Vector search',u:'https://opensearch.org/docs/latest/vector-search/',k:'doc',s:'OpenSearch Docs'},
            {t:'RAG and Generative AI - Azure AI Search',u:'https://learn.microsoft.com/en-us/azure/search/retrieval-augmented-generation-overview',k:'doc',s:'Microsoft Learn'}
          ]},
        {label:'Індекси HNSW, IVF і точність ANN',type:'optional',desc:'Структури для наближеного пошуку найближчих сусідів: швидше за повний перебір ціною невеликої втрати точності. Exact search гарантує найближчі результати, approximate може пропустити.',why:'До сотень тисяч векторів повний перебір часто швидший і точніший за індекс; падіння recall@k після додавання індексу це типова і непомітна без метрик поломка.',
          links:[
            {t:'Efficient and robust approximate nearest neighbor search using Hierarchical Navigable Small World graphs',u:'https://arxiv.org/abs/1603.09320',k:'article',y:2016,s:'arXiv'},
            {t:'Hierarchical Navigable Small Worlds (HNSW)',u:'https://www.pinecone.io/learn/series/faiss/hnsw/',k:'article',s:'Pinecone'},
            {t:'Nearest Neighbor Indexes for Similarity Search',u:'https://www.pinecone.io/learn/series/faiss/vector-indexes/',k:'article',s:'Pinecone',w:'Flat, IVF, HNSW, PQ в одному порівнянні'},
            {t:'HNSW indexes',u:'https://supabase.com/docs/guides/ai/vector-indexes/hnsw-indexes',k:'doc',s:'Supabase Docs',w:'параметри m і ef_construction на практиці'},
            {t:'Measuring ANN Recall',u:'https://qdrant.tech/documentation/tutorials-search-engineering/ann-recall/',k:'doc',s:'Qdrant Docs',w:'як порахувати, скільки губить індекс проти exact search'},
            {t:'ANN-Benchmarks',u:'https://ann-benchmarks.com/',k:'doc',s:'ANN-Benchmarks',w:'recall проти швидкості для всіх бібліотек'},
            {t:'facebookresearch/faiss',u:'https://github.com/facebookresearch/faiss',k:'github',s:'GitHub'}
          ]},
        {label:'Фільтрація за метаданими',desc:'Пошук лише серед фрагментів з потрібним джерелом, датою, мовою або правами користувача.',why:'Фільтр до пошуку дає і точність, і безпеку: користувач не побачить чужих документів.',
          links:[
            {t:'The Missing WHERE Clause in Vector Search',u:'https://www.pinecone.io/learn/vector-search-filtering/',k:'article',s:'Pinecone',w:'pre-, post- і in-filtering і чому це складно'},
            {t:'Filtering',u:'https://qdrant.tech/documentation/concepts/filtering/',k:'doc',s:'Qdrant Docs'},
            {t:'Filterable HNSW Without Recall Loss',u:'https://qdrant.tech/articles/filterable-hnsw/',k:'article',s:'Qdrant'},
            {t:'Filtering in Vector Search: When to Use What',u:'https://qdrant.tech/articles/vector-search-filtering/',k:'article',s:'Qdrant'},
            {t:'Filtering',u:'https://docs.weaviate.io/weaviate/concepts/filtering',k:'doc',s:'Weaviate Docs'}
          ]}
      ]},
    {label:'Пошук: за межами одного вектора',side:'right',desc:'Прийоми, які покращують retrieval: лексичний пошук поруч із семантичним, переранжування, контекст у фрагментах, переформулювання запиту.',why:'Голий векторний пошук пропускає точні терміни, артикули і назви; саме тут більшість зросту якості.',
      links:[
        {t:'Hybrid Search Explained',u:'https://weaviate.io/blog/hybrid-search-explained',k:'article',s:'Weaviate'},
        {t:'Rerankers and Two-Stage Retrieval',u:'https://www.pinecone.io/learn/series/rag/rerankers/',k:'article',s:'Pinecone'},
        {t:'Contextual retrieval in AI systems',u:'https://www.anthropic.com/engineering/contextual-retrieval',k:'article',y:2024,s:'Anthropic',w:'contextual embeddings + BM25 + reranking: мінус 67% промахів'},
        {t:'Systematically Improving Your RAG',u:'https://jxnl.co/writing/2024/05/22/systematically-improving-your-rag/',k:'article',y:2024,s:'Jason Liu'},
        {t:'Advanced Retrieval for AI with Chroma',u:'https://www.deeplearning.ai/short-courses/advanced-retrieval-for-ai/',k:'course',s:'DeepLearning.AI'},
        {t:'Retriever',u:'https://developers.llamaindex.ai/python/framework/module_guides/querying/retriever/',k:'doc',s:'LlamaIndex Docs'}
      ],
      children:[
        {label:'Hybrid search: BM25 плюс вектори',desc:'Лексичний пошук за ключовими словами (BM25) і семантичний за векторами працюють разом; результати обʼєднуються.',why:'Код помилки або назва функції знаходяться лексично; переформульоване питання семантично.',
          links:[
            {t:'Hybrid Search Explained',u:'https://weaviate.io/blog/hybrid-search-explained',k:'article',s:'Weaviate'},
            {t:'Hybrid Search in Qdrant',u:'https://qdrant.tech/articles/hybrid-search/',k:'article',s:'Qdrant'},
            {t:'Hybrid search overview',u:'https://docs.pinecone.io/guides/search/hybrid-search',k:'doc',s:'Pinecone Docs'},
            {t:'Hybrid search',u:'https://www.elastic.co/docs/solutions/search/hybrid-search',k:'doc',s:'Elastic Docs'},
            {t:'Hybrid search',u:'https://supabase.com/docs/guides/ai/hybrid-search',k:'doc',s:'Supabase Docs',w:'tsvector + pgvector + RRF в одному SQL'}
          ],
          children:[
            {label:'BM25: rank_bm25, bm25s',desc:'Класична формула лексичного ранжування за частотою термінів і довжиною документа; у Python це rank_bm25 або швидший bm25s.',why:'Дешева половина гібридного пошуку, яка ловить точні збіги, що губить вектор.',
              links:[
                {t:'Practical BM25 - Part 2: The BM25 Algorithm and its Variables',u:'https://www.elastic.co/blog/practical-bm25-part-2-the-bm25-algorithm-and-its-variables',k:'article',s:'Elastic'},
                {t:'xhluca/bm25s',u:'https://github.com/xhluca/bm25s',k:'github',s:'GitHub',w:'у сотні разів швидше за rank_bm25'},
                {t:'dorianbrown/rank_bm25',u:'https://github.com/dorianbrown/rank_bm25',k:'github',s:'GitHub'},
                {t:'Okapi BM25',u:'https://en.wikipedia.org/wiki/Okapi_BM25',k:'article',s:'Wikipedia'}
              ]},
            {label:'SPLADE і learned sparse',desc:'Нейронні sparse-вектори: модель вчиться вагам термінів і розширює запит синонімами, зберігаючи інвертований індекс.',why:'Середина між BM25 і dense-векторами: пояснювана, швидка і без проблеми з рідкими термінами.',
              links:[
                {t:'SPLADE for Sparse Vector Search Explained',u:'https://www.pinecone.io/learn/splade/',k:'article',s:'Pinecone'},
                {t:'Understanding SPLADE and Sparse Vectors',u:'https://qdrant.tech/articles/sparse-vectors/',k:'article',s:'Qdrant'},
                {t:'SPLADE v2: Sparse Lexical and Expansion Model for Information Retrieval',u:'https://arxiv.org/abs/2109.10086',k:'article',y:2021,s:'arXiv'},
                {t:'naver/splade',u:'https://github.com/naver/splade',k:'github',s:'GitHub'}
              ]},
            {label:'Reciprocal rank fusion (RRF)',desc:'Спосіб злити два списки результатів за позиціями без калібрування оцінок.',why:'Оцінки BM25 і косинус живуть у різних шкалах; RRF дозволяє не підбирати ваги руками.',
              links:[
                {t:'Reciprocal Rank Fusion outperforms Condorcet and individual Rank Learning Methods',u:'https://plg.uwaterloo.ca/~gvcormac/cormacksigir09-rrf.pdf',k:'article',y:2009,s:'Cormack et al.',w:'оригінальна стаття на дві сторінки'},
                {t:'Reciprocal rank fusion',u:'https://www.elastic.co/guide/en/elasticsearch/reference/current/rrf.html',k:'doc',s:'Elastic Docs'},
                {t:'Unlocking the Power of Hybrid Search - A Deep Dive into Weaviate’s Fusion Algorithms',u:'https://weaviate.io/blog/hybrid-search-fusion-algorithms',k:'article',s:'Weaviate'}
              ]},
            {label:'Повнотекстовий пошук у Postgres',type:'optional',desc:'tsvector і ранжування як лексична половина гібридного пошуку без окремого сервісу; ParadeDB додає BM25 як розширення.',why:'Якщо вектори вже в Postgres, BM25 поруч із ними прибирає потребу в Elasticsearch.',
              links:[
                {t:'Chapter 12. Full Text Search',u:'https://www.postgresql.org/docs/current/textsearch.html',k:'doc',s:'PostgreSQL Docs'},
                {t:'paradedb/paradedb',u:'https://github.com/paradedb/paradedb',k:'github',s:'GitHub',w:'справжній BM25 у Postgres через pg_search'},
                {t:'Hybrid search',u:'https://supabase.com/docs/guides/ai/hybrid-search',k:'doc',s:'Supabase Docs'}
              ]}
          ]},
        {label:'Reranking',desc:'Перші кілька десятків результатів переранжовує окрема модель (cross-encoder), яка бачить питання і фрагмент разом: Cohere Rerank, Voyage rerank, відкриті cross-encoders, ColBERT.',why:'Дешевий пошук дає кандидатів, дорогий reranker обирає найкращих: точність зростає без дорогого пошуку по всьому.',
          links:[
            {t:'Rerankers and Two-Stage Retrieval',u:'https://www.pinecone.io/learn/series/rag/rerankers/',k:'article',s:'Pinecone'},
            {t:'Using Cross-Encoders as reranker in multistage vector search',u:'https://weaviate.io/blog/cross-encoders-as-reranker',k:'article',s:'Weaviate'},
            {t:'Search reranking with cross-encoders',u:'https://cookbook.openai.com/examples/search_reranking_with_cross-encoders',k:'doc',s:'OpenAI Cookbook'},
            {t:'The Case Against LLMs as Rerankers',u:'https://www.mongodb.com/company/blog/technical/case-against-llms-as-rerankers',k:'article',y:2025,s:'MongoDB',w:'чому окремий reranker кращий за «попроси модель відсортувати»'},
            {t:'Rerank results',u:'https://docs.pinecone.io/guides/search/rerank-results',k:'doc',s:'Pinecone Docs'}
          ],
          children:[
            {label:'Cohere Rerank',desc:'Комерційний reranker через API: один виклик з питанням і кандидатами повертає відсортований список з оцінками.',why:'Найшвидший спосіб перевірити, скільки якості дає reranking, до того як обирати відкриту модель.',
              links:[
                {t:'Cohere Rerank',u:'https://docs.cohere.com/docs/rerank',k:'doc',s:'Cohere Docs'},
                {t:'An Overview of Cohere’s Rerank Model',u:'https://docs.cohere.com/docs/rerank-overview',k:'doc',s:'Cohere Docs'},
                {t:'Introducing Rerank 3.5: Precise AI Search',u:'https://cohere.com/blog/rerank-3pt5',k:'article',y:2024,s:'Cohere'}
              ]},
            {label:'Voyage rerank, Jina Reranker',desc:'Альтернативні API-rerankers: rerank-2.5 від Voyage з інструкціями, Jina Reranker з мультимовністю і кодом.',why:'Різні моделі по-різному поводяться на ваших даних і мовах; варто порівняти дві-три.',
              links:[
                {t:'Rerankers',u:'https://docs.voyageai.com/docs/reranker',k:'doc',s:'Voyage AI Docs'},
                {t:'rerank-2.5 and rerank-2.5-lite: instruction-following rerankers',u:'https://blog.voyageai.com/2025/08/11/rerank-2-5/',k:'article',y:2025,s:'Voyage AI'},
                {t:'Reranker API',u:'https://jina.ai/reranker/',k:'doc',s:'Jina AI'},
                {t:'Jina Reranker v2 for Agentic RAG',u:'https://jina.ai/news/jina-reranker-v2-for-agentic-rag-ultra-fast-multilingual-function-calling-and-code-search/',k:'article',y:2024,s:'Jina AI'}
              ]},
            {label:'Відкриті cross-encoders',desc:'Відкриті моделі, що оцінюють пару «питання, фрагмент» одним проходом: ms-marco-MiniLM, bge-reranker-v2-m3, mxbai-rerank; бібліотека rerankers дає один інтерфейс.',why:'Локальний reranker без API: безкоштовно, і дані не виходять за межі сервера.',
              links:[
                {t:'Retrieve & Re-Rank',u:'https://www.sbert.net/examples/applications/retrieve_rerank/README.html',k:'doc',s:'Sentence Transformers'},
                {t:'BAAI/bge-reranker-v2-m3',u:'https://huggingface.co/BAAI/bge-reranker-v2-m3',k:'doc',s:'Hugging Face',w:'мультимовний, працює з українською'},
                {t:'mixedbread-ai/mxbai-rerank-large-v2',u:'https://huggingface.co/mixedbread-ai/mxbai-rerank-large-v2',k:'doc',s:'Hugging Face'},
                {t:'AnswerDotAI/rerankers',u:'https://github.com/AnswerDotAI/rerankers',k:'github',s:'GitHub',w:'один API до всіх rerankers: API і локальних'}
              ]},
            {label:'ColBERT і late interaction',desc:'Замість одного вектора на фрагмент зберігається вектор на кожен токен, а схожість рахується як сума найкращих збігів токенів (MaxSim).',why:'Точність близька до cross-encoder при швидкості, близькій до векторного пошуку; ціна: індекс у десятки разів більший.',
              links:[
                {t:'ColBERT: Efficient and Effective Passage Search via Contextualized Late Interaction over BERT',u:'https://arxiv.org/abs/2004.12832',k:'article',y:2020,s:'arXiv'},
                {t:'What is ColBERT and Late Interaction and Why They Matter in Search?',u:'https://jina.ai/news/what-is-colbert-and-late-interaction-and-why-they-matter-in-search/',k:'article',y:2024,s:'Jina AI'},
                {t:'An Overview of Late Interaction Retrieval Models: ColBERT, ColPali, and ColQwen',u:'https://weaviate.io/blog/late-interaction-overview',k:'article',s:'Weaviate'},
                {t:'stanford-futuredata/ColBERT',u:'https://github.com/stanford-futuredata/ColBERT',k:'github',s:'GitHub'},
                {t:'lightonai/pylate',u:'https://github.com/lightonai/pylate',k:'github',s:'GitHub',w:'навчання і пошук late-interaction моделей поверх sentence-transformers'}
              ]}
          ]},
        {label:'Contextual retrieval',desc:'Перед індексацією до кожного фрагмента модель дописує короткий контекст: про що документ і де в ньому цей шматок. Потім contextual embeddings і contextual BM25 обʼєднуються і проходять reranking.',why:'Фрагмент перестає бути вирваним із контексту, і пошук знаходить його частіше; за даними Anthropic помилок retrieval меншає на 49-67%.',
          links:[
            {t:'Contextual retrieval in AI systems',u:'https://www.anthropic.com/engineering/contextual-retrieval',k:'article',y:2024,s:'Anthropic'},
            {t:'Enhancing RAG with contextual retrieval',u:'https://platform.claude.com/cookbook/capabilities-contextual-embeddings-guide',k:'doc',s:'Claude Cookbook',w:'ноутбук з кодом і цифрами на кожен крок'},
            {t:'Prompt caching',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',k:'doc',s:'Anthropic Docs',w:'робить дописування контексту до кожного фрагмента дешевим'}
          ]},
        {label:'Query transformations: HyDE, multi-query',desc:'Модель переформульовує питання, розбиває на кілька (multi-query, decomposition), узагальнює (step-back) або генерує гіпотетичну відповідь, за якою шукають (HyDE).',why:'Коротке або неточне питання користувача рідко збігається з тим, як написано в документах.',
          links:[
            {t:'Query Transformations',u:'https://blog.langchain.com/query-transformations/',k:'article',y:2023,s:'LangChain'},
            {t:'Query Transformations',u:'https://developers.llamaindex.ai/python/framework/optimizing/advanced_retrieval/query_transformations/',k:'doc',s:'LlamaIndex Docs'},
            {t:'Precise Zero-Shot Dense Retrieval without Relevance Labels',u:'https://arxiv.org/abs/2212.10496',k:'article',y:2022,s:'arXiv',w:'стаття про HyDE'},
            {t:'Take a Step Back: Evoking Reasoning via Abstraction in Large Language Models',u:'https://arxiv.org/abs/2310.06117',k:'article',y:2023,s:'arXiv'},
            {t:'RAG-Fusion: a New Take on Retrieval-Augmented Generation',u:'https://arxiv.org/abs/2402.03367',k:'article',y:2024,s:'arXiv',w:'кілька переформулювань плюс RRF'}
          ]},
        {label:'Small-to-big: parent document retrieval',desc:'Шукаємо за малими фрагментами, а в промпт віддаємо більший батьківський шматок або сусідні фрагменти (sentence window).',why:'Розвʼязує компроміс розміру: точність пошуку від малого фрагмента, контекст для моделі від великого.',
          links:[
            {t:'Recursive Retriever + Node References',u:'https://developers.llamaindex.ai/python/examples/retrievers/recursive_retriever_nodes/',k:'doc',s:'LlamaIndex Docs'},
            {t:'Multi-Vector Retriever for RAG on tables, text, and images',u:'https://blog.langchain.com/semi-structured-multi-modal-rag/',k:'article',y:2023,s:'LangChain'},
            {t:'Retriever integrations',u:'https://docs.langchain.com/oss/python/integrations/retrievers',k:'doc',s:'LangChain Docs'},
            {t:'Building and Evaluating Advanced RAG',u:'https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/',k:'course',s:'DeepLearning.AI',w:'sentence window і auto-merging retrieval на практиці'}
          ]},
        {label:'Скільки фрагментів брати: вибір k',desc:'Кількість результатів, що йдуть у промпт; більше k дає більше шансів знайти, але більше шуму і токенів. Для дуже довгого контексту є стиснення (LLMLingua).',why:'k це компроміс між recall, ціною і тим, чи модель узагалі помітить потрібний фрагмент серед десяти.',
          links:[
            {t:'Building Performant RAG Applications for Production',u:'https://developers.llamaindex.ai/python/framework/optimizing/production_rag/',k:'doc',s:'LlamaIndex Docs'},
            {t:'Long Context RAG Performance of LLMs',u:'https://www.databricks.com/blog/long-context-rag-performance-llms',k:'article',y:2024,s:'Databricks',w:'як якість змінюється від 2k до 2M токенів контексту'},
            {t:'microsoft/LLMLingua',u:'https://github.com/microsoft/LLMLingua',k:'github',s:'GitHub',w:'стискає знайдені фрагменти перед промптом'}
          ]}
      ]},
    {label:'Генерація відповіді',side:'left',desc:'Збирання промпту зі знайдених фрагментів і питання; інструкції моделі, як на них спиратись, цитувати і відмовлятись, коли відповіді немає.',why:'Навіть з ідеальним пошуком модель може проігнорувати фрагменти або вигадати те, чого в них немає.',
      links:[
        {t:'Retrieval augmented generation',u:'https://platform.claude.com/cookbook/capabilities-retrieval-augmented-generation-guide',k:'doc',s:'Claude Cookbook'},
        {t:'Citations',u:'https://platform.claude.com/docs/en/build-with-claude/citations',k:'doc',s:'Anthropic Docs'},
        {t:'Search results',u:'https://platform.claude.com/docs/en/build-with-claude/search-results',k:'doc',s:'Anthropic Docs',w:'блоки search_result для фрагментів з RAG з цитуванням'},
        {t:'Lost in the Middle: How Language Models Use Long Contexts',u:'https://arxiv.org/abs/2307.03172',k:'article',y:2023,s:'arXiv'},
        {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic'}
      ],
      children:[
        {label:'Збирання промпту з контекстом',desc:'Фрагменти позначаються межами і джерелами, питання йде окремо, інструкції кажуть відповідати лише на основі наданого.',why:'Чітка структура промпту відділяє дані від інструкцій і зменшує шанс prompt injection через документи.',
          links:[
            {t:'Retrieval augmented generation',u:'https://platform.claude.com/cookbook/capabilities-retrieval-augmented-generation-guide',k:'doc',s:'Claude Cookbook'},
            {t:'Search results',u:'https://platform.claude.com/docs/en/build-with-claude/search-results',k:'doc',s:'Anthropic Docs'},
            {t:'Question answering using embeddings-based search',u:'https://cookbook.openai.com/examples/question_answering_using_embeddings',k:'doc',s:'OpenAI Cookbook'},
            {t:'Effective context engineering for AI agents',u:'https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents',k:'article',y:2025,s:'Anthropic'}
          ]},
        {label:'Цитування джерел',desc:'Модель посилається на конкретні фрагменти, а відповідь показує, звідки взято кожне твердження.',why:'Користувач може перевірити відповідь, а ви за цитатами бачите, чи пошук дав потрібне.',
          links:[
            {t:'Citations',u:'https://platform.claude.com/docs/en/build-with-claude/citations',k:'doc',s:'Anthropic Docs',w:'цитати з точними позиціями у документі на рівні API'},
            {t:'Search results',u:'https://platform.claude.com/docs/en/build-with-claude/search-results',k:'doc',s:'Anthropic Docs'},
            {t:'File search',u:'https://developers.openai.com/api/docs/guides/tools-file-search',k:'doc',s:'OpenAI Docs',w:'анотації з посиланням на файл у відповіді'}
          ]},
        {label:'Коли відповіді немає в документах',desc:'Інструкція і перевірка на випадок, коли знайдені фрагменти не містять відповіді: сказати про це, а не вигадувати.',why:'Найдорожча помилка RAG це впевнена відповідь на основі нерелевантних шматків.',
          links:[
            {t:'Hallucination',u:'https://deepeval.com/docs/metrics-hallucination',k:'doc',s:'DeepEval Docs'},
            {t:'Evaluation & Hallucination Detection for Abstractive Summaries',u:'https://eugeneyan.com/writing/abstractive/',k:'article',y:2023,s:'Eugene Yan'},
            {t:'Corrective Retrieval Augmented Generation',u:'https://arxiv.org/abs/2401.15884',k:'article',y:2024,s:'arXiv',w:'оцінювач перевіряє знайдене до генерації'},
            {t:'Self-RAG: Learning to Retrieve, Generate, and Critique through Self-Reflection',u:'https://arxiv.org/abs/2310.11511',k:'article',y:2023,s:'arXiv'}
          ]},
        {label:'Порядок фрагментів у промпті',desc:'Найрелевантніші фрагменти ставлять на початку або в кінці контексту, не посередині.',why:'Моделі гірше використовують інформацію з середини довгого контексту (lost in the middle).',
          links:[
            {t:'Lost in the Middle: How Language Models Use Long Contexts',u:'https://arxiv.org/abs/2307.03172',k:'article',y:2023,s:'arXiv'},
            {t:'NoLiMa: Long-Context Evaluation Beyond Literal Matching',u:'https://arxiv.org/abs/2502.05167',k:'article',y:2025,s:'arXiv',w:'якість падає вже на 32k, якщо нема дослівного збігу'},
            {t:'Long Context RAG Performance of LLMs',u:'https://www.databricks.com/blog/long-context-rag-performance-llms',k:'article',y:2024,s:'Databricks'}
          ]},
        {label:'Prompt injection через документи',desc:'Проіндексований документ може містити інструкції для моделі («ігноруй попереднє і…»); у RAG вони потрапляють у промпт разом із даними.',why:'RAG робить непрямий prompt injection реальним: атакуючому досить покласти файл туди, звідки ви індексуєте.',
          links:[
            {t:'LLM01:2025 Prompt Injection',u:'https://genai.owasp.org/llmrisk/llm01-prompt-injection/',k:'doc',y:2025,s:'OWASP'},
            {t:'Prompt injection',u:'https://simonwillison.net/series/prompt-injection/',k:'article',s:'Simon Willison',w:'серія постів від людини, яка назвала проблему'},
            {t:'Prompt injection: What’s the worst that can happen?',u:'https://simonwillison.net/2023/Apr/14/worst-that-can-happen/',k:'article',y:2023,s:'Simon Willison'},
            {t:'Not what you’ve signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection',u:'https://arxiv.org/abs/2302.12173',k:'article',y:2023,s:'arXiv'}
          ]},
        {label:'Structured output з відповіддю і цитатами',type:'optional',desc:'Відповідь приходить за схемою: текст, список використаних фрагментів, ознака «відповіді немає».',why:'Структурована відповідь дає поля, за якими evals перевіряють faithfulness автоматично.',
          links:[
            {t:'Structured outputs',u:'https://platform.claude.com/docs/en/build-with-claude/structured-outputs',k:'doc',s:'Anthropic Docs'},
            {t:'Structured model outputs',u:'https://developers.openai.com/api/docs/guides/structured-outputs',k:'doc',s:'OpenAI Docs'},
            {t:'Instructor',u:'https://python.useinstructor.com/',k:'doc',s:'Instructor',w:'Pydantic-схеми для відповіді з цитатами'}
          ]}
      ]},
    {label:'Метрики пошуку',side:'right',desc:'Якість retrieval міряється окремо від генерації на наборі питань з відомими релевантними фрагментами: recall@k, precision@k, MRR, nDCG.',why:'Ознака зрілості: на вашому RAG є recall@k для пошуку, і по цифрах видно, чи винен пошук.',
      links:[
        {t:'Evaluation Measures in Information Retrieval',u:'https://www.pinecone.io/learn/offline-evaluation/',k:'article',s:'Pinecone',w:'recall@k, MRR, MAP, nDCG з прикладами'},
        {t:'Evaluation Metrics for Search and Recommendation Systems',u:'https://weaviate.io/blog/retrieval-evaluation-metrics',k:'article',s:'Weaviate'},
        {t:'Evaluation measures (information retrieval)',u:'https://en.wikipedia.org/wiki/Evaluation_measures_(information_retrieval)',k:'article',s:'Wikipedia'},
        {t:'Systematically Improving Your RAG',u:'https://jxnl.co/writing/2024/05/22/systematically-improving-your-rag/',k:'article',y:2024,s:'Jason Liu',w:'чому починати з метрик пошуку, а не генерації'},
        {t:'Evaluating',u:'https://developers.llamaindex.ai/python/framework/module_guides/evaluating/',k:'doc',s:'LlamaIndex Docs'}
      ],
      children:[
        {label:'recall@k',desc:'Яка частка потрібних фрагментів потрапила в перші k результатів. recall@5 = 0,75 означає: з чотирьох потрібних документів у топ-5 потрапили три.',why:'Головна метрика пошуку: фрагмент, якого немає в топ-k, модель не побачить узагалі.',
          links:[
            {t:'Evaluation Measures in Information Retrieval',u:'https://www.pinecone.io/learn/offline-evaluation/',k:'article',s:'Pinecone'},
            {t:'Context Recall',u:'https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/context_recall/',k:'doc',s:'Ragas Docs'},
            {t:'Contextual Recall',u:'https://deepeval.com/docs/metrics-contextual-recall',k:'doc',s:'DeepEval Docs'},
            {t:'Measuring ANN Recall',u:'https://qdrant.tech/documentation/tutorials-search-engineering/ann-recall/',k:'doc',s:'Qdrant Docs'}
          ]},
        {label:'precision@k, MRR і nDCG',desc:'Precision: яка частка з k результатів справді релевантна. MRR: наскільки високо стоїть перший релевантний. nDCG враховує позиції всіх релевантних.',why:'Високий recall при низькій precision означає, що модель читає багато шуму за ваші гроші.',
          links:[
            {t:'Mean reciprocal rank',u:'https://en.wikipedia.org/wiki/Mean_reciprocal_rank',k:'article',s:'Wikipedia'},
            {t:'Discounted cumulative gain',u:'https://en.wikipedia.org/wiki/Discounted_cumulative_gain',k:'article',s:'Wikipedia'},
            {t:'Context Precision',u:'https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/context_precision/',k:'doc',s:'Ragas Docs'},
            {t:'Contextual Precision',u:'https://deepeval.com/docs/metrics-contextual-precision',k:'doc',s:'DeepEval Docs'}
          ]},
        {label:'Набір питань з еталонними фрагментами',desc:'Для кожного тестового питання позначено, які фрагменти мали б знайтись; набір можна почати синтетично, згенерувавши питання з фрагментів моделлю.',why:'Без цього набору recall@k порахувати неможливо, і якість пошуку оцінюється на око.',
          links:[
            {t:'Testset Generation for RAG',u:'https://docs.ragas.io/en/stable/concepts/test_data_generation/rag/',k:'doc',s:'Ragas Docs'},
            {t:'Your AI Product Needs Evals',u:'https://hamel.dev/blog/posts/evals/',k:'article',y:2024,s:'Hamel Husain'},
            {t:'RAG Evaluation',u:'https://huggingface.co/learn/cookbook/rag_evaluation',k:'doc',s:'Hugging Face',w:'синтетичний набір питань плюс суддя, крок за кроком'},
            {t:'Low-Hanging Fruit for RAG Search',u:'https://jxnl.co/writing/2024/05/11/low-hanging-fruit-for-rag-search/',k:'article',y:2024,s:'Jason Liu'}
          ]},
        {label:'Порівняння налаштувань пошуку',desc:'Один набір питань, різні chunking, k, embeddings і reranker; метрики показують, що справді допомогло.',why:'Так рішення «додати reranker» ухвалюється за цифрою, а не за статтею.',
          links:[
            {t:'The RAG Playbook',u:'https://jxnl.co/writing/2024/08/19/rag-flywheel/',k:'article',y:2024,s:'Jason Liu'},
            {t:'Evaluating Chunking Strategies for Retrieval',u:'https://research.trychroma.com/evaluating-chunking',k:'article',y:2024,s:'Chroma',w:'приклад чесного порівняння за recall і precision'},
            {t:'Enhancing RAG with contextual retrieval',u:'https://platform.claude.com/cookbook/capabilities-contextual-embeddings-guide',k:'doc',s:'Claude Cookbook',w:'кожен крок додає цифру: базовий, контекст, BM25, reranking'},
            {t:'Evaluate RAG with LlamaIndex',u:'https://cookbook.openai.com/examples/evaluation/evaluate_rag_with_llamaindex',k:'doc',s:'OpenAI Cookbook'}
          ]},
        {label:'BEIR і публічні бенчмарки',desc:'BEIR, MS MARCO, MTEB retrieval: стандартні набори, на яких порівнюють моделі embeddings і rerankers.',why:'Пояснюють цифри в релізах моделей і дають точку відліку, але ваш домен усе одно треба міряти окремо.',
          links:[
            {t:'BEIR: A Heterogenous Benchmark for Zero-shot Evaluation of Information Retrieval Models',u:'https://arxiv.org/abs/2104.08663',k:'article',y:2021,s:'arXiv'},
            {t:'beir-cellar/beir',u:'https://github.com/beir-cellar/beir',k:'github',s:'GitHub'},
            {t:'MS MARCO',u:'https://microsoft.github.io/msmarco/',k:'doc',s:'Microsoft'},
            {t:'ir_datasets',u:'https://ir-datasets.com/',k:'doc',s:'ir_datasets',w:'каталог датасетів IR з однаковим інтерфейсом'},
            {t:'castorini/pyserini',u:'https://github.com/castorini/pyserini',k:'github',s:'GitHub',w:'відтворювані BM25 і dense baselines'}
          ]}
      ]},
    {label:'Метрики генерації',side:'left',desc:'Якість відповіді при вже знайдених фрагментах: чи правильна, чи спирається на контекст, чи повна. Фреймворки: Ragas, DeepEval, TruLens.',why:'Друга метрика зрілого RAG: частка правильних відповідей для генерації. Разом з recall@k видно, яка частина винна.',
      links:[
        {t:'An Overview on RAG Evaluation',u:'https://weaviate.io/blog/rag-evaluation',k:'article',y:2023,s:'Weaviate'},
        {t:'A complete guide to RAG evaluation: metrics, testing and best practices',u:'https://www.evidentlyai.com/llm-guide/rag-evaluation',k:'article',s:'Evidently AI'},
        {t:'RAG Evaluation: Don’t let customers tell you first',u:'https://www.pinecone.io/learn/series/rag/rag-evaluation/',k:'article',s:'Pinecone'},
        {t:'RAG Evaluation',u:'https://huggingface.co/learn/cookbook/rag_evaluation',k:'doc',s:'Hugging Face'},
        {t:'Task-Specific LLM Evals that Do & Don’t Work',u:'https://eugeneyan.com/writing/evals/',k:'article',y:2024,s:'Eugene Yan'},
        {t:'Evaluating RAG pipelines',u:'https://www.promptfoo.dev/docs/guides/evaluate-rag/',k:'doc',s:'Promptfoo Docs'}
      ],
      children:[
        {label:'Faithfulness, або groundedness',desc:'Чи кожне твердження у відповіді підтверджується наданими фрагментами, а не вигадане.',why:'Це метрика галюцинацій саме у вашому RAG, на ваших даних.',
          links:[
            {t:'Faithfulness',u:'https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/faithfulness/',k:'doc',s:'Ragas Docs'},
            {t:'Faithfulness',u:'https://deepeval.com/docs/metrics-faithfulness',k:'doc',s:'DeepEval Docs'},
            {t:'RAG Triad',u:'https://www.trulens.org/getting_started/core_concepts/rag_triad/',k:'doc',s:'TruLens',w:'groundedness як одна з трьох сторін тріади'},
            {t:'Evaluation & Hallucination Detection for Abstractive Summaries',u:'https://eugeneyan.com/writing/abstractive/',k:'article',y:2023,s:'Eugene Yan'}
          ]},
        {label:'Correctness: частка правильних відповідей',desc:'Порівняння відповіді з еталонною: точне співпадіння для фактів, оцінка суддею для вільного тексту.',why:'Відповідь може бути вірною документам, але не відповідати на питання; це ловить correctness.',
          links:[
            {t:'Answer correctness',u:'https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/answer_correctness/',k:'doc',s:'Ragas Docs'},
            {t:'Response Relevancy',u:'https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/answer_relevance/',k:'doc',s:'Ragas Docs'},
            {t:'Answer Relevancy',u:'https://deepeval.com/docs/metrics-answer-relevancy',k:'doc',s:'DeepEval Docs'},
            {t:'Your AI Product Needs Evals',u:'https://hamel.dev/blog/posts/evals/',k:'article',y:2024,s:'Hamel Husain'}
          ]},
        {label:'Релевантність контексту',type:'optional',desc:'Яка частка переданих у промпт фрагментів справді стосувалась питання.',why:'Показує, скільки токенів іде на шум, і підказує, чи не завеликий k.',
          links:[
            {t:'RAG Triad',u:'https://www.trulens.org/getting_started/core_concepts/rag_triad/',k:'doc',s:'TruLens'},
            {t:'Context Precision',u:'https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/context_precision/',k:'doc',s:'Ragas Docs'},
            {t:'Contextual Precision',u:'https://deepeval.com/docs/metrics-contextual-precision',k:'doc',s:'DeepEval Docs'}
          ]},
        {label:'LLM-as-judge для RAG',desc:'Інша модель за чіткою інструкцією оцінює faithfulness і correctness; саму її перевіряють на ручній розмітці.',why:'Ручна перевірка сотні відповідей після кожної зміни неможлива; суддя робить це за хвилини.',
          links:[
            {t:'Using LLM-as-a-Judge For Evaluation: A Complete Guide',u:'https://hamel.dev/blog/posts/llm-judge/',k:'article',y:2024,s:'Hamel Husain'},
            {t:'Evaluating the Effectiveness of LLM-Evaluators (aka LLM-as-Judge)',u:'https://eugeneyan.com/writing/llm-evaluators/',k:'article',y:2024,s:'Eugene Yan'},
            {t:'Ragas: Automated Evaluation of Retrieval Augmented Generation',u:'https://arxiv.org/abs/2309.15217',k:'article',y:2023,s:'arXiv'},
            {t:'RAG Evaluation',u:'https://huggingface.co/learn/cookbook/rag_evaluation',k:'doc',s:'Hugging Face'}
          ]},
        {label:'Фреймворки: Ragas, DeepEval, TruLens',desc:'Готові бібліотеки з метриками для RAG: faithfulness, context precision і recall, answer relevancy, RAG triad; інтегруються з LlamaIndex і LangChain.',why:'Метрики вже реалізовані і перевірені; залишається зібрати набір питань і запускати після кожної зміни.',
          links:[
            {t:'List of available metrics',u:'https://docs.ragas.io/en/stable/concepts/metrics/available_metrics/',k:'doc',s:'Ragas Docs'},
            {t:'RAG Evaluation',u:'https://deepeval.com/guides/guides-rag-evaluation',k:'doc',s:'DeepEval Docs'},
            {t:'A complete guide to RAG evaluation: metrics, testing and best practices',u:'https://www.evidentlyai.com/llm-guide/rag-evaluation',k:'article',s:'Evidently AI'},
            {t:'Evaluating RAG pipelines',u:'https://www.promptfoo.dev/docs/guides/evaluate-rag/',k:'doc',s:'Promptfoo Docs'}
          ],
          children:[
            {label:'Ragas',desc:'Бібліотека метрик для RAG з генерацією тестових наборів і суддею на базі моделі.',why:'Найпоширеніший стандарт: коли кажуть «faithfulness 0.8», зазвичай мають на увазі Ragas.',
              links:[
                {t:'Ragas',u:'https://docs.ragas.io/en/stable/',k:'doc',s:'Ragas Docs'},
                {t:'Evaluate a simple RAG system',u:'https://docs.ragas.io/en/stable/getstarted/rag_eval/',k:'doc',s:'Ragas Docs'},
                {t:'explodinggradients/ragas',u:'https://github.com/explodinggradients/ragas',k:'github',s:'GitHub'}
              ]},
            {label:'DeepEval',desc:'Фреймворк evals у стилі pytest: метрики RAG як асерти в тестах, запуск у CI.',why:'Зручно, коли evals мають жити поруч із юніт-тестами і падати у пайплайні.',
              links:[
                {t:'confident-ai/deepeval',u:'https://github.com/confident-ai/deepeval',k:'github',s:'GitHub'},
                {t:'RAG Evaluation',u:'https://deepeval.com/guides/guides-rag-evaluation',k:'doc',s:'DeepEval Docs'},
                {t:'DeepEval Integration',u:'https://docs.weaviate.io/integrations/operations/deepeval',k:'doc',s:'Weaviate Docs'}
              ]},
            {label:'TruLens, Arize Phoenix',desc:'TruLens із RAG triad (context relevance, groundedness, answer relevance) і Phoenix з трейсингом і evals у одному відкритому інструменті.',why:'Поєднують трейсинг і оцінку: видно і метрику, і сам запуск, на якому вона впала.',
              links:[
                {t:'TruLens: Evals and Tracing for AI Agents',u:'https://www.trulens.org/',k:'doc',s:'TruLens'},
                {t:'TruLens Quickstart',u:'https://www.trulens.org/getting_started/quickstarts/quickstart/',k:'doc',s:'TruLens'},
                {t:'Arize-ai/phoenix',u:'https://github.com/Arize-ai/phoenix',k:'github',s:'GitHub'}
              ]}
          ]},
        {label:'Ручний error analysis',desc:'Перегляд десятків реальних відповідей руками, класифікація помилок (пошук, нарізка, генерація, дані) і лише потім автоматизація через суддю.',why:'Автоматичні метрики кажуть «0.7», а причину показує лише читання самих помилок; це найдешевший спосіб знайти, що лагодити.',
          links:[
            {t:'A Field Guide to Rapidly Improving AI Products',u:'https://hamel.dev/blog/posts/field-guide/',k:'article',y:2025,s:'Hamel Husain',w:'error analysis як головний цикл покращення'},
            {t:'AI Evals: Everything You Need to Know',u:'https://hamel.dev/blog/posts/evals-faq/',k:'article',y:2025,s:'Hamel Husain'},
            {t:'What We Learned from a Year of Building with LLMs (Part I)',u:'https://www.oreilly.com/radar/what-we-learned-from-a-year-of-building-with-llms-part-i/',k:'article',y:2024,s:'O’Reilly Radar'},
            {t:'The RAG Playbook',u:'https://jxnl.co/writing/2024/08/19/rag-flywheel/',k:'article',y:2024,s:'Jason Liu'}
          ]}
      ]},
    {label:'Фреймворки і готові сервіси',side:'right',desc:'Чим збирати пайплайн: LlamaIndex, LangChain і LangGraph, Haystack, власний код поверх клієнта бази; або managed RAG від провайдерів.',why:'Фреймворк економить тижні на старті, але ховає деталі; треба знати, що він робить під капотом, щоб міряти і лагодити.',
      links:[
        {t:'LlamaIndex Framework',u:'https://developers.llamaindex.ai/python/framework/',k:'doc',s:'LlamaIndex Docs'},
        {t:'Retrieval Augmented Generation (RAG) with Deep Agents',u:'https://docs.langchain.com/oss/python/langchain/rag',k:'doc',s:'LangChain Docs'},
        {t:'Introduction to Haystack',u:'https://docs.haystack.deepset.ai/docs/intro',k:'doc',s:'Haystack Docs'},
        {t:'Levels of Complexity: RAG Applications',u:'https://jxnl.co/writing/2024/02/28/levels-of-complexity-rag-applications/',k:'article',y:2024,s:'Jason Liu',w:'що треба на кожному рівні незалежно від фреймворка'},
        {t:'Learn RAG From Scratch - Python AI Tutorial from a LangChain Engineer',u:'https://www.youtube.com/watch?v=sVcwVQRHIc8',k:'video',y:2024,s:'YouTube · freeCodeCamp.org'}
      ],
      children:[
        {label:'LlamaIndex',type:'alt',desc:'Фреймворк, що виріс саме з RAG: loaders, node parsers, індекси, retrievers, query engines, evals і агенти.',why:'Найбагатший набір готових retrieval-технік; документація сама є підручником з RAG.',
          links:[
            {t:'LlamaIndex Framework',u:'https://developers.llamaindex.ai/python/framework/',k:'doc',s:'LlamaIndex Docs'},
            {t:'Using VectorStoreIndex',u:'https://developers.llamaindex.ai/python/framework/module_guides/indexing/vector_store_index/',k:'doc',s:'LlamaIndex Docs'},
            {t:'run-llama/llama_index',u:'https://github.com/run-llama/llama_index',k:'github',s:'GitHub'},
            {t:'Building and Evaluating Advanced RAG',u:'https://www.deeplearning.ai/short-courses/building-evaluating-advanced-rag/',k:'course',s:'DeepLearning.AI',w:'курс від засновника LlamaIndex і TruLens'}
          ]},
        {label:'LangChain і LangGraph',type:'alt',desc:'LangChain дає інтеграції (loaders, splitters, vector stores, retrievers), LangGraph описує RAG як граф станів з умовними переходами.',why:'Найбільша екосистема інтеграцій; LangGraph зручний, коли RAG стає агентним і потребує циклів.',
          links:[
            {t:'Build a semantic search engine with LangChain',u:'https://docs.langchain.com/oss/python/langchain/knowledge-base',k:'doc',s:'LangChain Docs'},
            {t:'Build a custom RAG agent with LangGraph',u:'https://docs.langchain.com/oss/python/langgraph/agentic-rag',k:'doc',s:'LangChain Docs'},
            {t:'langchain-ai/rag-from-scratch',u:'https://github.com/langchain-ai/rag-from-scratch',k:'github',y:2024,s:'GitHub',w:'ноутбуки до серії відео RAG From Scratch'},
            {t:'langchain-ai/langchain',u:'https://github.com/langchain-ai/langchain',k:'github',s:'GitHub'}
          ]},
        {label:'Haystack',type:'alt',desc:'Фреймворк від deepset із явними пайплайнами з компонентів: retriever, ranker, prompt builder, generator.',why:'Пайплайн як граф компонентів читається і тестується легше за ланцюжки викликів.',
          links:[
            {t:'Haystack',u:'https://haystack.deepset.ai/',k:'doc',s:'Haystack'},
            {t:'Introduction to Haystack',u:'https://docs.haystack.deepset.ai/docs/intro',k:'doc',s:'Haystack Docs'},
            {t:'Creating Your First QA Pipeline with Retrieval-Augmentation',u:'https://haystack.deepset.ai/tutorials/27_first_rag_pipeline',k:'doc',s:'Haystack'},
            {t:'deepset-ai/haystack',u:'https://github.com/deepset-ai/haystack',k:'github',s:'GitHub'}
          ]},
        {label:'Власний пайплайн без фреймворка',type:'alt',desc:'Клієнт embeddings, клієнт бази, кілька функцій для нарізки і промпту; кожен крок видно і можна поміряти.',why:'Для бекендера з Postgres це часто найкоротший шлях до керованого і зрозумілого RAG.',
          links:[
            {t:'Retrieval augmented generation',u:'https://platform.claude.com/cookbook/capabilities-retrieval-augmented-generation-guide',k:'doc',s:'Claude Cookbook'},
            {t:'Question answering using embeddings-based search',u:'https://cookbook.openai.com/examples/question_answering_using_embeddings',k:'doc',s:'OpenAI Cookbook'},
            {t:'AI semantic search',u:'https://supabase.com/docs/guides/ai/semantic-search',k:'doc',s:'Supabase Docs',w:'весь RAG на SQL і pgvector'},
            {t:'Semantic search using Supabase Vector',u:'https://cookbook.openai.com/examples/vector_databases/supabase/semantic-search',k:'doc',s:'OpenAI Cookbook'}
          ]},
        {label:'DSPy',type:'alt',desc:'Фреймворк зі Стенфорда: пайплайн описується як програма з модулів (retrieve, generate), а промпти і few-shot приклади оптимізуються автоматично за метрикою.',why:'Коли промпти для RAG хочеться не писати руками, а підбирати за вашими evals.',
          links:[
            {t:'DSPy',u:'https://dspy.ai/',k:'doc',s:'DSPy Docs'},
            {t:'stanfordnlp/dspy',u:'https://github.com/stanfordnlp/dspy',k:'github',s:'GitHub'}
          ]},
        {label:'RAGFlow',type:'alt',desc:'Відкритий RAG-рушій з веб-інтерфейсом: глибокий парсинг документів із розкладкою, нарізка з переглядом, цитати у відповідях, GraphRAG.',why:'Готовий self-hosted продукт для команди без коду, коли RAG потрібен «вчора».',
          links:[
            {t:'RAGFlow',u:'https://ragflow.io/',k:'doc',s:'RAGFlow'},
            {t:'infiniflow/ragflow',u:'https://github.com/infiniflow/ragflow',k:'github',s:'GitHub'}
          ]},
        {label:'Managed RAG: File Search, Vertex, Bedrock',type:'optional',desc:'Провайдер бере на себе ingestion, нарізку, embeddings і пошук: OpenAI File Search, Vertex AI RAG Engine, Amazon Bedrock Knowledge Bases, Azure AI Search.',why:'Швидкий старт і менше коду, але нарізку і recall@k контролювати складніше; варто знати межі.',
          links:[
            {t:'File search',u:'https://developers.openai.com/api/docs/guides/tools-file-search',k:'doc',s:'OpenAI Docs'},
            {t:'Doing RAG on PDFs using File Search in the Responses API',u:'https://cookbook.openai.com/examples/file_search_responses',k:'doc',s:'OpenAI Cookbook'},
            {t:'RAG Engine overview',u:'https://cloud.google.com/vertex-ai/generative-ai/docs/rag-engine/rag-overview',k:'doc',s:'Google Cloud Docs'},
            {t:'Retrieve data and generate AI responses with Amazon Bedrock Knowledge Bases',u:'https://docs.aws.amazon.com/bedrock/latest/userguide/knowledge-base.html',k:'doc',s:'AWS Docs'},
            {t:'Files API',u:'https://platform.claude.com/docs/en/build-with-claude/files',k:'doc',s:'Anthropic Docs',w:'завантажити документ раз і посилатись на нього за file_id'}
          ]}
      ]},
    {label:'Експлуатація RAG',side:'left',desc:'Життя пайплайну після запуску: оновлення індексу, версії документів, ціна, затримка, трейсинг, типові поломки.',why:'RAG, який працював на демо, ламається через місяць, коли документи змінились, а індекс ні.',
      links:[
        {t:'Building Performant RAG Applications for Production',u:'https://developers.llamaindex.ai/python/framework/optimizing/production_rag/',k:'doc',s:'LlamaIndex Docs'},
        {t:'Seven Failure Points When Engineering a Retrieval Augmented Generation System',u:'https://arxiv.org/abs/2401.05856',k:'article',y:2024,s:'arXiv'},
        {t:'Vector Search in Production: Scaling, HA & Tuning Guide',u:'https://qdrant.tech/articles/vector-search-resource-optimization/',k:'article',s:'Qdrant'},
        {t:'A Field Guide to Rapidly Improving AI Products',u:'https://hamel.dev/blog/posts/field-guide/',k:'article',y:2025,s:'Hamel Husain'},
        {t:'Vector Databases in Production for Busy Engineers',u:'https://www.pinecone.io/learn/series/vector-databases-in-production-for-busy-engineers/',k:'course',s:'Pinecone'}
      ],
      children:[
        {label:'Оновлення індексу',desc:'Переіндексація змінених документів за розкладом або за подією; видалення застарілих фрагментів; хеші вмісту, щоб не переembedʼити незмінне.',why:'Застарілий індекс дає впевнену відповідь за старою версією документа, і ніхто цього не бачить.',
          links:[
            {t:'Document Management',u:'https://developers.llamaindex.ai/python/framework/module_guides/indexing/document_management/',k:'doc',s:'LlamaIndex Docs',w:'insert, delete, update, refresh за doc_id'},
            {t:'Securely indexing large codebases',u:'https://cursor.com/blog/secure-codebase-indexing',k:'article',s:'Cursor',w:'Merkle tree, щоб переіндексувати лише змінене'},
            {t:'Unstructured-IO/unstructured-ingest',u:'https://github.com/Unstructured-IO/unstructured-ingest',k:'github',s:'GitHub'}
          ]},
        {label:'Версії документів і дата у метаданих',desc:'Кожен фрагмент знає, з якої версії документа він і коли індексований.',why:'Дозволяє фільтрувати застаріле і пояснити користувачу, чому відповідь посилається на старий текст.',
          links:[
            {t:'Document Management',u:'https://developers.llamaindex.ai/python/framework/module_guides/indexing/document_management/',k:'doc',s:'LlamaIndex Docs'},
            {t:'Filtering',u:'https://qdrant.tech/documentation/concepts/filtering/',k:'doc',s:'Qdrant Docs',w:'фільтри за датою і діапазонами у payload'}
          ]},
        {label:'Три осі: якість, latency, вартість',desc:'Reranker покращує якість, але додає затримку; більше k додає токенів і ціну; покращення однієї осі зазвичай коштує іншої.',why:'Рішення про архітектуру RAG треба вміти пояснити по трьох осях одразу, а не лише «стало точніше».',
          links:[
            {t:'Building Performant RAG Applications for Production',u:'https://developers.llamaindex.ai/python/framework/optimizing/production_rag/',k:'doc',s:'LlamaIndex Docs'},
            {t:'Vector Search in Production: Scaling, HA & Tuning Guide',u:'https://qdrant.tech/articles/vector-search-resource-optimization/',k:'article',s:'Qdrant'},
            {t:'pgvector vs Pinecone: cost and performance',u:'https://supabase.com/blog/pgvector-vs-pinecone',k:'article',y:2024,s:'Supabase'},
            {t:'Pgvector vs. Pinecone: Vector Database Comparison',u:'https://www.timescale.com/blog/pgvector-vs-pinecone',k:'article',y:2024,s:'Tiger Data'},
            {t:'Retrieval Optimization: Tokenization to Vector Quantization',u:'https://www.deeplearning.ai/short-courses/retrieval-optimization-from-tokenization-to-vector-quantization/',k:'course',s:'DeepLearning.AI'}
          ]},
        {label:'Типові поломки',desc:'Фрагмент обрізав думку; потрібний документ не проіндексовано; поріг схожості відсік усе; відповідь з середини контексту проігноровано.',why:'Знати список типових поломок означає шукати причину за хвилини, а не за дні.',
          links:[
            {t:'Seven Failure Points When Engineering a Retrieval Augmented Generation System',u:'https://arxiv.org/abs/2401.05856',k:'article',y:2024,s:'arXiv'},
            {t:'Low-Hanging Fruit for RAG Search',u:'https://jxnl.co/writing/2024/05/11/low-hanging-fruit-for-rag-search/',k:'article',y:2024,s:'Jason Liu'},
            {t:'Predictions for the Future of RAG',u:'https://jxnl.co/writing/2024/06/05/predictions-for-the-future-of-rag/',k:'article',y:2024,s:'Jason Liu'},
            {t:'RAG Evaluation: Don’t let customers tell you first',u:'https://www.pinecone.io/learn/series/rag/rag-evaluation/',k:'article',s:'Pinecone'}
          ]},
        {label:'Кешування відповідей',type:'optional',desc:'Однакові або близькі питання отримують збережену відповідь без нового пошуку і генерації (semantic cache); prompt caching здешевлює повторюваний контекст.',why:'Частина питань повторюється; кеш економить і гроші, і секунди.',
          links:[
            {t:'What is semantic caching?',u:'https://redis.io/blog/what-is-semantic-caching/',k:'article',s:'Redis'},
            {t:'zilliztech/GPTCache',u:'https://github.com/zilliztech/GPTCache',k:'github',s:'GitHub'},
            {t:'Caching',u:'https://docs.litellm.ai/docs/proxy/caching',k:'doc',s:'LiteLLM Docs'},
            {t:'Prompt caching',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',k:'doc',s:'Anthropic Docs'},
            {t:'Context caching',u:'https://ai.google.dev/gemini-api/docs/caching',k:'doc',s:'Gemini API Docs'}
          ]},
        {label:'Права доступу у пошуку',desc:'Фільтрація фрагментів за правами користувача до пошуку, не після: multitenancy у базі, RLS у Postgres.',why:'Фрагмент із закритого документа, що потрапив у промпт, уже витік, навіть якщо його потім відфільтрували.',
          links:[
            {t:'RAG with Permissions',u:'https://supabase.com/docs/guides/ai/rag-with-permissions',k:'doc',s:'Supabase Docs',w:'row level security для фрагментів'},
            {t:'Multitenancy',u:'https://qdrant.tech/documentation/guides/multiple-partitions/',k:'doc',s:'Qdrant Docs'},
            {t:'Multi-tenancy operations',u:'https://docs.weaviate.io/weaviate/manage-collections/multi-tenancy',k:'doc',s:'Weaviate Docs'}
          ]},
        {label:'Трейсинг: Langfuse, LangSmith, Phoenix',desc:'Кожен запит записується як трейс: що знайшов пошук, що пішло в промпт, що відповіла модель, скільки це коштувало.',why:'Без трейсів скарга «відповів не те» не розбирається: не видно, чи винен пошук, чи генерація.',
          links:[
            {t:'LLM Observability & Application Tracing (Open Source)',u:'https://langfuse.com/docs/tracing',k:'doc',s:'Langfuse Docs'},
            {t:'LangSmith Observability',u:'https://docs.smith.langchain.com/',k:'doc',s:'LangSmith Docs'},
            {t:'Arize-ai/phoenix',u:'https://github.com/Arize-ai/phoenix',k:'github',s:'GitHub'},
            {t:'Gen AI',u:'https://opentelemetry.io/docs/specs/semconv/registry/attributes/gen-ai/',k:'doc',s:'OpenTelemetry',w:'стандартні атрибути трейсів для LLM-викликів'},
            {t:'TruLens: Evals and Tracing for AI Agents',u:'https://www.trulens.org/',k:'doc',s:'TruLens'}
          ]}
      ]},
    {label:'Поза класичним RAG',side:'right',desc:'Напрями, що розвивають базову схему: агентний пошук, графи знань, довгий контекст, пошук по коду, мультимодальність.',why:'Варто знати, що це існує і коли воно доречне, але починати з базового пайплайну з двома метриками.',
      links:[
        {t:'Agentic Retrieval-Augmented Generation: A Survey on Agentic RAG',u:'https://arxiv.org/abs/2501.09136',k:'article',y:2025,s:'arXiv'},
        {t:'From Local to Global: A Graph RAG Approach to Query-Focused Summarization',u:'https://arxiv.org/abs/2404.16130',k:'article',y:2024,s:'arXiv'},
        {t:'Retrieval Augmented Generation or Long-Context LLMs? A Comprehensive Study and Hybrid Approach',u:'https://arxiv.org/abs/2407.16833',k:'article',y:2024,s:'arXiv'},
        {t:'Building effective AI agents',u:'https://www.anthropic.com/engineering/building-effective-agents',k:'article',y:2024,s:'Anthropic'},
        {t:'Forget RAG Pipelines - Build Production Ready Agents in 15 Mins',u:'https://www.youtube.com/watch?v=lArgRvBV3tQ',k:'video',y:2025,s:'YouTube · AI Engineer'}
      ],
      children:[
        {label:'Agentic retrieval',type:'optional',desc:'Агент сам вирішує, що і де шукати, робить кілька запитів і уточнює, доки не знайде достатньо; пошук стає одним із tools.',why:'Складні питання, на які один пошук не відповідає, розвʼязуються ітеративно, але дорожче і довше.',
          links:[
            {t:'What Is Agentic RAG? From LLM RAG to AI Agents',u:'https://weaviate.io/blog/what-is-agentic-rag',k:'article',s:'Weaviate'},
            {t:'What is Agentic RAG? Building Agents with Qdrant',u:'https://qdrant.tech/articles/agentic-rag/',k:'article',s:'Qdrant'},
            {t:'Build a custom RAG agent with LangGraph',u:'https://docs.langchain.com/oss/python/langgraph/agentic-rag',k:'doc',s:'LangChain Docs'},
            {t:'Agentic Retrieval-Augmented Generation: A Survey on Agentic RAG',u:'https://arxiv.org/abs/2501.09136',k:'article',y:2025,s:'arXiv'},
            {t:'Self-Reflective RAG with LangGraph',u:'https://blog.langchain.com/agentic-rag-with-langgraph/',k:'article',y:2024,s:'LangChain',w:'Self-RAG і CRAG як граф станів'}
          ]},
        {label:'GraphRAG і графи знань',type:'optional',desc:'Сутності і звʼязки між ними витягуються з документів у граф, пошук іде по графу, не лише по фрагментах: Microsoft GraphRAG, LightRAG, Neo4j.',why:'Допомагає на питаннях «як повʼязані A і B» і на питаннях про весь корпус, де фрагментний пошук губить звʼязки.',
          links:[
            {t:'GraphRAG: Unlocking LLM discovery on narrative private data',u:'https://www.microsoft.com/en-us/research/blog/graphrag-unlocking-llm-discovery-on-narrative-private-data/',k:'article',y:2024,s:'Microsoft Research'},
            {t:'Exploring RAG and GraphRAG: Understanding when and how to use both',u:'https://weaviate.io/blog/graph-rag',k:'article',s:'Weaviate'},
            {t:'RAG with a Graph database',u:'https://cookbook.openai.com/examples/rag_with_graph_db',k:'doc',s:'OpenAI Cookbook'},
            {t:'Knowledge Graphs for RAG',u:'https://www.deeplearning.ai/short-courses/knowledge-graphs-rag/',k:'course',s:'DeepLearning.AI'}
          ],
          children:[
            {label:'Microsoft GraphRAG',desc:'Відкрита реалізація: модель будує граф сутностей і спільнот з документів, а відповіді на глобальні питання збираються з резюме спільнот.',why:'Еталонна реалізація ідеї; дорога в індексації, тож варто розуміти, за що платиш.',
              links:[
                {t:'microsoft/graphrag',u:'https://github.com/microsoft/graphrag',k:'github',s:'GitHub'},
                {t:'Welcome - GraphRAG',u:'https://microsoft.github.io/graphrag/',k:'doc',s:'Microsoft'},
                {t:'From Local to Global: A Graph RAG Approach to Query-Focused Summarization',u:'https://arxiv.org/abs/2404.16130',k:'article',y:2024,s:'arXiv'}
              ]},
            {label:'LightRAG і Neo4j GraphRAG',desc:'LightRAG як дешевша альтернатива з подвійним рівнем пошуку; Neo4j дає граф знань у звичайній графовій базі з векторним індексом.',why:'Практичніші варіанти, коли повний GraphRAG занадто дорогий або граф уже є.',
              links:[
                {t:'HKUDS/LightRAG',u:'https://github.com/HKUDS/LightRAG',k:'github',s:'GitHub'},
                {t:'LightRAG: Simple and Fast Retrieval-Augmented Generation',u:'https://arxiv.org/abs/2410.05779',k:'article',y:2024,s:'arXiv'},
                {t:'What is GraphRAG?',u:'https://neo4j.com/blog/genai/what-is-graphrag/',k:'article',s:'Neo4j'},
                {t:'GraphRAG - Neo4j Labs',u:'https://neo4j.com/labs/genai-ecosystem/graphrag/',k:'doc',s:'Neo4j'}
              ]}
          ]},
        {label:'Довгий контекст замість пошуку',type:'optional',desc:'Весь корпус або великий документ подається в контекстне вікно напряму, з prompt caching для економії.',why:'На невеликих корпусах це простіше за RAG, але дорожче на кожен запит; рішення за трьома осями.',
          links:[
            {t:'Retrieval Augmented Generation or Long-Context LLMs? A Comprehensive Study and Hybrid Approach',u:'https://arxiv.org/abs/2407.16833',k:'article',y:2024,s:'arXiv',w:'роутинг: коли RAG, коли весь контекст'},
            {t:'Long Context RAG Performance of LLMs',u:'https://www.databricks.com/blog/long-context-rag-performance-llms',k:'article',y:2024,s:'Databricks'},
            {t:'Long context',u:'https://ai.google.dev/gemini-api/docs/long-context',k:'doc',s:'Gemini API Docs'},
            {t:'NoLiMa: Long-Context Evaluation Beyond Literal Matching',u:'https://arxiv.org/abs/2502.05167',k:'article',y:2025,s:'arXiv'},
            {t:'Prompt caching',u:'https://platform.claude.com/docs/en/build-with-claude/prompt-caching',k:'doc',s:'Anthropic Docs'}
          ]},
        {label:'RAG по кодовій базі',type:'optional',desc:'Пошук по коду: нарізка за функціями і файлами через tree-sitter, embeddings для коду, repo map, метадані з шляхом і мовою; агенти часто замінюють вектори на grep і читання файлів.',why:'Асистент по кодовій базі це той самий RAG, і агенти для кодингу роблять його під капотом.',
          links:[
            {t:'Repository map',u:'https://aider.chat/docs/repomap.html',k:'doc',s:'aider',w:'граф символів через tree-sitter замість embeddings'},
            {t:'Securely indexing large codebases',u:'https://cursor.com/blog/secure-codebase-indexing',k:'article',s:'Cursor'},
            {t:'voyage-code-3: more accurate code retrieval with lower dimensional, quantized embeddings',u:'https://blog.voyageai.com/2024/12/04/voyage-code-3/',k:'article',y:2024,s:'Voyage AI'},
            {t:'nomic-ai/nomic-embed-code',u:'https://huggingface.co/nomic-ai/nomic-embed-code',k:'doc',s:'Hugging Face'},
            {t:'Як працює coding assistants під капотом',u:'https://t.me/beerphp/148',k:'post',y:2026,s:'beerphp',w:'як асистент збирає контекст з коду інструментами'}
          ]},
        {label:'Мультимодальний RAG',type:'optional',desc:'Пошук по зображеннях, схемах і сторінках PDF як картинках: мультимодальні embeddings (Voyage, Cohere Embed 4) або ColPali, що індексує сторінку як набір патчів.',why:'Половина знань у компанії лежить у схемах і скріншотах; текстовий RAG їх просто не бачить.',
          links:[
            {t:'ColPali: Efficient Document Retrieval with Vision Language Models',u:'https://arxiv.org/abs/2407.01449',k:'article',y:2024,s:'arXiv'},
            {t:'ColPali: Efficient Document Retrieval with Vision Language Models',u:'https://huggingface.co/blog/manu/colpali',k:'article',y:2024,s:'Hugging Face'},
            {t:'illuin-tech/colpali',u:'https://github.com/illuin-tech/colpali',k:'github',s:'GitHub'},
            {t:'Multimodal Retrieval-Augmented Generation (RAG)',u:'https://weaviate.io/blog/multimodal-rag',k:'article',s:'Weaviate'},
            {t:'Multimodal Embeddings',u:'https://docs.voyageai.com/docs/multimodal-embeddings',k:'doc',s:'Voyage AI Docs'},
            {t:'Multimodal RAG: Chat with Videos',u:'https://www.deeplearning.ai/short-courses/multimodal-rag-chat-with-videos/',k:'course',s:'DeepLearning.AI'}
          ]}
      ]}
  ]
};
