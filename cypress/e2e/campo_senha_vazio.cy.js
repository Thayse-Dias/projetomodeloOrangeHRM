/// <reference types="cypress" />

describe("CT-RF01-04 - Campo de senha vazio", { tags: "@smoke" }, () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve impedir o login quando a senha não é informada", () => {
    // Arrange
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').clear();

    // Act
    cy.get('button[type="submit"]').click();

    // Assert
    // O comportamento esperado é que o login NÃO seja bem-sucedido
    // Verificamos que ainda estamos na página de login
    cy.url().should('not.contain', '/dashboard');
    cy.url().should('contain', '/auth/login');
    
    // Verificamos que os elementos da página de login ainda estão visíveis
    cy.get('.orangehrm-login-branding').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
    
    // Cleanup (opcional): limpa os campos para testes subsequentes
    cy.get('input[name="username"]').clear();
  });
});