/// <reference types="Cypress" />

describe('initial visit', () => {
  beforeEach(() => {
    cy.visit('clever-instrument.surge.sh')
  })

  it('should be visible the initial elements of the page', () => {
    cy.get('.GlobalComponents__Title-sc-114zzvs-3')
    cy.get('.styles__Select-sc-9mbjgt-0')
    cy.get('.GlobalComponents__Loader-sc-114zzvs-4')
  })

  it('should disapear the loader component and show the products', () => {
    cy.get('.GlobalComponents__Loader-sc-114zzvs-4')
    cy.get('.GlobalComponents__Row-sc-114zzvs-1')
    cy.get('.GlobalComponents__Loader-sc-114zzvs-4').should('not.exist')
  })

  it('should have fetch all the data', () => {
    cy.get('.dLWdsV', { timeout: 5000 }).should('have.descendants', 'div')
    cy.get('.dLWdsV', { timeout: 5000 }).children().should('have.length', 101)
  })

  it('should print the first product of the fetched data', () => {
    cy.get(':nth-child(1) > .styles__CardContainer-x84nsf-0')
    cy.get(':nth-child(1) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Transcof')
    cy.get(':nth-child(100) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Konklux')
  })
})

describe('basic interaction', () => {
  beforeEach(() => {
    cy.visit('clever-instrument.surge.sh')
  })
  it('should sort correctly on price ascending', () => {
    cy.wait(1000)
      .then(() => {
        cy.get('.styles__Select-sc-9mbjgt-0').select('price')
        cy.get(':nth-child(1) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Stringtough')
        cy.get(':nth-child(100) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Andalax')
      })
  })

  it('should sort correctly on price descending', () => {
    cy.wait(1000)
      .then(() => {
        cy.get('.styles__Select-sc-9mbjgt-0').select('price_desc')
        cy.get(':nth-child(1) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Andalax')
        cy.get(':nth-child(100) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Stringtough')
      })
  })

  it('should sort correctly on name ascending', () => {
    cy.wait(1000)
      .then(() => {
        cy.get('.styles__Select-sc-9mbjgt-0').select('name')
        cy.get(':nth-child(1) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Alpha')
        cy.get(':nth-child(100) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Zoolab')
      })
  })

  it('should sort correctly on name descending', () => {
    cy.wait(1000)
      .then(() => {
        cy.get('.styles__Select-sc-9mbjgt-0').select('name_desc')
        cy.get(':nth-child(1) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Zoolab')
        cy.get(':nth-child(100) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Alpha')
      })
  })

  it('should sort correctly on sale ascending', () => {
    cy.wait(1000)
      .then(() => {
        cy.get('.styles__Select-sc-9mbjgt-0').select('eyecatcher')
        cy.get(':nth-child(1) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Transcof')
        cy.get(':nth-child(100) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Subin')
      })
  })

  it('should sort correctly on sale descending', () => {
    cy.wait(1000)
      .then(() => {
        cy.get('.styles__Select-sc-9mbjgt-0').select('eyecatcher_desc')
        cy.get(':nth-child(1) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Konklux')
        cy.get(':nth-child(100) > .styles__CardContainer-x84nsf-0 > .styles__ContentContainer-x84nsf-4 > .styles__InfoContainer-x84nsf-5 > h3').should('have.text', 'Konklux')
      })
  })
})
