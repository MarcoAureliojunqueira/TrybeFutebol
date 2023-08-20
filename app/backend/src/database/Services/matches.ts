import matches from '../../Interfaces/matches';
import ModelMatches from '../models/matches';
import ModelTeams from '../models/teams';

async function getMatches():Promise<matches[]> {
  const get = await ModelMatches.findAll({
    include: [{
      model: ModelTeams,
      as: 'homeTeam',
      attributes: ['teamName'] },
    {
      model: ModelTeams,
      as: 'awayTeam',
      attributes: ['teamName'] },
    ] });

  return get as unknown as matches[];
}
// async finalizarPartida(id: number): Promise<void> {
//  await modelMatches.update({ //inProgress: false }, { where: { /id } });
// }0h26
// async finalizarPartida(req: //Request, res: Response, next: NextFunction): Promise<Response | void> {
//  try {
//    await ServiceMathces.finalizarPartida(Number(req.params.id));
//   return res.status(200).json({ message: 'Partida Finalizada!!' });
//   } catch (err) {
//    next(err);
//  }

export default getMatches;
