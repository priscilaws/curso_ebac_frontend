describe('Testes da Agenda de Contatos', () => {
    const nome = 'Teste Cypress';
    const telefone = '11999999999';
    const nomeEditado = 'Teste Cypress Editado';

    beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    cy.clearLocalStorage();
    });

    it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type(nome);
    cy.get('input[placeholder="Telefone"]').type(telefone);
    cy.contains('Adicionar').click();
    cy.contains(nome).should('exist');
    cy.contains(telefone).should('exist');
    });

    it('Deve editar um contato existente', () => {
    cy.get('input[placeholder="Nome"]').type(nome);
    cy.get('input[placeholder="Telefone"]').type(telefone);
    cy.contains('Adicionar').click();

    cy.contains(nome).parent().within(() => {
        cy.contains('Editar').click();
    });

    cy.get('input[placeholder="Nome"]').clear().type(nomeEditado);
    cy.contains('Salvar').click();

    cy.contains(nomeEditado).should('exist');
    cy.contains(nome).should('not.exist');
    });

    it('Deve remover um contato', () => {
    cy.get('input[placeholder="Nome"]').type(nome);
    cy.get('input[placeholder="Telefone"]').type(telefone);
    cy.contains('Adicionar').click();

    cy.contains(nome).parent().within(() => {
        cy.contains('Excluir').click();
    });

    cy.contains(nome).should('not.exist');
    });
});
