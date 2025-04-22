<!-- filepath: c:\Users\Gebruiker\Playwright-example\README.md -->
# Playwright-example
<p>Repository to demonstrate a few simple sample playwright tests</p>

<h2>INSTALLATION</h2>
<p>Execute the following commands in the terminal to prepare the initial setup:</p>
<pre>
<code>
node install@latest
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

npm install playwright@latest
or
npm install @playwright/test@latest --save-dev

npx playwright tests
</code>
</pre>

<hr>

<h3>Visual Studio Code Extensions:</h3>
<ul>
  <li>EsLint</li>
  <li>Github Theme</li>
  <li>Playwright Test for Visual Studio Code</li>
  <li>Prettier - Code Formatter</li>
</ul>

<hr>

<h2>BROWSERS</h2>
<p>Ensure all browsers are installed by default. If you see there's one missing, execute the following command:</p>
<pre>
<code>npx playwright install</code>
</pre>
<p><code>playwright.config.ts</code> is the project section where you find all the browsers used. Configure browsers according to requirements for cross-browser testing.</p>
<p>This is one of the limitations with Playwright. You will only be able to test with the browser versions bundled with the Playwright release you are using. The Playwright team works to support the latest browser versions for each release.</p>

<hr>

<h2>SCRIPTS</h2>
<p><code>package.json</code> contains scripts that simplify the running process. Use it to customize easy test runs and for running tests in different environments:</p>
<pre>
<code>
"scripts": {
    "test:local": "BASE_URL=http://localhost:4200, npx playwright test && npx playwright show-report"
}
</code>
</pre>

<hr>

<h2>RUN</h2>
<p>Following commands can be useful to run test cases via the terminal:</p>
<ul>
  <li><b>To run test cases in headed mode (opening browser window):</b></li>
  <pre><code>npx playwright test --headed</code></pre>
  
  <li><b>Headless run:</b></li>
  <pre><code>npx playwright test</code></pre>
  
  <li><b>Run projects:</b></li>
  <pre><code>npx playwright test --project chromium</code></pre>
  
  <li><b>Run all tests within a single file:</b></li>
  <pre><code>npx playwright test tests/login.spec.ts</code></pre>
  
  <li><b>Run only the test specified in line 10:</b></li>
  <pre><code>npx playwright test test/example.spec.ts:10</code></pre>
  
  <li><b>Tagging test on top to specify which one to run:</b></li>
  <pre><code>
test("get started link", { tag: "@first" }, async ({ page }) => {}
npx playwright test --grep first
</code></pre>
  
  <li><b>Run all tests except the selected one:</b></li>
  <pre><code>npx playwright test --grep-invert</code></pre>
  
  <li><b>Running using a script defined in the config file:</b></li>
  <pre><code>npm run test:local</code></pre>
</ul>

<hr>

<h2>DEBUG</h2>
<p>Go to the testing icon in your Visual Studio Code and hover over the test you want to debug. Visualize the play symbol within the bug. Mark a breaking point in your code so that the debugger knows where to stop.</p>
<p>In the report, click on the trace viewer to see what happened during the run.</p>
<p>Key <b>F5</b> shortcut to run <code>test:ui</code> script. The opened screen shows a timeline and screenshots, and also the before and after actions executed.</p>
<p>Use Playwright Inspector when running the test:</p>
<pre><code>npx playwright test --debug</code></pre>

<hr>

<h2>PSEUDO CODE GENERATED</h2>
<pre><code>npx playwright codegen</code></pre>
<p>*Adjust if required for more resiliency.</p>

<hr>

<h2>LOCATORS</h2>
<p>Examples of locators:</p>
<ul>
  <li><code>page.getByRole('')</code></li>
  <li><code>page.getByText()</code></li>
  <li><code>page.getByLabel()</code></li>
</ul>
<p>Configure <code>data-test</code> attribute by adding it in <code>playwright.config.ts</code>:</p>
<pre>
<code>
export default defineConfig({
  use: {
    testIdAttribute: 'data-test'
  }
});
</code>
</pre>
<p>Having configured the above, you can use:</p>
<pre><code>page.getByTestId()</code></pre>
<p>Example:</p>
<pre>
<code>
await page.getByTestId('nav-sign-in').click()
</code>
</pre>
<p>Other ways to use legacy locators:</p>
<pre>
<code>
page.locator()
await page.locator('[data-test="nav-sign-in"]').click()
page.locator('css=button').click()
await page.locator('button:has-text("Log in"), button:has-text("Sign in")').click()
await page.locator('xpath=//button').click()
</code>
</pre>

<hr>

<h2>ASSERTIONS</h2>
<p>There are two types of assertions:</p>
<ul>
  <li><b>Locator assertions:</b> Automatic retry until it either passes or reaches the timeout.</li>
  <li><b>Value assertions:</b> Evaluated one time and either pass or fail (implicit wait).</li>
</ul>
<p>Example by locator:</p>
<pre>
<code>
await expect(locator).toBeVisible()
</code>
</pre>
<p>Example value assertion:</p>
<pre>
<code>
expect(value).toContain()
expect(value).toBe()
</code>
</pre>

<hr>

<h2>REFERENCES</h2>
<ul>
  <li><a href="https://playwright.dev/docs">playwright.dev/docs</a></li>
  <li><a href="https://github.com/testsmith-io/practice-software-testing">GitHub Practice Software Testing</a></li>
</ul>