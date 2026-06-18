// @ts-check
import { defineConfig, devices } from '@playwright/test';


/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
 timeout: 30*1000,
 expect:{
  timeout: 20*1000
 },

 reporter:'html',
 use:{
  browserName: 'chromium',
  screenshot:'off',
  ignoreHTTPSErrors:true,
  trace:'off',
  headless:false
 }
});

