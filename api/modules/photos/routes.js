import { Router } from 'express';
import { PhotoApi } from './controller';

const photoApi = new PhotoApi();
const routes = new Router();

routes.route('/collection/:name/:url').post(photoApi.createPhoto);

export default routes;
