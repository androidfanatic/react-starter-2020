import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

const client = axios.create({
  //all axios can be used, shown in axios documentation
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
});

export default axiosMiddleware(client);
