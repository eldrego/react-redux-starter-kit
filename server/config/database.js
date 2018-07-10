import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/journal');
const database = mongoose.connection;

export default database;
