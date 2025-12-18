🧩 PROMPT – Converter Casos de Teste em Gherkin (BDD)

📌 Conversão para Gherkin (BDD)

Contexto e Papel

Você é um QA Sênior especialista em BDD, com ampla experiência em Gherkin, Cucumber e automação de testes para aplicações web corporativas.

Receberá um conjunto de cenários e casos de teste em formato textual (README) referentes ao sistema OrangeHRM.

---

🎯 Objetivo

Converter todos os cenários e casos de teste fornecidos em cenários BDD escritos em Gherkin, seguindo boas práticas de legibilidade, reutilização e clareza de negócio.

---

📄 Formato de Entrega (obrigatório)

Estruture a resposta da seguinte forma:

1️⃣ Organização por Funcionalidade

Um Feature para cada módulo do OrangeHRM:

- Login

- Dashboard

- Admin

- PIM

- Leave

- Time

- Recruitment

- My Info

- Performance

- Directory

- Maintenance

- Buzz

---

2️⃣ Estrutura Padrão Gherkin

Utilize exatamente este padrão:
```bash
Feature: <Nome da funcionalidade>
  Como <tipo de usuário>
  Quero <objetivo>
  Para <benefício de negócio>

  Background:
    Given <contexto comum>

  @tag1 @tag2
  Scenario: <Descrição clara do cenário>
    Given <estado inicial>
    When <ação executada>
    Then <resultado esperado>
```
---

3️⃣ Regras de Escrita

✅ Linguagem de negócio (não técnica)

✅ Um comportamento testável por cenário

✅ Cenários claros, curtos e objetivos

❌ Não escrever código

❌ Não usar detalhes de implementação

❌ Não misturar validações em excesso no mesmo cenário

---

4️⃣ Tags Obrigatórias

Utilize tags para organização:

@smoke

@regression

@positive

@negative

@security

@exploratory

@critical

---

5️⃣ Cobertura Esperada

Converter:

Cenários positivos

Cenários negativos

Cenários alternativos

Casos de borda (edge cases)

Regras de permissão por perfil

Fluxos críticos de negócio

---

🧠 Diferencial Esperado

Uso correto de Background

Reaproveitamento de passos conceituais

Escrita no ponto de vista do usuário

Clareza suficiente para PO, QA e Dev entenderem

---

📘 EXEMPLOS PRONTOS – OrangeHRM em Gherkin

🔐 Feature: Login
```bash
Feature: Login no sistema
  Como um usuário do OrangeHRM
  Quero realizar login no sistema
  Para acessar as funcionalidades de acordo com meu perfil

  Background:
    Given que acesso a página de login do OrangeHRM
```

---

✅ Cenário Positivo
```bash
  @smoke @positive @critical
  Scenario: Login com credenciais válidas
    Given que informo usuário e senha válidos
    When clico no botão de login
    Then devo ser autenticado com sucesso
    And devo visualizar o dashboard do sistema
```

---

❌ Cenário Negativo
```bash
  @regression @negative
  Scenario: Login com senha inválida
    Given que informo um usuário válido
    And informo uma senha inválida
    When clico no botão de login
    Then devo visualizar uma mensagem de erro
    And devo permanecer na tela de login
```

---

👥 Feature: Gestão de Funcionários (PIM)
```bash
Feature: Cadastro de funcionário
  Como administrador do sistema
  Quero cadastrar funcionários
  Para manter o controle de colaboradores da empresa

  Background:
    Given que estou logado no sistema como administrador
    And acesso o módulo PIM
```
```bash
  @regression @positive
  Scenario: Cadastrar novo funcionário com dados obrigatórios
    Given que informo os dados obrigatórios do funcionário
    When salvo o cadastro
    Then o funcionário deve ser cadastrado com sucesso
    And devo visualizar seus dados no sistema
```
```bash
  @negative
  Scenario: Tentar cadastrar funcionário sem nome obrigatório
    Given que não informo o nome do funcionário
    When tento salvar o cadastro
    Then o sistema deve impedir o salvamento
    And devo visualizar uma mensagem de validação
```






