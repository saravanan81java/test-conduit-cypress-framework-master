export class RegistrationPage{

    usernameField(){
        return cy.get('input[placeholder="Username"]')
    }
    emailField(){
        return cy.get('input[placeholder="Email"]')
    }
    passwordField(){
        return cy.get('input[placeholder="Password"]')
    }
    signUpButton(){
        return cy.get('button')
    }
    UserNameExistMessage(){
        return cy.contains('username has already')
    }
    EmailExistMessage(){
       return cy.contains('email has already')
    }
    PasswordNotBlankMessage(){
        return cy.contains("password can't be blank")
    }
}