// @ts-check
const {chromium , test} = require('@playwright/test');
import fs from 'fs';



test('New test ', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('https://dash.sovereignty.gg/')
  await page.waitForSelector('#__next > div.styles__Wrapper-sc-1txj1ba-0.jcZkZ > div.styles__Container-sc-1txj1ba-1.cqaVbg > button')

  // await page.type('#language' , 'English')

  await page.click('#__next > div.styles__Wrapper-sc-1txj1ba-0.jcZkZ > div.styles__Container-sc-1txj1ba-1.cqaVbg > button')

  await page.click('#modal > div > div > button:nth-child(3)')

  await page.screenshot({ path: `example.png` });
  // console.log(chromium)
  // fs.writeFileSync('toshiesData.txt', JSON.stringify(BD), 'utf-8');

});

