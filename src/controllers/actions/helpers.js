const { getFieldsToFind } = require('@/src/controllers/utils/timelineAutomation');
const _ = require('lodash');
const TemplatesRecordsM = require('@/src/models/template_records');
const { getEventData, getEventDataForBild } = require('@/src/controllers/updater/helpers');
const { CLIENTS } = require('@/src/constants/config');

const buildSearchCriteria = (template, eventId, competitionConfig, stageName, currentWeek, currentLeg) => {
  let pickLimit = 0;
  const searchCriteria = {
    template_name: template.template || template.name,
    'event.competitionId': competitionConfig.competitionId
  };

  if (eventId) {
    searchCriteria['event.eventId'] = eventId;
  }

  if (template.side) {
    searchCriteria['data.fields'] = {
      $elemMatch: {
        id: 'selectedSide',
        value: template.side
      }
    };
  }

  if (template.rankingType) {
    searchCriteria['data.fields'] = {
      $elemMatch: {
        id: 'rankingType',
        value: template.rankingType
      }
    };
  }

  if (template.fields) {
    searchCriteria['data.fields'] = {
      $all: getFieldsToFind(template.fields)
    };
  }

  if (template.global) {
    delete searchCriteria?.['event.eventId'];
    pickLimit = 1;

    if (stageName) {
      searchCriteria['event.stage.name'] = stageName;
    }

    if (currentWeek && searchCriteria.template_name === 'wc_livematchday') {
      searchCriteria['data.dynamic.matchInfo.week'] = currentWeek;
    }

    if (searchCriteria.template_name === 'wc_livematchday' && currentLeg) {
      searchCriteria['$and'] = [
        { 'data.dynamic.matchDetails.leg': { $exists: true } },
        { 'data.dynamic.matchDetails.leg': currentLeg }
      ];
    }
  }

  return {
    searchCriteria,
    pickLimit
  };
};

// event: {
//   id: '269',
//     name: 'Olympic Games, 10,000m (F)',
//     shortname: '10,000m (F)',
//     microname: '',
//     type: 'single',
//     gender: 'female',
//     current_season_id: '62132',
//     current_round_id: '178826',
//     current_matchday: '0',
//     policy: [Object],
//     age: [Object],
//     topic: [Object],
//     parentId: '110',
//     parentName: 'Running 10.000m',
//     competitionId: '269',
//     knownName: '10,000m (F)',
//     competitionName: '10,000m (F)',
//     parentTopic: [Object],
//     country: [Object],
//     feedType: 'heimspiel'
// }

const buildSearchCriteriaOlympic = ({ template, event }) => {
  let pickLimit = 0;
  const searchCriteria = {
    template_name: template.template || template.name,
    'event.competitionId': event?.competitionId,
    'event.feedType': 'heimspiel'
  };

  if (!event) {
    delete searchCriteria?.['event.competitionId'];
  }

  if (template.side) {
    searchCriteria['data.fields'] = {
      $elemMatch: {
        id: 'selectedSide',
        value: template.side
      }
    };
  }

  if (template.rankingType) {
    searchCriteria['data.fields'] = {
      $elemMatch: {
        id: 'rankingType',
        value: template.rankingType
      }
    };
  }

  if (template.fields) {
    searchCriteria['data.fields'] = {
      $all: getFieldsToFind(template.fields)
    };
  }

  return {
    searchCriteria,
    pickLimit
  };
};

const parseCompetitionConfig = (timelineConfig, originConfig) => {
  const updated = _.cloneDeep(timelineConfig);

  if (!updated) {
    return;
  }

  updated.name = originConfig.competitionName;
  _.set(
    updated,
    'containerTimelines.preLivePost.label',
    updated.containerTimelines.preLivePost.label?.replace('[[COMPETITION_NAME]]', updated.name)
  );

  _.set(
    updated,
    'timelines.preMatch.label',
    updated.timelines.preMatch.label?.replace('[[COMPETITION_NAME]]', updated.name)
  );

  _.set(
    updated,
    'timelines.liveMatch.label',
    updated.timelines.liveMatch.label?.replace('[[COMPETITION_NAME]]', updated.name)
  );

  _.set(
    updated,
    'timelines.postMatch.label',
    updated.timelines.postMatch.label?.replace('[[COMPETITION_NAME]]', updated.name)
  );

  _.set(
    updated,
    'timelines.postMatch2.label',
    updated.timelines.postMatch2?.label?.replace('[[COMPETITION_NAME]]', updated.name)
  );

  const parsedTemplates = updated.timelines.postMatch2?.templates?.map(t => {
    const entry = {
      ...t
    };

    if (t?.fields?.header) {
      entry.fields.header = t.fields.header.replace('[[COMPETITION_NAME]]', updated.name);
    }

    return entry;
  });

  _.set(updated, 'timelines.postMatch2.templates', parsedTemplates);

  return updated;
};

