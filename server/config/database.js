import mongoose from 'mongoose';
import config from './config';

mongoose.Promise = global.Promise;

const { db: { uri } } = config;

mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

mongoose.connect(uri, { useNewUrlParser: true });

const database = mongoose.connection;

export default database;
