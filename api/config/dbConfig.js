import mongoose from 'mongoose';

/**
 * dbConfig(conf)
 * - @param conf: string
 * - connects app to MongoDB.
 * - throw error if connection issue.
 */
export default (conf) => {
  mongoose.Promise = global.Promise;
  mongoose.connect(conf);
  mongoose.connection
    .once('open', () => console.log(`Connected to MongoDb: ${conf}`)) // eslint-disable-line
    .on('error', err => console.warn('Warning', err)); // eslint-disable-line
};
