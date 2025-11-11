const express = require('express');
const bodyParser = require('body-parser');
const { sanitizeParam } = require('express-validator');
const compression = require('compression');
const helmet = require('helmet');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const passport = require('passport');
const app = express();
const i18n = require('i18n');
const initMongo = require('./lib/mongo');
const path = require('path');
const routesV1 = require('./routes/v1/index');
const { expressPinoHttp } = require('./middleware/utils/logger');
const { handleError } = require('./middleware/utils');
const getExpeditiousCache = require('express-expeditious');
const tokenManager = require('@/src/lib/0auth');

const { ExpressAdapter } = require('@bull-board/express');
const { createBullBoard } = require('@bull-board/api');
const { BullMQAdapter } = require('@bull-board/api/bullMQAdapter');
const { myQueue, PerformStatsVideos, queues } = require('@/src/queues/init');

const basicAuth = require('basic-auth');
const { CLIENTS } = require('@/src/constants/config');
const { worker } = require('node:cluster');

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

const basicAuthMiddleware = (req, res, next) => {
  const user = basicAuth(req);

  const expectedUsername = 'administrator';
  const expectedPassword = '$IA(3@S&X0#41005&135*';

  if (!user || user.name !== expectedUsername || user.pass !== expectedPassword) {
    res.set('WWW-Authenticate', 'Basic realm="example"');
    return res.status(401).send('Authentication required.');
  }

  next();
};

const setupMiddlewares = async () => {
  // Setup express server port from ENV, default: 3000
  app.set('port', process.env.PORT || 3000);

  // app.use((req, res, next) => {
  //   const workerId = worker ? worker.id : 'Master'; // Get worker ID or 'Master' if not in cluster
  //   LOGGER.info(`Request handled by Worker ID: ${workerId}`);
  //   next();
  // });

  //Enable only in development HTTP request logger middleware
  if (process.env.NODE_ENV === 'development') {
    if (process.env.NODE_ENV !== 'test') {
      // app.use(expressPinoHttp);
    }
  }

  // Redis cache enabled by env variable
  // if (process.env.USE_REDIS === 'true') {
  //   const getExpeditiousCache = require('express-expeditious');
  //   const cache = getExpeditiousCache({
  //     namespace: 'expresscache',
  //     defaultTtl: '1 minute',
  //     engine: require('expeditious-engine-redis')({
  //       redis: {
  //         host: process.env.REDIS_HOST,
  //         port: process.env.REDIS_PORT
  //       }
  //     })
  //   });
  //   app.use(cache);
  // }

  // for parsing json
  app.use(
    bodyParser.json({
      limit: '50mb'
    })
  );
  // for parsing application/x-www-form-urlencoded
  app.use(
    bodyParser.urlencoded({
      limit: '20mb',
      extended: true
    })
  );

  // app.use((req, res, next) => {
  //   console.log(req.body); // this is what you want
  //
  //   // res.on("end", () => {
  //   //   logger.debug(res);
  //   //   next();
  //   // });
  //
  //   res.on('finish', function() {
  //     console.log("RESPONSE", res)
  //
  //   });
  //
  //   next();
  //
  // });

  // i18n
  i18n.configure({
    locales: ['en', 'de'],
    directory: `${__dirname}/lang`,
    defaultLocale: 'en',
    objectNotation: true
  });
  app.use(i18n.init);

  // Init all other stuff
  app.use(cors());
  app.use(passport.initialize());
  app.use(compression());
  app.use(
    helmet({
      xFrameOptions: false
    })
  );
  app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
  app.use(
    express.static('public', {
      setHeaders: (res, filepath) => {
        const { action, filename } = res.req.query;

        if (action === 'download') {
          const outputFilename = filename || path.basename(filepath);
          // res.download(filepath, path.basename(filepath));
          res.setHeader('Content-disposition', `attachment; filename=${outputFilename}`);
        }
      }
    })
  );

  app.use(fileUpload({ useTempFiles: true }));

  app.set('views', path.join(__dirname, 'views'));
  app.engine('html', require('ejs').renderFile);
  app.set('view engine', 'html');

  const { addQueue, removeQueue, setQueues, replaceQueues } = createBullBoard({
    queues: [
      new BullMQAdapter(queues.PerformStatsVideos),
      new BullMQAdapter(queues.OlympicsTimeline),
      new BullMQAdapter(queues.OlympicsDataUpdate),
      new BullMQAdapter(queues.OptaUpdateLive),
      new BullMQAdapter(queues.OptaUpdateOverview),
      new BullMQAdapter(queues.OptaUpdate5Minutes),
      new BullMQAdapter(queues.OptaUpdateSeason),
      new BullMQAdapter(queues.OptaUpdateDaily),
    ],
    serverAdapter: serverAdapter
  });

  app.use('/admin/queues', basicAuthMiddleware, serverAdapter.getRouter());

  app.use(routesV1);

  // Init MongoDB
  if (process.env.NODE_ENV !== 'test') {
    await initMongo();

    if (MAINCONFIG.client !== CLIENTS.ADLER) {
      await tokenManager.authenticate();
    }
  }

  app.use((error, req, res, next) => {
    LOGGER.debug('---EXPRESS ERROR MIDDLEWARE---');
    return handleError(res, error);
  });

  LOGGER.info('TIMEZONE %s', `---${process.env.TZ}---`);
  LOGGER.info('DATE %s', `---${new Date().toLocaleString()}---`);
};

setupMiddlewares();

module.exports = app;
