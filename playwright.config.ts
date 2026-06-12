import { defineConfig } from '@playwright/test';

export default defineConfig({

  testDir: './tests',

  timeout: 60000,

  retries: 1,

  workers: 1,

 use: {

  headless: true,

  screenshot: 'only-on-failure',

  video: 'off',

  trace: 'off'
  },

  reporter: [

    ['list'],

    ['allure-playwright'],

    ['junit', { outputFile: 'results.xml' }]
  ],

  projects: [

    {
      name: 'chromium',

      use: {
        browserName: 'chromium'
      }
    },
/*
    {
      name: 'firefox',

      use: {
        browserName: 'firefox'
      }
    },

    {
      name: 'webkit',

      use: {
        browserName: 'webkit'
      }
    }
  */ 
 ]
});