const {test, expect } = require('@playwright/test');

test('Home Page', async ({page})=>{

    await page.goto('https://www.demoblaze.com/index.html');

    const PageTitle = await page.title();
    console.log("Page title is:" + PageTitle)

    await expect(page).toHaveTitle("STORE");

   const PageUrl= page.url();
   console.log('Page URL is:' + PageUrl);

   await expect(page).toHaveURL("https://www.demoblaze.com/index.html");

   await page.close();

});