/**
 * Get all items function called by route
 */
const { setTimeout } = require('node:timers/promises');

const puppeteer = require('puppeteer');
const async = require('async');
const path = require('path');
const fs = require('fs-extra');
const { handleError } = require('../../middleware/utils');
const sharp = require('sharp');
const dns = require('dns').promises;
const _ = require('lodash');
const { get } = require('axios');
const { CLIENTS } = require('@/src/constants/config');

const Screenshot = function () {
  // console.log('this.conf', global.MAINCONFIG)
};

// the start method
Screenshot.prototype.takeScreenshot = async function (req, res, next) {
  const { actions, chrome } = req.body;

  let err = null;

  const screenshots = await this.sendToPupeteer(actions, chrome).catch(error => {
    err = error;
  });

  if (err) {
    return next(err);
  } else {
    res.status(200).json({ screenshots });
  }
};

Screenshot.prototype.takeScreenshotPure = async function (actions, chrome) {
  let err = null;

  const screenshots = await this.sendToPupeteer(actions, chrome).catch(error => {
    err = error;
  });

  return { screenshots };
};

Screenshot.prototype.sendToPupeteer = async function (actions, chrome) {
  const isLocalDev = process.env.NODE_ENV === 'development';
  let browser;

  try {
    if (isLocalDev) {
      console.log('Using local Puppeteer browser (dev mode)');
      browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
      });
    } else {
      const browserURL = MAINCONFIG.screenshot.remoteBrowserUrl;
      const browserPORT = MAINCONFIG.screenshot.remoteBrowserPort;

      const response = await get(`http://${browserURL}:${browserPORT}/json/version`, {
        headers: {
          Host: 'localhost'
        }
      });

      const webSocketDebuggerUrl = response.data.webSocketDebuggerUrl;
      const url = new URL(webSocketDebuggerUrl);
      url.hostname = browserURL;
      url.port = browserPORT.toString();
      const parsedWsUrl = url.toString();

      console.log('CHROME:webSocketDebuggerUrl', parsedWsUrl);

      browser = await puppeteer.connect({
        ignoreHTTPSErrors: true,
        browserWSEndpoint: parsedWsUrl
      });
    }
    const results = await async.mapLimit(actions, 3, async action => {
      const { url, templateId, dir, format, ratio, currentFormat } = action;
      const [width, height] = format.split('x').map(Number);
      const viewport = {
        width,
        height,
        deviceScaleFactor: dir === 'fcb_lineup' ? 2 : 1,
        // deviceScaleFactor: 2 ,
        isMobile: false,
        hasTouch: false,
        isLandscape: false
      };
      const finalDir = path.resolve(MAINCONFIG.publicPath, MAINCONFIG.screenshot.path, dir, templateId);
      await fs.ensureDir(finalDir);
      const client = MAINCONFIG.client || 'womansworldcup';
      const fileName = `${MAINCONFIG.screenshot.download.name}_${format}.${MAINCONFIG.screenshot.download.format}`;
      const screenshotPath = path.join(finalDir, fileName);
      const previewPath = path.join(finalDir, `${MAINCONFIG.screenshot.preview.name}.${MAINCONFIG.screenshot.preview.format}`);
      const context = await browser.createBrowserContext();
      const page = await context.newPage();
      await page.setDefaultNavigationTimeout(30000);
      await page.setViewport(viewport);

      try {
        await page.goto(url, { waitUntil: 'networkidle0' });
        await setTimeout(1000);

        if (_.get(chrome, 'waitForSelector')) {
          await page.waitForSelector(chrome.waitForSelector, { timeout: 5000 });
        }

        if (client === CLIENTS.BILD) {
          await setTimeout(3000); // ✅ Waits 3 seconds for the animation to end
        }

        if (dir === 'fcb_goal') {
          await setTimeout(5000); // ✅ Waits 3 seconds for the animation to end
        }

        if (dir === 'fcb_results') {
          await setTimeout(2000); // ✅ Waits 3 seconds for the animation to end
        }

        await page.screenshot({ path: screenshotPath });
        

        const templateConfig = _.find(MAINCONFIG.templates, { name: dir });
        const createScreenShot = async () => {
          sharp.cache(false);
          await sharp(screenshotPath)
            .jpeg({ quality: 100 })
            .resize(width)
            .toFile(previewPath);
        }
        await createScreenShot();
      } catch (err) {
        LOGGER.error(err, 'Screenshot capture error');
      } finally {
        await page.close();
        await context.close();
      }

      return {
        url: `${APP_FULLURL}/${path.join(
          MAINCONFIG.screenshot.path,
          dir,
          templateId,
          fileName
        )}`,
        preview: `${APP_FULLURL}/${path.join(
          MAINCONFIG.screenshot.path,
          dir,
          templateId,
          `${MAINCONFIG.screenshot.preview.name}.${MAINCONFIG.screenshot.preview.format}`
        )}`
      };
    });

    if (isLocalDev) {
      await browser.close();
    } else {
      await browser.disconnect();
    }

    return results;

  } catch (err) {
    LOGGER.error(err, 'sendToPupeteer failed');
    if (isLocalDev && browser) await browser.close().catch(() => { });
    throw err;
  }
};
module.exports = Screenshot;
