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
  handleSingleTemplate,
  saveSingleTemplate,
  downloadAndZipTemplates
} = require(`@/src/controllers/templates`);

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
router.get(
  '/',
  // requireAuth,
  // roleAuthorization(['user']),
  getMulti
);

router.post('/download-zip', requireAuth, roleAuthorization(['user']), trimRequest.all, downloadAndZipTemplates)

/*
 * Create new item route
 */
router.post('/:template', requireAuth, roleAuthorization(['user']), trimRequest.all, saveSingleTemplate);

/*
 * Get item route
 */
router.get(
  '/:template/:uuid',
  // requireAuth,
  // roleAuthorization(['user']),
  trimRequest.all,
  handleSingleTemplate
);

/*
 * Update item route
 */
router.patch('/:template/:uuid', requireAuth, roleAuthorization(['user']), trimRequest.all, saveSingleTemplate);

/*
 * Delete item route
 */
router.delete('/', requireAuth, roleAuthorization(['user']), trimRequest.all, deleteTemplate);

module.exports = router;
