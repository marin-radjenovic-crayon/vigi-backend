const updaterClass = require('./controllers/updater/optaUpdater');
const { eachOfLimit } = require('async');
const { cleanUpVideos } = require('@/src/controllers/vod/perform-stats');
const { convertLocalTimeRangeToUTC, isWithinUTCRange } = require('@/src/controllers/utils/auto-updater');

const localTimeRange = MAINCONFIG.feeds?.opta?.localTimeRange;

let liveDaemonCount = 0;
let SeasonDaemonCount = 0;
let OverviewDaemonCount = {};
let DailyDaemonCount = 0;
let Minutes5DaemonCount = 0;

const wait = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

//DEPRECATED
// const liveDaemon = {
//   name: 'liveDaemon',
//   async init() {
//     while (true) {
//       try {
//         await wait(1000 * 25); // Wait for 25 seconds after action
//         await this.action();
//       } catch (err) {
//         LOGGER.error(err, 'CATCH UPDATER ERROR in liveDaemon');
//         // Optionally handle the error further
//       }
//     }
//   },
//   async action() {
//     try {
//       const instance = new updaterClass();
//       const trackedCompetitions = MAINCONFIG.feeds?.opta?.trackedCompetitions;
//
//       await eachOfLimit(trackedCompetitions, 2, async (competition, index) => {
//         try {
//           const utcTimeRange = convertLocalTimeRangeToUTC(localTimeRange, competition?.guessedTimezone);
//           LOGGER.debug(`liveDaemon: ${competition.knownName} ${competition.timezoneOffset} utcTimeRange: %o`, {
//             utcTimeRange,
//             isWithinUTCRange: isWithinUTCRange(utcTimeRange)
//           });
//
//           if (!isWithinUTCRange(utcTimeRange)) {
//             return;
//           }
//           LOGGER.debug('liveDaemon check %o', { competition });
//           const updates = await instance.init(['live'], competition.tournamentCalendarId);
//
//           if (updates.length) {
//             liveDaemonCount++;
//           }
//
//           LOGGER.info(`liveDaemon updates (${competition.knownName} - ${liveDaemonCount}): %o`, updates);
//         } catch (err) {
//           LOGGER.error(err, `LiveDaemon UPDATER ERROR, ${competition.knownName}`);
//           // Optionally handle the error further
//         }
//       });
//     } catch (err) {
//       LOGGER.error(err, 'Error in liveDaemon action');
//       // Optionally handle the error further
//     }
//   }
// };

// const seasonDaemon = {
//   name: 'seasonDaemon',
//   async init() {
//     while (true) {
//       try {
//         await wait(1000 * 60 * 30); // Wait for 30 minutes after action
//         await this.action();
//       } catch (err) {
//         LOGGER.error(err, 'CATCH UPDATER ERROR in seasonDaemon');
//         // Optionally handle the error further
//       }
//
//     }
//   },
//   async action() {
//     try {
//       const instance = new updaterClass();
//       const trackedCompetitions = MAINCONFIG.feeds?.opta?.trackedCompetitions;
//
//       await eachOfLimit(trackedCompetitions, 2, async (competition, index) => {
//         try {
//           LOGGER.debug('seasonDaemon check %o', { competition });
//           const updates = await instance.seasonDaemonInit(competition);
//
//           if (updates) {
//             SeasonDaemonCount++;
//             LOGGER.debug(`actionSchedulerDaemonCount updates (${competition.knownName} - ${SeasonDaemonCount}):`, updates);
//           }
//         } catch (err) {
//           LOGGER.error(err, `seasonDaemon UPDATER ERROR, ${competition.knownName}`);
//           // Optionally handle the error further
//         }
//       });
//     } catch (err) {
//       LOGGER.error(err, 'Error in seasonDaemon action');
//       // Optionally handle the error further
//     }
//   }
// };

// const overviewDaemon = {
//   name: 'overviewDaemon',
//   async init() {
//     while (true) {
//       try {
//         await wait(1000 * 60 * 1); // Wait for 1 minute after action
//         await this.action();
//       } catch (err) {
//         LOGGER.error(err, 'CATCH UPDATER overviewDaemon ERROR');
//         // Optionally handle the error further
//       }
//
//     }
//   },
//   async action() {
//     try {
//       const instance = new updaterClass();
//       const trackedCompetitions = MAINCONFIG.feeds?.opta?.trackedCompetitions;
//
//       await eachOfLimit(trackedCompetitions, 2, async (competition, index) => {
//         try {
//           const utcTimeRange = convertLocalTimeRangeToUTC(localTimeRange, competition?.guessedTimezone);
//           LOGGER.debug(`overviewDaemon: ${competition.knownName} ${competition.timezoneOffset} utcTimeRange: %o`, {
//             utcTimeRange,
//             isWithinUTCRange: isWithinUTCRange(utcTimeRange)
//           });
//
//           if (!isWithinUTCRange(utcTimeRange)) {
//             return;
//           }
//
//           LOGGER.debug('overviewDaemon check %o', { competition });
//           const updates = await instance.overviewDaemonInit(competition);
//
//           if (updates) {
//             if (!OverviewDaemonCount[competition.knownName]) {
//               OverviewDaemonCount[competition.knownName] = 0;
//             }
//             OverviewDaemonCount[competition.knownName]++;
//           }
//
//           LOGGER.info(
//             `overviewDaemonCount updates ${competition.knownName}:(${OverviewDaemonCount[competition.knownName]}):`,
//             updates
//           );
//         } catch (err) {
//           LOGGER.error(err, `LiveDaemon UPDATER ERROR, ${competition.knownName}`);          // Optionally handle the error further
//         }
//       });
//     } catch (err) {
//       LOGGER.error(err, 'Error in overviewDaemon action');
//     }
//   }
// };

