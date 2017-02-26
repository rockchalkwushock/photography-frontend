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
  // This is the array of images.
  photos: []
});

/**
 * addPhoto(arg, arg2)
 * - @param {String} name
 * - @param {Object} image
 * - @return {Promise} saved Photo, updated array on Category.
 * - NOTE: Schema.statics allows for creating methods
 * - on the Schema class.
 */
CategorySchema.statics.addPhoto = async function (name, image) {
  // Find category 'name' & push the imageUrl to the key 'photos' array.
  const list = await this.findOneAndUpdate({ name }, { $push: { photos: image.url } });
  // Return the updated category.
  return list;
};

export default mongoose.model('categories', CategorySchema);
