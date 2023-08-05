const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Perform interactions on the page here
  // For example:
  await page.goto('http://localhost:3000');
  

  // Generate code based on the interactions
  const generatedCode = await page.waitForSelector('h1').then(() => {
    return page.locator('h1').first().evaluate((element) => element.outerHTML);
  });

  console.log(generatedCode);

  await browser.close();
})();
