/// <reference types="cypress" />

describe("Dashboard ngx test", () => {

    beforeEach("Load Homepage",()=>{
       // Visiting Pages
    //    cy.visit('/') // will load only baseurl
        cy.visit('/pages/forms/layouts') // go to specific path
    })

    it.skip("Test homepage", () => {

        // get by Text
        cy.contains('ngx-')

        // by Tag
        cy.get('input')

        // get by ID
        cy.get('#inputEmail1',{timeout:30000}).type("admin@gmail.com")

        //get by Class
        cy.get('.input-full-width')

        //get by all class
        cy.get ('[class="input-full-width size-medium shape-rectangle"]')

        // get by attributes 
        cy.get('[placeholder="Email"]')

        // multiple attributes
        cy.get('[placeholder="Email"][class="input-full-width size-medium shape-rectangle"]')

        // mix of tag, attribute, ID and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // custom id or test ID
        cy.get('[data-cy="imputEmail1"]')

        //Xpath [Cypress doesn't support, we will need different lib]

    })

    it.skip("Second test", ()=>{
        //get()         -   find elemnts of a page, et only ekta object accept kore
        //find()        -   find child elements
        //contains()    -   act as findBytext locator in plywright. only first match ta return korbe

        cy.contains('Sign in') 
        cy.contains('[status="warning"]','Sign in',{timeout:60000}) // multiple locator user korle text ta sobar pore dite hobe
        // amra tag and text o use korte parbo
        cy.contains('nb-card','Horizontal form')
        // er moddhe theke child elemnt k findout korte parbo
        cy.contains('nb-card','Horizontal form').find('button') 
        cy.contains('nb-card','Horizontal form').find('[placeholder="Password"]')

        // cypress chaining and DOM
        // ekta input field ase amar but ami sei form e moddhei j checkbox ase khujbo

        cy.get('#inputEmail3',{timeout:30000})
            .parents('form')
            .find('button')
            .click()
    })


    it.skip("Storing Object",()=>{

        // This is not possible in cypress
        // const gridForm = cy.contains('nb-card','Using the Grid');
        // const emailField = gridForm.find('[placeholder="Email"]')
        // const passField = gridForm.find('[placeholder="Password"]')

        // emailField.type("admin@gmail.com");
        // passField.type("admin123");

        //Cypress Alias (Act as global also anywhere of this test block)
        cy.contains('nb-card','Using the Grid').as('gridForm')

        cy.get('@gridForm').find('[placeholder="Email"]').as('emailField')
        cy.get('@gridForm').find('[placeholder="Password"]').as('passField')

        cy.get('@emailField').type("admin@gmail.com")
        cy.get('@passField').type("123@Admin")

        // Cypress then() methods , sudhu block scope ei kaj korbe.
        cy.contains('nb-card','Using the Grid').then(gridForm => {
            //gridForm is now JQuery object

            //wrap is doing the work of alias
            cy.wrap(gridForm).find('[placeholder="Email"]').type("admin2")

            // alias inside then()
            cy.wrap(gridForm).find('[placeholder="Email"]').as('emailField2')
            cy.wrap(gridForm).get('@emailField2').type("admin3")
        })

    })

    it.skip("Extract elements values", () => {
        cy.contains('nb-card','Basic form').as('basicForm')
        cy.get('@basicForm').find('[for="exampleInputEmail1"]').type("test@google.com")
        cy.get('@basicForm').find('[for="exampleInputEmail1"]').should('contain','Email')

        // HTML inner text
        cy.get('@basicForm').find('button')
            .invoke('text')
            .then((text) => {
                cy.log(text)
            })

        // GET attribute value
        // button khujo then er moddhe type attribute er value return koro
        cy.get('@basicForm').find('button')
            .invoke('attr', 'type')
            .then((text) => {
                cy.log(text)
            })


    })

    it.skip("Interecting different elemnts", () => {

        //checkbox
        
        cy.contains('nb-card','Basic form').as('basicForm')
        cy.get('@basicForm')
        .find('nb-checkbox')
        .find('input')
        .check({force:true})

        // dropdown

        cy.get('.select-button').click()
        cy.contains('Cosmic').click()
        cy.get('.select-button').should('contain','Cosmic')

        //tooltip

        cy.contains('Modal & Overlays').click()
        cy.contains('.menu-title','Tooltip').click()

        cy.contains('nb-card','Colored Tooltips').contains('button','Default').click()
        cy.get('.top').should('contain','This is a tooltip')

    })

    it("Dialog and Alert",() => {
        cy.contains('Tables & Data').click()
        cy.contains('.menu-title','Smart Table').click()

        // click a delete button
        cy.get('.nb-trash').first().click()
        
    })

})
