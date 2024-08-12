describe('Add Products in Cart', () => {

    it('checks if the home page is visible successfully', () => {
        // Navigate to the URL
        cy.visit('https://automationexercise.com/')

        // Verify that the home page is visible
        cy.get('a > img').should('be.visible')
    })
    
    it('click View Product for any product on home page', () => {
        cy.visit('https://automationexercise.com/')

        const quantity = '4'

        // Click 'View Product' for any product on home page
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
            .invoke('removeAttr', 'target')
            .click()

        // Verify 'BLUE TOP' is visible
        cy.contains('Blue Top').should('be.visible')

        // Check if quantity input is visible and enter the amount
        cy.get('#quantity')
        .should('be.visible')  
        .clear()               
        .type(quantity);            

        // Click 'Add to cart' button
        cy.get(':nth-child(5) > .btn').click()

        // Click 'View Cart' button
        cy.get('u').as('link')
            .invoke('removeAttr', 'target')
            .click()

        // Verify that product is displayed in cart page with exact quantity
        cy.get('.disabled').should('contain.text', quantity)
    })
})