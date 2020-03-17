import { Router } from 'express';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';

import authMiddleware from './middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);
routes.post('/sessions', SessionController.store);

export default routes;
