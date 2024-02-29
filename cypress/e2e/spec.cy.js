import Home from '../support/PageObject/Home.js'

const homePage = new Home()
describe('template spec', () => {

  beforeEach(() => {
    cy.visit('localhost:3000')
  })
  it('Search a valid account clicking on Go button - list of user repo should be shown', () => {
    homePage.getUsernameInput().type('ccalbete')
    homePage.getSubmitButton().click()
    homePage.getRepoListSection().should('be.visible')
  })

  it('Search unexisting account - an error message should show up', () => {
   cy.searchAnAccount('testccalbete')
   homePage.getFailureMessage().should('be.visible')
   homePage.getRepoListSection().should('not.exist')
  })
})