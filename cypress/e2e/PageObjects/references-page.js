class referencesPage{


    elements = {

        employmentTypeDropdown: () =>  cy.get('[data-cy="applicantEmploymentType"]').eq(0), 
        valueDropdown: () =>  cy.get('.mat-option-text'), 

        firstReferenceFullNameInput: () =>  cy.get('#employmentPersonalReferenceName-0'), 
        firstReferenceRelationshipDropdown: () =>  cy.get('[data-cy="relationshipWithReference"]').eq(0), 

        //firstReferenceCountryDropdown: () =>  cy.get(''), 
        firstReferenceCellPhoneInput: () =>  cy.get('#employmentPersonalReferenceCellPhone-0'), 
        firstReferenceEmailInput: () =>  cy.get('#employmentPersonalReferenceEmail-0'), 
        
        secondReferenceFullNameInput: () =>  cy.get('#employmentPersonalReferenceName-1'), 
        secondReferenceRelationshipDropdown: () =>  cy.get('[data-cy="relationshipWithReference"]').eq(1), 
        //secondReferenceCountryDropdown: () =>  cy.get(''), 
        secondReferenceCellPhoneInput: () =>  cy.get('#employmentPersonalReferenceCellPhone-1'), 
        secondReferenceEmailInput: () =>  cy.get('#employmentPersonalReferenceEmail-1'), 
        
        applicantIncomeVerificationNoCheckbox: () =>  cy.get('[data-cy="incomeVerification"] [data-cy="no"]').eq(0), 
        roommateEmploymentTypeDropdown: () =>  cy.get('tev-secondary-applicant-info [data-cy="applicantEmploymentType"]'), 
        roommateSameAsPrimaryApplicant: () =>  cy.get('tev-secondary-applicant-info .mat-checkbox-label').contains('Same as Primary Applicant'), 
        
        roommateIncomeVerificationNoCheckbox: () =>  cy.get('[data-cy="incomeVerification"] [data-cy="no"]').eq(1), 
        
        emergencyContactFullNameInput: () =>  cy.get('#employmentEmergencyContactName'), 
        emergencyContactRelationshipInput: () =>  cy.get('#employmentEmergencyRelationship'), 
        emergencyContactCellPhone: () =>  cy.get('#employmentEmergencyContactCellPhone'), 
        emergencyContactEmail: () =>  cy.get('#employmentEmergencyContactEmail'), 
        
        saveAndContinueButton: () =>  cy.get('.confirm-button'), 
        
        informationSavedText: () =>  cy.get('[aria-label="Information Saved"]'), 
    }


    informationSavedTextValidation(){
        this.elements.informationSavedText().should('be.visible');
    }

    selectEmploymentTypeDropdown(value){
        this.elements.employmentTypeDropdown().click({force:true});
        this.elements.valueDropdown().contains(value).click({force:true})
    }
    typeFirstReferenceFullName(firstReferenceName){
        this.elements.firstReferenceFullNameInput().type(firstReferenceName);

    }

    selectFirstReferenceRelationshipDropdown(value){
        this.elements.firstReferenceRelationshipDropdown().click({force:true});
        this.elements.valueDropdown().contains(value).click({force:true})
    }

    /*selectFirstReferenceCountryDropdown(){}*/
    typeFirstReferenceMobilePhone(mobileFirstReference){
        this.elements.firstReferenceCellPhoneInput().type(mobileFirstReference);

    }

    typeFirstReferenceEmail(emailFirstReference){
        this.elements.firstReferenceEmailInput().type(emailFirstReference);
    }
    
    typeSecondReferenceFullName(secondReferenceName){
        this.elements.secondReferenceFullNameInput().type(secondReferenceName);
    }

    selectSecondReferenceRelationshipDropdown(value){
        this.elements.secondReferenceRelationshipDropdown().click({force:true});
        this.elements.valueDropdown().contains(value).click({force:true})
    }

    /*selectSecondReferenceCountryDropdown(){}*/

    typeSecondReferenceMobilePhone(mobileSecondReference){
        this.elements.secondReferenceCellPhoneInput().type(mobileSecondReference);
    }


    typeSecondReferenceEmail(emailSecondReference){
        this.elements.secondReferenceEmailInput().type(emailSecondReference);
    }
    
    
    clickOnApplicantIncomeVerificationNoCheckbox(){
        this.elements.applicantIncomeVerificationNoCheckbox().click({force:true});
    }

    selectRoommateEmploymentTypeDropdown(value){
        this.elements.roommateEmploymentTypeDropdown().click({force:true});
        this.elements.valueDropdown().contains(value).click({force:true})
    }

    clickOnRoommateSameAsPrimaryApplicant(){
        this.elements.roommateSameAsPrimaryApplicant().click({force:true});
    } 
    

    clickOnRoommateIncomeVerificationNoCheckbox(){
        this.elements.roommateIncomeVerificationNoCheckbox().click({force:true});

    }

    typeEmergencyContactFullName(emergencyContactName){
        this.elements.emergencyContactFullNameInput().type(emergencyContactName);

    }
    typeEmergencyContactRelationship(emergencyContactRelationship){
        this.elements.emergencyContactRelationshipInput().type(emergencyContactRelationship);
    }
    
    typeEmergencyContactCellphone(emergencyContactPhone){
        this.elements.emergencyContactCellPhone().type(emergencyContactPhone);
    }


    typeEmergencyContactEmail(emergencyContactEmail){
        this.elements.emergencyContactEmail().type(emergencyContactEmail);

    }
    

    clickOnSaveAndContinueButton(){
        this.elements.saveAndContinueButton().click({force:true});
    }
    
    
    
}

module.exports = new referencesPage();
