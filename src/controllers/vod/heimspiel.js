const _ = require('lodash');
const VodFeedClass = require('@/src/controllers/feeds/heimspiel/vod-feed');
const tokenManager = require('@/src/lib/0auth');
const MediaM = require('@/src/models/media');
const {
  processAndUploadVideo,
  countPressboxVideosForEvent,
  processAndUploadVideoOlympics
} = require('@/src/controllers/vod/helpers');
const TemplatesRecordsM = require('@/src/models/template_records');
const path = require('path');
const fs = require('fs-extra');
const FnFeedsClass = require('@/src/controllers/feeds/heimspiel/functions');
const TimelineM = require('@/src/models/timeline_records');

async function processVideosForEvent({ lang, event, matchVideos }) {
  // Sort all incoming videos by creationTime, from newest to oldest
  // Select the top 4 latest videos

  const maxRecentVideosPerLang = 20;

  const topFourVideos = matchVideos[lang]?.videos.slice(-maxRecentVideosPerLang) || [];
  const topFourVideoIds = topFourVideos.map(video => video.id);
  // Fetch existing video records from the database for this language and event
  const existingVideos = await MediaM.find(
    {
      'data.competitionId': event?.competitionId,
      'data.countryId': event?.country?.id,
      'data.lang': lang
    },
    [],
    {
      lean: true,
      sort: {
        createdAt: -1
      }
    }
  );
  // Create a set of existing video IDs for quick reference
  const existingVideoIds = new Set(existingVideos.map(v => v.data.id));

  // Identify videos from the top 4 that are not already in the database
  const videosToUpload = topFourVideos.filter(video => !existingVideoIds.has(video.id));

  // Determine which existing videos are not in the top four and need removal
  const videosToRemove = existingVideos
    .filter(video => !topFourVideoIds.includes(video.data.id))
    .sort((a, b) => new Date(a.data.createdTime) - new Date(b.data.createdTime)); // Order by oldest first

  // Remove excess videos if there are more than four
  if (existingVideos.length > maxRecentVideosPerLang) {
    for (let video of videosToRemove) {
      await MediaM.deleteOne({ uuid: video.uuid });
      await TemplatesRecordsM.deleteOne({
        'data.fields.value.uuid': video.uuid
      }).catch(err => LOGGER.error(err, 'TemplatesRecordsM.deleteOne'));
    }
  }

  // Return videos that need to be uploaded
  return videosToUpload.map(video => ({
    video,
    lang
  }));
}

async function processMatchVideos(eventIds = [], competitionConfig) {
  try {
    const VodFeed = new VodFeedClass({ target: {} });

    const matchVideos = await VodFeed.getOlympicsVideos();

    const languages = ['en', 'de'];
    const targetEvent = {
      id: '230',
      name: 'Olympic Games, FW C-2 500m (M)',
      shortname: 'FW C-2 500m (M)',
      microname: '',
      type: 'double',
      gender: 'male',
      current_season_id: '62936',
      current_round_id: '181679',
      current_matchday: '1',
      policy: {
        id: '138062',
        policy_order: '20',
        policy_meta: ''
      },
      age: {
        id: '1',
        name: ''
      },
      topic: {
        id: '268',
        name: 'Summer Olympic Games',
        shortname: 'Olympic Games'
      },
      parentId: '97',
      parentName: 'Canoe sprint C-2 500m',
      competitionId: '230',
      knownName: ' FW C-2 500m (M)',
      competitionName: ' FW C-2 500m (M)',
      parentTopic: {
        id: '12',
        name: 'Canoe',
        shortname: 'Canoe'
      },
      country: {
        id: '1',
        name: 'Afghanistan',
        code: 'AFG',
        iso: 'AF'
      },
      feedType: 'heimspiel',
      teamId: '1'
    };

    for (const lang of languages) {
      const videosToUpload = await processVideosForEvent({
        lang,
        matchVideos,
        event: targetEvent
      });

      LOGGER.debug(`Videos to Upload for ${lang}: %o`, { videosToUploadCount: videosToUpload?.length }); // Display which videos are set for upload

      // Upload new videos
      for (const { video } of videosToUpload) {
        await processAndUploadVideoOlympics({
          video,
          lang,
          event: targetEvent,
          competitionConfig
        });
      }
    }
  } catch (err) {
    LOGGER.error(err, 'Error processing match videos:');
    throw err
  }
}

async function cleanUpVideos({ days = 10 }) {
  try {
    LOGGER.debug(`cleanUpVideos, removing older than ${days} days`);
    const xDaysAgo = new Date();
    xDaysAgo.setDate(xDaysAgo.getDate() - days);
    const result = await TemplatesRecordsM.aggregate([
      {
        $match: {
          name: {
            $regex: '^PRESSBOX',
            $options: 'i'
          },
          updatedAt: {
            $lt: xDaysAgo // Selects documents updated before 'x' days ago
          }
        }
      }
    ]).exec();

    const staticMediasToDelete = [];
    const mediaUuidsToDelete = [];
    for (const media of result) {
      const staticMediaUuid = media?.uuid;
      const staticMediaValue = _.find(media?.data?.fields, { id: 'background' })?.value;
      const mediaUuid = staticMediaValue?.uuid;

      if (!staticMediaValue || !staticMediaValue.url) {
        continue;
      }

      const deleteDirPath = path.join(APP_ROOT_PATH, MAINCONFIG.publicPath, staticMediaValue.url);

      try {
        await fs.remove(deleteDirPath);
        LOGGER.debug(`cleanUpVideos: ${deleteDirPath}`);
        staticMediasToDelete.push(staticMediaUuid);
        mediaUuidsToDelete.push(mediaUuid);
      } catch (err) {
        LOGGER.warn(`Failed to delete ${deleteDirPath}: ${err}`);
      }
    }

    if (staticMediasToDelete.length > 0) {
      await TemplatesRecordsM.deleteMany({ uuid: { $in: staticMediasToDelete } }).catch(err =>
        LOGGER.error(err, 'TemplatesRecordsM.deleteMany')
      );

      //to-do add some filters
      // 'options.includeEventVideos': true
      await TimelineM.updateMany(
        {},
        { $pull: { templates: { templateId: { $in: staticMediasToDelete } } } },
        { multi: true }
      );

      LOGGER.debug(`Deleted ${staticMediasToDelete.length} TemplatesRecordsM entries.`);
    }
    if (mediaUuidsToDelete.length > 0) {
      await MediaM.deleteMany({ uuid: { $in: mediaUuidsToDelete } }).catch(err =>
        LOGGER.error(err, 'MediaM.deleteMany')
      );
      LOGGER.debug(`Deleted ${mediaUuidsToDelete.length} MediaM entries.`);
    }

    const pressBoxDirectory = path.join(APP_ROOT_PATH, MAINCONFIG.publicPath, 'upload', 'pressbox', 'video');
    const files = await fs.readdir(pressBoxDirectory);

    let removed = 0;
    for (const file of files) {
      const filePath = path.join(pressBoxDirectory, file);
      const stats = await fs.stat(filePath);

      if (stats.mtime < xDaysAgo) {
        await fs.unlink(filePath);
        removed++;
      }
    }

    if (removed > 0) {
      LOGGER.debug(`directory has been clean-up ${pressBoxDirectory} #${removed} files removed`);
    }
  } catch (err) {
    LOGGER.error(err, `Error cleaning up videos error`)
  }
}

module.exports = {
  processMatchVideos,
  cleanUpVideos
};
