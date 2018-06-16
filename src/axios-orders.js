import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burger-builder-e7cb3.firebaseio.com/'
});

export default instance;
