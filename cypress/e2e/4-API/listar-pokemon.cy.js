/// <reference types="cypress" />

describe('Funcionalidade: Listar Pokemon', () => {

    it('[GET] deve listar o pokemon ditto com sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://pokeapi.co/api/v2/pokemon/ditto'
        }).should((response) => {
            expect(response.status).eq(200)
            expect(response.body.abilities[0].ability.name).to.equal('limber')
        })
    });

    it('[GET] deve listar o Pokemon pikachu com sucesso', () => {
        cy.request('https://pokeapi.co/api/v2/pokemon/pikachu')
        .then((resp) => {
            expect(resp.status).eq(200)
        })

    });
    
});