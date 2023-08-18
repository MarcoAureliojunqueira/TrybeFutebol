import { Iteams, IteamsModel } from '../../Interfaces/teams';
import ModelTeams from '../models/teamsCaminhos/teams';

export default class TeamService {
  constructor(
    private teamModel: IteamsModel = new ModelTeams(),
  ) { }

  public async getAllTeam(): Promise<Iteams[]> {
    const getAll = await this.teamModel.findAll();
    return getAll;
  }

  public async getBookById(id: number): Promise<Iteams | null> {
    const result = await this.teamModel.findById(id);

    return result;
  }
}
