import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

test('test', async ({ page }) => {

  const base = new BasePage(page);
  await base.openSource();
  
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('Abcdefgn');
  await page.locator('#loginpassword').fill('User@123456!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Laptops' }).click();
  await page.locator('.card > a').first().click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('link', { name: 'Add to cart' }).click();
  await page.getByRole('link', { name: 'Cart', exact: true }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('textbox', { name: 'Total: 790 Name:' }).fill('Testuser');
  await page.getByRole('textbox', { name: 'Country:' }).fill('India');
  await page.getByRole('textbox', { name: 'City:' }).fill('Noida');
  await page.getByRole('textbox', { name: 'Credit card:' }).fill('12345678990');
  await page.getByRole('textbox', { name: 'Month:' }).fill('7');
  await page.getByRole('textbox', { name: 'Year:' }).fill('2025');
  await page.getByRole('button', { name: 'Purchase' }).click();

  const suucessmessage = await page.locator('text=Thank you for your purchase!')
  await expect(suucessmessage).toBeVisible()

});