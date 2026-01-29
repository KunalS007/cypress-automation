////<reference types ="Cypress"/>

describe ('handle dropdowns',() => 
{
    it ('dropdown with select', ()=> 
    {
        cy.visit('https://www.google.com')
        cy.get("textarea[name='q']").type('Cypress Automation')
        cy.wait(3000)
        cy.get("div.wM6W7d>span").should('have.length',13)

        cy.get("div.wM6W7d>span").each(($el, index, $list)=> 
        {
            if($el.text()== 'cypress automation tutorial')
            {
                cy.wrap($el).click()
            }
        })
        cy.get("input[name='q']").should('have.value','cypress automation tutorial')  
    })  
})