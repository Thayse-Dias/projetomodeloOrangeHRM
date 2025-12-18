describe('Regressão Crítica - OrangeHRM', () => {

  it('Fluxo crítico: login + dashboard + logout', () => {
    cy.allure().feature('Regressão')
    cy.allure().story('Fluxo crítico principal')
    cy.allure().severity('blocker')

    cy.fixture('users').then((user) => {
      cy.login(user.admin.username, user.admin.password)
      cy.contains('Dashboard').should('be.visible')
      cy.get('.oxd-userdropdown-name').click()
      cy.contains('Logout').click()
    })
  })
})
