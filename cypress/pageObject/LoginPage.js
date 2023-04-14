export default class LoginPage {
    getPageTitle() {
        return cy.get('title')
    }
    getUsernameField() {
        return cy.get('#user-name').should('be.visible')
    }

    getPasswordField() {
        return cy.get('#password').should('be.visible')
    }

    getLoginButton() {
        return cy.get('#login-button').should('be.visible')
    }

    assertLoginPage(){
        this.getPageTitle().should('have.text', 'Swag Labs')
        this.getUsernameField().should('be.visible')
        this.getPasswordField().should('be.visible')
        this.getLoginButton().should('be.visible')
    }


    login(username, password) {
        this.getUsernameField().type(username)
        this.getPasswordField().type(password)
        this.getLoginButton().click()
    }
}