const { redis } = require('../redis/connector');

const crypto = require('crypto');
const axios = require('axios');
const config = require('../config');

let authCounter = 0;
let token = null;
let vodToken = null;
let expirationDate = null;
let expirationDateVod = null;

//type = data | vod
async function authenticate(type = 'data') {
  try {
    const key = type === 'data' ? 'performstats:auth0' : 'performstatsvod:auth0';
    const authData = await redis.get(key);
    let targetToken = type === 'data' ? token : vodToken;
    let targetExpirationDate = type === 'data' ? expirationDate : expirationDateVod;

    if (authData) {
      const { token: storedToken, expirationDate: storedExpiration } = JSON.parse(authData);
      targetToken = storedToken;
      targetExpirationDate = new Date(storedExpiration);
    }

    // Check if token exists and is not expired
    const now = new Date();
    const sixtyMinutesLater = new Date(now.getTime() + 60 * 60000);

    if (token && expirationDate && expirationDate.getTime() > sixtyMinutesLater.getTime()) {
      return {
        token: targetToken,
        expirationDate: targetExpirationDate
      };
    } else {
      token = null;
    }

    let clientId = process.env.PERFORM_0AUTH_CLIENT_ID;
    let clientSecret = process.env.PERFORM_0AUTH_CLIENT_SECRET;
    let domain = process.env.PERFORM_AUTH_DOMAIN;

    if (type === 'vod') {
      clientId = process.env.PERFORM_VOD_0AUTH_CLIENT_ID;
      clientSecret = process.env.PERFORM_VOD_0AUTH_CLIENT_SECRET;
      domain = process.env.PERFORM_VOD_AUTH_DOMAIN;
    }

    // Step 1: Generate a unique hash
    const timestamp = new Date().getTime(); // current time in milliseconds
    const hashString = clientId + timestamp + clientSecret;
    const uniqueHash = crypto.createHash('sha512').update(hashString).digest('hex');

    // Step 2: Call the OAuth API
    const postUrl = `${domain}/oauth/token/${clientId}?_fmt=json&_rt=b`;
    const oauthResponse = await axios.post(
      postUrl,
      {
        grant_type: 'client_credentials',
        scope: 'b2b-feeds-auth'
      },
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${uniqueHash}`,
          Timestamp: timestamp.toString()
        }
      }
    );

    const accessToken = oauthResponse.data.access_token;
    const expiresIn = parseInt(oauthResponse.data.expires_in);
    targetExpirationDate = new Date(now.getTime() + expiresIn * 1000);

    await redis.set(
      key,
      JSON.stringify({
        token: accessToken,
        expirationDate: targetExpirationDate.toISOString()
      })
    );

    targetToken = accessToken;

    // Output the response or handle as needed
    // console.log('0AUTH type', type);
    // console.log('0AUTH COUNTER', ++authCounter);
    // console.log('0AUTH oauthResponse', oauthResponse.data);
    // console.log('0AUTH expirationDate', expirationDate);

    return {
      token: targetToken,
      expirationDate: targetExpirationDate
    };
  } catch (error) {
    console.error(`Error during authentication ${type}:`, error);
    throw error;
  }
}

module.exports = {
  authenticate
};
