import { Request, Response } from 'express';
import getMatches from '../Services/matches';

async function getAllMatches(req:Request, res:Response):Promise<Response | void> {
  const { inProgress } = req.query;
  const get = await getMatches();
  if (inProgress === 'true') {
    const inProgressMatches = get.filter((match) => match.inProgress);
    res.json(inProgressMatches);
  } else if (inProgress === 'false') {
    const finishedMatches = get.filter((match) => !match.inProgress);
    res.json(finishedMatches);
  } else {
    return res.status(200).json(get);
  }
  console.log(get);
}

export default getAllMatches;
