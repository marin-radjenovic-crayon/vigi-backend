const express = require('express');
const router = express.Router();
require(`${APP_ROOT_PATH}/src/lib/passport`);
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false
});
const trimRequest = require('trim-request');

const { roleAuthorization } = require(`${APP_ROOT_PATH}/src/controllers/auth`);

const {
  getOptaAndVodCalls
} = require(`@/src/controllers/stats/route.controller`);
/*
 * Update item route
 */
router.get('/opta/calls', requireAuth, getOptaAndVodCalls);

module.exports = router;
