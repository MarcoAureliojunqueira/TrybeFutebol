import Iteams from '../../Interfaces/teams';
import ModelTeams from '../models/teams';

const teamsGet = async ():Promise<Iteams[]> => {
  const teamsget = await ModelTeams.findAll();
  // console.log('------->', teamsget);
  return teamsget;
};
const findById = async (id: Iteams['id']): Promise<Iteams | null> => {
  const getId = await ModelTeams.findByPk(id);

  console.log('------->', getId);
  return getId;
};

export default { teamsGet, findById };
