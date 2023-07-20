const cypress = require("cypress");
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:'./cypress/integration/*.js',
    chromeWebSecurity: false
  },

  "env": {
     "baseUrl": "https://www.saucedemo.com/",
     "browser": "chrome",
     "username":"standard_user",
     "password":"secret_sauce"
  }
});
