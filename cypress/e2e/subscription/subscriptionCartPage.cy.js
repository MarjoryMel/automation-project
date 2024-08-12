describe('Verify Subscription in home page', () => {

    it('checks if the home page is visible successfully', () => {
        cy.visit('https://automationexercise.com/')

        // Verify that the home page is visible
        cy.get('a > img').should('be.visible')
    })

    // Click 'Cart' button
    it('click on the cart button', () => {
        cy.visit('https://automationexercise.com/')

        // Click 'Cart' button
        cy.get('.shop-menu > .nav > :nth-child(3) > a')
        .invoke('removeAttr', 'target')
        .click()

        // Verify text 'SUBSCRIPTION'
        cy.contains('Subscription').should('be.visible')
    })

    it('enter email address in input and click arrow button', () => {
        cy.visit('https://automationexercise.com/view_cart')

        cy.fixture('userValid').then((user) => {
            // Enter email address in input and click arrow button
            cy.get('#susbscribe_email').type(user.email)
            cy.get('#subscribe').click()

            // Verify that 'ENTER ACCOUNT INFORMATION' is visible
            cy.contains('You have been successfully subscribed!').should('be.visible')
        })
    })
})