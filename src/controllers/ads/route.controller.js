const { handleError } = require('../../middleware/utils');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const _ = require('lodash');
const cfg = require('../../config');
const streamsProd = require('../../../requests/streams-prod.json');

/**
 * Add timeline ad break
 * @param {Object} req - request object
 * POST /ads/timeline
 * {
 *   lng: string
 *   timelineUuid: string
 *   duration: number
 *   testMode: boolean
 * }
 * @param {Object} res - response object
 */
const timelineAdBreak = async (req, res) => {
  try {
    const body = req.body;
    const timelineUuid = body.timelineUuid;
    const lng = body.lng;

    const prodStream = _.find(streamsProd, item => {
      const url = new URL(item.url);
      const params = new URLSearchParams(url.search);
      return _.includes(item.url, timelineUuid) && params.get('lng') === lng;
    });

    let data = JSON.stringify({
      id: process.env.NODE_ENV === 'development' ? 'test-scte' : prodStream?.streamId,
      duration: body?.duration, //'120'
      testMode: body?.testMode || false
    });

    const streamerHost = process.env.NODE_ENV === 'development' ? 'localhost' : prodStream.streamer;
    const streamerUrl = `http://${streamerHost}:4000/streams/docker/scte35/adbreak`;

    console.log('timelineAdBreak', {
      ...body,
      streamerUrl,
      prodStream
    });

    if (!prodStream && process.env.NODE_ENV !== 'development') {
      return res.status(200).json({
        success: true,
        message: 'No prod stream, skipping...'
      });
    }

    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: streamerUrl,
      headers: {
        'x-api-key': 'AUTH-$2000$-VIGITAL',
        'Content-Type': 'application/json'
      },
      data: data
    };

    const response = await axios.request(config);

    return res.status(200).json({
      success: true,
      response: {
        status: response?.status,
        statusText: response?.statusText,
        data: response?.data
      }
    });
  } catch (error) {
    LOGGER.error(error, 'ads->timelineAdBreak %o');
    const message = new Error(`timelineAdBreak error ${error.message}`);
    handleError(res, message);
  }
};

module.exports = {
  timelineAdBreak
};
