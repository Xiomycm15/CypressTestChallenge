class communityHomePage{


    elements = {

        successLoginText: () =>  cy.get('[aria-label="Login Successful"]'), 
        startNewApplicationSelectButton: () =>  cy.get('.home-option__button').eq(0), 
    }

    successLoginTextValidation(){
        this.elements.successLoginText().should('have.text',' Login Successful ');
    }

    clickOnStartNewApplicationSelectButton(){
        this.elements.startNewApplicationSelectButton().click()

    }

    
}

module.exports = new communityHomePage();


