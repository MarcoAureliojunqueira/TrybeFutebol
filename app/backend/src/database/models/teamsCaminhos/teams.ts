// src/models/BookModel.ts

import { Iteams, IteamsModel } from '../../../Interfaces/teams';
import ModelTeams from '../teams';

export default class teamsModel implements IteamsModel {
  private model = ModelTeams;

  async findAll(): Promise<Iteams[]> {
    const result = await this.model.findAll();
    return result;
  }

  async findById(id: Iteams['id']): Promise<Iteams | null> {
    const result = await this.model.findByPk(id);
    return result;
  }
}
