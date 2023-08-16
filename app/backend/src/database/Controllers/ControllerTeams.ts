import { Request, Response } from 'express';
import services from '../Services/teams';

const GetAll = async (_req: Request, res: Response): Promise<Response> => {
  const teams = await services.teamsGet();

  return res.status(200).json(teams);
};

const getById = async (req: Request, res: Response) => {
  const { id } = req.params;

  const serviceResponse = await services.findById(Number(id));

  res.status(200).json(serviceResponse);
};

export {
  GetAll,
  getById,
};
