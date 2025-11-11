const _ = require('lodash');
const axios = require('axios');
const config = require('../../../config');

class Feed {
  constructor() {
    this.axiosInstance = axios.create({
      baseURL: config.feeds.del.url,
      timeout: 15000,
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
          `#AXIOS# RESPONSE INTERCEPTOR CATCH`
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
          `#AXIOS# REQUEST INTERCEPTOR CATCH %o`
        );
        // LOGGER.error(error, 'AXIOS request error');
        // Do something with request error
        return Promise.reject(error);
      }
    );
  }

  apiCall({ url, method }) {
    return new Promise(async (resolve, reject) => {
      LOGGER.debug('APICALL: %s', config.feeds.del.url + url);

      const response = await this.axiosInstance({
        url
      }).catch(err => {
        // LOGGER.warn(err, 'apiCall err');
        reject(err);
      });

      const data = _.get(response, 'data', null);

      resolve(data);
    });
  }
}

module.exports = Feed;
