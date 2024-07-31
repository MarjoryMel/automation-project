describe('Register User', () => {

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

        // Use data from the fixture for user information
        cy.fixture('userData').then((user) => {
            cy.get('[data-qa="signup-name"]').type(user.name)
            cy.get('[data-qa="signup-email"]').type(user.email)
            cy.get('[data-qa="signup-button"]').click()

            // Verify that 'ENTER ACCOUNT INFORMATION' is visible
            cy.contains('Enter Account Information').should('be.visible')

            // Fill in account details: Title, Name, Email, Password, Date of Birth
            cy.get('input[type="radio"][value="Mr"]').check()
            cy.get('[data-qa="name"]').should('have.value', user.name)
            cy.get('[data-qa="email"]').should('have.value', user.email)
            cy.get('[data-qa="password"]').type(user.password).should('have.value', user.password)
            cy.get('[data-qa="days"]').select(user.birthDate.day).should('have.value', user.birthDate.day)
            cy.get('[data-qa="months"]').select(user.birthDate.month).should('have.value', user.birthDate.month)
            cy.get('[data-qa="years"]').select(user.birthDate.year).should('have.value', user.birthDate.year)
        })

        // Check and uncheck newsletter options
        cy.get('input[type="checkbox"]')
          .check()
          .should('be.checked')
          .last()
          .uncheck()
          .should('not.be.checked')

        // Use data from the fixture for address information
        cy.fixture('userAddress').then((data) => {
            const addressInfo = data.addressInfo;

            // Fill in address details
            cy.get('[data-qa="first_name"]').type(addressInfo.firstName)
            cy.get('[data-qa="last_name"]').type(addressInfo.lastName)
            cy.get('[data-qa="company"]').type(addressInfo.company)
            cy.get('[data-qa="address"]').type(addressInfo.address)
            cy.get('[data-qa="address2"]').type(addressInfo.address2)
            cy.get('[data-qa="country"]').select(addressInfo.country).should('have.value', addressInfo.country)
            cy.get('[data-qa="state"]').type(addressInfo.state)
            cy.get('[data-qa="city"]').type(addressInfo.city)
            cy.get('[data-qa="zipcode"]').type(addressInfo.zipcode)
            cy.get('[data-qa="mobile_number"]').type(addressInfo.mobileNumber)
        });

        // Click on 'Create Account' button
        cy.get('[data-qa="create-account"]')
          .invoke('removeAttr', 'target')
          .click()

        // Verify that 'ACCOUNT CREATED!' is visible
        cy.get('b').should('be.visible')

        // Click 'Continue' button
        cy.get('[data-qa="continue-button"]')
          .invoke('removeAttr', 'target')
          .click() 

        // Verify that 'Logged in as username' is visible
        cy.get(':nth-child(10) > a').should('be.visible')

        // Click 'Delete Account' button
        cy.get('.shop-menu > .nav > :nth-child(5) > a')
          .invoke('removeAttr', 'target')
          .click() 

        // Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button
        cy.get('b').should('be.visible')
        cy.get('[data-qa="continue-button"]')
          .invoke('removeAttr', 'target')
          .click() 
    });
})
