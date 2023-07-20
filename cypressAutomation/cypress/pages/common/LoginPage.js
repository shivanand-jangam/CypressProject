export default class LoginPage {

    static getUsernameInput() {
        return cy.get('#user-name');
      }
    
      static getPasswordInput() {
        return cy.get('input[name="password"]');
      }
    
      static getSubmitButton() {
        return cy.get('.submit-button');
      }
    }