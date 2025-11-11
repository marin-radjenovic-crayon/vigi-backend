const express = require('express');
const router = express.Router();
const trimRequest = require('trim-request');

// console.log('APP_ROOT_PATH', APP_ROOT_PATH);
const Screenshot = require('@/src/controllers/utils/screenshot');

/*
 * Cities routes
 */

/*
 * Get all items route
 */
const ScreenshotClass = new Screenshot();
router.post('/', ScreenshotClass.takeScreenshot.bind(ScreenshotClass));

module.exports = router;
