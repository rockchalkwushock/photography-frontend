import express from 'express';
import { join } from 'path';
import { dbConfig, middlewaresConfig } from './config';

const app = express();
const MODE = process.env.NODE_ENV;

const PORT = process.env.PORT || 3000;

middlewaresConfig(app);

// TODO: app.use('/api/v1', PostRoutes);

if (MODE !== 'production') {
  // development environment
  const mongoConf = 'mongodb://localhost/dev';
  dbConfig(mongoConf);
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
  const mongoConf = process.env.MONGODB || 'mongodb://localhost/prod';
  if (!mongoConf) {
    throw new Error('Error with Mongodb Process');
  } else {
    dbConfig(mongoConf);
  }
}

app.listen(PORT, err => {
  if (err) { return console.error(err); }
  console.log(`App running on port: ${PORT} in ${MODE} mode.`);
});
