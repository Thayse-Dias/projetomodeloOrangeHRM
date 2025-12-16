/// <reference types="cypress" />

describe("CT-RF01-02 - Login inválido – senha errada", { tags: "@smoke" }, () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Deve exibir mensagem 'Invalid credentials' em vermelho ao informar senha incorreta", () => {
    cy.allure().feature("Autenticação");
    cy.allure().story("Login");
    cy.allure().severity("critical");

    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("senhaerrada", { log: false });
    cy.get('button[type="submit"]').click();

    cy.url().should("not.include", "/dashboard");

    cy.get(".oxd-alert-content-text")
      .should("be.visible")
      .and("have.text", "Invalid credentials");

    // Corrigido: verifica a classe de erro em vez de cor exata
    cy.get(".oxd-alert--error").should("be.visible");
  });
});