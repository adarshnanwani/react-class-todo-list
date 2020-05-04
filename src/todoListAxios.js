import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://todo-list-ady.herokuapp.com/api/v1/',
});

export default instance;
