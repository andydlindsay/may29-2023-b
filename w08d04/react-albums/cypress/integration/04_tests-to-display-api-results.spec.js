describe('tests to display api results', () => {

  it('can display the results of query', () => {
    // visit the website
    cy.visit('/');

    // intercept the outgoing request and respond with our hardcoded data instead
    cy.intercept('GET', '**/search*', { fixture: 'itunes' })
      .as('api-response');

    // find the input field and type "Daft Punk"
    cy.get('.search__form')
      .find('input')
      .type('Daft Punk');

    // check to see if the spinner is visible
    cy.get('.spinner')
      .should('be.visible');

    // wait for the api request to resolve
    cy.wait('@api-response');

    // look for a particular album (anything from hardcoded data)
    cy.contains('Random Access Memories');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck()
      .should('not.be.checked');

    // make sure that the explicit album does not appear in the search results
    cy.get('article.album')
      .should('not.contain', 'Daft Club');
  });

});