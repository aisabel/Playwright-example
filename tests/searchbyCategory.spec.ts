import { test, expect } from '@playwright/test';

test.describe('Login Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://practicesoftwaretesting.com/');
    await page.getByRole('link', { name: 'Practice Software Testing -' }).click();
  });

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Search by category',{ tag: "@category" }, async ({ page }) => {
    await page.locator('[data-test="nav-categories"]').click();
    await page.locator('[data-test="nav-power-tools"]').click();
    await page.locator('[data-test="product-name"]').getByText("Cordless Drill 12V").click();
    await expect(page.locator('[data-test="product-name"]')).toContainText('Cordless Drill 12V');
  });
})