// const minutes5Daemon = {
//   name: 'minutes5Daemon',
//   async init() {
//     while (true) {
//       try {
//         await wait(1000 * 60 * 5); // Wait for 5 minutes after action
//         await this.action();
//       } catch (err) {
//         LOGGER.error(err, 'CATCH UPDATER minutes5Daemon ERROR');
//         // Optionally handle the error further
//       }
//
//     }
//   },
//   async action() {
//     try {
//       const instance = new updaterClass();
//       const trackedCompetitions = MAINCONFIG.feeds?.opta?.trackedCompetitions;
//
//       await eachOfLimit(trackedCompetitions, 2, async (competition, index) => {
//         try {
//           const utcTimeRange = convertLocalTimeRangeToUTC(localTimeRange, competition?.guessedTimezone);
//           LOGGER.debug(`minutes5Daemon: ${competition.knownName} ${competition.timezoneOffset} utcTimeRange: %o`, {
//             utcTimeRange,
//             isWithinUTCRange: isWithinUTCRange(utcTimeRange)
//           });
//           if (!isWithinUTCRange(utcTimeRange)) {
//             return;
//           }
//           let error = false;
//           LOGGER.debug('minutes5Daemon check %o', { competition });
//           const updates = await instance.minutes5DaemonInit(competition).catch(err => {
//             LOGGER.error(err, 'minutes5Daemon UPDATER ERROR');
//             error = true;
//           });
//
//           if (updates && !error) {
//             Minutes5DaemonCount++;
//           }
//
//           LOGGER.info(
//             `overviewDaemonCount updates ${competition.knownName}:(${OverviewDaemonCount[competition.knownName]}):`,
//             updates
//           );
//         } catch (err) {
//           LOGGER.error(err, `Error processing competition ${competition.knownName}:`, err);
//           // Optionally handle the error further
//         }
//       });
//     } catch (err) {
//       LOGGER.error(err, 'Error in minutes5Daemon action');
//       // Optionally handle the error further
//     }
//   }
// };

// const dailyDaemon = {
//   name: 'dailyDaemon',
//   async init() {
//     while (true) {
//       try {
//         await wait(1000 * 60 * 60 * 1); // Wait for 1 hour after action
//         await this.action();
//       } catch (err) {
//         LOGGER.error(err, 'CATCH UPDATER dailyDaemon ERROR');
//       }
//
//     }
//   },
//   async action() {
//     try {
//       const instance = new updaterClass();
//       const trackedCompetitions = MAINCONFIG.feeds?.opta?.trackedCompetitions;
//
//       LOGGER.info(`dailyDaemonCount updates (${DailyDaemonCount}):`);
//
//       // await eachOfLimit(trackedCompetitions, 2, async (competition, index) => {
//       //   try {
//       //     const utcTimeRange = convertLocalTimeRangeToUTC(localTimeRange, competition?.guessedTimezone);
//       //     LOGGER.debug(`dailyDaemon: ${competition.knownName} ${competition.timezoneOffset} utcTimeRange: %o`, {
//       //       utcTimeRange,
//       //       isWithinUTCRange: isWithinUTCRange(utcTimeRange)
//       //     });
//       //     if (isWithinUTCRange(utcTimeRange)) {
//       //       LOGGER.debug('dailyDaemon check %o', { competition });
//       //       await instance.dailyDaemonInit(competition);
//       //     }
//       //   } catch (err) {
//       //     LOGGER.error(err, `LiveDaemon UPDATER ERROR, ${competition.knownName}`);          // Optionally handle the error further
//       //   }
//       // });
//
//       // @todo: ADD JOB QUEUE
//       try {
//         await cleanUpVideos({ days: 10 });
//       } catch (err) {
//         LOGGER.error(err, 'dailyDaemon cleanUpVideos ERROR');
//       }
//
//       DailyDaemonCount++;
//     } catch (err) {
//       LOGGER.error(err, 'CATCH UPDATER dailyDaemon ERROR');
//       // Optionally handle the error further
//     }
//   }
// };

module.exports = {
  // liveDaemon,
  // seasonDaemon,
  // overviewDaemon,
  // dailyDaemon,
  // minutes5Daemon
};
