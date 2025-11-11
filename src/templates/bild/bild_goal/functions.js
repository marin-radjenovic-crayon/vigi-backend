const _ = require('lodash');
const goalEventTypeId = 16;
const passEventTypeId = 1;
const foulEventTypeId = 4;
const cardEventTypeId = 17;
const outEventTypeId = 5;
const cornerAwardedEventTypeId = 6;
const deletedEventId = 43;
const skipEvents = [
  4, 17, 5, 6, 68,
]

/**
 * @param {array} events - Array containing all match events
 * @param {array} lineUp - Teams lineup
 */
function getGoalData(events, lineUp, targetGoal) {
  const data = [];
  let team = null;
  let goalIndex = 1;
  let scoredTeamId = null;
  let isOwnGoal = false;
  for (let i = events?.length - 1; i >= 0; i--) {
    const event = events[i];
    const { eventId, typeId, outcome, contestantId, playerId, playerName, x, y } = event;

    if (data.length === 5) {
      break;
    }
    

    if (typeId === goalEventTypeId && (targetGoal?.eventId ? eventId === targetGoal.eventId : true)) {
      // if(goalIndex < 5) { //To test a specific goal
      //   goalIndex ++;
      //   continue;
      // }

      team = lineUp.find(team => team.contestantId === contestantId);
      const player = team?.player?.find(player => player.playerId === playerId);

      const yQualifier = event.qualifier.find(({ qualifierId }) => qualifierId === 102);

      isOwnGoal = Boolean(
        _.find(event.qualifier, e => {
          return [28].map(e => Number(e)).includes(e.qualifierId);
        })
      );

      const isPenalty = Boolean(
        _.find(event.qualifier, e => {
          return [9].map(e => Number(e)).includes(e.qualifierId);
        })
      );

      delete player.stat;
      scoredTeamId = team?.contestantId;
      if (yQualifier) {
        const entry = {
          isOwnGoal,
          isPenalty,
          teamId: team.contestantId,
          eventId,
          typeId,
          playerName,
          player,
          kit: team.kit,
          x: isOwnGoal ? 100 - x : x,
          y: isOwnGoal ? 100 - y : y,
          coords: {
            origin: {
              x,
              y
            },
            dest: {
              x: 100,
              y: Number.parseFloat(yQualifier?.value)
            }
          }
        };
        data.unshift(entry);
      }

      continue;
    }

    if (isOwnGoal) {
      if (team && data?.length < 5) {
        if (skipEvents.includes(typeId)) {
          break;
        }
        if (typeId === deletedEventId) {
          continue;
        }
        team = lineUp.find(team => team.contestantId === contestantId);
        let player = team?.player?.find(player => player.playerId === playerId);
        const isPlayerOpposite = isOwnGoal && team?.contestantId === scoredTeamId;
        delete player?.stat;

        const dest = {
          x: data[0]?.x,
          y: data[0]?.y
        };

        const entry = {
          teamId: team?.contestantId,
          eventId,
          typeId,
          // qualifier: event.qualifier,
          playerName,
          player,
          isPlayerOpposite,
          kit: team?.kit,
          x: isPlayerOpposite ? 100 - x : x,
          y : isPlayerOpposite ? 100 - y : y,
          coords: {
            origin: {
              x,
              y
            },
            dest
          }
        };

        data.unshift(entry);
      }
    } else {
      if (team && data?.length < 5) {
        if (skipEvents.includes(typeId)) {
          break;
        }
        if (typeId === deletedEventId) {
          continue;
        }
        team = lineUp.find(team => team.contestantId === contestantId);
        let player = team?.player?.find(player => player.playerId === playerId);
        const isPlayerOpposite = team?.contestantId !== scoredTeamId;
        delete player?.stat;

        const dest = {
          x: data[0]?.x,
          y: data[0]?.y
        };

        const entry = {
          teamId: team?.contestantId,
          eventId,
          typeId,
          // qualifier: event.qualifier,
          playerName,
          player,
          isPlayerOpposite,
          kit: team.kit,
          x: isPlayerOpposite ? 100 - x : x,
          y : isPlayerOpposite ? 100 - y : y,
          coords: {
            origin: {
              x,
              y
            },
            dest
          }
        };

        data.unshift(entry);
      }
    }


  }

  return data;
}

module.exports = {
  getGoalData
};
