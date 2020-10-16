context('Logging to Board Page', () => {
  it('logs in and tests creating cards', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');
    cy.get('.sc-hKFyIo').type('leandro@gmail.com');
    cy.get('.sc-jSFkmK').type('123456');
    cy.get(':nth-child(3) > .sc-bdnylx').click();

    cy.get(':nth-child(2) > .sc-kYQaHc > h4').contains('OBJETOS');
    cy.get(':nth-child(3) > .sc-kYQaHc > h4').contains('FERRAMENTAS');
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
    cy.get('#card12 > .sc-FRqcf').click();
  });

  it('blocks a card', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');
    cy.get('.sc-hKFyIo').type('leandro@gmail.com');
    cy.get('.sc-jSFkmK').type('123456');
    cy.get(':nth-child(3) > .sc-bdnylx').click();

    cy.get('#blocked').click();
    cy.get('#card11 > .sc-FRqcf').click();
  });
});

context('Logging to Board Page', () => {
  it('logs in and tests all creation menu buttons', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');

    cy.get('.sc-hKFyIo').type('rafael@gmail.com');
    cy.wait(1000);
    cy.get('.sc-jSFkmK').type('123456');
    cy.wait(1000);
    cy.get(':nth-child(3) > .sc-bdnylx').click();
    cy.wait(4000);

    cy.get('#card').click();
    cy.wait(1500);
    cy.get('#fast').click();
    cy.wait(1500);
    cy.get('#trash').click();
    cy.wait(1500);
    cy.get('#connect').click();
    cy.wait(1500);
    cy.get('#pin').click();
    cy.wait(1500);
    cy.get('#blocked').click();
    cy.wait(1500);
    cy.get('.sc-iXeIkk > img').click();
    cy.wait(1500);
    cy.get('.sc-jLqSar > :nth-child(4)').click();
    cy.wait(1500);
  });
});
