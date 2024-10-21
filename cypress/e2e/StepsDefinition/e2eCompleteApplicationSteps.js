import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import additionalInfoPage from "../PageObjects/additional-info-page";
import additionalInfoOther from "../PageObjects/additional-info-page";
import addressDetailsPage from "../PageObjects/address-details-page";
import communityEnterCodePage from "../PageObjects/community-enter-code-page";
import communityHomePage from "../PageObjects/community-home-page";
import currentResidencePage from "../PageObjects/current-residence-page";
import documentationAndConditionsPage from "../PageObjects/documentation-and-conditions-page";
import loginPage from "../PageObjects/login-page"
import personalInfoPage from "../PageObjects/personal-info-page";
import referencesPage from "../PageObjects/references-page";
import reviewInfoPage from "../PageObjects/review-info-page";
import whoIsBuyingPage from "../PageObjects/who-is-buying-page";
import paymentDetailsPage from "../PageObjects/payment-details-page";
import successVideoPage from "../PageObjects/success-video-page";
import profileSuccessDashboardPage from "../PageObjects/profile-success-dashboard-page";
import signInRulesPage from "../PageObjects/signIn-rules-page";
import signatureInAppPage from "../PageObjects/signature-in-app-page";
import additionalDetailsOwnerOther from "../PageObjects/additional-details-owner-other";
let item = 0;

beforeEach(() => {

});


Given('the user logins with valid credentials', () => {
  
  cy.fixture('users').then(user => {
    loginPage.clickOnCloseButton()
    loginPage.typeUserEmail(user[item].email)
    loginPage.typeUserPassword(user[item].password)
    loginPage.clickOnSiginButton()
    communityHomePage.successLoginTextValidation()
  });

});



When('ther user submits application for multiple customers with {string} property code', (code) => {
  cy.fixture('users').then(user => {
    cy.wait(3000)

  communityHomePage.clickOnStartNewApplicationSelectButton()
  communityEnterCodePage.enterPropertyCodeTextValidation()
  communityEnterCodePage.typePropertyCode(code)
  communityEnterCodePage.clickOnContinueButton()
  cy.wait(100)
  cy.intercept('https://tenantev-qa.tev2.co/application/new/'+code+'/O').as('todos')
  cy.visit('https://tenantev-qa.tev2.co/application/new/'+code+'/O', {

  })


  whoIsBuyingPage.clickOnMeAndSomeoneElseSelectButton()
  documentationAndConditionsPage.clickOnIHaveReadCheckbox()
  documentationAndConditionsPage.clickOnAgreeAndApplyButton()
  cy.wait(40000)
  addressDetailsPage.clickOnConfirmApplicationYesButton()
});

});


