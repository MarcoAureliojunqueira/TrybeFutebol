import { Request, Response } from 'express';
import TeamService from '../Services/teams';

export default class TeamController {
  constructor(
    private teamService = new TeamService(),
  ) { }

  public async getAllteams(_req: Request, res: Response) {
    const serviceResponse = await this.teamService.getAllTeam();
    res.status(200).json(serviceResponse);
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;

    const serviceResponse = await this.teamService.getBookById(Number(id));
    res.status(200).json(serviceResponse);
  }
}
