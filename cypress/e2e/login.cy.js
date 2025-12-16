/* global cy, describe, it, beforeEach */

describe("CT-RF01-01 - Login bem-sucedido com credenciais válidas", { tags: "@smoke" }, () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Deve realizar login com sucesso e redirecionar para o Dashboard", () => {
    cy.allure().feature("Autenticação")
    cy.allure().story("Login")
    cy.allure().severity("blocker")

    cy.get('input[name="username"]').type("Admin")
    cy.get('input[name="password"]').type("admin123", { log: false })
    cy.get('button[type="submit"]').click()

    cy.url().should("include", "/dashboard")
    cy.get(".oxd-topbar-header-title").should("contain.text", "Dashboard")
    cy.get(".oxd-userdropdown-name").should("be.visible")
  })
})
