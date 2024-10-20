class profileSuccessDashboardPage{


    elements = {

        transactionProcessedText: () =>  cy.get('p').contains(' Your transaction has been processed and your application has been created successfully. '), 
        thankYouText: () =>  cy.get('p').contains(' Thank you! '), 
        applicationFormCompletedText: () =>  cy.get('.profile-success-option.profile-success-option-active'), 
        downloadACopyButton: () =>  cy.get('span').contains(' Download a copy of your receipt '), 
        signRulesAndRegulationsNowButton: () =>  cy.get('.profile-success__button'), 
        signRulesAndRegulationsNowButton2: () =>  cy.get('.iphone-btn'),
    }

    transactionProcessedTextValidation(){
        this.elements.transactionProcessedText().should('be.visible');
    }

    transactionThankYouTextValidation(){
        this.elements.thankYouText().should('be.visible');
    }


    applicationFormCompletedTextValidation(){
        this.elements.applicationFormCompletedText().should('be.visible');
    }
   

    clickOnDownloadACopyButton(){
        this.elements.downloadACopyButton().click({force:true})
    }


    clickOnSignRulesAndRegulationsNowButton(){
        this.elements.signRulesAndRegulationsNowButton().click({force:true})
    }
    clickOnSignRulesAndRegulationsNowButton2(){
        this.elements.signRulesAndRegulationsNowButton2().click({force:true})
    }

    
}

module.exports = new profileSuccessDashboardPage();
