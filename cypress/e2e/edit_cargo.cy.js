describe("CT-RF03-03 - Editar funcionário existente", () => {
  const selectorList = {
    inputUsername: "input[name='username']",
    inputPassword: "input[name='password']",
    buttonSubmit: "button[type='submit']", // Usado para Login, Search e Save

    // Menu PIM
    buttonPIM: "a[href*='pim/viewPimModule']",

    // Employee List
    placeholderEmployeeName: "input[placeholder='Type for hints...']", // Selector comum para autocomplete de nome no OrangeHRM
    buttonSearch: ".oxd-form-actions > button[type='submit']",

    // Employee record na lista (primeiro resultado)
    firstEmployeeRecord: ".oxd-table-body > div:first-child .oxd-table-card > .oxd-table-row div:nth-child(3) a", // Coluna com o nome completo (ajustado com base na estrutura típica)

    // Tabs no perfil do funcionário
    tabJob: "a:contains('Job')",

    // Job details
    buttonEditJob: ".oxd-button--secondary", // Botão Edit na seção Job (geralmente o pencil icon button)
    dropdownJobTitle: ".oxd-select-text", // Wrapper do dropdown de Job Title (há múltiplos, usaremos index ou label)
    dropdownOption: ".oxd-select-option span", // Opções do dropdown
    buttonSave: ".oxd-button--secondary:contains('Save')", // Botão Save na seção Job
  };

  it("Deve editar o cargo (Job Title) de um funcionário existente e salvar a alteração", () => {
    // 0. Preparação de Dados - Usaremos um funcionário existente (ex: "Paul Collings" ou outro padrão do demo)
    const employeeFullName = "Paul Collings"; // Funcionário padrão no demo OrangeHRM
    const newJobTitle = "QA Engineer"; // Cargo a ser alterado (verifique se existe no sistema demo)

    // 1. Login
    cy.visit("/");
    cy.get(selectorList.inputUsername).type("Admin");
    cy.get(selectorList.inputPassword).type("admin123");
    cy.get(selectorList.buttonSubmit).click();
    cy.url().should('include', '/dashboard');

    // 2. Navegar para PIM → Employee List
    cy.get(selectorList.buttonPIM).click();
    cy.url().should('include', '/pim/viewEmployeeList');

    // 3. Pesquisar funcionário pelo nome
    cy.get(selectorList.placeholderEmployeeName).type(employeeFullName);
    // O autocomplete seleciona automaticamente ao digitar o nome completo
    cy.wait(1000); // Pequena espera para o autocomplete carregar
    cy.get(selectorList.buttonSearch).click();

    // 4. Clicar no registro do funcionário encontrado
    cy.get(selectorList.firstEmployeeRecord).click();
    cy.url().should('include', '/pim/viewPersonalDetails/empNumber');

    // 5. Ir para a aba Job
    cy.contains(selectorList.tabJob).click();
    cy.url().should('include', '/pim/viewJobDetails');

    // 6. Clicar em Edit
    cy.contains('button', 'Edit').click(); // Ou cy.get(selectorList.buttonEditJob).click();

    // 7. Alterar o Job Title
    // Localizar o dropdown de Job Title (geralmente o primeiro ou pelo label próximo)
    cy.get('.oxd-grid-item').contains('Job Title').parent().find('.oxd-select-text').click();

    // Selecionar a opção desejada
    cy.get(selectorList.dropdownOption).contains(newJobTitle).click();

    // 8. Salvar a alteração
    cy.get(selectorList.buttonSave).click();

    // 9. Verificação: Toast de sucesso e valor alterado
    cy.contains('.oxd-toast', 'Successfully Updated').should('be.visible');

    // Verificar que o novo cargo aparece
    cy.get('.oxd-grid-item').contains('Job Title').parent().within(() => {
      cy.contains(newJobTitle).should('exist');
    });

    // Evidência
    cy.screenshot('funcionario-cargo-editado-sucesso');
  });
});