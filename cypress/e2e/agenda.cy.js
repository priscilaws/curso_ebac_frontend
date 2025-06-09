describe('Testes da Agenda de Contatos', () => {
    const nome = 'Pedro Silva';
    const telefone = '11999999999';
    const email = 'teste@exemplo.com';
    const nomeEditado = 'Pedro Silva Editado';
    const emailEditado = 'pedrosilva@exemplo.com';

    beforeEach(() => {
    cy.visit('https://agenda-contatos-react.vercel.app/');
    cy.clearLocalStorage();
    });

    it('Deve adicionar um novo contato', () => {
    cy.get('input[placeholder="Nome"]').type(nome);
    cy.get('input[placeholder="Telefone"]').type(telefone);
    cy.get('input[placeholder="E-mail"]').type(email);
    cy.contains('Adicionar').click();

    cy.contains(nome).should('exist');
    cy.contains(telefone).should('exist');
    cy.contains(email).should('exist');
    });

    it.only('Deve editar um contato existente', () => {

    cy.get('input[placeholder="Nome"]').type(nome);
    cy.get('input[placeholder="Telefone"]').type(telefone);
    cy.get('input[placeholder="E-mail"]').type(email);
    cy.contains('Adicionar').click();


    cy.contains(nome).parents('div').parents('div').first().within(() => {
        cy.get('button.edit').click();
    });


    cy.get('input[placeholder="Nome"]').clear().type(nomeEditado);
    cy.get('input[placeholder="E-mail"]').clear().type(emailEditado);
    cy.contains('Salvar').click();


    cy.contains(nomeEditado).should('exist');
    cy.contains(emailEditado).should('exist');
    cy.contains(email).should('not.exist');
    });

    it('Deve remover um contato', () => {

    cy.get('input[placeholder="Nome"]').type(nome);
    cy.get('input[placeholder="Telefone"]').type(telefone);
    cy.get('input[placeholder="E-mail"]').type(email);
    cy.contains('Adicionar').click();


    cy.contains(nome).parents('div').parents('div').first().within(() => {
        cy.get('button.delete').click();
    });


    cy.contains(nome).should('not.exist');
    cy.contains(email).should('not.exist');
    });
});
