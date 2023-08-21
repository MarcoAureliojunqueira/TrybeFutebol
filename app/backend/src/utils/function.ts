import matches from '../Interfaces/matches';
import { Iteams } from '../Interfaces/teams';
import { LeaderBoard } from '../Interfaces/leaderboard';

// Função para filtrar partidas finalizadas de um time
function filterFinishedMatches(allmatches: matches[], team:Iteams) {
  return allmatches.filter((match: matches) =>
    (match.homeTeamId === team.id));
}
function ordenarTabela(a: LeaderBoard, b: LeaderBoard) {
  if (a.totalPoints > b.totalPoints) { return -1; }
  if (a.totalPoints < b.totalPoints) { return 1; }
  if (a.totalVictories > b.totalVictories) { return -1; }
  if (a.totalVictories < b.totalVictories) { return 1; }
  if (a.goalsBalance > b.goalsBalance) { return -1; }
  if (a.goalsBalance < b.goalsBalance) { return 1; }
  if (a.goalsFavor > b.goalsFavor) { return -1; }
  if (a.goalsFavor < b.goalsFavor) { return 1; }
  return 0;
}

// Função para calcular o total de vitórias de um time
function calculateTotalVictories(teamMatches:matches[], team:Iteams) {
  const valordeJogos = teamMatches.filter((match: matches) =>
    (match.homeTeamId === team.id));
  const resultado = valordeJogos.filter((value) => value.homeTeamGoals > value.awayTeamGoals);
  return resultado.length;
}

// Função para calcular o total de empates de um time
function calculateTotalDraws(empatesMatches: matches[], team:Iteams) {
  const temas = empatesMatches.filter((teams) => teams.homeTeamId === team.id);
  return temas.filter((match) => match.homeTeamGoals === match.awayTeamGoals).length;
}

// Função para calcular o total de pontos
function calculateTotalPoints(victories: number, draws:number) {
  return (victories * 3) + draws;
}

// Função para calcular o saldo de gols
function calculateGoalsBalance(goalsFavo:number, goalsOw:number):number {
  return goalsFavo - goalsOw;
}

// Função para calcular a eficiência
function calculateEfficiency(totalPoints:number, totalGames:number) {
  return parseFloat(((totalPoints / (totalGames * 3)) * 100).toFixed(2));
}
function goalsFavor(teamMatches:matches[], team:Iteams):number {
  const goalsFavo = teamMatches.reduce((total, match) =>
    (match.homeTeamId === team.id ? total + match.homeTeamGoals : total), 0);
  return goalsFavo;
}

function goalsOwn(teamMatches:matches[], team:Iteams):number {
  const goals = teamMatches.reduce((total, match) =>
    (match.homeTeamId === team.id ? total + match.awayTeamGoals : total), 0);
  return goals;
}

// Função para calcular as estatísticas de um time
function calculateTeamStats(allmatches:matches[], team: Iteams):LeaderBoard {
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

export default calculateTeamStats;
export {
  ordenarTabela,
};
// ...
