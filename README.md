1. Inicialize o projeto Node.js
```Bash
npm init -y
```
**Isso cria o arquivo package.json*

2. Instale o Cypress como dependência de desenvolvimento
```Bash
npm install cypress --save-dev
```
3. (Opcional, mas recomendado) Instale os navegadores suportados
O Cypress instala automaticamente o Electron, mas para testar em Chrome/Firefox/Edge:
```Bash
npx cypress install
```
4. Abra o Cypress pela primeira vez (configuração inicial)
```Bash
npx cypress open
```
Na primeira execução, o Cypress cria a estrutura de pastas padrão:
- cypress/e2e/
- cypress/support/
- cypress/fixtures/
- cypress.config.js

Escolha E2E Testing → Continue → Selecione um navegador → Start E2E Testing

5. Instalação com Allure (para relatórios)
```Bash
npm install @shelex/cypress-allure-plugin --save-dev
```
6. Instale o Allure Command Line (uma vez só)
```Bash
npm install -g allure-commandline

Ou, se preferir local:

npm install allure-commandline --save-dev
```
---
## Utilizar:
```Bash
npm run cy:open    # Abre a interface gráfica
npm run cy:run     # Executa em modo headless
npm run test:allure
```
