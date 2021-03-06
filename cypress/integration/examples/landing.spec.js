context('Login and Register (Landing) Page Rendering', () => {
  it('renders landing page and logs with valid credentials', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');

    cy.contains('#Exemplo1');
    cy.contains('#Exemplo2');
    cy.contains('#Exemplo3');
    cy.contains('Timeless');
    cy.contains('simples, rápido e dinâmico!');
    cy.contains('Alto nível em gestão');
    cy.contains('de tempo e equipes.');
    cy.contains('Fluxo dinâmico e intuitivo,');
    cy.contains('eficiência elevada ao máximo!');

    cy.get(':nth-child(3) > .sc-bdnylx').contains('Entrar');
    cy.get('.sc-hKFyIo').type('leandro@gmail.com');
    cy.get('.sc-jSFkmK').type('123456');

    cy.get(':nth-child(3) > .sc-bdnylx').click();
  });
});

context('Modal Register in Landing Page', () => {
  it('open register modal', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');

    cy.get('.sc-jVSHhB > .sc-bdnylx').click();
    cy.contains('Comece hoje mesmo, a gerenciar seu tempo ou equipe.');

    cy.get('.sc-fGgRdh > :nth-child(1) > .sc-dlnjPT > .sc-hKFyIo');
    cy.get(':nth-child(2) > .sc-dlnjPT > .sc-hKFyIo');
    cy.get(':nth-child(3) > .sc-eCApGN > .sc-jSFkmK');

    cy.get(':nth-child(3) > .sc-eCApGN > .sc-iCoHVE').click();
    cy.get(':nth-child(4) > .sc-bdnylx').click();
    cy.wait(2400);
    cy.get('.sc-gJjCBC > p').click();
  });
});

context('Login and Register (Landing) Page Rendering', () => {
  it('Render and click buttons on landing page', () => {
    cy.viewport(1440, 900);
    cy.visit('http://localhost:3000');

    cy.get('.sc-hfVAxZ > :nth-child(1)').click();
    cy.wait(2000);
    cy.get('.sc-hfVAxZ > :nth-child(2)').click();
    cy.wait(2000);
    cy.get('.sc-hfVAxZ > :nth-child(3)').click();

    cy.wait(2000);
    cy.get('.sc-biHcdI > img').click();
  });
});
