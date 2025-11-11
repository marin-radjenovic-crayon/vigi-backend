const { differenceInMinutes, isWithinInterval, parseISO, parse } = require('date-fns');
const crypto = require('crypto');
const FeedsDataM = require('@/src/models/feeds_data');
const _ = require('lodash');

function getSinceDate(hours) {
  // Get the current date and time
  const now = new Date();

  // Subtract the specified number of hours
  const sinceDate = new Date(now.getTime() - hours * 60 * 60 * 1000);

  return sinceDate.toISOString();
}

const getClosestMatchMinutesBefore = ({ matches, findGameBeforeMinutes, teamIds }) => {
  const now = new Date();
  const pickedMatches =
    matches
      .filter(match => {
        if (match?.time && match?.date) {
          const matchDate = new Date(match?.date + match?.time).getTime();
          const distancePure = differenceInMinutes(matchDate, now);

          if (teamIds.length) {
            return (
              distancePure <= findGameBeforeMinutes &&
              (teamIds.includes(match?.homeContestantId) || teamIds.includes(match?.awayContestantId))
            );
          }
          return distancePure <= findGameBeforeMinutes;
        }
      })
      .sort((matchA, matchB) => {
        const matchDateA = new Date(matchA?.date + matchA?.time).getTime();
        const matchDateB = new Date(matchB?.date + matchB?.time).getTime();
        const distanceA = Math.abs(differenceInMinutes(matchDateA, now));
        const distanceB = Math.abs(differenceInMinutes(matchDateB, now));
        return distanceA - distanceB;
      }) || [];

  return pickedMatches?.[0];
};
const getClosestMatchFromNow = ({ matches, teamIds = [], now = new Date() }) => {
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const endOf48Hours = new Date(now.getTime() + 48 * 60 * 60 * 1000);

  // Function to parse match date, handling different date formats
  const parseMatchDate = match => {
    if (!match?.match_date) return null;

    const matchDateTimeString = match.match_time
      ? `${match.match_date} ${match.match_time}`
      : match.match_date;

    // Parse using the correct format: "dd.MM.yyyy HH:mm"
    return parse(
      matchDateTimeString,
      match.match_time ? 'dd.MM.yyyy HH:mm' : 'dd.MM.yyyy',
      new Date()
    );
  };

  let closestMatch = null;
  let closestMatchIndex = null;
  let closestDistance = Number.MAX_VALUE;
  let closeMatches = [];
  let prevClosest = null;
  let nextClosest = null;

  matches.forEach((match, index) => {
    const matchDate = parseMatchDate(match);
    if (
      matchDate &&
      (teamIds.length === 0 || teamIds.includes(match?.home?.id) || teamIds.includes(match?.away?.id))
    ) {
      // Add match to closeMatches if it falls within the next 48 hours
      if (matchDate >= startOfToday && matchDate < endOf48Hours) {
        closeMatches.push(match);
      }

      // Determine the closest match based on distance from now
      if (
        (matchDate >= startOfToday && matchDate < endOf48Hours) ||
        (matchDate < now && now - matchDate < closestDistance)
      ) {
        closestMatch = match;
        closestDistance = matchDate >= startOfToday ? Math.abs(now - matchDate) : now - matchDate;
        closestMatchIndex = index;
      }
    }
  });

  prevClosest = matches?.[closestMatchIndex - 1];
  nextClosest = matches?.[closestMatchIndex + 1];

  if (!closestMatch) {
    closestMatch = matches?.[0];
    closeMatches.push(closestMatch);
    nextClosest = matches?.[1];
  } else {
    if (!closeMatches?.length) {
      closeMatches.push(closestMatch);
    }
  }

  return {
    closestMatch: closestMatch,
    closeMatches: closeMatches,
    prevClosest,
    nextClosest
  };
};

function generateUrlHash(url) {
  return crypto.createHash('md5').update(url).digest('hex');
}

