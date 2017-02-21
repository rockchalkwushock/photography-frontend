import mongoose, { Schema } from 'mongoose';

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