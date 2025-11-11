const { expect } = require('chai');
const config = require('../../src/config');
const _ = require('lodash');
const { deleteItem } = require('../../src/middleware/db');
const TemplatesRecordsM = require('../../src/models/template_records');

describe('*********** MODELS TESTING ***********', () => {

  const Screenshot = require('../../src/controllers/utils/screenshot');

  beforeEach = async () => {

  };

  it('should delete tempalte from timeline as well', async () => {
    const deleted = await deleteItem({
      uuid: '0003'
    }, TemplatesRecordsM);

    // console.log('deleted', deleted);
  });

});
