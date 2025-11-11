const TemplatesRecordsM = require('../../models/template_records');
const { getItem, checkQueryString, getItems, createItem, updateItem } = require('../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../_helpers/getSingle');
const setSingleDefaultHandler = require('../_helpers/setSingle');

const initialData = require('./initialData');
const { handleError } = require('../../middleware/utils');
const MediaM = require('../../models/media');
const SetupM = require('../../models/setup');
const FnFeedsClass = require('../../../src/controllers/feeds/del/functions');
const Screenshot = require('../../../src/controllers/utils/screenshot');
const { create } = require('../../../src/controllers/videos/create');
const { promise } = require('bcrypt/promises');

/**
 * Get all items function called by route
 */

function Template(req, res) {
  this.template = 'adlergoal';
  this.uuid = req ? req.params.uuid : null;
  this.templateconf = _.get(MAINCONFIG.templates, 'data.' + this.template, {});
  this.res = res;
  this.req = req;
}

// the start method
Template.prototype.getSingle = async function () {
  getSingleDefaultHandler.call(this, {
    initialData
  });
};

// the start method
Template.prototype.setSingle = async function () {
  setSingleDefaultHandler.call(this, {
    initialData
  });
};

// the start method
Template.prototype.createDirectly = function ({ goal, event, videoproduction }) {
  return new Promise(async (resolve, reject) => {
    const { templateconf, template } = this;

    const newName = `Goal ${_.get(goal, 'surname')}`;
    const baseData = _.cloneDeep(initialData);
    delete baseData.uuid;

    _.set(baseData, 'name', newName);

    //add current setup event
    const setupEvent = await getItem({ id: 2 }, SetupM).catch(err => {
      LOGGER.error(err, 'setupEvent failed - setupEvent');
    });

    const setupGeneral = await getItem({ id: 1 }, SetupM).catch(err => {
      LOGGER.error(err, 'setupGeneral failed - setupGeneral');
    });

    baseData.event = _.get(setupEvent, 'data.event');

    baseData.data.dynamic = await this.getDynamicData
      .call(this, {
        baseData,
        goal
      })
      .catch(err => {
        LOGGER.warn(err, 'get dynamic data failed: ' + template);
      });

    const createRecord = await createItem(baseData, TemplatesRecordsM).catch(err => {
      LOGGER.error(err, 'Goal creation failed');
    });

    const createdRecordId = _.get(createRecord, 'uuid', null);

    const ScreenshotClass = new Screenshot();
    const actions = [
      {
        templateId: createdRecordId,
        url: `${MAINCONFIG.frontendUrl}/frontend/screenshot/${this.template}/${createdRecordId}?format=1080x1920`,
        dir: this.template,
        format: '1080x1920',
        preview: true
      }
    ];

    const response = await ScreenshotClass.takeScreenshotPure(actions).catch(err => {
      LOGGER.error(err);
    });

    // ###body {"template_uuid":"3b8e0fde-72c9-455b-a2e0-e35099f63d38","template_name":"adlertable","name":"Table (19_39_39 29/9)","format":"1920x1080","event":{"selectedTeamId":"2","competitionId":"1","competitionName":"DEL","type":"match","homeTeamId":"2","awayTeamId":"11","eventId":"2166","date":"30.09.2021","time":"19:30","side":"home"},"videoquery":{"url":"http://localhost:3001/frontend/video/adlertable/3b8e0fde-72c9-455b-a2e0-e35099f63d38?format=1920x1080","seconds":20,"webhook":"http://localhost:3000/webhook/videoproduction","width":1920,"height":1080,"sound":"http://localhost:3000/predefined/media/audio/seven_nation_army.mp3"}}
    // ###params {"type":"template"}

    if (videoproduction) {
      const videoDuration = _.get(_.find(_.get(baseData, 'data.options', []), { id: 'videoduration' }), 'value');

      const videoSoundIsOn = _.get(setupGeneral, 'data.video.addSoundToTemplate', false);
      const videosound = _.get(setupGeneral, 'data.video.templateaudio', null);

      const videoquery = {
        url: `${MAINCONFIG.frontendUrl}/frontend/video/${this.template}/${createdRecordId}?format=1080x1920`,
        seconds: parseFloat(videoDuration) + 5,
        webhook: `${MAINCONFIG.server.appUrl}/webhook/videoproduction`,
        width: 1080,
        height: 1920
      };

      if (videoSoundIsOn && videosound) {
        videoquery.sound = `${global.APP_FULLURL}${_.get(videosound, 'url')}`;
      }

      LOGGER.debug('videoquery %o', videoquery);

      const sendVideo = await create({
        body: {
          template_uuid: createdRecordId,
          template_name: baseData.template_name,
          name: baseData.name,
          format: '1080x1920',
          event: baseData.event,
          videoquery
        },
        params: {
          type: 'template'
        }
      }).catch(err => {
        LOGGER.error(err, 'send video err');
      });
    }

    LOGGER.debug('actions %o', actions);
    LOGGER.debug('response %o', response);

    resolve();
  });
};

Template.prototype.getDynamicData = async function (params) {
  //add current setup event
  const setupEvent = await getItem({ id: 2 }, SetupM).catch(err => {
    LOGGER.error(err, 'setupEvent failed - setupEvent');
  });

  let event = _.get(params, 'baseData.event');
  let goal = _.get(params, 'goal');

  const uuid = this.req?.params?.uuid;

  if (uuid) {
    const goalDb = await getItem(
      {
        uuid
      },
      TemplatesRecordsM
    ).catch(error => {
      LOGGER.error(error, 'goalEventCheck adlergoal failed');
    });

    event = _.get(goalDb, 'event');
    goal = _.get(goalDb, 'data.dynamic.goal');
  }

  const FeedInstance = new FnFeedsClass({
    target: {
      eventId: event.eventId,
      league: event.competitionId,
      teamId: event.selectedTeamId
    }
  });

  const game = await FeedInstance.getGameInfo().catch(err => {
    console.log('err', err);
  });

  const assets = {};

  const teamHome = await getItem(
    {
      'data.id': event.homeTeamId,
      group: 'teams'
    },
    MediaM
  ).catch(err => {
    console.log('err', err);
  });

  const teamAway = await getItem(
    {
      'data.id': event.awayTeamId,
      group: 'teams'
    },
    MediaM
  ).catch(err => {
    console.log('err', err);
  });

  const player = await getItem(
    {
      'data.id': goal.playerId.toString(),
      group: 'players'
    },
    MediaM
  ).catch(err => {
    console.log('err', err);
  });

  const playerOverrideField = _.get(params, 'data.fields[0].value', null);

  if (playerOverrideField) {
    const playerOverride = await getItem(
      {
        'data.id': playerOverrideField?.data?.id.toString(),
        group: 'players'
      },
      MediaM
    ).catch(err => {
      console.log('err', err);
    });

    _.set(assets, 'playerOverride', playerOverride);
  }
  _.set(assets, 'teamHome', teamHome);
  _.set(assets, 'teamAway', teamAway);
  _.set(assets, 'player', player);

  return {
    teamSide: _.get(event, 'side'),
    game,
    goal,
    assets
  };
};

module.exports = Template;
