
class personalInfoPage{


    elements = {

        informationSavedText: () =>  cy.get('[aria-label="Information Saved"]'), 
        applicantFirstNameInput : () =>  cy.get('#profileName'), 
        applicantLastNameInput: () =>  cy.get('#profileLastname'), 
        //applicantEmailInput: () =>  cy.get(''), 
        applicantCalendarIcon: () =>  cy.get('[data-test="applicantDateOfBirth"]'),
        applicantDateOfBirthInput: () =>  cy.get('.mat-calendar-body-cell-content'),

    
        applicantMobileNumberInput: () =>  cy.get('#profileCellPhone'), 
        applicantSSNInput: () =>  cy.get('#profileSsn'), 
        iAgreeReceiveTextMessageCheckbox: () =>  cy.get('.mat-checkbox-inner-container').eq(0), 
        

        coApplicantRelationshipDropdown: () =>  cy.get('[data-test="coApplicantRelationship"]'), 
        coApplicantRelationshipRoomate: () =>  cy.get('.mat-option-text').eq(1), 
        coApplicantFirstNameInput: () =>  cy.get('#profileCoApplicantName'), 
        coApplicantLastNameInput: () =>  cy.get('#profileCoApplicantLastName'), 
        coApplicantEmailInput: () =>  cy.get('#spouse-email'), 
        coApplicantDateOfBirthInput: () =>  cy.get('#profileCoApplicantBirthDate'),
        coApplicantMobileNumberInput: () =>  cy.get('#profileCoApplicantCellPhone'), 
        coApplicantSSNInput: () =>  cy.get('#profileCoApplicantSsn'), 
        
        isApplicantDutyMilitaryNoCheckbox: () =>  cy.get('[data-cy="activeDutyMilitary"] > tev-yes-no-input [data-cy="no"'), 
        hasApplicantBeenArrestedNoCheckbox: () =>  cy.get('[data-cy="remarksQuestions"] > tev-yes-no-input [data-cy="no"]').eq(0), 
        hasApplicantBeenConvictedOfAnyCrimeNoCheckbox: () =>  cy.get('[data-cy="remarksQuestions"] > tev-yes-no-input [data-cy="no"]').eq(1), 
        hasTheApplicantBeenEvictedNoCheckbox: () =>  cy.get('[data-cy="remarksQuestions"] > tev-yes-no-input [data-cy="no"]').eq(2), 
        saveAndContinueButton: () =>  cy.get('[data-test="continueButton"]'), 
        

    }
    
    informationTextValidation(){
        this.elements.informationSavedText().should('be.visible');
    }


    typeApplicantFirstName(applicantFirstName){
        this.elements.applicantFirstNameInput().type(applicantFirstName);
    }

    
    typeApplicantLastName(applicantLastName){
        this.elements.applicantLastNameInput().type(applicantLastName);
    }
    
    /*typeApplicantEmail(applicantEmail){
        this.elements.applicantEmailInput().type(applicantEmail);
    }*/
    
    clickOnApplicantDateOfBirth(year,month,day){
        this.elements.applicantCalendarIcon().click();
        this.elements.applicantDateOfBirthInput().contains(year).click()
        this.elements.applicantDateOfBirthInput().contains(month).click()
        this.elements.applicantDateOfBirthInput().contains(day).click()

    }
    
    typeApplicantMobileNumber(applicantNumber){
        this.elements.applicantMobileNumberInput().type(applicantNumber);
    }
    
    typeApplicantSSN(applicantSSN){
        this.elements.applicantSSNInput().type(applicantSSN);

    }
    
    clickOnIAgreeReceiveTextMessageCheckbox(){
        this.elements.iAgreeReceiveTextMessageCheckbox().click({force: true} );

    }
    
    selectcoApplicantRelationship(){
        //Roommate / Family Members / Friends / Co-signers 
        this.elements.coApplicantRelationshipDropdown().click({force: true})
        this.elements.coApplicantRelationshipRoomate().click({force: true})

    }
    
    typecoApplicantFirstName(coAplicantFirstName){
        this.elements.coApplicantFirstNameInput().type(coAplicantFirstName)
    }
    
    typecoApplicantLastName(coAplicantLasttName){
        this.elements.coApplicantLastNameInput().type(coAplicantLasttName)
    }
    
    typecoApplicantEmail(coAplicantEmail){
        this.elements.coApplicantEmailInput().type(coAplicantEmail)
    }
    
    clickOncoApplicantDateOfBirth(year,month,day){
        this.elements.coApplicantDateOfBirthInput().click({force:true})
        this.elements.coApplicantDateOfBirthInput().click({force:true})
        this.elements.coApplicantDateOfBirthInput().clear().type(month+'/'+day+'/'+year)
        this.elements.coApplicantDateOfBirthInput().click({force:true})
    }
    
    typecoApplicantMobileNumber(coAplicantMobile){
        this.elements.coApplicantMobileNumberInput().click({force: true}).type(coAplicantMobile)
    }
    
    typecoApplicantSSN(coApplicantSSN){
        this.elements.coApplicantSSNInput().click({force: true}).type(coApplicantSSN)
    }
    
    clickOnIsPrimaryOrSecondaryApplicantDutyMilitaryNoCheckBox(){
        this.elements.isApplicantDutyMilitaryNoCheckbox().click({force:true});

    }
    
    clickOnHasApplicantBeenArrestedNoCheckbox(){
        this.elements.hasApplicantBeenArrestedNoCheckbox().click({force:true});

    }
    
    clickOnHasApplicantBeenConvictedOfAnyCrimeNoCheckbox(){
        this.elements.hasApplicantBeenConvictedOfAnyCrimeNoCheckbox().click({force:true});
    }
    
    clickOnHasTheApplicantBeenEvictedNoCheckbox(){
        this.elements.hasTheApplicantBeenEvictedNoCheckbox().click({force:true});
    }
    
    clickOnSaveAndContinueButton(){
        this.elements.saveAndContinueButton().click({force:true});
    }
 
}

module.exports = new personalInfoPage();


