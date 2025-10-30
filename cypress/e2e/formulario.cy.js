describe('Teste do Formulário de Cadastro', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/index.html');
  });

  it('Preenche e envia o formulário com sucesso', () => {
    cy.get('#nome').type('João da Silva');
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (msg) => {
      expect(msg).to.include('Formulário enviado com sucesso! Nome: João da Silva');
    });
  });

  it('Exibe alerta ao enviar sem preencher o nome', () => {
    cy.get('button[type="submit"]').click();

    cy.on('window:alert', (msg) => {
      expect(msg).to.include('Por favor, preencha o campo nome.');
    });
  });
});
