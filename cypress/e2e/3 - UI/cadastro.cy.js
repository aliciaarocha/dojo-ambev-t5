/// <reference types="cypress" />
const faker = require('faker-br');


describe('Funcionalidade: tela de cadastro', () => {

    beforeEach(() => {
        cy.visit('cadastrar')
    });

    it('Deve fazer o cadastro com sucesso', () => {
        let nome = faker.name.findName()
        let email = faker.internet.email()

        cy.get('[data-test="register-name"] > .MuiInputBase-root > .MuiInputBase-input').type(nome)
        cy.get('[data-test="register-email"] > .MuiInputBase-root > .MuiInputBase-input').type(email)
        cy.get('[data-test="register-password"] > .MuiInputBase-root > .MuiInputBase-input').type('alicia')
        cy.get('[data-test="register-password2"] > .MuiInputBase-root > .MuiInputBase-input').type('alicia')
        cy.get('[data-test="register-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo ' + nome)
    });
    
});