import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

test('test', async ({ page }) => {
  
 const base = new BasePage(page);
  await base.openDemoblaze();
  
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.locator('#loginusername').fill('Abcdefgn');
  await page.locator('#loginpassword').fill('User@123456!');
  await page.getByRole('button', { name: 'Log in' }).click();
  await page.getByRole('link', { name: 'Monitors' }).click();

  
  const checkprice = await page.locator('text=$230')
  await expect(checkprice).toBeVisible()

  // await page.getByRole('link', { name: 'Log out' }).click();
});