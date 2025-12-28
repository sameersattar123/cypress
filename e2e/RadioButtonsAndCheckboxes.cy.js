describe("Check UI Elements" , () => {
    // it("Checking radio buttons" , () => {

    //     // launch the browser
    //     cy.visit("https://testautomationpractice.blogspot.com/");

    //     // check the check boxes are avaible or not 
    //     cy.get("input#male").should("be.visible")

    //     cy.get("input#female").should("be.visible")

    //     // selecting male checkbox and check female should automatically unchecked
    //    cy.get("input#male").check().should("be.checked")
    //    cy.get("input#female").should("not.be.checked")

    //     // selecting female checkbox and check male checkbox should automatically unchecked
    //    cy.get("input#female").check().should("be.checked")
    //    cy.get("input#male").should("not.be.checked")

    // })

    it("Checking check boxes" , () => {
         // launch the browser
        cy.visit("https://testautomationpractice.blogspot.com/");

        // check the monday checkbox is visible or not
        cy.get("input#monday").should("be.visible")

        // check the monday checkbox and uncheck the monday checkbox 
        cy.get("input#monday").check().should("be.checked")
        cy.get("input#monday").uncheck().should("not.be.checked")

        // check all the checkbox 
        cy.get("input.form-check-input[type='checkbox']").check().should("be.checked")

        cy.get("input.form-check-input[type='checkbox']").uncheck().should("not.be.checked")

        // check the first and last checkbox and check it should be checked or not  
        cy.get("input.form-check-input[type='checkbox']").first().check().should("be.checked")
        cy.get("input.form-check-input[type='checkbox']").last().check().should("be.checked")

    })
})