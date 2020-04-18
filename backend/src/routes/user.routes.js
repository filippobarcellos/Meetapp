import { Router } from 'express';

import UserController from '../controllers/UserController';

import authMiddleware from '../middlewares/auth';

const routes = Router();

routes.get('/', UserController.getUsers);
routes.post('/', UserController.createUser);
routes.put('/', authMiddleware, UserController.updateUser);

export default routes;
