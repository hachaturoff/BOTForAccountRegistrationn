const { chromium , firefox} = require('playwright');
const os = require('node:os');

// (async () => {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     page.on('dialog', async dialog => {
//
//         await dialog.dismiss();
//     });
//     await page.evaluate(() => alert('1'));
//     await browser.close();
//     console.log(page.on('dialog', async dialog => {
//
//         // await dialog.dismiss();
//     }));
// })();


(async () => {
    const browser = await firefox.launch({headless: false})
    const context = await browser.newContext();
    const page = await context.newPage();

    // await page.goto('https://dash.sovereignty.gg/dashboard');
    // await page.goto('https://letcode.in/alert');
    await page.goto('https://www.google.com/search?q=metamask+%D0%B4%D0%BB%D1%8F+firefox' , {timeout: 35 * 1000,})
    await page.click('#rso > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1) > h3:nth-child(2)')
    await page.waitForSelector('.AMInstallButton-button')
    await page.click('.AMInstallButton-button' )
    // await page.click('none', {position: {x: 110, y: 110}})
    // await page.waitForLoadState('')
    await page.waitForLoadState('load', )

    // await page.on('dialog', dialog => {
    //     console.log(dialog.message())
    //     console.log(dialog.defaultValue())
    //     console.log(dialog.type())
    //     dialog.accept('hello Oleg')
    //
    //     // await browser.close()
    //     // await dialog.dismiss()
    // });
    const downloadPromise = page.waitForEvent('download');
    await downloadPromise;
    await browser.close();
})();