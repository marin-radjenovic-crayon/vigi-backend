const { getItem } = require('@/src/middleware/db');
const UserM = require('../../models/users');
const SetupM = require('@/src/models/setup');
const _ = require('lodash');

module.exports = async req => {
  const currentUser = req?.user;
  let eventData = null;
  const setupEvent = await getItem({ id: 2 }, SetupM);

  if (!currentUser) {
    // throw new Error('USER_NOT_AUTHENTICATED');
    // console.warn('WARNING: getUserEvent - no user attached to req')
    const setupEvent = await getItem({ id: 2 }, SetupM);
    eventData = setupEvent;
  } else {
    const { _id } = currentUser;
    const userRecord = await getItem({ _id: _id }, UserM);
    eventData = userRecord.eventData;
    if (!eventData) {
      eventData = setupEvent;
    }
  }

  return eventData;
};
