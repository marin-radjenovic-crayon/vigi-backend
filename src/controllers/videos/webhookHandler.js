const { updateItem, getItem } = require('../../middleware/db');
const { handleError } = require('../../middleware/utils');
const path = require('path');
const axios = require('axios');
const _ = require('lodash');

const VideosM = require('../../models/videos');
const TemplatesRecordsM = require('../../models/template_records');
const TimelinesRecordsM = require('../../models/timeline_records');
/**
 * Update item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const hookVideoProduction = async (req, res) => {
  try {
    const { body } = req;
    const { uuid } = body;

    LOGGER.info(body, 'hookVideoProduction body');

    const videoCall = MAINCONFIG.videoUrl + '/' + path.join('v1', 'videos', uuid);

    const videoServerResponse = await axios({
      method: 'get',
      url: videoCall
    }).catch(err => {
      throw new Error(err);
    });

    const videoData = _.get(videoServerResponse, 'data[0]', null);

    let status = 'error';

    if (_.get(videoData, 'file', null)) {
      status = 'ready';
    }

    const videoRecord = await getItem({ uuid: uuid }, VideosM).catch(err => {
      throw new Error(err);
    });

    const { type } = videoRecord;

    let recordUuid = null;

    if (type === 'template') {
      recordUuid = _.get(videoRecord, 'template_uuid', null);
    } else if (type === 'timeline') {
      recordUuid = _.get(videoRecord, 'timeline_uuid', null);
    }

    const format = _.get(videoRecord, 'format', null);

    //save in videos as status: sent
    await updateItem({ uuid: uuid }, VideosM, {
      body: {
        data: {
          ...videoData
        },
        status
      }
    });

    if (type === 'template') {
      // // //save in template entry, as status sent
      await updateItem({ uuid: recordUuid }, TemplatesRecordsM, {
        body: {
          data: {
            videos: {
              [format]: {
                status: status,
                file: _.get(videoData, 'file'),
                thumbnail: _.get(videoData, 'thumbnail')
              }
            }
          }
        }
      }).catch(err => {
        throw new Error(err);
      });
    } else if (type === 'timeline') {
      // // //save in template entry, as status sent
      const updatedTimeline = await updateItem({ uuid: recordUuid }, TimelinesRecordsM, {
        body: {
          data: {
            videos: {
              [format]: {
                status: status,
                file: _.get(videoData, 'file'),
                thumbnail: _.get(videoData, 'thumbnail')
              }
            }
          }
        }
      }).catch(err => {
        throw new Error(err);
      });
    }

    res.status(200).json({
      msg: 'success',
      data: videoData
    });
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = { hookVideoProduction };
