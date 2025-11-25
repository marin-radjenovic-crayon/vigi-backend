const { matchedData } = require('express-validator');
const { getAllItemsFromDB } = require('./helpers');
const { getItem, checkQueryString, getItems, updateItem } = require('../../middleware/db');
const { handleError } = require('../../middleware/utils');
const packageJson = require('../../../package.json');

const _ = require('lodash');

const SetupM = require('../../models/setup');
const UserM = require('../../models/users');

const activeStreams = require('../../../requests/streams-prod.json');
/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getSingle = async (req, res) => {
  try {
    const client = MAINCONFIG.client || 'womansworldcup';
    const setupid = _.get(req.params, 'setupid', null);

    let target = {
      id: setupid || 1
    };

    const currentUser = req?.user;

    //@todo ability to login on system get route, currently we need to have get routes without authentication
    if (target.id === '2' && currentUser) {
      // if (!currentUser) {
      //   // return handleError(res, {
      //   //   message: 'User is not authenticated'
      //   // });
      // }
      const userRecord = await getItem({ _id: currentUser?._id }, UserM).catch(err => {});
      let userSetupRecord = userRecord?.eventData;
      if (!userSetupRecord) {
        userSetupRecord = await getItem(target, SetupM).catch(err => {
          // handleError(res, err);
        });
        await updateItem({ _id: currentUser?._id }, UserM, { body: { eventData: userSetupRecord } });

        _.set(userSetupRecord, 'data._apiVersion', packageJson.version);

        res.status(200).json(userSetupRecord);
      }
    } else {
      const setupRecord = await getItem(target, SetupM).catch(err => {
        handleError(res, err);
      });
      console.log('activeStreams: ', activeStreams);
      console.log('client: ', client);
      let updatedActiveStreams = [...activeStreams].filter((stream) => stream.client === client);

      if (target?.id === 1) {
        _.set(setupRecord, 'data.enabledCompetitions', MAINCONFIG.feeds?.opta?.competitions);
        _.set(setupRecord, 'data.trackedCompetitions', MAINCONFIG.feeds?.opta?.trackedCompetitions);
        _.set(setupRecord, 'data.activeStreams', updatedActiveStreams);
      }
      _.set(setupRecord, 'data._apiVersion', packageJson.version);

      res.status(200).json(setupRecord);
    }
  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  getSingle
};
