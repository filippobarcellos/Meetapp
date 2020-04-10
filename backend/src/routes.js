import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import authMiddleware from '../src/app/middlewares/auth';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import MeetupController from './app/controllers/MeetupController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);

routes.post('/sessions', SessionController.store);

// Meetup Routes

routes.post(
  '/meetups',
  authMiddleware,
  upload.single('image'),
  MeetupController.createMeetup
);

routes.put(
  '/meetups/:meetupId',
  authMiddleware,
  upload.single('image'),
  MeetupController.editMeetup
);

export default routes;
