import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import additionalInfoPage from "../PageObjects/additional-info-page";
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


Given('the user logins with valid credentials', () => {
 
    loginPage.clickOnCloseButton()
    loginPage.typeUserEmail("xio.maracm1234@gmail.com")
    loginPage.typeUserPassword("Paciencia2")
    loginPage.clickOnSiginButton()
    cy.wait(3000)
    communityHomePage.successLoginTextValidation()
});


When('ther user submits application for multiple customers with {string} property code', (code) => {
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
  cy.wait(30000)
  addressDetailsPage.clickOnConfirmApplicationYesButton()

});


And('the user fills all of the mandatory fields', () => {

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  addressDetailsPage.typePropertyAddress('921 West Ann Street Fort Myers')
  addressDetailsPage.typeEnterUnitNumber('2')
  addressDetailsPage.typeCity('Florida')
  addressDetailsPage.typeZipCode('33912')
  addressDetailsPage.clickOnDateCalendar('2024','OCT','22')


  addressDetailsPage.typePurchasePrice('400000')

  addressDetailsPage.clickOnDoYouKnowOwnersYesCheckbox()
  addressDetailsPage.typeOwnersFullName('Test')
  addressDetailsPage.typeOwnersEmail('test@gmail.com')
  addressDetailsPage.typeOwnersMobileNumber('1234567890')

  addressDetailsPage.clickOnIsTheApplicantWorkingWithRealYesCheckbox()
  addressDetailsPage.typeAgentName("Test")
  addressDetailsPage.typeAgentEmail("test2@gmail.com")
  addressDetailsPage.typeAgentMobileNumber('1214537890')

  addressDetailsPage.clickOnIAgreeAgentMayReceiveNotificationCheckbox()
  addressDetailsPage.clickOnSaveAndContinueButton()
  personalInfoPage.informationTextValidation()

  personalInfoPage.typeApplicantFirstName('John')
  personalInfoPage.typeApplicantLastName('Doe')
  personalInfoPage.clickOnApplicantDateOfBirth('1988','OCT','17')
  personalInfoPage.typeApplicantMobileNumber('1234567890')
  let applicantSSN=getRndInteger(100000000, 999999999)
  personalInfoPage.typeApplicantSSN(applicantSSN)
  //personalInfoPage.clickOnIAgreeReceiveTextMessageCheckbox()
  personalInfoPage.selectcoApplicantRelationship()

  personalInfoPage.typecoApplicantFirstName('Jane')
  personalInfoPage.typecoApplicantLastName('Smith')
  personalInfoPage.typecoApplicantEmail('test@gmail.com')
  personalInfoPage.clickOncoApplicantDateOfBirth('1988','2','20')
  personalInfoPage.typecoApplicantMobileNumber('1294567890')
  let coApplicantSSN=getRndInteger(100000000, 999999999)
  personalInfoPage.typecoApplicantSSN(coApplicantSSN)

  personalInfoPage.clickOnIsPrimaryOrSecondaryApplicantDutyMilitaryNoCheckBox()
  personalInfoPage.clickOnHasApplicantBeenArrestedNoCheckbox()
  personalInfoPage.clickOnHasApplicantBeenConvictedOfAnyCrimeNoCheckbox()
  personalInfoPage.clickOnHasTheApplicantBeenEvictedNoCheckbox()
  personalInfoPage.clickOnSaveAndContinueButton()

  currentResidencePage.saveInformationTextValidation()
  currentResidencePage.selectRentOrOwnDropdown('Own home')
  currentResidencePage.typePropertyNumber('2')
  currentResidencePage.typePropertyStreet('street test')
  currentResidencePage.typePropertyCity('Florida')
  currentResidencePage.typePropertyZipCode('33445')
  currentResidencePage.selectPropertyStateDropdown('FLORIDA')
  currentResidencePage.clickOnSameAsPrimaryApplicantCheckbox()
  currentResidencePage.clickOnSaveAndContinueButton()

  referencesPage.informationSavedTextValidation()
  referencesPage.selectEmploymentTypeDropdown('Retired')
  referencesPage.typeFirstReferenceFullName('Maria')
  referencesPage.selectFirstReferenceRelationshipDropdown('Friend')
  referencesPage.typeFirstReferenceMobilePhone('1234567890')
  referencesPage.typeFirstReferenceEmail('test4@gmail.com')
  referencesPage.typeSecondReferenceFullName('Victor')
  referencesPage.selectSecondReferenceRelationshipDropdown('Co-Worker')
  referencesPage.typeSecondReferenceMobilePhone('1123456789')
  referencesPage.typeSecondReferenceEmail('test5@gmail.com')
  referencesPage.clickOnApplicantIncomeVerificationNoCheckbox()
  referencesPage.selectRoommateEmploymentTypeDropdown('Homemaker')
  referencesPage.clickOnRoommateSameAsPrimaryApplicant()
  referencesPage.clickOnRoommateIncomeVerificationNoCheckbox()
  referencesPage.typeEmergencyContactFullName('Martha')
  referencesPage.typeEmergencyContactRelationship('Mother')
  referencesPage.typeEmergencyContactCellphone('1234467890')
  referencesPage.typeEmergencyContactEmail('test5@gmail.com')
  referencesPage.clickOnSaveAndContinueButton()

});


