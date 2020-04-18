import { Router } from 'express';

import DashboardController from '../controllers/DashboardController';

import authMiddleware from '../middlewares/auth';

const routes = Router();

routes.get('/dashboard', authMiddleware, DashboardController.getMeetupsByUser);

export default routes;
