///<reference types = "cypress"/>

describe("Hanlding Frame", () => 
{
    it('approach',() => 
    {
        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.get("#mce_0_ifr")
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);

        cy.wait(5000); 
        iframe.clear().type("Welcome");
    })

    it('approach 2',() =>
    {
        cy.frameLoaded()
    })
})