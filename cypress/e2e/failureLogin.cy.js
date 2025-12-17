import LogIn from '../support/loginPage.js';
describe('unsuccessful login with wrong credential',()=> {
    it('should not able to login to the secure page and view the error message ',()=>{
      LogIn.visit();
      LogIn.enterUsername('dfgd');
      LogIn.enterPassword('SuperSecretPassword!');
      LogIn.clickLogin();
      cy.get('#flash').contains('Your username is invalid!').should('be.visible');
    })
})