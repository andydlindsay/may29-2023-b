describe('tests for cypress', () => {

  it('does it work?', () => {
    expect(42).to.equal(42);
  });

  it('can visit the homepage', () => {
    cy.visit('http://localhost:8765/')
  });

});
