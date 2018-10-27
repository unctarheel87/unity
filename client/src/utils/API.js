import axios from "axios";

export default {
  auth: (user) => {
    console.log(user)
    return axios.post('/login', user)
  },
  register: (user) => {
    console.log(user)
    return axios.post('/register', user)},
  stockSearch (ticker) {
    const API_KEY = 'NSUNV8LPVSSN0247'
    const url = 'https://www.alphavantage.co/query?' +
            'function=TIME_SERIES_DAILY' + 
            '&symbol=' + ticker +
            '&apikey=' + API_KEY +
            '&outputsize=full'
    return axios.get(url)
  }
};