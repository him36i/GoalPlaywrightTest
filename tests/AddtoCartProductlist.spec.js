import { test, expect } from '@playwright/test'

test('Locators', async ({ page }) => {

  await page.goto('https://www.demoblaze.com/index.html')

  await page.click('#login2')

  // Wait for the login modal to appear
  await page.waitForSelector('#loginusername', { state: 'visible' })

  await page.fill('#loginusername', 'Abcdefgn')
  await page.fill('#loginpassword', 'User@123456!')

  await page.click("//button[normalize-space()='Log in']")

  await page.click("//a[contains(text(),'Samsung galaxy s6')]")

  await page.click("//a[@class='btn btn-success btn-lg']") //Add to cart button
  await page.reload();


  await page.click("a[id='cartur']")

  await page.waitForSelector("// tbody[@id='tbodyid']//tr");
 const cartproducts  = await page.$$("// tbody[@id='tbodyid']//tr") // page.$$ method is used to select multiple elements 

 for(const addtocartproduct of cartproducts){

   const productsName =  await addtocartproduct.textContent();
   console.log(productsName);

}


  
})