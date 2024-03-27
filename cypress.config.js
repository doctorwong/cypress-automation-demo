const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl": "https://soraia.herokuapp.com",
    "specPattern": "**/*.feature.js"
  },

  //cypress.json became cypress.config.js

});
