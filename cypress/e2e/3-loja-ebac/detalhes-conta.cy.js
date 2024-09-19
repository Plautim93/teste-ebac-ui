/// <reference types="cypress"/>

describe('Funcionalidade: Detalhes da conta', () => {

    beforeEach(() => {
        cy.visit('minha-conta/edit-account')
        cy.fixture('perfil').then(login => {
        cy.login(login.usuario, login.senha)
        })
        
    });

    it('Deve completar dados da conta com sucesso', () => {
        cy.detalhesConta('Plauto', 'Barbosa', 'plauto.teste')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

});