And('the user fills all of the mandatory fields for code {string}', (code) => {
  cy.fixture('users').then(user => {

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  addressDetailsPage.typePropertyAddress(user[item].propertyAddress)
  addressDetailsPage.typeEnterUnitNumber(user[item].propertyNumber)
  addressDetailsPage.typeCity(user[item].propertyCity)
  addressDetailsPage.typeZipCode(user[item].propertyZipCode)
  addressDetailsPage.clickOnDateCalendar(user[item].moveInDateYear,user[item].moveInDateMonth,user[item].moveInDateDay)


  addressDetailsPage.typePurchasePrice(user[item].purchasePrice)

  if(code=='12871'){
  additionalDetailsOwnerOther.clickOnDoYouKnowOwnersYesCheckbox()
  additionalDetailsOwnerOther.typeOwnersFullName(user[item].ownerFullName)
  additionalDetailsOwnerOther.typeOwnersEmail(user[item].ownerEmail)
  additionalDetailsOwnerOther.typeOwnersMobileNumber(user[item].ownerMobile)

  }

  addressDetailsPage.clickOnIsTheApplicantWorkingWithRealYesCheckbox()
  addressDetailsPage.typeAgentName(user[item].agentName)
  addressDetailsPage.typeAgentEmail(user[item].agentEmail)
  addressDetailsPage.typeAgentMobileNumber(user[item].agentMobile)

  addressDetailsPage.clickOnIAgreeAgentMayReceiveNotificationCheckbox()
  addressDetailsPage.clickOnSaveAndContinueButton()
  personalInfoPage.informationTextValidation()

  personalInfoPage.typeApplicantFirstName(user[item].applicantFirstName)
  personalInfoPage.typeApplicantLastName(user[item].applicantLastName)
  personalInfoPage.clickOnApplicantDateOfBirth(user[item].applicantDateBirthYear,user[item].applicantDateBirthMonth,user[item].applicantDateBirthDay)
  personalInfoPage.typeApplicantMobileNumber(user[item].applicantMobileNumber)
  if(code=='12871'){
  let applicantSSN=getRndInteger(100000000, 999999999)
  personalInfoPage.typeApplicantSSN(applicantSSN)
  //personalInfoPage.clickOnIAgreeReceiveTextMessageCheckbox()
  }
  personalInfoPage.selectcoApplicantRelationship()

  personalInfoPage.typecoApplicantFirstName(user[item].coapplicantFirstName)
  personalInfoPage.typecoApplicantLastName(user[item].coapplicantLastName)
  personalInfoPage.typecoApplicantEmail(user[item].coapplicantEmail)
  personalInfoPage.clickOncoApplicantDateOfBirth(user[item].coapplicantDateBirthYear,user[item].coapplicantDateBirthMonth,user[item].coapplicantDateBirthDay)
  personalInfoPage.typecoApplicantMobileNumber(user[item].coapplicantMobileNumber)

  if(code=='12871'){
  let coApplicantSSN=getRndInteger(100000000, 999999999)
  personalInfoPage.typecoApplicantSSN(coApplicantSSN)
  }

  personalInfoPage.clickOnIsPrimaryOrSecondaryApplicantDutyMilitaryNoCheckBox()
  personalInfoPage.clickOnHasApplicantBeenArrestedNoCheckbox()
  personalInfoPage.clickOnHasApplicantBeenConvictedOfAnyCrimeNoCheckbox()
  personalInfoPage.clickOnHasTheApplicantBeenEvictedNoCheckbox()
  personalInfoPage.clickOnSaveAndContinueButton()

  currentResidencePage.saveInformationTextValidation()
  currentResidencePage.selectRentOrOwnDropdown(user[item].RentOrOwnDropdown)
  currentResidencePage.typePropertyNumber(user[item].residenceNumber)
  currentResidencePage.typePropertyStreet(user[item].residenceStreet)
  currentResidencePage.typePropertyCity(user[item].residenceCity)
  currentResidencePage.typePropertyZipCode(user[item].residenceZipCode)
  currentResidencePage.selectPropertyStateDropdown(user[item].residenceStateDropdown)
  currentResidencePage.clickOnSameAsPrimaryApplicantCheckbox()
  currentResidencePage.clickOnSaveAndContinueButton()

  referencesPage.informationSavedTextValidation()
  referencesPage.selectEmploymentTypeDropdown(user[item].firstReferenceEmploymentType)
  referencesPage.typeFirstReferenceFullName(user[item].firstReferenceFullName)
  referencesPage.selectFirstReferenceRelationshipDropdown(user[item].firstReferenceRelationShip)
  referencesPage.typeFirstReferenceMobilePhone(user[item].firstReferenceMobilePhone)
  referencesPage.typeFirstReferenceEmail(user[item].firstReferenceEmail)
  referencesPage.typeSecondReferenceFullName(user[item].secondReferenceFullName)
  referencesPage.selectSecondReferenceRelationshipDropdown(user[item].secondReferenceRelationShip)
  referencesPage.typeSecondReferenceMobilePhone(user[item].secondReferenceMobilePhone)
  referencesPage.typeSecondReferenceEmail(user[item].secondReferenceEmail)
  if(code=='12871'){
  referencesPage.clickOnApplicantIncomeVerificationNoCheckbox()
  }
  referencesPage.selectRoommateEmploymentTypeDropdown(user[item].roommateEmploymentType)
  referencesPage.clickOnRoommateSameAsPrimaryApplicant()
  if(code=='12871'){
  referencesPage.clickOnRoommateIncomeVerificationNoCheckbox()
  }
  referencesPage.typeEmergencyContactFullName(user[item].emergencyContactFullName)
  referencesPage.typeEmergencyContactRelationship(user[item].emergencyContactRelationship)
  referencesPage.typeEmergencyContactCellphone(user[item].emergencyContactCellphone)
  referencesPage.typeEmergencyContactEmail(user[item].emergencyContactEmail)
  referencesPage.clickOnSaveAndContinueButton()
});
});


