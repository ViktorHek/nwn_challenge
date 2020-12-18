describe('When visitors enter the page it', () => {

  it('is expected to display the latest headlines from various news organizations', () => {
    cy.visit('/')
    cy.get("[data-cy='news-card']").within(() => {
      cy.get(".image").should("exist")
      cy.get(".header").should("exist")
      cy.get(".meta").should("exist")
      cy.get(".description").should("exist")
      cy.get(".extra").should("exist")
    })
  });
});
