const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: true,
  retries:1,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
