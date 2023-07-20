export function   getAddtoCartButton(name) {
      const product=name.toLowerCase().replace(/\s/g,"-")
      var locator="[data-test='add-to-cart-"+product+"']"
      cy.log("Locator: " + locator)
        return cy.get(locator);
       }

export function    getRemoveProductFromCart(name) {
        const product=name.toLowerCase().replace(/\s/g,"-")
        var locator="[name='remove-"+product+"']"
          return cy.get(locator);
         }

export function   getCartCount() {
           return cy.get("a.shopping_cart_link span");
         }
    