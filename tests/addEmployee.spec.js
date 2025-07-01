import { test, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

test('addEmployee', async ({ page }) => {
 
   const base = new BasePage(page);
   await base.openSource();

  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('Rohit');
  await page.getByRole('textbox', { name: 'Last Name' }).fill('Sharma');
  await page.getByRole('button', { name: 'Save' }).click();
  // await page.getByText('Success', { exact: true }).click();
  await page.waitForTimeout(5000)
  await expect(page).toHaveTitle('OrangeHRM')
});