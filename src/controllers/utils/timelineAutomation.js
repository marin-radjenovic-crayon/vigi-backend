const _ = require('lodash');
const cfg = require('@/src/config');
const { CLIENTS } = require('@/src/constants/config');

//based on setup id 3 - Timeline Automation, this fn build list of unique templates across all timelines, it using deep compare
const collectUniqueTemplates = data => {
  // Start with 'preMatch', 'liveMatch', and 'postMatch' templates
  let templates = _.concat(data.preMatch.templates, data.liveMatch.templates, data.postMatch.templates);

  // Then add 'templates' from each item in 'custom'
  data.custom.forEach(customItem => {
    templates = _.concat(templates, customItem.templates);
  });

  // Use _.uniqWith and _.isEqual to remove duplicate objects
  const uniqueTemplates = _.uniqWith(templates, _.isEqual);

  // Sort by 'name' using _.sortBy()
  const sortedUniqueTemplates = _.sortBy(uniqueTemplates, 'name');
  return sortedUniqueTemplates;
};

function getFieldsToFind(fields, template) {
  const output = [];

  if (cfg.client === CLIENTS.ADLER) {
    _.forEach(fields, (obj, key) => {
      if (template?.name === 'staticmedia') {
        output.push({
          id: key,
          'value.label': obj
        });
      } else {
        output.push({
          id: key,
          value: obj
        });
      }
    });
  } else {
    _.forEach(fields, (obj, key) => {
      output.push({
        $elemMatch: {
          id: key,
          value: obj
        }
      });
    });
  }

  return output;
}

const attachAdlerTemplateSearchCriteria = (searchCriteria, template) => {
  if (template.fields) {
    searchCriteria['data.fields'] = {
      $elemMatch: {
        $or: getFieldsToFind(template.fields)
      }
    };
  }

  if (template.type) {
    searchCriteria['data.fields'] = {
      $elemMatch: {
        $or: getFieldsToFind({
          rankingType: template.type
        })
      }
    };

    template.fields = {
      rankingType: template.type
    };
  }

  if (template.keyword) {
    searchCriteria['$or'] = [
      {
        'data.fields': {
          $elemMatch: {
            $or: getFieldsToFind(
              {
                background: `${template.keyword}`
              },
              template
            )
          }
        }
      },
      {
        name: `Media:${template.keyword}`
      }
    ];
  }
};

module.exports = {
  collectUniqueTemplates,
  attachAdlerTemplateSearchCriteria,
  getFieldsToFind
};
