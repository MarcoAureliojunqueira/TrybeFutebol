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
