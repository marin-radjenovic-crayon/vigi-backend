const _ = require('lodash');

const getSingleDefaultHandler = require('../../_helpers/getSingle');
const setSingleDefaultHandler = require('../../_helpers/setSingle');

const initialData = require('./initialData');
const FnFeedsClass = require('../../../../src/controllers/feeds/opta/functions');
const MediaM = require('../../../models/media');
const { parse, format } = require('date-fns');

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
  await FeedInstance.setTeamSchedule();
  const { matchInfo, liveData } = await FeedInstance.getMatch().catch(err => {
    LOGGER.error(err, 'getMatch error')
  });

  const nextMatch = (
    await FeedInstance.getNextLeagueMatch().catch(err => {
      LOGGER.error(err, 'getNextLeagueMatch error')
    })
  )?.[0];

  const currentWeek = matchInfo?.week;
  const currentStage = matchInfo?.stage;
  const nextWeek = nextMatch?.matchInfo?.week;
  const nextStage = nextMatch?.matchInfo?.stage;

  let matches = [];
  let nextMatches = [];
  let matchDetails = null;

  if (currentWeek) {
    matches = await FeedInstance.getLiveMatches(currentWeek).catch(err => {
      LOGGER.error(err, 'getLiveMatches error')
    });
  } else if (currentStage) {
    matches = await FeedInstance.getLiveMatchesByStage(currentStage).catch(err => {
      LOGGER.error(err, 'getLiveMatchesByStage error')
    });

    const todayMatch = _.find(matches, m => {
      return _.get(m, 'matchInfo.id') === matchInfo?.id;
    });

    matchDetails = todayMatch?.liveData?.matchDetails;

    const currentLeg = matchDetails?.leg;
    const hasLeg = Boolean(matchDetails?.leg);

    if (hasLeg && currentLeg) {
      matches = matches.filter(m => {
        return parseInt(m?.liveData?.matchDetails?.leg) === parseInt(currentLeg);
      });
    }
  }

  let matchesToday = [];
  let upcomingMatches = [];

  const competitionConfig = _.find(MAINCONFIG?.feeds?.opta?.competitions, {
    competitionIdReal: matchInfo?.competition?.id
  });

  const competitionFormat = competitionConfig?.competitionFormat;

  if (competitionFormat === 'International cup') {
    matchesToday = matches.filter(m => {
      if (matchInfo.localDate) {
        const matchDate = parse(matchInfo.localDate, 'yyyy-MM-dd', new Date());
        const targetMatchDate = new Date();
        const formattedMatch = format(matchDate, 'dd-MM-yyyy');
        const formattedNow = format(targetMatchDate, 'dd-MM-yyyy');

        if (formattedMatch === formattedNow) {
          return true;
        }
      }
    });
  }

  if (matchesToday?.length === 0) {
    if (nextWeek) {
      nextMatches = await FeedInstance.getLiveMatches(nextWeek).catch(err => {
        LOGGER.error(err, 'getLiveMatches error')
      });
    } else if (nextStage) {
      nextMatches = await FeedInstance.getLiveMatchesByStage(nextStage).catch(err => {
        LOGGER.error(err, 'getLiveMatchesByStage error')
      });

      const todayMatch = _.find(nextMatches, m => {
        return _.get(m, 'matchInfo.id') === nextMatch?.matchInfo?.id;
      });

      matchDetails = todayMatch?.liveData?.matchDetails;

      const currentLeg = matchDetails?.leg;
      const hasLeg = Boolean(matchDetails?.leg);

      if (hasLeg && currentLeg) {
        nextMatches = nextMatches.filter(m => {
          return parseInt(m?.liveData?.matchDetails?.leg) === parseInt(currentLeg);
        });
      }
    }

    upcomingMatches = nextMatches.filter(m => {
      if (nextMatch?.matchInfo?.localDate) {
        const matchDate = parse(m.matchInfo.localDate, 'yyyy-MM-dd', new Date());
        const targetMatchDate = parse(nextMatch.matchInfo.localDate, 'yyyy-MM-dd', new Date());
        const formattedMatch = format(matchDate, 'dd-MM-yyyy');
        const formattedNow = format(targetMatchDate, 'dd-MM-yyyy');

        if (formattedMatch === formattedNow) {
          return true;
        }
      }
    });
  }

  let matchday = matchesToday?.length > 0 ? matchesToday : upcomingMatches;

  if (!matchday?.length) {
    matchday = [matches?.[matches?.length - 1]];
  }

  return {
    matchInfo,
    matchday,
    matchDetails,
    assets: {}
  };
};

module.exports = Template;
