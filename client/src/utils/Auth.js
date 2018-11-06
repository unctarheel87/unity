import axios from "axios";

export const User = {
  getUser: () => {
    return axios.get('/client/user');
  },
  register: (user) => {
    console.log(user)
    return axios.post('/client/register', user)
  },
  login: (user) => {
    console.log(user)
    return axios.post('/client/login', user)
  },
  logout: () => {
    return axios.get('/client/logout');
  }
};

export const Advisor = {
    getUser: () => {
      return axios.get('/advisor/user');
    },
    register: (user) => {
      console.log(user)
      return axios.post('/advisor/register', user)
    },
    login: (user) => {
      console.log(user)
      return axios.post('/advisor/login', user)
    },
    logout: () => {
      return axios.get('/advisor/logout');
    }
}