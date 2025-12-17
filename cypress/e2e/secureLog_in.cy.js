import LogIn from '../support/loginPage.js';
describe('Log in to the secure page with correct credential', () => {
 it('should able to login and logout successfully', ()=> {
  LogIn.visit();
  LogIn.enterUsername('tomsmith');
  LogIn.enterPassword('SuperSecretPassword!');
  LogIn.clickLogin();
  LogIn.nextPage();
  LogIn.logOut();
  cy.wait(3000);
 })
})