

describe('My First Test', () => 
{
  it('test1', () => 
    {
         cy.visit("https://opensource-demo.orangehrmlive.com/");

         cy.title().should('eq','OrangeHRM')
    })
})


