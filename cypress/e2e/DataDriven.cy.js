///<reference types="cypress" />

describe('Data-Driven', () => 
{
    it('Data-Driven', () =>
    {
        cy.fixture('orange.json').then((data) =>
        {
            cy.visit("https://opensource-demo.orangehrmlive.com/");

            data.forEach((userdata) =>
            {
                cy.wait(2000);
                cy.get("input[name='username']").clear().type(userdata.username);
                cy.get("input[name='password']").clear().type(userdata.password);
                cy.get("button[type='submit']").click();

                
                if(userdata.username === 'Admin' && userdata.password === 'admin123')
                {
                    cy.get(":nth-child(2) > .oxd-main-menu-item > .oxd-text").should('have.text', userdata.expected);
                    cy.wait(2000);

                    cy.get('.oxd-userdropdown-tab > .oxd-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                }
                else
                {
                    cy.get('.oxd-alert-content > .oxd-text').should('have.text', userdata.expected);
                }
                    
            }) 
        })
    })
})