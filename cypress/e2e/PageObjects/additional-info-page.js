class additionalInfoPage{
    countChildren=0;
    countVehicles=0;
    countPets=0;
    countPetsYesCheckbox=0;
    countPetsNoCheckbox=0;

    elements = {

        informationSavedText: () =>  cy.get('[aria-label="Information Saved"]'), 
        otherOccupantsUnder18NoCheckbox: () =>  cy.get('[data-cy="underAgeInfo"] [data-cy="no"]'),
        otherOccupantsUnder18YesCheckbox: () =>  cy.get('[data-cy="underAgeInfo"] [data-cy="yes"]'),
        childrenNameInput: () =>  cy.get('#occupantName-'+this.countChildren),
        childrenRelationshipInput: () =>  cy.get('#occupantRelationship-'+this.countChildren),
        childrenAgeInput: () =>  cy.get('#occupantAge-'+this.countChildren),
        addAnotherOccupantButton: () =>  cy.get('button').contains('Add another Occupant'),
        vehiclesNoCheckbox: () =>  cy.get('[data-cy="vehicleInfo"] [data-cy="no"]'),
        vehiclesYesCheckbox: () =>  cy.get('[data-cy="vehicleInfo"] [data-cy="yes"]'),
        vehicleMakeInput: () =>  cy.get('#vehicleMake-'+this.countVehicles),
        vehicleModelInput: () =>  cy.get('#vehicleModel-'+this.countVehicles),
        vehicleColorInput: () =>  cy.get('#vehicleColor-'+this.countVehicles),
        vehicleYearInput: () =>  cy.get('#vehicleYear-'+this.countVehicles),
        vehicleTagInput: () =>  cy.get('#vehicleTag-'+this.countVehicles),
        vehicleStateRegisteredDropdown: () =>  cy.get('[data-cy="vehicleInfo"] mat-select').eq(this.countVehicles),
        valueDropdown: () =>  cy.get('.mat-option-text'),
        vehicleInsuranceBy: () =>  cy.get('#vehicleInsuredBy-'+this.countVehicles),
        vehicleElectricYesCheckbox: () =>  cy.get('[data-cy="vehicleInfo"] .vehicle-iselectric [data-cy="yes"]').eq(this.countVehicles),
        vehicleElectricNoCheckbox: () =>  cy.get('[data-cy="vehicleInfo"] .vehicle-iselectric [data-cy="no"]').eq(this.countVehicles),

        addAnotherVehicleButton: () =>  cy.get('button').contains('Add another Vehicle'),

        willThereBeAnyPetsNoCheckbox: () =>  cy.get('tev-pet-info tev-yes-no-input [value="yes"]').eq(1),
        willThereBeAnyPetsYesCheckbox: () =>  cy.get('tev-pet-info tev-yes-no-input [value="yes"]').eq(0),
        isThisPetEmotionalSupportNoCheckbox: () =>  cy.get('tev-pet-form tev-yes-no-input [data-cy="no"]').eq(this.countPetsNoCheckbox),
        isThisPetEmotionalSupportYesCheckbox: () =>  cy.get('tev-pet-form tev-yes-no-input [data-cy="yes"]').eq(this.countPetsYesCheckbox),

        petNameInput: () =>  cy.get('#petName-'+this.countPets),
        petTypeDropdown: () =>  cy.get('tev-pet-form mat-select').eq(this.countPets),
        petBreedInput: () =>  cy.get('#petBreed-'+this.countPets),
        petAgeInput: () =>  cy.get('#petAge-'+this.countPets),
        petWeightInput: () =>  cy.get('#petWeight-'+this.countPets),
        petSexDropdown : () =>  cy.get('tev-pet-form mat-select').eq(this.countPets),
        petDescriptionTextInput: () =>  cy.get('#petDescription-'+this.countPets),

        addAnotherPetButton: () =>  cy.get('.pet-info button').eq(this.countPets),

        
        saveAndContinueButton: () =>  cy.get('.confirm-button'),

    }

    informationSavedTextValidation(){
        this.elements.informationSavedText().should('be.visible');
    }

    clickOnOtherOccupantsUnder18NoCheckbox(){
        this.elements.otherOccupantsUnder18NoCheckbox().click({force:true});
    }
    
    clickOnOtherOccupantsUnder18YesCheckbox(){
        this.elements.otherOccupantsUnder18YesCheckbox().click({force:true});
    }
    
    typeChildrenName(childNo,childrenName){
        this.countChildren=childNo
        this.elements.childrenNameInput().type(childrenName);
    }
    
    typeChildrenRelationship(childNo,childrenRelation){
        this.countChildren=childNo
        this.elements.childrenRelationshipInput().type(childrenRelation);
    }
    
    typeFirstChildrenAge(childNo,childrenAge){
        this.countChildren=childNo
        this.elements.childrenAgeInput().type(childrenAge);
    }

    clickOnAddAnotherOccupantButton(){
        this.elements.addAnotherOccupantButton().click({force:true});
    }

    clickOnVehiclesYesCheckbox(){
        this.elements.vehiclesYesCheckbox().click({force:true});
    }

    clickOnVehiclesNoCheckbox(){
        this.elements.vehiclesNoCheckbox().click({force:true});
    }

    typeVehicleMakeInput(vehicleNo,vehicleMake){
        this.countVehicles=vehicleNo
        this.elements.vehicleMakeInput().type(vehicleMake);
    }

    typeVehicleModelInput(vehicleNo,vehicleModel){
        this.countVehicles=vehicleNo
        this.elements.vehicleModelInput().type(vehicleModel);
    }

    typeVehicleColorInput(vehicleNo,vehicleColor){
        this.countVehicles=vehicleNo
        this.elements.vehicleColorInput().type(vehicleColor);
    }

    typeVehicleYearInput(vehicleNo,vehicleYear){
        this.countVehicles=vehicleNo
        this.elements.vehicleYearInput().type(vehicleYear);
    }

    typeVehicleTagInput(vehicleNo,vehicleTag){
        this.countVehicles=vehicleNo
        this.elements.vehicleTagInput().type(vehicleTag);
    }

    selectVehicleStateRegisteredDropdown(vehicleNo,value){
        this.countVehicles=vehicleNo
        this.elements.vehicleStateRegisteredDropdown().click({force:true});
        this.elements.valueDropdown().contains(value).click({force:true})
    }

    typeVehicleInsuranceBy(vehicleNo,vehicleInsuranceBy){
        this.countVehicles=vehicleNo
        this.elements.vehicleInsuranceBy().type(vehicleInsuranceBy);
    }

    clickOnVehicleElectricYesCheckbox(vehicleNo){
        this.countVehicles=vehicleNo
        this.elements.vehicleElectricYesCheckbox().click({force:true})
    }

    clickOnVehicleElectricNoCheckbox(vehicleNo){
        this.countVehicles=vehicleNo
        this.elements.vehicleElectricNoCheckbox().click({force:true})
    }

    clickOnAddAnotherVehicleButton(){
        this.elements.addAnotherVehicleButton().click({force:true})
    }

    clickOnWillThereBeAnyPetsNoCheckbox(){
        this.elements.willThereBeAnyPetsNoCheckbox().click({force:true})
    }

    clickOnWillThereBeAnyPetsYesCheckbox(){
        this.elements.willThereBeAnyPetsYesCheckbox().click({force:true})
    }

    clickOnIsThisPetEmotionalSupportNoCheckbox(petNo){
        this.countPetsNoCheckbox=petNo
        this.elements.isThisPetEmotionalSupportNoCheckbox().click({force:true})
    }

    clickOnIsThisPetEmotionalSupportYesCheckbox(petNo){
        this.countPetsYesCheckbox=petNo
        this.elements.isThisPetEmotionalSupportYesCheckbox().click({force:true})
    }

    typePetNameInput(petNo, petName){
        this.countPets=petNo
        this.elements.petNameInput().type(petName);
    }

    selectPetTypeDropdown(petNo,value){
        this.countPets=petNo*2
        this.elements.petTypeDropdown().click({force:true});
        this.elements.valueDropdown().contains(value).click({force:true})

    }

    typePetBreedInput(petNo, petBreed){
        this.countPets=petNo
        this.elements.petBreedInput().type(petBreed);
    }

    typePetAgeInput(petNo, petAge){
        this.countPets=petNo
        this.elements.petAgeInput().type(petAge);
    }


    typePetWeightInput(petNo, petWeight){
        this.countPets=petNo
        this.elements.petWeightInput().type(petWeight);
    }

    selectPetSexDropdown(petNo,value){
        this.countPets=(2*petNo)+1
        this.elements.petSexDropdown().click({force:true});
        this.elements.valueDropdown().contains(value).click({force:true})
    }

    typePetDescriptionTextInput(petNo, petDescription){
        this.countPets=petNo
        this.elements.petDescriptionTextInput().type(petDescription);
    }

    clickOnAddAnotherPetButton(petNo){
        this.countPets=petNo
        this.elements.addAnotherPetButton().click({force:true})
    }

    clickOnSaveAndContinue(){
        this.elements.saveAndContinueButton().click({force:true})
    }
}

module.exports = new additionalInfoPage();
