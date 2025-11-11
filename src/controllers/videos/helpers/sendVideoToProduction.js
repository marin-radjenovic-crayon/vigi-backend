const VideosM = require('../../../models/videos');
const path = require('path');
const _ = require('lodash');
const { buildErrObject } = require('../../../middleware/utils');

const axios = require('axios');

/**
 * Send video to production server
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const sendVideoToProduction = data => {
  const { format, template_name, name, template_uuid, videoquery, event } = data;

  return new Promise(async (resolve, reject) => {
    // console.log("path.join(MAINCONFIG.videoUrl, \"v1/videos\")", MAINCONFIG.videoUrl + "/" + path.join("v1", "videos"));
    // console.log("videoquery", videoquery);

    const sendPayload = {
      method: 'post',
      url: MAINCONFIG.videoUrl + '/' + path.join('v1', 'videos'),
      data: videoquery
    };

    const videoServerResponse = await axios(sendPayload).catch(err => {
      LOGGER.error(err, 'sendVideoToProduction err videoServerResponse');
      reject(err);
    });

    LOGGER.info('videoServerResponse data %o', videoServerResponse?.data);

    const videoUuid = _.get(videoServerResponse, 'data.id', null);
    const videoWorker = _.get(videoServerResponse, 'data.worker', null);
    const videoWebhook = _.get(videoServerResponse, 'data.webhook', null);

    const buildVideoRecord = {
      uuid: videoUuid,
      template_uuid: template_uuid,
      template_name: template_name,
      name: name,
      data: {
        worker: videoWorker,
        webhook: videoWebhook
      },
      type: null,
      status: 'sent',
      season: MAINCONFIG.season,
      format,
      event
    };
    resolve(buildVideoRecord);
  });
};

/**
 * Send video to production server TIMELINE
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const sendVideoToProductionTimeline = data => {
  const { format, name, timeline_uuid, videoquery, event } = data;

  return new Promise(async (resolve, reject) => {
    // console.log("path.join(MAINCONFIG.videoUrl, \"v1/videos\")", MAINCONFIG.videoUrl + "/" + path.join("v1", "videos"));
    // console.log("videoquery", videoquery);
    const videoServerResponse = await axios({
      method: 'post',
      url: MAINCONFIG.videoUrl + '/' + path.join('v1', 'videos'),
      data: videoquery
    }).catch(err => {
      reject(err);
    });

    const videoUuid = _.get(videoServerResponse, 'data.id', null);
    const videoWorker = _.get(videoServerResponse, 'data.worker', null);
    const videoWebhook = _.get(videoServerResponse, 'data.webhook', null);

    const buildVideoRecord = {
      uuid: videoUuid,
      timeline_uuid,
      name,
      data: {
        worker: videoWorker,
        webhook: videoWebhook
      },
      type: null,
      status: 'sent',
      season: MAINCONFIG.season,
      format,
      event
    };
    resolve(buildVideoRecord);
  });
};

module.exports = {
  sendVideoToProduction,
  sendVideoToProductionTimeline
};
