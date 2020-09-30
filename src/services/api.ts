import axios from 'axios';

const api = axios.create({
  baseURL: 'https://server-timeless.herokuapp.com',
  headers: {
    authorization: '',
  },
});

export default api;
