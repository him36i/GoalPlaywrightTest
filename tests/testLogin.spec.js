// tests/testLogin.spec.js

const { test, expect } = require('@playwright/test');
import { BasePage } from '../pages/BasePage';
const testData1 = require('../test-data/testData.json'); // your JSON file

test('Login Test using JSON data', async ({ page }) => {
   const base = new BasePage(page);
   await base.openDemoblaze();

  await page.click('#login2');
  await page.fill('#loginusername', testData1.username);
  await page.fill('#loginpassword', testData1.password);
  await page.click('button[onclick="logIn()"]');

  console.log("Selected product: " + testData1.product);
});
