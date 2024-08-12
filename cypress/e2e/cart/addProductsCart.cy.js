describe('Add Products in Cart', () => {

    it('checks if the home page is visible successfully', () => {
        // Navigate to the URL
        cy.visit('https://automationexercise.com/')

        // Verify that the home page is visible
        cy.get('a > img').should('be.visible')
    })

    
    it('click on Products button', () => {
        cy.visit('https://automationexercise.com/')

        // Click on 'Products' button
        cy.get('.shop-menu > .nav > :nth-child(2) > a')
            .invoke('removeAttr', 'target')
            .click()

        // Verify 'ALL PRODUCTS' is visible
        cy.contains('All Products').should('be.visible')
    })
    it.only('add product to cart and viewing information', () => {
        cy.fixture('validProducts').then((products) => {
            cy.visit('https://automationexercise.com/products');
            
            // Hover over first product and click 'Add to cart'
            cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
            cy.get('.modal-footer > .btn').click();
            
            // Hover over second product and click 'Add to cart'
            cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click();
            
            // Click 'View Cart' button
            cy.get('u').as('link')
                .invoke('removeAttr', 'target')
                .click();
            
            // Verify product details using the fixture data
            cy.get('#product-1').as('product1');
            cy.get('#product-2').as('product2');
    
            // Verify product 1 details
            cy.get('@product1').find('.cart_description > h4 > a').should('contain.text', products.product1.name);
            cy.get('@product1').find('.cart_price > p').should('contain.text', products.product1.price);
            cy.get('@product1').find('.cart_quantity > .disabled').should('contain.text', products.product1.quantity);
            cy.get('@product1').find('.cart_total > .cart_total_price').should('contain.text', products.product1.total);
    
            // Verify product 2 details
            cy.get('@product2').find('.cart_description > h4 > a').should('contain.text', products.product2.name);
            cy.get('@product2').find('.cart_price > p').should('contain.text', products.product2.price);
            cy.get('@product2').find('.cart_quantity > .disabled').should('contain.text', products.product2.quantity);
            cy.get('@product2').find('.cart_total > .cart_total_price').should('contain.text', products.product2.total);
        })
    })    
})