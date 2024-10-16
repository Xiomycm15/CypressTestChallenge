import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import communityEnterCodePage from "../PageObjects/community-enter-code-page";
import communityHomePage from "../PageObjects/community-home-page";
import loginPage from "../PageObjects/login-page"

beforeEach(() => {
  console.log('jelo')


  //cy.intercept('https://player.vimeo.com/video/561330589?autoplay=1')


  /*cy.visit({
    method: 'GET',
    url: 'https://player.vimeo.com/video/561330589',
    headers: {
      'Host':'player.vimeo.com',
      'Content-Type':'text/html; charset=UTF-8'
    },
    cookie:{
      '__cf_bm':'Uc37LbMKPi6UsgYAu6rZtaetAr9mgsXPHr6BJnT2BJ8-1729082464-1.0.1.1-._oChZsNHhpZRyGJO9WdtsVasRNyTYTC19qB1_qAgoFH5wfSUIg01MLrWSY73qlq',
      '_cfuvid':'roz2MFuOvywaeK6LR3Zgoy9iWB6fglfyr35MhrdZfeM-1729045769880-0.0.1.1-604800000',

    }
  })*/

  //cy.intercept('https://player.vimeo.com/video/561330589?autoplay=1')
  //cy.request('https://player.vimeo.com/video/561330589?autoplay=1')

  cy.visit('https://tenantev-qa.tev2.co/')
  
  })





  Given('the user logins with valid credentials', () => {
 
    loginPage.clickOnCloseButton()
    loginPage.typeUserEmail("xio.maracm1234@gmail.com")
    loginPage.typeUserPassword("Paciencia2")
    loginPage.clickOnSiginButton()
    communityHomePage.successLoginTextValidation()
});


And('the user starts a new application with following code {string}', (code) => {
  communityHomePage.clickOnStartNewApplicationSelectButton()
  communityEnterCodePage.enterPropertyCodeTextValidation()
  communityEnterCodePage.typePropertyCode(code)
  communityEnterCodePage.clickOnContinueButton()
  cy.wait(100)
});
