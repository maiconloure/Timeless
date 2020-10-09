const { createYield } = require('typescript');

context('Logging to Board Page', () => {
  it('logs in and tests full render', () => {
    cy.visit('http://localhost:3000');

    cy.get('.sc-hKFyIo').type('leandro@gmail.com');
    cy.get('.sc-jSFkmK').type('123456');
    cy.get(':nth-child(3) > .sc-bdnylx').click();

    cy.get(':nth-child(2) > .sc-FRqcf > h4').contains('OBJETOS');
    cy.get('#card').click();
    cy.get('#fast').click();
    cy.get(':nth-child(3) > .sc-FRqcf > h4').contains('FERRAMENTAS');
    cy.get('.sc-cBoprd > h2').contains('Notificações recentes');

    cy.get(':nth-child(1) > :nth-child(2) > p').contains('aqui vai uma descrição');
  });
});
