
class personalInfoOther{


    elements = {

        applicantSSNInput: () =>  cy.get('#profileSsn'),     
        coApplicantSSNInput: () =>  cy.get('#profileCoApplicantSsn'),

    }
      
    typeApplicantSSN(applicantSSN){
        this.elements.applicantSSNInput().type(applicantSSN);

    }
      
    typecoApplicantSSN(coApplicantSSN){
        this.elements.coApplicantSSNInput().click({force: true}).type(coApplicantSSN)
    }
    
 
}

module.exports = new personalInfoOther();


