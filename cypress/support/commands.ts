import { RegistrationPage } from '../e2e/PageObjects/RegistrationPage'
import { HomePage } from '../e2e/PageObjects/HomePage'
import { LoginPage } from 'cypress/e2e/PageObjects/LoginPage';
import { createArticlePage } from 'cypress/e2e/PageObjects/createArticlePage';

let rp = new RegistrationPage();
let hp = new HomePage();
let lp = new LoginPage();
let cap = new createArticlePage();

export { }
declare global {
  namespace Cypress {
    interface Chainable {
      /**
      * lauchVueVuexApplication
      * @example
      * cy.lauchVueVuexApplication()
      */
      lauchVueVuexApplication()

      /**
      * User Regsitration,enter username,Email and password
      * @example
      *    cy.userRegistration(username,email,password)
      */
      userRegistration(username: string, email: string, password: string)

      /**
       * click Register button
       * @example
       *    cy.clickRegsiterButton()
       */
      clickRegisterButton()
      /**
      * uniqueNumberGenerator
      * @example
      *    cy.uniqueNumberGenerator()
      */
      uniqueNumberGenerator()
      /**
    * validateUserNameExistMessage
    * @example
    *    cy.validateUserNameExistMessage()
    */
      validateUserNameExistMessage()
      /**
     * validateEmailExistMessage
     * @example
     *    cy.validateEmailExistMessage()
     */
      validateEmailExistMessage()
      /**
  * validatePasswordNotBlankMessage
  * @example
  *    cy.validatePasswordNotBlankMessage()
  */
      validatePasswordNotBlankMessage()
      /**
  * clickLoginLink
  * @example
  *    cy.clickLoginLink()
  */
      clickLoginLink()
      /**
    * userLogin
    * @example
    *    cy.userLogin(email,password)
    */
      userLogin(email, password)
      /**
     * verifyUserLoggedIn
     * @example
     *    cy.verifyUserLoggedIn()
     */
      verifyUserLoggedIn()
      /**
      * validateEmailNotBlankMessage
      * @example
      *    cy.validateEmailNotBlankMessage()
      */
      validateEmailNotBlankMessage()
      /**
      * validateEmailorPasswordInvalidMessage
      * @example
      *    cy.validateEmailorPasswordInvalidMessage()
      */
      validateEmailorPasswordInvalidMessage()
      /**
      * creatingaNewArticle
      * @example
      *    cy.creatingaNewArticle(articleTitle,whatsThisArticleAbout,writeYourArticle,enterTags)
      */
      creatingaNewArticle(articleTitle, whatsThisArticleAbout, writeYourArticle, enterTags)
      /**
      * clickNewArticle
      * @example
      *    cy.clickNewArticle()
      */
      clickNewArticle()
      /**
      * assertNewArticleAdded
      * @example
      *    cy.assertNewArticleAdded(articleTitle)
      */
      assertNewArticleAdded(articleTitle)
      /**
      * deleteArticle
      * @example
      *    cy.deleteArticle()
      */
      deleteArticle()
      /**
     * titlenotBlankMessage
     * @example
     *    cy.titlenotBlankMessage()
     */
      titlenotBlankMessage()
      /**
      * descriptionnotBlankMessage
      * @example
      *    cy.descriptionnotBlankMessage()
      */
      descriptionnotBlankMessage()
      /**
      * bodynotBlankMessage
      * @example
      *    cy.bodynotBlankMessage()
      */
      bodynotBlankMessage()
      /**
      * titleMustBeUniqueMessage
      * @example
      *    cy.titleMustBeUniqueMessage()
      */
      titleMustBeUniqueMessage()
      /**
      * deleteTheTitleFromTheList
      * @example
      *    cy.deleteTheTitleFromTheList(title)
      */
      deleteTheTitleFromTheList(title)
      /**
     * clickEditArticle
     * @example
     *    cy.clickEditArticle()
     */
      clickEditArticle()
      /**
    * generateToken
    * @example
    *    cy.generateToken(email,password)
    */
      generateToken(email, password)
      /**
    * generateSlug
    * @example
    *    cy.generateSlug(token,title)
    */
      generateSlug(token, title)
      /**
    * createUser
    * @example
    *    cy.createUser(email, password,username,expectedStatus,host,resourcepath)
    */
      createUser(email, password, username, expectedStatus, host, resourcepath)
      /**
      * getUserApi
      * @example
      *    cy.getUserApi(method,host,resourcePath,token,statusCode)
      */
      getUserApi(method, host, resourcePath, token, statusCode)
      /**
      * updateUser
      * @example
      *    cy.updateUser(email,username,token,host,resoursepath,expectedStatusCode)
      */
      updateUser(email, username, token, host, resoursepath, expectedStatusCode)
      /**
      * deleteArticleAPI
      * @example
      *    cy.deleteArticleAPI(token,slugNumber,host,resoursepath,expectedStatusCode)
      */
      deleteArticleAPI(token, slugNumber, host, resoursepath, expectedStatusCode)
    }
  }
}


