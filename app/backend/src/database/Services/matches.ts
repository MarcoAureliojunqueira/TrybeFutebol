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
async function finalizarPartida(id: number): Promise<number[]> {
  const resultado = await ModelMatches.update({ inProgress: false }, { where: { id } });
  console.log(resultado);

  return resultado;
}

export { getMatches, finalizarPartida };
