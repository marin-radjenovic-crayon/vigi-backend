const _ = require('lodash');
const axios = require('axios');
const config = require('../../../config');
const tokenManager = require('@/src/lib/0auth');
const { redis } = require('../../../redis/connector');
const { format, parseISO} = require('date-fns');
const { processPerformCallsStats } = require('@/src/controllers/feeds/opta/stats');
const FeedsDataM = require('@/src/models/feeds_data');
const { getMockResponse, saveMockResponse } = require('@/src/utils');

const {
  generateUrlHash,
  findMostRecentLastUpdatedAt,
  findMostRecentDateByPath
} = require('@/src/controllers/feeds/opta/helpers');
const {prepareMatchIsoString} = require("@/src/controllers/actions/helpers");

class Feed {
  constructor(type = 'data') {
    this.axiosInstance = axios.create({
      baseURL: config.feeds.opta.url,
      timeout: 30000,
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });

    this.authenticatedDomains = ['api.performfeeds.com'];
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
    const redisKey = `stats:axios:opta_calls:${currentDate}`;
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

    if (this.requiresAuthentication(config.baseURL)) {
      try {
        const { token } = await tokenManager.authenticate(this.type);
        config.headers['Authorization'] = `Bearer ${token}`;
      } catch (error) {
        LOGGER.warn(error, `#AXIOS# TOKEN AUTHENTICATION ERROR %o`);
        throw error;
      }
    }
    return config;
  };

  handleResponse = response => response;

  handleError = error => {
    LOGGER.warn(error, `#AXIOS# REQUEST ERROR %o`);
    return Promise.reject(error);
  };

  handleResponseError = async error => {
    if (this.isAuthError(error)) {
      return this.handleAuthError(error);
    }
    LOGGER.warn(this.formatError(error), `#AXIOS# RESPONSE INTERCEPTOR CATCH %o`);
    return Promise.reject(error);
  };

  requiresAuthentication(url) {
    return this.authenticatedDomains.some(domain => url.includes(domain));
  }

  isAuthError(error) {
    return error.response && error.response.status === 401 && this.requiresAuthentication(error.config.baseURL);
  }

  async handleAuthError(error) {
    LOGGER.warn(this.formatError(error), `#AXIOS# APICALL handleAuthError %o`);

    try {
      const { token } = await tokenManager.authenticate(this.type);
      error.config.headers['Authorization'] = `Bearer ${token}`;
      return this.axiosInstance(error.config);
    } catch (refreshError) {
      LOGGER.warn(refreshError, `#AXIOS# TOKEN REFRESH CATCH %o`);
      throw refreshError;
    }
  }

  processQueue(error, token = null) {
    while (this.failedQueue.length > 0) {
      const { resolve, reject, config } = this.failedQueue.shift();
      if (error) {
        reject(error);
      } else {
        // Update the token in the request configuration
        config.headers['Authorization'] = `Bearer ${token}`;
        resolve(this.axiosInstance(config));
      }
    }
  }

  // uncached
  async _apiCall(call) {
    try {
      const url = this.prepareUrl(call.url);
      LOGGER.debug('APICALL OPTA: %s', url, call?.method);
      const response = await this.axiosInstance({ url });
      return _.get(response, 'data', null);
    } catch (err) {
      LOGGER.warn(this.formatError(err), `#AXIOS# APICALL CATCH %o`);
      // Corrected error throwing
      throw this.formatError(err);
    }
  }

