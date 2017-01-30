import { Router } from 'express';
import * as CategoryController from './controller';

const routes = new Router();

routes.route('/library').get(CategoryController.fetchPhotos);

export default routes;
