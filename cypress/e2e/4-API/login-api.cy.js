/// <reference types="cypress" />

describe('Funcionalidade: Login via API', () => {

    it('[POST] deve criar login com sucesso', () => {

        cy.request({
            method: 'POST',
            url: 'api/auth',
            body: {
                "email": "alicia@alicia.com",
                "password": "alicia"
              }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('jwt')
        })

    });
    
});