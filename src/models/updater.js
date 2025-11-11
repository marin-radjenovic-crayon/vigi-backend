const mongoose = require('mongoose');
const collection = 'updater';

const Schema = new mongoose.Schema(
  {
    feedProvider: {
      type: String,
      required: true
    },
    feedType: {
      type: String,
      required: true
    },
    data: {
      type: mongoose.Schema.Types.Mixed
    },
    event: {
      type: Object,
      required: true
    },
    callUrl: {
      type: String,
      required: true
    },
    updateCount: {
      type: String,
      required: true
    },
    forceUpdate: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  {
    timestamps: true,
    collection
  }
);

// $inc: { qty: 10 }

Schema.index(
  {
    'event.eventId': 1,
    feedType: 1,
    feedProvider: 1
  },
  {
    unique: true,
    partialFilterExpression: {
      'event.eventId': { $exists: true, $ne: null }
    }
  }
);

const Model = mongoose.model(collection, Schema);

module.exports = Model;
