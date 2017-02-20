import mongoose, { Schema } from 'mongoose';

/**
 * PortfolioSchema
 * - Database holds 4 unique collections of images.
 * - i.e. collection: 'family'
 */
const PorfolioSchema = new Schema({
  collection: [CollectionSchema]
});

export default mongoose.model('portfolio', PortfolioSchema);

/**
 * CollectionSchema
 * - Collection is a unique array holding the Photos of that type.
 * - i.e. [{ Photo1 }, { Photo2 }, { Photo3 }]
 */
const CollectionSchema = new Schema({
  // Declare a unique name for each collection.
  name: {
    required: true,
    type: String,
    unique: true
  },
  // This is the array of images.
  list: [{
    type: Schema.Types.ObjectId,
    ref: 'photos'
  }]

});

export default mongoose.model('collecitons', CollectionSchema);

/**
 * PhotoSchema
 * - The imageUrl.
 * - i.e. { url: 'https://myphoto.com', timestamp: 2017-20-02 }
 */
const PhotoSchema = new Schema({
  url: {
    required: true,
    type: String,
    unique: true
  }
}, { timestamps: true });

export default mongoose.model('photos', PhotoSchema);