const express = require('express');
const router = express.Router();
require(`@/src/lib/passport`);
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false
});
const trimRequest = require('trim-request');

const { roleAuthorization } = require(`@/src/controllers/auth`);

const { activatedHandler, competitionTeams } = require('@/src/controllers/feeds/opta/routesHandler');

/*
 * Get all authorized / activated competition based on oauth
 */
router.get('/activated', activatedHandler);

/*
 * Get all authorized / activated competition based on oauth
 */
router.get('/teams/:cid', competitionTeams);

module.exports = router;
