const config = require('../../src/config');
const _ = require('lodash');
const FnFeedsClass = require('../../src/controllers/feeds/opta/functions');
const { Parser } = require('json2csv');
const { join, basename } = require('path');
const fs = require('fs');
const initMongo = require('../../src/lib/mongo');
const { filterEventsBetweenDates } = require('../../src/controllers/feeds/opta/helpers');
const { parseISO, format, add,
  sub
} = require('date-fns');
const { de } = require('date-fns/locale');
const logger = require('../../src/middleware/utils/logger').logger;
global.LOGGER = logger;
const generateEpgTrackedCompetitions = async () => {
  try {
    await initMongo();
    const competitions = config.feeds.opta.trackedCompetitions;

    const output = [];
    let allEvents = [];

    for (const competition of competitions) {
      const FnFeeds = new FnFeedsClass({
        target: {
          league: competition.tournamentCalendarId,
        },
      });

      const matchesEn = await FnFeeds.getMatches([], false);

      // Set the start date to one week before today
      const startIsoString = sub(new Date(), { days: 7 }).toISOString();
      const endIsoString = '2024-12-31T23:59:59Z';

      const events = filterEventsBetweenDates(matchesEn, startIsoString, endIsoString).map(event => {
        const validDate =
          event.localDate && !isNaN(new Date(event.localDate).getTime()) ? event.localDate : '1970-01-01';
        const validTime = event.localTime || '00:00:00';

        return {
          ...event,
          sortableKey: `${validDate}T${validTime}`,
          competitionName: competition.knownName,
        };
      });

      allEvents.push(...events);
    }

    allEvents = _.sortBy(allEvents, [event => new Date(event.sortableKey).getTime()]);

    // Templates for different game states
    const pre = {
      title: 'Wettbewerb [[COMPETITION]]. Spieltag: „Das nächste Spiel ist immer das schwerste“',
      description:
        'Mit aktuellen Videos, News und den interessantesten Statistiken der Teams und Spieler stimmen wir ein auf die Partien des kommenden Spieltags.',
    };

    const live = {
      title: '[[TEAM_HOME]] : [[TEAM_AWAY]], Wettbewerb, [[COMPETITION]]. Spieltag',
      description:
        'Mit innovativen Live-Statistiken zu allen Spielen in Echtzeit verpasst Du keinen wichtigen Moment auf dem Platz.',
    };

    const post = {
      title: 'Wettbewerb [[COMPETITION]]. Spieltag: „Nach dem Spiel ist vor dem Spiel“',
      description:
        'Mit Interviews, Daten-Videos und den wichtigsten Statistiken analysieren wir den Spieltag und vergleichen die Leistungen von Teams und Spielern.',
    };

    const now = new Date();

    for (const event of allEvents) {
      const dateTime = new Date(event.sortableKey);
      if (isNaN(dateTime.getTime())) {
        console.warn(`Invalid dateTime for event: ${event.sortableKey}`);
        continue;
      }

      const competitionName = formatCompetitionName(event.competitionName);
      const homeTeam = event.homeContestantShortName || event.homeContestantName;
      const awayTeam = event.awayContestantShortName || event.awayContestantName;

      // Match timings
      const liveStartDateTime = dateTime;
      const liveEndDateTime = add(dateTime, { minutes: 90 });

      if (liveEndDateTime <= now) {
        // Match has already ended, create pre-match entry
        output.push({
          Date: format(liveStartDateTime, 'dd.MM.yyyy', { locale: de }),
          'Start Time (CET/CEST)': format(liveStartDateTime, 'HH:mm', { locale: de }),
          'End Time (CET/CEST)': format(liveEndDateTime, 'HH:mm', { locale: de }),
          Live: '',
          'Title EN': '',
          'Title DE': pre.title.replace('[[COMPETITION]]', competitionName),
          'Long Description EN': '',
          'Long Description DE': pre.description,
          'Short Description EN': '',
          'Short Description DE': '',
          Sports: 'soccer',
          Competition: _.toLower(competitionName),
          'Event link': '',
          'Image link (jpg)': '',
        });
      } else if (liveStartDateTime <= now && liveEndDateTime > now) {
        // Match is currently live, create live-match entry
        output.push({
          Date: format(liveStartDateTime, 'dd.MM.yyyy', { locale: de }),
          'Start Time (CET/CEST)': format(liveStartDateTime, 'HH:mm', { locale: de }),
          'End Time (CET/CEST)': format(liveEndDateTime, 'HH:mm', { locale: de }),
          Live: 'x',
          'Title EN': '',
          'Title DE': live.title
            .replace('[[TEAM_HOME]]', homeTeam)
            .replace('[[TEAM_AWAY]]', awayTeam)
            .replace('[[COMPETITION]]', competitionName),
          'Long Description EN': '',
          'Long Description DE': live.description,
          'Short Description EN': '',
          'Short Description DE': '',
          Sports: 'soccer',
          Competition: _.toLower(competitionName),
          'Event link': '',
          'Image link (jpg)': '',
        });
      } else if (liveStartDateTime > now) {
        // Match has not started yet, create post-match entry
        output.push({
          Date: format(liveStartDateTime, 'dd.MM.yyyy', { locale: de }),
          'Start Time (CET/CEST)': format(liveStartDateTime, 'HH:mm', { locale: de }),
          'End Time (CET/CEST)': format(liveEndDateTime, 'HH:mm', { locale: de }),
          Live: '',
          'Title EN': '',
          'Title DE': post.title.replace('[[COMPETITION]]', competitionName),
          'Long Description EN': '',
          'Long Description DE': post.description,
          'Short Description EN': '',
          'Short Description DE': '',
          Sports: 'soccer',
          Competition: _.toLower(competitionName),
          'Event link': '',
          'Image link (jpg)': '',
        });
      }
    }

    const parser = new Parser();
    const csv = parser.parse(output);

    const outputDir = join(__dirname, './output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    const outputFilePath = join(outputDir, basename(`epg_2024_tracked_competitions`) + '.csv');

    fs.writeFileSync(outputFilePath, csv, err => {
      if (err) {
        console.error(`Error writing the CSV file (${outputFilePath}):`, err);
      } else {
        console.log(`CSV file successfully saved as ${outputFilePath}`);
      }
    });
  } catch (err) {
    console.error(`Error parsing JSON data from file ():`, err);
  }

  process.exit(0);
};

(async () => {
  await generateEpgTrackedCompetitions();
})();

// Helper function to format competition names
function formatCompetitionName(name) {
  return name
    .replace(/\b([a-z])/g, char => char.toUpperCase())
    .replace(/([A-Z])/g, ' $1')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}
