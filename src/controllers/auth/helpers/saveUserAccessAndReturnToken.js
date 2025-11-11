const UserAccess = require('../../../models/user_access');
const { setUserInfo } = require('./setUserInfo');
const { generateToken } = require('./generateToken');
const { getIP, getBrowserInfo, getCountry, buildErrObject } = require('../../../middleware/utils');

/**
 * Saves a new user access and then returns token
 * @param {Object} req - request object
 * @param {Object} user - user object
 */
const saveUserAccessAndReturnToken = async (req = {}, user = {}) => {
  try {
    if(user?.email) {
      const userAccess = new UserAccess({
        email: user?.email,
        ip: getIP(req),
        browser: getBrowserInfo(req),
        country: getCountry(req)
      });

      // Save the user access document. If there's an error, it will be caught by the catch block.
      await userAccess.save();
    }


    // After saving, set user info and generate token.
    const userInfo = await setUserInfo(user);

    // Returns data with access token.
    return {
      token: generateToken(user._id),
      user: userInfo
    };
  } catch (error) {
    // If an error occurs during the save operation or setting user info, throw it.
    throw buildErrObject(422, error.message);
  }
};

module.exports = { saveUserAccessAndReturnToken };