And('there are {string} occupants under the age of 18', (childrenQuantity) => {
  cy.fixture('users').then(user => {
  cy.log(item)
  childrenQuantity=parseInt(childrenQuantity)
  let childrenInfoCode1= [
    [user[item].firstChildrenName, user[item].firstChildrenRelationship,user[item].firstChildrenAge],
    [user[item].secondChildrenName, user[item].secondChildrenRelationship,user[item].secondChildrenAge],
  ]

  additionalInfoPage.informationSavedTextValidation()
  if(childrenQuantity==0){
    additionalInfoPage.clickOnOtherOccupantsUnder18NoCheckbox()
  }else if(childrenQuantity>0){
    additionalInfoPage.clickOnOtherOccupantsUnder18YesCheckbox()
    for (var i = 0; i <childrenQuantity ; i++) {
      if(i!=0){
        additionalInfoPage.clickOnAddAnotherOccupantButton(i)
      }     
      additionalInfoPage.typeChildrenName(i,childrenInfoCode1[i][0])
      additionalInfoPage.typeChildrenRelationship(i,childrenInfoCode1[i][1])
      additionalInfoPage.typeFirstChildrenAge(i,childrenInfoCode1[i][2])

    }

  }
});

});

And('{string} vehicles will be kept at the property', (vehicleQuantity) => {
  cy.fixture('users').then(user => {

  cy.log(item)
  let vehicleInfo= []

  if(item==0){
    vehicleInfo= [
    [user[item].firstVehicleMake, user[item].firstVehicleModel,user[item].firstVehicleColor, user[item].firstVehicleYear,user[item].firstVehicleTag, user[item].firstVehicleState, user[item].firstVehicleInsurance,user[item].firstVehicleElectric],
    [user[item].secondVehicleMake, user[item].secondVehicleModel,user[item].secondVehicleColor, user[item].secondVehicleYear,user[item].secondVehicleTag, user[item].secondVehicleState, user[item].secondVehicleInsurance,user[item].secondVehicleElectric],
  ]
}else if(item==1){
  vehicleInfo= [
    [user[item].firstVehicleMake, user[item].firstVehicleModel,user[item].firstVehicleColor, user[item].firstVehicleYear,user[item].firstVehicleTag, user[item].firstVehicleState, user[item].firstVehicleInsurance,user[item].firstVehicleElectric],
  ]
}

  vehicleQuantity=parseInt(vehicleQuantity)
    
  if(vehicleQuantity==0){
    additionalInfoPage.clickOnVehiclesNoCheckbox()
  }else if(vehicleQuantity>0){
    additionalInfoPage.clickOnVehiclesYesCheckbox()
    for (var i = 0; i <vehicleQuantity ; i++) {
      if(i!=0){
        additionalInfoPage.clickOnAddAnotherVehicleButton()
      }     
      additionalInfoPage.typeVehicleMakeInput(i,vehicleInfo[i][0])
      additionalInfoPage.typeVehicleModelInput(i,vehicleInfo[i][1])
      additionalInfoPage.typeVehicleColorInput(i,vehicleInfo[i][2])
      additionalInfoPage.typeVehicleYearInput(i,vehicleInfo[i][3])
      additionalInfoPage.typeVehicleTagInput(i,vehicleInfo[i][4])
      additionalInfoPage.selectVehicleStateRegisteredDropdown(i,vehicleInfo[i][5])
      additionalInfoPage.typeVehicleInsuranceBy(i,vehicleInfo[i][6])
      if(user[item].firstVehicleElectric=='YES'){      
        additionalInfoPage.clickOnVehicleElectricYesCheckbox(i)
      }else{
        additionalInfoPage.clickOnVehicleElectricNoCheckbox(i)
      }


    }

  }
});
});

