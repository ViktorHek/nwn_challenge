describe("A visitor can,", () => {
	describe("if there are news,", () => {
		beforeEach(() => {
			cy.server();
			cy.route({
				method: "GET",
				url: "http://newsapi.org/v2/top-headlines",
				response: "fixture:news_index.json",
			});
			cy.visit("/");
		});

		it("successfully see list of news", () => {
			cy.get("[data-cy='news-index']").within(() => {
				cy.contains("DBS Bank to launch cryptocurrency exchange after condemning Bitcoin a Ponzi scheme in 2017");
			});
		});
	});
});
