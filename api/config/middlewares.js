import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import compression from 'compression';
import { PORT } from '../';
import { categoryRoutes } from '../module';

export default app => {
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', PORT);
    res.header('Access-Control-Allow-Methods', 'GET');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials'); // eslint-disable-line
    res.header('Access-Control-Allow-Credentials', 'true');
    next();
  });
  app.use((err, req, res, next) => {
    if (res.headersSent) next(err);
    res.status(err.status || PORT).render('500');
  });
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(morgan('dev'));
  app.use(cors());
  app.use(compression());
  app.use('/api/v1', [categoryRoutes]);
};
