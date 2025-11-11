const { matchedData } = require('express-validator');
const { getAllItemsFromDB } = require('./helpers');
const { getItem, checkQueryString, getItems } = require('../../middleware/db');
const { handleError } = require('../../middleware/utils');

const _ = require('lodash');
const fs = require("fs");

const SetupM = require('../../models/setup');

const EventsHelper = require('./helpers');

const { manualData, delData, optaData, heimSpielData } = EventsHelper;
const config = require('../../config');
const getUserEvent = require('../functions/getUserEvent');
const { CLIENTS } = require('@/src/constants/config');


// normalization helper
function teamNormalize(str) {
  return str
    .toLowerCase()
    .replace(/[.\u0308]/g, '') // remove dots, umlaut marks
    .replace('munchen', 'bayern')
    .replace('frankfurt', 'e. frankfurt')
    .replace('werder', 'bremen')
    .trim();
}

function buildEventMappings(optaMatches, otherMatches, teamMapping) {
  const eventMapping = {};

  optaMatches.forEach(optaMatch => {
    otherMatches.forEach(otherMatch => {
      const mappedHomeOpta = teamMapping[otherMatch.home.id];
      const mappedAwayOpta = teamMapping[otherMatch.away.id];

      if (
        mappedHomeOpta === optaMatch.home.id &&
        mappedAwayOpta === optaMatch.away.id
      ) {
        eventMapping[otherMatch.eventId] = optaMatch.eventId;
      }
    });
  });

  return eventMapping;
}
/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getEvents = async (req, res) => {
  try {
    let setupEvent = await getUserEvent(req);
    setupEvent = setupEvent.data;
    const setupFeedType = _.get(setupEvent, 'data.event.feedType', 'opta');
    const setupCid = _.get(setupEvent, 'data.event.competitionId', null);
    const setupTid = _.get(setupEvent, 'data.event.selectedTeamId', null);
    const setupMid = _.get(setupEvent, 'data.event.eventId', null);

    // console.log('setupMid', setupMid);
    // console.log('setupTid', setupTid);
    // console.log('setupCid', setupCid);

    let feedType = _.get(req.params, 'feedType', null);
    let cid = _.get(req.params, 'cid', null);
    let tid = _.get(req.params, 'tid', null);
    let mid = _.get(req.params, 'mid', null);

    if (_.isNull(cid) && _.isNull(tid) && _.isNull(mid)) {
      cid = setupCid;
      tid = setupTid;
      mid = setupMid;
    }

    if (_.isNull(feedType)) {
      feedType = setupFeedType;
    }

    let output = {};
    const client = MAINCONFIG.client || 'womansworldcup';

    if (feedType === 'del') {
      output = {
        competitions: await delData.getCompetitions(),
        teams: await delData.getTeams({ cid }),
        matches: await delData.getMatches({
          cid,
          tid
        }),
        match: await delData.getMatch({
          cid,
          tid,
          mid
        })
      };
    } else if (feedType === 'opta') {
      if (cid === 'transfermarkt') {
        const match = {
          eventId: '7ten3jlwsp2sobjrs6i1e579w',
          competitionId: 'transfermarkt',
          competitionName: 'Transfermarkt',
          date: '01.01.2024',
          time: '21:00',
          start_date: null,
          real_end_date: null,
          stadion: null,
          season: '2022',
          round: '15',
          home: {
            name: '-',
            id: 'custom',
            shortcut: 'ANT'
          },
          away: {
            name: '-',
            id: 'custom',
            shortcut: 'AEK'
          },
          score: {
            home: 0,
            away: 0
          },
          actual_time_name: null,
          actual_time_alias: null,
          status: null,
          results: null,
          teamId: 'custom',
          _matchDateUtc: '2024-08-01Z'
        };

        const matches = [match];

        output = {
          competitions: await optaData.getCompetitions(),
          teams: [
            {
              shortcut: 'Custom',
              name: 'Custom',
              id: 'custom',
              logo: undefined,
              code: 'CST'
            }
          ],
          matches,
          match: {
            ...match,
            feedType
          }
        };
      } else {
        const matches = await optaData.getMatches({
          cid,
          tid
        });

        const match = await optaData.getMatch(
          {
            cid,
            tid,
            mid
          },
          matches
        );

        output = {
          competitions: await optaData.getCompetitions(),
          teams: await optaData.getTeams({ cid }),
          matches,
          match: {
            ...match,
            feedType
          }
        };
      }
    } else if (feedType === 'heimspiel') {
      // check client 
      if (client === CLIENTS.BILD) {
        const competitions = await heimSpielData.getBildCompetition();

        const competition = competitions.filter((c) => c.competitionId !== "0")?.[0];
        const { current_season_id, current_round_id, optaCompetitionId, optaTournamentCalendarId } = competition;

        const { teams, matches } = await heimSpielData.getBildTeams(current_season_id, current_round_id, tid);

        /*
        * Start of syncing opta team and event mapping
        */

        // const optaCompetitions = await optaData.getCompetitions();
        // const optaCompetition = optaCompetitions.find((c) => c.competitionId === optaTournamentCalendarId && c.competitionIdReal === optaCompetitionId);
        // const optaTeams = await optaData.getTeams({ cid: optaTournamentCalendarId });
        // const { allMatches } = await heimSpielData.getBildTeams(current_season_id, current_round_id);
        // build team mapping
        // const teamMapping = {};

        // teams.forEach(obj1 => {
        //   const norm1 = teamNormalize(obj1.shortname);

        //   const match = optaTeams.find(obj2 => {
        //     const norm2 = teamNormalize(obj2.shortcut);
        //     return norm1.includes(norm2) || norm2.includes(norm1);
        //   });

        //   if (match) {
        //     teamMapping[obj1.id] = match.id;
        //   }
        // });

        // fs.writeFileSync(
        //   "teamMapping.js",
        //   `const teamMapping = ${JSON.stringify(teamMapping, null, 2)};\n\nmodule.exports = teamMapping;`
        // );

        // // --- build event mapping for ALL teams ---
        // let eventMapping = {};

        // for (const bildTeamId of Object.keys(teamMapping)) {
        //   const optaTid = teamMapping[bildTeamId];

        //   // fetch matches for this Opta team
        //   const optaMatches = await optaData.getMatches({
        //     cid: optaTournamentCalendarId,
        //     tid: optaTid
        //   });

        //   // build mapping for this team
        //   const mapping = buildEventMappings(optaMatches, allMatches, teamMapping);
        //   // merge into global eventMapping
        //   eventMapping = { ...eventMapping, ...mapping };
        // }
        // // write to file
        // fs.writeFileSync(
        //   "eventMapping.js",
        //   `const eventMapping = ${JSON.stringify(eventMapping, null, 2)};\n\nmodule.exports = eventMapping;`
        // );

        /*
        * End of syncing opta team and event mapping
        */

        // TODO: 
        // How to do player mapping ???

        output = {
          competitions: competitions,
          teams: teams,
          matches: matches
        }
      } else {
        output = {
          competitions: await heimSpielData.getCompetitions(),
          teams: await heimSpielData.getTeams({ cid }),
          matches: [],
          match: setupEvent.data?.data?.event
        };
      }

    } else {
      output = {
        competitions: manualData.getCompetitions(),
        teams: manualData.getTeams({ cid }),
        matches: manualData.getMatches({
          cid,
          tid
        }),
        match: manualData.getMatch({
          cid,
          tid,
          mid
        })
      };
    }

    let globalCompetition = {
      "competitionName": "  Global Competition",
      "name": "  Global Competition",
      "knownName": "  Global Competition",
      "competitionId": "0",
      "id": "0"
    }
    let exists = output.competitions.some(obj => obj.name === "  Global Competition");
    if (!exists && client !== CLIENTS.BILD) {
      // Adds the global competition at the beginning
      output.competitions.unshift(globalCompetition);
    }

    let globalTeam = {
      "shortcut": "  Global Team",
      "name": "  Global Team",
      "id": "0",
      "code": "  Global Team"
    }
    // Adds the global team at the beginning
    output.teams.unshift(globalTeam);

    const findCompetition = _.find(output?.competitions, { competitionId: cid });

    let globalMatch = {
      "eventId": "0",
      "competitionId": findCompetition?.competitionId, //tournament calendar id
      "competitionName": `  ${findCompetition?.name}`,
      "date": "00.00.0000",
      "time": "00:00",
      "home": {
        "name": "  Global Match T1",
        "id": "0",
        "shortcut": ""
      },
      "away": {
        "name": "  Global Match T2",
        "id": "0",
        "shortcut": ""
      },
      "score": {
        "home": 0,
        "away": 0
      },
      "teamId": tid || "0",
      "_matchDateUtc": "0000-00-00Z"
    }
    // Adds the global match at the beginning
    output.matches.unshift(globalMatch);

    res.status(200).json(output);
  } catch (error) {
    handleError(res, error);
  }
};



