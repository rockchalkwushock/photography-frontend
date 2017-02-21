import { Router } from 'express';
import { CollectionApi } from './controller';

const collectionApi = new CollectionApi();
const routes = new Router();

routes.route('/collection/:name').post(collectionApi.createCollection);
routes.route('/collection/:name').get(collectionApi.fetchCollectionByName);

export default routes;
