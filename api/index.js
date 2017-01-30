import express from 'express';
import { Server } from 'http';
import path from 'path';
import { dbConfig, middlewaresConfig } from './config';

const app = express();

// ENVIRONMENT VARIABLES
const MODE = process.env.NODE_ENV;
export const PORT = process.env.PORT || 3000;
let mongoConf;

// MIDDLEWARE
middlewaresConfig(app);

if (MODE === 'production') {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
  mongoConf = process.env.MONGO_URI;
} else {
  mongoConf = 'mongodb://localhost/photography-frontend-dev';
}

// DATABASE
dbConfig(mongoConf);

// EXPRESS SERVER
export const server = Server(app);
server.listen(PORT, err => {
  if (err) { return console.error(err); }
  console.log(`App running to port: ${PORT} in ${MODE}`);
});
