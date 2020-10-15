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

    cy.get('#group').click({ force: true });
    cy.wait(1500);
    cy.get('#card').click({ force: true });
    cy.wait(1500);
    cy.get('#fast').click({ force: true });
    cy.wait(1500);
    cy.get('#trash').click({ force: true });
    cy.wait(1500);
    cy.get('#addText').click({ force: true });
    cy.wait(1500);
    cy.get('#connect').click({ force: true });
    cy.wait(1500);
    cy.get('#pin').click({ force: true });
    cy.wait(1500);
    cy.get('#blocked').click({ force: true });
    cy.wait(1500);
    cy.get('.sc-dWBSoC > img').click()
    cy.wait(1500)
    cy.get('.sc-jHcYrh > :nth-child(4) > p').click({ force: true });
    cy.wait(1500)




  });
});
