import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const photoSchema = new Schema({
  url: { type: String, required: false },
  description: { type: String, required: false },
  date: { type: Date, required: false},
}, {
  timestamps: false,
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = Photo;
