import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/database',
  { useNewUrlParser: true });
const database = mongoose.connection;

export default database;
