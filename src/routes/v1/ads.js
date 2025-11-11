const express = require('express');
const router = express.Router();
require(`${APP_ROOT_PATH}/src/lib/passport`);
const trimRequest = require('trim-request');

const { timelineAdBreak } = require('@/src/controllers/ads/route.controller');

/*
 * Prepare matchday
 */
router.post('/timeline', trimRequest.all, timelineAdBreak);

module.exports = router;
