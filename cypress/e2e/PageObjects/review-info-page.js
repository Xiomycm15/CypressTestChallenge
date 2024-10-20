class reviewInfoPage{


    elements = {

        informationSavedText: () =>  cy.get('[aria-label="Information Saved"]'), 
        saveAndContinueButton: () =>  cy.get('.confirm-button'), 

    }

    informationSavedTextValidation(){
        this.elements.informationSavedText().should('be.visible');
    }

    clickOnSaveAndContinueButton(){
        this.elements.saveAndContinueButton().click();
    } 
    
}

module.exports = new reviewInfoPage();