And('{string} pets will be kept at the property for code {string}', (petsQuantity,code) => {
  cy.fixture('users').then(user => {

  petsQuantity=parseInt(petsQuantity)

  let petInfo= []
  if(item==0){
   petInfo= [
    [user[item].firstPetName, user[item].firstPetType,user[item].firstPetBreed, user[item].firstPetAge,user[item].firstPetWeight, user[item].firstPetSex, user[item].firstPetDescription],
    [user[item].secondPetName, user[item].secondPetType,user[item].secondPetBreed, user[item].secondPetAge,user[item].secondPetWeight, user[item].secondPetSex, user[item].secondPetDescription],  
    [user[item].thirdPetName, user[item].thirdPetType,user[item].thirdPetBreed, user[item].thirdPetAge,user[item].thirdPetWeight, user[item].thirdPetSex, user[item].thirdPetDescription],  
  ]
}else if(item==1){
  petInfo= [
    [user[item].firstPetName, user[item].firstPetType,user[item].firstPetBreed, user[item].firstPetAge,user[item].firstPetWeight, user[item].firstPetSex, user[item].firstPetDescription],
    [user[item].secondPetName, user[item].secondPetType,user[item].secondPetBreed, user[item].secondPetAge,user[item].secondPetWeight, user[item].secondPetSex, user[item].secondPetDescription],  
  ]
}


  if(petsQuantity==0){
    additionalInfoPage.clickOnWillThereBeAnyPetsNoCheckbox()

  }else if(petsQuantity>0){
    additionalInfoPage.clickOnWillThereBeAnyPetsYesCheckbox()
    for (var i = 0; i <petsQuantity ; i++) {
      if(i!=0){
        additionalInfoPage.clickOnAddAnotherPetButton(i-1)
      }   

      if(code=='12871'){
      additionalInfoOther.clickOnIsThisPetEmotionalSupportYesCheckbox(i) 
      }
      additionalInfoPage.typePetNameInput(i,petInfo[i][0])
      additionalInfoPage.selectPetTypeDropdown(i,petInfo[i][1])
      additionalInfoPage.typePetBreedInput(i,petInfo[i][2])
      additionalInfoPage.typePetAgeInput(i,petInfo[i][3])
      additionalInfoPage.typePetWeightInput(i,petInfo[i][4])
      additionalInfoPage.selectPetSexDropdown(i,petInfo[i][5])
      additionalInfoPage.typePetDescriptionTextInput(i,petInfo[i][6])

    }

  }

  additionalInfoPage.clickOnSaveAndContinue()
  reviewInfoPage.informationSavedTextValidation()
  reviewInfoPage.clickOnSaveAndContinueButton()
});
});


And('the user complete purchase with valid payment details', () => {
  cy.fixture('users').then(user => {

  paymentDetailsPage.clickOnAddPlatinumServiceNowButton()
  paymentDetailsPage.typeCardNameInput('test')
  paymentDetailsPage.typeCardStreetInput('test')
  paymentDetailsPage.typeCardCityInput('test')
  paymentDetailsPage.selectCardStateDropdown('FLORIDA')
  paymentDetailsPage.typeCardZipCodeInput('32003')
  paymentDetailsPage.typeCardDetails('4111111111111111','12/30','111','33333')
  paymentDetailsPage.typeSignatureInput('Test')
  paymentDetailsPage.clickOnSelectSignatureButton()
  paymentDetailsPage.clickOnIAgreeAndAuthorizeChargeCheckbox()
  paymentDetailsPage.clickOnPayButton()
});
});

Then('the purchase should be successfully completed', () => {
  cy.fixture('users').then(user => {

    cy.wait(4000)
    successVideoPage.successPaymentTextValidation()
    cy.wait(4000)
    cy.url().then((url) => {
      cy.log('Current URL is: ' + url)
      cy.visit(url+'-dashboard')
    })
    
    profileSuccessDashboardPage.transactionProcessedTextValidation()
    profileSuccessDashboardPage.transactionThankYouTextValidation()
    profileSuccessDashboardPage.applicationFormCompletedTextValidation()
    //profileSuccessDashboardPage.clickOnDownloadACopyButton()
    profileSuccessDashboardPage.clickOnSignRulesAndRegulationsNowButton()
    cy.wait(30000)
    profileSuccessDashboardPage.clickOnSignRulesAndRegulationsNowButton2()
    cy.wait(20000)

    signatureInAppPage.clickOnElectronicSignatureAgreeButton()
    //signatureInAppPage.typeSignatureInput('test')
    signatureInAppPage.clickOnSignButton()
    signatureInAppPage.clickOnClickToInitialButton()
    signatureInAppPage.clickOnClickToSignInButton()
    signatureInAppPage.clickOnFinishButton()
    signatureInAppPage.signatureProcessCompleteTextValidation()
  });
  })


  afterEach(() => {
    item=+1
  });


