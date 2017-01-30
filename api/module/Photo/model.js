import mongoose, { Schema } from 'mongoose';

// PHOTO SCHEMA
const photoSchema = new Schema({
  collection: String, // travel, wedding, family, portrait
  url: String
}, { timestamps: true });

// PHOTO MODEL
export default mongoose.model('photos', photoSchema);
