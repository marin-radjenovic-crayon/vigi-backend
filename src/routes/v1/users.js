const express = require('express');
const router = express.Router();
require(`${APP_ROOT_PATH}/src/lib/passport`);
const passport = require('passport');
const requireAuth = passport.authenticate('jwt', {
  session: false
});
const trimRequest = require('trim-request');

const { roleAuthorization } = require(`${APP_ROOT_PATH}/src/controllers/auth`);

const { getUsers, createUser, getUser, updateUser, deleteUser } = require(`${APP_ROOT_PATH}/src/controllers/users`);

const { validateCreateUser, validateGetUser, validateUpdateUser, validateDeleteUser } = require(
  `${APP_ROOT_PATH}/src/controllers/users/validators`
);

/*
 * Users routes
 */

/*
 * Get items route
 */
router.get('/', requireAuth, roleAuthorization(['admin']), trimRequest.all, getUsers);
router.get('/status', requireAuth, trimRequest.all, getUsers);

/*
 * Create new item route
 */
router.post('/', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateCreateUser, createUser);

/*
 * Get item route
 */
router.get('/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateGetUser, getUser);

/*
 * Update item route
 */
router.patch('/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateUpdateUser, updateUser);

/*
 * Delete item route
 */
router.delete('/:id', requireAuth, roleAuthorization(['admin']), trimRequest.all, validateDeleteUser, deleteUser);

module.exports = router;
