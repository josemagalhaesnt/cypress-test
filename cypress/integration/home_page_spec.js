describe("The home page", () => {
  it("Loaded successfully", () => {
    cy.visit("/");
  });
  it("Found a button and clicked it", () => {
    cy.get("button")
      .click();
  })
  then("can change the name of the first input", () => {
    .get("input")
    .first()
    .clear()
    .type(
      "Pedro de Alcântara Francisco António João Carlos Xavier de Paula Miguel Rafael Joaquim José Gonzaga Pascoal Cipriano Serafim de Bragança e Bourbon"
    );
  })
});
