import { Router } from 'express';

import DashboardController from '../controllers/DashboardController';

import authMiddleware from '../middlewares/auth';

const routes = Router();

routes.get('/', authMiddleware, DashboardController.index);

export default routes;
