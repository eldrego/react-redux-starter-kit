import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/journal',
  { useNewUrlParser: true });
const database = mongoose.connection;

export default database;
