import { Request, Response } from 'express';
import leaderboardInicio from '../Services/leaderboard';

async function timesdeCasa(_req:Request, res:Response) {
  const test = await leaderboardInicio();
  return res.status(200).json(test);
}

export default timesdeCasa;
