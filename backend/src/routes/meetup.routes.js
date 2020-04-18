import { Router } from 'express';
import multer from 'multer';

import MeetupController from '../controllers/MeetupController';

import multerConfig from '../config/multer';

import authMiddleware from '../middlewares/auth';

const routes = Router();
const upload = multer(multerConfig);

routes.get('/', authMiddleware, MeetupController.getAllMeetups);
routes.post(
  '/',
  authMiddleware,
  upload.single('image'),
  MeetupController.createMeetup
);
routes.put(
  '/:meetupId',
  authMiddleware,
  upload.single('image'),
  MeetupController.editMeetup
);
routes.delete('/:meetupId', authMiddleware, MeetupController.deleteMeetup);

export default routes;
