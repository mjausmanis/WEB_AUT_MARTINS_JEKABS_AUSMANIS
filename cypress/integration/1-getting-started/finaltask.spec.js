/// <reference types="cypress" />

import FormPage from "../../pageObjects/FormPage";

describe('example to-do app', () => {
  beforeEach(() => {
    FormPage.visit()
  })

  it('Check if Student Registration Form is working', () => {
    cy.fixture("FormData").then((data) => {
      // Input and select information
      FormPage.firstName.type(data.firstName);
      FormPage.lastName.type(data.lastName);
      FormPage.email.type(data.email);
      FormPage.maleButton.click({ force: true});
      FormPage.mobileNumber.type(data.mobile);
      FormPage.currentAddress.type(data.currentAddress);
      // Set Date of Birth to 28th of February, 1930
      FormPage.dateOfBirthField.click();
      FormPage.dateOfBirthWidgetYear.select('1930');
      FormPage.dateOfBirthWidgetMonth.select('1');
      FormPage.dateOfBirthWidgetDay.click();
      // Set Subjects to Economics and Hobbies to Music.
      FormPage.subjectsContainer.type('Economics{enter}');
      FormPage.hobbiesMusic.click({force: true});
      // Upload an image
      FormPage.uploadPictureButton.selectFile("cypress/files/gerard.jpg");
      // Set state to NCR and city to Delhi.
      FormPage.stateField.click();
      FormPage.stateNCR.click();
      FormPage.cityField.click();
      FormPage.cityDelhi.click();
      // Submit the Forms
      FormPage.submitButton.click();
      // Validate the inputs
      FormPage.submitedDataTable.should('contain', data.firstName);
      FormPage.submitedDataTable.should('contain', data.lastName);
      FormPage.submitedDataTable.should('contain', data.email);
      FormPage.submitedDataTable.should('contain', 'Male');
      FormPage.submitedDataTable.should('contain', data.mobile);
      FormPage.submitedDataTable.should('contain', '28 January,1930');
      FormPage.submitedDataTable.should('contain', 'Economics');
      FormPage.submitedDataTable.should('contain', 'Music');
      FormPage.submitedDataTable.should('contain', 'gerard.jpg');
      FormPage.submitedDataTable.should('contain', data.currentAddress);
      FormPage.submitedDataTable.should('contain', 'NCR');
      FormPage.submitedDataTable.should('contain', 'Delhi');
      
    });

  })
})
