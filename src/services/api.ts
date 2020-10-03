import axios from 'axios';

const api = axios.create({
  baseURL: 'https://server-timeless.herokuapp.com',
});

export default api;
