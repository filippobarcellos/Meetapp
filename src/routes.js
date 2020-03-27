import { Router } from 'express';

import UserController from './controllers/UserController';
import SessionController from './controllers/SessionController';
import MeetupController from './controllers/MeetupController';

import authMiddleware from './middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.put('/users', authMiddleware, UserController.update);

routes.post('/sessions', SessionController.store);

routes.post('/meetups', authMiddleware, MeetupController.store);
routes.get('/meetups', authMiddleware, MeetupController.index);

export default routes;
