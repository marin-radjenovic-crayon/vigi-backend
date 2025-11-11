module.exports = {
  '4lp7vq583c95jwjhaohqbl9g4': {
    name: 'UEFA European Championship',
    competitionFormat: 'International cup',
    competitionType: 'international',
    containerTimelines: {
      preLivePost: {
        label: 'PRE-LIVE-POST-MATCHDAY - [[COMPETITION_NAME]]'
      }
    },
    timelines: {
      preMatch: {
        label: 'PRE-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_opener',
            fields: {
              lang: 'en'
            }
          },
          {
            template: 'of_lastgames',
            fields: {
              gameType: 'last'
            }
          },
          {
            template: 'of_matchup'
          },
          {
            template: 'of_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'of_playercompare_season'
          },
          {
            template: 'of_goals_over_season'
          },
        ],
        _before: {
          templates: []
        },
        _after: {
          templates: []
        }
      },
      liveMatch: {
        label: 'LIVE-MATCH - [[COMPETITION_NAME]]',
        templates: [ ]
      },
      postMatch: {
        label: 'POST-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_results',
          },
          {
            template: 'of_momentum',
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_mvp',
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
    }
  },
  '5te8vskbhb3t1n687hua2waac': {
    name: 'CONMEBOL Copa America',
    competitionFormat: 'International cup',
    competitionType: 'international',
    containerTimelines: {
      preLivePost: {
        label: 'PRE-LIVE-POST-MATCHDAY - [[COMPETITION_NAME]]'
      }
    },
    timelines: {
      preMatch: {
        label: 'PRE-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_opener',
            fields: {
              lang: 'en'
            }
          },
          {
            template: 'of_lastgames',
            fields: {
              gameType: 'last'
            }
          },
          {
            template: 'of_matchup'
          },
          {
            template: 'of_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'of_playercompare_season'
          },
          {
            template: 'of_goals_over_season'
          },
        ],
        _before: {
          templates: []
        },
        _after: {
          templates: []
        }
      },
      liveMatch: {
        label: 'LIVE-MATCH - [[COMPETITION_NAME]]',
        templates: [ ]
      },
      postMatch: {
        label: 'POST-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_results',
          },
          {
            template: 'of_momentum',
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_mvp',
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
    }
  },
  eaf2z13av1rs0jbwnnxfapdec: {
    name: 'UEFA Champions League',
    competitionFormat: 'International cup',
    competitionType: 'club',
    containerTimelines: {
      preLivePost: {
        label: 'PRE-LIVE-POST-MATCHDAY - [[COMPETITION_NAME]]'
      }
    },
    timelines: {
      preMatch: {
        label: 'PRE-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_opener',
            fields: {
              lang: 'en'
            }
          },
          {
            template: 'of_lastgames',
            fields: {
              gameType: 'last'
            }
          },
          {
            template: 'of_matchup'
          },
          {
            template: 'of_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'of_playercompare_season'
          },
          {
            template: 'of_goals_over_season'
          },
        ],
        _before: {
          templates: []
        },
        _after: {
          templates: []
        }
      },
      liveMatch: {
        label: 'LIVE-MATCH - [[COMPETITION_NAME]]',
        templates: [ ]
      },
      postMatch: {
        label: 'POST-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_results',
          },
          {
            template: 'of_momentum',
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_mvp',
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
    }
  },
  '3mjmai3idiul01s8jm0g7x6hg': {
    name: '2.Bundesliga',
    competitionFormat: 'Domestic league',
    containerTimelines: {
      preLivePost: {
        label: 'PRE-LIVE-POST-MATCHDAY - [[COMPETITION_NAME]]'
      }
    },
    timelines: {
      preMatch: {
        label: 'PRE-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_opener',
            fields: {
              lang: 'en'
            }
          },
          {
            template: 'of_lastgames',
            fields: {
              gameType: 'last'
            }
          },
          {
            template: 'of_matchup'
          },
          {
            template: 'of_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'of_playercompare_season'
          },
          {
            template: 'of_goals_over_season'
          },
        ],
        _before: {
          templates: []
        },
        _after: {
          templates: []
        }
      },
      liveMatch: {
        label: 'LIVE-MATCH - [[COMPETITION_NAME]]',
        templates: [ ]
      },
      postMatch: {
        label: 'POST-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_results',
          },
          {
            template: 'of_momentum',
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_mvp',
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
    }
  },
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
        templates: [
          {
            template: 'of_opener',
            fields: {
              lang: 'en'
            }
          },
          {
            template: 'of_lastgames',
            fields: {
              gameType: 'last'
            }
          },
          {
            template: 'of_matchup'
          },
          {
            template: 'of_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'of_playercompare_season'
          },
          {
            template: 'of_goals_over_season'
          },
        ],
        _before: {
          templates: []
        },
        _after: {
          templates: []
        }
      },
      liveMatch: {
        label: 'LIVE-MATCH - [[COMPETITION_NAME]]',
        templates: [ ]
      },
      postMatch: {
        label: 'POST-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_results',
          },
          {
            template: 'of_momentum',
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_mvp',
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
    }
  },
  '3r70u3fqh4hthsa2j4hsefis': {
    name: 'UEFA Nations League',
    competitionFormat: 'International cup',
    competitionType: 'international',
    containerTimelines: {
      preLivePost: {
        label: 'PRE-LIVE-POST-MATCHDAY - [[COMPETITION_NAME]]'
      }
    },
    timelines: {
      preMatch: {
        label: 'PRE-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_opener',
            fields: {
              lang: 'en'
            }
          },
          {
            template: 'of_lastgames',
            fields: {
              gameType: 'last'
            }
          },
          {
            template: 'of_matchup'
          },
          {
            template: 'of_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'of_playercompare_season'
          },
          {
            template: 'of_goals_over_season'
          },
        ],
        _before: {
          templates: []
        },
        _after: {
          templates: []
        }
      },
      liveMatch: {
        label: 'LIVE-MATCH - [[COMPETITION_NAME]]',
        templates: [ ]
      },
      postMatch: {
        label: 'POST-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_results',
          },
          {
            template: 'of_momentum',
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_mvp',
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
    }
  },
  '7n3ltxz65zjcd8z9eyr5i2wb8': {
    name: 'FIFA Club World Cup',
    competitionFormat: 'International cup',
    competitionType: 'club',
    containerTimelines: {
      preLivePost: {
        label: 'PRE-LIVE-POST-MATCHDAY - [[COMPETITION_NAME]]'
      }
    },
    timelines: {
      preMatch: {
        label: 'PRE-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_opener',
            fields: {
              lang: 'en'
            }
          },
          {
            template: 'of_lastgames',
            fields: {
              gameType: 'last'
            }
          },
          {
            template: 'of_matchup'
          },
          {
            template: 'of_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'of_playercompare_season'
          },
          {
            template: 'of_goals_over_season'
          },
        ],
        _before: {
          templates: []
        },
        _after: {
          templates: []
        }
      },
      liveMatch: {
        label: 'LIVE-MATCH - [[COMPETITION_NAME]]',
        templates: [ ]
      },
      postMatch: {
        label: 'POST-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'of_results',
          },
          {
            template: 'of_momentum',
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_hotzone',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'of_mvp',
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'of_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
    }
  },
};
