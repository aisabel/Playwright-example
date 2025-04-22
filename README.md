# Playwright-example
Repository to demonstrate a few simple sample playwright tests

<h2>INSTALLATION</h2>

Execute following commands in terminal to prepare initial setup:

node install@latest
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

npm install playwright@latest
or
npm install @playwright/test@latest --save-dev

npx playwright tests

=========================================================

<h3>Visual studio code extensions:</h3>
EsLint
Github Theme
Playwright test for visual studio code
Prettier - Code formatter

=========================================================
<h2>BROWSERS</h2>	

Ensure all browsers are installed by default if you see there's one missing, execute the following command:
npx playwright install

playwright.config.ts is the project section where you find all the browsers used.
Configure browsers according to requirements, for cross-browser testing.

This is one of the limitations with Playwright. 
You will only be able to test with the browser versions bundled with the Playwright release you are using. 
The Playwright team works to support the latest browser versions for each release.

=========================================================
<H2>SCRIPTS</H2>
package.json contains scripts that simplify the running process.
Use it to customize easy test runs, and for running test in different environments
"scripts": {
    "test:local": "BASE_URL=http://localhost:4200, npx playwright test && npx playwright show-report"
  },

=========================================================
<H2>RUN</H2>

Following commands can be useful to run testcases by terminal

//to run testcases headed mode, meaning opening browser window
npx playwright test --headed

//headless run
npx playwright test

//run projects
//npx plawright test --project chromium

//run all test within a single file
npx playwright test tests/login.spec.ts

//runs only the test specified in line 10
npx playwright test test/example.spec.ts:10 

Pre-requisite: Add a tag within your test syntaxis
test("get started link", { tag: "@first" }, async ({ page }) => {}

//Tagging test on top so that we know which one do we want to run
npx playwright test --grep first 

//Run all test except the selected one
npx plawright test --grep-invert

//Running using a script defined in config file 
npm run test:local

=========================================================

<H2>DEBUG</H2>
Go to the testing icon in your visual studio code and hover over the test you want to debug. 
Visualize the play simbol within the bug
Mark a breaking point in your code, so that debugger knows where to stop

In the report, click on trace viewer so that you know what happened within the run

Key f5 shortcut to run test:ui script, 
the open up screen shows a timeline and screenshots
also can show the before and actions executed

Use playwright inspector when running the test
npx playwright test --debug

=========================================================
PSEUDO CODE GENERATED
npx playwright codegen

*Adjust if required or for more resilency

=========================================================
<H2>LOCATORS</H2>

page.getByRole('')
page.getByText()
page.getByLabel()

Configure data-test attribute by adding in playwright.config.ts
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

//Other ways to use legacy locators
page.locator()
await page.locator('[data-test="nav-sign-in"]').click()
page.locator('css=button').click()
await page.locator('button:has-text("Log in"), button:has-text("Sign in")').click()
await page.locator('xpath=//button').click()

=========================================================

<H2>ASSERTIONS</H2>
There are two types of assertions: 
Locator assertions - automatic retry to either passes or reaches the time out
Value assertions - evaluated one time and either pass or fail implicit wait

Example by locator
await is because we are interating and asserting against the dom,
await expect(locator).toBeVisible()

Example value assertion:
expect(value).toContain()
expect(value).toBe()

=========================================================
<H2>REFERENCES</H2>

playwright.dev/docs
https://github.com/testsmith-io/practice-software-testing



