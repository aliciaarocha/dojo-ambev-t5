/// <reference types="cypress" />
import usuario from "../../fixtures/usuario.json"

describe('Funcionalidade: Tela de login', () => {
   
    beforeEach(() => {
        cy.visit('login')
        
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Login com sucesso', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('alicia@alicia.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('alicia')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
        
    });

    it('Login com sucesso - usando Comando Customizados', () => {
        cy.login('alicia@alicia.com', 'alicia')
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
        
    });

    it('Login com sucesso - Fixture', () => {
        cy.fixture("usuario").then((user) => {
            cy.login(user.email, user.senha)
        })
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it('Login - massa de dados importação', () => {
        cy.login(usuario.email, usuario.senha)
        cy.get('[data-test="dashboard-welcome"]').should('contain', 'Bem-vindo')
    });

    it('Digitar usuário/senha incorretos', () => {
        cy.get('[data-test="login-email"] > .MuiInputBase-root > .MuiInputBase-input').type('alicia@alicia.com')
        cy.get('[data-test="login-password"] > .MuiInputBase-root > .MuiInputBase-input').type('alicia1')
        cy.get('[data-test="login-submit"]').click()
        cy.get('[data-test="alert"]').should('contain', 'Credenciais inválidas')
        
    });
    
});