// Extend the cachedApiCall function to accept an options object
const findMostRecentDateByPath = (data, path) => {
  if (!path) {
    return null;
  }

  // Split the path to identify the target array/object and the key of the date
  const pathSegments = path.split('.');
  const basePath = pathSegments.shift(); // The first segment is the base path
  const restOfPath = pathSegments.join('.'); // Re-join the remaining segments for the nested path

  // Retrieve the base part (could be an array or a single object)
  const base = _.get(data, basePath);

  let mostRecentDate = null;

  // A helper function to update the most recent date
  const updateMostRecentDate = dateString => {
    const date = new Date(dateString);
    if (!mostRecentDate || date > mostRecentDate) {
      mostRecentDate = date;
    }
  };

  // A function to process each item (whether base is an array or a single object)
  const processItem = item => {
    const itemDate = _.get(item, restOfPath);
    if (itemDate) {
      updateMostRecentDate(itemDate);
    }
  };

  // Check if the base is an array and iterate over it, or directly access the date if it's a single object
  if (_.isArray(base)) {
    base.forEach(item => processItem(item));
  } else {
    processItem(base);
  }

  return mostRecentDate;
};

function filterEventsBetweenDates(events, startIsoString, endIsoString) {
  // Parse the start and end date ISO strings to Date objects
  const startDate = parseISO(startIsoString);
  const endDate = parseISO(endIsoString);

  // Filter the events
  const filteredEvents = events.filter(event => {
    // Combine date and time into an ISO string and parse to a Date object
    const eventDate = parseISO(`${event.date}T${event.time.substring(0, event.time.length - 1)}`);

    // Check if the event date is within the specified range
    return isWithinInterval(eventDate, {
      start: startDate,
      end: endDate
    });
  });

  return filteredEvents;
}

function getUniqueTeams(matches) {
  const teamMap = new Map();

  matches.forEach(match => {
    [match.home, match.away].forEach(team => {
      if (!teamMap.has(team.id)) {
        teamMap.set(team.id, {
          id: team.id,
          name: team.shortname,
          shortname: team.shortname,
          microname: team.microname,
          country: team.country.name
        });
      }
    });
  });

  return Array.from(teamMap.values());
}


function getMatchesByTeam(matches, teamId) {

  return matches.filter(match => {
    if (!teamId) return true; // no filter, include all matches
    return match.home.id === teamId || match.away.id === teamId;

  }
  ).map(match => {
    const clonedMatch = { ...match };
    clonedMatch.home.name = clonedMatch.home.shortname;
    clonedMatch.away.name = clonedMatch.away.shortname;
    clonedMatch.competitionId = '12';
    clonedMatch.competitionName = 'Bundesliga';
    clonedMatch.teamId = teamId;
    clonedMatch.eventId = clonedMatch.id;
    clonedMatch.date = clonedMatch.match_date;
    clonedMatch.time = clonedMatch.match_time;
    const match_result = clonedMatch.match_result;
    const finalScores = match_result.filter((ms) => ms.match_result_at === "0");
    const homeScore = finalScores.find((s) => s.place === 'home')?.match_result;
    const awayScore = finalScores.find((s) => s.place === 'away')?.match_result;
    const score = {
      home: homeScore,
      away: awayScore
    }
    clonedMatch.scores = score;
    return clonedMatch;
  });
}

const eventType = {
  16: 'goal'
  // Other event types, e.g
  // 21: 'yellow_card'
};

function detectFormation(players) {
  // Step 1: Exclude goalkeeper
  const outfieldPlayers = players;
  // const outfieldPlayers = players.filter(
  //   p => !(p.xpos === "0.5000" && p.ypos === "0.0500")
  // );

  // Step 2: Group by ypos with a tolerance (to handle float precision)
  const TOLERANCE = 0.01;
  const lines = {};

  for (const player of outfieldPlayers) {
    const ypos = parseFloat(player.ypos);

    // Try to find a matching group
    let matched = false;
    for (const key in lines) {
      if (Math.abs(parseFloat(key) - ypos) <= TOLERANCE) {
        lines[key].push(player);
        matched = true;
        break;
      }
    }

    // If no match found, create a new group
    if (!matched) {
      lines[ypos.toFixed(4)] = [player];
    }
  }

  // Remove the goalkeeper line (key = '0.0500')
  const filteredLines = Object.fromEntries(
    Object.entries(lines).filter(([key, _]) => key !== '0.0500')
  );

  // Step 3: Sort the lines by ypos (ascending: back to front)
  const sortedLines = Object.entries(filteredLines)
    .sort((a, b) => parseFloat(a[0]) - parseFloat(b[0]))
    .map(entry => entry[1]);
  // Step 4: Map each line to number of players
  const formation = sortedLines.map(line => line.length).join("");

  return { formation, lines };
}

