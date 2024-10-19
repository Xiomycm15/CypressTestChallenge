class currentResidencePage{


    elements = {

        //closeButton: () =>  cy.get(''), 

        rentOrOwnDropdown: () =>  cy.get('[data-cy="primaryApplicantResidence"] [data-cy="typeOfResidence"]'), 
        valueDropDown: () =>  cy.get('.mat-option-text'), 
        propertyNumberInput: () =>  cy.get('[data-cy="primaryApplicantResidence"] [formcontrolname="number"]'), 
        propertyStreetNameInput: () =>  cy.get('[data-cy="primaryApplicantResidence"] [formcontrolname="streetName"]'), 
        //propertyCountryDropdown: () =>  cy.get(''), 
        propertyCityInput: () =>  cy.get('[data-cy="primaryApplicantResidence"] [formcontrolname="city"]'), 
        propertyZipCode: () =>  cy.get('[data-cy="primaryApplicantResidence"] [formcontrolname="zip"]'), 
        propertyStateDropdown: () =>  cy.get('[data-cy="primaryApplicantResidence"] mat-select').eq(2), 
        valueStateDropdown: () =>  cy.get('.mat-option-text'), 
        
        
        sameAsPrimaryApplicantCheckbox: () =>  cy.get('.mat-checkbox-inner-container'), 
        
        saveAndContinueButton: () =>  cy.get('.confirm-button'), 
        
        informationSavedText: () =>  cy.get('[aria-label="Information Saved"]'), 

    }
        saveInformationTextValidation(){
            this.elements.informationSavedText().should('be.visible');
        }

        selectRentOrOwnDropdown(value){
            this.elements.rentOrOwnDropdown().click({force:true});
            this.elements.valueDropDown().contains(value).click({force:true})
        }
        
        typePropertyNumber(propertyNumber){
            this.elements.propertyNumberInput().type(propertyNumber);
        }
        
        typePropertyStreet(propertyStreet){
            this.elements.propertyStreetNameInput().type(propertyStreet);

        }
        
        /*selectPropertyCountryDropdown(){

        }*/
        
        typePropertyCity(propertyCity){
            this.elements.propertyCityInput().type(propertyCity);

        }
        
        typePropertyZipCode(propertyZipCode){
            this.elements.propertyZipCode().type(propertyZipCode);

        }
        
        selectPropertyStateDropdown(state){
            this.elements.propertyStateDropdown().click({force:true});
            this.elements.valueStateDropdown().contains(state).click({force:true})

        }
        
        clickOnSameAsPrimaryApplicantCheckbox(){
            this.elements.sameAsPrimaryApplicantCheckbox().click({force:true});

        }
        
        clickOnSaveAndContinueButton(){
            this.elements.saveAndContinueButton().click({force:true});

        }

    
}

module.exports = new currentResidencePage();
