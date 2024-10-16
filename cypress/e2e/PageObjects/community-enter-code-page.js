class communityEnterCodePage{


    elements = {

        enterPropertyCodeText: () =>  cy.get('h1'), 
        enterCodeInput: () =>  cy.get('input[name="code"]'), 
        continueButton: () =>  cy.get('.enter-code-button')

    }


    enterPropertyCodeTextValidation(){
        this.elements.enterPropertyCodeText().should('have.text','Enter the property code here ');

    }
    typePropertyCode(propertyCode){
        this.elements.enterCodeInput().type(propertyCode)
    }

    clickOnContinueButton(){
        this.elements.continueButton().click()

    }

    
}

module.exports = new communityEnterCodePage();


