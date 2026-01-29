/// <reference types="cypress" />

describe('Screenshot', () => 
    {
    it('Taking screenshot', () =>
    {
         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
         cy.wait(2000);
        // cy.screenshot('LoginPage');


        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password1']").type('admin123');
        cy.get("button[type='submit']").click();
        cy.wait(2000);
        //command to take screenshot. this is first.
    })
})