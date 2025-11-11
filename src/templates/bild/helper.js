const eventMapping = require("@/eventMapping");
const teamMapping = require("@/teamMapping");
const { germanBundelisgaId } = require('./id');
const fs = require("fs");

function buildPlayerMappings(heimLineup, optaLineup, teamMapping) {
    const playerMapping = {};
    const reversePlayerMapping = {};

    // Loop through heimLineup
    heimLineup?.forEach(heimPlayer => {
        const heimTeamId = heimPlayer.team_id;
        const optaTeamId = teamMapping[heimTeamId];
        if (!optaTeamId) return;

        // Find corresponding optaTeam lineup
        const optaTeam = optaLineup.find(o => o.contestantId === optaTeamId);
        if (!optaTeam) return;

        // Try to match player by shirt number (most reliable)
        const optaMatch = optaTeam.player.find(
            p => String(p.shirtNumber) === String(heimPlayer.shirtnumber)
        );

        // Fallback: try name match if shirtnumber not unique or missing
        const normalizedName = heimPlayer.person.surname?.toLowerCase().replace(/[^a-z]/g, '');
        const optaByName = optaTeam.player.find(p =>
            p.lastName?.toLowerCase().replace(/[^a-z]/g, '') === normalizedName
        );

        const matchedOpta = optaMatch || optaByName;
        if (matchedOpta) {
            playerMapping[heimPlayer.person.id] = {
                optaId: matchedOpta.playerId,
                heimPlayer: {
                    ...heimPlayer,
                },
                optaPlayer: {
                    ...matchedOpta,
                },
            };
            reversePlayerMapping[matchedOpta.playerId] = heimPlayer.person.id;
        }
    });

    return { playerMapping, reversePlayerMapping };
}


async function getAllPlayerMappings(allMatches, FnFeedsClass, FnBildFeedsClass) {
    const allMappings = [];
    let merged = {};
    for (const matchOrg of allMatches) {
        try {
            // 1️⃣ Extract Heim lineup (heimspiel)
            const FeedBildInstance = new FnBildFeedsClass({
                target: {
                    eventId: matchOrg.id,
                    league: 12,
                    teamId: 209
                },
                client: 'bild'
            });
            const match = await FeedBildInstance.getMatchById(matchOrg.id);
            const heimLineup = match?.match_event?.filter(
                e => e.kind === 'lineup' || e.kind === 'substitute-in'
            );

            if (!heimLineup || heimLineup.length === 0) {
                console.warn(`No Heim lineup for match ${match.id}`);
                continue;
            }

            // 2️⃣ Build Opta event
            const optaEvent = {
                eventId: eventMapping[match.id],
                selectedTeamId: teamMapping[209], // ⚠️ static team mapping
                competitionId: germanBundelisgaId
            };

            // 3️⃣ Get Opta live lineup from FeedInstance
            const FeedInstance = new FnFeedsClass({
                target: {
                    eventId: optaEvent.eventId,
                    league: optaEvent.competitionId,
                    teamId: optaEvent.selectedTeamId
                }
            });

            const liveMatchStats = await FeedInstance
                .setLiveMatchStats()
                .catch(err => {
                    console.error(`Opta feed error for match ${match.id}:`, err);
                    return null;
                });

            const optaLineup = liveMatchStats?.liveData?.lineUp;
            if (!optaLineup) {
                console.warn(`No Opta lineup for match ${match.id}`);
                continue;
            }

            // 4️⃣ Map players
            const { playerMapping, reversePlayerMapping } = buildPlayerMappings(
                heimLineup,
                optaLineup,
                teamMapping
            );

            allMappings.push({
                matchId: match.id,
                playerMapping,
                reversePlayerMapping
            });
            merged = allMappings.reduce(
                (acc, curr) => {
                    Object.assign(acc.playerMapping, curr.playerMapping);
                    Object.assign(acc.reversePlayerMapping, curr.reversePlayerMapping);
                    return acc;
                },
                { playerMapping: {}, reversePlayerMapping: {} }
            );
        } catch (err) {
            console.error(`Error processing match ${matchOrg.id}:`, err);
        }
    }
    fs.writeFileSync(
        "playerMapping.js",
        `const playerMapping = ${JSON.stringify(merged, null, 2)};\n\nmodule.exports = playerMapping;`
    );
    return merged;
}


module.exports = {
    buildPlayerMappings,
    getAllPlayerMappings
}