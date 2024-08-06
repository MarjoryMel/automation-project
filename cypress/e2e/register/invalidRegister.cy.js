describe('Invalid Register', () => {

    it('checks if the home page is visible successfully', () => {
        // Navigate to the URL
        cy.visit('https://automationexercise.com/')

        // Verify that the home page is visible
        cy.get('a > img').should('be.visible')
    })

    it('click on the Sign Up/Log In button and check if New User Signup! is visible', () => {
        cy.visit('https://automationexercise.com/')

        // Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a')
          .invoke('removeAttr', 'target')
          .click()

        // Verify 'New User Signup!' is visible
        cy.contains('New User Signup!')
          .should('be.visible')
    })

    it.only('the user enters their name and email', () => {
        cy.visit('https://automationexercise.com/login')

        //Enter name and already registered email address
        cy.fixture('userValid').then((user) => {
            cy.get('[data-qa="signup-name"]').type(user.name)
            cy.get('[data-qa="signup-email"]').type(user.email)
            cy.get('[data-qa="signup-button"]').click()

            // Verify that 'Email Address already exist!' is visible
            cy.contains('Email Address already exist!').should('be.visible')
        })
    })
})