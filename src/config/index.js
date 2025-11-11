const path = require('path');
const _ = require('lodash');

const DOT_ENV_PATH = process.env.DOT_ENV_PATH || '.env';

const dotenv = require('dotenv-safe');

process.env.APP_ROOT_PATH = path.resolve('.');
global.APP_ROOT_PATH = process.env.APP_ROOT_PATH;

dotenv.config({ path: path.join(APP_ROOT_PATH, DOT_ENV_PATH) });

const envVars = process.env;

if (envVars.PORT && envVars.PORT != '80' && envVars.PORT != '8080' && envVars.NODE_ENV != 'test' && envVars.NODE_ENV != 'development') {
  global.APP_FULLURL = `${envVars.APPURL}:${envVars.PORT}`;
} else {
  global.APP_FULLURL = `${envVars.APPURL}`;
}

let CONFIG = {
  env: envVars.NODE_ENV,
  server: {
    appUrl: envVars.APPURL,
    port: envVars.PORT
  },
  setup: {
    general: {
      name: 'General',
      id: 1
    },
    event: {
      name: 'Global event',
      id: 2
    },
    timelineAutomation: {
      name: 'Timeline automation',
      id: 3
    }
  },
  videoproduction: {
    defaultVideoDuration: 15
  },
  frontendUrl: envVars.FRONTEND_URL,
  videoUrl: envVars.VIDEO_URL,
  logToFile: false,
  templates: require('./templates'),
  season: '2024',
  // feeds: require('./feeds'),
  publicPath: './public',
  upload: {
    path: 'upload'
  },
  screenshot: {
    // remoteBrowserUrl: 'http://localhost:10000',
    remoteBrowserUrl: envVars.REMOTE_BROWSER_URL,
    remoteBrowserPort: envVars.REMOTE_BROWSER_PORT,
    path: 'screenshots',
    frontendUrl: `${this.frontendUrl}/#/screenshot`,
    preview: {
      name: 'preview',
      width: 400,
      format: 'jpg'
    },
    download: {
      name: 'download',
      formats: ['1920x1080', '1080x1080'],
      format: 'jpg'
    }
  },
  language: {
    default: 'en',
    available: [
      {
        id: 'en',
        label: 'English',
        short: 'en'
      },
      {
        id: 'de',
        label: 'Deutsch',
        short: 'de'
      }
    ]
  },
  liveUpdateOn: false,
  liveUpdates: {
    del: {
      goals: {
        templates: ['adlergoal']
      },
      gameInfo: {
        templates: ['adlerresults', 'adlerstatistics', 'adlerreferee']
      },
      gameRoster: {
        templates: ['adlerlineup', 'adlerstartingsix']
      },
      teamStats: {
        templates: ['adlerstatistics']
      },
      standing: {
        templates: ['adlertable', 'adlerteamstats']
      },
      schedule: {
        templates: ['adlerlivematchdays', 'adlermatchrankwise']
      },
      teamStatsSeason: {
        templates: ['adlerteamstats']
      },
      playerStatsSeason: {
        templates: ['adlertopscorer']
      }
    },
    opta: {
      live: {
        maxTimeRangeInSeconds: 25,
        templates: [
          'wc_opener',
          'wc_heatmap',
          'wc_lineup',
          'wc_lineuptactics',
          'wc_mvp',
          'wc_playercompare',
          'wc_table',
          'wc_teamcompare',
          'wc_goalshots',
          'wc_teamcompare_season',
          'wc_playercompare_season',
          'wc_attacking_zones',
          'wc_goal',
          'wc_goal_overview',
          'fcb_goal',
        ]
      },
      season: {
        maxTimeRangeInSeconds: 60 * 35,
        templates: [
          'wc_lastgames',
          'wc_topperformers',
          'wc_seasontotals',
          'wc_teamcompare_season',
          'wc_playercompare_season',
          'wc_table',
          'wc_matchup'
        ]
      },
      overview: {
        maxTimeRangeInSeconds: 100,
        templates: ['wc_seasongroupoverview', 'wc_livematchday', 'wc_countrystadiums']
      },
      daily: {
        maxTimeRangeInSeconds: 60 * 60,
        templates: []
      },
      minutes5: {
        maxTimeRangeInSeconds: 60 * 6,
        templates: ['wc_standings', 'wc_tournamentranking', 'wc_matchdayoverview']
      }
    },
    optaVod: {
      enabled: true
    },
    heimspiel: {
      overview: {
        templates: ['wc_country_medals']
      }
    },
    heimspielBild: {
      live: {
        maxTimeRangeInSeconds: 25,
        templates: [
          'bild_lineuptactics',
          'bild_mvp',
          'bild_teamcompare_season',
          'bild_playercompare_season',
          'bild_attacking_zones',
          'bild_goal',
          'bild_goalshots',
          'bild_heatmap',
          'bild_hotzone',
          'bild_standings',
          'bild_lastgames',
          'bild_matchup',
          'bild_topperformers',
        ]
      },
      season: {
        maxTimeRangeInSeconds: 60 * 35,
        templates: [
          'bild_lastgames',
          'bild_topperformers',
          'bild_teamcompare_season',
          'bild_playercompare_season',
          'bild_matchup',
          'bild_standings',
          'bild_hotzone'
        ]
      },
      overview: {
        maxTimeRangeInSeconds: 100,
        templates: [
          // 'wc_seasongroupoverview',
          // 'wc_livematchday',
          // 'wc_countrystadiums'
        ]
      },
      daily: {
        maxTimeRangeInSeconds: 60 * 60,
        templates: []
      },
      minutes5: {
        maxTimeRangeInSeconds: 60 * 10,
        templates: [
          'bild_standings',
          'bild_hotzone'
          // 'wc_tournamentranking', 
          // 'wc_matchdayoverview'
        ]
      }
    },
  },
  // views: {
  //   'default': '1920x1080',
  //   formats: {
  //     '1080x1080': {
  //       label: '1080x1080', // facebook
  //       width: 1080,
  //       height: 1080
  //     },
  //     '1920x1080': {
  //       label: '1920x1080', // twitter
  //       width: 1920,
  //       height: 1080
  //     },
  //     '1080x1920': {
  //       label: '1080x1920',
  //       width: 1080,
  //       height: 1920
  //     }
  //   }
  // },
  matchdayTemplatesToCreate: [],
  matchdayTimelines: []
};

if (envVars.CLIENT_CFG && envVars.CLIENT_CFG !== 'tests') {
  const clientMerge = require(`./clients/${envVars.CLIENT_CFG}`);
  CONFIG = _.merge(CONFIG, clientMerge);

  //overwrite templates, instead of merge
  if (clientMerge.templates?.length) {
    CONFIG.templates = clientMerge.templates;
  }
}

if (envVars.CLIENT_CFG && envVars.CLIENT_CFG === 'tests') {
  console.log("TESTING config: clients/opta_opta_dynamic_test")
  const testMerge = require(`./clients/opta_opta_dynamic_test`);
  // const testMerge = require(`./clients/test`)
  CONFIG = _.merge(CONFIG, testMerge);
}

// console.log('envVars.CLIENT_CFG', envVars.CLIENT_CFG);

module.exports = CONFIG;
