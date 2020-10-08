context('Login and Register Page', () => {
  it('logs and registers correctly', () => {
    cy.visit('http://localhost:3000');

    cy.contains('Exemplo');
    cy.contains('Times');
    cy.contains('Sobre');
    cy.contains('Timeless');
    cy.contains('simples, rápido e dinâmico!');
    cy.contains('Alto nível em gestão');
    cy.contains('de tempo e equipes.');
    cy.contains('Fluxo dinâmico e intuitivo,');
    cy.contains('eficiência elevada ao máximo!');

    // cy.get(':nth-child(3) > .sc-bdnylx').contains('Entrar');
    cy.get('.sc-bQCGiA > img');
    cy.get('.sc-hKFyIo').type('leandro@gmail.com');
    cy.get('.sc-jSFkmK').type('123456');
    cy.get('.sc-htmbXw > .sc-bdnylx').contains('Comece agora');
    cy.get(':nth-child(3) > .sc-bdnylx').click();
  });
});
