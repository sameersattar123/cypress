describe("iFrames" , () => {

    it.skip("Approach 01" , () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");

        const iframe = cy.get("#mce_0_ifr")
        .its("0.contentDocument.body")
        .should("be.visible")
        .then(cy.wrap)
        .invoke("attr", "contenteditable", "true") 

        iframe.clear().type("Sameer Sattar")
        
        cy.get("[aria-label='Bold']").click();

    })

      it.skip("Approach 02" , () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.getIframe("#mce_0_ifr").clear().type("Sameer Sattar {ctrl+a}")
        
        cy.get("[aria-label='Bold']").click();

    })

      it("Approach 03 - Using cypress iframe plugin" , () => {

        cy.visit("https://the-internet.herokuapp.com/iframe");

        cy.frameLoaded("#mce_0_ifr");

        cy.iframe("#mce_0_ifr").clear().type("Sameer Sattar {ctrl+a}")

        

    })
})