import axios from 'axios';
import { ADD_RECORD, FETCH_RECORD } from '../constants/actionTypes';


export const fetchAllRecords = records => ({
  type: FETCH_RECORD,
  payload: records
});

export const fetchRecords = () => (dispatch) => {
  axios.get('/api/v1/all')
    .then((response) => {
      dispatch(fetchAllRecords(response.data.articles));
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
    // always executed
    });
};

export const addNewRecord = record => ({
  type: ADD_RECORD,
  payload: record
});

export const addRecord = newRecord => (dispatch) => {
  axios.post('/api/v1/create', newRecord)
    .then((response) => {
      dispatch(addNewRecord(response.data.record));
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {
    // always executed
    });
};
