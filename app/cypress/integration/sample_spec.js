describe("App", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("Should pass!", () => {
    cy.get(".ImageGrid").should("be.visible");
  });
});
