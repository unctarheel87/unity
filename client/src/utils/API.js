import axios from "axios";
import { csv } from "d3-request";
import { timeParse } from "d3-time-format";

const stockSearch = (ticker, timeInterval) => {
  const API_KEY = 'NSUNV8LPVSSN0247'
  const url = 
    'https://www.alphavantage.co/query?' +
    'function=TIME_SERIES_INTRADAY' + 
    '&symbol=' + ticker +
    '&interval=' + timeInterval + 
    '&apikey=' + API_KEY +
    '&datatype=csv'
  
    return stockDataPromise(url)
}

function parseData(parse) {
  return function(d) {
    return {
      date: parse(d.timestamp),
      open: +d.open,
      high: +d.high,
      low: +d.low,
      close: +d.close,
      volume: +d.volume
    }
  }
};

const parseDate = timeParse("%Y-%m-%d %H:%M:%S");

function stockDataPromise(url) {
  return new Promise(function(resolve, reject) {
    csv(url, function(data) {
      resolve(data)
    })
  }) 
}

export default {
  getData: (ticker, timeInterval) => {
    const data = stockSearch(ticker, timeInterval)
      .then(response => {
        const arr = response
        const newArr = arr.map(parseData(parseDate))
        console.log(newArr)
        return newArr
    })
    return data
  },
  insertTicker: (ticker) => {
    return axios.post('/stocks', { ticker })
  },
  deleteStock: (id) => {
    return axios.delete('/stocks/' + id)
  },
  createMsg: (message, userId) => {
    axios.post('/messages', { message, userId })
    .then(response => console.log(response))
    .catch(err => console.log(err))
  },
  getWatchList: () => {
    axios.get('/stocks')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  },
  getAdvisors: () => {
    return axios.get('./advisor/advisors')
  },
  //api requests to https://www.iextrading.com
  getCompanyPrice: (ticker) => {
    return axios.get('https://api.iextrading.com/1.0/stock/' + ticker + '/price')
  },
  getCompanyInfo: (ticker) => {
    return axios.get('https://api.iextrading.com/1.0/stock/' + ticker + '/company')
  },
  getCompanyNews: (ticker) => {
    return axios.get('https://api.iextrading.com/1.0/stock/' + ticker + '/news/last/2')
  },
  getCompanyPeers: (ticker) => {
    return axios.get('https://api.iextrading.com/1.0/stock/' + ticker + '/peers')
  },
  getCompanyLogo: (ticker) => {
    return axios.get('https://api.iextrading.com/1.0/stock/' + ticker + '/logo')
  }
}