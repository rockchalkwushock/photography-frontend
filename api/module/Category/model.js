import mongoose, { Schema } from 'mongoose';

// CATEGORY SCHEMA
const categorySchema = new Schema({
  name: ['Travel', 'Wedding', 'Family', 'Portrait'],
  photo: [{
    type: Schema.Types.ObjectId,
    ref: 'photos'
  }]
});

// CATEGORY MODEL
export default mongoose.model('categories', categorySchema);
