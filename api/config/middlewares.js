import bodyParser from 'body-parser';
import morgan from 'morgan';
import compression from 'compression';
import cors from 'cors';
import { PORT } from '../index';
import { categoryRoutes, photoRoutes } from '../modules';
/**
 * middlewaresConfig(arg)
 * - @param {Class} app
 * - @return {Class} app
 */
export default app => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', PORT);
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'); // eslint-disable-line
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
  app.use((err, req, res, next) => {
    if (res.headersSent) next(err);
    res.status(err.status || PORT).render('500');
  });
  app.use(compression());
  app.use(cors());
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  // Server Routing
  app.use('/api/v1', [categoryRoutes, photoRoutes]);
};
