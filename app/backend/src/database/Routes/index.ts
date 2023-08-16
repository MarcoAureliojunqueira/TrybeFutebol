// src/routes/index.ts

import { Router } from 'express';
import teamsRouter from './Routas';

const router = Router();
router.use('/teams', teamsRouter);

export default router;
