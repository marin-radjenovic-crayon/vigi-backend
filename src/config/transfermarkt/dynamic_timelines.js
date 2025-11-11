module.exports = {
  preMatch: {
    label: 'PRE-MATCH',
    templates: [
      {
        name: 'wc_opener'
      },
      {
        name: 'wc_matchdayoverview'
      },
      {
        name: 'wc_livematchday'
      },
      {
        name: 'wc_lineup',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'wc_lineuptactics',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'wc_lineup',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'wc_lineuptactics',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'wc_customranking'
      },
      {
        name: 'wc_nextgame'
      }
    ]
  },
  liveMatch: {
    label: 'LIVE-MATCH',
    templates: [
      {
        name: 'wc_opener'
      },
      {
        name: 'wc_livematchday'
      },
      {
        name: 'wc_teamcompare'
      },
      {
        name: 'wc_goalshots',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'wc_goalshots',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'wc_lineup',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'wc_lineuptactics',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'wc_lineup',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'wc_lineuptactics',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'wc_playercompare'
      },
      {
        name: 'wc_heatmap',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'wc_heatmap',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'wc_topperformers',
        fields: {
          rankingType: 'Goals'
        }
      },
      {
        name: 'wc_topperformers',
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
        name: 'wc_opener'
      },
      {
        name: 'wc_matchdayoverview'
      },
      {
        name: 'wc_livematchday'
      },
      {
        name: 'wc_teamcompare'
      },
      {
        name: 'wc_goalshots',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'wc_goalshots',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'wc_facts',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'wc_lineuptactics',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'wc_lineuptactics',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'wc_mvp'
      },
      {
        name: 'wc_playercompare'
      },
      {
        name: 'wc_heatmap',
        fields: {
          selectedSide: 'home'
        }
      },
      {
        name: 'wc_heatmap',
        fields: {
          selectedSide: 'away'
        }
      },
      {
        name: 'wc_topperformers',
        fields: {
          rankingType: 'Goals'
        }
      },
      {
        name: 'wc_topperformers',
        fields: {
          rankingType: 'Assists'
        }
      },
      {
        name: 'wc_nextgame'
      }
    ]
  },
  custom: []
};
