const _ = require('lodash');
const axios = require('axios');
const config = require('../../../config');

class FeedBaseWise {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config.feeds.wiseHockey.url,
      timeout: 30000,
      headers: {
        'Wisehockey-Api-Key': config.feeds.wiseHockey.apiKey
      },
      maxContentLength: Infinity,
      maxBodyLength: Infinity
    });

    this.axiosInstance.interceptors.response.use(
      response => response,
      error => {
        // debugger;
        // whatever you want to do with the error

        LOGGER.warn(
          {
            message: error.message,
            code: error.code,
            url: error?.config?.url,
            method: error?.config?.method
          },
          `#AXIOS# RESPONSE INTERCEPTOR CATCH %o`
        );

        // LOGGER.error(error, 'AXIOS response error');
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.request.use(
      function (config) {
        // Do something before request is sent
        return config;
      },
      function (error) {
        LOGGER.warn(
          {
            message: error.message,
            code: error.code,
            url: error?.config?.url,
            method: error?.config?.method
          },
          `
      AXIOS;
      request;
      error %o`
        );
        // LOGGER.error(error, 'AXIOS request error');
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }

  async apiCall({ url, method }) {
    LOGGER.debug('APICALL WISE: %s', url, method);

    const response = await this.axiosInstance({
      url
    }).catch(err => {
      LOGGER.warn(
        {
          message: err.message,
          code: err.code,
          url: err?.config?.url,
          method: err?.config?.method
        },
        `AXIOS CATCH %o`
      );
    });

    return _.get(response, 'data', null);
  }
}

module.exports = FeedBaseWise;
