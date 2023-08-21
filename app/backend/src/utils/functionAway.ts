import matches from '../Interfaces/matches';
import { Iteams } from '../Interfaces/teams';
import { LeaderBoard } from '../Interfaces/leaderboard';
import { calculateEfficiency, calculateGoalsBalance, calculateTotalPoints } from './function';

// Função para filtrar partidas finalizadas de um time
function filterFinishedMatches(allmatches: matches[], team:Iteams) {
  return allmatches.filter((match: matches) =>
    (match.awayTeamId === team.id));
}

// Função para calcular o total de vitórias de um time
function calculateTotalVictories(teamMatches:matches[], team:Iteams) {
  const valordeJogos = teamMatches.filter((match: matches) =>
    (match.awayTeamId === team.id));
  const resultado = valordeJogos.filter((value) => value.awayTeamGoals > value.homeTeamGoals);
  return resultado.length;
}

// Função para calcular o total de empates de um time
function calculateTotalDraws(empatesMatches: matches[], team:Iteams) {
  const temas = empatesMatches.filter((teams) => teams.awayTeamId === team.id);
  return temas.filter((match) => match.awayTeamGoals === match.homeTeamGoals).length;
}

// Função para calcular o total de pontos

function goalsFavor(teamMatches:matches[], team:Iteams):number {
  const goalsFavo = teamMatches.reduce((total, match) =>
    (match.awayTeamId === team.id ? total + match.awayTeamGoals : total), 0);
  return goalsFavo;
}

function goalsOwn(teamMatches:matches[], team:Iteams):number {
  const goals = teamMatches.reduce((total, match) =>
    (match.awayTeamId === team.id ? total + match.homeTeamGoals : total), 0);
  return goals;
}

// Função para calcular as estatísticas de um time
function calculateTeamStatsAway(allmatches:matches[], team: Iteams):LeaderBoard {
  const teamMatches = filterFinishedMatches(allmatches, team);
  const totalDraws = calculateTotalDraws(allmatches, team);
  const totalGames = teamMatches.length;
  const valorVitory = calculateTotalVictories(teamMatches, team);
  const totalPoints = calculateTotalPoints(valorVitory, totalDraws);
  // const efficiency = calculateEfficiency(totalPoints, totalGames);

  return {
    name: team.teamName,
    totalPoints,
    totalGames,
    totalVictories: valorVitory,
    totalDraws,
    totalLosses: totalGames - (valorVitory + totalDraws),
    goalsFavor: goalsFavor(teamMatches, team),
    goalsOwn: goalsOwn(teamMatches, team),
    goalsBalance: calculateGoalsBalance(goalsFavor(allmatches, team), goalsOwn(allmatches, team)),
    efficiency: calculateEfficiency(totalPoints, totalGames),

  };
}

export default calculateTeamStatsAway;
// ...
