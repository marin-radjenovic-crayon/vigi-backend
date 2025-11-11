const _ = require('lodash');
const axios = require('axios');
const config = require('../../../config');
const BaseClass = require('./index');
const { promise } = require('bcrypt/promises');
const async = require('async');
const { format, parseISO, differenceInMinutes, parse, isSameDay, isBefore, addHours, closestTo } = require('date-fns');
const { upsertItem } = require('../../../middleware/db');
const UpdaterM = require('../../../models/updater');
const { liveMatch } = require('@/src/config/opta_opta_dynamic/dynamic_timelines');
const { getClosestMatchMinutesBefore, getClosestMatchFromNow } = require('@/src/controllers/feeds/opta/helpers');
const fs = require('fs').promises;

const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000; // 1 day in milliseconds
const MINUTES_5_IN_MS = 15 * 60 * 1000; // 1 day in milliseconds
const HOURS_12_IN_MS = 12 * 60 * 60 * 1000; // 1 day in milliseconds

async function saveCallResultsToFile(data) {
  try {
    // Convert the callResults object to a JSON string
    const jsonString = JSON.stringify(data, null, 2);

    // Define the file path and name
    const filePath = './vod_save.json';

    // Write the JSON string to a file
    await fs.writeFile(filePath, jsonString);

    console.log('Successfully wrote file');
  } catch (err) {
    LOGGER.error(err, 'Error writing to file');
  }
}

class VodFeed extends BaseClass {
  constructor({ target }) {
    super('vod');

    this.target = {
      season: config.season,
      league: _.get(target, 'league', null),
      teamId: _.get(target, 'teamId', null),
      eventId: _.get(target, 'eventId', null)
    };
  }

  async getMatchVideos(eventId = this.target.eventId) {
    const indicator = config.feeds.opta.vodData.fixture;
    const apiCall = indicator.url.replace('[[EVENTID]]', eventId);

    const callResults = await this.apiVodCall(
      {
        url: apiCall
      },
      { indicator }
    );

    // console.log('###callResults', callResults)

    // await saveCallResultsToFile(callResults);

    const maxDuration = 360; //(6 minutes)
    const videoTargetSize = {
      width: 1280,
      height: 720
    };

    const videoTargetSizeFallback = {
      width: 1920,
      height: 1080
    };

    const deVideos = _.sortBy(
      _.map(
        _.filter(callResults?.videos?.video, e => {
          let targetVideo = _.find(e?.media?.content, videoTargetSize);
          // if (!targetVideo) {
          //   targetVideo = _.find(e?.media?.content, videoTargetSizeFallback);
          // }
          return e.language === 'de' && e.duration <= maxDuration && targetVideo?.url;
        }),
        e => _.omit(e, ['allowedCountryCodes'])
      ),
      ['createdTime']
    );

    const enVideos = _.sortBy(
      _.map(
        _.filter(callResults?.videos?.video, e => {
          let targetVideo = _.find(e?.media?.content, videoTargetSize);
          // if (!targetVideo) {
          //   targetVideo = _.find(e?.media?.content, videoTargetSizeFallback);
          // }
          return e.language === 'en' && e.duration <= maxDuration && targetVideo?.url;
        }),
        e => _.omit(e, ['allowedCountryCodes'])
      ),
      ['createdTime'] // Sorting criteria
    );

    return {
      en: {
        count: enVideos.length,
        videos: enVideos
      },
      de: {
        count: deVideos.length,
        videos: deVideos
      }
    };
  }
}

module.exports = VodFeed;
