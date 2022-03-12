/// <reference types="cypress" />

describe('end to end test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('Create a Todo Item', () => {
    cy.get('.new-todo').type('Rojal Bati{enter}')
  })

  it('Get the created Todo Item', () => {
    cy.get('label').should('be.exist');
    cy.get('label').should('have.text','Rojal Bati')
  })

  it('Delete the created Todo Item', () => {
    cy.get('.destroy').click({ force: true })
  })

  it('Get the deleted Todo Item', () => {
    cy.get('label').should('not.exist');
  })

}) //Comment to view the comment by Cypress Dashboard on PR
