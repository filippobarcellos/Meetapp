import multer from 'multer';
import crypto from 'crypto';
import { resolve } from 'path';

const uploadsFolder = resolve(__dirname, '..', '..', 'uploads');

export default {
  directory: uploadsFolder,

  storage: multer.diskStorage({
    destination: uploadsFolder,
    filename(request, file, callback) {
      const fileHash = crypto.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
