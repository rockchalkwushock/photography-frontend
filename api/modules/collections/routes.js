import { Router } from 'express';
import * as collectionController from './controller';

const routes: Router = new Router();

routes.route('/collection').post(collectionController.createPost);
routes.route('/collection/:name').get(collectionController.fetchCollectionByName);

export default routes;
