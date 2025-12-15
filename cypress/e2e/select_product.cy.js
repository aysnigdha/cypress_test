import LoginPage from "../support/pages/loginPage.js";
import ProductPage from "../support/pages/productPage.js";
describe('view the product page', ()=>{
    it('select product for add to cart', ()=>{
        LoginPage.visit();
        LoginPage.enterUsername('standard_user');
        LoginPage.enterPassword('secret_sauce');
        LoginPage.clickSubmitButton();
        ProductPage.view();
        ProductPage.selectProduct1();
        ProductPage.selectProduct2();
        ProductPage.shoppingCartIcon();
        cy.wait(3000);
    })
})