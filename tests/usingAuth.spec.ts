import { test, expect } from '@playwright/test';
test.describe("Auth login", () => {
    test .use({ storageState: ".auth/customer01Auth.json" });
    test.beforeEach(async ({ page }) => {
        await page.goto("https://practicesoftwaretesting.com/");
        await page.getByRole("link", { name: "Practice Software Testing -" }).click();
    });

    test("Check customer is logged in", async ({ page }) => {
        await expect(page.locator('[data-test="nav-sign-in"]')).not.toBeVisible();
    });
});