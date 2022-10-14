/// <reference types="cypress" />

describe('Funcionalidade: Cadastro via API', () => {

    it('[POST] deve criar um cadastro de sucesso', () => {
let email = `alicia${Math.floor(Math.random() * 100000000)}@alicia.com`

        cy.request({
            method: 'POST',
            url: 'api/users',
            body: {
                "name": "alicia",
                "email": email,
                "password": "teste123"
              }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body).to.have.property('jwt')
            expect(response.duration).lessThan(1000)
        })

    });
    
});