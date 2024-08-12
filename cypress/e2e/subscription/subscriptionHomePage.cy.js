describe('Verify Subscription in home page', () => {

    beforeEach(function (){
        cy.visit('https://automationexercise.com/')
    })

    it('checks if the home page is visible successfully', () => {
        // Verify that the home page is visible
        cy.get('a > img').should('be.visible')

        // Verify text 'SUBSCRIPTION'
        cy.contains('Subscription').should('be.visible')
    })

    it('enter email address in input and click arrow button', () => {
        cy.fixture('userValid').then((user) => {
            // Enter email address in input and click arrow button
            cy.get('#susbscribe_email').type(user.email)
            cy.get('#subscribe').click()

            // Verify that 'ENTER ACCOUNT INFORMATION' is visible
            cy.contains('You have been successfully subscribed!').should('be.visible')
        })
    })
})