import LoginPage from "../support/pages/loginPage";
describe('demo log in test', ()=> {
    it('should log in with valid credentials', () => {
   LoginPage.visit();
   LoginPage.enterUsername('standard_user');
   LoginPage.enterPassword('secret_sauce');
   LoginPage.clickSubmitButton();
   LoginPage.viewProductpage();
   cy.wait(2000);
    })
})