const updateSelectedSide = (templates, config) => {
  return templates.map(tpl => {
    // clone template to avoid mutating the original
    const updated = { ...tpl };

    if (updated.fields && 'selectedSide' in updated.fields) {
      updated.fields = { ...updated.fields, selectedSide: config };
    }

    if (updated.side) {
      updated.side = config;
    }

    return updated;
  });
};

const filterUniqueRecords = (records, allowedDuplicates) => {
  const seenTemplateIds = {}; // Tracks seen IDs for templates not allowed to have duplicates
  return _.filter(records, record => {
    // Include if template allows duplicates or templateId hasn't been seen
    if (allowedDuplicates.includes(record.template) || record.global || !seenTemplateIds[record.templateId]) {
      seenTemplateIds[record.templateId] = true; // Mark this ID as seen for non-allowed duplicates
      return true;
    }
    // Skip non-allowed duplicate templateIds
    return false;
  });
};

const removeDuplicateTemplates = (templates) => {
  const seen = new Set();
  return templates.filter(tpl => {
    if (seen.has(tpl.template)) return false;
    seen.add(tpl.template);
    return true;
  });
};

const filterUniqueTemplateIds = records => {
  const seenTemplateIds = {}; // Tracks seen IDs for templates not allowed to have duplicates
  return _.filter(records, record => {
    // Include if template allows duplicates or templateId hasn't been seen
    if (!seenTemplateIds[record.templateId]) {
      seenTemplateIds[record.templateId] = true; // Mark this ID as seen for non-allowed duplicates
      return true;
    }
    // Skip non-allowed duplicate templateIds
    return false;
  });
};

const getDefaultCompetitionFallback = competitionConfig => {
  let output = null;
  switch (competitionConfig?.competitionFormat) {
    case 'Domestic league':
      {
        //premiere league
        output = '1jt5mxgn4q5r6mknmlqv5qjh0';
      }
      break;
    case 'International cup':
      {
        //champions league
        output = 'eaf2z13av1rs0jbwnnxfapdec';
      }
      break;
    default: {
      //premiere league
      output = '1jt5mxgn4q5r6mknmlqv5qjh0';
    }
  }

  return output;
};

const getUsedPreTemplates = competitionConfig => {
  const preTemplates = competitionConfig?.timelines?.preMatch?.templates;
  const usedTemplates = [
    ...(preTemplates || []),
  ].map(t => ({
    ...t,
    name: t?.template
  }));

  // Function to serialize an object with sorted keys
  const serializeSorted = obj => {
    const sortedKeys = Object.keys(obj).sort();
    const sortedObj = {};
    for (const key of sortedKeys) {
      sortedObj[key] = obj[key];
    }
    return JSON.stringify(sortedObj);
  };

  const uniqueSet = new Set();

  const uniqueTemplates = usedTemplates.filter(template => {
    const templateString = serializeSorted(template);
    if (uniqueSet.has(templateString) || template?.custom) {
      return false;
    } else {
      uniqueSet.add(templateString);
      return true;
    }
  });

  return uniqueTemplates;
};

const getUsedPostTemplates = competitionConfig => {
  const preTemplates = competitionConfig?.timelines?.postMatch?.templates;
  const usedTemplates = [
    ...(preTemplates || []),
  ].map(t => ({
    ...t,
    name: t?.template
  }));

  // Function to serialize an object with sorted keys
  const serializeSorted = obj => {
    const sortedKeys = Object.keys(obj).sort();
    const sortedObj = {};
    for (const key of sortedKeys) {
      sortedObj[key] = obj[key];
    }
    return JSON.stringify(sortedObj);
  };

  const uniqueSet = new Set();

  const uniqueTemplates = usedTemplates.filter(template => {
    const templateString = serializeSorted(template);
    if (uniqueSet.has(templateString) || template?.custom) {
      return false;
    } else {
      uniqueSet.add(templateString);
      return true;
    }
  });

  return uniqueTemplates;
};

