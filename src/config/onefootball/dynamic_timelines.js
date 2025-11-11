module.exports = {
  preMatch: {
    label: 'PRE-MATCH',
    templates: [
      {
        name: 'of_opener'
      },
      {
        name: 'of_matchdayoverview'
      },
      {
        name: 'of_livematchday'
      },
      {
        name: 'of_lineup',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'of_lineuptactics',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'of_lineup',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'of_lineuptactics',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'of_customranking'
      },
      {
        name: 'of_nextgame'
      }
    ]
  },
  liveMatch: {
    label: 'LIVE-MATCH',
    templates: [
      {
        name: 'of_opener'
      },
      {
        name: 'of_livematchday'
      },
      {
        name: 'of_teamcompare'
      },
      {
        name: 'of_goalshots',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'of_goalshots',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'of_lineup',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'of_lineuptactics',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'of_lineup',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'of_lineuptactics',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'of_playercompare'
      },
      {
        name: 'of_heatmap',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'of_heatmap',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'of_topperformers',
        fields: {
          rankingType: 'Goals'
        }
      },
      {
        name: 'of_topperformers',
        fields: {
          rankingType: 'Assists'
        }
      }
    ]
  },
  postMatch: {
    label: 'POST-MATCH',
    templates: [
      {
        name: 'of_opener'
      },
      {
        name: 'of_matchdayoverview'
      },
      {
        name: 'of_livematchday'
      },
      {
        name: 'of_teamcompare'
      },
      {
        name: 'of_goalshots',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'of_goalshots',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'of_facts',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'of_lineuptactics',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'of_lineuptactics',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'of_mvp'
      },
      {
        name: 'of_playercompare'
      },
      {
        name: 'of_heatmap',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'of_heatmap',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'of_topperformers',
        fields: {
          rankingType: 'Goals'
        }
      },
      {
        name: 'of_topperformers',
        fields: {
          rankingType: 'Assists'
        }
      },
      {
        name: 'of_nextgame'
      }
    ]
  },
  custom: []
};
