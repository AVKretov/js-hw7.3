const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qxsck6',
  e2e: {
    failOnStatusCode: false,
    baseUrl: "https://petstore.swagger.io/#/",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
