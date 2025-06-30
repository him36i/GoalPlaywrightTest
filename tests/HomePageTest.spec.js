// const {test, expect } = require('@playwright/test');

// test('Home Page', async ({page})=>{

//     await page.goto('https://www.demoblaze.com/index.html');

//     const PageTitle = await page.title();
//     console.log("Page title is:" + PageTitle)

//     await expect(page).toHaveTitle("STORE");

//    const PageUrl= page.url();
//    console.log('Page URL is:' + PageUrl);

//    await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

//    await page.close();

// });

// tests/homePage.spec.js
import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

test('Home Page', async ({ page }) => {
  const base = new BasePage(page);
  await base.openDemoblaze();

  const title = await page.title();
  console.log('Page title is: ' + title);
  await expect(page).toHaveTitle('STORE');

  const currentURL = page.url();
  console.log('Page URL is: ' + currentURL);
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html');
});
