const json = [
  {
    id: '3',
    name: 'Timeline automation',
    data: {
      preMatch: {
        label: 'PRE-MATCH',
        templates: [
          {
            name: 'adlerlineup',
            fields: {
              statsSide: 'home'
            }
          },
          {
            name: 'adlerlineup',
            fields: {
              statsSide: 'away'
            }
          },
          {
            name: 'adlerteamstats',
            fields: {
              statsSide: 'home'
            }
          },
          {
            name: 'adlerteamstats',
            fields: {
              statsSide: 'away'
            }
          },
          {
            name: 'adlertopscorer'
          },
          {
            name: 'adlerlivematchdays'
          },
          {
            name: 'adlerreferee'
          },
          {
            name: 'adlertable'
          },
          {
            name: 'staticmedia',
            keyword: 'Spieltagsflyer'
          },
          {
            name: 'staticmedia',
            keyword: 'Merch'
          },
          {
            name: 'staticmedia',
            keyword: 'WLAN'
          },
          {
            name: 'staticmedia',
            keyword: 'Social Wall'
          }
        ]
      },
      liveMatch: {
        label: 'LIVE-MATCH',
        templates: [
          {
            name: 'adlerlineup',
            fields: {
              statsSide: 'home'
            }
          },
          {
            name: 'adlerlineup',
            fields: {
              statsSide: 'away'
            }
          },
          {
            name: 'adlerteamstats',
            fields: {
              statsSide: 'home'
            }
          },
          {
            name: 'adlerteamstats',
            fields: {
              statsSide: 'away'
            }
          },
          {
            name: 'adlertopscorer'
          },
          {
            name: 'adlerlivematchdays'
          },
          {
            name: 'adlerreferee'
          },
          {
            name: 'adlerstatistics'
          },
          {
            name: 'adlermatchrankwise',
            type: 'distanceTravelled'
          },
          {
            name: 'adlermatchrankwise',
            type: 'fastestScater'
          },
          {
            name: 'adlermatchrankwise',
            type: 'shotSpeed'
          },
          {
            name: 'staticmedia',
            keyword: 'Spieltagsflyer'
          },
          {
            name: 'staticmedia',
            keyword: 'Merch'
          },
          {
            name: 'staticmedia',
            keyword: 'WLAN'
          },
          {
            name: 'staticmedia',
            keyword: 'Social Wall'
          }
        ]
      },
      postMatch: {
        label: 'POST-MATCH',
        templates: [
          {
            name: 'adlerlivematchdays'
          },
          {
            name: 'adlertable'
          },
          {
            name: 'adlerstatistics'
          },
          {
            name: 'staticmedia',
            keyword: 'Auf Wiedersehen'
          }
        ]
      },
      custom: [
        // Lineup Adler, Lineup Gegner, Team Stats Adler, Team Stats Gegner, Topscorer, Live Matchdays, Tabelle, Schiris, Tippspiel Ankündigung, Spieltagsflyer, VIP Shop, 7x Merch, WLAN, Social Wall, Tippspiel Ankündigung
        {
          label: 'VIP',
          templates: [
            {
              name: 'adlerlineup',
              fields: {
                statsSide: 'home'
              }
            },
            {
              name: 'adlerlineup',
              fields: {
                statsSide: 'away'
              }
            },
            {
              name: 'adlerteamstats',
              fields: {
                statsSide: 'home'
              }
            },
            {
              name: 'adlerteamstats',
              fields: {
                statsSide: 'away'
              }
            },
            {
              name: 'adlertopscorer'
            },
            {
              name: 'adlerlivematchdays'
            },
            {
              name: 'adlertable'
            },
            {
              name: 'adlerreferee'
            },
            {
              name: 'adlerstatistics'
            },
            {
              name: 'adlermatchrankwise',
              type: 'distanceTravelled'
            },
            {
              name: 'adlermatchrankwise',
              type: 'fastestScater'
            },
            {
              name: 'adlermatchrankwise',
              type: 'shotSpeed'
            },
            // Tippspiel Ankündigung, Spieltagsflyer, VIP Shop, 7x Merch, WLAN, Social Wall
            {
              name: 'staticmedia',
              keyword: 'Tippspiel Ankündigung'
            },
            {
              name: 'staticmedia',
              keyword: 'Spieltagsflyer'
            },
            {
              name: 'staticmedia',
              keyword: 'VIP Shop'
            },
            {
              name: 'staticmedia',
              keyword: '7x Merch'
            },
            {
              name: 'staticmedia',
              keyword: 'WLAN'
            },
            {
              name: 'staticmedia',
              keyword: 'Social Wall'
            }
          ]
        },
        // Stats, Live Matchdays, Tabelle, meiste Kilometer, Schnellster Spieler, härtester Schuss
        {
          label: 'Pause',
          templates: [
            {
              name: 'adlerstatistics'
            },
            {
              name: 'adlerlivematchdays'
            },
            {
              name: 'adlertable'
            },
            {
              name: 'adlermatchrankwise',
              type: 'distanceTravelled'
            },
            {
              name: 'adlermatchrankwise',
              type: 'fastestScater'
            },
            {
              name: 'adlermatchrankwise',
              type: 'shotSpeed'
            }
          ]
        },
        //Lineup Gegner, Team Stats Gegner, Team Stats Adler, Topscorer, Live Matchdays, Tabelle
        {
          label: 'Vorprogramm',
          templates: [
            {
              name: 'adlerlineup',
              fields: {
                statsSide: 'away'
              }
            },
            {
              name: 'adlerteamstats',
              fields: {
                statsSide: 'away'
              }
            },
            {
              name: 'adlerteamstats',
              fields: {
                statsSide: 'home'
              }
            },
            {
              name: 'adlertopscorer'
            },
            {
              name: 'adlerlivematchdays'
            },
            {
              name: 'adlertable'
            }
          ]
        },
        //S6 + Schiris
        {
          label: 'S6+Schiris',
          templates: [
            {
              name: 'adlerreferee'
            },
            {
              name: 'adlerlineup',
              fields: {
                statsSide: 'home'
              }
            },
            {
              name: 'adlerlineup',
              fields: {
                statsSide: 'away'
              }
            }
          ]
        }
      ]
    }
  }
];

module.exports = json;
