const _ = require('lodash');
const axios = require('axios');
const config = require('../../../config');
const tokenManager = require('@/src/lib/0auth');
const { redis } = require('../../../redis/connector');
const { format, parse } = require('date-fns');
const { processPerformCallsStats } = require('@/src/controllers/feeds/heimspiel/stats');
const FeedsDataM = require('@/src/models/feeds_data');
const {
  generateUrlHash,
  findMostRecentLastUpdatedAt,
  findMostRecentDateByPath
} = require('@/src/controllers/feeds/opta/helpers');
const { prepareMatchIsoString } = require("@/src/controllers/actions/helpers");
const { zonedTimeToUtc } = require('date-fns-tz');

// Build a Date from Heimspiel's match_date + match_time 
const parseHeimspielDateTime = (dateStr, timeStr) => {
  if (!dateStr || !timeStr) return null;
  // const isoLocal = `${dateStr}T${timeStr}`;
  // const d = new Date(isoLocal);
  // return Number.isNaN(d.getTime()) ? null : d;
  // Combine into a single string and parse as a Berlin-local time
  const combined = `${dateStr} ${timeStr}`;
  const pattern = 'dd.MM.yyyy HH:mm';

  // First parse WITHOUT timezone → gives a Date in system local time
  const parsedLocal = parse(combined, pattern, new Date());

  // Convert that Berlin local time to a real UTC instant
  const utcDate = zonedTimeToUtc(parsedLocal, 'Europe/Berlin');

  return utcDate; // JS Date object (UTC internally)
};

class Feed {
  constructor(type = 'data', client = null) {
    this.axiosInstance = axios.create({
      baseURL: client === 'bild' ? config.feeds.heimspiel.urlForBild : config.feeds.heimspiel.url,
      timeout: 100000
    });

    this.isRefreshing = false;
    this.failedQueue = [];
    this.type = type;

    this.setupInterceptors();
  }

  setupInterceptors() {
    this.axiosInstance.interceptors.request.use(this.handleRequest, this.handleError);
    this.axiosInstance.interceptors.response.use(this.handleResponse, this.handleResponseError);
  }

  handleRequest = async config => {
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const redisKey = `stats:axios:heimspiel_calls:${currentDate}`;
    redis.incr(redisKey, (err, reply) => {
      if (err) {
        LOGGER.error(`#REDIS# Increment Error ${err}`);
      } else {
        // Set expiration to 30 days if this is the first call of the day
        if (reply === 1) {
          const thirtyDaysInSeconds = 30 * 24 * 60 * 60; // 30 days in seconds
          redis.expire(redisKey, thirtyDaysInSeconds);
        }
      }
    });

    processPerformCallsStats(config);
    return config;
  };

  handleResponse = response => response;

  handleError = error => {
    LOGGER.warn(error, `#AXIOS# REQUEST ERROR %o`);
    return Promise.reject(error);
  };

  handleResponseError = async error => {
    LOGGER.warn(this.formatError(error), `#AXIOS# RESPONSE INTERCEPTOR CATCH %o`);
    return Promise.reject(error);
  };

  requiresAuthentication(url) {
    return this.authenticatedDomains.some(domain => url.includes(domain));
  }

  isAuthError(error) {
    return error.response && error.response.status === 401 && this.requiresAuthentication(error.config.baseURL);
  }

