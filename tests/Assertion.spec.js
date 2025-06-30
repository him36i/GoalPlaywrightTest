const { test, expect } = require('@playwright/test')

test('Assertiontest', async ({ page }) => {

    //open app URL
    await page.goto('https://demo.nopcommerce.com/register')

    //Assertion for pageURL
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    
    //Assertion for pageTitle
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    //Assertion for element is visible
    const Logoelement = await page.locator('.header-logo')
    await expect(Logoelement).toBeVisible()

    //Assertion element is enable or not 
    const Serchstorebox= await page.locator('#small-searchterms')
    await expect(Serchstorebox).toBeEnabled()

    //Assertion for Radio checkbox is checked or not
    const MaleRadiobutton = await page.locator('#gender-male')
    await MaleRadiobutton.click() // select Radio button
    await expect(MaleRadiobutton).toBeChecked()

    //Assertion for checkbox only 
    const newlettercheckbox = await page.locator('#Newsletter')
     await expect(newlettercheckbox).toBeChecked()

     //Assertion for element has attribute
    const regButton = await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')

    //Assertion for element has text(here we passed direct asseriotion)
    await expect (await page.locator('.page-title h1')).toHaveText('Register') // Ful text value

    //Assertion for contains text
    await expect (await page.locator('.page-title h1')).toContainText('Reg') //partial text value

    //Assertion for Input has value
    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com')
    await expect(emailInput).toHaveValue('test@demo.com')

    //Assertion for list of element has given length or count(pending )
   



}) 