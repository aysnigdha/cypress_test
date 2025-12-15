class LoginPage{
    visit(){
        cy.visit('https://www.saucedemo.com/');
    }
    enterUsername(username){
        cy.get("#user-name").type(username)
    }
    enterPassword(password){
        cy.get("#password").type(password)
    }
    clickSubmitButton(){
        cy.get("#login-button").click()
    }
    viewProductpage(){
      cy.url().should('include', '/inventory')
    }
}
export default new LoginPage();