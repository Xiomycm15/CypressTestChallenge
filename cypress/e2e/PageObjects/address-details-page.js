class addressDetailsPage{


    elements = {

        confirmApplicationYesButton: () =>  cy.get('.confirm-button'), 
        propertyAddressInput: () =>  cy.get('#propertyAddress'), 
        unitNumberInput: () =>  cy.get('#profileAptUnit'), 
        cityInput: () =>  cy.get('#profileCity'), 
        //stateDropdown: () =>  cy.get('#profileCity'),
        zipCodeInput : () =>  cy.get('#profileZipCode'), 

        moveInDateCalendar: () =>  cy.get('mat-datepicker-toggle'), 
        dateCalendar: () =>  cy.get('.mat-calendar-body-cell-content'), 
    

        purchasePriceInput: () =>  cy.get('#purchasePrice'), 

        
        isTheApplicantWorkingWithRealYesCheckbox : () =>  cy.get('[formcontrolname="workingWithARealEstateAgent"]>div>mat-radio-group>[value="yes"]'), 
        agentNameInput: () =>  cy.get('#profileAgentName'), 
        agentEmailInput: () =>  cy.get('#profileAgentEmail'),
        agentMobileNumberInput: () =>  cy.get('#profileAgentCellphone'),
        iAgreeAgentMayReceiveNotificationCheckbox: () =>  cy.get('.mat-checkbox-inner-container'),
        
        saveAndContinueButton: () =>  cy.get('[data-test="continueButton"]'),
    }

    clickOnConfirmApplicationYesButton(){
        this.elements.confirmApplicationYesButton().click();
    }
    
    typePropertyAddress(propertyAddress){
        this.elements.propertyAddressInput().type(propertyAddress);
    }
    
    typeEnterUnitNumber(unitNumber){
        this.elements.unitNumberInput().type(unitNumber);
    }
    
    typeCity(city){
        this.elements.cityInput().type(city);
    }
    //selectState()
    typeZipCode(zipCode){

        this.elements.zipCodeInput().clear().type(zipCode);
    }
    

    clickOnDateCalendar(year,month,day){
        this.elements.moveInDateCalendar().click()
        this.elements.dateCalendar().contains(year).click();
        this.elements.dateCalendar().contains(month).click();
        this.elements.dateCalendar().contains(day).click();
    }
    
    typePurchasePrice(purchasePrice){
        this.elements.purchasePriceInput().type(purchasePrice);
    }
    
    clickOnIsTheApplicantWorkingWithRealYesCheckbox(){
        this.elements.isTheApplicantWorkingWithRealYesCheckbox().click({force: true})
    }

    typeAgentName(agentName){
        this.elements.agentNameInput().type(agentName)
    }
    
    typeAgentEmail(agentEmail){
        this.elements.agentEmailInput().type(agentEmail)
    }
    
    typeAgentMobileNumber(agentPhone){
        this.elements.agentMobileNumberInput().type(agentPhone)
    }
    
    clickOnIAgreeAgentMayReceiveNotificationCheckbox(){
        this.elements.iAgreeAgentMayReceiveNotificationCheckbox().click({force: true})
    }
    
    clickOnSaveAndContinueButton(){
    this.elements.saveAndContinueButton().click({force: true})
}

}

module.exports = new addressDetailsPage();
