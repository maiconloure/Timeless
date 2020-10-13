// const { createYield } = require('typescript');

context('Logging to Board Page', () => {
  it('logs in and tests creating and deleting cards', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');

    cy.get('.sc-hKFyIo').type('leandro@gmail.com');
    cy.get('.sc-jSFkmK').type('123456');
    cy.get(':nth-child(3) > .sc-bdnylx').click();

    cy.get(':nth-child(2) > .sc-fbIXFq > h4').contains('OBJETOS');
    cy.get(':nth-child(3) > .sc-fbIXFq > h4').contains('FERRAMENTAS');
    cy.get('.sc-cBoprd > h2').contains('Notificações recentes');

    cy.get(':nth-child(2) > .sc-fXazxj > :nth-child(2)').click();

    // cy.get('#fast').click();
  });
});
