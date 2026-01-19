import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // ili port na kom ti radi dev server
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(_on, _config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.ts',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: false, // opciono - uključi za CI/CD
    screenshotOnRunFailure: true,
  },
});