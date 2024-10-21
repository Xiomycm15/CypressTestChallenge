const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  numTestsKeptInMemory: 0,

  e2e: {
    chromeWebSecurity: false,
    pageLoadTimeout:900000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/Features/*.feature",
  },
});
