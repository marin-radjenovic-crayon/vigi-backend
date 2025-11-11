module.exports = {
  feedTypes: {
    opta: {
      name: 'opta'
    },
    heimspiel: {
      name: 'heimspiel'
    },
    del: {
      name: 'del'
    }
  },
  feedType: 'wiseHockey', // del/manual/opta/wiseHockey
  del: require('./del/feedCfg'),
  opta: require('./opta/feedCfg'),
  wiseHockey: require('./wisehockey/feedCfg'),
  heimspiel: require('./opta_opta_dynamic/heimspiel_de/config')
};
