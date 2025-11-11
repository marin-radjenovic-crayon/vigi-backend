const { expect } = require('chai');
const config = require('../../src/config');
const _ = require('lodash');

describe.skip('*********** SCREENSHOT DIRECT TESTING ***********', () => {

  const Screenshot = require('../../src/controllers/utils/screenshot');

  it('should take a screenshot using initial data, for one format with preview', async () => {
    const ScreenshotClass = new Screenshot();
    const actions = [{
      'templateId': '0',
      'url': 'http://localhost:3001/frontend/screenshot/adlerresults/0?format=1920x1080',
      'dir': 'adlerresults',
      'format': '1920x1080',
      'preview': true
    }];

    const response = await ScreenshotClass.takeScreenshotPure(actions);

    console.log('response', response);
  });

});
