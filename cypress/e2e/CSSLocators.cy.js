/// <reference types="cypress" />

describe('CSSLocators',()  =>{

it("csslocators", () =>{

    cy.visit("http://www.automationpractice.pl/index.php")
    cy.get("#search_query_top").type("T-shirts")
    cy.get("[name='submit_search']").click()

   cy.get('.lighter', { timeout: 20000 })        // give results time to render
  .should('contain.text', 'T-Shirts')  
})


}) 




