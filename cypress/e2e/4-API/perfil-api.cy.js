/// <reference types="cypress" />

describe('Funcionalidade: Perfil via API', () => {
let token
    beforeEach(() => {
       cy.token().as("token")
       // cy.token().then((tkn) =>{token = tkn})
    });
    it('[POST] deve fazer um cadastro de perfil com sucesso', function() {

        cy.request({
            method: 'POST',
            url: 'api/profile',
            headers: {Cookie : this.token},
            body: {
                company: "Ambev",
                status: "QA Pleno",
                location: "SP",
                website: "https://swapi.dev/documentation",
                skills: "js",
                bio: "olá",
                githubusername: "alicia"
              }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.company).to.equal('Ambev')
        })

    });
    
});