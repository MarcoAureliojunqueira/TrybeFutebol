import { Request, Response } from 'express';

import { getMatches, finalizarPartida, getById, ServiceNovosjogos } from '../Services/matches';

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
}
async function finalizarPartidas(
  req: Request,
  res: Response,
): Promise<Response> {
  const { id } = req.params;

  await finalizarPartida(Number(id));
  return res.status(200).json({ message: 'Partida Finalizada!!' });
}
async function getIdMatches(
  req: Request,
  res: Response,
): Promise<Response | void> {
  await getById(Number(req.params.id), req.body);
  return res.status(200).json({ message: 'atualizado' });
}
async function inserirJogos(req:Request, res:Response):Promise<Response | void > {
  const Novojogo = await ServiceNovosjogos(req.body);

  if (Novojogo === 'timeIgual') {
    return res.status(422).json({ message:
      'It is not possible to create a match with two equal teams' });
  }
  if (Novojogo === 'faltouTime') {
    return res.status(404).json({ message: 'There is no team with such id!' });
  }
  return res.status(201).json(Novojogo);
}
export { getAllMatches, finalizarPartidas, getIdMatches, inserirJogos };
