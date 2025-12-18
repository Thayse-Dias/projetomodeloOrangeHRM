🤖 Matriz de Automação por Sprint – OrangeHRM

📌 Critérios de Automação (QA Sênior)

Um cenário é candidato à automação quando:

🔁 Executado com frequência (regressão)

🚨 Crítico para o negócio

📊 Alto risco de falha

🧱 Estável (pouca mudança de UI/regra)

⏱ Alto custo de execução manual

---

🏁 Sprint 1 – Base da Automação (Smoke + Críticos)

🎯 Objetivo: Garantir que o sistema “suba” e funcione

---

🏁 Sprint 2 – Gestão de Usuários e Permissões

🎯 Objetivo: Automatizar regras críticas de administração


---

🏁 Sprint 3 – Processos de RH (Core Business)

🎯 Objetivo: Automatizar fluxos principais do negócio

---

🏁 Sprint 4 – Regressão Completa e Fluxos Fim a Fim

🎯 Objetivo: Garantir estabilidade antes de release

---

📊 Resumo de Automação por Sprint`

| Sprint | Automatizados | Parciais | Manuais |
| ------ | ------------- | -------- | ------- |
| 1      | 4             | 0        | 1       |
| 2      | 2             | 1        | 2       |
| 3      | 3             | 1        | 1       |
| 4      | 3             | 2        | 0       |

---

🧠 Visão Estratégica

✔ Começa com Smoke Test automatizado
✔ Cresce com regressão estável
✔ Evita automação frágil cedo demais
✔ Automatiza o que gera retorno real

---

📊 Classificação Final da Regressão

| Categoria         | % Automatizado |
| ----------------- | -------------- |
| Smoke             | 100%           |
| Funcional Crítico | 85%            |
| Regressão Geral   | 70%            |
| E2E               | 40%            |
| Usabilidade       | 0%             |

---

🧠 Boas Práticas

✔ Regressão automatizada executada:

- A cada merge

- Antes de release

- Em pipeline CI/CD

✔ Testes devem:

- Ser independentes

- Criar e limpar dados

- Ter asserts claros

✔ Evitar:

- Cenários frágeis

- Dependência entre testes

- Validações visuais complexas