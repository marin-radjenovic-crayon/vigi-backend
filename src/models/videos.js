const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const mongoosePaginate = require('mongoose-paginate-v2');

const collection = 'videos';

const Schema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      default: uuidv4,
      index: true
    },
    name: {
      type: String,
      required: true
    },
    format: {
      type: String
    },
    timeline_uuid: {
      type: String
    },
    template_uuid: {
      type: String
    },
    template_name: {
      type: String
    },
    data: {
      type: Object
    },
    type: {
      type: String,
      enum: ['template', 'timeline', 'socialmedia', 'other'],
      default: 'other'
    },
    status: {
      type: String,
      enum: ['sent', 'ready', 'error'],
      default: 'sent'
    },
    season: {
      type: String,
      required: true
    },
    event: {
      type: Object
    }
  },
  {
    versionKey: false,
    timestamps: true,
    collection
  }
);

Schema.plugin(mongoosePaginate);

module.exports = mongoose.model(collection, Schema);
