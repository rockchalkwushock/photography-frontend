import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import { collectionRoutes } from '../modules';
/**
 * middlewaresConfig(arg)
 * - @param {Function} app
 * - @returns
 */
export default app => {
  app.use(compression());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  // Server Routing
  app.use('/api/v1', [collectionRoutes]);
};
