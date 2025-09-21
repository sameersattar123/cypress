describe("Assertions", () => {
  it("Implicit Assertion", () => {
    // cy.visit("https://outschool.com/");
    

    // check url validations using should

    //  cy.url().should("include" , "outschool")
    //  cy.url().should("eq" , "https://outschool.com/")
    //  cy.url().should("contain" , "outschool.com")

    // check url validations using should ( use one time url and mutliple times should)

    //  cy.url().should("include" , "outschool")
    //          .should("eq" , "https://outschool.com/")
    //          .should("contain" , "outschool.com")

    // check url validations using should ( use one time url and one times should and "and" conditions)

    //  cy.url().should("include" , "outschool")
    //          .and("eq" , "https://outschool.com/")
    //          .and("contain" , "outschool.com")
    //          .and("not.contain" , "outofschool.com")

    // check title validations using should ( use one time url and one times should and "and" conditions)

    // cy.title()
    //   .should("include", "Set Learning Free:")
    //   .and(
    //     "eq",
    //     "Set Learning Free: Let kids’ curiosity run wild with classes and groups on any topic you can imagine."
    //   )
    //   .and(
    //     "contain",
    //     "curiosity run wild with classes and groups on any topic you can imagine."
    //   )
    //   .and("not.contain", "sameer sattar");

    // check logo is visible/exist or not
    // cy.xpath("//div[@class='MuiBox-root outschool-1efrfsm']//*[name()='svg']").should("be.visible")
    // cy.xpath("//div[@class='MuiBox-root outschool-1efrfsm']//*[name()='svg']").should("exist")

    // cy.xpath("//div[@class='MuiBox-root outschool-1efrfsm']//*[name()='svg']")
    //   .should("be.visible")
    //   .and("exist");

    // check how many links are presents in the page 
    // cy.xpath("//a").should("have.length" , 175)

    // check the value in the input 
    cy.visit("https://outschool.com/users/login?postLoginPath=%2Fonboarding-quiz");
    cy.xpath("//input[@type='email']").type("sameersattar@gmail.com").should("have.value" , "sameersattar@gmail.com")

    
  });
});

// Assertions notes

// ====>Implicit Assertions (buildin assertions)
//      should , and
// ====>Explicit Assertions
//      expect used in BDD framework,
//      assert used in TDD framework
