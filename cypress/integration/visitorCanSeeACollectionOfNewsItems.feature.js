describe("A visitor can", () => {
	it("successfully see list of news", () => {
		cy.visit("/");
		cy.get("[data-cy='news-index']").within(() => {
			cy.get(".header").should("exist");
			cy.get(".image").should("exist");
			cy.get(".meta").should("exist");
			cy.get(".description").should("exist");
			cy.get(".extra").should("exist");
		});
	});
});