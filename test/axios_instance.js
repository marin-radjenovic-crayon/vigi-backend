const Feed = require('../src/controllers/feeds/opta');
const { authenticate } = require('../src/lib/0auth');
global.LOGGER = require('../src/middleware/utils/logger').logger;

async function testFeed() {
  // Initialize your Feed class
  const feed = new Feed();

  // Simulate an API call that should fail and trigger the token refresh
  try {
    console.info('Attempting API call with expired/invalid token...');
    // const auth = await authenticate()
    // console.log('auth', auth)
    const data = await feed.apiCall({
      url: 'soccerdata/match/8ohud69smup11raekqnf7ogsa?_rt=b&_fmt=json&fx=dhbouwxvpxf1lqqh1rtrdf310&live=yes'
    });
    console.info('API data failed', data);
  } catch (error) {
    console.error('Initial API call failed as expected:', error.message);
  }

  // Simulate an API call that should succeed with the refreshed token
  try {
    // console.info('Attempting API call with refreshed token...');
    const response = await feed.apiCall({
      url: 'soccerdata/match/8ohud69smup11raekqnf7ogsa?_rt=b&_fmt=json&fx=dhbouwxvpxf1lqqh1rtrdf310&live=yes'
    });
    // console.info('API call succeeded:', response);
  } catch (error) {
    console.error('API call failed:', error.message);
  }
}

(async () => {
  await testFeed()
    .then((data) => {
      console.info('###Test completed', data);
    })
    .catch(error => {
      console.error('Test failed:', error.message);
    });
})();
// Run the test

