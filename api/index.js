import express from 'express';
import { Server } from 'http';
import path from 'path';
import { middlewaresConfig } from './config';

const app = express();

// ENVIRONMENT VARIABLES
const MODE = process.env.NODE_ENV;
export const PORT = process.env.PORT || 3000;

// MIDDLEWARE
middlewaresConfig(app);

app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// EXPRESS SERVER
export const server = Server(app);
server.listen(PORT, err => {
  if (err) { return console.error(err); }
  console.log(`App running to port: ${PORT} in ${MODE}`);
});
