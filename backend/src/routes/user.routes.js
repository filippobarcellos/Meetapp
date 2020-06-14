import { Router } from 'express';

import UserController from '../controllers/UserController';

import authMiddleware from '../middlewares/auth';

const routes = Router();

routes.post('/', UserController.store);
routes.put('/', authMiddleware, UserController.update);

export default routes;
