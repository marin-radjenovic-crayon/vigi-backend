const { createItem, updateItem } = require('../../middleware/db');
const { handleError } = require('../../middleware/utils');
const _ = require('lodash');
const { matchedData } = require('express-validator');

const VideosM = require('../../models/videos');
const TemplatesRecordsM = require('../../models/template_records');
const TimelinesRecordsM = require('../../models/timeline_records');

const { sendVideoToProduction, sendVideoToProductionTimeline } = require('./helpers/sendVideoToProduction');

/**
 * Create item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const create = async (req, res) => {
  try {
    const { body, params } = req;
    const productionType = _.get(params, 'type', null);

    let sendVideoToProduce = null;

    if (productionType === 'template') {
      sendVideoToProduce = await sendVideoToProduction(body).catch(err => {
        LOGGER.error(err);
      });

      _.set(sendVideoToProduce, 'type', productionType);

      LOGGER.info('sendVideoToProduce template %o', sendVideoToProduce);

      //save in template entry, as status sent
      await updateItem({ uuid: sendVideoToProduce?.template_uuid }, TemplatesRecordsM, {
        body: {
          data: {
            videos: {
              [sendVideoToProduce.format]: {
                uuid: sendVideoToProduce.uuid,
                status: sendVideoToProduce.status,
                file: null,
                thumbnail: null
              }
            }
          }
        }
      }).catch(err => {
        LOGGER.error(err, 'sendVideoToProduce template err');
        // throw new Error(err);
      });

      //save in videos as status: sent
      const createItemRes = await createItem(sendVideoToProduce, VideosM);
      if (res) {
        res.status(201).json(createItemRes);
      }
    } else if (productionType === 'timeline') {
      //save in timeline entry, as status sent
      sendVideoToProduce = await sendVideoToProductionTimeline(body).catch(err => {
        throw new Error(err);
      });

      _.set(sendVideoToProduce, 'type', productionType);

      LOGGER.info('sendVideoToProduce timeline %o', sendVideoToProduce);

      //save in template entry, as status sent
      await updateItem({ uuid: sendVideoToProduce.timeline_uuid }, TimelinesRecordsM, {
        body: {
          data: {
            videos: {
              [sendVideoToProduce.format]: {
                uuid: sendVideoToProduce.uuid,
                status: sendVideoToProduce.status,
                file: null,
                thumbnail: null
              }
            }
          }
        }
      }).catch(err => {
        LOGGER.error(err, 'sendVideoToProduce timeline err');
        // throw new Error(err);
      });

      const createItemRes = await createItem(sendVideoToProduce, VideosM);

      if (res) {
        //save in videos as status: sent
        res.status(201).json(createItemRes);
      }
    }
  } catch (error) {
    if (res) {
      handleError(res, error);
    } else {
      LOGGER.error(error);
    }
  }
};

module.exports = { create };
