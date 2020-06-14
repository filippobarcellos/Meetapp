import { Router } from 'express';

import userRoutes from './user.routes';
import sessionRoutes from './session.routes';
import meetupRoutes from './meetup.routes';
import dashboardRoutes from './dashboard.routes';
import registrationRoutes from './registrations.routes';

const routes = Router();

routes.use('/users', userRoutes);
routes.use('/sessions', sessionRoutes);
routes.use('/meetups', meetupRoutes);
routes.use('/dashboard', dashboardRoutes);
routes.use('/registrations', registrationRoutes);

export default routes;
