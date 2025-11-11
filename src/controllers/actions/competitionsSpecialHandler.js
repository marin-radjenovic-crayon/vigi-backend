const _ = require('lodash');
const TimelineRecordsM = require('@/src/models/timeline_records');
const euro2024TimelineOnlyGerman = async ({
  competitionConfig,
  combinedTimeline,
  firstMatchdayEvent,
  timelinesConfig,
  germanEventIds
}) => {
  // knownName: 'UEFA European Championship Finals',
  //   id: '8tddm56zbasf57jkkay4kbf11'
  if (competitionConfig.competitionIdReal !== '8tddm56zbasf57jkkay4kbf11') {
    return;
  }

  const timelineName = `DFB-GERMAN ${timelinesConfig.containerTimelines.preLivePost.label}`;

  const german = combinedTimeline.filter(m => germanEventIds.includes(m?.eventId));

  const uniqueTemplateIds = new Set();
  const filtered = [];

  for (let i = 0; i < german.length; i++) {
    const item = german[i];
    if (item.global && !uniqueTemplateIds.has(item?.templateId)) {
      uniqueTemplateIds.add(item?.templateId);
      filtered.push(item);
    } else if (!item.global) {
      filtered.push(item);
    }
  }

  if (filtered?.length) {
    await TimelineRecordsM.findOneAndUpdate(
      { name: timelineName },
      {
        $set: {
          data: {},
          format: '1920x1080',
          name: timelineName,
          templates: filtered,
          options: { mode: 'auto' },
          event: firstMatchdayEvent
        }
      },
      {
        lean: true,
        new: true,
        upsert: true
      }
    ).catch(err => {
      LOGGER.error(err, 'euro2024TimelineOnlyGerman err')
    });
  }
};

module.exports = {
  euro2024TimelineOnlyGerman
};
