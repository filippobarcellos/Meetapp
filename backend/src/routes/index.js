import { Router } from 'express';

import userRoutes from './user.routes';
import meetupRoutes from './meetup.routes';
import sessionRoutes from './session.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/meetups', meetupRoutes);

export default routes;