And('there are {string} occupants under the age of 18', (childrenQuantity) => {

  childrenQuantity=parseInt(childrenQuantity)
  
  additionalInfoPage.informationSavedTextValidation()
  if(childrenQuantity==0){
    additionalInfoPage.clickOnOtherOccupantsUnder18NoCheckbox()
  }else if(childrenQuantity>0){
    additionalInfoPage.clickOnOtherOccupantsUnder18YesCheckbox()
    for (var i = 0; i <childrenQuantity ; i++) {
      if(i!=0){
        additionalInfoPage.clickOnAddAnotherOccupantButton()
      }     
      additionalInfoPage.typeChildrenName(i,'Maria')
      additionalInfoPage.typeChildrenRelationship(i,'friend')
      additionalInfoPage.typeFirstChildrenAge(i,'3')

    }

  }

});

And('{string} vehicles will be kept at the property', (vehicleQuantity) => {

  vehicleQuantity=parseInt(vehicleQuantity)
    
  if(vehicleQuantity==0){
    additionalInfoPage.clickOnVehiclesNoCheckbox()
  }else if(vehicleQuantity>0){
    additionalInfoPage.clickOnVehiclesYesCheckbox()
    for (var i = 0; i <vehicleQuantity ; i++) {
      if(i!=0){
        additionalInfoPage.clickOnAddAnotherVehicleButton()
      }     
      additionalInfoPage.typeVehicleMakeInput(i,'test')
      additionalInfoPage.typeVehicleModelInput(i,'test')
      additionalInfoPage.typeVehicleColorInput(i,'test')
      additionalInfoPage.typeVehicleYearInput(i,'2010')
      additionalInfoPage.typeVehicleTagInput(i,'test')
      additionalInfoPage.selectVehicleStateRegisteredDropdown(i,'FLORIDA')
      additionalInfoPage.typeVehicleInsuranceBy(i,'test')
      additionalInfoPage.clickOnVehicleElectricYesCheckbox(i)

    }

  }
});

And('{string} pets will be kept at the property', (petsQuantity) => {
  petsQuantity=parseInt(petsQuantity)
    
  if(petsQuantity==0){
    additionalInfoPage.clickOnWillThereBeAnyPetsNoCheckbox()

  }else if(petsQuantity>0){
    additionalInfoPage.clickOnWillThereBeAnyPetsYesCheckbox()
    for (var i = 0; i <petsQuantity ; i++) {
      if(i!=0){
        additionalInfoPage.clickOnAddAnotherPetButton()
      }   
      additionalInfoPage.clickOnIsThisPetEmotionalSupportYesCheckbox(i) 
      additionalInfoPage.typePetNameInput(i,'test')
      additionalInfoPage.selectPetTypeDropdown(i,'Dog')
      additionalInfoPage.typePetBreedInput(i,'test')
      additionalInfoPage.typePetAgeInput(i,'10')
      additionalInfoPage.typePetWeightInput(i,'10')
      additionalInfoPage.selectPetSexDropdown(i,'Male')
      additionalInfoPage.typePetDescriptionTextInput(i,'test')

    }

  }

  additionalInfoPage.clickOnSaveAndContinue()
  reviewInfoPage.informationSavedTextValidation()
  reviewInfoPage.clickOnSaveAndContinueButton()

});


And('the user complete purchase with valid payment details', () => {

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

Then('the purchase should be successfully completed', () => {
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
