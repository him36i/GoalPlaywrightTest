const {test, expect } = require('@playwright/test');

test('Locaor Builin',async({page})=>{

    // Built in locators 
 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

 const logo = await page.getByAltText('company-branding')
 await expect(logo).toBeVisible()

 //Using place holder Attribute 
 await page.getByPlaceholder('Username').fill('Admin')
 await page.getByPlaceholder('Password').fill('admin123')

// get by role method is used to slect element by performed role
 await page.getByRole('button',{type: 'submit'}).click()

 const name = await page.locator("//p[@class='oxd-userdropdown-name']").textContent()

 //Using text content method with direct assertion used to verify the text content of an element
 await expect(await page.getByText(name)).toBeVisible()

})


