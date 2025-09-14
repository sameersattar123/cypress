describe('CSSLocators', () => {
  it('search test by id', () => {

    cy.visit('https://outschool.com/search');
    

    cy.get('input[placeholder$="Any topic or teacher"]').type("Writing")

    cy.contains('button', 'Submit search').click()

  });
})