  // cached
  async apiCall(call, options = {}) {
    try {
      const url = this.prepareUrl(call.url);
      const urlHash = generateUrlHash(url);
      const now = new Date();

      const cacheEntry = await FeedsDataM.findOne({ urlHash });

      const defaultExpireTime = 30 * 24 * 60 * 60; // 30 days
      const expiresInSeconds = options.expiresInSeconds || defaultExpireTime;
      const expirationDate = new Date(now.getTime() + expiresInSeconds * 1000);

      // Long-term cache still valid? (Note: not the short freshness gate)
      if (cacheEntry && cacheEntry.expiresAt > now) {

        LOGGER.debug(`CACHED APICALL [${options?.indicator?.identifier}]: %s [${cacheEntry.expiresAt}]`, url, call?.method);
        return cacheEntry.response;
      }

      LOGGER.debug(`REAL APICALL [${options?.indicator?.identifier}]: %s`, url, call?.method);

      const axiosRes = await this.axiosInstance({
        url,
        _extra: { identifier: options?.indicator?.identifier }
      });

      const data = axiosRes?.data;
      // return data;

      // Derive lastUpdatedAt (prefer payload path if present)
      const cacheLastUpdatedAt = cacheEntry ? new Date(cacheEntry.lastUpdatedAt) : null;
      let lastUpdatedAt = cacheLastUpdatedAt || now;
      const lastUpdatedAtDateString = findMostRecentDateByPath(
        data,
        options?.indicator?.lastUpdatedPath
      );
      if (lastUpdatedAtDateString) {
        const parsed = new Date(lastUpdatedAtDateString);
        if (!isNaN(parsed.getTime())) lastUpdatedAt = parsed;
      }

      const updateData = {};
      let computedExpiresAt = expirationDate; // start with long default (30 days)

      if (options?.indicator?.identifier === 'match-detail') {
        const match = data?.[0]?.competition?.[0]?.season?.[0]?.round?.[0]?.match?.[0];

        if (match) {
          const isMatchFinished = String(match?.finished || '').toLowerCase() === 'yes';
          const matchStart = parseHeimspielDateTime(match?.match_date, match?.match_time);
          if (matchStart) {
            updateData.matchTime = matchStart.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' });

            const inProgressWindowEnd = new Date(matchStart.getTime() + 2 * 60 * 60 * 1000); // +2h
            const nowMs = now.getTime();

            if (isMatchFinished) {
              // Finished Duration 10 months
              computedExpiresAt = new Date(nowMs + 10 * 30 * 24 * 60 * 60 * 1000);
              LOGGER.debug('[match-detail] Finished; long expire', {
                matchStart: matchStart.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
                computedExpiresAt: computedExpiresAt.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
              });
            } else if (nowMs >= matchStart.getTime() && nowMs <= inProgressWindowEnd.getTime()) {
              // In progress Duration 1 minute
              computedExpiresAt = new Date(nowMs + 60 * 1000);
              LOGGER.debug('[match-detail] In progress; short expire', {
                matchStart: matchStart.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
                windowEnd: inProgressWindowEnd.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
                computedExpiresAt: computedExpiresAt.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
              });
            } else if (nowMs < matchStart.getTime()) {
              // Scheduled Duration expire at kickoff
              computedExpiresAt = new Date(matchStart);
              LOGGER.debug('[match-detail] Scheduled; expire at kickoff', {
                matchStart: matchStart.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
                computedExpiresAt: computedExpiresAt.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
              });
            } else {
              // Post-window but not finished → medium expire
              computedExpiresAt = new Date(nowMs + 6 * 60 * 60 * 1000);
              LOGGER.debug('[match-detail] Post-window; medium expire', {
                matchStart: matchStart.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
                computedExpiresAt: computedExpiresAt.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
              });
            }
          } else {
            LOGGER.debug('[match-detail] No parsable match_date/time; keep default expire', {
              match_date: match?.match_date,
              match_time: match?.match_time,
            });
          }
        } else {
          LOGGER.debug('[match-detail] No match object; keep default expire');
        }
      } else {
        const nowMs = now.getTime();
        computedExpiresAt = new Date(nowMs + 60 * 1000);
        // Comment out these stuff fornow
        // Season endpoints like matches-by-season
        /*
        const seasonMatches =
          data?.[0]?.competition?.[0]?.season?.[0]?.round?.[0]?.match || [];
        const firstScheduled = seasonMatches.find(
          (m) => String(m?.finished || '').toLowerCase() === 'no'
        );

        if (firstScheduled) {
          const nextStart = parseHeimspielDateTime(
            firstScheduled?.match_date,
            firstScheduled?.match_time
          );
          if (nextStart) {
            computedExpiresAt = new Date(nextStart); // refresh when next match starts
            updateData.nextMatchTime = nextStart.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' });
            LOGGER.debug('[season] Found next scheduled match; expire at kickoff', {
              nextStart: nextStart.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
              computedExpiresAt: computedExpiresAt.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
            });
          } else {
            LOGGER.debug('[season] Scheduled match has no parsable date/time; keep default expire', {
              match_date: firstScheduled?.match_date,
              match_time: firstScheduled?.match_time,
            });
          }
        } else {
          LOGGER.debug('[season] No scheduled matches; keep default expire', {
            defaultExpiresAt: computedExpiresAt.toLocaleString('sv-SE', { timeZone: 'Europe/Berlin' }),
          });
        }
          */
      }

      const upsertData = {
        response: data,
        lastUpdatedAt,
        createdAt: cacheEntry ? cacheEntry.createdAt : now,
        expiresAt: computedExpiresAt,
        url,
        updateData,
      };

      await FeedsDataM.updateOne({ urlHash }, { $set: upsertData }, { upsert: true });
      return upsertData.response;
    } catch (err) {
      LOGGER.warn(this.formatError(err), '#AXIOS# CACHED APICALL CATCH');
      throw this.formatError(err);
    }
  }


  prepareUrl(url) {
    return url.includes('[[OUTLET_KEY]]')
      ? url.replace(
        '[[OUTLET_KEY]]',
        this.type === 'data' ? process.env.PERFORM_0AUTH_CLIENT_ID : process.env.PERFORM_VOD_0AUTH_CLIENT_ID
      )
      : url;
  }

  formatError(err) {
    return {
      message: err?.message,
      code: err?.code,
      url: (err?.config?.baseURL || '') + (err?.config?.url || ''),
      method: err?.config?.method,
      authorization: err?.config?.headers?.Authorization
    };
  }
}

module.exports = Feed;