function getTopPlayerSeason(matches, teamId) {
  const playerStats = {};

  for (const match of matches) {
    const events = match?.match_event?.filter((t) => t.team_id === teamId) || [];
    const extendedEvents = match?.match_event_extended?.filter((t) => t.team_id === teamId) || [];

    const playersWhoPlayed = new Set();

    // 1. Count games played
    for (const event of events) {
      if (event.kind === "lineup" || event.kind === "substitute-in") {
        const id = event.person?.id;
        if (!id) continue;
        playersWhoPlayed.add(id);
        if (!playerStats[id]) {
          playerStats[id] = {
            person: event.person,
            games: 0,
            goals: 0,
            assists: 0,
            shots: 0
          };
        }
      }
    }

    // Update games after collecting all unique players
    for (const id of playersWhoPlayed) {
      playerStats[id].games += 1;
    }

    // 2. Count goals and assists
    for (const event of events) {
      if (event.action === "goal") {
        const scorerId = event.person?.id;
        if (scorerId) {
          if (!playerStats[scorerId]) {
            playerStats[scorerId] = {
              person: event.person,
              games: 0,
              goals: 0,
              assists: 0,
              shots: 0
            };
          }
          playerStats[scorerId].goals += 1;
        }

        const assistId = event.additional_person?.id;
        if (assistId) {
          if (!playerStats[assistId]) {
            playerStats[assistId] = {
              person: event.additional_person,
              games: 0,
              goals: 0,
              assists: 0,
              shots: 0
            };
          }
          playerStats[assistId].assists += 1;
        }
      }
    }

    // 3. Count shots on target
    for (const event of extendedEvents) {
      if (event.action === "shot_inside_box") {
        const shooterId = event.person?.id;
        if (!shooterId) continue;
        if (!playerStats[shooterId]) {
          playerStats[shooterId] = {
            person: event.person,
            games: 0,
            goals: 0,
            assists: 0,
            shots: 0
          };
        }
        playerStats[shooterId].shots += 1;
      }
    }
  }

  // Convert object to array
  const statsArray = Object.values(playerStats);

  // Sort by custom performance score (or just by goals for simplicity)
  statsArray.sort((a, b) => {
    const scoreA = a.goals * 3 + a.assists * 2 + a.shots + a.games * 0.5;
    const scoreB = b.goals * 3 + b.assists * 2 + b.shots + b.games * 0.5;
    return scoreB - scoreA;
  });

  // Return top player or entire leaderboard
  // return random between 0 to four
  const randomElement = statsArray[Math.floor(Math.random() * 5)];

  return {
    topPlayer: randomElement,
    leaderboard: statsArray
  };
}

