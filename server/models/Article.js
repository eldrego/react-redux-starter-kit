import mongoose from 'mongoose';

const ArticlesSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  content: {
    type: String,
  },
});
mongoose.model('Articles', ArticlesSchema);

module.exports = mongoose.model('Articles');
