const { getAllItemsFromDB } = require('./getAllItemsFromDB');
const TemplatesRecordsM = require('../../../models/template_records');
const _ = require('lodash');

async function timelineTemplateDataCheck(template) {
  const typesWithDirectCheck = [
    'wc_lineup',
    'wc_lineuptactics',
    'wc_nextgame',
    'wc_teamcompare',
    'wc_teamcompare_season',
    'wc_goalshots',
    'wc_standings',
    'wc_goal',
    'wc_lastgames',
    'wc_goal_overview',
    'wc_tournamentranking',
    'wc_playercompare',
    'wc_playercompare_season',
    'wc_seasongroupoverview',
    'wc_seasontotals',
    'wc_attacking_zones',
    'wc_hotzone',
    'wc_mvp',
    'wc_heatmap',
    'bild_heatmap',
    'bild_attacking_zones',
    'bild_mvp',
    'bild_goalshots',
    'bild_goal',
    'bild_hotzone',
    'bild_lineuptactics',
    'bild_lastgames',
    'bild_playercompare_season',
    'bild_teamcompare_season'
  ];

  if (!typesWithDirectCheck.includes(template?.template)) {
    return true; // If type doesn't require DB check, return true immediately
  }

  try {
    const data = await TemplatesRecordsM.findOne({ uuid: template.templateId }, null, { lean: true });
    if (!data) {
      return false;
    } // Handle no data found case

    switch (template?.template) {
      case 'wc_goalshots': {
        const goalShots = _.get(data, 'data.dynamic.goalShots', []);
        const side = _.get(data, 'data.fields', []).find(field => field.id === 'selectedSide')?.value;
        const selectedContestant = _.get(data, 'data.dynamic.matchInfo.contestant', []).find(
          contestant => contestant.position === side
        )?.id;
        return goalShots.some(e => selectedContestant === e?.contestantId);
      }
      case 'wc_goal': {
        const goalReplay = _.get(data, 'data.dynamic.goalData', null);
        return Boolean(goalReplay) && goalReplay?.length > 0;
      }
      case 'fcb_goal': {
        const goalReplay = _.get(data, 'data.dynamic.goalData', null);
        return Boolean(goalReplay) && goalReplay?.length > 0;
      }
      case 'wc_attacking_zones': {
        const zones = _.get(data, 'data.dynamic.attackingZones', null);
        return Boolean(zones) && (zones?.centralZone > 0 || zones?.leftZone > 0 || zones?.rightZone > 0);
      }
      case 'wc_hotzone': {
        const goalShots = _.get(data, 'data.dynamic.goalShots', []);
        const side = _.get(data, 'data.fields', []).find(field => field.id === 'selectedSide')?.value;
        const selectedContestant = _.get(data, 'data.dynamic.matchInfo.contestant', []).find(
          contestant => contestant.position === side
        )?.id;
        return goalShots.some(e => selectedContestant === e?.contestantId);
      }
      case 'wc_mvp': {
        const mvp = _.get(data, 'data.dynamic.mvp', null);
        return Boolean(mvp);
      }
      case 'wc_tournamentranking': {
        const rankingTarget = _.find(_.get(data, 'data.fields', []), { id: 'target' })?.value;
        const ranking =
          rankingTarget === 'player'
            ? _.get(data, 'data.dynamic.playerRanking', [])
            : _.get(data, 'data.dynamic.teamRanking', []);
        return Boolean(ranking) && ranking?.length > 0;
      }
      case 'wc_lineup':
      case 'wc_lineuptactics': {
        return _.get(data, 'data.dynamic.lineup', []).length > 0;
      }
      case 'wc_nextgame': {
        return Boolean(_.get(data, 'data.dynamic.nextGame.homeContestantId'));
      }
      case 'wc_seasontotals': {
        return Boolean(_.get(data, 'data.dynamic.seasonTotals', null));
      }
      case 'wc_seasongroupoverview': {
        return !_.isEmpty(_.get(data, 'data.dynamic.groupStage', {}));
      }
      case 'wc_lastgames': {
        const lastGames = _.get(data, 'data.dynamic.lastGames', []);
        return lastGames.length > 0;
      }
      case 'wc_standings': {
        const competitionFormat = _.get(data, 'data.dynamic.matchInfo.competition.competitionFormat');
        if (competitionFormat === 'International cup') {
          const stage = _.get(data, 'data.dynamic.matchInfo.stage.name', 'Regular Season');
          if (stage === 'Regular Season') {
            return true;
          }
          return false;
        } else {
          return true;
        }
      }
      case 'wc_teamcompare': {
        return Boolean(_.get(data, 'data.dynamic.matchStats.liveData.lineUp.0.stat'));
      }
      case 'wc_playercompare_season': {
        return Boolean(!_.isEmpty(_.get(data, 'data.dynamic.playerCompare.home')));
      }
      case 'wc_playercompare': {
        return Boolean(!_.isEmpty(_.get(data, 'data.dynamic.playerCompare')));
      }
      case 'wc_teamcompare_season': {
        const totalPassesHome =
          _.find(_.get(data, 'data.dynamic.teamCompare.home', []), { name: 'Total Passes' })?.value || 0;
        const totalPassesAway =
          _.find(_.get(data, 'data.dynamic.teamCompare.away', []), { name: 'Total Passes' })?.value || 0;
        return totalPassesHome > 0 || totalPassesAway > 0;
      }
      // case 'staticmedia': {
      //   return Boolean(data);
      // }
      case 'wc_goal_overview': {
        const goalShots = _.get(data, 'data.dynamic.goalShots', []);
        const goals = goalShots?.filter(({ typeId }) => typeId === 16);
        return Boolean(goals?.length > 0);
      }
      case 'wc_heatmap': {
        return _.get(data, 'data.dynamic.heatmap', []).length > 0;
      }
      case 'bild_heatmap': {
        return _.get(data, 'data.dynamic.heatmap', []).length > 0;
      }
      case 'bild_lineuptactics': {
        const formation = _.get(data, 'data.dynamic.formation', null);
        const lines = _.get(data, 'data.dynamic.lines', null);
        return formation && lines;
      }
      case 'bild_lastgames': {
        const lastGames = _.get(data, 'data.dynamic.lastGames', []);
        return lastGames.length > 0;
      }
      case 'bild_hotzone': {
        const goalShots = _.get(data, 'data.dynamic.goalShots', []);
        const side = _.get(data, 'data.fields', []).find(field => field.id === 'selectedSide')?.value;
        const selectedContestant = _.get(data, 'data.dynamic.optaMatchInfo.contestant', []).find(
          contestant => contestant.position === side
        )?.id;
        return goalShots.some(e => selectedContestant === e?.contestantId);
      }
      case 'bild_mvp': {
        const mvp = _.get(data, 'data.dynamic.mvp', null);
        return Boolean(mvp);
      }
      case 'bild_goalshots': {
        const goalShots = _.get(data, 'data.dynamic.goalShots', []);
        const side = _.get(data, 'data.fields', []).find(field => field.id === 'selectedSide')?.value;
        const selectedContestant = _.get(data, 'data.dynamic.optaMatchInfo.contestant', []).find(
          contestant => contestant.position === side
        )?.id;
        return goalShots.some(e => selectedContestant === e?.contestantId);
      }
      case 'bild_goal': {
        const goalReplay = _.get(data, 'data.dynamic.goalData', null);
        return Boolean(goalReplay) && goalReplay?.length > 0;
      }
      case 'bild_attacking_zones': {
        const zones = _.get(data, 'data.dynamic.attackingZones', null);
        return Boolean(zones) && (zones?.centralZone > 0 || zones?.leftZone > 0 || zones?.rightZone > 0);
      }
      case 'bild_playercompare_season': {
        const homeTopPlayer = _.get(data, 'data.dynamic.homeTopPlayer', null);
        const awayTopPlayer = _.get(data, 'data.dynamic.awayTopPlayer', null);
        const hPId = _.get(homeTopPlayer, 'person.id', null)
        const aPId = _.get(awayTopPlayer, 'person.id', null)
        return Boolean(hPId) && Boolean(aPId);
      }
      case 'bild_teamcompare_season': {
        const homeTopPlayer = _.get(data, 'data.dynamic.homeTeamSeason', null);
        const awayTopPlayer = _.get(data, 'data.dynamic.awayTeamSeason', null);
        const hPId = _.get(homeTopPlayer, 'shots', null)
        const aPId = _.get(awayTopPlayer, 'shots', null)
        return Boolean(hPId) && Boolean(aPId);
      }
      case 'fcb_heatmap': {
        return _.get(data, 'data.dynamic.heatmap', []).length > 0;
      }
      default:
        return true;
    }
  } catch (err) {
    LOGGER.error(`get template->isExist catch ${template.template}: %o`, err);
    return false;
  }
}

module.exports = {
  getAllItemsFromDB,
  timelineTemplateDataCheck
};
