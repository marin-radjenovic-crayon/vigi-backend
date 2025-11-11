const express = require('express');
const router = express.Router();
require(`${APP_ROOT_PATH}/src/lib/passport`);
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false
});
const trimRequest = require('trim-request');

const { roleAuthorization } = require(`${APP_ROOT_PATH}/src/controllers/auth`);

const { getProfile, updateProfile, changePassword } = require(`${APP_ROOT_PATH}/src/controllers/profile`);

const { validateUpdateProfile, validateChangePassword } = require(
  `${APP_ROOT_PATH}/src/controllers/profile/validators`
);

/*
 * Profile routes
 */

/*
 * Get profile route
 */
router.get('/', requireAuth, roleAuthorization(['user', 'admin']), trimRequest.all, getProfile);

/*
 * Update profile route
 */
router.patch(
  '/',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateUpdateProfile,
  updateProfile
);

/*
 * Change password route
 */
router.post(
  '/changePassword',
  requireAuth,
  roleAuthorization(['user', 'admin']),
  trimRequest.all,
  validateChangePassword,
  changePassword
);

module.exports = router;
