describe("handle Dropdowns" , () => {
     
    it.skip("select option" , () => {

        // launch the browser
        cy.visit("https://testautomationpractice.blogspot.com/")

        // select the dropdown option and check it is selected or not
        cy.get("#country")
        .select("canada")
        .should("have.value" , "canada")
    })

    it.skip("Search Dropdown" , () => {

        // launch the browser
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get("#select2-billing_country-container").click();

        cy.get(".select2-search__field").type("India").type("{enter}")

        cy.get("#select2-billing_country-container").should("have.text" , "British Indian Ocean Territory")

    })

     it.skip("Auto Suggestion Dropdown" , () => {

        // launch the browser
        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").type("Delhi");

        cy.get(".suggestion-title").contains("Delhi University").click();


    })


    it("Dynamic Dropdown" , () => {

        // launch the browser
        cy.visit("https://www.google.com/")

        cy.get("textarea[name='q']").type("narcissistic disorder symptoms");

        cy.wait(5000)

        cy.get("div.wM6W7d>span").each(($el, index, $list) => {

        if($el.text() == 'narcissistic disorder symptoms'){
            
          cy.wrap($el).click()          
        }

        cy.get("textarea[name='q']").should("have.value" , "narcissistic disorder symptoms")
    
})

})

})