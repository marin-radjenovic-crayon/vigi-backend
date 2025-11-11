const { expect } = require('chai');
const _ = require('lodash');
const base64 = require('base-64');
const path = require('path');
const { getItem } = require('../../src/middleware/db');
const TemplatesRecordsM = require('../../src/models/template_records');
const clean = require('../../scripts/seeder/clean');
const seed = require('../../scripts/seeder/seed');
const flatThis = require('../../src/controllers/utils/flatThis');
const { upsertItem } = require('../../src/middleware/db');

describe('*********** FEEDS ***********', () => {

  beforeEach = async () => {
    await clean();
    await seed();
  };

  it('should generate base64 hash', async () => {
    const initialObj = {
      side: 'home',
      player: 'goalies',
      someSpecialAction: true
    };

    const hashOutput = base64.encode(JSON.stringify(initialObj));

    const decoded = JSON.parse(base64.decode(hashOutput));

    expect(decoded).to.deep.equal(initialObj);


    // console.log({
    //   hashOutput,
    //   decoded
    // });
  });

  it('try to update element with null', async () => {
    const element = await getItem({
      name: 'Statistics-null-test'
    }, TemplatesRecordsM);

    const createRecord = await upsertItem({
      name: 'Statistics-null-test'
    }, TemplatesRecordsM, {
      body: {
        test: 'asdadasda',
        data: {
          dynamic: {
            test: {},
            teamStats: {
              stat1: 4,
              stat2: 5
            }
          }
        }
      }
    });
  });

});
