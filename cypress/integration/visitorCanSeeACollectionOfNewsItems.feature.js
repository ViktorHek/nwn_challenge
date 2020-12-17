describe('When visitors enter the page it', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      url: 'http://newsapi.org/v2/top-headlines?country=us&apiKey=6340032834b34762a08575d2d96e7f38',
      method: "GET",
      response: "fixture:news_index.json"
    })
  })
  it('is expected to show an list of display the latest headlines from various news organizations', () => {
    cy.visit('/')
    cy.get("[data-cy='news-card']").should("contain", 
    "By: modemflame5 at Slashdot.org")
    .and("contain", "WWS Swiss Financial Consulting SA")
    .and("contain", "How To Build A Trusted Brand In An Untrusted World: Blockchain")
    .and("contain", "Bitcoin slipped below $18,000 again Thursday as ether’s volatility in 2020 shows a different dynamic than BTC.")
    .and("contain", "Published at 2020-12-10T21:23:41Z")
    .and("contain", 'Why Massive Bitcoin Miner Outflow Has This Top Quant Analyst “Scared”')
  });
});