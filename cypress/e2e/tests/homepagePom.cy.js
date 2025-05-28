import {navigateTo} from '../../support/page_objects/navigationPage'
import {formLayoutPage} from '../../support/page_objects/FormLayoutPage'
describe("Test with page objects",() => {

    beforeEach("Open application", () => {
        cy.LoadSite()
    })

    it("Navigate Menu", () => {
        navigateTo.formsLayoutPage()
    })

    it("Submit basic Form", () => {
        navigateTo.formsLayoutPage()
        formLayoutPage.submitBasicForm('admin@gmail.com','123@Admin')
    })

    it.skip("Submit grid Form", () => {
        navigateTo.formsLayoutPage()
        formLayoutPage.submitGridForm('admin@gmail.com','123@Admin')
    })

})