/**
 * Get item function called by route
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const syncOpta = async (req, res) => {
  try {

    const competitions = await heimSpielData.getBildCompetition();

    const competition = competitions.filter((c) => c.competitionId !== "0")?.[0];
    const { current_season_id, current_round_id, optaCompetitionId, optaTournamentCalendarId } = competition;

    const { teams, matches } = await heimSpielData.getBildTeams(current_season_id, current_round_id, tid);


    const optaCompetitions = await optaData.getCompetitions();
    const optaCompetition = optaCompetitions.find((c) => c.competitionId === optaTournamentCalendarId && c.competitionIdReal === optaCompetitionId);
    const optaTeams = await optaData.getTeams({ cid: optaTournamentCalendarId });
    const { allMatches } = await heimSpielData.getBildTeams(current_season_id, current_round_id);
    // build team mapping
    const teamMapping = {};

    teams.forEach(obj1 => {
      const norm1 = teamNormalize(obj1.shortname);

      const match = optaTeams.find(obj2 => {
        const norm2 = teamNormalize(obj2.shortcut);
        return norm1.includes(norm2) || norm2.includes(norm1);
      });

      if (match) {
        teamMapping[obj1.id] = match.id;
      }
    });

    fs.writeFileSync(
      "teamMapping.js",
      `const teamMapping = ${JSON.stringify(teamMapping, null, 2)};\n\nmodule.exports = teamMapping;`
    );

    // --- build event mapping for ALL teams ---
    let eventMapping = {};

    for (const bildTeamId of Object.keys(teamMapping)) {
      const optaTid = teamMapping[bildTeamId];

      // fetch matches for this Opta team
      const optaMatches = await optaData.getMatches({
        cid: optaTournamentCalendarId,
        tid: optaTid
      });

      // build mapping for this team
      const mapping = buildEventMappings(optaMatches, allMatches, teamMapping);
      // merge into global eventMapping
      eventMapping = { ...eventMapping, ...mapping };
    }
    // write to file
    fs.writeFileSync(
      "eventMapping.js",
      `const eventMapping = ${JSON.stringify(eventMapping, null, 2)};\n\nmodule.exports = eventMapping;`
    );

    /*
    * End of syncing opta team and event mapping
    */

    // TODO: 
    // How to do player mapping ???

  } catch (error) {
    handleError(res, error);
  }
};

module.exports = {
  getEvents,
  syncOpta
};
