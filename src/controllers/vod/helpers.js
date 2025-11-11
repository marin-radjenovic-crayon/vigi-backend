const logger = require('@/src/middleware/utils/logger').logger;
global.LOGGER = logger;
const Upload = require(`@/src/controllers/utils/upload`);
const path = require('path');
const TemplatesRecordsM = require('@/src/models/template_records');
require('module-alias/register');
const getTypeByExt = require('@/src/controllers/functions/getTypeByExt');
const _ = require('lodash');
global.MAINCONFIG = require('@/src/config');

const { redis } = require('@/src/redis/connector');

const processAndUploadVideo = async ({ video, lang, eventId, competitionConfig, matchDetails }) => {
  let targetVideo = _.find(video?.media?.content, {
    width: 1280,
    height: 720
  });

  // const targetVideoFallback = _.find(video?.media?.content, {
  //   width: 1920,
  //   height: 1080
  // });
  //
  // if (!targetVideo) {
  //   targetVideo = targetVideoFallback;
  // }

  if (!targetVideo?.url) {
    console.log(`No video URL found for ${lang}.`);
    return; // Skip if no video URL is found
  }

  // "media": {
  //   "content": [
  //     {
  //       "url": "https://vod.performgroup.com/transcoded/20240314/140324_DE_SPN_CL_SIMEONE_OBLAK_SB_1710408286256-1_1724.mp4",
  //       "bitrate": 8628,
  //       "duration": 67,
  //       "width": 1920,
  //       "height": 1080,
  //       "fileSize": 75286651,
  //       "type": "h264",
  //       "videoFrameRate": "25",
  //       "videoRate": "8436",
  //       "audioRate": "192"
  //     }
  //   ]
  // }
  const videoUrl = targetVideo?.url;
  const pathname = new URL(videoUrl).pathname;
  const extension = path.extname(pathname);
  const contentType = getTypeByExt(extension); // Ensure this function safely handles unexpected extensions
  console.log(`Redislock & Processing ${lang} video with content type:`, contentType);

  const lockKey = `ps:video:lock:${competitionConfig?.id}:${video.id}`;
  const lockTTL = 60 * 1000 * 5;

  const lock = await redis.set(lockKey, 'locked', 'NX', 'PX', lockTTL);

  if (!lock) {
    console.log(`Lock already exists: ${lockKey}. Skipping processing...`);
    return;
  }

  const UploadClass = new Upload();
  await UploadClass.UploadVideoFromUrl({
    videoUrl,
    definedGroup: 'pressbox',
    extension,
    title: video.title,
    duration: video.duration,
    id: video.id,
    publishedTime: video.publishedTime ? new Date(video.publishedTime).toISOString() : null,
    eventId,
    lang: video?.language,
    competitionConfig,
    createdTime: video.createdTime ? new Date(video.createdTime).toISOString() : null,
    matchDetails
  });

  console.log(`${lang} video processed successfully.`);
};

const processAndUploadVideoOlympics = async ({ video, lang, event, competitionConfig, matchDetails }) => {
  let targetVideo = _.find(video?.media?.content, {
    width: 1280,
    height: 720
  });

  const targetVideoFallback = _.find(video?.media?.content, {
    width: 1920,
    height: 1080
  });

  if (!targetVideo) {
    targetVideo = targetVideoFallback;
  }

  if (!targetVideo?.url) {
    console.log(`No video URL found for ${lang}.`);
    return; // Skip if no video URL is found
  }

  // "media": {
  //   "content": [
  //     {
  //       "url": "https://vod.performgroup.com/transcoded/20240314/140324_DE_SPN_CL_SIMEONE_OBLAK_SB_1710408286256-1_1724.mp4",
  //       "bitrate": 8628,
  //       "duration": 67,
  //       "width": 1920,
  //       "height": 1080,
  //       "fileSize": 75286651,
  //       "type": "h264",
  //       "videoFrameRate": "25",
  //       "videoRate": "8436",
  //       "audioRate": "192"
  //     }
  //   ]
  // }
  const videoUrl = targetVideo?.url;
  const pathname = new URL(videoUrl).pathname;
  const extension = path.extname(pathname);
  const contentType = getTypeByExt(extension); // Ensure this function safely handles unexpected extensions
  console.log(`Processing ${lang} video with content type:`, contentType);

  const additionalDataFields = {
    competitionId: event.competitionId,
    countryId: event?.country?.id
  };

  const UploadClass = new Upload();
  await UploadClass.UploadVideoFromUrlOlympics({
    videoUrl,
    definedGroup: 'system_pressbox',
    extension,
    title: video.title,
    duration: video.duration,
    id: video.id,
    publishedTime: video.publishedTime ? new Date(video.publishedTime).toISOString() : null,
    event,
    lang: video?.language,
    competitionConfig,
    createdTime: video.createdTime ? new Date(video.createdTime).toISOString() : null,
    matchDetails,
    additionalDataFields
  });

  console.log(`${lang} video processed successfully.`);
};

// Function to count videos by language for the event
const countPressboxVideosForEvent = async eventId => {
  try {
    const result = await TemplatesRecordsM.aggregate([
      {
        $match: {
          name: {
            $regex: '^PRESSBOX',
            $options: 'i'
          }, // Matches names starting with "PRESSBOX"
          'event.eventId': eventId
        }
      },
      {
        $count: 'totalPressboxVideos'
      }
    ]).exec();

    // Check if result is empty, which means no matches found, and set count to 0
    const totalPressboxVideos = result.length > 0 ? result[0].totalPressboxVideos : 0;

    return totalPressboxVideos;
  } catch (err) {
    LOGGER.error('countPressboxVideosForEvent catch %o', err);
    return 0; // Return 0 in case of an error, indicating no videos found
  }
};

// Function to count videos by language for the event
const countPressboxVideosForEventOlympics = async event => {
  try {
    const result = await TemplatesRecordsM.aggregate([
      {
        $match: {
          name: {
            $regex: '^SYSTEM PRESSBOX',
            $options: 'i'
          }, // Matches names starting with "PRESSBOX"
          'event.competitionId': event?.competitionId,
          'event.countryId': event?.country?.id
        }
      },
      {
        $count: 'totalPressboxVideos'
      }
    ]).exec();

    // Check if result is empty, which means no matches found, and set count to 0
    const totalPressboxVideos = result.length > 0 ? result[0].totalPressboxVideos : 0;

    return totalPressboxVideos;
  } catch (err) {
    LOGGER.error('countPressboxVideosForEvent catch %o', err);
    return 0; // Return 0 in case of an error, indicating no videos found
  }
};

module.exports = {
  countPressboxVideosForEventOlympics,
  countPressboxVideosForEvent,
  processAndUploadVideo,
  processAndUploadVideoOlympics
};
