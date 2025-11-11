const { join } = require('node:path');
module.exports = {
  PS_VIDEOS: join(__dirname, 'sandboxed', 'PSVideos.js'),
  PS_VIDEOS_OLYMPICS: join(__dirname, 'sandboxed', 'PSVideosOlympics.js')
};
