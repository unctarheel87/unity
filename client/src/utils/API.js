import axios from "axios";
import { csv } from "d3-request";
import { timeParse } from "d3-time-format";

const stockSearch = (ticker) => {
  const API_KEY = 'NSUNV8LPVSSN0247'
  const url = 
    'https://www.alphavantage.co/query?' +
    'function=TIME_SERIES_INTRADAY' + 
    '&symbol=' + ticker +
    '&interval=5min' + 
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
  getData: (ticker) => {
    const data = stockSearch(ticker)
      .then(response => {
        const arr = response
        const newArr = arr.map(parseData(parseDate))
        console.log(newArr)
        return newArr
    })
    return data
  },
  insertTicker: (ticker) => {
    axios.post('/stocks', {ticker: ticker})
      .then(response => console.log(response))
      .catch(err => console.log(err))
  },
  getWatchList: () => {
    axios.get('/stocks')
    .then(response => console.log(response))
    .catch(err => console.log(err))
  },
  getCompanyInfo: (ticker) => {
    axios.get('https://api.iextrading.com/1.0/stock/' + ticker + '/company')
      .then(response => console.log(response))
      .catch(err => console.log(err));
  },
  getCompanyNews: (ticker) => {
    axios.get('https://api.iextrading.com/1.0/stock/' + ticker + '/news')
      .then(response => console.log(response))
      .catch(err => console.log(err));
  }
}