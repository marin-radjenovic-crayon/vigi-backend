const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const mongoosePaginate = require('mongoose-paginate-v2');
const flatThis = require('../controllers/utils/flatThis');

const collection = 'alarm_events';

const Schema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      default: uuidv4,
      index: true
    },
    contestantId: {
      type: String
    },
    playerId: {
      type: String
    },
    matchId: {
      type: String
    },
    matchInfo: {
      type: Object
    },
    matchDetails: {
      type: Object
    },
    event_type: {
      type: String
    },
    goalData: {
      type: Object
    },
    latestScore: {
      type: Object
    },
    events: {
      type: Array
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection
  }
);

Schema.index(
  {
    matchId: 1
  },
  { unique: true }
);

Schema.plugin(mongoosePaginate);

module.exports = mongoose.model(collection, Schema);
