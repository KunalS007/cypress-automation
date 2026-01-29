///<reference types="cypress" />

describe('Custom Command', () => 
{
    it('Handling links', () =>
    {
        cy.visit('https://naveenautomationlabs.com/opencart/');
        cy.wait(1000);
        cy.scrollTo(0, 300);

        //without custom command
        cy.wait(2000);
        //cy.get(':nth-child(2) > .product-thumb > .caption > h4 > a').click();
        
        //with custom command
        cy.clickLink('iPhone');

        cy.wait(3000);
        cy.get('h1').should('have.text', 'iPhone');
    })

    it('Overwriting existing command', () =>
    {
        cy.visit('https://naveenautomationlabs.com/opencart/');
        cy.wait(1000);
        cy.scrollTo(0, 300);
        cy.wait(1000);

        cy.clickLink("iPhone");

        cy.wait(3000);
        cy.get('h1').should('have.text', 'iPhone');
    })

    it.only('Login', () =>
    {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.wait(2000);
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.get("button[type='submit']").click();

    })
})