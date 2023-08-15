import { Request, Response } from 'express';
import services from '../Services/teams';

const ControlerGet = async (_req: Request, res: Response): Promise<Response> => {
  const teams = await services.teamsGet();

  return res.status(200).json(teams);
};

export default ControlerGet;
