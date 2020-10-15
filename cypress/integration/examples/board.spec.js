// const { createYield } = require('typescript');

context('Logging to Board Page', () => {
  it('logs in and tests creating and deleting cards', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');

    cy.get('.sc-hKFyIo').type('leandro@gmail.com');
    cy.get('.sc-jSFkmK').type('123456');
    cy.get(':nth-child(3) > .sc-bdnylx').click();

    // cy.get(':nth-child(2) > .sc-FRqcf > h4').contains('OBJETOS');
    cy.get(':nth-child(2) > .sc-dvXXZy > h4').contains('OBJETOS');
    // cy.get(':nth-child(3) > .sc-FRqcf > h4').contains('FERRAMENTAS');
    cy.get(':nth-child(3) > .sc-dvXXZy > h4').contains('FERRAMENTAS');
    cy.get('.sc-cBoprd > h2').contains('Notificações recentes');

    cy.wait(2000);
    cy.get('#card').click({ force: true });
    cy.get('#trash').click();
    cy.wait(2000);
    cy.get(':nth-child(6) > .sc-jNnnWF > .sc-cTJmaU > .sc-eirseW').click();
  });
});
