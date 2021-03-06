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
routes.get('/', MeetupController.index);
routes.put(
  '/:id',
  authMiddleware,
  upload.single('image'),
  MeetupController.update
);
routes.delete('/:id', authMiddleware, MeetupController.delete);

export default routes;
