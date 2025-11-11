module.exports = {
  url: 'https://api.olympics.statsperform.com/sportworld-sr921tu7v3k4/feeds/',
  localTimeRange: {
    from: '08:00:00',
    to: '01:00:00'
  },
  trackedCompetitions: [
    {
      knownName: 'CONMEBOL Copa America',
      tournamentCalendarId: '5te8vskbhb3t1n687hua2waac',
      id: '45db8orh1qttbsqq9hqapmbit',
      guessedTimezone: 'America/Argentina/Buenos_Aires',
      timezoneOffset: '-03:00'
    }
  ],
  competitions: [
    {
      name: 'Olympics Paris 2024',
      id: 'to5229'
    },
    {
      name: 'Olympics Tokyo 2021',
      id: 'to3085'
    }
  ],
  data: {
    ageList: {
      identifier: 'age-list',
      label: 'Altersklassen',
      url: 'soccerdata/tournamentcalendar/[[OUTLET_KEY]]?_rt=b&_fmt=json&comp=[[LEAGUE]]'
    },
    competitionList: {
      identifier: 'competition-list',
      label: 'Wettbewerbsliste',
      url: 'en/competition-list/[[SPORT_ID]]'
    },
    countryList: {
      identifier: 'country-list',
      label: 'Länderliste'
    },
    livetickerByCompetitionDate: {
      identifier: 'liveticker-by-competition-date',
      label: 'Länderliste'
    },
    match: {
      identifier: 'match',
      label: 'Spiel'
    },
    matchEventType: {
      identifier: 'match-event-type',
      label: 'Eventtypen von Spielen / Sportereignissen'
    },
    matchIncident: {
      identifier: 'match-incident',
      label: 'Besondere Vorkommnisse'
    },
    matchResultAt: {
      identifier: 'match-result-at',
      label: 'Spielabschnitte'
    },
    matchesByDate: {
      identifier: 'matches-by-date',
      label: 'Spiele (Kalendertag)',
      url: 'en/matches-by-date/[[DATE]]/[[CID]]'
    },
    matchesByPerson: {
      identifier: 'matches-by-person',
      label: 'Liste Spiele (Person)'
    },
    matchesBySeason: {
      identifier: 'matches-by-season',
      label: 'Spielplan einer Saison'
    },
    matchesByTeam: {
      identifier: 'matches-by-team',
      label: 'Spiele einer Mannschaft'
    },
    medalWinners: {
      identifier: 'medal-winners',
      label: 'Medaillengewinner (Olymp. Spiele)'
    },
    medals: {
      identifier: 'medals',
      label: 'Medaillenspiegel',
      url: 'en/medals/[[OLYMPIC_SEASON]]/[[LIMIT]]/' //to5229
    },
    roundsBySeason: {
      identifier: 'rounds-by-season',
      label: 'Runden einer Saison'
    },
    seasonsByCompetition: {
      identifier: 'seasons-by-competition',
      label: 'Saisons eines Wettbewerbs'
    },
    seasonsByTopic: {
      identifier: 'seasons-by-topic',
      label: 'Saisons (Topic)'
    },
    standing: {
      identifier: 'standing',
      label: 'Tabelle'
    },
    teamsBySeason: {
      identifier: 'teams-by-season',
      label: 'Alle Teams einer Saison'
    },
    teamsByTopic: {
      identifier: 'teams-by-topic',
      label: 'Teams eines Topics'
    },
    topicList: {
      identifier: 'topic-list',
      label: 'Topic-Hierarchie für ein Topic / Topic-Liste'
    },
    venue: {
      identifier: 'venue',
      label: 'Sportstätte'
    },
    venuesByTopic: {
      identifier: 'venues-by-topic',
      label: 'Sportstätten (nach Topics)'
    }
  },
  timelines: require('./timelines')
};
