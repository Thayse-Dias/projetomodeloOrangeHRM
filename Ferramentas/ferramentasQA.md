## 🛠️ Ferramentas para profissionais de Quality Assurance (QA)

1. Gerenciamento de Testes e Requisitos

- TestRail – Plataforma líder para gerenciar casos de teste, planos, execuções e relatórios.
- Xray (para Jira) – Excelente integração com Jira, ideal para equipes ágeis.
- Zephyr Scale / Zephyr Squad (para Jira) – Alternativas populares ao Xray.
- Azure DevOps Test Plans – Ótima opção se você já usa Microsoft ecosystem.
- qTest – Muito usado em grandes empresas.

---

2. Automação de Testes Web

- Cypress – Mais rápido e fácil de usar que o Selenium; ótimo para testes E2E modernos.
- Playwright – Suporta Chromium, Firefox e WebKit; excelente para cross-browser e mobile web.
- Selenium – Ainda muito usado, especialmente em projetos legados ou com linguagens como Java, Python, C#.
- TestCafe – Simples, sem necessidade de WebDriver.

---

3. Automação de Testes Mobile

- Appium – Padrão para Android e iOS (nativo e híbrido).
- XCUITest (iOS) + Espresso (Android) – Quando se quer testes nativos puros.
- Detox – Excelente para React Native.
- BrowserStack App Automate / Sauce Labs – Para rodar em dispositivos reais na nuvem.

---

4. Testes de API

- Postman – Para testes manuais e automação simples.
- RestAssured – Java, ideal para integração com Selenium.
- Newman – Executa coleções do Postman em CI/CD.
- Karate – DSL em formato Cucumber, muito poderoso.
- Pact – Para testes de contratos (contract testing).

---

5. Testes de Performance e Carga

- k6 – Open-source, leve e com sintaxe JavaScript.
- JMeter – Clássico e gratuito, ótimo para grandes cargas.
- Gatling – Alta performance e relatórios bonitos.
- Locust – Python, fácil de escalar.
L- oadRunner / NeoLoad – Para empresas que precisam de licença comercial.

---

6. Testes de Acessibilidade

- axe DevTools – Extensão gratuita para Chrome/Edge/Firefox.
- WAVE – Ferramenta online e extensão.
- Lighthouse (no Chrome DevTools) – Inclui auditoria de acessibilidade.

---

7. Testes Visuais / Regressão Visual

- Percy – Integra com Cypress, Playwright, Storybook.
- Applitools – IA para detectar mudanças visuais.
- Chromatic – Para componentes React/Storybook.

---

8. CI/CD e Relatórios

- GitHub Actions / GitLab CI / Jenkins – Para rodar testes automaticamente.
- Allure – Relatórios bonitos e detalhados (funciona com qualquer framework).
- Mochawesome – Relatórios HTML para Mocha/Cypress.

---

9. Ferramentas de Exploração e Bug Reporting

- Jam.dev – Captura tela, vídeo e passos automaticamente (perfeito para relatar bugs).
- BugHerd / Marker.io – Anotações diretamente na tela.
- Test IO / uTest – Plataformas de crowdtesting.

---

Recomendações por perfil (2025)

Iniciante em automação → Cypress ou Playwright + Postman + TestRail
Equipe ágeil com Jira → Xray + Cypress/Playwright + BrowserStack
Mobile-first → Appium + BrowserStack App Automate
Performance crítica → k6 + Grafana + Prometheus