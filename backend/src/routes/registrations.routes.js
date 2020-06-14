import { Router } from 'express';

import authMiddleware from '../middlewares/auth';

import RegistrationController from '../controllers/RegistrationController';

const routes = Router();

routes.post('/', authMiddleware, RegistrationController.store);
routes.get('/', authMiddleware, RegistrationController.index);

export default routes;
