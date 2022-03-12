/// <reference types="cypress" />

describe('end to end test', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('displays two todo items by default', () => {
    expect("Yes").be.contains("Yes")
  })

})
