import mongoose from 'mongoose';

const RecordsSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});
mongoose.model('Records', RecordsSchema);

module.exports = mongoose.model('Records');
