const express = require('express');
const router = express.Router();
require(`${APP_ROOT_PATH}/src/lib/passport`);
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false
});
const trimRequest = require('trim-request');

const { roleAuthorization } = require(`${APP_ROOT_PATH}/src/controllers/auth`);

const { hookVideoProduction } = require(`${APP_ROOT_PATH}/src/controllers/videos`);

/*
 * Cities routes
 */

/*
 * Handle Hook from video server
 */
router.post('/videoproduction', hookVideoProduction);

module.exports = router;
