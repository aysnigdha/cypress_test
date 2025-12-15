class ProductPage{
   view(){
    cy.url().should('include', '/inventory')
   }
   selectProduct1(){
    cy.contains('.inventory_item_name','Sauce Labs Backpack').should('be.visible')
     cy.get('#inventory_container').contains('$29.9').should('be.visible')
     cy.get('#add-to-cart-sauce-labs-backpack').click()
   }
    selectProduct2(){
     cy.contains('.inventory_item_name', 'Sauce Labs Bike Light').should('be.visible')
     cy.get('#inventory_container').contains('$9.99').should('be.visible')   
     cy.get('#add-to-cart-sauce-labs-bike-light').click()
    }
  shoppingCartIcon(){

    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')
  }
}
 export default new ProductPage();