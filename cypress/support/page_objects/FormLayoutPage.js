export class FormLayoutPage{
     
    submitBasicForm(email,password){
        cy.contains('nb-card','Basic form').as('basicForm')

        cy.get('@basicForm').find('[placeholder="Email"]').as('emailField')
        cy.get('@basicForm').find('[placeholder="Password"]').as('passField')

        cy.get('@emailField').type(email)
        cy.get('@passField').type(password)

        cy.get('@basicForm')
        .find('nb-checkbox')
        .find('input')
        .check({force:true})

        cy.get('@emailField').should('have.value',email)
        cy.contains('Submit').click()
        cy.get('@emailField').should('have.value','')
    }

    submitGridForm(email,password){
        cy.contains('nb-card','Using the Grid').then(gridForm => {

            cy.wrap(gridForm).find('#inputEmail1').type(email)
            cy.wrap(gridForm).find('[placeholder="Password"]').type(password)
            cy.wrap(gridForm).contains('nb-radio', 'Option 1').click()
            cy.wrap(gridForm).find('[placeholder="Email"]').should('have.value',email)
            cy.wrap(gridForm).contains('Sign in').click()
            cy.wrap(gridForm).find('#inputEmail1').should('have.value','')
        })

    }
    
    
    
    }
    export const formLayoutPage = new FormLayoutPage()