function getTopPerformersSeason(matches, teamIds) {
  const playerStats = {};

  for (const match of matches) {
    const events = match?.match_event?.filter((t) => teamIds.includes(t.team_id)) || [];
    const extendedEvents = match?.match_event_extended?.filter((t) => teamIds.includes(t.team_id)) || [];

    const playersWhoPlayed = new Set();

    // 1. Count games played
    for (const event of events) {
      if (event.kind === "lineup" || event.kind === "substitute-in") {
        const id = event.person?.id;
        if (!id) continue;
        playersWhoPlayed.add(id);
        if (!playerStats[id]) {
          playerStats[id] = {
            person: event.person,
            games: 0,
            goals: 0,
            assists: 0,
            shots: 0,
            team_id: event.team_id
          };
        }
      }
    }

    // Update games after collecting all unique players
    for (const id of playersWhoPlayed) {
      playerStats[id].games += 1;
    }

    // 2. Count goals and assists
    for (const event of events) {
      if (event.action === "goal") {
        const scorerId = event.person?.id;
        if (scorerId) {
          if (!playerStats[scorerId]) {
            playerStats[scorerId] = {
              person: event.person,
              games: 0,
              goals: 0,
              assists: 0,
              shots: 0,
              team_id: event.team_id
            };
          }
          playerStats[scorerId].goals += 1;
        }

        const assistId = event.additional_person?.id;
        if (assistId) {
          if (!playerStats[assistId]) {
            playerStats[assistId] = {
              person: event.additional_person,
              games: 0,
              goals: 0,
              assists: 0,
              shots: 0,
              team_id: event.team_id
            };
          }
          playerStats[assistId].assists += 1;
        }
      }
    }
  }

  // Convert object to array
  const statsArray = Object.values(playerStats);

  // Sort by custom performance score
  statsArray.sort((a, b) => {
    const scoreA = a.goals + a.assists;
    const scoreB = b.goals + b.assists;
    return scoreB - scoreA;
  });

  // Get top 5 players
  const topPlayers = statsArray.slice(0, 5);

  return {
    topPlayers,
    leaderboard: statsArray
  };
}

function getTeamSeason(matches, teamId) {
  const teamStat = {}
  let goals = 0;
  let shots = 0;
  let shotsOnGoal = 0;
  let duelsWonPercentage = 0;
  for (const match of matches) {
    const team = match?.home?.id === teamId ? match?.home : match?.away;
    const teamStat = team?.team_stats?.[0];
    goals += parseInt(teamStat?.score);
    shots += parseInt(teamStat?.shots);
    shotsOnGoal += parseInt(teamStat?.shots_on_goal);
    duelsWonPercentage += parseFloat(teamStat?.duels_won_percentage);
    // shots_on_goal
  }
  duelsWonPercentage = duelsWonPercentage / matches?.length;
  return {
    goals,
    shots,
    shotsOnGoal,
    duelsWonPercentage
  }
}

async function runWithConcurrencyLimit(tasks, limit) {
  const results = [];
  let index = 0;

  async function worker() {
    while (index < tasks.length) {
      const currentIndex = index++;
      try {
        const result = await tasks[currentIndex]();
        results[currentIndex] = { status: 'fulfilled', value: result };
      } catch (error) {
        results[currentIndex] = { status: 'rejected', reason: error };
      }
    }
  }

  // Start N workers in parallel
  const workers = Array(limit).fill(null).map(worker);
  await Promise.all(workers);

  return results;
}


