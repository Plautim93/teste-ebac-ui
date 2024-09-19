/// <reference types="cypress"/>
import produtosPage from "../../support/page-obejcts/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
       produtosPage.visitarUrl()
    });

    it('Deve selecionar um produto da lista', () => {
       produtosPage.buscarProdutoLista('Abominable Hoodie')
            cy.get('#tab-title-description > a').should('contain' , 'Descrição')
    });
    
    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Aero Daily Fitness Tee'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain' , produto)
    });

    it('Deve visitar a página do produtos', () => {
        produtosPage.visitarProduto('Aero Daily Fitness Tee')
        cy.get('.product_title').should('contain' , 'Aero Daily Fitness Tee')
    });

    it('Deve adicionar produtos ao carrinhio', () => {
        let qtd = 7
        produtosPage.buscarProduto('Ariel Roll Sleeve Sweatshirt')
        produtosPage.addProdutoCarrinho('M', 'Green', qtd)
        cy.get('.woocommerce-message').should('contain' , qtd+ ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
        
    });

    it.only('Deve adicionar produtos ao carrinhio buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho,
                dados[0].cor,
                dados[0].quantidade)

            cy.get('.woocommerce-message').should('contain' , dados[0].nomeProduto)

        })

        
    });
});