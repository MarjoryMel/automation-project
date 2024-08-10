describe('Verify Test Cases Page', () => {

    it('checks if the home page is visible successfully and click on test cases button', () => {
        // Navigate to the URL
        cy.visit('https://automationexercise.com/')

        // Verify that the home page is visible
        cy.get('a > img').should('be.visible')

        // Click on 'Test Cases' button
        cy.get('.shop-menu > .nav > :nth-child(5) > a')
          .invoke('removeAttr', 'target')
          .click()

        // Verify user is navigated to test cases page successfully
        cy.contains('Test Cases').should('be.visible')
    })
})