///<reference types = "cypress"/>

describe('Tables', () => 
{
    beforeEach('Login',() =>
    {
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();
    })

  it('Table Test', () => 
    {
         cy.get(".nav > :nth-child(4) > .nav-link")
         .each(($row, index, $rows) =>
        {
            cy.wrap($row).within(() =>
            {
                cy.get("td").each(($col, index, $cols) =>
                {
                    cy.log($col.text());
                })
            })

        })
    })
})