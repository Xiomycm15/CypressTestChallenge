class sigInRulesPage{


    elements = {

        signRulesAndRegulationsNowButton: () =>  cy.get('.profile-success__button'), 

    }

    clickOnSignRulesAndRegulationsNowButton(){
        this.elements.signRulesAndRegulationsNowButton().click({force:true})
    }
}

module.exports = new sigInRulesPage();
