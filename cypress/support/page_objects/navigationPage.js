export class navigationPage{
     
formsLayoutPage(){
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
}

datePickingPage(){
    cy.contains('Forms').click()
    cy.contains('Form Layouts').click()
}


}
export const navigateTo = new navigationPage()