import calculateTeamStatsAway from '../../utils/functionAway';
import ModelMatches from '../models/matches';
import calculateTeamStats, { ordenarTabela } from '../../utils/function';
import ModelTeams from '../models/teams';

async function leaderboardHome() {
  const matches = await ModelMatches.findAll({ where: { inProgress: false } });
  const times = await ModelTeams.findAll();
  const response = [];
  for (let i = 0; i < 16; i += 1) {
    const result = calculateTeamStats(matches, times[i]);
    response.push(result);
  }
  response.sort(ordenarTabela);

  return response;
}

async function leaderboardAway() {
  const matches = await ModelMatches.findAll({ where: { inProgress: false } });
  const times = await ModelTeams.findAll();
  const response = [];
  for (let i = 0; i < 16; i += 1) {
    const result = calculateTeamStatsAway(matches, times[i]);
    response.push(result);
  }
  response.sort(ordenarTabela);

  return response;
}

export { leaderboardHome, leaderboardAway };
