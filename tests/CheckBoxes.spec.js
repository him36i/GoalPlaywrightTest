const{test, expect}= require('@playwright/test')

test('handle check boxes', async ({page})=>{
 
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("//input[@id='monday' and @type='checkbox']").check()
                                    //or
    // await page.check("//input[@id='monday' and @type='checkbox']") 
    
    expect(await page.locator("//input[@id='monday' and @type='checkbox']")).toBeChecked()
    expect(await page.locator("//input[@id='monday' and @type='checkbox']").isChecked()).toBeTruthy()
    
    // For Negative checkbox for sunday is not checked
    expect(await page.locator("//input[@id='sunday' and @type='checkbox']").isChecked()).toBeFalsy()

    // for select multiple checkboxes, whe have use Array of locators and used loop statement
    const checkboxLocators = [
                             "//input[@id='monday' and @type='checkbox']",
                             "//input[@id='sunday' and @type='checkbox']",
                             "//input[@id='saturday' and @type='checkbox']"
                             
    ]

    for(const locator of checkboxLocators)
    {
         await page.locator(locator).check()
    }

    await page.waitForTimeout(5000) // use wait

    // for unselect checkboxes which are already selected, so we can use uncheck method, the same loop statemnt we used here for uncheck

      for(const locator of checkboxLocators)
    {
        if(await page.locator(locator).isChecked())
        {
         await page.locator(locator).uncheck()
        }
    }

       await page.waitForTimeout(5000) // use wait


})