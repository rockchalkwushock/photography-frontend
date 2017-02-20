import express from 'express';
import { join } from 'path';
import { dbConfig, middlewaresConfig } from './config';

const app = express();

const PORT = process.env.PORT || 3000;

middlewaresConfig(app);

// TODO: app.use('/api/v1', PostRoutes);

if (process.env.NODE_ENV !== 'production') {
  // development environment
  const mongoConf = 'mongodb://localhost/dev-db';
  dbConfig(mongoConf);
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
  const mongoConf = process.env.MONGODB;
  if (!mongoConf) {
    throw new Error('Error with Mongodb Process');
  } else {
    dbConfig(mongoConf);
  }
}

app.listen(PORT, err => {
  if (err) { return console.error(err); }
  console.log(`App running to port: ${PORT}`);
});
