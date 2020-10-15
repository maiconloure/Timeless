context('Login and Register (Landing) Page Rendering', () => {
  it('Render and click buttons on landing page', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');

    cy.contains('Exemplo');
    cy.contains('Times');
    cy.contains('Sobre');
    cy.wait(2000);
    cy.get('.sc-flUlJl > :nth-child(1)').click();
    cy.wait(2000);
    cy.get('.sc-flUlJl > :nth-child(2)').click();
    cy.wait(2000);
    cy.get('.sc-flUlJl > :nth-child(3)').click();
    cy.wait(2000);
    cy.get('.sc-gkCpWe > img').click();

  });
});
