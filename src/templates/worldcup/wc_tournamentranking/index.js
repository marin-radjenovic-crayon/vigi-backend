const TemplatesRecordsM = require('../../../models/template_records');
const { getItem, checkQueryString, getItems, getItemsPure } = require('../../../middleware/db');
const _ = require('lodash');

const { format, compareAsc } = require('date-fns');
const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
const MediaM = require('../../../models/media');

/**
 * Get all items function called by route
 */

function Template(req, res) {
  this.template = req.params.template;
  this.uuid = req.params.uuid;
  this.templateconf = _.find(MAINCONFIG.templates, { name: this.template });
  this.res = res;
  this.req = req;
}

// the start method
Template.prototype.getSingle = async function () {
  await getSingleDefaultHandler.call(this, {
    initialData
  });
};

// the start method
Template.prototype.setSingle = async function () {
  await setSingleDefaultHandler.call(this, {
    initialData
  });
};

Template.prototype.getDynamicData = async function (baseData) {
  const event = _.get(baseData, 'event');
  const FeedInstance = new FnFeedsClass({
    target: {
      eventId: event.eventId,
      league: event.competitionId,
      teamId: event.selectedTeamId
    }
  });

  const rankingTarget = _.find(baseData.data.fields, { id: 'target' })?.value;
  const rankingType = _.find(baseData.data.fields, { id: `ranking${_.capitalize(rankingTarget)}Type` })?.value;

  const teamRankings = {
    goals: {
      rankStatType: ['total goals', 'total scoring att'],
      additionalStats: ['total scoring att', 'total goals'],
      calcStats: ['total games']
    },
    passquote: {
      rankStatType: ['total pass pct', 'total pass'],
      additionalStats: ['total pass', 'total pass pct'],
      calcStats: ['total games']
    }
  };

  const playerRankings = {
    goals: {
      rankStatType: ['total goals', 'total scoring att'],
      additionalStats: ['total scoring att', 'total goals'],
      calcStats: ['total games']
    },
    assists: {
      rankStatType: ['total assists', 'total att assist'],
      additionalStats: ['total att assist', 'total assists'],
      calcStats: ['total games']
    },
    saves: {
      rankStatType: ['total saves', 'total goals conceded'],
      additionalStats: ['total games', 'total goals conceded', 'total saves'],
      calcStats: ['total games']
    },
    cleanSheet: {
      rankStatType: ['total clean sheet ranking'],
      additionalStats: ['total games', 'total goals conceded', 'total clean sheet'],
      calcStats: ['total games']
    },
    totalpoints: {
      sumTypes: true,
      rankStatType: ['total goals', 'total assists'],
      additionalStats: ['total goals', 'total assists', 'total_points'],
      calcStats: ['total games']
    }
  };

  let rankingData;
  let result = {};

  if (rankingTarget === 'player') {
    rankingData = playerRankings[rankingType];
    if (rankingType === ('cleanSheet' || 'saves')) {
      result.playerRanking = await FeedInstance.getTopGoalkeepers(
        rankingData.rankStatType,
        rankingData.additionalStats,
        rankingData.calcStats,
        rankingData.sumTypes,
        5,
      ).catch(err => console.log('err', err));
    } else {
      result.playerRanking = await FeedInstance.getTournamentPlayerRanking(
        rankingData.rankStatType,
        rankingData.additionalStats,
        rankingData.calcStats,
        rankingData.sumTypes,
        5,
      ).catch(err => console.log('err', err));
    }
  }

  if (rankingTarget === 'team') {
    rankingData = teamRankings[rankingType];
    result.teamRanking = await FeedInstance.getTournamentTeamRanking(
      rankingData.rankStatType,
      rankingData.additionalStats,
      rankingData.calcStats
    ).catch(err => console.log('err', err));
  }

  const { matchInfo, liveData } = await FeedInstance.getMatch().catch(err => console.log('err', err));

  result.matchInfo = matchInfo;

  return {
    ...result,
    assets: {}
  };
};

module.exports = Template;
