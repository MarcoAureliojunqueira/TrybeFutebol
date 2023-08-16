// src/routes/book.routes.ts

import { Router } from 'express';
import { GetAll, getById } from '../Controllers/ControllerTeams';

const router = Router();

router.get('/', GetAll);
router.get('/:id', getById);

export default router;
