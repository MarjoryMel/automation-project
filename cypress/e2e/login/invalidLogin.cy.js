describe('Invalid Login', () => {

    it('checks if the home page is visible successfully', () => {
        // Navigate to the URL
        cy.visit('https://automationexercise.com/')

        // Verify that the home page is visible
        cy.get('a > img').should('be.visible')
    })

    it('click on the Sign Up/Log In button and check if Login to your account is visible', () => {
        cy.visit('https://automationexercise.com/')

        // Click on 'Signup / Login' button
        cy.get('.shop-menu > .nav > :nth-child(4) > a')
          .invoke('removeAttr', 'target')
          .click()

        // Verify 'Login to your account' is visible
        cy.contains('Login to your account')
          .should('be.visible')
    })

    it('the user enters their incorrect email and password', () => {
        cy.visit('https://automationexercise.com/login')

        // Use data from the fixture for user information
        cy.fixture('userData').then((user) => {
            cy.get('[data-qa="login-email"]').type(user.email)
            cy.get('[data-qa="login-password"]').type(user.password)
            cy.get('[data-qa="login-button"]').click()

            // Verify that 'ENTER ACCOUNT INFORMATION' is visible
            cy.contains('Your email or password is incorrect!').should('be.visible')
        })
    })
})