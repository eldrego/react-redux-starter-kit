import { recordConstants } from '../constants';
import api from '../utils/api';

export const fetchRecords = records => ({
  type: recordConstants.FETCH_RECORD,
  payload: records
});


export const getAllRecords = () => (dispatch) => {
  api.get('/record')
    .then((response) => {
      dispatch(fetchRecords(response.data.records));
    })
    .catch((error) => {
      console.error(`Error : ${error}`);
    });
};
