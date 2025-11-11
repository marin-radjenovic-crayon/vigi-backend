const { CLIENTS } = require('@/src/constants/config');
const oneFootball = require('./onefootball');
const opta = require('./samsung');
const fcb = require('./fcb');
const bild = require('./bild');
const client = CLIENTS.OF;
const getFeed = (client) => {
  switch (client) {
    case CLIENTS.PERFORM_STATS:
    case CLIENTS.AWS:
      return opta;
    case CLIENTS.FCB:
      return fcb;
    case CLIENTS.BILD:
      return bild;
    case CLIENTS.OF:
      return oneFootball;
    default:
      return opta;
  }
}

const clientFeeds = getFeed(client);
const toMerge = {
  ...clientFeeds,
  liveUpdateOn: false
};
module.exports = toMerge;
