// src/routes/book.routes.ts
import { Request, Router, Response } from 'express';
import validSenhaeEmail from '../../Middlewares/validacaoEmailePassword';
import TeamController from '../Controllers/ControllerTeams';
import { login, loginGet } from '../Controllers/ControllerLogin';
import { getAllMatches, finalizarPartidas,
  getIdMatches, inserirJogos } from '../Controllers/ControlerMatches';
import { timesdeCasa, timesdeFora } from '../Controllers/Controlerleaderboard';
import token from '../../Middlewares/token';

const team = new TeamController();

const router = Router();
router.get('/teams/:id', (req: Request, res: Response) => team.getById(req, res));
router.get('/teams', (req: Request, res: Response) => team.getAllteams(req, res));

router.post(
  '/login',
  validSenhaeEmail,
  (req: Request, res: Response) => login(req, res),
);
router.get(
  '/login/role',
  token.verifyToken,
  (req: Request, res: Response) => loginGet(req, res),
);
router.get('/matches', (req: Request, res: Response) => getAllMatches(req, res));

router.patch(
  '/matches/:id',
  token.verifyToken,
  (req: Request, res: Response) => getIdMatches(req, res),
);

router.patch(
  '/matches/:id/finish',
  token.verifyToken,

  (req: Request, res: Response) => finalizarPartidas(req, res),
);
router.post(
  '/matches',
  token.verifyToken,
  (
    req: Request,
    res: Response,
  ) => inserirJogos(req, res),
);

router.get(
  '/leaderboard/home',
  (
    req: Request,
    res: Response,
  ) => timesdeCasa(req, res),
);
router.get(
  '/leaderboard/away',
  (
    req: Request,
    res: Response,
  ) => timesdeFora(req, res),
);

export default router;
