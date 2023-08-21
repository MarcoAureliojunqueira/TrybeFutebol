import matches from './matches';

export type LeaderBoard = {
  name?: string,
  totalPoints: number,
  totalGames:number,
  totalVictories:number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number
};

export type timeDaCasa = {
  id:number,
  timeName: string,
  homeMatchesId:matches[],
};

export type timeDaFora = {
  id:number,
  timeName: string,
  awayMatchesId:matches[],
};
