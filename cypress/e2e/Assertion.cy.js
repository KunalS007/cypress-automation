///<reference types ="cypress"/>




describe ("Assertion demo", () => {
    it("Implicit Assertion",() =>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    

        cy.url().should('include','orangehrmlive.com')
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain','orangehrm')
   

        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain','HRM')

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        // Soft check: log and continue
        cy.get('a').then($links => 
        {
            const count = $links.length
            if (count !== 5) 
            {
                cy.log(`⚠️ Expected 5 links, found ${count}. Continuing without failing.`)
            }
})
// more steps keep running here...
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='username']").should('have.value','Admin')
        

        cy.get("input[name='password']").type("admin123")
        cy.get("input[name='password']").should('have.value','admin123')
   })
        it("Implicit Assertion",() =>{
        
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[name='username']").type("Admin")
        cy.get("input[name='password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expName ="xyz";
        cy.get(".oxd-userdropdown-name").then(  (x)=> {
            
            //BDD
            let actName = x.text()
            expect (actName).equal(expName)

            //TDD
            assert.equal(actName,expName)
            assert.notEqual(actName,expName)
        })
        
        })
})