Cypress.Commands.add('lauchVueVuexApplication', () => {
  cy.intercept('https://api.realworld.io/api/articles').as('externalScript1');
  cy.intercept('https://api.realworld.io/api/tags/').as('externalScript2');
  cy.visit('https://vue-vuex-realworld.netlify.app/#/')
  //cy.reload()
  cy.title().should('eq', 'Conduit')
  /* cy.intercept({
     method:'GET',
     url:'https://conduit.productionready.io/api/articles?offset=0&limit=10'
   },
    {statusCode:200}
   )
   cy.intercept({
     method:'GET',
     url:'https://conduit.productionready.io/api/tags/'
   },
    {statusCode:200}
   )*/
})

Cypress.Commands.add('userRegistration', (username, email, password) => {
  rp.usernameField().type(username)
  rp.emailField().type(email)
  rp.passwordField().type(password)
  rp.signUpButton().click()
})

Cypress.Commands.add('clickRegisterButton', () => {
  hp.registerLink().click()
  cy.url().should('contain', '/register')
})

Cypress.Commands.add('uniqueNumberGenerator', () => {
  const uniqueSeed = Date.now().toString();
  const getUniqueId = Cypress._.uniqueId(uniqueSeed);
  return getUniqueId;
})

Cypress.Commands.add('validateUserNameExistMessage', () => {
  rp.UserNameExistMessage().should('have.text', 'username has already been taken')
})

Cypress.Commands.add('validateEmailExistMessage', () => {
  rp.EmailExistMessage().should('have.text', 'email has already been taken')
})

Cypress.Commands.add('validatePasswordNotBlankMessage', () => {
  rp.PasswordNotBlankMessage().should('have.text', "password can't be blank")
})

Cypress.Commands.add('validatePasswordNotBlankMessage', () => {
  rp.PasswordNotBlankMessage().should('have.text', "password can't be blank")
})

Cypress.Commands.add('clickLoginLink', () => {
  hp.loginLink().click()
  lp.signInHeader().invoke('text').should('include', 'Sign in')
})

Cypress.Commands.add('userLogin', (email, password) => {
  lp.emailField().type(email)
  lp.passwordField().type(password)
  lp.signinButton().click()
})

Cypress.Commands.add('verifyUserLoggedIn', () => {
  hp.LoggedInUser().eq(3).invoke('text').should('include', 'arun')
})

Cypress.Commands.add('validateEmailNotBlankMessage', () => {
  lp.emailnotBeBlank().should('have.text', "email can't be blank")
})

Cypress.Commands.add('validateEmailorPasswordInvalidMessage', () => {
  lp.emailorPasswordInvalid().should('have.text', "email or password is invalid")
})

Cypress.Commands.add('creatingaNewArticle', (articleTitle, whatsThisArticleAbout, writeYourArticle, enterTags) => {
  if (articleTitle !== "") {
    cap.articleTitle().clear().type(articleTitle)
  }
  if (whatsThisArticleAbout !== "") {
    cap.whatsThisArticleAbout().clear().type(whatsThisArticleAbout)
  }
  if (writeYourArticle !== "") {
    cap.writeYourArticle().clear().type(writeYourArticle)
  }
  if (enterTags !== "") {
    cap.enterTags().clear().type(enterTags)
  }
  cap.publishArticleButton().click()
})

Cypress.Commands.add('clickNewArticle', () => {
  hp.newArticle().click()
})

Cypress.Commands.add('assertNewArticleAdded', (articleTitle) => {
  cap.createdarticleTitle().should('have.text', articleTitle)
})

Cypress.Commands.add('deleteArticle', () => {
  cap.deleteArticle().click()
  hp.yourFeed().should('be.visible')
})

