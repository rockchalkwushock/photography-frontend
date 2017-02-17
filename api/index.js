import express from 'express';
import { join } from 'path';
import { middlewaresConfig } from './config';

const app = express();

const PORT = process.env.PORT || 3000;

middlewaresConfig(app);

// TODO: app.use('/api/v1', PostRoutes);

if (process.env.NODE_ENV !== 'production') {
  // development environment
} else {
  app.use(express.static('dist'));
  app.get('*', (req, res) => {
    res.sendFile(join(__dirname, '../dist/index.html'));
  });
}

app.listen(PORT, err => {
  if (err) { return console.error(err); }
  console.log(`App running to port: ${PORT}`);
});
