describe('Search Product', () => {

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

    it('enter product name in search input and click search button', () => {
        const product = 'Men Tshirt';
        const productRegex = new RegExp(product, 'i')
    
        cy.visit('https://automationexercise.com/products')
    
        // Enter product name in search input
        cy.get('#search_product').type(product)
    
        // Click search button
        cy.get('#submit_search').click()
    
        // Verify 'SEARCHED PRODUCTS' is visible
        cy.contains('Searched Products').should('be.visible')
    
        // Verify that there are products displayed and all contain the search term
        cy.get('.productinfo > p').each(($el) => {
            cy.wrap($el).invoke('text').should((text) => {
                expect(productRegex.test(text)).to.be.true
            })
        })
    })
})