class additionalDetailsOwnerOther{


    elements = {
    
        doYouKnowOwnersYesCheckbox: () =>  cy.get('[formcontrolname="knowOwnerInformation"]>div>mat-radio-group>[value="yes"]'), 
        ownersFullNameInput: () =>  cy.get('#profileOwnerName'), 
        ownersEmailInput: () =>  cy.get('#profileOwnerEmail'), 
        mobileNumberInput: () =>  cy.get('#profileOwnerCellphone'), 
 
    }


    
    clickOnDoYouKnowOwnersYesCheckbox(){
        this.elements.doYouKnowOwnersYesCheckbox().click({force: true})
    }
    
    typeOwnersFullName(ownerFullName){
        this.elements.ownersFullNameInput().type(ownerFullName);
    }
    
    typeOwnersEmail(ownerEmail){
        this.elements.ownersEmailInput().type(ownerEmail);
    }
    
    typeOwnersMobileNumber(ownerMobilePhone){
        this.elements.mobileNumberInput().type(ownerMobilePhone);
    }
    

}

module.exports = new additionalDetailsOwnerOther();
