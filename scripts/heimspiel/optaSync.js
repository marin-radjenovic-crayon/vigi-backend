const EventsHelper = require('../../src/controllers/events/helpers');
const { optaData, heimSpielData } = EventsHelper;
const fs = require("fs");

const syncOpta = async () => {

    const competitions = await heimSpielData.getBildCompetition();

    const competition = competitions.filter((c) => c.competitionId !== "0")?.[0];
    const { current_season_id, current_round_id, optaCompetitionId, optaTournamentCalendarId } = competition;
    const optaCompetitions = await optaData.getCompetitions();
    const optaCompetition = optaCompetitions.find((c) => c.competitionId === optaTournamentCalendarId && c.competitionIdReal === optaCompetitionId);
    const optaTeams = await optaData.getTeams({ cid: optaTournamentCalendarId });
    const { teams, matches } = await heimSpielData.getBildTeams(current_season_id, current_round_id, tid);

    // build team mapping
    const teamMapping = {};

    teams.forEach(obj1 => {
        const norm1 = teamNormalize(obj1.shortname);

        const match = optaTeams.find(obj2 => {
            const norm2 = teamNormalize(obj2.shortcut);
            return norm1.includes(norm2) || norm2.includes(norm1);
        });

        if (match) {
            teamMapping[obj1.id] = match.id;
        }
    });

    fs.writeFileSync(
        "teamMapping.js",
        `const teamMapping = ${JSON.stringify(teamMapping, null, 2)};\n\nmodule.exports = teamMapping;`
    );

    // --- build event mapping for ALL teams ---
    let eventMapping = {};

    for (const bildTeamId of Object.keys(teamMapping)) {
        const optaTid = teamMapping[bildTeamId];

        // fetch matches for this Opta team
        const optaMatches = await optaData.getMatches({
            cid: optaTournamentCalendarId,
            tid: optaTid
        });

        // build mapping for this team
        const mapping = buildEventMappings(optaMatches, matches, teamMapping);

        // merge into global eventMapping
        eventMapping = { ...eventMapping, ...mapping };
    }

    // write to file
    fs.writeFileSync(
        "eventMapping.js",
        `const eventMapping = ${JSON.stringify(eventMapping, null, 2)};\n\nmodule.exports = eventMapping;`
    );
}

syncOpta().then(() => process.exit(0));
