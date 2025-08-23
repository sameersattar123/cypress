describe('My first Test', () => {

  it('test1-verify title', () => {
    cy.visit("https://outschool.com/");
    cy.title().should("eq" , "Set Learning Free: Let kids’ curiosity run wild with classes and groups on any topic you can imagine.")   
  });

  it('test1-verify negative test', () => {
    cy.visit("https://outschool.com/");
    cy.title().should("eq" , "Set Learning Free: Let kids’ curiosity run wild with classes and groups on any topic you can imagine")   
  });
})


// commands rules : 

// npx cypress open // This command open the cypress dasboard

// npx cypress run // This command run all the files of cypress

// npx cypress run --headed // This command run all the files of cypress with UI 

// npx cypress run --headed // This command run all the files of cypress with UI 

// npx cypress run -- brower chrome file location --headed // This command run file in specific browser  with UI 