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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_countrystadiums'
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
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_seasongroupoverview'
          },
          {
            template: 'wc_table'
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'generic',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'assists'
            },
            global: true
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'totalpoints'
            },
            global: true
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_livematchday'
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
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_goal_overview'
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
          {
            template: 'wc_seasongroupoverview'
          },
          {
            template: 'wc_countrystadiums'
          },
          {
            template: 'wc_table'
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_matchdayoverview'
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_goal_overview'
          },
          {
            template: 'wc_goal'
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
          // {
          //   template: 'wc_lastgames',
          //   fields: {
          //     selectedSide: 'home',
          //     gameType: 'next'
          //   }
          // },
          // {
          //   template: 'wc_lastgames',
          //   fields: {
          //     selectedSide: 'away',
          //     gameType: 'next'
          //   }
          // },
          {
            template: 'wc_seasongroupoverview'
          },
          {
            template: 'wc_table'
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
          }
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_matchdayoverview'
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
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_seasongroupoverview'
          },
          {
            template: 'wc_table'
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'generic',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'assists'
            },
            global: true
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'totalpoints'
            },
            global: true
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_livematchday'
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
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_goal_overview'
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
          {
            template: 'wc_seasongroupoverview'
          },
          {
            template: 'wc_table'
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_matchdayoverview'
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_goal_overview'
          },
          {
            template: 'wc_goal'
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
          // {
          //   template: 'wc_lastgames',
          //   fields: {
          //     selectedSide: 'home',
          //     gameType: 'next'
          //   }
          // },
          // {
          //   template: 'wc_lastgames',
          //   fields: {
          //     selectedSide: 'away',
          //     gameType: 'next'
          //   }
          // },
          {
            template: 'wc_seasongroupoverview'
          },
          {
            template: 'wc_table'
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
          }
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
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
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_seasongroupoverview'
          },
          {
            template: 'wc_standings',
            global: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'generic',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'assists'
            },
            global: true
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'totalpoints'
            },
            global: true
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_livematchday'
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
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_goal_overview'
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
          {
            template: 'wc_seasongroupoverview'
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
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
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_goal_overview'
          },
          {
            template: 'wc_goal'
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
          {
            template: 'wc_seasongroupoverview'
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
          }
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
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
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_nextgame',
            fields: {
              type: 'global'
            }
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
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
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
          },
          {
            template: 'wc_goal_overview'
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
          },
          {
            template: 'wc_goal_overview'
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
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
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
            template: 'wc_matchup'
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
            template: 'wc_nextgame',
            fields: {
              type: 'global'
            }
          }
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
      // postMatch2: {
      //   label: 'POST-MATCH-2 - [[COMPETITION_NAME]]',
      //   templates: [
      //   ]
      // } // Don't have postMatch2 at the moment for 2.Bundesliga
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
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
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'cleanSheet'
            },
            global: true
          },
          {
            template: 'wc_nextgame',
            fields: {
              type: 'global'
            }
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
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
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
          },
          {
            template: 'wc_goal_overview'
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
          },
          {
            template: 'wc_goal_overview'
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
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
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
            template: 'wc_matchup'
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
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'cleanSheet'
            },
            global: true
          },
          {
            template: 'wc_nextgame',
            fields: {
              type: 'global'
            }
          }
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
      // postMatch2: {
      //   label: 'POST-MATCH-2 - [[COMPETITION_NAME]]',
      //   templates: [
      //   ]
      // }
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
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
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_table'
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'generic',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'assists'
            },
            global: true
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'totalpoints'
            },
            global: true
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_livematchday'
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
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_goal_overview'
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
          {
            template: 'wc_table'
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_goal_overview'
          },
          {
            template: 'wc_goal'
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
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
            template: 'wc_table'
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
          }
        ]
      },
      postMatch2: null
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
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
            template: 'staticmedia',
            fields: {
              type: 'pressbox',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_seasongroupoverview'
          },
          {
            template: 'wc_livematchday'
          },
          {
            template: 'wc_standings',
          },
          {
            template: 'wc_matchdayoverview'
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'staticmedia',
            fields: {
              type: 'generic',
              timelineType: 'pre'
            },
            custom: true
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare_season',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'assists'
            },
            global: true
          },
          {
            template: 'wc_tournamentranking',
            fields: {
              target: 'player',
              rankingPlayerType: 'totalpoints'
            },
            global: true
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
            }
          },
          {
            template: 'wc_livematchday'
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
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_goal_overview'
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
          {
            template: 'wc_seasongroupoverview'
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
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'en'
            }
          },
          {
            template: 'wc_opener',
            fields: {
              openerType: 'matchday',
              lang: 'de'
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
            template: 'wc_teamcompare',
            fields: {
              statsType: 'offensive'
            }
          },
          {
            template: 'wc_teamcompare',
            fields: {
              statsType: 'defensive'
            }
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
            template: 'wc_goal_overview'
          },
          {
            template: 'wc_goal'
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'home',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'away',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_facts_curiosity',
            fields: {
              type: 'match',
              timelineType: 'post'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
            fields: {
              selectedSide: 'home'
            },
            custom: true
          },
          {
            template: 'wc_static_facts',
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
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'home'
          //   }
          // },
          // {
          //   template: 'wc_hotzone',
          //   fields: {
          //     selectedSide: 'away'
          //   }
          // },
          {
            template: 'wc_seasongroupoverview'
          },
          {
            template: 'wc_livematchday'
          },
          {
            template: 'wc_standings',
          },
          {
            template: 'wc_matchdayoverview'
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
          }
        ]
      },
      postMatch2: require('./timelines').default.postMatch2
    }
  },
};
