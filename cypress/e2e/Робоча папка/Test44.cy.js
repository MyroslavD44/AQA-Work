describe("Бронювання послуги", () =>{
    beforeEach(() => {
        cy.visit("https://moniheal.com")
        cy.viewport(1920, 1080)
    })
    it("44", () =>{
        
       cy.get('[data-cy="mainpage-button-login"]')
       .click()

       cy.get('[data-cy="login-email-input"]')
       .type('+380990000006')
       .should("have.value", "+380990000006")

       cy.get('[data-cy="login-password-input"]')
       .type("12345678")
       .should("have.value", "12345678")

       cy.get('[data-cy="login-btn"]')
       .click()

       cy.wait(25000)

       cy.get(".button_secondary")
       .click()
       .should("be.visible")

       cy.get('[data-cy="cabinet-main-menu"] > [href="/uk/cabinet/my-booked-services"]')
       .click()
       .should("be.visible")

       cy.get('.button_borderless')
       .click()
       .should("be.visible")

       cy.get('#loadMore')
       .click()
    
       cy.get('[data-id="16426"] > .expert-preview__hide > .expert-preview__hide-footer > .button_medium_secondary')
       .scrollIntoView() 
       .click()
        .should("be.visible")

        cy.get('[data-desc="Тестова послуга"] > .btn-wrap > .button_regular')
       .click()

       cy.get('.item-21-20')
       .click()
       

        cy.wait(2000)

       cy.get('#reserveServiceTime')
       .click()

        })
        it("Підтвердження послуги", () => {

            cy.visit("https://moniheal.com")
        
            cy.viewport(1920, 1080)

            cy.get('[data-cy="mainpage-button-login"]')
            .click()

            cy.get('[data-cy="login-email-input"]')
            .type("vitalii.karpiukdm@gmail.com", {delay: 100})

            cy.get('[data-cy="login-password-input"]')
            .type("12345678", {delay:100 })
            
            cy.get('[data-cy="login-btn"]')
            .click()

            cy.wait(25000)
            
            Cypress.on('uncaught:exception', (err, runnable) => {
                cy.get('[data-cy="cabinet-main-menu"] > [href="/uk/cabinet/notification/all"]')
            .click()
                return false; // Вимкнути автоматичне припинення тестування
              });
            
              cy.get('[data-id="68106"] > .notification__body > .notification__message > a')
              .click()
            
            
           
            

        


        })
})