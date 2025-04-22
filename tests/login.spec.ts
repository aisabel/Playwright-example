import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.getByRole('link', { name: 'Practice Software Testing -' }).click();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  /*Below testcase is to check if the customer is logged in
  using direct hard coded credentials directly in the test case.
  This is not a good practice, as it exposes the credentials in the test case.  
  However, it is useful for quick testing, debugging, and learning purposes.
  It is recommended to use the setup file to handle authentication and cookies.
  */

test('Sign in test',{ tag: "@first" }, async ({ page }) => {
  await page.locator('[data-test="nav-sign-in"]').click();
  await page.locator('[data-test="email"]').click();
  await page.locator('[data-test="email"]').fill('customer@practicesoftwaretesting.com');
  await page.locator('[data-test="email"]').press('Tab');
  await page.locator('[data-test="password"]').fill('welcome01');
  await page.locator('[data-test="login-form"] button').click();
  await page.locator('[data-test="login-submit"]').click();
  await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
  await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
  await page.locator('[data-test="nav-menu"]').click();
  await page.locator('[data-test="nav-sign-out"]').click();
});
})