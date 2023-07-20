
  export function getUsernameInput() {
        return cy.get('#user-name');
      }
    
      export function   getPasswordInput() {
        return cy.get('input[name="password"]');
      }
    
      export function  getSubmitButton() {
        return cy.get('.submit-button');
      }
    