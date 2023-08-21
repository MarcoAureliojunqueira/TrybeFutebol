import ModelMatches from '../models/matches';
import calculateTeamStats, { ordenarTabela } from '../../utils/function';
import ModelTeams from '../models/teams';

async function leaderboardInicio() {
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

export default leaderboardInicio;
