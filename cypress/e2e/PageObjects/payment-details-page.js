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
        

        signatureInput : () =>  cy.get('.signature-input'), 
        
        selectSignatureButton : () =>  cy.get('button').contains('Select signature style'), 
        
        
        iAgreeAndAuthorizeChargeCheckbox: () =>  cy.get('#agree-input'), 

        
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


    typeCardStreetInput(cardStreet){
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
        this.elements.cardZipCodeInput().type(cardZipCode);
    }

    typeCardDetails(cardNumber,expirationDate,cvvCard,postalCode){
        cy.get('.sq-card-component').then($iframe => {
            const $body = $iframe.contents().find('body')           
            cy.wrap($body).find('#cardNumber').type(cardNumber)
            cy.wrap($body).find('#expirationDate').type(expirationDate)
            cy.wrap($body).find('#cvv').type(cvvCard)
            cy.wrap($body).find('#postalCode').type(postalCode)
          })

    }

    typeSignatureInput(signatureName){
        this.elements.signatureInput().type(signatureName);
    }

    clickOnSelectSignatureButton(){
        this.elements.selectSignatureButton().click({force:true})
    }

    clickOnIAgreeAndAuthorizeChargeCheckbox(){
        this.elements.iAgreeAndAuthorizeChargeCheckbox().click({force: true})
    }
    
    clickOnPayButton(){
        this.elements.payButton().click({force:true})

    }


}

module.exports = new paymentDetailsPage();
