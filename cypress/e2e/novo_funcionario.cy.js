describe("CT-RF03-01 - Adicionar novo funcionário", () => {
  const selectorList = {
    inputUsername: "input[name='username']",
    inputPassword: "input[name='password']",
    buttonSubmit: "button[type='submit']", // Usado para Login e Save
    
    // Seletores da página de Adicionar Funcionário
    buttonPIM: "a[href*='pim/viewPimModule']",
    placeholderFirstName: "input[placeholder='First Name']",
    placeholderMiddleName: "input[placeholder='Middle Name']",
    placeholderLastName: "input[placeholder='Last Name']",
    employeeNameHeader: ".orangehrm-edit-employee-name",
    // Seletores do switch: usaremos o wrapper para o find
    switchWrapper: '.oxd-switch-wrapper' // O elemento clicável/container para alternar
  };

  it("Deve adicionar novo funcionário com nome e sobrenome", () => {
    // 0. Preparação de Dados
    const timestamp = Date.now();
    const firstName = `Funcionario${timestamp}`;
    const middleName = 'Do';
    const lastName = `Teste${timestamp}`;
    
    // 1. Login
    cy.visit("/");
    cy.get(selectorList.inputUsername).type("Admin");
    cy.get(selectorList.inputPassword).type("admin123");
    cy.get(selectorList.buttonSubmit).click();
    cy.url().should('include', '/dashboard');

    // 2. Navegar para PIM e Add Employee
    cy.get(selectorList.buttonPIM).click();
    cy.url().should('include', '/pim/viewEmployeeList');
    
    cy.contains('button', 'Add').click();
    cy.url().should('include', '/pim/addEmployee');

    // 3. Desligar o switch de criação de login (Se estiver ativo)
    
    // CORREÇÃO: Usamos cy.get('body').find() para verificar a existência do elemento
    // sem falhar o teste caso ele não esteja no DOM inicialmente, mas adicionamos
    // uma espera para que o Cypress consiga encontrá-lo, se presente.
    cy.wait(1000); // Espera 1 segundo para garantir que a página carregou completamente
    
    cy.get('body').then($body => {
        // Tenta encontrar o input do switch dentro do body com um tempo de espera curto (default: 4000ms, mas find é instantâneo se não usar timeout)
        const $switch = $body.find('.oxd-switch-input[type="checkbox"]');

        if ($switch.length > 0) {
             // Se o switch existe, verifica seu estado
            if ($switch.is(':checked')) {
                cy.wrap($body).find(selectorList.switchWrapper).click();
                cy.log('Switch de Login Desativado.');
            } else {
                cy.log('Switch de Login já estava desativado.');
            }
        } else {
            cy.log('Switch de Login não encontrado no DOM. Prosseguindo.');
        }
    });

    // 4. Preencher nome
    cy.get(selectorList.placeholderFirstName).type(firstName);
    cy.get(selectorList.placeholderMiddleName).type(middleName);
    cy.get(selectorList.placeholderLastName).type(lastName);

    // 5. Salvar
    cy.contains(selectorList.buttonSubmit, 'Save').click();
    
    // 6. Verificar Resultado (A regex já está correta da última vez)
    cy.url().should('match', /\/pim\/viewPersonalDetails\/empNumber\/\d+/)
      .then(() => {
        cy.get(selectorList.employeeNameHeader)
          .should('contain', firstName)
          .and('contain', lastName);
        cy.log('✅ Funcionário criado com sucesso na página de detalhes.');
    });
    
    // Evidência
    cy.screenshot('novo-funcionario-criado-sucesso');
  });
});