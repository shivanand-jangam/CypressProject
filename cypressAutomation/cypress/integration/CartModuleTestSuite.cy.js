import { loginPage } from '../pages/common/LoginPage.js';
import { homePage } from '../pages/common/HomePage.js';


describe('This is My Test Suite', function(){
  let productInfoArray;

 before(() => {
  cy.fixture('ProductInfo.json').then((productData) => {
    productInfoArray = productData;
  });
});

  beforeEach(() => {
    cy.visit(Cypress.env('baseUrl'));
    getUsernameInput().type(Cypress.env('username'));
    getPasswordInput().type(Cypress.env('password'));
    loginPage.getSubmitButton().click();
    cy.title().should('eq', 'Swag Labs');
    })

  it('Verify Cart Count after adding the products', () => {
      for(var i=0;i<productInfoArray.length;i++){
        const product=productInfoArray[i].productName
        cy.log("Adding this product to cart: "+ product)
        homePage.getAddtoCartButton(product).click();
      }
      homePage.getCartCount().should('have.text',productInfoArray.length);
    })

    it('Verify Cart Count after removing the one Product', () => {
      for(var i=0;i<productInfoArray.length;i++){
        const product=productInfoArray[i].productName
        cy.log("Adding this product to cart: "+ product)
        homePage.getAddtoCartButton(product).click();
      }
      homePage.getRemoveProductFromCart(productInfoArray[0].productName).click();
      homePage.getCartCount().should('have.text',productInfoArray.length-1);
    })

    })

