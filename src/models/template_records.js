const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const mongoosePaginate = require('mongoose-paginate-v2');
const flatThis = require('../controllers/utils/flatThis');

const collection = 'template_records';

const Schema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      default: uuidv4,
      index: true
    },
    template_name: {
      type: String,
      required: true,
      index: true
    },
    name: {
      type: String,
      required: true
    },
    data: {
      type: Object,
      dynamic: {
        type: Object
      },
      static: {
        type: Object
      },
      editData: {
        type: Object
      },
      currentFormat: {
        type: String
      }
    },
    season: {
      type: String,
      required: true
    },
    event: {
      type: Object
    },
    lang: {
      type: String,
      // required: true,
      index: true
    },
    currentFormat: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
    collection
  }
);

Schema.index({ 'event.eventId': 1 });
Schema.plugin(mongoosePaginate);

module.exports = mongoose.model(collection, Schema);
