module.exports = {
  eaf2z13av1rs0jbwnnxfapdec: {
    name: 'UEFA Champions League',
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
            template: 'wc_opener'
          },
          {
            template: 'wc_lineup',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_lineup',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_teamcompare'
          },
          {
            template: 'wc_lastgames',
            fields: {
              selectedSide: 'home',
              gameType: 'last'
            }
          },
          {
            template: 'wc_lastgames',
            fields: {
              selectedSide: 'away',
              gameType: 'last'
            }
          },
          {
            template: 'wc_livematchday',
            global: true
          },
          {
            template: 'wc_standings',
            global: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'global'
            },
            custom: true,
            dynamicMarkers: {
              template: ['wc_standings', 'wc_teamcompare_season']
            }
          },
          {
            template: 'wc_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              selectedSide: 'away'
            },
            custom: true
          },
          {
            template: 'wc_teamcompare_season'
          },
          {
            template: 'wc_customranking',
            custom: true
          },
          {
            template: 'wc_playercompare_season'
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'goals'
            },
            global: true
          },
          {
            template: 'wc_nextgame'
          }
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
        templates: [
          {
            template: 'wc_opener'
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_teamcompare'
          },
          {
            template: 'wc_goal'
          },
          {
            template: 'wc_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_livematchday',
            global: true
          },
          {
            template: 'wc_standings',
            global: true
          },
          {
            template: 'wc_playercompare'
          },
          {
            template: 'wc_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'goals'
            },
            global: true
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'assists'
            },
            global: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'live'
            },
            custom: true
          }
        ]
      },
      postMatch: {
        label: 'POST-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'wc_opener'
          },
          {
            template: 'wc_teamcompare'
          },
          {
            template: 'wc_goal'
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'global'
            },
            custom: true,
            dynamicMarkers: {
              template: ['wc_teamcompare', 'wc_heatmap']
            }
          },
          {
            template: 'wc_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              selectedSide: 'away'
            },
            custom: true
          },
          {
            template: 'wc_customranking',
            custom: true
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_lastgames',
            fields: {
              selectedSide: 'home',
              gameType: 'next'
            }
          },
          {
            template: 'wc_lastgames',
            fields: {
              selectedSide: 'away',
              gameType: 'next'
            }
          },
          {
            template: 'wc_livematchday',
            global: true
          },
          {
            template: 'wc_standings',
            global: true
          },
          {
            template: 'wc_mvp'
          },
          {
            template: 'wc_playercompare'
          },
          {
            template: 'wc_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'goals'
            },
            global: true
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'assists'
            },
            global: true
          },
          {
            template: 'wc_nextgame'
          }
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
    }
  },
  '1jt5mxgn4q5r6mknmlqv5qjh0': {
    name: 'English Premier League',
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
            template: 'wc_opener'
          },
          {
            template: 'wc_lineup',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_lineup',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_teamcompare'
          },
          {
            template: 'wc_lastgames',
            fields: {
              selectedSide: 'home',
              gameType: 'last'
            }
          },
          {
            template: 'wc_lastgames',
            fields: {
              selectedSide: 'away',
              gameType: 'last'
            }
          },
          {
            template: 'wc_livematchday',
            global: true
          },
          {
            template: 'wc_standings',
            global: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'global'
            },
            custom: true,
            dynamicMarkers: {
              template: ['wc_standings', 'wc_teamcompare_season']
            }
          },
          {
            template: 'wc_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              selectedSide: 'away'
            },
            custom: true
          },
          {
            template: 'wc_teamcompare_season'
          },
          {
            template: 'wc_customranking',
            custom: true
          },
          {
            template: 'wc_playercompare_season'
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'goals'
            },
            global: true
          },
          {
            template: 'wc_nextgame'
          }
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
        templates: [
          {
            template: 'wc_opener'
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_teamcompare'
          },
          {
            template: 'wc_goal'
          },
          {
            template: 'wc_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_livematchday',
            global: true
          },
          {
            template: 'wc_standings',
            global: true
          },
          {
            template: 'wc_playercompare'
          },
          {
            template: 'wc_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'goals'
            },
            global: true
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'assists'
            },
            global: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'live'
            },
            custom: true
          }
        ]
      },
      postMatch: {
        label: 'POST-MATCH - [[COMPETITION_NAME]]',
        templates: [
          {
            template: 'wc_opener'
          },
          {
            template: 'wc_teamcompare'
          },
          {
            template: 'wc_goal'
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'global'
            },
            custom: true,
            dynamicMarkers: {
              template: ['wc_teamcompare', 'wc_heatmap']
            }
          },
          {
            template: 'wc_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              selectedSide: 'away'
            },
            custom: true
          },
          {
            template: 'wc_customranking',
            custom: true
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_lineuptactics',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_goalshots',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_goalshots',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_attacking_zones',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_attacking_zones',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_lastgames',
            fields: {
              selectedSide: 'home',
              gameType: 'next'
            }
          },
          {
            template: 'wc_lastgames',
            fields: {
              selectedSide: 'away',
              gameType: 'next'
            }
          },
          {
            template: 'wc_livematchday',
            global: true
          },
          {
            template: 'wc_standings',
            global: true
          },
          {
            template: 'wc_mvp'
          },
          {
            template: 'wc_playercompare'
          },
          {
            template: 'wc_heatmap',
            fields: {
              selectedSide: 'home'
            }
          },
          {
            template: 'wc_heatmap',
            fields: {
              selectedSide: 'away'
            }
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'goals'
            },
            global: true
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'assists'
            },
            global: true
          },
          {
            template: 'wc_nextgame'
          }
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
    }
  }
};
