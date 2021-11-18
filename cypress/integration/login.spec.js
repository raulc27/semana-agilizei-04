/// <reference types="cypress" />

/**
 *  1. o que está sendo testado ? Twitter Clone, Login
 *  2. sob que circunstâncias, condições ? Ao autenticar com credenciais válidas
 *  3. qual o resultado esperado ? Deve ser autenticado
 */
describe('Twitter clone - Login',()=>{
    it('Ao autenticar com credenciais válidas, deve ser direcionado para o feed',()=>{

        // cy.intercept
        // 1. RouteMatcher - mapeamento, filtro da rota que a gente quer
        // 2. RouteHandler (opcional) - controlar o que a rota vai retornar (mock)

        cy.intercept({
         //   https://res.cloudinary.com/douy56nkf/image/upload/v1588127894/twitter-build/bvxmlgckusmrwyivsnzr.
         method: 'GET',
         hostname: 'res.cloudinary.com'
        },{
            statusCode: 200,
            fixture: 'download'
        }).as('cloudinary');

        cy.login()

        cy.visit('https://twitter-clone-example.herokuapp.com');


        cy.get('nav ul li')
            .should('be.visible')
            .and('have.length', 6)
    });

});