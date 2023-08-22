import matches from '../Interfaces/matches';
import { Iteams } from '../Interfaces/teams';
import { LeaderBoard } from '../Interfaces/leaderboard';
import { calculateEfficiency, calcGoalsBal, calculateTotalPoints } from './function';

function filterFinishedMatchesTotal(allmatches: matches[], team:Iteams) {
  const valor = allmatches.filter((match: matches) =>
    (match.awayTeamId === team.id));

  const valor2 = allmatches.filter((match: matches) =>
    (match.homeTeamId === team.id));

  return valor.length + valor2.length;
}
// Função para calcular o total de vitórias de um time
function calculateTotalVictoriesTotal(teamMatches:matches[], team:Iteams) {
  const valordeJogos = teamMatches.filter((match: matches) =>
    (match.awayTeamId === team.id));
  const resultadoAway = valordeJogos.filter((value) => value.awayTeamGoals > value.homeTeamGoals);
  console.log(valordeJogos);

  const valordeJogosHome = teamMatches.filter((match: matches) =>
    (match.homeTeamId === team.id));
  const resultadoHome = valordeJogosHome.filter((value) => value.homeTeamGoals
  > value.awayTeamGoals);

  return resultadoHome.length + resultadoAway.length;
}
// if( resultadohome + resultaAway )

// Função para calcular o total de empates de um time
function calculateTotalDrawsTotal(empatesMatches: matches[], team:Iteams) {
  const empatesAway = empatesMatches.filter((teams) => teams.awayTeamId === team.id);
  const resultEmpatesAway = empatesAway.filter((match) => match.awayTeamGoals
 === match.homeTeamGoals);
  const empatesHome = empatesMatches.filter((teams) => teams.homeTeamId === team.id);
  const resultEmpatesHome = empatesHome.filter((match) => match.homeTeamGoals
=== match.awayTeamGoals);

  return resultEmpatesAway.length + resultEmpatesHome.length;
}

// Função para calcular o total de pontos

function goalsFavorTotal(teamMatches:matches[], team:Iteams):number {
  const goalsFavo = teamMatches.reduce((total, match) =>
    (match.awayTeamId === team.id ? total + match.awayTeamGoals : total), 0);

  const goalsFavoTotal = teamMatches.reduce((total, match) =>
    (match.homeTeamId === team.id ? total + match.homeTeamGoals : total), 0);

  return goalsFavo + goalsFavoTotal;
}

function goalsOwnTotal(teamMatches:matches[], team:Iteams):number {
  const goals = teamMatches.reduce((total, match) =>
    (match.awayTeamId === team.id ? total + match.homeTeamGoals : total), 0);

  const goalsHome = teamMatches.reduce((total, match) =>
    (match.homeTeamId === team.id ? total + match.awayTeamGoals : total), 0);

  return goals + goalsHome;
}

// Função para calcular as estatísticas de um time
function calculateTeamStat(allmatches:matches[], team: Iteams):LeaderBoard {
  const test = filterFinishedMatchesTotal(allmatches, team);
  const totalGames = test;
  const totalDraws = calculateTotalDrawsTotal(allmatches, team);
  const valorVitory = calculateTotalVictoriesTotal(allmatches, team);
  const totalPoints = calculateTotalPoints(valorVitory, totalDraws);
  // const efficiency = calculateEfficiency(totalPoints, totalGames);

  return {
    name: team.teamName,
    totalPoints,
    totalGames,
    totalVictories: valorVitory,
    totalDraws,
    totalLosses: totalGames - (valorVitory + totalDraws),
    goalsFavor: goalsFavorTotal(allmatches, team),
    goalsOwn: goalsOwnTotal(allmatches, team),
    goalsBalance: calcGoalsBal(goalsFavorTotal(allmatches, team), goalsOwnTotal(allmatches, team)),
    efficiency: calculateEfficiency(totalPoints, totalGames),

  };
}

export default calculateTeamStat;
// ...
