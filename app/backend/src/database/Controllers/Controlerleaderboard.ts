import { Request, Response } from 'express';
import { leaderboardHome, leaderboardAway, leaderboard } from '../Services/leaderboard';

async function timesdeCasa(_req:Request, res:Response) {
  const test = await leaderboardHome();
  return res.status(200).json(test);
}
async function timesdeFora(_req:Request, res:Response) {
  const test = await leaderboardAway();
  return res.status(200).json(test);
}

async function Leaderboard(_req:Request, res:Response) {
  const test = await leaderboard();
  return res.status(200).json(test);
}
export { timesdeCasa, timesdeFora, Leaderboard };
