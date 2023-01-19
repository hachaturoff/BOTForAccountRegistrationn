const { chromium , firefox} = require('playwright');
const os = require('node:os');

(async () => {
    // const browser = await chromium.launch({headless: false});

    user_data_path = os.homedir('C:\\Users\\apod\\AppData\\Local\\Google\\Chrome\\User Data\\Default')
    const context = await chromium.launchPersistentContext(user_data_path,{headless: false})
    // const browser = await firefox.launch({headless: false})
    // const context = await browser.newContext();

    const page = await context.newPage();
    await page.goto('http://onliner.by');
    await page.screenshot({ path: `example1.png` });
    // other actions...
    // await browser.close();

})();