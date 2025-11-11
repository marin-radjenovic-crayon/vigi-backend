const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const uuidv1 = require('uuid').v1;
const collection = 'media';

const Schema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      default: function genUUID() {
        return uuidv1();
      },
      index: true
    },
    label: {
      type: String
    },
    group: {
      type: String
    },
    url: {
      type: String
    },
    fullUrl: {
      type: String
    },
    data: {
      type: Object
    },
    extension: {
      type: String
    },
    mime: {
      type: String
    },
    content_type: {
      type: String
    },
    size: {
      type: Number
    },
    local_path: {
      type: String
    },
    expired: {
      type: Boolean,
      default: false
    },
    expiredAt: {
      type: Date
    }
  },
  {
    versionKey: false,
    timestamps: true,
    collection
  }
);

Schema.index({ uuid: 1 }, { unique: true });

Schema.plugin(mongoosePaginate);

module.exports = mongoose.model(collection, Schema);
