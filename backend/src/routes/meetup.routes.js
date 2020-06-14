import { Router } from 'express';
import multer from 'multer';

import MeetupController from '../controllers/MeetupController';

import multerConfig from '../config/multer';

import authMiddleware from '../middlewares/auth';

const routes = Router();
const upload = multer(multerConfig);

routes.post(
  '/',
  authMiddleware,
  upload.single('image'),
  MeetupController.store
);
routes.get('/:id', authMiddleware, MeetupController.show);
routes.put(
  '/:id',
  authMiddleware,
  upload.single('image'),
  MeetupController.update
);

export default routes;
