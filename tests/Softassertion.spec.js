const { test, expect } = require('@playwright/test')
import { BasePage } from '../pages/BasePage';


test("Soft Assertion", async ({page})=>{

     const base = new BasePage(page);
     await base.openDemoblaze();
   
    // //Hard Assertion
    // await expect(page).toHaveTitle('STORE')
    // await expect(page).toHaveURL('https://www.demoblaze.com/index.html')
    // await expect(page.locator('.navbar-brand')).toBeVisible()

    //Soft Assertion
       //Hard Assertion
    await expect.soft(page).toHaveTitle('STORE')// This assertion will fail but the test will continue 
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html')
    await expect.soft(page.locator('.navbar-brand')).toBeVisible()

})