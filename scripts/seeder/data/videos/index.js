const faker = require('faker');

const json = [
  {
    "type": "template",
    "status": "sent",
    "uuid": "TEST-VIDEO-0001",
    "template_uuid": "0001",
    "name": "Player Facts (04.06)",
    "data": {"worker": "bvr1", "webhook": "http://localhost:8100/v1/videos"},
    "season": "2021",
    "event": {
      "selectedTeamId": "11",
      "competitionId": "1",
      "competitionName": "Bundesliga",
      "type": "match",
      "homeTeamId": "11",
      "awayTeamId": "20",
      "side": "home",
      "eventId": "1000",
      "dateObj": "202130203023"
    },
    "format": "1920x1080",
    "createdAt": "2021-06-12T15:32:30.874Z",
    "updatedAt": "2021-06-12T15:32:30.874Z"
  },
  {
    "type": "timeline",
    "status": "sent",
    "uuid": "TEST-VIDEO-0002",
    "timeline_uuid": "1000",
    "name": "Player Facts (05.06)",
    "data": {"worker": "bvr1", "webhook": "http://localhost:8100/v1/videos"},
    "season": "2021",
    "event": {
      "selectedTeamId": "11",
      "competitionId": "1",
      "competitionName": "Bundesliga",
      "type": "match",
      "homeTeamId": "11",
      "awayTeamId": "20",
      "side": "home",
      "eventId": "1000",
      "dateObj": "202130203023"
    },
    "format": "1920x1080",
    "createdAt": "2021-07-12T15:32:30.874Z",
    "updatedAt": "2021-07-12T15:32:30.874Z"
  },
  {
    "type": "timeline",
    "status": "sent",
    "uuid": "TEST-VIDEO-1000",
    "timeline_uuid": "1000",
    "name": "Player Facts (05.06)",
    "data": {"worker": "bvr1", "webhook": "http://localhost:8100/v1/videos"},
    "season": "2020",
    "event": {
      "selectedTeamId": "11",
      "competitionId": "1",
      "competitionName": "Bundesliga",
      "type": "match",
      "homeTeamId": "11",
      "awayTeamId": "20",
      "side": "home",
      "eventId": "1000",
      "dateObj": "202130203023"
    },
    "format": "1920x1080",
    "createdAt": "2021-07-12T15:32:30.874Z",
    "updatedAt": "2021-07-12T15:32:30.874Z"
  },
  {
    "type": "timeline",
    "status": "sent",
    "uuid": "TEST-VIDEO-2000",
    "timeline_uuid": "2000",
    "name": "Player Facts (06.06)",
    "data": {"worker": "bvr1", "webhook": "http://localhost:8100/v1/videos"},
    "season": "2020",
    "event": {
      "selectedTeamId": "11",
      "competitionId": "1",
      "competitionName": "Bundesliga",
      "type": "match",
      "homeTeamId": "11",
      "awayTeamId": "20",
      "side": "home",
      "eventId": "1000",
      "dateObj": "202130203023"
    },
    "format": "1920x1080",
    "createdAt": "2021-07-12T15:32:30.874Z",
    "updatedAt": "2021-07-12T15:32:30.874Z"
  }
];

module.exports = json;
