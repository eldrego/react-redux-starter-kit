import { ADD_RECORD } from '../constants/actionTypes';

const addRecord = record => ({ type: ADD_RECORD, payload: record });

module.exports = {
  addRecord
};
