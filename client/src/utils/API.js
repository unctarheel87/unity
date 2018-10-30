import axios from "axios";
// import { tsvParse, csvParse } from  "d3-dsv";
import { tsvParse } from  "d3-dsv";
import { timeParse } from "d3-time-format";

export default {
  auth: (user) => {
    console.log(user)
    return axios.post('/login', user)
  },
  register: (user) => {
    console.log(user)
    return axios.post('/register', user)
  },
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

function parseData(parse) {
	return function(d) {
		d.date = parse(d.date);
		d.open = +d.open;
		d.high = +d.high;
		d.low = +d.low;
		d.close = +d.close;
		d.volume = +d.volume;

		return d;
	};
}

const parseDate = timeParse("%Y-%m-%d");

export function getData() {
	const promiseMSFT = fetch("https://cdn.rawgit.com/rrag/react-stockcharts/master/docs/data/MSFT.tsv")
		.then(response => response.text())
		.then(data => tsvParse(data, parseData(parseDate)))
	return promiseMSFT;
}
