class whoIsBuyingPage{


    elements = {

        meAndSomeoneElseSelectButton: () =>  cy.get('[data-test="coApplicantButton"]'), 

    }

    clickOnMeAndSomeoneElseSelectButton(){
        this.elements.meAndSomeoneElseSelectButton().click();
    }
}

module.exports = new whoIsBuyingPage();
