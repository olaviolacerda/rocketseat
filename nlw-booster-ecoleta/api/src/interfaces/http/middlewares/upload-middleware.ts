import multer from 'multer';
import multerConfig from '../../../utils/multer';

export const uploadMiddleware = multer(multerConfig);