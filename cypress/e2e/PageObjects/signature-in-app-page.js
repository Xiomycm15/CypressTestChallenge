class signatureInAppPage{


    elements = {
        electronicSignatureAgreeButton: () => cy.get('span').contains('Agree'),
        signatureInput: () => cy.get('span').contains('.signature-input'),
        signButton: () => cy.get('span').contains('SIGN'),
        clickToInitialButton : () => cy.get('.sigbutton-image').eq(0),
        clickToSignButton : () => cy.get('div').contains('Click to Sign'),
        finishButton : () => cy.get('.finish-btn'),
        confirmationText: () => cy.get('p').contains('Thank you for Signing this Document, we will contact you if further information is needed.'),
    }

    clickOnElectronicSignatureAgreeButton(){
        this.elements.electronicSignatureAgreeButton().click();
    }

    typeSignatureInput(signature){
        this.elements.signatureInput().type(signature);
    } 

    clickOnSignButton(){
        this.elements.signButton().click();
    }
    clickOnClickToInitialButton(){
        /*cy.get('#signatureFrame').then($iframe => {
            const $body = $iframe.contents().find('body')           
            cy.wrap($body).find('div').contains('Click to Sign').click()
          })*/

          this.elements.clickToInitialButton().click({force:true})

    } 

    clickOnClickToSignInButton(){
        /*cy.get('#signatureFrame').then($iframe => {
            const $body = $iframe.contents().find('body')           
            cy.wrap($body).find('div').contains('Click to Sign').click()
          })*/

          this.elements.clickToSignButton().click({force:true})

    } 
     

    clickOnFinishButton(){
        /*cy.get('#signatureFrame').then($iframe => {
            const $body = $iframe.contents().find('body')           
            cy.wrap($body).find('.finish-btn').click()
          })*/
          this.elements.finishButton().click({force:true})

    } 
     
    signatureProcessCompleteTextValidation(){
        this.elements.confirmationText().should('be.visible');
    }
    
}

module.exports = new signatureInAppPage();
