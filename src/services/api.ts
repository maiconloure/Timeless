import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
  // baseURL: 'https://server-timeless.herokuapp.com',
});

export default api;
