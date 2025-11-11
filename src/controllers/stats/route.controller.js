const path = require('path');
const { isIDGood, handleError } = require('../../middleware/utils');
const { getItem, checkQueryString, getItems } = require('../../middleware/db');
const TemplatesRecordsM = require('../../models/template_records');
const TimelineRecordsM = require('../../models/timeline_records');
const { saveSingleTemplate } = require('../templates');

const { v4: uuidv4 } = require('uuid');
const async = require('async');
const _ = require('lodash');
const cfg = require('../../config');
const SetupM = require('../../models/setup');
const FnFeedsClass = require('../feeds/opta/functions');
const FnFeedsClassAdler = require('../feeds/del/functions');
const { format, parse, parseISO, differenceInMinutes } = require('date-fns');

const { de } = require('date-fns/locale');
const { competitionId, matchdayTimelines } = require('../../config');
const { create } = require('../videos/create');
const config = require('@/src/config');
const {
  buildSearchCriteria,
  parseCompetitionConfig,
  getDefaultCompetitionFallback
} = require('@/src/controllers/actions/helpers');
const {
  prepareMatchdayPureAdler,
  prepareMatchdayPure,
  createTemplate,
  syncMatchdayTimelinePureAdler,
  syncMatchdayTimelinePure
} = require('@/src/controllers/actions/handleTemplate');
const { processMatchVideos } = require('@/src/controllers/vod/perform-stats');
const getUserEvent = require('../functions/getUserEvent');
const { getItemsPure } = require('@/src/middleware/db');
const { STATIC_TEMPLATES_PERFORMSTATS } = require('@/src/constants/templates');
const { CLIENTS } = require('@/src/constants/config');
const { CALL_SAVE_TYPES } = require('@/src/constants/common');
const {redis} = require("@/src/redis/connector");

/**
 * getOptaCalls
 * @param {Object} req - request object
 * @param {Object} res - response object
 */
const getOptaAndVodCalls = async (req, res) => {
  try {
    const { type = 'opta' } = req.query; // Default to 'opta' if no type is provided

    // Patterns based on type
    const axiosCallsPattern = type === 'vod' ? 'stats:axios:vod_calls:*' : 'stats:axios:opta_calls:*';
    const detailedCallsPattern = 'stats:axios:calls:*';

    const [axiosKeys, detailedKeys] = await Promise.all([
      new Promise((resolve) => {
        redis.keys(axiosCallsPattern, (err, keys) => (err ? resolve([]) : resolve(keys)));
      }),
      new Promise((resolve) => {
        redis.keys(detailedCallsPattern, (err, keys) => (err ? resolve([]) : resolve(keys)));
      }),
    ]);

    // Process axios stats for totals
    const axiosStats = await Promise.all(
      axiosKeys.slice(-186).map(
        (key) =>
          new Promise((resolve) =>
            redis.get(key, (err, value) => {
              if (err) resolve(null);
              resolve({ key, value: parseInt(value, 10) || 0 });
            })
          )
      )
    );

    const formattedAxiosStats = axiosStats
      .filter(Boolean)
      .map(({ key, value }) => ({
        date: key.split(':').pop(), // Extract date from key
        value,
      }))
      .sort((a, b) => new Date(a.date) - new Date(b.date));

    // Calculate monthly totals for all identifiers combined
    const monthlyTotals = formattedAxiosStats.reduce((acc, { date, value }) => {
      const month = date.slice(0, 7); // Extract YYYY-MM from the date
      if (!acc[month]) {
        acc[month] = 0;
      }
      acc[month] += value;
      return acc;
    }, {});

    const monthlyTotalsArray = Object.entries(monthlyTotals).map(([month, value]) => ({
      month,
      value,
    }));

    // Filter detailed stats based on type
    const filteredDetailedKeys = detailedKeys.filter((key) => {
      if (type === 'vod') {
        return key.includes('vod:');
      }
      return !key.includes('vod:'); // Default to Opta calls
    });

    // Process detailed stats for grouping by identifier
    const detailedStats = await Promise.all(
      filteredDetailedKeys.map(
        (key) =>
          new Promise((resolve) =>
            redis.get(key, (err, value) => {
              if (err) resolve(null);
              resolve({ key, value: parseInt(value, 10) || 0 });
            })
          )
      )
    );

    const detailedGrouped = detailedStats
      .filter(Boolean)
      .map(({ key, value }) => {
        const parts = key.split(':');
        const identifierPath = parts.slice(3, -1).join(':'); // Extract full identifier path
        const date = parts[parts.length - 1]; // Extract date part
        return { identifier: identifierPath, date, value };
      })
      .reduce((acc, { identifier, date, value }) => {
        if (!acc[identifier]) {
          acc[identifier] = { total: 0, daily: [], monthly: {} };
        }
        acc[identifier].total += value;

        // Ensure proper daily grouping by date
        const existingDate = acc[identifier].daily.find((entry) => entry.date === date);
        if (existingDate) {
          existingDate.value += value;
        } else {
          acc[identifier].daily.push({ date, value });
        }

        // Calculate monthly totals for identifier
        const month = date.slice(0, 7); // Extract YYYY-MM from the date
        if (!acc[identifier].monthly[month]) {
          acc[identifier].monthly[month] = 0;
        }
        acc[identifier].monthly[month] += value;

        return acc;
      }, {});

    const groupedDetails = Object.entries(detailedGrouped).map(([identifier, data]) => ({
      identifier,
      total: data.total,
      daily: data.daily.sort((a, b) => new Date(a.date) - new Date(b.date)),
      monthly: Object.entries(data.monthly).map(([month, value]) => ({ month, value })),
    }));

    // Return consistent response for both VOD and Opta calls
    res.send({
      totals: formattedAxiosStats, // Keep totals untouched
      monthlyTotals: monthlyTotalsArray, // Add combined monthly totals
      detailed: {
        axiosStats: formattedAxiosStats, // Return the same axios stats
        groupedByIdentifier: groupedDetails, // Processed grouped data
      },
    });
  } catch (error) {
    LOGGER.error(error, 'stats->getCalls %o');
    const message = new Error(`stats->getCalls error ${error.message}`);
    handleError(res, message);
  }
};


module.exports = {
  getOptaAndVodCalls
};
