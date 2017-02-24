import { Router } from 'express';
import { CategoryApi } from './controller';

const collectionApi = new CategoryApi();
const routes = new Router();

routes.route('/category').get(collectionApi.fetchCategories);
routes.route('/category').post(collectionApi.createCategory);
routes.route('/category/:name').get(collectionApi.fetchCategoryByName);
routes.route('/category/:name').post(collectionApi.addPhotoToCategory);

export default routes;