  //cached
  async apiCall(call, options = {}) {
    try {
      const url = this.prepareUrl(call.url);
      const urlHash = generateUrlHash(url); // Assuming generateUrlHash is defined elsewhere
      const now = new Date();
      const cacheEntry = await FeedsDataM.findOne({ urlHash: urlHash });

      // Use the expiresInSeconds from options if provided, otherwise default to 30 days (in seconds)
      const defaultExpireTime = 30 * 24 * 60 * 60; // 30 days in seconds
      const expiresInSeconds = options.expiresInSeconds || defaultExpireTime; //mongo to save space
      const expirationDate = new Date(now.getTime() + expiresInSeconds * 1000);

      if (cacheEntry && cacheEntry.expiresAt > now) {
        // Default keep in seconds
        const keepInSeconds = options?.indicator?.keepInSeconds || 25;

        // Initialize keep duration with the default value
        let keepDurationInSeconds = keepInSeconds;

        // Check if the specific logic should be applied
        if (options?.indicator?.identifier === 'fixtures:match') {
          const matchTimeString = cacheEntry?.updateData?.matchTime;

          if (matchTimeString) {
            const matchTime = new Date(matchTimeString);
            const oneHourBeforeMatch = new Date(matchTime.getTime() - 3600 * 1000); // 1 hour before matchTime
            const threeHoursAfterMatch = new Date(matchTime.getTime() + 3 * 3600 * 1000); // 3 hours after matchTime

            // Assume keepInSecondsLive is defined in your options
            const keepInSecondsLive = options?.indicator?.keepInSecondsLive || 25;

            // Adjust keep duration based on the time relative to the match
            if (now >= oneHourBeforeMatch && now <= threeHoursAfterMatch) {
              keepDurationInSeconds = keepInSecondsLive;
            }
          }
        } else if (options?.indicator?.identifier === 'tournament:seasonstats') {
          const liveMatch = options?.liveMatch;
          const matchStatus = liveMatch?.liveData?.matchDetails?.matchStatus; // e.g., "Played", "InProgress", "Scheduled"
          const isoString = prepareMatchIsoString({
            date: liveMatch.matchInfo?.date,
            time: liveMatch.matchInfo?.time,
          });
          const matchStartTime = new Date(isoString); // Match start time in UTC
          const matchLengthMin = liveMatch?.liveData?.matchDetails?.matchLengthMin || 0;
          const matchLengthSec = liveMatch?.liveData?.matchDetails?.matchLengthSec || 0;

          // Calculate match end time
          const matchEndTime = new Date(matchStartTime.getTime() + (matchLengthMin * 60 + matchLengthSec) * 1000);
          const bufferAfterMatch = 15 * 60 * 1000; // 15 minutes buffer
          const oneHourAfterMatch = new Date(matchEndTime.getTime() + 60 * 60 * 1000); // 1 hour after match end

          let cacheDurationInSeconds;

          if (matchStatus === 'Played') {
            // If match has just been played
            if (now < oneHourAfterMatch) {
              cacheDurationInSeconds = 60
            } else {
              cacheDurationInSeconds = 24 * 60 * 60; // Cache for 1 day after 1-hour window ends
            }
          }

          // Check cache validity
          if (
            cacheEntry &&
            new Date(cacheEntry.updatedAt).getTime() + cacheDurationInSeconds * 1000 > now.getTime()
          ) {
            LOGGER.debug(`CACHED APICALL [${options?.indicator?.identifier}]: %s`, url, call?.method);
            return cacheEntry.response;
          }
        }


        //generic logic
        if (new Date(cacheEntry.updatedAt).getTime() + keepDurationInSeconds * 1000 > now.getTime()) {
          LOGGER.debug(`CACHED APICALL [${options?.indicator?.identifier}]: %s`, url, call?.method);
          return cacheEntry.response;
        }
      }

      LOGGER.debug(`REAL APICALL [${options?.indicator?.identifier}]: %s`, url, call?.method);

      let response = {};

      if (process.env.NODE_ENV === 'test') {
        response.data = getMockResponse(config.feeds.opta.url + url);
        if (response.data) {
          LOGGER.info(`#getMockResponse - read: ${url}`);
        } else {
          response = await this.axiosInstance({
            url,
            _extra: {
              identifier: options?.indicator?.identifier
            }
          });
          // Save the response to mock file
          saveMockResponse(config.feeds.opta.url + url, response?.data);
        }
      } else {
        // Call the actual API if no valid cache is found or if the cache is stale
        response = await this.axiosInstance({
          url,
          _extra: {
            identifier: options?.indicator?.identifier
          }
        });
      }

      const cacheLastUpdatedAt = cacheEntry ? new Date(cacheEntry.lastUpdatedAt) : null;
      let lastUpdatedAt = cacheLastUpdatedAt || now;
      // console.log('options?.indicator', options?.indicator?.feed);
      // console.log('options?.indicator?.lastUpdatedPath', options?.indicator?.lastUpdatedPath);
      const lastUpdatedAtDateString = findMostRecentDateByPath(response?.data, options?.indicator?.lastUpdatedPath);

      if (lastUpdatedAtDateString) {
        lastUpdatedAt = new Date(lastUpdatedAtDateString);
      }

      // console.log('lastUpdatedAtDateString', lastUpdatedAtDateString);
      // console.log('lastUpdatedAt', lastUpdatedAt);

      const updateData = {
        // identifier: options?.indicator?.identifier
      };
      if (options?.indicator?.identifier === 'fixtures:match') {
        const matchUtcDate = response?.data?.match?.[0].matchInfo?.date;
        const matchUtcTime = response?.data?.match?.[0].matchInfo?.time;
        const correctedDateString = matchUtcDate.replace('Z', '');
        const dateTimeString = `${correctedDateString}T${matchUtcTime}`;
        const matchTime = new Date(dateTimeString);
        updateData['matchTime'] = matchTime;
      }

      const upsertData = {
        response: response?.data, // Assuming response is the data you want to cache
        lastUpdatedAt,
        createdAt: cacheEntry ? cacheEntry.createdAt : now,
        expiresAt: expirationDate,
        url,
        updateData
      };

      await FeedsDataM.updateOne({ urlHash: urlHash }, { $set: upsertData }, { upsert: true });

      return upsertData?.response;
    } catch (err) {
      LOGGER.warn(this.formatError(err), `#AXIOS# apiCall CACHED APICALL CATCH %o`, );
      throw this.formatError(err); // Ensure proper error handling
    }
  }

  async apiVodCall(call, options = {}) {
    try {
      const url = this.prepareUrl(call.url);
      const now = new Date();

      LOGGER.debug(`REAL APICALL [${options?.indicator?.identifier}]: %s`, url, call?.method);
      // Call the actual API if no valid cache is found or if the cache is stale
      const response = await this.axiosInstance({
        url,
        _extra: {
          identifier: options?.indicator?.identifier
        }
      });

      return response?.data;
    } catch (err) {
      LOGGER.warn(`#AXIOS# apiVodCall APICALL CATCH %o`, this.formatError(err));
      throw this.formatError(err); // Ensure proper error handling
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
      message: err.message,
      code: err.code,
      url: (err?.config?.baseURL || '') + (err?.config?.url || ''),
      method: err?.config?.method,
      authorization: err?.config?.headers?.Authorization
    };
  }
}

module.exports = Feed;
