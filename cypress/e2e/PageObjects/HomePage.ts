export class HomePage {

    registerLink() {
        return cy.get('a[href="#/register"]')
    }

    loginLink() {
        return cy.get('a[href="#/login"]')
    }

    LoggedInUser() {
        return cy.get('li.nav-item a')
    }

    newArticle() {
        return cy.get('a[href="#/editor"]')
    }

    yourFeed() {
        return cy.get('a[href="#/my-feed"]')
    }

}
