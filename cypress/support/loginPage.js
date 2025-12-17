class LogIn{
    visit()
    {
        cy.visit('https://the-internet.herokuapp.com/login')
    }
    enterUsername(name)
    {
        cy.get('#username').type(name)
    }
    enterPassword(pass)
    {
        cy.get('#password').type(pass)
    }
    clickLogin()
    {
        cy.get('.fa.fa-2x.fa-sign-in').click()
    }
    nextPage()
    {
        cy.url().should('include', '/secure')
        cy.get('#flash').contains('You logged into a secure area!').should('be.visible')
        cy.contains('.subheader', 'Welcome to the Secure Area. When you are done click logout below.').should('be.visible')
    }
    logOut()
    {
        cy.get('.icon-2x.icon-signout').click()
        cy.contains('You logged out of the secure area!').should('be.visible')
    }

}
export default new LogIn();