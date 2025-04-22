import {test as setup, expect} from '@playwright/test';

/* This setup is to handle cookies and authentication for the tests.
   This is a setup file that will run before the tests. */

setup('Create customer 01 auth', async ({page}) => {
    const email = "customer@practicesoftwaretesting.com";
    const password = "welcome01";
    const customer01AuthFile = ".auth/customer01Auth.json";

    await page.goto("https://practicesoftwaretesting.com/auth/login/");
    await page.locator('[data-test="nav-sign-in"]').click();
    
    await page.locator('[data-test="email"]').click();
    await page.locator('[data-test="email"]').fill(email);
    await page.locator('[data-test="email"]').press('Tab');
    await page.locator('[data-test="password"]').fill(password);
    await page.locator('[data-test="login-form"] button').click();
    await page.locator('[data-test="login-submit"]').click();

    await expect(page.locator('[data-test="page-title"]')).toContainText('My account');
    await expect(page.locator('[data-test="nav-menu"]')).toContainText('Jane Doe');
    
    /*Save the authentication state and cookie information to a file
    ensure the file is created in the .auth folder
    and never commit the file to the repository, as it contains sensitive information
    .gitignore the folder .auth
    */
    await page.context().storageState({ path: customer01AuthFile });
});