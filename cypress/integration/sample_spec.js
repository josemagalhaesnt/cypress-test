describe("Find a input", () => {
  it("Visit a website", () => {
    cy.visit("https://example.cypress.io");
    cy.pause();
    cy.contains("type").click();
    cy.url().should("include", "/commands/actions");
    cy.get(".action-email")
      .type("email@email.com")
      .should("have.value", "email@email.com");
  });
});
