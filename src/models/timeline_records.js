const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');
const mongoosePaginate = require('mongoose-paginate-v2');
const flatThis = require('../controllers/utils/flatThis');

const collection = 'timeline_records';

const Schema = new mongoose.Schema(
  {
    uuid: {
      type: String,
      default: uuidv4,
      index: true
    },
    name: {
      type: String,
      required: true,
      index: true
    },
    format: {
      type: String,
      required: true
    },
    options: {
      type: Object
    },
    data: {
      type: Object
    },
    templates: {
      type: Array
    },
    usedTemplates: {
      type: Array
    },
    event: {
      type: Object
    },
    timelines: {
      type: Array
    },
    type: {
      type: String,
      default: 'template'
    }
  },
  {
    versionKey: false,
    timestamps: true,
    collection
  }
);

Schema.index({ name: 1, updatedAt: 1 });

Schema.plugin(mongoosePaginate);

Schema.pre('findOneAndUpdate', function (next) {
  const schema = this;
  let body = this.getUpdate()?.__body;

  //replace whole array in templates
  if (body?.templates && body?.templates.length) {
    const updateQuery = flatThis(body, ['templates']);
    //workaraound for update and updatedAt field, when replacing set directly
    this._update.$set = {
      ...updateQuery,
      updatedAt: Date.now()
    };
  }

  next();
});

module.exports = mongoose.model(collection, Schema);
