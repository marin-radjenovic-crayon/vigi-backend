const express = require('express');

const packageJsonPath = `${APP_ROOT_PATH}/package.json`;
const packageJson = require(packageJsonPath);

const docsRoute = require('./docs');
const authRoutes = require('./auth');
const templatesRoutes = require('./template');
const actionsRoutes = require('./actions');
const screenshotRoutes = require('./screenshot');
const uploadRoutes = require('./upload');
const timelineRoutes = require('./timeline');
const videosRoutes = require('./videos');
const profileRoutes = require('./profile');
const usersRoutes = require('./users');
const setupRoutes = require('./setup');
const eventsRoutes = require('./events');
const webhookRoutes = require('./webhook');
const feedsRoutes = require('./feeds');
const adsRoutes = require('./ads');
const statsRoutes = require('./stats');

const config = require(`${APP_ROOT_PATH}/src/config`);

const { logger } = require(`${APP_ROOT_PATH}/src/middleware/utils/logger`);

const router = express.Router();

// dynamic routes loading
// fs.readdirSync(routesPath).filter((file) => {
//   // Take filename and remove last part (extension)
//   const routeFile = removeExtensionFromFile(file);
//   // Prevents loading of this file and auth file
//   return routeFile !== 'index' && routeFile !== 'auth' && file !== '.DS_Store'
//     ? router.use(`/${routeFile}`, require(`./${routeFile}`))
//     : '';
// });

const defaultRoutes = [
  {
    path: '/auth',
    route: authRoutes
  },
  {
    path: '/templates',
    route: templatesRoutes
  },
  {
    path: '/screenshot',
    route: screenshotRoutes
  },
  {
    path: '/upload',
    route: uploadRoutes
  },
  {
    path: '/timelines',
    route: timelineRoutes
  },
  {
    path: '/videos',
    route: videosRoutes
  },
  {
    path: '/profile',
    route: profileRoutes
  },
  {
    path: '/users',
    route: usersRoutes
  },
  {
    path: '/setup',
    route: setupRoutes
  },
  {
    path: '/events',
    route: eventsRoutes
  },
  {
    path: '/webhook',
    route: webhookRoutes
  },
  {
    path: '/actions',
    route: actionsRoutes
  },
  {
    path: '/feeds',
    route: feedsRoutes
  },
  {
    path: '/ads',
    route: adsRoutes
  },
  {
    path: '/stats',
    route: statsRoutes
  }
];

const devRoutes = [
  // routes available only in development mode
  {
    path: '/docs',
    route: docsRoute
  }
];

defaultRoutes.forEach(route => {
  try {
    router.use(route.path, route.route);
  } catch (err) {
    LOGGER.error(err);
  }
});

if (config.env === 'development') {
  devRoutes.forEach(route => {
    router.use(route.path, route.route);
  });
}

/*
 * Setup routes for index
 */
router.get('/', (req, res) => {
  const data = {
    version: packageJson.version
  };
  res.render('index', data);
});

/*
 * Handle 404 error
 */
router.use('*', (req, res) => {
  res.status(404).json({
    errors: {
      msg: 'URL_NOT_FOUND'
    }
  });
});

module.exports = router;
