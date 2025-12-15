describe('demo log in test', ()=> {
    it('should log in with valid credentials', () => {
   cy.visit('https://www.saucedemo.com/');
   cy.get("#user-name").type('standard_user');
   cy.get("#password").type('secret_sauce');
   cy.get("#login-button").click();
   cy.url().should('include', '/inventory');
   cy.wait(2000);
    })
})