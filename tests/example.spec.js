// @ts-check
const {test} = require('@playwright/test');
import fs from 'fs';

test('New test ', async ({ page }) => {

  let mail = ['oe2g@gmail.com','oe78g@gmail.com']

  let mailRef = ['oe23g@gmail.com', 'oe34g@gmail.com', 'oe33g@gmail.com','oe2343g@gmail.com', 'oe4534g@gmail.com', 'oe3336g@gmail.com']

  let BD = []
  let inc = -1

  // for (let i = 0; i < mail.length ; i++) {
  //
  //   await page.goto('https://https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/')
  //
  //   await page.goto('https://dolf.finance/')
  //
  //   await page.type('#root > div.header-area.header-bg > div > div > div:nth-child(1) > div > form > div > input', mail[i])
  //
  //   await page.click('#root > div.header-area.header-bg > div > div > div:nth-child(1) > div > form > div > div > button')
  //
  //   await page.waitForSelector('#waitlist-number > form > span')
  //
  //   const data = await page.evaluate(() => {
  //
  //     return {
  //
  //       ref: document.querySelector('.number-form-control').textContent,
  //       refLink: document.querySelector('.number-copy-control').value,
  //
  //     }
  //   })
  //   data.email = mail[i]
  //
  //   await page.screenshot({ path: `example${i}.png` });
  //
  //   BD.push(data)
  //
  //     for (let ri = 0; ri <= 2; ri++) {
  //       inc++
  //
  //       await page.goto(`https://${BD[i].refLink}/`)
  //
  //       await page.goto(`https://${BD[i].refLink}/`)
  //
  //       await page.type('#root > div.header-area.header-bg > div > div > div:nth-child(1) > div > form > div > input', mailRef[inc])
  //
  //       await page.click('#root > div.header-area.header-bg > div > div > div:nth-child(1) > div > form > div > div > button')
  //
  //       await page.waitForSelector('#waitlist-number > form > span')
  //
  //       const data = await page.evaluate(() => {
  //
  //         return {
  //
  //           ref: document.querySelector('.number-form-control').textContent,
  //           refLink: document.querySelector('.number-copy-control').value,
  //
  //         }
  //       })
  //       data.email = mailRef[inc]
  //
  //       await page.screenshot({ path: `example${ri}.png` });
  //       console.log(inc)
  //       BD.push(data)
  //     }
  // }
  // await page.goto('https://addons.mozilla.org/' , 'load')
  await page.goto('https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn/')
  // await page.click('div.TabContentItem__Item-cagrht-0:nth-child(1) > div:nth-child(3) > div:nth-child(1) > a:nth-child(1) > span:nth-child(1)')
  await page.waitForSelector('#waitlist-number > form > span')
  // await page.screenshot({ path: `example3.png` });
  // console.log(page)

  // fs.writeFileSync('fileWithArray.txt', JSON.stringify(BD), 'utf-8');

});