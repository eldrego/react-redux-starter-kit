import mongoose from 'mongoose';

require('dotenv').config();

mongoose.connect(process.env.DB,
  { useNewUrlParser: true });
const database = mongoose.connection;

export default database;
