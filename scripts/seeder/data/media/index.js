const faker = require('faker');
const ObjectID = require('mongodb').ObjectID;
const uuidv1 = require('uuid').v1;

module.exports = [
  {
    "uuid": uuidv1(),
    "label": "Chumbawamba - I Get Knocked Down",
    "data": {},
    "group": "_default",
    "url": "/predefined/media/audio/chumbawamba_i_get_knocked_down.mp3",
    "extension": "mp3",
    "mime": "audio/mpeg",
    "size": 0,
    "content_type": "audio",
    "local_path": "/predefined/media/audio",
    "createdAt": "2021-04-06T14:33:51.644Z",
    "updatedAt": "2021-04-06T14:33:51.644Z"
  },
  {
    "uuid": uuidv1(),
    "label": "Seven Nation Army",
    "data": {},
    "group": "_default",
    "url": "/predefined/media/audio/seven_nation_army.mp3",
    "extension": "mp3",
    "mime": "audio/mpeg",
    "size": 0,
    "content_type": "audio",
    "local_path": "/predefined/media/audio",
    "createdAt": "2021-04-06T14:33:51.644Z",
    "updatedAt": "2021-04-06T14:33:51.644Z"
  }
];
