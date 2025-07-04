const{test, expect}= require('@playwright/test')
import { BasePage } from '../pages/BasePage';

test('handle radio button', async ({page})=>{

   const base = new BasePage(page);
   await base.openBlogspot();

  // Check Radio button
  await page.locator("//input[@value='male']").check()
       //or another aproach
//   await page.check("//input[@value='male']")  
  await expect(await page.locator("//input[@value='male']")).toBeChecked()
  await expect(await page.locator("//input[@value='male']").isChecked()).toBeTruthy() // Male radio button

  //For negative female radio button
  await expect(await page.locator("//input[@value='female']").isChecked()).toBeFalsy() // Female radio button

   await page.waitForTimeout(5000) // pausing code


})