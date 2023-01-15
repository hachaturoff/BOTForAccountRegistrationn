
const puppeteer = require('puppeteer');

const url = 'https://dolf.finance/';

async function fetchProductList(url) {
    const browser = await puppeteer.launch({

        headless: true, // false: enables one to view the Chrome instance in action
        defaultViewport: null, // (optional) useful only in non-headless mode
    });
    const page = await browser.newPage();

    await page.goto(url,
        // { waitUntil: 'networkidle2' }
    );
    await page.type('#root > div.header-area.header-bg > div > div > div:nth-child(1) > div > form > div > input', 'oe4g@gmail.com')

    await page.click('#root > div.header-area.header-bg > div > div > div:nth-child(1) > div > form > div > div > button')

    await page.waitForSelector('#waitlist-number > form > span')

    const data = await page.evaluate(() => {
        return {
            ref: document.querySelector('.number-form-control').textContent,
            refLink: document.querySelector('.number-copy-control').value,
        }
    })

    await page.screenshot({path:'scr.png'} )
    await browser.close()
    console.log(data)
    return data
}

fetchProductList(url);
