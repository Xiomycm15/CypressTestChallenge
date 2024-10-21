class additionalInfoOther{

    countPetsYesCheckbox=0;
    countPetsNoCheckbox=0;

    elements = {

        isThisPetEmotionalSupportNoCheckbox: () =>  cy.get('tev-pet-form tev-yes-no-input [data-cy="no"]').eq(this.countPetsNoCheckbox),
        isThisPetEmotionalSupportYesCheckbox: () =>  cy.get('tev-pet-form tev-yes-no-input [data-cy="yes"]').eq(this.countPetsYesCheckbox),

    }

 
    clickOnIsThisPetEmotionalSupportNoCheckbox(petNo){
        this.countPetsNoCheckbox=petNo
        this.elements.isThisPetEmotionalSupportNoCheckbox().click({force:true})
    }

    clickOnIsThisPetEmotionalSupportYesCheckbox(petNo){
        this.countPetsYesCheckbox=petNo
        this.elements.isThisPetEmotionalSupportYesCheckbox().click({force:true})
    }

}

module.exports = new additionalInfoOther();
