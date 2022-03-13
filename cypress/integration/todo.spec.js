/// <reference types="cypress" />

describe('end to end test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Verify a Todo Item can be created', () => {
    cy.get('.new-todo').type('Rojal Bati{enter}')
    cy.get('label').should('be.exist');
    cy.get('label').should('have.text','Rojal Bati')
  })

  it('Verify a Todo Item can be Deleted', () => {
    cy.get('.destroy').click({ force: true })
    cy.get('label').should('not.exist');
  })

})
