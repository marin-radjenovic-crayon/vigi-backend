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
const MAX_WIDTH = 344.5;
const MAX_HEIGHT = 613.6;
const fcbId = "apoawtpvac4zqlancmvw4nk4o";

const getRatioFromFormat = (format) => {
  let _ratio = 0.56;
  if (format === '1920x1080') _ratio = 1.78;
  if (format === '1200x1500') _ratio = 0.8;
  return _ratio;
}

const getFormatFromRatio = (ratio) => {
  let _format = '1080x1920';
  if (ratio === 1.78) _format = '1920x1080';
  if (ratio === 0.8) _format = '1200x1500';
  return _format;
}

function getWrapperDimensions(targetRatio) {
  switch (targetRatio) {
    case 1.78: {
      return {
        width: MAX_HEIGHT,
        height: MAX_WIDTH
      }
    }
    case 0.56: {
      return {
        width: MAX_WIDTH,
        height: MAX_HEIGHT
      }
    }
    case 0.8: {
      return {
        width: MAX_HEIGHT * 0.8,
        height: MAX_HEIGHT
      }
    }

    default: {
      return {
        width: MAX_WIDTH,
        height: MAX_HEIGHT
      }
    }
  }
}

/**
 * Get all items function called by route
 */

function Template(req, res) {
  this.template = 'fcb_goal';
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

Template.prototype.createManual = async function (event, lang, format, goalId, fcbOriginLayers) {
  const target = {
    eventId: event.eventId,
    league: event.competitionId,
    teamId: event.selectedTeamId
  };

  const FeedInstance = new FnFeedsClass({
    target
  });

  let goalEvents = await FeedInstance.getGoalsEvents().catch(err => {
    console.log('err', err);
  });

  // need to have logic for ownGoal
  goalEvents = goalEvents.filter(
    (g) => g.contestantId === fcbId || (g.isOwnGoal && g.contestantId !== fcbId)
  );

  if (goalId !== null) {
    const existing = await TemplatesRecordsM.findOne(
      {
        'event.eventId': event.eventId,
        'data.updater.id': goalId
      },
      null,
      { lean: false } // not lean so we can update
    );
    const goal = goalEvents.find((g) => g.id === goalId);
    if (existing) {
      _.set(existing, 'data.updater', goal);
      _.set(existing, 'name', `Goal ${_.get(goal, 'playerName')}`);

      // set ratio
      _.set(existing, 'data.editData.effects.ratio', getRatioFromFormat(format));
      existing.markModified('data.editData.effects.ratio');
      // set dimensions
      const originLayers = _.cloneDeep(fcbOriginLayers);
      const scaledDimensions = getWrapperDimensions(getRatioFromFormat(format));
      const prevRatio = existing?.data?.editData?.effects?.ratio; //
      const prevLayerDimension = getWrapperDimensions(prevRatio);
      const updatedLayers = originLayers?.map((layer) => {
        const nonRatioDimensions = layer.nonRatioDimensions;

        const { width: prevWidth, height: prevHeight } = prevLayerDimension;
        const { width: targetWidth, height: targetHeight } = scaledDimensions;
        const { width: nonRatioWidth, height: nonRatioHeight } = nonRatioDimensions;
        const { width: currentWidth, height: currentHeight } = layer.dimensions;
        const newWidth = nonRatioWidth * (targetWidth / prevWidth);
        const newHeight = nonRatioHeight * (targetHeight / prevHeight);
        const yRatio = newHeight / currentHeight;
        const prevCanvasHeight = targetHeight / yRatio;
        const newY = targetHeight / (prevCanvasHeight / layer.nonRatioY)

        const xRatio = newWidth / currentWidth;
        const prevCavnasWidth = targetWidth / xRatio;
        const newX = targetWidth / (prevCavnasWidth / layer.nonRatioX)
        return {
          ...layer,
          dimensions: {
            width: Math.round(newWidth),
            height: Math.round(newHeight),
          },
          nonRatioDimensions: {
            width: Math.round(newWidth),
            height: Math.round(newHeight),
          },
          x: newX,
          y: newY,
          nonRatioX: newX,
          nonRatioY: newY,
        };
      });
      _.set(existing, 'data.editData.layers', updatedLayers);
      existing.markModified('data.editData.layers');
      await existing.save().catch(err =>
        LOGGER.error(err, 'Failed to update goal template')
      );
      return existing;
    } else {
      // ✅ Create new goal template
      const newName = `Goal ${_.get(goal, 'playerName')}`;
      const baseData = _.cloneDeep(initialData);
      delete baseData.uuid;

      _.set(baseData, 'name', newName);
      _.set(baseData, 'lang', lang);
      _.set(baseData, 'currentFormat', format);

      baseData.event = event;

      const dynamic = await this.getDynamicData
        .call(this, baseData, { goal })
        .catch(err => {
          LOGGER.warn(err, 'get dynamic data failed: ');
        });

      if (dynamic?.goalData) {
        baseData.data.dynamic = dynamic;
        baseData.data.updater = goal;

        return await createItem(baseData, TemplatesRecordsM).catch(err => {
          LOGGER.error(err, 'Goal creation failed');
        });
      }
    }
  }

  for (const goal of goalEvents) {
    try {
      // Try to find an existing template for this specific goal
      const existing = await TemplatesRecordsM.findOne(
        {
          'event.eventId': event.eventId,
          'data.updater.id': goal.id
        },
        null,
        { lean: false } // not lean so we can update
      );
      if (existing) {
        // ✅ Update existing goal template
        _.set(existing, 'data.updater', goal);
        _.set(existing, 'name', `Goal ${_.get(goal, 'playerName')}`);

        await existing.save().catch(err =>
          LOGGER.error(err, 'Failed to update goal template')
        );
      } else {
        // ✅ Create new goal template
        const newName = `Goal ${_.get(goal, 'playerName')}`;
        const baseData = _.cloneDeep(initialData);
        delete baseData.uuid;

        _.set(baseData, 'name', newName);
        _.set(baseData, 'lang', lang);
        _.set(baseData, 'currentFormat', format);

        baseData.event = event;

        const dynamic = await this.getDynamicData
          .call(this, baseData, { goal })
          .catch(err => {
            LOGGER.warn(err, 'get dynamic data failed: ');
          });

        if (dynamic?.goalData) {
          baseData.data.dynamic = dynamic;
          baseData.data.updater = goal;

          return await createItem(baseData, TemplatesRecordsM).catch(err => {
            LOGGER.error(err, 'Goal creation failed');
          });
        }
      }
    } catch (error) {
      LOGGER.error(error, 'Error processing goal', goal);
    }
  }
}

Template.prototype.createDirectly = function ({ goalEvents, event }) {
  return new Promise(async (resolve, reject) => {
    const { templateconf, template } = this;
    const ScreenshotClass = new Screenshot();
    let onlyFCBEvents = goalEvents.filter(
      (g) => g.contestantId === fcbId || (g.isOwnGoal && g.contestantId !== fcbId)
    );
    console.log('first: ', onlyFCBEvents[0])
    for (const goal of onlyFCBEvents) {
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
          _.set(baseData, 'lang', 'en');


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
            const formats = _.get(templateconf, 'formats', []);
            const format = formats[0];
            _.set(baseData, 'currentFormat', format);
            const createRecord = await createItem(baseData, TemplatesRecordsM).catch(err => {
              LOGGER.error(err, 'Goal creation failed');
            });
            const createdRecordId = _.get(createRecord, 'uuid', null);

            const actions = [
              {
                templateId: createdRecordId,
                url: `${MAINCONFIG.frontendUrl}/frontend/template/${template}/${createdRecordId}?format=${format}`,
                dir: template,
                format: format,
                preview: true
              }
            ];

            const response = await ScreenshotClass.takeScreenshotPure(actions).catch(err => {
              LOGGER.error(err);
            });
            // create screenshot manually
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
