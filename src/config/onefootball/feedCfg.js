module.exports = {
  url: 'https://api.performfeeds.com/',
  localTimeRange: {
    from: '08:00:00',
    to: '01:00:00'
  },
  trackedCompetitions: [
    // {
    //   knownName: 'English Premier League',
    //   tournamentCalendarId: '51r6ph2woavlbbpk8f29nynf8',
    //   id: '2kwbbcootiqqgmrzs6o5inle5',
    //   guessedTimezone: 'Europe/London',
    //   timezoneOffset: '+01:00'
    // },
    // {
    //   knownName: 'UEFA Champions League',
    //   tournamentCalendarId: '2mr0u0l78k2gdsm79q56tb2fo',
    //   id: '4oogyu6o156iphvdvphwpck10',
    //   guessedTimezone: 'Europe/Paris',
    //   timezoneOffset: '+02:00'
    // },
    {
      knownName: 'German Bundesliga',
      tournamentCalendarId: '2bchmrj23l9u42d68ntcekob8',
      id: '6by3h89i2eykc341oz7lv1ddd',
      guessedTimezone: 'Europe/Berlin',
      timezoneOffset: '+02:00'
    },
    // {
    //   knownName: 'UEFA Nations League',
    //   tournamentCalendarId: '3r70u3fqh4hthsa2j4hsefis',
    //   id: '595nsvo7ykvoe690b1e4u5n56',
    //   guessedTimezone: 'Europe/Madrid',
    //   timezoneOffset: '+02:00'
    // },
    // {
    //   knownName: 'French Ligue 1',
    //   tournamentCalendarId: 'dbxs75cag7zyip5re0ppsanmc',
    //   id: 'dm5ka0os1e3dxcp3vh05kmp33',
    //   guessedTimezone: 'Europe/Paris',
    //   timezoneOffset: '+02:00'
    // },
    // {
    //   knownName: 'Italian Serie A',
    //   tournamentCalendarId: 'emdmtfr1v8rey2qru3xzfwges',
    //   id: '1r097lpxe0xn03ihb7wi98kao',
    //   guessedTimezone: 'Europe/Rome',
    //   timezoneOffset: '+02:00'
    // },
    // {
    //   knownName: 'Spanish La Liga',
    //   tournamentCalendarId: '80zg2v1cuqcfhphn56u4qpyqc',
    //   id: '34pl8szyvrbwcmfkuocjm3r6t',
    //   guessedTimezone: 'Europe/Madrid',
    //   timezoneOffset: '+02:00'
    // },
    // {
    //   knownName: 'Dutch Eredivisie',
    //   tournamentCalendarId: 'aouykkl1rt7zo06sg0kbzkbh0',
    //   id: 'akmkihra9ruad09ljapsm84b3',
    //   guessedTimezone: 'Europe/Amsterdam',
    //   timezoneOffset: '+02:00'
    // },
    // {
    //   knownName: 'Europa League',
    //   tournamentCalendarId: '7ttpe5jzya3vjhjadiemjy7mc',
    //   id: '4c1nfi2j1m731hcay25fcgndq',
    //   guessedTimezone: 'Europe/Paris',
    //   timezoneOffset: '+02:00'
    // },
    {
      knownName: 'German Bundesliga Zwei',
      tournamentCalendarId: '3mjmai3idiul01s8jm0g7x6hg',
      id: '722fdbecxzcq9788l6jqclzlw',
      guessedTimezone: 'Europe/Berlin',
      timezoneOffset: '+02:00'
    },
    // {
    //   knownName: "German Women's Bundesliga",
    //   tournamentCalendarId: '5m1ro12vlz3uh9xhy46ygsvf8',
    //   id: '2z7257m7hj58zuxcjrsg4erzc',
    //   guessedTimezone: 'Europe/Berlin',
    //   timezoneOffset: '+02:00'
    // },
    // {
    //   knownName: 'US Major League Soccer',
    //   tournamentCalendarId: '2p9ipxt6ftkdphe5afitgd0',
    //   id: '287tckirbfj9nb8ar2k9r60vn',
    //   guessedTimezone: 'America/New_York',
    //   timezoneOffset: '-04:00'
    // },
    // {
    //   knownName: 'Turkish Super Lig',
    //   tournamentCalendarId: '97zghcaoec1isvvdkh9ud50d0',
    //   id: '482ofyysbdbeoxauk19yg7tdt',
    //   guessedTimezone: 'Europe/Istanbul',
    //   timezoneOffset: '+03:00'
    // },
    // {
    //   knownName: 'Brazilian Serie A',
    //   tournamentCalendarId: '9pqtmpr3w8jm73y0eb8hmum8k',
    //   id: 'scf9p4y91yjvqvg5jndxzhxj',
    //   guessedTimezone: 'America/Sao_Paulo',
    //   timezoneOffset: '-03:00'
    // },
    // {
    //   knownName: 'Liga Profesional Argentina',
    //   tournamentCalendarId: '3l4bzc8syz1ea2dnv453kp89g',
    //   id: '581t4mywybx21wcpmpykhyzr3',
    //   guessedTimezone: 'America/Argentina/Buenos_Aires',
    //   timezoneOffset: '-03:00'
    // },
    // {
    //   knownName: 'Europa Conference League', //MARKED TO CHECK
    //   tournamentCalendarId: 'cc4kfcd13e029cj3nawmm0hec',
    //   id: 'c7b8o53flg36wbuevfzy3lb10',
    //   guessedTimezone: 'Europe/Paris',
    //   timezoneOffset: '+02:00'
    // },
    // {
    //   knownName: 'FIFA Club World Cup',
    //   tournamentCalendarId: '7n3ltxz65zjcd8z9eyr5i2wb8',
    //   id: 'dc4k1xh2984zbypbnunk7ncic',
    //   guessedTimezone: 'America/New_York',
    //   timezoneOffset: '-04:00',
    //   // ignoreUTCRange: true,
    // }
    // {
    //   knownName: 'Friendlies',
    //   tournamentCalendarId: '6g6a8weru6ytaa0mr0hpwn9xw',
    //   id: 'cesdwwnxbc5fmajgroc0hqzy2',
    //   guessedTimezone: 'Europe/Paris',
    //   timezoneOffset: '+02:00'
    // },
  ],
  competitions: [
    {
      competitionName: 'UEFA Nations League',
      competitionId: '3r70u3fqh4hthsa2j4hsefis',
      competitionIdReal: '595nsvo7ykvoe690b1e4u5n56',
      id: '595nsvo7ykvoe690b1e4u5n56',
      ocId: '1661',
      opId: '941',
      name: 'UEFA Nations League',
      knownName: 'UEFA Nations League',
      competitionCode: 'NAT',
      displayOrder: 25,
      country: 'Europe',
      countryId: '7yiwjcnhat6jo3f901h266cwl',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '3r70u3fqh4hthsa2j4hsefis',
          includesVenues: 'yes',
          ocId: '24534',
          name: '2024/2025',
          startDate: '2024-09-05Z',
          endDate: '2025-06-08Z',
          active: 'yes',
          lastUpdated: '2024-02-10T04:05:45Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'international'
    },
    {
      competitionName: 'CONMEBOL Copa America',
      competitionId: '5te8vskbhb3t1n687hua2waac', //tournamentCalendar
      competitionIdReal: '45db8orh1qttbsqq9hqapmbit',
      id: '45db8orh1qttbsqq9hqapmbit',
      ocId: '288',
      opId: '128',
      name: 'CONMEBOL Copa America',
      knownName: 'CONMEBOL Copa America',
      competitionCode: 'COA',
      displayOrder: 10,
      country: 'South America',
      countryId: '7ygvdgl31hirp07yeye1tvsut',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '5te8vskbhb3t1n687hua2waac',
          includesVenues: 'yes',
          ocId: '20574',
          name: '2024 USA',
          startDate: '2024-06-21Z',
          endDate: '2024-07-15Z',
          active: 'yes',
          lastUpdated: '2024-05-29T04:02:32Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'international'
    },
    {
      competitionName: 'UEFA Champions League',
      competitionId: '2mr0u0l78k2gdsm79q56tb2fo', //tournamentCalendar
      competitionIdReal: '4oogyu6o156iphvdvphwpck10',
      id: '4oogyu6o156iphvdvphwpck10',
      ocId: '10',
      opId: '232',
      name: 'UEFA Champions League',
      knownName: 'UEFA Champions League',
      competitionCode: 'UCL',
      displayOrder: 100,
      country: 'Europe',
      countryId: '7yiwjcnhat6jo3f901h266cwl',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: "2mr0u0l78k2gdsm79q56tb2fo",
          includesVenues: "yes",
          ocId: "26943",
          name: "2025/2026",
          startDate: "2025-07-08Z",
          endDate: "2026-05-30Z",
          active: "yes",
          lastUpdated: "2025-08-06T03:05:51Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'English Premier League',
      competitionId: '51r6ph2woavlbbpk8f29nynf8', //tournamentCalendar
      competitionIdReal: '2kwbbcootiqqgmrzs6o5inle5',
      id: '2kwbbcootiqqgmrzs6o5inle5',
      ocId: '8',
      opId: '8',
      name: 'Premier League',
      knownName: 'English Premier League',
      competitionCode: 'EPL',
      displayOrder: 10,
      country: 'England',
      countryId: '1fk5l4hkqk12i7zske6mcqju6',
      countryCode: 'ENG',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: "51r6ph2woavlbbpk8f29nynf8",
          includesVenues: "yes",
          ocId: "26819",
          name: "2025/2026",
          startDate: "2025-08-15Z",
          endDate: "2026-05-24Z",
          active: "yes",
          lastUpdated: "2025-06-19T03:05:48Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: "FIFA Women's World Cup",
      competitionCode: 'WWC',
      competitionId: '5mqc55tieqhbz2sech0fp70bu', //tournamentCalendar
      competitionIdReal: '8x62utr2uti3i7kk14isbnip6',
      ocId: '368',
      opId: '408',
      logo: null,
      tournamentCalendarId: 'aln4bcqqbei83pgypog6h8rh0',
      displayOrder: 600,
      country: 'World',
      countryId: '7yasa43laq1nb2e6f8bfuvxed',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'women',
      tournamentCalendar: [
        {
          id: '5mqc55tieqhbz2sech0fp70bu',
          includesVenues: 'yes',
          ocId: '17933',
          name: '2023 Australia / New Zealand',
          startDate: '2023-07-20Z',
          endDate: '2023-08-20Z',
          active: 'yes',
          lastUpdated: '2023-07-14T05:34:20Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'international'
    },
    {
      competitionName: "FIFA Club World Cup",
      competitionCode: 'FCW',
      competitionId: '7n3ltxz65zjcd8z9eyr5i2wb8', //tournamentCalendar
      competitionIdReal: 'dc4k1xh2984zbypbnunk7ncic',
      id: 'dc4k1xh2984zbypbnunk7ncic',
      ocId: '2458',
      opId: '1277',
      logo: null,
      tournamentCalendarId: '7n3ltxz65zjcd8z9eyr5i2wb8',
      displayOrder: 150,
      country: 'World',
      countryId: '7yasa43laq1nb2e6f8bfuvxed',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'men',
      name: 'FIFA Club World Cup',
      knownName: 'FIFA Club World Cup',
      tournamentCalendar: [
        {
          id: '7n3ltxz65zjcd8z9eyr5i2wb8',
          includesVenues: 'yes',
          ocId: '25665',
          name: '2025 USA',
          startDate: '2025-06-15Z',
          endDate: '2025-07-13Z',
          active: 'yes',
          lastUpdated: '2025-06-09T09:40:41Z',
          includesStandings: 'yes'
        }

      ],
      competitionType: 'international'
    },
    {
      competitionName: 'German Bundesliga',
      competitionId: '2bchmrj23l9u42d68ntcekob8', //tournamentCalendar
      competitionIdReal: '6by3h89i2eykc341oz7lv1ddd',
      id: '6by3h89i2eykc341oz7lv1ddd',
      ocId: '9',
      opId: '22',
      name: 'Bundesliga',
      knownName: 'German Bundesliga',
      competitionCode: 'BUN',
      displayOrder: 10,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: "2bchmrj23l9u42d68ntcekob8",
          includesVenues: "yes",
          ocId: "26633",
          name: "2025/2026",
          startDate: "2025-08-22Z",
          endDate: "2026-05-16Z",
          active: "yes",
          lastUpdated: "2025-06-27T15:08:39Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Italian Serie A',
      competitionId: 'emdmtfr1v8rey2qru3xzfwges', //tournamentCalendar
      competitionIdReal: '1r097lpxe0xn03ihb7wi98kao',
      id: '1r097lpxe0xn03ihb7wi98kao',
      ocId: '13',
      opId: '21',
      name: 'Serie A',
      knownName: 'Italian Serie A',
      competitionCode: 'SEA',
      displayOrder: 10,
      country: 'Italy',
      countryId: '25f2cmb2r8mk5rj92tzer6kvv',
      countryCode: 'ITA',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: "emdmtfr1v8rey2qru3xzfwges",
          includesVenues: "yes",
          ocId: "26883",
          name: "2025/2026",
          startDate: "2025-08-23Z",
          endDate: "2026-05-24Z",
          active: "yes",
          lastUpdated: "2025-07-04T10:51:34Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club',
      sponsorName: 'Serie A TIM'
    },
    {
      competitionName: 'EFL - League One',
      competitionId: 'co1d2vis5yafwrvqz3bc24rh0', //tournamentCalendar
      competitionIdReal: '3frp1zxrqulrlrnk503n6l4l',
      id: '3frp1zxrqulrlrnk503n6l4l',
      ocId: '15',
      opId: '11',
      name: 'League One',
      knownName: 'English Football League - League One',
      competitionCode: 'LEO',
      displayOrder: 30,
      country: 'England',
      countryId: '1fk5l4hkqk12i7zske6mcqju6',
      countryCode: 'ENG',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'co1d2vis5yafwrvqz3bc24rh0',
          includesVenues: 'yes',
          ocId: '23519',
          name: '2023/2024',
          startDate: '2023-08-05Z',
          endDate: '2024-05-29Z',
          active: 'yes',
          lastUpdated: '2023-11-27T11:17:35Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'Sky Bet League One'
    },
    {
      competitionName: 'Dutch Eredivisie',
      competitionId: 'aouykkl1rt7zo06sg0kbzkbh0', //tournamentCalendar
      competitionIdReal: 'akmkihra9ruad09ljapsm84b3',
      id: 'akmkihra9ruad09ljapsm84b3',
      ocId: '1',
      opId: '9',
      name: 'Eredivisie',
      knownName: 'Dutch Eredivisie',
      competitionCode: 'ERE',
      displayOrder: 10,
      country: 'Netherlands',
      countryId: '6hzi5pltnz67q4la8yli9qfv6',
      countryCode: 'NLD',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: "aouykkl1rt7zo06sg0kbzkbh0",
          includesVenues: "yes",
          ocId: "26872",
          name: "2025/2026",
          startDate: "2025-08-08Z",
          endDate: "2026-05-25Z",
          active: "yes",
          lastUpdated: "2025-06-18T06:01:28Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Credit Suisse Super League',
      competitionId: 'c4s2k9mpw0m24f1uqkt1wlces', //tournamentCalendar
      competitionIdReal: 'e0lck99w8meo9qoalfrxgo33o',
      id: 'e0lck99w8meo9qoalfrxgo33o',
      ocId: '27',
      opId: '135',
      name: 'Super League',
      knownName: 'Credit Suisse Super League',
      competitionCode: 'SUL',
      displayOrder: 10,
      country: 'Switzerland',
      countryId: '3bh70jgvc5mn58x0byjkuda17',
      countryCode: 'CHE',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'c4s2k9mpw0m24f1uqkt1wlces',
          includesVenues: 'yes',
          ocId: '23490',
          name: '2023/2024',
          startDate: '2023-07-22Z',
          endDate: '2024-05-25Z',
          active: 'yes',
          lastUpdated: '2023-12-21T04:05:44Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'Credit Suisse Super League'
    },
    {
      competitionName: 'Spanish La Liga',
      competitionId: '80zg2v1cuqcfhphn56u4qpyqc', //tournamentCalendar
      competitionIdReal: '34pl8szyvrbwcmfkuocjm3r6t',
      id: '34pl8szyvrbwcmfkuocjm3r6t',
      ocId: '7',
      opId: '23',
      name: 'Primera División',
      knownName: 'Spanish La Liga',
      competitionCode: 'PRD',
      displayOrder: 10,
      country: 'Spain',
      countryId: '49ih1pwv3ahshdf8uzrimi54c',
      countryCode: 'ESP',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: "80zg2v1cuqcfhphn56u4qpyqc",
          includesVenues: "yes",
          ocId: "26768",
          name: "2025/2026",
          startDate: "2025-08-15Z",
          endDate: "2026-05-24Z",
          active: "yes",
          lastUpdated: "2025-07-06T03:05:50Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club',
      sponsorName: 'LALIGA EA SPORTS'
    },
    {
      competitionName: 'French Ligue 1',
      competitionId: 'dbxs75cag7zyip5re0ppsanmc', //tournamentCalendar
      competitionIdReal: 'dm5ka0os1e3dxcp3vh05kmp33',
      id: 'dm5ka0os1e3dxcp3vh05kmp33',
      ocId: '16',
      opId: '24',
      name: 'Ligue 1',
      knownName: 'French Ligue 1',
      competitionCode: 'LI1',
      displayOrder: 10,
      country: 'France',
      countryId: '7gww28djs405rfga69smki84o',
      countryCode: 'FRA',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: "dbxs75cag7zyip5re0ppsanmc",
          includesVenues: "yes",
          ocId: "26656",
          name: "2025/2026",
          startDate: "2025-08-15Z",
          endDate: "2026-05-16Z",
          active: "yes",
          lastUpdated: "2025-07-20T03:05:51Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club',
      sponsorName: 'LIGUE 1 Uber Eats'
    },
    {
      competitionName: 'Europa Conference League',
      competitionId: 'cc4kfcd13e029cj3nawmm0hec', //tournamentCalendar
      competitionIdReal: 'c7b8o53flg36wbuevfzy3lb10',
      id: 'c7b8o53flg36wbuevfzy3lb10',
      ocId: '2187',
      opId: '1125',
      name: 'UEFA Europa Conference League',
      knownName: 'UEFA Europa Conference League',
      competitionCode: 'UEC',
      displayOrder: 120,
      country: 'Europe',
      countryId: '7yiwjcnhat6jo3f901h266cwl',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'cc4kfcd13e029cj3nawmm0hec',
          includesVenues: 'yes',
          ocId: '25212',
          name: '2024/2025',
          startDate: '2024-07-10Z',
          endDate: '2025-05-28Z',
          active: 'yes',
          lastUpdated: '2024-07-26T08:33:03Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Europa League',
      competitionId: '7ttpe5jzya3vjhjadiemjy7mc', //tournamentCalendar
      competitionIdReal: '4c1nfi2j1m731hcay25fcgndq',
      id: '4c1nfi2j1m731hcay25fcgndq',
      ocId: '18',
      opId: '6',
      name: 'UEFA Europa League',
      knownName: 'UEFA Europa League',
      competitionCode: 'UEL',
      displayOrder: 110,
      country: 'Europe',
      countryId: '7yiwjcnhat6jo3f901h266cwl',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: "7ttpe5jzya3vjhjadiemjy7mc",
          includesVenues: "yes",
          ocId: "26754",
          name: "2025/2026",
          startDate: "2025-07-10Z",
          endDate: "2026-05-20Z",
          active: "yes",
          lastUpdated: "2025-08-04T08:16:35Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'US Major League Soccer',
      competitionId: '2p9ipxt6ftkdphe5afitgd0', //tournamentCalendar
      competitionIdReal: '287tckirbfj9nb8ar2k9r60vn',
      id: '287tckirbfj9nb8ar2k9r60vn',
      ocId: '33',
      opId: '98',
      name: 'MLS',
      knownName: 'US Major League Soccer',
      competitionCode: 'MLS',
      displayOrder: 10,
      country: 'USA',
      countryId: '7hr2f89v44y65dyu9k92vprwn',
      countryCode: 'USA',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: '2p9ipxt6ftkdphe5afitgd0',
          includesVenues: 'yes',
          ocId: '26116',
          name: '2025',
          startDate: '2025-02-22Z',
          endDate: '2025-12-07Z',
          active: 'yes',
          lastUpdated: '2024-12-20T03:05:46Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Portuguese Primeira Liga',
      competitionId: '6znnaol4m5m4nfb1x4g299lhw', //tournamentCalendar
      competitionIdReal: '8yi6ejjd1zudcqtbn07haahg6',
      id: '8yi6ejjd1zudcqtbn07haahg6',
      ocId: '63',
      opId: '99',
      name: 'Primeira Liga',
      knownName: 'Portuguese Primeira Liga',
      competitionCode: 'PRL',
      displayOrder: 10,
      country: 'Portugal',
      countryId: '1nbm5i9a0403zzvltn17lxinc',
      countryCode: 'PRT',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: '6znnaol4m5m4nfb1x4g299lhw',
          includesVenues: 'yes',
          ocId: '23431',
          name: '2023/2024',
          startDate: '2023-08-11Z',
          endDate: '2024-05-19Z',
          active: 'yes',
          lastUpdated: '2023-11-13T04:31:29Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'Liga Portugal Betclic'
    },
    {
      competitionName: 'Turkish Super Lig',
      competitionId: '97zghcaoec1isvvdkh9ud50d0', //tournamentCalendar
      competitionIdReal: '482ofyysbdbeoxauk19yg7tdt',
      id: '482ofyysbdbeoxauk19yg7tdt',
      ocId: '19',
      opId: '115',
      name: 'Süper Lig',
      knownName: 'Turkish Super Lig',
      competitionCode: 'SÜL',
      displayOrder: 10,
      country: 'Türkiye',
      countryId: '6kd6webenogylfgwt2aa9l6vx',
      countryCode: 'TUR',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: "97zghcaoec1isvvdkh9ud50d0",
          includesVenues: "yes",
          ocId: "27049",
          name: "2025/2026",
          startDate: "2025-08-08Z",
          endDate: "2026-05-17Z",
          active: "yes",
          lastUpdated: "2025-07-12T03:05:51Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club',
      sponsorName: 'trendyol SüperLig'
    },
    {
      competitionName: "German Women's Bundesliga",
      competitionId: '5m1ro12vlz3uh9xhy46ygsvf8', //tournamentCalendar
      competitionIdReal: '2z7257m7hj58zuxcjrsg4erzc',
      id: '2z7257m7hj58zuxcjrsg4erzc',
      ocId: '290',
      opId: '564',
      name: 'Frauen Bundesliga',
      knownName: "German Women's Bundesliga",
      competitionCode: 'FRB',
      displayOrder: 650,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'women',
      tournamentCalendar: [
        {
          id: '5m1ro12vlz3uh9xhy46ygsvf8',
          includesVenues: 'yes',
          ocId: '24965',
          name: '2024/2025',
          startDate: '2024-08-30Z',
          endDate: '2025-05-11Z',
          active: 'yes',
          lastUpdated: '2024-07-18T02:23:09Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: "UEFA Women's Champions League",
      competitionId: 'aco2wvi120lgh6vyyb0nc3uok', //tournamentCalendar
      competitionIdReal: '55hcphd1ccc6eai1ms77460on',
      id: '55hcphd1ccc6eai1ms77460on',
      ocId: '336',
      opId: '646',
      name: "UEFA Women's Champions League",
      knownName: "UEFA Women's Champions League",
      competitionCode: 'UWC',
      displayOrder: 500,
      country: 'Europe',
      countryId: '7yiwjcnhat6jo3f901h266cwl',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'women',
      tournamentCalendar: [
        {
          id: 'aco2wvi120lgh6vyyb0nc3uok',
          includesVenues: 'yes',
          ocId: '23620',
          name: '2023/2024',
          startDate: '2023-09-06Z',
          endDate: '2024-05-24Z',
          active: 'yes',
          lastUpdated: '2023-12-14T03:16:12Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'German DFB Pokal',
      competitionId: '8p6h3dooygr9szojcajkfxhjo', //tournamentCalendar
      competitionIdReal: '486rhdgz7yc0sygziht7hje65',
      id: '486rhdgz7yc0sygziht7hje65',
      ocId: '104',
      opId: '231',
      name: 'DFB Pokal',
      knownName: 'German DFB Pokal',
      competitionCode: 'DFB',
      displayOrder: 100,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '8p6h3dooygr9szojcajkfxhjo',
          includesVenues: 'yes',
          ocId: '23594',
          name: '2023/2024',
          startDate: '2023-08-11Z',
          endDate: '2024-05-25Z',
          active: 'yes',
          lastUpdated: '2023-12-18T16:17:09Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'DFB Pokal Women',
      competitionId: '40e48qlklbyr709zp4ot7pp1w', //tournamentCalendar
      competitionIdReal: '2reb1eyofgyfcv9dky5rya7m7',
      id: '2reb1eyofgyfcv9dky5rya7m7',
      ocId: '372',
      name: 'DFB Pokal Women',
      competitionCode: 'DPW',
      displayOrder: 700,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic cup',
      type: 'women',
      tournamentCalendar: [
        {
          id: '40e48qlklbyr709zp4ot7pp1w',
          includesVenues: 'yes',
          ocId: '23338',
          name: '2023/2024',
          startDate: '2023-08-12Z',
          endDate: '2024-05-09Z',
          active: 'yes',
          lastUpdated: '2023-12-12T13:46:54Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: '2. Bundesliga',
      competitionId: '3mjmai3idiul01s8jm0g7x6hg', //tournamentCalendar
      competitionIdReal: '722fdbecxzcq9788l6jqclzlw',
      id: '722fdbecxzcq9788l6jqclzlw',
      ocId: '11',
      opId: '87',
      name: '2. Bundesliga',
      knownName: 'German Bundesliga Zwei',
      competitionCode: '2.B',
      displayOrder: 20,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: '3mjmai3idiul01s8jm0g7x6hg',
          includesVenues: 'yes',
          ocId: "26658",
          name: "2025/2026",
          startDate: "2025-08-01Z",
          endDate: "2026-05-17Z",
          active: "yes",
          lastUpdated: "2025-06-27T15:19:27Z",
          includesStandings: "yes"
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: '2. Bundesliga Women',
      competitionId: 'edacj7wwszjutcl3lvqyftr84', //tournamentCalendar
      competitionIdReal: '8svqjfsdmjei8xm98m9hwb4u2',
      id: '8svqjfsdmjei8xm98m9hwb4u2',
      ocId: '323',
      name: '2. Bundesliga Women',
      competitionCode: '2BW',
      displayOrder: 660,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'women',
      tournamentCalendar: [
        {
          id: 'edacj7wwszjutcl3lvqyftr84',
          includesVenues: 'yes',
          ocId: '23493',
          name: '2023/2024',
          startDate: '2023-08-19Z',
          endDate: '2024-05-26Z',
          active: 'yes',
          lastUpdated: '2023-12-14T20:30:54Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Saudi League',
      competitionId: '8jrlomlpzrt4e327fxgdxwxec', //tournamentCalendar
      competitionIdReal: 'ea0h6cf3bhl698hkxhpulh2zz',
      id: 'ea0h6cf3bhl698hkxhpulh2zz',
      ocId: '216',
      opId: '202',
      name: 'Saudi League',
      competitionCode: 'PRL',
      displayOrder: 10,
      country: 'Saudi Arabia',
      countryId: '639nv0r2ixeusx4nzqyzb5iuq',
      countryCode: 'KSA',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: '8jrlomlpzrt4e327fxgdxwxec',
          includesVenues: 'yes',
          ocId: '23534',
          name: '2023/2024',
          startDate: '2023-08-11Z',
          endDate: '2024-05-27Z',
          active: 'yes',
          lastUpdated: '2023-11-26T03:38:58Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Austrian Bundesliga',
      competitionId: 'a5rfzm8qpy3ca8d8wxlkkdslw', //tournamentCalendar
      competitionIdReal: '5c96g1zm7vo5ons9c42uy2w3r',
      id: '5c96g1zm7vo5ons9c42uy2w3r',
      ocId: '49',
      opId: '119',
      name: 'Bundesliga',
      knownName: 'Austrian Bundesliga',
      competitionCode: 'BUN',
      displayOrder: 10,
      country: 'Austria',
      countryId: 'hcs1bd49qliqqity6o268jyt',
      countryCode: 'AUT',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'a5rfzm8qpy3ca8d8wxlkkdslw',
          includesVenues: 'yes',
          ocId: '23723',
          name: '2023/2024',
          startDate: '2023-07-28Z',
          endDate: '2024-06-11Z',
          active: 'yes',
          lastUpdated: '2023-12-19T21:51:50Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'ADMIRAL Bundesliga'
    },
    {
      competitionName: 'Scottish Premiership',
      competitionId: '5411mhsznsbh56a95jq2hd8no', //tournamentCalendar
      competitionIdReal: 'e21cf135btr8t3upw0vl6n6x0',
      id: 'e21cf135btr8t3upw0vl6n6x0',
      ocId: '43',
      opId: '14',
      name: 'Premiership',
      knownName: 'Scottish Premiership',
      competitionCode: 'PRE',
      displayOrder: 10,
      country: 'Scotland',
      countryId: '1xf68d0a8lnnq30hnnn8kr6ut',
      countryCode: 'SCO',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: '5411mhsznsbh56a95jq2hd8no',
          includesVenues: 'yes',
          ocId: '23494',
          name: '2023/2024',
          startDate: '2023-08-05Z',
          endDate: '2024-05-28Z',
          active: 'yes',
          lastUpdated: '2023-11-26T03:32:34Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'cinch Premiership'
    },
    {
      competitionName: 'English FA Cup',
      competitionId: 'ngog5fjvpymy03nta4ilshsk', //tournamentCalendar
      competitionIdReal: '2hj3286pqov1g1g59k2t2qcgm',
      id: '2hj3286pqov1g1g59k2t2qcgm',
      ocId: '93',
      opId: '1',
      name: 'FA Cup',
      knownName: 'English FA Cup',
      competitionCode: 'FAC',
      displayOrder: 100,
      country: 'England',
      countryId: '1fk5l4hkqk12i7zske6mcqju6',
      countryCode: 'ENG',
      isFriendly: 'no',
      competitionFormat: 'Domestic cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'ngog5fjvpymy03nta4ilshsk',
          includesVenues: 'yes',
          ocId: '23568',
          name: '2023/2024',
          startDate: '2023-08-04Z',
          endDate: '2024-05-25Z',
          active: 'yes',
          lastUpdated: '2024-01-08T01:07:50Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Coppa Italia',
      competitionId: '67c1v0zv4u79gsvq4jxg12xas', //tournamentCalendar
      competitionIdReal: '6694fff47wqxl10lrd9tb91f8',
      id: '6694fff47wqxl10lrd9tb91f8',
      ocId: '135',
      opId: '259',
      name: 'Coppa Italia',
      knownName: 'Coppa Italia',
      competitionCode: 'COI',
      displayOrder: 100,
      country: 'Italy',
      countryId: '25f2cmb2r8mk5rj92tzer6kvv',
      countryCode: 'ITA',
      isFriendly: 'no',
      competitionFormat: 'Domestic cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '67c1v0zv4u79gsvq4jxg12xas',
          includesVenues: 'yes',
          ocId: '23410',
          name: '2023/2024',
          startDate: '2023-08-05Z',
          endDate: '2024-05-15Z',
          active: 'yes',
          lastUpdated: '2024-01-04T16:00:51Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Spanish Copa Del Rey',
      competitionId: 'blu3v8k7kklr6hhah36zmg00k', //tournamentCalendar
      competitionIdReal: 'apdwh753fupxheygs8seahh7x',
      id: 'apdwh753fupxheygs8seahh7x',
      ocId: '138',
      opId: '331',
      name: 'Copa del Rey',
      knownName: 'Spanish Copa Del Rey',
      competitionCode: 'CDR',
      displayOrder: 100,
      country: 'Spain',
      countryId: '49ih1pwv3ahshdf8uzrimi54c',
      countryCode: 'ESP',
      isFriendly: 'no',
      competitionFormat: 'Domestic cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'blu3v8k7kklr6hhah36zmg00k',
          includesVenues: 'yes',
          ocId: '23254',
          name: '2023/2024',
          startDate: '2023-10-11Z',
          endDate: '2024-04-06Z',
          active: 'yes',
          lastUpdated: '2023-12-14T04:05:41Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Coupe de France',
      competitionId: '589kvvngkurjbaozjyio341zo', //tournamentCalendar
      competitionIdReal: '3n9mk5b2mxmq831wfmv6pu86i',
      id: '3n9mk5b2mxmq831wfmv6pu86i',
      ocId: '177',
      opId: '361',
      name: 'Coupe de France',
      knownName: 'Coupe de France',
      competitionCode: 'CDF',
      displayOrder: 100,
      country: 'France',
      countryId: '7gww28djs405rfga69smki84o',
      countryCode: 'FRA',
      isFriendly: 'no',
      competitionFormat: 'Domestic cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '589kvvngkurjbaozjyio341zo',
          includesVenues: 'yes',
          ocId: '23185',
          name: '2023/2024',
          startDate: '2023-11-17Z',
          endDate: '2024-05-25Z',
          active: 'yes',
          lastUpdated: '2024-01-07T04:36:19Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'UEFA European Championship Finals',
      competitionId: '4lp7vq583c95jwjhaohqbl9g4', //tournamentCalendar
      competitionIdReal: '8tddm56zbasf57jkkay4kbf11',
      id: '8tddm56zbasf57jkkay4kbf11',
      ocId: '25',
      opId: '3',
      name: 'UEFA European Championship',
      knownName: 'UEFA European Championship Finals',
      competitionCode: 'EUC',
      displayOrder: 10,
      country: 'Europe',
      countryId: '7yiwjcnhat6jo3f901h266cwl',
      isFriendly: 'no',
      competitionFormat: 'International cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '4lp7vq583c95jwjhaohqbl9g4',
          includesVenues: 'yes',
          ocId: '20572',
          name: '2024 Germany',
          startDate: '2024-06-14Z',
          endDate: '2024-07-14Z',
          active: 'yes',
          lastUpdated: '2023-12-04T09:44:05Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'international'
    },
    {
      competitionName: 'Brasiliense Women',
      competitionId: 'e7ngzn4vwt7rbm3e4jb8cyn84', //tournamentCalendar
      competitionIdReal: '5bf5w65s1qesvqtdcvon600t0',
      id: '5bf5w65s1qesvqtdcvon600t0',
      ocId: '2243',
      name: 'Brasiliense Women',
      competitionCode: 'BRA',
      displayOrder: 671,
      country: 'Brazil',
      countryId: '2vufyvpoxd9lfl9f6vpp7tz6y',
      countryCode: 'BRA',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'women',
      tournamentCalendar: [
        {
          id: 'e7ngzn4vwt7rbm3e4jb8cyn84',
          includesVenues: 'yes',
          ocId: '22751',
          name: '2023',
          startDate: '2023-08-05Z',
          endDate: '2023-10-07Z',
          active: 'yes',
          lastUpdated: '2023-10-11T12:28:48Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Liga Profesional Argentina',
      competitionId: '3l4bzc8syz1ea2dnv453kp89g', //tournamentCalendar
      competitionIdReal: '581t4mywybx21wcpmpykhyzr3',
      id: '581t4mywybx21wcpmpykhyzr3',
      ocId: '87',
      opId: '384',
      name: 'Liga Profesional Argentina',
      competitionCode: 'LPA',
      displayOrder: 10,
      country: 'Argentina',
      countryId: '2vovxa97k7v7ofa85dah2xktb',
      countryCode: 'ARG',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: '3l4bzc8syz1ea2dnv453kp89g',
          includesVenues: 'yes',
          ocId: '26158',
          name: '2025',
          startDate: '2025-01-23Z',
          endDate: '2025-12-14Z',
          active: 'yes',
          lastUpdated: '2025-01-08T03:05:46Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Bundesliga Relegation',
      competitionId: '4sadyhpji627j9rmasrsplo2c', //tournamentCalendar
      competitionIdReal: '1mzarp57yv1sfw516ix52jbbo',
      id: '1mzarp57yv1sfw516ix52jbbo',
      ocId: '2323',
      name: 'Play-offs 5/6',
      competitionCode: 'PL5',
      displayOrder: 330,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '4sadyhpji627j9rmasrsplo2c',
          includesVenues: 'yes',
          ocId: '22133',
          name: '2022/2023',
          startDate: '2023-05-31Z',
          endDate: '2023-06-14Z',
          active: 'yes',
          lastUpdated: '2023-11-18T23:50:05Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Reg Cup Baden',
      competitionId: '2178q3ktn7z4u825zhkimb3tg', //tournamentCalendar
      competitionIdReal: '271tqwx23osjx7vp533l0bx77',
      id: '271tqwx23osjx7vp533l0bx77',
      ocId: '1198',
      name: 'Reg. Cup Baden',
      competitionCode: 'RBA',
      displayOrder: 200,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '2178q3ktn7z4u825zhkimb3tg',
          includesVenues: 'yes',
          ocId: '23586',
          name: '2023/2024',
          startDate: '2023-07-20Z',
          endDate: '2024-06-03Z',
          active: 'yes',
          lastUpdated: '2023-11-30T13:35:34Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Frankreich Relegation',
      competitionId: '3b0dpavm34gmuypck2nkqx91w', //tournamentCalendar
      competitionIdReal: '1nsu863daf68kns4l7ou69orf',
      id: '1nsu863daf68kns4l7ou69orf',
      ocId: '312',
      opId: '354',
      name: 'Trophée des Champions',
      knownName: "French Champions' Trophy",
      competitionCode: 'FTC',
      displayOrder: 120,
      country: 'France',
      countryId: '7gww28djs405rfga69smki84o',
      countryCode: 'FRA',
      isFriendly: 'no',
      competitionFormat: 'Domestic super cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '3b0dpavm34gmuypck2nkqx91w',
          includesVenues: 'yes',
          ocId: '22190',
          name: '2023/2024',
          startDate: '2024-01-03Z',
          endDate: '2024-01-03Z',
          active: 'yes',
          lastUpdated: '2024-01-08T19:25:49Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Holland Relegation',
      competitionId: '1ohv6x24lini0kam8zqgmzk0k', //tournamentCalendar
      competitionIdReal: 'edo80nr2zso8532pg09x3ei98',
      id: 'edo80nr2zso8532pg09x3ei98',
      ocId: '1033',
      name: 'Play-offs 4/5',
      competitionCode: 'PL4',
      displayOrder: 330,
      country: 'Netherlands',
      countryId: '6hzi5pltnz67q4la8yli9qfv6',
      countryCode: 'NLD',
      isFriendly: 'no',
      competitionFormat: 'Domestic cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '1ohv6x24lini0kam8zqgmzk0k',
          includesVenues: 'yes',
          ocId: '22059',
          name: '2022/2023',
          startDate: '2023-05-30Z',
          endDate: '2023-06-18Z',
          active: 'yes',
          lastUpdated: '2023-06-26T12:44:57Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Friendlies',
      competitionId: '6g6a8weru6ytaa0mr0hpwn9xw', //tournamentCalendar
      competitionIdReal: 'cesdwwnxbc5fmajgroc0hqzy2',
      id: 'cesdwwnxbc5fmajgroc0hqzy2',
      ocId: '430',
      opId: '88',
      name: 'Friendlies',
      knownName: 'Internationals',
      competitionCode: 'FRI',
      displayOrder: 50,
      country: 'World',
      countryId: '7yasa43laq1nb2e6f8bfuvxed',
      isFriendly: 'yes',
      competitionFormat: 'International cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '6g6a8weru6ytaa0mr0hpwn9xw',
          includesVenues: 'yes',
          ocId: '24094',
          name: '2024',
          startDate: '2024-01-01Z',
          endDate: '2024-12-31Z',
          active: 'yes',
          lastUpdated: '2024-01-08T05:55:38Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'international'
    },
    {
      competitionName: 'Brazilian Serie A',
      competitionId: '9pqtmpr3w8jm73y0eb8hmum8k', //tournamentCalendar
      competitionIdReal: 'scf9p4y91yjvqvg5jndxzhxj',
      id: 'scf9p4y91yjvqvg5jndxzhxj',
      ocId: '26',
      opId: '363',
      name: 'Serie A',
      knownName: 'Brazilian Serie A',
      competitionCode: 'SEA',
      displayOrder: 10,
      country: 'Brazil',
      countryId: '2vufyvpoxd9lfl9f6vpp7tz6y',
      countryCode: 'BRA',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: '9pqtmpr3w8jm73y0eb8hmum8k',
          includesVenues: 'yes',
          ocId: '26113',
          name: '2025',
          startDate: '2025-03-29Z',
          endDate: '2025-12-21Z',
          active: 'yes',
          lastUpdated: '2025-02-13T13:28:44Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'Brasileirão Betano'
    },
    {
      competitionName: 'Brazilian Serie B',
      competitionId: 'b0dudh88t3sqvbvmnkj7ijh0', //tournamentCalendar
      competitionIdReal: '5zr0b05eyx25km7z1k03ca9jx',
      id: '5zr0b05eyx25km7z1k03ca9jx',
      ocId: '89',
      opId: '364',
      name: 'Serie B',
      knownName: 'Brazilian Serie B',
      competitionCode: 'SEB',
      displayOrder: 20,
      country: 'Brazil',
      countryId: '2vufyvpoxd9lfl9f6vpp7tz6y',
      countryCode: 'BRA',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'b0dudh88t3sqvbvmnkj7ijh0',
          includesVenues: 'yes',
          ocId: '24400',
          name: '2024',
          startDate: '2024-04-20Z',
          endDate: '2024-11-26Z',
          active: 'yes',
          lastUpdated: '2024-04-29T01:25:13Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'Brasileirão Série Betano'
    },
    {
      competitionName: 'UEFA Super Cup',
      competitionId: '4rbs6ubspu2ym7bg6kt1gtuz8', //tournamentCalendar
      competitionIdReal: 'a0f4gtru0oyxmpvty4thc5qkc',
      id: 'a0f4gtru0oyxmpvty4thc5qkc',
      ocId: '211',
      opId: '174',
      name: 'UEFA Super Cup',
      knownName: 'UEFA Super Cup',
      competitionCode: 'USC',
      displayOrder: 130,
      country: 'Europe',
      countryId: '7yiwjcnhat6jo3f901h266cwl',
      isFriendly: 'no',
      competitionFormat: 'International super cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '4rbs6ubspu2ym7bg6kt1gtuz8',
          includesVenues: 'yes',
          ocId: '23985',
          name: '2024/2025',
          startDate: '2024-08-14Z',
          endDate: '2024-08-14Z',
          active: 'yes',
          lastUpdated: '2024-06-01T23:01:57Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Community Shield',
      competitionId: '6ktyq4zpus2r9k61tasslbrpw', //tournamentCalendar
      competitionIdReal: 'dqr4zpn4l9x9br1c5qv1fb6v9',
      id: 'dqr4zpn4l9x9br1c5qv1fb6v9',
      ocId: '173',
      opId: '38',
      name: 'Community Shield',
      knownName: 'English Community Shield',
      competitionCode: 'COS',
      displayOrder: 120,
      country: 'England',
      countryId: '1fk5l4hkqk12i7zske6mcqju6',
      countryCode: 'ENG',
      isFriendly: 'no',
      competitionFormat: 'Domestic super cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: '6ktyq4zpus2r9k61tasslbrpw',
          includesVenues: 'yes',
          ocId: '23952',
          name: '2024/2025',
          startDate: '2024-08-10Z',
          endDate: '2024-08-10Z',
          active: 'yes',
          lastUpdated: '2024-07-02T12:33:06Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Super Cup',
      competitionId: 'jpsokoe79qsnl04bl5lcik2c', //tournamentCalendar
      competitionIdReal: 'bt104r4nsjznxitfaqpc8j09s',
      id: 'bt104r4nsjznxitfaqpc8j09s',
      ocId: '638',
      opId: '541',
      name: 'Super Cup',
      knownName: 'German Super Cup',
      competitionCode: 'SUC',
      displayOrder: 120,
      country: 'Germany',
      countryId: '36min0qztu8eydwvpv8t1is0m',
      countryCode: 'DEU',
      isFriendly: 'no',
      competitionFormat: 'Domestic super cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'jpsokoe79qsnl04bl5lcik2c',
          includesVenues: 'yes',
          ocId: '23968',
          name: '2024/2025',
          startDate: '2024-08-17Z',
          endDate: '2024-08-17Z',
          active: 'yes',
          lastUpdated: '2024-06-05T18:25:35Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'English Championship',
      competitionId: 'd5obohxqafuwcthuh43ksmpec', //tournamentCalendar
      competitionIdReal: '7ntvbsyq31jnzoqoa8850b9b8',
      id: '7ntvbsyq31jnzoqoa8850b9b8',
      ocId: '70',
      opId: '10',
      name: 'Championship',
      knownName: 'English Football League - Championship',
      competitionCode: 'CHA',
      displayOrder: 20,
      country: 'England',
      countryId: '1fk5l4hkqk12i7zske6mcqju6',
      countryCode: 'ENG',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'd5obohxqafuwcthuh43ksmpec',
          includesVenues: 'yes',
          ocId: '25129',
          name: '2024/2025',
          startDate: '2024-08-09Z',
          endDate: '2025-05-26Z',
          active: 'yes',
          lastUpdated: '2024-07-03T05:05:29Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'Sky Bet Championship'
    },
    {
      competitionName: 'Italian Serie B',
      competitionId: '6evrk16rq1mhn0eajdk0bvehg', //tournamentCalendar
      competitionIdReal: '8ey0ww2zsosdmwr8ehsorh6t7',
      id: '8ey0ww2zsosdmwr8ehsorh6t7',
      ocId: '14',
      opId: '105',
      name: 'Serie B',
      knownName: 'Italian Serie B',
      competitionCode: 'SEB',
      displayOrder: 20,
      country: 'Italy',
      countryId: '25f2cmb2r8mk5rj92tzer6kvv',
      countryCode: 'ITA',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: '6evrk16rq1mhn0eajdk0bvehg',
          includesVenues: 'yes',
          ocId: '25279',
          name: '2024/2025',
          startDate: '2024-08-16Z',
          endDate: '2025-06-02Z',
          active: 'yes',
          lastUpdated: '2024-07-16T23:09:41Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'Serie BKT'
    },
    {
      competitionName: 'Segunda División',
      competitionId: '9991qneanhxxxo8ioi14pw7bo', //tournamentCalendar
      competitionIdReal: '3is4bkgf3loxv9qfg3hm8zfqb',
      id: '3is4bkgf3loxv9qfg3hm8zfqb',
      ocId: '12',
      opId: '102',
      name: 'Segunda División',
      knownName: 'Spanish Segunda Division',
      competitionCode: 'SED',
      displayOrder: 20,
      country: 'Spain',
      countryId: '49ih1pwv3ahshdf8uzrimi54c',
      countryCode: 'ESP',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: '9991qneanhxxxo8ioi14pw7bo',
          includesVenues: 'yes',
          ocId: '25464',
          name: '2024/2025',
          startDate: '2024-08-15Z',
          endDate: '2025-07-06Z',
          active: 'yes',
          lastUpdated: '2024-06-29T05:05:45Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'LALIGA HYPERMOTION'
    },
    {
      competitionName: 'Turkish Super Cup',
      competitionId: 'eo21coszz6udqaktan1etnj84', //tournamentCalendar
      competitionIdReal: '76zmom26b12lbgotigwc9yijg',
      id: '76zmom26b12lbgotigwc9yijg',
      ocId: '452',
      opId: '729',
      name: 'Super Cup',
      knownName: 'Turkish Super Cup',
      competitionCode: 'SUC',
      displayOrder: 120,
      country: 'Türkiye',
      countryId: '6kd6webenogylfgwt2aa9l6vx',
      countryCode: 'TUR',
      isFriendly: 'no',
      competitionFormat: 'Domestic super cup',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'eo21coszz6udqaktan1etnj84',
          includesVenues: 'yes',
          ocId: '24710',
          name: '2024/2025',
          startDate: '2024-08-03Z',
          endDate: '2024-08-03Z',
          active: 'yes',
          lastUpdated: '2024-07-23T12:27:55Z',
          includesStandings: 'no'
        }
      ],
      competitionType: 'club'
    },
    {
      competitionName: 'Turkish 1. Lig',
      competitionId: 'e66mlanglsjh4nmtn7dmxwtg4', //tournamentCalendar
      competitionIdReal: '2o9svokc5s7diish3ycrzk7jm',
      id: '2o9svokc5s7diish3ycrzk7jm',
      ocId: '97',
      opId: '388',
      name: '1. Lig',
      knownName: 'Turkish 1. Lig',
      competitionCode: '1.L',
      displayOrder: 20,
      country: 'Türkiye',
      countryId: '6kd6webenogylfgwt2aa9l6vx',
      countryCode: 'TUR',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'e66mlanglsjh4nmtn7dmxwtg4',
          includesVenues: 'yes',
          ocId: '25309',
          name: '2024/2025',
          startDate: '2024-08-11Z',
          endDate: '2025-05-30Z',
          active: 'yes',
          lastUpdated: '2024-07-24T15:36:45Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club',
      sponsorName: 'trendyol 1.Lig'
    },
    {
      competitionName: 'Turkish 2. Lig',
      competitionId: 'e9ehgh01475917kg7525g8m50', //tournamentCalendar
      competitionIdReal: '2nttcoriwf5co73vmz1vr8frm',
      id: '2nttcoriwf5co73vmz1vr8frm',
      ocId: '562',
      name: '2. Lig',
      competitionCode: '2.L',
      displayOrder: 30,
      country: 'Türkiye',
      countryId: '6kd6webenogylfgwt2aa9l6vx',
      countryCode: 'TUR',
      isFriendly: 'no',
      competitionFormat: 'Domestic league',
      type: 'men',
      tournamentCalendar: [
        {
          id: 'e9ehgh01475917kg7525g8m50',
          includesVenues: 'yes',
          ocId: '23773',
          name: '2023/2024',
          startDate: '2023-08-26Z',
          endDate: '2024-06-02Z',
          active: 'yes',
          lastUpdated: '2024-07-10T00:32:56Z',
          includesStandings: 'yes'
        }
      ],
      competitionType: 'club'
    }
  ],
  data: {
    tournamentcalendar: {
      competition: {
        identifier: 'tournamentcalendar:competition',
        url: 'soccerdata/tournamentcalendar/[[OUTLET_KEY]]?_rt=b&_fmt=json&comp=[[LEAGUE]]',
        feed: {
          title: 'Tournament Calendars',
          key: 'OT2'
        }
      }
    },
    prediction: {
      momentum: {
        identifier: 'prediction:momentum',
        url: 'soccerdata/predictions/momentum/[[OUTLET_KEY]]?_rt=b&_fmt=json&fx=[[EVENT_ID]]'
      }
    },
    tournament: {
      active: {
        identifier: 'tournament:active',
        url: 'soccerdata/tournamentcalendar/[[OUTLET_KEY]]/active/authorized?_rt=b&_fmt=json',
        feed: {
          key: 'Active & Authorized competition'
        },
        keepInSeconds: 60 * 60 * 24 * 30
      },
      contestants: {
        identifier: 'tournament:contestants',
        url: 'soccerdata/team/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]',
        feed: {
          key: 'TM1'
        },
        keepInSeconds: 60 * 60 * 24
      },
      schedule: {
        identifier: 'tournament:schedule',
        url: 'soccerdata/tournamentschedule/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]&_lcl=[[LANG]]&_ordSrt=asc',
        feed: {
          key: 'MA0'
        },
        keepInSeconds: 60 * 60 * 24,
        lastUpdatedPath: 'tournamentCalendar.lastUpdated'
      },
      seasonstats: {
        identifier: 'tournament:seasonstats',
        url: 'soccerdata/seasonstats/[[OUTLET_KEY]]?_rt=b&_fmt=json&detailed=yes&tmcl=[[LEAGUE]]&ctst=[[TEAMID]]',
        feed: {
          key: 'TM4'
        },
        keepInSeconds: 60 * 30
      },
      standings: {
        identifier: 'tournament:standings',
        url: 'soccerdata/standings/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]&live=yes',
        feed: {
          key: 'TM2'
        },
        keepInSeconds: 60 * 5
      },
      topperformers: {
        identifier: 'tournament:topperformers',
        url: 'soccerdata/topperformers/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]',
        feed: {
          key: 'PE6'
        },
        keepInSeconds: 60 * 30
      },
      rankings: {
        identifier: 'tournament:rankings',
        url: 'soccerdata/rankings/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]',
        feed: {
          key: 'PE4'
        },
        keepInSeconds: 60 * 60 * 24
      },
      seasonExpectedGoals: {
        identifier: 'tournament:seasonExpectedGoals',
        url: 'soccerdata/seasonexpectedgoals/[[OUTLET_KEY]]?_rt=b&_fmt=json&tmcl=[[LEAGUE]]&ctst=[[TEAMID]]',
        feed: {
          key: 'TM9'
        },
        keepInSeconds: 60 * 30
      }
    },
    fixtures: {
      matches: {
        identifier: 'fixtures:matches',
        feed: {
          title: 'Matches',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_pgSz=500&_rt=b&_fmt=json&tmcl=[[LEAGUE]]&live=yes&mt.mDt=[[[DATERANGE_FROM]] TO [[DATERANGE_TO]]]&lineups=no&_ordSrt=asc',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matches_by_id: {
        identifier: 'fixtures:matches_by_id',
        feed: {
          title: 'Matches',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?fx=[[IDS]]&_rt=b&_fmt=json&live=yes&lineups=no&_ordSrt=asc',
        keepInSeconds: 60 * 5
      },
      matches_last: {
        identifier: 'fixtures:matches_last',
        feed: {
          title: 'Matches last',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&live=yes&ctst=[[TEAM_ID1]]&status=Played&_ordSrt=desc',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matches_last_league: {
        identifier: 'fixtures:matches_last_league',
        feed: {
          title: 'Matches last by League',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&live=yes&ctst=[[TEAM_ID1]]&status=Played&_ordSrt=desc&tmcl=[[LEAGUE]]',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matches_next: {
        identifier: 'fixtures:matches_next',
        feed: {
          title: 'Matches next',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&live=yes&ctst=[[TEAM_ID1]]&status=Fixture&_ordSrt=asc',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      match_league_next: {
        identifier: 'fixtures:match_league_next',
        feed: {
          title: 'Match league next',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&live=yes&tmcl=[[LEAGUE]]&status=Fixture&_ordSrt=asc&_pgSz=5',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matches_week_live: {
        identifier: 'fixtures:matches_week_live',
        feed: {
          title: 'Matches LIVE',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_pgSz=500&_rt=b&_fmt=json&tmcl=[[LEAGUE]]&live=yes&lineups=no&_ordSrt=asc&&week=[[WEEK]]',
        keepInSeconds: 60 * 1,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matches_week_stg: {
        identifier: 'fixtures:matches_week_stg',
        feed: {
          title: 'Matches STG',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_pgSz=500&_rt=b&_fmt=json&tmcl=[[LEAGUE]]&live=yes&lineups=no&_ordSrt=asc&&stg=[[STAGE]]',
        keepInSeconds: 60 * 1,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      match: {
        identifier: 'fixtures:match',
        feed: {
          title: 'Match single',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&fx=[[EVENTID]]&live=yes',
        keepInSeconds: 60 * 60 * 24,
        keepInSecondsLive: 25,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
      matchstats: {
        identifier: 'fixtures:matchstats',
        feed: {
          title: 'Match Stats',
          key: 'MA2'
        },
        url: 'soccerdata/matchstats/[[OUTLET_KEY]]/[[EVENTID]]?_rt=b&_fmt=json&detailed=[[DETAILED]]',
        keepInSeconds: 25,
        keepInSecondsNotLIve: 60 * 60 * 24
      },
      matchevent: {
        identifier: 'fixtures:matchevent',
        feed: {
          title: 'Match Events',
          key: 'MA3'
        },
        url: 'soccerdata/matchevent/[[OUTLET_KEY]]/[[EVENTID]]?_rt=b&_fmt=json',
        keepInSeconds: 25,
        keepInSecondsNotLIve: 60 * 60 * 24
      },
      matchplayerratings: {
        identifier: 'fixtures:matchplayerratings',
        feed: {
          title: 'Match Player Ratings',
          key: 'MA20'
        },
        url: 'soccerdata/matchplayerratings/[[OUTLET_KEY]]/[[EVENTID]]?_rt=b&_fmt=json',
        keepInSeconds: 60 * 5
      },
      matchesAllCompetitionsBetweenTwo: {
        identifier: 'fixtures:matchesAllCompetitionsBetweenTwo',
        feed: {
          title: 'Matches',
          key: 'MA1'
        },
        url: 'soccerdata/match/[[OUTLET_KEY]]?_rt=b&_fmt=json&ctst=[[TEAM_1]]&ctst2=[[TEAM_2]]',
        keepInSeconds: 60 * 5,
        lastUpdatedPath: 'match.matchInfo.lastUpdated'
      },
    }
  },
  vodData: {
    fixture: {
      identifier: 'vod:fixture',
      url: 'vod/[[OUTLET_KEY]]/?_rt=b&vo=os&_fmt=json&_ord=pt&_ordSrt=desc&_lcl=en,de&lnk=urn:perform:mfl:fixture:[[EVENTID]]'
    },
    byKeywords: {
      identifier: 'vod:byKeywords',
      url: 'vod/[[OUTLET_KEY]]/?_rt=b&vo=os&_fmt=json&_ord=pt&_ordSrt=desc&_lcl=en,de&[[KEYWORDS]]&_dlt=[[SINCE_DATE]]'
    }
  }
};
