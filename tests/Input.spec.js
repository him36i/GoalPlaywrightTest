const{test, expect}= require('@playwright/test')
import { BasePage } from '../pages/BasePage';

test('handle inputbox', async ({page})=>{

   const base = new BasePage(page);
   await base.openBlogspot();

   // Check if the input box is visible or not
   await expect(await page.locator('//input[@id="name"]')).toBeVisible()
   //check input box is empty or not
   await expect(await page.locator('//input[@id="name"]')).toBeEmpty()
   //check input box is editable or not
   await expect(await page.locator('//input[@id="name"]')).toBeEditable()
   // check input box is enable oor not
   await expect(await page.locator('//input[@id="name"]')).toBeEnabled()
   //check input box is diable or not
//    await expect(await page.locator('//input[@id="name"]')).toBeDisabled()


   await page.locator('//input[@id="name"]').fill('John')
                     // or 
//    await page.fill("//input[@id='name']"", 'john')

   await page.waitForTimeout(5000) // pausing code


})