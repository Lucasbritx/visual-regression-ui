describe("Visuals", () => {
  it("should compare screenshot of the entire page", () => {
    cy.visit("https://www.google.com");
    cy.compareSnapshot("home-page");
  });
  it("should compare screenshot of the entire page", () => {
    cy.visit("https://www.google.com");
    cy.compareSnapshot({
      name: "home-page-with-threshold",
      testThreshold: 0.2,
    });
  });
});
