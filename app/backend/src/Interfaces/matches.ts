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
