import crypto from 'crypto';
import { Request } from 'express';
import { diskStorage } from 'multer';
import path from 'path';
import { MulterFile } from '../types';

export default {
  storage: diskStorage({
    destination: path.resolve(__dirname, '..', '..', 'uploads'),
    filename: (req: Request, file: MulterFile, callback: CallableFunction) => {
      const hash = crypto.randomBytes(6).toString('hex');

      const fileName = `${hash}-${file.originalname}`;

      callback(null, fileName);
    }
  })
}