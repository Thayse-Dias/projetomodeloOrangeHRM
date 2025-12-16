const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      allureWriter(on, config);           
      return config;
    },
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    env: {
      allure: true,
      allureAddVideoOnPass: true  // ← opcional: anexa vídeo mesmo em testes que passam
    },
    viewportWidth: 1366,
    viewportHeight: 768,
    video: true  
  }
});