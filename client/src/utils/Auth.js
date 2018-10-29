import axios from "axios";

export default {
  getUser: () => {
    return axios.get('/user');
  },
  register: (user) => {
    console.log(user)
    return axios.post('/register', user)
  },
  login: (user) => {
    console.log(user)
    return axios.post('/login', user)
  },
  logout: () => {
    return axios.get('/logout');
  },
};