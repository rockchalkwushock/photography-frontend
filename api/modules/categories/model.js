import mongoose, { Schema } from 'mongoose';

/**
 * CategorySchema
 */
const CategorySchema = new Schema({
  // Declare a unique name for each category.
  name: {
    required: true,
    type: String,
    unique: true
  },
  // This is the array of imageUrls.
  photos: []
});


export default mongoose.model('categories', CategorySchema);
