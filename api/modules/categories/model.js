import mongoose, { Schema } from 'mongoose';

/**
 * CategorySchema
 * - Category is a unique array holding the Photos of that type.
 * - i.e. [{ Photo1 }, { Photo2 }, { Photo3 }]
 */
const CategorySchema = new Schema({
  // Declare a unique name for each category.
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

export default mongoose.model('categories', CategorySchema);
