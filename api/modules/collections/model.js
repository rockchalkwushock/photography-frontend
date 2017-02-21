import mongoose, { Schema } from 'mongoose';

/**
 * CollectionSchema
 * - Collection is a unique array holding the Photos of that type.
 * - i.e. [{ Photo1 }, { Photo2 }, { Photo3 }]
 */
const CollectionSchema = new Schema({
  // Declare a unique name for each collection.
  category: {
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