Cypress.Commands.add('titlenotBlankMessage', () => {
  cap.errorMessage().invoke('text').should('include', "can't be blank").and('include', "title")
})

Cypress.Commands.add('descriptionnotBlankMessage', () => {
  cap.errorMessage().invoke('text').should('include', "can't be blank").and('include', "description")
})

Cypress.Commands.add('bodynotBlankMessage', () => {
  cap.errorMessage().invoke('text').should('include', "can't be blank").and('include', "body")
})

Cypress.Commands.add('titleMustBeUniqueMessage', () => {
  cap.errorMessage().invoke('text').should('include', "must be unique").and('include', "title")
})

Cypress.Commands.add('deleteTheTitleFromTheList', (title) => {
  cy.get('.preview-link h1').each(($el, index, $list) => {
    if ($el.text().includes(title)) {
      cy.wrap($el).click()
      cy.deleteArticle()
    }
  })
})

Cypress.Commands.add('clickEditArticle', () => {
  cap.editArticle().click()
})

Cypress.Commands.add('generateToken', (email, password) => {
  let token = ""
  const loginCredentials = {
    "user": { "email": email, "password": password }
  }

  cy.api({
    url: 'https://api.realworld.io/api/users/login',
    method: 'POST',
    body: loginCredentials
  }).then(response => {
    expect(response.status).to.equal(200)
    token = response.body.user.token
    return token
  })
})


Cypress.Commands.add('generateSlug', (token, title) => {

  let titleValue = title
  let slugNumber = ""
  const headerValue = {
    "Authorization": "Token " + token
  }

  const createArticleData = {

    "article":
    {
      "author": {},
      "title": titleValue,
      "description": "Title",
      "body": "Title",
      "tagList": []
    }
  }

  cy.api({
    method: 'POST',
    url: 'https://api.realworld.io/api/articles',
    body: createArticleData,
    headers: headerValue
  }).then(response => {
    expect(response.status).to.equal(200)
    slugNumber = response.body.article.slug
    return slugNumber
    //cy.log('slug number: '+ slugNumber)
  })

})

Cypress.Commands.add('createUser', (email, password, username, expectedStatus, host, resourcepath) => {

  const data =
  {
    "user":
    {
      "email": email,
      "password": password,
      "username": username
    }
  }

  const endpoint = host + resourcepath
  let token = ""
  cy.api({
    method: 'POST',
    url: endpoint,
    body: data,
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.equal(expectedStatus)
    if (expectedStatus == 200) {
      expect(response.body.user.email).to.be.a('string')
      expect(response.body.user.username).to.be.a('string')
      expect(response.body.user.bio).to.be.not.a('string')
      expect(response.body.user.image).to.be.a('string')
      expect(response.body.user.token).to.be.a('string')
      token = response.body.user.token
      return token
    }
  })
})

Cypress.Commands.add('getUserApi', (method, host, resourcePath, token, statusCode) => {

  const headerValue = {
    "Authorization": "Token " + token
  }
  const endpoint = host + resourcePath
  cy.api({
    method: 'GET',
    url: endpoint,
    headers: headerValue,
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.equal(statusCode)
  })

})

Cypress.Commands.add('updateUser', (email, username, token, host, resoursepath, expectedStatusCode) => {

  const updateData =
  {
    "email": email,
    "username": username,
    "bio": null,
    "image": "https://api.realworld.io/images/smiley-cyrus.jpeg"
  }
  const headerValue = {
    "Authorization": "Token " + token
  }
  const endpoint = host + resoursepath
  cy.api({
    method: 'PUT',
    url: endpoint,
    body: updateData,
    headers: headerValue,
    failOnStatusCode: false
  }).then((response) => {
    expect(response.status).to.equal(expectedStatusCode)
  })

})

Cypress.Commands.add('deleteArticleAPI', (token, slugNumber, host, resoursepath, expectedStatusCode) => {

  const headerValue = {
    "Authorization": "Token " + token
  }
  const requestUrl =host+resoursepath+slugNumber
  //const requestUrl = "https://api.realworld.io/api/articles/" + slugNumber

  cy.api({
    method: 'DELETE',
    url: requestUrl,
    headers: headerValue,
    failOnStatusCode: false
  }).then(response => {
    expect(response.status).to.equal(expectedStatusCode)
  })

})





