class DocumentationAndConditionsPage{


    elements = {

        iHaveReadCheckbox: () =>  cy.get('.checkmark'), 
        agreeAndApplyButton: () =>  cy.get('[data-test="buttonAgreeFees"]'),

    }

    clickOnIHaveReadCheckbox(){
        this.elements.iHaveReadCheckbox().click();
    }

    clickOnAgreeAndApplyButton(){
        this.elements.agreeAndApplyButton().click();
    } 

    
}

module.exports = new DocumentationAndConditionsPage();
