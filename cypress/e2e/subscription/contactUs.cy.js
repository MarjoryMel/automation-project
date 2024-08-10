describe('Contact Us Form', () => {

    it('checks if the home page is visible successfully', () => {
        // Navigate to the URL
        cy.visit('https://automationexercise.com/')

        // Verify that the home page is visible
        cy.get('a > img').should('be.visible')
    })

    it('click on contact us button', () => {
        cy.visit('https://automationexercise.com/')

        //Click on 'Contact Us' button
        cy.get('.shop-menu > .nav > :nth-child(8) > a')
          .invoke('removeAttr', 'target')
          .click()

        //Verify 'GET IN TOUCH' is visible
        cy.contains('Get In Touch').should('be.visible')
    })

    it('enter name, email, subject, message and upload file', () =>{
        cy.visit('https://automationexercise.com/contact_us')

        //Enter name, email, subject, message and upload file
        cy.fixture('userValid').then((user) => {
            cy.get('[data-qa="name"]').type(user.name)
            cy.get('[data-qa="email"]').type(user.email)
            cy.get('[data-qa="subject"]').type(user.subject)
            cy.get('[data-qa="message"]').type(user.message)

            cy.fixture('userRegister.json').as('sampleFile')
            cy.get(':nth-child(6) > .form-control')
                .selectFile('@sampleFile')
                .should(function($input){
                    expect($input[0].files[0].name).to.equal('userRegister.json')
            })
        })

        //Click 'Submit' button
        cy.get('[data-qa="submit-button"]')
        .invoke('removeAttr', 'target')
          .click()

        //Verify success message 'Success! Your details have been submitted successfully.' is visible
        cy.contains('Success! Your details have been submitted successfully').should('be.visible')

        //Click 'Home' button and verify that landed to home page successfully
        cy.get('.nav > :nth-child(1) > a')
        .invoke('removeAttr', 'target')
        .click()

        cy.get('a > img').should('be.visible')
    })

})