const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

const collection = 'setup';

const Schema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      index: true
    },
    name: {
      type: String,
      required: true,
      index: true
    },
    data: {
      type: Object
    }
  },
  {
    versionKey: false,
    timestamps: true,
    collection
  }
);

Schema.index(
  {
    name: 1,
    id: 1
  },
  { unique: true }
);

// Schema.plugin(mongoosePaginate);

const Model = mongoose.model(collection, Schema);

// const preloadData = async ()=> {
//   await Model.bulkWrite([ {
//     insertOne: {
//       document: {
//         id: 1,
//         name: "General",
//         data: {
//           "videoServer": "http://videoserver",
//           "templates": [
//             {
//               "name": "playerfacts",
//               "label": "Player Facts",
//               "active" : true,
//               "formats": [
//                 "1920x1080"
//               ]
//             },
//             {
//               "name": "teamfacts",
//               "label": "Team Facts",
//               "active" : true,
//               "formats": [
//                 "1920x1080"
//               ]
//             },
//             {
//               "name": "playerstats",
//               "label": "Player Stats",
//               "active" : true,
//               "formats": [
//                 "1920x1080"
//               ]
//             },
//             {
//               "name": "playercompare",
//               "label": "Player Compare",
//               "active" : true,
//               "formats": [
//                 "1920x1080"
//               ]
//             },
//             {
//               "name": "teamcompare",
//               "label": "Team Compare",
//               "active" : true,
//               "formats": [
//                 "1920x1080"
//               ]
//             }
//           ],
//           "mediaLibrary": {
//             "groups": {
//               "image": {
//                 "_default": {
//                   "id": "_default",
//                   "name": "_default",
//                   "label": "All",
//                   "type": "images",
//                   "fields": [
//                     {
//                       "name": "name",
//                       "label": "Name",
//                       "type": "text"
//                     }
//                   ]
//                 },
//                 "players": {
//                   "id": "0001",
//                   "name": "players",
//                   "label": "Players",
//                   "type": "images",
//                   "fields": [
//                     {
//                       "name": "id",
//                       "label": "ID",
//                       "type": "text"
//                     },
//                     {
//                       "name": "firstname",
//                       "label": "Firstname",
//                       "type": "text"
//                     },
//                     {
//                       "name": "lastname",
//                       "label": "Lastname",
//                       "type": "text"
//                     },
//                     {
//                       "name": "position",
//                       "label": "Position",
//                       "type": "text"
//                     },
//                     {
//                       "name": "shirtNumber",
//                       "label": "Shirt",
//                       "type": "text"
//                     }
//                   ]
//                 },
//                 "backgrounds": {
//                   "id": "0002",
//                   "name": "backgrounds",
//                   "label": "Backgrounds",
//                   "type": "images",
//                   "fields": [
//                     {
//                       "name": "name",
//                       "label": "Name",
//                       "type": "text"
//                     }
//                   ]
//                 }
//               },
//               "video": {
//                 "_default": {
//                   "id": "_default",
//                   "name": "_default",
//                   "label": "All",
//                   "type": "video",
//                   "fields": [
//                     {
//                       "name": "name",
//                       "label": "Name",
//                       "type": "text"
//                     }
//                   ]
//                 }
//               }
//             }
//           },
//           "templateaudio": "",
//           "timelineaudio": "",
//           "addSoundToTemplate": "false",
//           "addSoundToTimeline": "false",
//           "design": {
//             "defaultColor1": "#00FDFF",
//             "defaultColor2": "#919191",
//             "defaultBackground": "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs="
//           }
//         }
//       }
//     }
//   }]).catch((err)=> {
//     if(err.code !== 11000) {
//       console.log("err", err);
//     }
//   })
// };

// preloadData();

module.exports = Model;
