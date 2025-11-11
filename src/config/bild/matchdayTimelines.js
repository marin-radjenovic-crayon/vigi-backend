const { prev_list, live_list, post_list, post2_list } = require("./template_list");

module.exports = {
  '1jt5mxgn4q5r6mknmlqv5qjh0': {
    name: 'English Premier League',
    competitionFormat: 'Domestic league',
    containerTimelines: {
      preLivePost: {
        label: 'PRE-LIVE-POST-MATCHDAY - [[COMPETITION_NAME]]'
      }
    },
    timelines: {
      preMatch: {
        label: 'PRE-MATCH - [[COMPETITION_NAME]]',
        templates: prev_list
      },
      liveMatch: {
        label: 'LIVE-MATCH - [[COMPETITION_NAME]]',
        templates: live_list
      },
      postMatch: {
        label: 'POST-MATCH - [[COMPETITION_NAME]]',
        templates: post_list
      },
      postMatch2: {
        label: 'POST-MATCH-2 - [[COMPETITION_NAME]]',
        templates: post2_list
      }
    }
  },
};
