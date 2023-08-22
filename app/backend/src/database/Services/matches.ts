import matches, { criarJogos, resultadoDosJogos } from '../../Interfaces/matches';
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
  console.log(get);

  return get as unknown as matches[];
}
async function finalizarPartida(id: number): Promise<number[]> {
  const resultado = await ModelMatches.update({ inProgress: false }, { where: { id } });

  return resultado;
}
async function getById(id: number, dados: resultadoDosJogos): Promise<void> {
  await ModelMatches.update({ ...dados }, { where: { id } });
}

async function ServiceNovosjogos(dados: criarJogos):Promise<criarJogos | string> {
  if (dados.homeTeamId === dados.awayTeamId) {
    return 'timeIgual';
  }
  const timeDaCasa = await ModelTeams.findOne({ where: { id: dados.homeTeamId } });
  const timeDeFora = await ModelTeams.findOne({ where: { id: dados.awayTeamId } });
  if (!timeDaCasa || !timeDeFora) {
    return 'faltouTime';
  }
  const NovoJogo = await ModelMatches.create({ ...dados, inProgress: true });
  return NovoJogo;
}
export { getMatches, finalizarPartida, getById, ServiceNovosjogos };
