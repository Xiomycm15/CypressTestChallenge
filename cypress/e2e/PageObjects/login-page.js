class loginPage{


    elements = {

        closeButton: () =>  cy.get('.downloadapp-close'), 
        emailInput: () =>  cy.get('input[type="email"]'),
        passwordInput: () =>  cy.get('input[type="password"]'),
        signinButton: () => cy.get('[type="submit"]')
    }

    clickOnCloseButton(){
        this.elements.closeButton().click();
    }

    typeUserEmail(email){
        this.elements.emailInput().type(email);
    } 
    typeUserPassword(password){
        this.elements.passwordInput().type(password);
    } 
    clickOnSiginButton(){
        this.elements.signinButton().click();
    } 
    
}

module.exports = new loginPage();
