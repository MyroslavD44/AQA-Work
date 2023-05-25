class LoginPage {
    visit() {
      cy.visit("https://www.edu.goit.global/account/login");
    }
  
    fillEmail(email) {
      cy.get('#user_email').type(email);
    }
  
    fillPassword(password) {
      cy.get('#user_password').type(password);
    }
  
    clickLoginButton() {
      cy.get('.eckniwg2').click();
    }
  logIn() {
    cy.visit("https://moniheal.com");
        
        cy.get('[data-cy="mainpage-button-login"]').click();

        cy.get('[data-cy="login-email-input"]').type("+380990000006");

        cy.get('[data-cy="login-password-input"]').type("12345678");

        cy.get('[data-cy="login-btn"]').click();
  }
  }
  
  export default LoginPage;
  