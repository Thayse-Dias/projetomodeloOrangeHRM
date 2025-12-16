describe("CT-RF01-03 - Login inválido – usuário inexistente", { tags: "@smoke" }, () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve exibir mensagem 'Invalid credentials' ao informar usuário inexistente", () => {
    // Anotações no Allure
    cy.allure().feature("Autenticação");
    cy.allure().story("Login");
    cy.allure().severity("critical");

    // Preenche usuário inexistente
    cy.get('input[name="username"]').type("usuarioInexistente123");

    // Preenche senha qualquer (pode ser a correta ou não – o erro será o mesmo)
    cy.get('input[name="password"]').type("qualquerSenha", { log: false });

    // Clica no botão Login
    cy.get('button[type="submit"]').click();

    // Verifica que permanece na página de login
    cy.url().should("not.include", "/dashboard");

    // Verifica a mensagem de erro exata
    cy.get(".oxd-alert-content-text")
      .should("be.visible")
      .and("have.text", "Invalid credentials");

    // Verifica o estilo de erro (fundo laranja-avermelhado)
    cy.get(".oxd-alert--error").should("be.visible");
  });
});