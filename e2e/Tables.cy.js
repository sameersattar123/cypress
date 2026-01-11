describe("handle Tables", () => {

  it.skip("Static Table", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.get("table[name='BookTable'] > tbody > tr").should("have.length", "7");
  });

  it.skip("Check cell data for specific row and column", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.get(
      "table[name='BookTable'] > tbody > tr:nth-child(4) > td:nth-child(3)"
    ).contains("Javascript");
  });

  it.skip("Check all cell data for each row and column", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.wait(5000);

    cy.get("table[name='BookTable'] > tbody > tr").each((row) => {
      cy.wrap(row)
        .find("td,th")
        .each((col) => {
          cy.log(col.text());
        });
    });
  });

  it("Pagination Table", () => {
    cy.visit("https://testautomationpractice.blogspot.com/");

    cy.wait(5000);

    cy.get("table[name='BookTable'] > tbody > tr").each((row) => {
      cy.wrap(row)
        .find("td,th")
        .each((col) => {
          cy.log(col.text());
        });
    });
  });
});
