const BaseClass = require('./index');
const config = require('../../config');
const _ = require('lodash');
const async = require('async');
const { differenceInMinutes, parseISO } = require('date-fns');

const { saveSingleTemplate } = require('../templates/handleTemplate');

const TemplatesRecordsM = require('../../models/template_records');

const FeedClass = require('../feeds/del/functions');
const UpdaterM = require('../../models/updater');
const SetupM = require('../../models/setup');
const { upsertItem, getItem, getItemsPure } = require('../../middleware/db');
const MediaM = require('../../models/media');

const GoalTemplateClass = require('../../templates/adlergoal');

module.exports = class DelUpdater extends BaseClass {
  constructor() {
    super();
  }

  checkGoals(eventData) {
    return new Promise(async (resolve, reject) => {
      // console.log("setupEvent", setupEvent);
      const target = {
        eventId: _.get(eventData, 'eventId'),
        league: `${_.get(eventData, 'competitionId')}`,
        teamId: _.get(eventData, 'selectedTeamId')
      };
      const FeedInstance = new FeedClass({
        target
      });

      const feedData = await FeedInstance.getLiveGoals([]).catch(err => {
        reject(err);
      });

      const dbFeed = await getItem(
        {
          'event.eventId': target.eventId,
          feedType: 'goals'
        },
        UpdaterM
      ).catch(err => {
        console.log('err', err);
        reject(err);
      });

      const hasSomethingNew = !_.isEqual(feedData, _.get(dbFeed, 'data'));

      if (hasSomethingNew) {
        await upsertItem(
          {
            'event.eventId': target.eventId,
            feedType: 'goals'
          },
          UpdaterM,
          {
            body: {
              data: feedData,
              event: eventData,
              feedType: 'goals',
              feedProvider: 'del'
            }
          }
        ).catch(err => {
          reject(err);
        });
      }

      // if (hasSomethingNew) {
      //   console.log('ADD NEW GOALS');
      // }

      resolve(hasSomethingNew);
    });
  }

  checkLiveGame(gameFeedType, eventData) {
    return new Promise(async (resolve, reject) => {
      // console.log("setupEvent", setupEvent);
      const target = {
        eventId: _.get(eventData, 'eventId'),
        league: _.get(eventData, 'competitionId'),
        teamId: _.get(eventData, 'selectedTeamId')
      };

      const FeedInstance = new FeedClass({
        target
      });

      await FeedInstance.setLiveGame([gameFeedType]).catch(err => {
        LOGGER.error(err, 'setLiveGame error')
      });

      const feedData = _.get(FeedInstance, `apiData.liveGame.${gameFeedType}`);

      const targetRecord = {
        'event.eventId': target.eventId,
        feedType: `${gameFeedType}`
      };

      const dbFeed = await getItem(targetRecord, UpdaterM).catch(err => {
        console.log('err', err);
        reject(err);
      });

      const dbFeedData = _.get(dbFeed, 'data');

      const hasSomethingNew = !_.isEqual(feedData, dbFeedData);

      if (hasSomethingNew) {
        await upsertItem(targetRecord, UpdaterM, {
          body: {
            data: feedData,
            event: eventData,
            feedType: targetRecord.feedType,
            feedProvider: 'del'
          }
        }).catch(err => {
          reject(err);
        });
      }

      // if (hasSomethingNew && !_.isEmpty(feedData)) {
      //   console.log(`RESAVE TEMPLATES ${gameFeedType}`);
      // }

      resolve(hasSomethingNew);
    });
  }

  checkStanding() {
    return new Promise(async (resolve, reject) => {
      // console.log("setupEvent", setupEvent);
      const target = {
        league: '1'
      };

      const FeedInstance = new FeedClass({
        target
      });

      const feedData = await FeedInstance.getStandingTable().catch(err => {
        LOGGER.error('checkStanding err %o', err);
      });

      const targetRecord = {
        'event.competitionId': target.league,
        feedType: `standing`
      };

      const dbFeed = await getItem(targetRecord, UpdaterM).catch(err => {
        // console.log('err', err);
        LOGGER.error(err);
        reject(err);
      });

      const dbFeedData = _.get(dbFeed, 'data');

      const hasSomethingNew = !_.isEqual(feedData, dbFeedData);

      if (hasSomethingNew) {
        await upsertItem(targetRecord, UpdaterM, {
          body: {
            data: feedData,
            event: {
              competitionId: target.league
            },
            feedType: targetRecord.feedType,
            feedProvider: 'del'
          }
        }).catch(err => {
          reject(err);
        });
      }

      // if (hasSomethingNew && !_.isEmpty(feedData)) {
      //   // console.log(`RESAVE TEMPLATES ${gameFeedType}`);
      //   // await this.processTemplates().catch((err) => {
      //   //   reject(err);
      //   // });
      // }

      resolve(hasSomethingNew);
    });
  }

  createGoalsEntries(eventData) {
    return new Promise(async (resolve, reject) => {
      const dbFeedData = await getItem(
        {
          'event.eventId': eventData.eventId,
          feedType: 'goals'
        },
        UpdaterM
      ).catch(err => {
        console.log('err', err);
        reject(err);
      });

      const goalsToCheck = _.get(dbFeedData, 'data', []);
      // console.log("goalsToCheck", goalsToCheck);

      async.eachSeries(
        goalsToCheck,
        (goal, calback) => {
          (async () => {
            let isGoalExist = false;

            let goalEventCheck = await getItem(
              {
                'event.eventId': eventData.eventId,
                'data.dynamic.goal.eventId': goal.eventId
              },
              TemplatesRecordsM
            ).catch(error => {
              LOGGER.error(error, 'goalEventCheck adlergoal failed');
            });

            if (goalEventCheck === null) {
              const goalTemplateInstance = new GoalTemplateClass();
              await goalTemplateInstance
                .createDirectly({
                  goal,
                  event: eventData,
                  videoproduction: true
                })
                .catch(err => {
                  LOGGER.error(err, 'createDirectly adlergoal failed');
                });
            }

            calback();
          })().catch(err => {
            LOGGER.error(err, 'createGoalsEntries err');
          });
        },
        function (err) {
          if (err) {
            LOGGER.error(err);
          }
          resolve();
        }
      );
    });
  }

  processTemplates(updates, eventData) {
    return new Promise((resolve, reject) => {
      const templateUpdateConfig = config.liveUpdates.del;

      const templatesToUpdate = [];
      _.each(updates, updateType => {
        const templatesTypesToUpdate = _.get(templateUpdateConfig, updateType);

        _.each(_.get(templatesTypesToUpdate, 'templates', []), template => {
          if (templatesToUpdate.indexOf(template) === -1) {
            templatesToUpdate.push(template);
          }
        });
      });

      // console.log('templatesToUpdate', templatesToUpdate);

      async.eachSeries(
        templatesToUpdate,
        (templateNameToUpdate, callback) => {
          (async () => {
            if (templateNameToUpdate === 'adlergoal') {
              await this.createGoalsEntries(eventData).catch(err => {
                LOGGER.error(err, 'create goal entries failed');
                callback();
              });

              callback();
            } else {
              const templates = await getItemsPure(
                {
                  template_name: templateNameToUpdate,
                  'event.eventId': eventData.eventId
                },
                TemplatesRecordsM,
                ['uuid']
              ).catch(err => {
                LOGGER.error(err);
              });

              async.eachSeries(
                templates,
                (dbTemplate, callback2) => {
                  const uuid = _.get(dbTemplate, 'uuid');
                  (async () => {
                    await saveSingleTemplate(
                      {
                        params: {
                          template: templateNameToUpdate,
                          uuid: uuid
                        },
                        _takeScreenshot: true
                      },
                      {
                        status: () => {
                          return {
                            json: () => {}
                          };
                        }
                      }
                    );

                    LOGGER.info('Templates has been resaved %o', {
                      template: templateNameToUpdate,
                      uuid: uuid
                    });

                    callback2();
                  })().catch(err => {
                    callback2(err);
                  });
                },
                function (err) {
                  if (err) {
                    LOGGER.error(err);
                  }
                  // configs is now a map of JSON data
                  callback();
                }
              );
            }
          })().catch(err => {
            callback(err);
          });
        },
        function (err) {
          if (err) {
            reject(err);
          }
          resolve();
        }
      );
    });
  }

  init(deps = ['goals', 'gameInfo', 'gameRoster', 'teamStats', 'playerStats', 'standing']) {
    return new Promise(async (resolve, reject) => {
      const setupEvent = await getItem({ id: 2 }, SetupM);
      const eventData = _.get(setupEvent, 'data.data.event');

      const updates = [];
      //check updated only 2 hours before and after game
      // const DateNow = new Date('2021-09-24 17:25:00');
      // const DateEvent = new Date('2021-09-24 19:30:00');
      const DateNow = new Date();
      const DateEvent = new Date(_.get(eventData, 'start_date'));
      const hoursDiffrence = differenceInMinutes(DateNow, DateEvent);

      LOGGER.debug('DateNow %s', DateNow.toUTCString());
      LOGGER.debug('DateEvent %s', DateEvent.toUTCString());
      LOGGER.debug('minutesDifference %s', hoursDiffrence);

      const hoursBefore = 2;
      const hoursAfter = 4;

      if (
        (hoursDiffrence < 0 && hoursDiffrence <= -(hoursBefore * 60)) ||
        (hoursDiffrence > 0 && hoursDiffrence >= hoursAfter * 60)
      ) {
        LOGGER.info('Skip update...minutesDifference not yet in range... %s', hoursDiffrence);
        return resolve(updates);
      }

      if (deps.indexOf('goals') > -1) {
        const checkGoals = await this.checkGoals(eventData).catch(err => {
          LOGGER.error(err, 'checkGoals err %o');
        });

        if (checkGoals) {
          updates.push('goals');
        }
      }

      if (deps.indexOf('gameInfo') > -1) {
        const checkGameInfo = await this.checkLiveGame('gameInfo', eventData).catch(err => {
          LOGGER.error(err, 'checkGameInfo err %o');
        });

        if (checkGameInfo) {
          updates.push('gameInfo');
        }
      }

      if (deps.indexOf('gameRoster') > -1) {
        const checkGameRoster = await this.checkLiveGame('gameRoster', eventData).catch(err => {
          LOGGER.error(err, 'checkGameRoster err %o');
        });

        if (checkGameRoster) {
          updates.push('gameRoster');
        }
      }

      if (deps.indexOf('teamStats') > -1) {
        const checkTeamStats = await this.checkLiveGame('teamStats', eventData).catch(err => {
          LOGGER.error(err, 'checkTeamStats err %o');
        });

        if (checkTeamStats) {
          updates.push('teamStats');
        }
      }

      if (deps.indexOf('playerStats') > -1) {
        const checkPlayerStats = await this.checkLiveGame('playerStats', eventData).catch(err => {
          LOGGER.error(err, 'checkPlayerStats err %o');
        });

        if (checkPlayerStats) {
          updates.push('playerStats');
        }
      }

      if (deps.indexOf('standing') > -1) {
        const checkStanding = await this.checkStanding().catch(err => {
          LOGGER.error(err, 'checkStanding err %o');
        });

        if (checkStanding) {
          updates.push('standing');
        }
      }

      if (deps.indexOf('schedule') > -1) {
        updates.push('schedule');
      }

      if (deps.indexOf('playerStatsSeason') > -1) {
        updates.push('playerStatsSeason');
      }

      if (deps.indexOf('teamStatsSeason') > -1) {
        updates.push('teamStatsSeason');
      }

      if (process.env.NODE_ENV === 'test') {
        return resolve(updates);
      }

      await this.processTemplates(updates, eventData).catch(err => {
        reject(err);
      });

      resolve(updates);
    });
  }
};
