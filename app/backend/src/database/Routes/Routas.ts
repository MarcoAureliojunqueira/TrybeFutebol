// src/routes/book.routes.ts

import { Router } from 'express';
import teamsGet from '../Controllers/ControllerTeams';

const router = Router();

router.get('/', teamsGet);

export default router;
