export default interface matches {
  id: number,
  homeTeamId: number,
  homeTeamGoals: number,
  awayTeamId:number,
  awayTeamGoals:number,
  inProgress: boolean,
  homeMatchesId?:{ teamName:string }
  awayMatchesId?:{ teamName:string }
}

export type resultadoDosJogos = {
  homeTeamGoals: number,
  awayTeamGoals: number
};

export type criarJogos = {
  id?: number,
  homeTeamId: number,
  homeTeamGoals:number,
  awayTeamId: number,
  awayTeamGoals: number,
  inProgress?: boolean,
};

export type erro = {
  status: number,
  message:string
};

export type leaderboardHome = {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
};
