// const { createYield } = require('typescript');

context('Logging to Board Page', () => {
  it('logs in and tests creating cards', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');
    cy.get('.sc-hKFyIo').type('leandro@gmail.com');
    cy.get('.sc-jSFkmK').type('123456');
    cy.get(':nth-child(3) > .sc-bdnylx').click();

    cy.get(':nth-child(2) > .sc-bsatbK > h4').contains('OBJETOS');
    cy.get(':nth-child(3) > .sc-bsatbK > h4').contains('FERRAMENTAS');
    cy.get('.sc-cBoprd > h2').contains('Notificações recentes');

    cy.wait(2000);
    cy.get('#card').click({ force: true });
  });

  it('pins a card', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');
    cy.get('.sc-hKFyIo').type('leandro@gmail.com');
    cy.get('.sc-jSFkmK').type('123456');
    cy.get(':nth-child(3) > .sc-bdnylx').click();

    cy.get('#pin').click();
    cy.get('#card12 > .sc-eirseW').click();
  });

  it('blocks a card', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');
    cy.get('.sc-hKFyIo').type('leandro@gmail.com');
    cy.get('.sc-jSFkmK').type('123456');
    cy.get(':nth-child(3) > .sc-bdnylx').click();

    cy.get('#blocked').click();
    cy.get('#card11 > .sc-eirseW').click();
  });
});
