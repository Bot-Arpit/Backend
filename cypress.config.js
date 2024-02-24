const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    baseUrl : "https://reqres.in/",
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts: true,
      reportPageTitle: 'Backend',
      embeddedScreenshots: true,
      inlineAssets: false,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
