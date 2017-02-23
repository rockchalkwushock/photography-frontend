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

/**
 * addPhoto(arg1, arg2)
 * - @param {String} name
 * - @param {String} imageUrl
 * - @return {Promise} saved Photo, updated array on Category.
 * - NOTE: Schema.statics allows for creating methods
 * - on the Schema class.
 */
CategorySchema.statics.addPhoto = async function (name, imageUrl) {
  // Import Photo Model.
  const Photo = mongoose.model('photos');
  // Create a new instance of Photo.
  const photo = await new Photo({ url: imageUrl, category: name });
  // Find the corresponding category & push the new photo to the list key/value.
  const list = await this.findOneAndUpdate(name, { $push: { list: photo } });
  // Return a saved photo and update the array 'list' on the specified category.
  return {
    photo: await photo.save(),
    list
  };
};

export default mongoose.model('categories', CategorySchema);
