describe('Verify All Products and product detail page', () => {

    it('checks if the home page is visible successfully', () => {
        // Navigate to the URL
        cy.visit('https://automationexercise.com/')

        // Verify that the home page is visible
        cy.get('a > img').should('be.visible')
    })

    it('click on Products button', () => {
        cy.visit('https://automationexercise.com/')

        //Click on 'Products' button
        cy.get('.shop-menu > .nav > :nth-child(2) > a')
          .invoke('removeAttr', 'target')
          .click()

        //Verify 'ALL PRODUCTS' is visible
        cy.contains('All Products').should('be.visible')
    })

    
    it('the products list is visible', () => {
        cy.visit('https://automationexercise.com/products')

        // Verify user is navigated to ALL PRODUCTS page successfully
        cy.contains('All Products').should('be.visible')

        // The products list is visible
        cy.get('.features_items').should('be.visible')

        // Click on 'View Product' of first product
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a')
          .invoke('removeAttr', 'target')
          .click()

        // User is landed to product detail page
        cy.contains('Blue Top').should('be.visible')

        // Verify that detail detail is visible: product name, category, price, availability, condition, brand
        cy.get('.product-information > h2').should('be.visible')
        cy.get('.left-sidebar > :nth-child(1)').should('be.visible')
        cy.get(':nth-child(5) > span').should('be.visible')
        cy.get('.product-information > :nth-child(6)').should('be.visible')
        cy.get('.product-information > :nth-child(7)').should('be.visible')
        cy.get('.product-information > :nth-child(8)').should('be.visible')
    })
})