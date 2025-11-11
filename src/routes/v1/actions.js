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
  prepareMatchday,
  syncMatchdayTimelines,
  getClosestMatch,
  getLiveMatch,
  prepareCompetitionTimelines,
  preparePostMatchTimeline,
  syncMatchVideos,
  resaveAllTemplatesCompetitionTimeline
} = require(`@/src/controllers/actions`);
const { restartProdStreams } = require('@/src/controllers/actions/streams.route');

/*
 * Prepare matchday
 */
router.post('/prepareMatchday', requireAuth, roleAuthorization(['user']), trimRequest.all, prepareMatchday);
router.post('/syncMatchVideos', requireAuth, roleAuthorization(['user']), trimRequest.all, syncMatchVideos);

/*
 * sync matchday timelines
 */
router.post('/syncMatchdayTimelines', requireAuth, roleAuthorization(['user']), trimRequest.all, syncMatchdayTimelines);

/*
 * get closest match
 */
router.get('/closestMatch/:competitionId', getClosestMatch);

/*
 * get live match data
 */
router.get('/livematch/:mid', getLiveMatch);

/*
 * prepareCompetitionTimelines
 */
router.post('/prepare-comp-timelines', prepareCompetitionTimelines);

/*
 * preparePostMatchTimeline
 */
router.post('/prepare-post-match-timeline', requireAuth, roleAuthorization(['user']), preparePostMatchTimeline);
router.post(
  '/resave-played-playing-timeline-matches',
  requireAuth,
  roleAuthorization(['user']),
  resaveAllTemplatesCompetitionTimeline
);
router.post('/streams-restart', requireAuth, roleAuthorization(['user']), restartProdStreams);

module.exports = router;
