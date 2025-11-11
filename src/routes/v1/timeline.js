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
  getAll,
  getMulti,
  getSingle,
  create,
  update,
  deleteTemplate,
  getPreCreatedTimeline
} = require('@/src/controllers/timelines');

/*
 * Cities routes
 */

/*
 * Get all items route
 */

router.get('/all', getAll);

/*
 * Get items route
 */
router.get('/', getMulti);

/*
 * Create new item route
 */
router.post('/', requireAuth, roleAuthorization(['user']), trimRequest.all, create);

/*
 * Get item route
 */
router.get(
  '/:uuid',
  // requireAuth,
  // roleAuthorization(['user']),
  // trimRequest.all,
  getSingle
);

/*
 * Get dynamic generate timeline
 * `/timelines/dynamic/${ctype}/${cid}/${tid}/${mid}`
 */
router.get(
  '/dynamic/:ctype/:cid/:tid/:mid?',
  // requireAuth,
  // roleAuthorization(['user']),
  // trimRequest.all,
  getPreCreatedTimeline
);

/*
 * Update item route
 */
router.patch('/:uuid', requireAuth, roleAuthorization(['user']), trimRequest.all, update);

/*
 * Delete item route
 */
router.delete('/', requireAuth, roleAuthorization(['user']), trimRequest.all, deleteTemplate);

module.exports = router;
