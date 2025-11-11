const TimelineRecordsM = require('@/src/models/timeline_records');
const { eachOfLimit, eachOf, eachOfSeries } = require('async');
const { convertLocalTimeRangeToUTC, isWithinUTCRange } = require('@/src/controllers/utils/auto-updater');
const _ = require('lodash');
const cfg = require('@/src/config');
const async = require('async');
const {
  buildSearchCriteria,
  buildSearchCriteriaOlympic,
  getIndicator,
  getDefaultCompetitionFallback,
  parseCompetitionConfig
} = require('@/src/controllers/actions/helpers');
const TemplatesRecordsM = require('@/src/models/template_records');
const { createTemplate } = require('@/src/controllers/actions/handleTemplate');
const config = require('@/src/config');
const { getItemsPure } = require('@/src/middleware/db');
const { saveSingleTemplate } = require('@/src/controllers/templates/handleTemplate');
module.exports = async job => {
  const trackedCompetitions = MAINCONFIG.feeds?.heimspiel?.trackedCompetitions;

  try {
    let timelinesConfig = cfg?.feeds.heimspiel?.timelines;

    const templateUpdateConfig = cfg.liveUpdates.heimspiel.overview.templates;

    for (const templateToUpdate of templateUpdateConfig) {
      const searchCriteria = {
        template_name: templateToUpdate
      };

      if (trackedCompetitions.length) {
        for (const competition of trackedCompetitions) {
          const templates = await getItemsPure(searchCriteria, TemplatesRecordsM, ['uuid', 'event', 'updatedAt'], {
            limit: 20
          });

          LOGGER.debug('Hemispiel updates Templates total: %o', {
            templates_count: templates?.length,
            searchCriteria: searchCriteria
          });

          for (const dbTemplate of templates) {
            const targetEventData = dbTemplate?.event;
            const uuid = _.get(dbTemplate, 'uuid');

            const templateStructure = {
              params: {
                template: templateToUpdate,
                uuid: uuid
              },
              _takeScreenshot: false,
              _event: targetEventData
            };

            await saveSingleTemplate(templateStructure, {
              status: () => ({
                json: () => {}
              })
            });

            LOGGER.debug('Hemispiel Templates have been resaved %o', {
              template: templateToUpdate,
              uuid: uuid
            });
          }
        }
      }
    }
  } catch (err) {
    LOGGER.error(err, 'CATCH UPDATER overviewDaemon ERROR');
    return err;
  }
};
