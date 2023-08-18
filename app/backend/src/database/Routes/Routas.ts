// src/routes/book.routes.ts
import { Request, Router, Response } from 'express';
import validSenhaeEmail from '../../Middlewares/validacaoEmailePassword';
import TeamController from '../Controllers/ControllerTeams';
import login from '../Controllers/ControllerLogin';

const team = new TeamController();

const router = Router();
router.get('/teams/:id', (req: Request, res: Response) => team.getById(req, res));
router.get('/teams', (req: Request, res: Response) => team.getAllteams(req, res));

router.post(
  '/login',
  validSenhaeEmail,
  (req: Request, res: Response) => login(req, res),
);

export default router;
