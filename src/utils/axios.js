import Axios from 'axios';

const baseURL = process.env.REACT_APP_API_DEV;
const axios = Axios.create({
  baseURL,
});

export default axios;