const getUsedTemplates = competitionConfig => {
  const preTemplates = competitionConfig?.timelines?.preMatch?.templates;
  const liveTemplates = competitionConfig?.timelines?.liveMatch?.templates;
  const postTemplates = competitionConfig?.timelines?.postMatch?.templates;
  const post2Templates = competitionConfig?.timelines?.postMatch2?.templates;
  const usedTemplates = [
    ...(preTemplates || []),
    ...(liveTemplates || []),
    ...(postTemplates || []),
    ...(post2Templates || [])
  ].map(t => ({
    ...t,
    name: t?.template
  }));

  // Function to serialize an object with sorted keys
  const serializeSorted = obj => {
    const sortedKeys = Object.keys(obj).sort();
    const sortedObj = {};
    for (const key of sortedKeys) {
      sortedObj[key] = obj[key];
    }
    return JSON.stringify(sortedObj);
  };

  const uniqueSet = new Set();

  const uniqueTemplates = usedTemplates.filter(template => {
    const templateString = serializeSorted(template);
    if (uniqueSet.has(templateString) || template?.custom) {
      return false;
    } else {
      uniqueSet.add(templateString);
      return true;
    }
  });

  return uniqueTemplates;
};

const getIndicator = pick => {
  return `${pick?.home?.shortName || pick?.home?.officialName || pick?.home?.shortname} vs ${pick?.away?.shortName || pick?.away?.officialName || pick?.away?.shortname}`;
};

const syncTimelineByStatus = async ({
  matchdayMatch,
  competitionConfig,
  currentWeek,
  timelineTemplatesConfig,
  targetTimelineToMutate,
  customTimelineVideos
}) => {
  const dynamicTemplatesData = {};
  const dynamicMarkersMap = {}; // Store dynamic marker data for each template

  const matchEvent = MAINCONFIG.client === CLIENTS.BILD ? getEventDataForBild(matchdayMatch, competitionConfig) : getEventData(matchdayMatch, competitionConfig);
  const matchStatus = matchdayMatch?.matchStatus;
  const matchLeg = matchdayMatch?.leg;

  // Phase 1: Fetch and store data for all templates
  for (const template of timelineTemplatesConfig) {
    const { searchCriteria, pickLimit } = buildSearchCriteria(
      template,
      matchdayMatch.id,
      competitionConfig,
      null,
      currentWeek,
      matchLeg
    );

    //video try exception on request Bayern vs Arsenal 17.04.2024 21:00
    if (
      matchdayMatch.id === '3aig9bv4ckj7kj6gvh0hmayac' &&
      matchStatus === 'Fixture' &&
      template.template !== 'staticmedia'
    ) {
      continue;
    }

    const pickLimitNumber = [
      'staticmedia',
      'wc_facts',
      'wc_facts_curiosity',
      'wc_static_facts',
      'wc_customranking',
      'staticslide',
      'wc_goal',
      'fcb_goal',
      'bild_goal'
    ].includes(template.template)
      ? 0
      : 1;

    const toPickArray =
      (await TemplatesRecordsM.find(searchCriteria, null, {
        lean: true,
        sort: { updatedAt: -1 }
      })
        .limit(pickLimitNumber)
        .catch(err => {
          LOGGER.error(err, 'syncMatchdayTimelines->toPick PRE-MATCH catch %o');
        })) || [];
    if (template.dynamicMarkers) {
      dynamicTemplatesData[template.template] = dynamicTemplatesData[template.template] || [];
      dynamicMarkersMap[template.template] = template.dynamicMarkers.template; // Store dynamic marker info

      for (const pick of toPickArray) {
        if (pick?.uuid) {
          const lng = _.find(pick?.data?.fields, { id: 'lang' })?.value;
          const insertion = {
            templateId: pick.uuid,
            template: pick.template_name,
            name: pick.name,
            createdAt: pick.createdAt,
            lng,
            eventId: pick?.event?.eventId,
            global: template?.global || false,
            indicator: getIndicator(matchEvent)
          };

          dynamicTemplatesData[template.template].push(insertion);

          if (template?.fields?.type === 'pressbox') {
            customTimelineVideos.push(insertion);
          }
        }
      }
    } else {
      // Process non-dynamic templates normally
      for (const pick of toPickArray) {
        if (pick?.uuid) {
          const lng = _.find(pick?.data?.fields, { id: 'lang' })?.value;
          const insertion = {
            templateId: pick.uuid,
            template: pick.template_name,
            name: pick.name,
            createdAt: pick.createdAt,
            lng,
            eventId: pick?.event?.eventId,
            global: template?.global || false,
            indicator: getIndicator(matchEvent),
            data: pick.data,
          };
          targetTimelineToMutate.push(insertion);
          if (template?.fields?.type === 'pressbox') {
            customTimelineVideos.push(insertion);
          }
        }
      }
    }
  }
  // Phase 2: Distribute dynamic template data
  Object.keys(dynamicTemplatesData).forEach(templateKey => {
    const entries = dynamicTemplatesData[templateKey] || []; // Ensure entries is always an array
    const markers = dynamicMarkersMap[templateKey] || [];

    const distribution = {};
    entries.forEach(entry => {
      const eventId = entry.eventId;
      distribution[eventId] = distribution[eventId] || [];
      distribution[eventId].push(entry);
    });

    // Process each eventId for distribution
    Object.keys(distribution).forEach(eventId => {
      const eventData = distribution[eventId]; // Now this should definitely be an array
      const langGroups = eventData.reduce((acc, entry) => {
        acc[entry.lng] = acc[entry.lng] || [];
        acc[entry.lng].push(entry);
        return acc;
      }, {});

      // Create an alternating order of languages
      const orderedEntries = [];
      const langKeys = Object.keys(langGroups);
      let done = false;

      while (!done) {
        done = true;
        langKeys.forEach(lang => {
          if (langGroups[lang].length > 0) {
            orderedEntries.push(langGroups[lang].shift());
            done = false;
          }
        });
      }

      // Distribute entries across markers
      const perMarker = Math.ceil(orderedEntries.length / markers.length);
      let remainingEntries = [...orderedEntries];

      markers.forEach((markerTemplate, idx) => {
        const sliceSize = perMarker + (idx < remainingEntries.length % markers.length ? 1 : 0);
        const markerIndex = targetTimelineToMutate.findIndex(
          post => post.template === markerTemplate && post.eventId === eventId
        );
        const toInsert = remainingEntries.splice(0, sliceSize);

        toInsert.forEach((insertData, insertIndex) => {
          targetTimelineToMutate.splice(markerIndex + 1 + insertIndex, 0, insertData);
        });
      });
    });
  });
};

