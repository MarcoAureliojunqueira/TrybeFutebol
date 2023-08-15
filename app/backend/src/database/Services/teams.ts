import Iteams from '../../Interfaces/teams';
import ModelTeams from '../models/teams';

const teamsGet = async ():Promise<Iteams[]> => {
  const teamsget = await ModelTeams.findAll();
  // console.log('------->', teamsget);
  return teamsget;
};

export default { teamsGet };
