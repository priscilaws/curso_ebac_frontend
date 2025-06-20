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

    afterEach(() => {
        cy.get('body').then(($body) => {
        if ($body.find('button.delete').length > 0) {
        // Clica em todos os botões delete (ou o último)
        cy.get('button.delete').each(($btn) => {
            cy.wrap($btn).click();
        });
        } else {
        cy.log('Nenhum botão delete encontrado para limpar.');
        }
    });
    })

    describe('Adição de contato', () => {
        it('Deve adicionar um novo contato', () => {
            cy.get('input[placeholder="Nome"]').type(nome);
            cy.get('input[placeholder="Telefone"]').type(telefone);
            cy.get('input[placeholder="E-mail"]').type(email);
            cy.contains('Adicionar').click();

            cy.contains(nome).should('exist');
            cy.contains(telefone).should('exist');
            cy.contains(email).should('exist');

        });
    });

    describe('Edição de contato', () => {
    it('Deve editar o último contato adicionado', () => {
      // Adiciona contato
        cy.get('input[placeholder="Nome"]').type(nome);
        cy.get('input[placeholder="Telefone"]').type(telefone);
        cy.get('input[placeholder="E-mail"]').type(email);
        cy.contains('Adicionar').click();

      // Edita o último contato da lista
        cy.contains('li', nome).closest('.contato').within(() => {
            cy.get('button.edit').click();
        });

        cy.get('input[placeholder="Nome"]').clear().type(nomeEditado);
        cy.get('input[placeholder="E-mail"]').clear().type(emailEditado);
        cy.contains('Salvar').click();

        cy.contains(nomeEditado).should('exist');
        cy.contains(emailEditado).should('exist');

    });
    });

    describe('Remoção de contato', () => {
    it('Deve remover o último contato adicionado', () => {
      // Adiciona contato
        cy.get('input[placeholder="Nome"]').type(nome);
        cy.get('input[placeholder="Telefone"]').type(telefone);
        cy.get('input[placeholder="E-mail"]').type(email);
        cy.contains('Adicionar').click();

      // Verifica se foi adicionado
        cy.contains(nome).should('exist');

      // Remove o último contato da lista
        cy.contains('li', nome).closest('.contato').within(() => {
            cy.get('button.delete').click();
        });

      // Verifica se foi removido
        cy.contains(nome).should('not.exist');
        cy.contains(email).should('not.exist');
    });
    });
});

