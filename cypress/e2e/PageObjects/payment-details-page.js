class paymentDetailsPage{


    elements = {
        
        informationSavedText: () =>  cy.get('[aria-label="Information Saved"]'), 

        addPlatinumServiceNowButton: () =>  cy.get('.expedite-btn.expedite-btn--premium'), 
        cardNameInput: () =>  cy.get('#paymentBillingAddress'), 

        cardStreetInput : () =>  cy.get('#paymentStreet'), 
        cardCityInput: () =>  cy.get('#paymentCity'), 
        cardStateDropdown : () =>  cy.get('[placeholder="State"]'), 
        dropdownValue : () =>  cy.get('.mat-option-text'), 
        
        cardZipCodeInput: () =>  cy.get('#paymentZipCode'), 
        
        cardNumberInput : () =>  cy.get('#cardNumber'), 
        expirationDateInput: () =>  cy.get('#expirationDate'), 
        cvvCardInput: () =>  cy.get('#cvv'), 
        postalCodeInput : () =>  cy.get('#postalCode'), 

        signatureInput : () =>  cy.get('.signature-input'), 
        
        selectSignatureButton : () =>  cy.get('button').contains('Select signature style'), 
        
        
        iAgreeAndAuthorizeChargeCheckbox: () =>  cy.get('#agree'), 

        
        payButton: () =>  cy.get('[data-cy="buttonPay"]'), 

        
        //processingYourPaymentText: () =>  cy.get('[data-cy="buttonPay"]'),


    }

    informationSavedTextValidation(){
        this.elements.informationSavedText().should('be.visible');
    }

    clickOnAddPlatinumServiceNowButton(){
        this.elements.addPlatinumServiceNowButton().click({force:true});
    } 

    typeCardNameInput(cardName){
        this.elements.cardNameInput().type(cardName);
    }


    typeCardNameInput(cardStreet){
        this.elements.cardStreetInput().type(cardStreet);
    }

    typeCardCityInput(cardCity){
        this.elements.cardCityInput().type(cardCity);
    }

    selectCardStateDropdown(value){
        this.elements.cardStateDropdown().click({force:true});
        this.elements.dropdownValue().contains(value).click({force:true})
    }

    typeCardZipCodeInput(cardZipCode){
        this.elements.cardCityInput().type(cardZipCode);
    }

    typeCardNumber(cardNumber){
        this.elements.cardCityInput().type(cardNumber);
    }

    typeExpirationDateInput(expirationDate){
        this.elements.expirationDateInput().type(expirationDate);
    }

    typeCVVCardInput(cvvCardInput){
        this.elements.cvvCardInput().type(cvvCardInput);
    }

    typePostalCodeInput(postalCodeInput){
        this.elements.cvvCardInput().type(postalCodeInput);
    }

    typeSignatureInput(signatureName){
        this.elements.cvvCardInput().type(signatureName);
    }

    clickOnSelectSignatureButton(){
        this.elements.selectSignatureButton().click({force:true})
    }

    clickOnIAgreeAndAuthorizeChargeCheckbox(){
        this.elements.iAgreeAndAuthorizeChargeCheckbox().click({force:true})
    }
    
    clickOnPayButton(){
        this.elements.payButton().click({force:true})

    }


}

module.exports = new paymentDetailsPage();
