import mongoose from 'mongoose';

export const schema = {
  title: {
    type: String,
  },
  content: {
    type: String,
  },
};

const RecordsSchema = new mongoose.Schema(schema);
export const Record = mongoose.model('Record', RecordsSchema);
