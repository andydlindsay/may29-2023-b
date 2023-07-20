describe('tests for the checkboxes', () => {

  beforeEach(() => {
    cy.visit('http://localhost:8765');
  });

  it('can uncheck the explicit checkbox', () => {
    cy.get('.filters__form-group') // 5 DOM elements
      .first()
      .find('input')
      .uncheck()
      .should('not.be.checked');
  });

  it('can check a checkbox by clicking on the label', () => {
    cy.contains('EP')
      .click();

    cy.get('#EP')
      .should('be.checked');
  });

});