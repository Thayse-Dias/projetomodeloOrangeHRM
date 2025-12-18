🤖 Pipeline CI/CD – Regressão Automatizada OrangeHRM

📌 Objetivo do Pipeline

Executar automaticamente os testes de regressão automatizada do OrangeHRM:

- Em cada pull request

- Em merge para branch principal

- Antes de release

Garantindo feedback rápido e confiável.

---

🧠 Visão Geral do Pipeline
```bash

Commit / Pull Request
        ↓
Build
        ↓
Smoke Tests (automáticos)
        ↓
Regressão Automatizada
        ↓
Relatórios
        ↓
Deploy (se aprovado)
```
---
🧪 Mapeamento do Checklist → Pipeline

| Etapa CI/CD         | Checklist Executado      |
| ------------------- | ------------------------ |
| Smoke Tests         | Login, Logout, Dashboard |
| Regressão Funcional | Admin, PIM, Leave, Time  |
| Regressão Parcial   | Recruitment, My Info     |
| Segurança Básica    | Permissões e sessão      |
| E2E Essencial       | Fluxos críticos          |

---

🏁 Estratégia de Execução

🔹 Smoke Tests

- Executados sempre

- Bloqueiam o pipeline se falharem

- Rápidos (< 5 min)

🔹 Regressão Automatizada

- Executada:

    - Em merge na main

    - Antes de release

- Pode rodar em paralelo

🔹 E2E

- Executado:

    - Apenas em pipeline noturno ou pré-release

🧩 Organização por Tags (BDD)
```bash
@smoke
@regression
@critical
@e2e
```
➡️ O pipeline executa testes por tag, não por arquivo.

---

🧪 EXEMPLO 1 — Pipeline CI/CD (GitHub Actions)
```bash
name: OrangeHRM - Testes Automatizados

on:
  pull_request:
    branches: [ main ]
  push:
    branches: [ main ]

jobs:
  cypress-tests:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout do código
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 18

      - name: Instalar dependências
        run: npm install

      - name: Executar Smoke Tests
        run: npx cypress run --env TAGS='@smoke'

      - name: Executar Regressão Automatizada
        run: npx cypress run --env TAGS='@regression'

      - name: Publicar relatórios
        if: always()
        uses: actions/upload-artifact@v4
        with:
          name: relatorio-cypress
          path: cypress/reports
```
📌 Boa prática:
Se @smoke falhar → pipeline para ❌

---

🧪 EXEMPLO 2 — Pipeline CI/CD (Jenkins)
```bash
pipeline {
  agent any

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Instalar Dependências') {
      steps {
        sh 'npm install'
      }
    }

    stage('Smoke Tests') {
      steps {
        sh 'npx cypress run --env TAGS=@smoke'
      }
    }

    stage('Regressão Automatizada') {
      steps {
        sh 'npx cypress run --env TAGS=@regression'
      }
    }
  }

  post {
    always {
      archiveArtifacts artifacts: 'cypress/reports/**'
    }
    failure {
      echo 'Pipeline falhou — verifique os testes'
    }
  }
}
```
---

📊 Estratégia de Execução por Ambiente

| Ambiente    | O que Executar          |
| ----------- | ----------------------- |
| PR          | Smoke                   |
| Main        | Smoke + Regressão       |
| Nightly     | Smoke + Regressão + E2E |
| Pré-release | Regressão completa      |

---

🧠 Boas Práticas

✔ Pipeline rápido e confiável
✔ Testes isolados e independentes
✔ Dados criados e limpos automaticamente
✔ Relatórios sempre gerados
✔ E2E limitado (baixo custo de manutenção)

---

📈 Métricas que esse Pipeline permite

- % de regressão automatizada

- Tempo médio de execução

- Taxa de falha por módulo

- Defeitos detectados antes do deploy

- Estabilidade dos testes

