const { getItem } = require('@/src/middleware/db');
const UpdaterM = require('@/src/models/updater');
const _ = require('lodash');
const async = require('async');
const TemplatesRecordsM = require('@/src/models/template_records');
const WcGoalClass = require('@/src/templates/worldcup/wc_goal');
const FcbGoalClass = require('@/src/templates/fcb/fcb_goal');
const BildGoalClass = require('@/src/templates/bild/bild_goal');
const FnFeedsClass = require('@/src/controllers/feeds/opta/functions');
const { CLIENTS } = require('@/src/constants/config');
const { germanBundelisgaId } = require('@/src/templates/bild/id');
const eventMapping = require('@/eventMapping');
const teamMapping = require('@/teamMapping');
const DYNAMIC_TEMPLATES = ['wc_goal', 'fcb_goal', 'bild_goal'];

const handleWcGoal = async params => {
  try {
    const { eventData } = params;


    const client = MAINCONFIG.client || 'womansworldcup';
    let goalInstance;

    if (client === CLIENTS.BILD) {
      const optaEvent = {
        eventId: eventMapping[eventData.eventId],
        selectedTeamId: teamMapping[eventData.selectedTeamId],
        competitionId: germanBundelisgaId // German bundesliga 2025/2026 season
      }

      const FeedInstance = new FnFeedsClass({
        target: {
          eventId: optaEvent.eventId,
          league: optaEvent.competitionId,
          teamId: optaEvent.selectedTeamId
        },
      });
      const goalEvents = await FeedInstance.getGoalsEvents().catch(err => {
        console.log('err', err);
      });
      if (!goalEvents?.length) {
        return Promise.resolve();
      }
      goalInstance = new BildGoalClass(); // should be different class
      await goalInstance
        .createDirectly({
          goalEvents,
          event: eventData
        })
        .catch(err => {
          LOGGER.error(err, 'createDirectly bildGoal failed');
        });

      return Promise.resolve();
    } else {
      const FeedInstance = new FnFeedsClass({
        target: {
          eventId: eventData.eventId,
          league: eventData.competitionId,
          teamId: eventData.selectedTeamId
        }
      });
      const goalEvents = await FeedInstance.getGoalsEvents().catch(err => {
        console.log('err', err);
      });
      if (!goalEvents?.length) {
        return Promise.resolve();
      }
      if (client === CLIENTS.FCB) {
        goalInstance = new FcbGoalClass();
      } else if (client === CLIENTS.BILD) {
        goalInstance = new BildGoalClass(); // should be different class
      } else {
        goalInstance = new WcGoalClass();
      }
      await goalInstance
        .createDirectly({
          goalEvents,
          event: eventData
        })
        .catch(err => {
          LOGGER.error(err, 'createDirectly bildGoal failed');
        });

      return Promise.resolve();
    }




  } catch (err) {
    LOGGER.error(err, 'Error fetching feed data');
    return Promise.reject(err);
  }
};

module.exports = {
  DYNAMIC_TEMPLATES,
  handleWcGoal
};