function getTeamRankingsByMatchday(matches, startingMatchday, endingMatchday) {
  const pointsTable = {}; // teamId -> points
  const goalStats = {};   // teamId -> { gf, ga }
  const rankingsArray = [];

  // Sort matches by matchday to process in order
  const sortedMatches = [...matches].sort((a, b) => a.matchday - b.matchday);
  for (let md = 1; md <= endingMatchday; md++) {
    // Filter matches for this matchday
    const dayMatches = sortedMatches.filter(m => parseInt(m.matchday) === md);
    // console.log('dayMatches: ', dayMatches)
    for (const match of dayMatches) {
      const [teamA, teamB] = match.match_result;
      const goalsA = Number(teamA.match_result);
      const goalsB = Number(teamB.match_result);

      const teamIdA = teamA.team_id;
      const teamIdB = teamB.team_id;

      // Init if not exists
      if (!pointsTable[teamIdA]) {
        pointsTable[teamIdA] = 0;
        goalStats[teamIdA] = { gf: 0, ga: 0 };
      }
      if (!pointsTable[teamIdB]) {
        pointsTable[teamIdB] = 0;
        goalStats[teamIdB] = { gf: 0, ga: 0 };
      }

      // Update goals
      goalStats[teamIdA].gf += goalsA;
      goalStats[teamIdA].ga += goalsB;
      goalStats[teamIdB].gf += goalsB;
      goalStats[teamIdB].ga += goalsA;

      // Assign points
      if (goalsA > goalsB) {
        pointsTable[teamIdA] += 3;
      } else if (goalsA < goalsB) {
        pointsTable[teamIdB] += 3;
      } else {
        pointsTable[teamIdA] += 1;
        pointsTable[teamIdB] += 1;
      }
    }

    // Save rankings if inside requested range
    if (md >= startingMatchday && md <= endingMatchday) {
      const standings = Object.keys(pointsTable)
        .map(teamId => ({
          teamId,
          points: pointsTable[teamId],
          gd: goalStats[teamId].gf - goalStats[teamId].ga,
          gf: goalStats[teamId].gf
        }))
        .sort((a, b) => {
          if (b.points !== a.points) return b.points - a.points;
          if (b.gd !== a.gd) return b.gd - a.gd;
          return b.gf - a.gf;
        });

      const rankingSet = {};
      standings.forEach((team, index) => {
        rankingSet[team.teamId] = index + 1;
      });

      rankingsArray.push(rankingSet);
    }
  }

  return rankingsArray;
}

function getTeamRankings(matches) {
  const table = {};

  for (const match of matches) {
    // Get all final score entries for this match
    const finalResults = match.match_result.filter(r => r.match_result_at === "0");
    if (match.finished === 'no') continue;
    if (finalResults.length !== 2) continue; // Skip malformed matches

    const [teamA, teamB] = finalResults.map(r => ({
      id: r.team_id,
      goals: parseInt(r.match_result, 10)
    }));

    // Initialize teams if not already in table
    for (const team of [teamA, teamB]) {
      if (!table[team.id]) {
        const teamInfo =
          match.home.id === team.id ? match.home : match.away.id === team.id ? match.away : null;
        table[team.id] = {
          id: team.id,
          team: teamInfo?.name || `Team ${team.id}`,
          GP: 0,
          W: 0,
          D: 0,
          L: 0,
          Pts: 0,
          GF: 0,
          GA: 0,
          GD: 0
        };
      }
    }

    // Update games played
    table[teamA.id].GP++;
    table[teamB.id].GP++;

    // Update goals
    table[teamA.id].GF += teamA.goals;
    table[teamA.id].GA += teamB.goals;
    table[teamB.id].GF += teamB.goals;
    table[teamB.id].GA += teamA.goals;

    // Update goal differences
    table[teamA.id].GD = table[teamA.id].GF - table[teamA.id].GA;
    table[teamB.id].GD = table[teamB.id].GF - table[teamB.id].GA;

    // Wins / Draws / Losses / Points
    if (teamA.goals > teamB.goals) {
      table[teamA.id].W++;
      table[teamA.id].Pts += 3;
      table[teamB.id].L++;
    } else if (teamA.goals < teamB.goals) {
      table[teamB.id].W++;
      table[teamB.id].Pts += 3;
      table[teamA.id].L++;
    } else {
      table[teamA.id].D++;
      table[teamB.id].D++;
      table[teamA.id].Pts++;
      table[teamB.id].Pts++;
    }
  }

  // Return sorted standings
  return Object.values(table).sort((a, b) => {
    if (b.Pts !== a.Pts) return b.Pts - a.Pts;
    if (b.GD !== a.GD) return b.GD - a.GD;
    return b.GF - a.GF;
  });
}

module.exports = {
  getClosestMatchMinutesBefore,
  getClosestMatchFromNow,
  generateUrlHash,
  findMostRecentDateByPath,
  filterEventsBetweenDates,
  eventType,
  getSinceDate,
  getUniqueTeams,
  getMatchesByTeam,
  detectFormation,
  getTopPlayerSeason,
  runWithConcurrencyLimit,
  getTeamSeason,
  getTopPerformersSeason,
  getTeamRankingsByMatchday,
  getTeamRankings
};
