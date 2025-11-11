const pino = require('pino');
const pinoHttp = require('pino-http');
const config = require('../../config');
const _ = require('lodash');

let pinoPrettyPrint = process.env.PINO_PRETTY || false;

let logToFile = null;

const transportTargets = [];

const defaultLevel = process.env.LOG_LEVEL || 'error';

// Name: grafanacloud-vigital-logs
// URL: https://logs-prod-012.grafana.net
//   Basic Auth:  (checked)
// User: 942803

const isTestEnv = process.env.NODE_ENV === 'test';
if (process.env.NODE_ENV === 'production') {
  transportTargets.push({
    target: 'pino-loki',
    level: 'error',
    options: {
      labels: { application: 'api-performstats' },
      batching: true,
      interval: 5,
      host: process.env.LOKI_GRAFANA_API_URL,
      basicAuth: {
        username: process.env.LOKI_GRAFANA_API_USER,
        password: process.env.LOKI_GRAFANA_API_KEY
      }
    }
  });
}

if (config.logToFile) {
  transportTargets.push({
    target: 'pino-pretty',
    level: defaultLevel,
    options: {
      destination: './app.log',
      mkdir: true,
      sync: isTestEnv, // Set sync: true in test environment
      colorize: false
    }
  });
} else {
  transportTargets.push({
    target: 'pino-pretty',
    level: defaultLevel,
    options: {
      colorize: true,
      levelFirst: true,
      translateTime: true,
      sync: isTestEnv // Set sync: true in test environment
    }
  });
}

const transport = pino.transport({
  targets: transportTargets,
});

let logger = pino(
  {
    level: defaultLevel
  },
  transport
);

logger.info('LOG-LEVEL %s', process.env.LOG_LEVEL);

const expressPinoHttp = pinoHttp({
  logger,
  serializers: {
    req(req) {
      req.body = req.raw.body;
      // req.body = req.raw.body;

      // console.log("###req.raw", req.raw);

      // console.log("req.raw.body", req.raw.body);
      return `#REQ ${req.method} - ${req.headers.host}${req.url} `;

      // return {
      //   id: req.id,
      //   method: req.method,
      //   url: req.url,
      //   get user() {
      //     return req.raw.user;
      //   },
      //   headers: req.headers,
      //   remoteAddress: req.remoteAddress,
      //   remotePort: req.remotePort
      // };
    },
    res(res) {
      const rawResponse = res.raw;
      return `#RES: ${rawResponse.statusCode} - ${rawResponse.statusMessage}`;
    }
  },
  // Override attribute keys for the log object
  customAttributeKeys: {
    req: 'request',
    res: 'response',
    err: 'error',
    responseTime: 'timeTaken'
  },
  wrapSerializers: true,
  // Define a custom logger level
  // customLogLevel(res, err) {
  //   if (res.statusCode >= 400 && res.statusCode < 500) {
  //     return 'warn';
  //   } else if (res.statusCode >= 500 || err) {
  //     return 'error';
  //   }
  //   return 'info';
  // },
  customSuccessMessage: function () {
    return `#SUCCESS`;
  },
  customErrorMessage: function () {
    return `#ERROR`;
  }
  // formatters: {
  //     log(object) {
  //       const body = _.get(object, "req.response.source");
  //
  //       if (body) {
  //         return {
  //           ...object,
  //           body
  //         };
  //       } else {
  //         return object;
  //       }
  //     }
  // }
});

module.exports = {
  logger,
  expressPinoHttp,
  transport
};
