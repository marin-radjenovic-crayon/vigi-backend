module.exports = {
  name: 'Paris 2024 Olympics',
  timelines: {
    preLivePost: {
      label: 'PRE-LIVE-POST-MATCHDAY - [[COMPETITION_NAME]]',
      templates: [
        {
          template: 'wc_opener',
          fields: {
            openerType: 'global',
            lang: 'en'
          }
        },
        {
          template: 'wc_opener',
          fields: {
            openerType: 'global',
            lang: 'de'
          }
        },
        {
          template: 'wc_opener',
          fields: {
            openerType: 'customZone',
            lang: 'en'
          }
        },
        {
          template: 'wc_opener',
          fields: {
            openerType: 'customZone',
            lang: 'de'
          }
        },
        {
          template: 'wc_country_medals'
        },
        {
          template: 'staticmedia',
          fields: {
            type: 'generic'
          },
          custom: true
        },
        {
          template: 'staticmedia',
          fields: {
            type: 'pressbox'
          },
          custom: true
        },
        {
          template: 'wc_facts',
          custom: true
        },
        {
          template: 'wc_facts_curiosity',
          custom: true
        },
        {
          template: 'wc_static_facts',
          custom: true
        },
        {
          template: 'wc_customranking',
          custom: true
        },
        {
          template: 'staticslide',
          custom: true
        }
      ]
    }
  }
};
