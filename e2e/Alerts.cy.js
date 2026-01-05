describe("Alerts Handling" , () => {
    it.skip("Simple Alert" , () => {
        // launch the browser
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("#alertBtn").click();

        cy.on("window:alert" ,(str) => {
            expect(str).to.contains("I am an alert box!");
        })

        // alert window automatically closed by cypress
    })

    it.skip("Comfirmation Alert - OK" , () => {
        // launch the browser
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("#confirmBtn").click();

        cy.wait(2000)

        cy.on("window:confirm" ,(str) => {
            expect(str).to.contains("Press a button!");
        })

        cy.on("window:confirm" , () => true)

    })

    it.skip("Comfirmation Alert - Cancel" , () => {
        // launch the browser
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("#confirmBtn").click();

        cy.wait(2000)

        cy.on("window:confirm" ,(str) => {
            expect(str).to.contains("Press a button!");
        })

        cy.on("window:confirm" , () => false)

    })

     it.skip("Prompt Alert  OK" , () => {
        // launch the browser
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Welcome to Cypress');
        })

        cy.get("#promptBtn").click();

        cy.get("#demo").should("have.text" , "Hello Welcome to Cypress! How are you today?")

    })

    it.skip("Prompt Alert  Cancel" , () => {
        // launch the browser
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Welcome to Cypress');
        })

        cy.get("#promptBtn").click();

        cy.on("window:confirm" , () => false)

        cy.get("#demo").should("have.text" , "Hello Welcome to Cypress! How are you today?")

    })


})