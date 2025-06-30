// // const {test, expect} = require('@playwright/test')
// import {test,expect} from '@playwright/test'

// test('Locators', async({page})=>{

//     page.goto('https://www.demoblaze.com/index.html')

//     // await page.locator('id=login2').click()
//     //or
//     await page.click('id=login2')

//     // await page.locator('#loginusername').fill('Abcdefgn')
//                          //or 
//     // await page.click('#loginusername').fill('testapps')
//                         //or
//     // await page.type('#loginusername', 'testapps')
//                         //or
//     await page.fill('#loginusername', 'Abcdefgn')                   
                        
    
//     // await page.locator('input[id="loginpassword"]').fill('Testing@12345')
//                                  //or
//     await page.fill('input[id="loginpassword"]','User@123456!')     
    
//     await page.click("//button[normalize-space()='Log in']")

//     const logoutlink = await page.locator("//a[normalize-space()='Log out']")

//     await expect(logoutlink).toBeVisible()

//     await page.close()

// })

import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html')

  await page.click('#login2')

  // Wait for the login modal to appear
  await page.waitForSelector('#loginusername', { state: 'visible' })

  await page.fill('#loginusername', 'Abcdefgn')
  await page.fill('#loginpassword', 'User@123456!')

  await page.click("//button[normalize-space()='Log in']")

  const logoutlink = page.locator("//a[normalize-space()='Log out']")
  await expect(logoutlink).toBeVisible()

  await page.close()
})
