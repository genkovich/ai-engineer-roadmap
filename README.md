# Роадмап AI Engineer у 2027

Матеріали для учасників ефіру «AI Engineer у 2027» (25.11.2026): візуальний роадмап у стилі дерева навичок.

- **Головний роадмап:** https://genkovich.github.io/ai-engineer-roadmap/ (десять навичок у порядку навчання, кожна відкриває своє дерево тем)
- **Самооцінка з 10 питань:** https://genkovich.github.io/ai-engineer-roadmap/self-assessment.html (рахує бали одразу на сторінці і веде на роадмап потрібної навички)
- **PDF з ефіру:** [ai-engineer-roadmap.pdf](ai-engineer-roadmap.pdf)

Роадмапи навичок (у порядку навчання):

1. [Класична інженерія](https://genkovich.github.io/ai-engineer-roadmap/skills/classic-engineering.html)
2. [Метод роботи з агентами](https://genkovich.github.io/ai-engineer-roadmap/skills/agentic-workflow.html)
3. [Контекст](https://genkovich.github.io/ai-engineer-roadmap/skills/context.html)
4. [Агенти, tool use і MCP](https://genkovich.github.io/ai-engineer-roadmap/skills/agents-mcp.html)
5. [LLM API і structured outputs](https://genkovich.github.io/ai-engineer-roadmap/skills/llm-api.html)
6. [RAG](https://genkovich.github.io/ai-engineer-roadmap/skills/rag.html)
7. [Evals](https://genkovich.github.io/ai-engineer-roadmap/skills/evals.html)
8. [Оркестрація](https://genkovich.github.io/ai-engineer-roadmap/skills/orchestration.html)
9. [Безпека і guardrails](https://genkovich.github.io/ai-engineer-roadmap/skills/security.html)
10. [Прод: деплой, observability, вартість](https://genkovich.github.io/ai-engineer-roadmap/skills/production.html)

У кожному дереві клік по вузлу відкриває опис, навіщо це AI-інженеру і посилання на офіційну документацію. Вузли можна позначати як «вивчено», «в процесі» чи «пропустити»: статус зберігається у браузері.

Відсотки пораховано за вибіркою з 64 вакансій (42 українські, 22 закордонні), зібраних у листопаді 2026.

## Як це влаштовано

Статичний сайт без збірки: `index.html`, `self-assessment.html`, `skills/*.html`. Кожен роадмап описано як дані в `assets/data/<slug>.js`, малює їх спільний рендерер `assets/roadmap.js` (абсолютні позиції вузлів і SVG-лінії на десктопі, вертикальне дерево на телефоні). Стилі в `assets/style.css`.

Кирило Сулімовський
