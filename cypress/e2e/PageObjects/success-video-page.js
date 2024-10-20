class successVideoPage{


    elements = {

        paymentSuccessfulText: () =>  cy.get('[aria-label="Payment Successful"]'), 
        signaturesAndUploadsGuide : () =>  cy.get('div').contains(' SIGNATURES AND UPLOADS GUIDE '), 

    }

    successPaymentTextValidation(){
        this.elements.paymentSuccessfulText().should('be.visible');
    }

    clickOnSignaturesUploadGuide(){
        this.elements.signaturesAndUploadsGuide().click()
    }
    
}

module.exports = new successVideoPage();


