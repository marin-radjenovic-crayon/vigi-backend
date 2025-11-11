const puppeteer = require('puppeteer');



const runPage = async (url, file) => {
  const browserURL = 'http://localhost:9222';
  const browser = await puppeteer.connect({browserURL});

  const viewport = {
    'width': 1920,
    'height': 1080,
    'deviceScaleFactor': 1,
    'isMobile': false,
    'hasTouch': false,
    'isLandscape': false
  }

  const context = await browser.createBrowserContext();
  let page = await context.newPage();
  await page.setViewport(viewport);
  await page.goto(url);
  await page.screenshot({ path: file });

  await context.close();

  // const maxPageLifeTime = 1000*60 // close pages older than 60 seconds
  // for (const page of await browser.pages()) {
  //   if (!await page.isClosed()) {
  //     const pageTimestamp = await page.evaluate(`window.performance.now()`)
  //     if (pageTimestamp > maxPageLifeTime) {
  //       await page.close()
  //     }
  //   }
  // }

}

(async () => {

  runPage('https://wp.pl', 'example.png')
  runPage('https://onet.pl', 'example2.png')
  runPage('https://interia.pl', 'example3.png')
  runPage('https://interia.pl', 'example4.png')

  setTimeout(()=> {
    process.exit(0);
  }, 3000)

})();

