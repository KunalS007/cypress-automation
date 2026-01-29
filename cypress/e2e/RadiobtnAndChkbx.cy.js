
describe("Check UI Elements",() =>
{
    it("Checking Radio Button",() =>
    {
            cy.visit("https://jqueryui.com/checkboxradio/")

           cy.get("iframe").eq(0)   // locate the iframe
            .its("0.contentDocument.body").should("not.be.empty")   // ensure iframe body is loaded
            .then(cy.wrap)   // wrap body so you can use cy commands inside
            .find("input[name='radio-1']").eq(0)   // now find your radio
            .check({ force: true })          // check it (force:true in case it's hidden)
            .should("be.checked")

    })

    it("Checking the checkbox", () =>
    {
           cy.visit("https://jqueryui.com/checkboxradio/")

           cy.get("iframe").eq(0)
           .its("0.contentDocument.body").should("not.be.empty")
           .then(cy.wrap)
           .find(".ui-checkboxradio-label").contains('3 Star').click()

    })
})

