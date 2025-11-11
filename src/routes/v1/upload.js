const express = require('express');
const router = express.Router();
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false
});
const trimRequest = require('trim-request');

const { roleAuthorization } = require(`${APP_ROOT_PATH}/src/controllers/auth`);

const Upload = require(`@/src/controllers/utils/upload`);

/*
 * Cities routes
 */

/*
 * Get all items route
 */
const InstanceClass = new Upload();
router.post('/:group?', requireAuth, roleAuthorization(['user']), InstanceClass.UploadFiles.bind(InstanceClass));

router.patch(
  '/:uuid/:group?',
  // requireAuth,
  // roleAuthorization(['user']),
  InstanceClass.UpdateFiles.bind(InstanceClass)
);

router.get('/:group?', InstanceClass.GetFiles.bind(InstanceClass));

router.delete(
  '/',
  // requireAuth,
  // roleAuthorization(['user']),
  InstanceClass.DeleteFiles.bind(InstanceClass)
);

module.exports = router;
