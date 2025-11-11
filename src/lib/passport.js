const passport = require('passport');
const User = require('../models/users');
const auth = require('../middleware/auth');
const JwtStrategy = require('passport-jwt').Strategy;

/**
 * Extracts token from: header, body or query
 * @param {Object} req - request object
 * @returns {string} token - decrypted token
 */
const jwtExtractor = req => {
  let token = null;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    token = req.headers.authorization.split(' ')[1].trim(); // More robust split based on 'Bearer '
  } else if (req.body.token) {
    token = req.body.token.trim();
  } else if (req.query.token) {
    token = req.query.token.trim();
  }
  return token ? auth.decrypt(token) : null; // Ensure the token exists before decryption
};

/**
 * Options object for jwt middlware
 */
const jwtOptions = {
  jwtFromRequest: jwtExtractor,
  secretOrKey: process.env.JWT_SECRET
};

/**
 * Login with JWT middleware
 */
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  (async () => {
    try {
      // Use async/await to find the user by ID.
      const user = await User.findById(payload.data._id).exec();

      // If no user is found, terminate the authentication process with `false`.
      if (!user) {
        return done(null, false);
      }

      // If a user is found, proceed with that user.
      return done(null, user);
    } catch (err) {
      // Handle any errors during the user query.
      return done(err, false);
    }
  })();
});

passport.use(jwtLogin);
