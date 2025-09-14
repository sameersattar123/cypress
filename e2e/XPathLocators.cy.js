describe("XPath Locators" , () => {
    it('count lenght of classes of writing ', () => {

        cy.visit('https://outschool.com/search');

        cy.get('input[placeholder$="Any topic or teacher"]').type("Writing")

        cy.contains('button', 'Submit search').click()

        cy.xpath("//div[@class='MuiBox-root outschool-3rfphh']/div").should("have.length.greaterThan" , 0)

    });   
})