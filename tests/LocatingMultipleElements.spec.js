const {test, expect } = require('@playwright/test');

test('Locating Multiple Elements', async({ page })=>{

await page.goto('https://www.demoblaze.com/index.html')

// const links = await page.$$('a');

// for(const link of links){

//     const linktext = await link.textContent()
//     console.log(linktext);
// }


await page.waitForSelector("//div[@id='tbodyid']//h4/a");  // This command is only for loadded

const products  = await page.$$("//div[@id='tbodyid']//h4/a") // page.$$ method is used to select multiple elements 

// this will return name of all products in the console with help of loop statment 
for(const product of products){

   const productsName =  await product.textContent();
   console.log(productsName);

}

// await page.goto('https://crowdbotics-slack-dev.crowdbotics.com/dashboard/accounts/login')

// await page.click("//span[contains(text(),' Use password')]")
// await page.fill('//input[@name="username"]', 'Mithilesh@crowdbotics.com')
//   await page.fill('//input[@name="password"]', 'tester1000')

//   await page.click("//span[contains(text(),' Login ')]")

// await page.waitForSelector("//table[@class='apps-table my-2']//tr//a");
// const products  = await page.$$("//table[@class='apps-table my-2']//tr//a")

// for(const product of products){

//    const productsName =  await product.textContent();
//    console.log(productsName);

// }

});