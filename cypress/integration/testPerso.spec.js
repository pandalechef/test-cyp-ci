/// <reference types="cypress" />

context("Actions", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  // https://on.cypress.io/interacting-with-elements

  it(".type() - type into a DOM element", () => {
    // https://on.cypress.io/type
    cy.get("input")
      .type("helllooooo", { delay: 3000 })
      .should("have.value", "helllooooo");
  });
});
