module.exports = {
  default: {
    postMatch2: {
      label: 'POST-MATCH-2 - [[COMPETITION_NAME]]',
      templates: [
        {
          template: 'wc_opener',
          fields: {
            openerType: 'global'
          },
          global: true
        },
        {
          template: 'wc_seasontotals',
          fields: {
            statsType: 'offensive'
          },
          global: true
        },
        {
          template: 'wc_seasontotals',
          fields: {
            statsType: 'defensive'
          },
          global: true
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
          template: 'wc_tournamentranking',
          fields: {
            target: 'team',
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
          },
          global: true
        },
        {
          template: 'wc_standings',
          global: true
        },
        {
          template: 'wc_teamcompare_season'
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
          template: 'wc_tournamentranking',
          fields: {
            target: 'player',
            rankingPlayerType: 'goals'
          },
          global: true
        }
      ]
    }
  }
};
