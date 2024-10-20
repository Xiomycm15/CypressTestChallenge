class successVideoPage{


    elements = {

        paymentSuccessfulText: () =>  cy.get('[aria-label="Payment Successful"]'), 

    }

    successPaymentTextValidation(){
        this.elements.paymentSuccessfulText().should('be.visible');
    }
    
}

module.exports = new successVideoPage();


