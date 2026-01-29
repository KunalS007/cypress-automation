///<reference types = "cypress"/>

describe('Alerts', () => 
{
    it('JS Alert', () => 
    {
         cy.visit("http://the-internet.herokuapp.com/javascript_alerts")
         cy.get("button[onclick='jsAlert()']").click();

         cy.get(':nth-child(2) > button').click();

         cy.on('window.alert',(t)=>
         {
            expect(t).to.contains('I am a JS Alert');
         })

        // cy.get("//p[@id='result']").should.contains('You successfully clicked an alert');
         cy.xpath("//p[@id='result']").should('have.text','You successfully clicked an alert');

    })

     it.only('JS Alert 2', () => 
    {
         cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
         cy.get("button[onclick='jsConfirm()']").click();
         cy.on('window:confirm',(t)=>
         {
            expect(t).to.contains('I am a JS Confirm');
         })

         cy.xpath("//p[@id='result']").should('have.text','You clicked: Ok');

    })

    
})


