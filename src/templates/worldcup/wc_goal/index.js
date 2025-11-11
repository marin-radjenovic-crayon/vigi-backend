//const TemplatesRecordsM = require('../../../models/template_records');
//const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

//const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
//const MediaM = require('../../../models/media');
const { getGoalData } = require('./functions');
const { getItem, createItem } = require('@/src/middleware/db');
const SetupM = require('@/src/models/setup');
const TemplatesRecordsM = require('@/src/models/template_records');
const Screenshot = require('@/src/controllers/utils/screenshot');
const { create } = require('@/src/controllers/videos/create');

/**
 * Get all items function called by route
 */

function Template(req, res) {
  this.template = 'wc_goal';
  this.uuid = req ? req.params.uuid : null;
  this.templateconf = _.find(MAINCONFIG.templates, { name: this.template });
  this.res = res;
  this.req = req;
}

// the start method
Template.prototype.getSingle = async function () {
  await getSingleDefaultHandler.call(this, {
    initialData
  });
};

// the start method
Template.prototype.setSingle = async function () {
  await setSingleDefaultHandler.call(this, {
    initialData
  });
};

Template.prototype.createDirectly = function ({ goalEvents, event }) {
  return new Promise(async (resolve, reject) => {
    const { templateconf, template } = this;
    for (const goal of goalEvents) {
      try {
        const data = await TemplatesRecordsM.findOne(
          {
            'event.eventId': event.eventId,
            'data.updater.id': goal.id
          },
          null,
          { lean: true }
        );

        if (!data) {
          const newName = `Goal ${_.get(goal, 'playerName')}`;
          const baseData = _.cloneDeep(initialData);
          delete baseData.uuid;

          _.set(baseData, 'name', newName);

          baseData.event = event;


          const dynamic = await this.getDynamicData
            .call(this, baseData, {
              goal
            })
            .catch(err => {
              LOGGER.warn(err, 'get dynamic data failed: ' + template);
            });
          if (dynamic.goalData) {
            baseData.data.dynamic = dynamic;
            // console.log('baseData', baseData);

            baseData.data.updater = goal

            const createRecord = await createItem(baseData, TemplatesRecordsM).catch(err => {
              LOGGER.error(err, 'Goal creation failed');
            });
          } else {
            // data null, not create
          }

        } else {
          // This means the goal template is already there
        }
      } catch (error) {
        LOGGER.error(error, 'Error processing goal', goal);
      }
    }

    resolve();
  });
};

Template.prototype.getDynamicData = async function (baseData, callOptions) {
  const event = baseData.event;
  const goal = callOptions?.goal;
  const target = {
    eventId: event.eventId,
    league: event.competitionId,
    teamId: event.selectedTeamId
  };

  const FeedInstance = new FnFeedsClass({
    target
  });

  const liveMatchStats = await FeedInstance.setLiveMatchStats().catch(err => {
    console.log('err', err);
  });

  const liveMatchEvents = await FeedInstance.setLiveMatchEvents(callOptions).catch(err => {
    console.log('err', err);
  });

  const matchInfo = liveMatchEvents?.matchInfo || null;
  if (matchInfo && liveMatchStats?.liveData) {
    const liveData = liveMatchEvents?.liveData || null;
    const lineUp = liveMatchStats?.liveData?.lineUp;

    const goalData = getGoalData(liveData?.event, lineUp, goal);

    const shooterTeamId = goalData?.[goalData?.length - 1]?.teamId;
    const teamSide = _.find(matchInfo?.contestant, { id: shooterTeamId })?.position;

    const assets = {};
    let matchDetails = liveData?.matchDetails;
    if (callOptions?.goal) {
      matchDetails.scores = callOptions?.goal?.currentScores;
    }
    return {
      matchInfo,
      matchDetails,
      assets,
      teamSide,
      goalData
    };
  }

  return {
    matchInfo: null,
    matchDetails: null,
    assets: [],
    teamSide: null,
    goalData: null
  };
};

module.exports = Template;
