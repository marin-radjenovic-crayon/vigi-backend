const express = require('express');
const router = express.Router();
require(`${APP_ROOT_PATH}/src/lib/passport`);
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false
});
const trimRequest = require('trim-request');

const { register, verify, forgotPassword, resetPassword, getRefreshToken, login, roleAuthorization } = require(
  `${APP_ROOT_PATH}/src/controllers/auth`
);

const { validateRegister, validateVerify, validateForgotPassword, validateResetPassword, validateLogin } = require(
  `${APP_ROOT_PATH}/src/controllers/auth/validators`
);

/*
 * Auth routes
 */

router.post('/register', trimRequest.all, validateRegister, register);

/*
 * Verify route
 */
router.post('/verify', trimRequest.all, validateVerify, verify);

/*
 * Forgot password route
 */
router.post('/forgot', trimRequest.all, validateForgotPassword, forgotPassword);

/*
 * Reset password route
 */
router.post('/reset', trimRequest.all, validateResetPassword, resetPassword);

/*
 * Get new refresh token
 */
router.get('/token', requireAuth, roleAuthorization(['user', 'admin']), trimRequest.all, getRefreshToken);

/*
 * Login route
 */
router.post('/login', trimRequest.all, validateLogin, login);

module.exports = router;
