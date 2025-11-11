const mongoose = require('mongoose');
const { randomUUID } = require('crypto');
const mongoosePaginate = require('mongoose-paginate-v2');

const collection = 'feeds_data';

const Schema = new mongoose.Schema(
  {
    urlHash: {
      type: String,
      required: true,
      unique: true,
      index: true // Ensures fast lookups
    },
    url: {
      type: String,
      required: false
    },
    response: {
      // Consider compression for large responses
      type: mongoose.Schema.Types.Mixed, // Flexible to store any type of data
      required: true
    },
    lastUpdatedAt: {
      type: Date,
      required: true,
      default: Date.now
    },
    expiresAt: {
      type: Date,
      required: true,
      index: { expires: '30d' } // Automatically delete documents after 30 days
    },
    updateData: {
      type: mongoose.Schema.Types.Mixed, // Flexible to store any type of data
      required: false
    }
  },
  {
    versionKey: false,
    timestamps: {
      createdAt: true,
      updatedAt: true
    }, // Only track creation time
    collection
  }
);

Schema.plugin(mongoosePaginate);

module.exports = mongoose.model(collection, Schema);
