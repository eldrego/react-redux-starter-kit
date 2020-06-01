import Axios from 'axios';

const axios = Axios.create({
  baseURL: 'https://your-endpoints-url.com',
});

export default axios;
