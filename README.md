# Playwright-example
Repository to demonstrate a few playwright tests

INSTALLATION

Download node install@latest
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

npm install playwright@latest
or
npm install @playwright/test@latest --save-dev

npx playwright tests

===============================================

Extensions:
EsLint
Github Theme
Playwright test for visual studio code
Prettier - Code formatter

=========================================
BROWSERS

ensure all browsers are installed by default if you see 
there's one missing
npx playwright install

playwright.config.ts is the project section
where you find all the browsers used,
if you want to do crosbrowser testing


This is one of the limitations with Playwright. 
You will only be able to test with the browser
 versions bundled with the release you are using. 
The Playwright team works to support the latest 
browser versions for each release.

==============================================
package.json
have scripts that simplify the running process

==========================================
RUN

//to run testcases headed mode
npx playwright test --headed

//headless
npx playwright test

//run projects
//npx plawright test --project chromium

//run all test within a single file
npx playwright est tests/login.spec.ts

//runs only the test specified in line 10
npx playwright test test/example.spec.ts:10 

Tagging test on top so that we know which one do we want to run
npx playwright test --grep first 

TO USE A SCRIPT DEFINED IN CONFIG FILE
npm run test:first
==============================================

ONLY RUN A SPECIFIC TEST

syntaxis
test("get started link", { tag: "@first" }, async ({ page }) => {}

instruction
npx plawright test --grep first

Run all test except the selected one
npx plawright test --grep-invert


===============================================
DEBUG
Go to the tubito and click each test you want to debug with the play simbol and bug
then make sure to click to mark a dot in any point in your
test so that the debugger knows where to stop

click on trace viewer so that you know what happened within the run

f5 shortcut to run test:ui script, 
the open up screen shows a timeline and screenshots
also can see the before and action


Also use playwright inspector
npx playwright test --debug

=========================================================
PSEUDO CODE GENERATED
npx playwright codegen

===================================
LOCATORS

page.getByRole('')
page.getByText()
page.getByLabel()

configure data-test attribute by
adding in playwright.config.ts
under export 
export default defineConfig({
use:{
	testIdAttribute: 'data-test'
}
});

having configured the above then we can use

page.getByTestId()

example: 
await page.getByTestId('nav-sign-in').click()

other way is to use legacy locators
page.locator()
await page.locator('[data-test="nav-sign-in"]').click()

page.locator('css=button').click()

await page.locator('button:has-text("Log in"), button:has-text("Sign in")').click()

await page.locator('xpath=//button').click()

==============================

ASSERTIONS
There are two types of assertions: 
locator assertions - automatic retry to either passes or reaches the time out
value assertions - evaluated one time and either pass or fail
implicit wait

example by locator
await is because we are interating and asserting against the dom,
await expect(locator).toBeVisible()

example value assertion:
expect(value).toContain()
expect(value).toBe()

playwright.dev/docs/test-assertions



