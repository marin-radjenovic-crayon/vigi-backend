const express = require('express');
const router = express.Router();
require(`${APP_ROOT_PATH}/src/lib/passport`);
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false
});
const trimRequest = require('trim-request');

const { roleAuthorization } = require(`${APP_ROOT_PATH}/src/controllers/auth`);

const { getSingle, create, update, deleteTemplate } = require(`${APP_ROOT_PATH}/src/controllers/setup`);

/*
 * Cities routes
 */

/*
 * Create new item route
 */
router.post('/', requireAuth, roleAuthorization(['user']), trimRequest.all, create);

/*
 * Get item route
 */
router.get(
  '/:setupid?',
  // requireAuth,
  // roleAuthorization(['user']),
  // trimRequest.all,
  getSingle
);

/*
 * Update item route
 */
router.patch(
  '/:setupid',
  requireAuth,
  // roleAuthorization(['admin']),
  trimRequest.all,
  update
);

/*
 * Delete item route
 */
router.delete(
  '/',
  requireAuth,
  // roleAuthorization(['admin']),
  trimRequest.all,
  deleteTemplate
);

module.exports = router;
