const express = require('express');
const router = express.Router();
require(`${APP_ROOT_PATH}/src/lib/passport`);
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false
});
const trimRequest = require('trim-request');

const { roleAuthorization } = require(`${APP_ROOT_PATH}/src/controllers/auth`);

const { getEvents, syncOpta } = require(`@/src/controllers/events`);

/*
 * Get item route
 */
router.get(
  '/:feedType?/:cid?/:tid?/:mid?',
  // requireAuth,
  // roleAuthorization(['user']),
  // trimRequest.all,
  getEvents
);

router.get(
  '/syncOpta',
  // requireAuth,
  // roleAuthorization(['user']),
  // trimRequest.all,
  syncOpta
);

module.exports = router;