const prepareMatchIsoString = props => {
  return props?.date?.replace('Z', 'T') + props?.time;
};

const prepareMatchDateForBild = (match) => {
  if (!match?.match_date) return null;

  const dateTimeStr = match.match_time
    ? `${match.match_date} ${match.match_time}`
    : match.match_date;

  // Parse using correct format
  return parse(
    dateTimeStr,
    match.match_time ? 'dd.MM.yyyy HH:mm' : 'dd.MM.yyyy',
    new Date()
  );
};

const distributeVideos = (templates, videos) => {
  const totalTemplates = templates.length;
  const totalVideos = videos.length;
  const interval = Math.ceil(totalTemplates / (totalVideos + 1));
  let updatedTemplates = [...templates];

  // Collect existing template IDs to avoid duplicates
  const existingTemplateIds = new Set(templates.map(template => template.templateId));

  videos.forEach((video, index) => {
    // Check if templateId already exists in the array
    if (existingTemplateIds.has(video.templateId)) {
      return; // Skip this video if templateId already exists
    }

    const position = (index + 1) * interval;
    if (position < updatedTemplates.length) {
      updatedTemplates.splice(position + index, 0, video);
    } else {
      updatedTemplates.push(video);
    }

    // Add the new templateId to the set
    existingTemplateIds.add(video.templateId);
  });

  return updatedTemplates;
};

module.exports = {
  getUsedPreTemplates,
  getUsedPostTemplates,
  getUsedTemplates,
  buildSearchCriteria,
  parseCompetitionConfig,
  updateSelectedSide,
  filterUniqueRecords,
  removeDuplicateTemplates,
  getDefaultCompetitionFallback,
  syncTimelineByStatus,
  getIndicator,
  filterUniqueTemplateIds,
  prepareMatchIsoString,
  prepareMatchDateForBild,
  distributeVideos,
  buildSearchCriteriaOlympic
};
