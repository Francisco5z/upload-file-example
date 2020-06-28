import { Router } from 'express';

import multer from 'multer';
import multerConfig from './config/multer';

import ImageControllers from './controllers/ImageControllers';

const routes = Router();

// List all users
routes.get('/users', ImageControllers.index);
// Create user
routes.post('/users', multer(multerConfig).single('image'), ImageControllers.create);

export default routes;