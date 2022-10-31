describe('App tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-test=word-search]').as('searchInput');
    cy.get('[data-test=search-button]').as('searchButton');
  });

  it('Page rendered', () => {
    cy.findByText('Favourites').should('exist');
    cy.findByText('Search History').should('exist');
    cy.get('@searchInput').should('exist');
  });

  it('Clear button check', () => {
    cy.get('@searchInput').type('test').should('have.value', 'test');
    cy.get('[data-test=clear-button]').click();
    cy.get('@searchInput').should('have.value', '');
  });

  it('Searh correct word and submit with button', () => {
    cy.get('@searchInput').type('indigo').should('have.value', 'indigo');
    cy.get('@searchButton').click();
    cy.get('[data-test=history-quick-link-indigo]').should('exist');
    cy.get('[data-test=word-card-indigo]').should('exist');
    cy.get('@searchInput').should('have.value', '');
  });

  it('Search wrong word and submit from keyboard', () => {
    cy.get('@searchInput').type('violetttt').should('have.value', 'violetttt');
    cy.get('@searchInput').type('{enter}');
    cy.findByText('Unknown word').should('exist');
  });

  it('Add/Remove favorites', () => {
    cy.get('@searchInput').type('coral');
    cy.get('@searchButton').click();
    cy.get('[data-test=word-card-coral] button').click();
    cy.get('[data-test=favorite-quick-link-coral]').should('exist');
    cy.get('[data-test=word-card-coral] button').click();
    cy.get('[data-test=favorite-quick-link-coral]').should('not.exist');
  });

  it('Sort word cards using quick links', () => {
    cy.get('@searchInput').type('azure');
    cy.get('@searchButton').click();
    cy.get('[data-test=word-card-azure]').should('exist');

    cy.get('@searchInput').type('ivory');
    cy.get('@searchButton').click();
    cy.get('[data-test=word-card-ivory]').should('exist');

    cy.get('[data-test*=history-quick-link]').should('have.length', 2);
    cy.get('[data-test*=history-quick-link]').eq(1).should('have.text', 'azure');
    cy.get('[data-test*=history-quick-link]').eq(0).should('have.text', 'ivory');

    cy.get('[data-test=history-quick-link-azure]').click();
    cy.get('[data-test*=history-quick-link]').eq(0).should('have.text', 'azure');
  });
});
