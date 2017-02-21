import { Router } from 'express';
import * as collectionController from './controller';

const routes = new Router();

routes.route('/collection/:name').get(collectionController.fetchCollectionByName);

export default routes;
