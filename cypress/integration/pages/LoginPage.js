export default class LoginPage {
    path = "/login";

    //create variables for element locators
    usernameInput = "input[id='username]";
    passwordInput = "input[id='password]";
    loginButton = "button[type='submit]"

    //create independent methods to do actions on elements

    visitLogin() {
        cy.visit(this.path)
    }

    typeUsername(username){
        cy.get(this.usernameInput).type(username)
    }

    typePassword(password){
        cy.get(this.passwordInput).type(password)
    }

    clickLogin(){
        cy.get(this.loginButton).click()
    }
}