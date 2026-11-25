/* Order of skill roadmaps = learning order from the talk. pct = share of 64 vacancies (November 2026). */
window.SKILLS=[
  {slug:'classic-engineering',title:'Класична інженерія',pct:100,short:'Python або TypeScript, API, бази, тести, Git, Docker'},
  {slug:'agentic-workflow',title:'Метод роботи з агентами',pct:null,short:'spec-first, test-first, ревʼю дифа агента'},
  {slug:'context',title:'Контекст',pct:55,short:'контекстне вікно, токени, CLAUDE.md, правила за потреби'},
  {slug:'agents-mcp',title:'Агенти, tool use і MCP',pct:92,short:'цикл агента, опис тулів, MCP-сервери і клієнти'},
  {slug:'llm-api',title:'LLM API і structured outputs',pct:83,short:'виклик моделі з коду, схема відповіді, ретраї, токени'},
  {slug:'rag',title:'RAG',pct:66,short:'chunking, embeddings, пошук, recall@k, faithfulness'},
  {slug:'evals',title:'Evals',pct:66,short:'golden dataset, assertions, LLM-as-judge, прогін у CI'},
  {slug:'orchestration',title:'Оркестрація',pct:61,short:'ланцюжок, роутинг, паралелізація, human-in-the-loop'},
  {slug:'security',title:'Безпека і guardrails',pct:39,short:'prompt injection, права агента, підтвердження дій'},
  {slug:'production',title:'Прод: деплой, observability, вартість',pct:75,short:'трейси, метрики, ціна прогону, AI-кроки в CI/CD'}
];
